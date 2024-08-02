'use client'
import { useRef, useState } from "react"
// import "./dashboard.css";


export default function Dashboard(){



   let [total,setTotal] = useState([]);

   let oneRef = useRef();
   let twoRef = useRef();

function sum(){

setTotal(+oneRef.current.value + +twoRef.current.value);

}


return <div>
<div id="main" >
<input ref={oneRef} ></input>
<input ref={twoRef}   ></input>
<input value={total}  readOnly ></input>
<button onClick={sum} >Increament</button>

   </div>
   </div>


}