import React, { useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBRadio,
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";
import "./paymentmethod.css";
import { useLocation } from "react-router-dom";

export const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const totalAmount = searchParams.get("totalAmount");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvv, setCvv] = useState("");

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };



    return (
        <MDBContainer className="paymentM">
            <MDBRow className="rowP">
                <MDBCol md="8" className="mb4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <h5 className="mb-0">Billing details</h5>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBRow className="mb-4">
                                <MDBCol>
                                    <MDBInput
                                        label="First name"
                                        id="form1"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => handleInputChange(e, setFirstName)}
                                        labelClass="customLabel"
                                        required="reqired"

                                    />
                                </MDBCol>

                                <MDBCol>
                                    <MDBInput
                                        label="Last name"
                                        id="form2"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => handleInputChange(e, setLastName)}
                                        labelClass="customLabel"
                                        required="reqired"

                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput
                                wrapperClass="mb-4"
                                label="Address"
                                id="form3"
                                type="text"
                                value={address}
                                onChange={(e) => handleInputChange(e, setAddress)}
                                labelClass="customLabel"
                                required="reqired"

                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="E-mail"
                                id="form4"
                                type="text"
                                value={email}
                                onChange={(e) => handleInputChange(e, setEmail)}
                                labelClass="customLabel"
                                required="reqired"

                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Phone"
                                id="form5"
                                type="number"
                                value={phone}
                                onChange={(e) => handleInputChange(e, setPhone)}
                                labelClass="customLabel"
                                required="reqired"

                            />

                            <hr className="my-4" />

                            <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="checkoutForm1"
                                label="Shipping address is the same as my billing address"
                            />
                            <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="checkoutForm2"
                                label=" Save this information for next time"
                                defaultChecked
                            />

                            <hr className="my-4" />

                            <h5 className="mb-4">Payment</h5>

                            <MDBRadio
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                label="Credit card"
                                checked
                            />

                            <MDBRadio
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                label="Debit card"
                            />

                            <MDBRadio
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                label="Paypal"
                                wrapperClass="mb-4"
                            />

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput
                                        label="Name on card"
                                        id="form6"
                                        type="text"
                                        value={nameOnCard}
                                        onChange={(e) => handleInputChange(e, setNameOnCard)}
                                        labelClass="customLabel"
                                        required="reqired"

                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput
                                        label="Card number"
                                        id="form7"
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => handleInputChange(e, setCardNumber)}
                                        labelClass="customLabel"
                                        required="reqired"

                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="3">
                                    <MDBInput
                                        label="Exparation"
                                        id="form8"
                                        type="text"
                                        value={expiration}
                                        onChange={(e) => handleInputChange(e, setExpiration)}
                                        labelClass="customLabel"
                                        required="reqired"


                                    />
                                </MDBCol>
                                <MDBCol md="3">
                                    <MDBInput
                                        label="CVV"
                                        id="form9"
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => handleInputChange(e, setCvv)}
                                        labelClass="customLabel"
                                        required="reqired"

                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBBtn size="sm" onClick={() => {
                                console.log(totalAmount);

                            }}
                                block>
                                Continue to checkout
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4" className="mb3">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <h5 className="mb-0">Summary</h5>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Products
                                    <span>${totalAmount}</span>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Shipping
                                    <span>FREE</span>
                                </MDBListGroupItem>
                                <hr className="my-2"></hr>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    <div>
                                        <strong>Total amount</strong>
                                        <strong>
                                            <p className="mb-0">(including VAT)</p>
                                        </strong>
                                    </div>
                                    <span>
                                        <strong>Total:${totalAmount}</strong>
                                    </span>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};