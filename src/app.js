import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//it is used for middleware and configuration 

app.use(cors({

    origin:process.env.CORS_ORIGIN,
    credentials:true

    // ctrl + space : explore its another value or read from documentation(npmjs.com/packages/cors)

}))

// ye humne form bhara tab data liya

app.use(express.json({limit:"16kb"}))

// when data come from url

app.use(express.urlencoded({extended:true,limit:"16kb"}))

//it is use for store images and eserts in Public folder
app.use(express.static("public"))

app.use(cookieParser())



export { app } 