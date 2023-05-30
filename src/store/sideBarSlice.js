import { createSlice } from "@reduxjs/toolkit"

const sideBarSlice = createSlice({
    name:"sideBar",
    initialState:{
        isSidebaropen:true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebaropen = !state.isSidebaropen
        },
        openSideBar:(state)=>{
            state.isSidebaropen = true;
        },
        closeSidebar:(state)=>{
            state.isSidebaropen = false;
        }
    }
})
export const {toggleSidebar,closeSidebar,openSideBar} = sideBarSlice.actions
export default sideBarSlice.reducer