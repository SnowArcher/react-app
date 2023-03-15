import Wrapper from './Wrapper';

function Hero() {
    return (
        <header className="hero">
            <div className="hero__info">
                <h1>Допоможіть постраждалим від війни</h1>
                <p>Війна застала нас у рідному Харкові. Ми на власні очі бачимо страждання та біль людей. Тому, ми створили благодійний фонд "А-ХЕЛП УКРАЇНА і тепер допомогаємо людям.<br />Долучайся і ти."</p>
                <button className="btnDonate" onClick={() => {document.getElementById("donate").scrollIntoView()}}>
                        <span>Допомогти</span>
                        <img src="../img/arrow_h.svg" alt="arrow" />
                </button>
            </div>
            <Wrapper />
        </header>
    )
}

export default Hero;