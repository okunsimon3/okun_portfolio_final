import { useState } from 'react';
import './NavIcon.css';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../assets/hamburger-icon.png'
import hamburgerIconWhite from '../assets/hamburger-icon-white.png'
import exitIcon from '../assets/exit-icon.png'

export function NavIcon( {overlayOpen}) {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prev => !prev);
    };

    let iconSrc;
    if (open) {
        iconSrc = exitIcon;
    }
    else if (overlayOpen) {
        iconSrc = hamburgerIconWhite;
    }else {
        iconSrc = hamburgerIcon;
    }
    return (
    <>
    <div 
        className="menu-icon" 
        onClick={toggleMenu} 
        style={{
            right: overlayOpen ? 'calc(3rem + 15px)' : '3rem'
        }}>
        <img
            src={iconSrc}
            alt={overlayOpen ? 'Close menu' : 'Open Menu'}
            className='nav-icon-img'
        
        />
    </div>

    <div className={`side-menu ${open ? 'show' : ''}`}>
    <nav>
        <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        </ul>
    </nav>
    </div>
    </>
);
}