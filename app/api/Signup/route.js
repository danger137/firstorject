import { User } from "@/app/model/user";

const { NextResponse } = require("next/server");

export async  function PUT(req,res){

    let user = await req.json();
    console.log(user);
    await User.findByIdAndUpdate(user._id, user);
     
     return NextResponse.json({
         success:true
     })
     
     
     }


export async  function DELETE(req,res){

   let id = req.nextUrl.searchParams.get("abc");
await User.findByIdAndDelete(id);
    
    return NextResponse.json({
        success:true
    })
    
    
    }


export async  function GET(req,res){

   

let user = await  User.find();

return NextResponse.json({
    success:true,
    users:user
})


}


export async  function POST(req,res){

    let Data = await req.json();

    console.log(Data);

let nyaUser = new User(Data);
nyaUser.save();

return NextResponse.json({
    success:true
})


}

