import React from "react";
import {Header} from "../header/header";
import {JournalApp} from "../journalApp/journalApp";
import {HashRouter, Route} from "react-router-dom";
import {LandingPage} from "./landingPage";
import {AuthorPage} from "../authorPage/authorPage";

export const MainTemplate = () => {
    return (
        <>
            <HashRouter>
                <Header/>
                <Route exact path={"/"} component={LandingPage}/>
                <Route path={"/journalApp"} component={JournalApp}/>
                <Route path={"/authorPage"} component={AuthorPage}/>
            </HashRouter>

            {/*<Banner/>*/}
            {/*<ParallaxBackground/>*/}
            {/*<Strategies/>*/}
            {/*<JournalApp/>*/}
            {/*<EducationSwiper/>*/}
        </>
    )
};