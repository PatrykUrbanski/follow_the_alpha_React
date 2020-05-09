import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";

export const JournalApp = () => {
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };




    return (
        <>
            <section className="journalApp">
                <div className="journalApp__content container">
                    <h2 onClick={handleOpenForm}>Add new trade
                        <i className="addBtn fas fa-plus-circle" style={{display: `${!openForm ? "inline-block" : "none"}`}}></i>
                        <i className="hideBtn fas fa-eye-slash" style={{display: `${!openForm ? "none" : "inline-block"}`}}></i>
                    </h2>
                    <form style={{height: `${!openForm ? "0" : "400px"}`}}>
                        <span className="errorMSG">You need to properly fill all boxes.</span>
                        <label className="symbol">Currently we support all US stock and ETFs
                            <input className="formElem" type="text" placeholder="Stock symbol" name={"symbol"}/>
                        </label>
                        <select className="longShort formElem" placeholder={"Long/Short"}>
                            <option value="long">LONG</option>
                            <option value="short">SHORT</option>
                        </select>
                        <label className="size">Size
                            <input className="formElem" type="number" name={"size"}/>
                        </label>

                        <label className="getIn">Get in:
                            <input className="formElem" type="date" name={"getIn"}/>
                        </label>
                        <label className="getOut">Get out:
                            <input className="formElem" type="date" name={"getOut"}/>
                        </label>
                        <a href="#" type={"submit"} className="doneBtn">Done</a>
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