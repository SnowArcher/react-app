import StorySlider from "./StorySlider";
import { useState } from "react";

function StoryCard({img, title, description, date}) {
    const [isHover, setHover] = useState(false);
    return (
        <div className="story-card" onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
            <div className={`story-card__content ${isHover? 'hovered':''}`}>
                <StorySlider src={img}/>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default StoryCard;