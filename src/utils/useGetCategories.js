import {useState,useEffect} from 'react'
import axios from 'axios';

const useGetCategories = () => {
    const [listOfCategories, setListOfCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        console.log(response.data)
        setListOfCategories(response.data)
      }
    

    useEffect(() => {
        fetchCategories();
    } ,[])

  return listOfCategories;
    
  
}

export default useGetCategories