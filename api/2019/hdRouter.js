const express = require("express");

const router = express.Router();

const db = require("./hdModel");

router.get("/", (req, res) => {
  db.findAll()
    .then((e) => {
      res.status(200).json({ data: e });
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});

router.post("/", (req, res) => {
  const body = req.body;
  try {
    db.create(body)
      .then((e) => {
        res.status(200).json({ message: "New HD Column Created", data: e[0] });
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } catch {
    res.status(401).json({ message: "Error creating the new example." });
  }
});

module.exports = router;
