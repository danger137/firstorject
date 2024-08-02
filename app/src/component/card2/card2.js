import Link from "next/link";
import "./card2.css"
import { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { set } from "react-hook-form";

export default function Card2(){

  let [ad, setAd] = useState([]);
  let [newad, setNewAd] = useState([]);
let [search ,setSearch] = useState("");


  useEffect(() => {

     async function getAd() {

        let resp = await axios.get('https://fakestoreapi.com/products');

        setAd(resp.data);
        console.log(resp.data);
     }

     getAd();


  }, [])
function delAd(id){

  // let some = ad.filter((ads)=>{
  //     return id != ads.id; 
  // })
  
  // setAd(some);

  let index =  ad.findIndex((ads)=>{
      return ads.id == id;
    })
  if(index != -1){
    ad.splice(index,1);
  }
  setAd([...ad]);


}

  let router = useRouter();

return <div id="main2" >
  <input id="such" onInput={(event)=>{
setSearch(event.target.value.toLowerCase());
  }} ></input>
  <input id="low"  type="checkBox" onClick={()=>{

  let lower =   ad.sort((a,b)=>{
   
     return    a.price - b.price; 
    })
    
    setNewAd([...lower]);
if(low.checked){
  setAd([...newad]);
}else{
setAd(ad);
}



  }} ></input>

  {
ad.filter((meriAd)=>{
  if(meriAd.title.toLowerCase().includes(search)){
    return true;
  }else{
    return false;
  }
}).map((meriAd,i)=>{
return   <div key={i} onClick={()=>{
  router.push("/Details/"+meriAd.id)
}} >
  <div className="card" style={{ width: "18rem" }}>
<img  className="card-img-top" src={meriAd.image} alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title">{meriAd.title}</h5>
  <p className="card-text">
  {meriAd.price}
  </p>
<button className="btn btn-primary" onClick={(event)=>{
event.stopPropagation();
delAd(meriAd.id);


}}>
        Delete

</button>
      
 
</div>
</div>
</div>
})

}


</div>


}