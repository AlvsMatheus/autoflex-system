"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Suggestion = {
  product_id: number;
  product_name: string;
  unit_value: number;
  possible_quantity: number;
  total_value: number;
};

const ProductionCards = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const loadSuggestions = async () => {
    const res = await axios.get(
      "http://localhost:3333/production/suggestions"
    );
    setSuggestions(res.data);
  };

  useEffect(() => {
    loadSuggestions();
  }, []);

  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
      {suggestions.map((item) => (
        <div
  key={item.product_id}
  className="flex flex-col justify-between gap-6 p-6 
  bg-linear-to-br from-white to-gray-50
  border border-gray-200
  rounded-2xl
  shadow-md hover:shadow-xl
  transition-all duration-300
  hover:-translate-y-1"
>
  <div className="flex flex-col gap-3">
    <h3 className="text-xl font-bold text-blue-950">
      {item.product_name}
    </h3>

    <div className="flex flex-col gap-1 text-sm text-black/70">
      <span>Max Production</span>
      <span className="text-2xl font-semibold text-indigo-600">
        {item.possible_quantity}
      </span>
    </div>

    <div className="flex flex-col gap-1 text-sm text-black/70">
      <span>Total Value</span>
      <span className="text-2xl font-semibold text-green-600">
        ${item.total_value}
      </span>
    </div>
  </div>

  <div className="pt-4 border-t border-gray-200">
    <span className="text-xs text-black/50">
      Production suggestion based on available raw materials
    </span>
  </div>
</div>
      ))}
    </article>
  );
};

export default ProductionCards;