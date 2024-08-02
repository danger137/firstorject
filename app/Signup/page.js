'use client'
import { useRef } from "react";
import "./Signup.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Provider, useDispatch } from "react-redux";
import meraStore from "@/store/store";
import { addUser } from "@/store/auth";
import ProviderRedux from "../src/component/ProviderRedux/ProviderRedux";
import axios from "axios";
export let userArray = [];


let My =  ()=>{


  return <ProviderRedux>
    <Signup></Signup>
    </ProviderRedux>


}

export default My;


function Signup(){

let dispatch = useDispatch();
// let emailBox = useRef();
// let passwordBox = useRef();
//   function handleData(){
//     event.preventDefault();

//     if(emailBox.current.value == ""){
//         emailError.innerText = "Please Require Email";
//     }else{
//         let validEmail = emailBox.value.match(
//                 /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         )
//         if(validEmail){
//             emailError.innerText = "";

//         }else{
//             emailError.innerText = "Please Require"
//         }

//     }

//     if(passwordBox.current.value == ""){
//         passwordError.innerText = "Please Require Password";
//     }else{
      
//         if(passwordBox.value.length < 7){
//             passwordError.innerText = "Please Require 6 digits Password";

//         }else{
//             passwordError.innerText = "";
//         }
       

//     }

// }

let {register,handleSubmit,formState:{errors}} = useForm();

let move = useRouter();

// let move = useNavigate();

const signup = (meraUser)=>{
//  userArray.push(meraUser);
// dispatch(addUser(meraUser));


axios.post("/api/Signup",meraUser).then((resp)=>{

if(resp.data.success){

  move.push("/Login");
  toast.success("Signup ho gaya ha");
}

})

}


    return <div>
<p class="h1">Signup Page</p>
<div id="main" >
       
       <form onSubmit={handleSubmit(signup)} >
      {errors.email && errors.email.type == "required" ? <div id="email" >Please Enter Email</div> : null }
      {errors.email && errors.email.type == "pattern" ? <div id="email2" >Please Enter @Gmail.com</div> : null }
      {errors.email && errors.email.type == "validate" ? <div id="email2" >Email already exist</div> : null }
 <div className="form-group row">
   <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
     Email
   </label>
   <div className="col-sm-10">
     <input
       type="emailBox"
       className="form-control"
       {...register("email",{ validate:(sameEmail)=>{
         
        
         
        let emailMilgai = userArray.filter((user)=>{
          if(user.email == sameEmail){
          return true;
          }
        
        
        })
if(emailMilgai.length == 2){
  return false;
}
      
      

      
       } , required:true,pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
       placeholder="email@example.com"
     />
   </div>
   <div id="emailError" class="error"  ></div>
 </div>
 <div className="form-group row">
   <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
     Password
   </label>
   <div className="col-sm-10">
     <input
       type="password"
       className="form-control"
       id="password"
       {...register("password",{required:true,minLength:8})}
       placeholder="Password"
     />
   </div>
  {errors.password && errors.password.type=="required" ? <div className="password" >Please Enter Password</div> : null}
  {errors.password && errors.password.type == "minLength" ? <div className="password2" > Please Enter 8 digits Password</div> : null}
   <div className="col-sm-10">
   <button   type="submit" class="btn btn-secondary btn-lg" >Signup</button>
   </div>
 </div>
</form>

   </div>



    </div>
    
    
    }