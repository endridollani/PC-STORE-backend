const db = require("../models");
const Category = db.category;
const SubCategory = db.sub_category;

// Create and Save a new Category
exports.create = (req, res) => {
  console.log('req', req.body)
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
  
    // Create a Product
    const category = {
      name: req.body.name,
    };
    // Save Product in the database
    Category.create(category)
      .then((data) => {
        // res.send(data);
        // res.set('Location', 'http://localhost:8081');
        res.end('Kategoria u shtua me suskses, id:' + data.id)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Category.",
        });
      });
  };
  // Retrieve all Products from the database.
  exports.findAll = (req, res) => {
    Category.findAll({
      include: SubCategory
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Category.",
        });
      });
  };
  // Find a single Product with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
    Category.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Category with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Category with id=" + id,
        });
      });
  };
  // Update a Product by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Category was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Category with id=" + id,
        });
      });
  };
  // Delete a Product with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
    Category.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Category with id=" + id,
        });
      });
  };