import React, { useEffect, useState } from "react";
import "./ProductCardContainer.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCardContainer = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [searchedListOfProducts, setSearchedListOfProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")

  const fetchProducts = async () => {
    const response = await axios.get(selectedCategory !== "All" ? `https://fakestoreapi.com/products/category/${selectedCategory}` : "https://fakestoreapi.com/products");
    console.log(response.data);
    setListOfProducts(response.data);
    setSearchedListOfProducts(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    console.log(response.data)
    setCategories(response.data)
  }

  

  const handleSearch = () => {
    const fetchedResults = listOfProducts.filter((prod) =>
      prod?.title?.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    setSearchedListOfProducts(fetchedResults);
  };

  const handleCategory = (catg) => {
    setSelectedCategory(catg);
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories()
  }, [selectedCategory]);

  return (
    <div className="product-card-container-wrapper">
      <div className="categories-wrapper">
        <button onClick={() => handleCategory("All")}>All</button>
       {
        categories?.map((cat,index) => {
          return (
            <button onClick={() => handleCategory(cat)} key={index}>{cat}</button>
          )
        })
       }
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
        {searchedListOfProducts && searchedListOfProducts.map((prod) => {
          return <Link className="link" to={`/product-details/${prod.id}`} key={prod.id}><ProductCard  productList={prod} /></Link>
        })}
      </div>
    </div>
  );
};

export default ProductCardContainer;
