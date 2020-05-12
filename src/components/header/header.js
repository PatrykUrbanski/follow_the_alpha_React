import React, {useState} from "react";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState("");

    const handleOpenNav = (e) => {
        e.preventDefault();
        setOpenMenu("sidebarWidth")
    };

    const handleCloseNAv = (e) => {
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
                    <img className="logo" src="../images/logo1.png" alt="logo" />
                        <a href="#" onClick={handleOpenNav} className={`menu-btn open`}>
                            <i className="fas fa-braille"></i>
                        </a>
                        <div className={`header__nav__list ${openMenu}`}>
                            <i id="closeBtn" onClick={handleCloseNAv} className={`fas fa-times visible`}></i>
                            <a href="#" onClick={handleCloseNAv}>Strategies</a>
                            <a href="#" onClick={handleCloseNAv}>Journal App</a>
                            <a href="#" onClick={handleCloseNAv}>Developer's stuff</a>
                            <a href="#" onClick={handleCloseNAv}>Author</a>
                        </div>
                </nav>
            </header>
        </>
    )
};