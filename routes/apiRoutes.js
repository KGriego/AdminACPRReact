const express = require("express");
const router = express.Router();
const db = require("../db/dbConnection");

//Routes to the database go here.
router.get("/getFromDatabase", (req, res) => {
  db.query("SELECT * FROM `backlog`", (err, results) => {
    //if err, stop query to database
    if (err) {
      res.statusCode = 500;
      return res.json({
        errors: ["Failed to get items from database"]
      });
    }
    return res.json(results);
  });
});

router.post("/addToDatabase", (req, res) => {
  // db.query("SELECT * FROM `myTablebacklogme` = ?");
  // console.log(req.body);
  console.log("testtinggg addong to database");
  // db.query("INSERT INTO ");
});

// con.query(
//   'UPDATE employees SET location = ? Where ID = ?',
//   ['South Africa', 5],
//   (err, result) => {
//     if (err) throw err;
// console.log(`Changed ${result.changedRows} row(s)`);
// }
// );

router.post("/updateDatabase", (req, res) => {
  const id = req.body.rowId;
  const text = req.body.text;
  db.query(
    "UPDATE `backlog` SET `RepairStatus` = ? WHERE `ID` = ?",
    [text, id],
    (err, results) => {
      if (err) {
        res.statusCode = 500;
        return res.json({
          errors: ["Failed to update database"]
        });
      }
      return res.json(results);
    }
  );
});

module.exports = router;
