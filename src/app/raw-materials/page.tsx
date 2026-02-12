"use client";

import { useState, useEffect } from "react";
import { useLayout } from "@/context/LayoutContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MaterialsCard from "../components/raw-materials/MateterialsCard";
import Modal from "../components/ui/Modal";
import BtnGreen from "../components/ui/BtnGreen";
import axios from "axios";

type RawMaterial = {
    id: number,
    name: string,
    quantity: number
}

const Page = () => {
  const { isNavOpen } = useLayout();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [materials, setMaterials] = useState<RawMaterial[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const openModal = () => {setIsModalOpen(true)}
  const closeModal = () => {setIsModalOpen(false)}
  


  const loadMaterials = async () => {
  const response = await axios.get<RawMaterial[]>("http://localhost:3333/raw-materials");
  setMaterials(response.data);
};

  const handleCreateMaterial = async () => {
    await axios.post("http://localhost:3333/raw-materials", {
      name,
      quantity
    });

    loadMaterials();
    closeModal();
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  const shouldHideMaterials = isMobile && isNavOpen;

  if (shouldHideMaterials) return null;

  return (
    <article className="flex flex-col gap-40 h-full w-full p-10 ">
      <section className="border-b-2 border-black/10 p-2">
        <h1 className="text-blue-950 uppercase font-bold text-4xl">
          Raw Materials
        </h1>
      </section>

      <section className="h-full w-full flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <BtnGreen onClick={openModal} label="+ New Material"/>
          <p className="text-black/70 text-1xl">
            Manage registered materials.
          </p>
        </section>

        <section className="w-full h-full">
          <MaterialsCard materials={materials} />
        </section>
      </section>
      <Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  title="New Material"
>
  <form className="flex flex-col gap-4">
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-black">Material Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg p-2 border-black text-black"
        placeholder="Ex: Material A"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-black">Quantity in stock</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border rounded-lg p-2 border-black text-black"
        placeholder="Ex: 100"
      />
    </div>

    <div className="flex justify-end gap-4 mt-4">
      <button
        type="button"
        onClick={closeModal}
        className="text-white px-4 py-2 rounded-2xl bg-red-500 border"
      >
        Cancel
      </button>

      <BtnGreen onClick={handleCreateMaterial} label="Save Material" />
    </div>
  </form>
</Modal>
    </article>
  );
};

export default Page;
