import Wrapper from './Wrapper';
function Hero() {
    return (
        <header className="hero">
            <div className="hero__info">
                <h1>Help Ukranian People</h1>
                <p>A-help is a revolutionary charity product that helps those in need by providing essential goods and services. With A-help, you can make a difference in the lives of people who are struggling to make ends meet. </p>
                <button className="btnDonate" onClick={() => {document.getElementById("donate").scrollIntoView()}}>
                        <span>Donate</span>
                        <img src="../img/arrow_h.svg" alt="arrow" />
                </button>
            </div>
            <Wrapper />
        </header>
    )
}

export default Hero;