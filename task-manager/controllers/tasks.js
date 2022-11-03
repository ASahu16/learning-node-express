const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    // find all documents
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
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

const getTask = (req, res) => {
  res.send('Get Individual Task');
};

const updateTask = (req, res) => {
  res.send('update Task');
};

const deleteTask = (req, res) => {
  res.send('delete Task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
