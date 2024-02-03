import { RELATED_PRODUCTS } from "../../helpers/constants";
import RelatedItem from "./RelatedItem/Related";

import "./RelatedProducts.css";

const RelatedProducts = () => {
  return (
    <div className="relatedProducts_container" >
      <div className="relatedProducts">
      <p>Related Products</p>
      <div className="relatedProducts_carts_container">
        {RELATED_PRODUCTS.map((item) => (
          <RelatedItem
            key={item.title}
            icon={item.icon}
            src={item.src}
            title={item.title}
            description={item.description}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
      <div className="relatedProducts_button_container">
          <button className="relatedProducts_button">Show More</button>
        </div>
        </div>
    </div>
  );
};

export default RelatedProducts;
