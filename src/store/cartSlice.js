import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItemToCart:(state,action)=>{
           const item = action.payload;         
           const exists = state.items.find(p=>p.id === item.id);

           if(exists){
            exists.quantity++;
           }
           else{
            state.items.push({...item,quantity:1});
           }
        },
        removeItemFromCart:(state,action)=>{
            state.items=state.items.filter(p=>p.id!==action.payload);
        },
        incQty:(state,action)=>{
            const item = state.items.find(p=>p.id===action.payload);
            if(item){
                item.quantity++;
            }
        },
        decQty:(state,action)=>{
            const item = state.items.find(p=>p.id===action.payload);
            if(item && item.quantity>1){
                item.quantity--;
            }
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }

});
export const {addItemToCart,removeItemFromCart,incQty,decQty,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
