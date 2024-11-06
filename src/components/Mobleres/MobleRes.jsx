import "./RasMobile.css"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const MobleRes = () => {
  const [show,setshow]=useState(false)
  return (
    <>
    <nav className="res-nav">
    <div className="container">
            <div className="res-menu-row">
                <Link className="res-logo">
                    <img src="images/nav-Logo.png" alt="logo" />
                </Link>
                    <div onClick={()=>{setshow(!show)}} className="res-icon">
                    <FaBars className="icon" />
                    </div>
            </div>
            {
                show &&
                <ul className="res-navbar">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Help</a></li>
                </ul>

            }
    </div>
    </nav>
    </>
  )
}

export default MobleRes