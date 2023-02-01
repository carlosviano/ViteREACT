import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/button";
import Card from "../../components/Card/Card";

export default function ProductDetail() {
  const [producto, setProducto] = useState(null);

  const { ref } = useParams();
  console.log("ofjwefn");
  useEffect(() => {
    async function getProductByRef() {
      console.log(ref);
      const response = await fetch(
        `http://localhost:3000/product/productRef/${ref}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        const bbddProduct = await response.json();
        setProducto(bbddProduct);
        console.log(bbddProduct, "owwnfwef");
      } else {
        alert("sdosdnqdknqsdqn");
        console.log(await response.json(), "esto es lo q viene de la bbdd");
      }
    }
    getProductByRef();
    producto && console.log(producto, "esto es producto");
  }, []);

  return (
    <div className="allMainContainer">
      {!producto ? (
        <p>cargando productos</p>
      ) : (
        producto.map((productItem, index) => (
          <Card
            i={` http://localhost:3000/${productItem.imagenes[0]}`}
            i2={` http://localhost:3000/${productItem.imagenes[1]}`}
            altText={productItem.name}
            title={productItem.nombre}
            size={`Size: ${productItem.talla}`}
            price={`$${productItem.precio}`}
            key={index}
            link={`/${productItem.referencia}`}
          />
        ))
      )}
      <Button value={"add to cart"} />
    </div>
  );
}
