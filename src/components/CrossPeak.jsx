import GoBack from "./GoBack";
import '../components/CrossPeak.css'
import crossPeakLogo from '../assets/CrosspeakLogo_Square_trans.png'

export default function CrossPeak({onClose}) {
    return (
        <>
        <div className="cps-page">
            <GoBack onClose={onClose}/>
            <h1 className="cps-title">CrossPeak Solutions</h1>
            <div className="cps-grid">
                <img className="cps-logo"src={crossPeakLogo}/>
                <div className="cps-grid-right">
                    <p className="cps-text">CrossPeak Solutions is an international Salesforce partner started in 2017. During my internship at CrossPeak Solutions, I focused on enhancing their online presence in various ways including:</p>
                    <ul>
                        <li>Creating short- and long-form animated educational videos about Salesforce</li>
                        <li>Working closely with the marketing and development team to ensure all content is accurate and branding requirements are met</li>
                        <li>Improving Search Engine Optimization (SEO) including updating meta tags, alt text on images, and researching digital advertisement options</li>
                        <li>Measuring engagement and website traffic using Google Analytics</li>
                        <li>Scheduling posts to ensure consistancy is met on all social media platforms</li>
                    </ul>
                    <a href="https://www.crosspeaksolutions.com/" target="blank" className="cps-link">Visit Their Website</a>
                </div>
                <h2 className="cps-media-title">Animated Videos</h2>
                <div className="cps-grid-media">
                    <iframe src="https://www.youtube.com/embed/-xTGm-GLiN8?autoplay=1&mute=1&loop=1&playlist=-xTGm-GLiN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/Bur7YRCR2Hc?autoplay=1&mute=1&loop=1&playlist=Bur7YRCR2Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/dhODV1CbFfI?autoplay=1&mute=1&loop=1&playlist=dhODV1CbFfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://youtube.com/embed/FmNlNuAIIUg?autoplay=1&mute=1&loop=1&playlist=FmNlNuAIIUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://youtube.com/embed/isYITi4YZO4?autoplay=1&mute=1&loop=1&playlist=isYITi4YZO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/RRFsqWUOq_U?autoplay=1&mute=1&loop=1&playlist=RRFsqWUOq_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://youtube.com/embed/5zOoKcRSkC0?autoplay=1&mute=1&loop=1&playlist=5zOoKcRSkC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        </>
    )
}