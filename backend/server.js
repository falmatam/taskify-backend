const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require('./config/ConnectDB')
const mongoose = require("mongoose");
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require("cors");


const app = express();


//Route '/' to be "Home Page"
app.get('/', (req, res) => {
    res.send("Home Page");
})


//Middleware
app.use(express.json())//This returns the JSON obj we placed in the req POST body in Insomnia
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:[
        "http://localhost:3000",
        "https://subtle-babka-115afa.netlify.app"
        
    ]
}));
app.use(taskRoutes);






const PORT = process.env.PORT || 8000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        }); 
    })
    .catch((err) => {
        console.log(err);
    })

