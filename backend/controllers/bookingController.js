
import Booking from '../models/booking.js'

export const createBooking = async(req,res)=>{
    
    const newBooking = new Booking(req.body)

    
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true,message:"Your tour is booked",data:savedBooking}) 

    } 
    catch (error) {
        return res.status(500).json({success:false,message:"server error"}) 
    }
}

export const getBooking = async(req,res)=>{
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({
            success:true,message:"successful",
            data:book
        })

    } catch (error) {
        return res.status(404).json({success:false,message:"Not Found 404"}) 

    }


}


export const getAllBooking = async(req,res)=>{

    try {
        const books = await Booking.find()

        res.status(200).json({
            success:true,message:"successful",
            data:books
        })

    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"}) 

    }


}