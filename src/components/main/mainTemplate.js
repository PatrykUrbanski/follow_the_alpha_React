import React from "react";
import {Header} from "../header/header";
import {Banner} from "../banner/banner";
import {Strategies} from "../strategiesSection/strategies";
import {StrategiesAlgo} from "../strategiesSection/strategiesAlgo";
import {JournalApp} from "../journalApp/journalApp";
import {AllWeatherStrategy} from "../strategiesSection/allWeatherStrategy";

export const MainTemplate = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Strategies/>
            <JournalApp/>
        </>
    )
}