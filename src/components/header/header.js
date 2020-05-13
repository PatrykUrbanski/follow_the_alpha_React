import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState("");

    const handleOpenNav = (e) => {
        e.preventDefault();
        setOpenMenu("sidebarWidth")
    };

    const handleCloseNav = (e) => {
        e.preventDefault();
        setOpenMenu("");
    };

    document.querySelector("body").addEventListener("click", () => {
        setOpenMenu("");
    });


    return (
        <>
            <header className="header">
                <nav className="header__nav container">
                    <Link to={"/"}><img className="logo" src="../images/logo1.png" alt="logo" /></Link>
                        <a href="#" onClick={handleOpenNav} className={`menu-btn open`}>
                            <i className="fas fa-braille"/>
                        </a>
                        <div className={`header__nav__list ${openMenu}`}>
                            <i id="closeBtn" onClick={handleCloseNav} className={`fas fa-times visible`}/>
                            <a href={"#strategiesSection"} onClick={handleCloseNav}><Link to={"/#strategiesSection"}>Strategies</Link></a>
                            <a href={"#"} onClick={handleCloseNav}><Link to={"/journalApp"}>Journal App</Link></a>
                            <a href="#" onClick={handleCloseNav}><Link to={"/authorPage"}>Author & Project Details</Link></a>
                        </div>
                </nav>
            </header>
        </>
    )
};