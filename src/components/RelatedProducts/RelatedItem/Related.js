import "./Related.css";

const RelatedItem = ({
  icon,
  src,
  title,
  description,
  price,
  discount = "",
}) => {
  return (
    <div className="relatedProducts_cart">
      <div className="relatedProducts_cart_discount">{icon}</div>
      <img src={src} />
      <div className="relatedProducts_cart_titles_container">
        <div className="relatedProducts_cart_titles">
          <span>{title}</span>
          <span>{description}</span>
        </div>
        <div className="relatedProducts_cart_titles_price">
          <span>{price}</span>
          <span>{discount}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedItem;
