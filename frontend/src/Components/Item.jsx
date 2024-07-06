import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Item = ({ id, image, name }) => {
  return (
    <Link to={`/product/${id}`} className="bg-white p-4 rounded-xl relative">
      <div className="flexCenter">
        <img
          src={image}
          height={211}
          width={211}
          className="rounded-lg drop-shadow-xl absolute bottom-44"
        />
      </div>
      <div className="flex flex-col gap-y-3 pt-24 ">
        <h4 className="line-clamp-2 medium-16">{name}</h4>
        <p>this is a description</p>
        <div>
          <RiShoppingCart2Fill className="p-2 h-10 w-10 hover:text-secondary" />
        </div>
      </div>
    </Link>
  );
};

export default Item;
