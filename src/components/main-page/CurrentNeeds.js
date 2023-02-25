import { Link } from 'react-router-dom';
import Card from './Card'
function CurrentNeeds() {
    return (
        <div className="current-needs">
            <h1>Current needs</h1>
            <p>Now it is important for us to close the 4 most important needs:</p>
            <div className="current-needs__menu">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="allCurrentNeeds">
            <Link to="/current">
                <button className="btnAllNeeds">
                    <span>All current needs</span>
                    <img src="../img/arrow_h.svg" alt="arrow_h"/>
                </button>
            </Link>
        </div>
        </div>
    );
}
export default CurrentNeeds;