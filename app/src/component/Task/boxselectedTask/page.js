'use client'
import { useRef, useState } from "react"
// import "./dashboard.css";


export default function Dashboard(){



   let [total,setTotal] = useState([null]);

  




return <div>
<div id="main" >

<div id="one" className={total == "one" ? "border2 box":"box"  } onClick={(event)=>{
setTotal(event.currentTarget.id);
}}  ></div>
<div id="two" className={total == "two" ? "border2 box":"box"} onClick={(event)=>{
    setTotal(event.currentTarget.id);
}}  ></div>
<div id="three" className={total == "three" ? "border2 box":"box"} onClick={(event)=>{
    setTotal(event.currentTarget.id);
}} ></div>
<div id="four" className={total == "four" ? "border2 box":"box"} onClick={(event)=>{
    setTotal(event.currentTarget.id);
}} ></div>

   </div>
   </div>


}