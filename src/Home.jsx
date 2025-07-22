import HomeContent from "./components/HomeContent";
import { NavIcon } from "./components/NavIcon";

export default function Home() {
    return (
        <>
        <div className="home-container">
            <NavIcon />
            <HomeContent></HomeContent>
        </div>
        </>
    )
}