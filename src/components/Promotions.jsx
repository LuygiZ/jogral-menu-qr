import React from "react";
import { PROMOTIONS, WEEKLY_PROMOTIONS } from "../menuData";
import { X, Clock, Sparkles } from "lucide-react";
import { isPromoActive, getDaysRemaining, getToday, getCurrentDayOfWeek } from "./utils/dateUtils";

export default function Promotions({ showPromotions, setShowPromotions, handleCategoryClick }) {
  const today = getToday();
  const currentDayOfWeek = getCurrentDayOfWeek();

  const activePromotions = PROMOTIONS.filter(isPromoActive);
  const weeklyToday = WEEKLY_PROMOTIONS.filter(p => p.dayOfWeek === currentDayOfWeek);

  const hasPromotions = activePromotions.length > 0 || weeklyToday.length > 0;

  if (!hasPromotions) return null;

  return (
    <>
      {/* Promoções abertas */}
      {showPromotions && (
        <div className="bg-white shadow-xl border-b-4 border-black relative">
          <button
            onClick={() => setShowPromotions(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-black z-10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="max-w-5xl mx-auto py-6 px-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-black" size={24} />
              <h2 className="text-2xl font-bold text-black">Ofertas Especiais</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Promoções normais */}
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

              {/* Promoções semanais do dia */}
              {weeklyToday.map((promo) => (
                <div
                  key={promo.id}
                  onClick={() => handleCategoryClick(promo.categoryFilter)}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 border border-gray-200 h-full"
                >
                  <div className={`bg-gradient-to-br ${promo.color} p-6 text-white h-full flex flex-col`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm px-3 py-1 rounded-full bg-white text-black font-semibold">Hoje</span>
                      <span className="text-4xl">{promo.image}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                    <p className="text-sm mb-3 opacity-90 flex-grow">{promo.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-3xl font-bold bg-white text-black px-4 py-2 rounded-lg shadow-md">
                        {promo.discount}
                      </span>
                      {promo.categoryFilter && (
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                          {promo.categoryFilter}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Botão para reabrir promoções */}
      {!showPromotions && (
        <div className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-4xl mx-auto py-3 px-4">
            <button
              onClick={() => setShowPromotions(true)}
              className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold transition-colors"
            >
              <Sparkles size={20} />
              Ver Promoções
            </button>
          </div>
        </div>
      )}
    </>
  );
}
