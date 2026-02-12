type Product = {
  id: number;
  name: string;
  stock: number;
};

type Props = {
  products: Product[];
  onDelete: (id: number) => void;
};


const ProductsCard = ({products, onDelete}: Props) => {

 

  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black'>
      {products.map((product) => (
        <div 
        key={product.id}
        className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <h3>{product.name}</h3>
        <div className="flex justify-end gap-10 w-full">
          <span className="p-2">Edit</span>
          <button
          onClick={() => onDelete(product.id)}
          className="cursor-pointer text-white bg-red-500 rounded-2xl p-2 hover:bg-red-700 hover:scale-105 transition-all duration-150 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
      ))}
    </article>
  )
}

export default ProductsCard
