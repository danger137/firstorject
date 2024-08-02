'use client'
import auth from "@/apis/auth"

import product from "@/apis/product"
import supplier from "@/apis/supplier";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import Model from "../module boot/page";

export default function CreateApp(){

// let [showCata,setShowCata] = useState(false);

let [showCata,setShowCata] = useState(false);


let [code,setCOde] = useState([]);

    useEffect(()=>{

product.getProducts().then((resp)=>{
    setCOde(resp.data);
})

    
    },[])


    const  saveData = ()=>{




product.addProduct({
    
        
    
    product_name:"OPPO A3",
    product_category:"66a25eaafaa8b0418b4cb561",
    stock_account:"6628cd62b6fe330e448d4631",
    op_balance:400,
    product_unit:"6638e6e1faa8b0418b4b1a62"
           
        
    
}).then((resp)=>{
    console.log(resp.data);
    toast.success("success")
})



    }








 

return <div>

  {/* { showCata ? <Model setShowCata={setShowCata} ></Model> : null}


<button onClick={e=>setShowCata(true)}  >Add Catagory</button> */}

{showCata ? <Model setShowCata={setShowCata} ></Model> : null }
<button onClick={e=>(setShowCata(true))} >Add Catagory</button>

 

 <table border={1}>

<thead>
   <tr>
       <th>Product Name</th>
       <th>Open Balance</th>
   </tr>
</thead>

   {
       code.map(function(product,i){
           return <tr key={i} >
               <td>{product.op_balance}</td>
               <td>{product.product_name}</td>
           </tr>
       })
   }
</table>






<button onClick={saveData} >Add Product</button>











</div>


}