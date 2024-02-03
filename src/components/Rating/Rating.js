import { STARS } from "../../helpers/constants";

import "./Rating.css"; 

const Rating = () => {
 
  const getElementWidth = (num) => {
    let style = {};
    return (style = { width: num + "px" });
  };

  return (
    <div>
      <div className="rating">
        <div className="rating_content" style={getElementWidth(35)}> {/* We can change the number and change count of the stars */}
          {STARS.map((item) => (
            <div key={item.id}>{item.star}</div>
          ))}
        </div>

        {/* "with CSS" */}
        {/* <span className="star full"></span>
        <span className="star full"></span>
        <span className="star full"></span>
        <span className="star full"></span>
        <span className="star half"></span> */}
      </div>
    </div>
  );
};

export default Rating;
