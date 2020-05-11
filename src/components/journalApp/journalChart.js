import React, {useEffect, useState} from "react";
import {ChartDisplay_journal} from "../chart/ChartDisplay_journal";

export const JournalChart = ({trades}) => {
    const [returnArray, setReturnArray] = useState([]);
    const [datesArray, setDatesArray] = useState([]);

    const cumulativeReturn = (arr) => {
        let modifiedArray = [];
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                sum = arr[i];
                modifiedArray.push(sum.toFixed(2))
            } else {
                sum += arr[i];
                modifiedArray.push(sum.toFixed(2));
            }
        }
        if (modifiedArray[modifiedArray.length - 1] === undefined) {
            return modifiedArray
        } else {
            return modifiedArray
        }
    };


    useEffect(() => {
        let allTrades = JSON.parse(localStorage.getItem("trades"));
        let tempReturnArr = [];
        let tempDatesArr = [];
        if (allTrades != null) {
            allTrades.forEach(function (trade) {
            tempDatesArr.push(trade.getOut);
            tempReturnArr.push(parseFloat(trade.resultValue));
        });
    }
        setReturnArray(tempReturnArr);
        setDatesArray(tempDatesArr);
    }, [trades]);







    return (
        <>
            <ChartDisplay_journal dates={datesArray} prices={cumulativeReturn(returnArray)}/>
        </>
    )
};