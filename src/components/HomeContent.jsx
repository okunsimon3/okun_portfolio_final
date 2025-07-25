import './HomeContent.css';
import Headshot from '../assets/Okun_Headshot.jpg';

export default function HomeContent() {
    return (
        <div className="home-content-wrapper">
            <div className="home-content">
                <div className="home-grid-left">
                    <h1>Simon Okun</h1>
                    <h2>Digital Marketing Specialist</h2>
                </div>
                <div className="home-grid-right">
                    <img src={Headshot} id='home-headshot'/>
                </div>
            </div>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='circle-3'></div>
            <div className='circle-4'></div>
            <div className='circle-5'></div>
        </div>
    );
}