import { useState } from "react";
import Modal from "../Modal";
import Need from "./Need";
// import { needs } from "./NeedsList";


function NeedItem ({src,title,target,description}) {
     const [modalActive, setModalActive] = useState(false);
    return (
        <>
       <li onClick={() => setModalActive(true)}>
            <div className="needs_card">
                <img src={src} alt="need-item" />
                <div className="needs__description">
                    <h3>{title}</h3>
                    <h4>{target}</h4>
                    <p>{description}</p>
                </div>
                <div className="needs__cards_button">
                <a href="/"><span>Допомогти</span></a>
                </div>
            </div> 
 
        </li>
        <Modal active={modalActive} setActive={setModalActive}>
            <Need/>
         </Modal>   
        </>
    );    
};
export default NeedItem;