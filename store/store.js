import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";


 let meraStore = configureStore({

    reducer:authSlice.reducer

})

export default meraStore;

