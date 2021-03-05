const ToDo = require("../models/todo");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todo = await ToDo.find();
    return res.send(todo);
  } catch (error) {
    return res.status(500).send(`Server Error: ${error}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = new ToDo({
      title: req.body.title,
    });

    await todo.save();
    return res.send(todo);
  } catch (error) {
    return res.status(500).send(`Server Error: ${error}`);
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log("router PUT hit");
    const updateList = await ToDo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
      },
      { new: true }
    );
    console.log(updateList);
    if (!updateList)
      return res.status(400).send(`${updateList} does not exist`);

    await updateList.save();
    return res.send(updateList);
  } catch (error) {
    return res.status(500).send(`Server Error: ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const list = await ToDo.findByIdAndDelete(req.params.id);
    if (!list) return res.send(400).send(`${req.params.id} does not exist`);
    return res.send(list);
  } catch (error) {
    return res.status(500).send(`Server Error: ${error}`);
  }
});

module.exports = router;
