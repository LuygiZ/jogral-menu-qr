export const CAFE_NAME = "Jogral Bar & Brasserie";

export const CURRENCY = "€";

// PROMOTIONS
export const PROMOTIONS = [
  {
    id: 'happyHour',
    title: "Especial Happy Hour",
    description: "Em todas as imperiais",
    discount: "1.10€",
    startDate: "2025-10-01", // YYYY-MM-DD format
    endDate: "2025-10-31",
    categoryFilter: "all",
    image: "🍺",
    color: "from-gray-900 to-gray-700"
  },
  {
    id: 'happyHour',
    title: "Especial Happy Hour",
    description: "Em todas as Canecas",
    discount: "2.40€",
    startDate: "2025-10-01", // YYYY-MM-DD format
    endDate: "2025-10-31",
    categoryFilter: "all",
    image: "🍺",
    color: "from-gray-900 to-gray-700"
  }
];

// WEEKLY RECURRING PROMOTIONS (by day of week)
export const WEEKLY_PROMOTIONS = [
  {
    id: 'tuesdayLicores',
    dayOfWeek: 2, // Tuesday (0=Sunday, 1=Monday, 2=Tuesday, etc.)
    title: "Terça-Feira de Licores",
    description: "Licores Portugueses",
    discount: "Bebe 3 Paga 2",
    categoryFilter: "liqueurs",
    image: "🌰",
    color: "from-amber-600 to-amber-800"
  },
  {
    id: 'wednesdayBeer',
    dayOfWeek: 3, // Wednesday
    title: "Quarta-Feira de Cerveja",
    description: "Imperial Happy Hour",
    discount: "1.10€",
    categoryFilter: "beersAndCiders",
    image: "🍺",
    color: "from-yellow-600 to-yellow-800"
  },
  {
    id: 'thursdayCocktails',
    dayOfWeek: 4, // Thursday
    title: "Quinta-Feira de Cocktails",
    description: "Todos os cocktails",
    discount: "Bebe 3 Paga 2",
    categoryFilter: "cocktails",
    image: "🍹",
    color: "from-pink-600 to-pink-800"
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'cafeteria',
    name: 'Cafetaria',
    subcategories: [
      {
        id: 'cafe',
        name: 'Café',
        items: [
          { id: 'cafe', name: 'Café', price: '0.90', description: 'Café', image: '☕' },
          { id: 'descafeinado', name: 'Descafeinado', price: '0.90', description: 'Café sem cafeína', image: '☕' },
          { id: 'espresso', name: 'Espresso', price: '1.20', description: 'Café expresso', image: '☕' },
          { id: 'cafeDuplo', name: 'Café Duplo', price: '1.80', description: 'Expresso duplo', image: '☕' },
          { id: 'carioca', name: 'Carioca', price: '0.90', description: 'Café carioca', image: '☕' },
          { id: 'meiaDeLeite', name: 'Meia de Leite', price: '1.50', description: 'Café com leite', image: '☕' },
          { id: 'galao', name: 'Galão', price: '1.30', description: 'Café com muito leite', image: '☕' },
          { id: 'cappuccino', name: 'Cappuccino', price: '1.80', description: 'Café italiano', image: '☕' },
          { id: 'mocha', name: 'Mocha', price: '1.80', description: 'Café com chocolate', image: '☕' },
          { id: 'chocolateQuente', name: 'Chocolate Quente', price: '1.80', description: 'Chocolate quente', image: '🍫' },
          { id: 'chocolateNatas', name: 'Chocolate Quente com Natas', price: '2.00', description: 'Chocolate com natas', image: '🍫' },
        ]
      },
      {
        id: 'cha',
        name: 'Chá',
        items: [
          { id: 'chaLimao', name: 'Limão', price: '1.10', description: 'Chá de limão', image: '🍋' },
          { id: 'chaPretoLimao', name: 'Preto & Limão', price: '1.10', description: 'Chá preto com limão', image: '🍋' },
          { id: 'chaLimaoGengibre', name: 'Limão & Gengibre', price: '1.10', description: 'Chá de limão e gengibre', image: '🍋' },
          { id: 'chaEnglishBreakfast', name: 'English Breakfast', price: '1.10', description: 'Chá inglês', image: '☕' },
          { id: 'chaCamomila', name: 'Camomila', price: '1.10', description: 'Chá de camomila', image: '🌼' },
          { id: 'chaCamomilaMel', name: 'Camomila & Mel', price: '1.10', description: 'Camomila com mel', image: '🍯' },
          { id: 'chaCidreira', name: 'Cidreira', price: '1.10', description: 'Chá de cidreira', image: '🌿' },
          { id: 'chaCidreiraMel', name: 'Cidreira & Mel', price: '1.10', description: 'Cidreira com mel', image: '🍯' },
          { id: 'chaVerde', name: 'Verde', price: '1.10', description: 'Chá verde', image: '🍵' },
          { id: 'chaVerdeMel', name: 'Verde, Mel, Limão & Gengibre', price: '1.10', description: 'Chá verde especial', image: '🍵' },
          { id: 'chaHortela', name: 'Hortelã / Mint', price: '1.10', description: 'Chá de hortelã', image: '🌿' },
          { id: 'chaFrutosVermelhos', name: 'Frutos Vermelhos', price: '1.10', description: 'Chá de frutos vermelhos', image: '🍓' },
          { id: 'chaMirtilo', name: 'Mirtilo', price: '1.10', description: 'Chá de mirtilo', image: '🫐' },
          { id: 'chaOliveira', name: 'Oliveira', price: '1.10', description: 'Chá de oliveira', image: '🫒' },
          { id: 'chaMangoBlackcurrant', name: 'Mango & Blackcurrant', price: '1.10', description: 'Chá de manga e groselha', image: '🥭' },
          { id: 'chaMacaCanela', name: 'Maçã & Canela', price: '1.10', description: 'Chá de maçã e canela', image: '🍎' },
          { id: 'chaPrincipe', name: 'Príncipe', price: '1.10', description: 'Chá príncipe', image: '☕' },
          { id: 'chaGengibre', name: 'Gengibre', price: '1.10', description: 'Chá de gengibre', image: '🫚' },
          { id: 'chaFrutosFloresta', name: 'Frutos da Floresta', price: '1.10', description: 'Chá de frutos da floresta', image: '🍒' },
          { id: 'chaTilia', name: 'Tília', price: '1.10', description: 'Chá de tília', image: '🌸' },
        ]
      }
    ]
  },
  {
    id: 'comida',
    name: 'Comida',
    subcategories: [
      {
        id: 'entradas',
        name: 'Entradas',
        items: [
          { id: 'paoAlho', name: 'Pão de Alho', price: '1.90', description: '', image: '🍞' },
          { id: 'paoAlhoQueijo', name: 'Pão de Alho com Queijo', price: '2.40', description: '', image: '🧀' },
          { id: 'queijoDoceAbobora', name: 'Queijo e Doce de Abóbora', price: '3.50', description: '', image: '🍯' },
        ],
      },
      {
        id: 'bruschettas',
        name: 'Bruschettas',
        items: [
          { id: 'bruschettaBacon', name: 'Bacon', price: '3.00', description: '', image: '🥓' },
          { id: 'bruschettaChourico', name: 'Chouriço', price: '3.00', description: '', image: '🥖' },
          { id: 'bruschettaCebola', name: 'Cebola Frita', price: '3.00', description: '', image: '🧅' },
          { id: 'bruschettaTomate', name: 'Tomate', price: '3.00', description: '', image: '🍅' },
        ],
      },
      {
        id: 'tostas',
        name: 'Tostas',
        items: [
          { id: 'tostaMista', name: 'Mista', price: '3.60', description: 'Pão caseiro, fiambre e queijo', image: '🥪' },
          { id: 'tostaTomate', name: 'Tomate', price: '3.60', description: 'Pão caseiro, tomate e queijo', image: '🍅' },
          { id: 'tostaAtum', name: 'Atum', price: '5.00', description: 'Pão caseiro, pasta de atum e queijo', image: '🐟' },
        ],
      },
      {
        id: 'classicos',
        name: 'Clássicos',
        items: [
          { id: 'paoChourico', name: 'Pão com Chouriço', price: '3.60', description: '', image: '🥖' },
          { id: 'paoBolonhesa', name: 'Pão com Bolonhesa', price: '4.50', description: '', image: '🍝' },
        ],
      },
      {
        id: 'hamburgers',
        name: 'Hamburgers',
        items: [
          {
            id: 'supremeCaco',
            name: 'Supreme do Caco',
            price: '7.50',
            description: '100% carne angus, bolo do caco, bacon, queijo, alface, tomate, cebola frita e molho jogral',
            image: '🍔',
          },
          {
            id: 'supreme',
            name: 'Supreme',
            price: '7.00',
            description: '100% carne angus, pão de hamburger, bacon, queijo, alface, tomate, cebola frita e molho jogral',
            image: '🍔',
          },
        ],
      },
      {
        id: 'jogralSpecials',
        name: 'Jogral Specials',
        items: [
          {
            id: 'americanCiabatta',
            name: 'American Ciabatta',
            price: '6.80',
            description: 'Pão ciabatta, carne angus, cebola frita, bacon, queijo e maionese',
            image: '🥩',
          },
          {
            id: 'croqueJogral',
            name: 'Croque Jogral',
            price: '4.30',
            description: 'Pão caseiro, queijo, fiambre e mozzarella gratinada',
            image: '🧀',
          },
          {
            id: 'jogralHotDog',
            name: 'Jogral Hot Dog',
            price: '3.00',
            description: 'Pão de hot dog, salsicha frankfurt, batata palha, ketchup, maionese e mostarda',
            image: '🌭',
          },
        ],
      },
      {
        id: 'tabuas',
        name: 'Tábuas',
        items: [
          {
            id: 'tabuaAlentejana',
            name: 'Tábua Alentejana',
            price: '6.50',
            description: 'Paio, salsichão, paio preto e pão torrado',
            image: '🥓',
          },
          {
            id: 'tabuaJogral',
            name: 'Tábua Jogral',
            price: '9.00',
            description: 'Paio, salsichão, paio preto, queijo curado, doce de abóbora e pão torrado',
            image: '🧀',
          },
        ],
      },
      {
        id: 'snacks',
        name: 'Snacks',
        items: [
          { id: 'pringles', name: 'Pringles', price: '2.00', description: '', image: '🥔' },
          { id: 'amendoimSalgado', name: 'Amendoim Salgado', price: '1.30', description: '', image: '🥜' },
          { id: 'pistacho', name: 'Pistacho', price: '2.00', description: '', image: '🌰' },
          { id: 'tirasMilho', name: 'Tiras de Milho', price: '2.00', description: '', image: '🌽' },
        ],
      },
      {
        id: 'sweets',
        name: 'Sweets',
        items: [
          { id: 'lion', name: 'Lion', price: '1.60', description: 'Chocolate', image: '🍫' },
          { id: 'mars', name: 'Mars', price: '1.60', description: 'Chocolate', image: '🍫' },
          { id: 'snickers', name: 'Snickers', price: '1.60', description: 'Chocolate', image: '🍫' },
          { id: 'kinderBueno', name: 'Kinder Bueno', price: '1.80', description: 'Chocolate', image: '🍫' },
        ],
      },
      {
        id: 'extras',
        name: 'Extras',
        items: [
          { id: 'extraIngredientes', name: 'Extra Ingredientes', price: '0.50', description: '', image: '➕' },
          { id: 'extraBatata', name: 'Extra Batata', price: '0.50', description: '', image: '🍟' },
        ],
      },
    ],
  },
  {
    id: 'softDrinks',
    name: 'Refrigerantes & Sumos',
    subcategories: [
      {
        id: 'aguas',
        name: 'Águas',
        items: [
          { id: 'vitalis33cl', name: 'Vitalis 0.33cl', price: '1.00', description: 'Água', image: '💧' },
          { id: 'vitalis50cl', name: 'Vitalis 0.50cl', price: '1.20', description: 'Água', image: '💧' },
          { id: 'aguaCastelo', name: 'Água Castelo', price: '1.30', description: 'Água mineral', image: '💧' },
          { id: 'pedrasSalgadas', name: 'Pedras Salgadas', price: '1.40', description: 'Água com gás', image: '💧' },
          { id: 'pedrasSabores', name: 'Pedras Sabores', price: '1.50', description: 'Água com sabor', image: '💧' },
          { id: 'frizeSabores', name: 'Frize Sabores', price: '1.50', description: 'Água com sabor', image: '💧' },
        ]
      },
      {
        id: 'refrigerantes',
        name: 'Refrigerantes',
        items: [
          { id: 'refrigerante20cl', name: 'Refrigerantes 0.20cl', price: '1.50', description: 'Vários sabores', image: '🥤' },
          { id: 'cocaCola', name: 'Coca-Cola', price: '1.80', description: '33cl', image: '🥤' },
          { id: 'cocaColaZero', name: 'Coca-Cola Zero', price: '1.80', description: '33cl', image: '🥤' },
          { id: 'sevenUp', name: '7 Up', price: '1.70', description: '33cl', image: '🥤' },
          { id: 'sumol', name: 'Sumol', price: '1.70', description: 'Vários sabores', image: '🥤' },
          { id: 'iceTea', name: 'Ice Tea', price: '1.70', description: 'Pêssego ou Limão', image: '🧃' },
          { id: 'compal', name: 'Compal', price: '1.60', description: 'Vários sabores', image: '🧃' },
          { id: 'groselha', name: 'Groselha', price: '1.00', description: 'Xarope de groselha', image: '🍒' },
          { id: 'aguaTonica', name: 'Água Tónica', price: '1.90', description: 'Tónica', image: '🥤' },
          { id: 'gingerAle', name: 'Ginger Ale', price: '1.80', description: 'Refrigerante de gengibre', image: '🥤' },
          { id: 'redBull', name: 'Red Bull', price: '3.50', description: 'Bebida energética', image: '🔋' },
          { id: 'mixer', name: 'Mixer', price: '0.50', description: 'Misturador', image: '🥤' },
        ]
      },
      {
        id: 'sumos',
        name: 'Sumos',
        items: [
          { id: 'sumoNatural33cl', name: 'Sumo Natural 0.33cl', price: '3.00', description: 'Laranja', image: '🍊' },
          { id: 'sumoGarrafao', name: 'Sumo de Garrafa', price: '2.50', description: 'Vários sabores', image: '🧃' }
        ]
      }
    ]
  },
  {
    id: 'beersAndCiders',
    name: 'Cervejas & Cidras',
    subcategories: [
      {
        id: 'cervejasPressao',
        name: 'Cervejas de Pressão',
        items: [
          { id: 'imperial20cl', name: 'Imperial 0.20 cl', price: '1.20', description: 'Mini cerveja', image: '🍺' },
          { id: 'imperial35cl', name: 'Imperial 0.35 cl', price: '1.80', description: 'Caneca', image: '🍺' }
        ]
      },
      {
        id: 'cervejasNacionais',
        name: 'Cervejas Nacionais',
        items: [
          { id: 'superBockMini', name: 'Super Bock Mini 0.20 cl', price: '1.20', description: 'Garrafa pequena', image: '🍺' },
          { id: 'superBockSA', name: 'Super Bock S/Álcool 0.20 cl', price: '1.20', description: 'Sem álcool', image: '🍺' },
          { id: 'superBock33cl', name: 'Super Bock 0.33 cl', price: '1.60', description: 'Garrafa', image: '🍺' },
          { id: 'superBock1L', name: 'Super Bock 1L', price: '4.50', description: 'Garrafa 1 litro', image: '🍺' },
          { id: 'sagresMini', name: 'Sagres Mini 0.20 cl', price: '1.20', description: 'Garrafa pequena', image: '🍺' }
        ]
      },
      {
        id: 'cervejasImportadas',
        name: 'Cervejas Importadas',
        items: [
          { id: 'carlsberg', name: 'Carlsberg 0.25 cl', price: '1.50', description: 'Dinamarca', image: '🍺' },
          { id: 'heineken', name: 'Heineken 0.25 cl', price: '1.80', description: 'Holanda', image: '🍺' }
        ]
      },
      {
        id: 'cervejasEspeciais',
        name: 'Cervejas Especiais',
        items: [
          { id: '1927BavariaWeiss', name: '1927 Bavaria Weiss 0.33 cl', price: '3.50', description: 'Cerveja de trigo', image: '🍻' },
          { id: '1927MunichDunkel', name: '1927 Munich Dunkel 0.33 cl', price: '3.50', description: 'Cerveja escura', image: '🍻' },
          { id: 'corujaIPA', name: 'Coruja IPA 0.33 cl', price: '2.50', description: 'Cerveja artesanal', image: '🍻' },
          { id: 'guldenDraak', name: 'Gulden Draak 9000 Quadruple', price: '6.50', description: 'Cerveja belga forte', image: '🍻' },
          { id: 'erdingerWeissbier', name: 'Erdinger Weissbier 0.50 cl', price: '6.50', description: 'Cerveja alemã', image: '🍻' }
        ]
      },
      {
        id: 'cidras',
        name: 'Cidras & Outros',
        items: [
          { id: 'snakebyte', name: 'Snakebyte', price: '1.80', description: 'Cidra', image: '🐍' },
          { id: 'somersby20cl', name: 'Somersby 0.20 cl', price: '1.80', description: 'Cidra de maçã', image: '🍎' },
          { id: 'somersby30cl', name: 'Somersby 0.30 cl', price: '2.50', description: 'Cidra de maçã', image: '🍎' },
          { id: 'somersbyBlackberry', name: 'Somersby Blackberry 0.33 cl', price: '2.60', description: 'Cidra de amora', image: '🍇' },
          { id: 'smirnoffIce', name: 'Smirnoff Ice 0.33 cl', price: '3.00', description: 'Bebida alcoólica', image: '🧊' }
        ]
      }
    ]
  },
  {
    id: 'spirits',
    name: 'Destilados',
    subcategories: [
      {
        id: 'rum',
        name: 'Rum',
        items: [
          { id: 'bacardi', name: 'Bacardi', price: '4.50', description: 'Rum branco', image: '🥃' },
          { id: 'bacardiLimon', name: 'Bacardi Limón', price: '5.00', description: 'Rum com limão', image: '🥃' },
          { id: 'diplomatico', name: 'Diplomático', price: '9.00', description: 'Rum venezuelano premium', image: '🥃' },
          { id: 'havannaClub', name: 'Havanna Club', price: '5.50', description: 'Rum cubano', image: '🥃' },
          { id: 'captainMorganDark', name: 'Captain Morgan Dark', price: '5.50', description: 'Rum escuro', image: '🥃' },
          { id: 'captainMorganSpiced', name: 'Captain Morgan Spiced', price: '5.00', description: 'Rum especiado', image: '🥃' },
          { id: 'malibu', name: 'Malibu', price: '4.50', description: 'Rum com coco', image: '🥥' }
        ]
      },
      {
        id: 'vodka',
        name: 'Vodka',
        items: [
          { id: 'moskovskaya', name: 'Moskovskaya', price: '4.50', description: 'Vodka russa', image: '🍸' },
          { id: 'eristoff', name: 'Eristoff', price: '4.50', description: 'Vodka', image: '🍸' },
          { id: 'absolut', name: 'Absolut', price: '5.00', description: 'Vodka sueca', image: '🍸' },
          { id: 'greyGoose', name: 'Grey Goose', price: '9.00', description: 'Vodka premium francesa', image: '🍸' }
        ]
      },
      {
        id: 'gin',
        name: 'Gin',
        items: [
          { id: 'gordons', name: 'Gordon\'s', price: '4.50', description: 'Gin clássico', image: '🍹' },
          { id: 'gordonsPink', name: 'Gordon\'s Pink', price: '5.00', description: 'Gin rosa', image: '🍹' },
          { id: 'bombaySaphire', name: 'Bombay Saphire', price: '7.00', description: 'Gin premium', image: '🍹' },
          { id: 'hendricks', name: 'Hendrick\'s', price: '8.00', description: 'Gin escocês premium', image: '🍹' },
          { id: 'tanqueray', name: 'Tanqueray', price: '7.00', description: 'Gin inglês', image: '🍹' },
          { id: 'nordes', name: 'Nordés', price: '9.00', description: 'Gin galego premium', image: '🍹' }
        ]
      },
      {
        id: 'whiskyWhiskey',
        name: 'Whisky & Whiskey',
        items: [
          { id: 'jameson', name: 'Jameson', price: '4.50', description: 'Irish whiskey', image: '🥃' },
          { id: 'bushmills', name: 'Bushmills', price: '5.00', description: 'Irish whiskey', image: '🥃' },
          { id: 'bushmillsBlackBush', name: 'Bushmills Black Bush', price: '6.00', description: 'Irish whiskey premium', image: '🥃' },
          { id: 'bushmills10', name: 'Bushmills 10', price: '7.50', description: 'Irish whiskey 10 anos', image: '🥃' },
          { id: 'grants', name: 'Grant\'s', price: '4.50', description: 'Scotch whisky', image: '🥃' },
          { id: 'famousGrouse', name: 'The Famous Grouse', price: '4.50', description: 'Scotch whisky', image: '🥃' },
          { id: 'jb', name: 'JB', price: '4.50', description: 'Scotch whisky', image: '🥃' },
          { id: 'cuttySark', name: 'Cutty Sark', price: '4.50', description: 'Scotch whisky', image: '🥃' },
          { id: 'johnieWalkerRed', name: 'Jonhie Walker Red Label', price: '5.00', description: 'Scotch whisky', image: '🥃' },
          { id: 'johnieWalkerBlack', name: 'Johnie Walker Black Label', price: '7.00', description: 'Scotch whisky premium', image: '🥃' },
          { id: 'jackDaniels', name: 'Jack Daniel\'s', price: '6.00', description: 'Tennessee whiskey', image: '🥃' },
          { id: 'jackDanielsHoney', name: 'Jack Daniel\'s Honey', price: '6.00', description: 'Whiskey com mel', image: '🥃' },
          { id: 'jackDanielsApple', name: 'Jack Daniel\'s Apple', price: '6.00', description: 'Whiskey com maçã', image: '🥃' },
          { id: 'jackDanielsFire', name: 'Jack Daniels Fire', price: '6.00', description: 'Whiskey com canela', image: '🥃' },
          { id: 'logan', name: 'Logan', price: '5.00', description: 'Scotch whisky', image: '🥃' },
          { id: 'cardhu', name: 'Cardhu', price: '9.00', description: 'Single malt scotch premium', image: '🥃' }
        ]
      },
      {
        id: 'tequila',
        name: 'Tequila',
        items: [
          { id: 'joseCuervoGold', name: 'José Cuervo Gold', price: '5.00', description: 'Tequila reposado', image: '🌵' },
          { id: 'joseCuervoSilver', name: 'José Cuervo Silver', price: '5.00', description: 'Tequila branco', image: '🌵' },
          { id: 'sierra', name: 'Sierra', price: '4.50', description: 'Tequila', image: '🌵' },
          { id: 'fiesta', name: 'Fiesta', price: '4.00', description: 'Tequila', image: '🌵' }
        ]
      }
    ]
  },
  {
    id: 'liqueurs',
    name: 'Licores & Cremes',
    subcategories: [
      {
        id: 'licoresNacionais',
        name: 'Licores Nacionais',
        items: [
          { id: 'amendoaAmarga', name: 'Amêndoa Amarga', price: '2.50', description: 'Licor português', image: '🌰' },
          { id: 'licorBeirao', name: 'Licor Beirão', price: '3.00', description: 'Licor português tradicional', image: '🌿' },
          { id: 'licorBeiraoHonra', name: 'Licor Beirão D\'honra', price: '4.50', description: 'Licor Beirão premium', image: '🌿' },
          { id: 'licor35', name: 'Licor 35', price: '3.80', description: 'Licor de Pastel de Nata', image: '🍫' }
        ]
      },
      {
        id: 'cremesLicores',
        name: 'Cremes & Licores Internacionais',
        items: [
          { id: 'baileys', name: 'Baileys', price: '4.00', description: 'Creme irlandês', image: '🥛' },
          { id: 'carolans', name: 'Carolans', price: '4.50', description: 'Creme irlandês', image: '🥛' },
          { id: 'macieiraCream', name: 'Macieira Cream', price: '4.00', description: 'Licor cremoso', image: '🍎' },
          { id: 'macieiraCreamCaramelo', name: 'Maciera Cream Caramelo Salgado', price: '4.50', description: ' Cremoso com caramelo salgado', image: '🍮' },
          { id: 'disaronno', name: 'Disaronno', price: '5.00', description: 'Licor italiano de amêndoa', image: '🌰' },
          { id: 'drambuie', name: 'Drambuie', price: '6.00', description: 'Licor escocês de whisky', image: '🍯' }
        ]
      },
      {
        id: 'licoresEspeciais',
        name: 'Licores Especiais',
        items: [
          { id: 'tripleSec', name: 'Triple Sec', price: '3.50', description: 'Licor de laranja', image: '🍊' },
          { id: 'jagermeister', name: 'Jagermeister', price: '5.00', description: 'Licor alemão de ervas', image: '🦌' },
          { id: 'pisang', name: 'Pisang', price: '3.50', description: 'Licor de banana', image: '🍌' },
          { id: 'sambuca', name: 'Sambuca', price: '3.50', description: 'Licor de anis', image: '🌱' },
          { id: 'tijuana', name: 'Tijuana', price: '4.50', description: 'Licor de café', image: '☕' }
        ]
      }
    ]
  },
  {
    id: 'aperitifs',
    name: 'Aperitivos & Vinhos',
    subcategories: [
      {
        id: 'aperitivos',
        name: 'Aperitivos',
        items: [
          { id: 'aperol', name: 'Aperol', price: '5.00', description: 'Aperitivo italiano', image: '🍊' },
          { id: 'campari', name: 'Campari', price: '5.00', description: 'Aperitivo italiano', image: '🍒' },
          { id: 'ricard', name: 'Ricard', price: '2.30', description: 'Pastis francês', image: '🌿' },
          { id: 'martiniRosso', name: 'Martini Rosso', price: '2.50', description: 'Vermute vermelho', image: '🍷' },
          { id: 'martiniBianco', name: 'Martini Bianco', price: '2.50', description: 'Vermute branco', image: '🍸' },
          { id: 'martiniExtraDry', name: 'Martini Extra Dry', price: '2.50', description: 'Vermute seco', image: '🍸' },
          { id: 'martiniFiero', name: 'Martini Fiero', price: '2.50', description: 'Vermute com laranja', image: '🍊' }
        ]
      },
      {
        id: 'aguardentes',
        name: 'Aguardentes & Brandies',
        items: [
          { id: 'marthas', name: 'Martha\'s', price: '4.50', description: 'Aguardente', image: '🍾' },
          { id: 'mosca', name: 'Mosca', price: '6.00', description: 'Aguardente vínica', image: '🍇' },
          { id: 'crf', name: 'CRF', price: '4.80', description: 'Aguardente velha', image: '🏺' },
          { id: '1920', name: '1920', price: '3.50', description: 'Aguardente', image: '🍾' },
          { id: 'macieira', name: 'Macieira', price: '4.00', description: 'Aguardente vínica', image: '🍎' }
        ]
      },
      {
        id: 'vinhosPorto',
        name: 'Vinhos do Porto & Generosos',
        items: [
          { id: 'croft', name: 'Croft', price: '3.50', description: 'Vinho do Porto', image: '🍾' },
          { id: 'portoVelhotes', name: 'Vinho Porto Velhotes', price: '2.50', description: 'Vinho do Porto tinto', image: '🍷' },
          { id: 'portoFerreiraBranco', name: 'Vinho Porto Ferreira Branco', price: '2.50', description: 'Vinho do Porto branco', image: '🍷' },
          { id: 'favaios', name: 'Favaios', price: '2.00', description: 'Vinho moscatel', image: '🍇' },
          { id: 'favaitos', name: 'Favaitos', price: '2.00', description: 'Vinho moscatel', image: '🍇' },
          { id: 'ponche', name: 'Ponche', price: '2.50', description: 'Bebida alcoólica', image: '🍹' }
        ]
      },
      {
        id: 'vinhos',
        name: 'Vinhos',
        items: [
          { id: 'vinhoTintoCopo', name: 'Vinho Tinto (Copo 1.75cl)', price: '2.00', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoBrancoCopo', name: 'Vinho Branco (Copo 1.75cl)', price: '2.00', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoTintoPiano', name: 'Piano Tinto', price: '13.00', description: 'Garrafa', image: '🍷' },
          { id: 'vinhoTintoMonsaraz', name: 'Monsaraz Tinto', price: '9.50', description: 'Garrafa', image: '🍷' },
          { id: 'vinhoTintoMonteVelho', name: 'Monte Velho Tinto', price: '11.00', description: 'Garrafa', image: '🍷' },
          { id: 'vinhoTintoMontesErmos', name: 'Montes Ermos Tinto', price: '10.00', description: 'Garrafa', image: '🍷' },
          { id: 'vinhoBrancoPiano', name: 'Piano Branco', price: '13.00', description: 'Garrafa', image: '🍷' },
          { id: 'vinhoBrancoMonteVelho', name: 'Monte Velho Branco', price: '11.00', description: 'Garrafa', image: '🍷' },
          { id: 'vinhoBrancoRealLavrador', name: 'Real Lavrador Branco', price: '7.00', description: 'Garrafa', image: '🍷' }
        ]
      }
    ]
  },
  {
    id: 'cocktails',
    name: 'Cocktails',
    subcategories: [
      {
        id: 'cocktailsClassicos',
        name: 'Cocktails Clássicos',
        items: [
          { id: 'longIslandIcedTea', name: 'Long Island Iced Tea', price: '9.00', description: 'Vodka, rum, gin, tequila, triple sec, limão', image: '🍹' },
          { id: 'jogralIcedTea', name: 'Jogral Iced Tea', price: '9.00', description: 'Cocktail especial da casa', image: '🍹' },
          { id: 'negroni', name: 'Negroni', price: '7.00', description: 'Gin, Campari, vermute', image: '🍸' },
          { id: 'batidaRosa', name: 'Batida Rosa', price: '6.00', description: 'Vodka, frutos vermelhos', image: '🍹' },
          { id: 'whiskySour', name: 'Whisky Sour', price: '7.00', description: 'Whisky, limão, açúcar', image: '🥃' },
          { id: 'mojito', name: 'Mojito', price: '6.00', description: 'Rum, hortelã, lima, açúcar', image: '🍹' },
          { id: 'mojitoFrutosVermelhos', name: 'Mojito Frutos Vermelhos', price: '7.00', description: 'Mojito com frutos vermelhos', image: '🍹' },
          { id: 'aperolSpritz', name: 'Aperol Spritz', price: '7.00', description: 'Aperol, prosecco, soda', image: '🍊' },
          { id: 'aperolFantastic', name: 'Aperol Fantastic', price: '7.00', description: 'Aperol especial', image: '🍊' },
          { id: 'jogralRainbow', name: 'Jogral Rainbow', price: '6.00', description: 'Cocktail colorido da casa', image: '🌈' },
          { id: 'nuclearBeast', name: 'Nuclear Beast', price: '12.00', description: 'Cocktail forte especial', image: '☢️' },
          { id: 'jagerCream', name: 'Jager Cream', price: '6.00', description: 'Jagermeister com creme', image: '🦌' },
          { id: 'jackKnife', name: 'Jack Knife', price: '7.00', description: 'Jack Daniel\'s especial', image: '🔪' },
          { id: 'moscowMule', name: 'Moscow Mule', price: '7.00', description: 'Vodka, ginger beer, limão', image: '🍹' },
          { id: 'sexOnTheBar', name: 'Sex On The Bar', price: '7.00', description: 'Vodka, licores, frutos', image: '🍹' },
          { id: 'operator', name: 'Operator', price: '5.00', description: 'Cocktail especial', image: '🍸' },
          { id: 'jdOperator', name: 'JD Operator', price: '7.00', description: 'Jack Daniel\'s Operator', image: '🍸' },
          { id: 'cubaLibre', name: 'Cuba Libre', price: '6.00', description: 'Rum, coca-cola, limão', image: '🍹' },
          { id: 'margarita', name: 'Margarita', price: '7.00', description: 'Tequila, triple sec, lima', image: '🍹' },
          { id: 'expressoMartini', name: 'Expresso Martini', price: '7.00', description: 'Vodka, café, licor de café', image: '☕' },
          { id: 'caipirinha', name: 'Caipirinha', price: '5.00', description: 'Cachaça, lima, açúcar', image: '🍹' },
          { id: 'caipiroska', name: 'Caipiroska', price: '5.00', description: 'Vodka, lima, açúcar', image: '🍹' },
          { id: 'caipiblack', name: 'Caipiblack', price: '5.00', description: 'Whisky, lima, açúcar', image: '🍹' }
        ]
      },
      {
        id: 'sangrias',
        name: 'Sangrias',
        items: [
          { id: 'sangriaTropicalTinta', name: 'Sangria Tropical 1L - Tinta', price: '11.00', description: 'Sangria de vinho tinto', image: '🍷' },
          { id: 'sangriaTropicalBranca', name: 'Sangria Tropical 1L - Branca', price: '11.00', description: 'Sangria de vinho branco', image: '🍷' },
          { id: 'sangriaEspumante', name: 'Sangria Espumante 1L - Frutos Vermelhos', price: '13.00', description: 'Sangria de espumante', image: '🍾' }
        ]
      },
      {
        id: 'ginTonics',
        name: 'Gin & Tonics',
        items: [
          { id: 'ginTonicGordons', name: 'Gin Tónico Gordon\'s', price: '6.00', description: 'Gordon\'s com tónica', image: '🍸' },
          { id: 'ginTonicBombay', name: 'Gin Tónico Bombay', price: '8.00', description: 'Bombay Saphire com tónica premium', image: '🍸' },
          { id: 'ginTonicHendricks', name: 'Gin Tónico Hendrick\'s', price: '9.00', description: 'Hendrick\'s com tónica premium', image: '🍸' },
          { id: 'ginTonicNordes', name: 'Gin Tónico Nordés', price: '10.00', description: 'Nordés com tónica premium', image: '🍸' }
        ]
      }
    ]
  }
];

export const FOOTER_TEXT = "Scan QR code to view menu";