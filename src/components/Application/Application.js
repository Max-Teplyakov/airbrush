function Application() {
  return (
    <section className="application">
      <form className="application-form">
        <h2 className="application-form__title">
          Оставьте заявку прямо сейчас
        </h2>
        <div className="application-form__block">
          <div className="application-form__line"></div>
          <div className="application-form__icon"></div>
          <div className="application-form__line"></div>
        </div>
        <div className="application-form__container">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Имя*"
            className="application-form__name application-form__input"
            required
          ></input>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Телефон*"
            className="application-form__phone application-form__input"
            required
          ></input>
        </div>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Сообщение"
          className="application-form__text"
        ></input>
        <button className="application-form__btn">Отправить</button>
      </form>
    </section>
  );
}

export default Application;
