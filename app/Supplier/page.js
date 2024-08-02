'use client'
import supplier from "@/apis/supplier";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
export default function Suppy(){



    let [code,setCode]  =  useState([]);


useEffect(()=>{


    supplier.getSuppliers().then((resp)=>{
        console.log(resp.data);
        setCode(resp.data);
    })




},[])



const send = ()=>{

supplier.saveSuppier({
    supplier_b_name:"AlI",
    supplier_b_address:"Jarawnala",
    supplier_title:"Cars lao",
    supplier_mobile:"03045502094"


}).then((resp)=>{
    console.log(resp.data);
    toast.success("send ho gaya")
})



}

return <div>

{

code.map((supplier,i)=>{

    return <div key={i} >
<h1>{supplier.supplier_b_name}</h1>
<h1>{supplier.supplier_b_address}</h1>
<h1>{supplier. supplier_title}</h1>
<h1>{supplier.supplier_mobile}</h1>




    </div>


})



}


<button onClick={send} >Add supplier</button>





</div>



}