"use client";

import { useLayout } from "@/context/LayoutContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductionCards from "../components/production/ProductionCards";


const Page = () => {
  const { isNavOpen } = useLayout();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const shouldHideProduction = isMobile && isNavOpen;

  if (shouldHideProduction) return null;

  return (
    <article className="flex flex-col gap-40 h-full w-full p-10 ">
      <section className="border-b-2 border-black/10 p-2">
        <h1 className="text-blue-950 uppercase font-bold text-4xl">
          Production
        </h1>
      </section>

      <section className="h-full w-full flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <h1 className="text-3xl text-emerald-300 font-bold uppercase">Suggestions</h1>
          <p className="text-black/70 text-1xl">
            Production capacity based on current raw material stock.
          </p>
        </section>

        <section className="w-full h-full">
          <ProductionCards />
        </section>
      </section>
    </article>
  );
};

export default Page;
