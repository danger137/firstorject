import mongoose from "mongoose";



export function connectDB(){

    mongoose.connect('mongodb+srv://dangerchamp2:Nokia927008@danger.itdb6sn.mongodb.net/hello').then((connect)=>{
    console.log(connect);
    console.log("Connect ho gi ha db");

    }).catch((error)=>{
        console.log(error);
    })




}