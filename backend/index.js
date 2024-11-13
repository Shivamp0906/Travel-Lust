import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000
const corsOptions={

   origin:true
}

// connect database
mongoose.set('strictQuery',false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
           
        })
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Connection Failed',error);
    }
}


app.get('/',(req,res)=>{
   res.send({message:'api works'});
})

// middleware

app.use(express.json())
app.use(cors(corsOptions));
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Origin", req.headers.origin);
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
//     );
//     if ("OPTIONS" == req.method) {
//       res.send(200);
//     } else {
//       next();
//     }
//   });
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);

app.listen(port,()=>{
    connect();
    console.log('server is listening on port',port)
})