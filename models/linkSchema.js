import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
        title : {
            type: String,
            required: [true, "Title diisi"],
            trim: true
        },
            icon: {
            type: String,
            required: [true, "Icon tertera"],
            trim: true
        },
         url : {
            type: String,
            required: [true, "URL diisi"],
            trim: true
        },
          user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
     }, {
        timestamps : true
    }
)

const LinkModel = mongoose.model("Link", linkSchema);

export default LinkModel;
