const express = require("express");
require("dotenv").config();
//error Handler middleware
const errorHandler = require('./middleware/errorHandler')
//Not Found middleware
const notFound = require('./middleware/notFound')
//express asyn-error
require("express-async-errors");
//Cookie Paresr
const cookieParser = require('cookie-parser')
//cors
const cors = require('cors')


const connectDB = require("./config/db");

//Database Connect
connectDB();

const app = express();
//body Parser
app.use(express.json());
//Cookie-parser
app.use(cookieParser())
//cors
app.use(cors())

//auth routes
app.use("/api/v1/auth", require("./routes/auth"));

//Listing routes
app.use("/api/v1/listing", require("./routes/listing"));


//User routes
app.use("/api/v1/user", require("./routes/user"));

app.use(errorHandler)
app.use(notFound)

app.listen(3000, () => {
  console.log("Server IS Running");
});
