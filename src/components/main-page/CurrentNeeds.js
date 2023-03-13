import { Link } from 'react-router-dom';
import Data from './data.json';
import Card from './Card';

function CurrentNeeds() {
    return (
        <div className="current-needs">
            <h1>Поточні потреби</h1>
            <p>Зараз для нас є важливим закриття<br />4 найважливіших потреб:</p>
            <div className="current-needs__menu">
                {Data["needs"].map((value, index) => {
                    if (index < 4) {
                        return <Card key={index}
                        src={value.photo}
                        title={value.title}
                        price={value.price}
                        description={value.description}
                    />
                    } else return null;
                })}
            </div>
            <div className="allCurrentNeeds">
            <Link to="/current">
                <button className="btnAllNeeds">
                    <span>Всі поточні потреби</span>
                    <img src="../img/arrow_h.svg" alt="arrow_h"/>
                </button>
            </Link>
            </div>
        </div>
    );
}
export default CurrentNeeds;