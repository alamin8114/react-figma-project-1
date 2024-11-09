import "./Provide.css"
import { AiOutlineCheck } from "react-icons/ai";
const Provide = () => {
  return (
    <section className="Provide">
        <div className="container">
            <div className="alamin-provide">
                <div className="Provide-img">
                    <img src="images/provide-img.png" alt="Provide img" />
                </div>
                <div className="provide-text">
                    <h2>
                    We Provide Many Features You Can Use
                    </h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <div className="single-right-icon">
                    <div className="right-icon">
                    <AiOutlineCheck  className="tik-mark"/>
                    </div>
                    <p>Powerfull online protection.</p>
                </div><div className="single-right-icon">
                    <div className="right-icon">
                    <AiOutlineCheck  className="tik-mark"/>
                    </div>
                    <p>Internet without borders.</p>
                </div><div className="single-right-icon">
                    <div className="right-icon">
                    <AiOutlineCheck  className="tik-mark"/>
                    </div>
                    <p>Supercharged VPN</p>
                </div><div className="single-right-icon">
                    <div className="right-icon">
                    <AiOutlineCheck  className="tik-mark"/>
                    </div>
                    <p>No specific time limits.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Provide