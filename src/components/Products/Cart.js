import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { addItems } from '../../utils/cartSlice'
const Cart = () => {

    const dispatch = useDispatch()

    console.log(useParams());

    const {id} = useParams();

    const fetchCart = async() => {
        const response = await axios.get(`https://fakestoreapi.com/carts/user/${id}`);
        dispatch(addItems(response.data));
    }

    useEffect(() => {
        fetchCart()
    } ,[])
    
  return (
    <div>Cart</div>
  )
}

export default Cart