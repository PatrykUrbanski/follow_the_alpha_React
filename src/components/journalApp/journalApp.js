import React, {useState} from "react";
import {getData} from "../api/api";
import {JournalTable} from "./journalTable";

const uniqid = require('uniqid');

export const JournalApp = () => {
    const [trades, setTrades] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [symbol, setSymbol] = useState("");
    const [longShort, setLongShort] = useState("long");
    const [size, setSize] = useState("");
    const [getIn, setGetIn] = useState("");
    const [getOut, setGetOut] = useState("");
    const [tradeReturn, setTradeReturn] = useState("0");

    const reset = () => {
        setSymbol("");
        setLongShort("long");
        setSize("");
        setGetIn("");
        setGetOut("");
    };

    const getDays = (getIn, getOut) => {
        let start = new Date(getIn);
        let end = new Date(getOut);
        return parseInt((end - start) / (24 * 3600 * 1000));
    };

    const saveTradeToLS = (newObject) => {
        let dataFromLS = [];
        if (localStorage.getItem("trades") != null) {
            dataFromLS = JSON.parse(localStorage.getItem("trades"));
            dataFromLS.push(newObject);
            localStorage.setItem("trades", JSON.stringify(dataFromLS))
        }
        else {
            dataFromLS.push(newObject);
            localStorage.setItem("trades", JSON.stringify(dataFromLS))
        }
    };
    const getReturnInUsd = (getInLS, getOutLS, symbol, newTrade) => {
        getData(getInLS, getOutLS, symbol)
            .then(response => {
            response.json()
                .then(function (data) {
                if (data.c !== undefined) {
                    if (newTrade.longShort === "long") {
                        let tradeReturnValue = parseFloat((data.c[data.c.length - 1] - data.c[0]) * newTrade.size).toFixed(2).toString() + " $";
                        newTrade.resultValue = tradeReturnValue;
                        saveTradeToLS(newTrade);
                        setTrades(newTrade);
                        return setTradeReturn(tradeReturnValue)
                    }
                    else if (newTrade.longShort === "short") {
                        let tradeReturnValue = parseFloat(data.c[0] - data.c[data.c.length - 1] * newTrade.size).toFixed(2).toString() + " $";
                        newTrade.resultValue = tradeReturnValue;
                        saveTradeToLS(newTrade);
                        setTrades(newTrade);
                        return setTradeReturn(tradeReturnValue)
                    }
                }
                if (data.s === "no_data") {
                    setErrorMsg(true)
                }
            });
        });
    };
    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };
    const handleSendForm = (e) => {
        e.preventDefault();
        if (!symbol || !size || !getIn || !getOut) {
            setErrorMsg(true);
            return null;
        }
        else {
            setErrorMsg(false)
        }
        let allTrades = JSON.parse(localStorage.getItem("trades"));
        if (allTrades === null) {
            allTrades = [];
        }
        const newTrade = {
            id: uniqid(),
            index: allTrades.length + 1,
            symbol: symbol,
            longShort: longShort,
            size: size,
            getIn: getIn,
            getOut: getOut,
            duration: getDays(getIn, getOut),
        };
        getReturnInUsd((Date.parse(getIn) / 1000), (Date.parse(getOut) / 1000), symbol, newTrade);
        document.querySelector("form").reset();
        reset();
    };
    return (
        <>
            <div className={"pageToTransit"}>
            <section className="journalApp">
                <div className="journalApp__content container">
                    <h2 className={"title"}> Journal App </h2>
                    <p>Add your trades and track your portfolio</p>
                    <h2 className={"titleAdd"} onClick={handleOpenForm}>Add new trade
                        <i className="addBtn fas fa-plus-circle" style={{display: `${!openForm ? "inline-block" : "none"}`}}/>
                        <i className="hideBtn fas fa-eye-slash" style={{display: `${!openForm ? "none" : "inline-block"}`}}/>
                    </h2>
                    <form style={{height: `${!openForm ? "0" : "400px"}`}} onSubmit={e => handleSendForm(e)}>
                        <span className="errorMSG" style={{height: `${!errorMsg ? "0px" : "25px"}`}}>You need to properly fill all boxes.</span>
                        <span className={"info"}>Currently we support all S&P 500 companies</span>
                        <label className="symbol">Stock:
                            <input className="formElem" type="text" placeholder="AAPL, KO, BA" value={symbol} name={"symbol"} onChange={e => setSymbol(e.target.value)}/>
                            <span className={"tip"}>AAPL (Apple), KO (Coca-Cola), BA (Boeing) etc.</span>
                        </label>
                        <label>Direction:
                            <select className="longShort formElem" placeholder={"Long/Short"} value={longShort} onChange={e => setLongShort(e.target.value)}>
                                <option value="long">BUY</option>
                                <option value="short">SELL</option>
                            </select>
                        </label>
                        <label className="size">Size:
                            <input className="formElem" type="text" name={"size"} placeholder={"Number of stocks"} value={size} onChange={e => setSize(e.target.value)}/>
                        </label>

                        <label className="getIn">Get in:
                            <input className="formElem" type="date" name={"getIn"} value={getIn} onChange={e => setGetIn(e.target.value)}/>
                        </label>
                        <label className="getOut">Get out:
                            <input className="formElem" type="date" name={"getOut"} value={getOut} onChange={e => setGetOut(e.target.value)}/>
                        </label>
                        <a href="#" type={"submit"} className="doneBtn" onClick={e => handleSendForm(e)}>Done</a>
                    </form>
                </div>
            </section>
            <JournalTable addTrades={trades}/>
            </div>
        </>
    )
};