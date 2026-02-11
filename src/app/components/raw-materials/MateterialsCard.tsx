import { materials } from "@/mocks/rawMaterials"

const MaterialsCard = () => {
  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black'>
      {materials.map((material) => (
        <div 
        key={material.id}
        className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <h3>{material.name}</h3>
        <div className="flex justify-end gap-10 w-full">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
      ))}
    </article>
  )
}

export default MaterialsCard
