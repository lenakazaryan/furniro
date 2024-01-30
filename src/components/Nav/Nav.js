import { ReactComponent as Logo } from "../../assests/images/logo.svg";
import { MENU } from "../../helpers/constants";
import { ICONS } from "../../helpers/constants";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav_logo">
        <Logo />
      </div>
      <div className="nav_menu">
        <ul>
          {MENU.map((item) => (
            <li key={item.id}>
              <a>{item.menuItem}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav_icon">
        {ICONS.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
