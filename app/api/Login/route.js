import { User } from "@/app/model/user";
import { NextResponse } from "next/server";

export async function POST(req,res){

  let data = await req.json();
  console.log(data);
  
 let user =   await User.findOne(data);


return NextResponse.json(
    user || null
)

}