import './Home.css';
import i from './images/bottoms.png';
import i2 from './images/tees.png'
import i3 from './images/tops.png'
import i4 from './images/shoes.png'
import i5 from './images/destacados.jpg'

export default function Home() {
  return (
    <main>
      <div className="container-arriba">
        <div className="imagen-izq-arriba">
          <img
            className="imagen-img"
            src={i}
            alt="Bottoms"
          />
          <div className="imagen-contenido">
            <div className="bottoms-titulo">
              <a href="#">Bottoms</a>
            </div>
          </div>
        </div>
        <div className="imagen-derecha-arriba">
          <img
            className="imagen-img"
            src={i2}
            alt="tees"
          />
          <div className="imagen-contenido">
            <div className="tees-titulo">
              <a href="#">Tees</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-abajo">
        <div className="imagen-izq-abajo">
          <img
            className="imagen-img"
            src={i3}
            alt="tops"
          />
          <div className="imagen-contenido">
            <div className="tops-titulo">
              <a href="#">Tops</a>
            </div>
          </div>
        </div>

        <div className="imagen-derecha-abajo">
          <img
            className="imagen-img"
            src={i4}
            alt="shoes"
          />
          <div className="imagen-contenido">
            <div className="shoes-titulo">
              <a href="#">Shoes</a>
            </div>
          </div>
        </div>
      </div>
      <div className="imagen-destacados">
            <img className="imagen-img" src={i5}/>
            <div className="imagen-contenido">
                <div className="destacados-titulo"><a href="#">Featured</a></div>
            </div>
        </div>
    </main>
  );
}
