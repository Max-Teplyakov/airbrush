function Advantages({ dataText }) {
  return (
    <section className="advantages">
      <h2 className="advantages__title">ПРЕИМУЩЕСТВА</h2>
      <div className="advantages__container">
        {dataText.map((data) => (
          <article key={data.id} className="advantages__card">
            <img className="why-us__card-img" src={data.car} alt="#" />
            <p className="advantages__card-description">{data.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
