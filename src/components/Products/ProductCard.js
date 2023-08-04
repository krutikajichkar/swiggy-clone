import React from "react";
import "./ProductCard.css";
import "boxicons";

const ProductCard = ({ productList }) => {
  const { image, title, rating ,price} = productList;
  return (
    <div className="product-card-wrapper">
      <div className="image-wrapper">
        <img src={image} alt="" />
      </div>

      <div className="content-wrapper">
        <h4>{title}</h4>
        <div className="ratings-wrapper">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {" "}
            <box-icon
              name="star"
              type="solid"
              color="white"
              style={{
                backgroundColor: rating?.rate < 3.7 ? "red" : "green",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px",
              }}
            ></box-icon>
            <h4>{rating?.rate}</h4>
          </div>

         <div className="rating-count">
         <h4>
            <i>{rating?.count} - Ratings Count</i>
          </h4>
         </div>

        
        </div>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
