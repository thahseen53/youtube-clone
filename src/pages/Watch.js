import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeSidebar } from "../store/sideBarSlice"
import CommentsContainer from "./components/CommentList"
import LiveChat from "./components/LiveChat"


const Watch = () => {
    const[search] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])
  return (
    <div className="flex flex-col m-5 w-full">
        <div className=" flex w-full p-4">
      <div className="">
        <iframe width="1000" height="600" src={"https://www.youtube.com/embed/" + search.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="w-full px-2 ml-2">
      <LiveChat />
    </div>
      </div>
    <div className="w-full">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsContainer />
    </div>
    </div>
  )
}

export default Watch