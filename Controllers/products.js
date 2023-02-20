const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  // Product.fetchAll((products) => {
  //   res.json({ products: products });
  // });
  res.json("Add product successful!");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.json({ products: products });
  });
};
