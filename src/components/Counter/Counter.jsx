import "./Counter.css"
import { FaUser } from "react-icons/fa6";
import CountUp from 'react-countup';
const Counter = () => {
return (
    <section className="Counter">
        <div className="container">
            <div className="alamin-main-counter">
                <div className="single-counter">
                    <div className="alamin-counter">
                    <div className="count-icon">
                        <FaUser className="icon-count"/>
                    </div>
                    <div className="main-count">
                        <div className="counter-box">
                        <CountUp end={90} className="count"/>
                        <div className="plus">+</div>
                        </div>
                        <div className="text"><h4>Users</h4></div>
                    </div>
                </div>
                        <div className="count-line">
                        </div>
                </div>
                <div className="single-counter">
                    <div className="alamin-counter">
                    <div className="count-icon">
                        <FaUser className="icon-count"/>
                    </div>
                    <div className="main-count">
                        <div className="counter-box">
                        <CountUp end={30} className="count"/>
                        <div className="plus">+</div>
                        </div>
                        <div className="text"><h4>Users</h4></div>
                    </div>
                </div>
                        <div className="count-line">
                        </div>
                </div>
                <div className="single-counter">
                    <div className="alamin-counter">
                    <div className="count-icon">
                        <FaUser className="icon-count"/>
                    </div>
                    <div className="main-count">
                        <div className="counter-box">
                        <CountUp end={50} className="count"/>
                        <div className="plus">+</div>
                        </div>
                        <div className="text"><h4>Users</h4></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Counter