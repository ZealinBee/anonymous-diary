const express = require("express");
const dotenv = require("dotenv").config();
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const port = process.env.PORT || 3000;

const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const routes = require("./routes/routes");

app.use("/", routes);

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const mongoURL = `mongodb+srv://zealinbee:${MONGO_PASSWORD}@diary.ci3zdvu.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
