import React, { useState, useRef } from 'react';
import fireDB from '../database/fireDB';
import { Modal, Button } from 'react-bootstrap';

const initState = {
    name: '',
    email: '',
    numOfSiblings: '',
    regNumber: '',
    contactAddress: '',
    permanentAddress: '',
    selectedDistrict: '',
    phoneLand: '',
    phoneMobile: ''
}



const districts = ['Colombo', 'Kandy', 'Galle', 'Ampara', 'Anuradhapura',
    'Badulla', 'Batticaloa', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kegalle',
    'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Moneragala', 'Mullativu',
    'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'];

const ScholarRegisterForm = () => {
    const [state, setState] = useState(initState);
    const [show, setShow] = useState(false);
    const [showbtn, setShowbtn] = useState(false);
    const [isError, setIsError] = useState(false);
    const activeCode = useRef(null);

    const { name, email, numOfSiblings, regNumber, contactAddress, permanentAddress,
        phoneLand, phoneMobile } = state;

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleScholarRegistration = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("Please fill all fields");
        } else {
            fireDB.child("ScholarRegistration").push(state, (err) => {
                if (err) {
                    console.log("Error Msg:" + err);
                } else {
                    alert("success");
                }
            })
        }

    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleActivate = (e) => {
        e.preventDefault();

        const inputCode = activeCode.current.value;

        if (inputCode === 'AS2022') {
            setShowbtn(true);
            setShow(false);
        } else {
            setIsError(true);
        }
    };

    return (
        <div>
            <div className="pb-4 pt-3 d-flex ">

                <button className={`btn btn-primary btn-lg ${showbtn? 'btn-hide': 'btn-show'}`}  variant="primary" onClick={handleShow}>
                    Enter Activation Code
                </button> 

                {showbtn &&
                    <button className={`btn btn-primary btn-lg`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseExample">
                        Register for Scholarship
                    </button>
                }

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Activation code</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input className="mb-2 form-control" type="text" ref={activeCode} />
                        {isError &&
                        <div className="alert-danger" role="alert">Please enter correct activation code</div>
                        }
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleActivate}>
                            Activate
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
            <div className="collapse" id="collapseForm">
                <h2 className='mb-5'>Application for Applied-RUSL ALUMNI Scholarships 2022</h2>
                <div className="card card-body">
                    <form className="row g-3" onSubmit={handleScholarRegistration}>
                        {/* <div className='card card-body'> */}
                        <h4>Contact Details</h4>

                        <div className="col-12">
                            <label htmlFor="inputFullname" className="form-label" > Full Name</label>
                            <input
                                type="text" className="form-control" id="inputFullname" placeholder="Full name"
                                name='name'
                                value={name}
                                onChange={handleInputs}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Gender</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="genderMale"
                                    name="gender"
                                    value="Male"
                                    onChange={handleInputs}
                                />
                                <label className="form-check-label" htmlFor="genderMale">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="genderFemale"
                                    name="gender"
                                    value="Female"
                                    onChange={handleInputs}
                                />
                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">University registration number *</label>
                            <input type="text" className="form-control"
                                name="regNumber"
                                value={regNumber}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email *</label>
                            <input
                                type="email" className="form-control" id="inputEmail"
                                name="email"
                                value={email}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Contact Address</label>
                            <input type="text" className="form-control" placeholder="1234 Main St"
                                name="contactAddress"
                                value={contactAddress}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Permanent Address</label>
                            <input type="text" className="form-control" placeholder="Apartment, studio, or floor"
                                name="permanentAddress"
                                value={permanentAddress}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">District *</label>
                            <select id="inputState" className="form-select" defaultValue={'DEFAULT'}
                                name="district"
                                onChange={handleInputs}>
                                <option value="DEFAULT" disabled >Choose your District</option>
                                {districts.map((district, i) =>
                                    (<option key={i} value={district}>{district}</option>)
                                )}
                            </select>
                            {/* <input type="text" className="form-control" /> */}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="phoneLandId" className="form-label">Telephone No (Land phone):</label>
                            <input type="text" className="form-control" id="phoneLandId"
                                name="phoneLand"
                                value={phoneLand}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="phoneMobileId" className="form-label">Mobile No: *</label>
                            <input type="text" className="form-control" id="phoneMobileId"
                                name="phoneMobile"
                                value={phoneMobile}
                                onChange={handleInputs} />
                        </div>
                        <div className="col-12">

                        </div>

                        {/* ---------------------------------------- */}
                        <hr />

                        <h4>Academic Background</h4>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">Year of study *</label>
                            <select id="inputState" className="form-select">
                                <option value="DEFAULT" disabled selected>Choose your year</option>
                                <option>First Year</option>
                                <option>Second Year</option>
                                <option>Third Year</option>
                                <option>Fourth Year</option>
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <label htmlFor="inputGPA" className="form-label">The most recent GPA *</label>
                            <input type="number" className="form-control" id="inputGPA" />
                        </div>
                        <div className='col-md-12'>
                            <label htmlFor="inputGPA" className="form-label">Extra-curricular activities (Sports, Drama, Music etc.)</label>
                            <textarea className="form-control" id="inputGPA" ></textarea>
                        </div>

                        {/* ---------------------------------------- */}
                        <hr />

                        <h4>Family Income</h4>
                        <p className='mt-1'>Information about household income (Please focus on your permanent home)</p>

                        <div className='col-md-6'>
                            <label htmlFor="inputGPA" className="form-label">Father's occupation</label>
                            <input type="text" className="form-control" id="inputGPA" />
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor="inputGPA" className="form-label">Father's income per month</label>
                            <input type="text" className="form-control" id="inputGPA" />
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor="inputGPA" className="form-label">Mother's occupation</label>
                            <input type="text" className="form-control" id="inputGPA" />
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor="inputGPA" className="form-label">Mother's income per month</label>
                            <input type="text" className="form-control" id="inputGPA" />
                        </div>

                        <div className='col-md-12'>
                            <label htmlFor="numOfSiblingsID" className="form-label">Number of siblings (brothers and sisters in your family) who are not earning *</label>
                        </div>
                        <div className='col-md-1 mt-0'>
                            <input type="number" className="form-control" id="numOfSiblingsID"
                                name='numOfSiblings'
                                value={numOfSiblings}
                                onChange={handleInputs} />
                        </div>

                        <div className='col-md-12'>
                            <label htmlFor="inputGPA" className="form-label">List other scholarships you are currently entitled </label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Mahapola
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    University Scholarship
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Bursary
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    None
                                </label>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <label htmlFor="inputGPA" className="form-label">Any other income from which you are currently getting support for
                                your studies? (If the answer is NO, please type it so)</label>
                            <textarea className="form-control" id="inputGPA" ></textarea>
                        </div>

                        <div className='col-md-12'>
                            <label htmlFor="inputGPA" className="form-label">Attach any supportive documents (e.g. Recommendation letters, Gramasevaka
                                certified documents, Samurdhi etc.) </label>
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                    {/* <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label> */}
                                </div>

                            </div>
                            <p><em>Only word document or pdf files are allowed upload.</em></p>
                        </div>

                        {/* ---------------------------------------- */}
                        <hr />

                        <h4>Student verification</h4>

                        <div className='col-md-6'>
                            <label htmlFor="inputGPA" className="form-label">Type your initials to certify that all information provided in this form is accurate. *</label>
                            <input type="text" className="form-control" id="inputGPA" />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        {/* </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ScholarRegisterForm