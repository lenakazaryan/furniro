import { MENU } from "../../helpers/constants";
import { ICONS } from "../../helpers/constants";

import logo from "../../assests/images/logo.svg";
import BurgerMenu from "../BurgerMenu";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav_logo">
        <a href="#">
          <picture>
            <source srcSet={logo} type="image/webp" />
            <source srcSet={logo} type="image/jpeg" />
            <img src={logo} alt="Alt Text!" />
          </picture>
        </a>
      </div>
   
        <BurgerMenu />
    
      <div className="nav_menu">
        <ul className="nav_menu_list">
          {MENU.map((item) => (
            <li key={item.id} className="nav_menu_list_item">
              <a href="#" className="nav-link">
                {item.menuItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav_icon">
        {ICONS.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
