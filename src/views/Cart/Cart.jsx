import Button from "../../components/Button/button";
import "./Cart.css";
import CartCard from "../../components/CartCard/CartCard";

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
      <CartCard />
      <div className="cartCheckoutContainer">
        <div className="cartCheckoutContent">
          <div className="checkoutTitle">
            <h6>Subtotal: 118.00$</h6>
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
