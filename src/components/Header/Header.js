import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <NavLink to="/shop" className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            }>Shop</NavLink>
                <NavLink to="/orders" className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            }>Orders</NavLink>
                <NavLink to="/inventory" className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            }>Inventory</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            }>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;