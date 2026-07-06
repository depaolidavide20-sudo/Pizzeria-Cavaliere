const SITE_CONFIG = {
  whatsappNumber: "393272904692",
  phoneDisplay: "+39 327 290 4692",
  phoneHref: "+393272904692",
  landlineDisplay: "0185 1870697",
  landlineHref: "+3901851870697",
  address: "Via Roma, 16A, 16038 Santa Margherita Ligure GE",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Via%20Roma%2016A%2C%2016038%20Santa%20Margherita%20Ligure%20GE&output=embed",
  mapsUrl:
    "https://google.com/maps?rlz=1C5CHFA_enIT984IT984&gs_lcrp=EgZjaHJvbWUqEggBEC4YDRivARjHARiABBiOBTIGCAAQRRg5MhIIARAuGA0YrwEYxwEYgAQYjgUyEggCEC4YDRivARjHARiABBiOBTIPCAMQLhgNGK8BGMcBGIAEMgkIBBAAGA0YgAQyFQgFEC4YDRivARjHARiABBiYBRiZBTISCAYQLhgNGK8BGMcBGIAEGI4FMhIIBxAuGA0YrwEYxwEYgAQYjgUyDwgIEC4YDRivARjHARiABNIBCDY3MTFqMGo3qAIIsAIB8QWgtoRdcBxlWA&um=1&ie=UTF-8&fb=1&gl=it&sa=X&geocode=KTMHSCpzodQSMbjfLZUfFca8&daddr=Via+Roma,+16A,+16038+Santa+Margherita+Ligure+GE",
  reviewUrl:
    "https://www.google.com/search?sca_esv=b24d33f0b7e2f9cd&rlz=1C5CHFA_enIT984IT984&sxsrf=APpeQnvwmi_Ox0LK7ClciLVb__wiKGvn5A:1782482810232&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_39PTdUtub1kL37DnJJTAouXCMOYnDdFDCaLqI4m-M9SZz38zlhLe0WV87wRUi78VIb6uUz8oidrsETd2EL8me_Du-86EFlveLRb5JOK2t8iF1e_gA%3D%3D&q=Pizzeria+Kebab+Cavaliere+Recensioni&sa=X&ved=2ahUKEwjW7eL1iaWVAxXpRv4FHRe9AYoQ0bkNegQINRAF&biw=748&bih=707&dpr=2",
};

const DELIVERY_ZONES = {
  santa: {
    name: "Santa Margherita Ligure",
    nameEn: "Santa Margherita Ligure",
    minimum: 13,
    fee: 1.5,
  },
  golfo: {
    name: "Rapallo, San Lorenzo, Paraggi o Portofino",
    nameEn: "Rapallo, San Lorenzo, Paraggi or Portofino",
    minimum: 25,
    fee: 3,
  },
};

const CATEGORY_LABELS = {
  it: {
    personalizzata: "Crea la tua pizza",
    pizze: "Pizze",
    bianche: "Pizze bianche",
    forno: "Calzoni e focacce",
    cucina: "Cucina",
    panini: "Panini e hamburger",
    kebab: "Kebab",
    bevande: "Bevande",
  },
  en: {
    personalizzata: "Create your pizza",
    pizze: "Pizzas",
    bianche: "White pizzas",
    forno: "Calzones & focaccia",
    cucina: "Kitchen",
    panini: "Sandwiches & burgers",
    kebab: "Kebab",
    bevande: "Drinks",
  },
};

