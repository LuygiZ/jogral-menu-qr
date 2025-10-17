import React from "react";
import { ChevronRight } from "lucide-react";

export default function CategoryList({ categories, handleCategoryClick }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {categories.map((cat) => (
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
  );
}
