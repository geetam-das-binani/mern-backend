const Order = require("../model/orderSchema");
const Product = require("../model/productSchema");
const User = require("../model/userSchema");
const ErrorHandler = require("../utils/errorhandler");

// create new order
exports.newOrder = async (req, res, next) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo: {
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        id: paymentInfo.id,
        status: paymentInfo.status,
      },

      user: req.user._id,
    });
    res.status(201).json({
      success: true,
      order,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      errorMessage: e.message,
    });
  }
};

// get single order details admin user
exports.getSingleOrderDetails = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    order,
  });
};

// get logged in user orders
exports.myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
};
// get all orders ---admin

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    const totalAmount = orders.reduce(
      (a, b) => a + b.paymentInfo.totalPrice,
      0
    );
    res.status(200).json({
      success: true,
      totalAmount,
      orders,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      errorMessage: "No orders found",
    });
  }
};

// update order status ---admin

exports.updateOrder = async (req, res, next) => {
  
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }
  if (order.paymentInfo.orderStatus === "Delivered") {
    return next(
      new ErrorHandler("You have already delievered this order", 404)
    );
  }
  if (req.body.status === "Shipped") {
    order.orderItems.forEach(
      async (order) => await updateStock(order.product, order.quantity)
    );
  }

  order.paymentInfo.orderStatus = req.body.status;
  if (req.body.status === "Delivered") {
    order.paymentInfo.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
};

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.Stock = product.Stock - quantity;
  await product.save({ validateBeforeSave: false });
}
 
// delete order ---admin

exports.deleteOrder = async (req, res, next) => {
  let order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order not found", 404));
  }
  order = await order.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
  });
};

