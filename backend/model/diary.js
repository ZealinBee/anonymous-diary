const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DiarySchema = new Schema(
  {
    entry: { type: String, required: true, maxlength: 900 },
    date: { type: Date, required: true },
    
  },
  { collection: "entries" },
  { timestamps: true}
);

module.exports = mongoose.model("Diary", DiarySchema);
