import { Link } from "react-router-dom";
function SomeStats() {
    return (
        <>
        <div className="some-stats">
            <h1>Наша допомога у цифрах</h1>
            <div className="some-stats__content">
                <img src="../img/stats.png" alt="stats" />
            </div>
            <div className="all-stats">
            <Link to="/docs">
                <button className="btnAllStats">
                    <span>Всі звіти</span>
                    <img src="../img/arrow_h.svg" alt="arrow_h"/>
                </button>
            </Link>
            </div>
        </div>
        </>
    )
}
export default SomeStats;