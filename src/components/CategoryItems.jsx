import React from "react";
import { ChevronLeft } from "lucide-react";

export default function CategoryItems({ category, goBack }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm flex items-center p-4">
        <button
          onClick={goBack}
          className="flex items-center text-gray-700 hover:text-black transition-colors"
        >
          <ChevronLeft size={22} />
          <span className="ml-1 font-semibold text-sm">Voltar</span>
        </button>
        <h2 className="text-lg font-bold text-center flex-1">{category.name}</h2>
      </div>

      <div className="p-4 space-y-6">
        {category.subcategories.map((sub) => (
          <div key={sub.id}>
            <h3 className="text-md font-semibold mb-3 text-gray-700 border-l-4 border-black pl-2">
              {sub.name}
            </h3>

            {/* Alterado para sempre ter 2 colunas fixas */}
            <div className="grid grid-cols-2 gap-4">
              {sub.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex flex-col justify-between text-center active:scale-[0.98] transition-all"
                >
                  <div className="text-3xl mb-1">{item.image}</div>
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                  <p className="text-sm font-semibold mt-2">{item.price}€</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
