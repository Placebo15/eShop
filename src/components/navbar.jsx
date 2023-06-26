import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../context/shop-context';
import './navbar.css';
import { FaPhone, FaInstagram, FaMapMarker, FaFacebook, FaUser } from 'react-icons/fa';

export const Navbar = () => {
    const { cartItems, user, setUser } = useContext(ShopContext);
    const [animateCart, setAnimateCart] = useState(false);
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const cartItemsCount = Object.values(cartItems).reduce((total, count) => total + count, 0);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (cartItemsCount > 0) {
            setAnimateCart(true);
            const timeout = setTimeout(() => {
                setAnimateCart(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [cartItemsCount]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                collapseMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setTimeout(() => {
            setMenuCollapsed(!menuCollapsed);
        }, 200);
    };

    const collapseMenu = () => {
        setMenuCollapsed(true);
    };
    const handleLogout = () => {
        setUser(null); // Clear the user information
        navigate('/'); // Redirect to the home page or any other desired page
    };

    return (
        <div className="navbar">
            <div className="eShop">
                <Link to="/">Shop</Link>
                <button className="menuButton" onClick={toggleMenu}>
                    ☰
                </button>
            </div>

            <div className={`Menu ${menuCollapsed ? 'collapsed' : ''}`}>
                <div className="categoryContent" ref={menuRef}>
                    <Link to="/phones">Phone</Link>
                    <Link to="/clothes">Clothes</Link>
                    <Link to="/laptops">Laptops</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/About">About</Link>
                    <div className="socialIcons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.google.com/maps/place/your+address+here" target="_blank" rel="noopener noreferrer">
                            <FaMapMarker />
                        </a>
                    </div>
                </div>
            </div>

            <div className="links">
                <a href="tel:+1234567890">
                    <FaPhone />
                    <span>123-456-7890</span>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                    <span>Facebook</span>
                </a>
                <a href="https://www.google.com/maps/place/your+address+here" target="_blank" rel="noopener noreferrer">
                    <FaMapMarker />
                    <span>123 Main St, City, Country</span>
                </a>
            </div>

            <div className="loginAndCart">
                {user ? (
                    <div className="userProfile">
                        <FaUser />
                        <span className='userN' onClick={() => navigate('/userprofile')}  >{user.username}</span>
                        <Link className="loginlink" onClick={handleLogout}>
                            LogOut
                        </Link>

                    </div>

                ) : (
                    <Link className="loginlink" to="/login">
                        LogIn
                    </Link>
                )}
                <Link className="shopcart" to="/cart">
                    <ShoppingCart size={32} className={animateCart ? 'cartIcon animated' : 'cartIcon'} />
                    {cartItemsCount > 0 && <span className="cartItemCount">{cartItemsCount}</span>}
                </Link>
            </div>
        </div >
    );
};
