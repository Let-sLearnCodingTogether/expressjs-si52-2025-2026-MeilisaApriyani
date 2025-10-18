import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema(
    {
        DisplayName : {
            type : String,
            required : [true, "Silakan isi nama anda"],
            unique : true,
            trim : true
        },
        profile : {
            type : String,
            required : [true, "Silakan masukkan foto anda"],
            unique : true,
            trim : true
        },
        bio : {
            type : String,
            minLength : [10, "Minimal 10 karakter"],
            maxLength : [150, "Maksimal 150 karakter"],
            required : [true, "Silakan masukkan bio anda "],
            unique : true,
            trim : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    },
    {
        timestamps : true 
    }
)

const ProfileModel = new mongoose.Model("user", ProfileSchema)

export default ProfileModel