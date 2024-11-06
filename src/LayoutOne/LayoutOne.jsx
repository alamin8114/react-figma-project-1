import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import MobleRes from "../components/Mobleres/MobleRes"

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <MobleRes/>
    <Outlet/>
    </>
  )
}

export default LayoutOne