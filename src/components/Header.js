import { React, useState } from 'react';
import "../css/App.css";
import logo from '../images/logo.png';
import { Button, Modal, Nav, Navbar, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const setSignUpClose = () => setSignUp(false);
    const setSignUpShow = () => setSignUp(true);
    const setSignInClose = () => setSignIn(false);
    const setSignInShow = () => setSignIn(true);
    const history = useHistory();
    //register
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        password: "",
        confirmpassword: "",
        mobile: ""
    })

    const submitForm = (e) => {
        //for submitting a post request to server API with the data that user enters

        e.preventDefault();

        fetch("https://chill-app-backend.herokuapp.com/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == "Added user successfully") {
                    alert(data.message);
                    setUser({
                        firstName: "",
                        lastName: "",
                        email: "",
                        birthDate: "",
                        password: "",
                        confirmpassword: "",
                        mobile: ""
                    })
                }
                else
                    alert(data.message);
            })
            .catch(err => console.log(`Error : ${err}`))
    }

    //login
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const loginForm = (e) => {
        //for submitting a post request to server API with the data that user enters

        e.preventDefault();

        fetch("https://chill-app-backend.herokuapp.com/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == "Your login was successful.") {
                    alert(data.message);
                    history.push({
                        pathname: '/user',
                        state: { emailEntered: login.email }
                    })
                }
                else {
                    alert(data.message);
                }
            })
            .catch(err => console.log(`Error : ${err}`))
    }

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

                    <form action="/" method="POST" onSubmit={submitForm} className="registerContainer">
                        <label for="firstName">First Name:</label>
                        <input type="text" name="firstName" value={user.firstName} onChange={(event) => {
                            setUser({
                                ...user,
                                firstName: event.target.value
                            })
                        }} /><br></br>

                        <label for="lastName">Last Name:</label>
                        <input type="text" name="lastName" value={user.lastName} onChange={(event) => {
                            setUser({
                                ...user,
                                lastName: event.target.value
                            })
                        }} /><br></br>

                        <label for="email">Email:</label>
                        <input type="text" placeholder="abcd@chill.com" name="email" value={user.email} onChange={(event) => {
                            setUser({
                                ...user,
                                email: event.target.value
                            })
                        }} /><br></br>

                        <label for="birthDate">Date of Birth:</label>
                        <input type="text" name="birthDate" placeholder="yyyy-mm-dd" value={user.birthDate} onChange={(event) => {
                            setUser({
                                ...user,
                                birthDate: event.target.value
                            })
                        }} /><br></br>

                        <label for="psw">Password:</label>
                        <input type="password" placeholder="minimum 8 characters" name="password" value={user.password} onChange={(event) => {
                            setUser({
                                ...user,
                                password: event.target.value
                            })
                        }} /><br></br>

                        <label for="cpsw">Confirm Password:</label>
                        <input type="password" placeholder="Confirm password" name="confirmpassword" value={user.confirmpassword} onChange={(event) => {
                            setUser({
                                ...user,
                                confirmpassword: event.target.value
                            })
                        }} /><br></br>

                        <label for="mobile">Mobile No:</label>
                        <input type="text" name="mobile" placeholder="10 digit: xxxxxxxxxx" value={user.mobile} onChange={(event) => {
                            setUser({
                                ...user,
                                mobile: event.target.value
                            })
                        }} /><br></br>

                        <label for="terms">Terms and Conditions:</label>
                        <input type="checkbox" id="termsCheckbox" name="termsCheckbox" value="termsCheckbox" required></input>
                        <label type="terms">I have read and agreed to the <a href="#">terms and conditions.</a></label><br></br>

                        <button type="submit">SUBMIT</button>
                    </form>

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

                    <form action="/" method="POST" onSubmit={loginForm} className="loginContainer">
                        <label for="email">Email:</label>
                        <input type="text" placeholder="Enter Email" value={login.email} name="email" required onChange={(event) => {
                            setLogin({
                                ...login,
                                email: event.target.value
                            })
                        }} /><br></br><br></br>

                        <label for="psw">Password:</label>
                        <input type="password" placeholder="Enter Password" value={login.password} name="password" required onChange={(event) => {
                            setLogin({
                                ...login,
                                password: event.target.value
                            })
                        }} /><br></br><br></br>

                        <button type="submit">LOGIN</button><br></br>
                        <p>
                            <a href="#">Reset Password</a>
                        </p>
                    </form>

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
