export default {
  id: 'lf11-einfuhrabgaben',
  area: 'LF11',
  topic: 'lf11-einfuhrabgaben',
  title: 'Einfuhrabgaben berechnen: Zoll, Einfuhrumsatzsteuer, Zahlungsaufschub',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026-10',
    note: 'Bemessungsgrundlage der Einfuhrumsatzsteuer nach § 11 UStG (Zollwert + Einfuhrabgaben/Verbrauchsteuern außer EUSt + Beförderungs- und Nebenkosten bis zum ersten Bestimmungsort im Gemeinschaftsgebiet). Steuersätze 19 % bzw. 7 % (§ 12 UStG). EUSt als Vorsteuer abziehbar nach § 15 Abs. 1 Satz 1 Nr. 2 UStG. Zahlungsfrist ohne Zahlungserleichterung bei gewerblichen Einfuhren bis zu 10 Tage nach Mitteilung (zoll.de, Art. 108 UZK). Laufender Zahlungsaufschub (Art. 110 Buchst. b UZK): Zoll fällig spätestens am 16. des Folgemonats; EUSt nach § 21 Abs. 3a UStG am 26. des zweiten Folgemonats (bei ausschließlicher Nutzung des § 21a UStG am 16. des Folgemonats). Zollsätze in den Aufgaben sind Beispielwerte; maßgeblich ist der aktuelle Elektronische Zolltarif (EZT)/TARIC. Stand Oktober 2026.'
  },
  goals: [
    'Ich kann den Zollwert als Grundlage der Zollberechnung bestimmen.',
    'Ich kann den Zoll mit einem gegebenen Zollsatz berechnen.',
    'Ich kann die Bemessungsgrundlage der Einfuhrumsatzsteuer nach § 11 UStG ermitteln.',
    'Ich kann die Einfuhrumsatzsteuer mit 19 % oder 7 % berechnen.',
    'Ich kann erklären, warum die EUSt für den Unternehmer meist kein Kostenfaktor ist, der Zoll aber schon.',
    'Ich kann Zahlungsfristen mit und ohne Zahlungsaufschub bestimmen und die Zahlung der Einfuhrabgaben buchen.'
  ],
  simple: `# Welche Abgaben fallen bei der Einfuhr an?

Wenn eine Ware aus einem Drittland in den **zollrechtlich freien Verkehr** überlassen wird, verlangt der Zoll meist zwei Abgaben:

1. **Zoll**: ein Prozentsatz vom **Zollwert**. Der Satz hängt von der **Warennummer** ab und steht im Zolltarif (TARIC bzw. Elektronischer Zolltarif). Der Zoll ist für den Importeur ein **Kostenfaktor**.
2. **Einfuhrumsatzsteuer (EUSt)**: die Umsatzsteuer bei der Einfuhr, in Deutschland **19 %** oder ermäßigt **7 %**. Sie kann sich ein Unternehmer in der Regel als **Vorsteuer** vom Finanzamt zurückholen.

Dazu können **Verbrauchsteuern** (z. B. auf Alkohol, Tabak, Energie) und besondere Zölle (z. B. Antidumpingzölle) kommen.

# Das Rechenschema in drei Schritten

| Schritt | Rechnung |
|---|---|
| **1. Zollwert** | Rechnungspreis + Fracht und Versicherung **bis zur EU-Grenze** |
| **2. Zoll** | Zollwert × Zollsatz |
| **3. EUSt** | (Zollwert + Zoll + Fracht **bis zum ersten Bestimmungsort**) × 19 % bzw. 7 % |

Merke: Die Fracht **innerhalb** der EU gehört nicht zum Zollwert – aber zur Bemessungsgrundlage der EUSt.`,
  deep: `# 1. Zollwert

Wie der Zollwert ermittelt wird (Transaktionswert, Hinzurechnungen und Abzüge, Ort des Verbringens), steht ausführlich in der Einheit „Zollverfahren bei der Einfuhr und Zollwert“. Kurz:

**Zollwert = Rechnungspreis + Beförderungs- und Versicherungskosten bis zum Ort des Verbringens + sonstige Hinzurechnungen (Art. 71 UZK) − getrennt ausgewiesene Abzüge (Art. 72 UZK)**

Rechnungen in fremder Währung werden mit dem vom Zoll veröffentlichten Kurs umgerechnet; die Umrechnungsvorschriften des Zollrechts gelten auch für die EUSt (§ 11 Abs. 5 UStG).

# 2. Zoll

**Zoll = Zollwert × Zollsatz** (Wertzoll). Der Zollsatz ergibt sich aus der **Warennummer** im TARIC bzw. im deutschen Elektronischen Zolltarif (EZT-online). Er kann sich unterscheiden nach:

- **Drittlandszollsatz** (Regelsatz für alle Länder ohne Abkommen)
- **Präferenzzollsatz** (bei Ursprungswaren aus Partnerländern mit gültigem Präferenznachweis, oft 0 %)
- Zusätzlichen Maßnahmen wie **Antidumpingzöllen**

> In diesem Lernprogramm sind alle Zollsätze **Beispielwerte**. In der Praxis wird der Satz immer tagesaktuell im Zolltarif nachgeschlagen.

# 3. Einfuhrumsatzsteuer (§ 11 UStG)

Die EUSt bemisst sich nach dem **Zollwert** (§ 11 Abs. 1 UStG). Hinzugerechnet werden, soweit nicht schon enthalten (§ 11 Abs. 3 UStG):

| Nr. | Hinzurechnung | Beispiel |
|---|---|---|
| 1 | im Ausland für die Ware geschuldete Abgaben | Ausfuhrabgaben im Lieferland |
| 2 | die bei der Einfuhr entstehenden **Zölle** und **Verbrauchsteuern** (außer der EUSt selbst) | Zoll, Antidumpingzoll, Energiesteuer |
| 3 | **Vermittlungs-, Beförderungs- und sonstige Kosten bis zum ersten Bestimmungsort** im Gemeinschaftsgebiet | Lkw-Fracht Rotterdam–Saarbrücken, Umschlagkosten im Hafen |
| 4 | diese Kosten **bis zu einem weiteren Bestimmungsort** im Gemeinschaftsgebiet, wenn er bei Entstehen der EUSt bereits feststeht | Weitertransport vom Zolllager zum Kunden, wenn er schon bekannt ist |

Preisnachlässe, die bei Entstehen der EUSt bereits feststehen, mindern die Bemessungsgrundlage (§ 11 Abs. 4 UStG).

**EUSt-Bemessungsgrundlage = Zollwert + Zoll (+ Verbrauchsteuern) + Kosten bis zum ersten Bestimmungsort**

**EUSt = Bemessungsgrundlage × 19 % (Regelsatz) bzw. 7 % (ermäßigter Satz, z. B. für bestimmte Lebensmittel und Bücher, § 12 Abs. 2 UStG)**

# Zoll und EUSt im Vergleich

| | Zoll | Einfuhrumsatzsteuer |
|---|---|---|
| Rechtsgrundlage | EU-Recht (UZK, Zolltarif) | deutsches Recht (UStG); Zollvorschriften gelten sinngemäß (§ 21 Abs. 2 UStG) |
| Bemessungsgrundlage | Zollwert | Zollwert + Zoll + Kosten bis zum ersten Bestimmungsort |
| Satz | je Warennummer verschieden | 19 % oder 7 % |
| Für den vorsteuerabzugsberechtigten Unternehmer | **Kosten** (Anschaffungsnebenkosten) | **kein Kostenfaktor**: als Vorsteuer abziehbar (§ 15 Abs. 1 Satz 1 Nr. 2 UStG) |
| Präferenz | kann auf 0 % sinken | bleibt, nur die Bemessungsgrundlage sinkt um den eingesparten Zoll |

Die EUSt ist nur abziehbar, wenn die Ware **für das Unternehmen** eingeführt wurde und die EUSt **entstanden** ist. Nachweis ist in der Regel der Einfuhrabgabenbescheid des Zolls.

# Zahlung der Einfuhrabgaben

**Ohne Zahlungserleichterung** (Art. 108 UZK): Bei gewerblichen Einfuhren räumt die Zollstelle grundsätzlich eine Zahlungsfrist von **bis zu zehn Tagen** nach Mitteilung des Abgabenbetrags ein. Bei verspäteter Zahlung drohen Verzugsfolgen (Art. 114 UZK).

**Mit Zahlungsaufschub** (laufender Aufschub, Art. 110 Buchst. b UZK):

- Bewilligung auf Antrag durch das Hauptzollamt; Voraussetzung ist eine **Gesamtsicherheit**. Ohne Sicherheit ist ein Aufschub der EUSt möglich, wenn sie voll als Vorsteuer abziehbar ist (§ 21 Abs. 3 UStG).
- Der Aufschubnehmer erhält ein **Aufschubkonto**; in der Zollanmeldung wird die Aufschubnummer angegeben. Ein Spediteur kann über seinen Aufschub auch **fremde Schulden** (seiner Kunden) aufschieben lassen.
- Alle Abgaben eines Kalendermonats werden gesammelt.
- **Fälligkeit Zoll** (und Einfuhrverbrauchsteuern): spätestens am **16. des folgenden Kalendermonats**.
- **Fälligkeit EUSt**: am **26. des zweiten folgenden Kalendermonats** (§ 21 Abs. 3a UStG). Wer ausschließlich die Sonderregelung nach § 21a UStG nutzt, zahlt am 16. des Folgemonats.

> Beispiel: Einfuhren im **März** → Zoll spätestens am **16. April**, EUSt am **26. Mai**. Da die EUSt für März schon in der Umsatzsteuer-Voranmeldung für März als Vorsteuer abgezogen werden kann, verbessert der Aufschub die **Liquidität** des Importeurs deutlich.

# Buchung beim Importeur

- **Zoll** erhöht die Anschaffungskosten (Anschaffungsnebenkosten): gebucht auf das Konto des eingeführten Gegenstands bzw. auf ein Bezugskostenkonto.
- **EUSt** wird als **Vorsteuer** gebucht (Aktivkonto, Forderung gegenüber dem Finanzamt).

Beispiel: Zahlung von 810 € Zoll und 3.648 € EUSt für einen importierten Gabelstapler per Bank:
**Betriebs- und Geschäftsausstattung 810 € und Vorsteuer 3.648 € an Bank 4.458 €**`,
  terms: [
    { term: 'Einfuhrabgaben', def: 'Abgaben, die bei der Einfuhr anfallen: vor allem Zoll; im weiteren Sinne auch Einfuhrumsatzsteuer und Verbrauchsteuern.' },
    { term: 'Zollsatz', def: 'Prozentsatz (oder spezifischer Betrag), der je Warennummer im Zolltarif (TARIC/EZT) festgelegt ist.' },
    { term: 'TARIC', def: 'Integrierter Zolltarif der EU mit Zollsätzen und handelspolitischen Maßnahmen je Warennummer; in Deutschland über den Elektronischen Zolltarif (EZT-online) nutzbar.' },
    { term: 'Einfuhrumsatzsteuer (EUSt)', def: 'Umsatzsteuer auf die Einfuhr von Gegenständen aus dem Drittlandsgebiet (§ 1 Abs. 1 Nr. 4 UStG); Satz 19 % oder 7 %.' },
    { term: 'EUSt-Bemessungsgrundlage', def: 'Zollwert + Zoll und Verbrauchsteuern (ohne EUSt) + Beförderungs- und Nebenkosten bis zum ersten Bestimmungsort im Gemeinschaftsgebiet (§ 11 UStG).' },
    { term: 'Erster Bestimmungsort', def: 'Erster Zielort der Ware im Gemeinschaftsgebiet; die Beförderungskosten bis dorthin gehören zur EUSt-Bemessungsgrundlage.' },
    { term: 'Vorsteuerabzug der EUSt', def: 'Unternehmer können die entstandene EUSt für Gegenstände, die für ihr Unternehmen eingeführt wurden, als Vorsteuer abziehen (§ 15 Abs. 1 Satz 1 Nr. 2 UStG).' },
    { term: 'Zahlungsaufschub', def: 'Zahlungserleichterung nach Art. 110 UZK: Einfuhrabgaben eines Monats werden gesammelt und später fällig; setzt eine Bewilligung und in der Regel eine Gesamtsicherheit voraus.' },
    { term: 'Aufschubkonto', def: 'Konto beim Zoll, über das aufgeschobene Abgaben eines Aufschubnehmers gesammelt und zu den Fälligkeitsterminen eingezogen werden.' },
    { term: 'Anschaffungsnebenkosten', def: 'Kosten, die zusätzlich zum Kaufpreis anfallen, um einen Gegenstand zu erwerben, z. B. Zoll und Fracht; sie erhöhen die Anschaffungskosten.' }
  ],
  example: `# Beispiel: Lagerregale aus China für die Saar-Trans Spedition (Beispielfall, Einfuhr im März 2026)

Die **Saar-Trans Spedition GmbH** kauft für ihre neue Halle in Saarbrücken Schwerlastregale.

| Angabe | Wert |
|---|---|
| Rechnungspreis FOB Ningbo | 42.000 € |
| Seefracht Ningbo–Rotterdam | 2.600 € |
| Versicherung bis Rotterdam | 150 € |
| Umschlag und Lkw-Fracht Rotterdam–Saarbrücken (erster Bestimmungsort) | 1.250 € |
| Zollsatz (Beispielwert) | 2,7 % |
| EUSt-Satz | 19 % |

**1. Zollwert:** 42.000 € + 2.600 € + 150 € = **44.750 €**

**2. Zoll:** 44.750 € × 2,7 % = **1.208,25 €**

**3. EUSt-Bemessungsgrundlage:** 44.750 € + 1.208,25 € + 1.250 € = **47.208,25 €**

**4. EUSt:** 47.208,25 € × 19 % = 8.969,5675 € ≈ **8.969,57 €**

**5. Einfuhrabgaben gesamt:** 1.208,25 € + 8.969,57 € = **10.177,82 €**

**Zahlung:** Die Saar-Trans nutzt ihren **Zahlungsaufschub**. Der Zoll wird am **16. April** vom Aufschubkonto eingezogen, die EUSt am **26. Mai**. Die EUSt zieht die Saar-Trans bereits in der Umsatzsteuer-Voranmeldung für **März** als Vorsteuer ab.

**Kostenwirkung:** Die Anschaffungskosten der Regale betragen 42.000 + 2.600 + 150 + 1.208,25 + 1.250 = **47.208,25 €** (ohne EUSt, da Vorsteuer).`,
  rules: [
    'Rechenreihenfolge: Zollwert → Zoll → EUSt-Bemessungsgrundlage → EUSt.',
    'Zollwert: Kosten nur bis zur EU-Grenze (Ort des Verbringens); EUSt: Kosten bis zum ersten Bestimmungsort.',
    'Der Zoll gehört in die EUSt-Bemessungsgrundlage, die EUSt selbst nicht.',
    'Zollsätze immer aus dem aktuellen Zolltarif (TARIC/EZT) – nie auswendig verwenden.',
    'Zoll ist Kostenbestandteil (Anschaffungsnebenkosten), EUSt ist für den vorsteuerabzugsberechtigten Unternehmer durchlaufend (Vorsteuer).',
    'Ohne Aufschub: Zahlung grundsätzlich innerhalb von bis zu 10 Tagen; mit Aufschub: Zoll am 16. des Folgemonats, EUSt am 26. des zweiten Folgemonats.'
  ],
  summary: `- **Zollwert** = Preis + Fracht/Versicherung bis zum Ort des Verbringens (± Berichtigungen nach Art. 71/72 UZK).
- **Zoll** = Zollwert × Zollsatz (aus TARIC/EZT; in Aufgaben Beispielwerte).
- **EUSt-Bemessungsgrundlage** (§ 11 UStG) = Zollwert + Zoll + Verbrauchsteuern + Kosten bis zum ersten Bestimmungsort im Gemeinschaftsgebiet.
- **EUSt** = Bemessungsgrundlage × 19 % bzw. 7 %; als **Vorsteuer** abziehbar (§ 15 Abs. 1 Satz 1 Nr. 2 UStG).
- **Zahlung**: ohne Erleichterung bis zu 10 Tage nach Mitteilung; mit **Zahlungsaufschub** Zoll am 16. des Folgemonats, EUSt am 26. des zweiten Folgemonats (§ 21 Abs. 3a UStG).
- **Buchung**: Zoll auf das Anlagen- bzw. Bezugskostenkonto, EUSt auf **Vorsteuer**, Gegenkonto Bank oder Verbindlichkeit.`,
  mistakes: [
    { wrong: 'Die EUSt wird vom Zollwert berechnet.', right: 'Die EUSt wird von Zollwert + Zoll + Beförderungskosten bis zum ersten Bestimmungsort berechnet (§ 11 UStG).' },
    { wrong: 'Die Lkw-Fracht vom Hafen Rotterdam nach Saarbrücken gehört in den Zollwert.', right: 'Sie gehört nicht in den Zollwert (Fracht nach dem Ort des Verbringens), wohl aber in die EUSt-Bemessungsgrundlage.' },
    { wrong: 'Die EUSt ist für die Spedition genauso ein Kostenfaktor wie der Zoll.', right: 'Ein vorsteuerabzugsberechtigter Unternehmer bekommt die EUSt über den Vorsteuerabzug zurück. Der Zoll dagegen erhöht die Anschaffungskosten.' },
    { wrong: 'Die EUSt wird auch auf die EUSt selbst berechnet.', right: '§ 11 Abs. 3 Nr. 2 UStG nimmt die Einfuhrumsatzsteuer ausdrücklich aus. Nur Zoll und Verbrauchsteuern werden hinzugerechnet.' },
    { wrong: 'Bei einem Präferenzzollsatz von 0 % fällt keine EUSt an.', right: 'Die Präferenz betrifft nur den Zoll. EUSt fällt trotzdem an, berechnet von Zollwert + Kosten bis zum ersten Bestimmungsort.' }
  ],
  flashcards: [
    { q: 'Wie berechnet man den Zoll?', a: 'Zollwert × Zollsatz (Zollsatz aus TARIC/EZT je Warennummer).' },
    { q: 'Wie lautet die EUSt-Bemessungsgrundlage nach § 11 UStG?', a: 'Zollwert + Zoll und Verbrauchsteuern (ohne EUSt) + Beförderungs- und Nebenkosten bis zum ersten Bestimmungsort im Gemeinschaftsgebiet.' },
    { q: 'Welche Steuersätze gelten für die EUSt?', a: '19 % Regelsatz, 7 % ermäßigter Satz (§ 12 UStG), wie bei der Umsatzsteuer.' },
    { q: 'Bis wohin zählen Frachtkosten beim Zollwert, bis wohin bei der EUSt?', a: 'Zollwert: bis zum Ort des Verbringens (EU-Grenze/erster EU-Hafen). EUSt: bis zum ersten Bestimmungsort im Gemeinschaftsgebiet.' },
    { q: 'Ist der Zoll für den Importeur ein Kostenfaktor?', a: 'Ja, er erhöht die Anschaffungskosten (Anschaffungsnebenkosten).' },
    { q: 'Nach welcher Vorschrift ist die EUSt als Vorsteuer abziehbar?', a: '§ 15 Abs. 1 Satz 1 Nr. 2 UStG.' },
    { q: 'Wann ist der Zoll bei laufendem Zahlungsaufschub fällig?', a: 'Spätestens am 16. des folgenden Kalendermonats.' },
    { q: 'Wann ist die EUSt bei Zahlungsaufschub fällig?', a: 'Am 26. des zweiten auf die Einfuhr folgenden Kalendermonats (§ 21 Abs. 3a UStG).' },
    { q: 'Welche Zahlungsfrist gilt bei gewerblichen Einfuhren ohne Zahlungserleichterung?', a: 'Grundsätzlich bis zu zehn Tage nach Mitteilung des Abgabenbetrags (zoll.de, Art. 108 UZK).' },
    { q: 'Wie wird die Zahlung der EUSt gebucht?', a: 'Vorsteuer an Bank (bzw. an Verbindlichkeiten).' }
  ],
  tasks: [
    {
      id: 'lf11-einfuhrabgaben-a1', type: 'calc', difficulty: 2, points: 4,
      q: `Die Bliesgau Logistik fertigt für einen Kunden eine Sendung Elektrowerkzeuge aus Taiwan ab (Einfuhr per Seeschiff über Hamburg).

| Angabe | Wert |
|---|---|
| Rechnungspreis FOB Kaohsiung | 24.000 € |
| Seefracht bis Hamburg | 1.300 € |
| Versicherung bis Hamburg | 100 € |
| Lkw-Fracht Hamburg–Saarbrücken (erster Bestimmungsort) | 640 € |
| Zollsatz (Beispielwert) | 2,7 % |
| EUSt-Satz | 19 % |

Berechne Zollwert, Zoll, EUSt-Bemessungsgrundlage und EUSt.`,
      formula: 'Zollwert = Preis + Fracht/Versicherung bis EU-Grenze; Zoll = Zollwert × Zollsatz; EUSt = (Zollwert + Zoll + Fracht bis 1. Bestimmungsort) × 19 %',
      fields: [
        { id: 'zw', label: 'Zollwert', unit: '€', answer: 25400, tol: 0.01 },
        { id: 'zoll', label: 'Zoll', unit: '€', answer: 685.8, tol: 0.01 },
        { id: 'bmg', label: 'EUSt-Bemessungsgrundlage', unit: '€', answer: 26725.8, tol: 0.01 },
        { id: 'eust', label: 'Einfuhrumsatzsteuer', unit: '€', answer: 5077.9, tol: 0.01 }
      ],
      hints: ['Die Lkw-Fracht ab Hamburg gehört nicht in den Zollwert.', 'Für die EUSt werden Zoll und Lkw-Fracht zum Zollwert addiert.'],
      solution: `**1. Zollwert:** 24.000 € + 1.300 € + 100 € = **25.400,00 €**

**2. Zoll:** 25.400 € × 2,7 % = **685,80 €**

**3. EUSt-Bemessungsgrundlage:** 25.400,00 € + 685,80 € + 640,00 € = **26.725,80 €**

**4. EUSt:** 26.725,80 € × 19 % = 5.077,902 € ≈ **5.077,90 €**

Begründung: Hamburg ist der Ort des Verbringens (erster EU-Hafen). Die Fracht ab Hamburg fällt erst danach an und wird deshalb nur bei der EUSt bis zum ersten Bestimmungsort Saarbrücken berücksichtigt (§ 11 Abs. 3 Nr. 3 UStG).`
    },
    {
      id: 'lf11-einfuhrabgaben-a2', type: 'calc', difficulty: 3, points: 5,
      q: `Ein Saarlouiser Händler kauft Ersatzteile in den USA: **36.000 USD FOB New York**. Die Seefracht bis Bremerhaven kostet **1.800 USD**, die Versicherung ist im Preis enthalten. Die Lkw-Fracht Bremerhaven–Saarlouis kostet **900 €**.

Umrechnungskurs (Beispielwert): **1 € = 1,20 USD**. Zollsatz (Beispielwert): **4 %**. EUSt: **19 %**.

Berechne Rechnungspreis in €, Zollwert, Zoll, EUSt-Bemessungsgrundlage und EUSt.`,
      formula: 'Betrag in € = Betrag in USD ÷ Kurs; dann Zollwert → Zoll → EUSt-Bemessungsgrundlage → EUSt',
      fields: [
        { id: 'preis', label: 'Rechnungspreis in €', unit: '€', answer: 30000, tol: 0.01 },
        { id: 'zw', label: 'Zollwert', unit: '€', answer: 31500, tol: 0.01 },
        { id: 'zoll', label: 'Zoll', unit: '€', answer: 1260, tol: 0.01 },
        { id: 'bmg', label: 'EUSt-Bemessungsgrundlage', unit: '€', answer: 33660, tol: 0.01 },
        { id: 'eust', label: 'Einfuhrumsatzsteuer', unit: '€', answer: 6395.4, tol: 0.01 }
      ],
      hints: ['Bei der Mengennotierung 1 € = 1,20 USD teilt man den USD-Betrag durch 1,20.', 'Die Seefracht muss ebenfalls umgerechnet werden.'],
      solution: `**1. Umrechnung:** 36.000 USD ÷ 1,20 = **30.000,00 €**; Seefracht 1.800 USD ÷ 1,20 = 1.500,00 €

**2. Zollwert:** 30.000 € + 1.500 € = **31.500,00 €**

**3. Zoll:** 31.500 € × 4 % = **1.260,00 €**

**4. EUSt-Bemessungsgrundlage:** 31.500 € + 1.260 € + 900 € = **33.660,00 €**

**5. EUSt:** 33.660 € × 19 % = **6.395,40 €**

Einfuhrabgaben gesamt: 1.260,00 € + 6.395,40 € = 7.655,40 €. Der Kurs ist hier ein Beispielwert; in der Praxis gilt der vom Zoll veröffentlichte Umrechnungskurs (§ 11 Abs. 5 UStG verweist auf die Zollwertvorschriften).`
    },
    {
      id: 'lf11-einfuhrabgaben-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Eine Buchhandlung in Saarbrücken importiert Fachbücher aus dem Vereinigten Königreich. Zollwert: **8.200 €**. Für Ursprungswaren gilt aufgrund eines gültigen Präferenznachweises ein Zollsatz von **0 %** (Beispielannahme). Die Beförderung von der ersten Eingangszollstelle bis Saarbrücken kostet **300 €**. Für die Bücher gilt der **ermäßigte Steuersatz von 7 %**.

Berechne Zoll, EUSt-Bemessungsgrundlage und EUSt.`,
      formula: 'EUSt = (Zollwert + Zoll + Beförderungskosten bis 1. Bestimmungsort) × 7 %',
      fields: [
        { id: 'zoll', label: 'Zoll', unit: '€', answer: 0, tol: 0.01 },
        { id: 'bmg', label: 'EUSt-Bemessungsgrundlage', unit: '€', answer: 8500, tol: 0.01 },
        { id: 'eust', label: 'Einfuhrumsatzsteuer', unit: '€', answer: 595, tol: 0.01 }
      ],
      hints: ['Die Präferenz senkt nur den Zoll.', '7 % gilt hier statt 19 %.'],
      solution: `**Zoll:** 8.200 € × 0 % = **0,00 €**

**EUSt-Bemessungsgrundlage:** 8.200 € + 0 € + 300 € = **8.500,00 €**

**EUSt:** 8.500 € × 7 % = **595,00 €**

Begründung: Der Präferenznachweis führt zu einem Nullzoll, die **EUSt bleibt** aber bestehen. Für Bücher gilt der ermäßigte Satz nach § 12 Abs. 2 UStG.`
    },
    {
      id: 'lf11-einfuhrabgaben-a4', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Beträge gehören nach § 11 UStG in die **Bemessungsgrundlage der Einfuhrumsatzsteuer**? (Mehrfachauswahl)',
      options: [
        'Der Zollwert',
        'Der bei der Einfuhr entstandene Zoll',
        'Die Einfuhrumsatzsteuer selbst',
        'Die Beförderungskosten bis zum ersten Bestimmungsort im Gemeinschaftsgebiet',
        'Ein Skonto, das erst Wochen nach der Einfuhr vereinbart wird'
      ],
      correct: [0, 1, 3],
      hints: ['§ 11 Abs. 3 Nr. 2 UStG nimmt eine Abgabe ausdrücklich aus.', 'Preisnachlässe zählen nur, wenn sie bei Entstehen der EUSt feststehen.'],
      solution: 'Zur Bemessungsgrundlage gehören **Zollwert** (§ 11 Abs. 1), **Zoll** (§ 11 Abs. 3 Nr. 2) und **Beförderungskosten bis zum ersten Bestimmungsort** (§ 11 Abs. 3 Nr. 3). Die **EUSt selbst** ist ausgenommen. Ein **später** vereinbarter Preisnachlass ändert die Bemessungsgrundlage nicht; nur bei Entstehen der EUSt bereits feststehende Nachlässe mindern sie (§ 11 Abs. 4).'
    },
    {
      id: 'lf11-einfuhrabgaben-a5', type: 'mc', difficulty: 3, points: 1,
      q: 'Die Saar-Trans Spedition hat einen bewilligten laufenden Zahlungsaufschub. Am **12. März** wird eine Sendung zum freien Verkehr überlassen. Wann werden Zoll und Einfuhrumsatzsteuer fällig?',
      options: [
        'Zoll und EUSt sofort bei der Überlassung',
        'Zoll am 16. April, EUSt am 26. Mai',
        'Zoll und EUSt am 22. März (10 Tage nach Mitteilung)',
        'Zoll am 26. Mai, EUSt am 16. April'
      ],
      correct: [1],
      hints: ['Beim Aufschub werden die Abgaben eines ganzen Monats gesammelt.', '§ 21 Abs. 3a UStG enthält eine Sonderregel für die EUSt.'],
      solution: 'Richtig ist B: Beim laufenden Aufschub sind Zoll und Einfuhrverbrauchsteuern **spätestens am 16. des Folgemonats** (16. April) fällig. Die EUSt ist nach § 21 Abs. 3a UStG am **26. des zweiten Folgemonats** (26. Mai) fällig. Die 10-Tage-Frist gilt nur **ohne** Zahlungserleichterung.'
    },
    {
      id: 'lf11-einfuhrabgaben-a6', type: 'booking', difficulty: 2, points: 3,
      q: `Die Saar-Trans Spedition importiert einen Gabelstapler für ihr eigenes Lager. Der Zollbescheid lautet über **810 € Zoll** und **3.648 € Einfuhrumsatzsteuer**. Beide Beträge werden per Bank überwiesen.

Bilde den Buchungssatz für die Zahlung der Einfuhrabgaben.`,
      accounts: ['Betriebs- und Geschäftsausstattung', 'Fuhrpark', 'Vorsteuer', 'Umsatzsteuer', 'Bank', 'Kasse', 'Verbindlichkeiten a. LL', 'Speditionserlöse'],
      entries: [
        { side: 'S', account: 'Betriebs- und Geschäftsausstattung', amount: 810 },
        { side: 'S', account: 'Vorsteuer', amount: 3648 },
        { side: 'H', account: 'Bank', amount: 4458 }
      ],
      hints: ['Der Zoll gehört zu den Anschaffungskosten des Gabelstaplers.', 'Die EUSt ist für die Spedition abziehbare Vorsteuer.'],
      solution: `**Betriebs- und Geschäftsausstattung 810 € und Vorsteuer 3.648 € an Bank 4.458 €**

Rechnung: 810 € + 3.648 € = 4.458 €.

- **Betriebs- und Geschäftsausstattung**: Aktivkonto (Anlagevermögen). Der **Zoll** ist Anschaffungsnebenkosten und erhöht den Wert des Gabelstaplers → Zugang im **Soll**.
- **Vorsteuer**: Aktivkonto (Forderung gegenüber dem Finanzamt). Die **EUSt** ist nach § 15 Abs. 1 Satz 1 Nr. 2 UStG als Vorsteuer abziehbar → Zugang im **Soll**.
- **Bank**: Aktivkonto, das Guthaben nimmt ab → Abgang im **Haben**.

Summe Soll 4.458 € = Summe Haben 4.458 €.`
    },
    {
      id: 'lf11-einfuhrabgaben-a7', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Der Zoll wird vom [[Zollwert]] berechnet. Den Zollsatz entnimmt man je Warennummer dem [[TARIC|Zolltarif|EZT]]. Die Bemessungsgrundlage der EUSt umfasst zusätzlich den [[Zoll]] und die Beförderungskosten bis zum ersten [[Bestimmungsort]]. Der Regelsteuersatz der EUSt beträgt [[19]] %. Für den Unternehmer ist die EUSt in der Regel als [[Vorsteuer]] abziehbar.',
      hints: ['Die Rechtsgrundlage für die EUSt-Bemessung ist § 11 UStG.', 'Der Steuersatz entspricht dem der Umsatzsteuer.'],
      solution: 'Zoll = **Zollwert** × Zollsatz aus dem **TARIC/EZT**. EUSt-Bemessungsgrundlage = Zollwert + **Zoll** + Kosten bis zum ersten **Bestimmungsort** (§ 11 UStG). Regelsatz **19 %** (§ 12 Abs. 1 UStG). Abzug als **Vorsteuer** nach § 15 Abs. 1 Satz 1 Nr. 2 UStG.'
    },
    {
      id: 'lf11-einfuhrabgaben-a8', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne jeden Kostenbestandteil der richtigen Behandlung zu (Seeweg, Ankunft Rotterdam, erster Bestimmungsort Saarbrücken).',
      pairs: [
        ['Seefracht Shanghai–Rotterdam (Kauf FOB)', 'Zollwert und damit auch EUSt-Bemessungsgrundlage'],
        ['Lkw-Fracht Rotterdam–Saarbrücken', 'nur EUSt-Bemessungsgrundlage'],
        ['Zoll', 'nur EUSt-Bemessungsgrundlage (als Abgabe)'],
        ['Einfuhrumsatzsteuer', 'weder Zollwert noch EUSt-Bemessungsgrundlage'],
        ['Verkaufsprovision an den Vertreter des Verkäufers', 'Zollwert (Hinzurechnung nach Art. 71 UZK)']
      ],
      hints: ['Alles, was im Zollwert steckt, steckt automatisch auch in der EUSt-Bemessungsgrundlage.', 'Kosten nach dem Ort des Verbringens zählen nur für die EUSt.'],
      solution: '**Seefracht bis Rotterdam** gehört in den Zollwert (Art. 71 UZK) und damit auch in die EUSt-Grundlage. **Lkw-Fracht ab Rotterdam** liegt nach dem Ort des Verbringens: nur EUSt (§ 11 Abs. 3 Nr. 3 UStG). Der **Zoll** wird bei der EUSt hinzugerechnet (§ 11 Abs. 3 Nr. 2 UStG). Die **EUSt** selbst ist ausgenommen. Die **Verkaufsprovision** ist eine Hinzurechnung zum Zollwert.'
    },
    {
      id: 'lf11-einfuhrabgaben-a9', type: 'text', difficulty: 3, points: 3,
      q: 'Ein Kunde der Spedition fragt: „Warum lohnt sich für uns ein Zahlungsaufschub, wenn wir die Einfuhrumsatzsteuer doch sowieso als Vorsteuer zurückbekommen?“ Erkläre den Vorteil.',
      model: 'Ohne Aufschub muss der Kunde Zoll und EUSt grundsätzlich innerhalb von bis zu zehn Tagen nach Mitteilung bezahlen, bekommt die EUSt aber erst über die Umsatzsteuer-Voranmeldung als Vorsteuer zurück. Er muss den Betrag also vorfinanzieren. Mit dem laufenden Zahlungsaufschub werden die Abgaben eines Monats gesammelt: Der Zoll ist am 16. des Folgemonats fällig, die EUSt sogar erst am 26. des zweiten Folgemonats. Da die EUSt bereits in der Voranmeldung für den Einfuhrmonat als Vorsteuer abgezogen werden kann, entsteht kaum noch eine Vorfinanzierung. Das schont die Liquidität. Außerdem muss nicht jede Abfertigung einzeln bezahlt werden.',
      criteria: [
        { text: 'nennt die Vorfinanzierung bzw. Liquiditätsbelastung ohne Aufschub', keywords: ['vorfinanz|Liquidität|Zinsen|Kapital'], points: 1 },
        { text: 'nennt die späteren Fälligkeiten mit Aufschub', keywords: ['16', '26|zweiten Folgemonat'], points: 1 },
        { text: 'verknüpft mit dem Vorsteuerabzug in der Voranmeldung', keywords: ['Vorsteuer', 'Voranmeldung|Finanzamt'], points: 1 }
      ],
      hints: ['Wann muss ohne Aufschub bezahlt werden, wann kommt das Geld vom Finanzamt zurück?', 'Vergleiche die Fälligkeit der EUSt mit dem Zeitpunkt des Vorsteuerabzugs.'],
      solution: 'Kern: **Ohne Aufschub** muss die EUSt innerhalb von bis zu 10 Tagen gezahlt und bis zur Erstattung über die Voranmeldung **vorfinanziert** werden. **Mit Aufschub**: Zoll am **16. des Folgemonats**, EUSt am **26. des zweiten Folgemonats** (§ 21 Abs. 3a UStG). Die Vorsteuer wird schon für den Einfuhrmonat abgezogen – die Vorfinanzierung fällt weitgehend weg, die **Liquidität** steigt.'
    },
    {
      id: 'lf11-einfuhrabgaben-a10', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Wechselrichter aus China für einen Kunden in Merzig',
      intro: `Die **Bliesgau Logistik GmbH** fertigt für die Merziger Energietechnik GmbH (vorsteuerabzugsberechtigt) eine Sendung Wechselrichter aus China ab. Einfuhr im **Juni 2026**.

| Angabe | Wert |
|---|---|
| Rechnungspreis **CFR Antwerpen** (Seefracht bis Antwerpen enthalten) | 58.000 € |
| Versicherung bis Antwerpen (vom Käufer separat bezahlt) | 290 € |
| Umschlag im Hafen und Lkw-Fracht Antwerpen–Merzig | 1.410 € |
| Zollsatz (Beispielwert) | 3,5 % |
| EUSt-Satz | 19 % |

Die Abfertigung erfolgt über den Zahlungsaufschub der Bliesgau Logistik (Aufschub für fremde Schulden).`,
      hints: ['Bei CFR ist die Fracht, aber nicht die Versicherung im Preis enthalten.', 'Für die EUSt kommen Zoll und die Kosten ab Antwerpen hinzu.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf11-einfuhrabgaben-a10-1', type: 'calc', difficulty: 3, points: 2,
          q: 'Berechne Zollwert und Zoll.',
          formula: 'Zollwert = Preis CFR + Versicherung bis Antwerpen; Zoll = Zollwert × 3,5 %',
          fields: [
            { id: 'zw', label: 'Zollwert', unit: '€', answer: 58290, tol: 0.01 },
            { id: 'zoll', label: 'Zoll', unit: '€', answer: 2040.15, tol: 0.01 }
          ],
          hints: ['CFR = Kosten und Fracht, ohne Versicherung.', 'Antwerpen ist der Ort des Verbringens.'],
          solution: `**Zollwert:** 58.000 € + 290 € = **58.290,00 €** (Fracht ist bei CFR enthalten, die Versicherung bis zum Ort des Verbringens wird hinzugerechnet)

**Zoll:** 58.290 € × 3,5 % = **2.040,15 €**`
        },
        {
          id: 'lf11-einfuhrabgaben-a10-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne EUSt-Bemessungsgrundlage, EUSt und die Einfuhrabgaben insgesamt.',
          formula: 'EUSt = (Zollwert + Zoll + Kosten bis 1. Bestimmungsort) × 19 %',
          fields: [
            { id: 'bmg', label: 'EUSt-Bemessungsgrundlage', unit: '€', answer: 61740.15, tol: 0.01 },
            { id: 'eust', label: 'Einfuhrumsatzsteuer', unit: '€', answer: 11730.63, tol: 0.01 },
            { id: 'ges', label: 'Einfuhrabgaben gesamt', unit: '€', answer: 13770.78, tol: 0.01 }
          ],
          hints: ['Erster Bestimmungsort ist Merzig.', 'Runde die EUSt auf Cent.'],
          solution: `**EUSt-Bemessungsgrundlage:** 58.290,00 € + 2.040,15 € + 1.410,00 € = **61.740,15 €**

**EUSt:** 61.740,15 € × 19 % = 11.730,6285 € ≈ **11.730,63 €**

**Einfuhrabgaben gesamt:** 2.040,15 € + 11.730,63 € = **13.770,78 €**`
        },
        {
          id: 'lf11-einfuhrabgaben-a10-3', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Der Zoll von 2.040,15 € erhöht die Anschaffungskosten der Merziger Energietechnik.',
            'Die EUSt von 11.730,63 € kann die Merziger Energietechnik als Vorsteuer abziehen.',
            'Über den Aufschub ist der Zoll spätestens am 16. Juli, die EUSt am 26. August fällig.',
            'Weil die Bliesgau Logistik ihren Aufschub nutzt, wird die EUSt für die Merziger Energietechnik zum Kostenfaktor.',
            'Die Fracht Antwerpen–Merzig hätte in den Zollwert gehört.'
          ],
          correct: [0, 1, 2],
          hints: ['Bei Einfuhr im Juni: Folgemonat Juli, zweiter Folgemonat August.', 'Der Aufschub ändert nichts am Vorsteuerabzug des Importeurs.'],
          solution: 'Richtig sind **A, B, C**. Der **Zoll** ist Anschaffungsnebenkosten. Die **EUSt** ist für die vorsteuerabzugsberechtigte Merziger Energietechnik als Vorsteuer abziehbar (§ 15 Abs. 1 Satz 1 Nr. 2 UStG). Fälligkeiten beim Aufschub: Zoll am **16. Juli**, EUSt am **26. August** (§ 21 Abs. 3a UStG). Die Nutzung des Spediteur-Aufschubs ändert den Vorsteuerabzug nicht. Die Fracht ab Antwerpen gehört nur zur EUSt-Bemessungsgrundlage.'
        }
      ]
    },
    {
      id: 'lf11-einfuhrabgaben-a11', type: 'calc', difficulty: 3, points: 3,
      q: `Eine Sendung Kaffeemaschinen (Zollwert **12.500 €**) wird zunächst im Zolllager der Spedition in Saarbrücken gelagert. Bei der Entnahme in den freien Verkehr steht bereits fest, dass sie zum Kunden nach Kaiserslautern gebracht wird.

- Fracht vom Ort des Verbringens bis zum Zolllager Saarbrücken: **420 €**
- Fracht Saarbrücken–Kaiserslautern (weiterer Bestimmungsort, bereits bekannt): **180 €**
- Zollsatz (Beispielwert): **2 %**, EUSt **19 %**

Berechne Zoll, EUSt-Bemessungsgrundlage und EUSt.`,
      formula: 'EUSt-Bemessungsgrundlage = Zollwert + Zoll + Kosten bis zum ersten und zum bereits feststehenden weiteren Bestimmungsort',
      fields: [
        { id: 'zoll', label: 'Zoll', unit: '€', answer: 250, tol: 0.01 },
        { id: 'bmg', label: 'EUSt-Bemessungsgrundlage', unit: '€', answer: 13350, tol: 0.01 },
        { id: 'eust', label: 'Einfuhrumsatzsteuer', unit: '€', answer: 2536.5, tol: 0.01 }
      ],
      hints: ['§ 11 Abs. 3 Nr. 4 UStG: Auch Kosten bis zu einem weiteren Bestimmungsort zählen, wenn dieser schon feststeht.', 'Der Zoll wird nur vom Zollwert berechnet.'],
      solution: `**Zoll:** 12.500 € × 2 % = **250,00 €**

**EUSt-Bemessungsgrundlage:** 12.500 € + 250 € + 420 € + 180 € = **13.350,00 €**

**EUSt:** 13.350 € × 19 % = **2.536,50 €**

Begründung: Die Fracht bis Saarbrücken zählt nach § 11 Abs. 3 Nr. 3 UStG (erster Bestimmungsort). Weil der weitere Bestimmungsort Kaiserslautern bei Entstehen der EUSt bereits feststeht, gehören auch die 180 € dazu (§ 11 Abs. 3 Nr. 4 UStG).`
    }
  ],
  quiz: ['lf11-einfuhrabgaben-a1', 'lf11-einfuhrabgaben-a4', 'lf11-einfuhrabgaben-a5', 'lf11-einfuhrabgaben-a6', 'lf11-einfuhrabgaben-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 11, Inhalte: Einfuhrabgaben, Zollwert, Einfuhrumsatzsteuer, Zahlungsaufschub' },
    { title: 'Umsatzsteuergesetz § 11 Bemessungsgrundlage für die Einfuhr', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__11.html', asOf: '2026' },
    { title: 'Umsatzsteuergesetz § 12 Steuersätze', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html', asOf: '2026' },
    { title: 'Umsatzsteuergesetz § 15 Vorsteuerabzug', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html', asOf: '2026' },
    { title: 'Umsatzsteuergesetz § 21 Besondere Vorschriften für die Einfuhrumsatzsteuer', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__21.html', asOf: '2026' },
    { title: 'Zahlung mit Zahlungserleichterung (Zahlungsaufschub)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Abgabenerhebung/Zahlung-der-Abgaben/Mit-Zahlungserleichterung/mit-zahlungserleichterung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Zahlung ohne Zahlungserleichterung', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Abgabenerhebung/Zahlung-der-Abgaben/Ohne-Zahlungserleichterung/ohne-zahlungserleichterung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Ort des Verbringens (Zollwert)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollwert/Methoden-der-Zollwertermittlung/Transaktionswert-fuer-die-eingefuehrte-Ware/Berichtigungen-Artikel-71-72-UZK/Befoerderungs-und-Versicherungskosten/Ort-des-Verbringens/ort-des-verbringens_node.html', asOf: 'abgerufen 2026-10-17' }
  ],
  links: ['lf11-zollverfahren', 'lf11-versandverfahren', 'lf03-umsatzsteuer', 'lf10-incoterms']
};
