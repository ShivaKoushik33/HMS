const Patient = require("../models/Patient");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotEnv = require("dotenv");

dotEnv.config();

const patientRegister = async(req,res)=>
    {
        const {name,age,gender,email,number,password}=req.body;
        try{
        let verifyemail = await Patient.findOne({email});

        if(verifyemail)
            {
                 return res.status(400).json("email already exists");
            }
            const hashedPassword = await bcrypt.hash(password,10);
            const newPatient =new Patient ({
                name,
                age,
                gender,
                email,
                number,
                password:hashedPassword
    
        })
        await newPatient.save();

        res.status(201).json({message:"patient registered successfully"});

        console.log("registered");
        }

        catch(error)
        {
            console.log(error);
            res.status(500).json({error:"internal server error"});
        }
    }


    const patientLogin = async(req,res)=>
    {
        const {email,password}=req.body;

        try {
            
            const verifymail = await Patient.findOne({email});
            if(!verifymail || !(await bcrypt.compare(password,verifymail.password)))
                {
                    return res.status(401).json({error:"invalid email or password"});
                }
            else
            {
                const token = jwt.sign({patientId:verifymail._id},process.env.whoAreYou,{expiresIn:"1h"});

                res.status(200).json({success:"login successfull",token});
                console.log("logged in and token is ",token);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({error:"internal server error"});
        }

    }

    const getPatientDetails = async (req, res) => {
        try {
            const patients = await Patient.find({});
            res.status(200).send(patients);
        } catch (e) {
            res.status(500).send(e);
        }
    };
    
    module.exports = {patientRegister, patientLogin,getPatientDetails};