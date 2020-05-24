import React from "react";


export const AuthorPage = () => {
    return (
        <>
            <div className={"pageToTransit container authorPage"}>
                <div className={"authorPage__info"}>
                    <h1>Author</h1>
                    <div className={"authorPage__info__box"}>
                        <h2>Patryk Urbański</h2>
                        <p>I'm highly motivated, result driven junior front-end developer.
                            Professionally, interested in web developing, new trends in tech, disturbing innovations, equity trading and portfolio management.
                            Try really hard to develop better design sense and reduce saying "damn, that's not pretty" when using Adobe XD.</p>
                        <p>Personally, fan of inconspicuous restaurants in nice places all around the globe, struggle to keep my plants alive,
                            switched travels for life with little corgi with whom I bark on people if it's earlier than 7am.</p>
                        <span>Contact Me </span>
                        <div className={"authorPage__info__box__contact"}>
                            <a target={"_blank"} href={"https://github.com/PatrykUrbanski"}><i className="fab fa-github"/></a>
                            <a target={"_blank"} href={"https://www.linkedin.com/in/patryk-urbanski/"}><i className="fab fa-linkedin-in"/></a>
                            <a target={"_blank"} href={"https://www.facebook.com/patryk.urbansky/"}><i className="fab fa-facebook-f"/></a>
                        </div>
                    </div>
                </div>

                <div className={"ChartAnimation"} style={{backgroundImage: "url(./images/bgChart.png)"}}/>


                <div className={"authorPage__tech"}>
                    <h1>Project</h1>
                    <div className={"authorPage__tech__box"}>
                        <h2>Technology stack</h2>
                        <ul className={"techStack"}>
                            <li><i className="fab fa-react"/><strong>React</strong> <span>hooks//arrow function component//react-router</span></li>
                            <li><i className="fab fa-js"/><strong>JavaScrip</strong> <span>ECMA6 +</span></li>
                            <li><i className="fab fa-html5"/><strong>HTML 5</strong></li>
                            <li><i className="fab fa-css3-alt"/><strong>CSS 3</strong> <span>SCSS</span></li>
                            <li><i className="fab fa-sass"/><strong>SASS</strong></li>
                        </ul>
                        <h3>Developer Tools and others</h3>
                        <ul className={"devTools"}>
                            <li>Webpack/Gulp</li>
                            <li>RWD</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>WebStorm</li>
                            <li>Adobe XD</li>
                        </ul>

                        <div className={"projectDetails"}>
                            <h4>Project details</h4>
                            <ul className={"projectDetails__list"}>
                                <li>Real-Time stock data: finnhub.io</li>
                                <li>Charts: react-chartjs-2</li>
                                <li>Parallax background: React Scroll Parallax</li>
                                <li>
                                    <ul>
                                        <span>Features to be release soon :</span>
                                        <li>Active management strategies</li>
                                        <li>Quaterly, half-yearly and yearly equity rebalancing</li>
                                        <li>Sorting trades and statistics on volatility</li>
                                        <li>... and more</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
};