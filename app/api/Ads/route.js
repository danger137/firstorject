import { AD } from "@/app/model/ad";
import { NextResponse } from "next/server";

export async function GET(req,res){

 
    
let user = await AD.find();
    
    return NextResponse.json({success:true,
        users:user
    })
    
    }

export async function POST(req,res){

let data = await req.json();
console.log(data);

let nyaAD = new AD(data);
nyaAD.save();

return NextResponse.json({success:true})

}