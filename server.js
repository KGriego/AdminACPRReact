const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");
// loads our connection to the mongo database
// const dbConnection = require("./db");

const PORT = process.env.PORT || 3010;

// ===== Middleware ====
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
