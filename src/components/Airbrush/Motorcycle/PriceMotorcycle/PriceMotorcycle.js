function PriceMotorcycle() {
  return (
    <section className="price">
      <h2 className="price__title">Цена на Аэрографию на Мотоциклах</h2>
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
          <td>Боковой пластик</td>
          <td>От 12.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Кофры</td>
          <td>От 12.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Бензобак</td>
          <td>От 25.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Аэрография на мотоцикле целиком</td>
          <td>От 80.000 рублей</td>
        </tr>
      </table>
      <a href="#motorcycle-id" className="price__btn">
        Оставить Заявку
      </a>
    </section>
  );
}

export default PriceMotorcycle;
