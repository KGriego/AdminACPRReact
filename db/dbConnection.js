const mysql = require("mysql2");
const env = process.env.NODE_ENV || "production";
const config = require("../config/config")[env];
//console.log(config)

//creating conenction to mysql database
function definingConnection() {
  if (env === "development") {
    return mysql.createConnection({
      host: config.host,
      user: config.username,
      database: config.database,
      port: config.port
    });
  } else {
    return mysql.createConnection(config.url);
  }
}

const connection = definingConnection();
connection.on("error", err => {
  if (err) {
    console.log("Connection to database was lost");
  } else {
    console.log("Connection created");
  }
});

module.exports = connection;
