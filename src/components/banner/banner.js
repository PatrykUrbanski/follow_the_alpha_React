import React, {createRef, useState} from "react";


export const Banner = () => {
    const [scrollY, setScrollY] = useState(800);

    const handleClick = (e) => {
        e.preventDefault();
        setScrollY( scrollY + 800);
        window.scrollTo(0, scrollY);
    };

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
                <a href={"#"} onClick={e => handleClick(e)} className={"arrow"}>
                    <span/>
                    <span/>
                </a>
            </section>
        </>
    )
}