import { NavLink } from 'react-router-dom';
import '../components/Footer.css'

export default function Footer() {
    return (
        <>
        <div className="footer-wrapper">
            <h1>SO</h1>
            <div className='sitemap'>
                <h2>Sitemap</h2>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </div>
            <div className='footer-contact'>
                <h2>Contact</h2>
                <ul>
                    <li><a href='mailto:okunsimon3@gmail.com' target='blank'>okunsimon3@gmail.com</a></li>
                    <li><a href='tel:18473700720'>(847) 370 - 0720</a></li>
                    <li><a href='https://www.linkedin.com/in/simonokun/' target='blank'>LinkedIn</a></li>

                </ul>
            </div>
        </div>
        
        </>
    )
}