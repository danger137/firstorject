'use client'
import { useRef, useState } from "react"
// import "./dashboard.css";


export default function Dashboard(){


   let [total,setTotal] = useState([0]);
 

function increase(){

setTotal(total++);

}


return <div>
<div id="main" >
<h1>{total}</h1>
<button onClick={increase} >Increament</button>

   </div>
   </div>


}