'use client'
import axios from "axios";
import { data } from "jquery";
import useSWR from "swr";

const fatcher = (...args)=>{

return axios.get(...args).then(resp=>resp.data); 

}

export default function Fresh(){

    let {data,error,isLoading} = useSWR('https://fakestoreapi.com/products/1',fatcher);




return <div>

{isLoading ? <img style={{position:"absolute",left:"0",right:"0",margin:"auto"}}  src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif" ></img> :null }
{error ? <div>opps,something wrong</div> :null }
{data ? <div>
    <h1>{data.title}</h1>
    <h1>{data.price}</h1>
    
        </div> :null }
    


</div>



}