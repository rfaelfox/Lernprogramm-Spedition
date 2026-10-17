export default {
  id: 'lf09-lager-grundlagen',
  area: 'LF09',
  topic: 'lf09-lagerarten',
  title: 'Lagerfunktionen, Lagerarten und Lagervertrag',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Lagervertrag nach §§ 467–475h HGB und Haftungsgrenzen der ADSp 2017 (Ziffer 24), Stand der Prüfung Oktober 2026. Die ADSp gelten nur, wenn sie wirksam vereinbart sind.'
  },
  goals: [
    'Ich kann die Lagerfunktionen Ausgleich, Sicherung, Veredelung, Spekulation und Sortierung mit Beispielen erklären.',
    'Ich kann Lagerarten nach Betreiber, Standort und Bauform unterscheiden.',
    'Ich kann Block- und Zeilenlagerung sowie feste und chaotische Lagerplatzvergabe vergleichen.',
    'Ich kann FIFO und LIFO als Ein- und Auslagerungsprinzip erklären.',
    'Ich kann die Vertragspartner und die Hauptpflichten des Lagervertrags nach HGB nennen.',
    'Ich kann den Lagerschein und die Haftung des Lagerhalters nach § 475 HGB erklären.',
    'Ich kann erklären, warum Lagerhalter meist die ADSp 2017 vereinbaren, und deren Haftungsgrenzen bei der Lagerung vorsichtig anwenden.',
    'Ich kann ein einfaches Lagergeld aus Stellplatzmiete und Ein- und Auslagerungsgebühren berechnen.'
  ],
  simple: `# Worum geht es?

Waren werden nicht immer sofort gebraucht, wenn sie hergestellt oder gekauft werden. Dazwischen liegen sie im **Lager**. Viele Speditionen bieten das Lagern als Dienstleistung an: Sie sind dann **Lagerhalter**, der Kunde ist der **Einlagerer**.

**Wozu lagert man? (Lagerfunktionen)**

- **Ausgleich:** Herstellung und Verbrauch passen zeitlich oder mengenmäßig nicht zusammen. Beispiel: Streusalz wird im Sommer hergestellt und im Winter verkauft.
- **Sicherung:** Ein Vorrat schützt vor Lieferausfällen, z. B. Ersatzteile für eine Produktionslinie.
- **Veredelung:** Das Gut wird durch das Lagern besser, z. B. Wein, Käse, Holz (Trocknung).
- **Spekulation:** Man kauft viel, wenn die Preise niedrig sind, und lagert, bis die Preise steigen.
- **Sortierung (Umformung):** Große Mengen werden in kleine Einheiten aufgeteilt, umgepackt und zu Kundenaufträgen zusammengestellt.

**Wie wird gelagert?**

- Im **Eigenlager** (eigene Halle) oder im **Fremdlager** (beim Logistikdienstleister).
- **Zentral** an einem Ort oder **dezentral** an vielen Orten nah am Kunden.
- Auf dem **Boden** gestapelt oder im **Regal**, bis hin zum automatischen **Hochregallager**.
- Mit **festen Lagerplätzen** (jeder Artikel hat seinen Platz) oder mit **chaotischer** Lagerplatzvergabe (der Computer vergibt den nächsten freien Platz).

**Lagervertrag:** Der Lagerhalter verpflichtet sich, das Gut zu lagern und aufzubewahren. Der Einlagerer zahlt dafür die vereinbarte Vergütung (Lagergeld). Geregelt ist das im Handelsgesetzbuch ab § 467.`,
  deep: `# Lagerarten im Überblick

| Merkmal | Lagerarten |
|---|---|
| Betreiber | **Eigenlager** (Unternehmen lagert selbst) oder **Fremdlager** (Lagerhalter lagert gegen Entgelt) |
| Standort | **Zentrallager** (ein großes Lager, weniger Bestand, längere Wege zum Kunden) oder **dezentrale Lager** (Regional- und Auslieferungslager nah am Kunden, mehr Gesamtbestand) |
| Bauform | **Freilager** (z. B. Baustoffe, Container), **Bodenlager** in der Halle, **Regallager** (Palettenregal, Fachbodenregal, Kragarmregal), **Hochregallager** (sehr hohe Regale, meist mit Regalbediengeräten automatisiert) |
| Anordnung der Ladeeinheiten | **Blocklagerung** oder **Zeilenlagerung** |
| Platzvergabe | **feste** oder **chaotische (freie)** Lagerplatzvergabe |

## Block- und Zeilenlagerung

| | Blocklagerung | Zeilenlagerung |
|---|---|---|
| Aufbau | Ladeeinheiten dicht an dicht und übereinander, wenige Gänge | Ladeeinheiten in Reihen mit Gang davor |
| Flächennutzung | sehr gut | geringer (Gänge) |
| Zugriff | nur auf die vorderen bzw. oberen Einheiten | direkter Zugriff auf jede Einheit |
| Eignung | wenige Artikel in großen Mengen, stapelbare Güter (Getränke, Säcke) | viele verschiedene Artikel |
| Auslagerung | meist LIFO | FIFO gut möglich |

## Feste und chaotische Lagerplatzvergabe

- **Feste Lagerplatzvergabe (Festplatzsystem):** Jeder Artikel hat immer denselben Platz. Vorteil: einfach, Mitarbeiter finden Ware auch ohne EDV. Nachteil: Plätze bleiben leer, wenn der Artikel gerade nicht vorrätig ist; mehr Lagerfläche nötig.
- **Chaotische Lagerplatzvergabe (Freiplatzsystem):** Jeder freie Platz kann belegt werden; ein Lagerverwaltungssystem (LVS) speichert, wo was liegt. Vorteil: bessere Ausnutzung der Fläche, flexibel. Nachteil: ohne funktionierende EDV und genaue Buchung findet man nichts; Abhängigkeit von der Technik.

## FIFO und LIFO als Ein- und Auslagerungsprinzip

- **FIFO (first in – first out):** Was zuerst eingelagert wurde, wird zuerst ausgelagert. Wichtig bei Gütern mit Haltbarkeitsdatum (Lebensmittel, Medikamente) oder Gefahr der Veralterung.
- **LIFO (last in – first out):** Was zuletzt eingelagert wurde, wird zuerst ausgelagert. Ergibt sich oft bei der Blocklagerung, geeignet nur für Güter, die nicht altern (z. B. Schüttgut, Steine).
- Daneben gibt es z. B. **FEFO** (first expired – first out): zuerst das, was zuerst abläuft.

> FIFO und LIFO kommen auch als **Bewertungsverfahren** in der Buchführung vor. Hier geht es nur um die tatsächliche Reihenfolge im Lager.

# Lagervertrag nach HGB (§§ 467 ff.)

**Vertragspartner:** Der **Lagerhalter** verpflichtet sich, das Gut zu lagern und aufzubewahren. Der **Einlagerer** verpflichtet sich, die vereinbarte Vergütung zu zahlen (§ 467 Abs. 1 und 2 HGB). Die Vorschriften gelten, wenn die Lagerung und Aufbewahrung zum Betrieb eines gewerblichen Unternehmens gehört (§ 467 Abs. 3 HGB).

**Pflichten des Lagerhalters (Auswahl):**
- Gut **lagern und aufbewahren**, also in Obhut nehmen und schützen (§ 467).
- Beim **Empfang** beschädigten oder mangelhaften Gutes Schadenersatzansprüche des Einlagerers (z. B. gegen den anliefernden Frachtführer) sichern und den Einlagerer unverzüglich benachrichtigen (§ 470).
- Den Einlagerer **benachrichtigen**, wenn Veränderungen am Gut zu befürchten sind (§ 471 Abs. 2); dem Einlagerer die Besichtigung und Probenentnahme gestatten (§ 471 Abs. 1).
- Das Gut auf Verlangen des Einlagerers **versichern** (§ 472 Abs. 1).
- Das Gut nur mit Erlaubnis des Einlagerers **bei einem Dritten** einlagern (§ 472 Abs. 2).
- Vermischung mit Gut anderer Einlagerer (**Sammellagerung**) nur, wenn die Einlagerer zustimmen (§ 469).

**Pflichten des Einlagerers (Auswahl):**
- **Vergütung** zahlen (§ 467 Abs. 2) und **Aufwendungen** ersetzen (§ 474).
- Gut, soweit erforderlich, **verpacken und kennzeichnen**, Urkunden zur Verfügung stellen, bei **gefährlichem Gut** rechtzeitig über die Gefahr informieren (§ 468).

**Dauer und Kündigung (§ 473):**
- Der Einlagerer kann das Gut **jederzeit herausverlangen**.
- Ist der Vertrag auf **unbestimmte Zeit** geschlossen, kann er mit einer **Frist von einem Monat** gekündigt werden; bei einem **wichtigen Grund** auch ohne Frist.
- Der Lagerhalter kann die Rücknahme nach Ablauf der vereinbarten Zeit oder nach Kündigung mit Monatsfrist verlangen, bei wichtigem Grund auch vorher ohne Frist.

**Lagerschein (§ 475c):** Der Lagerhalter **kann** nach Erhalt des Gutes einen Lagerschein über seine Pflicht zur Auslieferung ausstellen. Der Schein soll u. a. Ort und Tag der Ausstellung, Name und Anschrift von Einlagerer und Lagerhalter, Ort und Tag der Einlagerung, Bezeichnung und Verpackung des Gutes, Anzahl, Zeichen und Nummern der Packstücke sowie das Rohgewicht enthalten. Er ist vom Lagerhalter zu **unterzeichnen** (eine gedruckte oder gestempelte Unterschrift genügt). Eine gleichwertige **elektronische** Aufzeichnung ist möglich. Ein Lagerschein, der durch **Indossament** übertragen werden kann (**Orderlagerschein**), hat **Traditionswirkung**: Seine Übergabe wirkt für den Erwerb von Rechten am Gut wie die Übergabe des Gutes selbst (§ 475g). So kann eingelagerte Ware verkauft oder verpfändet werden, ohne sie zu bewegen.

**Haftung (§ 475) – Obhutshaftung mit vermutetem Verschulden:**
- Der Lagerhalter haftet für **Verlust oder Beschädigung** des Gutes in der Zeit **von der Übernahme zur Lagerung bis zur Auslieferung** (Obhutszeitraum).
- Er haftet **nicht**, wenn der Schaden durch die **Sorgfalt eines ordentlichen Kaufmanns** nicht abgewendet werden konnte. Das muss **der Lagerhalter beweisen** (vermutetes Verschulden).
- Das HGB sieht für den Lagervertrag **keine Haftungshöchstbeträge** vor (anders als beim Frachtvertrag mit 8,33 SZR/kg).
- Weitere Rechte: **Pfandrecht** des Lagerhalters am Gut für seine Forderungen (§ 475b), **Verjährung** von Ansprüchen in der Regel nach einem Jahr (§ 475a i. V. m. § 439).

# ADSp 2017 als Allgemeine Geschäftsbedingungen

Die **Allgemeinen Deutschen Spediteurbedingungen 2017 (ADSp 2017)** sind Allgemeine Geschäftsbedingungen, die von Verbänden der Verlader- und der Logistikwirtschaft gemeinsam empfohlen werden. Sie gelten **nur, wenn sie in den Vertrag einbezogen** sind, z. B. durch einen Hinweis im Angebot. Sie gelten für Verkehrsverträge des Spediteurs, also auch für die **Lagerung**. Gegenüber Verbrauchern werden sie nicht verwendet.

Weil das HGB beim Lagervertrag keine Haftungsgrenze kennt, begrenzen die ADSp die Haftung. Für Güterschäden bei einer **verfügten Lagerung** sieht Ziffer 24 ADSp 2017 vor (Kurzfassung, Volltext beachten):

| Regel (ADSp 2017) | Inhalt |
|---|---|
| Ziffer 24.1.1 | höchstens **8,33 Sonderziehungsrechte (SZR) je kg** Rohgewicht |
| Ziffer 24.1.2 | höchstens **35.000 € je Schadenfall** |
| | maßgeblich ist der **niedrigere** der beiden Beträge |
| Ziffer 24.1.3 | bei **Inventurdifferenzen** (Soll-Ist-Abweichung) höchstens **70.000 € je Jahr** |
| Ziffer 24.2 | Der Auftraggeber kann vor der Einlagerung in Textform gegen Zuschlag einen **höheren Wert** angeben. |
| Ziffer 24.4 | höchstens **2,5 Mio. € je Schadenereignis** |

Die Haftungsbefreiungen und -begrenzungen gelten nach Ziffer 27 ADSp 2017 unter anderem **nicht** bei **Vorsatz oder grober Fahrlässigkeit**. Ob die ADSp im Einzelfall wirksam vereinbart sind und welche Regel greift, ist eine Rechtsfrage; im Zweifel den Volltext und die Rechtsabteilung bzw. den Versicherer fragen.

> Merke: **Ohne ADSp** haftet der Lagerhalter nach HGB der Höhe nach **unbegrenzt** (bei vermutetem Verschulden). **Mit ADSp** ist die Haftung in der Regel begrenzt.`,
  terms: [
    { term: 'Lagerhalter', def: 'Wer sich durch den Lagervertrag verpflichtet, das Gut gewerblich zu lagern und aufzubewahren (§ 467 HGB).' },
    { term: 'Einlagerer', def: 'Vertragspartner des Lagerhalters; er übergibt das Gut zur Lagerung und zahlt die vereinbarte Vergütung.' },
    { term: 'Lagergeld', def: 'Vergütung für die Lagerung, meist je Palettenstellplatz, m² oder Tonne und Zeitraum; dazu kommen oft Gebühren für Ein- und Auslagerung (Handling).' },
    { term: 'Lagerschein', def: 'Vom Lagerhalter unterzeichnete Urkunde über seine Pflicht, das eingelagerte Gut auszuliefern (§ 475c HGB). Als Orderlagerschein durch Indossament übertragbar.' },
    { term: 'Traditionswirkung', def: 'Die Übergabe eines Orderlagerscheins wirkt für den Erwerb von Rechten am Gut wie die Übergabe des Gutes selbst (§ 475g HGB).' },
    { term: 'Obhutshaftung', def: 'Haftung für Schäden am Gut während der Zeit, in der es sich in der Obhut des Lagerhalters befindet (Übernahme bis Auslieferung).' },
    { term: 'Vermutetes Verschulden', def: 'Der Lagerhalter haftet, es sei denn, er beweist, dass der Schaden auch mit der Sorgfalt eines ordentlichen Kaufmanns nicht abzuwenden war (§ 475 HGB).' },
    { term: 'Sammellagerung', def: 'Vermischung vertretbarer Güter mehrerer Einlagerer; nur zulässig, wenn die Einlagerer zustimmen (§ 469 HGB).' },
    { term: 'Chaotische Lagerplatzvergabe', def: 'Freiplatzsystem: Das Gut wird auf einen beliebigen freien Platz gelegt, das Lagerverwaltungssystem speichert den Platz.' },
    { term: 'Blocklagerung', def: 'Lagerung von Ladeeinheiten dicht neben- und übereinander ohne Gänge dazwischen; gute Flächennutzung, eingeschränkter Zugriff.' },
    { term: 'FIFO', def: 'First in – first out: Die zuerst eingelagerten Güter werden zuerst ausgelagert.' },
    { term: 'ADSp 2017', def: 'Allgemeine Deutsche Spediteurbedingungen 2017, von Verbänden empfohlene AGB für Verkehrsverträge einschließlich Lagerung; gelten nur bei Einbeziehung in den Vertrag.' }
  ],
  example: `# Beispiel: Fremdlager für die Bliesgau Feinkost GmbH (Beispielzahlen)

Die Bliesgau Feinkost GmbH stellt Konserven her. Im Herbst produziert sie auf Vorrat für das Weihnachtsgeschäft (**Ausgleichsfunktion**) und hält einen Sicherheitsbestand für Großkunden (**Sicherungsfunktion**). In ihrer eigenen Halle ist kein Platz mehr.

Sie schließt mit der Saarlogistik GmbH in Neunkirchen einen **Lagervertrag**. Die Saarlogistik ist **Lagerhalter**, die Feinkost GmbH **Einlagerer**. Im Angebot steht: „Wir arbeiten ausschließlich auf Grundlage der ADSp 2017.“

**Vereinbarte Preise (netto):**
- Lagergeld 6,80 € je Palettenstellplatz und Monat
- Einlagerung 2,40 € je Palette, Auslagerung 2,40 € je Palette

**Abrechnung Oktober:** 140 belegte Stellplätze, 60 Paletten eingelagert, 45 Paletten ausgelagert.

| Position | Rechnung | Betrag |
|---|---|---:|
| Lagergeld | 140 × 6,80 € | 952,00 € |
| Einlagerung | 60 × 2,40 € | 144,00 € |
| Auslagerung | 45 × 2,40 € | 108,00 € |
| **Summe netto** | | **1.204,00 €** |

**Organisation:** Die Paletten liegen im Palettenregal (Zeilenlagerung), der Platz wird **chaotisch** vom Lagerverwaltungssystem vergeben. Wegen der Mindesthaltbarkeit wird nach **FIFO** (genauer FEFO) ausgelagert.

**Schaden:** Ein Staplerfahrer beschädigt eine Palette (600 kg, Warenwert 9.000 €). Nach § 475 HGB haftet die Saarlogistik, weil sie nicht beweisen kann, dass der Schaden unvermeidbar war. Ohne ADSp wäre die Haftung der Höhe nach nicht begrenzt. Da die ADSp 2017 vereinbart sind, ist sie nach Ziffer 24.1 auf 8,33 SZR je kg bzw. 35.000 € begrenzt, der niedrigere Betrag gilt. Liegt grobe Fahrlässigkeit vor, entfällt die Begrenzung (Ziffer 27).`,
  rules: [
    'Lagerfunktionen: Ausgleich, Sicherung, Veredelung, Spekulation, Sortierung.',
    'Lagerhalter lagert und bewahrt auf, Einlagerer zahlt die Vergütung (§ 467 HGB).',
    'Der Lagerhalter haftet von der Übernahme bis zur Auslieferung für Verlust und Beschädigung, außer er beweist, dass der Schaden auch mit kaufmännischer Sorgfalt nicht abzuwenden war (§ 475 HGB).',
    'Das HGB kennt beim Lagervertrag keine Haftungshöchstgrenze; Begrenzungen ergeben sich erst aus AGB wie den ADSp 2017, wenn sie vereinbart sind.',
    'Bei unbestimmter Lagerdauer gilt eine Kündigungsfrist von einem Monat; herausverlangen kann der Einlagerer das Gut jederzeit (§ 473 HGB).',
    'Chaotische Lagerplatzvergabe spart Fläche, braucht aber ein zuverlässiges Lagerverwaltungssystem.',
    'Lebensmittel und andere verderbliche Güter nach FIFO (bzw. FEFO) auslagern.'
  ],
  summary: `- **Lagerfunktionen:** Ausgleich, Sicherung, Veredelung, Spekulation, Sortierung.
- **Lagerarten:** Eigen-/Fremdlager, zentral/dezentral, Boden-/Regal-/Hochregallager, Block-/Zeilenlagerung, feste/chaotische Platzvergabe.
- **FIFO/LIFO:** Reihenfolge der Auslagerung; FIFO bei verderblicher Ware.
- **Lagervertrag (§ 467 HGB):** Lagerhalter lagert und bewahrt auf, Einlagerer zahlt.
- **Pflichten:** Benachrichtigung bei Veränderungen, Versicherung auf Verlangen, Dritteinlagerung nur mit Erlaubnis; Einlagerer muss verpacken, kennzeichnen und über Gefahrgut informieren.
- **Kündigung (§ 473):** Herausgabe jederzeit, bei unbestimmter Dauer Kündigungsfrist ein Monat.
- **Lagerschein (§ 475c):** Urkunde über die Auslieferungspflicht; als Orderlagerschein mit Traditionswirkung.
- **Haftung (§ 475):** Obhutshaftung mit vermutetem Verschulden, im HGB ohne Höchstbetrag.
- **ADSp 2017:** AGB, nur bei Einbeziehung; Lagerung: 8,33 SZR/kg, höchstens 35.000 € je Schadenfall, Inventurdifferenzen 70.000 €/Jahr; keine Begrenzung u. a. bei Vorsatz und grober Fahrlässigkeit.`,
  mistakes: [
    { wrong: 'Der Lagerhalter haftet wie der Frachtführer automatisch nur bis 8,33 SZR je kg.', right: 'Das HGB sieht für den Lagervertrag keine Höchstgrenze vor. Eine Begrenzung (z. B. 8,33 SZR/kg, höchstens 35.000 € je Schadenfall) ergibt sich erst aus vereinbarten AGB wie den ADSp 2017.' },
    { wrong: 'Der Einlagerer muss beweisen, dass der Lagerhalter schuld ist.', right: 'Das Verschulden wird vermutet. Der Lagerhalter muss beweisen, dass er den Schaden mit der Sorgfalt eines ordentlichen Kaufmanns nicht abwenden konnte.' },
    { wrong: 'Die eingelagerten Waren gehören jetzt dem Lagerhalter.', right: 'Der Lagerhalter hat nur den Besitz (Obhut). Eigentümer bleibt der Einlagerer bzw. der Eigentümer der Ware.' },
    { wrong: 'Der Lagerhalter muss immer einen Lagerschein ausstellen.', right: 'Er kann einen Lagerschein ausstellen (§ 475c HGB), eine Pflicht besteht nur, wenn es vereinbart ist.' },
    { wrong: 'Chaotische Lagerung bedeutet, dass das Lager unordentlich ist.', right: 'Chaotisch heißt nur, dass es keine festen Plätze gibt. Das Lagerverwaltungssystem weiß genau, wo jede Einheit liegt.' },
    { wrong: 'Die ADSp gelten für jede Spedition automatisch, weil sie branchenüblich sind.', right: 'Die ADSp sind AGB und müssen in den Vertrag einbezogen werden, z. B. durch einen deutlichen Hinweis im Angebot oder in der Auftragsbestätigung.' }
  ],
  flashcards: [
    { q: 'Nenne die fünf Lagerfunktionen.', a: 'Ausgleich, Sicherung, Veredelung, Spekulation, Sortierung (Umformung).' },
    { q: 'Wer sind die Vertragspartner des Lagervertrags?', a: 'Lagerhalter und Einlagerer.' },
    { q: 'Welche Hauptpflichten regelt § 467 HGB?', a: 'Lagerhalter: Gut lagern und aufbewahren. Einlagerer: vereinbarte Vergütung zahlen.' },
    { q: 'Wie lange haftet der Lagerhalter nach § 475 HGB?', a: 'Von der Übernahme zur Lagerung bis zur Auslieferung (Obhutszeitraum).' },
    { q: 'Wann haftet der Lagerhalter nach § 475 HGB nicht?', a: 'Wenn der Schaden durch die Sorgfalt eines ordentlichen Kaufmanns nicht abgewendet werden konnte; das muss er beweisen.' },
    { q: 'Welche Kündigungsfrist gilt beim Lagervertrag auf unbestimmte Zeit?', a: 'Ein Monat (§ 473 HGB); bei wichtigem Grund auch fristlos.' },
    { q: 'Was ist ein Lagerschein?', a: 'Eine vom Lagerhalter unterzeichnete Urkunde über seine Auslieferungspflicht (§ 475c HGB).' },
    { q: 'Was bedeutet Traditionswirkung des Orderlagerscheins?', a: 'Die Übergabe des Scheins wirkt für den Erwerb von Rechten am Gut wie die Übergabe des Gutes selbst.' },
    { q: 'Welche Haftungsgrenzen nennt Ziffer 24.1 ADSp 2017 für die verfügte Lagerung?', a: '8,33 SZR je kg, höchstens 35.000 € je Schadenfall (der niedrigere Betrag); bei Inventurdifferenzen höchstens 70.000 € je Jahr.' },
    { q: 'Vorteil und Nachteil der chaotischen Lagerplatzvergabe?', a: 'Vorteil: bessere Flächennutzung, flexibel. Nachteil: Abhängigkeit von EDV und genauer Buchung.' },
    { q: 'Wann verwendet man FIFO?', a: 'Bei Gütern mit Haltbarkeitsdatum oder Veralterungsgefahr, damit die älteste Ware zuerst das Lager verlässt.' }
  ],
  tasks: [
    {
      id: 'lf09-lager-grundlagen-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jeder Lagerfunktion das passende Beispiel zu.',
      pairs: [
        ['Ausgleichsfunktion', 'Streusalz wird das ganze Jahr hergestellt, aber vor allem im Winter verkauft.'],
        ['Sicherungsfunktion', 'Ein Autozulieferer hält Ersatzteile vorrätig, falls der Lieferant ausfällt.'],
        ['Veredelungsfunktion', 'Rotwein reift mehrere Jahre im Fass.'],
        ['Spekulationsfunktion', 'Ein Händler kauft Kupfer bei niedrigem Preis und lagert es bis zum Preisanstieg.'],
        ['Sortierungsfunktion', 'Ganze Paletten werden in Kartons aufgeteilt und zu Filialaufträgen zusammengestellt.']
      ],
      hints: ['Achte darauf, ob sich das Gut selbst verändert, ob es um Preise oder um Zeitunterschiede geht.', 'Sortierung heißt auch Umformung: Mengen und Sortiment ändern sich.'],
      solution: 'Ausgleich = zeitlicher/mengenmäßiger Unterschied zwischen Herstellung und Verbrauch (Streusalz). Sicherung = Vorrat gegen Ausfälle (Ersatzteile). Veredelung = Qualität steigt durch Lagern (Wein). Spekulation = Preisänderungen ausnutzen (Kupfer). Sortierung = Umpacken und Kommissionieren (Filialaufträge).'
    },
    {
      id: 'lf09-lager-grundlagen-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Pflichten hat der **Lagerhalter** nach dem HGB? (Mehrfachauswahl)',
      options: [
        'Das Gut lagern und aufbewahren',
        'Das Gut auf Verlangen des Einlagerers versichern',
        'Das Gut ohne Rückfrage bei einem anderen Lagerhalter einlagern, wenn das eigene Lager voll ist',
        'Den Einlagerer benachrichtigen, wenn Veränderungen am Gut zu befürchten sind',
        'Das Gut als gefährlich kennzeichnen und verpacken',
        'Immer einen Lagerschein ausstellen'
      ],
      correct: [0, 1, 3],
      hints: ['Verpacken und Kennzeichnen gehört zur Seite des Einlagerers (§ 468 HGB).', 'Dritteinlagerung und Lagerschein: Prüfe, ob "darf/kann" oder "muss" gilt.'],
      solution: 'Richtig sind **A, B und D** (§§ 467, 471, 472 HGB). C ist falsch: Bei einem Dritten darf nur mit Erlaubnis des Einlagerers eingelagert werden (§ 472 Abs. 2). E ist eine Pflicht des Einlagerers (§ 468). F ist falsch: Der Lagerhalter **kann** einen Lagerschein ausstellen (§ 475c), muss es aber nur bei entsprechender Vereinbarung.'
    },
    {
      id: 'lf09-lager-grundlagen-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze den Text zum Lagervertrag.',
      text: 'Durch den Lagervertrag wird der [[Lagerhalter]] verpflichtet, das Gut zu lagern und aufzubewahren. Der [[Einlagerer]] muss die vereinbarte Vergütung zahlen. Der Lagerhalter haftet für Verlust oder [[Beschädigung]] des Gutes von der Übernahme bis zur [[Auslieferung]]. Ist der Vertrag auf unbestimmte Zeit geschlossen, beträgt die Kündigungsfrist [[einen Monat|1 Monat|ein Monat]].',
      hints: ['Die Vertragspartner heißen nach ihrer Rolle beim Lagern.', 'Die Frist steht in § 473 HGB.'],
      solution: '**Lagerhalter** lagert und bewahrt auf, **Einlagerer** zahlt. Haftung für Verlust oder **Beschädigung** von der Übernahme bis zur **Auslieferung** (§ 475). Kündigungsfrist bei unbestimmter Dauer: **ein Monat** (§ 473).'
    },
    {
      id: 'lf09-lager-grundlagen-a4', type: 'mc', difficulty: 2, points: 2,
      q: 'Ein Lager für Ersatzteile mit 12.000 verschiedenen Artikeln und stark schwankenden Mengen soll neu organisiert werden. Welche Aussagen treffen zu? (Mehrfachauswahl)',
      options: [
        'Chaotische Lagerplatzvergabe nutzt die Fläche besser als feste Plätze.',
        'Chaotische Lagerplatzvergabe funktioniert nur mit einem zuverlässigen Lagerverwaltungssystem.',
        'Blocklagerung ist für viele verschiedene Artikel besonders gut geeignet.',
        'Bei festen Plätzen bleiben Plätze leer, wenn ein Artikel gerade nicht vorrätig ist.'
      ],
      correct: [0, 1, 3],
      hints: ['Bei der Blocklagerung erreicht man nur die vorderen Einheiten.', 'Wer weiß bei chaotischer Lagerung, wo was liegt?'],
      solution: 'Richtig sind **A, B und D**. Bei vielen Artikeln und schwankenden Mengen spart die chaotische Platzvergabe Fläche, setzt aber ein LVS voraus. Feste Plätze bleiben leer, wenn der Artikel fehlt. Blocklagerung (C) eignet sich für wenige Artikel in großen Mengen, weil man nicht an jede Einheit direkt herankommt.'
    },
    {
      id: 'lf09-lager-grundlagen-a5', type: 'order', difficulty: 1, points: 6,
      q: 'Bringe den Ablauf einer Lagerdienstleistung in die richtige Reihenfolge.',
      items: [
        'Warenannahme und Eingangskontrolle (Menge, äußerer Zustand, Papiere)',
        'Einlagerungsplatz zuweisen und Paletten im System buchen',
        'Gut lagern und in Obhut halten (Bestandsführung, Kontrollen)',
        'Auslagerungsauftrag des Einlagerers erhalten',
        'Ware auslagern bzw. kommissionieren und Bestand ausbuchen',
        'Auslieferung an den Empfänger und Abrechnung des Lagergeldes'
      ],
      hints: ['Die Haftung beginnt mit der Übernahme, deshalb steht die Kontrolle am Anfang.', 'Ohne Auftrag des Einlagerers wird nichts ausgelagert.'],
      solution: 'Annahme und Eingangskontrolle → Platz zuweisen und buchen → Lagern (Obhut) → Auslagerungsauftrag → Auslagern/Kommissionieren → Auslieferung und Abrechnung. Die Eingangskontrolle ist wichtig, weil der Lagerhalter ab der Übernahme haftet und bei erkennbaren Schäden Ansprüche gegen den Anlieferer sichern muss (§ 470 HGB).'
    },
    {
      id: 'lf09-lager-grundlagen-a6', type: 'calc', difficulty: 1, points: 4,
      q: `Die Saarlogistik GmbH rechnet mit der Bliesgau Feinkost GmbH für Oktober ab (Preise netto):

- Lagergeld: **6,80 €** je Palettenstellplatz und Monat, belegt: **140** Stellplätze
- Einlagerung: **2,40 €** je Palette, eingelagert: **60** Paletten
- Auslagerung: **2,40 €** je Palette, ausgelagert: **45** Paletten

Berechne die einzelnen Positionen und den Rechnungsbetrag netto.`,
      formula: 'Rechnungsbetrag = Stellplätze × Lagergeld + eingelagerte Paletten × Einlagerungsgebühr + ausgelagerte Paletten × Auslagerungsgebühr',
      fields: [
        { id: 'lg', label: 'Lagergeld', unit: '€', answer: 952, tol: 0.01 },
        { id: 'ein', label: 'Einlagerungsgebühr', unit: '€', answer: 144, tol: 0.01 },
        { id: 'aus', label: 'Auslagerungsgebühr', unit: '€', answer: 108, tol: 0.01 },
        { id: 'sum', label: 'Rechnungsbetrag netto', unit: '€', answer: 1204, tol: 0.01 }
      ],
      hints: ['Jede Position ist Menge × Preis.', 'Zum Schluss alle drei Positionen addieren.'],
      solution: `**Lagergeld:** 140 Stellplätze × 6,80 €/Stellplatz = **952,00 €**

**Einlagerung:** 60 Paletten × 2,40 €/Palette = **144,00 €**

**Auslagerung:** 45 Paletten × 2,40 €/Palette = **108,00 €**

**Rechnungsbetrag netto:** 952,00 € + 144,00 € + 108,00 € = **1.204,00 €** (zuzüglich Umsatzsteuer).`
    },
    {
      id: 'lf09-lager-grundlagen-a7', type: 'calc', difficulty: 3, points: 3,
      q: `Bei der Saarlogistik GmbH wird eine eingelagerte Palette (Rohgewicht **600 kg**, Warenwert **9.000 €**) durch einen Staplerfahrer leicht fahrlässig beschädigt; der Schaden beträgt 9.000 €. Die ADSp 2017 sind wirksam vereinbart, ein höherer Wert wurde nicht angegeben. Nimm an: **1 SZR = 1,20 €** (Beispielkurs, der tatsächliche Kurs schwankt täglich).

Berechne die Höchsthaftung nach Gewicht in SZR und in € sowie den Betrag, den die Saarlogistik ersetzen muss.`,
      formula: 'Haftung = min(Schaden; 8,33 SZR/kg × kg × Kurs; 35.000 €)',
      fields: [
        { id: 'szr', label: 'Höchsthaftung nach Gewicht in SZR', unit: 'SZR', answer: 4998, tol: 0.5 },
        { id: 'eur', label: 'Höchsthaftung nach Gewicht in €', unit: '€', answer: 5997.6, tol: 0.01 },
        { id: 'ers', label: 'Zu ersetzender Betrag', unit: '€', answer: 5997.6, tol: 0.01 }
      ],
      hints: ['8,33 SZR × 600 kg ergibt die Grenze in SZR.', 'Vergleiche drei Werte: Schaden, Gewichtsgrenze in €, 35.000 €. Der niedrigste gilt.'],
      solution: `**Grenze in SZR:** 8,33 SZR/kg × 600 kg = **4.998 SZR**

**Grenze in €:** 4.998 SZR × 1,20 €/SZR = **5.997,60 €**

**Vergleich:** Schaden 9.000 € > Gewichtsgrenze 5.997,60 €; die Grenze je Schadenfall von 35.000 € wird nicht erreicht. Es gilt der niedrigere Betrag.

**Ersatz:** **5.997,60 €**. Die Feinkost GmbH bleibt auf 3.002,40 € sitzen, sofern sie keine eigene Versicherung hat. Ohne ADSp müsste die Saarlogistik nach § 475 HGB die vollen 9.000 € ersetzen. Bei grober Fahrlässigkeit oder Vorsatz entfiele die Begrenzung (Ziffer 27 ADSp 2017).`
    },
    {
      id: 'lf09-lager-grundlagen-a8', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre, was „Haftung mit vermutetem Verschulden“ beim Lagerhalter (§ 475 HGB) bedeutet und warum das für den Einlagerer günstig ist.',
      model: 'Der Lagerhalter haftet für Verlust und Beschädigung des Gutes in der Zeit von der Übernahme bis zur Auslieferung. Sein Verschulden wird vermutet: Er wird nur frei, wenn er beweist, dass der Schaden auch mit der Sorgfalt eines ordentlichen Kaufmanns nicht abzuwenden war. Für den Einlagerer ist das günstig, weil er keinen Einblick in die Abläufe im Lager hat und deshalb ein Verschulden kaum beweisen könnte. Er muss nur zeigen, dass das Gut während der Obhut verloren ging oder beschädigt wurde.',
      criteria: [
        { text: 'nennt den Obhutszeitraum (Übernahme bis Auslieferung)', keywords: ['Übernahme|Obhut', 'Auslieferung'], points: 1 },
        { text: 'erklärt die Beweislast beim Lagerhalter / Sorgfalt eines ordentlichen Kaufmanns', keywords: ['beweis', 'Sorgfalt|ordentlich'], points: 1 },
        { text: 'begründet den Vorteil für den Einlagerer (kein Einblick ins Lager)', keywords: ['Einblick|nicht beweisen|kennt|Abläufe|schwer'], points: 1 }
      ],
      hints: ['Wer muss was beweisen?', 'Was weiß der Einlagerer über die Abläufe im fremden Lager?'],
      solution: 'Der Lagerhalter haftet während der Obhut (Übernahme bis Auslieferung) und muss sich **entlasten**, d. h. beweisen, dass der Schaden mit kaufmännischer Sorgfalt nicht vermeidbar war. Günstig für den Einlagerer, weil die **Beweislast umgekehrt** ist: Er kennt die internen Abläufe nicht und müsste sonst ein Verschulden nachweisen.'
    },
    {
      id: 'lf09-lager-grundlagen-a9', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Lagervertrag wurde auf unbestimmte Zeit geschlossen. Der Einlagerer will am 10. März seine gesamte Ware abholen. Was gilt nach § 473 HGB?',
      options: [
        'Er darf die Ware erst nach Ablauf einer Kündigungsfrist von drei Monaten abholen.',
        'Er kann die Ware jederzeit herausverlangen; der Vertrag selbst kann mit einer Frist von einem Monat gekündigt werden.',
        'Der Lagerhalter darf die Herausgabe verweigern, bis das Lagergeld für ein ganzes Jahr bezahlt ist.',
        'Ein Lagervertrag auf unbestimmte Zeit kann gar nicht gekündigt werden.'
      ],
      correct: [1],
      hints: ['Unterscheide zwischen Herausgabe des Gutes und Kündigung des Vertrags.', 'Die Frist beträgt einen Monat.'],
      solution: '**B.** Der Einlagerer kann das Gut jederzeit herausverlangen. Den Vertrag auf unbestimmte Zeit kann er mit einer Frist von **einem Monat** kündigen (bei wichtigem Grund fristlos). Bis dahin kann Lagergeld geschuldet sein. Wegen offener Forderungen hat der Lagerhalter ein Pfandrecht (§ 475b), aber kein Recht auf ein Jahreslagergeld.'
    },
    {
      id: 'lf09-lager-grundlagen-a10', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Eigenlager oder Fremdlager?',
      intro: `Die Bliesgau Feinkost GmbH überlegt, ob sie ihre Fertigwaren dauerhaft im eigenen Lager oder bei der Saarlogistik GmbH lagern soll (Beispielzahlen, monatlich):

- **Eigenlager:** fixe Kosten (Miete, Abschreibung Stapler und Regale, Lagerpersonal) **8.400 €**, variable Kosten **1,10 €** je Palette
- **Fremdlager:** **6,50 €** je Palette, alles inklusive

Im Durchschnitt lagern **1.200 Paletten**.`,
      hints: ['Stelle für beide Varianten eine Kostenfunktion auf.', 'An der kritischen Menge sind beide Kosten gleich hoch.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf09-lager-grundlagen-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die monatlichen Kosten beider Varianten bei 1.200 Paletten und den Kostenvorteil der günstigeren Variante.',
          formula: 'K(Eigen) = 8.400 € + 1,10 € × Menge; K(Fremd) = 6,50 € × Menge',
          fields: [
            { id: 'ke', label: 'Kosten Eigenlager', unit: '€', answer: 9720, tol: 0.01 },
            { id: 'kf', label: 'Kosten Fremdlager', unit: '€', answer: 7800, tol: 0.01 },
            { id: 'diff', label: 'Kostenvorteil der günstigeren Variante', unit: '€', answer: 1920, tol: 0.01 }
          ],
          hints: ['Eigenlager: 8.400 € + 1,10 € × 1.200.', 'Differenz = größere Kosten − kleinere Kosten.'],
          solution: `**Eigenlager:** 8.400 € + 1,10 € × 1.200 = 8.400 € + 1.320 € = **9.720 €**

**Fremdlager:** 6,50 € × 1.200 = **7.800 €**

**Vorteil Fremdlager:** 9.720 € − 7.800 € = **1.920 €** im Monat`
        },
        {
          id: 'lf09-lager-grundlagen-a10-2', type: 'calc', difficulty: 3, points: 2,
          q: 'Ab welcher durchschnittlichen Palettenzahl wäre das Eigenlager günstiger? Berechne die kritische Menge (auf zwei Nachkommastellen).',
          formula: 'kritische Menge = fixe Kosten Eigenlager ÷ (Preis Fremdlager − variable Kosten Eigenlager)',
          fields: [
            { id: 'km', label: 'Kritische Menge', unit: 'Paletten', answer: 1555.56, tol: 0.5 }
          ],
          hints: ['Setze beide Kostenfunktionen gleich: 8.400 + 1,10 x = 6,50 x.', '8.400 ÷ 5,40.'],
          solution: `8.400 € + 1,10 € × x = 6,50 € × x
8.400 € = 5,40 € × x
x = 8.400 € ÷ 5,40 € = **1.555,56 Paletten**

Ab durchschnittlich **1.556 Paletten** ist das Eigenlager günstiger, darunter das Fremdlager. Bei 1.200 Paletten ist das Fremdlager also die kostengünstigere Lösung.`
        },
        {
          id: 'lf09-lager-grundlagen-a10-3', type: 'mc', difficulty: 2, points: 3,
          q: 'Welche weiteren Überlegungen sind bei der Entscheidung für das Fremdlager richtig? (Mehrfachauswahl)',
          options: [
            'Beim Fremdlager werden fixe Kosten zu variablen Kosten; bei sinkenden Mengen sinken die Kosten mit.',
            'Die Feinkost GmbH sollte prüfen, ob die ADSp vereinbart werden und ob eine eigene Warenversicherung sinnvoll ist.',
            'Mit dem Fremdlager wird die Saarlogistik Eigentümerin der Konserven.',
            'Das Fremdlager bietet Know-how, z. B. FIFO-Steuerung über ein Lagerverwaltungssystem, schafft aber Abhängigkeit vom Dienstleister.'
          ],
          correct: [0, 1, 3],
          hints: ['Wie verhalten sich die Kosten beim Fremdlager, wenn weniger gelagert wird?', 'Eigentum und Besitz sind nicht dasselbe.'],
          solution: 'Richtig sind **A, B und D**. Beim Fremdlager zahlt man je Palette, die Kosten passen sich an die Menge an. Wegen der ADSp-Haftungsgrenzen (z. B. 8,33 SZR/kg) sollte der Einlagerer eine eigene Versicherung prüfen. Der Lagerhalter erhält nur den Besitz, nicht das Eigentum (C falsch). Qualitative Punkte wie Know-how und Abhängigkeit gehören in jede Make-or-buy-Entscheidung.'
        }
      ]
    },
    {
      id: 'lf09-lager-grundlagen-a11', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken zur Lagerorganisation.',
      text: 'Bei der [[Blocklagerung]] stehen die Paletten dicht an dicht ohne Gänge, deshalb wird meist nach dem Prinzip [[LIFO]] ausgelagert. Bei Lebensmitteln mit Mindesthaltbarkeitsdatum wird nach [[FIFO|FEFO]] ausgelagert. Ein Lager, in dem der nächste freie Platz vom System vergeben wird, arbeitet mit [[chaotischer|freier]] Lagerplatzvergabe.',
      hints: ['An welche Palette kommt man bei dicht gestapelten Paletten zuerst?', 'Bei verderblicher Ware soll die älteste Ware zuerst raus.'],
      solution: '**Blocklagerung** → meist **LIFO**, weil die zuletzt eingelagerten Paletten vorne stehen. Lebensmittel → **FIFO** (bzw. FEFO). Freie Platzvergabe durch das System = **chaotische** Lagerplatzvergabe.'
    },
    {
      id: 'lf09-lager-grundlagen-a12', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Feinkost GmbH möchte 300 eingelagerte Paletten an einen Großhändler verkaufen, ohne sie zu bewegen. Welches Papier ermöglicht das am besten?',
      options: [
        'Ein Lieferschein der Feinkost GmbH',
        'Ein vom Lagerhalter ausgestellter Orderlagerschein, der durch Indossament übertragen wird',
        'Die Rechnung über das Lagergeld',
        'Ein CMR-Frachtbrief'
      ],
      correct: [1],
      hints: ['Gesucht ist ein Wertpapier, das das Gut „vertritt“.', 'Denke an die Traditionswirkung.'],
      solution: '**B.** Der Orderlagerschein ist durch Indossament übertragbar. Seine Übergabe hat für den Erwerb von Rechten am Gut dieselbe Wirkung wie die Übergabe des Gutes (Traditionswirkung, § 475g HGB). Der Großhändler kann dann vom Lagerhalter die Auslieferung verlangen.'
    }
  ],
  quiz: ['lf09-lager-grundlagen-a1', 'lf09-lager-grundlagen-a2', 'lf09-lager-grundlagen-a6', 'lf09-lager-grundlagen-a9', 'lf09-lager-grundlagen-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 9, Inhalte: Lagerfunktionen, Lagerarten, Lagerorganisation, Lagervertrag, Haftung' },
    { title: 'Handelsgesetzbuch §§ 467–475h (Lagergeschäft)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__467.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 473 Dauer der Lagerung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__473.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 475 Haftung für Verlust oder Beschädigung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__475.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 475c Lagerschein', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__475c.html', asOf: '2026' },
    { title: 'Allgemeine Deutsche Spediteurbedingungen 2017 (ADSp 2017), Ziffern 24 und 27', publisher: 'Transport-Informations-Service (TIS) des GDV, Textfassung', url: 'https://www.tis-gdv.de/wp-content/uploads/tis/bedingungen/transportablauf_haftung/gesetze/adsp_agb.pdf', asOf: '2026' },
    { title: 'Lagerrecht nach HGB – Überblick Haftung', publisher: 'Transport-Informations-Service (TIS) des GDV', url: 'https://www.tis-gdv.de/wp-content/uploads/tis/bedingungen/transportablauf_haftung/gesetze/lagerrecht_hgb.pdf', asOf: '2026' }
  ],
  links: []
};
