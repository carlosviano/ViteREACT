// import i from "./images/bottoms.png";
// import i2 from "./images/hola.jpg";
// import i3 from "./images/adios.jpg";
import "./card.css";

export default function Card({i,i2, altText, title,size,price}) {
  return (
     <div className='containerBlock'>
      <div className="container">
        <div className="img">
          <img className="imagen-img" src={i} alt={altText} />
          <div className="secondImage">
            <img className="imagen-img" src={i2} alt={altText} />
          </div>
        </div>
        <div className='productDescription'>
        <p>{title}</p>
        <p>{size}</p>
        <p>{price}</p>
      </div>
      </div>
       </div>
  );
}
