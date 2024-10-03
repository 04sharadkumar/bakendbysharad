import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// second method to connect with database

const connectDB = async ()=> {

    try {

        const conntionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)  // second variable use for give database name
        
        console.log(`\n MongoDB connected !! DB Host ${conntionInstance.connection.host}`);
        
        
    } catch (error) {

        console.log("MongoDB Connection FAILED ", error)       
        process.exit(1)

        // node js give access of process. Aur ye jo current application chal rahi hy ye uska referance hy
        // aur num process ko exit kar sakte ht with duffernt type

        
        
        
    }
}

export default connectDB