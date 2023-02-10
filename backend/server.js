const express = require("express");
require("dotenv").config();
//error Handler middleware
const errorHandler = require('./middleware/error')
//Not Found middleware
const notFound = require('./middleware/notFound')
//express asyn-error
require("express-async-errors");
//Cookie Paresr
const cookieParser = require('cookie-parser')

const connectDB = require("./config/db");

//Database Connect
connectDB();

const app = express();
//body Parser
app.use(express.json());
//Cookie-parser
app.use(cookieParser())

//auth routes
app.use("/api/v1/auth", require("./routes/auth"));

//Listing routes
app.use("/api/v1/listing", require("./routes/listing"));

app.use(errorHandler)
app.use(notFound)

app.listen(3000, () => {
  console.log("Server IS Running");
});
