import { Link } from "react-router-dom";

export default function RequestInfo() {
  return (
    <div className="request-conteiner">
      <div className="request-conteiner_info">
        <div className="request-conteiner_info_title">
          Запит на додаткову інформацію
        </div>
        <div className="request-conteiner_info_description">
          Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь
          ласка, форму праворуч. Ми надішлемо відповідь на вашу електронну
          пошту.
        </div>
      </div>
      <form
        className="request-conteiner_form"
        name="request_information"
        method="POST"
        action="/feedback.php"
      >
        <div className="request-conteiner_form_text-field">
          <input
            type="text"
            name="name"
            placeholder="Ваше ім’я"
            required="required"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required="required"
          />

          <textarea
            name="message"
            placeholder="Повідомлення"
            maxLength={500}
            cols={58}
            rows={5}
          ></textarea>
        </div>
        <div className="request-conteiner_form_capture">
          Не більше 500 символів
        </div>
        <div className="request-conteiner_form_agree">
          <input
            className="request-conteiner_form_agree_checkbox"
            name="checkbox"
            type="checkbox"
          />
          <Link to="/privicy">Я погоджуюся з політикою конфіденційності</Link>
        </div>
        <input
          className="request-conteiner_form_button"
          type="submit"
          name="submit_btn"
          value="Відправити форму"
        />
      </form>
    </div>
  );
}
