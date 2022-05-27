module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    image: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Product;
};
