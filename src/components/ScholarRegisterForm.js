import React, { useState } from 'react';
import fireDB from '../database/fireDB';

const initState = {
    name: '',
    email: '',
    numOfSiblings: ''
}

const ScholarRegisterForm = () => {
    const [state, setState] = useState(initState);
    // const [data, setData] = useState({});

    const { name, email, numOfSiblings } = state;

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleScholarRegistration = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("Please fill all fields");
        } else {
            fireDB.child("ScholarRegistration").push( state, (err) => {
                if(err){
                    console.log("Error Msg:" + err);
                } else {
                    alert("success");
                }
            })
        }

    }

    return (
        <div>
            <div className="pb-4 pt-3 d-flex justify-content-end">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseExample">
                    Register for Scholarship
                </button>
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
                                <input className="form-check-input" type="radio" name="exampleRadios" id="genderMale" value="option1" />
                                <label className="form-check-label" htmlFor="genderMale">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="genderFemale" value="option2" />
                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">University registration number *</label>
                            <input type="text" className="form-control" id="inputPassword4" />
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
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Permanent Address</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">District *</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">Telephone No (Land phone):</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputZip" className="form-label">Mobile No: *</label>
                            <input type="text" className="form-control" id="inputZip" />
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
                                <option selected>First Year</option>
                                <option selected>Second Year</option>
                                <option selected>Third Year</option>
                                <option selected>Fourth Year</option>
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