// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import express from "express";  // Import express
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

// Initialize Express app
const app = express();

connectDB()

.then(()=>{

    app.listen(process.env.PORT || 8000, ()=>{

        console.log(`Server is running at port ${process.env.PORT}`);
        
    })

})
.catch((error)=>{

    console.log("MONGO db connection failed !!!",error);
    

})







/*
+++++++++++++++++++++++first aproach 

import express from "express"
const app = express()

(async()=>{

    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{

            console.log("ERROR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listining on port${process.env.PORT}`);
            
        })
        
    } catch (error) {
        console.log("ERROR",error);
        throw error
        
        
    }
})()    //  iffi: ()() = ye hamara function hy isko immdetaly execute kar do


*/
