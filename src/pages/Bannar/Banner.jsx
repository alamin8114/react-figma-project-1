import { Link } from "react-router-dom"
import "./Bannner.css"

const Banner = () => {
  return (
    <section className="banner">
        <div className="container">
            <div className="alamin-banner-row">
                <div className="banner-text">
                    <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                    <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <Link to={''}>Get Started</Link>
                </div>
                <div className="banner-img">
                    <img src="images/banner-img.png" alt="banner-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner