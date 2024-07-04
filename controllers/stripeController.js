const stripe = require("stripe")(process.env.STRIPE_SECRET_API_KEY);

const stripeController = async (req, res) => {
  console.log(req.body);
  const { purchase, total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {
    // you should always verify the amount sent from frontend with the backend
    // normally use the ids & db to calculate the exact total
    // currency amount is in pence or cents as that is what stripe expects
    return total_amount + shipping_fee;
  };
  const total = calculateOrderAmount();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });
  console.log(paymentIntent);

  res.json({ total, clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
