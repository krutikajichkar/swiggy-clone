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
    console.log("useeefecet")
  },[])

  const {image , title , description , rating , price } = productDetails;
  return (
    <div className='product-details-wrapper'>
     <div className="product-details-container">
     <div className="image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="description-wrapper">
        <h2>{title}</h2>
        <h6>{rating?.rate}</h6>
        <h6>{price}</h6>
        <h6>{description}</h6>
        <button>Add To Cart</button>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails