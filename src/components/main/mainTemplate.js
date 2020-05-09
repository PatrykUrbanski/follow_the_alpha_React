import React from "react";
import {Header} from "../header/header";
import {Banner} from "../banner/banner";
import {Strategies} from "../strategiesSection/strategies";

export const MainTemplate = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Strategies/>
        </>
    )
}