import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import MobleRes from "../components/Mobleres/MobleRes"
import Home from "../pages/Home"

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <MobleRes/>
    <Home/>
    <Outlet/>
    </>
  )
}

export default LayoutOne