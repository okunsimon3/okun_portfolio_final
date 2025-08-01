import GoBack from "./GoBack";
import '../components/Copacetic.css'
import copaceticVideo from '../assets/Copacetic-Animation.mp4'
import instaLogo from '../assets/Instagram_logo.webp'
import copaceticBranding from '../assets/Copacetic_branding_sheet.png'
import copaceticBusinessCard from '../assets/copacetic-business-card.png'
import copaceticCertificate from '../assets/State_of_Ohio_Certificate.png'

export default function Copacetic({onClose}) {
    return (
        <>
        <div className="copacetic-page">
            <GoBack onClose={onClose}/>
            <h1 className="copacetic-title">Copacetic Media, LLC</h1>
            <div className="copacetic-grid">
                <video 
                    className="copacetic-video" 
                    src={copaceticVideo}
                    controls
                    autoPlay
                    muted
                    loop
                />
                <div className="copacetic-grid-right">
                    <p>Copacetic Media, LLC is a collaborative senior capstone project between myself and my friend Aidan Horstmeier. Our project was both a showcase of our media work as well as the building block of our media production limited liability company. I was primarily in charge of developing the website using React.js while Aidan focused more on branding development, registering with the state of Ohio, and social media. This website showcases our skills in:</p>
                    <ul>
                        <li>Graphic Design/Web Design</li>
                        <li>Motion Graphics/Animation</li>
                        <li>Branding/Marketing</li>
                        <li>3d modeling/texturing/rendering</li>
                        <li>Photography/Videography</li>
                    </ul>
                    <div className="copacetic-flex">
                        <a className="copacetic-link"href="https://copacetic.live/" target="blank">Visit Our Website</a>
                        <p>or</p>
                        <a className="insta-link"href="https://www.instagram.com/copacetic.media.llc/" target="blank"><img src={instaLogo}/></a>
                    </div>
                    
                </div>
                <h2 className="copacetic-materials-title">Other Materials</h2>
                <div className="copacetic-materials-grid">
                    <div className="copacetic-image-wrapper">
                        <img src={copaceticBranding} alt="Copacetic Media branding sheet"></img>
                        <span className="hover-text">Branding Sheet</span>
                    </div>
                    <div className="copacetic-image-wrapper">
                        <img src={copaceticBusinessCard} alt="Simon Okun Copacetic Media business card"></img>
                        <span className="hover-text">Business Card</span>
                    </div>
                    <div className="copacetic-image-wrapper">
                        <img src={copaceticCertificate} alt="State of Ohio LLC certficate for Copacetic Media"></img>
                        <span className="hover-text">LLC Certificate</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}