const Booking = require("../models/booking");

const  storeBooking= async(req,res)=>
    {
        const {patientName,doctorName,bookingTime,bookingDate}=req.body;
        try{

            const newBooking =new Booking ({
                patientName,
                doctorName,
                bookingTime,
                bookingDate
        })
        await newBooking.save();

        res.status(201).json({message:"slot Booked successfully"});

        console.log("Booked");
        }

        catch(error)
        {
            console.log(error);
            res.status(500).json({error:"internal server error"});
        }
    }

    const getBooking = async (req, res) => {
        try {
            const bookings = await Booking.find({});
            res.status(200).send(bookings);
        } catch (e) {
            res.status(500).send(e);
        }
    };

module.exports = {storeBooking,getBooking};
