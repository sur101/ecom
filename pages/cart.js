import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard copy";
import Header from "../components/Header";
import { addItem, removeItem } from "../context/Actions/action";

function Cart() {
  const router = useRouter();

  const item = useSelector((state) => state.Cart);

  return (
    <div>
      <header>
        <Header />
        <main className="sm:px-[200px] lg:px-[300px] xl:[500px] py-8">
          <h1 className="text-indigo-900 font-semibold text-3xl pb-4 flex items-center ">
            Cart <ShoppingCartIcon className="pl-2 h-10 w-10 text-indigo-900" />
          </h1>
          {item.items.map((item, index) => (
            <div>
              <CartCard product={item} />
            </div>
          ))}
        </main>
      </header>
    </div>
  );
}

export default Cart;
