export default {
  id: 'lf15-waehrung',
  area: 'LF15',
  topic: 'lf15-waehrung',
  title: 'Währungsrisiken: Wechselkurse und Kurssicherung',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Mengennotierung (Fremdwährung je 1 Euro) gilt im Euroraum seit 1999; die EZB veröffentlicht täglich Euro-Referenzkurse nur zur Information. Alle Kurse, Terminkurse und Optionsprämien in dieser Einheit sind Beispielwerte, keine aktuellen Marktkurse. Stand 2026.'
  },
  goals: [
    'Ich kann Mengen- und Preisnotierung unterscheiden und ineinander umrechnen.',
    'Ich kann erklären, wann der Geldkurs und wann der Briefkurs anzuwenden ist.',
    'Ich kann Fremdwährungsbeträge in Euro umrechnen und Angebote in verschiedenen Währungen vergleichen.',
    'Ich kann das Kursrisiko einer Fremdwährungsrechnung berechnen.',
    'Ich kann Devisentermingeschäft, Fakturierung in Euro, Währungsklausel und Devisenoption als Absicherung beurteilen.',
    'Ich kann die Wirkung einer Auf- oder Abwertung des Euro auf Export, Import und Sendungsaufkommen einer Spedition erklären.'
  ],
  simple: `# Worum geht es?

Eine Spedition im Saarland arbeitet mit Kunden und Partnern in Frankreich oder Luxemburg – dort gilt ebenfalls der Euro, es gibt **kein Währungsrisiko**. Sobald aber ein US-Agent in Dollar abrechnet oder ein britischer Kunde in Pfund zahlt, kommt der **Wechselkurs** ins Spiel.

# Wechselkurs in Mengennotierung

Im Euroraum werden Kurse als **Mengennotierung** angegeben: Wie viele Einheiten Fremdwährung bekommt man für **1 Euro**?

> Beispielwert: 1 EUR = 1,1650 USD

Umrechnung: **Euro-Betrag = Fremdwährungsbetrag ÷ Kurs**

# Geldkurs und Briefkurs

Banken nennen zwei Kurse. Merke dir: **Die Bank rechnet immer zu ihren Gunsten.**

- Die Spedition **kauft** Fremdwährung (sie muss z. B. eine Dollar-Rechnung bezahlen) → **Geldkurs** (der niedrigere Wert, man bekommt weniger Dollar je Euro).
- Die Spedition **verkauft** Fremdwährung (sie erhält z. B. Dollar von einem Kunden) → **Briefkurs** (der höhere Wert, man bekommt weniger Euro für die Dollar).

# Kursrisiko

Zwischen Rechnung und Zahlung liegen oft 30 bis 90 Tage. Ändert sich der Kurs in dieser Zeit, erhält oder zahlt die Spedition mehr oder weniger Euro als geplant. Absichern kann man sich z. B. durch ein **Devisentermingeschäft** (Kurs heute fest vereinbaren) oder durch eine **Rechnung in Euro**.`,
  deep: `# Mengen- und Preisnotierung

| Notierung | Aussage | Beispielwert |
|---|---|---|
| **Mengennotierung** | Fremdwährungseinheiten je 1 Euro | 1 EUR = 1,1650 USD |
| **Preisnotierung** | Euro je 1 Fremdwährungseinheit | 1 USD = 0,8584 EUR |

Die Preisnotierung ist der **Kehrwert** der Mengennotierung: 1 ÷ 1,1650 = 0,8584. Im Euroraum ist seit 1999 die Mengennotierung üblich. Die EZB veröffentlicht werktags gegen 16:00 Uhr MEZ **Euro-Referenzkurse** – ausdrücklich nur zur Information, nicht als Abrechnungskurse. Abgerechnet wird zu den Kursen der Bank.

# Geld- und Briefkurs bei Mengennotierung

Die Begriffe beziehen sich auf den **Euro** aus Sicht der Bank: Zum Geldkurs **kauft die Bank Euro** (und gibt dafür Fremdwährung ab), zum Briefkurs **verkauft die Bank Euro** (und nimmt Fremdwährung herein).

| Situation der Spedition | Kurs | Beispiel (Geld 1,1650 / Brief 1,1710) |
|---|---|---|
| zahlt eine Fremdwährungsrechnung (kauft Devisen) | **Geldkurs** | 18.400 USD ÷ 1,1650 = 15.793,99 € |
| erhält Fremdwährung von einem Kunden (verkauft Devisen) | **Briefkurs** | 25.000 USD ÷ 1,1710 = 21.349,27 € |

Kontrolle: Im ersten Fall muss die Spedition mehr Euro hergeben, im zweiten bekommt sie weniger Euro, als es der Mittelkurs ergeben würde. Die Differenz ist der Verdienst der Bank. **Devisen** sind Buchgeld in Fremdwährung (Überweisungen), **Sorten** sind Bargeld; für Sorten gelten eigene, ungünstigere Kurse.

# Kursrisiko bei Fremdwährungsrechnungen

- **Ausgangsrechnung in Fremdwährung** (Spedition erhält z. B. USD): Risiko, dass der **Euro steigt** (Kurs steigt von 1,15 auf 1,20) – dann sind die Dollar bei Zahlung weniger Euro wert.
- **Eingangsrechnung in Fremdwährung** (Spedition zahlt USD an einen Agenten): Risiko, dass der **Euro fällt** – dann kosten die Dollar mehr Euro.

**Kursverlust/-gewinn = Euro-Betrag bei Rechnungsstellung − Euro-Betrag bei Zahlung** (aus Sicht des Empfängers der Fremdwährung).

# Absicherungsmöglichkeiten

| Instrument | Funktionsweise | Vorteil | Nachteil |
|---|---|---|---|
| **Fakturierung in Euro** | Rechnung wird in Euro ausgestellt | kein eigenes Kursrisiko, keine Kosten | Risiko liegt beim Kunden; im Wettbewerb oft nicht durchsetzbar |
| **Devisentermingeschäft** | Vertrag mit der Bank: Betrag, Kurs und Termin werden heute festgelegt, Lieferung später | feste Kalkulationsgrundlage | Pflicht zur Erfüllung; Kurschancen entfallen |
| **Währungsklausel** | Vertragliche Anpassung des Preises, wenn sich der Kurs über eine Schwelle hinaus ändert; in der Seefracht z. B. als Währungszuschlag **CAF** | Risiko wird geteilt oder weitergegeben | muss ausgehandelt werden, Abrechnung aufwendiger |
| **Devisenoption** | Gegen Zahlung einer **Optionsprämie** erhält man das **Recht** (keine Pflicht), Devisen zu einem festen Basiskurs zu kaufen oder zu verkaufen | Schutz nach unten, Kurschance bleibt erhalten | Prämie muss immer bezahlt werden |

Weitere Möglichkeiten: Einnahmen und Ausgaben in derselben Währung gegenrechnen (Netting, z. B. USD-Erlöse aus Exporten nutzen, um USD-Rechnungen des US-Agenten zu bezahlen) oder ein Fremdwährungskonto führen.

**Terminkurs** = Kassakurs ± Swapsatz. Der Swapsatz ergibt sich aus dem Zinsunterschied der beiden Währungen; ein Aufschlag heißt **Report**, ein Abschlag **Deport**.

# Auf- und Abwertung des Euro

| | Aufwertung des Euro | Abwertung des Euro |
|---|---|---|
| Kurs in Mengennotierung | steigt (z. B. 1,10 → 1,20 USD) | sinkt (z. B. 1,20 → 1,10 USD) |
| Exporte aus dem Euroraum | werden für ausländische Käufer **teurer** → tendenziell weniger | werden **billiger** → tendenziell mehr |
| Importe in den Euroraum | werden **billiger** → tendenziell mehr | werden **teurer** → tendenziell weniger |
| Folge für die Spedition | weniger Exportsendungen, mehr Importsendungen; Dollar-Kosten (z. B. Seefracht in USD) sinken in Euro | mehr Exportsendungen, Dollar-Kosten steigen in Euro |

Die Einheiten „Zahlungssicherung im Außenhandel“ und „Incoterms® 2020“ ergänzen dieses Thema: Dort geht es um das **Zahlungsrisiko** (zahlt der Kunde überhaupt?), hier um das **Kursrisiko** (wie viel ist die Zahlung in Euro wert?).`,
  terms: [
    { term: 'Wechselkurs', def: 'Preis einer Währung, ausgedrückt in einer anderen Währung.' },
    { term: 'Mengennotierung', def: 'Angabe, wie viele Einheiten Fremdwährung man für 1 Euro erhält (z. B. 1 EUR = 1,1650 USD); im Euroraum üblich.' },
    { term: 'Preisnotierung', def: 'Angabe, wie viele Euro eine Einheit Fremdwährung kostet (z. B. 1 USD = 0,8584 EUR); Kehrwert der Mengennotierung.' },
    { term: 'Geldkurs', def: 'Kurs, zu dem die Bank Euro ankauft; bei Mengennotierung anzuwenden, wenn der Kunde Devisen kauft (Fremdwährungsrechnung bezahlt).' },
    { term: 'Briefkurs', def: 'Kurs, zu dem die Bank Euro verkauft; bei Mengennotierung anzuwenden, wenn der Kunde Devisen verkauft (Fremdwährungszahlung erhält).' },
    { term: 'Devisen', def: 'Buchgeld (Guthaben, Überweisungen, Schecks) in fremder Währung; im Gegensatz zu Sorten (Bargeld).' },
    { term: 'Kursrisiko', def: 'Gefahr, dass sich der Wechselkurs zwischen Vertragsabschluss und Zahlung ungünstig ändert und der Euro-Gegenwert sinkt bzw. steigt.' },
    { term: 'Devisentermingeschäft', def: 'Vereinbarung mit der Bank, einen Fremdwährungsbetrag zu einem späteren Termin zu einem heute festgelegten Terminkurs zu kaufen oder zu verkaufen; beide Seiten sind verpflichtet.' },
    { term: 'Devisenoption', def: 'Recht, aber keine Pflicht, Devisen zu einem vereinbarten Basiskurs zu kaufen oder zu verkaufen; dafür ist eine Optionsprämie zu zahlen.' },
    { term: 'Währungsklausel', def: 'Vertragsklausel, nach der sich der Preis bei Kursänderungen über eine vereinbarte Schwelle hinaus anpasst; in der Seefracht z. B. der Währungszuschlag CAF.' },
    { term: 'Aufwertung', def: 'Wertsteigerung einer Währung gegenüber anderen; beim Euro steigt der Kurs in Mengennotierung.' }
  ],
  example: `# Merzig Cargo GmbH – ein Monat mit Dollar-Geschäften (Beispielkurse)

Die Merzig Cargo GmbH organisiert Seefrachtsendungen zwischen dem Saarland und den USA. Die Hausbank nennt für EUR/USD **Geld 1,1650 / Brief 1,1710** (Beispielwerte).

1. **Eingangsrechnung**: Der Agent in Savannah stellt für Vorlauf, Hafengebühren und Zustellung **18.400 USD** in Rechnung. Merzig Cargo kauft Dollar → Geldkurs: 18.400 ÷ 1,1650 = **15.793,99 €**.
2. **Ausgangsrechnung**: Ein Kunde in Chicago zahlt für Exportsendungen **25.000 USD**. Merzig Cargo verkauft die Dollar → Briefkurs: 25.000 ÷ 1,1710 = **21.349,27 €**.
3. **Kursrisiko**: Eine weitere Rechnung über 40.000 USD ist erst in 60 Tagen fällig. Bei Rechnungsstellung (Brief 1,1500) wären das 34.782,61 €. Steigt der Euro bis zur Zahlung auf 1,2000, erhält die Spedition nur noch 33.333,33 € – ein **Kursverlust von 1.449,28 €**.
4. **Absicherung**: Die Geschäftsführung schließt künftig bei größeren Dollar-Forderungen ein **Devisentermingeschäft** ab und prüft, ob Stammkunden in den USA Rechnungen in Euro akzeptieren. Außerdem nutzt sie Dollar-Eingänge direkt, um Dollar-Rechnungen des Agenten zu bezahlen.`,
  rules: [
    'Mengennotierung: Euro-Betrag = Fremdwährungsbetrag ÷ Kurs.',
    'Preisnotierung = 1 ÷ Mengennotierung.',
    'Mengennotierung: Spedition kauft Devisen (zahlt) → Geldkurs; Spedition verkauft Devisen (erhält Zahlung) → Briefkurs. Die Bank rechnet immer zu ihren Gunsten.',
    'Wer Fremdwährung erhält, fürchtet einen steigenden Euro; wer Fremdwährung zahlen muss, fürchtet einen fallenden Euro.',
    'Devisentermingeschäft: Sicherheit, aber keine Kurschance; Devisenoption: Sicherheit und Kurschance, aber Prämie.',
    'Aufwertung des Euro verteuert Exporte und verbilligt Importe; Abwertung wirkt umgekehrt.',
    'Innerhalb des Euroraums gibt es kein Wechselkursrisiko.'
  ],
  summary: `- **Mengennotierung**: Fremdwährung je 1 Euro; **Preisnotierung** ist der Kehrwert.
- Umrechnung: **Euro = Fremdwährung ÷ Kurs**.
- **Geldkurs** (niedriger) beim Kauf von Devisen durch den Kunden, **Briefkurs** (höher) beim Verkauf von Devisen durch den Kunden.
- **Kursrisiko**: Differenz zwischen Euro-Gegenwert bei Rechnungsstellung und bei Zahlung.
- Absicherung: **Fakturierung in Euro**, **Devisentermingeschäft**, **Währungsklausel** (z. B. CAF), **Devisenoption**, Gegenrechnung gleicher Währungen.
- **Aufwertung** des Euro: Exporte teurer, Importe billiger; **Abwertung**: umgekehrt – mit Folgen für das Sendungsaufkommen.`,
  mistakes: [
    { wrong: 'Bei Mengennotierung rechnet man Euro = Fremdwährung × Kurs.', right: 'Man teilt: 18.400 USD ÷ 1,1650 = 15.793,99 €. Multipliziert wird nur, wenn man Euro in Fremdwährung umrechnet.' },
    { wrong: 'Wer eine Dollar-Rechnung bezahlt, rechnet mit dem Briefkurs.', right: 'Bei Mengennotierung gilt beim Kauf von Devisen der Geldkurs (der niedrigere Wert); so zahlt der Kunde mehr Euro – die Bank rechnet zu ihren Gunsten.' },
    { wrong: 'Ein steigender Kurs EUR/USD ist für einen Exporteur mit Dollar-Forderungen gut.', right: 'Steigt der Euro, sind die Dollar bei Zahlung weniger Euro wert – der Exporteur erleidet einen Kursverlust.' },
    { wrong: 'Bei einem Devisentermingeschäft kann man vom Vertrag zurücktreten, wenn der Kassakurs günstiger ist.', right: 'Das Termingeschäft muss erfüllt werden. Nur die Devisenoption gibt ein Wahlrecht – dafür kostet sie eine Prämie.' },
    { wrong: 'Eine Aufwertung des Euro erhöht die Exporte.', right: 'Eine Aufwertung macht Waren aus dem Euroraum für ausländische Käufer teurer; Exporte gehen tendenziell zurück.' }
  ],
  flashcards: [
    { q: 'Was gibt die Mengennotierung an?', a: 'Wie viele Einheiten Fremdwährung man für 1 Euro erhält, z. B. 1 EUR = 1,1650 USD.' },
    { q: 'Wie rechnet man einen USD-Betrag bei Mengennotierung in Euro um?', a: 'Euro = USD-Betrag ÷ Kurs.' },
    { q: 'Welcher Kurs gilt, wenn die Spedition eine USD-Rechnung bezahlt?', a: 'Der Geldkurs (Kauf von Devisen durch den Kunden, bei Mengennotierung der niedrigere Wert).' },
    { q: 'Welcher Kurs gilt, wenn die Spedition USD von einem Kunden erhält?', a: 'Der Briefkurs (Verkauf von Devisen durch den Kunden, bei Mengennotierung der höhere Wert).' },
    { q: 'Wie erhält man aus der Mengennotierung die Preisnotierung?', a: 'Durch den Kehrwert: 1 ÷ Mengennotierung.' },
    { q: 'Welche Kursentwicklung fürchtet ein Exporteur mit USD-Forderung?', a: 'Einen steigenden Euro (Kurs EUR/USD steigt).' },
    { q: 'Was ist ein Devisentermingeschäft?', a: 'Kauf oder Verkauf von Devisen zu einem heute festgelegten Kurs mit späterer Lieferung; beide Seiten sind verpflichtet.' },
    { q: 'Was unterscheidet die Devisenoption vom Termingeschäft?', a: 'Die Option ist ein Recht ohne Pflicht; die Kurschance bleibt erhalten, dafür ist eine Prämie zu zahlen.' },
    { q: 'Wie wirkt eine Abwertung des Euro auf Exporte?', a: 'Exporte werden für ausländische Käufer billiger und nehmen tendenziell zu.' },
    { q: 'Was bedeutet CAF in der Seefracht?', a: 'Currency Adjustment Factor: Währungszuschlag zum Ausgleich von Wechselkursschwankungen.' }
  ],
  tasks: [
    {
      id: 'lf15-waehrung-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Die Bank nennt den Kurs „EUR/USD 1,1650“ (Beispielwert). Was bedeutet diese Mengennotierung?',
      options: ['1 USD kostet 1,1650 EUR.', 'Für 1 EUR erhält man 1,1650 USD.', 'Für 1.000 EUR erhält man 1,1650 USD.', 'Der Kurs gilt nur für Bargeld (Sorten).'],
      correct: [1],
      hints: ['Mengennotierung: Menge an Fremdwährung je Einheit der eigenen Währung.', 'Die Bezugsgröße ist immer 1 Euro.'],
      solution: 'Bei der **Mengennotierung** gibt der Kurs an, wie viele Einheiten Fremdwährung man für **1 Euro** erhält: 1 EUR = 1,1650 USD. Die Aussage „1 USD kostet 1,1650 EUR“ wäre eine Preisnotierung (und hier falsch). Sorten haben eigene Kurse.'
    },
    {
      id: 'lf15-waehrung-a2', type: 'mc', difficulty: 2, points: 2,
      q: 'Die Hausbank nennt für EUR/USD **Geld 1,1650 / Brief 1,1710** (Beispielwerte). Welche Aussagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Bezahlt die Spedition eine USD-Rechnung ihres US-Agenten, rechnet die Bank mit 1,1650.',
        'Erhält die Spedition eine USD-Zahlung eines Kunden, rechnet die Bank mit 1,1710.',
        'Bezahlt die Spedition eine USD-Rechnung, rechnet die Bank mit 1,1710, weil sie Devisen verkauft.',
        'Der Unterschied zwischen beiden Kursen ist für die Spedition ohne Bedeutung.'
      ],
      correct: [0, 1],
      hints: ['Die Bank rechnet immer zu ihren Gunsten.', 'Teile denselben USD-Betrag durch beide Kurse: Wann muss die Spedition mehr Euro zahlen, wann bekommt sie weniger Euro?'],
      solution: 'Richtig sind A und B. Bei Mengennotierung kauft die Bank zum **Geldkurs** Euro und gibt Dollar ab – das ist der Fall, wenn die Spedition Dollar braucht (Zahlung an den Agenten). 1.000 USD ÷ 1,1650 = 858,37 € (mehr Euro als bei 1,1710). Erhält die Spedition Dollar, verkauft die Bank Euro zum **Briefkurs**: 1.000 USD ÷ 1,1710 = 853,97 € (weniger Euro). Die Spanne ist der Verdienst der Bank und mindert den Erlös bzw. erhöht die Kosten der Spedition.'
    },
    {
      id: 'lf15-waehrung-a3', type: 'calc', difficulty: 2, points: 2,
      q: 'Der US-Agent der Merzig Cargo GmbH berechnet für Hafenumschlag und Zustellung **18.400 USD**. Die Bank nennt Geld 1,1650 / Brief 1,1710 (Beispielwerte). Ermittle den maßgeblichen Kurs und den Euro-Betrag, den die Spedition aufwenden muss.',
      formula: 'Euro-Betrag = USD-Betrag ÷ Geldkurs',
      fields: [
        { id: 'kurs', label: 'Maßgeblicher Kurs', unit: 'USD je EUR', answer: 1.165, tol: 0.00005 },
        { id: 'eur', label: 'Euro-Betrag', unit: '€', answer: 15793.99, tol: 0.01 }
      ],
      hints: ['Die Spedition muss Dollar kaufen.', 'Kauf von Devisen bei Mengennotierung → Geldkurs; dann teilen.'],
      solution: `**Kurs:** Die Spedition kauft Devisen → **Geldkurs 1,1650 USD je EUR**.

**Formel:** Euro-Betrag = USD-Betrag ÷ Kurs

**Rechnung:** 18.400 USD ÷ 1,1650 USD/EUR = **15.793,99 €**

Probe: 15.793,99 € × 1,1650 = 18.399,999… ≈ 18.400 USD.`
    },
    {
      id: 'lf15-waehrung-a4', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Kunde in Chicago überweist der Merzig Cargo GmbH **25.000 USD** für Seefrachtexporte. Die Bank rechnet mit Geld 1,1650 / Brief 1,1710 (Beispielwerte) ab. Welcher Kurs gilt und welchen Betrag schreibt die Bank in Euro gut? Wie viel Euro „kostet“ die Kursspanne gegenüber dem Geldkurs?',
      formula: 'Euro-Gutschrift = USD-Betrag ÷ Briefkurs',
      fields: [
        { id: 'eur', label: 'Euro-Gutschrift', unit: '€', answer: 21349.27, tol: 0.01 },
        { id: 'diff', label: 'Unterschied zur Umrechnung mit dem Geldkurs', unit: '€', answer: 109.95, tol: 0.02 }
      ],
      hints: ['Die Spedition verkauft Dollar an die Bank → Briefkurs.', 'Rechne zum Vergleich auch 25.000 ÷ 1,1650 und bilde die Differenz.'],
      solution: `**Kurs:** Die Spedition verkauft Devisen → **Briefkurs 1,1710**.

**Euro-Gutschrift:** 25.000 USD ÷ 1,1710 = **21.349,27 €**

**Vergleich:** 25.000 USD ÷ 1,1650 = 21.459,23 €

**Unterschied:** 21.459,23 € − 21.349,27 € = **109,96 €** (je nach Rundung 109,95 bis 109,96 €; ungerundet 109,955…). Diesen Betrag behält die Bank als Spanne.`
    },
    {
      id: 'lf15-waehrung-a5', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Spedition holt für eine Luftfrachtsendung zwei Angebote für den Nachlauf ein: Agent A (USA) verlangt **2.950 USD**, Agent B (Großbritannien) **2.180 GBP**. Die Bank nennt die Geldkurse EUR/USD **1,1650** und EUR/GBP **0,8600** (Beispielwerte). Rechne beide Angebote in Euro um. Welches ist günstiger?',
      formula: 'Euro-Betrag = Fremdwährungsbetrag ÷ Geldkurs',
      fields: [
        { id: 'a', label: 'Angebot A in Euro', unit: '€', answer: 2532.19, tol: 0.01 },
        { id: 'b', label: 'Angebot B in Euro', unit: '€', answer: 2534.88, tol: 0.01 },
        { id: 'd', label: 'Preisvorteil des günstigeren Angebots', unit: '€', answer: 2.69, tol: 0.02 }
      ],
      hints: ['Die Spedition muss die Fremdwährung kaufen → Geldkurse.', 'Erst beide Beträge in Euro umrechnen, dann vergleichen.'],
      solution: `**Formel:** Euro = Fremdwährung ÷ Geldkurs

**Angebot A:** 2.950 USD ÷ 1,1650 = **2.532,19 €**

**Angebot B:** 2.180 GBP ÷ 0,8600 = **2.534,88 €**

**Vorteil A:** 2.534,88 € − 2.532,19 € = **2,69 €**

Angebot A ist geringfügig günstiger. Bei so kleinen Unterschieden entscheiden in der Praxis Qualität, Laufzeit und das Kursrisiko bis zur Zahlung (kleine Kursänderungen können das Ergebnis umkehren).`
    },
    {
      id: 'lf15-waehrung-a6', type: 'calc', difficulty: 1, points: 1,
      q: 'Rechne den Kurs EUR/USD **1,1650** (Mengennotierung, Beispielwert) in die Preisnotierung um (Euro je 1 USD, auf 4 Nachkommastellen).',
      formula: 'Preisnotierung = 1 ÷ Mengennotierung',
      fields: [
        { id: 'p', label: 'Preisnotierung', unit: 'EUR je USD', answer: 0.8584, tol: 0.0001 }
      ],
      hints: ['Die Preisnotierung ist der Kehrwert.', '1 geteilt durch 1,1650.'],
      solution: '**Formel:** Preisnotierung = 1 ÷ Mengennotierung\n\n1 ÷ 1,1650 = 0,858369… ≈ **0,8584 EUR je USD**. 1 US-Dollar kostet also rund 86 Cent.'
    },
    {
      id: 'lf15-waehrung-a7', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne jedem Absicherungsinstrument die passende Beschreibung zu.',
      pairs: [
        ['Fakturierung in Euro', 'Das Kursrisiko trägt vollständig der ausländische Vertragspartner.'],
        ['Devisentermingeschäft', 'Kurs, Betrag und Termin werden heute verbindlich mit der Bank festgelegt.'],
        ['Devisenoption', 'Recht ohne Pflicht zum Kauf oder Verkauf zum Basiskurs gegen Prämie.'],
        ['Währungsklausel', 'Der Preis wird angepasst, wenn der Kurs eine vereinbarte Schwelle überschreitet.']
      ],
      hints: ['Welches Instrument kostet eine Prämie?', 'Bei welchem Instrument muss gar nicht umgerechnet werden?'],
      solution: 'Bei **Fakturierung in Euro** rechnet die Spedition nicht um, der Kunde trägt das Risiko. Das **Devisentermingeschäft** verpflichtet beide Seiten zum festgelegten Terminkurs. Die **Devisenoption** ist ein Wahlrecht gegen Prämie. Die **Währungsklausel** (z. B. CAF in der Seefracht) passt den Preis vertraglich an.'
    },
    {
      id: 'lf15-waehrung-a8', type: 'cloze', difficulty: 2, points: 4,
      q: 'Ergänze die Lücken zur Wirkung von Wechselkursänderungen.',
      text: 'Steigt der Kurs EUR/USD von 1,10 auf 1,20, wird der Euro [[aufgewertet]]. Waren aus dem Euroraum werden für US-Käufer [[teurer]], die Exporte gehen tendenziell [[zurück]]. Importe aus den USA werden dagegen [[billiger|günstiger]].',
      hints: ['Für 1 Euro gibt es mehr Dollar – ist der Euro mehr oder weniger wert?', 'Ein US-Käufer muss für denselben Euro-Preis mehr Dollar bezahlen.'],
      solution: 'Steigt die Mengennotierung, ist der Euro mehr wert: **Aufwertung**. Ein US-Käufer braucht für eine Ware zu 1.000 € nun 1.200 statt 1.100 USD → Exporte werden **teurer** und gehen **zurück**. Umgekehrt kostet eine Ware zu 1.200 USD nur noch 1.000 € statt 1.090,91 € → Importe werden **billiger**. Für die Spedition: weniger Export-, mehr Importsendungen.'
    },
    {
      id: 'lf15-waehrung-a9', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe den Ablauf eines Devisentermingeschäfts für eine USD-Forderung der Spedition in die richtige Reihenfolge.',
      items: [
        'Die Spedition stellt dem US-Kunden 40.000 USD mit 60 Tagen Zahlungsziel in Rechnung.',
        'Die Spedition vereinbart mit der Bank den Verkauf von 40.000 USD zum Terminkurs, fällig in 60 Tagen.',
        'Die Spedition kalkuliert mit dem festen Euro-Betrag; Kursänderungen spielen keine Rolle mehr.',
        'Der US-Kunde überweist 40.000 USD am Fälligkeitstag.',
        'Die Bank übernimmt die 40.000 USD und schreibt den Euro-Betrag zum vereinbarten Terminkurs gut.'
      ],
      hints: ['Abgesichert wird gleich nach Entstehung der Forderung.', 'Die Bank kann erst abrechnen, wenn die Dollar da sind.'],
      solution: 'Rechnung (Forderung entsteht) → Termingeschäft abschließen → feste Kalkulationsgrundlage → Zahlungseingang in USD → Lieferung der USD an die Bank und Gutschrift zum Terminkurs. Der aktuelle Kassakurs am Fälligkeitstag ist für die Spedition ohne Bedeutung.'
    },
    {
      id: 'lf15-waehrung-a10', type: 'mc', difficulty: 3, points: 2,
      q: 'Der Euro hat gegenüber dem US-Dollar deutlich **abgewertet**. Welche Folgen sind für eine saarländische Spedition mit starkem USA-Geschäft zu erwarten? (Mehrfachauswahl)',
      options: [
        'Mehr Exportsendungen saarländischer Industriekunden in die USA',
        'In USD berechnete Seefrachtraten und Agentenrechnungen werden in Euro teurer',
        'Bereits bestehende USD-Forderungen der Spedition sind in Euro weniger wert',
        'Importsendungen aus den USA nehmen tendenziell stark zu'
      ],
      correct: [0, 1],
      hints: ['Abwertung: Für 1 Euro gibt es weniger Dollar.', 'Wer Dollar erhält, bekommt dafür nun mehr Euro.'],
      solution: 'Richtig sind A und B. Bei einer **Abwertung** des Euro werden Waren aus dem Euroraum für US-Käufer billiger → mehr Exporte (A). Kosten in USD kosten mehr Euro (B). C ist falsch: USD-Forderungen sind nun **mehr** Euro wert (Kursgewinn). D ist falsch: Importe aus den USA werden teurer und gehen tendenziell zurück.'
    },
    {
      id: 'lf15-waehrung-a11', type: 'text', difficulty: 3, points: 4,
      q: 'Die Geschäftsführerin fragt, ob für eine USD-Forderung ein Devisentermingeschäft oder eine Devisenoption besser geeignet ist. Vergleiche beide Instrumente anhand von **Kosten, Pflicht/Recht und Kurschance** und gib eine begründete Empfehlung für eine Situation, in der die Spedition mit dem Betrag fest kalkulieren muss.',
      model: 'Beim Devisentermingeschäft werden Kurs, Betrag und Termin fest vereinbart; beide Seiten sind verpflichtet. Es fällt keine Prämie an (die Kosten stecken im Terminkurs), aber eine günstige Kursentwicklung kann nicht genutzt werden. Die Devisenoption gibt das Recht, aber keine Pflicht, zum Basiskurs zu verkaufen. Steigt der Euro, übt man aus; fällt er, verkauft man günstiger am Markt. Dafür muss immer eine Optionsprämie bezahlt werden. Wenn die Spedition fest kalkulieren muss und keine Prämie zahlen will, ist das Devisentermingeschäft geeignet, weil der Euro-Betrag von Anfang an feststeht.',
      criteria: [
        { text: 'Termingeschäft: Pflicht/feste Vereinbarung', keywords: ['Pflicht|verpflichtet|verbindlich|fest'], points: 1 },
        { text: 'Option: Recht ohne Pflicht', keywords: ['Recht'], points: 1 },
        { text: 'Kosten: Optionsprämie', keywords: ['Prämie'], points: 1 },
        { text: 'Kurschance und begründete Empfehlung', keywords: ['Kurschance|günstige Kursentwicklung|Chance', 'Empfehl|geeignet|besser'], points: 1 }
      ],
      hints: ['Welches Instrument kostet in jedem Fall Geld?', 'Bei welchem Instrument profitiert man noch von einer günstigen Kursentwicklung?'],
      solution: 'Das **Devisentermingeschäft** ist verbindlich (Pflicht beider Seiten), ohne gesonderte Prämie, aber ohne Kurschance. Die **Devisenoption** ist ein Recht ohne Pflicht; sie sichert nach unten ab und erhält die Kurschance, kostet aber eine **Prämie**, auch wenn sie verfällt. Muss die Spedition fest kalkulieren, ist das **Termingeschäft** meist die geeignete und günstigere Lösung.'
    },
    {
      id: 'lf15-waehrung-a12', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Kursrisiko bei einer Seefracht-Ausgangsrechnung',
      intro: `Die Merzig Cargo GmbH stellt einem Importeur in Baltimore für den Seetransport von Maschinenteilen **40.000 USD** in Rechnung, Zahlungsziel 60 Tage. Folgende Werte sind **Beispielwerte**:

| Zeitpunkt | Kurs EUR/USD (Brief) |
|---|---|
| bei Rechnungsstellung (Kassa) | 1,1500 |
| Terminkurs für 60 Tage | 1,1600 |
| bei Zahlungseingang (Kassa) | 1,2000 |

Alternativ bietet die Bank eine Devisenoption zum Verkauf von 40.000 USD zum Basiskurs 1,1600 an; die Optionsprämie beträgt 500 €.`,
      hints: ['Die Spedition erhält Dollar → sie verkauft Devisen.', 'Euro = USD ÷ Kurs; vergleiche immer mit dem ungesicherten Ergebnis.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf15-waehrung-a12-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne den Euro-Betrag bei Rechnungsstellung, den tatsächlichen Euro-Erlös ohne Kurssicherung und den Kursverlust.',
          formula: 'Kursverlust = USD ÷ Kurs bei Rechnung − USD ÷ Kurs bei Zahlung',
          fields: [
            { id: 'plan', label: 'Euro-Betrag bei Rechnungsstellung', unit: '€', answer: 34782.61, tol: 0.01 },
            { id: 'ist', label: 'Euro-Erlös bei Zahlung ohne Sicherung', unit: '€', answer: 33333.33, tol: 0.01 },
            { id: 'verlust', label: 'Kursverlust', unit: '€', answer: 1449.28, tol: 0.02 }
          ],
          hints: ['Teile 40.000 USD durch 1,1500 und durch 1,2000.', 'Der Euro ist gestiegen – für dieselben Dollar gibt es weniger Euro.'],
          solution: `**Bei Rechnungsstellung:** 40.000 USD ÷ 1,1500 = **34.782,61 €**

**Bei Zahlung (ungesichert):** 40.000 USD ÷ 1,2000 = **33.333,33 €**

**Kursverlust:** 34.782,61 € − 33.333,33 € = **1.449,28 €**

Ursache: Der Euro wurde gegenüber dem Dollar aufgewertet (1,15 → 1,20).`
        },
        {
          id: 'lf15-waehrung-a12-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Die Spedition hätte bei Rechnungsstellung ein Devisentermingeschäft zu 1,1600 abschließen können. Berechne den Euro-Erlös mit Termingeschäft, den Vorteil gegenüber dem ungesicherten Erlös und den Euro-Erlös bei Ausübung der Devisenoption nach Abzug der Prämie.',
          formula: 'Erlös Termingeschäft = USD ÷ Terminkurs; Erlös Option = USD ÷ Basiskurs − Prämie',
          fields: [
            { id: 'termin', label: 'Euro-Erlös mit Termingeschäft', unit: '€', answer: 34482.76, tol: 0.01 },
            { id: 'vorteil', label: 'Vorteil gegenüber ungesichert', unit: '€', answer: 1149.43, tol: 0.02 },
            { id: 'option', label: 'Euro-Erlös mit Option nach Prämie', unit: '€', answer: 33982.76, tol: 0.02 }
          ],
          hints: ['40.000 ÷ 1,1600 ergibt den Termin-Erlös.', 'Bei 1,2000 lohnt sich die Ausübung der Option, weil 1,1600 mehr Euro bringt. Die Prämie wird abgezogen.'],
          solution: `**Termingeschäft:** 40.000 USD ÷ 1,1600 = **34.482,76 €**

**Vorteil:** 34.482,76 € − 33.333,33 € = **1.149,43 €**

**Option:** Kassakurs 1,2000 ist ungünstiger als der Basiskurs 1,1600 → Ausübung. 40.000 USD ÷ 1,1600 = 34.482,76 €; abzüglich Prämie 500 € = **33.982,76 €**

Hier ist das Termingeschäft besser als die Option, weil die Prämie entfällt. Wäre der Euro dagegen auf 1,1000 gefallen, hätte die Option ungenutzt verfallen können: 40.000 ÷ 1,1000 = 36.363,64 € − 500 € = 35.863,64 € – mehr als die 34.482,76 € aus dem Termingeschäft.`
        },
        {
          id: 'lf15-waehrung-a12-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche weiteren Maßnahmen verringern das Kursrisiko der Merzig Cargo GmbH bei künftigen USA-Geschäften? (Mehrfachauswahl)',
          options: [
            'Rechnungen an den Importeur in Euro ausstellen, sofern er zustimmt',
            'USD-Eingänge verwenden, um USD-Rechnungen des Agenten in Baltimore zu bezahlen',
            'Das Zahlungsziel auf 120 Tage verlängern',
            'Ein Dokumentenakkreditiv vereinbaren, weil es das Kursrisiko vollständig ausschließt'
          ],
          correct: [0, 1],
          hints: ['Welche Maßnahme vermeidet das Umtauschen von Währungen?', 'Ein Akkreditiv sichert, dass gezahlt wird – aber in welcher Währung?'],
          solution: 'Richtig sind A und B. **Fakturierung in Euro** verlagert das Risiko auf den Kunden; die **Gegenrechnung** von USD-Einnahmen und USD-Ausgaben vermeidet Umtausch. C verlängert den Zeitraum und erhöht das Risiko. D: Ein Akkreditiv sichert das **Zahlungsrisiko** ab (siehe Einheit „Zahlungssicherung im Außenhandel“), lautet es auf USD, bleibt das Kursrisiko bestehen.'
        }
      ]
    }
  ],
  quiz: ['lf15-waehrung-a2', 'lf15-waehrung-a3', 'lf15-waehrung-a7', 'lf15-waehrung-a10', 'lf15-waehrung-a12'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 15, Inhalte: Währungsrisiken, Kurssicherung, außenwirtschaftliche Rahmenbedingungen' },
    { title: 'Euro foreign exchange reference rates', publisher: 'Europäische Zentralbank (EZB)', url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', asOf: '2026' },
    { title: 'Geld und Geldpolitik, Kapitel 7: Internationales Währungs- und Finanzsystem', publisher: 'Deutsche Bundesbank', url: 'https://www.hochschule-bundesbank.de/resource/blob/892602/6989ad7e0fc219f0c278bd3d22945622/mL/geld-und-geldpolitik-kapitel7-data.pdf', asOf: '2026' }
  ],
  links: ['lf10-zahlungssicherung', 'lf10-incoterms', 'lf10-container', 'wiso-wirtschaftspolitik']
};
