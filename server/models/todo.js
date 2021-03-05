const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  isComplete: false,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
exports.todoSchema = todoSchema;
