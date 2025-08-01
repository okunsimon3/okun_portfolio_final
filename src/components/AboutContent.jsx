import './AboutContent.css'
import headshot from '../assets/Okun_Headshot.jpg'
import okunResume from '../assets/Okun_Resume_2025.pdf'

export default function AboutContent() {
    return (
        <>
        <div className="about-content">
            <h1>About Me</h1>
            <div className="about-grid">
                <div className="about-grid-left">
                    <img src={headshot}/>
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
                    <p>I grew up on the internet — exploring websites, watching videos. Media has been with me throughout my life and has shaped me into the person I am today. I intend to inspire others the way I have been inspired by media.</p>
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