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

type Props = {
  items: ProductRawMaterial[];
  onDelete: (id: number) => void;
};

const ProductRawMaterialsCard = ({ items, onDelete }: Props) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
      {items.map((item) => (
        <div
  key={item.id}
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
      {item.product?.name}
    </h3>

    <div className="flex flex-col gap-1 text-sm text-black/70">
      <span>
        Raw Material
      </span>
      <span className="font-medium text-purple-600">
        {item.raw_material?.name}
      </span>
    </div>

    <div className="flex flex-col gap-1 text-sm text-black/70">
      <span>
        Required Quantity
      </span>
      <span className="text-lg font-semibold text-indigo-600">
        {item.required_quantity}
      </span>
    </div>
  </div>

  <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
    <button
      onClick={() => onDelete(item.id)}
      className="px-4 py-2 rounded-xl bg-red-500 text-white 
      hover:bg-red-700 hover:scale-105 
      transition-all duration-200"
    >
      Delete
    </button>
  </div>
</div>
      ))}
    </article>
  );
};

export default ProductRawMaterialsCard;