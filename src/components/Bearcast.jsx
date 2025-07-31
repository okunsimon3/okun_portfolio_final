import GoBack from "./GoBack";
import '../components/Bearcast.css'
import bearcastLogoTall from '../assets/bearcast-tall.png'

export default function Bearcast({onClose}) {
    return (
        <>
        <div className="bearcast-page">
            <GoBack onClose={onClose}></GoBack>
            <h1 className="bearcast-title">Bearcast Media</h1>
            <div className="bearcast-grid">
                <img className="bearcast-logo" src={bearcastLogoTall}/>
                <div className="bearcast-grid-right">
                    <p>Bearcast Media is a student-led organization created by students for students. There is opportunity for students to gain hands-on experience, use equipment funded by the university,  and network with current students and alumni. I started attending Bearcast general body meetings and eventually became the web director. As web director, my responsibilities included:
                    </p>
                    <ul>
                        <li>Redesigning the Wordpress website including mobile optimization</li>
                        <li>Adding features including post filters based on categories and a contact form</li>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Attending weekly director and general body meetings</li>
                        <li>Ensuring content is uploaded from other directors (sports, journalism, podcasts, etc)</li>
                        <li>Using Google Analytics to measure engagement</li>
                        <li>Attending on-campus events including tabeling to increase outreach and student participation</li>
                        <li>Hosting portfolio workshops helping students design personal websites for internships/jobs</li>
                    </ul>
                    <a className="bearcast-link" href="https://www.bearcastmedia.com/" target="blank">Visit Their Website</a>
                </div>
            </div>
        </div>
        </>
    )
}