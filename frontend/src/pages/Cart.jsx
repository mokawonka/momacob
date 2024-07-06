import React , { useState,useReducer } from 'react'
import {useNavigate}from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from "axios";
import CartItems from '../Components/CartItems'


const Cart = () => {
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  const [ignored, forceUpdate]=useReducer(x=>x+1,0)
  const cart=useSelector((state)=>state.lister.cart);
  const mail=useSelector((state)=>{
    return state.lister.cart.map(cart=>cart.name);
  });
  let handleConfirm = () => {
    const order=JSON.stringify(mail)
    axios.post('http://localhost:8003/cart',{order,phone,city})
    .then(result=>console.log(result));
    forceUpdate();
    navigate('/final');
    

  };
  return (
          <div className="max-padd-container my-5">
          <div>
            <h2>Ma Liste des Prouduit</h2>
      {cart
        ? cart.map((product, index) => <CartItems key={index} product={product} />)
        : ""}
        </div>
        <div className="max-padd-container flex flex-col gap-y-5">
        
      <label htmlFor="">Entrer votre numero de telephone:</label>
      <input type="number" 
      name="phone number" 
      id=""
      onChange={(e)=>{setPhone(e.target.value)}} />
      <label htmlFor="">Wilaya:</label>
      <input 
      type="text" 
      name="city" 
      id=""
      onChange={(e)=>{setCity(e.target.value)}} />
      <input
      className="btn-dark rounded-md"
      
        type="button"
        value="confirm order"
        onClick={(e) => handleConfirm()}
      /></div>
        
        </div>
        
  )
}

export default Cart