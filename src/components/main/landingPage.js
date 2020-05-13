import React from "react";
import {Banner} from "../banner/banner";
import {ParallaxBackground} from "../banner/paralaxSection";
import {Strategies} from "../strategiesSection/strategies";

export const LandingPage = () => {
    return (
        <>
            <div className={"pageToTransit"}>
                <Banner/>
                <ParallaxBackground/>
                <Strategies/>
            </div>
        </>
    )
};