const STATIC_TRANSLATIONS = {
  "Vai al contenuto": "Skip to content",
  "Pizza artigianale · Asporto · Prenotazioni": "Artisan pizza · Takeaway · Reservations",
  "Menù": "Menu",
  "I nostri prodotti": "Our food",
  "Prodotti": "Food",
  "Recensioni": "Reviews",
  "Contatti": "Contact",
  "Ordina": "Order",
  "Pizzeria a Santa Margherita Ligure": "Pizzeria in Santa Margherita Ligure",
  "Pizza elegante, fatta con carattere.": "Elegant pizza, made with character.",
  "Impasto curato, ingredienti selezionati e un servizio pensato per farti ordinare in pochi secondi: guarda il menù e invia la richiesta direttamente su WhatsApp.": "Carefully made dough, selected ingredients and a service designed to let you order in seconds: browse the menu and send your request directly on WhatsApp.",
  "Guarda il menù": "View the menu",
  "Trova il locale": "Find us",
  "Apri il menù": "Open the menu",
  "Scegli cosa portare in tavola.": "Choose what to bring to the table.",
  "Una selezione ordinata per rendere la scelta immediata: classiche, specialità, sapori liguri ed extra da aggiungere all'ordine.": "A clear selection for an easy choice: classics, specialities, Ligurian flavours and extras for your order.",
  "Prima di ordinare": "Before ordering",
  "Come vuoi ricevere la tua pizza?": "How would you like your pizza?",
  "Ritiro in pizzeria": "Pick up at the pizzeria",
  "Passa all'orario concordato.": "Collect it at the agreed time.",
  "Consegna a domicilio": "Home delivery",
  "Scrivi l'indirizzo nelle note.": "Add your address in the notes.",
  "Inserisci l'indirizzo nel carrello.": "Enter your address in the cart.",
  "Consegne a domicilio": "Home delivery",
  "Ordine minimo calcolato sui prodotti.": "Minimum order calculated on food and drinks.",
  "Minimo €13 · Consegna €1,50": "Minimum €13 · Delivery €1.50",
  "Rapallo, San Lorenzo, Paraggi e Portofino": "Rapallo, San Lorenzo, Paraggi and Portofino",
  "Minimo €25 · Consegna €3": "Minimum €25 · Delivery €3",
  "Prenotazione tavolo": "Table reservation",
  "Indica orario e persone.": "Tell us the time and party size.",
  "Scegli una modalità prima di inviare l'ordine.": "Choose an option before sending your request.",
  "Crea la tua pizza": "Create your pizza",
  "Componi la tua pizza": "Build your pizza",
  "Scegli la base che preferisci e aggiungi i tuoi ingredienti.": "Choose your preferred base and add your ingredients.",
  "Componi": "Build",
  "Base scelta": "Selected base",
  "Scegli gli ingredienti": "Choose your ingredients",
  "Puoi aggiungere tutti gli extra che desideri.": "Add as many extras as you like.",
  "Azzera": "Clear",
  "Prezzo della pizza": "Pizza price",
  "Aggiungi al carrello": "Add to cart",
  "Chiudi il configuratore": "Close the pizza builder",
  "Tutto": "All",
  "Pizze": "Pizzas",
  "Pizze bianche": "White pizzas",
  "Calzoni e focacce": "Calzones & focaccia",
  "Cucina": "Kitchen",
  "Panini": "Sandwiches",
  "Bevande": "Drinks",
  "Per allergie, intolleranze, variazioni o richieste speciali, scrivilo nelle note prima di aprire WhatsApp.": "For allergies, intolerances, changes or special requests, add a note before opening WhatsApp.",
  "Pronto per ordinare?": "Ready to order?",
  "Aggiungi i prodotti, scegli la modalità e invia l'ordine direttamente alla pizzeria.": "Add your items, choose an option and send the order directly to the pizzeria.",
  "Apri il carrello": "Open cart",
  "Buono, fatto da noi.": "Good food, made by us.",
  "Impasti curati, farciture generose e prodotti preparati al momento.": "Carefully made dough, generous fillings and food prepared to order.",
  "Pizza, focacce e specialità per ogni gusto.": "Pizza, focaccia and specialities for every taste.",
  "Da Pizzeria Cavaliere, pizzeria a Santa Margherita Ligure, trovi pizze artigianali rosse e bianche, calzoni e focacce tipo Recco preparati con impasti curati e farciture generose.": "At Pizzeria Cavaliere in Santa Margherita Ligure, you will find artisan red and white pizzas, calzones and Recco-style focaccia made with carefully prepared dough and generous fillings.",
  "Il menù unisce le pizze classiche alle specialità con pesto, stracchino e mozzarella di bufala, insieme a fritto di calamari, panini, hamburger, kebab, falafel e bevande. Puoi scegliere il ritiro in pizzeria, la consegna a domicilio o prenotare un tavolo direttamente tramite WhatsApp.": "The menu brings together classic pizzas and specialities with pesto, stracchino and buffalo mozzarella, alongside fried calamari, sandwiches, burgers, kebab, falafel and drinks. Choose pickup, home delivery or reserve a table directly through WhatsApp.",
  "Impasti fragranti e leggeri": "Fragrant, light dough",
  "Farciture riconoscibili": "Honest, recognisable fillings",
  "Servizio chiaro e veloce": "Clear, quick service",
  "Cosa dicono di noi": "What our customers say",
  "Le esperienze di chi ha già scelto Cavaliere.": "Experiences shared by Cavaliere customers.",
  "“Impasto leggero, pizza ben cotta e ingredienti davvero buoni. Perfetta anche da asporto.”": "“Light dough, perfectly baked pizza and truly good ingredients. Excellent for takeaway too.”",
  "“Servizio rapido e gentile. Le specialità con pesto e stracchino meritano.”": "“Quick, friendly service. The pesto and stracchino specialities are well worth trying.”",
  "“Locale curato, pizza saporita e ordine facile. Una garanzia a Santa Margherita.”": "“A welcoming place, tasty pizza and easy ordering. A reliable choice in Santa Margherita.”",
  "Cliente": "Customer",
  "Recensione online": "Online review",
  "Hai mangiato da Cavaliere?": "Have you eaten at Cavaliere?",
  "Racconta la tua esperienza e aiuta altri clienti a sceglierci.": "Share your experience and help other customers choose us.",
  "Lascia una recensione": "Leave a review",
  "Vieni a trovarci": "Come and see us",
  "Indirizzo": "Address",
  "Telefono": "Phone",
  "Orari": "Hours",
  "Lunedì – Sabato": "Monday – Saturday",
  "Domenica": "Sunday",
  "Ordina dal menù": "Order from the menu",
  "Chiama": "Call",
  "Contenuto esterno": "External content",
  "Vuoi visualizzare Google Maps?": "Would you like to view Google Maps?",
  "La mappa viene caricata solo dopo il tuo consenso. Google potrebbe trattare dati tecnici e installare cookie secondo la propria informativa.": "The map loads only after your consent. Google may process technical data and set cookies under its own policy.",
  "Acconsento al caricamento di Google Maps.": "I consent to loading Google Maps.",
  "Accetta e mostra la mappa": "Accept and show the map",
  "Leggi la Cookie policy": "Read the Cookie policy",
  "Apri indicazioni": "Open directions",
  "Privacy e mappa": "Privacy and map",
  "Vuoi attivare Google Maps?": "Would you like to enable Google Maps?",
  "La mappa è bloccata per impostazione predefinita. Accettando, Google Maps potrà usare cookie o altri identificatori tecnici secondo la propria informativa.": "The map is blocked by default. If you accept, Google Maps may use cookies or other technical identifiers under its own policy.",
  "Continua senza mappa": "Continue without the map",
  "Accetta e attiva la mappa": "Accept and enable the map",
  "Il tuo ordine": "Your order",
  "Carrello": "Cart",
  "Il tuo ordine.": "Your order.",
  "Il carrello è ancora vuoto.": "Your cart is still empty.",
  "Scegli un prodotto dal menù per iniziare.": "Choose an item from the menu to get started.",
  "Vai al menù": "Go to the menu",
  "Modalità": "Option",
  "Nessuna modalità selezionata": "No option selected",
  "Come vuoi ricevere l'ordine?": "How would you like your order?",
  "Ritiro": "Pickup",
  "Consegna": "Delivery",
  "Tavolo": "Table",
  "Scegli una modalità per continuare.": "Choose an option to continue.",
  "Quando?": "When?",
  "Appena possibile": "As soon as possible",
  "Tra circa 30 minuti": "In about 30 minutes",
  "Tra circa 45 minuti": "In about 45 minutes",
  "Orario da concordare": "Time to be agreed",
  "Dettagli della richiesta": "Request details",
  "Indirizzo di consegna": "Delivery address",
  "Zona di consegna": "Delivery area",
  "Scegli la località": "Choose the area",
  "Santa Margherita Ligure — minimo €13 · consegna €1,50": "Santa Margherita Ligure — minimum €13 · delivery €1.50",
  "Rapallo, San Lorenzo, Paraggi o Portofino — minimo €25 · consegna €3": "Rapallo, San Lorenzo, Paraggi or Portofino — minimum €25 · delivery €3",
  "Seleziona la zona per verificare minimo d'ordine e costo di consegna.": "Choose the area to check the minimum order and delivery fee.",
  "Costo di consegna": "Delivery fee",
  "Totale": "Total",
  "Acconsento all'apertura di WhatsApp e al trasferimento dei dati inseriti al servizio esterno. Ho letto la": "I consent to opening WhatsApp and transferring the entered data to the external service. I have read the",
  "Acconsento all'apertura di WhatsApp e ho letto la": "I consent to opening WhatsApp and have read the",
  "Invia richiesta su WhatsApp": "Send request on WhatsApp",
  "La richiesta è confermata solo dopo risposta della pizzeria.": "The request is confirmed only after the pizzeria replies.",
  "Aggiunto all'ordine": "Added to your order",
};

const MENU_NAME_EN = {
  cotto: "Cooked ham",
  crudo: "Cured ham",
  funghi: "Mushrooms",
  "braccio-ferro": "Popeye",
  salsiccia: "Sausage",
  "tonno-cipolla": "Tuna and onion",
  "pizza-cavaliere": "Cavaliere Pizza",
  "quattro-stagioni": "Four Seasons",
  verdure: "Vegetables",
  "frutti-mare": "Seafood",
  biancaneve: "Snow White",
  "quattro-formaggi": "Four Cheese",
  "zola-trevisana": "Gorgonzola and radicchio",
  "calzone-fritto": "Fried calzone",
  "calzone-farcito": "Stuffed calzone",
  "focaccia-recco": "Recco-style focaccia",
  "focaccia-formaggi": "Four-cheese focaccia",
  "recco-cotto": "Recco focaccia with cooked ham",
  "recco-crudo": "Recco focaccia with cured ham",
  "insalata-mista": "Mixed salad",
  caprese: "Caprese salad",
  "milanese-patatine": "Milanese cutlet with fries",
  "fritto-calamari": "Fried calamari",
  "acciughe-impanate": "Breaded anchovies",
  "bocconcini-pollo": "Chicken bites",
  patatine: "French fries",
  "panino-chicken": "Chicken sandwich",
  "panino-fajita": "Fajita sandwich",
  "panino-salsiccia": "Sausage sandwich",
  "doppio-cheeseburger": "Double cheeseburger",
  "panino-kebab": "Kebab sandwich",
  "piadina-kebab": "Kebab wrap",
  falafel: "Chickpea falafel",
  "piatto-kebab": "Kebab plate",
  "acqua-50": "Still or sparkling water",
  "acqua-grande": "Still or sparkling water",
  "fuze-limone": "Lemon Fuze Tea",
  "fuze-pesca": "Peach Fuze Tea",
  "birra-33": "Beer 33 cl",
  "birra-66": "Beer 66 cl",
};

const DESCRIPTION_OVERRIDES_EN = {
  "Focaccia con stracchino.": "Focaccia with stracchino cheese.",
  "Focaccia tipo Recco con prosciutto cotto.": "Recco-style focaccia with cooked ham.",
  "Focaccia tipo Recco con prosciutto crudo.": "Recco-style focaccia with cured ham.",
  "Cotoletta alla milanese con patatine fritte.": "Milanese-style breaded cutlet with fries.",
  "Calamari fritti, preparati al momento.": "Fried calamari, cooked to order.",
  "Acciughe impanate e fritte.": "Breaded and fried anchovies.",
  "Bocconcini di pollo dorati.": "Golden chicken bites.",
  "Patatine fritte croccanti.": "Crispy French fries.",
  "Bottiglia da 50 cl.": "50 cl bottle.",
  "Bottiglia grande.": "Large bottle.",
  "Lattina da 33 cl.": "33 cl can.",
  "Tè freddo al limone.": "Lemon iced tea.",
  "Tè freddo alla pesca.": "Peach iced tea.",
  "Birra in bottiglia da 33 cl.": "33 cl bottled beer.",
  "Birra in bottiglia da 66 cl.": "66 cl bottled beer.",
};

