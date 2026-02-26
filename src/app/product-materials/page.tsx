"use client";

import { useState, useEffect } from "react";
import { useLayout } from "@/context/LayoutContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import BtnGreen from "../components/ui/BtnGreen";
import Modal from "../components/ui/Modal";
import axios from "axios";
import ProductRawMaterialsCard from "../components/product-materials/ProductMaterialsCard";

type Product = {
  id: number;
  name: string;
};

type RawMaterial = {
  id: number;
  name: string;
};

type ProductRawMaterial = {
  id: number;
  required_quantity: number;
  product: {
    id: number;
    name: string;
  };
  raw_material: {
    id: number;
    name: string;
  };
};

const Page = () => {
  const { isNavOpen } = useLayout();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const shouldHide = isMobile && isNavOpen;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [materials, setMaterials] = useState<RawMaterial[]>([]);
  const [relations, setRelations] = useState<ProductRawMaterial[]>([]);

  const [productId, setProductId] = useState<number>(0);
  const [rawMaterialId, setRawMaterialId] = useState<number>(0);
  const [requiredQuantity, setRequiredQuantity] = useState<number>(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const loadProducts = async () => {
    const res = await axios.get("http://localhost:3333/products");
    setProducts(res.data);
  };

  const loadMaterials = async () => {
    const res = await axios.get("http://localhost:3333/raw-materials");
    setMaterials(res.data);
  };

  const loadRelations = async () => {
    const res = await axios.get("http://localhost:3333/product-raw-materials");
    setRelations(res.data);
  };

  const handleCreateRelation = async () => {
    await axios.post("http://localhost:3333/product-raw-materials", {
      product_id: productId,
      raw_material_id: rawMaterialId,
      required_quantity: requiredQuantity,
    });

    setRequiredQuantity(0);
    loadRelations();
    closeModal();
  };

  const handleDeleteRelation = async (id: number) => {
    await axios.delete(`http://localhost:3333/product-raw-materials/${id}`);
    loadRelations();
  };

  useEffect(() => {
    loadProducts();
    loadMaterials();
    loadRelations();
  }, []);

  if (shouldHide) return null;

  return (
    <article className="relative flex flex-col gap-40 h-full w-full p-10">
      <section className="border-b-2 border-black/10 p-2">
        <h1 className="text-blue-950 uppercase font-bold text-4xl">
          Product Materials
        </h1>
      </section>

      <section className="h-full w-full flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <BtnGreen onClick={openModal} label="+ Add Material to Product" />
          <p className="text-black/70 text-1xl">
            Define how much each product consumes of each raw material.
          </p>
        </section>

        <ProductRawMaterialsCard items={relations} onDelete={handleDeleteRelation} />
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Material to Product"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateRelation();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Select Product
            </label>
            <select
              value={productId}
              onChange={(e) => setProductId(Number(e.target.value))}
              className="border rounded-lg p-2 border-black text-black"
            >
              <option value={0}>Select...</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Select Raw Material
            </label>
            <select
              value={rawMaterialId}
              onChange={(e) => setRawMaterialId(Number(e.target.value))}
              className="border rounded-lg p-2 border-black text-black"
            >
              <option value={0}>Select...</option>
              {materials.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Required Quantity
            </label>
            <input
              type="number"
              value={requiredQuantity}
              onChange={(e) => setRequiredQuantity(Number(e.target.value))}
              className="border rounded-lg p-2 border-black text-black"
            />
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="text-white px-4 py-2 rounded-2xl bg-red-500"
            >
              Cancel
            </button>

            <BtnGreen label="Save" />
          </div>
        </form>
      </Modal>
    </article>
  );
};

export default Page;
