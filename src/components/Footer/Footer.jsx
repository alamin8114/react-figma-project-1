import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
return (
    <section className='footer'>
        <div className="container">
            <div className="footer-row">
            <div className="footer-left">
                <div className="logo">
                    <img src="images/footer-logo.png" alt="footer logo" />
                </div>
                    <p><span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                    <div className="footer-icons">
                        <div className="icon-box">
                            <Link to={""}>
                            <FaFacebookF className='ft-icon'/>
                            </Link>
                        </div>
                        <div className="icon-box">
                            <Link to={""}>
                            <FaTwitter className='ft-icon'/>
                            </Link>
                        </div>
                        <div className="icon-box">
                            <Link to={""}>
                            <FaImage className='ft-icon'/>
                            </Link>
                        </div>
                    </div>
                    <div className="Copy">
                        <p>©2020<span>LaslesVPN</span></p>
                    </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-flex">
                    <div className="footer-text">
                        <h3>Product</h3>
                        <ul>
                            <li><Link>Download</Link></li>
                            <li><Link>Pricing</Link></li>
                            <li><Link>Locations</Link></li>
                            <li><Link>Server</Link></li>
                            <li><Link>Countries</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>Engage</h3>
                        <ul>
                            <li><Link>LaslesVPN ? </Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Tutorials</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>Earn Money</h3>
                        <ul>
                            <li><Link>Affiliate</Link></li>
                            <li><Link>Become Partner</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
)
}

export default Footer