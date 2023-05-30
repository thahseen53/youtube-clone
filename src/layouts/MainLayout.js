import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"


const MainLayout = () => {
  return (
    <div className="flex gap-2">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout