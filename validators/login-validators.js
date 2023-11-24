const z = require("zod");

exports.loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email" })
    .min(10, { message: "Email must be atleast 10 characters" })
    .max(50, { message: "Email must not be more than 50 characters" }),
 
});
