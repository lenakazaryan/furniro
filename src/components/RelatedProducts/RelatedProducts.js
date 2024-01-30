import cart1 from "../../assests/images/cart1.svg";

import "./RelatedProducts.css";

const RelatedProducts = () => {
  return (
    <div className="relatedProducts_container">
      <p>Related Products</p>
      <div className="relatedProducts_carts_container">
      <div className="relatedProducts">
        <div className="relatedProducts_cart">
          <img src={cart1} />
          <div className="relatedProducts_cart_titles_container">
            <div className="relatedProducts_cart_titles">
              <span>Syltherine</span>
              <span>Styish cafe chair</span>
            </div>
            <div className="relatedProducts_cart_titles_price">
              <span>Rp 2.500.000</span>
              <span>Rp 3.500.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relatedProducts">
        <div className="relatedProducts_cart">
          <img src={cart1} />
          <div className="relatedProducts_cart_titles_container">
            <div className="relatedProducts_cart_titles">
              <span>Syltherine</span>
              <span>Styish cafe chair</span>
            </div>
            <div className="relatedProducts_cart_titles_price">
              <span>Rp 2.500.000</span>
              <span>Rp 3.500.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relatedProducts">
        <div className="relatedProducts_cart">
          <img src={cart1} />
          <div className="relatedProducts_cart_titles_container">
            <div className="relatedProducts_cart_titles">
              <span>Syltherine</span>
              <span>Styish cafe chair</span>
            </div>
            <div className="relatedProducts_cart_titles_price">
              <span>Rp 2.500.000</span>
              <span>Rp 3.500.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relatedProducts">
        <div className="relatedProducts_cart">
          <img src={cart1} />
          <div className="relatedProducts_cart_titles_container">
            <div className="relatedProducts_cart_titles">
              <span>Syltherine</span>
              <span>Styish cafe chair</span>
            </div>
            <div className="relatedProducts_cart_titles_price">
              <span>Rp 2.500.000</span>
              <span>Rp 3.500.000</span>
            </div>
          </div>
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default RelatedProducts;
