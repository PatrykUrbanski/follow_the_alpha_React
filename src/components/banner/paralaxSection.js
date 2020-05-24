import { Parallax } from 'react-scroll-parallax';
import React, {useState} from 'react';

import {Fade} from "react-reveal";
import {Link} from "react-router-dom";






export const ParallaxBackground = () => {



    return (
        <>
            <div className={"parallax"} id={"parallax"}>
                <Parallax y={[-40, 0]} tagOuter="figure">
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

                    <Fade>
                        <div className={"listElems"}>
                                <ul>
                                    <Fade left>
                                    <li>
                                        <i className="fas fa-times"/>
                                        <span>They buy on tops.</span>
                                    </li>
                                    </Fade>
                                    <Fade right>
                                    <li>
                                        <i className="fas fa-times"/>
                                        <span>Sell on dips.</span>
                                    </li>
                                    </Fade>
                                    <Fade left>
                                    <li>
                                        <i className="fas fa-times"/>
                                        <span>Don't care about money management.</span>
                                    </li>
                                    </Fade>
                                </ul>
                                <div>
                                    <span>Do not follow them</span>
                                </div>
                        </div>
                    </Fade>


                    <div className={"parallax__content fourthEl"}>
                        <p>
                            <Fade cascade>
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