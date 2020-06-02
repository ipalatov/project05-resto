import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { NavLink } from 'react-router-dom';

const AppHeader = ({ total }) => {
    return (
        <header className="header">
            <NavLink className="header__link" to='/menu'>Menu</NavLink>
            <NavLink className="header__link" to='/cart'>
                <img className="header__cart" src={cartIcon} alt="cart"></img>Total: {total} $
            </NavLink>
        </header>
    )
};

export default AppHeader;