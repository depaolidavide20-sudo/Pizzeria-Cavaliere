# Pizzeria Cavaliere

Sito statico premium per Pizzeria Cavaliere, Santa Margherita Ligure.

## File principali

- `index.html`: struttura delle sezioni e markup SEO.
- `styles.css`: tema scuro responsive, hero fotografica, menù, carosello e carrello.
- `script.js`: catalogo completo, filtri, carrello, carosello e ordine WhatsApp.
- `assets/`: logo, hero e fotografie ottimizzate dei prodotti.
- `privacy-policy.html`, `cookie-policy.html`, `note-legali.html`: informative e dati dell'attività.

Il sito include inoltre selettore IT/EN, blocco della traduzione automatica del browser, consenso preventivo per Google Maps e consenso obbligatorio prima dell'apertura di WhatsApp.

## Dati da aggiornare

I dati attuali sono configurati in `SITE_CONFIG`, dentro `script.js`:

- `whatsappNumber`
- `phoneDisplay`
- `phoneHref`
- `address`
- `mapsUrl`
- `reviewUrl`

Il catalogo contiene le voci del menù con formati e prezzi. Il carrello apre WhatsApp con prodotti, quantità, totale, modalità, orario e note già compilati.
