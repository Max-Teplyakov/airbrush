function Plan() {
  return (
    <section className="plan">
      <h2 className="plan__title">ЭТАПЫ РАБОТ</h2>
      <div className="plan__container">
        <article className="plan__card">
          <div className="plan__card-img img"></div>
          <h3 className="plan__card-title">ОБСУЖДЕНИЕ</h3>
          <p className="plan__card-description">
            На первой бесплатной встрече мы обсуждаем ваши пожелания, выбираем
            стиль и сюжет будущей росписи.
          </p>
        </article>
        <article className="plan__card">
          <div className="plan__card-img img2"></div>
          <h3 className="plan__card-title">ЭСКИЗИРОВАНИЕ</h3>
          <p className="plan__card-description">
            После утверждения концепции, наши художники создают эскиз вашего
            заказа в цвете.
          </p>
        </article>
        <article className="plan__card">
          <div className="plan__card-img img3"></div>
          <h3 className="plan__card-title">СТОИМОСТЬ И СРОКИ</h3>
          <p className="plan__card-description">
            Когда эскиз готов, мы рассчитываем стоимость аэрографии исходя из
            размеров поверхности и сложности работ.
          </p>
        </article>
        <article className="plan__card">
          <div className="plan__card-img img4"></div>
          <h3 className="plan__card-title">ПОДГОТОВКА</h3>
          <p className="plan__card-description">
            Перед началом аэрографии мастер тщательно подготавливает
            поверхность, устраняя все дефекты. Производится шлифовка и полировка
            кузова, удаляются вмятины, царапины и сколы. Это необходимо, чтобы
            рисунок получился идеально ровным.
          </p>
        </article>
        <article className="plan__card">
          <div className="plan__card-img img5"></div>
          <h3 className="plan__card-title">РАСКРАСКА</h3>
          <p className="plan__card-description">
            Художник переносит эскиз на объект и раскрашивает его с помощью
            аэрографа. Используются профессиональные краски.
          </p>
        </article>
        <article className="plan__card">
          <div className="plan__card-img img6"></div>
          <h3 className="plan__card-title">ФИНИШНАЯ ОБРАБОТКА</h3>
          <p className="plan__card-description">
            Готовая роспись покрывается лаком для надежной фиксации рисунка и
            придания ему дополнительной яркости.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Plan;
