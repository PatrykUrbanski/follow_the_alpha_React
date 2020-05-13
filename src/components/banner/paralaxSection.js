import { Parallax } from 'react-scroll-parallax';
import React, {useState} from 'react';
import ScrollAnimation from "react-animate-on-scroll"







export const ParallaxBackground = () => (
    <>
        <div className={"parallax"}>
            <Parallax y={[-50, 0]} tagOuter="figure">
                <div className={"parallax__bg"} >
                    <img src={"./images/bg3.jpg"}/>
                </div>
            </Parallax>
            <div className={"container"}>


                <div className={"parallax__content firstEl"}>
                    <img src={"./images/elemContent.jpg"}/>
                    <p>In 2018 more then 80% of retail traders lost their money.</p>
                </div>



                <div className={"parallax__content secondEl"}>
                    <img src={"./images/elemContentRight.jpg"}/>
                    <p>Most of them just follow the crowd, relies on what expert in TV says.</p>
                </div>


                <div className={"parallax__content thirdEl"}>
                    <p>
                        <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn"} delay={200}>
                            <span>Follow</span>
                        </ScrollAnimation>
                        <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn"} delay={300}>
                            <span>what</span>
                        </ScrollAnimation>
                        <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn"} delay={400}>
                            <span>you</span>
                        </ScrollAnimation>
                        <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn"} delay={500}>
                            <span>know</span>
                        </ScrollAnimation>
                    </p>
                </div>

            </div>
        </div>
    </>
);