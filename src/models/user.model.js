import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { use } from "express/lib/application";

const userSchema = new Schema(
    {

        username:{
            type:String,
            require:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            lowecase:true,
            trim:true,
        },
        fullname:{
            type:String,
            require:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String, //cloudinary url
            require:true,
            
        },
        coverImage:{
            type:String, // cloudinary url
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required']

        },
        refreshToken:{
            type:String
        }
    },{timestamps:true}
)
//pre : it is a hook jo ki ik method hy aur jo bhi code execute karna ht likh do aur se data save hone se phele condition check karta h

userSchema.pre("save" , async function (next){    // middleware hy islye next ka access hona jaruri hy isllye next ka use ho rha hy
    //yaha per arrow function use nhi kar sakte q ki yaha per context ka pata hona jaruri hota h


    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password , 10)
    next()
})

// making custom method

userSchema.methods.isPasswordCorrect = async function (password) {
 
    return await bcrypt.compare(password,this.password)
}

// Tokens

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this. _id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function (){

    return jwt.sign(
        {
            _id: this. _id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)