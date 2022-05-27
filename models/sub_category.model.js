module.exports = (sequelize, Sequelize) => {
    const SubCategory = sequelize.define("sub_category", {
      name: {
        type: Sequelize.STRING,
      },
    });
    return SubCategory;
  };