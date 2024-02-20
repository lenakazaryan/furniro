import { LINKS, HELP } from "../../helpers/constants";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <footer>
        <div>
          <span className="footer_location_details_title">Furniro.</span>
          <div className="footer_location_details">
            <span>400 University Drive Suite 200 Coral</span>
            <span>Gables,</span>
            <span> FL 33134 USA</span>
          </div>
        </div>
        <ul className="footer_links">
          {LINKS.map((item) => (
            <li className="footer_links_item" key={item.page}>{item.page}</li>
          ))}
        </ul>
        <ul className="footer_links">
          {HELP.map((item) => (
            <li className="footer_links_item" key={item.page}>{item.page}</li>
          ))}
        </ul>
      
          <form className="footer_contact">
            <h2 className="footer_newsLetter">Newsletter</h2>
            <div className="footer_contact_items">
              <label className="footer_email">
                Enter Your Email Address
                <input className="email" type="text" name="email" />
              </label>
              <input
                className="footer_subscribe"
                type="submit"
                value="SUBSCRIBE"
              />
              </div>
          </form>
      </footer>
      <p className="footer_rights">2023 furino. All rights reverved</p>
    </div>
  );
};

export default Footer;
