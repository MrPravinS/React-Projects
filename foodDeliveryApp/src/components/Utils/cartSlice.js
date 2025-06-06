import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["Burger","Pizza"]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state,) => {
            state.items.pop()
        },
        clearCart: (state)=>{
            state.items.length = 0
        }

    }
})
export const {addItems,removeItem,clearCart} = cartSlice.actions

export default  cartSlice.reducer