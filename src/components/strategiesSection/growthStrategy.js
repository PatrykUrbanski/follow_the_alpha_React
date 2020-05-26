import React, {useEffect, useState} from "react";
import {ChartDisplayStrategies} from "../chart/ChartDisplay_strategies";
import {getData} from "../api/api";
import {getFiveYearsFromLastSession, getLastTradingSession} from "./strategiesAlgo";

export const GrowthStrategy = ({dates, callback}) => {
    const [XLKReturn, setXLKReturn] = useState(false);
    const [VHTReturn, setVHTReturn] = useState(false);
    const [IBBReturn, setIBBReturn] = useState(false);
    const growthStrategyTickers = ["XLK", "VHT", "IBB"];
    const functions = [setXLKReturn, setVHTReturn, setIBBReturn];
    const method = `Strategy based on growth type companies. Allocate assets in XLK (Technology Fund), VHT (Health Care Fund) and IBB (BioTechnology Fund).`;

    useEffect(() => {
        growthStrategyTickers.forEach((ticker, index) => {
            getData(getFiveYearsFromLastSession(getLastTradingSession()), getLastTradingSession(), ticker)
                .then(resp => resp.json())
                .then(data => {
                    functions[index](data.c);
                })
                .catch(err => console.log(err))
        });
    }, []);

    if (!XLKReturn || !VHTReturn || !IBBReturn) return null;
    let XLKUsdReturn = [];
    let VHTUsdReturn = [];
    let IBBUsdReturn = [];
    let dateArray = [];
    for (let i = 0; i < dates.length; i++) {
        XLKUsdReturn.push((XLKReturn[i] / XLKReturn[0] * 100).toFixed(3));
        VHTUsdReturn.push((VHTReturn[i] / VHTReturn[0] * 100).toFixed(3));
        IBBUsdReturn.push((IBBReturn[i] / IBBReturn[0] * 100).toFixed(3));
        let date = new Date(dates[i] * 1000);
        dateArray.push(date.toString().slice(4, 15))
    }
    let totalReturn = [];
    for (let i = 0; i < XLKUsdReturn.length; i++) {
        totalReturn.push((parseFloat(XLKUsdReturn[i]) * 0.4 + parseFloat(VHTUsdReturn[i]) * 0.3 + parseFloat(IBBUsdReturn[i]) * 0.3))
    }
    callback(totalReturn, method);
    return (
        <>
            <ChartDisplayStrategies dates={dateArray} prices={totalReturn}/>
        </>
    )
};