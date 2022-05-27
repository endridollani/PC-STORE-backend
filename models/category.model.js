module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    name: {
      type: Sequelize.STRING,
    },
  });

  // Category.associate = function (models) {
  //   Category.hasMany(models.sub_category, { foreignKey: 'catId' });
  // };
  return Category;
};
