import React, {useState} from "react";

export const Strategies = () => {
    const [cardListHeight, setCardListHeight] = useState(false);
    const [baseCardName, setBaseCardName] = useState("Benchmark SPY");

    const strategiesList = ["Benchmark SPY", "Momentum", "Mean-Reversion", "Value portfolio", "Growth portfolio"];

    const handleShowCards = (e) => {
        e.preventDefault();
        setCardListHeight(!cardListHeight);
    };

    const handleChangeStrategy = (e) => {
        e.preventDefault();
        const {name} = e.target;
        setBaseCardName(name);
        setCardListHeight(!cardListHeight);
    };



    return (
        <>
            <section className="strategies container">
                <p id="strategiesPage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur
                    dicta itaque laboriosam minima sed ut voluptates? Culpa doloribus labore, nobis sequi suscipit vero.
                    Distinctio nemo porro ratione tenetur vel!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur dicta itaque laboriosam
                    minima sed ut voluptates? Culpa doloribus labore, nobis sequi suscipit vero. Distinctio nemo porro
                    ratione tenetur vel!</p>
                <div className="strategies__cards">
                    <a href="#" className="base card" onClick={handleShowCards}>
                        <span>{baseCardName}</span>
                        <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="card-list" style={{height: `${cardListHeight ? (strategiesList.length) * 60 + "px" : "0"}`}}>
                        {strategiesList.map((strategyElem, index) =>
                            <li key={index}>
                                <a className={"card"} href="#" onClick={e => handleChangeStrategy(e, name)} name={strategyElem}>{strategyElem}</a>
                            </li>)}
                    </ul>

                </div>

                <div className="strategies__info">
                    <ul>
                        <li className="infoBtn">Strategy methodology
                            <i className="showMethBtn fas fa-chevron-circle-right"></i>
                            <i className="hideMethBtn fas fa-times-circle"></i>
                        </li>
                        <li>Total return:<span>256%</span></li>
                        <li>Annual average return:<span>12%</span></li>
                        <li>Biggest dropdown:<span>30%</span></li>
                        <li>CAGR:<span>23</span></li>
                        <li>CAGR:<span>12</span></li>
                        <li>CAGR:<span>3343</span></li>
                        <li>CAGR:<span>1212</span></li>
                    </ul>
                    <div className="methodologyBox">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsam nulla obcaecati odio
                            tempore vero voluptatum. At dicta enim impedit natus neque perspiciatis sapiente totam.
                            Magni modi neque soluta voluptatem.</p>
                    </div>
                </div>

                <div className="strategies__chart">
                    <div className="strategies__chart__content">
                        <canvas id="strategyChart"></canvas>
                    </div>
                </div>
            </section>

        </>
    )
}