const Product = require("../model/productSchema");
const ErrorHandler = require("../utils/errorhandler");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
// create product --Admin
exports.createProduct = async (req, res, next) => {
  try {
    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
    req.body.user = req.user._id;

    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      product,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      errorMessage: e.message,
    });
  }
};

// get all product

exports.getAllProducts = async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.messasge,
    });
  }
};

// get all products Admin
exports.getAdminAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.messasge,
    });
  }
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

  // images start here
  let images = [];

  if (typeof req.body.images === "string" && req.body.images !== "") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // delete image from cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];
    // add images to cloudinary
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
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
  // deleting images from cloudinary
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.uploader.destroy(product.images[i].public_id);
  }

  product = await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: " Product Deleted Successfully",
  });
};

// create new review and update the review user
exports.createProductReview = async (req, res, next) => {
  try {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      avatar: req.user.avatar.url,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
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
      errorMessage: "Product not found",
    });
  }
};

// Delete Review Admin
exports.deleteReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.query.productId);

    if (!product) {
      return next(
        new ErrorHandler("Review haven't found.No Such Product", 400)
      );
    }

    const review = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.Id.toString()
    );
  

    let avg = review.reduce((a, b) => a + b.rating, 0);
    product.reviews = review;

    if (review.length === 0) {
      product.ratings = 0;
    } else {
      product.ratings = avg / review.length;
    }

    product.numOfReviews = review.length;

    await product.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      errorMessage: "Unable to Delete Review",
    });
  }
};

// delete  review user

exports.deleteUserReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.query.productId);

    if (!product) {
      return next(
        new ErrorHandler("Review haven't found.No Such Product", 400)
      );
    }

    const review = product.reviews.filter(
      (rev) => rev.user.toString() !== req.user._id.toString()
    );
    
    if (review.length === 0) return next(new ErrorHandler("No Review Found", 400));
    
    let avg = review.reduce((a, b) => a + b.rating, 0);
    product.reviews = review;

    if (review.length === 0) {
      product.ratings = 0;
    } else {
      product.ratings = avg / review.length;
    }

    product.numOfReviews = review.length;

    await product.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      errorMessage: "Unable to Delete Review",
    });
  }
};
