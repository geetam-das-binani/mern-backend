
// creating token and saving in cookie 
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookies
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true, // Set to true for HTTPS-only cookies
    sameSite: 'None', // Important for cross-origin requests
  };
  res.status(statusCode).cookie('token',token,options).json({
    success:true,
    user,
    token
  })
};
module.exports=sendToken