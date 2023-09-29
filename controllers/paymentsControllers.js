
const stripe = require("stripe");




exports.processPayments = async (req, res, next) => {

  try {
    const myPayment = await stripe(process.env.STRIPE_SECRET_KEY).paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
     

      metadata: {
        company: "Ecommerce",
      },
    });
    console.log(myPayment.client_secret, "secret");
    return res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
   
    res.status(500).json({
      
      success: false,
      message: error.message,
    });
  }
};

exports.sendStripeApiKey = async (req, res, next) => {
  res.status(200).json({
    stripeApikey: process.env.STRIPE_API_KEY,
  });
};
