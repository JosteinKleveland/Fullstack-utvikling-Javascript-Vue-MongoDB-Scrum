const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const cors = require("cors");


// Increase Payload size limit to 50mb
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Allows http requests from frontend port
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  // res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use(cors);
// Import routes
const userRoutes = require("./route/user");
const toolRoutes = require("./route/tool");

//CONNECT DATABASE
mongoose
  .connect(
    process.env.DATABASE ||
      "mongodb+srv://Group47-ToolTime:AQQUrasfSOCT9PDN@cluster0.ntmmvub.mongodb.net/cluster0?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// CONNECT SERVER
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api/user", userRoutes);
app.use("/api/tool", toolRoutes);

app.listen(process.env.PORT || 5050, () => {
  console.log("Server running on port 5050");
});
