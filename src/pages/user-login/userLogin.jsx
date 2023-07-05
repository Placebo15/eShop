import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './userLogin.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const [forgotPassword, setForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const { setUser } = useContext(ShopContext);

    const handleLogin = (event) => {
        event.preventDefault();

        if (forgotPassword) {
            console.log('Forgot Password - Email:', resetEmail);

            setResetEmail('');
            setForgotPassword(false);
        } else {
            console.log('Logging in with name:', name);
            console.log('Logging in with password:', password);

            fetch('https://5426-87-116-163-76.ngrok-free.app/logs', {
                method: 'POST',
                headers: {
                    "ngrok-skip-browser-warning": "true",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log('Login result:', result);

                    if (result.success) {
                        setUser({ username: name });
                        navigate('/');
                    } else {
                        setError('Invalid username or password');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };


    return (
        <MDBContainer fluid className="login">
            <MDBRow className="rowL">
                <MDBCol col="10" md="6">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid"
                        alt="Phone img"
                    />
                </MDBCol>

                <MDBCol col="4" md="6">
                    {!forgotPassword ? (
                        <>
                            {/* Login Form */}
                            <MDBInput
                                required="required"
                                labelClass="customLabel"
                                wrapperClass="mb-4"
                                label="Email address or username"
                                id="formControlLg"
                                type="text"
                                size="lg"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <MDBInput
                                required="required"
                                labelClass="customLabel"
                                wrapperClass="mb-4"
                                label="Password"
                                id="formControlLg"
                                type="password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                                <a href="#!" onClick={() => setForgotPassword(true)}>
                                    Forgot password?
                                </a>
                            </div>
                            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>
                                Sign in
                            </MDBBtn>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">OR</p>
                            </div>
                            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                <MDBIcon fab icon="facebook-f" className="mx-2" />
                                Continue with Facebook
                            </MDBBtn>
                            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                                <MDBIcon fab icon="twitter" className="mx-2" />
                                Continue with Twitter
                            </MDBBtn>

                            <p className="registerHere" style={{ color: '#393f81' }}>
                                Don't have an account?{' '}
                                <button className="regBtn" onClick={() => navigate('/registration')} style={{ color: '#393f81' }}>
                                    Register here
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            {/* Forgot Password Form */}
                            <MDBInput
                                required="required"
                                labelClass="customLabel"
                                wrapperClass="mb-4"
                                label="Email address"
                                id="formControlLg"
                                type="email"
                                size="lg"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>
                                Reset Password
                            </MDBBtn>
                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <a href="#!" onClick={() => setForgotPassword(false)}>
                                    Back to login
                                </a>
                            </div>
                        </>
                    )}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