const DESCRIPTION_TERMS_EN = [
  ["Pomodoro fresco", "Fresh tomato"], ["Pomodoro", "Tomato"], ["pomodoro", "tomato"],
  ["mozzarella di bufala", "buffalo mozzarella"], ["doppia mozzarella", "extra mozzarella"],
  ["prosciutto cotto", "cooked ham"], ["prosciutto crudo", "cured ham"],
  ["salame piccante", "spicy salami"], ["salame dolce", "mild salami"],
  ["insalata trevigiana", "radicchio"], ["carne kebab", "kebab meat"],
  ["pollo impanato", "breaded chicken"], ["alla piastra", "griddled"],
  ["salsa burger", "burger sauce"], ["frutti di mare", "seafood"],
  ["mozzarella", "mozzarella"], ["aglio", "garlic"], ["olio", "olive oil"],
  ["origano", "oregano"], ["funghi", "mushrooms"], ["acciughe", "anchovies"],
  ["uova", "eggs"], ["spinaci", "spinach"], ["olive", "olives"], ["capperi", "capers"],
  ["panna", "cream"], ["salsiccia", "sausage"], ["patatine", "fries"],
  ["würstel", "frankfurter"], ["tonno", "tuna"], ["cipolle", "onions"], ["cipolla", "onion"],
  ["carciofi", "artichokes"], ["rucola", "arugula"], ["grana", "Grana cheese"],
  ["peperoni", "peppers"], ["melanzane", "eggplant"], ["zucchine", "zucchini"],
  ["insalata", "lettuce"], ["patate", "potatoes"], ["fagiolini", "green beans"],
  ["formaggio", "cheese"], ["salse", "sauces"], ["maionese", "mayonnaise"],
];

const originalTextNodes = new WeakMap();

function normalizeText(value) {
  return value.trim().replace(/\s+/g, " ");
}

function t(value) {
  return state?.language === "en" ? (STATIC_TRANSLATIONS[value] || value) : value;
}

const twoSizes = (normal, maxi) => [
  { label: "Normale", price: normal },
  { label: "Maxi", price: maxi },
];
const onePrice = (price, label = "") => [{ label, price }];

const CUSTOM_PIZZA_BASES = [
  {
    id: "marinara",
    name: "Base Marinara",
    nameEn: "Marinara base",
    description: "Pomodoro, aglio, olio e origano.",
    descriptionEn: "Tomato, garlic, olive oil and oregano.",
    price: 5,
  },
  {
    id: "margherita",
    name: "Base Margherita",
    nameEn: "Margherita base",
    description: "Pomodoro e mozzarella.",
    descriptionEn: "Tomato and mozzarella.",
    price: 6,
  },
  {
    id: "bianca-mozzarella",
    name: "Base bianca con mozzarella",
    nameEn: "White base with mozzarella",
    description: "Mozzarella, senza salsa di pomodoro.",
    descriptionEn: "Mozzarella, without tomato sauce.",
    price: 5.5,
  },
];

const CUSTOM_PIZZA_INGREDIENTS = [
  { id: "gorgonzola", name: "Gorgonzola", nameEn: "Gorgonzola", price: 1.5 },
  { id: "stracchino", name: "Stracchino", nameEn: "Stracchino", price: 2 },
  { id: "bufala", name: "Mozzarella di bufala", nameEn: "Buffalo mozzarella", price: 2 },
  { id: "carciofi", name: "Carciofi", nameEn: "Artichokes", price: 1.5 },
  { id: "funghi", name: "Funghi", nameEn: "Mushrooms", price: 1.5 },
  { id: "salame-dolce", name: "Salame dolce", nameEn: "Mild salami", price: 2 },
  { id: "salame-piccante", name: "Salame piccante", nameEn: "Spicy salami", price: 2 },
  { id: "prosciutto-cotto", name: "Prosciutto cotto", nameEn: "Cooked ham", price: 2 },
  { id: "prosciutto-crudo", name: "Prosciutto crudo", nameEn: "Cured ham", price: 2 },
  { id: "salsiccia", name: "Salsiccia", nameEn: "Sausage", price: 2 },
  { id: "wurstel", name: "Würstel", nameEn: "Frankfurter", price: 1.5 },
  { id: "patatine", name: "Patatine", nameEn: "French fries", price: 1.5 },
  { id: "tonno", name: "Tonno", nameEn: "Tuna", price: 1.5 },
  { id: "cipolla", name: "Cipolla", nameEn: "Onion", price: 1 },
  { id: "uovo", name: "Uovo", nameEn: "Egg", price: 1 },
  { id: "peperoni", name: "Peperoni", nameEn: "Peppers", price: 1.5 },
  { id: "melanzana", name: "Melanzana", nameEn: "Eggplant", price: 1.5 },
  { id: "zucchine", name: "Zucchine", nameEn: "Zucchini", price: 1.5 },
  { id: "grana", name: "Grana", nameEn: "Grana cheese", price: 1 },
  { id: "rucola", name: "Rucola", nameEn: "Arugula", price: 1 },
  { id: "brie", name: "Brie", nameEn: "Brie", price: 1.5 },
  { id: "trevisana", name: "Trevisana", nameEn: "Radicchio", price: 1 },
  { id: "olive", name: "Olive", nameEn: "Olives", price: 1.5 },
  { id: "acciughe", name: "Acciughe", nameEn: "Anchovies", price: 1.5 },
  { id: "bresaola", name: "Bresaola", nameEn: "Bresaola", price: 2 },
  { id: "salsa-pomodoro", name: "Salsa di pomodoro", nameEn: "Tomato sauce", price: 1 },
  { id: "speck", name: "Speck", nameEn: "Speck", price: 2 },
  { id: "pesto", name: "Pesto", nameEn: "Pesto", price: 1.5 },
  { id: "mozzarella", name: "Mozzarella", nameEn: "Mozzarella", price: 2 },
  { id: "aglio-olio", name: "Aglio e olio", nameEn: "Garlic and oil", price: 0.4 },
  { id: "olio-oliva", name: "Olio d'oliva", nameEn: "Olive oil", price: 0.4 },
  { id: "origano", name: "Origano", nameEn: "Oregano", price: 0.3 },
  { id: "spinaci", name: "Spinaci", nameEn: "Spinach", price: 1.5 },
  { id: "capperi", name: "Capperi", nameEn: "Capers", price: 1 },
  { id: "panna", name: "Panna", nameEn: "Cream", price: 1 },
  { id: "frutti-mare", name: "Frutti di mare", nameEn: "Seafood", price: 2 },
  { id: "pomodoro-fresco", name: "Pomodoro fresco", nameEn: "Fresh tomato", price: 1 },
  { id: "carne-kebab", name: "Carne kebab", nameEn: "Kebab meat", price: 2 },
];

