function PriceLaptop() {
  return (
    <section className="price">
      <h2 className="price__title">ЦЕНЫ НА АЭРОГРАФИЮ НОУТБУКА</h2>
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
          <td>Ноутбуки 11-14 дюйма</td>
          <td>От 7.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Ноутбуки 15.6-17.3 дюйма</td>
          <td>От 10.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Ноутбуки 19+ дюйма</td>
          <td>От 15.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>MacBook Air, Pro, Apple</td>
          <td>От 20.000 рублей</td>
        </tr>
      </table>
      <a href="#laptop-id" className="price__btn">
        Оставить Заявку
      </a>
    </section>
  );
}

export default PriceLaptop;
