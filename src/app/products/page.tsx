"use client";

import { useState, useEffect } from "react";
import { useLayout } from "@/context/LayoutContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductsCard from "../components/products/ProductsCard";
import BtnGreen from "../components/ui/BtnGreen";
import Modal from "../components/ui/Modal";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  stock: number;
};

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isNavOpen } = useLayout();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const shouldHideProducts = isMobile && isNavOpen;
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("")
  const [rawMaterialId, setRawMaterialId] = useState<number>(1);
  const [requiredQuantity, setRequiredQuantity] = useState<number>(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadProducts = async () => {
  const response = await axios.get<Product[]>("http://localhost:3333/products");
  setProducts(response.data);
};

  const handleCreateProduct = async () => {
    console.log({
    name,
    rawMaterialId,
    requiredQuantity,
  });

    await axios.post("http://localhost:3333/products", {
      name,
      rawMaterialId,
      requiredQuantity,
    });

    loadProducts();
    closeModal();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (shouldHideProducts) return null;

  return (
    <article className="relative flex flex-col gap-40 h-full w-full p-10 ">
      <section className="border-b-2 border-black/10 p-2">
        <h1 className="text-blue-950 uppercase font-bold text-4xl">Products</h1>
      </section>

      <section className="h-full w-full flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <BtnGreen onClick={openModal} label="+ New Product" />
          <p className="text-black/70 text-1xl">Manage registered products.</p>
        </section>

        <section className="w-full h-full">
          <ProductsCard products={products}/>
        </section>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="New Product">
        <form 
          onSubmit={(e) => {
          e.preventDefault();
          handleCreateProduct();
        }}
        className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Product name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black text-black rounded-lg p-2"
              placeholder="Ex: Product A"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Price</label>
            <input
              type="number"
              value={rawMaterialId}
              onChange={(e) => setRawMaterialId(Number(e.target.value))}
              className="border-2 border-black text-black rounded-lg p-2"
              placeholder="Ex: 100"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Required Quantity
            </label>
            <input
              type="number"
              value={requiredQuantity}
              onChange={(e) => setRequiredQuantity(Number(e.target.value))}
              className="border-2 border-black text-black rounded-lg p-2"
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

            <BtnGreen onClick={handleCreateProduct} label="Save Product" />
          </div>
        </form>
      </Modal>
    </article>
  );
};

export default Page;
