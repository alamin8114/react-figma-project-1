import { Link } from "react-router-dom";
import "./Plan.css"
import { AiOutlineCheck } from "react-icons/ai";
const Plan = () => {
  return (
    <section className="plan">
        <div className="container">
            <div className="plan-head">
                <h1>
                    Choose Your Plan
                </h1>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className="plan-row">
                <div className="single-plan">
                    <div className="plan-box">
                    <img src="images/Free.png" alt="Plan img" />
                    <h3>Free Plan</h3>   
                        <div className="text-icon">
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon"/>
                                    <p>Unlimited Bandwitch</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>Encrypted Connection</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>No Traffic Logs</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>Works on All Devices</p>
                                </div>
                            </div>            
                        <div className="rate">
                            <h4>Free</h4>
                        </div>
                        <div className="button-last">
                            <Link to={""}>Select</Link>
                        </div>
                    </div>
                </div>
                <div className="single-plan">
                    <div className="plan-box">
                    <img src="images/Free.png" alt="Plan img" />
                    <h3>Free Plan</h3>               
                    <div className="text-icon">
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon"/>
                                    <p>Unlimited Bandwitch</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>Encrypted Connection</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>No Traffic Logs</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>Works on All Devices</p>
                                </div>
                            </div>   
                        <div className="rate">
                            <h4>$9 / mo</h4>
                        </div>
                        <div className="button-last">
                            <Link to={""}>Select</Link>
                        </div>
                    </div>
                </div>
                <div className="single-plan">
                    <div className="plan-box">
                    <img src="images/Free.png" alt="Plan img" />
                    <h3>Free Plan</h3>               
                    <div className="text-icon">
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon"/>
                                    <p>Unlimited Bandwitch</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>Encrypted Connection</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>No Traffic Logs</p>
                                </div>
                                <div className="icon-text">
                                    <AiOutlineCheck className="icon" />
                                    <p>Works on All Devices</p>
                                </div>
                            </div>   
                        <div className="rate">
                            <h4>$12 / mo</h4>
                        </div>
                        <div className="button-last">
                            <Link to={""}>Select</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plan