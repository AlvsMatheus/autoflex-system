type Product = {
  id: number;
  name: string;
  stock: number;
};

type Props = {
  products: Product[];
};


const ProductsCard = ({products}: Props) => {

 

  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black'>
      {products.map((product) => (
        <div 
        key={product.id}
        className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <h3>{product.name}</h3>
        <div className="flex justify-end gap-10 w-full">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
      ))}
    </article>
  )
}

export default ProductsCard
