'use client'
import { useRef, useState } from "react";
// import { useEffect, useRef, useState } from "react"
import "./dashboard.css";
import { set } from "react-hook-form";
// import axios from "axios";
// import Card2 from "../src/component/card2/card2";
// import Auth from "@/apis/auth";

export default function Dashboard() {





let [pic,setPic] = useState([]);

let refTag = useRef();

const saveData = ()=>{


let myFile = refTag.current.files[0];


let stringWalaPath = URL.createObjectURL(myFile);

pic.push(stringWalaPath);
setPic([...pic]);




}





return <div>


<input  ref={refTag}    type="file" ></input>
<button onClick={saveData} >Save pic </button>


{

pic.map((meriPic,i)=>{
   // return <img src={meriPic} ></img>
   return <div key={i} >
      <video controls src={meriPic} ></video>
   </div>
})


}







      {/* <Auth></Auth> */}

   {/* <Card2></Card2> */}



   </div>


}