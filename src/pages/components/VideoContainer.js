import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../../utils/dataSevice"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer = () => {
  const [videos,setVideos] = useState([])
  useEffect(()=>{
       getVideoList()
  },[])
  async function getVideoList (){
    const response = await fetch(YOUTUBE_VIDEOS_API)
    const data = await response.json()
    setVideos(data.items)
}

  return (
    <div className="flex flex-wrap w-full">
        {videos.map(video =>(<Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard video={video}/>
          </Link>
          ))}
    </div>
  )
}

export default VideoContainer