
import { useDispatch } from "react-redux"
import { openSideBar } from "../store/sideBarSlice"
import ButtonList from "./components/ButtonList"
import VideoContainer from "./components/VideoContainer"
import { useEffect } from "react"

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(openSideBar())
  },[])
  return (
    <div className="p-5">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Home