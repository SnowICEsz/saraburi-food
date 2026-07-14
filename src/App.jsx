import { useState } from "react";

import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantModal from "./components/RestaurantModal";
import Footer from "./components/Footer";

import restaurants from "./data/restaurants";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  if (!isLogin) {
    return <Login onLogin={() => setIsLogin(true)} />;
  }

  const categories = [
    "ทั้งหมด",
    ...new Set(restaurants.map((r) => r.category)),
  ];

  const filtered = restaurants.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "ทั้งหมด" ||
      item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      <Hero />

      <section
        id="restaurants"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          categories={categories}
          category={category}
          setCategory={setCategory}
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <RestaurantCard
              key={item.id}
              restaurant={item}
              onSelect={setSelectedRestaurant}
            />
          ))}
        </div>
      </section>

      <RestaurantModal
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />

      <Footer />
    </div>
  );
}