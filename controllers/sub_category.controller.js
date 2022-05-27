const db = require("../models");
const SubCategory = db.sub_category;

// Create and Save a new SubCategory
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.categoryId) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
  
    // Create a Product
    const subCategory = {
      name: req.body.name,
      categoryId: req.body.categoryId,
    };
    // Save Product in the database
    SubCategory.create(subCategory)
      .then((data) => {
        // res.send(data);
        // res.set('Location', 'http://localhost:8081');
        res.end('Sub Kategoria u shtua me suskses, id:' + data.id)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the SubCategory.",
        });
      });
  };
  // Retrieve all Products from the database.
  exports.findAll = (req, res) => {
    SubCategory.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving SubCategory.",
        });
      });
  };
  // Find a single Product with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
    SubCategory.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find SubCategory with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving PrSubCategoryoduct with id=" + id,
        });
      });
  };
  // Update a Product by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
    SubCategory.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "SubCategory was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update SubCategory with id=${id}. Maybe SubCategory was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating SubCategory with id=" + id,
        });
      });
  };
  // Delete a Product with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
    SubCategory.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "SubCategory was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete SubCategory with id=${id}. Maybe Product was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete SubCategory with id=" + id,
        });
      });
  };