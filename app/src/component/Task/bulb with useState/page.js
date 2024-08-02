'use client'
import { useRef, useState } from "react"
// import "./dashboard.css";


export default function Dashboard(){



   let [total,setTotal] = useState(["on.jfif"]);

  

function clickme(){

if(total == "on.jfif"){
    setTotal("off.jfif")
}else{
    setTotal("on.jfif")
}

}


return <div>
<div id="main" >
<img src={total} ></img>

   </div>
<button onClick={clickme} >Clickme</button>
   </div>


}