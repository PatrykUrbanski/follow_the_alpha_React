import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import {MainTemplate} from "./components/main/mainTemplate";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import {Header} from "./components/header/header";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {LoadingScreen} from "./components/loadingScreen/loadingScreen";



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