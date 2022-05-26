module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      image: {
        type: Sequelize.BLOB('long')
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      }
    });
    return Product;
  };