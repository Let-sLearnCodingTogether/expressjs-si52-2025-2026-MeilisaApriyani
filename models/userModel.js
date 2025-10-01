import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "User name wajib di isi"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        password : {
            type : String,
            required : [true, "Password wajib di isi"]
        }
    },
    {
        timestamp : true
    }
)

const userModel = mongoose.Model("User", userSchema)

export default userModel