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
          <a className="nav-link active" href="/airbrush">
            Аэрография
          </a>
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
