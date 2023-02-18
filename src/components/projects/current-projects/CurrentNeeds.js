// import { useState } from "react";
// import Modal from "../Modal";
import {needs} from "./NeedsList.js"
import NeedItem from "./NeedItem";

const CurrentNeeds = () => {
    // const [modalActive, setModalActive] = useState(false);
    return (
    <>
    <div className="needs">
        <h2> Поточні потреби</h2>
        <ul className="needs__cards">
        {needs.map((need, id)=>{
                    return <NeedItem  key={id}
                                title={need.title}
                                src={need.src}
                                target={need.target} 
                                description={need.description} />
                }) 
            }
       { /* <li onClick={() => setModalActive(true)}>
            <div className="needs_card">
                <img src="./../../img/img_current/need1.png" alt="need-item" />
                <div className="needs__description">
                    <h3>Ремонт приміщення волонтерського штабу після пожежі </h3>
                    <h4>20 000 грн</h4>
                    <p>Приміщення наразі не має опалення та електричної проводки, пошкоджені внутрішні перегородки - це дуже ускладнює роботу штабу та дитячого центру. </p>
                </div>
                <div className="needs__cards_button">
                <a href="/"><span>Допомогти</span></a>
                </div>
            </div> 
        </li>
        <li>
            <div className="needs_card">
                <img src="./../../img/img_current/need2.png" alt="need-item" />
                <div className="needs__description">
                    <h3>Допомога дорослим і дітям деокупованих сіл</h3>
                    <h4>80 000 грн</h4>
                    <p>Закупівля продуктів та пального для надання гуманітарної допомоги дітям деокупованих сіл Куп ́янського та Ізюмського районів.</p>
                </div>
                <div className="needs__cards_button">
                    <a href="/"><span>Допомогти</span></a>
                </div>
            </div>    
        </li>
        <li>
            <div className="needs_card">
                <img src="./../../img/img_current/need3.png" alt="need-item" />
                <div className="needs__description">
                    <h3>Ремонт транспорту, що розвозить гуманітарну допомогу</h3>
                    <h4>13 500 грн</h4>
                    <p>Закупівля необхідних автозапчастин для транспорту, який ренулярно розвозить допомогу у Харкові та в селища Харківської області. </p>
                </div>
                <div className="needs__cards_button">
                    <a href="/"><span>Допомогти</span></a>
                </div>
            </div>   
        </li>
        <li>
            <div className="needs_card">
                <img src="./../../img/img_current/need4.png" alt="need-item" />
                <div className="needs__description">
                    <h3>Збір на придбання товарів для тварин, які втратили дім через війну</h3>
                    <h4>45 000 грн</h4>
                    <p>Ми закуповуємо засоби догляду за тваринами, корм та вітаміни. Ми відвеземо ці речі у притулки, які організували небайдужі люди</p>
                </div>
                <div className="needs__cards_button">
                    <a href="/"><span>Допомогти</span></a>
                </div>
            </div>

        </li> */}
        </ul>
        </div> 
  
    </>
    );
}
export default CurrentNeeds;