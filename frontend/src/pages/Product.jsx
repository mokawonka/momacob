import React from 'react'
import ProductHd from '../Components/ProductHd'
import { useParams } from 'react-router-dom'
import All_products from '../assets/All_products'
import RelatedProducts from '../Components/RelatedProducts'
import ProductDisplay from '../Components/ProductDisplay'


const Product = () => {
  const {productId} = useParams();
  console.log("productId:",productId);
  const product = All_products.find((e)=> e.id === Number(productId));
  if (!product){
    return<div>Product Not Found </div>
  }
  return (
   <section>
    <div>
      <ProductHd product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
   </section>
  )
}

export default Product