// src/menuData.js
// Edit this file to update your menu

export const CAFE_NAME = "Jogral Bar & Brasserie";

export const CURRENCY = "€";

// PROMOTIONS - Add your special offers here
export const PROMOTIONS = [
  {
    id: 'happyHour',
    title: "Happy Hour Special",
    description: "50% off on all drinks",
    discount: "50%",
    startDate: "2025-10-01", // YYYY-MM-DD format
    endDate: "2025-10-31",
    categoryFilter: "drinks", // 'all', 'coffee', 'drinks', 'food', or null
    image: "🍹", // You can use emoji or image URL
    color: "from-gray-900 to-gray-700" // Tailwind gradient classes
  },
  {
    id: 'breakfastCombo',
    title: "Breakfast Combo",
    description: "Coffee + Croissant for only €4",
    discount: "€4",
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    categoryFilter: "all",
    image: "☕",
    color: "from-stone-800 to-stone-600"
  },
  {
    id: 'weekendBrunch',
    title: "Weekend Brunch",
    description: "Free dessert with any main dish",
    discount: "Free",
    startDate: "2025-10-08",
    endDate: "2025-10-15",
    categoryFilter: "food",
    image: "🍰",
    color: "from-neutral-900 to-neutral-700"
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'coffee',
    name: 'Coffee',
    items: [
      { 
        id: 'espresso',
        name: 'Espresso', 
        price: '2.50', 
        description: 'Strong and bold',
        image: '☕'
      },
      { 
        id: 'cappuccino',
        name: 'Cappuccino', 
        price: '3.50', 
        description: 'Creamy and smooth',
        image: '☕'
      },
      { 
        id: 'latte',
        name: 'Latte', 
        price: '3.80', 
        description: 'Mild and milky',
        image: '☕'
      },
      { 
        id: 'americano',
        name: 'Americano', 
        price: '2.80', 
        description: 'Classic coffee',
        image: '☕'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      { 
        id: 'houseWine',
        name: 'House Wine', 
        price: '4.50', 
        description: 'Red or White',
        image: '🍷'
      },
      { 
        id: 'craftBeer',
        name: 'Craft Beer', 
        price: '5.00', 
        description: 'Local selection',
        image: '🍺'
      },
      { 
        id: 'ginTonic',
        name: 'Gin & Tonic', 
        price: '6.50', 
        description: 'Premium gin',
        image: '🍸'
      },
      { 
        id: 'freshJuice',
        name: 'Fresh Juice', 
        price: '3.50', 
        description: 'Orange or Apple',
        image: '🧃'
      }
    ]
  },
  {
    id: 'food',
    name: 'Food',
    items: [
      { 
        id: 'croissant',
        name: 'Croissant', 
        price: '2.50', 
        description: 'Butter or chocolate',
        image: '🥐'
      },
      { 
        id: 'sandwich',
        name: 'Sandwich', 
        price: '6.50', 
        description: 'Ham, cheese & tomato',
        image: '🥪'
      },
      { 
        id: 'saladBowl',
        name: 'Salad Bowl', 
        price: '7.50', 
        description: 'Fresh & healthy',
        image: '🥗'
      },
      { 
        id: 'cakeSlice',
        name: 'Cake Slice', 
        price: '3.80', 
        description: 'Daily selection',
        image: '🍰'
      },
      { 
        id: 'pasta',
        name: 'Pasta', 
        price: '8.50', 
        description: 'Carbonara or Bolognese',
        image: '🍝'
      },
      { 
        id: 'burger',
        name: 'Burger', 
        price: '9.00', 
        description: 'Beef with fries',
        image: '🍔'
      }
    ]
  }
];

export const FOOTER_TEXT = "Scan QR code to view menu";