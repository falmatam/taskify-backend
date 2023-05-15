const Task = require("../models/taskModel");

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(200).json(task); //if status 200,then send json task
    } catch(error){
        res.status(500).json({msg: error.message}) //if status 500, then send error message
    }
}

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find(); //find is a 
        res.status(200).json(tasks); //if status 200,then send json tasks
    } catch(error){
        res.status(500).json({msg: error.message}) //if status 500, then send error message
    }
}


const getTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        //If task doesnt exist
        if(!task){
            res.status(404).json(`No task with id: ${id}`);
        }
        //else return the task
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}


const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        //If task doesnt exist
        if(!task){
            res.status(404).json(`No task with id: ${id}`);
        }
        //else return the task
        res.status(200).send("Task Deleted!");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}



const updateTask = async (req, res) => {
    try{
        const {id} = req.params;
        //update task 
        const task = await Task.findByIdAndUpdate({_id:id}, req.body, {
            new:true,
            runValidators:true,
        })
        //If task doesnt exist
        if(!task){
            res.status(404).json(`No task with id: ${id}`);
        }
        //else return the task
        res.status(200).send("Task Updated!");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    createTask: createTask,
    getAllTasks: getAllTasks,
    getTask: getTask,
    deleteTask: deleteTask,
    updateTask: updateTask,
}