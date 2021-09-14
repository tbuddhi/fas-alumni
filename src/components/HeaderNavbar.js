import React from 'react';

const HeaderNavbar = () => {
    // let url="";
    
    return (
        <>
        <nav className="navbar navbar-expand-lg customNavbar mt-auto">
            <div className="customNavbar__wrapper">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav customNavbar__nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={() => false}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => false}>About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href={() => false} aria-current="page">
                        {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                        Our Events
                        </a>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href={url}>Action</a></li>
                            <li><a className="dropdown-item" href={url}>Another action</a></li>
                            <li><a className="dropdown-item" href={url}>Something else here</a></li>
                        </ul> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => false}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>           
        </>
    );
};

export default HeaderNavbar;