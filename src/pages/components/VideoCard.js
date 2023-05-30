

const VideoCard = ({video}) => {
    const {snippet,statistics} = video
    const {channelTitle,title,thumbnails} = snippet
  return (
    <div className="w-60 shadow-lg px-2 py-4 hover:w-64">
        <img className="rounded-md" src={thumbnails.high.url} alt={title}/>
        <ul>
            <li className="font-bold text-md mt-2">{title}</li>
            <li className="text-sm text-slate-500 mt-2">{channelTitle} <span className="my-auto">.</span> {statistics.viewCount} views</li>
           
        </ul>
    </div>
  )
}

export default VideoCard