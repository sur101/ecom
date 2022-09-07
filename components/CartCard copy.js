import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../context/Actions/action";

function CartCard({ product }) {
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const router = useRouter();
  return (
    <div className="rounded-md space-y-2 shadow-md p-4">
      <div className="h-[250px] w-full relative ">
        <Image
          src={product.img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg h-full w-full"
        ></Image>
      </div>
      <h1 className="text-xl font-semibold text-indigo-900">{product.name}</h1>
      <h2>{`${product.price} $`}</h2>
      <h3 className="text-sm text-gray-700">{product.description}</h3>
      <div className="pt-4 flex justify-between">
        {
          <span
            onClick={() => {
              dispatch(removeItem(product));
            }}
            className={`px-4 py-2 
              bg-red-400
             rounded-lg text-white cursor-pointer hover:bg-red-800 transition duration-150 ease-out`}
          >
            {"Remove"}
          </span>
        }
      </div>
    </div>
  );
}

export default CartCard;
