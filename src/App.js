import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import {MainTemplate} from "./components/main/mainTemplate";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <ParallaxProvider>
            <MainTemplate/>
        </ParallaxProvider>
        </BrowserRouter>
        )
};

ReactDOM.render(<App/>,
    document.getElementById("app"));