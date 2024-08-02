import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
      name: "authSlice",
      initialState:{
        currentUser : {},
       users:[],
       users2:[],
        name:"ali"
        
      },
      reducers:{
        setUser:(oldData,newData)=>{
           oldData.currentUser = newData.payload;
        },
        addUser:(oldData,newData)=>{
          oldData.users.push(newData.payload);
              
        },
        removeUser:(oldData,newData)=>{
          oldData.users.splice(newData.payload);
        },
        updateUser:(oldData,newData)=>{
          oldData.users[newData.payload.meraIndex] = newData.payload;
        },
        adSection:(oldData,newData)=>{
          oldData.users2.push(newData.payload);
        }
      }
    


      
});
export let {addUser, removeUser, updateUser, setUser,adSection} = authSlice.actions

export default authSlice;

