import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
      <NavLink to={'/blocs'} className={({isActive})=>isActive?"active-link":""}>Blocs</NavLink>
      <NavLink to={'/agregats'} className={({isActive})=>isActive?"active-link":""}>Agregats</NavLink>
      <NavLink to={'/aciers'} className={({isActive})=>isActive?"active-link":""}>Aciers</NavLink>
      <NavLink to={'/coffrage'} className={({isActive})=>isActive?"active-link":""}>Coffrage</NavLink>
      <NavLink to={'/poudre'} className={({isActive})=>isActive?"active-link":""}>Poudre</NavLink>
      <NavLink to={'/ceramique'} className={({isActive})=>isActive?"active-link":""}>Ceramique</NavLink>
      <NavLink to={'/sanitaire'} className={({isActive})=>isActive?"active-link":""}>Sanitaire</NavLink>
    </nav>
  )
}

export default Navbar