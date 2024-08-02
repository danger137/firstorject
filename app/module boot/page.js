'use client'
import { useEffect, useState } from "react";
import category from "@/apis/category";
import { toast } from "react-toastify";




export default function Model({setShowCata}){


let [showCata2,setShowCata2] = useState([]);

    // let [showCata2,setShowCata2] = useState([]);

    // useEffect(()=>{

    //     category.getCategories().then((resp)=>{
    //    setShowCata2(resp.data);
    //     })
        
        
    //     },[])


    // const catago = ()=>{

    //     category.addCategory({name:prompt("name")}).then((resp)=>{
    //         console.log(resp.data);
    //        setShowCata2([...showCata2,resp.data]);
    //     })
        
        
    //     }


useEffect(()=>{


category.getCategories().then((resp)=>{

console.log(resp.data);

setShowCata2(resp.data);


})



},[])



const addCata = ()=>{


category.addCategory({name:prompt("Name")}).then((resp)=>{

console.log(resp.data);

setShowCata2([...showCata2,resp.data]);
toast.success("send");

})



}





return <div>


<div id="addCategoryModal" className="modal" style={{ display: 'block' }} tabIndex={-1}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add category</h5>
                    <button
                    onClick={e=>setShowCategory(false)}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div className="modal-body">


<button onClick={addCata} >Add Catagory</button>
<button onClick={e=>(setShowCata(false))} >close</button>
{

showCata2.map((category,i)=>{
    return <h1 key={i} >{category.name}</h1>
})

}



</div>
</div>
</div>
</div>






{/* 
<div  id="addCategoryModal" className="modal" style={{ display: 'block' }} tabIndex={-1}>

<div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">Add category</h5>
            <button
            onClick={e=>setShowCata(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            />
            <button onClick={catago} >ADD Catagory</button>
        </div>
        <div className="modal-body">

{
    showCata2.map((category)=>{
       return <h1>{category.name}</h1>

    })
}

        </div>

</div>
</div>
</div> */}




</div>
}