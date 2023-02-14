function Card() {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card-photo">
                    <img src="../img/card_photo.png" alt="building"/>
                </div>
                <div className="card-title">
                    <p>Repair of the premises of the volunteer headquarters after the fire</p>
                </div>
                <div className="card-price">
                    <h1>62 667 UAH</h1>
                </div>
                <div className="card-description">
                    <p>Now there are no windows in the room, the walls are destroyed - this makes the work of the headquarters and the children's center impossible.</p>
                </div>
                <button className="cardDonateBtn">
                    <span>Donate</span>
                </button>
            </div>
        </div>
    );
}
export default Card;