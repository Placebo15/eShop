import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Alert } from 'react-bootstrap';
import './userRegistration.css';

export const Registration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [redirecting, setRedirecting] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleCheckboxChange = () => {
        setSubscribe(!subscribe);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isPasswordValid = (password) => {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return passwordRegex.test(password);
        };

        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!isPasswordValid(password)) {
            setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email address');
            return;
        }

        fetch('https://5426-87-116-163-76.ngrok-free.app/check-existing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.exists) {
                    setError('Username or email already exists');
                    return;
                }

                const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
                fetch('https://5426-87-116-163-76.ngrok-free.app/insert', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query }),
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log('Registration data:', {
                            name,
                            email,
                            password,
                            repeatPassword,
                            subscribe,
                        });
                        setName('');
                        setEmail('');
                        setPassword('');
                        setRepeatPassword('');
                        setSubscribe(false);
                        setError('');
                        setShowAlert(true);
                        setRedirecting(true);
                        const timer = setInterval(() => {
                            setCountdown((prevCountdown) => prevCountdown - 1);
                        }, 1000);
                        setShowAlert(true);
                        setTimeout(() => {
                            navigate('/login');
                            clearInterval(timer);
                        }, 5000);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <MDBContainer fluid className="registration">
            <MDBCard className="text-black m-5">
                <MDBCardBody className="cardB">
                    <MDBRow className="rowB">
                        <MDBCol md="10" lg="6" className="colo">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="user me-3" size="lg" />
                                <MDBInput
                                    id="form1"
                                    type="text"
                                    value={name}
                                    onChange={(e) => handleInputChange(e, setName)}
                                    labelClass="customLabel"
                                    label="Your name"
                                    required="required"
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size="lg" />
                                <MDBInput
                                    id="form2"
                                    type="text"
                                    value={email}
                                    onChange={(e) => handleInputChange(e, setEmail)}
                                    labelClass="customLabel"
                                    label="Your e-mail"
                                    required="required"
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size="lg" />
                                <MDBInput
                                    id="form3"
                                    type="password"
                                    value={password}
                                    onChange={(e) => handleInputChange(e, setPassword)}
                                    labelClass="customLabel"
                                    label="Your password"
                                    required="required"
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size="lg" />
                                <MDBInput
                                    id="form4"
                                    type="password"
                                    value={repeatPassword}
                                    onChange={(e) => handleInputChange(e, setRepeatPassword)}
                                    labelClass="customLabel"
                                    label="Repeat your password"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheckDefault"
                                    label="Subscribe to our newsletter"
                                    checked={subscribe}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                            {showAlert && (
                                <Alert variant="success" onClose={() => setShowAlert(false)} >
                                    User created successfully!
                                </Alert>
                            )}
                            {error && (
                                <Alert className='alertDanger' variant="danger" onClose={() => setError('')} >
                                    {error}
                                </Alert>
                            )}
                            {redirecting && <p style={{ color: 'red' }}>Redirecting to the login page in {countdown} seconds...</p>}
                            <MDBBtn className="mb-4 register-button" size="lg" onClick={handleSubmit}>
                                Register
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer >
    );
};
