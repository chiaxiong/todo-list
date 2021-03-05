const connectDB = require("./db/index");
const express = require("express");
const app = express();
const cors = require("cors");

connectDB();

const todoRoutes = require("./routes/todo");

app.use(cors());
app.use(express.json());
app.use("/api/todo", todoRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server Port: ${port}`);
});
