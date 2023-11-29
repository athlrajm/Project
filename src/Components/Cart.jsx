import React, { useEffect, useState } from 'react'
import Addtocart from './Addtocart'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
const Cart = () => {
    const [cartitems,setCartitems]=useState([]);
    
    const dispath=useDispatch()
    const cartx=useSelector(state=>state.cart.cartItems);
    
    const handleRemoveFromCart=(cartItems)=>{

     dispath(handleRemoveFromCart(cartItems))

    }
    
    useEffect(()=>{
      setCartitems(cartx);
    },[])
    console.log("cartx",cartx)
    
  return (
    
    <div className='cart-1'>
       <h6 className="text-center">Your Cart 🛒</h6>
      
      {cartitems.map((la)=>
      <div>
      <img className="cart-img" src={la.addToCartImg} alt="img" />
      <h1 className='cart-title'>{la.addToCartTitle}</h1>
      <h1 className='cart-title'>Rs. {la.addToCartPrice}</h1>
      <button onClick={()=>handleRemoveFromCart(cartitems)}>remove</button>
      </div>
      
      )}
      <div className='btx-1'>
        <button className='btx-2' onClick={()=>alert("Your order has been placed successfully")}>Proceed To Pay</button>
      </div>
      
      
    </div>
  )
  }

export default Cart