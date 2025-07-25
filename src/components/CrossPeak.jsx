import GoBack from "./GoBack";
import '../components/CrossPeak.css'
import crossPeakLogo from '../assets/CrosspeakLogo_Square.jpg'

export default function CrossPeak({onClose}) {
    return (
        <>
        <div className="cps-page">
            <GoBack onClose={onClose}/>
            <h1 className="cps-title">Crosspeak Solutions</h1>
            <div className="cps-grid">
                <img className="cps-logo"src={crossPeakLogo}/>
                <div className="cps-grid-right">
                    <p className="cps-text">CrossPeak Solutions is an international Salesforce partner who collaboratively works with clients to learn business processes and identify where they can find ROI within their Salesforce organization. We put our client’s goals first and use the Salesforce platform to accomplish those goals. Our group of top rated business professionals brings creative solutions to transform how companies do business, and continuously works with clients to optimize investments towards ever-evolving priorities after the implementation of their CRM is complete.</p>
                    <a href="https://www.crosspeaksolutions.com/" target="blank" className="cps-link">Visit Their Website</a>
                </div>
            </div>
        </div>
        </>
    )
}