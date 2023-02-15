const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(cors())


// Import routes
const userRoutes = require('./route/login')

//CONNECT DATABASE
mongoose.connect(process.env.DATABASE || "mongodb+srv://Group47-ToolTime:AQQUrasfSOCT9PDN@cluster0.ntmmvub.mongodb.net/cluster0?retryWrites=true&w=majority")
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err));

// CONNECT SERVER
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/api",userRoutes);
app.use("/api", require("./route/routes"));

app.listen(process.env.PORT || 5173, ()=>{
    console.log("Server running on port 5173");
});
