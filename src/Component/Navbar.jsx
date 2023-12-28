import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';



const Navbar = () => {

    const [fix, SetFix] = useState(false);

    const navFIx = () => {
        if (window.scrollY >= 10) {
            SetFix(true)
            console.log('manjeet singh')
        }else{
            SetFix(false) 
        }
    }

    window.addEventListener('scroll', navFIx);


    return (
        <>

            <div className={fix ? 'container-fluid main-nav sticky' : 'container-fluid main-nav'}>
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                   <img src="images/ManjeetSIngh.png" alt="logo" /> Manjeet Singh</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="about">About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;