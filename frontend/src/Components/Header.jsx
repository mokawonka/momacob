import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { useSelector } from "react-redux";
import { MdClose, MdMenu} from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri';


const Header=()=> {
  
  const cart=useSelector((state)=>state.lister.cart);
  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu=()=>setmenuOpened(!menuOpened);

  useEffect( () =>{
    const handleScroll=()=>{
    if (window.scrollY > 0 ){
      if(menuOpened){
        setmenuOpened(false);
      }
    }
  };
  window.addEventListener("scroll",handleScroll);
  return()=>{
    window.removeEventListener("scroll",handleScroll);
  };
},[menuOpened]);

    return (
      <header className="max-padd-container w-full z-50">
        <div className="flex items-center justify-between py-3">
            {/*logo*/}
            <Link to={"/"} className="flex items-center gap-x-2">
            <h1 className="bold-24 hidden xs:flex"> Momacob</h1>
           
            </Link>
            <div>
        {/* <div>
            <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"}/>
        </div>*/}
        <div>
            <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 w-100 h-60 border border-gray-300 overflow-y-scroll p-4 "
              :"flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%] "}`}/>
        </div>
        <div className="flexBetween gap-x-3 sm:gap-x-2 bold-16">
           {!menuOpened ?(
            <MdMenu className=" cursor-pointer text-3xl hover:text-secondary"
            onClick={toggleMenu}/>
           ):(
           <MdClose className=" cursor-pointer text-3xl hover:text-secondary"
           onClick={toggleMenu}/>
           )}
           <div>
            <NavLink to='/cart' className={'flex'}>
            <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary"/>
            <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2 right-3">{cart.length}</span>

            </NavLink>
           </div>
        </div>
        </div>
        
        </div>
       
      </header>
    );
}

export default Header;