import React, {useEffect, useState} from "react";
import {ChartDisplayJournal} from "../chart/ChartDisplay_journal";

export const JournalChart = ({reload, addTrades}) => {
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
                if (trade != null) {
                    tempDatesArr.push(trade.getOut);
                    tempReturnArr.push(parseFloat(trade.resultValue));
                }
        });
    }
        setReturnArray(tempReturnArr);
        setDatesArray(tempDatesArr);
    }, [reload, addTrades]);
    return (
        <>
            <ChartDisplayJournal dates={datesArray} prices={cumulativeReturn(returnArray)}/>
        </>
    )
};