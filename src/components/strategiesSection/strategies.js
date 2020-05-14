import React, {useEffect, useState} from "react";
import {StrategiesAlgo} from "./strategiesAlgo";
import {std} from "mathjs";
import { CircleToBlockLoading } from 'react-loadingg';

export const Strategies = () => {


    const [totalReturn, setTotalReturn] = useState(false);
    const [stDev, setStDev] = useState(false);
    const [method, setMethod] = useState("");

    const [cardListHeight, setCardListHeight] = useState(false);
    const [baseCardName, setBaseCardName] = useState("Benchmark SPY");
    const [strategyInfoBtn, setStrategyInfoBtn] = useState(true);
    const [strategyAnime, setStrategyAnime] = useState("");

    const strategiesList = ["Benchmark SPY", "Bond & Stock Hedged", "Dividend & Bonds", "Growth portfolio", "All Weather portfolio"];
    const [strategyToDisplay, setStrategyToDisplay] = useState(strategiesList[0]);
    const handleShowCards = (e) => {
        e.preventDefault();
        setCardListHeight(!cardListHeight);
    };
    const handleChangeStrategy = (e) => {
        e.preventDefault();
        const {name} = e.target;
        setBaseCardName(name);
        setCardListHeight(!cardListHeight);
        setStrategyToDisplay(name);
    };
    const handleStrategyInfoBtn = (e) => {
        e.preventDefault();
        setStrategyInfoBtn(!strategyInfoBtn);
    };



    const dataFromStrategy = (arr, method) => {
        setTotalReturn(parseFloat(arr[arr.length -1]).toFixed(2));
        setStDev(parseFloat(std(arr)).toFixed(2));
        setMethod(method);
    };






    return (
        <>
            <section id={"strategiesSection"} className={`strategies container ${strategyAnime}`}>
                <div className="strategies__page">
                    <h2>Alpha strategies</h2>
                    <p>Actual results based on end-of-day prices.</p>
                    <p>Time period: last 10 year from last trading session.</p>
                    <p>Slippage, broker commission, expanse ratio etc. are not included. Following data are for illustrative and inspiration purposes only.</p>
                    <p className={"warn"}>Do not put your money to the market based only on what you see here.</p>
                    <p className={"warn"}>Do not put money you can't lose on the market.</p>
                    <p className={"warn"}>Do not spend all of your buying power on one equity. </p>
                    <p className={"warn"}>Do not trade based on what some guy in the internet said.</p>
                </div>

                <div className="strategies__cards">
                    <a href="#" className="base card" onClick={handleShowCards}>
                        <span>{baseCardName}</span>
                        <i className="fas fa-angle-down"/>
                    </a>
                    <ul className="card-list" style={{height: `${cardListHeight ? (strategiesList.length) * 60 + "px" : "0"}`}}>
                        {strategiesList.map((strategyElem, index) =>
                            <li key={index}>
                                <a className={"card"} href="#" onClick={e => handleChangeStrategy(e, name)} name={strategyElem}>{strategyElem}</a>
                            </li>)}
                    </ul>

                </div>




                {!totalReturn ? <h1>elo</h1> : (

                    <div className="strategies__info">
                        <ul>
                            <li className="infoBtn" onClick={handleStrategyInfoBtn}>Strategy methodology
                                <i className="fas fa-chevron-circle-right" style={{display: `${strategyInfoBtn ? "inline-block" : "none"}`}}/>
                                <i className="fas fa-times-circle" style={{display: `${strategyInfoBtn ? "none" : "inline-block"}`}}/>
                            </li>
                            <li>Total return:<span>{totalReturn + "%"}</span></li>
                            <li>Annual average return:<span>{(totalReturn / 10).toFixed(2) + "%"}</span></li>
                            <li>Average standard deviation<span>{stDev}</span></li>
                            <li>Yearly Sharpe Ratio<span>{}</span></li>
                            <li>CAGR:<span>12</span></li>
                            <li>CAGR:<span>3343</span></li>
                            <li>CAGR:<span>1212</span></li>
                        </ul>
                        <div className="methodologyBox" style={{height: `${strategyInfoBtn ? "0" : "100%"}`}}>
                            <p>{method}</p>
                        </div>
                    </div>
                ) }


                <div className="strategies__chart">
                    <div className="strategies__chart__content">
                       <StrategiesAlgo callback={dataFromStrategy} strategyToDisplay={strategyToDisplay}/>
                    </div>
                </div>
            </section>

        </>
    )
};