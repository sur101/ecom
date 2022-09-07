import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className="h-14 shadow-md px-4 flex justify-between items-center">
      <h1
        onClick={() => router.push("/")}
        className="cursor-pointer text-2xl font-semibold text-indigo-900"
      >
        Ecomm
      </h1>

      {router.asPath !== "/cart" && (
        <h2
          onClick={() => router.push("/cart")}
          className="hover:bg-indigo-800 transition duration-150 ease-out cursor-pointer flex space-x-2 bg-indigo-900 px-4 py-2 text-white rounded-lg"
        >
          Cart <ShoppingCartIcon className="pl-2 h-6 w-6 text-white-500" />
        </h2>
      )}
    </div>
  );
}

export default Header;
