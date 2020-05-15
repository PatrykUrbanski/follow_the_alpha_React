import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import {MainTemplate} from "./components/main/mainTemplate";
import {ParallaxProvider} from "react-scroll-parallax/cjs";

import {BrowserRouter, HashRouter, withRouter} from "react-router-dom";




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