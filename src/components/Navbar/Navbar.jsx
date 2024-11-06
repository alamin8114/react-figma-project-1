import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <div className="container">
            <div className="menu-row">
                <div className="logo">
                    <img src="images/nav-Logo.png" alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><Link to={""}>Features</Link></li>
                        <li><Link to={""}>Pricing</Link></li>
                        <li><Link to={""}>Testimonials</Link></li>
                        <li><Link to={""}>Help</Link></li>
                    </ul>
                </div>
                <div className="button">
                    <Link className="btn1" to={"#"}>Sign In</Link>
                    <Link className="btn2"  to={"#"}>Sign Up</Link>
                </div>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar