import mongoose from "mongoose"

const LinkSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : [true, "Silakan isi judul"],
            unique : true,
            trim : true
        },
        icon : {
            type : String,
            required : [true, "Silakan pilih icon"],
            unique : true,
            trim : true
        },
        url : {
            type : String,
            required : [true, ""],
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

const LinkModel = new mongoose.Model("user", LinkSchema)

export default LinkModel