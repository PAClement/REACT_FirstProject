import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Accueil
            </NavLink>
            <NavLink to='/News' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                News
            </NavLink>
            <NavLink to='/About' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;