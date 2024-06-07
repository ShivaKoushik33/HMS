const mongoose = require("mongoose");
const { stringify } = require("qs");

const patientSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        require:true
    },
    gender:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    number:
    {
        type:Number,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        unique:true
    }
})

const Patient = mongoose.model("Patient",patientSchema);

module.exports= Patient;