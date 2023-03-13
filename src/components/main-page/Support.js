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
                <div className="form__container">
                    <input className={`${errors.name? 'error' : ''}`}
                        {...register("name", {
                        required: "Поле має бути заповненим"
                    })} 
                        type="text" 
                        placeholder="Ваше ім'я"/>
                    <sup>{errors?.name?.message}</sup>
                </div>
                <div className="form__container">
                    <input className={`${errors.email? 'error' : ''}`}
                        name='email' {...register('email', {
                        required: 'Поле має бути заповненим',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Некоректна адреса"
                        }
                    })}
                        type="email" placeholder="Email"/>
                    <sup>{errors?.email?.message}</sup>
                </div>
                <div className="form__container">
                    <input type="tel" placeholder="Номер телефону"/>
                    <sup>{errors?.phone?.message || <span>*Опціонально</span>}</sup>
                </div>
                <div className="form__container">
                    <textarea 
                        placeholder="Повідомлення"
                        maxLength={500}
                        cols={58}
                        rows={5}
                    ></textarea>
                    <sup>{errors?.text?.message || <span>Не більше 500 символів</span>}</sup>
                </div>
                <div className="checkbox">
                    <input id="formAgreement" type="checkbox" name="agreement" className="checkbox__input"/>  
                    <Link to="/privicy">Я погоджуюся з політикою конфіденційності</Link>
                </div>
                <button type="submit" disabled={!isValid}>
                    Send form
                </button>
            </form>
        </div>
    );
}

export default Support;