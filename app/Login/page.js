'use client'
import { useState } from "react"
import "./Login.css"
import { userArray } from "../Signup/page";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import auth from "@/apis/auth";
import { Provider, useDispatch, useSelector } from "react-redux";
import meraStore from "@/store/store";
import { setUser } from "@/store/auth";
import ProviderRedux from "../src/component/ProviderRedux/ProviderRedux";
import axios from "axios";
import { v4 } from "uuid";

let login1 =  ()=>{

return <ProviderRedux>
<Login></Login>

</ProviderRedux>


}

export default login1;

 function Login(){

  let dispatch = useDispatch();
  
  let {register,handleSubmit,formState:{errors}} = useForm();
  let users = useSelector((store)=>{
    return store.users;
  })
  let move = useRouter();
 

  // let [array,setArray] = useState(userArray);

  let [resp,setResp] = useState({});

  // console.log(array);

const login = (meraUser)=>{

 

//   let userMila =  users.filter((user)=>{
//     if(user.email == meraUser.user_email && user.password == meraUser.user_password){
//       return true;
//     }
//   })

//   if(userMila){
//     dispatch(setUser(userMila));
// move.push('/Dashboard');
// toast.success("Login ho gaya");
// console.log(userMila);
//   }else{
//     toast.error("field");
//   }
//   console.log(meraUser);

// localStorage.removeItem("token");

// localStorage.removeItem("token");

// auth.login(meraUser).

axios.post("/api/Login",meraUser).then((resp)=>{
  if(resp.data){
    move.push("/Dashboard");
    dispatch(setUser(resp.data));
  }
})



  
 



// if(resp){
//   move("/Dashboard");
// }

}
    return <div>
<p class="h1">Login Page</p>
<div id="main" >
     




        <form onSubmit={handleSubmit(login)}  >
         { errors.email && errors.email.type == "required" ? <div id="email" >This is required</div> :null}
         { errors.email && errors.email.type == "pattern" ? <div id="email2" >Please enter @</div> :null}
  <div className="form-group row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
      Email
    </label>
    <div className="col-sm-10">
     <input
       className="form-control"
       {...register("email",{required:true,pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
       placeholder="email@example.com"
     />
   </div>
  </div>
    
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
      Password
    </label>
    <div className="col-sm-10">
      <input
        type="password"
        className="form-control"
        id="inputPassword"
        placeholder="Password"
        {...register("password",{required:true,minLength:5})}
      />
    </div>
    { errors.password && errors.password.type == "required" ? <div className="password" >Please Enter Password</div>:null}
    { errors.password && errors.password.type == "minLength" ? <div className="password2" >Please Enter 5 digits</div>:null}
    <div className="col-sm-10">
    <button type="submit" class="btn btn-secondary btn-lg">Login</button>
    </div>
  </div>
</form>

    </div>
    


    </div>
    
    }