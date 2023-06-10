import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../context/shop-context';
import './navbar.css';
import { FaPhone, FaInstagram, FaMapMarker, FaFacebook } from 'react-icons/fa';

export const Navbar = () => {
    const { cartItems } = useContext(ShopContext);
    const [animateCart, setAnimateCart] = useState(false);
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const cartItemsCount = Object.values(cartItems).reduce(
        (total, count) => total + count,
        0
    );

    useEffect(() => {
        if (cartItemsCount > 0) {
            setAnimateCart(true);
            const timeout = setTimeout(() => {
                setAnimateCart(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [cartItemsCount]);

    const toggleMenu = () => {
        setTimeout(() => {
            setMenuCollapsed(!menuCollapsed);
        }, 200); // Add a delay of 200 milliseconds before toggling the menu
    };

    return (
        <div className="navbar">
            <div className="eShop">
                <Link to="/">Shop</Link>
            </div>

            <div className={`Menu ${menuCollapsed ? 'collapsed' : ''}`}>
                <button className="menuButton" onClick={toggleMenu}>
                    ☰ MENU
                </button>
                <div className="categoryContent">
                    {/* Add your category links here */}
                    <Link to="/phones">Phone</Link>
                    <Link to="/TVs">TV</Link>
                    <Link to="/PCs">Desktop</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/About">About</Link>
                </div>
            </div>

            <div className="links">
                <div className="contactInfo">
                    <a href="tel:+1234567890">
                        <FaPhone />
                        <span>123-456-7890</span>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.google.com/maps/place/your+address+here" target="_blank">
                        <FaMapMarker />
                        <span>123 Main St, City, Country</span>
                    </a>
                </div>
            </div>

            <Link className="shopcart" to="/cart">
                <ShoppingCart size={40} className={animateCart ? 'cartIcon animated' : 'cartIcon'} />
                {cartItemsCount > 0 && <span className="cartItemCount">{cartItemsCount}</span>}
            </Link>
        </div>
    );
};
