import React, { useState, useEffect } from "react";
import "./ProductCardContainer.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import useGetCategories from "../../utils/useGetCategories";

import axios from "axios";

const ProductCardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productList, setProductList] = useState([]);
  const [searchedListOfProducts, setSearchedListOfProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      selectedCategory !== "All"
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : "https://fakestoreapi.com/products"
    );
    console.log(response.data);
    setProductList(response.data);
    setSearchedListOfProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const categories = useGetCategories(selectedCategory);

  const handleSearch = () => {
    const fetchedResults = productList.filter((prod) =>
      prod?.title?.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    setSearchedListOfProducts(fetchedResults);
  };

  const handleCategory = (catg) => {
    setSelectedCategory(catg);
  };

  return (
    <div className="product-card-container-wrapper">
      <div className="categories-wrapper">
        <button onClick={() => handleCategory("All")}>All</button>
        {categories?.map((cat, index) => {
          return (
            <button onClick={() => handleCategory(cat)} key={index}>
              {cat}
            </button>
          );
        })}
      </div>
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
        {searchedListOfProducts.map((prod) => {
          return (
            <Link
              className="link"
              to={`/product-details/${prod.id}`}
              key={prod.id}
            >
              <ProductCard productList={prod} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCardContainer;
