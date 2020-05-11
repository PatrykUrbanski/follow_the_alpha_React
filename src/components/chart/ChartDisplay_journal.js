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
                pointBorderWidth: "2",
                pointBackgroundColor: "#2E82D5",
                pointBorderColor: "none",
                pointStyle: "circle",
                data: [0, ...prices]
            }
        ]
    };

    return (
        <>
            <div className={"chart container"}>
                <div className={"chart__content"}>
                    <Line data={lineChart}/>
                </div>
            </div>
        </>
    )
};