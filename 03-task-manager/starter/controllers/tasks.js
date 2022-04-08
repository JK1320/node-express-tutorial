const Task = require('../models/task');

//get all tasks
const getAllTasks = async (req,res) => {
try {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
} catch (error) {
  res.status(500).json({ msg: error });
}
};

//create new task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({msg: error});
  }  
};

//get one task
const getTask = (req, res) => {
  res.json({id: req.params.id});
};

// update a task
const updateTask = (req, res) => {
  res.send("Update Task");
};

//delete a task
const deleteTask = (req, res) => {
  res.send("Delete Task");
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}