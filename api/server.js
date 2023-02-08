const express = require('express');
const mongoose = require('mongoose');
const app = express();

//CONNECT DATABASE
mongoose.connect(process.env.DATABASE || "mongodb+srv://Group47-ToolTime:AQQUrasfSOCT9PDN@cluster0.ntmmvub.mongodb.net/cluster0?retryWrites=true&w=majority")
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err));

// CONNECT SERVER
app.get('/', (req,res)=>{
    res.send("Hello Server")
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running on port 5000");
});