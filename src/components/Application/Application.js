import { useEffect, useState } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { sendApplicationApi } from "../../utils/ApplicationApi";

function Application({ id }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [loading, setLoading] = useState("");
  useEffect(() => {
    setLoading("Отправить");
  }, []);

  const sendEmailTelegram = (e) => {
    setLoading("Отправляем...");
    e.preventDefault();
    const { name, phone, text } = values;

    const textApplication = `Заявка от ${name}!\nТелефон: ${phone}\nТекст: ${
      text || "Клиент ничего не написал"
    }`;

    sendApplicationApi
      .sendApplication(textApplication)
      .then((application) => {
        console.log(application);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading("Отправить"));
  };

  return (
    <section className="application" id={id}>
      <form className="application-form" onSubmit={sendEmailTelegram}>
        <h2 className="application-form__title">
          Оставьте заявку прямо сейчас
        </h2>
        <div className="application-form__block">
          <div className="application-form__line"></div>
          <div className="application-form__icon"></div>
          <div className="application-form__line"></div>
        </div>
        <div className="application-form__container">
          <label
            className="application-form__label"
            htmlFor="application-name-input"
          >
            <input
              type="text"
              name="name"
              id="application-name-input"
              placeholder="Имя*"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              className="application-form__name application-form__input"
              required
            ></input>
          </label>
          <label
            className="application-form__label"
            htmlFor="application-phone-input"
          >
            <input
              type="tel"
              name="phone"
              id="application-phone-input"
              placeholder="Телефон*"
              onChange={handleChange}
              className="application-form__phone application-form__input"
              required
            ></input>
          </label>
        </div>
        <label
          className="application-form__label"
          htmlFor="application-text-input"
        >
          <input
            type="text"
            name="text"
            id="application-text-input"
            placeholder="Сообщение"
            minLength={1}
            maxLength={300}
            onChange={handleChange}
            className="application-form__text"
          ></input>
        </label>
        <button className="application-form__btn">{loading}</button>
      </form>
    </section>
  );
}

export default Application;
