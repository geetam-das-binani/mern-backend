const ErrorHandler = require("../utils/errorhandler");
const User = require("../model/userSchema");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const cloudinary = require("cloudinary");
const crypto = require("crypto");

// Register user

exports.registerUser = async (req, res, next) => {
  if (req.body.avatar === "") {
    return next(new ErrorHandler("Avatar is required", 400));
  }
  const { name, email, password, phoneNumber } = req.body;

  const isExisteduser = await User.findOne({ $or: [{ email }, { name }] });
  if (isExisteduser) {
    return next(new ErrorHandler("User already exists", 400));
  }
  const mycloud = await cloudinary.uploader.upload(req.body.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });
  if (!mycloud) {
    return next(
      new ErrorHandler(
        "Something went wrong while uploading.Please Try Again.",
        400
      )
    );
  }
  try {
    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      avatar: {
        public_id: mycloud.public_id,
        url: mycloud.secure_url,
      },
    });
    sendToken(user, 201, res);
  } catch (e) {
    res.status(404).json({
      success: false,
      errorMessage: ` ${e.message.split(" ").slice(4, 12).join(" ")}`,
    });
  }
};

// LOGIN User

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //  checking if user has given password
  if (!password) {
    return next(new ErrorHandler("Password is required", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const ispasswordMatched = await user.comparePassword(password);

  if (!ispasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
};

// login using otp

exports.sendOtp = async (req, res, next) => {
  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (!user) {
      return next(new ErrorHandler("Phone Number does not exist", 401));
    }

    await user.saveOtp();
    await user.save();

    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log(e);
    return next(new ErrorHandler(e.message, 500));
  }
};

exports.verifyOtp = async (req, res, next) => {
  const user = await User.findOne({
    resetOtpExpire: { $gt: Date.now() },
    otp: req.body.otp,
  });
  if (!user) {
    return next(new ErrorHandler("Invalid Otp", 401));
  }

  user.otp = undefined;
  user.resetOtpExpire = undefined;
  await user.save();
  sendToken(user, 200, res);
};

// logout user

exports.logOut = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Loged Out",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      errorMessage: e.message,
    });
  }
};

// Forgot password
exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  //Get resetPassword Token
  const resetToken = user.getPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${process.env.FRONTEND_URL}/api/v1/password/reset/${resetToken}`;
  const message = ` Your Password reset token is :- \n\n  ${resetPasswordUrl}
  \n 
  if you have not requested this email then , please ignore it.
  `;

  try {
    await sendEmail({
      email: user.email,
      subject: "E-commerce Password Recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (e) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(e.message, 500));
  }
};

// Reset password
exports.resetPassword = async (req, res, next) => {
  //creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });
  if (!user) {
    return next(
      new ErrorHandler(
        "Reset password token is invalid or has been  expired",
        400
      )
    );
  }
  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler("Password and confrim password should match", 400)
    );
  }
  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;
  await user.save();

  sendToken(user, 200, res);
};

//  Get User Detail
exports.getUserDetails = async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
};
//  Change User password
exports.updatePassword = async (req, res, next) => {
  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W\s])(?=.{8,})/;
  const user = await User.findById(req.user._id).select("+password");

  const ispasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!ispasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }
  if (req.body.newPassword.length < 8 || req.body.confirmPassword.length < 8) {
    return next(
      new ErrorHandler("Password must be more than 8 characters", 400)
    );
  }
  if (!passwordRegex.test(req.body.newPassword)) {
    return next(
      new ErrorHandler(
        `Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character or whitespace, and be at least 8 characters long.`,
        400
      )
    );
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Passwords does not match", 400));
  }

  user.password = req.body.newPassword;
  await user.save();
  sendToken(user, 200, res);
};

// Update user profile

exports.updateUser = async (req, res, next) => {
  try {
    let user = await User.findById({ _id: req.user._id });
    if (!user) {
      return next(new ErrorHandler("User not found", 400));
    }
    const newuserData = {
      name: req.body.name,
      email: req.body.email,
    };

    if (req.body.avatar !== "") {
      const user = await User.findById({ _id: req.user._id });
      const inputId = user.avatar.public_id;

      await cloudinary.uploader.destroy(inputId);
      const mycloud = await cloudinary.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
      });

      newuserData.avatar = {
        public_id: mycloud.public_id,
        url: mycloud.secure_url,
      };
    }
    user = await User.updateOne(
      { _id: req.user._id },
      { $set: newuserData },
      { runValidators: true, validateBeforeSave: true }
    );

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      errorMessage: ` ${e.message.slice(25)}`,
    });
  }
};

// Get all users (admin want to see)

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      users,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      errorMessage: "No Users present for now",
    });
  }
};

// get single user (admin want to see)
exports.getSingleUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`user not found with id-${req.params.id}`, 401)
    );
  }
  res.status(200).json({
    user,
  });
};

// update user role only admin can do
exports.updateUserRole = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 400));
  }
  user.email = req.body.email;
  user.name = req.body.name;
  user.role = req.body.role;
  await user.save();

  res.status(200).json({
    success: true,
    message: "User updated",
    user,
  });
};

// Delete user only admin can do
exports.deleteUser = async (req, res, next) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User not found with id-${req.params.id}`, 400)
    );
  }
  const inputId = user.avatar.public_id;

  await cloudinary.uploader.destroy(inputId);

  user = await User.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};
