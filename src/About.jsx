import AboutContent from "./components/AboutContent";
import Footer from "./components/Footer";
import { NavIcon } from "./components/NavIcon";

export default function About() {
    return (
        <>
        <div className="about-container">
            <NavIcon />
            <AboutContent />
            <Footer />
        </div>
        </>
    )
}