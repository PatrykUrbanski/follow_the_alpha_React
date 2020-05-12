import React from "react";
import {Header} from "../header/header";
import {Banner} from "../banner/banner";
import {Strategies} from "../strategiesSection/strategies";
import {JournalApp} from "../journalApp/journalApp";
import CoverflowEffect from "../education/education";

export const MainTemplate = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Strategies/>
            <JournalApp/>
                <CoverflowEffect/>

        </>
    )
};