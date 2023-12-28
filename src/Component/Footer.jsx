import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <hr/>

            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="footer">
                                <ul className="footer_icon name_social">
                                <li className='git'><a href="#"><FaGithub /></a></li>
                                <li className='insta'><a href="#"><FaInstagram /></a></li>
                                <li className='linkdln'><a href="#"><FaLinkedinIn /></a></li>
                                <li className='mail'><a href="#"><FaEnvelope /></a></li>
                                </ul>

                                <div className="footer_intro">
                                    <h3>Manjeet Singh <span>|</span> Frontend Web Developer</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;