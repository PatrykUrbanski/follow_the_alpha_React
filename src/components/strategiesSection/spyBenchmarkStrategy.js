import React, {Component, useEffect, useState} from "react";
import {ChartDisplay_strategies} from "../chart/ChartDisplay_strategies";
import {withRouter} from "react-router-dom";

export const SPYBenchmarkStrategy = ({quotes, dates, callback}) => {
    const [prices, setPrices] = useState(false);
    const [dateElems, setDateElems] = useState(false);

    const method = "Simple Buy and Hold SP 500 strategy. Based on IVV etf.";

    useEffect(() => {
        let usdReturn = [];
        let dateArray = [];
        for (let i = 0; i < quotes.length; i++) {
            usdReturn.push((quotes[i] / quotes[0] * 100).toFixed(3));
            let date = new Date(dates[i] * 1000);
            dateArray.push(date.toString().slice(4, 15))
        }
        setPrices(usdReturn);
        setDateElems(dateArray)
    }, []);

    if (!prices || !dateElems) return null;

    callback(prices, method);



    return (
        <>
            <ChartDisplay_strategies dates={dateElems} prices={prices}/>
        </>
    )

};