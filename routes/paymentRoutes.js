const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {processPayments, sendStripeApiKey}=require('../controllers/paymentsControllers')





router.post('/payment/process',isAuthenticatedUser,processPayments)
router.get('/stripeApiKey',sendStripeApiKey)

module.exports=router