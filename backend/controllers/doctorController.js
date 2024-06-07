const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotEnv = require("dotenv");

dotEnv.config();

const doctorRegister = async(req,res)=>
    {
        const {name,age,specalist,doctorPhoto,email,number,password,location,fee,college,certificate,gender}=req.body;
        try{
        let verifyemail = await Doctor.findOne({email});

        if(verifyemail)
            {
                 return res.status(400).json("email already exists");
            }
            const hashedPassword = await bcrypt.hash(password,10);
            const newDoctor =new Doctor ({
                name,
                age,
                specalist,
                doctorPhoto,
                email,
                number,
                password:hashedPassword,
                location,
                fee,
                college,
                certificate,
                gender
        })
        await newDoctor.save();

        res.status(201).json({message:"doctor registered successfully"});

        console.log("registered");
        }

        catch(error)
        {
            console.log(error);
            res.status(500).json({error:"internal server error"});
        }
    }


    const doctorLogin = async(req,res)=>
    {
        const {email,password}=req.body;

        try {
            
            const verifymail = await Doctor.findOne({email});
            if(!verifymail || !(await bcrypt.compare(password,verifymail.password)))
                {
                    return res.status(401).json({error:"invalid email or password"});
                }
            else
            {
                const token = jwt.sign({doctorId:verifymail._id},process.env.whatIsYourName,{expiresIn:"1h"});

                res.status(200).json({success:"login successfull",token});
                console.log("logged in and token is ",token);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({error:"internal server error"});
        }

    }

    const getDoctorDetails = async (req, res) => {
        try {
            const doctors = await Doctor.find({});
            res.status(200).send(doctors);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    module.exports = {doctorRegister, doctorLogin,getDoctorDetails};