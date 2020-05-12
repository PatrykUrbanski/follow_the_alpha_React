import React from "react";
import {Header} from "../header/header";
import {Banner} from "../banner/banner";
import {Strategies} from "../strategiesSection/strategies";
import {JournalApp} from "../journalApp/journalApp";
import {EducationSwiper} from "../education/education";
import {Parallaxdiv} from "../banner/paralax";

export const MainTemplate = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Parallaxdiv/>
            <Strategies/>
            <JournalApp/>
            <EducationSwiper/>

        </>
    )
}