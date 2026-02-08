"use client";

import { useLayout } from "@/context/LayoutContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductsCard from "../components/products/ProductsCard";

const Page = () => {
  const { isNavOpen } = useLayout();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const shouldHideProducts = isMobile && isNavOpen;

  if (shouldHideProducts) return null;

  return (
    <article className="flex flex-col gap-40 h-full w-full p-10 ">
      <section className="border-b-2 border-black/10 p-2">
        <h1 className="text-blue-950 uppercase font-bold text-4xl">
          Products
        </h1>
      </section>

      <section className="h-full w-full flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <button className="w-50 bg-emerald-400 p-4 uppercase rounded-2xl">
            + New Product
          </button>
          <p className="text-black/70 text-1xl">
            Manage registered products.
          </p>
        </section>

        <section className="w-full h-full">
          <ProductsCard />
        </section>
      </section>
    </article>
  );
};

export default Page;
