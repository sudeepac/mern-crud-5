const express = require("express");
const cors = require("cors");

const todoRouter = require("./routes/todo");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todos5DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todo", todoRouter);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
