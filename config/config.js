require("dotenv").config();
const config = {
  development: {
    username: "root",
    password: "",
    database: "phones",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "phones_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    URL: process.env.JAWSDB_URL
  }
};

module.exports = config;
