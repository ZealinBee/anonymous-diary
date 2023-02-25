const express = require("express");
const dotenv = require("dotenv").config();
const router = express.Router();
const Diary = require("../model/diary");

router.get("/", async (req, res) => {
  try {
    const entries = await Diary.find();
    res.send(entries);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const entry = new Diary({
    entry: req.body.entry,
    date: req.body.date,
  });
  try {
    const newEntry = await entry.save();
    res.status(201).json({ newEntry });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
