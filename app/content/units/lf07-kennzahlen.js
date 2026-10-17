export default {
  id: 'lf07-kennzahlen',
  area: 'LF07',
  topic: 'lf07-kennzahlen',
  title: 'Kennzahlen: Rentabilität, Cashflow, Wirtschaftlichkeit',
  status: 'vollstaendig',
  minutes: 45,
  validity: null,
  goals: [
    'Ich kann Eigenkapital-, Gesamtkapital- und Umsatzrentabilität einer Spedition berechnen und deuten.',
    'Ich kann Wirtschaftlichkeit und Produktivität unterscheiden und berechnen.',
    'Ich kann den Cashflow vereinfacht indirekt aus Jahresüberschuss, Abschreibungen und Rückstellungsveränderung ermitteln.',
    'Ich kann die Liquidität 1., 2. und 3. Grades berechnen und beurteilen.',
    'Ich kann erklären, wann zusätzliches Fremdkapital die Eigenkapitalrentabilität erhöht (Leverage-Effekt).',
    'Ich kann Kennzahlen im Zeit- und Betriebsvergleich für Entscheidungen im Speditionsalltag nutzen.'
  ],
  simple: `# Worum geht es?

Eine einzelne Zahl wie „Gewinn 90.000 €“ sagt wenig. Ist das viel oder wenig? Das zeigt erst eine **Kennzahl**: Man setzt zwei Werte ins Verhältnis.

# Die wichtigsten Kennzahlen

| Kennzahl | Frage | Formel |
|---|---|---|
| **Eigenkapitalrentabilität** | Wie gut verzinst sich das Geld der Eigentümer? | Gewinn ÷ Eigenkapital × 100 |
| **Gesamtkapitalrentabilität** | Wie gut verzinst sich das gesamte eingesetzte Kapital? | (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100 |
| **Umsatzrentabilität** | Wie viel Gewinn bleibt von 100 € Umsatz? | Gewinn ÷ Umsatzerlöse × 100 |
| **Wirtschaftlichkeit** | Sind die Leistungen größer als die Kosten? | Leistungen ÷ Kosten (oder Erträge ÷ Aufwendungen) |
| **Produktivität** | Wie viel Leistung bringt eine Einheit Einsatz? | Ausbringungsmenge ÷ Einsatzmenge (z. B. Sendungen je Stunde) |
| **Liquidität** | Kann die Spedition ihre kurzfristigen Schulden bezahlen? | flüssige Mittel ÷ kurzfristige Verbindlichkeiten × 100 |
| **Cashflow** | Wie viel Geld hat das Geschäft selbst erwirtschaftet? | Jahresüberschuss + Abschreibungen ± Veränderung langfristiger Rückstellungen |

# Merke

- **Rentabilität** und **Wirtschaftlichkeit** fragen nach dem **Wert** (Euro).
- **Produktivität** fragt nach **Mengen** (Sendungen, Paletten, km, Stunden).
- **Liquidität** fragt: Ist genug **Geld** da, um pünktlich zu zahlen?`,
  deep: `# Rentabilitätskennzahlen

**Eigenkapitalrentabilität** = Gewinn ÷ Eigenkapital × 100
Vergleichsmaßstab: Was hätten die Eigentümer mit einer sicheren Geldanlage verdient, plus ein Zuschlag für das Unternehmerrisiko?

**Gesamtkapitalrentabilität** = (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100
Die Fremdkapitalzinsen werden addiert, weil auch das Fremdkapital „verzinst“ wurde – an die Bank. So zeigt die Kennzahl die Ertragskraft des gesamten Kapitals, unabhängig von der Finanzierung.

**Umsatzrentabilität** = Gewinn ÷ Umsatzerlöse × 100
In Speditionen mit hohem Anteil an Fremdfrachten (Weiterberechnung von Frachtführerkosten) ist die Umsatzrentabilität oft niedrig, weil viel Umsatz nur „durchgereicht“ wird. Deshalb nur mit vergleichbaren Betrieben oder Vorjahren vergleichen.

> Für den Gewinn wird meist der **Jahresüberschuss** laut Gewinn- und Verlustrechnung verwendet. Für das Kapital nimmt man oft den Durchschnitt aus Anfangs- und Endbestand.

# Leverage-Effekt

Ist die **Gesamtkapitalrentabilität größer als der Fremdkapitalzinssatz**, steigt die Eigenkapitalrentabilität, wenn mehr Fremdkapital eingesetzt wird: Jeder geliehene Euro verdient mehr, als er an Zinsen kostet. Ist es umgekehrt, sinkt die Eigenkapitalrentabilität. Mehr Fremdkapital erhöht aber auch das Risiko (Zinsen und Tilgung müssen immer gezahlt werden).

# Wirtschaftlichkeit und Produktivität

**Wirtschaftlichkeit** = Leistungen ÷ Kosten (oder Erträge ÷ Aufwendungen)
- größer als 1: Gewinn, kleiner als 1: Verlust

**Produktivität** = Ausbringungsmenge ÷ Einsatzmenge – ein reines Mengenverhältnis:
- Umschlag: Sendungen je Mitarbeiterstunde
- Lager: kommissionierte Positionen je Stunde
- Fuhrpark: km oder Touren je Fahrzeug und Tag

Eine höhere Produktivität bedeutet noch nicht automatisch höhere Wirtschaftlichkeit (z. B. wenn neue Technik teuer ist).

# Cashflow (vereinfacht, indirekt)

| | € |
|---|---|
| Jahresüberschuss | |
| + Abschreibungen | (Aufwand, aber keine Auszahlung) |
| + Erhöhung der langfristigen Rückstellungen | (Aufwand, aber noch keine Auszahlung) |
| − Verminderung der langfristigen Rückstellungen | |
| = **Cashflow** | |

Der Cashflow zeigt, wie viel Geld aus dem laufenden Geschäft zur Verfügung steht – für **Investitionen** (neue Lkw), **Tilgung** von Darlehen und **Gewinnausschüttung**.

# Liquiditätsgrade

| Grad | Formel | Faustregel |
|---|---|---|
| **1. Grades** (Barliquidität) | flüssige Mittel ÷ kurzfristige Verbindlichkeiten × 100 | oft 10–30 % als ausreichend angesehen |
| **2. Grades** (einzugsbedingt) | (flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristige Verbindlichkeiten × 100 | mindestens 100 % |
| **3. Grades** (umsatzbedingt) | (flüssige Mittel + Forderungen + Vorräte) ÷ kurzfristige Verbindlichkeiten × 100 | 120–200 % |

Die Faustregeln sind Erfahrungswerte aus der Betriebswirtschaftslehre, keine gesetzlichen Grenzwerte. Für Speditionen ist die Liquidität 2. Grades besonders wichtig: Frachtführer und Subunternehmer wollen oft schneller bezahlt werden, als die Versender zahlen.

# Vergleichen

Eine Kennzahl ist erst im **Vergleich** aussagekräftig:
- **Zeitvergleich** (Vorjahre des eigenen Betriebs),
- **Betriebsvergleich** (andere Speditionen, Branchenwerte),
- **Soll-Ist-Vergleich** (Plan gegen Ergebnis).`,
  terms: [
    { term: 'Kennzahl', def: 'Verhältniszahl aus zwei betrieblichen Größen, die einen Sachverhalt verdichtet und vergleichbar macht.' },
    { term: 'Eigenkapitalrentabilität', def: 'Gewinn ÷ Eigenkapital × 100; Verzinsung des von den Eigentümern eingesetzten Kapitals.' },
    { term: 'Gesamtkapitalrentabilität', def: '(Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100; Verzinsung des gesamten eingesetzten Kapitals.' },
    { term: 'Umsatzrentabilität', def: 'Gewinn ÷ Umsatzerlöse × 100; Gewinnanteil je 100 € Umsatz.' },
    { term: 'Wirtschaftlichkeit', def: 'Leistungen ÷ Kosten bzw. Erträge ÷ Aufwendungen; Wert über 1 bedeutet Gewinn.' },
    { term: 'Produktivität', def: 'Mengenverhältnis aus Ausbringung und Einsatz, z. B. Sendungen je Mitarbeiterstunde.' },
    { term: 'Cashflow', def: 'Aus der laufenden Geschäftstätigkeit erwirtschafteter Zahlungsmittelüberschuss; vereinfacht Jahresüberschuss + Abschreibungen ± Veränderung langfristiger Rückstellungen.' },
    { term: 'Liquidität', def: 'Fähigkeit, fällige Verbindlichkeiten fristgerecht zu bezahlen; gemessen mit Liquiditätsgraden.' },
    { term: 'Leverage-Effekt', def: 'Hebelwirkung des Fremdkapitals: Liegt die Gesamtkapitalrentabilität über dem Fremdkapitalzins, erhöht zusätzliches Fremdkapital die Eigenkapitalrentabilität.' }
  ],
  example: `# Saar-Trans Spedition GmbH – Kennzahlen 2025 (Beispielzahlen)

| Ausgangswerte | € |
|---|---:|
| Eigenkapital | 750.000 |
| Fremdkapital | 1.250.000 |
| Gesamtkapital | 2.000.000 |
| Jahresüberschuss | 90.000 |
| Fremdkapitalzinsen | 50.000 |
| Umsatzerlöse | 4.500.000 |
| Kosten (Kostenrechnung) | 4.320.000 |
| Abschreibungen | 210.000 |
| Erhöhung langfristiger Rückstellungen | 15.000 |
| flüssige Mittel (Bank, Kasse) | 80.000 |
| Forderungen a. LL | 360.000 |
| Vorräte (Diesel, Verpackung) | 20.000 |
| kurzfristige Verbindlichkeiten | 400.000 |

| Kennzahl | Rechnung | Ergebnis |
|---|---|---:|
| Eigenkapitalrentabilität | 90.000 ÷ 750.000 × 100 | 12,0 % |
| Gesamtkapitalrentabilität | (90.000 + 50.000) ÷ 2.000.000 × 100 | 7,0 % |
| Umsatzrentabilität | 90.000 ÷ 4.500.000 × 100 | 2,0 % |
| Wirtschaftlichkeit | 4.500.000 ÷ 4.320.000 (Umsatz als Leistung) | rund 1,04 |
| Cashflow | 90.000 + 210.000 + 15.000 | 315.000 € |
| Liquidität 1. Grades | 80.000 ÷ 400.000 × 100 | 20 % |
| Liquidität 2. Grades | (80.000 + 360.000) ÷ 400.000 × 100 | 110 % |
| Liquidität 3. Grades | (80.000 + 360.000 + 20.000) ÷ 400.000 × 100 | 115 % |

**Deutung:** Der Fremdkapitalzins beträgt 50.000 ÷ 1.250.000 = 4 %. Die Gesamtkapitalrentabilität (7 %) liegt darüber; das Fremdkapital „verdient“ mehr, als es kostet, und hebt die Eigenkapitalrentabilität auf 12 %. Die Liquidität 2. Grades ist mit 110 % ausreichend. Mit dem Cashflow von 315.000 € könnte die Spedition z. B. eine neue Sattelzugmaschine zu großen Teilen selbst finanzieren.

**Produktivität im Umschlag:** 18.400 Sendungen ÷ 2.300 Arbeitsstunden = 8 Sendungen je Stunde.`,
  rules: [
    'Kennzahlen sind Verhältniszahlen – erst im Zeit-, Betriebs- oder Soll-Ist-Vergleich aussagekräftig.',
    'Bei der Gesamtkapitalrentabilität die Fremdkapitalzinsen zum Gewinn addieren.',
    'Wirtschaftlichkeit vergleicht Werte (€), Produktivität vergleicht Mengen.',
    'Cashflow (vereinfacht) = Jahresüberschuss + Abschreibungen ± Veränderung der langfristigen Rückstellungen.',
    'Liquidität 2. Grades sollte mindestens 100 % betragen.',
    'Gesamtkapitalrentabilität > Fremdkapitalzins: Mehr Fremdkapital erhöht die Eigenkapitalrentabilität (aber auch das Risiko).'
  ],
  summary: `- **EK-Rentabilität** = Gewinn ÷ EK × 100
- **GK-Rentabilität** = (Gewinn + FK-Zinsen) ÷ GK × 100
- **Umsatzrentabilität** = Gewinn ÷ Umsatz × 100
- **Wirtschaftlichkeit** = Leistungen ÷ Kosten (> 1 = Gewinn)
- **Produktivität** = Ausbringung ÷ Einsatz (Mengen)
- **Cashflow** = Jahresüberschuss + Abschreibungen ± Veränderung langfristiger Rückstellungen
- **Liquidität 1./2./3. Grades**: flüssige Mittel / + Forderungen / + Vorräte, jeweils ÷ kurzfristige Verbindlichkeiten × 100
- **Leverage-Effekt**: GK-Rentabilität > FK-Zins → mehr FK erhöht EK-Rentabilität.`,
  mistakes: [
    { wrong: 'Bei der Gesamtkapitalrentabilität wird nur der Gewinn durch das Gesamtkapital geteilt.', right: 'Die Fremdkapitalzinsen werden zum Gewinn addiert, weil sie die Verzinsung des Fremdkapitals sind.' },
    { wrong: 'Produktivität und Wirtschaftlichkeit sind dasselbe.', right: 'Produktivität ist ein Mengenverhältnis (z. B. Sendungen je Stunde), Wirtschaftlichkeit ein Wertverhältnis (Leistungen ÷ Kosten).' },
    { wrong: 'Ein hoher Gewinn bedeutet automatisch, dass die Spedition zahlungsfähig ist.', right: 'Gewinn und Liquidität sind verschieden: Wenn Kunden spät zahlen, kann trotz Gewinn das Geld knapp werden.' },
    { wrong: 'Abschreibungen werden beim Cashflow abgezogen, weil sie Aufwand sind.', right: 'Abschreibungen werden zum Jahresüberschuss addiert: Sie haben den Gewinn gemindert, aber kein Geld abfließen lassen.' },
    { wrong: 'Bei der Liquidität 2. Grades werden auch die Vorräte berücksichtigt.', right: 'Vorräte kommen erst bei der Liquidität 3. Grades hinzu.' }
  ],
  flashcards: [
    { q: 'Formel Eigenkapitalrentabilität?', a: 'Gewinn ÷ Eigenkapital × 100.' },
    { q: 'Formel Gesamtkapitalrentabilität?', a: '(Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100.' },
    { q: 'Formel Umsatzrentabilität?', a: 'Gewinn ÷ Umsatzerlöse × 100.' },
    { q: 'Was bedeutet eine Wirtschaftlichkeit von 0,97?', a: 'Die Kosten sind höher als die Leistungen – es entsteht ein Verlust.' },
    { q: 'Nenne eine Produktivitätskennzahl im Sammelgutumschlag.', a: 'Umgeschlagene Sendungen (oder Tonnen) je Mitarbeiterstunde.' },
    { q: 'Wie wird der Cashflow vereinfacht indirekt ermittelt?', a: 'Jahresüberschuss + Abschreibungen + Erhöhung (− Verminderung) der langfristigen Rückstellungen.' },
    { q: 'Was gehört in die Liquidität 2. Grades?', a: '(Flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristige Verbindlichkeiten × 100.' },
    { q: 'Welche Faustregel gilt für die Liquidität 2. Grades?', a: 'Mindestens 100 %.' },
    { q: 'Wann wirkt der Leverage-Effekt positiv?', a: 'Wenn die Gesamtkapitalrentabilität höher ist als der Fremdkapitalzinssatz.' },
    { q: 'Wofür kann der Cashflow verwendet werden?', a: 'Für Investitionen (z. B. neue Lkw), Schuldentilgung und Gewinnausschüttung.' }
  ],
  tasks: [
    {
      id: 'lf07-kennzahlen-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne jeder Kennzahl die passende Formel zu.',
      pairs: [
        ['Eigenkapitalrentabilität', 'Gewinn ÷ Eigenkapital × 100'],
        ['Gesamtkapitalrentabilität', '(Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100'],
        ['Umsatzrentabilität', 'Gewinn ÷ Umsatzerlöse × 100'],
        ['Liquidität 1. Grades', 'flüssige Mittel ÷ kurzfristige Verbindlichkeiten × 100']
      ],
      hints: ['Der Name verrät meist den Nenner.', 'Nur bei einer Kennzahl werden die Zinsen addiert.'],
      solution: 'EK-Rentabilität bezieht den Gewinn auf das **Eigenkapital**, GK-Rentabilität (Gewinn + **FK-Zinsen**) auf das **Gesamtkapital**, Umsatzrentabilität auf den **Umsatz**, Liquidität 1. Grades die **flüssigen Mittel** auf die kurzfristigen Verbindlichkeiten.'
    },
    {
      id: 'lf07-kennzahlen-a2', type: 'calc', difficulty: 2, points: 3,
      q: `Die Hochwald Logistik GmbH meldet für 2025 (Beispielzahlen): Jahresüberschuss 54.000 €, Eigenkapital 600.000 €, Fremdkapital 900.000 €, Fremdkapitalzinsen 36.000 €, Umsatzerlöse 3.000.000 €.

Berechne Eigenkapital-, Gesamtkapital- und Umsatzrentabilität.`,
      formula: 'EKR = Gewinn ÷ EK × 100; GKR = (Gewinn + FK-Zinsen) ÷ GK × 100; UR = Gewinn ÷ Umsatz × 100',
      fields: [
        { id: 'ekr', label: 'Eigenkapitalrentabilität', unit: '%', answer: 9, tol: 0.05 },
        { id: 'gkr', label: 'Gesamtkapitalrentabilität', unit: '%', answer: 6, tol: 0.05 },
        { id: 'ur', label: 'Umsatzrentabilität', unit: '%', answer: 1.8, tol: 0.05 }
      ],
      hints: ['Gesamtkapital = Eigenkapital + Fremdkapital.', 'Bei der GKR die Zinsen zum Gewinn addieren.'],
      solution: `**EK-Rentabilität:** 54.000 € ÷ 600.000 € × 100 = **9,0 %**

**Gesamtkapital:** 600.000 € + 900.000 € = 1.500.000 €

**GK-Rentabilität:** (54.000 € + 36.000 €) ÷ 1.500.000 € × 100 = 90.000 ÷ 1.500.000 × 100 = **6,0 %**

**Umsatzrentabilität:** 54.000 € ÷ 3.000.000 € × 100 = **1,8 %**`
    },
    {
      id: 'lf07-kennzahlen-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Bilanzauszug der Hochwald Logistik GmbH zum 31.12.2025 (Beispielzahlen): Bank und Kasse 45.000 €, Forderungen a. LL 195.000 €, Vorräte (Diesel, Paletten, Folie) 12.000 €, kurzfristige Verbindlichkeiten 300.000 €.

Berechne die Liquidität 1., 2. und 3. Grades.`,
      formula: 'Liquidität = (flüssige Mittel [+ Forderungen] [+ Vorräte]) ÷ kurzfristige Verbindlichkeiten × 100',
      fields: [
        { id: 'l1', label: 'Liquidität 1. Grades', unit: '%', answer: 15, tol: 0.05 },
        { id: 'l2', label: 'Liquidität 2. Grades', unit: '%', answer: 80, tol: 0.05 },
        { id: 'l3', label: 'Liquidität 3. Grades', unit: '%', answer: 84, tol: 0.05 }
      ],
      hints: ['Mit jedem Grad kommt ein weiterer Posten des Umlaufvermögens dazu.', 'Der Nenner ist immer 300.000 €.'],
      solution: `**1. Grades:** 45.000 € ÷ 300.000 € × 100 = **15 %**

**2. Grades:** (45.000 € + 195.000 €) ÷ 300.000 € × 100 = 240.000 ÷ 300.000 × 100 = **80 %**

**3. Grades:** (45.000 € + 195.000 € + 12.000 €) ÷ 300.000 € × 100 = 252.000 ÷ 300.000 × 100 = **84 %**

Beurteilung: Die Liquidität 2. Grades liegt unter der Faustregel von 100 %. Die Spedition kann ihre kurzfristigen Schulden nicht allein aus Geld und Forderungen decken – sie sollte z. B. das Forderungsmanagement (schnellere Rechnungsstellung, Mahnwesen) verbessern.`
    },
    {
      id: 'lf07-kennzahlen-a4', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Bliesgau Logistik e.K. hat 2025 einen Jahresüberschuss von **40.000 €**. Die Abschreibungen betragen **160.000 €**. Langfristige Rückstellungen wurden um **10.000 €** vermindert. Berechne den Cashflow (vereinfacht, indirekt).',
      formula: 'Cashflow = Jahresüberschuss + Abschreibungen ± Veränderung langfristiger Rückstellungen',
      fields: [
        { id: 'zw', label: 'Jahresüberschuss + Abschreibungen', unit: '€', answer: 200000, tol: 0.01 },
        { id: 'cf', label: 'Cashflow', unit: '€', answer: 190000, tol: 0.01 }
      ],
      hints: ['Abschreibungen mindern den Gewinn, aber nicht den Kontostand.', 'Eine Verminderung der Rückstellungen wird abgezogen.'],
      solution: `**Formel:** Cashflow = Jahresüberschuss + Abschreibungen − Verminderung langfristiger Rückstellungen

40.000 € + 160.000 € = **200.000 €**

200.000 € − 10.000 € = **190.000 €**

Begründung: Abschreibungen sind Aufwand ohne Auszahlung und werden addiert. Die Verminderung der Rückstellungen bedeutet meist, dass Geld für den früher gebildeten Zweck abgeflossen ist, ohne dass in diesem Jahr Aufwand entstand; sie wird abgezogen.`
    },
    {
      id: 'lf07-kennzahlen-a5', type: 'mc', difficulty: 1, points: 1,
      q: 'Im Umschlaglager der Saar-Trans Spedition GmbH wurden im Oktober 18.400 Sendungen in 2.300 Mitarbeiterstunden umgeschlagen. Welche Kennzahl wird mit „8 Sendungen je Stunde“ beschrieben?',
      options: ['Wirtschaftlichkeit', 'Produktivität', 'Umsatzrentabilität', 'Liquidität'],
      correct: [1],
      hints: ['Hier werden nur Mengen ins Verhältnis gesetzt.', 'Euro kommt in der Rechnung nicht vor.'],
      solution: '**Produktivität** = Ausbringungsmenge ÷ Einsatzmenge = 18.400 Sendungen ÷ 2.300 Stunden = 8 Sendungen je Stunde. Wirtschaftlichkeit und Rentabilität vergleichen Werte in Euro, Liquidität die Zahlungsfähigkeit.'
    },
    {
      id: 'lf07-kennzahlen-a6', type: 'calc', difficulty: 2, points: 3,
      q: 'Im Kontraktlager der Spedition wurden 2025 **216.000 Positionen** in **19.200 Arbeitsstunden** kommissioniert. 2024 lag die Produktivität bei **10,5 Positionen je Stunde**. Die Erträge des Lagers betrugen 2025 **1.260.000 €**, die Aufwendungen **1.200.000 €**. Berechne die Produktivität 2025, ihre Veränderung gegenüber 2024 in % und die Wirtschaftlichkeit des Lagers.',
      formula: 'Produktivität = Positionen ÷ Stunden; Veränderung = (neu − alt) ÷ alt × 100; Wirtschaftlichkeit = Erträge ÷ Aufwendungen',
      fields: [
        { id: 'prod', label: 'Produktivität 2025', unit: 'Positionen/Std.', answer: 11.25, tol: 0.01 },
        { id: 'ver', label: 'Veränderung gegenüber 2024', unit: '%', answer: 7.14, tol: 0.01 },
        { id: 'wirt', label: 'Wirtschaftlichkeit', unit: '', answer: 1.05, tol: 0.005 }
      ],
      hints: ['216.000 ÷ 19.200.', 'Veränderung: (11,25 − 10,5) ÷ 10,5 × 100.'],
      solution: `**Produktivität:** 216.000 Positionen ÷ 19.200 Std. = **11,25 Positionen je Stunde**

**Veränderung:** (11,25 − 10,5) ÷ 10,5 × 100 = 0,75 ÷ 10,5 × 100 = **7,14 %** (gerundet)

**Wirtschaftlichkeit:** 1.260.000 € ÷ 1.200.000 € = **1,05**

Deutung: Je Stunde werden gut 7 % mehr Positionen kommissioniert; das Lager arbeitet wirtschaftlich (Erträge 5 % über den Aufwendungen).`
    },
    {
      id: 'lf07-kennzahlen-a7', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Wirtschaftlichkeit vergleicht [[Werte|Geldwerte|Euro]], Produktivität vergleicht [[Mengen|Stückzahlen]]. Liegt die Gesamtkapitalrentabilität über dem [[Fremdkapitalzins|Fremdkapitalzinssatz|FK-Zins]], erhöht zusätzliches Fremdkapital die [[Eigenkapitalrentabilität|EK-Rentabilität]].',
      hints: ['Euro oder Stück?', 'Denke an den Leverage-Effekt.'],
      solution: 'Wirtschaftlichkeit vergleicht **Werte** (€), Produktivität vergleicht **Mengen**. Leverage-Effekt: GK-Rentabilität > **Fremdkapitalzins** → **Eigenkapitalrentabilität** steigt.'
    },
    {
      id: 'lf07-kennzahlen-a8', type: 'mc', difficulty: 2, points: 2,
      q: 'Eine Spedition erzielt einen hohen Gewinn, hat aber eine Liquidität 2. Grades von nur 70 %. Welche Aussagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Die Spedition kann trotz Gewinn in Zahlungsschwierigkeiten geraten.',
        'Gewinn und Liquidität bedeuten dasselbe.',
        'Ein besseres Forderungsmanagement (schnelle Rechnungsstellung, Mahnungen) kann die Liquidität verbessern.',
        'Die Liquidität 2. Grades enthält auch den Dieselvorrat.'
      ],
      correct: [0, 2],
      hints: ['Gewinn ist eine Erfolgsgröße, Liquidität eine Zahlungsgröße.', 'Welche Posten stehen in der Liquidität 2. Grades?'],
      solution: 'Richtig sind A und C. Gewinn sagt nichts darüber, ob das Geld schon auf dem Konto ist. Schnell eingetriebene Forderungen erhöhen die flüssigen Mittel. Vorräte wie Diesel gehören erst zur Liquidität **3.** Grades.'
    },
    {
      id: 'lf07-kennzahlen-a9', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Schritte des vereinfachten indirekten Cashflow-Schemas in die richtige Reihenfolge.',
      items: [
        'Jahresüberschuss laut Gewinn- und Verlustrechnung',
        '+ Abschreibungen',
        '+ Erhöhung bzw. − Verminderung der langfristigen Rückstellungen',
        '= Cashflow'
      ],
      hints: ['Ausgangspunkt ist der Erfolg des Jahres.', 'Das Ergebnis steht am Schluss.'],
      solution: 'Man beginnt beim **Jahresüberschuss**, addiert die **Abschreibungen** (keine Auszahlung), korrigiert um die **Veränderung der langfristigen Rückstellungen** und erhält den **Cashflow**.'
    },
    {
      id: 'lf07-kennzahlen-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Lohnt sich ein Darlehen für zwei neue Sattelzüge?',
      intro: `Die Saar-Logistik GmbH in Saarlouis hat 2025 (Beispielzahlen): Eigenkapital 800.000 €, Fremdkapital 1.200.000 €, Jahresüberschuss 64.000 €, Fremdkapitalzinsen 60.000 €, Umsatzerlöse 3.200.000 €.

Die Geschäftsführung überlegt, zwei neue Sattelzüge mit einem Bankdarlehen zu finanzieren. Der Fremdkapitalzins bleibt voraussichtlich gleich.`,
      hints: ['Berechne zuerst die Rentabilitäten.', 'Vergleiche die Gesamtkapitalrentabilität mit dem Fremdkapitalzinssatz.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf07-kennzahlen-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne Eigenkapitalrentabilität, Gesamtkapitalrentabilität und Umsatzrentabilität.',
          formula: 'EKR = Gewinn ÷ EK × 100; GKR = (Gewinn + FK-Zinsen) ÷ GK × 100; UR = Gewinn ÷ Umsatz × 100',
          fields: [
            { id: 'ekr', label: 'Eigenkapitalrentabilität', unit: '%', answer: 8, tol: 0.05 },
            { id: 'gkr', label: 'Gesamtkapitalrentabilität', unit: '%', answer: 6.2, tol: 0.05 },
            { id: 'ur', label: 'Umsatzrentabilität', unit: '%', answer: 2, tol: 0.05 }
          ],
          hints: ['Gesamtkapital = 2.000.000 €.', 'Gewinn + Zinsen = 124.000 €.'],
          solution: `**EKR:** 64.000 € ÷ 800.000 € × 100 = **8,0 %**

**GKR:** (64.000 € + 60.000 €) ÷ 2.000.000 € × 100 = 124.000 ÷ 2.000.000 × 100 = **6,2 %**

**UR:** 64.000 € ÷ 3.200.000 € × 100 = **2,0 %**`
        },
        {
          id: 'lf07-kennzahlen-a10-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne den durchschnittlichen Fremdkapitalzinssatz.',
          formula: 'FK-Zinssatz = FK-Zinsen ÷ Fremdkapital × 100',
          fields: [
            { id: 'fkz', label: 'Fremdkapitalzinssatz', unit: '%', answer: 5, tol: 0.05 }
          ],
          hints: ['Zinsen durch Fremdkapital.', '60.000 € ÷ 1.200.000 €.'],
          solution: '**FK-Zinssatz:** 60.000 € ÷ 1.200.000 € × 100 = **5,0 %**'
        },
        {
          id: 'lf07-kennzahlen-a10-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Aussagen zur geplanten Darlehensfinanzierung sind richtig? (Mehrfachauswahl)',
          options: [
            'Weil die Gesamtkapitalrentabilität (6,2 %) über dem Fremdkapitalzins (5 %) liegt, steigt die Eigenkapitalrentabilität, wenn die neuen Lkw genauso rentabel eingesetzt werden.',
            'Mehr Fremdkapital senkt immer das Risiko der Spedition.',
            'Sinkt die Gesamtkapitalrentabilität unter den Fremdkapitalzins, würde die Eigenkapitalrentabilität durch das Darlehen sinken.',
            'Die Umsatzrentabilität entscheidet allein, ob ein Darlehen sinnvoll ist.'
          ],
          correct: [0, 2],
          hints: ['Leverage-Effekt: Was verdient ein geliehener Euro, was kostet er?', 'Zinsen müssen auch in schlechten Jahren gezahlt werden.'],
          solution: 'Richtig sind A und C (**Leverage-Effekt**). Jeder geliehene Euro bringt 6,2 % und kostet 5 %; die Differenz erhöht den Gewinn der Eigentümer. Fällt die Rentabilität unter den Zinssatz, kehrt sich der Hebel um. Mehr Fremdkapital **erhöht** das Risiko, weil Zins und Tilgung fest sind. Die Umsatzrentabilität allein sagt darüber nichts aus.'
        }
      ]
    },
    {
      id: 'lf07-kennzahlen-a11', type: 'text', difficulty: 2, points: 3,
      q: 'Die Umsatzrentabilität einer Spedition ist von 2,4 % auf 1,6 % gesunken. Nenne zwei mögliche Ursachen aus dem Speditionsalltag und zwei Maßnahmen.',
      model: 'Mögliche Ursachen: Die Dieselpreise und Mautkosten sind gestiegen, ohne dass die Preise angepasst wurden; die Frachtführer verlangen höhere Frachten; starker Preisdruck durch Wettbewerber. Maßnahmen: Dieselzuschlag bzw. Preisgleitklausel mit den Kunden vereinbaren, Kosten senken durch bessere Tourenplanung und höhere Auslastung, unrentable Relationen oder Kunden mit der Deckungsbeitragsrechnung prüfen.',
      criteria: [
        { text: 'nennt eine Kostenursache (Diesel, Maut, Fremdfracht, Personal)', keywords: ['Diesel|Kraftstoff|Maut|Fracht|Lohn|Personal|Kosten'], points: 1 },
        { text: 'nennt eine Preis-/Erlösursache oder Wettbewerb', keywords: ['Preis|Wettbewerb|Konkurrenz|Erlös'], points: 1 },
        { text: 'nennt eine sinnvolle Maßnahme', keywords: ['Zuschlag|Gleitklausel|Tourenplanung|Auslastung|Deckungsbeitrag|verhandeln|anpassen'], points: 1 }
      ],
      hints: ['Gewinn = Erlöse − Kosten: Was kann sich verschlechtert haben?', 'Wie kann man Erlöse erhöhen oder Kosten senken?'],
      solution: 'Ursachen: steigende **Kosten** (Diesel, Maut, Fremdfrachten, Löhne) ohne Preisanpassung oder sinkende **Preise** durch Wettbewerb. Maßnahmen: **Dieselzuschlag/Preisgleitklausel**, bessere **Auslastung und Tourenplanung**, Prüfung unrentabler Aufträge mit der **Deckungsbeitragsrechnung**, Nachverhandlung mit Kunden und Frachtführern.'
    }
  ],
  quiz: ['lf07-kennzahlen-a2', 'lf07-kennzahlen-a3', 'lf07-kennzahlen-a4', 'lf07-kennzahlen-a6', 'lf07-kennzahlen-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 7, Inhalte: Kennzahlen, Rentabilität, Wirtschaftlichkeit, Produktivität, Cashflow, Liquidität' },
    { title: 'Handelsgesetzbuch § 266 Gliederung der Bilanz', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__266.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 275 Gliederung der Gewinn- und Verlustrechnung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__275.html', asOf: '2026' }
  ],
  links: ['lf07-kostenarten', 'lf07-deckungsbeitrag', 'lf03-inventur-bilanz']
};
