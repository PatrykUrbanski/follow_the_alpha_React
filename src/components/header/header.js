import React from "react";

export const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="header__nav container">
                    <img className="logo" src="../images/logo1.png" alt="logo" />
                        <a href="#" className="menu-btn open">
                            <i className="fas fa-braille"></i>
                        </a>
                        <div className="header__nav__list">
                            <i id="closeBtn" className="fas fa-times visible"></i>
                            <a href="#strategiesPage">Strategies</a>
                            <a href="/journalApp.html">Journal App</a>
                            <a href="developersStuff.html">Developer's stuff</a>
                            <a href="#">Author</a>
                        </div>
                </nav>
            </header>
        </>
    )
};