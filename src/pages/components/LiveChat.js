import { useEffect } from "react"
import LiveComment from "./LiveComment"
import { useDispatch, useSelector } from "react-redux"
import { addComment } from "../../store/liveChatSlice"


const LiveChat = () => {
    const commentsList = useSelector(store=>store.chat.messages)
    const dispatch = useDispatch()
    useEffect(()=>{
       const addComments= setInterval(() => {
            dispatch(addComment({
                user:"thahsi" + Math.floor(Math.random()* 99) ,
                comment:"hello there this is live baby"
            }))
        }, 2000);
        return()=>{
            clearInterval(addComments)
        }
    },[])
  return (
    <>
    <h1 className="font-bold text-2xl text-center">Live chat</h1>
    <div className="w-full h-[600px] bg-slate-200 p-2 overflow-y-scroll flex flex-col-reverse">
        
        {commentsList.map((comment,index)=>(
            <LiveComment key={index} name={comment.user} comment={comment.comment} />
        ))}
    </div>
    </>
  )
}

export default LiveChat