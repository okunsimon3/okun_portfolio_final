import GoBack from "./GoBack";
import '../components/Ecdi.css'
import ecdiLogo from '../assets/ECDI-Primary-Logo.png'
import newDayLogo from '../assets/its-a-new-day.png'
import mortuaryLogo from '../assets/mortuarybeekeeper.png'
import theBrowLogo from '../assets/the-brow-therapist-logo.png'

export default function Ecdi({onClose}) {
    return (
        <>
        <div className="ecdi-page">
            <GoBack onClose={onClose}/>
            <h1 className="ecdi-title">Economic & Community Development Institute (ECDI)</h1>
            <div className="ecdi-grid">
                <img className="ecdi-logo" src={ecdiLogo}/>
                <div className="ecdi-grid-right">
                    <p>The Economic and Community Development Institute (ECDI) is one of the top nonprofit U.S. microlenders providing business development  guidance and affordable lending options to primarily minority and women owned small businesses in Ohio. Powered by the U.S. Small Business Administration (SBA), ECDI has disbursed $201M in business loans and supported the growth of over 50,000 small businesses since 2004. Duirng my internship with ECDI, I worked directly with small business owners in Cincinnati assisting with:</p>
                    <ul>
                        <li>Website Design/Redesign</li>
                        <li>Branding Development</li>
                        <li>Social Media Support</li>
                        <li>On-site Photography</li>
                    </ul>
                    <p className="ecdi-bottom-text">I gained experience using Salesforce in order to retain information gathered during consultations. In addition, I ensured that I was available to clients to maintain communication in accordance with our mission.</p>
                    <a href="https://www.ecdi.org/" target="blank" className="ecdi-link">Visit Their Website</a>
                </div>
                <div className="ecdi-clients">
                    <h2>Some of My Clients</h2>
                    <div className="client-card">
                        <img src={newDayLogo}></img>
                        <h3>It's A New Day Behavioral Daycare</h3>
                        <a href="https://itsanewdayohio.com/" target="blank">Visit Their Website</a>
                    </div>
                    <div className="client-card">
                        <img src={theBrowLogo}></img>
                        <h3>The Brow Therapist </h3>
                        <a href="https://www.thebrowtherapistcincy.com/" target="blank">Visit Their Website</a>
                    </div>
                    <div className="client-card">
                        <img src={mortuaryLogo}></img>
                        <h3>Mortuary Beekeeper</h3>
                        <a href="https://www.mortuarybeekeeper.biz/" target="blank">Visit Their Website</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}