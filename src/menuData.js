export const CAFE_NAME = "Jogral Bar & Brasserie";

export const CURRENCY = "€";

// PROMOÇÕES
export const PROMOTIONS = [
  {
    id: 1,
    title: "Especial Happy Hour",
    description: "50% de desconto em todas as bebidas",
    discount: "50%",
    startDate: "2025-10-01", // formato AAAA-MM-DD
    endDate: "2025-10-31",
    categoryFilter: "drinks", // 'all', 'coffee', 'drinks', 'food' ou null
    image: "🍹", // Podes usar emoji ou URL de imagem
    color: "from-gray-900 to-gray-700" // Classes de gradiente Tailwind
  },
  {
    id: 2,
    title: "Combo de Pequeno-Almoço",
    description: "Café + Croissant por apenas €4",
    discount: "€4",
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    categoryFilter: "all",
    image: "☕",
    color: "from-stone-800 to-stone-600"
  },
  {
    id: 3,
    title: "Brunch de Fim de Semana",
    description: "Sobremesa grátis com qualquer prato principal",
    discount: "Grátis",
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
    name: 'Café',
    items: [
      { 
        name: 'Expresso', 
        price: '2.50', 
        description: 'Forte e encorpado',
        image: '☕'
      },
      { 
        name: 'Cappuccino', 
        price: '3.50', 
        description: 'Cremoso e suave',
        image: '☕'
      },
      { 
        name: 'Latte', 
        price: '3.80', 
        description: 'Suave e leitoso',
        image: '☕'
      },
      { 
        name: 'Americano', 
        price: '2.80', 
        description: 'Café clássico',
        image: '☕'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Bebidas',
    items: [
      { 
        name: 'Vinho da Casa', 
        price: '4.50', 
        description: 'Tinto ou Branco',
        image: '🍷'
      },
      { 
        name: 'Cerveja Artesanal', 
        price: '5.00', 
        description: 'Seleção local',
        image: '🍺'
      },
      { 
        name: 'Gin Tónico', 
        price: '6.50', 
        description: 'Gin premium',
        image: '🍸'
      },
      { 
        name: 'Sumo Natural', 
        price: '3.50', 
        description: 'Laranja ou Maçã',
        image: '🧃'
      }
    ]
  },
  {
    id: 'food',
    name: 'Comida',
    items: [
      { 
        name: 'Croissant', 
        price: '2.50', 
        description: 'Manteiga ou chocolate',
        image: '🥐'
      },
      { 
        name: 'Sandes', 
        price: '6.50', 
        description: 'Fiambre, queijo e tomate',
        image: '🥪'
      },
      { 
        name: 'Taça de Salada', 
        price: '7.50', 
        description: 'Fresca e saudável',
        image: '🥗'
      },
      { 
        name: 'Fatia de Bolo', 
        price: '3.80', 
        description: 'Seleção do dia',
        image: '🍰'
      },
      { 
        name: 'Massa', 
        price: '8.50', 
        description: 'Carbonara ou Bolonhesa',
        image: '🍝'
      },
      { 
        name: 'Hambúrguer', 
        price: '9.00', 
        description: 'Carne de vaca com batatas fritas',
        image: '🍔'
      }
    ]
  }
];

export const FOOTER_TEXT = "Digitaliza o código QR para ver o menu";
