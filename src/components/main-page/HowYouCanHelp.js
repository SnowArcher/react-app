import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// import { useState , useEffect} from "react";

// const useValidation = (value, validations) => {
//     const [isEmpty, setEmpty] = useState(true);
//     const [minLength, setMinLength] = useState(false);
//     useEffect(() => {
//         for (const validation in validations) {
//             switch (validation) {
//                 case 'minLength':
//                     value.length < validations[validation] ? setMinLength(true) : setMinLength(false);
//                     break;
//                 case 'isEmpty':
//                     value? setEmpty(false) : setEmpty(true);
//                     break;
//                 default:
//             }
//         }
//     }, [value]);

//     return {
//         isEmpty,
//         minLength
//     }
// }

// const useInput = (initialValue, validations) => {
//     const [value, setValue] = useState(initialValue)
//     const [isDirty, setDirty] =useState(false);
//     const valid = useValidation(value, validations)
//     const onChange = (e) => {
//         setValue(e.target.value)
//     }

//     const onBlur = (e) => {
//         setDirty(true);
//     }

//     return {
//         value,
//         onBlur,
//         onChange,
//         isDirty,
//         ...valid
//     }
// }

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
    // const donate = useInput('', {isEmpty: true, minLength: 3});
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => {
        console.log(data);
        alert(data);
        reset();
    }
    React.useEffect(() => {
        console.log("useEffect", formState.errors);
    }, [formState]);
    return (
        <div className="how-you-can-help">
            <h1 id="ancore">How you can help?</h1>
            <p>You can support us in several ways, we will be grateful for any help. This will make our work better and more efficient.</p>
            <div className="help-content" id='donate'>
                <div className="help-card">
                    <h1>You can make a donation</h1>
                    <p>You will save the future.</p>
                    <p>Shelling overhead, destruction of homes, loss of work, closed shops and pharmacies. Ruined plans for the future and small children in arms. Old people who can't leave their homes and an incredible number of animals that ended up on the street.</p>
                    <p>You can help them by donating:</p>
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
                        <input className={`${errors.donateInput? 'error' : ''}`}
                            {...register("donateInput", {
                                required: {
                                    value: true, 
                                    message: 'Error1'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Error2'
                                },
                                valueAsNumber: {
                                    value: true,
                                    message: 'Error3'
                                },
                                validate: value => value >= 1 || 'Error 4'
                            })} 
                            name = "donateInput"
                            type = "text"
                            placeholder="Offer a different amount" 
                            id="donate-input"
                            // name='donate' 
                            // value={donate.value}
                            // onChange={e => donate.onChange(e)}
                            // onBlur={e => donate.onBlur(e)}
                        />
                        {/* <sup>{(donate.isDirty && donate.isEmpty) `Введіть суму`}</sup> */}
                        {errors?.donateInput && <sup>{errors?.donateInput?.message}</sup>}
                        {/* {errors.donateInput && errors.donateInput.type === "required" && <p>Error 1</p>}
                        {errors.donateInput && errors.donateInput.type === "maxLength" && <p>Error 2</p>}
                        {errors.donateInput && errors.donateInput.type === "valueAsNumber" && <p>Error 3</p>}
                        {errors.donateInput && errors.donateInput.type === "validate" && <p>Error 4</p>} */}
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