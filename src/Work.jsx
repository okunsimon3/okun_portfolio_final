import { useState, useEffect } from "react";
import { NavIcon } from "./components/NavIcon";
import CrossPeak from "./components/CrossPeak";
import Ecdi from "./components/Ecdi";
import crossPeakLogo from './assets/CrosspeakLogo_Square_trans.png'
import ecdiLogo from './assets/ECDI-Primary-Logo.png'
import bearcastLogo from './assets/bearcast_logo.png'
import './Work.css'
import Bearcast from "./components/Bearcast";
import copaceticLogo from './assets/copacetic-Black-Logo.png'
import Copacetic from "./components/Copacetic";


export default function Work() {
    const [showCrossPeak, setShowCrossPeak] = useState(false);
    const [showEcdi, setShowEcdi] = useState(false);
    const [showBearcast, setShowBearcast] = useState(false);
    const [showCopacetic, setShowCopacetic] = useState(false);

    const anyOverlayOpen = showCrossPeak || showEcdi || showBearcast || showCopacetic;

    const handleCrossPeakClick = () => {
        setShowCrossPeak(true);
    }
    const handleEcdiClick = () => {
        setShowEcdi(true);
    }

    const handleBearcastClick = () => {
        setShowBearcast(true);
    }

    const handleCopaceticClick = () => {
        setShowCopacetic(true);
    }
    const handleCloseAll = () => {
        setShowCrossPeak(false);
        setShowEcdi(false);
        setShowBearcast(false);
        setShowCopacetic(false);
    }
    useEffect(() => {
    const body = document.body;
    const shouldBlockScroll = showCrossPeak || showEcdi || showBearcast || showCopacetic;

    if (shouldBlockScroll) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }

    return () => {
        body.style.overflow = "auto";
    };
    }, [showCrossPeak, showEcdi, showBearcast, showCopacetic]);
    return (
        <>
        <NavIcon overlayOpen={anyOverlayOpen}></NavIcon>
        <h1>My Work</h1>
            <div className="work-wrapper">
                <div className="work-card" onClick={handleCrossPeakClick}>
                    <img src={crossPeakLogo} />
                    <div className="work-card-text">CrossPeak Solutions</div>
                </div>

                <div className="work-card" onClick={handleEcdiClick}>
                    <img src={ecdiLogo} />
                    <div className="work-card-text">
                        Economic & Community Development Institute (ECDI)
                    </div>
                </div>

                <div className="work-card" onClick={handleBearcastClick}>
                    <img src={bearcastLogo} />
                    <div className="work-card-text">
                        Bearcast Media
                    </div>
                </div>

                <div className="work-card" onClick={handleCopaceticClick}>
                    <img src={copaceticLogo} />
                    <div className="work-card-text">
                        Copacetic Media (Senior Capstone Project)
                    </div>
                </div>
                
            </div>

            {showCrossPeak && <CrossPeak onClose={handleCloseAll} />}
            {showEcdi && <Ecdi onClose={handleCloseAll} />}
            {showBearcast && <Bearcast onClose={handleCloseAll}/>}
            {showCopacetic && <Copacetic onClose={handleCloseAll}/>}
        </>
    )
}