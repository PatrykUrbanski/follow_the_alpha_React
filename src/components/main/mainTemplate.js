import React from "react";
import {Header} from "../header/header";
import {Banner} from "../banner/banner";
import {Strategies} from "../strategiesSection/strategies";
import {StrategiesAlgo} from "../strategiesSection/strategiesAlgo";

export const MainTemplate = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Strategies/>
        </>
    )
}