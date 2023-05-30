import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addComment:(state,action)=>{
            state.messages.splice(20,1)
            state.messages.unshift(action.payload)
        }
    }
})

export const {addComment} = liveChatSlice.actions
export default liveChatSlice.reducer