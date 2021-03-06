module.exports = (app) => {
  const products = require("../controllers/product.controller.js");
  var router = require("express").Router();
  const fileUpload = require("express-fileupload");

  // Create a new product
  router.post("/", products.create);
  // Retrieve all products
  router.get("/", products.findAll);
  router.get("/cat/:categoryId", products.findByCategoryId);
  router.get("/:id", products.findOne);
  // Update a product with id
  router.put("/:id", products.update);
  // Delete a product with id
  router.delete("/:id", products.delete);
  app.use(
    fileUpload({
      createParentPath: true,
    })
  );
  app.use("/api/products", router);
};
