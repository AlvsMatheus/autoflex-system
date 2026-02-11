import production from "@/mocks/production";

const ProductionCards = () => {
  const { products } = production;

  const finished = products.filter((p) => p.status === "finished");
  const progress = products.filter((p) => p.status === "progress");
  const pending = products.filter((p) => p.status === "pending");

  return (
    <article className="flex flex-col gap-40">
      {/* FINISHED */}
      <section className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg text-emerald-500">
          Finished
        </h2>

        <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
          {finished.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white"
            >
              <h3>{product.id}</h3>
              <div className="flex justify-end gap-10 w-full">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* IN PROGRESS */}
      <section className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg text-blue-500">
          In Progress
        </h2>

        <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
          {progress.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white"
            >
              <div>{product.id}</div>
              <div className="flex justify-end gap-10 w-full">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* PENDING */}
      <section className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg text-yellow-500">Pending</h2>

        <article className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 text-black">
          {pending.map((produt) => (
            <div
              key={produt.id}
              className="flex flex-col justify-between gap-10 p-4 border border-gray-400 rounded-2xl shadow-lg shadow-black/15 bg-white"
            >
              <div>{produt.id}</div>
              <div className="flex justify-end gap-10 w-full">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          ))}
        </article>
      </section>
    </article>
  );
};

export default ProductionCards;
