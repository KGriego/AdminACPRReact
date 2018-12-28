const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3010;

// ===== Middleware ====
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log(`🌎  => API Server now listening on PORT ${PORT}!`);
});
