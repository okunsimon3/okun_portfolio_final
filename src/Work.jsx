import { useState, useEffect } from "react";
import { NavIcon } from "./components/NavIcon";
import CrossPeak from "./components/CrossPeak";
import Ecdi from "./components/Ecdi";
import crossPeakLogo from './assets/CrosspeakLogo_Square.jpg'
import './Work.css'


export default function Work() {
    const [showCrossPeak, setShowCrossPeak] = useState(false);
    const [showEcdi, setShowEcdi] = useState(false);

    const handleCrossPeakClick = () => {
        setShowCrossPeak(true);
    }
    const handleEcdiClick = () => {
        setShowEcdi(true);
    }

    const handleCloseAll = () => {
        setShowCrossPeak(false);
        setShowEcdi(false);
    }
    useEffect(() => {
    const body = document.body;
    const shouldBlockScroll = showCrossPeak || showEcdi;

    if (shouldBlockScroll) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }

    return () => {
        body.style.overflow = "auto";
    };
    }, [showCrossPeak, showEcdi]);
    return (
        <>
        <NavIcon></NavIcon>
        <h1>My Work</h1>
            <div className="work-wrapper">
                <div className="work-card" onClick={handleCrossPeakClick}>
                    <img src={crossPeakLogo} />
                    <div className="work-card-text">CrossPeak Solutions</div>
                </div>

                <div className="work-card" onClick={handleEcdiClick}>
                    <img src={crossPeakLogo} />
                    <div className="work-card-text">
                        Economic & Community Development Institute (ECDI)
                    </div>
                </div>

                <div className="work-card" onClick={handleEcdiClick}>
                    <img src={crossPeakLogo} />
                    <div className="work-card-text">
                        Bearcast Media
                    </div>
                </div>

                <div className="work-card" onClick={handleEcdiClick}>
                    <img src={crossPeakLogo} />
                    <div className="work-card-text">
                        Copacetic Media (Senior Capstone Project)
                    </div>
                </div>
            </div>

            {showCrossPeak && <CrossPeak onClose={handleCloseAll} />}
            {showEcdi && <Ecdi onClose={handleCloseAll} />}
        </>
    )
}