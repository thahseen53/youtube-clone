import { useSelector } from "react-redux"

const SideBar = () => {
  const showSideBar = useSelector(store=>store.sideBar.isSidebaropen)
  if(!showSideBar) return null
  return (

      <ul className="w-96 px-8 border-r  sidebar-height text-center flex flex-col">
        <li className="p-3 cursor-pointer  border-b-1  hover:bg-gray-100">Home</li>
        <li className="p-3 cursor-pointer border-b-1 hover:bg-gray-100">Subscription</li>
        <li className="p-3 cursor-pointer border-b-1 hover:bg-gray-100">Watch later</li>
        <li className="p-3 cursor-pointer  border-b-1 hover:bg-gray-100">History</li>
        <li className="p-3 cursor-pointer  border-b-1 hover:bg-gray-100">Liked videos</li>
        <li className="p-3 cursor-pointer hover:bg-gray-100">shorts</li>

      </ul>
  )
  
}

export default SideBar