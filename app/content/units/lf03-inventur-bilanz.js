export default {
  id: 'lf03-inventur-bilanz',
  area: 'LF03',
  topic: 'lf03-inventur',
  title: 'Inventur, Inventar und Bilanz',
  status: 'vollstaendig',
  minutes: 30,
  validity: {
    asOf: '2026',
    note: 'Inventur- und Bilanzpflicht nach §§ 240–242 HGB, Inventurvereinfachungen nach § 241 HGB, Gliederung der Bilanz nach § 266 HGB, Aufbewahrung von Inventaren und Bilanzen 10 Jahre (§ 257 HGB), Stand 2026'
  },
  goals: [
    'Ich kann erklären, warum eine Spedition jährlich eine Inventur durchführen muss.',
    'Ich kann Stichtagsinventur, verlegte Inventur und permanente Inventur unterscheiden.',
    'Ich kann ein Inventar in Vermögen, Schulden und Reinvermögen gliedern.',
    'Ich kann aus einem Inventar eine Bilanz mit Aktiva und Passiva aufstellen.',
    'Ich kann Vermögensposten einer Spedition dem Anlage- oder Umlaufvermögen zuordnen.',
    'Ich kann Eigen- und Fremdkapital unterscheiden und das Eigenkapital berechnen.'
  ],
  simple: `# Worum geht es?

Jeder Kaufmann muss wissen, **was er besitzt** und **was er schuldet**. Dazu zählt er einmal im Jahr alles: Das nennt man **Inventur**.

1. **Inventur** = die Tätigkeit: zählen, messen, wiegen, Kontoauszüge und offene Rechnungen prüfen.
2. **Inventar** = das Ergebnis: ein ausführliches Verzeichnis aller Vermögensteile und Schulden mit Mengen und Werten.
3. **Bilanz** = die kurze Zusammenfassung des Inventars in Kontoform: links die **Aktiva** (Vermögen), rechts die **Passiva** (Kapital).

# Die Grundgleichung

**Vermögen − Schulden = Reinvermögen (Eigenkapital)**

In der Bilanz heißt das: **Aktiva = Passiva**, also Vermögen = Eigenkapital + Fremdkapital. Beide Seiten sind immer gleich groß.

# Was hat eine Spedition?

- **Anlagevermögen** (bleibt lange im Betrieb): Lagerhalle, Lkw und Sattelzugmaschinen, Wechselbrücken, Gabelstapler, Büroausstattung
- **Umlaufvermögen** (verändert sich ständig): Dieselvorrat, Forderungen gegenüber Versendern, Bankguthaben, Kasse
- **Schulden (Fremdkapital)**: Darlehen bei der Bank, Verbindlichkeiten gegenüber Frachtführern und Lieferanten`,
  deep: `# Rechtliche Grundlage

Nach **§ 240 HGB** muss jeder Kaufmann bei Gründung und danach für den Schluss jedes Geschäftsjahres ein Inventar aufstellen. Das Geschäftsjahr darf höchstens zwölf Monate dauern. Aus dem Inventar wird nach **§ 242 HGB** die Bilanz entwickelt. Inventare und Bilanzen sind **10 Jahre** aufzubewahren (§ 257 HGB).

# Arten der Inventur

| Art | Zeitpunkt | Besonderheit |
|---|---|---|
| **Stichtagsinventur** | am Bilanzstichtag oder zeitnah (in der Praxis etwa 10 Tage vor oder nach dem Stichtag) | Bestände werden körperlich aufgenommen; Bewegungen zwischen Aufnahmetag und Stichtag werden fortgeschrieben bzw. zurückgerechnet |
| **Verlegte Inventur** | innerhalb von 3 Monaten vor bis 2 Monaten nach dem Stichtag (§ 241 Abs. 3 HGB) | Der aufgenommene Bestand wird **wertmäßig** auf den Stichtag fortgeschrieben oder zurückgerechnet |
| **Permanente Inventur** | laufend während des Jahres (§ 241 Abs. 2 HGB) | Bestände ergeben sich aus der Lagerbuchführung (Lagerverwaltungssystem); jeder Artikel muss **mindestens einmal im Jahr** körperlich geprüft werden |

Außerdem unterscheidet man:
- **Körperliche Inventur**: Zählen, Messen, Wiegen – z. B. Lkw, Wechselbrücken, Paletten, Diesel im Tank.
- **Buchinventur**: Aufnahme anhand von Unterlagen – z. B. Bankguthaben laut Kontoauszug, Forderungen und Verbindlichkeiten laut offener Postenliste, Darlehen laut Bankbestätigung.

Für große Bestände ist auch eine **Stichprobeninventur** mit anerkannten mathematisch-statistischen Verfahren zulässig (§ 241 Abs. 1 HGB).

> Wichtig für Speditionen mit Lager: Eingelagerte Güter der Kunden gehören **nicht** zum Vermögen der Spedition. Sie werden zwar oft mitgezählt (Kontrolle für den Einlagerer), erscheinen aber nicht im Inventar der Spedition.

# Aufbau des Inventars

**A. Vermögen**
- I. Anlagevermögen (geordnet nach zunehmender Liquidität: Grundstücke und Gebäude, Fuhrpark, Betriebs- und Geschäftsausstattung)
- II. Umlaufvermögen (Vorräte, Forderungen, Bank, Kasse)

**B. Schulden**
- I. Langfristige Schulden (Darlehensschulden)
- II. Kurzfristige Schulden (Verbindlichkeiten a. LL, sonstige Verbindlichkeiten)

**C. Ermittlung des Reinvermögens**: Summe Vermögen − Summe Schulden = Reinvermögen

# Aufbau der Bilanz

| Aktiva (Mittelverwendung) | Passiva (Mittelherkunft) |
|---|---|
| I. Anlagevermögen | I. Eigenkapital |
| II. Umlaufvermögen | II. Fremdkapital (lang- und kurzfristig) |
| **Bilanzsumme** | **Bilanzsumme** |

- **Aktivseite**: zeigt, *wofür* das Kapital verwendet wurde. Geordnet nach **Liquidität** (vom am schwersten zu Geld zu machenden Posten zum flüssigsten).
- **Passivseite**: zeigt, *woher* das Kapital stammt. Geordnet nach **Fälligkeit** (Eigenkapital zuerst, dann langfristiges und kurzfristiges Fremdkapital).

# Unterschiede Inventar – Bilanz

| Inventar | Bilanz |
|---|---|
| ausführlich, mit Mengen, Einzelwerten | kurz, nur Gesamtwerte je Posten |
| Staffelform (untereinander) | Kontoform (T-Form, nebeneinander) |
| Grundlage | wird aus dem Inventar abgeleitet |
| muss nicht unterschrieben werden | ist vom Kaufmann zu unterzeichnen (§ 245 HGB) |

# Kennzahl als Ausblick

Die **Eigenkapitalquote** = Eigenkapital ÷ Bilanzsumme × 100 zeigt, wie unabhängig ein Betrieb von Kreditgebern ist. Speditionen mit großem eigenem Fuhrpark finanzieren diesen oft über Darlehen oder Leasing.

# Erfolgsermittlung durch Eigenkapitalvergleich

Vergleicht man das Eigenkapital zweier Stichtage, erhält man den Erfolg:

**Gewinn = Eigenkapital Ende − Eigenkapital Anfang + Privatentnahmen − Privateinlagen**

Entnahmen werden hinzugerechnet, weil sie das Eigenkapital gemindert haben, ohne dass ein Verlust entstanden ist; Einlagen werden abgezogen, weil sie das Eigenkapital erhöht haben, ohne Gewinn zu sein.`,
  terms: [
    { term: 'Inventur', def: 'Mengen- und wertmäßige Bestandsaufnahme aller Vermögensteile und Schulden zu einem bestimmten Zeitpunkt (Tätigkeit).' },
    { term: 'Inventar', def: 'Ausführliches Bestandsverzeichnis als Ergebnis der Inventur, gegliedert in Vermögen, Schulden und Reinvermögen (§ 240 HGB).' },
    { term: 'Bilanz', def: 'Kurzgefasste Gegenüberstellung von Vermögen (Aktiva) und Kapital (Passiva) in Kontoform zum Bilanzstichtag (§ 242 HGB).' },
    { term: 'Anlagevermögen', def: 'Vermögensteile, die dem Betrieb dauerhaft dienen, z. B. Lagerhalle, Lkw, Wechselbrücken, Gabelstapler.' },
    { term: 'Umlaufvermögen', def: 'Vermögensteile, die sich durch die laufende Geschäftstätigkeit ständig verändern, z. B. Dieselvorrat, Forderungen, Bank, Kasse.' },
    { term: 'Eigenkapital (Reinvermögen)', def: 'Vom Eigentümer zur Verfügung gestelltes Kapital; rechnerisch Vermögen minus Schulden.' },
    { term: 'Fremdkapital', def: 'Schulden des Unternehmens gegenüber Dritten, z. B. Darlehensschulden und Verbindlichkeiten a. LL gegenüber Frachtführern.' },
    { term: 'Forderungen a. LL', def: 'Noch nicht bezahlte Rechnungen der Spedition an ihre Kunden (Versender) aus Lieferungen und Leistungen.' },
    { term: 'Verbindlichkeiten a. LL', def: 'Noch nicht bezahlte Rechnungen, die die Spedition von Lieferanten oder Frachtführern erhalten hat.' },
    { term: 'Permanente Inventur', def: 'Bestände werden laufend über die Lagerbuchführung ermittelt; jeder Artikel wird mindestens einmal jährlich körperlich überprüft (§ 241 Abs. 2 HGB).' },
    { term: 'Verlegte Inventur', def: 'Körperliche Aufnahme bis zu 3 Monate vor oder 2 Monate nach dem Stichtag mit wertmäßiger Fortschreibung bzw. Rückrechnung (§ 241 Abs. 3 HGB).' }
  ],
  example: `# Saar-Trans Spedition GmbH, Saarbrücken – Inventar zum 31.12.2025 (Beispielzahlen)

**A. Vermögen**

| Posten | € |
|---|---:|
| Grundstück mit Lagerhalle | 850.000 |
| Fuhrpark: 6 Sattelzugmaschinen | 420.000 |
| Fuhrpark: 12 Wechselbrücken | 96.000 |
| Betriebs- und Geschäftsausstattung (Stapler, Regale, Büro) | 54.000 |
| **Summe Anlagevermögen** | **1.420.000** |
| Dieselvorrat (Betriebstankstelle) | 8.500 |
| Forderungen a. LL gegenüber Versendern (laut OP-Liste) | 186.400 |
| Bankguthaben | 72.300 |
| Kasse | 1.800 |
| **Summe Umlaufvermögen** | **269.000** |
| **Summe Vermögen** | **1.689.000** |

**B. Schulden**

| Posten | € |
|---|---:|
| Darlehensschulden (Sparkasse Saarbrücken, langfristig) | 780.000 |
| Verbindlichkeiten a. LL gegenüber Frachtführern | 143.500 |
| sonstige Verbindlichkeiten (Finanzamt) | 15.500 |
| **Summe Schulden** | **939.000** |

**C. Reinvermögen**: 1.689.000 € − 939.000 € = **750.000 €**

# Daraus entsteht die Bilanz

| Aktiva | € | Passiva | € |
|---|---:|---|---:|
| Grundstück/Lagerhalle | 850.000 | Eigenkapital | 750.000 |
| Fuhrpark | 516.000 | Darlehensschulden | 780.000 |
| Betriebs- und Geschäftsausstattung | 54.000 | Verbindlichkeiten a. LL | 143.500 |
| Dieselvorrat | 8.500 | sonstige Verbindlichkeiten | 15.500 |
| Forderungen a. LL | 186.400 | | |
| Bank | 72.300 | | |
| Kasse | 1.800 | | |
| **Summe** | **1.689.000** | **Summe** | **1.689.000** |

Die im Lager eingelagerten Waren der Kunden (z. B. 400 Paletten Getränke eines Saarbrücker Getränkehändlers) gehören **nicht** in dieses Inventar, weil sie der Spedition nicht gehören.`,
  rules: [
    'Inventur ist die Tätigkeit, Inventar das Verzeichnis, Bilanz die Kurzfassung in Kontoform.',
    'Vermögen − Schulden = Reinvermögen = Eigenkapital.',
    'Aktiva = Passiva: Die Bilanz ist immer ausgeglichen.',
    'Aktivseite nach Liquidität ordnen (Anlagevermögen vor Umlaufvermögen), Passivseite nach Fälligkeit (Eigenkapital vor Fremdkapital).',
    'Fremdes Eigentum (eingelagerte Kundengüter) gehört nicht ins Inventar der Spedition.',
    'Forderungen = Kunden schulden uns Geld (Vermögen); Verbindlichkeiten = wir schulden anderen Geld (Fremdkapital).'
  ],
  summary: `- **Inventur** (Bestandsaufnahme) → **Inventar** (ausführliches Verzeichnis) → **Bilanz** (Kurzfassung).
- Inventurarten: **Stichtagsinventur** (am/um den Stichtag), **verlegte Inventur** (3 Monate vor bis 2 Monate nach dem Stichtag), **permanente Inventur** (laufend über Lagerbuchführung, mindestens einmal jährlich körperlich).
- Inventar: **Vermögen − Schulden = Reinvermögen**.
- Bilanz: **Aktiva** (Anlage- und Umlaufvermögen) = **Passiva** (Eigen- und Fremdkapital).
- Typisches Anlagevermögen einer Spedition: Lagerhalle, Lkw, Wechselbrücken; typisches Umlaufvermögen: Forderungen gegenüber Versendern, Bank, Kasse.`,
  mistakes: [
    { wrong: 'Inventur und Inventar sind dasselbe.', right: 'Die Inventur ist die Tätigkeit (Zählen, Prüfen), das Inventar ist das schriftliche Ergebnis.' },
    { wrong: 'Die eingelagerten Paletten unserer Kunden zählen zum Umlaufvermögen der Spedition.', right: 'Kundengüter sind fremdes Eigentum und gehören nicht in Inventar und Bilanz der Spedition.' },
    { wrong: 'Verbindlichkeiten gegenüber Frachtführern stehen auf der Aktivseite.', right: 'Verbindlichkeiten sind Schulden und stehen als Fremdkapital auf der Passivseite.' },
    { wrong: 'Ein Lkw gehört zum Umlaufvermögen, weil er ständig unterwegs ist.', right: 'Der Lkw dient dem Betrieb dauerhaft und ist daher Anlagevermögen. „Umlauf“ bezieht sich auf die Vermögensart, nicht auf Bewegung.' },
    { wrong: 'Bei der permanenten Inventur muss nie gezählt werden.', right: 'Auch bei der permanenten Inventur muss jeder Bestand mindestens einmal im Geschäftsjahr körperlich überprüft werden.' }
  ],
  flashcards: [
    { q: 'Was ist der Unterschied zwischen Inventur und Inventar?', a: 'Inventur = Tätigkeit der Bestandsaufnahme; Inventar = ausführliches Bestandsverzeichnis als Ergebnis.' },
    { q: 'Wie berechnet man das Reinvermögen?', a: 'Summe Vermögen − Summe Schulden.' },
    { q: 'In welchem Zeitraum ist die verlegte Inventur zulässig?', a: 'Bis zu 3 Monate vor oder 2 Monate nach dem Bilanzstichtag (§ 241 Abs. 3 HGB).' },
    { q: 'Was muss bei der permanenten Inventur mindestens einmal jährlich geschehen?', a: 'Jeder Bestand muss körperlich überprüft (gezählt) werden.' },
    { q: 'Wonach ist die Aktivseite der Bilanz geordnet?', a: 'Nach Liquidität: zuerst Anlagevermögen, dann Umlaufvermögen; innerhalb von schwer zu flüssig.' },
    { q: 'Wonach ist die Passivseite der Bilanz geordnet?', a: 'Nach Fälligkeit: Eigenkapital, dann langfristiges, dann kurzfristiges Fremdkapital.' },
    { q: 'Gehören Wechselbrücken zum Anlage- oder Umlaufvermögen?', a: 'Zum Anlagevermögen, weil sie dem Betrieb dauerhaft dienen.' },
    { q: 'Was zeigt die Passivseite der Bilanz?', a: 'Die Mittelherkunft: woher das Kapital stammt (Eigen- und Fremdkapital).' },
    { q: 'Was ist eine Buchinventur? Beispiel?', a: 'Bestandsaufnahme anhand von Belegen und Unterlagen, z. B. Bankguthaben laut Kontoauszug, Forderungen laut offener Postenliste.' },
    { q: 'Wie lange sind Inventare und Bilanzen aufzubewahren?', a: '10 Jahre (§ 257 HGB, Stand 2026).' }
  ],
  tasks: [
    {
      id: 'lf03-inventur-bilanz-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Die Saar-Trans Spedition GmbH zählt am 31.12. alle Paletten, Gitterboxen und den Dieselvorrat in der Betriebstankstelle. Um welche Inventurart handelt es sich?',
      options: ['Permanente Inventur', 'Stichtagsinventur', 'Verlegte Inventur', 'Buchinventur'],
      correct: [1],
      hints: ['Achte auf das Datum der Zählung.', 'Der 31.12. ist der Bilanzstichtag.'],
      solution: '**Stichtagsinventur**: Die körperliche Bestandsaufnahme erfolgt am Bilanzstichtag (31.12.). Bei der verlegten Inventur läge der Termin Monate vor oder nach dem Stichtag, bei der permanenten Inventur würde laufend über die Lagerbuchführung gezählt. Eine Buchinventur wäre eine Aufnahme anhand von Belegen, hier wird aber körperlich gezählt.'
    },
    {
      id: 'lf03-inventur-bilanz-a2', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Posten gehören bei einer Spedition zum **Anlagevermögen**? (Mehrfachauswahl)',
      options: ['Lagerhalle', 'Sattelzugmaschine', 'Forderungen gegenüber Versendern', 'Wechselbrücken', 'Bankguthaben', 'Dieselvorrat'],
      correct: [0, 1, 3],
      hints: ['Anlagevermögen dient dem Betrieb dauerhaft.', 'Forderungen, Bank und Vorräte verändern sich ständig durch das Tagesgeschäft.'],
      solution: 'Anlagevermögen: **Lagerhalle, Sattelzugmaschine, Wechselbrücken** – sie werden über mehrere Jahre genutzt. Forderungen, Bankguthaben und Dieselvorrat sind **Umlaufvermögen**: Sie werden laufend umgesetzt (Forderungen werden bezahlt, Diesel wird verbraucht).'
    },
    {
      id: 'lf03-inventur-bilanz-a3', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Die Bestandsaufnahme heißt [[Inventur]], ihr Ergebnis ist das [[Inventar]]. Vermögen minus Schulden ergibt das [[Reinvermögen|Eigenkapital]]. In der Bilanz stehen links die [[Aktiva]] und rechts die Passiva.',
      hints: ['Tätigkeit – Verzeichnis – Kurzfassung.', 'Die linke Seite der Bilanz zeigt das Vermögen.'],
      solution: 'Inventur (Tätigkeit) → Inventar (Verzeichnis). Vermögen − Schulden = **Reinvermögen** (= Eigenkapital). Linke Bilanzseite = **Aktiva** (Vermögen), rechte Seite = Passiva (Kapital).'
    },
    {
      id: 'lf03-inventur-bilanz-a4', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Inventurart oder das Verfahren der passenden Beschreibung zu.',
      pairs: [
        ['Stichtagsinventur', 'Körperliche Aufnahme am oder zeitnah zum Bilanzstichtag'],
        ['Verlegte Inventur', 'Aufnahme bis 3 Monate vor oder 2 Monate nach dem Stichtag mit wertmäßiger Fortschreibung'],
        ['Permanente Inventur', 'Bestände aus der Lagerbuchführung, mindestens einmal jährlich körperlich geprüft'],
        ['Buchinventur', 'Aufnahme anhand von Kontoauszügen und offenen Postenlisten']
      ],
      hints: ['Überlege, wann gezählt wird.', 'Bei der Buchinventur wird nicht gezählt, sondern in Unterlagen nachgesehen.'],
      solution: 'Stichtagsinventur = am Stichtag; verlegte Inventur = Zeitfenster nach § 241 Abs. 3 HGB mit wertmäßiger Fortschreibung/Rückrechnung; permanente Inventur = laufende Lagerbuchführung (§ 241 Abs. 2 HGB); Buchinventur = Ermittlung aus Belegen, z. B. für Bankguthaben, Forderungen, Verbindlichkeiten.'
    },
    {
      id: 'lf03-inventur-bilanz-a5', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Schritte des Jahresabschlusses in die richtige Reihenfolge.',
      items: [
        'Inventur vorbereiten (Zählteams, Zähllisten, Lagerplätze festlegen)',
        'Bestände körperlich und buchmäßig aufnehmen',
        'Inventar aufstellen (Vermögen, Schulden, Reinvermögen)',
        'Bilanz aus dem Inventar ableiten und unterschreiben'
      ],
      hints: ['Ohne Bestandsaufnahme gibt es kein Verzeichnis.', 'Die Bilanz ist die Kurzfassung des Inventars – sie kommt zuletzt.'],
      solution: 'Vorbereitung → Inventur (Aufnahme) → Inventar → Bilanz. Die Bilanz wird nach § 242 HGB aus dem Inventar entwickelt und nach § 245 HGB vom Kaufmann unterzeichnet.'
    },
    {
      id: 'lf03-inventur-bilanz-a6', type: 'calc', difficulty: 2, points: 3,
      q: `Die Spedition Hochwald Logistik e.K. ermittelt bei der Inventur:

| Posten | € |
|---|---:|
| Lkw | 310.000 |
| Wechselbrücken | 48.000 |
| Betriebs- und Geschäftsausstattung | 22.000 |
| Forderungen a. LL | 64.500 |
| Bank | 18.700 |
| Kasse | 800 |
| Darlehensschulden | 260.000 |
| Verbindlichkeiten a. LL gegenüber Frachtführern | 51.000 |

Berechne Vermögen, Schulden und Reinvermögen.`,
      formula: 'Reinvermögen = Summe Vermögen − Summe Schulden',
      fields: [
        { id: 'verm', label: 'Summe Vermögen', unit: '€', answer: 464000, tol: 0.01 },
        { id: 'schuld', label: 'Summe Schulden', unit: '€', answer: 311000, tol: 0.01 },
        { id: 'rv', label: 'Reinvermögen', unit: '€', answer: 153000, tol: 0.01 }
      ],
      hints: ['Trenne zuerst Vermögensposten und Schulden.', 'Darlehen und Verbindlichkeiten sind Schulden, alles andere ist Vermögen.'],
      solution: `**Formel:** Reinvermögen = Vermögen − Schulden

**Vermögen:** 310.000 € + 48.000 € + 22.000 € + 64.500 € + 18.700 € + 800 € = **464.000 €**

**Schulden:** 260.000 € + 51.000 € = **311.000 €**

**Reinvermögen:** 464.000 € − 311.000 € = **153.000 €**`
    },
    {
      id: 'lf03-inventur-bilanz-a7', type: 'calc', difficulty: 3, points: 3,
      q: 'Das Eigenkapital der Hochwald Logistik e.K. betrug am 31.12.2024 153.000 €, am 31.12.2025 beträgt es 171.500 €. Der Inhaber hat im Jahr 2025 24.000 € privat entnommen und keine Einlagen geleistet. Ermittle den Gewinn des Jahres 2025 durch Eigenkapitalvergleich.',
      formula: 'Gewinn = EK Ende − EK Anfang + Privatentnahmen − Privateinlagen',
      fields: [
        { id: 'diff', label: 'Eigenkapitalveränderung', unit: '€', answer: 18500, tol: 0.01 },
        { id: 'gewinn', label: 'Gewinn', unit: '€', answer: 42500, tol: 0.01 }
      ],
      hints: ['Berechne zuerst, um wie viel das Eigenkapital gestiegen ist.', 'Die Entnahmen haben das Eigenkapital gemindert – sie müssen wieder hinzugerechnet werden.'],
      solution: `**Formel:** Gewinn = EK Ende − EK Anfang + Entnahmen − Einlagen

**Eigenkapitalveränderung:** 171.500 € − 153.000 € = **18.500 €**

**Gewinn:** 18.500 € + 24.000 € − 0 € = **42.500 €**

Begründung: Ohne die Privatentnahmen wäre das Eigenkapital um 42.500 € gestiegen. Die Entnahme ist kein Verlust des Betriebs, deshalb wird sie hinzugerechnet.`
    },
    {
      id: 'lf03-inventur-bilanz-a8', type: 'mc', difficulty: 2, points: 1,
      q: 'Welche Aussage zur Bilanz ist **richtig**?',
      options: [
        'Die Aktivseite zeigt die Mittelherkunft, die Passivseite die Mittelverwendung.',
        'Die Passivseite ist nach Fälligkeit geordnet: Eigenkapital vor Fremdkapital.',
        'Die Bilanzsumme der Aktivseite ist immer größer als die der Passivseite, wenn ein Gewinn erzielt wurde.',
        'Die Bilanz enthält alle Mengenangaben des Inventars.'
      ],
      correct: [1],
      hints: ['Aktiva = wofür, Passiva = woher.', 'Beide Seiten einer Bilanz sind immer gleich groß.'],
      solution: 'Richtig ist: **Die Passivseite ist nach Fälligkeit geordnet** (Eigenkapital steht dem Betrieb unbefristet zur Verfügung, dann folgt lang- und kurzfristiges Fremdkapital). Die Aktivseite zeigt die Mittel**verwendung**, die Passivseite die Mittel**herkunft**. Aktiva und Passiva sind immer gleich groß. Mengenangaben stehen nur im Inventar.'
    },
    {
      id: 'lf03-inventur-bilanz-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre drei Unterschiede zwischen Inventar und Bilanz.',
      model: 'Das Inventar ist ausführlich und enthält Mengen und Einzelwerte, die Bilanz nennt nur zusammengefasste Werte je Posten. Das Inventar ist in Staffelform (untereinander) aufgebaut, die Bilanz in Kontoform (Aktiva links, Passiva rechts). Die Bilanz wird aus dem Inventar abgeleitet und muss vom Kaufmann unterschrieben werden, das Inventar nicht.',
      criteria: [
        { text: 'nennt ausführlich/Mengen gegenüber kurz/Gesamtwerte', keywords: ['Menge|ausführlich|Einzel', 'kurz|zusammengefasst|Gesamt'], points: 1 },
        { text: 'nennt Staffelform gegenüber Kontoform', keywords: ['Staffel', 'Konto|T-Form|gegenüber'], points: 1 },
        { text: 'nennt Unterschrift oder Ableitung der Bilanz aus dem Inventar', keywords: ['unterschr|unterzeichn|abgeleitet|Grundlage'], points: 1 }
      ],
      hints: ['Denke an den Umfang der Angaben.', 'Denke an die äußere Form und an die Unterschrift.'],
      solution: 'Unterschiede: 1. **Umfang**: Inventar ausführlich mit Mengen und Einzelwerten, Bilanz kurz mit Gesamtwerten. 2. **Form**: Inventar in Staffelform, Bilanz in Kontoform. 3. **Unterschrift/Herkunft**: Die Bilanz wird aus dem Inventar entwickelt und ist zu unterzeichnen (§ 245 HGB).'
    },
    {
      id: 'lf03-inventur-bilanz-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Bilanz der Bliesgau Logistik e.K.',
      intro: `Die Bliesgau Logistik e.K. in Homburg hat zum 31.12.2025 folgendes Inventar ermittelt (Beispielzahlen):

| Posten | € |
|---|---:|
| Lagerhalle | 420.000 |
| Lkw | 265.000 |
| Wechselbrücken | 36.000 |
| Betriebs- und Geschäftsausstattung | 19.000 |
| Dieselvorrat | 2.500 |
| Forderungen a. LL gegenüber Versendern | 58.000 |
| Bank | 24.300 |
| Kasse | 1.200 |
| Darlehensschulden | 390.000 |
| Verbindlichkeiten a. LL gegenüber Frachtführern | 61.000 |

Außerdem lagern im Hochregal 300 Paletten eines Kunden im Wert von 90.000 €.`,
      hints: ['Ordne jeden Posten zuerst AV, UV oder Fremdkapital zu.', 'Das Eigenkapital ist die Differenz zwischen Bilanzsumme und Fremdkapital.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf03-inventur-bilanz-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne Anlagevermögen, Umlaufvermögen und Bilanzsumme.',
          formula: 'Bilanzsumme = Anlagevermögen + Umlaufvermögen',
          fields: [
            { id: 'av', label: 'Anlagevermögen', unit: '€', answer: 740000, tol: 0.01 },
            { id: 'uv', label: 'Umlaufvermögen', unit: '€', answer: 86000, tol: 0.01 },
            { id: 'bs', label: 'Bilanzsumme', unit: '€', answer: 826000, tol: 0.01 }
          ],
          hints: ['Lagerhalle, Lkw, Wechselbrücken und BGA sind Anlagevermögen.', 'Die Kundenpaletten zählen nicht.'],
          solution: `**AV:** 420.000 € + 265.000 € + 36.000 € + 19.000 € = **740.000 €**

**UV:** 2.500 € + 58.000 € + 24.300 € + 1.200 € = **86.000 €**

**Bilanzsumme:** 740.000 € + 86.000 € = **826.000 €**

Die 300 Kundenpaletten (90.000 €) sind fremdes Eigentum und werden nicht erfasst.`
        },
        {
          id: 'lf03-inventur-bilanz-a10-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne das Fremdkapital und das Eigenkapital.',
          formula: 'Eigenkapital = Bilanzsumme − Fremdkapital',
          fields: [
            { id: 'fk', label: 'Fremdkapital', unit: '€', answer: 451000, tol: 0.01 },
            { id: 'ek', label: 'Eigenkapital', unit: '€', answer: 375000, tol: 0.01 }
          ],
          hints: ['Fremdkapital = Darlehensschulden + Verbindlichkeiten.', 'Aktiva = Passiva.'],
          solution: `**Fremdkapital:** 390.000 € + 61.000 € = **451.000 €**

**Eigenkapital:** 826.000 € − 451.000 € = **375.000 €**`
        },
        {
          id: 'lf03-inventur-bilanz-a10-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Der Auszubildende möchte die Kundenpaletten (90.000 €) im Umlaufvermögen aufnehmen. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Paletten gehören nicht ins Inventar, weil sie der Spedition nicht gehören.',
            'Die Bilanzsumme würde dadurch fälschlich um 90.000 € zu hoch ausgewiesen.',
            'Die Paletten gehören als Vorräte ins Umlaufvermögen.',
            'Die Paletten müssen als Anlagevermögen erfasst werden, weil sie lange lagern.'
          ],
          correct: [0, 1],
          hints: ['Wem gehören die eingelagerten Güter?', 'Was würde mit Vermögen und Eigenkapital passieren?'],
          solution: 'Richtig sind A und B. Eingelagerte Güter bleiben Eigentum des Einlagerers. Würden sie erfasst, wären Vermögen, Bilanzsumme und Eigenkapital um 90.000 € zu hoch.'
        }
      ]
    }
  ],
  quiz: ['lf03-inventur-bilanz-a1', 'lf03-inventur-bilanz-a2', 'lf03-inventur-bilanz-a6', 'lf03-inventur-bilanz-a8', 'lf03-inventur-bilanz-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 3, Inhalte: Inventur, Inventar, Bilanz' },
    { title: 'Handelsgesetzbuch § 240 Inventar', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__240.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 241 Inventurvereinfachungsverfahren', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__241.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 242 Pflicht zur Aufstellung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__242.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 266 Gliederung der Bilanz', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__266.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 257 Aufbewahrung von Unterlagen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__257.html', asOf: '2026' }
  ],
  links: ['lf03-buchen-bestandskonten']
};
