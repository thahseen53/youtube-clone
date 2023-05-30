import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../store/sideBarSlice'
import Icon from '../assets/images/hamburger-button.png'
import Logo from '../assets/images/youtube-logo.png'
import { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/dataSevice'
const Header = () => {
  const dispatch = useDispatch()
  // const[searchSuggestions,setSearchSuggestions] = useState([])
  // const [searchTerm,setSearchTerm] = useState("")
  // const [showSuggestions,setShowSuggestions] = useState(false)
  const handleSidebar = ()=>{
   dispatch(toggleSidebar())
  }
  // useEffect(()=>{
  //   const timer =setTimeout(() => {
  //     getSearchSuggestions(searchTerm)
  //   }, 200);
  //   return ()=>{
  //     clearTimeout(timer)
  //   }
  // },[searchTerm])
  // const getSearchSuggestions = async(searchTerm)=>{
  //   const response = await fetch(YOUTUBE_SEARCH_API+searchTerm)
  //   const data = await response.json()
  //   setSearchSuggestions(data[1])
  // }
  return (
    
    <header className="container flex items-center w-full  bg:white px-4">
       <div className='flex items-center w-48 '>
        <img className=' w-6 mr-8 cursor-pointer' alt="sidebar" src={Icon} onClick={()=>handleSidebar()} />
        <img className=' w-24' alt="logo" src={Logo}/>
       </div>
       <div className="relative w-6/12 ml-28">
            <input 
            type="search" id="search-dropdown" 
            className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-l-lg rounded-r-lg border-l-gray-50 border-l-1 border outline-none" 
            placeholder="Search" 
            // value={searchTerm}
            // onChange={(e)=>setSearchTerm(e.target.value)}
            // onFocus={()=>setShowSuggestions(true)}
            // onBlur={()=>setShowSuggestions(false)}
            />
            <button type="submit" className="absolute top-0 right-0 py-2.5 px-5 text-sm font-medium text-black bg-slate-200 rounded-r-lg border-l-gray-50 border-l-1 border ">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
          {/* {
          showSuggestions && (<div className='bg-white w-full absolute mt-1 rounded-lg shadow'>
            <ul className='px-2 m-3'>
             {searchSuggestions.map((suggestion,index )=> <li key={index}>{suggestion}</li> )} 
            </ul>
        </div>)
        } */}
       </div>

       <div className='ml-auto'>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle w-8 h-full" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
       </div>
    </header>

  )
}

export default Header