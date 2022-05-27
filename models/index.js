const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

let db = {};

db.DataTypes = Sequelize.DataTypes;
db.sequelize = sequelize;

db.product = require("./product.model.js")(sequelize, db.DataTypes);
db.category = require("./category.model.js")(sequelize, db.DataTypes);
db.sub_category = require("./sub_category.model.js")(sequelize, db.DataTypes);

db.category.hasMany(db.sub_category);
db.sub_category.belongsTo(db.category);

db.category.hasMany(db.product)

module.exports = db;
