import React, {useEffect, useState} from "react";
import {ChartDisplay_strategies} from "../chart/ChartDisplay_strategies";
import {getData} from "../api/api";

export const GrowthStrategy = ({dates, callback}) => {

    const [XLKReturn, setXLKReturn] = useState(false);
    const [VHTReturn, setVHTReturn] = useState(false);
    const [IBBReturn, setIBBReturn] = useState(false);

    const growthStrategyTickers = ["XLK", "VHT", "IBB"];
    const functions = [setXLKReturn, setVHTReturn, setIBBReturn];


    const getTenYearsFromLastSession = (lastSession) => {
        return lastSession - 3600 * 24 * 365.25 * 10
    };
    const getLastTradingSession = () => {
        return Math.floor(Date.now() / 1000 - (24 * 3600));
    };



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


    callback(totalReturn);




    return (
        <>
            <ChartDisplay_strategies dates={dateArray} prices={totalReturn}/>
        </>
    )
};