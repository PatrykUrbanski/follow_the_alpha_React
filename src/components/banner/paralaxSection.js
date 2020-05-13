import { Parallax } from 'react-scroll-parallax';
import React, {useState} from 'react';








export const ParallaxBackground = () => (
    <>
        <div className={"parallax"}>
            <Parallax y={[-50, 0]} tagOuter="figure">
                <div className={"parallax__bg"} >
                    <img src={"./images/bg3.jpg"}/>
                </div>
            </Parallax>

            <div className={"parallax__content firstEl"}>
                <img src={"./images/elemContent.jpg"}/>
                <p>In 2018 more then 80% of retail traders lost their money.</p>
            </div>

            <div className={"parallax__content secondEl"}>
                <img src={"./images/elemContentRight.jpg"}/>
                <p>Most of them just follow the crowd, relies on what expert in TV says.</p>
            </div>

            {/*<div className={"parallax__content thirdEl"}>*/}
            {/*    <p>*/}
            {/*        <span>Follow</span>*/}
            {/*        <span>what</span>*/}
            {/*        <span>you</span>*/}
            {/*        <span>know</span>*/}
            {/*    </p>*/}
            {/*</div>*/}

        </div>
    </>
);