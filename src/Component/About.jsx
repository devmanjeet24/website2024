import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-10 mx-auto">

            <div className="row">

              <div className="col-md-5 myself">
                <div className="img_myself">
                  <img src="images/manjeetphoto.png" alt="manjeetsingh" />

                </div>
                <div className='Name_mdcss'>
                  <h3>Manjeet Singh</h3>
                  <ul className="name_social">
                    <li className='git'><NavLink to="#"><FaGithub /></NavLink></li>
                    <li className='insta'><NavLink to="#"><FaInstagram /></NavLink></li>
                    <li className='linkdln'><NavLink to="#"><FaLinkedinIn /></NavLink></li>
                    <li className='mail'><NavLink to="#"><FaEnvelope /></NavLink></li>
                  </ul>
                </div>

              </div>

              <div className="col-md-1"></div>

              <div className="col-md-6">
                <div className="about_right main_line">
                  <h2>About My Self</h2>
                  <h3>Hi I'm Manjeet Singh</h3>
                  <p>With one year of experience as a web frontend developer, I'm committed to keeping up with the latest technology trends and constantly expanding my knowledge. In my spare time, I find inspiration and relaxation in music, which I use to infuse creativity into my work. I'm eager to learn and incorporate more exciting elements into both my professional and personal life, and I value the insights you provide.</p>

                </div>
              </div>

            </div>

            <div className="row mt-5">
              <div className="col-md-6 main_line">
                 <h2>About My Skills</h2>
                 <p>I am a web developer with a strong skill set in front-end development, encompassing HTML, CSS, and JavaScript, including popular libraries and frameworks like React. Additionally, I have extensive experience in customizing websites using content management systems (CMS) such as WordPress and Shopify. I also possess knowledge of SEO best practices, enabling me to optimize websites for search engines, improve their ranking, and enhance online visibility. Proficient in GitHub for version control, I ensure codebase integrity and efficient teamwork. My commitment to responsive design, web performance optimization, security best practices, and adherence to web accessibility standards ensures that the web applications I create are not only visually appealing but also performant and inclusive.</p>
              </div>

              <div className="col-1"></div>

              <div className="col-md-5 main_aboutSec">
                <div className="animate">
                  <img src="images/about.png" alt="about" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About;