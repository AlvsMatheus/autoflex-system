"use client";

import { useState } from "react";
import { useLayout } from "@/context/LayoutContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductionCards from "../components/production/ProductionCards";
import BtnGreen from "../components/ui/BtnGreen";
import Modal from "../components/ui/Modal";



const Page = () => {
  const { isNavOpen } = useLayout();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModal = () => {setIsModalOpen(true)}
  const closeModal = () => {setIsModalOpen(false)}

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
          <BtnGreen onClick={openModal} label="+ New Production"/>
          <p className="text-black/70 text-1xl">
            Manage production processes.
          </p>
        </section>

        <section className="w-full h-full">
          <ProductionCards />
        </section>
      </section>
      <Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  title="New Production"
>
  <form className="flex flex-col gap-4">

    {/* Product */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Product</label>
      <select className="border rounded-lg p-2">
        <option>Product A</option>
        <option>Product B</option>
      </select>
    </div>

    {/* Status */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Status</label>
      <select className="border rounded-lg p-2">
        <option value="finished">Finished</option>
        <option value="progress">In Progress</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    {/* Raw material */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Raw material</label>
      <select className="border rounded-lg p-2">
        <option>Steel</option>
        <option>Plastic</option>
      </select>
    </div>

    {/* Quantity */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Quantity needed</label>
      <input
        type="number"
        className="border rounded-lg p-2"
        placeholder="Ex: 3"
      />
    </div>

    <div className="flex justify-end gap-4 mt-4">
      <button
        type="button"
        onClick={closeModal}
        className="px-4 py-2 rounded-2xl bg-red-500 text-white"
      >
        Cancel
      </button>

      <BtnGreen label="Save Production" />
    </div>
  </form>
</Modal>
    </article>
  );
};

export default Page;
