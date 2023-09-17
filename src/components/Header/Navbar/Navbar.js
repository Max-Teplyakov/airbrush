function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <button className="dropbtn">Аэрография</button>
            <div className="dropdown-content">
              <a className="nav-link active" href="/car">
                Автомобили
              </a>
              <a className="nav-link active" href="/motorcycle">
                Мотоциклы
              </a>
              <a className="nav-link active" href="/laptop">
                Ноутбуки
              </a>
              <a className="nav-link active" href="/helmet">
                Шлемы
              </a>
              <a className="nav-link active" href="/bike">
                Велосипеды
              </a>
              <a className="nav-link active" href="/house">
                Здания
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about-us">
            О нас
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="reviews">
            Отзывы
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contacts">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
