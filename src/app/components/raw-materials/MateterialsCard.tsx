

const MaterialsCard = () => {
  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black'>
      <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <div>Material A</div>
        <div className="flex justify-end gap-10 w-full">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <div>Material B</div>
        <div className="flex justify-end gap-10 w-full">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <div>Material C</div>
        <div className="flex justify-end gap-10 w-full">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
        <div>Material D</div>
        <div className="flex justify-end gap-10 w-full">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
    </article>
  )
}

export default MaterialsCard
