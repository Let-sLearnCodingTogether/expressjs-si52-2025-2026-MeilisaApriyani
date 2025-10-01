import mongoose, { Schema } from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : [true, "Display Name wajib di isi"],
        },
        profilePicture : {
            type : String,
            required : [true, "Profile wajib di isi"],
        },
        Bio : {
            type : String,
            minLength : [10, "minimal 10 Karakter"],
            MaxLength : [150, "maxmal 150 karakter"],
            required : [true, "Profile picture wajib di isi"],
            trim : true
        },
        User : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
     }, {
        timestamps : true
    }
)