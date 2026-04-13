import './AboutContent.css'
import '../Mobile.css'
import gradPhoto from '../assets/PhotoSimonGradAccept.jpg'
import okunResume from '../assets/Okun_Resume_2026_Updated.pdf'

export default function AboutContent() {
    return (
        <>
            <div className="about-content">
                <h1>About Me</h1>
                <div className="about-grid">
                    <div className="about-grid-left">
                        <img src={gradPhoto} alt='photo of Simon and friend during college graduation' />
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
                        <p>I’ve always been a people person. I enjoy meeting new people, learning their stories, and building meaningful relationships over time. As a strong listener with a patient, conversational approach, I’m able to connect with others in a genuine way and communicate ideas clearly. Whether it is through creative media projects, websites, or in-person events, what I enjoy most is bringing people together.</p>
                        <br></br>
                        <p>Outside of work, I enjoy photography and videography, exploring nature, skateboarding, and spending time with friends and family.</p>
                        <div className='about-links'>
                            <a href={okunResume} download>Download Resume</a>
                            <a href='https://www.linkedin.com/in/simonokun/' target='blank'>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}