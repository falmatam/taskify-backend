const mongoose = require("mongoose");

//creating a Schema for the Data 
//(i.e., how we Organize the data)
//timestamps object allows tracking of time of all changes made to db
const taskSchema = mongoose.Schema(
    {
    name:{
        type: String,
        required: [true, "Please add a task"],
    },
    completed:{
        type: Boolean,
        required: true,
        default: false,
    },
},
{
    timestamps: true,
}
);

//setting the model to our custom schema
const Task = mongoose.model("Task", taskSchema); 
module.exports = Task;
