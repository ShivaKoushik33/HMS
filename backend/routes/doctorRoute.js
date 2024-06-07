const doctorController = require("../controllers/doctorController")
const express = require("express");

const router = express.Router();

router.post("/register1",doctorController.doctorRegister);
router.post("/login",doctorController.doctorLogin);

router.get('/', doctorController.getDoctorDetails);

module.exports=router;