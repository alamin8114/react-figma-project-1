import './Customer.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<FaRegArrowAltCircleRight/>,
    prevArrow:<FaRegArrowAltCircleLeft />
  };
  return (
    <section className='customer'>
        <div className="container">
            <div className="customer-head">
                <h1>Trusted by Thousands of Happy Customer</h1>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            <div className="slider-box">
            <div className="slider-container">
      <Slider {...settings}>
        <div>
            <div className="single-slider">
            <div className="slider-heading">
              <div className="slider-img">
                  <img src="images/man-1.png" alt="slider img" />
              <div className="slider-head">
                <h2>Viezh Robert</h2>
                <p>Warsow,Ploand</p>
              </div>
              </div>
              <div className="reting">
                <p>4.5</p>
                <span><FaStar className='icon'/></span>
              </div>
            </div>
            <div className="slider-text">
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            </div>
        </div>
        <div>
            <div className="single-slider slider-set">
            <div className="slider-heading">
              <div className="slider-img">
                  <img src="images/man-2.png" alt="slider img" />
              <div className="slider-head">
                <h2>Yessica Christy</h2>
                <p>Shanxi, China</p>
              </div>
              </div>
              <div className="reting">
                <p>4.5</p>
                <span><FaStar className='icon'/></span>
              </div>
            </div>
            <div className="slider-text">
              <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
            </div>
            </div>
        </div>
        <div>
            <div className="single-slider">
            <div className="slider-heading">
              <div className="slider-img">
                  <img src="images/man-3.png" alt="slider img" />
              <div className="slider-head">
                <h2>Kim Young Jou</h2>
                <p>Seoul, South Korea</p>
              </div>
              </div>
              <div className="reting">
                <p>4.5</p>
                <span><FaStar className='icon'/></span>
              </div>
            </div>
            <div className="slider-text">
              <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
            </div>
            </div>
        </div>
      </Slider>
      </div>
          </div>
          <div className="subscribe">
            <div className="subscribe-head">
              <h2>Subscribe Now for Get Special Features!</h2>
              <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div className="subscribe-button">
              <Link>Subscribe Now</Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Customer