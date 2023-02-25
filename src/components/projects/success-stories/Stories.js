import SuccessStory from "./SuccesStory";
import {stories} from "./SuccessStoriesList";
import Slider from "./slider/Slider"


function Stories () {
    return (
    <>
        <div className="success-stories">
            <h2> Успішні історії</h2>
            <ul className="success-stories__cards">
            {stories.map((story, id)=>{
                    return <SuccessStory  key={id}
                                title={story.title}
                                src={story.src}
                                description={story.description}
                                date={story.date}
                                srcBig={story.srcBig} />
                }) 
            }
            </ul>
     
        </div>
    </>
    );
}
export default Stories;