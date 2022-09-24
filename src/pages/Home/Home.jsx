import { About } from "../../components/About/About";
import { Depoiments } from "../../components/Depoiments/Depoiments";
import { Footer } from "../../components/Footer/Footer";
import { Infos } from "../../components/Infos/Infos";
import Navbar2 from "../../components/Nav/Navbar";
import { TopHome } from "../../components/TopHome/TopHome";
import "./home.css";

export function Home() {
    return (
        <div className="Home">
            <Navbar2 />
            <TopHome />
            <Infos />
            <About />
            {/* <div className="dep">
            <Depoiments />
            </div> */}
            <Footer />
        </div>
    )
}