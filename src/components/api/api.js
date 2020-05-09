import React, {useEffect, useState} from "react";

export const getData = (getIn, getOut, symbol) => {
    return fetch(`https://finnhub-realtime-stock-price.p.rapidapi.com/stock/candle?to=${getOut}&symbol=${symbol}&from=${getIn}&resolution=D`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "finnhub-realtime-stock-price.p.rapidapi.com",
            "x-rapidapi-key": "f399514292msh37b06fbdab93847p15f519jsn47a38c2e257c"
        }
    })
};



export const GetSymbols = () => {
    return fetch("https://finnhub-realtime-stock-price.p.rapidapi.com/stock/symbol?exchange=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "finnhub-realtime-stock-price.p.rapidapi.com",
            "x-rapidapi-key": "f399514292msh37b06fbdab93847p15f519jsn47a38c2e257c"
        }
    })
};

