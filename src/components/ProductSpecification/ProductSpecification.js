import Rating from "../Rating/Rating";

import { myObject } from "../../helpers/constants";

import Product from "../../assests/images/product.png";
import ProductSmall from "../../assests/images/product_image_small_1.svg";

import "./ProductSpecification.css";

const ProductSpecification = () => {
  return (
    <div>
      <div className="product">
        <div className="product_item">
          <div className="product_item_small">
            <img src={ProductSmall} />
            <img src={ProductSmall} />
            <img src={ProductSmall} />
            <img src={ProductSmall} />
          </div>
          <div className="product_item_large">
            <img className="product_item_large_image" src={Product} />
          </div>
        </div>
        <div className="product_description">
          <p className="product_title">Asgaard sofa</p>
          <span className="product_total">Rs. 250,000.00</span>
          <div className="product_rating_panel">
            <span>
              <Rating />
            </span>
            <span className="divider"></span>
            <span className="product_reviews">5 Customer Review</span>
          </div>
          <span className="product_description">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </span>
          <div>
            <p className="product_size_title">Size</p>
            <div className="product_sizes">
              <div>L</div>
              <div>XL</div>
              <div>XS</div>
            </div>
          </div>
          <div className="product_color">
            <p className="product_color_title">Color</p>
            <div className="product_colors">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="product_buttons">
            <button className="product_inc_dec">
              <span>-</span>
              <span className="product_inc_dec_number">1</span>
              <span>+</span>
            </button>
            <button className="product_add-to-cart">Add To Cart</button>
            <button className="product_compare">
              <span className="plus">+</span>
              <span>Compare</span>
            </button>
          </div>
          <div className="product_border"></div>
        </div>

        <div className="product-info_container">
          <div className="product-info">
            <ul>
              {Object.keys(myObject).map((key) => (
                <li key={key}>
                  <div>{key}</div>
                  <div>
                    {key === "Share" ? (
                      <div className="share-icons">
                        :
                        {myObject[key].map((icon, index) => (
                          <div key={index} className="facebook-icon-wrapper">
                            {icon}
                          </div>
                        ))}
                      </div>
                    ) : (
                      myObject[key]
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
