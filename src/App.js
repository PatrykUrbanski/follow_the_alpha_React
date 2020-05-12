import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import {MainTemplate} from "./components/main/mainTemplate";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import {Parallaxdiv} from "./components/banner/paralax";


const App = () => {
    return (
        <ParallaxProvider>
            {/*<Parallaxdiv/>*/}
            <MainTemplate/>
        </ParallaxProvider>

        )
};

ReactDOM.render(<App/>,
    document.getElementById("app"));