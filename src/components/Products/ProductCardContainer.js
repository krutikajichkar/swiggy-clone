import React, { useEffect, useState } from "react";
import "./ProductCardContainer.css";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductCardContainer = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [searchedListOfProducts, setSearchedListOfProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setListOfProducts(response.data);
    setSearchedListOfProducts(response.data);
  };

  const handleSearch = () => {
    const fetchedResults = listOfProducts.filter((prod) =>
      prod?.title?.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    setSearchedListOfProducts(fetchedResults);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-card-container-wrapper">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for Products"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="product-container">
        {searchedListOfProducts?.map((prod) => {
          return <ProductCard key={prod.id} productList={prod} />;
        })}
      </div>
    </div>
  );
};

export default ProductCardContainer;
