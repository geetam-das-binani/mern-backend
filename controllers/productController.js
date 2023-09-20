const Product = require("../model/productSchema");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");

// create product --Admin
exports.createProduct = async (req, res, next) => {
  try {
    req.body.user = req.user._id;
    console.log(req.user._id);
    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      product,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      msg: e.message,
    });
  }
};

// get all product

exports.getAllProducts = async (req, res, next) => {
  const resultsPerPage = 8;
  const productCounts = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

  const fProducts = await apiFeature.query;
  let filteredProductsCount = fProducts.length;

  let apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);
  let products = await apiFeatures.query;

  if (!products) {
    return next(new ErrorHandler("Products haven't found", 404));
  }
  res.status(200).json({
    success: true,
    products,
    productCounts,
    resultsPerPage,
    filteredProductsCount,
  });
};

// get product details
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Product found Successfully",
    product,
  });
};

// update a product --Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// Delete product --Admin
exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorHandler("Product not deleted as it is not found", 404)
    );
  }
  product = await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: " Product Deleted Successfully",
  });
};

// create new review and update the review user
exports.createProductReview = async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        (rev.rating = rating), (rev.comment = comment);
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = product.reviews.reduce((a, b) => a + b.rating, 0);
  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
};

// get a product reviews --- user

exports.getProductReviews = async (req, res, next) => {
  try {
    const product = await Product.findById(req.query.id);
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
};

// Delete Review
exports.deleteReview = async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Products haven't found", 404));
  }
  const review = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.Id
  );
  let avg = review.reduce((a, b) => a + b.rating, 0);
  product.reviews = review;
  product.ratings = avg / review.length;
  product.numOfReviews = review.length;

  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    message: "Review deleted",
  });
};
