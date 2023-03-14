import StoryCard from "./StoryCard";
import { Link } from "react-router-dom";
import Data from './data.json';

function SuccesStories() {
    return (
        <div className="succes-stories_main">
            <h1>Успішні історії</h1>
            <p>Хочемо поділитися історіями, в яких допомога знайшла своїх адресатів. Прагнемо, щоб таких історій було якомога більше.</p>
            <div className="stories-content">
                {Data["story"].map((value, index) => {
                    if (index < 3) {
                        return <StoryCard key={index}
                        img={value.photo}
                        title={value.title}
                        description={value.description}
                        date={value.date}
                    />
                    } else return null;
                })}
            </div>
            <div className="allSuccesStory">
                <Link to="/success_stories">
                    <button className="btnAllStory">
                        <span>Всі успішні історії</span>
                        <img src="../img/arrow_h.svg" alt="arrow_h"/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SuccesStories;