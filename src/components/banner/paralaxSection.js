import { Parallax } from 'react-scroll-parallax';
import React, {useState} from 'react';
import ScrollAnimation from "react-animate-on-scroll"







export const ParallaxBackground = () => {
    const [crossSpan, setCrossSpan] = useState(false);



    return (
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
                            <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn"} delay={100}>
                                <span>Follow</span>
                            </ScrollAnimation>
                            <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn"} delay={200}>
                                <span>the</span>
                            </ScrollAnimation>
                            <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn crossText"} delay={300}>
                                <span>data</span>
                            </ScrollAnimation>
                            <ScrollAnimation className={"animeSpan"} animateIn={"fadeIn growText"} delay={700}>
                                <span>alpha</span>
                            </ScrollAnimation>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};