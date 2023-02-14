import Image3 from "../../img/Image3.png";
import share from "../../img/share.svg";
import arrowForwardCircle from "../../img/arrowForwardCircle.svg";


function Need () {
    return (
        <>
            <div className="need">
                <h2> Need 1 </h2>
                <div className="need__description">
                    <img src={Image3} alt="need"/>
                    <div className="need__description_wrapper">
                        <h4>62 667 UAH</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</li>
                            <li>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</li>
                            <li>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</li>
                            <li>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</li>
                        </ul>
                        <div className="need__button">
                            <button className="need__button_share">
                                <img src={share} alt="share"/>
                            </button>
                            <button className="need__button_donate">
                                <span>Donate</span>
                            <img src={arrowForwardCircle} alt="arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Need;