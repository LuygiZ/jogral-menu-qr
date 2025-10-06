// src/menuData.js
// Edit this file to update your menu

export const CAFE_NAME = "Jogral Café & Brasserie";

export const CURRENCY = "€";

export const MENU_CATEGORIES = [
  {
    id: 'coffee',
    name: 'Coffee',
    items: [
      { 
        name: 'Espresso', 
        price: '2.50', 
        description: 'Strong and bold' 
      },
      { 
        name: 'Cappuccino', 
        price: '3.50', 
        description: 'Creamy and smooth' 
      },
      { 
        name: 'Latte', 
        price: '3.80', 
        description: 'Mild and milky' 
      },
      { 
        name: 'Americano', 
        price: '2.80', 
        description: 'Classic coffee' 
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
        description: 'Red or White' 
      },
      { 
        name: 'Craft Beer', 
        price: '5.00', 
        description: 'Local selection' 
      },
      { 
        name: 'Gin & Tonic', 
        price: '6.50', 
        description: 'Premium gin' 
      },
      { 
        name: 'Fresh Juice', 
        price: '3.50', 
        description: 'Orange or Apple' 
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
        description: 'Butter or chocolate' 
      },
      { 
        name: 'Sandwich', 
        price: '6.50', 
        description: 'Ham, cheese & tomato' 
      },
      { 
        name: 'Salad Bowl', 
        price: '7.50', 
        description: 'Fresh & healthy' 
      },
      { 
        name: 'Cake Slice', 
        price: '3.80', 
        description: 'Daily selection' 
      }
    ]
  }
];

export const FOOTER_TEXT = "Scan QR code to view menu";