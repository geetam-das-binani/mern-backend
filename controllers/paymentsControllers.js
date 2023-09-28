const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayments = async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Ecommerce",
      },
    });
    res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Payment processing failed",
    });
  }
};

exports.sendStripeApiKey = async (req, res, next) => {
  res.status(200).json({
    stripeApikey: process.env.STRIPE_API_KEY,
  });
};
