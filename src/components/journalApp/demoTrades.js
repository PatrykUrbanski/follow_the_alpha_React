var uniqid = require('uniqid');

export const demoTrades = [{
    id: uniqid(),
    index: 1,
    symbol: "AAPL",
    longShort: "long",
    size: "4",
    getIn: "2018-03-03",
    getOut: "2018-05-01",
    duration: 59,
    resultValue: "-57.80 $"
},{
    id: uniqid(),
    index: 2,
    symbol: "MSFT",
    longShort: "long",
    size: "3",
    getIn: "2018-05-04",
    getOut: "2018-08-07",
    duration: 95,
    resultValue: "38.91 $"
},{
    id: uniqid(),
    index: 3,
    symbol: "AMD",
    longShort: "long",
    size: "12",
    getIn: "2018-09-08",
    getOut: "2019-05-09",
    duration: 243,
    resultValue: "-33.60 $"
},{
    id: uniqid(),
    index: 4,
    symbol: "AAPL",
    longShort: "long",
    size: "8",
    getIn: "2019-05-05",
    getOut: "2020-01-01",
    duration: 241,
    resultValue: "681.36 $"
},{
    id: uniqid(),
    index: 5,
    symbol: "MA",
    longShort: "short",
    size: "3",
    getIn: "2020-02-02",
    getOut: "2020-04-04",
    duration: 62,
    resultValue: "-386.57 $"
},{
    id: uniqid(),
    index: 6,
    symbol: "BABA",
    longShort: "long",
    size: "4",
    getIn: "2018-04-04",
    getOut: "2018-05-05",
    duration: 31,
    resultValue: "-21.20 $"
}];
