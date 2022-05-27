module.exports = (app) => {
    const category = require("../controllers/category.controller.js");
    var router = require("express").Router();
    // Create a new product
    router.post("/", category.create);
    // Retrieve all products
    router.get("/", category.findAll);
    router.get("/:id", category.findOne);
    // Update a product with id
    router.put("/:id", category.update);
    // Delete a product with id
    router.delete("/:id", category.delete);
    app.use("/api/category", router);
  };
  