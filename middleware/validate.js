const ErrorHandler = require("../utils/errorhandler");

const validate = (registerSchema) => async (req, res, next) => {
  try {
    const parseBody = await registerSchema.parseAsync(req.body);

    req.body = { ...parseBody, avatar: req.body.avatar };
    next();
  } catch (err) {
    const message = err.errors[0].message;
    next(new ErrorHandler(message, 403));
  }
};

module.exports = validate;
 