const Navigation = () => {
        return (
                
      <nav>
      <ul className="margin-10">
        <li>
          <a href="/">
            <i className="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a href="/notes">
            <i className="fa-solid fa-note-sticky"></i>
          </a>
        </li>
        <li>
          <a href="/favorites">
            <i className="fa-solid fa-star"></i>
          </a>
        </li>
      </ul>
      <ul className="margin-10">
        <li>
          <a href="/notifications">
            <i className="fa-solid fa-bell"></i>
          </a>
        </li>
        <li>
          <a href="/settings">
            <i className="fa-solid fa-gear"></i>
          </a>
        </li>
      </ul>
      <ul className="bottom">
        <li>
          <a href="/logout">
            <i className="fa-solid fa-right-from-bracket rotate-180"></i>
          </a>
        </li>
      </ul>
    </nav>
        );
};

export default Navigation;