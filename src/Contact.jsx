import Footer from './components/Footer'
import { NavIcon } from './components/NavIcon'
import './Contact.css'
import './Mobile.css'

export default function Contact() {
    return (
        <>
        <NavIcon />
        <h1>Contact</h1>
        <div className="contact-grid">
            <div className="contact-grid-left">
                <h2>Get In Touch</h2>
                <ul>
                    <li><a href='mailto:okunsimon3@gmail.com' target='blank'>okunsimon3@gmail.com</a></li>
                    <li><a href='tel:18473700720'>(847) 370 - 0720</a></li>
                    <li><a href='https://www.linkedin.com/in/simonokun/' target='blank'>LinkedIn</a></li>
                </ul>
            </div>
            <div className="contact-grid-right">
                <form className='contact-form' 
                    name='contact'
                    method='POST'
                    data-netlify='True'
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <h3 className='contact-first-text'>First Name</h3>
                        <label>
                            <input type="text" name="first-name" />
                        </label>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <label>
                            <input type="email" name="email" />
                        </label>
                    </div>
                    <div>
                        <h3>More Info</h3>
                        <label>
                            <textarea name="message"></textarea>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}