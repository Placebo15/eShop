import React, { useState } from 'react';
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
    MDBCheckbox
} from 'mdb-react-ui-kit';
import './userRegistration.css';




export const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleCheckboxChange = () => {
        setSubscribe(!subscribe);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform registration logic here
        console.log('Registration data:', {
            name,
            email,
            password,
            repeatPassword,
            subscribe
        });
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setSubscribe(false);
    };

    return (
        <MDBContainer fluid className='registration'>
            <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
                <MDBCardBody className='cardB'>
                    <MDBRow>
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
                                    required="reqired"
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size="lg" />
                                <MDBInput
                                    id="form2"
                                    type="email"
                                    value={email}
                                    onChange={(e) => handleInputChange(e, setEmail)}
                                    labelClass="customLabel"
                                    label="Your e-mail"
                                    required="reqired"
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
                                    label="Your passwrod"
                                    required="reqired"
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
                                    required="reqired"
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
        </MDBContainer>
    );
};
