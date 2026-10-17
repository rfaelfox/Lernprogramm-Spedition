# Lerninhalte ergänzen und aktualisieren

Alle Lerninhalte liegen als JavaScript-Module im Ordner `app/content/`. Sie sind vom Programmcode getrennt, damit du sie ohne Programmierkenntnisse ergänzen kannst.

| Datei | Inhalt |
|---|---|
| `content/sources.js` | Quellenverzeichnis (Herausgeber, Titel, Link, Stand) |
| `content/curriculum.js` | Themenbaum: Ausbildungsjahr → Lernfeld/Fach → Thema → Lerneinheiten |
| `content/units/<id>.js` | Eine ausgearbeitete Lerneinheit pro Datei |
| `content/units/index.js` | Liste aller Lerneinheiten-Dateien (neue Datei hier eintragen) |

Nach jeder Änderung: Versionsnummer in `app/version.js` erhöhen, damit installierte Apps den neuen Stand laden.

## Aufbau einer Lerneinheit

```js
export default {
  id: 'lf03-umsatzsteuer',        // eindeutig, klein, nur a-z 0-9 und -
  area: 'LF03',                    // Lernfeld/Fach aus curriculum.js
  topic: 'lf03-ust',               // Thema aus curriculum.js
  title: 'Vorsteuer und Umsatzsteuer',
  status: 'vollstaendig',          // vollstaendig | teilweise | pruefen
  minutes: 20,                     // geschätzte Lernzeit
  validity: {                      // nur bei zeitabhängigen Werten, sonst null
    asOf: '2026',
    note: 'Regelsteuersatz 19 %, ermäßigt 7 % (§ 12 UStG), Stand 2026'
  },
  goals: ['Ich kann …'],            // Lernziele als „Ich kann“-Sätze
  simple: `Markdown`,              // einfache Erklärung
  deep: `Markdown`,                // vertiefende Darstellung
  terms: [{ term: 'Vorsteuer', def: '…' }],
  example: `Markdown`,             // Praxisbeispiel aus Spedition/Logistik
  rules: ['Merksatz 1', 'Merksatz 2'],
  summary: `Markdown`,
  mistakes: [{ wrong: 'typischer Fehler', right: 'richtig ist …' }],
  flashcards: [{ q: 'Frage', a: 'Antwort' }],
  tasks: [ /* Aufgaben, siehe unten */ ],
  quiz: ['aufgaben-id-1', 'aufgaben-id-2'],   // Auswahl für den Kurztest
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 3, Inhalte: Umsatzsteuer' },     // Verweis ins Quellenverzeichnis
    { title: 'Umsatzsteuergesetz § 12', publisher: 'BMJ', url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html', asOf: '2026' }
  ],
  links: ['lf03-buchen-bestandskonten']      // verwandte Lerneinheiten
};
```

Markdown: `**fett**`, `*kursiv*`, `# Überschrift`, Listen mit `- `, nummerierte Listen `1. `, Tabellen mit `| a | b |` und Trennzeile `|---|---|`, `> Hinweis`, `` `Code` ``.

## Aufgabentypen

Gemeinsame Felder jeder Aufgabe:

```js
{ id: 'lf03-ust-a1', type: '…', difficulty: 1, points: 2,
  q: 'Aufgabenstellung (Markdown)',
  hints: ['Hinweis 1', 'Hinweis 2'],      // schrittweise Hilfestellung
  solution: 'Begründete Musterlösung (Markdown)' }
```

`difficulty`: 1 = Grundlagen, 2 = Anwendung, 3 = Prüfungsniveau.

| type | zusätzliche Felder | Bewertung |
|---|---|---|
| `mc` | `options: ['A','B','C']`, `correct: [1]` (Indizes, ab 0). Mehrere Indizes = Mehrfachauswahl | exakt; bei Mehrfachauswahl Teilpunkte (richtig minus falsch) |
| `text` | `model: 'Musterlösung'`, `criteria: [{ text: 'nennt die Haftungsgrenze', keywords: ['8,33|8.33', 'SZR|Sonderziehungsrecht'], points: 1 }]` | Schlüsselwörter geben einen Hinweis; endgültig per Selbstbewertung mit Musterlösung |
| `calc` | `formula: 'Zahllast = USt − VSt'`, `fields: [{ id: 'ust', label: 'Umsatzsteuer', unit: '€', answer: 1900, tol: 0.01 }]` | Zahlenvergleich mit Toleranz; letztes Feld ist das Ergebnis |
| `booking` | `accounts: ['Bank','Vorsteuer', …]`, `entries: [{ side: 'S', account: 'Vorsteuer', amount: 190 }, { side: 'H', account: 'Bank', amount: 1190 }]` | jede Zeile Konto + Seite + Betrag |
| `match` | `pairs: [['Begriff','Bedeutung'], …]` | je Paar |
| `order` | `items: ['erster Schritt', 'zweiter Schritt', …]` (richtige Reihenfolge) | je Position |
| `cloze` | `text: 'Der [[Frachtführer]] haftet bis [[8,33|8.33]] SZR je kg.'` | je Lücke, Alternativen mit `|` |
| `case` | `intro: 'Fallbeschreibung'`, `parts: [Aufgaben]` | Summe der Teilaufgaben |

Rechenaufgaben: Formel, Einheiten, eingesetzte Werte, vollständiger Rechenweg und Ergebnis gehören in `solution`. `tol` ist die erlaubte Abweichung (z. B. 0.01 für Cent, 0.5 bei gerundeten Prozentwerten).

Buchungssätze: Kontenbezeichnungen ohne Kontonummern, weil sich die Nummern je nach Kontenrahmen der Schule unterscheiden. Begründung (Aktiv-/Passivkonto, Zugang/Abgang) gehört in `solution`.

## Regeln für Inhalte

- Eigene Erklärungen und Aufgaben schreiben, keine Schulbücher oder Prüfungssammlungen abschreiben.
- Rechtsvorschriften, Beitragssätze, Grenzwerte: immer `validity` mit Stand und eine Quelle mit `asOf` angeben. Beispiele mit zeitabhängigen Werten nennen ein Bezugsjahr.
- Nichts Offizielles erfinden. Unsichere Angaben mit `status: 'pruefen'` kennzeichnen.
- Neue Lerneinheit: Datei anlegen, in `content/units/index.js` eintragen, im Thema in `curriculum.js` unter `units` ergänzen.
