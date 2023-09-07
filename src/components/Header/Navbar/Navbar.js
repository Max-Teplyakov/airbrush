function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Аэрография
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Новости
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Отзывы
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
