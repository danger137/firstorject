import mongoose from "mongoose";

let adShema = mongoose.Schema({
    title:String,
    details:String,
    price:String,
    picture:String
})

export  let AD = mongoose.models.ad || mongoose.model("ad",adShema);

