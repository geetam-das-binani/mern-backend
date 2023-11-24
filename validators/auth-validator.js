const z = require("zod");

// creating an object schema
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W\s])(?=.{8,})/;

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(30, { message: "Name must not  be more than 30 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email" })
    .min(10, { message: "Email must be atleast 10 characters" })
    .max(50, { message: "Email must not be more than 50 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be atleast 8 characters" })
    .max(100, { message: "Password must not be more than 100 characters" })
    .refine((data) => passwordRegex.test(data), {
      message:
        `Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character or whitespace, and be at least 8 characters long.`,
    }),

  phoneNumber: z
    .string({ required_error: "Phone Number  is required" })
    .min(10, { message: "Phone must be atleast 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
});

module.exports = registerSchema;
