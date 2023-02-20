import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

function Support() {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <div className="support">
            <div className="support__content">
                <h1>Ви можете допомогти в будь-який інший спосіб</h1>
                <img src="../img/support/support_pic.png" alt="support" />
                <p>Гроші, ліки, дитячі іграшки, корм для тварин. Зараз потреба є у всьому. </p>
                <p>Тож, якщо у вас є можливість допомогти нам не фінансово, а в інший спосіб, то заповніть контактну форму праворуч. </p>
                <p>Будь яка підтримка дуже цінна. </p>
            </div>
            <form className="support__form" action="#" id="add-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {
                    required: "Поле має бути заповненим"
                })} 
                    type="text" 
                    placeholder="Your name"/>
                <div>
                    {errors?.name && <p>{errors?.name?.message || "Error"}</p>}
                </div>
                <input name='email' {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}
                    type="email" placeholder="Email"/>
                <div>
                    {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
                </div>
                <input type="tel"placeholder="Phone number"/>
                <textarea placeholder="Message"></textarea>
                <div className="checkbox">
                    <input id="formAgreement" type="checkbox" name="agreement" className="checkbox__input"/>  
                    <label className="checkbox__label"><Link to="/privicy">Я погоджуюся з політикою конфіденційності</Link></label>
                </div>
                <button type="submit" disabled={!isValid}>
                    Send form
                </button>
            </form>
        </div>
    );
}

export default Support;