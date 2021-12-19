import React, { useState, useEffect } from 'react'
import fireDB from '../database/fireDB';

const ScholarViewTable = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fireDB.child("ScholarRegistration").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        })
        return () => {
            setData({})
        }
    }, []);

    return (
        <div>
               <section>
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Num Of Siblings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((id, index) => {
                                return (
                                    <tr key={id}>
                                        <th scope='row'>{index + 1}</th>
                                        <th>{data[id].name}</th>
                                        <th>{data[id].email}</th>
                                        <th>{data[id].numOfSiblings}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>        
        </div>
    )
}

export default ScholarViewTable;