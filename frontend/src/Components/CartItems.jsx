import React from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../Store/Store';
import {TbTrash} from 'react-icons/tb'

const CartItems = ({product}) => {
    let dispatch = useDispatch();
    let handleDelete=()=>{
        dispatch(actions.handleDelete(product.id));
    }
  return (
    <div className=" flex flex-row  justify-evenly">
      
            <img src={product.image} height={50} width={50} />
            <p>{product.name}</p>
            
            <TbTrash className='p-2 h-10 w-10 hover:text-secondary cursor-pointer' onClick={()=>handleDelete()}/>
            
        </div>
  )
}

export default CartItems