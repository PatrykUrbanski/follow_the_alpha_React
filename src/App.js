import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import {MainTemplate} from "./components/main/mainTemplate";

const App = () => {
    return <MainTemplate/>
};

ReactDOM.render(<App/>,
    document.getElementById("app"));