import React, { useEffect , useState} from 'react';
import './ProductDetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  console.log(params)

  const {id} = params;

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetails(response.data)
    console.log(response.data)
  }


  useEffect(() => {
    fetchProductDetails();
  },[])

  const {image , title , description , rating , price } = productDetails;
  return (
    <div className='product-details-wrapper'>
     <div className="product-details-container">
     <div className="image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="description-wrapper">
        <h1>{title}</h1>
        <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop:"-20px"
              
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
            <h4 style={{fontSize:"20px"}}>{rating?.rate} </h4>
          </div>

        <p className='price'>${price}</p>
        <p className='description'>{description}</p>
        <button>Add To Cart</button>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails