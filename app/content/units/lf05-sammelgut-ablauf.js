export default {
  id: 'lf05-sammelgut-ablauf',
  area: 'LF05',
  topic: 'lf05-sammelgut',
  title: 'Ablauf des Sammelgutverkehrs und Rückrechnung',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026-10',
    note: 'Rechtsgrundlagen HGB § 453 (Speditionsvertrag) und § 460 (Sammelladung), geprüft am 17.10.2026 (§ 453 auf gesetze-im-internet.de; § 460 dort nicht abrufbar, Wortlaut über eine Gesetzestext-Sammlung geprüft). Alle Preise und Kosten in den Aufgaben sind erfundene Beispielwerte (Bezugsjahr 2026).'
  },
  goals: [
    'Ich kann den Ablauf des Sammelgutverkehrs mit Vorlauf, Umschlag, Hauptlauf und Nachlauf beschreiben.',
    'Ich kann die Aufgaben von Versandspediteur und Empfangsspediteur unterscheiden.',
    'Ich kann Inhalt und Zweck des Borderos erklären.',
    'Ich kann Hub-and-Spoke-Systeme und Direktverkehre (Rasterverkehre) vergleichen und die Bedeutung von Kooperationen erklären.',
    'Ich kann eine Sammelgutabrechnung durchführen und das Rohergebnis in Euro und in Prozent der Erlöse berechnen.'
  ],
  simple: `# Worum geht es?

Viele Kunden verschicken nur **kleine Sendungen**: ein paar Paletten oder Kartons. Ein eigener Lkw für jede Sendung wäre viel zu teuer. Deshalb **sammelt** der Spediteur die Sendungen vieler Versender, die in dieselbe Region gehen, und fährt sie gemeinsam in einem Lkw. Das ist der **Sammelgutverkehr** (auch Stückgutverkehr).

**So läuft es ab:**

1. **Vorlauf:** Nahverkehrs-Lkw holen die Sendungen bei den Versendern ab und bringen sie ins Lager des **Versandspediteurs**.
2. **Umschlag:** Dort werden die Sendungen nach Zielgebieten sortiert und auf den Fernverkehrs-Lkw verladen. Zu jeder Ladung gehört eine Liste aller Sendungen, das **Bordero**.
3. **Hauptlauf:** Der Fern-Lkw fährt die Sammelladung zum **Empfangsspediteur** in der Zielregion.
4. **Umschlag:** Der Empfangsspediteur entlädt und sortiert nach Touren.
5. **Nachlauf:** Verteiler-Lkw stellen die Sendungen bei den einzelnen Empfängern zu.

**Warum lohnt sich das?** Der teure Hauptlauf wird auf viele Sendungen verteilt. Der Versender zahlt weniger als für einen eigenen Transport, und der Spediteur verdient an der Differenz.

**Rohergebnis:** Was der Spediteur von den Versendern einnimmt (Erlöse), minus Kosten für Vorlauf, Hauptlauf und Nachlauf. Bleibt etwas übrig, ist das das **Rohergebnis**. Davon müssen noch Gemeinkosten wie Verwaltung und Lagerhalle bezahlt werden.`,
  deep: `# 1. Beteiligte

| Beteiligter | Aufgabe |
|---|---|
| Versender | beauftragt den Versandspediteur (Speditionsvertrag, § 453 HGB) und zahlt das Entgelt |
| Versandspediteur | holt ab (Vorlauf), sortiert, bildet die Sammelladung, erstellt das Bordero, beauftragt den Hauptlauf |
| Frachtführer im Hauptlauf | befördert die Sammelladung (eigener Lkw des Spediteurs oder fremder Unternehmer) |
| Empfangsspediteur | entlädt, sortiert, stellt zu (Nachlauf), rechnet mit dem Versandspediteur ab |
| Empfänger | erhält die einzelne Sendung |

**Rechtslage:** Nach **§ 460 HGB** darf der Spediteur Güter mehrerer Versender in einer **Sammelladung** befördern lassen. Für die Beförderung in der Sammelladung hat er dann die **Rechte und Pflichten eines Frachtführers** und kann eine angemessene Vergütung verlangen, höchstens die gewöhnliche Fracht für die einzelne Sendung.

# 2. Das Bordero

Das **Bordero** ist die Ladeliste der Sammelladung. Es begleitet den Hauptlauf und wird dem Empfangsspediteur (meist vorab elektronisch) übermittelt. Typische Angaben je Sendung:

- Sendungsnummer, Versender und Empfänger
- Anzahl und Art der Packstücke, Zeichen und Nummern
- Gewicht (und ggf. Volumen, Lademeter)
- Frankatur (z. B. frei Haus oder unfrei) und eventuelle Nachnahmen
- besondere Hinweise (Gefahrgut, Termin, Avis)

Mit dem Bordero plant der Empfangsspediteur Entladung und Zustelltouren und prüft die Vollständigkeit.

# 3. Netzformen

**Direktverkehr (Rasterverkehr):** Jedes Depot fährt jedes andere Depot direkt an. Bei n Depots gibt es n × (n − 1) gerichtete Relationen.

- Vorteile: kurze Laufzeiten, kein zusätzlicher Umschlag, weniger Schadensrisiko.
- Nachteile: Bei wenig Aufkommen sind die Lkw schlecht ausgelastet; viele Linien sind zu bedienen.

**Hub-and-Spoke (Nabe und Speiche):** Alle Depots fahren zu einem zentralen Umschlagpunkt (**Hub**). Dort werden die Sendungen nach Zieldepots umgeschlagen und zurückgefahren. Bei n Depots gibt es nur 2 × n Verbindungen (je hin und zurück).

- Vorteile: hohe Auslastung auch bei kleinen Mengen, flächendeckendes Netz, gute Planbarkeit.
- Nachteile: Umwege, zusätzlicher Umschlag (Zeit, Kosten, Schadensrisiko), Abhängigkeit vom Hub, enges Zeitfenster in der Nacht.

In der Praxis werden beide Formen kombiniert: starke Relationen direkt, schwache über den Hub.

# 4. Kooperationen und Netzwerke

Ein einzelner mittelständischer Spediteur hat nicht in jeder Region ein eigenes Depot. Deshalb schließen sich Speditionen zu **Stückgutkooperationen** zusammen. Jeder Partner ist in seinem Gebiet **Versandspediteur** für die eigenen Kunden und **Empfangsspediteur** für die Sendungen der anderen Partner.

Kennzeichen: einheitliche Qualitätsstandards, gemeinsame IT und Sendungsverfolgung, gemeinsamer Hub, Verrechnungssätze zwischen den Partnern, gemeinsamer Marktauftritt. Vorteil: flächendeckendes Netz ohne eigene Niederlassungen. Nachteil: Abhängigkeit von der Qualität der Partner.

# 5. Rückrechnung und Rohergebnis

Der **Empfangsspediteur** stellt dem Versandspediteur seine Leistungen in Rechnung (**Rückrechnung**): vor allem Entladen und Verteilen (Nachlaufkosten). Bei **unfreien** Sendungen zieht er Beträge beim Empfänger ein und schreibt sie dem Versandspediteur gut. Der Saldo wird ausgeglichen.

Der **Versandspediteur** prüft mit der **Sammelgutabrechnung**, ob sich die Ladung gelohnt hat:

| Position | Betrag |
|---|---|
| Erlöse von den Versendern (Speditionsentgelte) | + |
| − Vorlaufkosten (Abholung) | − |
| − Hauptlaufkosten (Fracht an den Frachtführer) | − |
| − Nachlaufkosten des Empfangsspediteurs (Entladen und Verteilen) | − |
| **= Rohergebnis** | |

**Rohergebnis in Prozent der Erlöse:**

Rohergebnis (%) = Rohergebnis (€) ÷ Erlöse (€) × 100

Aus dem Rohergebnis werden die eigenen Gemeinkosten des Versandspediteurs gedeckt (Umschlaglager, Verwaltung, IT). Erst danach bleibt ein Gewinn.`,
  terms: [
    { term: 'Sammelgutverkehr', def: 'Zusammenfassung von Sendungen mehrerer Versender zu einer Ladung für einen gemeinsamen Hauptlauf in eine Zielregion.' },
    { term: 'Versandspediteur', def: 'Spediteur am Abgangsort: holt ab, sortiert, bildet die Sammelladung, erstellt das Bordero und beauftragt den Hauptlauf.' },
    { term: 'Empfangsspediteur', def: 'Spediteur am Zielort: übernimmt die Sammelladung, entlädt, sortiert und stellt den Empfängern zu.' },
    { term: 'Vorlauf', def: 'Abholung der Sendungen bei den Versendern und Beförderung zum Lager des Versandspediteurs.' },
    { term: 'Hauptlauf', def: 'Beförderung der Sammelladung vom Versandspediteur zum Empfangsspediteur (Fernverkehr).' },
    { term: 'Nachlauf', def: 'Verteilung der Sendungen vom Lager des Empfangsspediteurs zu den Empfängern.' },
    { term: 'Umschlag', def: 'Entladen, Sortieren und Verladen der Sendungen im Lager oder Hub.' },
    { term: 'Bordero', def: 'Ladeliste einer Sammelladung mit allen Sendungsdaten (Versender, Empfänger, Packstücke, Gewicht, Frankatur, Nachnahme).' },
    { term: 'Hub-and-Spoke', def: 'Netzform, bei der alle Depots ihre Sendungen über einen zentralen Umschlagpunkt (Hub) austauschen.' },
    { term: 'Direktverkehr (Rasterverkehr)', def: 'Netzform, bei der die Depots einander ohne Zwischenumschlag direkt anfahren.' },
    { term: 'Rückrechnung', def: 'Abrechnung des Empfangsspediteurs gegenüber dem Versandspediteur über Nachlaufleistungen und eingezogene Beträge.' },
    { term: 'Rohergebnis', def: 'Erlöse aus einer Sammelladung minus Vorlauf-, Hauptlauf- und Nachlaufkosten; dient zur Deckung der Gemeinkosten.' }
  ],
  example: `# Praxisbeispiel: Sammelladung Saarbrücken – München

Die Spedition Saar-Cargo GmbH in Saarbrücken ist Partner einer Stückgutkooperation. Am Montag holen ihre Nahverkehrs-Lkw bei 14 Kunden im Saarland Sendungen für Bayern ab (**Vorlauf**). Am Abend sortiert das Lager die Sendungen für das Postleitzahlengebiet 8 und verlädt sie auf einen Sattelzug. Das **Bordero** mit allen Sendungen wird elektronisch an den Kooperationspartner Isar-Logistik in München geschickt.

Der Sattelzug fährt nachts nach München (**Hauptlauf**). Am Dienstagmorgen entlädt Isar-Logistik, sortiert nach Touren und stellt bis zum Nachmittag zu (**Nachlauf**).

**Sammelgutabrechnung der Saar-Cargo (Beispielwerte 2026):**

| Position | Betrag |
|---|---|
| Erlöse von 14 Versendern | 4.860,00 € |
| − Vorlaufkosten | 620,00 € |
| − Hauptlauf (Sattelzug Saarbrücken – München) | 1.450,00 € |
| − Nachlauf (Rückrechnung Isar-Logistik) | 980,00 € |
| **= Rohergebnis** | **1.810,00 €** |

Rohergebnis in % der Erlöse: 1.810,00 € ÷ 4.860,00 € × 100 = **37,24 %**

Daraus muss Saar-Cargo noch die Kosten für das eigene Umschlaglager, die Disposition und die Verwaltung decken.`,
  rules: [
    'Reihenfolge merken: Vorlauf – Umschlag – Hauptlauf – Umschlag – Nachlauf.',
    'Versandspediteur am Abgangsort, Empfangsspediteur am Zielort.',
    'Ohne Bordero weiß der Empfangsspediteur nicht, was in der Ladung ist.',
    'Rohergebnis = Erlöse − Vorlaufkosten − Hauptlaufkosten − Nachlaufkosten.',
    'Rohergebnis in % = Rohergebnis ÷ Erlöse × 100. Bezugsgröße sind immer die Erlöse.',
    'Hub spart Linien und erhöht die Auslastung, kostet aber einen zusätzlichen Umschlag.'
  ],
  summary: `- Sammelgutverkehr bündelt kleine Sendungen vieler Versender für einen gemeinsamen Hauptlauf.
- Ablauf: Vorlauf (Abholung) – Umschlag beim Versandspediteur – Hauptlauf – Umschlag beim Empfangsspediteur – Nachlauf (Zustellung).
- Das Bordero ist die Ladeliste mit allen Sendungsdaten.
- § 460 HGB: Bei Sammelladung hat der Spediteur die Rechte und Pflichten eines Frachtführers.
- Netzformen: Direktverkehr (schnell, aber viele Linien) und Hub-and-Spoke (gute Auslastung, aber Umweg und zusätzlicher Umschlag).
- Kooperationen bieten mittelständischen Spediteuren ein flächendeckendes Netz.
- Rückrechnung: Empfangsspediteur rechnet Nachlauf und eingezogene Beträge mit dem Versandspediteur ab.
- Rohergebnis = Erlöse − Vor-, Haupt- und Nachlaufkosten; in % bezogen auf die Erlöse.`,
  mistakes: [
    { wrong: 'Der Empfangsspediteur holt die Sendungen beim Versender ab.', right: 'Abholung (Vorlauf) ist Aufgabe des Versandspediteurs. Der Empfangsspediteur übernimmt den Nachlauf.' },
    { wrong: 'Das Rohergebnis ist der Gewinn.', right: 'Vom Rohergebnis müssen noch die Gemeinkosten (Lager, Verwaltung, IT) gedeckt werden.' },
    { wrong: 'Rohergebnis in % wird auf die Kosten bezogen.', right: 'Bezugsgröße sind die Erlöse: Rohergebnis ÷ Erlöse × 100.' },
    { wrong: 'Im Hub-System fährt jedes Depot jedes andere direkt an.', right: 'Das ist der Direktverkehr. Im Hub-System laufen alle Sendungen über den zentralen Umschlagpunkt.' },
    { wrong: 'Bordero und Frachtbrief sind dasselbe.', right: 'Das Bordero listet alle Sendungen einer Sammelladung auf; ein Frachtbrief betrifft einen Frachtvertrag.' }
  ],
  flashcards: [
    { q: 'Was ist Sammelgutverkehr?', a: 'Bündelung von Sendungen mehrerer Versender zu einer Ladung für einen gemeinsamen Hauptlauf.' },
    { q: 'Welche Aufgaben hat der Versandspediteur?', a: 'Abholung (Vorlauf), Sortieren, Bilden der Sammelladung, Bordero erstellen, Hauptlauf beauftragen.' },
    { q: 'Welche Aufgaben hat der Empfangsspediteur?', a: 'Sammelladung übernehmen, entladen, sortieren, an die Empfänger zustellen (Nachlauf), Rückrechnung.' },
    { q: 'Was steht im Bordero?', a: 'Alle Sendungen der Sammelladung mit Versender, Empfänger, Packstücken, Gewicht, Frankatur, Nachnahme und Hinweisen.' },
    { q: 'Wie berechnet man das Rohergebnis?', a: 'Erlöse − Vorlaufkosten − Hauptlaufkosten − Nachlaufkosten.' },
    { q: 'Wie berechnet man das Rohergebnis in Prozent?', a: 'Rohergebnis ÷ Erlöse × 100.' },
    { q: 'Was ist ein Hub?', a: 'Zentraler Umschlagpunkt, über den alle Depots eines Netzes ihre Sendungen austauschen.' },
    { q: 'Wie viele gerichtete Relationen hat ein Direktverkehr mit n Depots?', a: 'n × (n − 1).' },
    { q: 'Was regelt § 460 HGB?', a: 'Der Spediteur darf Sammelladungen bilden und hat dann für die Beförderung die Rechte und Pflichten eines Frachtführers.' },
    { q: 'Warum schließen sich Spediteure zu Kooperationen zusammen?', a: 'Um ohne eigene Niederlassungen ein flächendeckendes Netz anzubieten: jeder Partner ist Versand- und Empfangsspediteur in seinem Gebiet.' }
  ],
  tasks: [
    {
      id: 'lf05-sammelgut-ablauf-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Wer stellt im Sammelgutverkehr die Sendungen beim Empfänger zu?',
      options: ['Der Versender', 'Der Versandspediteur', 'Der Empfangsspediteur', 'Der Frachtführer im Hauptlauf'],
      correct: [2],
      hints: ['Die Zustellung heißt Nachlauf.', 'Wer sitzt in der Zielregion?'],
      solution: '**Der Empfangsspediteur.** Er übernimmt die Sammelladung am Zielort, sortiert nach Touren und stellt im Nachlauf zu.'
    },
    {
      id: 'lf05-sammelgut-ablauf-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen beschreiben Vorteile eines Hub-and-Spoke-Systems gegenüber dem Direktverkehr? (Mehrfachauswahl)',
      options: [
        'Auch bei geringem Aufkommen zwischen zwei Regionen sind die Lkw gut ausgelastet.',
        'Es entfällt jeder Umschlag.',
        'Es sind deutlich weniger Linien zu bedienen.',
        'Die Laufzeit ist immer kürzer.',
        'Ein flächendeckendes Netz lässt sich leichter anbieten.'
      ],
      correct: [0, 2, 4],
      hints: ['Im Hub kommt ein Umschlag hinzu.', 'Umwege über den Hub verlängern eher die Strecke.'],
      solution: 'Richtig sind **1, 3 und 5**. Der Hub bündelt Mengen und braucht weniger Linien. Er bringt aber einen **zusätzlichen** Umschlag und Umwege mit sich (Aussagen 2 und 4 falsch).'
    },
    {
      id: 'lf05-sammelgut-ablauf-a3', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne die Begriffe den Beschreibungen zu.',
      pairs: [
        ['Vorlauf', 'Abholung beim Versender bis zum Lager des Versandspediteurs'],
        ['Hauptlauf', 'Fernverkehr vom Versandspediteur zum Empfangsspediteur'],
        ['Nachlauf', 'Zustellung vom Lager des Empfangsspediteurs zum Empfänger'],
        ['Bordero', 'Ladeliste aller Sendungen einer Sammelladung'],
        ['Hub', 'Zentraler Umschlagpunkt eines Netzes']
      ],
      hints: ['Vor – Haupt – Nach beschreibt die Reihenfolge der Abschnitte.', 'Ein Begriff ist ein Dokument, einer ein Ort.'],
      solution: 'Vorlauf = Abholung, Hauptlauf = Fernverkehr zwischen den Spediteuren, Nachlauf = Zustellung, Bordero = Ladeliste, Hub = zentraler Umschlagpunkt.'
    },
    {
      id: 'lf05-sammelgut-ablauf-a4', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe den Ablauf einer Sammelgutsendung in die richtige Reihenfolge.',
      items: [
        'Versender erteilt den Speditionsauftrag',
        'Abholung beim Versender (Vorlauf)',
        'Sortieren, Verladen und Bordero erstellen beim Versandspediteur',
        'Fernverkehr zum Empfangsspediteur (Hauptlauf)',
        'Entladen und Sortieren nach Touren beim Empfangsspediteur',
        'Zustellung beim Empfänger (Nachlauf)'
      ],
      hints: ['Am Anfang steht der Auftrag.', 'Zwischen Haupt- und Nachlauf liegt ein zweiter Umschlag.'],
      solution: 'Auftrag – Vorlauf – Umschlag und Bordero – Hauptlauf – Umschlag beim Empfangsspediteur – Nachlauf.'
    },
    {
      id: 'lf05-sammelgut-ablauf-a5', type: 'cloze', difficulty: 2, points: 4,
      q: 'Ergänze den Text zur Sammelgutabrechnung.',
      text: 'Der Versandspediteur zieht von seinen [[Erlösen|Erlöse]] die Kosten für Vorlauf, Hauptlauf und [[Nachlauf]] ab. Das Ergebnis heißt [[Rohergebnis]]. Um es in Prozent auszudrücken, teilt man es durch die [[Erlöse]] und multipliziert mit 100.',
      hints: ['Es geht um Einnahmen minus drei Kostenblöcke.', 'Die Bezugsgröße für die Prozentrechnung sind die Einnahmen.'],
      solution: 'Erlöse – Nachlauf – Rohergebnis – Erlöse. Rohergebnis (%) = Rohergebnis ÷ Erlöse × 100.'
    },
    {
      id: 'lf05-sammelgut-ablauf-a6', type: 'calc', difficulty: 2, points: 4,
      q: 'Sammelladung Saarbrücken – Hamburg (Beispielwerte 2026):\n\n| Position | Betrag |\n|---|---|\n| Erlöse von den Versendern | 4.860,00 € |\n| Vorlaufkosten | 620,00 € |\n| Hauptlaufkosten | 1.450,00 € |\n| Nachlaufkosten des Empfangsspediteurs | 980,00 € |\n\nBerechne die Gesamtkosten, das Rohergebnis und das Rohergebnis in Prozent der Erlöse.',
      formula: 'Rohergebnis = Erlöse − (Vorlauf + Hauptlauf + Nachlauf); Rohergebnis % = Rohergebnis ÷ Erlöse × 100',
      fields: [
        { id: 'kosten', label: 'Summe Vor-, Haupt- und Nachlaufkosten', unit: '€', answer: 3050, tol: 0.01 },
        { id: 're', label: 'Rohergebnis', unit: '€', answer: 1810, tol: 0.01 },
        { id: 'proz', label: 'Rohergebnis in % der Erlöse', unit: '%', answer: 37.24, tol: 0.1 }
      ],
      hints: ['Zuerst die drei Kostenblöcke addieren.', 'Für den Prozentwert durch die Erlöse teilen, nicht durch die Kosten.'],
      solution: `**Formel:** Rohergebnis = Erlöse − Vorlauf − Hauptlauf − Nachlauf

1. Kosten: 620,00 € + 1.450,00 € + 980,00 € = **3.050,00 €**
2. Rohergebnis: 4.860,00 € − 3.050,00 € = **1.810,00 €**
3. Rohergebnis in %: 1.810,00 € ÷ 4.860,00 € × 100 = 37,2428 … ≈ **37,24 %**`
    },
    {
      id: 'lf05-sammelgut-ablauf-a7', type: 'calc', difficulty: 3, points: 5,
      q: 'Eine Sammelladung nach Stuttgart wiegt insgesamt 9.400 kg. Es gelten diese Beispielwerte (2026):\n\n- Erlöse von den Versendern: 2.150,00 €\n- Vorlauf: 2 Abholtouren zu je 180,00 €\n- Hauptlauf: 7,80 € je angefangene 100 kg\n- Nachlauf (Entladen und Verteilen beim Empfangsspediteur): 3,10 € je angefangene 100 kg\n\nBerechne Vorlauf-, Hauptlauf- und Nachlaufkosten, das Rohergebnis und das Rohergebnis in Prozent.',
      formula: 'Kosten je 100 kg = (Gewicht ÷ 100) × Satz; Rohergebnis = Erlöse − Vorlauf − Hauptlauf − Nachlauf',
      fields: [
        { id: 'vl', label: 'Vorlaufkosten', unit: '€', answer: 360, tol: 0.01 },
        { id: 'hl', label: 'Hauptlaufkosten', unit: '€', answer: 733.2, tol: 0.01 },
        { id: 'nl', label: 'Nachlaufkosten', unit: '€', answer: 291.4, tol: 0.01 },
        { id: 're', label: 'Rohergebnis', unit: '€', answer: 765.4, tol: 0.01 },
        { id: 'proz', label: 'Rohergebnis in % der Erlöse', unit: '%', answer: 35.6, tol: 0.1 }
      ],
      hints: ['9.400 kg sind genau 94 volle Einheiten zu je 100 kg.', 'Erst alle drei Kostenblöcke ermitteln, dann von den Erlösen abziehen.'],
      solution: `1. Vorlauf: 2 × 180,00 € = **360,00 €**
2. Gewichtseinheiten: 9.400 kg ÷ 100 kg = 94
3. Hauptlauf: 94 × 7,80 € = **733,20 €**
4. Nachlauf: 94 × 3,10 € = **291,40 €**
5. Rohergebnis: 2.150,00 € − 360,00 € − 733,20 € − 291,40 € = **765,40 €**
6. Rohergebnis in %: 765,40 € ÷ 2.150,00 € × 100 = **35,60 %**`
    },
    {
      id: 'lf05-sammelgut-ablauf-a8', type: 'calc', difficulty: 2, points: 3,
      q: 'Eine Kooperation hat 12 Depots. Wie viele gerichtete Linien (Relationen) wären im reinen Direktverkehr nötig, wenn jedes Depot jedes andere direkt anfährt? Wie viele Verbindungen braucht ein Hub-and-Spoke-System, wenn jedes Depot einmal zum Hub und einmal zurück fährt? Wie viele Linien spart der Hub?',
      formula: 'Direktverkehr = n × (n − 1); Hub = 2 × n; Einsparung = Direktverkehr − Hub',
      fields: [
        { id: 'direkt', label: 'Relationen im Direktverkehr', unit: 'Linien', answer: 132, tol: 0 },
        { id: 'hub', label: 'Verbindungen im Hub-System', unit: 'Linien', answer: 24, tol: 0 },
        { id: 'diff', label: 'Einsparung', unit: 'Linien', answer: 108, tol: 0 }
      ],
      hints: ['Jedes der 12 Depots fährt 11 andere an.', 'Im Hub-System hat jedes Depot genau zwei Verbindungen: hin und zurück.'],
      solution: `1. Direktverkehr: 12 × (12 − 1) = 12 × 11 = **132 Relationen**
2. Hub-and-Spoke: 2 × 12 = **24 Verbindungen**
3. Einsparung: 132 − 24 = **108 Linien**

Darum lohnt sich der Hub vor allem bei vielen Depots mit jeweils kleinem Aufkommen.`
    },
    {
      id: 'lf05-sammelgut-ablauf-a9', type: 'calc', difficulty: 2, points: 3,
      q: 'Rückrechnung: Der Empfangsspediteur stellt dem Versandspediteur für Entladen und Verteilen 980,00 € in Rechnung. Gleichzeitig hat er bei unfreien Sendungen 640,00 € von den Empfängern eingezogen, die dem Versandspediteur zustehen. Wie hoch ist der Saldo, den der Versandspediteur noch an den Empfangsspediteur überweisen muss?',
      formula: 'Saldo = Nachlaufkosten − eingezogene Beträge',
      fields: [
        { id: 'saldo', label: 'Zahlung an den Empfangsspediteur', unit: '€', answer: 340, tol: 0.01 }
      ],
      hints: ['Der Empfangsspediteur hat eine Forderung (Nachlauf) und eine Verbindlichkeit (eingezogenes Geld).', 'Beide Beträge werden verrechnet.'],
      solution: `Forderung des Empfangsspediteurs: 980,00 €
Gutschrift für den Versandspediteur: 640,00 €

Saldo: 980,00 € − 640,00 € = **340,00 €**, die der Versandspediteur überweist. Die 980,00 € gehen trotzdem vollständig als Nachlaufkosten in die Sammelgutabrechnung ein.`
    },
    {
      id: 'lf05-sammelgut-ablauf-a10', type: 'text', difficulty: 2, points: 4,
      q: 'Dein Ausbilder fragt: Warum fährt unsere Spedition die Relation Saarbrücken – Köln täglich direkt, schickt aber die wenigen Sendungen nach Rostock über den Hub? Begründe in 3–5 Sätzen.',
      model: 'Nach Köln gibt es täglich so viele Sendungen, dass ein eigener Lkw gut ausgelastet ist. Der Direktverkehr ist dann schneller und vermeidet einen zusätzlichen Umschlag mit Kosten und Schadensrisiko. Nach Rostock reicht das Aufkommen nicht für einen eigenen Lkw; ein schlecht ausgelasteter Lkw wäre zu teuer. Über den Hub werden die Rostock-Sendungen mit denen anderer Depots gebündelt, sodass der Hauptlauf ausgelastet ist. Dafür nimmt man einen Umweg und einen zusätzlichen Umschlag in Kauf.',
      criteria: [
        { text: 'nennt das hohe Aufkommen bzw. die Auslastung nach Köln', keywords: ['Auslastung|ausgelastet|Aufkommen|Menge'], points: 1 },
        { text: 'nennt einen Vorteil des Direktverkehrs (schneller, kein Umschlag)', keywords: ['schneller|Laufzeit|Umschlag'], points: 1 },
        { text: 'nennt die Bündelung über den Hub', keywords: ['bündel|Hub|gesammelt|zusammen'], points: 1 },
        { text: 'nennt einen Nachteil des Hubs', keywords: ['Umweg|zusätzlich|Umschlag|länger'], points: 1 }
      ],
      hints: ['Vergleiche das Sendungsaufkommen der beiden Relationen.', 'Was kostet ein halb leerer Lkw – und was kostet der Hub?'],
      solution: 'Siehe Musterlösung: Starke Relation (Köln) direkt wegen guter Auslastung, kürzerer Laufzeit und weniger Umschlag; schwache Relation (Rostock) über den Hub, weil dort gebündelt wird; Nachteil: Umweg und zusätzlicher Umschlag.'
    },
    {
      id: 'lf05-sammelgut-ablauf-a11', type: 'case', difficulty: 3, points: 9,
      q: 'Fallsituation: Sammelladung nach Leipzig',
      intro: 'Die Spedition Bliesgau-Logistik in Homburg hat für den Dienstag fünf Sendungen nach Leipzig gesammelt. Speditionsentgelte der Versender (Beispielwerte 2026):\n\n| Sendung | Versender | Entgelt |\n|---|---|---|\n| 1 | Möbelwerk | 186,50 € |\n| 2 | Druckerei | 242,00 € |\n| 3 | Elektrohandel | 98,40 € |\n| 4 | Maschinenbau | 315,60 € |\n| 5 | Getränkehandel | 157,50 € |\n\nKosten: Vorlauf 135,00 €, Hauptlauf im Direktverkehr 410,00 €, Nachlauf laut Rückrechnung des Empfangsspediteurs 265,00 €.',
      parts: [
        {
          id: 'lf05-sammelgut-ablauf-a11a', type: 'calc', difficulty: 2, points: 4,
          q: 'Berechne die Erlöse, das Rohergebnis und das Rohergebnis in Prozent bei Direktverkehr.',
          formula: 'Erlöse = Summe der Entgelte; Rohergebnis = Erlöse − Vorlauf − Hauptlauf − Nachlauf; % = Rohergebnis ÷ Erlöse × 100',
          fields: [
            { id: 'erl', label: 'Erlöse', unit: '€', answer: 1000, tol: 0.01 },
            { id: 're', label: 'Rohergebnis', unit: '€', answer: 190, tol: 0.01 },
            { id: 'proz', label: 'Rohergebnis in %', unit: '%', answer: 19, tol: 0.1 }
          ],
          hints: ['Alle fünf Entgelte addieren.', 'Dann die drei Kostenblöcke abziehen.'],
          solution: `1. Erlöse: 186,50 + 242,00 + 98,40 + 315,60 + 157,50 = **1.000,00 €**
2. Rohergebnis: 1.000,00 € − 135,00 € − 410,00 € − 265,00 € = **190,00 €**
3. In Prozent: 190,00 € ÷ 1.000,00 € × 100 = **19,00 %**`
        },
        {
          id: 'lf05-sammelgut-ablauf-a11b', type: 'calc', difficulty: 3, points: 3,
          q: 'Alternativ kann die Ladung über den Hub der Kooperation laufen: Hauptlauf 330,00 € plus Umschlagentgelt im Hub 55,00 €. Vorlauf und Nachlauf bleiben gleich. Berechne die Hauptlaufkosten über den Hub, das neue Rohergebnis und das Rohergebnis in Prozent.',
          formula: 'Hauptlauf Hub = Fracht + Umschlagentgelt; Rohergebnis = Erlöse − Vorlauf − Hauptlauf Hub − Nachlauf',
          fields: [
            { id: 'hl', label: 'Hauptlaufkosten über den Hub', unit: '€', answer: 385, tol: 0.01 },
            { id: 're', label: 'Rohergebnis', unit: '€', answer: 215, tol: 0.01 },
            { id: 'proz', label: 'Rohergebnis in %', unit: '%', answer: 21.5, tol: 0.1 }
          ],
          hints: ['Das Umschlagentgelt gehört zu den Hauptlaufkosten.', 'Die Erlöse bleiben 1.000,00 €.'],
          solution: `1. Hauptlauf über den Hub: 330,00 € + 55,00 € = **385,00 €**
2. Rohergebnis: 1.000,00 € − 135,00 € − 385,00 € − 265,00 € = **215,00 €**
3. In Prozent: 215,00 € ÷ 1.000,00 € × 100 = **21,50 %**

Der Hub verbessert das Rohergebnis um 25,00 € bzw. 2,5 Prozentpunkte.`
        },
        {
          id: 'lf05-sammelgut-ablauf-a11c', type: 'mc', difficulty: 2, points: 2,
          q: 'Der Maschinenbaukunde (Sendung 4) braucht seine Sendung zwingend am nächsten Morgen in Leipzig, der Hub-Weg würde einen Tag länger dauern. Welche Entscheidung ist am besten begründet?',
          options: [
            'Hub, weil das Rohergebnis höher ist – die Laufzeit spielt keine Rolle.',
            'Direktverkehr, weil der Termin des Kunden eingehalten werden muss und das Rohergebnis auch dort positiv ist.',
            'Die Sendung gar nicht annehmen.',
            'Hub, weil der Empfangsspediteur die Verspätung bezahlt.'
          ],
          correct: [1],
          hints: ['Ein Rohergebnis von 190,00 € ist immer noch positiv.', 'Was kostet ein verärgerter Stammkunde?'],
          solution: '**Direktverkehr.** Der Termin ist für den Kunden entscheidend. Der Direktverkehr bringt mit 190,00 € (19 %) ebenfalls ein positives Rohergebnis. 25,00 € Mehrertrag rechtfertigen keine Terminüberschreitung.'
        }
      ],
      hints: ['Rechne beide Varianten vollständig durch.', 'Beziehe am Ende neben dem Geld auch die Kundenanforderung ein.'],
      solution: 'Erlöse 1.000,00 €. Direktverkehr: Rohergebnis 190,00 € (19,00 %). Hub: Hauptlauf 385,00 €, Rohergebnis 215,00 € (21,50 %). Wegen des Termins des Maschinenbaukunden ist der Direktverkehr hier die bessere Entscheidung.'
    }
  ],
  quiz: [
    'lf05-sammelgut-ablauf-a1',
    'lf05-sammelgut-ablauf-a3',
    'lf05-sammelgut-ablauf-a6',
    'lf05-sammelgut-ablauf-a7',
    'lf05-sammelgut-ablauf-a8'
  ],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 5, Inhalte: Sammelgutverkehr, Versand- und Empfangsspediteur, Bordero, Sammelgutabrechnung, Systemverkehre und Kooperationen' },
    { title: 'Handelsgesetzbuch § 453 Speditionsvertrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__453.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 460 Sammelladung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__460.html', asOf: '2026-10-17' }
  ],
  links: ['lf04-frachtvertrag-haftung', 'lf04-verkehrstraeger-vergleich']
};