const MENU_ITEMS = [
  { id: "marinara", name: "Marinara", category: "pizze", description: "Pomodoro, aglio, olio e origano.", prices: twoSizes(5, 9) },
  { id: "margherita", name: "Margherita", category: "pizze", description: "Pomodoro e mozzarella.", prices: twoSizes(6, 10) },
  { id: "cotto", name: "Cotto", category: "pizze", description: "Pomodoro, mozzarella e prosciutto cotto.", prices: twoSizes(7, 11) },
  { id: "crudo", name: "Crudo", category: "pizze", description: "Pomodoro, mozzarella e prosciutto crudo.", prices: twoSizes(7.5, 12) },
  { id: "diavola", name: "Diavola", category: "pizze", description: "Pomodoro, mozzarella e salame piccante.", prices: twoSizes(7, 11) },
  { id: "bufala", name: "Bufala", category: "pizze", description: "Pomodoro, mozzarella e mozzarella di bufala.", prices: twoSizes(7.5, 12) },
  { id: "funghi", name: "Funghi", category: "pizze", description: "Pomodoro, mozzarella e funghi.", prices: twoSizes(7, 11) },
  { id: "milanese", name: "Milanese", category: "pizze", description: "Pomodoro, mozzarella e salame dolce.", prices: twoSizes(7, 11) },
  { id: "napoli", name: "Napoli", category: "pizze", description: "Pomodoro, mozzarella, acciughe e origano.", prices: twoSizes(7, 11) },
  { id: "braccio-ferro", name: "Braccio di ferro", category: "pizze", description: "Pomodoro, mozzarella, uova e spinaci.", prices: twoSizes(8, 12) },
  { id: "pioggia", name: "Pioggia", category: "pizze", description: "Pomodoro, mozzarella e doppia mozzarella.", prices: twoSizes(7, 11) },
  { id: "siciliana", name: "Siciliana", category: "pizze", description: "Pomodoro, mozzarella, olive, capperi e acciughe.", prices: twoSizes(8, 12) },
  { id: "speck", name: "Speck", category: "pizze", description: "Pomodoro o panna, mozzarella e speck.", prices: twoSizes(7.5, 12) },
  { id: "salsiccia", name: "Salsiccia", category: "pizze", description: "Pomodoro, mozzarella e salsiccia.", prices: twoSizes(7.5, 12) },
  { id: "stracchino", name: "Stracchino", category: "pizze", description: "Pomodoro, mozzarella e stracchino.", prices: twoSizes(7.5, 12) },
  { id: "americana", name: "Americana", category: "pizze", description: "Pomodoro, mozzarella, patatine e würstel.", prices: twoSizes(8, 12) },
  { id: "tonno-cipolla", name: "Tonno e cipolla", category: "pizze", description: "Pomodoro, mozzarella, tonno e cipolla.", prices: twoSizes(7.5, 11) },
  { id: "capricciosa", name: "Capricciosa", category: "pizze", description: "Pomodoro, mozzarella, carciofi, prosciutto cotto, olive e funghi.", prices: twoSizes(9, 13) },
  { id: "italia", name: "Italia", category: "pizze", description: "Pomodoro, mozzarella e pesto.", prices: twoSizes(8, 12) },
  { id: "pizza-cavaliere", name: "Pizza del Cavaliere", category: "pizze", description: "Pomodoro, mozzarella, bresaola, rucola e grana.", prices: twoSizes(9, 13) },
  { id: "quattro-stagioni", name: "4 Stagioni", category: "pizze", description: "Pomodoro, mozzarella, funghi, carciofi, prosciutto cotto e olive.", prices: twoSizes(9, 13) },
  { id: "tempesta", name: "Tempesta", category: "pizze", description: "Pomodoro, mozzarella, salame piccante, cipolla e aglio.", prices: twoSizes(9, 13) },
  { id: "verdure", name: "Verdure", category: "pizze", description: "Pomodoro, mozzarella, peperoni, melanzane e zucchine.", prices: twoSizes(9, 13) },
  { id: "frutti-mare", name: "Frutti di mare", category: "pizze", description: "Pomodoro, mozzarella e frutti di mare.", prices: twoSizes(9, 13) },
  { id: "pizza-kebab", name: "Pizza kebab", category: "pizze", description: "Pomodoro fresco, mozzarella, kebab, insalata, cipolla, patatine e salse.", prices: twoSizes(9, 13) },
  { id: "primavera", name: "Primavera", category: "pizze", description: "Pomodoro fresco, mozzarella di bufala, prosciutto crudo, grana e rucola.", prices: twoSizes(9, 13) },

  { id: "biancaneve", name: "Biancaneve", category: "bianche", description: "Mozzarella e stracchino.", prices: twoSizes(7, 10) },
  { id: "quattro-formaggi", name: "4 Formaggi", category: "bianche", description: "Mozzarella, stracchino, brie e gorgonzola.", prices: twoSizes(9, 13) },
  { id: "genovese", name: "Genovese", category: "bianche", description: "Pesto, mozzarella, patate e fagiolini.", prices: twoSizes(9, 13) },
  { id: "zola-trevisana", name: "Zola e trevisana", category: "bianche", description: "Mozzarella, gorgonzola e insalata trevigiana.", prices: twoSizes(8, 12) },

  { id: "calzone", name: "Calzone", category: "forno", description: "Pomodoro, mozzarella e prosciutto cotto.", prices: onePrice(7) },
  { id: "calzone-fritto", name: "Calzone fritto", category: "forno", description: "Pomodoro, mozzarella e prosciutto cotto.", prices: onePrice(8) },
  { id: "calzone-farcito", name: "Calzone farcito", category: "forno", description: "Pomodoro, prosciutto cotto, mozzarella, funghi, carciofi e olive.", prices: onePrice(9) },
  { id: "calzone-cavaliere", name: "Calzone Cavaliere", category: "forno", description: "Pomodoro, mozzarella, stracchino, olive e kebab.", prices: onePrice(9) },
  { id: "focaccia-recco", name: "Focaccia tipo Recco", category: "forno", description: "Focaccia con stracchino.", prices: onePrice(9) },
  { id: "focaccia-formaggi", name: "Focaccia 4 formaggi", category: "forno", description: "Mozzarella, stracchino, gorgonzola e brie.", prices: onePrice(10) },
  { id: "recco-cotto", name: "Recco e prosciutto cotto", category: "forno", description: "Focaccia tipo Recco con prosciutto cotto.", prices: onePrice(10) },
  { id: "recco-crudo", name: "Recco e prosciutto crudo", category: "forno", description: "Focaccia tipo Recco con prosciutto crudo.", prices: onePrice(10) },
  { id: "pizzata", name: "Pizzata", category: "forno", description: "Acciughe, capperi, origano e olive.", prices: onePrice(10) },

  { id: "insalata-mista", name: "Insalata mista", category: "cucina", description: "Insalata, pomodoro e olive.", prices: onePrice(6) },
  { id: "caprese", name: "Insalatona caprese", category: "cucina", description: "Pomodoro e mozzarella di bufala.", prices: onePrice(7) },
  { id: "milanese-patatine", name: "Milanese con patatine", category: "cucina", description: "Cotoletta alla milanese con patatine fritte.", prices: onePrice(8) },
  { id: "fritto-calamari", name: "Fritto di calamari", category: "cucina", description: "Calamari fritti, preparati al momento.", prices: onePrice(9) },
  { id: "acciughe-impanate", name: "Acciughe impanate", category: "cucina", description: "Acciughe impanate e fritte.", prices: onePrice(9) },
  { id: "bocconcini-pollo", name: "Bocconcini di pollo", category: "cucina", description: "Bocconcini di pollo dorati.", prices: onePrice(3) },
  { id: "patatine", name: "Patatine fritte", category: "cucina", description: "Patatine fritte croccanti.", prices: [{ label: "Mini", price: 2.5 }, { label: "Normale", price: 3.5 }] },

  { id: "panino-chicken", name: "Panino chicken", category: "panini", description: "Pollo impanato, insalata, pomodoro, cipolle, ketchup e maionese.", prices: onePrice(5) },
  { id: "panino-fajita", name: "Panino fajita", category: "panini", description: "Pollo, peperoni e cipolla alla piastra, insalata, pomodoro e salse.", prices: onePrice(7) },
  { id: "panino-salsiccia", name: "Panino con salsiccia", category: "panini", description: "Salsiccia, insalata, pomodoro, cipolle, ketchup e maionese.", prices: onePrice(6.5) },
  { id: "cheeseburger", name: "Cheeseburger", category: "panini", description: "Burger, formaggio, insalata, ketchup, maionese e salsa burger.", prices: onePrice(6) },
  { id: "doppio-cheeseburger", name: "Doppio cheeseburger", category: "panini", description: "Doppio burger, formaggio, insalata, ketchup, maionese e salsa burger.", prices: onePrice(8) },

  { id: "panino-kebab", name: "Panino kebab", category: "kebab", description: "Carne kebab, insalata, pomodoro, cipolla, patate e salse.", prices: onePrice(6.5) },
  { id: "piadina-kebab", name: "Piadina kebab", category: "kebab", description: "Carne kebab, insalata, pomodoro, cipolla, patate e salse.", prices: onePrice(6) },
  { id: "falafel", name: "Falafel di ceci", category: "kebab", description: "Falafel, insalata, pomodoro, cipolla, patate e salse.", prices: onePrice(6) },
  { id: "piatto-kebab", name: "Piatto kebab", category: "kebab", description: "Carne kebab, insalata, pomodoro, cipolla, patate e salse.", prices: onePrice(7) },

  { id: "acqua-50", name: "Acqua naturale o frizzante", category: "bevande", description: "Bottiglia da 50 cl.", prices: onePrice(1) },
  { id: "acqua-grande", name: "Acqua naturale o frizzante", category: "bevande", description: "Bottiglia grande.", prices: onePrice(2) },
  { id: "coca-cola", name: "Coca-Cola", category: "bevande", description: "Lattina da 33 cl.", prices: onePrice(2.5) },
  { id: "coca-zero", name: "Coca-Cola Zero", category: "bevande", description: "Lattina da 33 cl.", prices: onePrice(2.5) },
  { id: "fanta", name: "Fanta", category: "bevande", description: "Lattina da 33 cl.", prices: onePrice(2.5) },
  { id: "sprite", name: "Sprite", category: "bevande", description: "Lattina da 33 cl.", prices: onePrice(2.5) },
  { id: "fuze-limone", name: "Fuze Tea limone", category: "bevande", description: "Tè freddo al limone.", prices: onePrice(2.5) },
  { id: "fuze-pesca", name: "Fuze Tea pesca", category: "bevande", description: "Tè freddo alla pesca.", prices: onePrice(2.5) },
  { id: "birra-33", name: "Birra 33 cl", category: "bevande", description: "Birra in bottiglia da 33 cl.", prices: onePrice(3) },
  { id: "birra-66", name: "Birra 66 cl", category: "bevande", description: "Birra in bottiglia da 66 cl.", prices: onePrice(4) },
];

