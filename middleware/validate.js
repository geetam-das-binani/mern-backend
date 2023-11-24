const ErrorHandler = require("../utils/errorhandler");

exports.validateRegister = (registerSchema) => async (req, res, next) => {
  try {
    const parseBody = await registerSchema.parseAsync(req.body);

    req.body = { ...parseBody, avatar: req.body.avatar };
    next();
  } catch (err) {
    const message = err.errors[0].message;
    next(new ErrorHandler(message, 403));
  }
};
exports.validateLogin = (loginSchema) => async (req, res, next) => {
  try {
    const parseBody = await loginSchema.parseAsync(req.body);

    req.body = {...parseBody,password:req.body.password}
    next();
  } catch (err) {
    const message = err.errors[0].message;
    next(new ErrorHandler(message, 403));
  }
};
