import React from 'react'
import HomeCarosel from '../HomeCarousel'
import ScholarRegisterForm from '../ScholarRegisterForm'

const Scholarships = () => {
    return (
        <>
        <section className="form-section">
            <div className="container">
                <h1>SCHOLARSHIPS</h1>
                <ScholarRegisterForm />
            </div>
        </section>
        <section className="gallery-section">
            <div className="container">
                <HomeCarosel />
            </div>
        </section>
        </>
    )
}

export default Scholarships