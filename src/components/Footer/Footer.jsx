import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer bg-dark text-light">
            <div className="footer-content text-light">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text  text-light">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        {/* <FaLocationArrow /> */}
                        <div className="text text-light">
                        82X5+C7P, Salamat Pura Salamatpura, Phularwan, Sargodha, Punjab, Pakistan
                        </div>
                    </div>
                    <div className="c-item">
                        {/* <FaMobileAlt className=" text-light" /> */}
                        <div className="text text-light">Phone: +92 320 6763 132</div>
                    </div>
                    <div className="c-item">
                        {/* <FaEnvelope /> */}
                        <div className="text text-light">Email: asimshahzad7886@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text  text-light">Headphones</span>
                    <span className="text  text-light">Smart Watches</span>
                    <span className="text  text-light">Bluetooth Speakers</span>
                    <span className="text  text-light">Wireless Earbuds</span>
                    <span className="text  text-light">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text  text-light">Home</span>
                    <span className="text  text-light">About</span>
                    <span className="text  text-light">Privacy Policy</span>
                    <span className="text  text-light">Returns</span>
                    <span className="text  text-light">Terms & Conditions</span>
                    <span className="text  text-light">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text text-light">
                        Online Store 2024 CREATED BY ASIM SHAHZAD. E-COMMERCE WEBSITE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
