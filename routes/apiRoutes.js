const express = require("express");
const router = express.Router();
const db = require("../db/dbConnection");

//Routes to the database go here.
router.post("/getFromDatabase", (req, res) => {
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
  console.log(req.body);
  const { name, phoneNumber, device, issue, repairStatus } = req.body;
  db.query(
    "INSERT INTO `backlog` (OwnerName, OwnerNumber, DeviceName, Issue, RepairStatus) VALUES (?, ?, ?, ?, ?)",
    [name, phoneNumber, device, issue, repairStatus],
    (err, results) => {
      if (err) {
        res.statusCode = 500;
        return res.json({
          errors: ["Failed to add to database"]
        });
      }
      return res.json(results);
    }
  );
});

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
