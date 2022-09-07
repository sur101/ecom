import Image from "next/image";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <div>
      <header className="">
        <Header />
      </header>
      <main className="p-8">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {products.map((item, index) => (
            <div key={index}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
