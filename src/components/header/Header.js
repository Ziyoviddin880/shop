import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="left-side">
            <NavLink to="/">
              <img src="./images/logo.svg" alt="Logo" />
            </NavLink>

            <div className="search">
              <input type="text" placeholder="Search" />
              <button type="button">Search</button>
            </div>
          </div>
          <NavLink to="/orders">
            <div className="right-side">
              <i className="fa-solid fa-heart"></i>
              <div className="order">Orders</div>
            </div>
          </NavLink>
        </nav>
        <div className="search-mobile">
          <input type="text" placeholder="Search" />
          <button type="button">Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
