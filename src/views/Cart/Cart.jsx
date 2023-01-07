import Button from "../../components/Button/button";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cartMainContainer">
      <div className="cartTitles">
        <div className="cartTitle">
          <h5>Shopping Cart</h5>
        </div>
        <div className="emptyCartText">
          <h5>Your cart is currently empty</h5>
        </div>
      </div>
      <div className="cartProductContainer">
        <div className="cartHeadings">
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
        </div>
        <div className="cartProductDetails">
          <div className="cartImageNameGroup">
            <div className="cartProductImage">
              <img
                alt="Imagen"
                src="https://cdn.shopify.com/s/files/1/0286/5954/8213/products/satan-1.jpg?v=1575937493"
              />
            </div>
            <div className="cartProductName">
              <h6>Black shirt</h6>
            </div>
          </div>
          <div className="cartMiddleGroup">
            <div className="cartProductPrice">
              <h6>59.00$</h6>
            </div>
            <div className="cartProductQuantity">
              <h6>1</h6>
            </div>
          </div>
          <div className="totalGroup">
            <div className="cartProductTotal">
              <h6>59.00$</h6>
            </div>
            <div className="cartProductRemove">
              <h6>X</h6>
            </div>
          </div>
        </div>
        <div className="cartProductDetails">
          <div className="cartImageNameGroup">
            <div className="cartProductImage">
              <img
                alt="Imagen"
                src="https://cdn.shopify.com/s/files/1/0286/5954/8213/products/satan-1.jpg?v=1575937493"
              />
            </div>
            <div className="cartProductName">
              <h6>Black shirt</h6>
            </div>
          </div>
          <div className="cartMiddleGroup">
            <div className="cartProductPrice">
              <h6>59.00$</h6>
            </div>
            <div className="cartProductQuantity">
              <h6>1</h6>
            </div>
          </div>
          <div className="totalGroup">
            <div className="cartProductTotal">
              <h6>59.00$</h6>
            </div>
            <div className="cartProductRemove">
              <h6>X</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="cartCheckoutContainer">
        <div className="cartCheckoutContent">
          <div className="checkoutTitle">
            <h6>Subtotal: 59.00$</h6>
          </div>
          <div className="checkoutText">
            <h6>Taxes and shipping calculated at checkout</h6>
          </div>
          <div className="checkoutButton">
            <Button value={"Check out"} />
          </div>
        </div>
      </div>
    </div>
  );
}
