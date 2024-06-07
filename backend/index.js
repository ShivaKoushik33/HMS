const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const doctorRoute = require("./routes/doctorRoute");
const patientRoute = require("./routes/patientRoute");
const bookingRoute = require("./routes/bookingRoute");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("database connected successfully"))
.catch((error) => console.log(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use("/doctor",doctorRoute);
app.use("/patient",patientRoute);
app.use("/slot",bookingRoute);

app.listen(port,()=>
{
    console.log(`server started successfully at ${port}`);
})
app.use("/home",(req,res)=>
{
    res.send("<h1>Hello World</h1>");
})