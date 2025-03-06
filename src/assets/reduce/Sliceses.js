import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state, action){
            state.push(action.payload)
           console.log(state);
           
        },
        remove(state, action){
           return state.filter((ele)=> ele.id !== action.payload )
            console.log(state);

            
        }
    }
})
export const {add, remove} = cartSlice.actions
export default cartSlice.reducer