const state = {
  cart: createEmptyCart(),
  customCart: {},
  activeFilter: "pizze",
  orderMode: "",
  language: loadLanguage(),
  lastFocusedElement: null,
  customizerLastFocusedElement: null,
  customBaseId: "",
  customIngredientIds: new Set(),
};

const menuGrid = document.querySelector("#menuGrid");
const filterButtons = document.querySelectorAll("[data-filter]");
const cartShell = document.querySelector("#cartShell");
const cartDrawer = document.querySelector(".cart-drawer");
const cartItems = document.querySelector("#cartItems");
const emptyCart = document.querySelector("#emptyCart");
const cartFooter = document.querySelector("#cartFooter");
const cartTotal = document.querySelector("#cartTotal");
const checkout = document.querySelector("#whatsappCheckout");
const pickupTime = document.querySelector("#pickupTime");
const orderNotes = document.querySelector("#orderNotes");
const deliveryAddressField = document.querySelector("#deliveryAddressField");
const deliveryAddress = document.querySelector("#deliveryAddress");
const deliveryZone = document.querySelector("#deliveryZone");
const deliveryZoneNote = document.querySelector("#deliveryZoneNote");
const cartDeliveryFee = document.querySelector("#cartDeliveryFee");
const cartDeliveryFeeAmount = document.querySelector("#cartDeliveryFeeAmount");
const orderModeError = document.querySelector("#orderModeError");
const cartModeError = document.querySelector("#cartModeError");
const orderModeSummary = document.querySelector("#orderModeSummary strong");
const orderModeInputs = document.querySelectorAll("[data-order-mode-input]");
const cartOrderModeInputs = document.querySelectorAll('input[name="orderModeCart"]');
const languageButtons = document.querySelectorAll("[data-set-language]");
const whatsappConsent = document.querySelector("#whatsappConsent");
const mapConsent = document.querySelector("#mapConsent");
const mapConsentCheckbox = document.querySelector("#mapConsentCheckbox");
const enableMapButton = document.querySelector("#enableMap");
const mapPanel = document.querySelector("#mapPanel");
const mapContent = document.querySelector("#mapContent");
const mapCookieNotice = document.querySelector("#mapCookieNotice");
const acceptMapCookies = document.querySelector("#acceptMapCookies");
const declineMapCookies = document.querySelector("#declineMapCookies");
const toast = document.querySelector("#toast");
const customizerShell = document.querySelector("#customizerShell");
const customizerDialog = document.querySelector(".customizer-dialog");
const customizerTitle = document.querySelector("#customizerTitle");
const customizerBaseDescription = document.querySelector("#customizerBaseDescription");
const customizerBaseName = document.querySelector("#customizerBaseName");
const customizerBasePrice = document.querySelector("#customizerBasePrice");
const customizerIngredients = document.querySelector("#customizerIngredients");
const customizerTotal = document.querySelector("#customizerTotal");
const clearCustomIngredients = document.querySelector("#clearCustomIngredients");
const addCustomPizzaButton = document.querySelector("#addCustomPizza");
let toastTimeout;

function formatCurrency(value) {
  const locale = state.language === "en" ? "en-IE" : "it-IT";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(value);
}

function loadLanguage() {
  try {
    return localStorage.getItem("cavaliere-language") === "en" ? "en" : "it";
  } catch {
    return "it";
  }
}

function createEmptyCart() {
  try {
    localStorage.removeItem("cavaliere-cart");
  } catch {
    // Il carrello parte comunque vuoto se la memoria locale non è disponibile.
  }
  return {};
}

function saveCart() {
  // Il carrello vive solo nella pagina corrente e non viene conservato al riavvio.
}

function getMenuName(item) {
  if (item.isCustom) return state.language === "en" ? item.nameEn : item.name;
  return state.language === "en" ? (MENU_NAME_EN[item.id] || item.name) : item.name;
}

function getCustomBaseName(base) {
  return state.language === "en" ? base.nameEn : base.name;
}

function getCustomBaseDescription(base) {
  return state.language === "en" ? base.descriptionEn : base.description;
}

function getCustomIngredientName(ingredient) {
  return state.language === "en" ? ingredient.nameEn : ingredient.name;
}

function getMenuDescription(item) {
  if (state.language !== "en") return item.description;
  if (DESCRIPTION_OVERRIDES_EN[item.description]) return DESCRIPTION_OVERRIDES_EN[item.description];

  let translated = item.description;
  DESCRIPTION_TERMS_EN.forEach(([italian, english]) => {
    translated = translated.replaceAll(italian, english);
  });
  return translated.replaceAll(" e ", " and ").replaceAll(" o ", " or ");
}

function getVariantLabel(label) {
  if (state.language !== "en") return label;
  return { Normale: "Regular", Maxi: "Large", Mini: "Small" }[label] || label;
}

function getOrderModeLabel(value) {
  if (state.language !== "en") return value;
  return {
    "Ritiro in pizzeria": "Pickup at the pizzeria",
    "Consegna a domicilio": "Home delivery",
    "Prenotazione tavolo": "Table reservation",
  }[value] || value;
}

function getCartEntries() {
  const standardEntries = Object.entries(state.cart)
    .map(([key, quantity]) => {
      const [itemId, variantIndexValue] = key.split("::");
      const item = MENU_ITEMS.find((menuItem) => menuItem.id === itemId);
      const variantIndex = Number(variantIndexValue);
      const variant = item?.prices[variantIndex];
      return item && variant ? { ...item, key, quantity, variant } : null;
    })
    .filter(Boolean);

  return [...standardEntries, ...Object.values(state.customCart)];
}

function getCustomIngredientsText(entry) {
  if (!entry.isCustom || !entry.ingredientIds.length) {
    return state.language === "en" ? "No extras" : "Nessun extra";
  }

  return entry.ingredientIds
    .map((ingredientId) => CUSTOM_PIZZA_INGREDIENTS.find((ingredient) => ingredient.id === ingredientId))
    .filter(Boolean)
    .map(getCustomIngredientName)
    .join(", ");
}

function getCartCount() {
  return getCartEntries().reduce((total, entry) => total + entry.quantity, 0);
}

function getCartTotal() {
  return getCartEntries().reduce((total, entry) => total + entry.variant.price * entry.quantity, 0);
}

function getSelectedDeliveryZone() {
  return DELIVERY_ZONES[deliveryZone.value] || null;
}

