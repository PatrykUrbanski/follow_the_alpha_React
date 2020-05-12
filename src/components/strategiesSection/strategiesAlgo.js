import React, {useEffect, useState} from "react";
import {getData, GetSymbols} from "../api/api"
import {SPYBenchmarkStrategy} from "./spyBenchmarkStrategy";
import {AllWeatherStrategy} from "./allWeatherStrategy";
import {GrowthStrategy} from "./GrowthStrategy";

export const StrategiesAlgo = ({callback, strategyToDisplay}) => {
    const [symbol, setSymbol] = useState("SPY");
    const [SPY, setSPY] = useState(false);
    const [SPYDates, setSPYDates] = useState(false);

    const getTenYearsFromLastSession = (lastSession) => {
        return lastSession - 3600 * 24 * 365.25 * 10
    };
    const getLastTradingSession = () => {
        return Math.floor(Date.now() / 1000 - (24 * 3600));
    };

    useEffect(() => {
        getData(getTenYearsFromLastSession(getLastTradingSession()), getLastTradingSession(), symbol)
        .then(resp => resp.json())
            .then(data => {
                setSPY(data.c);
                setSPYDates(data.t);
            })
            .catch(err => console.log(err))
        }, []);



    if (!SPY || !SPYDates) return null;




    return (
        <>
            {(strategyToDisplay === "Benchmark SPY") && <SPYBenchmarkStrategy quotes={SPY} dates={SPYDates} callback={callback}/>}
            {(strategyToDisplay === "Growth portfolio") && <GrowthStrategy dates={SPYDates} callback={callback}/>}
            {(strategyToDisplay === "All Weather portfolio") && <AllWeatherStrategy dates={SPYDates} callback={callback}/>}
        </>
    )
}