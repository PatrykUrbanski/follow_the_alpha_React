import React from "react";
import {Header} from "../header/header";
import {JournalApp} from "../journalApp/journalApp";
import {LandingPage} from "./landingPage";
import {AuthorPage} from "../authorPage/authorPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Switch} from "react-router-dom";

export const MainTemplate = () => {
    return (
        <>
            <Header/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={450}
                        classNames="fade">
                        <Switch location={location}>
                            <Route exact path={"/"} component={LandingPage}/>
                            <Route path={"/journalApp"} component={JournalApp}/>
                            <Route path={"/authorPage"} component={AuthorPage}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </>
    )
};