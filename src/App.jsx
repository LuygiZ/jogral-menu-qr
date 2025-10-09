import React, { useState } from 'react';
import { Coffee, Wine, Utensils, X, Clock, Calendar, Sparkles } from 'lucide-react';
import { CAFE_NAME, CURRENCY, MENU_CATEGORIES, PROMOTIONS } from './menuData';
import Footer from './components/Footer';

export default function CafeMenu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPromotions, setShowPromotions] = useState(true);

  // Mapear ícones para categorias
  const iconMap = {
    'coffee': Coffee,
    'drinks': Wine,
    'food': Utensils
  };

  const menuData = {
    cafe: CAFE_NAME,
    categories: MENU_CATEGORIES.map(cat => ({
      ...cat,
      icon: iconMap[cat.id] || Coffee
    }))
  };

  // Filtrar promoções ativas
  const activePromotions = PROMOTIONS.filter(promo => {
    const hoje = new Date();
    const inicio = new Date(promo.startDate);
    const fim = new Date(promo.endDate);
    return hoje >= inicio && hoje <= fim;
  });

  // Calcular dias restantes para uma promoção
  const getDaysRemaining = (endDate) => {
    const hoje = new Date();
    const fim = new Date(endDate);
    const diff = Math.ceil((fim - hoje) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const allItems = menuData.categories.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.id, categoryName: cat.name }))
  );

  const filteredItems = selectedCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100">
      {/* Cabeçalho */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-10 px-4 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">{menuData.cafe}</h1>
          <p className="text-stone-300 text-lg tracking-wide">Menu</p>
        </div>
      </div>

      {/* Banner de Promoções */}
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
              {activePromotions.map(promo => {
                const daysLeft = getDaysRemaining(promo.endDate);
                return (
                  <div
                    key={promo.id}
                    className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 border border-gray-200`}
                  >
                    <div className={`bg-gradient-to-br ${promo.color} p-6 text-white`}>
                      <div className="text-5xl mb-3">{promo.image}</div>
                      <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                      <p className="text-sm mb-3 opacity-90">{promo.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold bg-white text-black px-4 py-2 rounded-lg shadow-md">
                          {promo.discount}
                        </span>
                        <div className="text-right text-xs">
                          <div className="flex items-center gap-1 justify-end mb-1">
                            <Clock size={12} />
                            <span>{daysLeft} dias restantes</span>
                          </div>
                          {promo.categoryFilter && promo.categoryFilter !== 'all' && (
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

      {/* Botão Mostrar Promoções (quando ocultas) */}
      {!showPromotions && activePromotions.length > 0 && (
        <div className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-4xl mx-auto py-3 px-4">
            <button
              onClick={() => setShowPromotions(true)}
              className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold transition-colors"
            >
              <Sparkles size={20} />
              Ver {activePromotions.length} Promoção{activePromotions.length > 1 ? 's' : ''} Ativa{activePromotions.length > 1 ? 's' : ''}
            </button>
          </div>
        </div>
      )}

      {/* Filtro de Categorias */}
      <div className="sticky top-0 bg-white shadow-lg z-10 py-4 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-lg whitespace-nowrap transition-all font-semibold ${
              selectedCategory === 'all'
                ? 'bg-black text-white shadow-lg'
                : 'bg-stone-100 text-gray-800 hover:bg-stone-200'
            }`}
          >
            Tudo
          </button>
          {menuData.categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 font-semibold ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-stone-100 text-gray-800 hover:bg-stone-200'
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Itens do Menu */}
      <div className="max-w-4xl mx-auto p-4 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-200 hover:border-gray-400"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  {item.image && <span className="text-3xl">{item.image}</span>}
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                </div>
                <span className="text-xl font-bold text-black">{CURRENCY}{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {selectedCategory === 'all' && (
                <span className="inline-block mt-2 text-xs px-3 py-1 bg-stone-100 text-gray-800 rounded-full font-semibold">
                  {item.categoryName}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Item */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-end md:items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-t-3xl md:rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                {selectedItem.image && <span className="text-5xl">{selectedItem.image}</span>}
                <h2 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4 text-base">{selectedItem.description}</p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide">{selectedItem.categoryName}</span>
              <span className="text-3xl font-bold text-black">{CURRENCY}{selectedItem.price}</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
