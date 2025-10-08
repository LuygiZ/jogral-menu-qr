export const CAFE_NAME = "Jogral Bar & Brasserie";

export const CURRENCY = "€";

// PROMOTIONS
export const PROMOTIONS = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
        name: 'Espresso', 
        price: '2.50', 
        description: 'Strong and bold',
        image: '☕' // Optional emoji or image URL
      },
      { 
        name: 'Cappuccino', 
        price: '3.50', 
        description: 'Creamy and smooth',
        image: '☕'
      },
      { 
        name: 'Latte', 
        price: '3.80', 
        description: 'Mild and milky',
        image: '☕'
      },
      { 
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
        name: 'House Wine', 
        price: '4.50', 
        description: 'Red or White',
        image: '🍷'
      },
      { 
        name: 'Craft Beer', 
        price: '5.00', 
        description: 'Local selection',
        image: '🍺'
      },
      { 
        name: 'Gin & Tonic', 
        price: '6.50', 
        description: 'Premium gin',
        image: '🍸'
      },
      { 
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
        name: 'Croissant', 
        price: '2.50', 
        description: 'Butter or chocolate',
        image: '🥐'
      },
      { 
        name: 'Sandwich', 
        price: '6.50', 
        description: 'Ham, cheese & tomato',
        image: '🥪'
      },
      { 
        name: 'Salad Bowl', 
        price: '7.50', 
        description: 'Fresh & healthy',
        image: '🥗'
      },
      { 
        name: 'Cake Slice', 
        price: '3.80', 
        description: 'Daily selection',
        image: '🍰'
      },
      { 
        name: 'Pasta', 
        price: '8.50', 
        description: 'Carbonara or Bolognese',
        image: '🍝'
      },
      { 
        name: 'Burger', 
        price: '9.00', 
        description: 'Beef with fries',
        image: '🍔'
      }
    ]
  }
];

export const FOOTER_TEXT = "Scan QR code to view menu";