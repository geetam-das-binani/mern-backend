const express = require("express");

const {
  registerUser,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateUser,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
  sendOtp,
  verifyOtp,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const validate = require("../middleware/validate.js");
const registerSchema = require("../validators/auth-validator.js");

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", loginUser);
router.post("/sendotp", sendOtp);
router.post("/verifyOtp", verifyOtp);
router.post("/password/forgot", forgotPassword);
router.get("/logout", logOut);
router.post("/api/v1/password/reset/:token", resetPassword);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.post("/password/update", isAuthenticatedUser, updatePassword);
router.post("/me/update", isAuthenticatedUser, updateUser);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUsers
);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .post(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
