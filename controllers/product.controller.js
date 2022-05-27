const db = require("../models");
const path = require("path");
const Product = db.product;
const Category = db.category;
const SubCategory = db.sub_category;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  // var fs = require("fs");
  // var imageData = fs.writeFileSync('', req.body.image);
  // console.log("req.files", req.files);
  const image = req.files.image;
  const filename = image.md5 + "." + image.mimetype.split("/")[1];
  image.mv(path.join(__dirname, "../images/", filename));

  // return res.end("OK");

  // Create a Product
  const product = {
    image: filename,
    description: req.body.description,
    price: req.body.price,
    categoryId: req.body.categoryId,
  };

  // Save Product in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
exports.findByCategoryId = (req, res) => {
  const categoryId = req.params.categoryId;

  Product.findAll({
    where : {
      categoryId
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving product.",
      });
    });
};
// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving product.",
      });
    });
};
// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id,
      });
    });
};
// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id=" + id,
      });
    });
};
// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id,
      });
    });
};
