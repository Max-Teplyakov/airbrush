function Plan() {
  return (
    <section className="plan">
      <h2 className="plan__title">Этапы работ</h2>
      <div className="plan__container">
        <article className="plan__card">
          <h3 className="plan__card-title">Обсуждение</h3>
          <p className="plan__card-description">
            Вы сообщаете нам Ваши пожелания, мы обсуждаем их, оговариваем сроки
            и стоимость. Наши специалисты предоставляют несколько вариантов
            эскизов согласно вашим требованиям, но Вы можете также предоставить
            фото с примерами. Чтобы связаться с нами, достаточно звонка, а можно
            просто заполнить форму на сайте – как вам будет удобнее. Мы всегда
            рады ответить на все Ваши вопросы!
          </p>
          <div className="plan__card-check"></div>
        </article>
        <article className="plan__card">
          <h3 className="plan__card-title">ЭСКИЗИРОВАНИЕ</h3>
          <p className="plan__card-description">
            Художник создает компьютерный макет будущей аэрографии.
          </p>
          <div className="plan__card-check"></div>
        </article>
        <article className="plan__card">
          <h3 className="plan__card-title">СТОИМОСТЬ И СРОКИ</h3>
          <p className="plan__card-description">
            Выставляется стоимость работы художника и автосервиса. Сроки.
            Определяемся с датой заезда авто.
          </p>
          <div className="plan__card-check"></div>
        </article>
        <article className="plan__card">
          <h3 className="plan__card-title">ПОДГОТОВКА</h3>
          <p className="plan__card-description">
            Перед нанесением аэрографии необходима обработка поверхности, ремонт
            вмятин и удаление локальных царапин и сколов на деталях кузова
            автомобиля.
          </p>
          <div className="plan__card-check"></div>
        </article>
        <article className="plan__card">
          <h3 className="plan__card-title">РАСКРАСКА</h3>
          <p className="plan__card-description">
            Используя трафареты и специализированное оборудование, мы наносим на
            Ваш автомобиль рисунок, выбранный Вами по эскизу.
          </p>
          <div className="plan__card-check"></div>
        </article>
        <article className="plan__card">
          <h3 className="plan__card-title">ФИНИШНАЯ ОБРАБОТКА</h3>
          <p className="plan__card-description">
            Аэрографии требуется защита, так что мы обработаем все детали особым
            лаком и проведём его полировку. Это обеспечит лакокрасочному
            покрытию Вашего автомобиля достаточный уровень защиты от мелких
            механических повреждений.
          </p>
          <div className="plan__card-check"></div>
        </article>
      </div>
    </section>
  );
}

export default Plan;
