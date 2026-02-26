type RawMaterial = {
    id: number,
    name: string,
    quantity: number
}

type Props = {
  materials: RawMaterial[];
  onDelete: (id: number) => void;
  onEdit: (material: RawMaterial) => void;
};


const MaterialsCard = ({materials, onDelete, onEdit}: Props) => {

  
  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black'>
      {materials.map((material) => (
        <div 
  key={material.id}
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
      {material.name}
    </h3>

    <span className="text-sm text-black/60">
      Available Quantity
    </span>

    <span className="text-2xl font-semibold text-purple-600">
      {material.quantity}
    </span>
  </div>

  <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
    <button
      onClick={() => onEdit(material)}
      className="px-4 py-2 rounded-xl bg-blue-500 text-white 
      hover:bg-blue-700 hover:scale-105 
      transition-all duration-200"
    >
      Edit
    </button>

    <button
      onClick={() => onDelete(material.id)}
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
  )
}

export default MaterialsCard
