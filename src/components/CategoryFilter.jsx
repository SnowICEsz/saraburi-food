export default function CategoryFilter({
  categories,
  category,
  setCategory,
}) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-4">

      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-6 py-3 font-semibold transition

          ${
            category === item
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-white hover:bg-orange-100"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
}