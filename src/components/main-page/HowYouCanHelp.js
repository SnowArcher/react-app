import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function HowYouCanHelp() {
    const [eur, setEur] = useState(false);
    const [usd, setUsd] = useState(false);
    const [uah, setUah] = useState(true);
    function changeCountButton(id) {
        let elements = document.getElementsByClassName("count__button");
        for (let element of elements) {
            element.classList.remove("active"); 
        }
        document.getElementById(id).classList.toggle("active");
    }
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <div className="how-you-can-help" id='donate'>
            <h1 id="ancore">Як ви можете допомогти?</h1>
            <p>Підтримати нас можна кількома способами, ми будемо вдячні за<br />будь-яку допомогу. Це зробить нашу роботу кращою та<br />ефективнішою.</p>
            <div className="help-content">
                <div className="help-card">
                    <h1>Ви можете зробити донат</h1>
                    <p>Ви врятуєте майбутнє.</p>
                    <p>Обстріли над головою, руйнування житла, втрата роботи, зачинені магазини та аптеки.</p>
                    <p>Зруйновані плани на майбутнє та маленькі діти на руках.</p>
                    <p>Старі люди, які не можуть поїхати, та неймовірна кількість тварин, що опинилася на вулиці.</p>
                    <p>Ви можете допомогти їм зробивши донат:</p>
                    <div className="rate">
                            <button className={`rate__button ${uah? 'active' : ''}`} id="uah" onClick={() => {setUah(true);setUsd(false);setEur(false)}}>
                                <img src="../img/rate_arrow.svg" alt="arrow"/>
                                <span>UAH</span>
                            </button>
                            <button className={`rate__button ${usd? 'active' : ''}`} id="usd" onClick={() => {setUah(false);setUsd(true);setEur(false)}}>
                                <img src="../img/rate_arrow.svg" alt="arrow"/>
                                <span>USD</span>
                            </button>
                            <button className={`rate__button ${eur? 'active' : ''}`} id="eur" onClick={() => {setUah(false);setUsd(false);setEur(true)}}>
                                <img src="../img/rate_arrow.svg" alt="arrow"/>
                                <span>EUR</span>
                            </button>
                    </div>
                    <div className="count">
                        <button className={`count__button ${errors?.donateInput?.type === "required"? "error" : ""}`} id="count1" onClick={() => {
                                changeCountButton('count1');
                                setValue("donateInput", `${uah? 100 : 50}`);
                            }}>
                            <img src="../img/rate_arrow.svg" alt="arrow"/>
                            <span>{uah? 100 : 50}</span>
                        </button>
                        <button className={`count__button ${errors?.donateInput?.type === "required"? "error" : ""}`} id="count2" onClick={() => {
                                changeCountButton('count2');
                                setValue("donateInput", `${uah? 200 : 100}`);
                            }}>
                            <img src="../img/rate_arrow.svg" alt="arrow"/>
                            <span>{uah? 200 : 100}</span>
                        </button>
                        <button className={`count__button ${errors?.donateInput?.type === "required"? "error" : ""}`} id="count3" onClick={() => {
                                changeCountButton('count3');
                                setValue("donateInput", `${uah? 500 : 200}`);
                            }}>
                            <img src="../img/rate_arrow.svg" alt="arrow"/>
                            <span>{uah? 500 : 200}</span>
                        </button>
                    </div>
                    <form className="donate-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="donate-form__input">
                            <input className={`${errors.donateInput? 'error' : ''}`}
                                {...register("donateInput", {
                                    required: {
                                        value: true, 
                                        message: 'Поле не може бути пустим'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Максимальна кількість символів 10'
                                    },
                                    pattern: {
                                        value: /^[1-9][0-9]*$/,
                                        message: "Введені данні повинні бути цілим числом"
                                    },
                                    validate: value => value >= 1 || 'Сума повинна бути більше 1'
                                })} 
                                name = "donateInput"
                                type = "text"
                                placeholder="Запропонуйте іншу суму" 
                                id="donate-input"
                            />
                            {errors?.donateInput && <sup>{errors?.donateInput?.message}</sup>}
                        </div>
                        <button className="btn-credit-card" type="submit" 
                        disabled={!isValid}
                        >
                            <span>Donate using a card</span>
                            <img src="../img/icon_card.svg" alt="iconx"/>
                        </button>
                        <button className="btn-pay-pal" type="submit" 
                        disabled={!isValid}
                        >
                            <span>Donate using a PayPal</span>
                            <img src="../img/paypal.svg" alt="iconx"/>
                        </button>
                    </form>
                </div>
                <div className="help-photo">
                    <img src="../img/help_photo.png" alt="photox"/>
                </div>
            </div>
        </div>
    );
}
export default HowYouCanHelp;