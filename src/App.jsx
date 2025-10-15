// src/App.jsx
import React, { useState, useMemo } from "react";
import { CAFE_NAME, CURRENCY, MENU_CATEGORIES, PROMOTIONS } from "./menuData";
import { ChevronLeft, ChevronRight, X, Clock, Sparkles } from "lucide-react";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPromotions, setShowPromotions] = useState(true);

  // === Lógica de promoções ===
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const isPromoActive = (promo) => {
    const start = new Date(promo.startDate);
    const end = new Date(promo.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return today >= start && today <= end;
  };

  const activePromotions = PROMOTIONS.filter(isPromoActive);

  const getDaysRemaining = (endDate) => {
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    const diffMs = end - today;
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  };

  // === Categorias ===
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const selectedCatData = MENU_CATEGORIES.find((cat) => cat.id === selectedCategory);

  // === UI ===
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4 text-center shadow-md">
        <h1 className="text-3xl font-bold tracking-tight">{CAFE_NAME}</h1>
        <p className="text-sm text-gray-300 mt-1">Menu digital</p>
      </header>

      {/* Promoções */}
      {activePromotions.length > 0 && showPromotions && (
        <div className="bg-white shadow-xl border-b-4 border-black relative">
          <button
            onClick={() => setShowPromotions(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-black z-10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="max-w-4xl mx-auto py-6 px-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-black" size={24} />
              <h2 className="text-2xl font-bold text-black">Ofertas Especiais</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activePromotions.map((promo) => {
                const daysLeft = getDaysRemaining(promo.endDate);
                return (
                  <div
                    key={promo.id}
                    className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 border border-gray-200 h-full"
                  >
                    <div className={`bg-gradient-to-br ${promo.color} p-6 text-white h-full flex flex-col`}>
                      <div className="text-5xl mb-3">{promo.image}</div>
                      <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                      <p className="text-sm mb-3 opacity-90 flex-grow">{promo.description}</p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-3xl font-bold bg-white text-black px-4 py-2 rounded-lg shadow-md">
                          {promo.discount}
                        </span>
                        <div className="text-right text-xs">
                          <div className="flex items-center gap-1 justify-end mb-1">
                            <Clock size={12} />
                            <span>{daysLeft} dias restantes</span>
                          </div>
                          {promo.categoryFilter && promo.categoryFilter !== "all" && (
                            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                              {promo.categoryFilter}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Botão para mostrar promoções novamente */}
      {!showPromotions && activePromotions.length > 0 && (
        <div className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-4xl mx-auto py-3 px-4">
            <button
              onClick={() => setShowPromotions(true)}
              className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold transition-colors"
            >
              <Sparkles size={20} />
              Ver Promoções ({activePromotions.length})
            </button>
          </div>
        </div>
      )}

      {/* Lista de categorias principais */}
      {!selectedCategory && (
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md active:scale-[0.98] transition-all p-4 flex flex-col justify-center items-center text-center"
            >
              <div className="text-4xl mb-2">
                {cat.id.includes("cafeteria")
                  ? "☕"
                  : cat.id === "cocktails"
                  ? "🍸"
                  : cat.id === "comida"
                  ? "🍔"
                  : cat.id === "beersAndCiders"
                  ? "🍺"
                  : cat.id === "spirits"
                  ? "🥃"
                  : cat.id === "liqueurs"
                  ? "🌰"
                  : cat.id === "aperitifs"
                  ? "🍷"
                  : "🍹"}
              </div>
              <span className="font-semibold text-sm">{cat.name}</span>
              <ChevronRight size={18} className="text-gray-400 mt-1" />
            </button>
          ))}
        </div>
      )}

      {/* Subcategorias e itens da categoria selecionada */}
      {selectedCategory && selectedCatData && (
        <div className="flex-1 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm flex items-center p-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center text-gray-700 hover:text-black transition-colors"
            >
              <ChevronLeft size={22} />
              <span className="ml-1 font-semibold text-sm">Voltar</span>
            </button>
            <h2 className="text-lg font-bold text-center flex-1">{selectedCatData.name}</h2>
          </div>

          <div className="p-4 space-y-6">
            {selectedCatData.subcategories.map((sub) => (
              <div key={sub.id}>
                <h3 className="text-md font-semibold mb-3 text-gray-700 border-l-4 border-black pl-2">
                  {sub.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sub.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex flex-col justify-between text-center active:scale-[0.98] transition-all"
                    >
                      <div className="text-3xl mb-1">{item.image}</div>
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.description}</p>
                      <p className="text-sm font-semibold mt-2">
                        {item.price} {CURRENCY}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
