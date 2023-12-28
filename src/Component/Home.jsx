import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      
      <div className='container-fluid'>
        <div className="row">
          <div className="col-10 mx-auto">
            
              <div className="row home_sec">
                <div className="col-md-6 home-left">
                  <h2>Hey Everyone <span className="vibrate-span">👋</span></h2>
                  <p>"I'm Manjeet Singh, a passionate frontend developer with a keen eye for creating visually appealing and user-friendly websites. With expertise in HTML, CSS, JavaScript, and React, . My dedication to staying at the forefront of web design trends ensures that I can bring fresh, creative solutions to every project. My portfolio showcases a range of projects that reflect my commitment to creating visually appealing and user-friendly websites. I'm on the lookout for new opportunities in frontend development. Let's build something amazing together!"</p>
                  <NavLink className='btn' to="/projects">My Personal Projects <span className='arrowAbs'> <FontAwesomeIcon icon={faArrowRight} /></span></NavLink>
                </div>

               

                <div className="col-md-6 home-right animate">
                  <img src="images/homeimg.png" alt="" />
                </div>
              </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Home;