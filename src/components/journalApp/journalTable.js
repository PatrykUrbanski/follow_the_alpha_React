import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {JournalChart} from "./journalChart";

export const JournalTable = () => {
    let allTrades = JSON.parse(localStorage.getItem("trades"));

    return (
        <>
            <section className="tradeTable">
                <div className="tradeTable__content container">
                    <h2>Recent Trades</h2>
                    <table>
                        <thead>
                        <tr className="row">
                            <th className="col-1">Id</th>
                            <th className="col-4">Trade info</th>
                            <th className="col-3">Return</th>
                            <th className="col-2">Duration (days)</th>
                            <th className="col-1">Size</th>
                            <th className="col-1"/>
                        </tr>
                        </thead>
                        <tbody>
                        {allTrades != null && allTrades.map(trade => { return (
                            <tr key={`${trade.id}-row`} className="row">
                                <th className="col-1">{trade.id}</th>
                                <th className="col-4">{trade.symbol} {trade.longShort}</th>
                                <th className="col-3">{trade.resultValue}</th>
                                <th className="col-2">{trade.duration}</th>
                                <th className="col-1">{trade.size}</th>
                                <th className="col-1"><i className="fas fa-trash"/></th>
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

            {/*<JournalChart/>*/}
        </>
    )
}