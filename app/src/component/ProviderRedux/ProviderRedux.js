'use client';
import meraStore from "@/store/store";
import { Provider } from "react-redux";
export default function ProviderRedux({children}){



return <Provider store={meraStore} >

{children}

</Provider>



}