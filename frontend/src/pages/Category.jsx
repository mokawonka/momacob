import React from 'react'
import { Link } from 'react-router-dom'
import { VscSettingsGear }from 'react-icons/vsc'
import Item from '../Components/Item'
import all_products from '../assets/All_products'

const Category = ({category}) => {
  return (
    <section className="max-padd-container bg-primary">
      <div>
        <div className="pt-6">banner</div>
        <div className="flexBetween my-10 mx-2">
          <h5>showing same category items</h5>
          <Link to="/"><VscSettingsGear className="text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white"/></Link>
        </div>
        {/*container*/}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
         {all_products.map((item)=>{
          if (category===item.category){
            return <Item key={item.id} id={item.id} name={item.name} image={item.image}  />
          }
         })}

        </div>
      </div>
    </section>
  )
}

export default Category