function HowYouCanHelp() {
    return (
<<<<<<< HEAD
        <div className="how-you-can-help">
            <h1>How you can help?</h1>
=======
        <div class="how-you-can-help">
            <h1 id="ancore">How you can help?</h1>
>>>>>>> cd724c5677c05f023e564244d0be5f924199f53d
            <p>You can support us in several ways, we will be grateful for any help. This will make our work better and more efficient.</p>
            <div className="help-content" id='donate'>
                <div className="help-card">
                    <h1>You can make a donation</h1>
                    <p>You will save the future.</p>
                    <p>Shelling overhead, destruction of homes, loss of work, closed shops and pharmacies. Ruined plans for the future and small children in arms. Old people who can't leave their homes and an incredible number of animals that ended up on the street.</p>
                    <p>You can help them by donating:</p>
                    <div className="rate">
                            <button className="rate__button" id="uah">
                                <img src="../img/rate_arrow.svg" alt="arrow"/>
                                <span>UAH</span>
                            </button>
                            <button className="rate__button" id="usd">
                                <img src="../img/rate_arrow.svg" alt="arrow"/>
                                <span>USD</span>
                            </button>
                            <button className="rate__button" id="eur">
                                <img src="../img/rate_arrow.svg" alt="arrow"/>
                                <span>EUR</span>
                            </button>
                    </div>
                    <div className="count">
                        <button className="count__button" id="count1">
                            <img src="../img/rate_arrow.svg" alt="arrow"/>
                            <span>100</span>
                        </button>
                        <button className="count__button" id="count2">
                            <img src="../img/rate_arrow.svg" alt="arrow"/>
                            <span>200</span>
                        </button>
                        <button className="count__button" id="count3">
                            <img src="../img/rate_arrow.svg" alt="arrow"/>
                            <span>500</span>
                        </button>
                    </div>
                    <form className="donate-form" action="">
                        <input type="text" placeholder="Offer a different amount"/>
                        <sup>Subscribes text</sup>
                        <button className="btn-credit-card">
                            <span>Donate using a card</span>
                            <img src="../img/icon_card.svg" alt="iconx"/>
                        </button>
                        <button className="btn-pay-pal">
                            <span>Donate using a PayPal</span>
                            <img src="../img/paypal.svg" alt="iconx"/>
                        </button>
                    </form>
                </div>
                <div className="help-photo">
                    <img src="../img/help_photo.png" alt="photox"/>
                </div>
            </div>
        </div>
    );
}
export default HowYouCanHelp;