import React, {useEffect, useState} from "react";
import {ChartDisplay_strategies} from "../chart/ChartDisplay_strategies";
import {getData} from "../api/api";

export const AllWeatherStrategy = ({dates, callback}) => {

    const [IVVReturn, setIVVReturn] = useState(false);
    const [VEUReturn, setVEUReturn] = useState(false);
    const [BNDReturn, setBNDReturn] = useState(false);

    const allWeatherStrategyTickers = ["IVV", "VEU", "BND"];
    const functions = [setIVVReturn, setVEUReturn, setBNDReturn];


    const getTenYearsFromLastSession = (lastSession) => {
        return lastSession - 3600 * 24 * 365.25 * 10
    };
    const getLastTradingSession = () => {
        return Math.floor(Date.now() / 1000 - (24 * 3600));
    };

    const method = "all weather porftolio homie";

    useEffect(() => {
        allWeatherStrategyTickers.forEach((ticker, index) => {
            getData(getTenYearsFromLastSession(getLastTradingSession()), getLastTradingSession(), ticker)
                .then(resp => resp.json())
                .then(data => {
                    functions[index](data.c);
                })
                .catch(err => console.log(err))
        });
    }, []);

    if (!IVVReturn || !VEUReturn || !BNDReturn) return null;


    let IVVUsdReturn = [];
    let VEUUsdReturn = [];
    let BNDUsdReturn = [];

    let dateArray = [];
    for (let i = 0; i < dates.length; i++) {
        IVVUsdReturn.push((IVVReturn[i] / IVVReturn[0] * 100).toFixed(3));
        VEUUsdReturn.push((VEUReturn[i] / VEUReturn[0] * 100).toFixed(3));
        BNDUsdReturn.push((BNDReturn[i] / BNDReturn[0] * 100).toFixed(3));

        let date = new Date(dates[i] * 1000);
        dateArray.push(date.toString().slice(4, 15))
    }



    let totalReturn = [];
    for (let i = 0; i < IVVUsdReturn.length; i++) {
        totalReturn.push((parseFloat(IVVUsdReturn[i]) * 0.4 + parseFloat(VEUUsdReturn[i]) * 0.3 + parseFloat(BNDUsdReturn[i]) * 0.3))
    }



    callback(totalReturn, method);



    return (
        <>
            <ChartDisplay_strategies dates={dateArray} prices={totalReturn}/>
        </>
    )
};