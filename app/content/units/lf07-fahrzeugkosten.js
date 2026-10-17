export default {
  id: 'lf07-fahrzeugkosten',
  area: 'LF07',
  topic: 'lf07-fahrzeugkosten',
  title: 'Fahrzeugkostenrechnung für Lkw',
  status: 'pruefen',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Mautpflicht für Lkw mit mehr als 3,5 t technisch zulässiger Gesamtmasse (§ 1 BFStrMG). Der Mautsatz von 0,348 €/km (Euro VI, CO₂-Emissionsklasse 1, über 18 t, mindestens 5 Achsen) ist aus Anlage 11 BFStrMG (Fassung ab 1.12.2023) berechnet und wird hier nur als Beispielwert verwendet. Vor der Verwendung den aktuellen Mautsatz bei Toll Collect bzw. BALM prüfen. Kfz-Steuer, Versicherung, Dieselpreis und Löhne sind Beispielwerte.'
  },
  goals: [
    'Ich kann die Kosten eines Lkw in fixe (zeitabhängige) und variable (kilometerabhängige) Kosten einteilen.',
    'Ich kann die kalkulatorische Abschreibung vom Wiederbeschaffungswert ohne Bereifung berechnen.',
    'Ich kann die kalkulatorischen Zinsen vom halben Anschaffungswert berechnen.',
    'Ich kann Kraftstoff-, Reifen- und Mautkosten je km ermitteln.',
    'Ich kann den Tagessatz und den Kilometersatz eines Fahrzeugs berechnen.',
    'Ich kann mit Tages- und Kilometersatz eine Tour kalkulieren.'
  ],
  simple: `# Worum geht es?

Ein Lkw kostet Geld – auch dann, wenn er auf dem Hof steht. Für jedes Angebot muss die Disposition wissen, **was ein Einsatztag und was ein gefahrener Kilometer kostet**. Das berechnet die **Fahrzeugkostenrechnung**.

# Zwei Gruppen von Kosten

**Fixe (zeitabhängige) Kosten** fallen pro Jahr an, egal wie viel gefahren wird:
- kalkulatorische Abschreibung
- kalkulatorische Zinsen
- Kfz-Steuer
- Kfz-Versicherung (Haftpflicht, Kasko)
- Fahrerlohn mit Lohnnebenkosten
- sonstige Kosten (Stellplatz, Telematik)

**Variable (kilometerabhängige) Kosten** entstehen nur beim Fahren:
- Kraftstoff (und AdBlue)
- Reifen
- Wartung und Reparatur
- Maut (nur auf mautpflichtigen Strecken)

# Zwei Kostensätze

- **Tagessatz** = fixe Kosten pro Jahr ÷ Einsatztage pro Jahr
- **Kilometersatz** = variable Kosten je km

**Tourkosten = Einsatztage × Tagessatz + km × Kilometersatz + Maut**`,
  deep: `# Kalkulatorische Abschreibung

In der Kostenrechnung wird vom **Wiederbeschaffungswert** abgeschrieben: Der Lkw soll nach seiner Nutzungsdauer aus den verdienten Erlösen ersetzt werden können. Die **Bereifung** wird vorher abgezogen, weil die Reifen viel schneller verschleißen und deshalb als **kilometerabhängige Kosten** erfasst werden. Sonst würden die Reifen doppelt gerechnet.

> **kalk. Abschreibung = (Wiederbeschaffungswert − Wert der Bereifung) ÷ Nutzungsdauer**

Manche Betriebe teilen die Abschreibung auf (z. B. 50 % zeitabhängig wegen Alterung, 50 % kilometerabhängig wegen Verschleiß). In dieser Einheit wird die Abschreibung vollständig als fixe Kosten behandelt.

# Kalkulatorische Zinsen

Das im Lkw gebundene Kapital könnte anderswo Zinsen bringen. Weil der Lkw jedes Jahr an Wert verliert, ist im Durchschnitt nur etwa **die Hälfte** des Anschaffungswerts gebunden.

> **kalk. Zinsen = (Anschaffungswert ohne Bereifung ÷ 2) × Zinssatz**

# Variable Kosten je km

| Kostenart | Formel |
|---|---|
| Kraftstoff | Verbrauch in l/100 km ÷ 100 × Preis je l |
| Reifen | Kosten eines Reifensatzes ÷ Laufleistung in km |
| Wartung/Reparatur | jährliche Kosten ÷ Jahreskilometer (oder Erfahrungswert je km) |
| Maut | Mautsatz je km × mautpflichtige km |

# Maut in Deutschland

Auf Bundesautobahnen und Bundesstraßen ist für Kraftfahrzeuge zur Güterbeförderung mit **mehr als 3,5 t** technisch zulässiger Gesamtmasse Maut zu zahlen (§ 1 Bundesfernstraßenmautgesetz, BFStrMG). Der Mautsatz setzt sich aus Teilsätzen für **Infrastruktur, Luftverschmutzung, Lärm und CO₂** zusammen und hängt von Gewicht/Achszahl, Schadstoffklasse und CO₂-Emissionsklasse ab. Erhoben wird die Maut von Toll Collect, überwacht vom Bundesamt für Logistik und Mobilität (BALM).

Beispielwert für eine Sattelzugkombination über 18 t mit 5 Achsen, Euro VI, CO₂-Klasse 1 laut Anlage 11 BFStrMG (Fassung ab 1.12.2023):

| Teilsatz | €/km |
|---|---:|
| Infrastruktur | 0,155 |
| Luftverschmutzung | 0,023 |
| Lärm | 0,012 |
| CO₂ | 0,158 |
| **Summe** | **0,348** |

> Mautsätze ändern sich. Für echte Kalkulationen immer den aktuellen Satz bei Toll Collect prüfen.

# Vom Jahreswert zum Kostensatz

1. Alle fixen Kosten je Jahr addieren → ÷ Einsatztage = **Tagessatz**
2. Alle variablen Kosten je km (ohne Maut) addieren → **Kilometersatz**
3. Maut gesondert für die mautpflichtigen km ansetzen
4. Optional: **Vollkosten je km** = fixe Kosten ÷ Jahreskilometer + Kilometersatz

Die getrennte Rechnung mit Tages- und Kilometersatz ist genauer als ein einziger Vollkostensatz je km: Eine kurze Tour mit langen Standzeiten (Be- und Entladen) kostet viel Zeit, aber wenig Kilometer.`,
  terms: [
    { term: 'Fixe (zeitabhängige) Fahrzeugkosten', def: 'Kosten, die pro Jahr unabhängig von der Fahrleistung anfallen, z. B. Abschreibung, Zinsen, Kfz-Steuer, Versicherung, Fahrerlohn.' },
    { term: 'Variable (kilometerabhängige) Fahrzeugkosten', def: 'Kosten, die mit jedem gefahrenen Kilometer entstehen, z. B. Kraftstoff, Reifen, Wartung, Maut.' },
    { term: 'Wiederbeschaffungswert', def: 'Preis, den ein gleichwertiges neues Fahrzeug zum Ersatzzeitpunkt voraussichtlich kosten wird; Grundlage der kalkulatorischen Abschreibung.' },
    { term: 'Kalkulatorische Zinsen', def: 'Zinsen auf das durchschnittlich im Fahrzeug gebundene Kapital, meist der halbe Anschaffungswert ohne Bereifung.' },
    { term: 'Tagessatz', def: 'Fixe Fahrzeugkosten je Einsatztag = fixe Kosten pro Jahr ÷ Einsatztage pro Jahr.' },
    { term: 'Kilometersatz', def: 'Variable Fahrzeugkosten je gefahrenen Kilometer (hier ohne Maut).' },
    { term: 'Lkw-Maut', def: 'Streckenbezogene Gebühr für die Nutzung von Bundesautobahnen und Bundesstraßen durch Lkw über 3,5 t (BFStrMG).' },
    { term: 'Tourenkalkulation', def: 'Ermittlung der Kosten einer bestimmten Fahrt aus Einsatzzeit, Kilometern und Maut.' }
  ],
  example: `# Sattelzug SB-ST 401 der Saar-Trans Spedition GmbH (Beispielwerte 2026)

**Fahrzeugdaten:** Anschaffungswert 164.000 € (davon Bereifung 4.000 €), Wiederbeschaffungswert 184.000 € (davon Bereifung 4.000 €), Nutzungsdauer 6 Jahre, kalkulatorischer Zinssatz 6 %, 250 Einsatztage und 100.000 km pro Jahr, davon 90 % mautpflichtig.

**Fixe Kosten pro Jahr**

| Kostenart | Rechnung | €/Jahr |
|---|---|---:|
| kalk. Abschreibung | (184.000 − 4.000) ÷ 6 | 30.000 |
| kalk. Zinsen | (164.000 − 4.000) ÷ 2 × 6 % | 4.800 |
| Kfz-Steuer (Beispielwert) | | 1.100 |
| Versicherung | | 7.500 |
| Fahrerlohn inkl. Lohnnebenkosten | | 54.000 |
| Sonstige (Stellplatz, Telematik) | | 3.600 |
| **Summe** | | **101.000** |

**Tagessatz:** 101.000 € ÷ 250 Tage = **404,00 €/Tag**

**Variable Kosten je km**

| Kostenart | Rechnung | €/km |
|---|---|---:|
| Diesel | 30 l/100 km × 1,40 €/l (netto, Beispielwert) | 0,420 |
| Reifen | 4.000 € ÷ 160.000 km Laufleistung | 0,025 |
| Wartung/Reparatur | Erfahrungswert | 0,080 |
| **Kilometersatz (ohne Maut)** | | **0,525** |

**Tour Saarbrücken – Ludwigshafen – Saarbrücken:** 1 Einsatztag, 260 km, davon 250 km mautpflichtig

| Position | Rechnung | € |
|---|---|---:|
| Tageskosten | 1 × 404,00 € | 404,00 |
| Kilometerkosten | 260 km × 0,525 €/km | 136,50 |
| Maut (Beispielsatz) | 250 km × 0,348 €/km | 87,00 |
| **Tourkosten** | | **627,50** |`,
  rules: [
    'Fix = zeitabhängig (pro Jahr, pro Tag), variabel = kilometerabhängig.',
    'Kalkulatorische Abschreibung vom Wiederbeschaffungswert, aber ohne Reifen – Reifen sind km-abhängige Kosten.',
    'Kalkulatorische Zinsen vom halben Anschaffungswert (ohne Reifen), weil im Durchschnitt nur die Hälfte gebunden ist.',
    'Tagessatz = fixe Jahreskosten ÷ Einsatztage; Kilometersatz = Summe der variablen Kosten je km.',
    'Tourkosten = Tage × Tagessatz + km × Kilometersatz + mautpflichtige km × Mautsatz.',
    'Mautsätze sind zeitabhängig: immer den aktuellen Satz bei Toll Collect/BALM prüfen.'
  ],
  summary: `- **Fixe Kosten** (Abschreibung, Zinsen, Kfz-Steuer, Versicherung, Fahrerlohn, Sonstiges) → **Tagessatz** = Summe ÷ Einsatztage.
- **Variable Kosten** (Diesel, Reifen, Wartung) → **Kilometersatz**; Maut gesondert für mautpflichtige km.
- **kalk. Abschreibung** = (Wiederbeschaffungswert − Reifen) ÷ Nutzungsdauer.
- **kalk. Zinsen** = (Anschaffungswert − Reifen) ÷ 2 × Zinssatz.
- **Diesel je km** = l/100 km ÷ 100 × €/l; **Reifen je km** = Reifensatz ÷ Laufleistung.
- **Tourkosten** = Tage × Tagessatz + km × km-Satz + Maut.
- Maut: Lkw über 3,5 t (§ 1 BFStrMG); Mautsatz aus Infrastruktur, Luft, Lärm, CO₂ – Beispielwert 0,348 €/km, aktuell prüfen.`,
  mistakes: [
    { wrong: 'Die kalkulatorische Abschreibung wird vom Anschaffungswert einschließlich Reifen berechnet.', right: 'Vom Wiederbeschaffungswert ohne Bereifung; die Reifen werden über die Laufleistung als km-Kosten erfasst.' },
    { wrong: 'Kalkulatorische Zinsen werden vom vollen Anschaffungswert berechnet.', right: 'Weil der Lkw über die Nutzungsdauer an Wert verliert, ist im Durchschnitt nur der halbe Anschaffungswert gebunden.' },
    { wrong: 'Der Fahrerlohn ist eine variable Kostenart, weil der Fahrer ja fährt.', right: 'Ein fest angestellter Fahrer erhält seinen Lohn unabhängig von den km; der Lohn ist zeitabhängig (fix).' },
    { wrong: 'Maut wird für alle gefahrenen Kilometer berechnet.', right: 'Maut fällt nur auf mautpflichtigen Strecken (Bundesautobahnen, Bundesstraßen) an.' },
    { wrong: 'Diesel je km = Verbrauch × Preis, also 30 × 1,40 = 42 €/km.', right: 'Der Verbrauch gilt für 100 km: 30 l ÷ 100 × 1,40 €/l = 0,42 €/km.' }
  ],
  flashcards: [
    { q: 'Nenne vier fixe Fahrzeugkosten.', a: 'Kalkulatorische Abschreibung, kalkulatorische Zinsen, Kfz-Steuer, Versicherung (außerdem Fahrerlohn, Stellplatz).' },
    { q: 'Nenne vier variable Fahrzeugkosten.', a: 'Kraftstoff, Reifen, Wartung/Reparatur, Maut.' },
    { q: 'Formel kalkulatorische Abschreibung beim Lkw?', a: '(Wiederbeschaffungswert − Bereifung) ÷ Nutzungsdauer.' },
    { q: 'Warum wird die Bereifung bei der Abschreibung abgezogen?', a: 'Reifen verschleißen schneller und werden als km-abhängige Kosten über die Laufleistung erfasst; sonst würden sie doppelt gerechnet.' },
    { q: 'Formel kalkulatorische Zinsen beim Lkw?', a: '(Anschaffungswert ohne Reifen ÷ 2) × Zinssatz.' },
    { q: 'Wie berechnet man den Tagessatz?', a: 'Fixe Fahrzeugkosten pro Jahr ÷ Einsatztage pro Jahr.' },
    { q: 'Wie berechnet man die Dieselkosten je km?', a: 'Verbrauch in l/100 km ÷ 100 × Preis je Liter.' },
    { q: 'Ab welchem Gewicht sind Lkw in Deutschland mautpflichtig?', a: 'Ab mehr als 3,5 t technisch zulässiger Gesamtmasse (§ 1 BFStrMG).' },
    { q: 'Aus welchen Teilsätzen besteht der Mautsatz?', a: 'Infrastruktur, Luftverschmutzung, Lärm und CO₂.' },
    { q: 'Wie lautet die Formel für die Tourkosten?', a: 'Einsatztage × Tagessatz + km × Kilometersatz + mautpflichtige km × Mautsatz.' }
  ],
  tasks: [
    {
      id: 'lf07-fahrzeugkosten-a1', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Kosten eines Lkw sind **kilometerabhängig (variabel)**? (Mehrfachauswahl)',
      options: ['Dieselkosten', 'Kfz-Steuer', 'Reifenverschleiß', 'Kfz-Haftpflichtversicherung', 'Maut', 'Gehalt des fest angestellten Fahrers'],
      correct: [0, 2, 4],
      hints: ['Welche Kosten entstehen nur, wenn der Lkw fährt?', 'Steuer, Versicherung und Gehalt fallen auch bei Stillstand an.'],
      solution: 'Variabel sind **Diesel, Reifen und Maut** – sie steigen mit jedem gefahrenen (mautpflichtigen) Kilometer. Kfz-Steuer, Versicherung und das Fahrergehalt fallen pro Jahr bzw. Monat an und sind **zeitabhängig (fix)**.'
    },
    {
      id: 'lf07-fahrzeugkosten-a2', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne der Kostenart die passende Berechnung zu.',
      pairs: [
        ['Kalkulatorische Abschreibung', '(Wiederbeschaffungswert − Bereifung) ÷ Nutzungsdauer'],
        ['Kalkulatorische Zinsen', 'halber Anschaffungswert ohne Bereifung × Zinssatz'],
        ['Reifenkosten je km', 'Preis des Reifensatzes ÷ Laufleistung in km'],
        ['Dieselkosten je km', 'Verbrauch je 100 km ÷ 100 × Literpreis']
      ],
      hints: ['Abschreibung → Ersatzbeschaffung; Zinsen → gebundenes Kapital.', 'Bei Reifen und Diesel geht es um den Wert je km.'],
      solution: 'Abschreibung vom **Wiederbeschaffungswert** ohne Reifen über die Nutzungsdauer; Zinsen auf das **durchschnittlich gebundene Kapital** (halber Anschaffungswert); Reifen über die **Laufleistung**; Diesel aus dem **Verbrauch je 100 km**.'
    },
    {
      id: 'lf07-fahrzeugkosten-a3', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Die fixen Kosten eines Jahres geteilt durch die Einsatztage ergeben den [[Tagessatz]]. Die variablen Kosten je km bilden den [[Kilometersatz|km-Satz]]. Die Bereifung wird bei der Abschreibung [[abgezogen]], weil sie über die [[Laufleistung]] als km-abhängige Kosten erfasst wird.',
      hints: ['Ein Satz je Tag, ein Satz je km.', 'Reifen werden nicht über Jahre, sondern über Kilometer verbraucht.'],
      solution: '**Tagessatz** = fixe Kosten ÷ Einsatztage; **Kilometersatz** = variable Kosten je km. Die Bereifung wird **abgezogen** und über die **Laufleistung** verrechnet.'
    },
    {
      id: 'lf07-fahrzeugkosten-a4', type: 'calc', difficulty: 2, points: 3,
      q: `Für eine neue Sattelzugmaschine der Hochwald Logistik e.K. gilt (Beispielwerte): Anschaffungswert 164.000 €, Wiederbeschaffungswert 184.000 €, Wert der Bereifung jeweils 4.000 €, Nutzungsdauer 6 Jahre, kalkulatorischer Zinssatz 6 %.

Berechne kalkulatorische Abschreibung und kalkulatorische Zinsen pro Jahr sowie deren Summe.`,
      formula: 'kalk. AfA = (WBW − Reifen) ÷ ND; kalk. Zinsen = (AW − Reifen) ÷ 2 × Zinssatz',
      fields: [
        { id: 'afa', label: 'Kalkulatorische Abschreibung', unit: '€/Jahr', answer: 30000, tol: 0.01 },
        { id: 'zins', label: 'Kalkulatorische Zinsen', unit: '€/Jahr', answer: 4800, tol: 0.01 },
        { id: 'sum', label: 'Summe', unit: '€/Jahr', answer: 34800, tol: 0.01 }
      ],
      hints: ['Ziehe bei beiden Rechnungen zuerst die Reifen ab.', 'Für die Zinsen den Anschaffungswert (nicht den Wiederbeschaffungswert) halbieren.'],
      solution: `**Abschreibung:** (184.000 € − 4.000 €) ÷ 6 Jahre = 180.000 € ÷ 6 = **30.000 €/Jahr**

**Zinsen:** (164.000 € − 4.000 €) ÷ 2 × 6 % = 80.000 € × 0,06 = **4.800 €/Jahr**

**Summe:** 30.000 € + 4.800 € = **34.800 €/Jahr**`
    },
    {
      id: 'lf07-fahrzeugkosten-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Lkw verbraucht **30 l Diesel je 100 km**; der Dieselpreis beträgt **1,40 €/l** netto (Beispielwert). Ein Reifensatz kostet **4.000 €** und hält **160.000 km**. Für Wartung und Reparatur werden **0,08 €/km** angesetzt. Berechne Dieselkosten je km, Reifenkosten je km und den Kilometersatz (ohne Maut). Gib die Ergebnisse in **Cent je km** an.',
      formula: 'Kilometersatz = Diesel je km + Reifen je km + Wartung je km',
      fields: [
        { id: 'diesel', label: 'Diesel je km', unit: 'ct/km', answer: 42, tol: 0.05 },
        { id: 'reifen', label: 'Reifen je km', unit: 'ct/km', answer: 2.5, tol: 0.05 },
        { id: 'kmsatz', label: 'Kilometersatz', unit: 'ct/km', answer: 52.5, tol: 0.05 }
      ],
      hints: ['30 l gelten für 100 km – wie viel für 1 km?', 'Reifensatz ÷ Laufleistung.'],
      solution: `**Diesel:** 30 l ÷ 100 km × 1,40 €/l = 0,30 l/km × 1,40 €/l = **0,420 €/km**

**Reifen:** 4.000 € ÷ 160.000 km = **0,025 €/km**

**Kilometersatz:** 0,420 + 0,025 + 0,080 = **0,525 €/km**

In Cent: Diesel **42 ct/km**, Reifen **2,5 ct/km**, Kilometersatz **52,5 ct/km**`
    },
    {
      id: 'lf07-fahrzeugkosten-a6', type: 'calc', difficulty: 2, points: 2,
      q: `Die fixen Kosten eines Sattelzugs betragen pro Jahr:

| Kostenart | € |
|---|---:|
| kalk. Abschreibung | 30.000 |
| kalk. Zinsen | 4.800 |
| Kfz-Steuer (Beispielwert) | 1.100 |
| Versicherung | 7.500 |
| Fahrerlohn inkl. Nebenkosten | 54.000 |
| Sonstige | 3.600 |

Der Lkw ist an **250 Tagen** im Einsatz. Berechne die fixen Kosten pro Jahr und den Tagessatz.`,
      formula: 'Tagessatz = fixe Kosten pro Jahr ÷ Einsatztage',
      fields: [
        { id: 'fix', label: 'Fixe Kosten pro Jahr', unit: '€', answer: 101000, tol: 0.01 },
        { id: 'tag', label: 'Tagessatz', unit: '€/Tag', answer: 404, tol: 0.01 }
      ],
      hints: ['Addiere alle Positionen.', 'Teile durch 250.'],
      solution: `**Fixe Kosten:** 30.000 + 4.800 + 1.100 + 7.500 + 54.000 + 3.600 = **101.000 €/Jahr**

**Tagessatz:** 101.000 € ÷ 250 Tage = **404,00 €/Tag**`
    },
    {
      id: 'lf07-fahrzeugkosten-a7', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Teilsätze der Maut für einen Sattelzug (über 18 t, 5 Achsen, Euro VI, CO₂-Klasse 1) betragen laut Anlage 11 BFStrMG (Fassung ab 1.12.2023, **Beispielwerte**): Infrastruktur 0,155 €/km, Luftverschmutzung 0,023 €/km, Lärm 0,012 €/km, CO₂ 0,158 €/km. Berechne den Mautsatz (in **Cent je km**) und die Maut für **420 mautpflichtige km**.',
      formula: 'Mautsatz = Summe der Teilsätze; Maut = Mautsatz × mautpflichtige km',
      fields: [
        { id: 'satz', label: 'Mautsatz', unit: 'ct/km', answer: 34.8, tol: 0.05 },
        { id: 'maut', label: 'Maut für 420 km', unit: '€', answer: 146.16, tol: 0.01 }
      ],
      hints: ['Addiere die vier Teilsätze.', 'Multipliziere mit 420 km.'],
      solution: `**Mautsatz:** 0,155 + 0,023 + 0,012 + 0,158 = 0,348 €/km = **34,8 ct/km**

**Maut:** 420 km × 0,348 €/km = **146,16 €**

Hinweis: Die Teilsätze sind Beispielwerte; der aktuell gültige Mautsatz ist bei Toll Collect bzw. im BFStrMG nachzusehen.`
    },
    {
      id: 'lf07-fahrzeugkosten-a8', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Schritte einer Tourenkalkulation in die richtige Reihenfolge.',
      items: [
        'Fixe und variable Fahrzeugkosten eines Jahres ermitteln',
        'Tagessatz und Kilometersatz berechnen',
        'Einsatzzeit, Gesamt-km und mautpflichtige km der Tour bestimmen',
        'Tourkosten berechnen und Gewinnzuschlag für den Angebotspreis aufschlagen'
      ],
      hints: ['Ohne Jahreskosten keine Kostensätze.', 'Der Preis kommt ganz am Ende.'],
      solution: 'Jahreskosten → **Kostensätze** (Tag, km) → **Tourdaten** (Tage, km, Mautstrecke) → **Tourkosten** und Angebotspreis.'
    },
    {
      id: 'lf07-fahrzeugkosten-a9', type: 'calc', difficulty: 3, points: 4,
      q: `Die Saar-Trans Spedition GmbH kalkuliert eine Komplettladung von Saarbrücken nach Bremen und zurück (Beispielwerte). Daten:

- Einsatzdauer: 2 Tage
- Gesamtstrecke: 780 km, davon 700 km mautpflichtig
- Tagessatz: 404,00 €, Kilometersatz (ohne Maut): 0,525 €/km, Mautsatz (Beispielwert): 0,348 €/km
- Gewinnzuschlag: 10 % auf die Tourkosten

Berechne Tageskosten, Kilometerkosten, Maut, Tourkosten und den Nettoangebotspreis.`,
      formula: 'Tourkosten = Tage × Tagessatz + km × km-Satz + Maut-km × Mautsatz',
      fields: [
        { id: 'tag', label: 'Tageskosten', unit: '€', answer: 808, tol: 0.01 },
        { id: 'km', label: 'Kilometerkosten', unit: '€', answer: 409.5, tol: 0.01 },
        { id: 'maut', label: 'Maut', unit: '€', answer: 243.6, tol: 0.01 },
        { id: 'tour', label: 'Tourkosten', unit: '€', answer: 1461.1, tol: 0.01 },
        { id: 'preis', label: 'Angebotspreis netto', unit: '€', answer: 1607.21, tol: 0.01 }
      ],
      hints: ['Die Kilometerkosten gelten für alle 780 km, die Maut nur für 700 km.', 'Gewinn = 10 % der Tourkosten.'],
      solution: `**Tageskosten:** 2 Tage × 404,00 €/Tag = **808,00 €**

**Kilometerkosten:** 780 km × 0,525 €/km = **409,50 €**

**Maut:** 700 km × 0,348 €/km = **243,60 €**

**Tourkosten:** 808,00 € + 409,50 € + 243,60 € = **1.461,10 €**

**Gewinn:** 1.461,10 € × 10 % = 146,11 €

**Angebotspreis netto:** 1.461,10 € + 146,11 € = **1.607,21 €**`
    },
    {
      id: 'lf07-fahrzeugkosten-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Vollkostensatz oder Tages- und Kilometersatz?',
      intro: `Ein Sattelzug der Bliesgau Logistik e.K. hat fixe Kosten von **101.000 €** pro Jahr, **250 Einsatztage** und **100.000 km** Jahresfahrleistung. Der Kilometersatz (ohne Maut) beträgt **0,525 €/km**.

Ein Kunde fragt einen Nahverkehrseinsatz an: **1 Tag**, nur **120 km**, ohne Mautstrecke, mit langen Ladezeiten in Homburg und Neunkirchen.`,
      hints: ['Ein Vollkostensatz verteilt die fixen Kosten auf die Kilometer.', 'Vergleiche, was ein Einsatztag tatsächlich an fixen Kosten verursacht.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf07-fahrzeugkosten-a10-1', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne den Fixkostenanteil je km und den Vollkostensatz je km (jeweils in **Cent je km**).',
          formula: 'Vollkostensatz = fixe Kosten ÷ Jahreskilometer + Kilometersatz',
          fields: [
            { id: 'fixkm', label: 'Fixkosten je km', unit: 'ct/km', answer: 101, tol: 0.05 },
            { id: 'voll', label: 'Vollkostensatz je km', unit: 'ct/km', answer: 153.5, tol: 0.05 }
          ],
          hints: ['101.000 € ÷ 100.000 km.', 'Kilometersatz addieren.'],
          solution: `**Fixkosten je km:** 101.000 € ÷ 100.000 km = 1,01 €/km = **101 ct/km**

**Vollkostensatz:** 1,01 €/km + 0,525 €/km = 1,535 €/km = **153,5 ct/km**`
        },
        {
          id: 'lf07-fahrzeugkosten-a10-2', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Kosten des Nahverkehrseinsatzes (a) mit dem Vollkostensatz je km und (b) mit Tagessatz und Kilometersatz. Berechne außerdem die Differenz (b − a).',
          formula: '(a) km × Vollkostensatz; (b) Tage × Tagessatz + km × Kilometersatz',
          fields: [
            { id: 'a', label: '(a) Kosten mit Vollkostensatz', unit: '€', answer: 184.2, tol: 0.01 },
            { id: 'b', label: '(b) Kosten mit Tages- und km-Satz', unit: '€', answer: 467, tol: 0.01 },
            { id: 'diff', label: 'Differenz (b − a)', unit: '€', answer: 282.8, tol: 0.01 }
          ],
          hints: ['Tagessatz = 101.000 € ÷ 250 Tage.', '(b): 1 × 404 € + 120 km × 0,525 €/km.'],
          solution: `**(a)** 120 km × 1,535 €/km = **184,20 €**

**Tagessatz:** 101.000 € ÷ 250 = 404,00 €

**(b)** 1 × 404,00 € + 120 km × 0,525 €/km = 404,00 € + 63,00 € = **467,00 €**

**Differenz:** 467,00 € − 184,20 € = **282,80 €**`
        },
        {
          id: 'lf07-fahrzeugkosten-a10-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Schlussfolgerungen sind richtig? (Mehrfachauswahl)',
          options: [
            'Mit dem Vollkostensatz je km würde der Einsatz deutlich zu billig kalkuliert, weil der Lkw einen ganzen Tag gebunden ist.',
            'Der Vollkostensatz je km ist bei kurzen Touren mit langen Standzeiten immer genauer.',
            'Tages- und Kilometersatz bilden ab, dass fixe Kosten zeitabhängig und variable Kosten kilometerabhängig sind.',
            'Die Maut müsste hier zusätzlich mit 120 km × Mautsatz berechnet werden.'
          ],
          correct: [0, 2],
          hints: ['Wie viele Tage ist der Lkw belegt?', 'Gibt es auf dieser Tour Mautstrecke?'],
          solution: 'Richtig sind A und C. Der Lkw kann an diesem Tag keinen anderen Auftrag fahren; die fixen Kosten des Tages (404 €) müssen gedeckt werden. Der Vollkostensatz unterstellt eine durchschnittliche Tagesleistung von 400 km und unterschätzt deshalb kurze Einsätze. Maut fällt nicht an, weil laut Fall keine Mautstrecke befahren wird.'
        }
      ]
    },
    {
      id: 'lf07-fahrzeugkosten-a11', type: 'text', difficulty: 2, points: 3,
      q: 'Begründe, warum bei der kalkulatorischen Abschreibung eines Lkw der **Wiederbeschaffungswert** verwendet und die **Bereifung** abgezogen wird, und warum die kalkulatorischen Zinsen nur vom **halben** Anschaffungswert berechnet werden.',
      model: 'Der Wiederbeschaffungswert wird verwendet, damit über die Preise genug Geld verdient wird, um den Lkw nach der Nutzungsdauer zu ersetzen, auch wenn neue Fahrzeuge teurer geworden sind. Die Bereifung wird abgezogen, weil Reifen nach der Laufleistung verschleißen und als kilometerabhängige Kosten erfasst werden; sonst würden sie doppelt verrechnet. Die Zinsen werden vom halben Anschaffungswert berechnet, weil der Wert des Lkw durch die Abschreibung jedes Jahr sinkt und im Durchschnitt nur etwa die Hälfte des Kapitals gebunden ist.',
      criteria: [
        { text: 'Wiederbeschaffung: Ersatz des Lkw / Preissteigerung', keywords: ['ersetz|Ersatz|neu|teurer|Preissteigerung|Substanz'], points: 1 },
        { text: 'Reifen: km-abhängig / Doppelverrechnung vermeiden', keywords: ['Laufleistung|km|Kilometer', 'doppelt|getrennt|separat'], points: 1 },
        { text: 'halber Wert: durchschnittlich gebundenes Kapital', keywords: ['Durchschnitt|durchschnittlich|Hälfte|halb', 'gebunden|Kapital|sinkt'], points: 1 }
      ],
      hints: ['Was soll am Ende der Nutzungsdauer passieren?', 'Wie entwickelt sich der Wert des Lkw über die Jahre?'],
      solution: '**Wiederbeschaffungswert**: Ersatzbeschaffung zu künftigen (meist höheren) Preisen sichern. **Reifen abziehen**: Sie werden über die Laufleistung je km verrechnet, sonst Doppelerfassung. **Halber Anschaffungswert**: Der Restwert sinkt linear von 100 % auf 0 %, im Durchschnitt ist die Hälfte gebunden.'
    }
  ],
  quiz: ['lf07-fahrzeugkosten-a1', 'lf07-fahrzeugkosten-a4', 'lf07-fahrzeugkosten-a5', 'lf07-fahrzeugkosten-a9', 'lf07-fahrzeugkosten-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 7, Inhalte: Kosten- und Leistungsrechnung, Fahrzeugkostenrechnung, Kalkulation von Verkehrsleistungen' },
    { title: 'Bundesfernstraßenmautgesetz (BFStrMG) § 1 Mautpflicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bfstrmg/__1.html', asOf: '2026' },
    { title: 'Bundesfernstraßenmautgesetz (BFStrMG) Anlage 11 Mautteilsätze', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bfstrmg/anlage_11.html', asOf: 'Fassung ab 1.12.2023, abgerufen 10/2026' },
    { title: 'Mauttarife', publisher: 'Toll Collect GmbH', url: 'https://www.toll-collect.de/de/toll_collect/bezahlen/maut_tarife/maut_tarife.html', asOf: 'bei Abruf 10/2026 nicht erreichbar, aktuellen Stand prüfen' }
  ],
  links: ['lf07-kostenarten', 'lf07-deckungsbeitrag']
};
