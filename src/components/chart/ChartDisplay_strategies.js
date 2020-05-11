import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";


export const ChartDisplay_strategies = ({dates, prices}) => {
    const lineChart = {
        labels: [...dates],
        datasets: [
            {
                label: 'Cumulative value of investment in %',
                fill: "origin",
                backgroundColor: "rgba(233, 74, 69, .5)",
                borderColor: "#e94a45",
                borderWidth: "2",
                borderCapStyle: "round",
                pointBorderWidth: "0",
                pointBorderColor: "none",
                pointStyle: "line",
                data: [...prices]
            }
        ]
    };

    return (
        <>
            <Line data={lineChart}/>
        </>
    )
}