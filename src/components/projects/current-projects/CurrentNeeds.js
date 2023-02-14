import Image1 from "./../../img/Image1.png"
import share from "./../../img/share.svg"

const CurrentNeeds = () => {
    return (
    <>
    <div class="wrapper">
        <div class="main-title">
            <h2> Current needs</h2>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel. </p>
        </div>
        <ul className="cards">
        <li>
            <img src={Image1} alt="" />
            <h3>Title</h3>
            <h4>62 667 UAH</h4>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Title</h3>
            <h4>3 days</h4>
            <h4>As much as we can</h4> 
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Title</h3>
            <h4>62 667 UAH</h4>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Need 4</h3>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Need 5</h3>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Need 6</h3>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Need 7</h3>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Need 8</h3>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        <li>
            <img src={Image1} alt="" />
            <h3>Need 9</h3>
            <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
            <div className="cards__button">
                <button className="cards__button_share">
                    <img src={share} alt="share" />
                </button>
                <button className="cards__button_donate">Donate</button>
            </div>
        </li>
        </ul>
        </div>    
    </>
    );
}
export default CurrentNeeds;