import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


export const databaseConnection=async()=>{

const URI=process.env.MONGO_URI

    try {
        await mongoose.connect(URI).then(()=>console.log("connected to db"))
       
        
        
    } catch (error) {

        console.log("failed to connect with database",error)
        
    }
}