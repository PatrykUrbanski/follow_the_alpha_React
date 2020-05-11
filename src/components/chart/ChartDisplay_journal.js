import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";


export const ChartDisplay_journal = ({dates, prices}) => {
    const lineChart = {
        labels: [0, ...dates],
        datasets: [
            {
                label: 'Cumulative return in USD',
                borderColor: "#2E82D5",
                backgroundColor: "transparent",
                borderWidth: "2",
                borderCapStyle: "round",
                pointBorderWidth: "0",
                pointBorderColor: "none",
                pointStyle: "line",
                data: [0, ...prices]
            }
        ]
    };

    return (
        <>
            <Line data={lineChart}/>
        </>
    )
}