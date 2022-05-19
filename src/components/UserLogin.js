import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import LoginButton from './AuthButtons/LoginButton';
import SignupButton from './AuthButtons/SignupButton';
import LogoutButton from './AuthButtons/LogoutButton';

const UserLogin = () => {
    const { isAuthenticated } = useAuth0();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <div className="user-login">
                { isAuthenticated &&  (<LoginButton /> )}
                { !isAuthenticated && ( <LogoutButton /> )}
                {/* <button onClick={handleShow}>SIGN IN</button> */}
                <SignupButton />
                {/* <button onClick={handleShow}>SIGN UP</button> */}
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

// export default withAuthenticationRequired(UserLogin, {
//     onRedirecting: () => <div>Loading</div>,
// });

export default UserLogin