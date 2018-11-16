const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3010;

// ===== Middleware ====
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
