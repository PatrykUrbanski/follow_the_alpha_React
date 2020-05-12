import { Parallax } from 'react-scroll-parallax';
import React from 'react';


export const Parallaxdiv = () => (
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
        <div style={{fontSize:"20px", position: "relative", opacity: "0.5"}}>
            <img style={{width: "100vw", height: "150vh"}} src={"./images/bg3.jpg"}/>
        </div>
    </Parallax>
);