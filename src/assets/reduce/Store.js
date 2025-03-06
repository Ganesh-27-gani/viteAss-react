import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from "./Sliceses"

const store =  configureStore({
    reducer:{
        Cart: cartReducer
    }
})
export default store