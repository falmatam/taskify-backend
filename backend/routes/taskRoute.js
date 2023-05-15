const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {createTask, getAllTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController");

//Create a Task
router.post("/api/tasks", createTask);

//Get all Tasks
router.get("/api/tasks", getAllTasks);

//Get a Task
router.get("/api/tasks/:id", getTask);

//Delete a Task
router.delete("/api/tasks/:id", deleteTask);

//Update a Task
router.put("/api/tasks/:id", updateTask);

module.exports = router;