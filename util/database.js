const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Ngocdung123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
