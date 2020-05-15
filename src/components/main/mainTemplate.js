import React, {useEffect, useState} from "react";
import {Header} from "../header/header";
import {JournalApp} from "../journalApp/journalApp";
import {LandingPage} from "./landingPage";
import {AuthorPage} from "../authorPage/authorPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Switch} from "react-router-dom";
import {LoadingScreen} from "../loadingScreen/loadingScreen";

export const MainTemplate = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false)
        }, 2300)
    }, []);




    return (
        <>
            {loading ? <LoadingScreen/> : (
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
                            <Route exact path={"/journalApp"} component={JournalApp}/>
                            <Route exact path={"/authorPage"} component={AuthorPage}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
            </>
            )}
            </>
    )
};