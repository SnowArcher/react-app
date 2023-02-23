import { useState } from "react";
import Modal from "../Modal";
import TextTruncate from 'react-text-truncate';

function SuccessStory ({src,title,date,description,srcBig}) {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <li onClick={() => setModalActive(true)}>
                <div>
                    <img src={src} alt="success-story-item"/>
                    <TextTruncate
                            line={3}
                            element="h3"
                            truncateText="…"
                            text={title}
                    />
                    <TextTruncate
                            line={4}
                            element="p"
                            truncateText="…"
                            text={description}
                    />
                    <span>{date}</span>
                </div>

                <Modal active={modalActive} setActive={setModalActive}>
                <div className="success-story">
                <img src={srcBig} className="success-story_img" alt="story"/>
                <div className="success-story__description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>{date}</span>
                </div>
                <button className="btn_close" onClick={() => setModalActive(false)}>
                    <img src="./../../img/close.svg" alt="close"/>
                </button>
            </div>
            
            </Modal>
            </li>
        </>
    );
}
export default SuccessStory;