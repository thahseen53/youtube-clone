import Comment from "./Comment"

const comments = [
    {
    user:"thahsi",
    message:"this is awesome",
    replies:[
        {
            user:"thahsi2",
            message:"what is awesome",
            replies:[{
                user:"thahsi",
                message:"the video is awesome",
                replies:[]
            }]
        }
         ]
    },
    {
        user:"video editor",
        message:"i can edit this video?",
        replies:[{
            user:"starnger",
            message:"please do it",
            replies:[]
        }]
    },
    {
        user:"stranger2",
        message:"Wowwww",
        replies:[]
    }
]

const CommentList = ({comments}) => {
  return comments.map((comment,index)=>(
    <>
    <Comment key={index} data={comment} />
    <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
    </div>
    </>
  ))
}

const CommentsContainer = ()=>{
    console.log(comments)
    return (
    <CommentList comments={comments} />
    )
}

export default CommentsContainer