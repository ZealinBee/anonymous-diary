const express = require("express");
const dotenv = require("dotenv").config();
const router = express.Router();
const Diary = require("../model/diary");


router.get("/diaries", async (req, res) => {
  try {
    const entries = await Diary.find();
    res.setHeader('Access-Control-Allow-Origin', `${process.env.CORS_URL}`);
    res.status(200).json(entries);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/diaries", async (req, res) => {
  const entry = new Diary({
    title: req.body.title,
    entry: req.body.entry,
    date: req.body.date,
    id: req.body.id,
  });
  try {
    const newEntry = await entry.save();
    res.setHeader('Access-Control-Allow-Origin', `${process.env.CORS_URL}`);
    res.status(201).json({ newEntry });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