function getDeliveryFee() {
  return state.orderMode === "Consegna a domicilio" ? (getSelectedDeliveryZone()?.fee || 0) : 0;
}

function getOrderTotal() {
  return getCartTotal() + getDeliveryFee();
}

function updateDeliverySummary() {
  const zone = getSelectedDeliveryZone();
  const subtotal = getCartTotal();
  const isDelivery = state.orderMode === "Consegna a domicilio";

  cartDeliveryFee.hidden = !isDelivery || !zone;
  cartDeliveryFeeAmount.textContent = formatCurrency(zone?.fee || 0);
  deliveryZoneNote.classList.remove("is-valid", "is-warning");

  if (!zone) {
    deliveryZoneNote.textContent = state.language === "en"
      ? "Choose the area to check the minimum order and delivery fee."
      : "Seleziona la zona per verificare minimo d'ordine e costo di consegna.";
    return;
  }

  const missing = Math.max(0, zone.minimum - subtotal);
  if (missing > 0) {
    deliveryZoneNote.classList.add("is-warning");
    deliveryZoneNote.textContent = state.language === "en"
      ? `${formatCurrency(missing)} more is needed to reach the ${formatCurrency(zone.minimum)} minimum order. Delivery: ${formatCurrency(zone.fee)}.`
      : `Mancano ${formatCurrency(missing)} per raggiungere l'ordine minimo di ${formatCurrency(zone.minimum)}. Consegna: ${formatCurrency(zone.fee)}.`;
    return;
  }

  deliveryZoneNote.classList.add("is-valid");
  deliveryZoneNote.textContent = state.language === "en"
    ? `Minimum order reached · Delivery ${formatCurrency(zone.fee)}`
    : `Ordine minimo raggiunto · Consegna ${formatCurrency(zone.fee)}`;
}

function renderCustomPizzaMenu() {
  menuGrid.classList.add("menu-grid--custom");
  menuGrid.innerHTML = `
    <div class="custom-menu-intro">
      <div>
        <span>${state.language === "en" ? "Made by you" : "Fatta da te"}</span>
        <h3>${state.language === "en" ? "Create your pizza" : "Crea la tua pizza"}</h3>
      </div>
      <p>${state.language === "en"
        ? "Choose your preferred base and add your ingredients. The price updates while you build it."
        : "Scegli la base che preferisci e aggiungi i tuoi ingredienti. Il prezzo si aggiorna mentre la componi."}</p>
    </div>
    ${CUSTOM_PIZZA_BASES.map((base) => `
      <article class="menu-item custom-pizza-card">
        <div class="menu-item__meta">
          <span class="menu-item__category">${state.language === "en" ? "Custom pizza" : "Pizza personalizzata"}</span>
          <h3>${getCustomBaseName(base)}</h3>
          <p>${getCustomBaseDescription(base)}</p>
        </div>
        <div class="menu-item__prices">
          <button type="button" class="price-button custom-pizza-card__button" data-custom-base="${base.id}" aria-label="${state.language === "en" ? "Build" : "Componi"} ${getCustomBaseName(base)}, ${formatCurrency(base.price)}">
            <span>${state.language === "en" ? "Build" : "Componi"}</span>
            <strong>${formatCurrency(base.price)}</strong>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </article>
    `).join("")}
  `;

  menuGrid.querySelectorAll("[data-custom-base]").forEach((button) => {
    button.addEventListener("click", () => openCustomPizza(button.dataset.customBase));
  });
}

function renderMenu() {
  if (state.activeFilter === "personalizzata") {
    renderCustomPizzaMenu();
    return;
  }

  menuGrid.classList.remove("menu-grid--custom");

  const items = state.activeFilter === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === state.activeFilter);

  menuGrid.innerHTML = items.map((item) => `
    <article class="menu-item">
      <div class="menu-item__meta">
        <span class="menu-item__category">${CATEGORY_LABELS[state.language][item.category]}</span>
        <h3>${getMenuName(item)}</h3>
        <p>${getMenuDescription(item)}</p>
      </div>
      <div class="menu-item__prices" aria-label="Scegli formato per ${item.name}">
        ${item.prices.map((variant, index) => `
          <button type="button" class="price-button" data-add-item="${item.id}" data-variant-index="${index}" aria-label="${state.language === "en" ? "Add" : "Aggiungi"} ${getMenuName(item)}${variant.label ? `, ${getVariantLabel(variant.label)}` : ""}, ${formatCurrency(variant.price)}">
            <span>${variant.label ? getVariantLabel(variant.label) : (state.language === "en" ? "Add" : "Aggiungi")}</span>
            <strong>${formatCurrency(variant.price)}</strong>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        `).join("")}
      </div>
    </article>
  `).join("");

  menuGrid.querySelectorAll("[data-add-item]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.addItem, Number(button.dataset.variantIndex)));
  });
}

function getCurrentCustomBase() {
  return CUSTOM_PIZZA_BASES.find((base) => base.id === state.customBaseId) || null;
}

function getSelectedCustomIngredients() {
  return CUSTOM_PIZZA_INGREDIENTS.filter((ingredient) => state.customIngredientIds.has(ingredient.id));
}

function getCustomPizzaTotal() {
  const base = getCurrentCustomBase();
  if (!base) return 0;
  return base.price + getSelectedCustomIngredients().reduce((total, ingredient) => total + ingredient.price, 0);
}

function updateCustomizerTotal() {
  customizerTotal.textContent = formatCurrency(getCustomPizzaTotal());
  const selectedCount = state.customIngredientIds.size;
  addCustomPizzaButton.setAttribute(
    "aria-label",
    state.language === "en"
      ? `Add custom pizza with ${selectedCount} extras, ${formatCurrency(getCustomPizzaTotal())}`
      : `Aggiungi pizza personalizzata con ${selectedCount} extra, ${formatCurrency(getCustomPizzaTotal())}`
  );
}

function renderCustomizer() {
  const base = getCurrentCustomBase();
  if (!base) return;

  customizerTitle.textContent = state.language === "en" ? "Build your pizza" : "Componi la tua pizza";
  customizerBaseDescription.textContent = getCustomBaseDescription(base);
  customizerBaseName.textContent = getCustomBaseName(base);
  customizerBasePrice.textContent = formatCurrency(base.price);
  clearCustomIngredients.textContent = state.language === "en" ? "Clear" : "Azzera";

  customizerIngredients.innerHTML = CUSTOM_PIZZA_INGREDIENTS.map((ingredient) => `
    <label class="custom-ingredient">
      <input type="checkbox" value="${ingredient.id}" ${state.customIngredientIds.has(ingredient.id) ? "checked" : ""} />
      <span class="custom-ingredient__check" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path class="custom-ingredient__plus" d="M12 5v14M5 12h14" /><path class="custom-ingredient__tick" d="m5 12 4 4L19 6" /></svg>
      </span>
      <strong>${getCustomIngredientName(ingredient)}</strong>
      <span class="custom-ingredient__price">+${formatCurrency(ingredient.price)}</span>
    </label>
  `).join("");

  customizerIngredients.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) state.customIngredientIds.add(input.value);
      else state.customIngredientIds.delete(input.value);
      updateCustomizerTotal();
    });
  });

  updateCustomizerTotal();
}

function openCustomPizza(baseId) {
  const base = CUSTOM_PIZZA_BASES.find((item) => item.id === baseId);
  if (!base) return;

  state.customizerLastFocusedElement = document.activeElement;
  state.customBaseId = base.id;
  state.customIngredientIds = new Set();
  renderCustomizer();
  customizerShell.classList.add("is-open");
  customizerShell.setAttribute("aria-hidden", "false");
  document.body.classList.add("customizer-open");
  window.setTimeout(() => customizerDialog.focus(), 0);
}

function closeCustomPizza() {
  customizerShell.classList.remove("is-open");
  customizerShell.setAttribute("aria-hidden", "true");
  document.body.classList.remove("customizer-open");
  state.customizerLastFocusedElement?.focus?.();
}

function clearCustomPizzaIngredients() {
  state.customIngredientIds = new Set();
  customizerIngredients.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  updateCustomizerTotal();
}

