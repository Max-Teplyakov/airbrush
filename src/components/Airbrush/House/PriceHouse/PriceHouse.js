function PriceHouse() {
  return (
    <section className="price">
      <h2 className="price__title">ЦЕНЫ НА АЭРОГРАФИЮ ЗДАНИЯ</h2>
      <p className="price__subtitle">
        Точно сказать, сколько стоит воплощение той или иной задумки, невозможно
        без детального обсуждения исходных данных. Стоимость процесса нанесения
        аэрографии зависит от сложности рисунка, его детализации, площади
        обрабатываемой поверхности, типа детали и других факторов. Из-за
        прихотливой формы нанести рисунки на изогнутую поверхность сложнее, чем
        на плоскую, и это отнимает больше времени. Мы рекомендуем отправить
        запрос через сайт или позвонить нам, и мы подробнее обсудим все Ваши
        пожелания. После заключения договора на оказание услуг цена фиксируется
        и не изменяется.
      </p>
      <table className="price__table">
        <tr className="price__table-header">
          <td>Услуга</td>
          <td>Цена</td>
        </tr>
        <tr className="price__table-row">
          <td>Лёгкая детализация</td>
          <td>От 30.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Стандартная детализация</td>
          <td>От 100.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Высшая детализация</td>
          <td>От 300.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Максимальная детализация</td>
          <td>От 700.000 рублей</td>
        </tr>
      </table>
      {/* <button className="price__btn">Оставить Заявку</button> */}
      <a href="#car-id" className="price__btn">
        Оставить Заявку
      </a>
    </section>
  );
}

export default PriceHouse;
