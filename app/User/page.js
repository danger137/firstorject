"use client";
import { useEffect, useState } from "react"
import { adArray } from "../Ads/page";
import { userArray } from "../Signup/page";
import "./user.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import meraStore from "@/store/store";
import { removeUser, updateUser } from "@/store/auth";
import axios from "axios";


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

let   user1 =  ()=>{




return <Provider store={meraStore} >
  <User></User>

</Provider>

}

export default user1;


 function User(){
let dispatch = useDispatch();

    let [users,setUsers] = useState([]);

useEffect(()=>{

axios.get("api/Signup").then((resp)=>{
  setUsers(resp.data.users);
})

},[])
// let users = useSelector((store)=>{
//   return store.users;
// })
return <div>
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
        </div>
        <div className="table-responsive">
          <table className="table no-wrap user-table mb-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-0 text-uppercase font-medium pl-4"
                >
                  #
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Name
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Occupation
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Password
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Added
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Category
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
            {
                users.map((user,meraIndex)=>{
return <tr key={meraIndex} >
      <td className="pl-4">1</td>
                <td>
                  <h5 className="font-medium mb-0">{user.email}</h5>
                  <span className="text-muted">Texas, Unitedd states</span>
                </td>
                <td>
                  <span className="text-muted">Visual Designer</span>
                  <br />
                  <span className="text-muted">Past : teacher</span>
                </td>
                <td>
                  <span className="text-muted">{user.password}</span>
                  <br />
                  <span className="text-muted">999 - 444 - 555</span>
                </td>
                <td>
                  <span className="text-muted">15 Mar 1988</span>
                  <br />
                  <span className="text-muted">10: 55 AM</span>
                </td>
                <td>
                  <select
                    className="form-control category-select"
                    id="exampleFormControlSelect1"
                  >
                    <option>Modulator</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Subscriber</option>
                  </select>
                </td>
                <td>
                  <button
                  id="btn4"
                    type="button"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle"
                    onClick={()=>{
                        // dispatch(removeUser(meraIndex));
                        axios.delete('/api/Signup?abc='+user._id)
                        
                    }}
                  >
                    Delete
                    <i className="fa fa-key" />{" "}
                  </button>
                  <button
                    type="button"
                    id="btn4"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                    onClick={()=>{
                       
                      //  dispatch(updateUser({
                      //   email,
                      //   meraIndex
                      //  }))
                      user.email = prompt("Email");
                     axios.put("/api/Signup",user).then((resp)=>{
                      
                     })
                  

                    }}
                  >
                    Edit
                    <i className="fa fa-trash" />{" "}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                  >
                    <i className="fa fa-edit" />{" "}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                  >
                    <i className="fa fa-upload" />{" "}
                  </button>
                </td>
</tr>
                })
            }

           
            
             
            
           
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>



 


</div>



}