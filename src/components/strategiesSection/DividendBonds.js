import React, {useEffect, useState} from "react";
import {ChartDisplayStrategies} from "../chart/ChartDisplay_strategies";
import {getData} from "../api/api";
import {getFiveYearsFromLastSession, getLastTradingSession} from "./strategiesAlgo";

export const DividendBonds = ({dates, callback}) => {
    const [AORReturn, setAORReturn] = useState(false);
    const [AOAReturn, setAOAReturn] = useState(false);
    const [BSVReturn, setBSVReturn] = useState(false);
    const growthStrategyTickers = ["AOR", "AOA", "BSV"];
    const functions = [setAORReturn, setAOAReturn, setBSVReturn];
    const method = `Strategy based on dividend accumulating funds. Allocate assets to equal parts of AOR and AOA (Respectively, growth and aggressive, multi-cap companies in developed markets), hedged with BSV (Short-term bonds Fund)`;

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

    if (!AORReturn || !AOAReturn || !BSVReturn) return null;
    let AORUsdReturn = [];
    let AOAUsdReturn = [];
    let BSVUsdReturn = [];
    let dateArray = [];
    for (let i = 0; i < dates.length; i++) {
        AORUsdReturn.push((AORReturn[i] / AORReturn[0] * 100).toFixed(3));
        AOAUsdReturn.push((AOAReturn[i] / AOAReturn[0] * 100).toFixed(3));
        BSVUsdReturn.push((BSVReturn[i] / BSVReturn[0] * 100).toFixed(3));
        let date = new Date(dates[i] * 1000);
        dateArray.push(date.toString().slice(4, 15))
    }
    let totalReturn = [];
    for (let i = 0; i < AORUsdReturn.length; i++) {
        totalReturn.push((parseFloat(AORUsdReturn[i]) * 0.4 + parseFloat(AOAUsdReturn[i]) * 0.4 + parseFloat(BSVUsdReturn[i]) * 0.2))
    }
    callback(totalReturn, method);
    return (
        <>
            <ChartDisplayStrategies dates={dateArray} prices={totalReturn}/>
        </>
    )
};