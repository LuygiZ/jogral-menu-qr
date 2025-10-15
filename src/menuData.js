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
          { id: 'espresso', name: 'Espresso', price: '1.20', description: 'Café expresso', image: '☕' },
          { id: 'cafeDuplo', name: 'Café Duplo', price: '1.80', description: 'Expresso duplo', image: '☕' },
          { id: 'meiaDeLeite', name: 'Meia de Leite', price: '1.50', description: 'Café com leite', image: '☕' },
          { id: 'galao', name: 'Galão', price: '1.80', description: 'Café com muito leite', image: '☕' },
          { id: 'cappuccino', name: 'Cappuccino', price: '2.50', description: 'Café italiano', image: '☕' },
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
        { id: 'bruschettaChourico', name: 'Chouriço', price: '3.00', description: '', image: '🌶️' },
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
        id: 'refrigerantes',
        name: 'Refrigerantes',
        items: [
          { id: 'cocaCola', name: 'Coca-Cola', price: '2.00', description: '33cl', image: '🥤' },
          { id: 'cocaColaZero', name: 'Coca-Cola Zero', price: '2.00', description: '33cl', image: '🥤' },
          { id: 'fanta', name: 'Fanta Laranja', price: '2.00', description: '33cl', image: '🥤' },
          { id: 'sprite', name: 'Sprite', price: '2.00', description: '33cl', image: '🥤' },
          { id: 'iceTea', name: 'Ice Tea', price: '2.00', description: 'Pêssego ou Limão', image: '🧃' },
          { id: 'agua', name: 'Água', price: '1.50', description: 'Com ou sem gás', image: '💧' }
        ]
      },
      {
        id: 'sumos',
        name: 'Sumos',
        items: [
          { id: 'sumoNatural', name: 'Sumo Natural', price: '3.50', description: 'Laranja', image: '🍊' },
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
          { id: 'vinhoTintoCopo', name: 'Vinho Tinto (Copo)', price: '2.50', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoBrancoCopo', name: 'Vinho Branco (Copo)', price: '2.50', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoVerdeCopo', name: 'Vinho Verde (Copo)', price: '2.50', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoTintoGarrafa', name: 'Vinho Tinto (Garrafa)', price: '12.00', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoBrancoGarrafa', name: 'Vinho Branco (Garrafa)', price: '12.00', description: 'Vinho da casa', image: '🍷' },
          { id: 'vinhoVerdeGarrafa', name: 'Vinho Verde (Garrafa)', price: '12.00', description: 'Vinho da casa', image: '🍷' }
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
          { id: 'mojito', name: 'Mojito', price: '8.00', description: 'Rum, hortelã, lima, açúcar', image: '🍹' },
          { id: 'caipirinha', name: 'Caipirinha', price: '7.00', description: 'Cachaça, lima, açúcar', image: '🍹' },
          { id: 'pinaColada', name: 'Piña Colada', price: '8.00', description: 'Rum, coco, ananás', image: '🍹' },
          { id: 'sexOnTheBeach', name: 'Sex on the Beach', price: '8.00', description: 'Vodka, pêssego, arando', image: '🍹' },
          { id: 'cosmopolitan', name: 'Cosmopolitan', price: '8.50', description: 'Vodka, triple sec, arando', image: '🍸' },
          { id: 'margarita', name: 'Margarita', price: '8.00', description: 'Tequila, triple sec, lima', image: '🍹' }
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