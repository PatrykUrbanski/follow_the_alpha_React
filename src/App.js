import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import {MainTemplate} from "./components/main/mainTemplate";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import {Header} from "./components/header/header";



const App = () => {
    return (
        <ParallaxProvider>
            <MainTemplate/>
        </ParallaxProvider>

        )
};

ReactDOM.render(<App/>,
    document.getElementById("app"));