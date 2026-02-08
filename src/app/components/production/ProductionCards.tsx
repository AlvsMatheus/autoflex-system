const ProductionCards = () => {
  return (
    <article className="flex flex-col gap-40">

      {/* FINISHED */}
      <section className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg text-emerald-500">
          Finished
        </h2>

        <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product A</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product B</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product C</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product D</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>
        </article>
      </section>

      {/* IN PROGRESS */}
      <section className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg text-blue-500">
          In Progress
        </h2>

        <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product A</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product B</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product C</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product D</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>
        </article>
      </section>

      {/* PENDING */}
      <section className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg text-yellow-500">
          Pending
        </h2>

        <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product A</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product B</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product C</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white">
            <div>Product D</div>
            <div className="flex justify-end gap-10 w-full">
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>
        </article>
      </section>

    </article>
  )
}

export default ProductionCards
