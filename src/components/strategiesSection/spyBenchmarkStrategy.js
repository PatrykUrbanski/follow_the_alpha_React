import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";

export const SPYBenchmarkStrategy = ({quotes, dates}) => {

    const [prices, setPrices] = useState(false);
    const [dateElems, setDateElems] = useState(false);




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

    if (!prices) return null;
    if (!dateElems) return null;



    const lineChart = {
        labels: [...dateElems],
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

};