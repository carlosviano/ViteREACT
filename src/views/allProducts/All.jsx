import Card from "../../components/Card/Card";
import "./All.css";
import { useState } from "react";
import { useEffect } from "react";

export default function All() {
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "http://localhost:3000/product/getAllProducts",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        const productos = await response.json();
        setProductList(productos);
        console.log("esta es la response.json", productos);
      } else {
        alert("Ha habido un error al intentar mostrar los productos");
      }
    }
    getProducts();
  }, []);

  return (
    <div className="allMainContainer">
      {!productList ? (
        <p>cargando productos</p>
      ) : (
        productList.map((productListItem, index) => (
          <Card
            i={` http://localhost:3000/${productListItem.imagenes[0]}`}
            i2={` http://localhost:3000/${productListItem.imagenes[1]}`}
            altText={productListItem.name}
            title={productListItem.nombre}
            size={`Size: ${productListItem.talla}`}
            price={`$${productListItem.precio}`}
            key={index}
            link={`/${productListItem.referencia}`}
          />
        ))
      )}
    </div>
  );
}
