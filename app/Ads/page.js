"use client";

import {  Provider, useDispatch } from "react-redux"
import "./ads.css"
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import meraStore from "@/store/store";
import { adSection } from "@/store/auth";
import axios from "axios";
import { toast } from "react-toastify";

//  export let adArray = [];


let  myAds =  ()=>{

return <Provider store={meraStore} >
  <CreateAds></CreateAds>

</Provider>

}
export default myAds;


 function CreateAds(){

 let  {handleSubmit,register}  = useForm();


let dispatch = useDispatch();

const ads = (meriAds)=>{

 meriAds.picture = meriAds.picture[0].name;
  // adArray.push(meriAds);
  // console.log(adArray);

// dispatch(adSection(meriAds));
axios.post("/api/Ads",meriAds).then((resp)=>{
if(resp.data){
  toast.success("created")
}
})

// dispatch({
//   type:"ads-lao",
//   payLoad:meriAds
// })

}


  return <div id="ad" >
     <form onSubmit={handleSubmit(ads)} >
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Title</label>
        <input
          className="form-control"
          id="title"
          placeholder="Title"
          {...register("title")}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Details</label>
        <input
          className="form-control"
          id="details"
          placeholder="Details"
          {...register("details")}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="inputAddress">Phone Number</label>
      <input
       
        className="form-control"
        id="number"
        placeholder="+924666778899"
        {...register("number")}
      />
    </div>
  
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputCity">Price</label>
        <input placeholder="RS" {...register("price")} className="form-control" id="price" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Picture</label>
        <input
          className="form-control"
          id="picture"
          type="file"
          {...register("picture")}
        />
      </div>
    </div>
   
    <button type="submit" className="btn btn-primary">
      Create ad
    </button>
  </form>
  
  </div>
  
  
  }