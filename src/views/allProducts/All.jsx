import Card from "../../components/Card/Card";
import "./All.css";
import image from "../../components/Card/images/hola.jpg";
import image2 from "../../components/Card/images/adios.jpg";
import { useState } from "react";
import Button from "../../components/Button/button";
import { useEffect } from "react";

export default function All() {
  const [productList, setProductList] = useState([]);
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
        console.log(productos);
        console.log(productList);
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
            i={`${productListItem.path}`}
            altText={image}
            title={productListItem.nombre}
            size={`Size: ${productListItem.talla}`}
            price={`$${productListItem.precio}`}
            key={index}
          />
        ))
      )}
    </div>
  );
}
