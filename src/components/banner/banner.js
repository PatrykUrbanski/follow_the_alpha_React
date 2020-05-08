import React from "react";

export const Banner = () => {
    return (
        <>
            <section className="banner container">
                <div className="wordCarousel">
                    Follow the
                    <div className="wordCarousel__wrap">
                        <div className="flip4">
                            <ul className="list">
                                <li className="list__word">Greed</li>
                                <li className="list__word">Fear</li>
                                <li className="list__word">Money</li>
                                <li className="list__word">Alpha</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="arrow">
                    <span></span>
                    <span></span>
                </div>
            </section>
        </>
    )
}