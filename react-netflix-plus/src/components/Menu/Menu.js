// Functional component with Arrow Function

const Menu = () => {
  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Contact</a>
      </li>
    </ul>
  )
}

export default Menu;
