const bookingController = require("../controllers/bookingController")
const express = require("express");

const router = express.Router();

router.post("/booking",bookingController.storeBooking);


router.get('/', bookingController.getBooking);

module.exports=router;