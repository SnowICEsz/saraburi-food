import { FaSearch } from "react-icons/fa";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="my-10 flex justify-center">
      <div className="relative w-full max-w-2xl">

        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ค้นหาร้านอาหาร..."
          className="w-full rounded-full border border-orange-200 bg-white py-4 pl-14 pr-5 shadow-lg outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-200"
        />

      </div>
    </div>
  );
}