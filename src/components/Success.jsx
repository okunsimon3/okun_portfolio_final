import { NavLink } from "react-router-dom";

export default function Success() {
    return (
        <>
        <div className="success-message">
            <h1>Thanks!</h1>
            <p>Your message has been sent successfully</p>
            <NavLink to="/">Go back to site</NavLink>
        </div>
        </>
    )
}