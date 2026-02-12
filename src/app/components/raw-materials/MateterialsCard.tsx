type RawMaterial = {
    id: number,
    name: string,
    quantity: number
}

type Props = {
  materials: RawMaterial[];
  onDelete: (id: number) => void;
};


const MaterialsCard = ({materials, onDelete}: Props) => {

  
  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black'>
      {materials.map((material) => (
        <div 
        key={material.id}
        className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <h3>{material.name}</h3>
        <div className="flex justify-end gap-10 w-full">
          <span className="p-2">Edit</span>
          <button
          onClick={() => onDelete(material.id)}
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

export default MaterialsCard
