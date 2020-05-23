import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {JournalChart} from "./journalChart";
import {demoTrades} from "./demoTrades";
var uniqid = require('uniqid');

export const JournalTable = ({addTrades}) => {

    const [reload, setReload] = useState(false);
    const [sum, setSum] = useState(0);








    let allTrades = JSON.parse(localStorage.getItem("trades"));

    useEffect(() => {
        allTrades = JSON.parse(localStorage.getItem("trades"));
        let tempSum = 0;
        if (allTrades === null) {

        } else {
            allTrades.forEach(trade => {
                if (trade != null) tempSum += parseFloat(trade.resultValue);
            });
            setSum(tempSum)
        }
    }, [reload]);

    const handleDeleteBtn = (e) => {
        const  key = e.target.getAttribute("data-key");
        allTrades.forEach(trade => {
            if (trade != null) {
            if (trade.id === key) {
                delete allTrades[allTrades.indexOf(trade)];
                window.localStorage.trades = JSON.stringify(allTrades);
                setReload(prevState => !prevState);
            }
            }
        })
    };

    const handleDemoTrades = () => {
        let dataFromLS = [];
        if (localStorage.getItem("trades") != null) {
            dataFromLS = JSON.parse(localStorage.getItem("trades"));
            dataFromLS.push(...demoTrades);
            localStorage.setItem("trades", JSON.stringify(dataFromLS))
        } else {
            dataFromLS.push(...demoTrades);
            localStorage.setItem("trades", JSON.stringify(dataFromLS))
        }
        setReload(prevState => !prevState)
    };



    return (
        <>


            <section className="tradeTable">
                <div className="tradeTable__content container">
                    <div className={"tradeTable__content__headlines"}>
                        <h2>Recent Trades</h2>
                        <h3 onClick={handleDemoTrades}>Add some demo trades</h3>
                    </div>
                    <table>
                        <thead>
                        <tr className="row">
                            <th className="col-1">Index</th>
                            <th className="col-4">Trade info</th>
                            <th className="col-3">Return</th>
                            <th className="col-2">Duration (days)</th>
                            <th className="col-1">Size</th>
                            <th className="col-1"/>
                        </tr>
                        </thead>
                        <tbody>
                        {allTrades != null && allTrades.map(trade => { return (
                            trade != null &&
                            <tr key={uniqid()} className="row">
                                <td className="col-1">{trade.index}</td>
                                <td className="col-4">{trade.symbol} {trade.longShort}</td>
                                <td className="col-3">{trade.resultValue}</td>
                                <td className="col-2">{trade.duration}</td>
                                <td className="col-1">{trade.size}</td>
                                <td className="col-1"><i data-key={trade.id} className="fas fa-trash" onClick={handleDeleteBtn}/></td>
                            </tr>
                        )
                        })}

                        </tbody>
                        <tfoot>
                        <tr className="row">
                            <td className="col-12">Cumulative return<span id="cumReturn">{`${sum.toFixed(2)} $`}</span></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </section>

            <JournalChart reload={reload} addTrades={addTrades}/>

        </>
    )
};