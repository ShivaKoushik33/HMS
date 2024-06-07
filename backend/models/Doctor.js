const mongoose = require("mongoose");
const { stringify } = require("qs");

const doctorSchema = new mongoose.Schema({
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
    specalist:
    {
        type:String,
        required:true
    },
    doctorPhoto:
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
    },
    location:
    {
        type:String,
        required:true
    },
    fee:
    {
        type:Number,
        required:true
    },
    college:
    {
        type:String,
        required:true
    },
    certificate:
    {
        type:String,
        required:true
    },
    gender:
    {
        type:String,
        required:true
    }
})

const Doctor = mongoose.model("Doctor",doctorSchema);

module.exports= Doctor;