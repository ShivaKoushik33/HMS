const mongoose = require("mongoose");
const { stringify } = require("qs");

const bookingSchema = new mongoose.Schema(
    {
        patientName:
        {
            type:String,
            required:true
        },
        doctorName:
        {
            type:String,
            required:true
        },
        bookingTime:
        {
            type:String,
            required:true
        },
        bookingDate:
        {
            type:String,
            required:true
        }
    }
)

const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking ;