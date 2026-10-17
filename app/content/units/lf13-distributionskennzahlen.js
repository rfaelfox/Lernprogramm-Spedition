export default {
  id: 'lf13-distributionskennzahlen',
  area: 'LF13',
  topic: 'lf13-lagerkennzahlen',
  title: 'Distributions- und Logistikkennzahlen',
  status: 'vollstaendig',
  minutes: 50,
  validity: null,
  goals: [
    'Ich kann Lieferbereitschaftsgrad (Servicegrad), Liefertreue, Lieferzeit und Fehlerquote berechnen und ihre Aussage erklären.',
    'Ich kann den Lagerhaltungskostensatz berechnen und deuten.',
    'Ich kann aus Umschlagshäufigkeit und Lagerdauer den Lagerzinssatz und die Lagerzinsen berechnen.',
    'Ich kann berechnen, wie viel Kapital durch eine höhere Umschlagshäufigkeit freigesetzt wird.',
    'Ich kann Vor- und Nachteile eines Zentrallagers und dezentraler Lager abwägen und eine Standortentscheidung mit Kostenvergleich und Nutzwertanalyse begründen.',
    'Ich kann Kennzahlen im Zeit-, Betriebs- und Soll-Ist-Vergleich auswerten und Maßnahmen ableiten.'
  ],
  simple: `# Wozu Kennzahlen?

Ein Kunde, der seine Distribution an eine Spedition übergibt, will wissen: **Bekommen meine Kunden ihre Ware vollständig, pünktlich und fehlerfrei? Und was kostet mich das Lager?** Kennzahlen beantworten diese Fragen mit Zahlen statt mit Gefühl.

# Die wichtigsten Kennzahlen in einem Satz

- **Lieferbereitschaftsgrad (Servicegrad):** Wie viele Bestellungen konnten sofort aus dem Lager bedient werden?
- **Liefertreue:** Wie viele Lieferungen kamen zum zugesagten Termin an?
- **Lieferzeit:** Wie lange dauert es von der Bestellung bis zur Ankunft beim Kunden?
- **Fehlerquote:** Wie viele Positionen waren falsch (falscher Artikel, falsche Menge)?
- **Lagerhaltungskostensatz:** Wie viel Prozent vom Lagerwert kostet die Lagerhaltung?
- **Lagerzinssatz:** Wie viel Zinsen kostet das in der Ware gebundene Geld während der Lagerdauer?

# Ein Zielkonflikt

Hohe Lieferbereitschaft braucht **viel Bestand** – viel Bestand bindet **Kapital** und kostet **Zinsen und Lagerkosten**. Die Kunst ist, das richtige Maß zu finden.

> Umschlagshäufigkeit, durchschnittliche Lagerdauer, durchschnittlicher Lagerbestand und Lagerreichweite werden in der Einheit „Lagerorganisation, Lagerpapiere und Lagerkennzahlen“ erklärt. Hier werden sie weiterverwendet.`,
  deep: `# 1. Servicekennzahlen

| Kennzahl | Formel | Aussage |
|---|---|---|
| **Lieferbereitschaftsgrad** (Servicegrad) | sofort aus dem Bestand erfüllte Bestellungen ÷ alle Bestellungen × 100 | Verfügbarkeit der Ware; kann auch auf **Positionen** oder **Mengen** bezogen werden |
| **Liefertreue** (Termintreue) | termingerecht zugestellte Aufträge ÷ alle Aufträge × 100 | Zuverlässigkeit der Zustellung |
| **Liefergenauigkeit / Fehlerquote** | fehlerhafte Positionen ÷ kommissionierte Positionen × 100 (oder × 1.000.000 = ppm) | Qualität der Kommissionierung und Verladung |
| **Lieferzeit** | Zeit vom Auftragseingang bis zur Zustellung; als Durchschnitt (gewichtet) oder als Anteil „innerhalb von x Stunden“ | Schnelligkeit |
| **Schadensquote** | beschädigte Sendungen ÷ alle Sendungen × 100 | Sorgfalt bei Umschlag und Transport |

**Achtung beim Lieferbereitschaftsgrad:** Der Wert hängt davon ab, worauf er sich bezieht. Fehlt in einem Auftrag mit 20 Positionen eine einzige, ist der Auftrag **nicht** vollständig (auftragsbezogen 0 %), positionsbezogen aber zu 95 % erfüllt. Im Logistikvertrag muss die Definition festgelegt werden.

**Lieferzeit gewichtet:** Ø Lieferzeit = Σ (Anteil der Aufträge × Lieferzeit). Beispiel: 60 % in 24 h, 30 % in 48 h, 10 % in 72 h → 0,6 × 24 + 0,3 × 48 + 0,1 × 72 = **36 h**.

# 2. Kosten- und Kapitalkennzahlen

**Lagerhaltungskostensatz** = Lagerhaltungskosten ÷ durchschnittlicher Lagerbestand (in €) × 100

Er zeigt, wie viel Prozent des durchschnittlichen Lagerwerts die Lagerhaltung im Jahr kostet. Zu den Lagerhaltungskosten zählen Raum-, Personal- und Technikkosten, Versicherung, Schwund, Veralterung und die Zinsen auf das gebundene Kapital (Kostenarten im Lager: siehe Einheit „Lagerkosten, Angebot und Abrechnung“).

**Kapitalbindung**: Der durchschnittliche Lagerbestand in € ist Kapital, das in der Ware „steckt“ und nicht anderweitig genutzt werden kann.

**Lagerzinssatz** = Jahreszinssatz × durchschnittliche Lagerdauer ÷ 360

**Lagerzinsen** = durchschnittlicher Lagerbestand × Lagerzinssatz ÷ 100

So rechnen die meisten Schulbücher und Prüfungen. Der Lagerzinssatz gibt an, wie viel Prozent ihres Werts eine Ware während ihrer **durchschnittlichen Lagerdauer** an Zinsen kostet.

> Prüfungshinweis: Die **jährlichen** Zinskosten auf das gebundene Kapital sind Ø Lagerbestand × Jahreszinssatz. Lagerzinsen nach der obigen Formel × Umschlagshäufigkeit ergeben genau diesen Jahresbetrag. Lies in der Aufgabe genau, welche Größe gefragt ist.

**Kapitalfreisetzung durch höhere Umschlagshäufigkeit**

Ø Lagerbestand = Lagerabgang ÷ Umschlagshäufigkeit. Steigt die Umschlagshäufigkeit bei gleichem Absatz, sinkt der Ø Bestand. Die Differenz ist **freigesetztes Kapital**; die Zinsersparnis im Jahr = freigesetztes Kapital × Jahreszinssatz.

# 3. Zentrallager oder dezentrale Lager?

| Merkmal | Zentrallager (ein Lager für ein großes Gebiet) | Dezentrale Lager (mehrere Regionallager) |
|---|---|---|
| Lagerbestand und Sicherheitsbestand | **geringer**, weil Schwankungen sich ausgleichen | höher, jedes Lager braucht eigene Reserven |
| Kapitalbindung, Lagerkosten | niedriger | höher |
| Automatisierung | lohnt sich eher (hohe Mengen an einem Ort) | schwieriger |
| Transportweg zum Kunden | **länger**, höhere Verteilkosten | kürzer, geringere Verteilkosten |
| Lieferzeit | länger | **kürzer**, kundennah |
| Ausfallrisiko | hoch: fällt das Lager aus, steht alles | verteilt |

Oft gibt es Mischformen: ein **Zentrallager** mit **Umschlagpunkten** (Cross-Docking ohne Bestand) in den Regionen.

**Standortwahl – typische Kriterien**: Nähe zu Kunden und Lieferanten, Verkehrsanbindung (Autobahn, Schiene, Wasserstraße), Grundstücks- und Mietpreise, Verfügbarkeit von Arbeitskräften und Lohnniveau, Fördermittel, Genehmigungslage (z. B. Nachtbetrieb), Erweiterungsflächen.

**Entscheidung**
1. **Kostenvergleich**: Summe aus Lagerkosten und Transportkosten (und ggf. Kapitalkosten) je Alternative vergleichen.
2. **Nutzwertanalyse**: auch nicht in Geld messbare Kriterien berücksichtigen – Kriterien gewichten (Summe 100 %), Alternativen mit Punkten bewerten, Punkte × Gewicht, Summe bilden (Vorgehen ausführlich in der Einheit „Verkehrsträger im Vergleich“).

# 4. Kennzahlen vergleichen

| Vergleich | Frage | Beispiel |
|---|---|---|
| **Zeitvergleich** | Wie hat sich der Wert entwickelt? | Fehlerquote Januar bis Juni |
| **Betriebsvergleich** (Benchmarking) | Wie stehen wir im Vergleich zu anderen da? | Standort Homburg gegen Standort Saarlouis |
| **Soll-Ist-Vergleich** | Erreichen wir das vereinbarte Ziel? | Liefertreue Ist 94 % gegen Soll 97 % laut Logistikvertrag |

Eine Kennzahl allein sagt wenig. Erst der **Vergleich** und die **Ursachenanalyse** führen zu Maßnahmen, z. B. bei sinkender Liefertreue: Tourenplanung prüfen, Kommissionierschluss vorziehen, Zeitfenster mit Empfängern abstimmen.`,
  terms: [
    { term: 'Lieferbereitschaftsgrad (Servicegrad)', def: 'Anteil der Bestellungen (oder Positionen, Mengen), die sofort aus dem vorhandenen Bestand erfüllt werden konnten, in Prozent.' },
    { term: 'Liefertreue', def: 'Anteil der Aufträge, die zum zugesagten Termin zugestellt wurden, in Prozent.' },
    { term: 'Lieferzeit', def: 'Zeitspanne vom Eingang der Bestellung bis zur Zustellung beim Empfänger.' },
    { term: 'Fehlerquote', def: 'Anteil fehlerhaft kommissionierter oder gelieferter Positionen an allen Positionen; auch in ppm (Teile je Million) angegeben.' },
    { term: 'Lagerhaltungskostensatz', def: 'Lagerhaltungskosten eines Jahres in Prozent des durchschnittlichen Lagerbestands (in €).' },
    { term: 'Kapitalbindung', def: 'In den Lagerbeständen gebundenes Geld, gemessen am durchschnittlichen Lagerbestand in €.' },
    { term: 'Lagerzinssatz', def: 'Jahreszinssatz × durchschnittliche Lagerdauer ÷ 360; Zinskosten in Prozent des Warenwerts während der Lagerdauer.' },
    { term: 'Lagerzinsen', def: 'Durchschnittlicher Lagerbestand × Lagerzinssatz ÷ 100.' },
    { term: 'Zentrallager', def: 'Ein einziges Lager versorgt ein großes Absatzgebiet; geringere Bestände, aber längere Verteilwege.' },
    { term: 'Dezentrale Lager', def: 'Mehrere regionale Lager nahe beim Kunden; kurze Lieferzeit, aber höhere Bestände und Lagerkosten.' },
    { term: 'Nutzwertanalyse', def: 'Entscheidungsverfahren mit gewichteten Kriterien und Punktbewertung, das auch nicht in Geld messbare Kriterien berücksichtigt.' },
    { term: 'Soll-Ist-Vergleich', def: 'Vergleich der erreichten Kennzahl mit dem geplanten oder vertraglich vereinbarten Zielwert.' }
  ],
  example: `# Monatsbericht Mai: Saarlogistik GmbH für einen Elektrogroßhändler (Beispielzahlen)

Im Logistikvertrag sind Zielwerte vereinbart. Der Bericht vergleicht Soll und Ist:

| Kennzahl | Berechnung | Ist | Soll |
|---|---|---:|---:|
| Lieferbereitschaftsgrad | 6.000 ÷ 6.250 × 100 | 96,0 % | ≥ 98 % |
| Liefertreue | 5.875 ÷ 6.250 × 100 | 94,0 % | ≥ 97 % |
| Fehlerquote | 60 ÷ 75.000 × 100 | 0,08 % | ≤ 0,10 % |

**Auswertung:**
- Die **Fehlerquote** ist im Ziel – die Kommissionierung arbeitet sauber.
- Der **Lieferbereitschaftsgrad** ist zu niedrig: Bei 250 Aufträgen fehlte Ware. Ursache laut Analyse: Der Großhändler hat zwei Schnelldreher zu spät nachbestellt. Maßnahme: Meldebestand im LVS anheben, automatische Bestandswarnung an den Einkauf des Kunden.
- Die **Liefertreue** ist zu niedrig. Ursache: Auf der Tour Saarbrücken-Innenstadt wurden Zeitfenster wegen Baustellen verpasst. Maßnahme: Tour teilen, früher starten (siehe Einheit „Tourenplanung“).

**Kapitalbindung beim Kunden:** Ø Lagerbestand 540.000 €, Lagerabgang im Jahr 4.860.000 €, Zinssatz 4,5 %.
- Umschlagshäufigkeit = 4.860.000 ÷ 540.000 = 9
- Ø Lagerdauer = 360 ÷ 9 = 40 Tage
- Lagerzinssatz = 4,5 × 40 ÷ 360 = 0,5 %
- Lagerzinsen = 540.000 × 0,5 ÷ 100 = **2.700 €** (jährliche Zinskosten: 540.000 × 4,5 % = 24.300 € = 2.700 € × 9)`,
  rules: [
    'Lieferbereitschaftsgrad = sofort erfüllte Bestellungen ÷ alle Bestellungen × 100 – immer klären, ob auftrags-, positions- oder mengenbezogen.',
    'Liefertreue misst die Pünktlichkeit, der Lieferbereitschaftsgrad die Verfügbarkeit – nicht verwechseln.',
    'Lagerzinssatz = Jahreszins × Ø Lagerdauer ÷ 360; Lagerzinsen = Ø Lagerbestand × Lagerzinssatz ÷ 100.',
    'Höhere Umschlagshäufigkeit → geringerer Ø Bestand → weniger Kapitalbindung und Zinsen.',
    'Zentrallager: weniger Bestand, längere Wege. Dezentrale Lager: kürzere Lieferzeit, mehr Bestand.',
    'Bei der Nutzwertanalyse müssen die Gewichte zusammen 100 % ergeben; gewinnt die höchste gewichtete Punktsumme.',
    'Eine Kennzahl wird erst durch einen Vergleich (Zeit, Betrieb, Soll-Ist) aussagekräftig.'
  ],
  summary: `- **Service:** Lieferbereitschaftsgrad (Verfügbarkeit), Liefertreue (Pünktlichkeit), Lieferzeit (Schnelligkeit), Fehlerquote (Qualität).
- **Kosten:** Lagerhaltungskostensatz = Lagerhaltungskosten ÷ Ø Lagerbestand × 100.
- **Kapital:** Lagerzinssatz = Zins × Ø Lagerdauer ÷ 360; Lagerzinsen = Ø Bestand × Lagerzinssatz ÷ 100.
- **Zielkonflikt:** hohe Lieferbereitschaft ↔ niedrige Bestände und Kosten.
- **Standort:** Zentrallager vs. dezentrale Lager über Kostenvergleich und Nutzwertanalyse entscheiden.
- **Vergleich:** Zeit-, Betriebs- und Soll-Ist-Vergleich, danach Ursachen und Maßnahmen.`,
  mistakes: [
    { wrong: 'Lieferbereitschaftsgrad und Liefertreue sind dasselbe.', right: 'Der Lieferbereitschaftsgrad misst, ob die Ware verfügbar war; die Liefertreue, ob sie pünktlich ankam.' },
    { wrong: 'Ein Lieferbereitschaftsgrad von 100 % ist immer das beste Ziel.', right: 'Die letzten Prozentpunkte erfordern sehr hohe Sicherheitsbestände und viel Kapitalbindung. Das Ziel wird wirtschaftlich festgelegt.' },
    { wrong: 'Lagerzinssatz = Jahreszinssatz × Umschlagshäufigkeit ÷ 360.', right: 'Es wird die durchschnittliche Lagerdauer eingesetzt: Jahreszins × Ø Lagerdauer ÷ 360.' },
    { wrong: 'Bei der Nutzwertanalyse gewinnt die Alternative mit den meisten ungewichteten Punkten.', right: 'Entscheidend ist die Summe aus Punkte × Gewicht; ein wichtiges Kriterium kann die Entscheidung drehen.' },
    { wrong: 'Ein Zentrallager ist immer günstiger.', right: 'Es spart Lagerkosten, verursacht aber höhere Verteilkosten und längere Lieferzeiten; entscheidend ist die Gesamtsumme und der Service.' }
  ],
  flashcards: [
    { q: 'Formel Lieferbereitschaftsgrad?', a: 'Sofort aus dem Bestand erfüllte Bestellungen ÷ alle Bestellungen × 100.' },
    { q: 'Formel Liefertreue?', a: 'Termingerecht zugestellte Aufträge ÷ alle Aufträge × 100.' },
    { q: 'Was bedeutet eine Fehlerquote von 500 ppm?', a: '500 fehlerhafte Positionen je 1 Million Positionen = 0,05 %.' },
    { q: 'Formel Lagerhaltungskostensatz?', a: 'Lagerhaltungskosten ÷ Ø Lagerbestand (in €) × 100.' },
    { q: 'Formel Lagerzinssatz?', a: 'Jahreszinssatz × Ø Lagerdauer ÷ 360.' },
    { q: 'Formel Lagerzinsen?', a: 'Ø Lagerbestand × Lagerzinssatz ÷ 100.' },
    { q: 'Wie wird Kapital freigesetzt?', a: 'Durch eine höhere Umschlagshäufigkeit sinkt der Ø Lagerbestand bei gleichem Absatz; die Differenz ist frei gewordenes Kapital.' },
    { q: 'Zwei Vorteile eines Zentrallagers?', a: 'Geringere Bestände und Sicherheitsbestände, niedrigere Lagerkosten, Automatisierung lohnt sich eher.' },
    { q: 'Zwei Vorteile dezentraler Lager?', a: 'Kürzere Lieferzeiten, geringere Verteilkosten, verteiltes Ausfallrisiko.' },
    { q: 'Welche drei Arten des Kennzahlenvergleichs gibt es?', a: 'Zeitvergleich, Betriebsvergleich (Benchmarking), Soll-Ist-Vergleich.' },
    { q: 'Wie berechnet man eine gewichtete Ø Lieferzeit?', a: 'Summe aus Anteil der Aufträge × jeweilige Lieferzeit.' }
  ],
  tasks: [
    {
      id: 'lf13-distributionskennzahlen-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne jeder Kennzahl die Frage zu, die sie beantwortet.',
      pairs: [
        ['Lieferbereitschaftsgrad', 'Konnte die Bestellung sofort aus dem Bestand bedient werden?'],
        ['Liefertreue', 'Kam die Lieferung zum zugesagten Termin an?'],
        ['Fehlerquote', 'Wie viele Positionen wurden falsch kommissioniert?'],
        ['Lagerhaltungskostensatz', 'Wie viel Prozent des Lagerwerts kostet die Lagerhaltung?']
      ],
      hints: ['Verfügbarkeit, Pünktlichkeit, Qualität, Kosten.', 'Liefertreue hat etwas mit dem Termin zu tun.'],
      solution: 'Lieferbereitschaftsgrad = **Verfügbarkeit**, Liefertreue = **Pünktlichkeit**, Fehlerquote = **Qualität**, Lagerhaltungskostensatz = **Kosten** im Verhältnis zum Lagerwert.'
    },
    {
      id: 'lf13-distributionskennzahlen-a2', type: 'calc', difficulty: 2, points: 4,
      q: `Die Spedition Hochwald Logistik meldet für den Monat Juni (Beispielzahlen):

- 4.850 Bestellungen, davon 4.656 sofort vollständig aus dem Bestand ausgeliefert
- 3.200 Zustellungen, davon 3.040 im zugesagten Zeitfenster
- 18.000 kommissionierte Positionen, davon 27 fehlerhaft

Berechne Lieferbereitschaftsgrad, Liefertreue und Fehlerquote in Prozent sowie die Fehlerquote in ppm.`,
      formula: 'Kennzahl = Teilmenge ÷ Gesamtmenge × 100; ppm = Teilmenge ÷ Gesamtmenge × 1.000.000',
      fields: [
        { id: 'lbg', label: 'Lieferbereitschaftsgrad', unit: '%', answer: 96, tol: 0.05 },
        { id: 'lt', label: 'Liefertreue', unit: '%', answer: 95, tol: 0.05 },
        { id: 'fq', label: 'Fehlerquote', unit: '%', answer: 0.15, tol: 0.005 },
        { id: 'ppm', label: 'Fehlerquote', unit: 'ppm', answer: 1500, tol: 1 }
      ],
      hints: ['Teile jeweils die „Teilmenge“ durch die Gesamtzahl.', '1 % = 10.000 ppm.'],
      solution: `**Lieferbereitschaftsgrad:** 4.656 ÷ 4.850 × 100 = **96 %**

**Liefertreue:** 3.040 ÷ 3.200 × 100 = **95 %**

**Fehlerquote:** 27 ÷ 18.000 × 100 = **0,15 %**

**in ppm:** 27 ÷ 18.000 × 1.000.000 = **1.500 ppm**`
    },
    {
      id: 'lf13-distributionskennzahlen-a3', type: 'calc', difficulty: 2, points: 1,
      q: 'Von 1.500 Aufträgen eines Onlinehändlers wurden 900 innerhalb von 24 Stunden, 450 innerhalb von 48 Stunden und 150 innerhalb von 72 Stunden zugestellt. Berechne die durchschnittliche Lieferzeit in Stunden.',
      formula: 'Ø Lieferzeit = Σ (Anteil × Lieferzeit)',
      fields: [
        { id: 'lz', label: 'durchschnittliche Lieferzeit', unit: 'h', answer: 36, tol: 0.05 }
      ],
      hints: ['Anteile: 900 ÷ 1.500 = 60 %, 450 ÷ 1.500 = 30 %, 150 ÷ 1.500 = 10 %.', 'Alternativ: (900 × 24 + 450 × 48 + 150 × 72) ÷ 1.500.'],
      solution: `**Formel:** Ø Lieferzeit = Σ (Anteil × Lieferzeit)

0,6 × 24 h + 0,3 × 48 h + 0,1 × 72 h = 14,4 h + 14,4 h + 7,2 h = **36 h**

Kontrolle: (900 × 24 + 450 × 48 + 150 × 72) ÷ 1.500 = (21.600 + 21.600 + 10.800) ÷ 1.500 = 54.000 ÷ 1.500 = 36 h`
    },
    {
      id: 'lf13-distributionskennzahlen-a4', type: 'calc', difficulty: 3, points: 5,
      q: `Ein Getränkehersteller lagert in einem Zentrallager. Lagerabgang im Jahr (zu Einstandspreisen): 2.880.000 €, durchschnittlicher Lagerbestand: 360.000 €, Jahreszinssatz: 6 %, Lagerhaltungskosten im Jahr: 72.000 €.

Berechne Umschlagshäufigkeit, durchschnittliche Lagerdauer (360 Tage), Lagerzinssatz, Lagerzinsen und Lagerhaltungskostensatz.`,
      formula: 'UH = Lagerabgang ÷ Ø Bestand; Ø LD = 360 ÷ UH; Lagerzinssatz = Zins × Ø LD ÷ 360; Lagerzinsen = Ø Bestand × Lagerzinssatz ÷ 100',
      fields: [
        { id: 'uh', label: 'Umschlagshäufigkeit', unit: 'mal', answer: 8, tol: 0.01 },
        { id: 'ld', label: 'Ø Lagerdauer', unit: 'Tage', answer: 45, tol: 0.05 },
        { id: 'lzs', label: 'Lagerzinssatz', unit: '%', answer: 0.75, tol: 0.005 },
        { id: 'lkss', label: 'Lagerhaltungskostensatz', unit: '%', answer: 20, tol: 0.05 },
        { id: 'lzi', label: 'Lagerzinsen', unit: '€', answer: 2700, tol: 0.5 }
      ],
      hints: ['Erst Umschlagshäufigkeit, dann Lagerdauer.', 'Lagerzinssatz = 6 × 45 ÷ 360.'],
      solution: `**Umschlagshäufigkeit:** 2.880.000 € ÷ 360.000 € = **8**

**Ø Lagerdauer:** 360 Tage ÷ 8 = **45 Tage**

**Lagerzinssatz:** 6 % × 45 ÷ 360 = **0,75 %**

**Lagerhaltungskostensatz:** 72.000 € ÷ 360.000 € × 100 = **20 %**

**Lagerzinsen:** 360.000 € × 0,75 ÷ 100 = **2.700 €**

Deutung: Während der durchschnittlichen Lagerdauer von 45 Tagen kostet die Ware 0,75 % ihres Werts an Zinsen. Aufs Jahr gerechnet (8 Umschläge) betragen die Zinskosten 2.700 € × 8 = 21.600 € = 360.000 € × 6 %.`
    },
    {
      id: 'lf13-distributionskennzahlen-a5', type: 'calc', difficulty: 3, points: 3,
      q: 'Der Getränkehersteller aus der vorherigen Aufgabe (Lagerabgang 2.880.000 € im Jahr, Umschlagshäufigkeit bisher 8, Zinssatz 6 %) beauftragt die Spedition, durch häufigere, kleinere Anlieferungen die Umschlagshäufigkeit auf 12 zu erhöhen. Berechne den neuen Ø Lagerbestand, das freigesetzte Kapital und die jährliche Zinsersparnis.',
      formula: 'Ø Bestand = Lagerabgang ÷ UH; freigesetztes Kapital = Ø Bestand alt − Ø Bestand neu; Zinsersparnis = freigesetztes Kapital × Zinssatz',
      fields: [
        { id: 'neu', label: 'neuer Ø Lagerbestand', unit: '€', answer: 240000, tol: 0.5 },
        { id: 'frei', label: 'freigesetztes Kapital', unit: '€', answer: 120000, tol: 0.5 },
        { id: 'zins', label: 'Zinsersparnis pro Jahr', unit: '€', answer: 7200, tol: 0.5 }
      ],
      hints: ['Der Lagerabgang bleibt gleich.', 'Alter Ø Bestand: 360.000 €.'],
      solution: `**Neuer Ø Lagerbestand:** 2.880.000 € ÷ 12 = **240.000 €**

**Freigesetztes Kapital:** 360.000 € − 240.000 € = **120.000 €**

**Zinsersparnis:** 120.000 € × 6 % = **7.200 € pro Jahr**

Zu beachten: Häufigere Anlieferungen verursachen mehr Transporte und Wareneingänge. Die Maßnahme lohnt sich nur, wenn die Mehrkosten unter der Ersparnis (Zinsen plus geringere sonstige Lagerhaltungskosten) liegen.`
    },
    {
      id: 'lf13-distributionskennzahlen-a6', type: 'mc', difficulty: 2, points: 3,
      q: 'Ein Elektrogroßhändler beliefert ganz Deutschland bisher aus vier Regionallagern und denkt über ein einziges Zentrallager nach. Welche Folgen sind typisch? (Mehrfachauswahl)',
      options: [
        'Der gesamte Sicherheitsbestand kann sinken, weil sich Nachfrageschwankungen ausgleichen.',
        'Die Verteilkosten (Transport zum Kunden) steigen, weil die Wege länger werden.',
        'Die Lieferzeit zu weit entfernten Kunden verkürzt sich.',
        'Eine automatisierte Lagertechnik lohnt sich eher, weil die Menge an einem Ort gebündelt wird.',
        'Das Risiko bei einem Ausfall (z. B. Brand) verteilt sich besser.'
      ],
      correct: [0, 1, 3],
      hints: ['Ein Lager – große Mengen an einem Ort, lange Wege.', 'Was passiert, wenn das einzige Lager ausfällt?'],
      solution: 'Richtig sind A, B und D. **C** ist falsch: Lieferzeiten zu entfernten Kunden werden eher **länger**. **E** ist falsch: Beim Zentrallager ist das Ausfallrisiko **konzentriert**; dezentrale Lager verteilen es.'
    },
    {
      id: 'lf13-distributionskennzahlen-a7', type: 'calc', difficulty: 2, points: 3,
      q: `Vergleiche die jährlichen Kosten (Beispielwerte):

| | Zentrallager | 3 Regionallager |
|---|---:|---:|
| Lagerkosten (inkl. Kapitalkosten) | 1.150.000 € | 1.620.000 € |
| Transportkosten (Zulauf und Verteilung) | 980.000 € | 640.000 € |

Berechne die Gesamtkosten beider Lösungen und den Kostenvorteil der günstigeren Lösung.`,
      formula: 'Gesamtkosten = Lagerkosten + Transportkosten',
      fields: [
        { id: 'z', label: 'Gesamtkosten Zentrallager', unit: '€', answer: 2130000, tol: 0.5 },
        { id: 'd', label: 'Gesamtkosten Regionallager', unit: '€', answer: 2260000, tol: 0.5 },
        { id: 'v', label: 'Kostenvorteil', unit: '€', answer: 130000, tol: 0.5 }
      ],
      hints: ['Addiere je Spalte.', 'Vorteil = höhere minus niedrigere Summe.'],
      solution: `**Zentrallager:** 1.150.000 € + 980.000 € = **2.130.000 €**

**3 Regionallager:** 1.620.000 € + 640.000 € = **2.260.000 €**

**Kostenvorteil Zentrallager:** 2.260.000 € − 2.130.000 € = **130.000 €** pro Jahr

Das Zentrallager ist günstiger, obwohl die Transportkosten um 340.000 € höher sind, weil es 470.000 € Lagerkosten spart. Ob es gewählt wird, hängt auch von der Lieferzeit ab (Nutzwertanalyse).`
    },
    {
      id: 'lf13-distributionskennzahlen-a8', type: 'calc', difficulty: 3, points: 3,
      q: `Für ein neues Distributionslager im Saarland stehen zwei Standorte zur Wahl. Bewertet wird mit 1 (schlecht) bis 10 (sehr gut) Punkten:

| Kriterium | Gewicht | Standort A | Standort B |
|---|---:|---:|---:|
| Kosten (Miete, Grundstück) | 40 % | 7 | 9 |
| Nähe zu den Kunden | 25 % | 9 | 6 |
| Verkehrsanbindung | 20 % | 8 | 7 |
| Verfügbarkeit von Personal | 15 % | 6 | 8 |

Berechne die gewichteten Nutzwerte (auf zwei Dezimalstellen) und den Unterschied.`,
      formula: 'Nutzwert = Σ (Punkte × Gewicht)',
      fields: [
        { id: 'a', label: 'Nutzwert Standort A', unit: 'Punkte', answer: 7.55, tol: 0.005 },
        { id: 'b', label: 'Nutzwert Standort B', unit: 'Punkte', answer: 7.7, tol: 0.005 },
        { id: 'diff', label: 'Vorsprung des besseren Standorts', unit: 'Punkte', answer: 0.15, tol: 0.005 }
      ],
      hints: ['Gewicht als Dezimalzahl: 40 % = 0,40.', 'A: 7 × 0,40 + 9 × 0,25 + …'],
      solution: `**Standort A:** 7 × 0,40 + 9 × 0,25 + 8 × 0,20 + 6 × 0,15 = 2,80 + 2,25 + 1,60 + 0,90 = **7,55**

**Standort B:** 9 × 0,40 + 6 × 0,25 + 7 × 0,20 + 8 × 0,15 = 3,60 + 1,50 + 1,40 + 1,20 = **7,70**

**Vorsprung:** 7,70 − 7,55 = **0,15 Punkte** für Standort B

Ungewichtet hätten beide 30 Punkte. Den Ausschlag gibt das hoch gewichtete Kriterium Kosten. Weil der Abstand klein ist, sollte die Gewichtung kritisch geprüft werden (Sensitivität).`
    },
    {
      id: 'lf13-distributionskennzahlen-a9', type: 'cloze', difficulty: 2, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Vergleicht man die Fehlerquote von Januar und Februar, spricht man von einem [[Zeitvergleich]]. Vergleicht man den Standort Homburg mit dem Standort Saarlouis, ist das ein [[Betriebsvergleich|Benchmarking]]. Wird die Liefertreue mit dem im Vertrag vereinbarten Zielwert verglichen, handelt es sich um einen [[Soll-Ist-Vergleich]]. Der Lagerzinssatz wird mit der durchschnittlichen [[Lagerdauer]] berechnet.',
      hints: ['Zeit – Betrieb – Ziel.', 'Formel: Zins × … ÷ 360.'],
      solution: '**Zeitvergleich** (gleiche Kennzahl, verschiedene Zeiträume), **Betriebsvergleich/Benchmarking** (verschiedene Standorte oder Unternehmen), **Soll-Ist-Vergleich** (Zielwert gegen Istwert). Lagerzinssatz = Zinssatz × Ø **Lagerdauer** ÷ 360.'
    },
    {
      id: 'lf13-distributionskennzahlen-a10', type: 'text', difficulty: 3, points: 3,
      q: 'Ein Kunde fordert im Lastenheft einen Lieferbereitschaftsgrad von 99,5 %. Erkläre den Zielkonflikt, der dahintersteht, und mache einen Vorschlag, wie die Spedition und der Kunde damit umgehen können.',
      model: 'Ein sehr hoher Lieferbereitschaftsgrad ist nur mit hohen Sicherheitsbeständen erreichbar. Diese erhöhen die Kapitalbindung, die Zinsen und die Lagerkosten des Kunden; die letzten Prozentpunkte sind besonders teuer. Es besteht also ein Zielkonflikt zwischen Lieferservice und Kosten. Vorschlag: Den Servicegrad nach einer ABC-Analyse differenzieren, also für wichtige A-Artikel 99,5 % und für C-Artikel einen niedrigeren Wert vereinbaren, und die Definition (auftrags- oder positionsbezogen) im Vertrag festlegen.',
      criteria: [
        { text: 'nennt höhere Bestände/Sicherheitsbestand', keywords: ['Bestand|Sicherheitsbestand|Bestände'], points: 1 },
        { text: 'nennt Kapitalbindung oder Kosten', keywords: ['Kapital|Kosten|Zins'], points: 1 },
        { text: 'macht einen Vorschlag (Differenzierung, ABC, Definition festlegen)', keywords: ['ABC|differenz|Definition|vereinbar'], points: 1 }
      ],
      hints: ['Was braucht man, um fast nie „nicht lieferbar“ zu sagen?', 'Müssen alle Artikel gleich behandelt werden?'],
      solution: 'Zielkonflikt: **Lieferservice ↔ Bestände/Kosten**. Hohe Lieferbereitschaft erfordert hohe **Sicherheitsbestände**, die **Kapital binden** und Zinsen sowie Lagerkosten verursachen. Lösung: Servicegrade nach **ABC-Analyse differenzieren** und die Messgrundlage im Vertrag eindeutig **definieren**.'
    },
    {
      id: 'lf13-distributionskennzahlen-a11', type: 'case', difficulty: 3, points: 9,
      q: 'Fall: Soll-Ist-Vergleich im Logistikvertrag',
      intro: `Die Saarlogistik GmbH betreibt das Lager eines Elektrogroßhändlers. Im Logistikvertrag sind vereinbart: Lieferbereitschaftsgrad mindestens 98 % (auftragsbezogen), Liefertreue mindestens 97 %, Fehlerquote höchstens 0,10 % (positionsbezogen).

Daten Mai: 6.250 Aufträge, davon 6.000 sofort vollständig aus dem Bestand ausgeliefert, 5.875 termingerecht zugestellt. 75.000 Positionen kommissioniert, 60 davon fehlerhaft.

Bestandsdaten des Kunden: Ø Lagerbestand 540.000 €, Lagerabgang 4.860.000 € pro Jahr, Jahreszinssatz 4,5 %.`,
      hints: ['Rechne jede Kennzahl und vergleiche sie mit dem Soll.', 'Für den Lagerzins brauchst du erst die Lagerdauer.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf13-distributionskennzahlen-a11-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne Lieferbereitschaftsgrad, Liefertreue und Fehlerquote für Mai.',
          formula: 'Kennzahl = Teilmenge ÷ Gesamtmenge × 100',
          fields: [
            { id: 'lbg', label: 'Lieferbereitschaftsgrad', unit: '%', answer: 96, tol: 0.05 },
            { id: 'lt', label: 'Liefertreue', unit: '%', answer: 94, tol: 0.05 },
            { id: 'fq', label: 'Fehlerquote', unit: '%', answer: 0.08, tol: 0.005 }
          ],
          hints: ['6.000 ÷ 6.250.', '60 ÷ 75.000.'],
          solution: `**Lieferbereitschaftsgrad:** 6.000 ÷ 6.250 × 100 = **96 %** (Soll ≥ 98 % → verfehlt)

**Liefertreue:** 5.875 ÷ 6.250 × 100 = **94 %** (Soll ≥ 97 % → verfehlt)

**Fehlerquote:** 60 ÷ 75.000 × 100 = **0,08 %** (Soll ≤ 0,10 % → erreicht)`
        },
        {
          id: 'lf13-distributionskennzahlen-a11-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne für den Kunden die Ø Lagerdauer (360 Tage), den Lagerzinssatz und die Lagerzinsen.',
          formula: 'UH = Abgang ÷ Ø Bestand; Ø LD = 360 ÷ UH; Lagerzinssatz = Zins × Ø LD ÷ 360; Lagerzinsen = Ø Bestand × Lagerzinssatz ÷ 100',
          fields: [
            { id: 'ld', label: 'Ø Lagerdauer', unit: 'Tage', answer: 40, tol: 0.05 },
            { id: 'lzs', label: 'Lagerzinssatz', unit: '%', answer: 0.5, tol: 0.005 },
            { id: 'lz', label: 'Lagerzinsen', unit: '€', answer: 2700, tol: 0.5 }
          ],
          hints: ['Umschlagshäufigkeit = 4.860.000 ÷ 540.000.', '4,5 × 40 ÷ 360.'],
          solution: `**Umschlagshäufigkeit:** 4.860.000 € ÷ 540.000 € = 9

**Ø Lagerdauer:** 360 ÷ 9 = **40 Tage**

**Lagerzinssatz:** 4,5 % × 40 ÷ 360 = **0,5 %**

**Lagerzinsen:** 540.000 € × 0,5 ÷ 100 = **2.700 €**`
        },
        {
          id: 'lf13-distributionskennzahlen-a11-3', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Schlussfolgerungen und Maßnahmen sind sinnvoll? (Mehrfachauswahl)',
          options: [
            'Die Fehlerquote liegt im Ziel; an der Kommissionierqualität besteht kein vorrangiger Handlungsbedarf.',
            'Der niedrige Lieferbereitschaftsgrad kann am Bestellverhalten des Kunden liegen; Meldebestände und Nachschub müssen gemeinsam geprüft werden.',
            'Für die Liefertreue sollten Tourenplanung, Kommissionierschluss und Zeitfenster der Empfänger analysiert werden.',
            'Um den Lieferbereitschaftsgrad zu erhöhen, sollte die Spedition eigenmächtig Ware für den Kunden nachbestellen.',
            'Weil eine Kennzahl im Ziel liegt, ist der Vertrag insgesamt erfüllt.'
          ],
          correct: [0, 1, 2],
          hints: ['Wer ist für die Bestellung der Ware verantwortlich?', 'Jede Kennzahl wird einzeln mit ihrem Soll verglichen.'],
          solution: 'Richtig sind A, B und C. **D** ist falsch: Die Ware gehört dem Kunden; Bestellungen sind seine Entscheidung. Die Spedition kann Warnmeldungen liefern und Meldebestände vorschlagen. **E** ist falsch: Zwei von drei Zielwerten wurden verfehlt.'
        }
      ]
    }
  ],
  quiz: ['lf13-distributionskennzahlen-a2', 'lf13-distributionskennzahlen-a4', 'lf13-distributionskennzahlen-a6', 'lf13-distributionskennzahlen-a8', 'lf13-distributionskennzahlen-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 13, Ziel: Tourenpläne unter Berücksichtigung von Kosten und einfachen Logistikkennzahlen; Inhalte: Lagerreichweite, Lagerumschlaghäufigkeit, durchschnittlicher Lagerbestand, Lieferbereitschaftsgrad' }
  ],
  links: ['lf09-lagerorganisation', 'lf09-lagerkosten', 'lf04-verkehrstraeger-vergleich', 'lf07-kennzahlen', 'lf13-versandvorbereitung', 'lf13-tourenplanung']
};
