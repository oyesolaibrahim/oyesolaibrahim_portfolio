import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeMode";

const Nav_desktop = () => {

    const { theme, changeTheme } = useTheme();
    const [themeDivOpen, setThemeDivOpen] = useState(false);
    const [settingsClose, setSettingsClose] = useState(false);
    const [timesOpen, setTimesOpen] = useState(true);
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);

    return (
        <>
        <nav style={{backgroundColor: theme.navBackgroundColor }} className="nav">
             <div className={`flex-start home home-home ${isHomeHovered ? 'hovered' : ''}`}>
                <i className="fa fa-home font" aria-hidden="true"></i>
                <Link to={"/"} 
                onMouseEnter={() => setIsHomeHovered(true)}
                onMouseLeave={() => setIsHomeHovered(false)}>Home</Link>
            </div>
            <div className={`flex-start about-me home-about-me ${isAboutHovered ? 'hovered' : ''}`}>
            <i className="fa fa-address-book font" aria-hidden="true"></i>
                <Link to={"/About"}
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}>About Me</Link>
            </div>
            <div className={`flex-start portfolio home-portfolio ${isPortfolioHovered ? 'hovered' : ''}`}>
                <i className="fa fa-briefcase font" aria-hidden="true"></i>
                <Link to={"/Portfolio"}
                onMouseEnter={() => setIsPortfolioHovered(true)}
                onMouseLeave={() => setIsPortfolioHovered(false)}>Portfolio</Link>
            </div>
            <div className={`flex-start contact home-contact ${isContactHovered ? 'hovered' : ''}`}>
                <i className="fa fa-phone-square font" aria-hidden="true"></i>
                <Link to={"/Contact"}
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}>Contact</Link>
            </div>
        </nav>
        <div id="vertical-line"></div>
        </>

             
    )

}


export default Nav_desktop;