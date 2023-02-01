import "./CartCard.css";

export default function CartCard({
  altText,
  i,
  productName,
  productPrice,
  productQuantity,
}) {
  return (
    <div className="cartProductDetails">
      <div className="cartImageNameGroup">
        <div className="cartProductImage">
          <img alt={altText} src={i} />
        </div>
        <div className="cartProductName">
          <h6>{productName}</h6>
        </div>
      </div>
      <div className="cartMiddleGroup">
        <div className="cartProductPrice">
          <h6>{productPrice}</h6>
        </div>
        <div className="cartProductQuantity">
          <h6>{productQuantity}</h6>
        </div>
      </div>
      <div className="totalGroup">
        <div className="cartProductTotal">
          <h6>{productPrice * productQuantity}</h6>
        </div>
        <div className="cartProductRemove">
          <h6>X</h6>
        </div>
      </div>
    </div>
  );
}
