const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

app.use(cors);
// Import routes
const userRoutes = require('./route/user')

//CONNECT DATABASE
mongoose.connect(process.env.DATABASE || "mongodb+srv://Group47-ToolTime:AQQUrasfSOCT9PDN@cluster0.ntmmvub.mongodb.net/cluster0?retryWrites=true&w=majority")
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err));

// CONNECT SERVER
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/api",userRoutes);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running on port 5000");
});
