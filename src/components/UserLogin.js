import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const UserLogin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="user-login">
                <button onClick={handleShow}>SIGN IN</button>
                <button onClick={handleShow}>SIGN UP</button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>SIGN IN/ SIGN UP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Under Development
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserLogin