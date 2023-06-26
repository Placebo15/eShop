
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,

    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import './profilePage.css'
import React, { useState, useEffect, useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';



export const ProfilePage = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);
    const { user } = useContext(ShopContext);

    useEffect(() => {
        const fetchPurchasedItems = async () => {
            try {
                const loggedInUser = user.username;
                const response = await fetch(
                    `http://localhost:3001/orders?customer=${loggedInUser}`
                );
                const data = await response.json();
                setPurchasedItems(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPurchasedItems();
    }, [user]);

    return (
        <section className='profile-page'>
            <MDBContainer className="purchaseContainer">
                <MDBRow className='purchaseRow1' >
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href='/'>Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href="/userprofile">User</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow className='purchaseRow'>
                    <MDBCol className='purchaseCol1' lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Follow</MDBBtn>
                                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fas icon="globe fa-lg text-warning" />
                                        <MDBCardText>https://mdbootstrap.com</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                        <MDBCardText>mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                        <MDBCardText>@mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <MDBCardText>mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                        <MDBCardText>mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='purchaseCol1' lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.username}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Mobile</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow className='purchaseRow2'>
                            <MDBCol className='purchaseHistory' md="6">
                                <MDBCard className="purchaseCard2">
                                    <MDBCardText className="titleP"><span className="text-primary font-italic me-1"></span> Purchase history</MDBCardText>
                                    <MDBCardBody className='purchaseItems'>
                                        {purchasedItems.map((item, index) => {
                                            const product = PRODUCTS.find((product) => product.productName === item.product_name);
                                            return (
                                                <div key={index}>
                                                    <p>Product Name: {item.product_name}</p>
                                                    <p>Quantity: {item.quantity}</p>
                                                    <p>Order Date: {item.order_date}</p>
                                                    {product && <img src={product.productImage} alt='' width="100px" height="100px" />}
                                                    <hr />
                                                </div>
                                            );
                                        })}
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}