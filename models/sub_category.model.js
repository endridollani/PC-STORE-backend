module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define("sub_category", {
    name: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // SubCategory.associate = function (models) {
  //   SubCategory.belongsTo(models.category);
  // };
  return SubCategory;
};
