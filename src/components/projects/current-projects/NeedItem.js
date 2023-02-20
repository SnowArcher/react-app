import { useState } from "react";
import Modal from "../Modal";
import "./../../../scss/blocks/_need.scss"
import { HashLink as Link } from "react-router-hash-link";
//import TextTruncate from 'react-text-truncate'; 


function NeedItem ({src,title,target,description,longDesc,srcBig}) {
     const [modalActive, setModalActive] = useState(false);
    return (
        <>
       <li onClick={() => setModalActive(true)}>
            <div className="needs_card">
                <img src={src} alt="need-item"/>
                <div className="needs__description">
                    <h3>{title}</h3>
                    <h4>{target}</h4>
                    <p className="tocut">{description}</p>
                                      
                </div>
                <div className="needs__cards_button">
                <Link to="/#ancore"><span>Допомогти</span></Link>
                </div>
            </div> 

            <Modal active={modalActive} setActive={setModalActive}>
            <div className="need">
                <img src={srcBig} className="need_img" alt="need"/>
                <div className="need__description">
                    <h3>{title}</h3>
                    <h4>{target}</h4>
                    <p>{longDesc}</p>
                    <div className="need_button">
                        <Link to="/#ancore"><span>Допомогти</span></Link>
                    </div>
                </div>
                <button className="btn_close" onClick={() => setModalActive(false)}>
                    <img src="./../../img/close.svg" alt="close"/>
                </button>
            </div>
            
            </Modal> 
        </li>
  
        </>
    );  
};
export default NeedItem;