import { useState } from "react";

import "./HamburgerMenu.css";

const BurgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="hamburger_wrapper">
      <div
        className="hamburger-icon"
        id="icon"
        onClick={() => setToggleMenu((prevState) => !prevState)}
      >
        <div className={`icon-1 ${toggleMenu && "a"}`} id="a"></div>
        <div className={`icon-2 ${toggleMenu && "c"}`} id="b"></div>
        <div className={`icon-3 ${toggleMenu && "b"}`}></div>
      </div>

      <div className={toggleMenu ? "show" : "menu"}>
        <ul className="menu_content">
          <li className="menu_content_item">
            <a className="menu_content_item_link" href="#">
              Home
            </a>
          </li>
          <li className="menu_content_item">
            <a className="menu_content_item_link" href="#">
              About
            </a>
          </li>
          <li className="menu_content_item">
            <a className="menu_content_item_link" href="#">
              Contact
            </a>
          </li>
          <li className="menu_content_item">
            <a className="menu_content_item_link" href="#">
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
