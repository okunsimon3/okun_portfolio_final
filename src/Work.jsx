import { useState } from "react";
import { NavIcon } from "./components/NavIcon";
import CrossPeak from "./components/CrossPeak";

export default function Work() {
    const [showCrossPeak, setShowCrossPeak] = useState(false);

    const handleCrossPeakClick = () => {
        setShowCrossPeak(true);
    }

    const handleCloseAll = () => {
        setShowCrossPeak(false);
    }

    return (
        <>
        <NavIcon></NavIcon>
        <h1>My Work</h1>
        <button className="crosspeak-btn" onClick={handleCrossPeakClick}>CrossPeak Solutions</button>
        {showCrossPeak && <CrossPeak onClose={handleCloseAll}/>}
        </>
    )
}