function addCustomPizzaToCart() {
  const base = getCurrentCustomBase();
  if (!base) return;

  const selectedIngredients = getSelectedCustomIngredients();
  const ingredientIds = selectedIngredients.map((ingredient) => ingredient.id);
  const signature = ingredientIds.length ? ingredientIds.join("+") : "no-extra";
  const key = `custom::${base.id}::${signature}`;
  const existingEntry = state.customCart[key];

  if (existingEntry) {
    existingEntry.quantity += 1;
  } else {
    state.customCart[key] = {
      id: `custom-${base.id}`,
      key,
      quantity: 1,
      isCustom: true,
      name: `Pizza personalizzata · ${base.name}`,
      nameEn: `Custom pizza · ${base.nameEn}`,
      baseId: base.id,
      ingredientIds,
      variant: { label: "", price: Number(getCustomPizzaTotal().toFixed(2)) },
    };
  }

  renderCart();
  closeCustomPizza();
  showToast(state.language === "en" ? "Custom pizza added to cart" : "Pizza personalizzata aggiunta al carrello");
}

function renderCart() {
  const entries = getCartEntries();
  const count = getCartCount();
  const total = getOrderTotal();

  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = String(count);
  });
  document.querySelectorAll("[data-cart-total-preview]").forEach((element) => {
    element.textContent = formatCurrency(total);
  });
  document.querySelectorAll("[data-open-cart]").forEach((button) => {
    button.setAttribute("aria-label", state.language === "en" ? `Open cart, ${count} items` : `Apri il carrello, ${count} prodotti`);
  });

  cartTotal.textContent = formatCurrency(total);
  updateDeliverySummary();
  emptyCart.hidden = entries.length > 0;
  cartFooter.hidden = entries.length === 0 && state.orderMode !== "Prenotazione tavolo";
  orderModeSummary.textContent = state.orderMode
    ? getOrderModeLabel(state.orderMode)
    : t("Nessuna modalità selezionata");

  cartItems.innerHTML = entries.map((entry) => `
    <article class="cart-item${entry.isCustom ? " cart-item--custom" : ""}">
      <div>
        <h3>${getMenuName(entry)}</h3>
        <small>${entry.variant.label ? `${getVariantLabel(entry.variant.label)} · ` : ""}${formatCurrency(entry.variant.price)}</small>
        ${entry.isCustom ? `<p class="cart-item__custom-details"><b>${state.language === "en" ? "Extras" : "Extra"}:</b> ${getCustomIngredientsText(entry)}</p>` : ""}
      </div>
      <div class="cart-item__actions" aria-label="${state.language === "en" ? "Quantity" : "Quantità"} ${getMenuName(entry)}">
        <button type="button" data-remove-key="${entry.key}" aria-label="${state.language === "en" ? "Remove one item" : "Rimuovi un prodotto"}">−</button>
        <span>${entry.quantity}</span>
        <button type="button" data-add-key="${entry.key}" aria-label="${state.language === "en" ? "Add one item" : "Aggiungi un prodotto"}">+</button>
      </div>
    </article>
  `).join("");

  cartItems.querySelectorAll("[data-add-key]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.addKey, 1));
  });
  cartItems.querySelectorAll("[data-remove-key]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.removeKey, -1));
  });
}

function addToCart(itemId, variantIndex) {
  const item = MENU_ITEMS.find((menuItem) => menuItem.id === itemId);
  if (!item || !item.prices[variantIndex]) return;

  const key = `${itemId}::${variantIndex}`;
  state.cart[key] = (state.cart[key] || 0) + 1;
  saveCart();
  renderCart();
  showToast(state.language === "en" ? `${getMenuName(item)} added to cart` : `${item.name} aggiunto al carrello`);
}

function changeCartQuantity(key, amount) {
  if (state.customCart[key]) {
    state.customCart[key].quantity += amount;
    if (state.customCart[key].quantity <= 0) delete state.customCart[key];
    renderCart();
    return;
  }

  state.cart[key] = (state.cart[key] || 0) + amount;
  if (state.cart[key] <= 0) delete state.cart[key];
  saveCart();
  renderCart();
}

function setFilter(filter) {
  state.activeFilter = filter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderMenu();
}

function setOrderMode(value) {
  state.orderMode = value;
  [...orderModeInputs, ...cartOrderModeInputs].forEach((input) => {
    input.checked = input.value === value;
  });
  orderModeError.hidden = true;
  cartModeError.hidden = true;
  orderModeSummary.textContent = getOrderModeLabel(value);
  const isDelivery = value === "Consegna a domicilio";
  deliveryAddressField.hidden = !isDelivery;
  deliveryAddress.required = isDelivery;
  deliveryZone.required = isDelivery;
  if (!isDelivery) {
    deliveryAddress.value = "";
    deliveryZone.value = "";
  }
  renderCart();
}

function openCart() {
  state.lastFocusedElement = document.activeElement;
  whatsappConsent.checked = false;
  checkout.disabled = true;
  cartShell.classList.add("is-open");
  cartShell.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
  window.setTimeout(() => cartDrawer.focus(), 0);
}

function closeCart() {
  cartShell.classList.remove("is-open");
  cartShell.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
  state.lastFocusedElement?.focus?.();
}

function buildRequestMessage() {
  const entries = getCartEntries();
  const details = orderNotes.value.trim();
  const address = deliveryAddress.value.trim();
  const zone = getSelectedDeliveryZone();
  const rows = entries.map((entry) => {
    const customDetails = entry.isCustom
      ? `\n  ${state.language === "en" ? "Extras" : "Extra"}: ${getCustomIngredientsText(entry)}`
      : "";
    return `- ${entry.quantity}x ${getMenuName(entry)}${entry.variant.label ? ` (${getVariantLabel(entry.variant.label)})` : ""} - ${formatCurrency(entry.variant.price * entry.quantity)}${customDetails}`;
  });

  if (state.language === "en") {
    return [
      entries.length ? "Hello Pizzeria Cavaliere, I would like to order:" : "Hello Pizzeria Cavaliere, I would like to reserve a table.",
      ...rows,
      "",
      `Option: ${getOrderModeLabel(state.orderMode)}`,
      zone ? `Delivery area: ${zone.nameEn}` : "",
      address ? `Delivery address: ${address}` : "",
      `When: ${pickupTime.value}`,
      details ? `Notes: ${details}` : "",
      zone ? `Products subtotal: ${formatCurrency(getCartTotal())}` : "",
      zone ? `Delivery fee: ${formatCurrency(zone.fee)}` : "",
      entries.length ? `Total: ${formatCurrency(getOrderTotal())}` : "",
      "",
      "Thank you!",
    ].filter(Boolean).join("\n");
  }

  return [
    entries.length ? "Ciao Pizzeria Cavaliere, vorrei ordinare:" : "Ciao Pizzeria Cavaliere, vorrei prenotare un tavolo.",
    ...rows,
    "",
    `Modalità: ${state.orderMode}`,
    zone ? `Zona di consegna: ${zone.name}` : "",
    address ? `Indirizzo di consegna: ${address}` : "",
    `Quando: ${pickupTime.value}`,
    details ? `Note: ${details}` : "",
    zone ? `Subtotale prodotti: ${formatCurrency(getCartTotal())}` : "",
    zone ? `Costo di consegna: ${formatCurrency(zone.fee)}` : "",
    entries.length ? `Totale: ${formatCurrency(getOrderTotal())}` : "",
    "",
    "Grazie!",
  ].filter(Boolean).join("\n");
}

