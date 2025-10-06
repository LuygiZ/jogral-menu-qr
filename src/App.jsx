import React, { useState } from 'react';
import { Coffee, Wine, Utensils, X } from 'lucide-react';

export default function CafeMenu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  // EDIT YOUR MENU HERE - Simple format
  const menuData = {
    cafe: "Sunset Cafe & Bar",
    categories: [
      {
        id: 'coffee',
        name: 'Coffee',
        icon: Coffee,
        items: [
          { name: 'Espresso', price: '2.50', description: 'Strong and bold' },
          { name: 'Cappuccino', price: '3.50', description: 'Creamy and smooth' },
          { name: 'Latte', price: '3.80', description: 'Mild and milky' },
          { name: 'Americano', price: '2.80', description: 'Classic coffee' }
        ]
      },
      {
        id: 'drinks',
        name: 'Drinks',
        icon: Wine,
        items: [
          { name: 'House Wine', price: '4.50', description: 'Red or White' },
          { name: 'Craft Beer', price: '5.00', description: 'Local selection' },
          { name: 'Gin & Tonic', price: '6.50', description: 'Premium gin' },
          { name: 'Fresh Juice', price: '3.50', description: 'Orange or Apple' }
        ]
      },
      {
        id: 'food',
        name: 'Food',
        icon: Utensils,
        items: [
          { name: 'Croissant', price: '2.50', description: 'Butter or chocolate' },
          { name: 'Sandwich', price: '6.50', description: 'Ham, cheese & tomato' },
          { name: 'Salad Bowl', price: '7.50', description: 'Fresh & healthy' },
          { name: 'Cake Slice', price: '3.80', description: 'Daily selection' }
        ]
      }
    ]
  };

  const allItems = menuData.categories.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.id, categoryName: cat.name }))
  );

  const filteredItems = selectedCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-8 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">{menuData.cafe}</h1>
          <p className="text-amber-100">Menu</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 bg-white shadow-md z-10 py-4 px-4">
        <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {menuData.categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto p-4 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer p-5 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-xl font-bold text-amber-900">€{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {selectedCategory === 'all' && (
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                  {item.categoryName}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-t-3xl md:rounded-3xl p-6 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h2>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-sm text-gray-500">{selectedItem.categoryName}</span>
              <span className="text-3xl font-bold text-amber-900">€{selectedItem.price}</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center py-6 text-gray-500 text-sm">
        Scan QR code to view menu
      </div>
    </div>
  );
}