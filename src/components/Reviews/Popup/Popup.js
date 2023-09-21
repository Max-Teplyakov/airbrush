import { useEffect, useState } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import { sendApplicationApi } from "../../../utils/ApplicationApi";

function PopupWithForm({ isOpenPopupReviews, onClose, setIsOpenPopupReviews }) {
  const popupOpened = isOpenPopupReviews ? "popup_opened" : "";

  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [loading, setLoading] = useState("");
  useEffect(() => {
    setLoading("Отправить");
  }, []);

  const sendReviewsTelegram = (e) => {
    setLoading("Отправляем...");
    e.preventDefault();
    const { name, phone, text } = values;

    const textApplication = `Отзыв от ${name}!\nТелефон: ${phone}\nТекст: ${
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
      .finally(() => {
        setLoading("Отправить");
        setIsOpenPopupReviews(false);
        e.target.name.value = "";
        e.target.phone.value = "";
        e.target.text.value = "";
      });
  };

  return (
    <section className={`popup ${popupOpened}`}>
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Оставьте отзыв</h2>
        <form className="popup__form" onSubmit={sendReviewsTelegram}>
          <label className="popup-form__label" htmlFor="popup-name-input">
            <input
              type="text"
              name="name"
              id="popup-name-input"
              placeholder="Ваше имя"
              minLength={1}
              maxLength={300}
              onChange={handleChange}
              className="popup-form__input popup-form__name"
              required
            ></input>
          </label>
          <label className="popup-form__label" htmlFor="popup-phone-input">
            <input
              type="tel"
              name="phone"
              id="popup-phone-input"
              placeholder="Телефон"
              onChange={handleChange}
              className="popup-form__input popup-form__phone"
              required
            ></input>
          </label>
          <label className="popup-form__label" htmlFor="popup-text-input">
            <textarea
              type="text"
              name="text"
              id="popup-text-input"
              placeholder="Ваш отзыв"
              minLength={1}
              maxLength={1000}
              onChange={handleChange}
              className="popup-form__input popup-form__text"
              required
            ></textarea>
          </label>
          <button className="popup__form-save-btn" type="submit">
            {loading}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
