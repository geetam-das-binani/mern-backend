const ErrorHandler = require("../utils/errorhandler");
const User = require("../model/userSchema");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const cloudinary = require("cloudinary");

// Register user
exports.registerUser = async (req, res, next) => {
  const mycloud = await cloudinary.uploader.upload(req.body.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: mycloud.public_id,
        url: mycloud.secure_url,
      },
    });
    sendToken(user, 201, res);
  } catch (e) {
    res.status(404).json({
      success: false,
      errorMessage: ` ${e.message.split(' ').slice(4,12).join(' ')}`,
    
    });
  }
};




// LOGIN User

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //  checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter email and password", 400));
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

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/${resetToken}`;

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
  const user = await User.findById(req.user._id).select("+password");
  const ispasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!ispasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }
  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Passwod does not match", 400));
  }

  user.password = req.body.newPassword;
  await user.save();
  sendToken(user, 200, res);
};

// Update user profile

exports.updateUser = async (req, res, next) => {
  // we will add cloudinary later

  const user = await User.findOne({ _id: req.user._id });
  if (!user) {
    return next(new ErrorHandler("User not found", 400));
  }
  user.email = req.body.email;
  user.name = req.body.name;
  await user.save();

  res.status(200).json({
    success: true,
    message: "User updated",
    user,
  });
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
      message: "No Users present for now",
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

  user = await User.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    message: "User deleted successfully",
  });
};
