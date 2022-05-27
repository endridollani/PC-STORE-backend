module.exports = (app) => {
    const sub_category = require("../controllers/sub_category.controller.js");
    var router = require("express").Router();
    // Create a new product
    router.post("/", sub_category.create);
    // Retrieve all products
    router.get("/", sub_category.findAll);
    router.get("/:id", sub_category.findOne);
    // Update a product with id
    router.put("/:id", sub_category.update);
    // Delete a product with id
    router.delete("/:id", sub_category.delete);
    app.use("/api/sub_category", router);
  };
  