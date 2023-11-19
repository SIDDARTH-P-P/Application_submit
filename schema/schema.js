import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    profile:{type:String},
    username:{type:String},
    email:{type:String},
    phone:{type:Number},
    qualification:{type:String},
    resume:{type:Object},
})

export default mongoose.model.formdatas || mongoose.model("formdata",schema);