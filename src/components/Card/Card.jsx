import { Link } from "react-router-dom";
import Button from "../Button/button";
import "./card.css";

export default function Card({ i, i2, altText, title, size, price, link }) {
  return (
    <div className="containerBlock">
      <div className="container">
        <div className="img">
          <img className="imagen-img" src={i} alt={altText} />
          <div className="secondImage">
            <Link to={link}>
              <img className="imagen-img" src={i2} alt={altText} />
            </Link>
          </div>
        </div>
        <div className="productDescription">
          <p>{title}</p>
          <p>{size}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
