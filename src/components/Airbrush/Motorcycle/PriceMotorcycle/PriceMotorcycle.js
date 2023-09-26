function PriceMotorcycle() {
  return (
    <section className="price">
      <h2 className="price__title">Цена на Аэрографию на Мотоциклах</h2>
      <table className="price__table">
        <tr className="price__table-header">
          <td>Услуга</td>
          <td>Цена</td>
        </tr>
        <tr className="price__table-row">
          <td>Боковой пластик</td>
          <td>От 10.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Кофры</td>
          <td>От 10.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Бензобак</td>
          <td>От 20.000 рублей</td>
        </tr>
        <tr className="price__table-row">
          <td>Аэрография на мотоцикле целиком</td>
          <td>От 70.000 рублей</td>
        </tr>
      </table>
      <a href="#car-id" className="price__btn">
        Оставить Заявку
      </a>
    </section>
  );
}

export default PriceMotorcycle;
