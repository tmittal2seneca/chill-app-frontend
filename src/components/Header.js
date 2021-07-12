import { React, useState } from 'react';
import "../css/App.css";
import logo from '../images/logo.png';
import { Button, Modal, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const setSignUpClose = () => setSignUp(false);
    const setSignUpShow = () => setSignUp(true);
    const setSignInClose = () => setSignIn(false);
    const setSignInShow = () => setSignIn(true);
    return (
        <>
            <header>
                <Navbar>
                    <Navbar.Brand className="mb-4" href="/"><img src={logo} alt="Website Logo" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="text-light h6" href="/movielisting">Movies</Nav.Link>
                        <Nav.Link className="text-light h6" href="/tvlisting">TV</Nav.Link>
                        <Nav.Link className="text-light h6" href="#">Free</Nav.Link>
                        <Nav.Link className="text-light h6" href="#">MyChill</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button className="bg-dark mb-5 border-0" onClick={setSignUpShow}>Sign Up</Button>
                        <Button className="bg-dark mb-5 border-0" onClick={setSignInShow}>Sign In</Button>
                    </Form>
                </Navbar>
            </header>

            {/* Sign up Modal View */}

            <Modal show={signUp} onHide={setSignUpClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className="registerContainer">
                <label for="firstName">First Name:</label>
                <input type="text" name="firstName" required /><br></br>

                <label for="lastName">Last Name:</label>
                <input type="text" name="lastName" required /><br></br>

                <label for="email">Email:</label>
                <input type="email" placeholder="Enter email" name="email" required /><br></br>

                <label for="birthDate">Date of Birth:</label>
                <input type="date" name="birthDate" required /><br></br>

                <label for="psw">Password:</label>
                <input type="password" placeholder="Enter password" name="psw" required /><br></br>

                <label for="cpsw">Confirm Password:</label>
                <input type="password" placeholder="Confirm password" name="cpsw" required /><br></br>

                <label for="mobile">Mobile No:</label>
                <input type="tel" name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" required /><br></br>

                <label for="terms">Terms and Conditions:</label>
                <input type="checkbox" id="termsCheckbox" name="termsCheckbox" value="termsCheckbox" required></input>
                <label type="terms">I have read and agreed to the <a href="#">terms and conditions.</a></label><br></br>

                <button type="submit">SUBMIT</button>
            </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={setSignUpClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Sign In Modal View */}

            <Modal show={signIn} onHide={setSignInClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className="loginContainer">
                <label for="email">Email:</label>
                <input type="email" placeholder="Enter Email" name="email" required /><br></br><br></br>

                <label for="psw">Password:</label>
                <input type="password" placeholder="Enter Password" name="psw" required /><br></br><br></br>

                    <button type="submit">LOGIN</button><br></br>
                <p>
                    <a href="#">Reset Password</a>
                </p>
            </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={setSignInClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header
