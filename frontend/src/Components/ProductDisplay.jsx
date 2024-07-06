import React from 'react'
import { actions } from '../Store/Store';
import { useDispatch } from 'react-redux';

const ProductDisplay = (props) => {
  const {product}=props;
  let dispatch = useDispatch();
    let handleAdd=()=>{
        dispatch(actions.handleAdd(product));

    }
  return (
    <section className="max-padd-container flex flex-col bg-gray-10 py-10 ">
      <div className="flex flexCenter rounded-lg drop-shadow-xl"><img src={product.image} alt="" height={200} width={400} /></div>
      <div>
        <h3 className="font-bold">{product.name}</h3>
        <div>
          <div className=" float-left">
            <button className="btn-dark rounded-md" onClick={()=>handleAdd()}>Ajouter au Panier</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDisplay