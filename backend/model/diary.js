const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DiarySchema = new Schema(
  {
    title: {type:String, required: true, maxlength:100 },
    entry: { type: String, required: true, maxlength:5000 },
    date: { type: Date, required: true },
  },
  { collection: "entries" },
  { timestamps: true}
);

module.exports = mongoose.model("Diary", DiarySchema);
