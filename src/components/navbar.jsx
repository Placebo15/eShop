import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css';

export const Navbar = () => {
    return <div className='navbar'>

        <div className='eShop'>
            <Link to="/"> Shop </Link>
        </div>

        <div className='links'>
            <Link to="/cart"> <ShoppingCart size={40} /> </Link>
        </div>

    </div>

}
