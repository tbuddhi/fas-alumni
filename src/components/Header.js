import React from 'react'
import HeaderNavbar from './HeaderNavbar'

const Header = () => {
    return (
        <div className="header">
            {/* <div className="header-overlay"></div> */}
            <div className="container">
                <div className="row">
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col">
                                <h1 className="pt-1 text-white customHeading">Applied Alumni</h1>
                                <h5 className="pt-1 text-white text-uppercase">Rajarata University of Sri Lanka</h5>
                            </div>
                        </div>
                        <div className="row">
                            <HeaderNavbar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header