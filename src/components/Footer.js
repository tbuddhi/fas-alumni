import React from 'react'

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h2>FAS ALUMNI</h2>
                    </div>
                    <div className="col">
                        <div className="li-wrapper">
                            <h2 className="footer__listTitle">About Us</h2>
                            <ul>
                                <li><a href="./">Mission Statement</a></li>
                                <li><a href="./">History</a></li>
                                <li><a href="./">Members Directory</a></li>
                                <li><a href="./">Photo Gallery</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="li-wrapper">
                            <h2 className="footer__listTitle">Academics</h2>
                            <ul>
                                <li><a href="./">Departments</a></li>
                                <li><a href="./">Guidance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="li-wrapper">
                            <h2 className="footer__listTitle">Events</h2>
                            <ul>
                                <li><a href="./">Alumni Events</a></li>
                                <li><a href="./">Facalty Events</a></li>
                                <li><a href="./">Scholarship Programs</a></li>
                                <li><a href="./">Our Winnings</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="li-wrapper">
                            <h2 className="footer__listTitle">Students</h2>
                            <ul>
                                <li><a href="./">Member's Area</a></li>
                                <li><a href="./">Scholarships</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer