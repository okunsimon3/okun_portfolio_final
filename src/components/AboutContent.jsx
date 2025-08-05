import './AboutContent.css'
import '../Mobile.css'
import gradPhoto from '../assets/okun_grad.jpg'
import okunResume from '../assets/Okun_Resume_2025.pdf'

export default function AboutContent() {
    return (
        <>
        <div className="about-content">
            <h1>About Me</h1>
            <div className="about-grid">
                <div className="about-grid-left">
                    <img src={gradPhoto} alt='photo of Simon and friend during college graduation'/>
                </div>
                <div className='about-grid-right'>
                    <h2>Education</h2>
                    <h3>University of Cincinnati</h3>
                    <p>Graduated in Spring, 2025</p>
                    <ul>
                        <li>BFA in Media Production at the College-Conservatory of Music (CCM)</li>
                        <li>Minor in Information Technology</li>
                        <li>Certification in Web Development and Animation</li>
                        <li>GPA: 3.46</li>
                        <li>Dean's List</li>
                    </ul>
                    <h2>What Inspires Me?</h2>
                    <p>From exploring webpages to watching videos, media has been an integral part of shaping me into the person I am today. It is a powerful tool that can educate, inspire, and make change to the world. I intend to use my skills to create a positive impact and inspire others the same way I have been inspired.</p>
                    <div className='about-links'>
                        <a href={okunResume} download>Donwload Resume</a>
                        <a href='https://www.linkedin.com/in/simonokun/' target='blank'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}