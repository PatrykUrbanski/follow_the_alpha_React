import React, {useEffect, useState} from "react";
import {ChartDisplay_strategies} from "../chart/ChartDisplay_strategies";
import {getData} from "../api/api";

export const BondStockHedged = ({dates, callback}) => {

    const [IVVReturn, setIVVReturn] = useState(false);
    const [SCOReturn, setSCOReturn] = useState(false);
    const [BSVReturn, setBSVReturn] = useState(false);

    const growthStrategyTickers = ["IVV", "SCO", "BSV"];
    const functions = [setIVVReturn, setSCOReturn, setBSVReturn];


    const getTenYearsFromLastSession = (lastSession) => {
        return lastSession - 3600 * 24 * 365.25 * 10
    };
    const getLastTradingSession = () => {
        return Math.floor(Date.now() / 1000 - (24 * 3600));
    };

    const method = "growth grwotjrdasdasdasd";

    useEffect(() => {
        growthStrategyTickers.forEach((ticker, index) => {
            getData(getTenYearsFromLastSession(getLastTradingSession()), getLastTradingSession(), ticker)
                .then(resp => resp.json())
                .then(data => {
                    functions[index](data.c);
                })
                .catch(err => console.log(err))
        });
    }, []);

    if (!IVVReturn || !SCOReturn || !BSVReturn) return null;


    let IVVUsdReturn = [];
    let SCOUsdReturn = [];
    let BSVUsdReturn = [];

    let dateArray = [];
    for (let i = 0; i < dates.length; i++) {
        IVVUsdReturn.push((IVVReturn[i] / IVVReturn[0] * 100).toFixed(3));
        SCOUsdReturn.push((SCOReturn[i] / SCOReturn[0] * 100).toFixed(3));
        BSVUsdReturn.push((BSVReturn[i] / BSVReturn[0] * 100).toFixed(3));

        let date = new Date(dates[i] * 1000);
        dateArray.push(date.toString().slice(4, 15))
    }




    let totalReturn = [];
    for (let i = 0; i < IVVUsdReturn.length; i++) {
        totalReturn.push((parseFloat(IVVUsdReturn[i]) * 0.4 + parseFloat(SCOUsdReturn[i]) * 0.2 + parseFloat(BSVUsdReturn[i]) * 0.4))
    }


    callback(totalReturn, method);




    return (
        <>
            <ChartDisplay_strategies dates={dateArray} prices={totalReturn}/>
        </>
    )
};