import React from "react";

export const getData = (getIn, getOut, symbol) => {
    return fetch(`https://finnhub.io/api/v1/stock/candle?to=${getOut}&symbol=${symbol}&from=${getIn}&resolution=D&token=br4j2i7rh5r8ufeotf9g`, {
        "method": "GET",
    })
};

export const GetSymbols = () => {
    return fetch("https://finnhub-realtime-stock-price.p.rapidapi.com/stock/symbol?exchange=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "finnhub-realtime-stock-price.p.rapidapi.com",
            "x-rapidapi-key": "3d002582d3mshb4f751587ae383dp149c6bjsn08a57828199d"
        }
    })
};

