function PriceLaptop() {
  return (
    <section className="price">
      <h2 className="price__title">ЦЕНЫ НА АЭРОГРАФИЮ НОУТБУКА</h2>
      <p className="price__subtitle">
        Точное определение стоимости реализации идеи невозможно без подробного
        обсуждения исходных данных. Тарификация процесса применения аэрографии
        зависит от сложности рисунка, его детализации, площади поверхности, типа
        детали и других факторов. Рисование на изогнутой поверхности требует
        больше времени и навыков, чем на плоской поверхности. Рекомендуем
        заполнить форму внизу сайта, под описанием, или связаться с нами по
        указанному номеру телефона, чтобы мы могли более подробно обсудить ваши
        пожелания. После подписания договора оказания услуг, цена фиксируется и
        не меняется.
      </p>
      <table className="price__table">
        <tr className="price__table-header">
          <td>Услуга</td>
          <td>Цена</td>
        </tr>
        <tr className="price__table-row">
          <td>Ноутбуки 11-14 дюйма</td>
          <td>От 10.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Ноутбуки 15.6-17.3 дюйма</td>
          <td>От 13.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Ноутбуки 19+ дюйма</td>
          <td>От 18.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>MacBook Air, Pro, Apple</td>
          <td>От 22.000 рублей</td>
        </tr>
      </table>
      <a href="#laptop-id" className="price__btn">
        Оставить Заявку
      </a>
    </section>
  );
}

export default PriceLaptop;
