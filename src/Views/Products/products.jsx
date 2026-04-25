import PRODUCTS from "../data.js";
import "./products.css";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard/productcard.jsx";
import Navbar from "../../Components/Navbar/navbar.jsx";
import Input from "../../Components/Input/input.jsx";
import{ Heading} from "../../Components/Heading/heading.jsx";

function Products() {
  const [products, setProducts] = useState(PRODUCTS || []);
  const [searchTerm, setSearhTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setProducts(PRODUCTS);
    } else {
      const filteredProducts = PRODUCTS.filter((product) => {

        const { name, price, subSentence, maxGram } = product;
        const searchTermLower = searchTerm.toLowerCase();

        if (name.toLowerCase().includes(searchTermLower)) {
          return true;
        }
        else if (String(price).includes(searchTermLower)) {
          return true;
        }
        else if (String(subSentence).toLowerCase().includes(searchTermLower)) {
          return true;
        }
        else if (String(maxGram).toLowerCase().includes(searchTermLower)) {
          return true;
        }
        return false;
      });
      setProducts(filteredProducts);
    }
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <div className="input-container">
        <Input placeholder="Search Products Here..."
          value={searchTerm}
          onChange={(e) => setSearhTerm(e.target.value)}
        />
      </div>

     <Heading title="Our Products "/>

      <div className="product-card-container">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
export default Products;