import { Parallax } from 'react-scroll-parallax';
import React, {useState} from 'react';
import ScrollAnimation from "react-animate-on-scroll"
import imageBg from "../../images/bg3.jpg"
import elemcCon from "../../images/elemContent.jpg"
import elemcCon2 from "../../images/elemContentRight.jpg"
import {Fade} from "react-reveal";
import {Link} from "react-router-dom";





export const ParallaxBackground = () => {



    return (
        <>
            <div className={"parallax"} id={"parallax"}>
                <Parallax y={[-50, 0]} tagOuter="figure">
                    <div className={"parallax__bg"} >
                        <img src={"./images/bg3.jpg"}/>
                    </div>
                </Parallax>
                <div className={"container"}>

                    <Fade left>
                    <div className={"parallax__content firstEl"}>
                        <img src={"./images/elemContent.jpg"}/>
                        <p>In 2018 more than 80% of retail traders lost their money.</p>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className={"parallax__content secondEl"}>
                        <img src={"./images/elemContentRight.jpg"}/>
                        <p>Most of them just follow the crowd, relying on what expert in TV says.</p>
                    </div>
                    </Fade>


                    <div className={"parallax__content fourthEl"}>
                        <p>
                            <Fade bottom cascade>
                                <span className={"animeSpan"}>Follow</span>
                                <span className={"animeSpan"}>the</span>
                                <span className={"animeSpan animeText"}><Link to={"/strategies"}>alpha</Link></span>
                            </Fade>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};