import AboutContent from "./components/AboutContent";
import { NavIcon } from "./components/NavIcon";

export default function About() {
    return (
        <>
        <div className="about-container">
            <NavIcon />
            <AboutContent />
        </div>
        </>
    )
}