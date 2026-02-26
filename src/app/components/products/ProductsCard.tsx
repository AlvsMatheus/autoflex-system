type Product = {
  id: number;
  name: string;
  value: number;
};

type Props = {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
};

const ProductsCard = ({ products, onDelete, onEdit }: Props) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
      {products.map((product) => (
        <div 
  key={product.id}
  className="flex flex-col justify-between gap-6 p-6 
  bg-linear-to-br from-white to-gray-50 
  border border-gray-200 
  rounded-2xl 
  shadow-md hover:shadow-xl 
  transition-all duration-300 
  hover:-translate-y-1"
>
  <div className="flex flex-col gap-2">
    <h3 className="text-xl font-bold text-blue-950">
      {product.name}
    </h3>

    <span className="text-sm text-black/60">
      Unit Price
    </span>

    <span className="text-2xl font-semibold text-green-600">
      ${product.value}
    </span>
  </div>

  <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
    <button
      onClick={() => onEdit(product)}
      className="px-4 py-2 rounded-xl bg-blue-500 text-white 
      hover:bg-blue-700 hover:scale-105 
      transition-all duration-200"
    >
      Edit
    </button>

    <button
      onClick={() => onDelete(product.id)}
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

export default ProductsCard;
