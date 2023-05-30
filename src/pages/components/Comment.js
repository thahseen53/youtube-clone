import userProfile from '../../assets/images/userProfile.png'

const Comment = ({data}) => {
 const {user,message} = data
  return (
    <div className='flex gap-3 border m-5'>
        <img  className='w-8 h-8' src={userProfile} alt="user"/>
        <div className='px-3'>
        <h1 className='font-bold'>{user}</h1>
        <p>{message}</p>
        </div>
    </div>
  )
}

export default Comment