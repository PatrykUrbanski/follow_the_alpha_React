import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";

export const JournalApp = () => {
    const [openForm, setOpenForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const [symbol, setSymbol] = useState(false);
    const [longShort, setLongShort] = useState(false);
    const [size, setSize] = useState(false);
    const [getIn, setGetIn] = useState(false);
    const [getOut, setGetOut] = useState(false);

     const getDays = (getIn, getOut) => {
        let start = new Date(getIn.value);
        let end = new Date(getOut.value);
        return parseInt((end - start) / (24 * 3600 * 1000));
    };


    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };

    const handleSendForm = (e) => {
        e.preventDefault();
        if (!symbol || !longShort || !size || !getIn || !getOut) setErrorMsg(true);

        let allTrades = JSON.parse(localStorage.getItem("trades"));
        if (allTrades === null) {
            allTrades = [];
        }

        const newTrade = {
            id: "",
            symbol: symbol.value,
            longShort: longShort.value,
            size: size.value,
            // lev: lev.value,
            getIn: getIn.value,
            getOut: getOut.value,
            duration: getDays(getIn, getOut),
        };


    };



    return (
        <>
            <section className="journalApp">
                <div className="journalApp__content container">
                    <h2 onClick={handleOpenForm}>Add new trade
                        <i className="addBtn fas fa-plus-circle" style={{display: `${!openForm ? "inline-block" : "none"}`}}></i>
                        <i className="hideBtn fas fa-eye-slash" style={{display: `${!openForm ? "none" : "inline-block"}`}}></i>
                    </h2>
                    <form style={{height: `${!openForm ? "0" : "400px"}`}} onSubmit={e => handleSendForm(e)}>
                        <span className="errorMSG" style={{height: `${!errorMsg ? "0px" : "25px"}`}}>You need to properly fill all boxes.</span>
                        <label className="symbol">Currently we support all US stock and ETFs
                            <input className="formElem" type="text" placeholder="Stock symbol" name={"symbol"} onChange={e => setSymbol(e.target.value)}/>
                        </label>
                        <select className="longShort formElem" placeholder={"Long/Short"} onChange={e => setLongShort(e.target.value)}>
                            <option value="long">LONG</option>
                            <option value="short">SHORT</option>
                        </select>
                        <label className="size">Size
                            <input className="formElem" type="number" name={"size"} onChange={e => setSize(e.target.value)}/>
                        </label>

                        <label className="getIn">Get in:
                            <input className="formElem" type="date" name={"getIn"} onChange={e => setGetIn(e.target.value)}/>
                        </label>
                        <label className="getOut">Get out:
                            <input className="formElem" type="date" name={"getOut"} onChange={e => setGetOut(e.target.value)}/>
                        </label>
                        <a href="#" type={"submit"} className="doneBtn" onClick={e => handleSendForm(e)}>Done</a>
                    </form>
                </div>
            </section>

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
                            <th className="col-1"></th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        <tfoot>
                        <tr className="row">
                            <td className="col-12">Cumulative return <span id="cumReturn"></span></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </>
    )
};