function sendWhatsAppRequest() {
  if (!state.orderMode) {
    orderModeError.hidden = false;
    cartModeError.hidden = false;
    showToast(state.language === "en" ? "Choose an order option first" : "Scegli prima la modalità dell'ordine");
    cartModeError.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  if (getCartCount() === 0 && state.orderMode !== "Prenotazione tavolo") {
    showToast(state.language === "en" ? "Add at least one item to your cart" : "Aggiungi almeno un prodotto al carrello");
    closeCart();
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (state.orderMode === "Consegna a domicilio") {
    const zone = getSelectedDeliveryZone();
    if (!zone) {
      showToast(state.language === "en" ? "Choose the delivery area" : "Seleziona la zona di consegna");
      deliveryZone.focus();
      return;
    }
    if (getCartTotal() < zone.minimum) {
      const missing = zone.minimum - getCartTotal();
      showToast(state.language === "en"
        ? `Add ${formatCurrency(missing)} to reach the minimum order`
        : `Aggiungi ${formatCurrency(missing)} per raggiungere l'ordine minimo`);
      deliveryZoneNote.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    if (!deliveryAddress.value.trim()) {
      showToast(state.language === "en" ? "Enter the delivery address" : "Inserisci l'indirizzo di consegna");
      deliveryAddress.focus();
      return;
    }
  }

  if (!whatsappConsent.checked) {
    showToast(state.language === "en" ? "Accept the WhatsApp consent first" : "Accetta prima il consenso per WhatsApp");
    whatsappConsent.focus();
    return;
  }

  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(buildRequestMessage())}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function applySiteConfig() {
  document.querySelector("[data-address]").textContent = SITE_CONFIG.address;
  document.querySelector("[data-phone-display]").textContent = SITE_CONFIG.phoneDisplay;
  document.querySelector("[data-phone-row]").hidden = false;
  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.href = `tel:${SITE_CONFIG.phoneHref}`;
  });
  document.querySelectorAll("[data-landline-link]").forEach((link) => {
    link.href = `tel:${SITE_CONFIG.landlineHref}`;
    link.title = `${state.language === "en" ? "Call" : "Chiama"} ${SITE_CONFIG.landlineDisplay}`;
  });

  const mapLink = document.querySelector("[data-map-link]");
  mapLink.href = SITE_CONFIG.mapsUrl;
  mapLink.target = "_blank";
  mapLink.rel = "noreferrer";

  const reviewLink = document.querySelector("[data-review-link]");
  reviewLink.href = SITE_CONFIG.reviewUrl;
  reviewLink.target = "_blank";
  reviewLink.rel = "noreferrer";
}

function applyStaticTranslations() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const parentTag = node.parentElement?.tagName;
    if (!originalTextNodes.has(node) && parentTag !== "SCRIPT" && parentTag !== "STYLE") {
      originalTextNodes.set(node, node.nodeValue);
    }
    const original = originalTextNodes.get(node);
    if (original !== undefined) {
      const key = normalizeText(original);
      if (state.language === "en" && STATIC_TRANSLATIONS[key]) {
        const leadingSpace = original.match(/^\s*/)?.[0] || "";
        const trailingSpace = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = `${leadingSpace}${STATIC_TRANSLATIONS[key]}${trailingSpace}`;
      } else {
        node.nodeValue = original;
      }
    }
    node = walker.nextNode();
  }
}

function applyLanguage(language) {
  state.language = language === "en" ? "en" : "it";
  document.documentElement.lang = state.language;
  try {
    localStorage.setItem("cavaliere-language", state.language);
  } catch {
    // La selezione resta attiva per la pagina corrente.
  }

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.setLanguage === state.language));
  });
  document.title = state.language === "en"
    ? "Pizzeria Cavaliere Santa Margherita Ligure | Artisan pizza"
    : "Pizzeria Cavaliere Santa Margherita Ligure | Pizza artigianale";
  document.querySelector('meta[name="description"]').content = state.language === "en"
    ? "Pizzeria Cavaliere in Santa Margherita Ligure: artisan pizza, selected ingredients, takeaway, reservations and quick orders."
    : "Pizzeria Cavaliere a Santa Margherita Ligure: pizza artigianale, prodotti selezionati, asporto, prenotazioni e ordini rapidi.";
  orderNotes.placeholder = state.language === "en"
    ? "Example: 2 Margherita pizzas for 8 pm, delivery to... or a table for 4 people..."
    : "Esempio: 2 margherite per le 20:00, consegna in via... oppure tavolo per 4 persone...";
  deliveryAddress.placeholder = state.language === "en"
    ? "Street, number and town"
    : "Via, numero civico e località";

  applyStaticTranslations();
  renderMenu();
  renderCart();
  if (customizerShell.classList.contains("is-open")) renderCustomizer();
}

function enableGoogleMap() {
  if (mapPanel.querySelector("iframe")) return;
  const iframe = document.createElement("iframe");
  iframe.className = "map-embed";
  iframe.src = SITE_CONFIG.mapsEmbedUrl;
  iframe.title = state.language === "en"
    ? "Map of Pizzeria Cavaliere at Via Roma 16A"
    : "Mappa di Pizzeria Cavaliere in Via Roma 16A";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  mapPanel.prepend(iframe);
  mapConsent.hidden = true;
  mapContent.hidden = false;
}

function closeMapCookieNotice() {
  mapCookieNotice.hidden = true;
}

function setupMapConsent() {
  const syncMapButton = () => {
    enableMapButton.disabled = !mapConsentCheckbox.checked;
  };

  mapConsentCheckbox.addEventListener("change", syncMapButton);
  enableMapButton.addEventListener("click", () => {
    if (!mapConsentCheckbox.checked) return;
    enableGoogleMap();
  });
  acceptMapCookies.addEventListener("click", () => {
    mapConsentCheckbox.checked = true;
    syncMapButton();
    enableGoogleMap();
    closeMapCookieNotice();
  });
  declineMapCookies.addEventListener("click", closeMapCookieNotice);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mapCookieNotice.hidden) closeMapCookieNotice();
  });
  syncMapButton();
  mapCookieNotice.hidden = false;
  window.setTimeout(() => acceptMapCookies.focus(), 0);
}

function setupProductCarousel() {
  const carousel = document.querySelector("[data-product-carousel]");
  const slides = [...carousel.querySelectorAll("[data-product-slide]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentIndex = 0;
  let intervalId;
  let touchStartX = 0;

  const showSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
  };

  const stop = () => window.clearInterval(intervalId);
  const start = () => {
    stop();
    if (!reducedMotion.matches && !document.hidden) {
      intervalId = window.setInterval(() => showSlide(currentIndex + 1), 4200);
    }
  };
  const move = (offset) => {
    showSlide(currentIndex + offset);
    start();
  };

  carousel.querySelector("[data-product-prev]").addEventListener("click", () => move(-1));
  carousel.querySelector("[data-product-next]").addEventListener("click", () => move(1));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
  carousel.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; stop(); }, { passive: true });
  carousel.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showSlide(currentIndex + (distance < 0 ? 1 : -1));
    start();
  }, { passive: true });
  document.addEventListener("visibilitychange", start);
  reducedMotion.addEventListener?.("change", start);
  showSlide(0);
  start();
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  const handleScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 80);
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
}

function setupMobileBottomBar() {
  const hero = document.querySelector(".hero");
  const mobileBottomActions = document.querySelector(".mobile-bottom-actions");
  const update = () => {
    const stillOnHero = window.scrollY < hero.offsetHeight - 140;
    mobileBottomActions.classList.toggle("is-hidden-on-hero", stillOnHero);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupEvents() {
  filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));
  document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
  document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", closeCart));
  document.querySelectorAll("[data-close-customizer]").forEach((button) => button.addEventListener("click", closeCustomPizza));
  orderModeInputs.forEach((input) => input.addEventListener("change", () => setOrderMode(input.value)));
  cartOrderModeInputs.forEach((input) => input.addEventListener("change", () => setOrderMode(input.value)));
  deliveryZone.addEventListener("change", renderCart);
  languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.setLanguage)));
  whatsappConsent.addEventListener("change", () => {
    checkout.disabled = !whatsappConsent.checked;
  });
  checkout.addEventListener("click", sendWhatsAppRequest);
  clearCustomIngredients.addEventListener("click", clearCustomPizzaIngredients);
  addCustomPizzaButton.addEventListener("click", addCustomPizzaToCart);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (customizerShell.classList.contains("is-open")) closeCustomPizza();
    else if (cartShell.classList.contains("is-open")) closeCart();
  });
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
applySiteConfig();
setupHeader();
setupMobileBottomBar();
setupEvents();
setupMapConsent();
setupProductCarousel();
setupRevealAnimations();
setFilter("pizze");
renderCart();
applyLanguage(state.language);
