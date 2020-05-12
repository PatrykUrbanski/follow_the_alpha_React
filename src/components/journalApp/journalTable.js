import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {JournalChart} from "./journalChart";
var uniqid = require('uniqid');

export const JournalTable = () => {

    let allTrades = JSON.parse(localStorage.getItem("trades"));

    const handleDeleteBtn = (e) => {
        const  key = e.target.getAttribute("data-key");
        allTrades.forEach(trade => {
            if (trade.id === key) {
                delete allTrades[allTrades.indexOf(trade)];
                window.localStorage.trades = JSON.stringify(allTrades)
            }
        })
    };



    return (
        <>
            <section className="tradeTable">
                <div className="tradeTable__content container">
                    <h2>Recent Trades</h2>
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
                                <th className="col-1">{trade.index}</th>
                                <th className="col-4">{trade.symbol} {trade.longShort}</th>
                                <th className="col-3">{trade.resultValue}</th>
                                <th className="col-2">{trade.duration}</th>
                                <th className="col-1">{trade.size}</th>
                                <th className="col-1"><i data-key={trade.id} className="fas fa-trash" onClick={handleDeleteBtn}/></th>
                            </tr>
                        )
                        })}

                        </tbody>
                        <tfoot>
                        <tr className="row">
                            <td className="col-12">Cumulative return <span id="cumReturn"/></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </section>

        </>
    )
};