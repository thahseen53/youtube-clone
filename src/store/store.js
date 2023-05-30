import { configureStore } from "@reduxjs/toolkit"
import sideBarSlice from "./sideBarSlice"
import liveChatSlice from "./liveChatSlice"

const store = configureStore({
    reducer:{
        sideBar:sideBarSlice,
        chat:liveChatSlice
    }
})

export default store