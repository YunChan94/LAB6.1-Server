const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete", // tên database ở mysql
  password: "Ngocdung123", //password lúc khởi tạo
});

module.exports = pool.promise();
