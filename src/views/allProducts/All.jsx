import Card from "../../components/Card/Card";
import "./All.css";
import image from "../../components/Card/images/hola.jpg";
import image2 from "../../components/Card/images/adios.jpg";
import { useState } from "react";
import Button from "../../components/Button/button";
import { useEffect } from "react";

export default function All() {
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
        console.log(productos);
      } else {
        alert("Ha habido un error al intentar mostrar los productos");
      }
    }
    getProducts();
  }, []);

  return (
    <div className="allMainContainer">
      <Card
        i={image}
        i2={image2}
        altText={image}
        title={"Single Stitched Monroe County Tee - 1990s"}
        size={"Size: Large"}
        price={"$55.00"}
      />
    </div>
  );
}
