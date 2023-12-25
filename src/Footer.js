import { PiInstagramLogoLight, PiLinkedinLogo, PiFacebookLogo, PiTwitterLogoLight, PiGithubLogo } from "react-icons/pi";
import './App.css';

function Footer(){

    return (
        <footer className="footer">
            <div className="iconbox">
            <PiFacebookLogo className="icons"/>
            <PiTwitterLogoLight className="icons"/>
            <PiGithubLogo className="icons"/>
            <PiLinkedinLogo className="icons"/>
            <PiInstagramLogoLight className="icons"/>
            </div>
        </footer>
    )
};

export default Footer;