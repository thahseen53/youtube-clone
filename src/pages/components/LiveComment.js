import userProfile from '../../assets/images/userProfile.png'
const LiveComment = ({name,comment}) => {
  return (
    <div className='flex items-center gap-2 m-2'>
        <img className='h-7' src={userProfile}  alt={name}/>
            <span className='font-bold'>{name}</span>
            <p>{comment}</p>
    </div>
  )
}

export default LiveComment