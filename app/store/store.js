"use client";
import { createStore,combineReducers } from "redux";

 let initialAds={
    ads:[]
}

function adsSection(oldData=initialAds,newData){
  oldData =  {...oldData};
  if(newData.type == "ads-lao"){
    oldData.ads.push(newData);
  }
return oldData



}


// let initialUser={
//     users:[]
// }

// function userSection (oldData=initialUser,newData){
//     let oldData = {...oldData};

// return oldData;

// }


let rootReducer = combineReducers({adsSection});
let meraStore = createStore(rootReducer);
export default meraStore;
