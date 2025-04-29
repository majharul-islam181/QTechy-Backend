const Product = require("../models/product.model");

// Create a product
const createProduct = async (req, res) => {
  try {
    const { name, currentPrice, offerPrice, rating, numberOfRatings, image } = req.body;

    if (!name || !currentPrice || !offerPrice || !image) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const offerPercentage = ((currentPrice - offerPrice) / currentPrice) * 100;

    const product = await Product.create({
      name,
      currentPrice,
      offerPrice,
      offerPercentage: offerPercentage.toFixed(2),
      rating: rating || 0,
      numberOfRatings: numberOfRatings || 0,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all products with pagination, search, sort
const getProducts = async (req, res) => {
  try {
    const { search = "", sortBy = "createdAt", sortOrder = "desc" } = req.query;

    const query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const sortOptions = {};

    if (sortBy === "price") {
      sortOptions.currentPrice = sortOrder === "asc" ? 1 : -1;
    } else if (sortBy === "rating") {
      sortOptions.rating = sortOrder === "asc" ? 1 : -1;
    } else {
      sortOptions.createdAt = sortOrder === "asc" ? 1 : -1;
    }

    const products = await Product.find(query).sort(sortOptions);

    res.json({
      products,
      total: products.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
};

module.exports = {
  createProduct,
  getProducts,
};
