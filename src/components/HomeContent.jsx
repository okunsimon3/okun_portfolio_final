import './HomeContent.css';
import Headshot from '../assets/Okun_Headshot.jpg';

export default function HomeContent() {
    return (
        <>
        <div className="home-content">
            <div className="home-grid-left">
                <h1>Simon Okun</h1>
                <h3>Digital Marketing Specialist</h3>
            </div>
            <div className="home-grid-right">
                <img src={Headshot} id='home-headshot'/>
            </div>
        </div>
        </>
    )
}