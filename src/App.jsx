import React, { useState } from "react";
import { CAFE_NAME, MENU_CATEGORIES } from "./menuData";
import { ChevronLeft } from "lucide-react";
import Footer from "./components/Footer";
import Promotions from "./components/Promotions";
import CategoryList from "./components/CategoryList";
import CategoryItems from "./components/CategoryItems";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPromotions, setShowPromotions] = useState(true);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const selectedCatData = MENU_CATEGORIES.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4 text-center shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">{CAFE_NAME}</h1>
        <p className="text-sm text-gray-300 mt-1">
          Explore o nosso menu e descubra o seu sabor favorito
        </p>
      </header>

      {/* Promoções */}
      <Promotions
        showPromotions={showPromotions}
        setShowPromotions={setShowPromotions}
        handleCategoryClick={handleCategoryClick}
      />

      {/* Lista de categorias */}
      {!selectedCategory && (
        <CategoryList
          categories={MENU_CATEGORIES}
          handleCategoryClick={handleCategoryClick}
        />
      )}

      {/* Subcategorias e itens da categoria selecionada */}
      {selectedCategory && selectedCatData && (
        <CategoryItems
          category={selectedCatData}
          goBack={() => setSelectedCategory(null)}
        />
      )}

      {/* Footer */}
      <Footer />
      <Analytics />
    </div>
  );
}
