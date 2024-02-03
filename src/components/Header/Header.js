import { ReactComponent as ArrowRight } from "../../assests/icons/arrow_right.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_home">
          <span >Home</span>
          <ArrowRight />
        </div>
        <div className="header_shop">
          <span>Shop</span>
          <ArrowRight />
        </div>
        <span className="divider"></span>
        <span className="header_text">Asgaard sofa</span>
      </div>
    </header>
  );
};

export default Header;
