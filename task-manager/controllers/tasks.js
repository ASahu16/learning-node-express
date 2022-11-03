const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    // find all documents
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    // find single task documents
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(400).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send('update Task');
};

const deleteTask = async (req, res) => {
  try {
    // find single task documents
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(400).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
    // other response we can return,
    // Since we are sending http 200 OK, means delete is complete.
    // res.status(200).json({ task: null, status: 'success' });
    // res.status(200).send();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
