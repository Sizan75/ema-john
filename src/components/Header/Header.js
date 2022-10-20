import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
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
                { user?.uid ? 
                <button className='btn-logout' onClick={logOut}>Log Out</button>
                : 
                <>
                <NavLink to="/login" className={({ isActive }) =>
                isActive ? 'activeClassName' : undefined
              }>LogIn</NavLink>
                <NavLink to="/signup" className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            }>SignUp
            </NavLink>
                </>
            }
            
            </div>
        </nav>
    );
};

export default Header;