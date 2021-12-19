import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
    // let url="";
    
    return (
        <>
        <nav className="navbar navbar-expand-lg customNavbar mt-auto">
            <div className="customNavbar__wrapper">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav customNavbar__nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/our-events" aria-current="page">
                        {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                        Our Events
                        </Link>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href={url}>Action</a></li>
                            <li><a className="dropdown-item" href={url}>Another action</a></li>
                            <li><a className="dropdown-item" href={url}>Something else here</a></li>
                        </ul> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>           
        </>
    );
};

export default HeaderNavbar;