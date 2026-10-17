export default {
  id: 'lf07-deckungsbeitrag',
  area: 'LF07',
  topic: 'lf07-deckungsbeitrag',
  title: 'Deckungsbeitragsrechnung und Break-even',
  status: 'vollstaendig',
  minutes: 45,
  validity: null,
  goals: [
    'Ich kann fixe und variable Kosten in einem Speditions- und Logistikbetrieb unterscheiden.',
    'Ich kann den Unterschied zwischen Vollkostenrechnung und Teilkostenrechnung erklären.',
    'Ich kann den Deckungsbeitrag je Einheit (je Tour, je Sendung, je km, je Palettenstellplatz) und den Gesamtdeckungsbeitrag berechnen.',
    'Ich kann das Betriebsergebnis mit der Deckungsbeitragsrechnung ermitteln.',
    'Ich kann die Gewinnschwelle (Break-even-Point) berechnen und deuten.',
    'Ich kann die kurzfristige und die langfristige Preisuntergrenze bestimmen.',
    'Ich kann begründet entscheiden, ob ein Zusatzauftrag angenommen werden sollte.',
    'Ich kann eine einfache mehrstufige Deckungsbeitragsrechnung aufstellen.'
  ],
  simple: `# Worum geht es?

Jeder Lkw, jede Lagerhalle und jede Relation verursacht Kosten. Manche Kosten fallen immer an, egal wie viel gefahren oder gelagert wird. Andere entstehen nur, wenn tatsächlich gearbeitet wird.

- **Fixe Kosten** bleiben gleich, auch wenn sich die Leistung ändert. Beispiele: Abschreibung des Lkw, Kfz-Steuer, Kfz-Versicherung, Miete der Lagerhalle, Gehälter in der Disposition.
- **Variable Kosten** steigen und fallen mit der Leistung. Beispiele: Diesel, Reifenverschleiß, streckenabhängige Maut, Spesen je Tour, Verpackungsmaterial je Palette.

Der **Deckungsbeitrag (DB)** ist der Betrag, der nach Abzug der variablen Kosten vom Erlös übrig bleibt:

> **Deckungsbeitrag = Erlös − variable Kosten**

Dieser Betrag „deckt“ zuerst die fixen Kosten. Was danach noch übrig ist, ist Gewinn.

> **Betriebsergebnis = Summe der Deckungsbeiträge − fixe Kosten**

Die **Gewinnschwelle (Break-even-Point)** ist die Menge, bei der die Deckungsbeiträge genau die fixen Kosten decken. Dann ist das Ergebnis 0 €. Jede Einheit darüber bringt Gewinn.

**Faustregel für Zusatzaufträge:** Wenn freie Kapazität vorhanden ist und der Erlös höher ist als die variablen Kosten (positiver Deckungsbeitrag), verbessert der Auftrag das Ergebnis, auch wenn er die vollen Kosten nicht deckt.`,
  deep: `# Vollkostenrechnung und Teilkostenrechnung

| | Vollkostenrechnung | Teilkostenrechnung (Deckungsbeitragsrechnung) |
|---|---|---|
| Welche Kosten werden dem Auftrag zugerechnet? | alle Kosten, auch anteilige Fixkosten | nur die variablen Kosten |
| Ergebnis je Auftrag | Gewinn oder Verlust je Auftrag | Deckungsbeitrag je Auftrag |
| Typische Frage | Welchen Preis brauche ich langfristig? | Lohnt sich dieser Auftrag jetzt? |
| Problem | Fixkosten werden mit einem Schlüssel verteilt; der Anteil je Einheit hängt von der Auslastung ab | Fixkosten werden kurzfristig nicht beachtet; langfristig müssen sie trotzdem gedeckt werden |

**Warum ist die Verteilung der Fixkosten problematisch?** Die Fixkosten je km hängen von der gefahrenen Strecke ab. Fährt ein Lkw mehr, sinken die Fixkosten je km. Wer einen Zusatzauftrag mit den alten Vollkosten je km bewertet, rechnet ihn zu teuer und lehnt womöglich einen Auftrag ab, der das Ergebnis verbessert hätte.

# Formeln im Überblick

| Größe | Formel |
|---|---|
| Deckungsbeitrag je Einheit (db) | Erlös je Einheit (p) − variable Kosten je Einheit (kv) |
| Gesamtdeckungsbeitrag (DB) | db × Menge **oder** Umsatzerlöse − gesamte variable Kosten |
| Betriebsergebnis | DB − fixe Kosten (Kf) |
| Gewinnschwelle (Menge) | Kf ÷ db |
| Gewinnschwelle (Umsatz) | Gewinnschwellenmenge × p |
| Kurzfristige Preisuntergrenze | kv (variable Kosten je Einheit) |
| Langfristige Preisuntergrenze | Selbstkosten je Einheit = kv + Kf ÷ Menge |

**Einheiten** können je nach Betrieb verschieden sein: je km, je Tour, je Sendung, je 100 kg, je Palettenstellplatz und Monat. Wichtig ist, dass Erlös und variable Kosten **auf dieselbe Einheit** bezogen sind.

# Kurzfristige und langfristige Preisuntergrenze

- **Kurzfristige Preisuntergrenze** = variable Kosten. Ein Preis darunter vergrößert den Verlust, denn jede Einheit kostet mehr, als sie einbringt. Darüber trägt jeder Auftrag etwas zur Deckung der Fixkosten bei. Das gilt nur, solange Kapazität frei ist und die Fixkosten ohnehin anfallen.
- **Langfristige Preisuntergrenze** = Selbstkosten (Vollkosten) je Einheit. Auf Dauer muss ein Betrieb alle Kosten decken, sonst verliert er Geld.

# Zusatzauftrag annehmen oder ablehnen?

Prüfe nacheinander:

1. Ist **freie Kapazität** vorhanden (Fahrzeug, Fahrer, Lagerfläche)? Verdrängt der Auftrag keinen anderen, besseren Auftrag?
2. Ist der **Deckungsbeitrag positiv** (Erlös > variable Kosten)?
3. Entstehen **zusätzliche fixe Kosten** (z. B. Miete für ein zusätzliches Fahrzeug)? Dann muss der DB auch diese decken.
4. **Qualitative Gründe**: Neukunde, Folgeaufträge, Leerfahrt vermeiden, aber auch Gefahr, dass Stammkunden ebenfalls niedrigere Preise verlangen.

# Mehrstufige Deckungsbeitragsrechnung

Bei der einstufigen Rechnung werden alle Fixkosten in einem Block abgezogen. Bei der **mehrstufigen** Rechnung werden die Fixkosten danach aufgeteilt, wem sie direkt zugerechnet werden können:

| Stufe | Rechnung |
|---|---|
| Umsatzerlöse einer Sparte | |
| − variable Kosten | |
| **= Deckungsbeitrag I** | |
| − Sparten-Fixkosten (z. B. Fahrzeuge nur für den Ladungsverkehr, Miete der Lagerhalle nur für die Kontraktlogistik) | |
| **= Deckungsbeitrag II** | |
| Summe aller DB II − Unternehmensfixkosten (Geschäftsführung, Buchhaltung, Verwaltungsgebäude) | |
| **= Betriebsergebnis** | |

So sieht man, welche Sparte ihre eigenen Fixkosten deckt und wie viel sie zum gemeinsamen Ergebnis beiträgt. Eine Sparte mit positivem DB II sollte man nicht einfach aufgeben, nur weil ihr nach Verteilung aller Gemeinkosten ein Verlust zugerechnet wird.`,
  terms: [
    { term: 'Fixe Kosten', def: 'Kosten, die sich bei Änderung der Leistungsmenge (km, Sendungen, Stellplätze) innerhalb eines Zeitraums nicht ändern, z. B. Abschreibung, Kfz-Steuer, Miete.' },
    { term: 'Variable Kosten', def: 'Kosten, die sich mit der Leistungsmenge verändern, z. B. Diesel, Reifen, streckenabhängige Maut, Spesen je Tour.' },
    { term: 'Vollkostenrechnung', def: 'Kostenrechnung, die einem Auftrag alle Kosten zurechnet, also auch anteilige Fixkosten.' },
    { term: 'Teilkostenrechnung', def: 'Kostenrechnung, die einem Auftrag nur die variablen Kosten zurechnet; Grundlage der Deckungsbeitragsrechnung.' },
    { term: 'Deckungsbeitrag', def: 'Erlös minus variable Kosten. Er steht zur Deckung der fixen Kosten und danach als Gewinn zur Verfügung.' },
    { term: 'Betriebsergebnis', def: 'Summe der Deckungsbeiträge minus fixe Kosten; positiv = Betriebsgewinn, negativ = Betriebsverlust.' },
    { term: 'Gewinnschwelle (Break-even-Point)', def: 'Menge oder Umsatz, bei der die Deckungsbeiträge genau die fixen Kosten decken; Betriebsergebnis = 0 €.' },
    { term: 'Kurzfristige Preisuntergrenze', def: 'Preis in Höhe der variablen Kosten je Einheit; darunter wird der Verlust durch jeden Auftrag größer.' },
    { term: 'Langfristige Preisuntergrenze', def: 'Preis in Höhe der Selbstkosten (Vollkosten) je Einheit; nur so werden auf Dauer alle Kosten gedeckt.' },
    { term: 'Zusatzauftrag', def: 'Auftrag, der zusätzlich zur geplanten Auslastung angenommen werden kann, meist zu einem niedrigeren Preis.' },
    { term: 'Mehrstufige Deckungsbeitragsrechnung', def: 'Deckungsbeitragsrechnung, bei der die Fixkosten in Stufen (z. B. Sparten-Fixkosten, Unternehmensfixkosten) abgezogen werden: DB I, DB II, Betriebsergebnis.' }
  ],
  example: `# Beispiel: Sattelzug der Saar-Trans GmbH (Beispielzahlen)

Die Saar-Trans GmbH in Saarlouis setzt einen Sattelzug im Ladungsverkehr ein.

| Kostenart | Betrag | fix oder variabel? |
|---|---:|---|
| Abschreibung, Kfz-Steuer, Versicherung, Fahrerlohn, anteilige Verwaltung | 9.600 € je Monat | fix |
| Diesel, Reifen, Wartung, streckenabhängige Maut | 0,90 € je km | variabel |

Der durchschnittliche Erlös beträgt **1,70 € je km**. Geplant sind **13.500 km** im Monat.

**1. Deckungsbeitrag je km:** 1,70 €/km − 0,90 €/km = **0,80 €/km**

**2. Gesamtdeckungsbeitrag:** 13.500 km × 0,80 €/km = **10.800 €**

**3. Betriebsergebnis:** 10.800 € − 9.600 € = **1.200 € Gewinn**

**4. Gewinnschwelle:** 9.600 € ÷ 0,80 €/km = **12.000 km** im Monat. Ab dem 12.001. km verdient der Lkw Geld.

**5. Zusatzauftrag:** Ein Kunde bietet für eine Tour über 380 km zusätzlich 400 €. Der Lkw hätte an diesem Tag sonst keinen Auftrag, die 380 km kommen also zusätzlich zur Planung hinzu.

- Variable Kosten: 380 km × 0,90 €/km = 342 €
- Deckungsbeitrag: 400 € − 342 € = **58 €** → Das Betriebsergebnis steigt um 58 €. Annehmen.
- Mit Vollkosten gerechnet (9.600 € ÷ 13.500 km = 0,71 €/km fix + 0,90 €/km = 1,61 €/km) sähe der Auftrag wie ein Verlust aus: 380 × 1,61 € ≈ 612 € Kosten. Die Fixkosten fallen aber auch ohne den Auftrag an.
- Bei einem Angebot von 300 € wäre der DB 300 € − 342 € = **−42 €**. Ablehnen: Der Preis liegt unter der kurzfristigen Preisuntergrenze von 342 €.

# Beispiel Lagerdienstleistung

Ein Lager mit 8.000 Palettenstellplätzen hat fixe Kosten von 36.000 € je Monat. Je belegtem Stellplatz entstehen 3,50 € variable Kosten (Energie, Flurförderzeuge, Handling-Material); der Kunde zahlt 9,50 € je Stellplatz und Monat.

- db = 9,50 € − 3,50 € = 6,00 € je Stellplatz
- Gewinnschwelle = 36.000 € ÷ 6,00 € = **6.000 belegte Stellplätze** (= 75 % Auslastung)`,
  rules: [
    'Deckungsbeitrag = Erlös − variable Kosten. Er deckt zuerst die fixen Kosten, der Rest ist Gewinn.',
    'Betriebsergebnis = Summe der Deckungsbeiträge − fixe Kosten.',
    'Gewinnschwelle (Menge) = fixe Kosten ÷ Deckungsbeitrag je Einheit.',
    'Kurzfristige Preisuntergrenze = variable Kosten je Einheit; langfristige Preisuntergrenze = Selbstkosten je Einheit.',
    'Zusatzauftrag annehmen, wenn Kapazität frei ist, der Deckungsbeitrag positiv ist und keine wichtigen qualitativen Gründe dagegen sprechen.',
    'Fixkosten je Einheit hängen von der Auslastung ab. Für Entscheidungen über einzelne Aufträge deshalb mit Deckungsbeiträgen rechnen, nicht mit Vollkosten je Einheit.'
  ],
  summary: `- **Fixe Kosten** bleiben bei Mengenänderung gleich, **variable Kosten** ändern sich mit der Menge.
- **Vollkostenrechnung** rechnet alle Kosten zu, **Teilkostenrechnung** nur die variablen.
- **db = p − kv**, **DB = db × Menge**, **Betriebsergebnis = DB − Kf**.
- **Gewinnschwelle = Kf ÷ db**: Dort ist das Ergebnis genau 0 €.
- **Kurzfristige Preisuntergrenze = kv**, **langfristige Preisuntergrenze = Selbstkosten je Einheit**.
- **Zusatzauftrag:** bei freier Kapazität und positivem DB annehmen, qualitative Gründe prüfen.
- **Mehrstufig:** Erlöse − variable Kosten = DB I; − Sparten-Fixkosten = DB II; − Unternehmensfixkosten = Betriebsergebnis.`,
  mistakes: [
    { wrong: 'Der Deckungsbeitrag ist der Gewinn eines Auftrags.', right: 'Der Deckungsbeitrag muss erst die fixen Kosten decken. Gewinn entsteht erst, wenn die Summe der Deckungsbeiträge größer ist als die fixen Kosten.' },
    { wrong: 'Ein Zusatzauftrag unter den Vollkosten je km ist immer ein Verlustgeschäft.', right: 'Bei freier Kapazität fallen die Fixkosten ohnehin an. Entscheidend ist, ob der Erlös die variablen Kosten übersteigt (positiver DB).' },
    { wrong: 'Kfz-Steuer und Versicherung sind variabel, weil sie für den Lkw anfallen.', right: 'Sie fallen unabhängig von der Fahrleistung an und sind deshalb fixe Kosten. Variabel sind z. B. Diesel und streckenabhängige Maut.' },
    { wrong: 'Bei der Gewinnschwelle teile ich die fixen Kosten durch den Preis je Einheit.', right: 'Man teilt die fixen Kosten durch den Deckungsbeitrag je Einheit (Preis − variable Kosten).' },
    { wrong: 'Wenn der Preis über den variablen Kosten liegt, kann ich dauerhaft zu diesem Preis anbieten.', right: 'Das gilt nur kurzfristig. Langfristig müssen alle Kosten gedeckt sein, die Preisuntergrenze sind dann die Selbstkosten.' }
  ],
  flashcards: [
    { q: 'Wie berechnet man den Deckungsbeitrag je Einheit?', a: 'Erlös je Einheit − variable Kosten je Einheit (db = p − kv).' },
    { q: 'Wie berechnet man das Betriebsergebnis mit der Deckungsbeitragsrechnung?', a: 'Summe der Deckungsbeiträge − fixe Kosten.' },
    { q: 'Wie berechnet man die Gewinnschwellenmenge?', a: 'Fixe Kosten ÷ Deckungsbeitrag je Einheit.' },
    { q: 'Was ist die kurzfristige Preisuntergrenze?', a: 'Die variablen Kosten je Einheit. Darunter vergrößert jeder Auftrag den Verlust.' },
    { q: 'Was ist die langfristige Preisuntergrenze?', a: 'Die Selbstkosten (Vollkosten) je Einheit: variable Kosten plus anteilige fixe Kosten.' },
    { q: 'Nenne drei fixe Kosten eines Lkw.', a: 'Zum Beispiel Abschreibung, Kfz-Steuer, Kfz-Versicherung, Fahrerlohn (bei festem Monatslohn), Garagen- oder Stellplatzmiete.' },
    { q: 'Nenne drei variable Kosten eines Lkw.', a: 'Zum Beispiel Diesel, AdBlue, Reifenverschleiß, streckenabhängige Maut, Spesen je Tour.' },
    { q: 'Welche Bedingungen müssen für die Annahme eines Zusatzauftrags erfüllt sein?', a: 'Freie Kapazität, positiver Deckungsbeitrag, keine zusätzlichen Fixkosten, die der DB nicht deckt, und keine wichtigen qualitativen Gründe dagegen.' },
    { q: 'Was ist der Unterschied zwischen DB I und DB II?', a: 'DB I = Erlöse − variable Kosten. DB II = DB I − Fixkosten, die der Sparte direkt zugerechnet werden können.' },
    { q: 'Warum sinken die Fixkosten je km, wenn ein Lkw mehr fährt?', a: 'Die fixen Kosten bleiben gleich, verteilen sich aber auf mehr Kilometer.' }
  ],
  tasks: [
    {
      id: 'lf07-deckungsbeitrag-a1', type: 'mc', difficulty: 1, points: 2,
      q: 'Welche Kosten eines Sattelzugs sind **fixe Kosten**? (Mehrfachauswahl)',
      options: [
        'Kfz-Steuer',
        'Dieselkosten',
        'Haftpflicht- und Kaskoversicherung',
        'Streckenabhängige Lkw-Maut',
        'Zeitabhängige Abschreibung des Fahrzeugs',
        'Reifenverschleiß'
      ],
      correct: [0, 2, 4],
      hints: ['Frage dich: Fällt der Betrag auch an, wenn der Lkw einen Monat lang auf dem Hof steht?', 'Kraftstoff, Maut und Reifen hängen von den gefahrenen Kilometern ab.'],
      solution: 'Fix sind **Kfz-Steuer, Versicherung und die zeitabhängige Abschreibung**. Sie fallen auch an, wenn der Lkw nicht fährt. Diesel, streckenabhängige Maut und Reifenverschleiß steigen mit den gefahrenen Kilometern und sind deshalb variabel.'
    },
    {
      id: 'lf07-deckungsbeitrag-a2', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Der Deckungsbeitrag ist der Erlös abzüglich der [[variablen]] Kosten. Die Summe der Deckungsbeiträge dient zuerst der Deckung der [[fixen|festen]] Kosten. Die Menge, bei der das Betriebsergebnis genau 0 € beträgt, heißt [[Gewinnschwelle|Break-even-Point|Break-even]]. Die kurzfristige Preisuntergrenze entspricht den [[variablen]] Kosten je Einheit.',
      hints: ['Welche Kosten hängen direkt am einzelnen Auftrag?', 'Der englische Begriff für die Gewinnschwelle ist auch erlaubt.'],
      solution: 'Deckungsbeitrag = Erlös − **variable** Kosten. Die Deckungsbeiträge decken zuerst die **fixen** Kosten. Ergebnis 0 € bei der **Gewinnschwelle** (Break-even-Point). Kurzfristige Preisuntergrenze = **variable** Kosten je Einheit.'
    },
    {
      id: 'lf07-deckungsbeitrag-a3', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jedem Begriff die passende Formel oder Beschreibung zu.',
      pairs: [
        ['Deckungsbeitrag je Einheit', 'Erlös je Einheit − variable Kosten je Einheit'],
        ['Betriebsergebnis', 'Summe der Deckungsbeiträge − fixe Kosten'],
        ['Gewinnschwellenmenge', 'fixe Kosten ÷ Deckungsbeitrag je Einheit'],
        ['Langfristige Preisuntergrenze', 'Selbstkosten je Einheit'],
        ['Deckungsbeitrag II', 'Deckungsbeitrag I − Sparten-Fixkosten']
      ],
      hints: ['Beginne mit dem Deckungsbeitrag je Einheit, die anderen bauen darauf auf.', 'Bei der langfristigen Preisuntergrenze müssen alle Kosten gedeckt sein.'],
      solution: 'db = p − kv; Betriebsergebnis = ΣDB − Kf; Gewinnschwelle = Kf ÷ db; langfristige Preisuntergrenze = Selbstkosten je Einheit; DB II = DB I − Sparten-Fixkosten.'
    },
    {
      id: 'lf07-deckungsbeitrag-a4', type: 'calc', difficulty: 2, points: 4,
      q: `Die Spedition Bliestal Logistik fährt für einen Kunden eine feste Tour Saarbrücken – Mannheim – Saarbrücken (420 km). Der Kunde zahlt **1.150 € je Tour**. Die variablen Kosten betragen **1,05 € je km** (einschließlich streckenabhängiger Maut, Beispielwert) und zusätzlich **30 € Spesen je Tour**. Im Monat werden **20 Touren** gefahren. Die fixen Kosten des eingesetzten Fahrzeugs einschließlich Fahrerlohn betragen **11.200 € je Monat**.

Berechne die variablen Kosten je Tour, den Deckungsbeitrag je Tour, den Gesamtdeckungsbeitrag im Monat und das Betriebsergebnis dieses Fahrzeugs.`,
      formula: 'DB je Tour = Erlös je Tour − variable Kosten je Tour; Betriebsergebnis = DB je Tour × Anzahl Touren − fixe Kosten',
      fields: [
        { id: 'kv', label: 'Variable Kosten je Tour', unit: '€', answer: 471, tol: 0.01 },
        { id: 'db', label: 'Deckungsbeitrag je Tour', unit: '€', answer: 679, tol: 0.01 },
        { id: 'dbg', label: 'Gesamtdeckungsbeitrag im Monat', unit: '€', answer: 13580, tol: 0.01 },
        { id: 'be', label: 'Betriebsergebnis im Monat', unit: '€', answer: 2380, tol: 0.01 }
      ],
      hints: ['Variable Kosten je Tour = km × Satz je km + Spesen.', 'Vom Gesamtdeckungsbeitrag ziehst du die fixen Kosten ab.'],
      solution: `**Variable Kosten je Tour:** 420 km × 1,05 €/km + 30 € = 441 € + 30 € = **471 €**

**Deckungsbeitrag je Tour:** 1.150 € − 471 € = **679 €**

**Gesamtdeckungsbeitrag:** 679 €/Tour × 20 Touren = **13.580 €**

**Betriebsergebnis:** 13.580 € − 11.200 € = **2.380 € Gewinn** im Monat.`
    },
    {
      id: 'lf07-deckungsbeitrag-a5', type: 'calc', difficulty: 2, points: 4,
      q: `Das Logistikzentrum Homburg hat **8.000 Palettenstellplätze**. Die fixen Kosten (Miete, Abschreibung Regale, Personal-Grundbesetzung, Versicherung) betragen **36.000 € je Monat**. Je belegtem Stellplatz entstehen **3,50 €** variable Kosten im Monat. Der Preis beträgt **9,50 € je Stellplatz und Monat**.

a) Berechne den Deckungsbeitrag je Stellplatz.
b) Berechne die Gewinnschwelle in Stellplätzen und als Auslastung in Prozent.
c) Berechne das Betriebsergebnis bei 7.200 belegten Stellplätzen.`,
      formula: 'Gewinnschwelle = fixe Kosten ÷ Deckungsbeitrag je Stellplatz',
      fields: [
        { id: 'db', label: 'Deckungsbeitrag je Stellplatz', unit: '€', answer: 6, tol: 0.01 },
        { id: 'bep', label: 'Gewinnschwelle', unit: 'Stellplätze', answer: 6000, tol: 0.5 },
        { id: 'ausl', label: 'Auslastung an der Gewinnschwelle', unit: '%', answer: 75, tol: 0.1 },
        { id: 'erg', label: 'Betriebsergebnis bei 7.200 Stellplätzen', unit: '€', answer: 7200, tol: 0.01 }
      ],
      hints: ['db = 9,50 € − 3,50 €.', 'Auslastung = Gewinnschwelle ÷ Kapazität × 100.'],
      solution: `**a)** db = 9,50 € − 3,50 € = **6,00 € je Stellplatz und Monat**

**b)** Gewinnschwelle = 36.000 € ÷ 6,00 €/Stellplatz = **6.000 Stellplätze**
Auslastung = 6.000 ÷ 8.000 × 100 = **75 %**

**c)** Betriebsergebnis = 7.200 × 6,00 € − 36.000 € = 43.200 € − 36.000 € = **7.200 € Gewinn**

Probe: An der Gewinnschwelle gilt 6.000 × 6,00 € = 36.000 € = fixe Kosten.`
    },
    {
      id: 'lf07-deckungsbeitrag-a6', type: 'calc', difficulty: 2, points: 3,
      q: `Das Logistikzentrum aus der vorigen Aufgabe (variable Kosten 3,50 € je Stellplatz und Monat, normaler Preis 9,50 €) ist zu 7.200 von 8.000 Stellplätzen belegt. Ein Neukunde möchte für **3 Monate 500 Stellplätze** zu einem Preis von **3,80 € je Stellplatz und Monat** mieten. Zusätzliche fixe Kosten entstehen nicht.

Berechne die kurzfristige Preisuntergrenze, den Deckungsbeitrag je Stellplatz und Monat und den zusätzlichen Deckungsbeitrag für die gesamten 3 Monate.`,
      formula: 'Zusätzlicher DB = (Preis − variable Kosten) × Stellplätze × Monate',
      fields: [
        { id: 'pug', label: 'Kurzfristige Preisuntergrenze', unit: '€', answer: 3.5, tol: 0.01 },
        { id: 'db', label: 'Deckungsbeitrag je Stellplatz und Monat', unit: '€', answer: 0.3, tol: 0.01 },
        { id: 'dbg', label: 'Zusätzlicher Deckungsbeitrag in 3 Monaten', unit: '€', answer: 450, tol: 0.01 }
      ],
      hints: ['Die kurzfristige Preisuntergrenze sind die variablen Kosten.', 'Prüfe: Reichen die 800 freien Stellplätze für den Auftrag?'],
      solution: `**Kurzfristige Preisuntergrenze** = variable Kosten = **3,50 €** je Stellplatz und Monat

**db** = 3,80 € − 3,50 € = **0,30 €**

**Zusätzlicher DB** = 0,30 € × 500 Stellplätze × 3 Monate = **450 €**

Kapazität: 8.000 − 7.200 = 800 freie Stellplätze, der Auftrag passt. Der Preis liegt über der kurzfristigen, aber weit unter der langfristigen Preisuntergrenze. Kurzfristig verbessert der Auftrag das Ergebnis um 450 €. Achtung: Stammkunden dürfen davon nicht erfahren und ebenfalls 3,80 € verlangen, und ein Dauerpreis von 3,80 € wäre nicht kostendeckend.`
    },
    {
      id: 'lf07-deckungsbeitrag-a7', type: 'calc', difficulty: 2, points: 3,
      q: `Die Sammelgutrelation Saarbrücken – Hamburg verursacht fixe Kosten (Linienverkehr mit festem Hauptlauf-Lkw, anteilige Umschlaghalle) von **18.400 € im Monat**. Der durchschnittliche Erlös je Sendung beträgt **92 €**, die variablen Kosten je Sendung (Vor- und Nachlauf, Umschlag, Verpackungsmaterial) **46 €**.

Wie viele Sendungen müssen im Monat mindestens abgefertigt werden, damit die Relation keinen Verlust macht? Wie hoch ist dann der Umsatz?`,
      formula: 'Gewinnschwelle = fixe Kosten ÷ (Erlös je Sendung − variable Kosten je Sendung)',
      fields: [
        { id: 'db', label: 'Deckungsbeitrag je Sendung', unit: '€', answer: 46, tol: 0.01 },
        { id: 'bep', label: 'Gewinnschwelle', unit: 'Sendungen', answer: 400, tol: 0.5 },
        { id: 'ums', label: 'Umsatz an der Gewinnschwelle', unit: '€', answer: 36800, tol: 0.01 }
      ],
      hints: ['Zuerst den Deckungsbeitrag je Sendung bestimmen.', 'Umsatz an der Gewinnschwelle = Gewinnschwellenmenge × Erlös je Sendung.'],
      solution: `**db je Sendung** = 92 € − 46 € = **46 €**

**Gewinnschwelle** = 18.400 € ÷ 46 €/Sendung = **400 Sendungen** im Monat

**Umsatz an der Gewinnschwelle** = 400 × 92 € = **36.800 €**

Probe: 36.800 € Umsatz − 400 × 46 € variable Kosten (18.400 €) − 18.400 € fixe Kosten = 0 €.`
    },
    {
      id: 'lf07-deckungsbeitrag-a8', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Schritte der mehrstufigen Deckungsbeitragsrechnung in die richtige Reihenfolge.',
      items: [
        'Umsatzerlöse der Sparte ermitteln',
        'Variable Kosten der Sparte abziehen',
        'Deckungsbeitrag I festhalten',
        'Sparten-Fixkosten abziehen und Deckungsbeitrag II ermitteln',
        'Deckungsbeiträge II aller Sparten addieren und Unternehmensfixkosten abziehen = Betriebsergebnis'
      ],
      hints: ['Die Rechnung beginnt immer bei den Erlösen.', 'Die Fixkosten werden vom Speziellen (Sparte) zum Allgemeinen (Unternehmen) abgezogen.'],
      solution: 'Erlöse → − variable Kosten → **DB I** → − Sparten-Fixkosten → **DB II** → Summe DB II − Unternehmensfixkosten → **Betriebsergebnis**.'
    },
    {
      id: 'lf07-deckungsbeitrag-a9', type: 'calc', difficulty: 3, points: 5,
      q: `Die Westpfalz-Saar Logistik GmbH hat zwei Sparten. Zahlen für ein Quartal:

| | Ladungsverkehr | Kontraktlogistik |
|---|---:|---:|
| Umsatzerlöse | 480.000 € | 260.000 € |
| variable Kosten | 310.000 € | 120.000 € |
| Sparten-Fixkosten | 95.000 € | 110.000 € |

Die Unternehmensfixkosten (Geschäftsführung, Buchhaltung, IT) betragen 60.000 €.

Berechne DB I und DB II beider Sparten sowie das Betriebsergebnis.`,
      formula: 'DB I = Erlöse − variable Kosten; DB II = DB I − Sparten-Fixkosten; Betriebsergebnis = Σ DB II − Unternehmensfixkosten',
      fields: [
        { id: 'db1l', label: 'DB I Ladungsverkehr', unit: '€', answer: 170000, tol: 0.01 },
        { id: 'db1k', label: 'DB I Kontraktlogistik', unit: '€', answer: 140000, tol: 0.01 },
        { id: 'db2l', label: 'DB II Ladungsverkehr', unit: '€', answer: 75000, tol: 0.01 },
        { id: 'db2k', label: 'DB II Kontraktlogistik', unit: '€', answer: 30000, tol: 0.01 },
        { id: 'be', label: 'Betriebsergebnis', unit: '€', answer: 45000, tol: 0.01 }
      ],
      hints: ['Rechne jede Sparte für sich bis zum DB II.', 'Die Unternehmensfixkosten werden erst ganz am Ende abgezogen.'],
      solution: `| | Ladungsverkehr | Kontraktlogistik | Gesamt |
|---|---:|---:|---:|
| Umsatzerlöse | 480.000 € | 260.000 € | 740.000 € |
| − variable Kosten | 310.000 € | 120.000 € | 430.000 € |
| **= DB I** | **170.000 €** | **140.000 €** | 310.000 € |
| − Sparten-Fixkosten | 95.000 € | 110.000 € | 205.000 € |
| **= DB II** | **75.000 €** | **30.000 €** | 105.000 € |
| − Unternehmensfixkosten | | | 60.000 € |
| **= Betriebsergebnis** | | | **45.000 €** |

Beide Sparten decken ihre eigenen Fixkosten und tragen zum Ergebnis bei. Würde man die Kontraktlogistik schließen, fehlten 30.000 € DB II und das Betriebsergebnis sänke auf 15.000 € (sofern die Unternehmensfixkosten gleich bleiben).`
    },
    {
      id: 'lf07-deckungsbeitrag-a10', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Zusatzauftrag nach Lyon',
      intro: `Die Saar-Trans GmbH setzt einen Sattelzug mit **fixen Kosten von 9.600 € je Monat** und **variablen Kosten von 0,90 € je km** ein. Für den Monat sind bereits **12.800 km** zu durchschnittlich **1,70 € je km** fest gebucht. An zwei Tagen steht der Lkw ohne Auftrag auf dem Hof.

Ein neuer Kunde fragt eine Tour Saarbrücken – Lyon – Saarbrücken mit insgesamt **1.020 km** an und bietet dafür **1.150 €**. Der Disponent ist unsicher: Laut Kalkulation liegen die Selbstkosten bei 1,65 € je km.`,
      hints: ['Welche Kosten entstehen durch die Tour wirklich zusätzlich?', 'Fallen die fixen Kosten auch an, wenn der Lkw an den zwei Tagen steht?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf07-deckungsbeitrag-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Selbstkosten je km bei 12.800 km, die Vollkosten der Tour nach dieser Kalkulation und das Ergebnis der Tour auf Vollkostenbasis.',
          formula: 'Selbstkosten je km = fixe Kosten ÷ km + variable Kosten je km',
          fields: [
            { id: 'sk', label: 'Selbstkosten je km', unit: '€/km', answer: 1.65, tol: 0.01 },
            { id: 'vk', label: 'Vollkosten der Tour', unit: '€', answer: 1683, tol: 0.01 },
            { id: 'erg', label: 'Ergebnis auf Vollkostenbasis', unit: '€', answer: -533, tol: 0.01 }
          ],
          hints: ['9.600 € ÷ 12.800 km = fixe Kosten je km.', 'Ergebnis = Erlös − Vollkosten (ein Verlust ist negativ).'],
          solution: `**Selbstkosten je km:** 9.600 € ÷ 12.800 km = 0,75 €/km fix + 0,90 €/km variabel = **1,65 €/km**

**Vollkosten der Tour:** 1.020 km × 1,65 €/km = **1.683 €**

**Ergebnis auf Vollkostenbasis:** 1.150 € − 1.683 € = **−533 €** (scheinbarer Verlust)`
        },
        {
          id: 'lf07-deckungsbeitrag-a10-2', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die variablen Kosten der Tour, den Deckungsbeitrag der Tour und das Betriebsergebnis des Lkw im Monat mit Zusatzauftrag.',
          formula: 'DB = Erlös − variable Kosten; Betriebsergebnis = Σ DB − fixe Kosten',
          fields: [
            { id: 'kv', label: 'Variable Kosten der Tour', unit: '€', answer: 918, tol: 0.01 },
            { id: 'db', label: 'Deckungsbeitrag der Tour', unit: '€', answer: 232, tol: 0.01 },
            { id: 'erg', label: 'Betriebsergebnis des Lkw im Monat mit Zusatzauftrag', unit: '€', answer: 872, tol: 0.01 }
          ],
          hints: ['Variable Kosten = 1.020 km × 0,90 €/km.', 'Gebuchte Touren: 12.800 km × (1,70 − 0,90) €/km als DB; dazu kommt der DB der Lyon-Tour.'],
          solution: `**Variable Kosten:** 1.020 km × 0,90 €/km = **918 €**

**Deckungsbeitrag der Tour:** 1.150 € − 918 € = **232 €**

**Betriebsergebnis mit Zusatzauftrag:**
- DB der gebuchten km: 12.800 km × (1,70 − 0,90) €/km = 12.800 km × 0,80 €/km = 10.240 €
- DB der Lyon-Tour: 232 €
- Summe der Deckungsbeiträge: 10.240 € + 232 € = 10.472 €
- Betriebsergebnis: 10.472 € − 9.600 € = **872 €**

Ohne Zusatzauftrag wären es 10.240 € − 9.600 € = 640 €. Der Zusatzauftrag erhöht das Betriebsergebnis genau um seinen DB von 232 €.`
        },
        {
          id: 'lf07-deckungsbeitrag-a10-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Entscheidung ist richtig begründet? (Mehrfachauswahl)',
          options: [
            'Annehmen, weil der Lkw frei ist und der Auftrag einen positiven Deckungsbeitrag von 232 € bringt.',
            'Ablehnen, weil der Preis unter den Selbstkosten von 1,65 €/km liegt.',
            'Die Vollkostenrechnung täuscht hier, weil die fixen Kosten auch ohne den Auftrag anfallen.',
            'Langfristig dürfen nicht alle Aufträge zu solchen Preisen angenommen werden, weil sonst die fixen Kosten nicht gedeckt sind.'
          ],
          correct: [0, 2, 3],
          hints: ['Vergleiche das Betriebsergebnis mit und ohne Auftrag.', 'Unterscheide kurzfristige und langfristige Sicht.'],
          solution: 'Richtig sind **A, C und D**. Kurzfristig gilt: freie Kapazität und positiver DB → annehmen; das Ergebnis steigt um 232 €. Die Vollkostenrechnung verteilt Fixkosten, die ohnehin anfallen. Langfristig muss aber der Durchschnittspreis die Selbstkosten decken. B ist falsch, weil die Selbstkosten nur langfristig die Preisuntergrenze sind.'
        }
      ]
    },
    {
      id: 'lf07-deckungsbeitrag-a11', type: 'mc', difficulty: 1, points: 1,
      q: 'Ein Kunde bietet für eine Tour 610 €. Die variablen Kosten der Tour betragen 640 €, das Fahrzeug ist frei. Was solltest du tun?',
      options: [
        'Annehmen, weil der Lkw sonst steht.',
        'Ablehnen, weil der Preis unter der kurzfristigen Preisuntergrenze liegt und das Ergebnis um 30 € verschlechtert.',
        'Annehmen, weil die fixen Kosten ohnehin anfallen.',
        'Es ist egal, weil der Deckungsbeitrag 0 € beträgt.'
      ],
      correct: [1],
      hints: ['Berechne den Deckungsbeitrag.', 'Ein negativer Deckungsbeitrag vergrößert den Verlust.'],
      solution: 'DB = 610 € − 640 € = **−30 €**. Der Preis liegt unter der kurzfristigen Preisuntergrenze (variable Kosten). Jede gefahrene Tour verschlechtert das Ergebnis. Ausnahme wären nur gewichtige qualitative Gründe (z. B. ein Großauftrag als Folgegeschäft), die bewusst abgewogen werden müssen.'
    },
    {
      id: 'lf07-deckungsbeitrag-a12', type: 'text', difficulty: 3, points: 3,
      q: 'Die Geschäftsführung will die Sparte Kontraktlogistik schließen, weil sie nach Verteilung aller Gemeinkosten einen Verlust von 12.000 € ausweist. Die Sparte hat einen positiven DB II von 30.000 €. Nimm Stellung.',
      model: 'Die Sparte sollte nicht ohne Weiteres geschlossen werden. Sie deckt ihre variablen Kosten und ihre eigenen Fixkosten und trägt mit 30.000 € DB II zur Deckung der Unternehmensfixkosten bei. Der Verlust entsteht nur, weil ihr ein Anteil der Unternehmensfixkosten zugeschlüsselt wird. Diese Fixkosten fallen bei Schließung weiter an, sie müssten dann von den anderen Sparten getragen werden. Das Betriebsergebnis würde um 30.000 € sinken. Vorher ist zu prüfen, ob Sparten-Fixkosten wirklich wegfallen und ob es bessere Verwendungen für die Kapazität gibt.',
      criteria: [
        { text: 'erkennt den positiven Beitrag (DB II) der Sparte', keywords: ['DB II|Deckungsbeitrag|Beitrag', 'positiv|30.000|30000'], points: 1 },
        { text: 'erklärt, dass Unternehmensfixkosten bei Schließung weiter anfallen', keywords: ['Fixkosten|Gemeinkosten', 'weiter|bleiben|fallen an|trotzdem'], points: 1 },
        { text: 'folgert, dass das Betriebsergebnis sinken würde', keywords: ['sinkt|sinken|schlechter|verschlechtert|niedriger'], points: 1 }
      ],
      hints: ['Welche Kosten fallen bei Schließung wirklich weg?', 'Was passiert mit den 30.000 € DB II?'],
      solution: 'Nicht schließen, solange der DB II positiv ist und keine bessere Nutzung möglich ist. Der Vollkostenverlust entsteht durch zugeschlüsselte Unternehmensfixkosten, die bei Schließung **nicht** wegfallen. Ohne die Sparte fehlten 30.000 € Deckungsbeitrag, das Betriebsergebnis würde um 30.000 € sinken.'
    }
  ],
  quiz: ['lf07-deckungsbeitrag-a1', 'lf07-deckungsbeitrag-a4', 'lf07-deckungsbeitrag-a5', 'lf07-deckungsbeitrag-a10', 'lf07-deckungsbeitrag-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 7, Inhalte: Kosten- und Leistungsrechnung, Deckungsbeitragsrechnung, Preisuntergrenzen' }
  ],
  links: []
};
