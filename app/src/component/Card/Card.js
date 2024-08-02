import Link from "next/link";
import "./card.css"
import { useState } from "react";
import { adArray } from "@/app/Ads/page";
import { Provider, useSelector } from "react-redux";
import meraStore from "@/store/store";
import axios from "axios";

let card1 =  ()=>{

return <Provider store={meraStore} >
<Card></Card>
</Provider>

}
export default card1;

 function Card() {


  let [array, setArray] = useState([]);

  axios.get("/api/Ads").then((resp)=>{
    setArray(resp.data.users);
  })



  return <div id="main" >

    {
      array.map((ad,i) => {
        return <div key={i} >
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={"/" + ad.picture} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{ad.price}</h5>
              <p className="card-text">
                {ad.title}
              </p>
              <Link href={"/details2/" + ad.id} className="btn btn-primary">
                Go to Details
              </Link>
            </div>
          </div>




        </div>

      })

    }


  </div>


}