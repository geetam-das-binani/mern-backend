const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
const crypto = require("crypto");
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.TWILO_AUTH_KEY;
const client = require("twilio")(accountSid, authToken);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your Name"],
    maxLength: [30, "Name Cannot exceed 30"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your email "],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your password "],
    minLength: [8, "Password should be more than 8 characters"],
    select: false,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: { 
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  otp: Number,
  resetOtpExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRE,
  });
};
// password compare
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating password reset token
userSchema.methods.getPasswordResetToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};
userSchema.methods.saveOtp = async function () {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }

   await client.messages.create({
    body: `Your  login Otp is ${otp}.Valid for 10 minutes`,
    from: "+12512902957",
    to: `+91${this.phoneNumber}`,
  });
  
  this.otp = otp;
  this.resetOtpExpire = Date.now() + 10 * 60 * 1000;

  return Promise.resolve();
};

module.exports = mongoose.model("user", userSchema);
