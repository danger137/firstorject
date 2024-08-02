import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    email:String,
    password:String
})
export let User = mongoose.models.user || mongoose.model("user",userSchema);