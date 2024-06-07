const patientController = require("../controllers/patientController")
const express = require("express");

const router = express.Router();

router.post("/register1",patientController.patientRegister);
router.post("/login",patientController.patientLogin);

router.get('/', patientController.getPatientDetails);

module.exports=router;