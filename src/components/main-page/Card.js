import { useState } from "react";

function Card({src, title, price, description}) {
    const [isHover, setHover] = useState(false);
    return (
        <div className="card" onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
            <div className={`card__content ${isHover? 'hovered':''}`}>
                <div className="card-photo">
                    <img src={src} alt="building"/>
                </div>
                <div className="card-title">
                    <p>{title}</p>
                </div>
                <div className="card-price">
                    <h1>{price}</h1>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>
                <button className="cardDonateBtn" onClick={() => {document.getElementById("donate").scrollIntoView()}}>
                    <span>Допомогти</span>
                </button>
            </div>
        </div>
    );
}
export default Card;