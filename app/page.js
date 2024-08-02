"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./src/component/Card/Card";
import "./page.css"
import { Provider } from "react-redux";
import meraStore from "./store/store";
import { adArray } from "./Ads/page";

let  main1= ()=>{

return <Provider store={meraStore} >
<Home></Home>
</Provider>

}
export default main1;

function Home() {

  return <div>
<Card></Card>
  </div>

}
