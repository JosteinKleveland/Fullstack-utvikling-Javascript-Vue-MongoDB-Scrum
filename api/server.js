const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


// Import routes
const userRoutes = require('./route/user')

//CONNECT DATABASE
mongoose.connect(process.env.DATABASE)
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err));

// CONNECT SERVER
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/api",userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port 5000");
});