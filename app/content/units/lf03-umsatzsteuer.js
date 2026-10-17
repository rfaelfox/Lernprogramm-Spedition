export default {
  id: 'lf03-umsatzsteuer',
  area: 'LF03',
  topic: 'lf03-ust',
  title: 'Vorsteuer und Umsatzsteuer',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Regelsteuersatz 19 %, ermäßigter Steuersatz 7 % (§ 12 UStG). Voranmeldung bis zum 10. Tag nach Ablauf des Voranmeldungszeitraums; monatlich bei mehr als 9.000 € Steuer im Vorjahr, vierteljährlich bei mehr als 2.000 € bis 9.000 €, Befreiung möglich bis 2.000 € (§ 18 Abs. 1 und 2 UStG). Fristverlängerung um einen Monat (§ 46 UStDV). Steuerbefreiung für bestimmte grenzüberschreitende Beförderungen und Leistungen mit Bezug zur Ausfuhr oder Einfuhr (§ 4 Nr. 3 UStG). Stand Oktober 2026.'
  },
  goals: [
    'Ich kann das Mehrwertsteuersystem mit Vorsteuerabzug an einer Leistungskette erklären.',
    'Ich kann Umsatzsteuer und Vorsteuer aus Netto- und Bruttobeträgen berechnen.',
    'Ich kann Eingangs- und Ausgangsrechnungen einer Spedition mit Vorsteuer und Umsatzsteuer buchen.',
    'Ich kann die Zahllast oder den Vorsteuerüberhang ermitteln und buchen.',
    'Ich kann Fristen und Zeiträume der Umsatzsteuer-Voranmeldung nennen.',
    'Ich weiß, dass bestimmte grenzüberschreitende Speditionsleistungen steuerfrei sein können, und kenne die Grundbedingungen.'
  ],
  simple: `# Worum geht es?

Wenn die Spedition einem Versender eine Rechnung schreibt, schlägt sie auf den Nettopreis **Umsatzsteuer** auf (meist 19 %). Diese Steuer gehört nicht der Spedition: Sie muss sie an das **Finanzamt** abführen.

Wenn die Spedition selbst einkauft – etwa eine Wechselbrücke oder die Leistung eines Frachtführers –, zahlt sie auf deren Rechnungen ebenfalls Umsatzsteuer. Diese bezahlte Steuer heißt aus Sicht der Spedition **Vorsteuer**. Die Spedition bekommt sie vom Finanzamt zurück, genauer: Sie darf sie mit ihrer eigenen Umsatzsteuer verrechnen.

# Die Formel

**Zahllast = Umsatzsteuer − Vorsteuer**

- Ist die Umsatzsteuer größer, muss die Spedition die **Zahllast** an das Finanzamt überweisen.
- Ist die Vorsteuer größer, entsteht ein **Vorsteuerüberhang**: Das Finanzamt erstattet den Betrag.

# Wer trägt die Steuer?

Am Ende bezahlt der **Endverbraucher** die Steuer. Für Unternehmen ist die Umsatzsteuer ein **durchlaufender Posten**: Sie kassieren sie ein, ziehen ihre Vorsteuer ab und führen nur den Rest ab.

# Steuersätze (Stand 2026)

- **19 %** allgemeiner Steuersatz – gilt für die meisten Leistungen, auch für Transport- und Speditionsleistungen im Inland.
- **7 %** ermäßigter Steuersatz – z. B. für viele Lebensmittel und Bücher.`,
  deep: `# Das Mehrwertsteuersystem an einer Leistungskette

Jede Stufe versteuert nur den **Mehrwert**, den sie hinzufügt. Beispiel mit 19 %:

| Stufe | Netto-Verkaufspreis | USt auf Ausgangsrechnung | Vorsteuer aus Eingangsrechnung | an das Finanzamt | Mehrwert |
|---|---:|---:|---:|---:|---:|
| Frachtführer an Spedition | 1.000 € | 190 € | 0 € | 190 € | 1.000 € |
| Spedition an Versender | 1.400 € | 266 € | 190 € | 76 € | 400 € |
| **Summe** | | | | **266 €** | **1.400 €** |

266 € = 19 % von 1.400 €. Das Finanzamt erhält insgesamt genau die Steuer auf den Endpreis, aber verteilt auf die Stufen. (Vereinfacht: Der Frachtführer hat hier keine Vorsteuer.) Ist der Versender selbst Unternehmer, kann auch er die 266 € als Vorsteuer abziehen – die Steuer trägt erst der Endverbraucher am Ende der Kette.

# Berechnungen

| gesucht | Rechnung bei 19 % |
|---|---|
| Umsatzsteuer aus Netto | Netto × 0,19 |
| Brutto aus Netto | Netto × 1,19 |
| Netto aus Brutto | Brutto ÷ 1,19 |
| Steuer aus Brutto | Brutto ÷ 1,19 × 0,19 (oder Brutto ÷ 119 × 19) |

# Konten

- **Vorsteuer**: Aktivkonto – eine **Forderung gegenüber dem Finanzamt**. Gebucht im **Soll** bei Eingangsrechnungen.
- **Umsatzsteuer**: Passivkonto – eine **Verbindlichkeit gegenüber dem Finanzamt**. Gebucht im **Haben** bei Ausgangsrechnungen.

**Eingangsrechnung** (Kauf einer Wechselbrücke auf Ziel, netto 12.000 €):

| Soll | € | Haben | € |
|---|---:|---|---:|
| Fuhrpark | 12.000 | Verbindlichkeiten a. LL | 14.280 |
| Vorsteuer | 2.280 | | |

**Ausgangsrechnung** (Speditionsleistung an Versender, netto 2.400 €):

| Soll | € | Haben | € |
|---|---:|---|---:|
| Forderungen a. LL | 2.856 | Speditionserlöse | 2.400 |
| | | Umsatzsteuer | 456 |

Das Konto **Speditionserlöse** (in manchen Schulen „Umsatzerlöse“) ist ein Erfolgskonto. Es wird hier nur als Gegenkonto gebraucht; Erfolgskonten lernst du in einer eigenen Einheit.

# Abschluss am Ende des Voranmeldungszeitraums

1. **Umbuchung**: Das kleinere Konto wird über das größere abgeschlossen.
   - USt > VSt: *Umsatzsteuer an Vorsteuer* (in Höhe der Vorsteuer). Saldo auf Umsatzsteuer = **Zahllast**.
   - VSt > USt: *Umsatzsteuer an Vorsteuer* (in Höhe der Umsatzsteuer). Saldo auf Vorsteuer = **Vorsteuerüberhang** (Forderung).
2. **Überweisung der Zahllast**: *Umsatzsteuer an Bank*.
3. Am **Jahresende** wird eine noch nicht bezahlte Zahllast als Verbindlichkeit (passiv), ein Vorsteuerüberhang als Forderung (aktiv) über das Schlussbilanzkonto abgeschlossen.

# Umsatzsteuer-Voranmeldung (§ 18 UStG, Stand 2026)

- Die Spedition berechnet die Steuer selbst und übermittelt die Voranmeldung **elektronisch** (ELSTER) bis zum **10. Tag nach Ablauf** des Voranmeldungszeitraums. Bis dahin ist auch die Vorauszahlung fällig.
- **Voranmeldungszeitraum** nach der Steuer des Vorjahres:

| Steuer des Vorjahres | Zeitraum |
|---|---|
| mehr als 9.000 € | Kalendermonat |
| mehr als 2.000 € bis 9.000 € | Kalendervierteljahr |
| bis 2.000 € | Befreiung von Voranmeldungen durch das Finanzamt möglich |

- Neu gegründete Unternehmen geben im Gründungsjahr und im Folgejahr **monatlich** ab.
- Auf Antrag verlängert das Finanzamt die Frist um **einen Monat** (Fristverlängerung, § 46 UStDV). Wer monatlich abgibt, muss dafür eine Sondervorauszahlung leisten (§ 47 UStDV).
- Fällt das Fristende auf einen Samstag, Sonntag oder Feiertag, endet die Frist am nächsten Werktag (§ 108 Abs. 3 AO).
- Nach Ablauf des Jahres folgt die **Umsatzsteuer-Jahreserklärung**.

# Vorsteuerabzug – Voraussetzungen (vereinfacht, § 15 UStG)

- Die Leistung wurde **für das Unternehmen** bezogen.
- Es liegt eine **ordnungsgemäße Rechnung** vor (§ 14 Abs. 4 UStG: u. a. Name und Anschrift beider Parteien, Steuernummer oder USt-IdNr., Datum, fortlaufende Rechnungsnummer, Art und Umfang der Leistung, Leistungszeitpunkt, Entgelt, Steuersatz und Steuerbetrag).

# Hinweis: grenzüberschreitende Speditionsleistungen

> Nach **§ 4 Nr. 3 UStG** können **grenzüberschreitende Güterbeförderungen** und **andere sonstige Leistungen** (dazu können z. B. Besorgungsleistungen des Spediteurs und Umschlag gehören) **steuerfrei** sein, wenn sie sich **unmittelbar auf Gegenstände der Ausfuhr** beziehen oder auf **eingeführte Gegenstände**, die im externen Versandverfahren ins Drittland befördert werden, oder auf **Gegenstände der Einfuhr**, wenn die Kosten der Leistung in der Bemessungsgrundlage für die Einfuhr enthalten sind.
>
> Wichtig:
> - Nicht jeder Transport über eine Grenze ist automatisch steuerfrei. Die Befreiung knüpft an den **Bezug zur Ausfuhr oder Einfuhr** an, also in der Regel an den Warenverkehr mit dem **Drittland** (z. B. Schweiz).
> - Der Unternehmer muss die Voraussetzungen **nachweisen** (§ 4 Nr. 3 Satz 3 UStG; Einzelheiten zum Belegnachweis regelt die UStDV).
> - Die Rechnung muss einen **Hinweis auf die Steuerbefreiung** enthalten (§ 14 Abs. 4 Satz 1 Nr. 8 UStG).
> - Ob überhaupt deutsche Umsatzsteuer anfällt, hängt außerdem vom **Ort der Leistung** ab (§ 3a UStG); bei Leistungen an Unternehmer liegt er grundsätzlich am Sitz des Empfängers.
>
> Diese Regeln sind komplex. Im Betrieb entscheidet im Einzelfall die Buchhaltung oder die Steuerberatung. Für die Aufgaben in dieser Einheit gilt: Inlandsleistungen mit 19 %.`,
  terms: [
    { term: 'Umsatzsteuer (USt)', def: 'Steuer auf Lieferungen und sonstige Leistungen eines Unternehmers. Aus Sicht der Spedition die Steuer auf ihren Ausgangsrechnungen – eine Verbindlichkeit gegenüber dem Finanzamt.' },
    { term: 'Mehrwertsteuer', def: 'Umgangssprachliche Bezeichnung für die Umsatzsteuer. Sie beschreibt das System: Jede Stufe versteuert nur ihren Mehrwert.' },
    { term: 'Vorsteuer (VSt)', def: 'Umsatzsteuer, die der Spedition von Lieferanten und Frachtführern in Rechnung gestellt wurde. Sie ist abziehbar und damit eine Forderung gegenüber dem Finanzamt.' },
    { term: 'Zahllast', def: 'Umsatzsteuer minus Vorsteuer, wenn die Umsatzsteuer größer ist. Betrag, der an das Finanzamt zu zahlen ist.' },
    { term: 'Vorsteuerüberhang', def: 'Vorsteuer ist größer als Umsatzsteuer. Der Unterschied wird vom Finanzamt erstattet bzw. verrechnet.' },
    { term: 'Umsatzsteuer-Voranmeldung', def: 'Elektronische Steuererklärung für einen Monat oder ein Vierteljahr, bis zum 10. Tag nach Ablauf des Zeitraums (§ 18 UStG).' },
    { term: 'Fristverlängerung', def: 'Auf Antrag um einen Monat längere Frist für Voranmeldung und Zahlung (§ 46 UStDV); umgangssprachlich „Dauerfristverlängerung“.' },
    { term: 'Netto / Brutto', def: 'Netto = Preis ohne Umsatzsteuer, Brutto = Preis einschließlich Umsatzsteuer.' },
    { term: 'Durchlaufender Posten', def: 'Für Unternehmen mit Vorsteuerabzug ist die Umsatzsteuer kein Aufwand und kein Ertrag; sie wird nur eingenommen und abgeführt.' },
    { term: 'Steuerbefreiung nach § 4 Nr. 3 UStG', def: 'Befreiung bestimmter grenzüberschreitender Beförderungen und sonstiger Leistungen, die sich unmittelbar auf Gegenstände der Ausfuhr oder Einfuhr beziehen; Nachweis erforderlich.' }
  ],
  example: `# Saar-Trans Spedition GmbH – März 2026 (Beispielzahlen)

**1. Ausgangsrechnung** an einen Versender in Neunkirchen für einen Komplettladungstransport nach Hamburg:

| | € |
|---|---:|
| Speditionsentgelt netto | 2.400,00 |
| + 19 % Umsatzsteuer | 456,00 |
| **Rechnungsbetrag brutto** | **2.856,00** |

Buchung: *Forderungen a. LL 2.856 an Speditionserlöse 2.400 und Umsatzsteuer 456*

**2. Eingangsrechnung** für eine neue Wechselbrücke, Kauf auf Ziel:

| | € |
|---|---:|
| Kaufpreis netto | 12.000,00 |
| + 19 % Umsatzsteuer | 2.280,00 |
| **Rechnungsbetrag brutto** | **14.280,00** |

Buchung: *Fuhrpark 12.000 und Vorsteuer 2.280 an Verbindlichkeiten a. LL 14.280*

**3. Monatsabschluss März**: Insgesamt wurden im März 38.400 € Umsatzsteuer und 24.150 € Vorsteuer gebucht.

- Zahllast = 38.400 € − 24.150 € = **14.250 €**
- Umbuchung: *Umsatzsteuer 24.150 an Vorsteuer 24.150*
- Voranmeldung über ELSTER bis **10.04.2026**, Überweisung: *Umsatzsteuer 14.250 an Bank 14.250*

Hätte die Spedition eine Fristverlängerung, wäre die Frist der 10.05.2026. Da dieser Tag ein Sonntag ist, endet die Frist am Montag, 11.05.2026.`,
  rules: [
    'Umsatzsteuer entsteht auf Ausgangsrechnungen und wird im Haben gebucht (Passivkonto).',
    'Vorsteuer entsteht auf Eingangsrechnungen und wird im Soll gebucht (Aktivkonto).',
    'Zahllast = Umsatzsteuer − Vorsteuer.',
    'Netto aus Brutto: durch 1,19 teilen – nicht 19 % vom Bruttobetrag abziehen.',
    'Das kleinere Steuerkonto wird über das größere abgeschlossen.',
    'Voranmeldung und Zahlung: bis zum 10. Tag nach Ablauf des Voranmeldungszeitraums (Stand 2026).',
    'Steuerbefreiung nach § 4 Nr. 3 UStG nur bei Bezug zur Ausfuhr bzw. Einfuhr und mit Nachweis – nicht bei jedem Grenzübertritt.'
  ],
  summary: `- **Umsatzsteuer** auf Ausgangsrechnungen = Verbindlichkeit gegenüber dem Finanzamt (Haben).
- **Vorsteuer** auf Eingangsrechnungen = Forderung gegenüber dem Finanzamt (Soll).
- **Zahllast = USt − VSt**; ist die Vorsteuer größer, entsteht ein **Vorsteuerüberhang**.
- Steuersätze 2026: **19 %** allgemein, **7 %** ermäßigt (§ 12 UStG).
- **Voranmeldung** elektronisch bis zum **10.** des Folgemonats bzw. nach Quartalsende; monatlich bei mehr als 9.000 € Vorjahressteuer; Fristverlängerung um einen Monat möglich.
- Grenzüberschreitende Speditionsleistungen mit Bezug zur Ausfuhr oder Einfuhr können nach **§ 4 Nr. 3 UStG** steuerfrei sein – Nachweis und Rechnungshinweis erforderlich.`,
  mistakes: [
    { wrong: 'Aus 1.190 € brutto ziehe ich 19 % ab: 1.190 € − 226,10 € = 963,90 € netto.', right: 'Der Bruttobetrag entspricht 119 %. Netto = 1.190 € ÷ 1,19 = 1.000 €, die Steuer beträgt 190 €.' },
    { wrong: 'Die Vorsteuer ist ein Aufwand der Spedition.', right: 'Die Vorsteuer ist eine Forderung gegenüber dem Finanzamt. Der Aufwand bzw. die Anschaffungskosten werden netto gebucht.' },
    { wrong: 'Bei der Ausgangsrechnung buche ich die Umsatzsteuer im Soll.', right: 'Umsatzsteuer ist eine Verbindlichkeit (Passivkonto) – ein Zugang steht im Haben.' },
    { wrong: 'Ein Transport von Saarbrücken nach Metz ist steuerfrei, weil er über die Grenze geht.', right: 'Die Steuerbefreiung nach § 4 Nr. 3 UStG setzt einen Bezug zur Ausfuhr oder Einfuhr voraus (in der Regel Drittland). Für Transporte innerhalb der EU gelten andere Regeln, insbesondere zum Ort der Leistung (§ 3a UStG).' },
    { wrong: 'Die Zahllast wird mit dem Buchungssatz „Bank an Umsatzsteuer“ überwiesen.', right: 'Die Verbindlichkeit sinkt (Soll) und das Bankguthaben sinkt (Haben): Umsatzsteuer an Bank.' }
  ],
  flashcards: [
    { q: 'Wie hoch sind die Umsatzsteuersätze in Deutschland (Stand 2026)?', a: '19 % allgemein, 7 % ermäßigt (§ 12 UStG).' },
    { q: 'Ist die Vorsteuer ein Aktiv- oder ein Passivkonto?', a: 'Aktivkonto – Forderung gegenüber dem Finanzamt.' },
    { q: 'Ist die Umsatzsteuer ein Aktiv- oder ein Passivkonto?', a: 'Passivkonto – Verbindlichkeit gegenüber dem Finanzamt.' },
    { q: 'Wie berechnet man die Zahllast?', a: 'Umsatzsteuer − Vorsteuer.' },
    { q: 'Wie rechnet man den Nettobetrag aus 2.380 € brutto (19 %)?', a: '2.380 € ÷ 1,19 = 2.000 € netto; Steuer 380 €.' },
    { q: 'Bis wann ist die Umsatzsteuer-Voranmeldung abzugeben?', a: 'Bis zum 10. Tag nach Ablauf des Voranmeldungszeitraums (§ 18 Abs. 1 UStG), elektronisch.' },
    { q: 'Ab welcher Vorjahressteuer ist monatlich anzumelden (Stand 2026)?', a: 'Bei mehr als 9.000 € (§ 18 Abs. 2 UStG).' },
    { q: 'Um wie viel verlängert die Fristverlängerung die Abgabefrist?', a: 'Um einen Monat (§ 46 UStDV).' },
    { q: 'Wer trägt die Umsatzsteuer wirtschaftlich?', a: 'Der Endverbraucher. Für Unternehmer mit Vorsteuerabzug ist sie ein durchlaufender Posten.' },
    { q: 'Welche Bedingung nennt § 4 Nr. 3 UStG für steuerfreie Speditionsleistungen?', a: 'Die Leistung muss sich unmittelbar auf Gegenstände der Ausfuhr oder (unter weiteren Voraussetzungen) der Einfuhr beziehen; der Unternehmer muss dies nachweisen.' }
  ],
  tasks: [
    {
      id: 'lf03-umsatzsteuer-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Wer trägt die Umsatzsteuer **wirtschaftlich** am Ende der Leistungskette?',
      options: ['Die Spedition', 'Der Frachtführer', 'Der Endverbraucher', 'Das Finanzamt'],
      correct: [2],
      hints: ['Unternehmer können die gezahlte Steuer als Vorsteuer abziehen.', 'Wer kann keine Vorsteuer abziehen?'],
      solution: 'Der **Endverbraucher** trägt die Steuer, weil er sie nicht als Vorsteuer abziehen kann. Spedition und Frachtführer verrechnen ihre Vorsteuer mit der Umsatzsteuer; für sie ist die Steuer ein durchlaufender Posten. Das Finanzamt nimmt die Steuer nur ein.'
    },
    {
      id: 'lf03-umsatzsteuer-a2', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken (Stand 2026).',
      text: 'Der allgemeine Umsatzsteuersatz beträgt [[19]] %, der ermäßigte [[7]] %. Die auf Eingangsrechnungen gezahlte Steuer heißt [[Vorsteuer]] und ist eine Forderung gegenüber dem Finanzamt. Umsatzsteuer minus Vorsteuer ergibt die [[Zahllast]]. Die Voranmeldung muss bis zum [[10.|10|zehnten]] Tag nach Ablauf des Voranmeldungszeitraums übermittelt werden.',
      hints: ['§ 12 UStG nennt die Steuersätze.', '§ 18 Abs. 1 UStG nennt die Frist.'],
      solution: '**19 %** allgemein, **7 %** ermäßigt (§ 12 UStG). Die Steuer aus Eingangsrechnungen ist die **Vorsteuer**. USt − VSt = **Zahllast**. Frist: **10. Tag** nach Ablauf des Voranmeldungszeitraums (§ 18 Abs. 1 UStG).'
    },
    {
      id: 'lf03-umsatzsteuer-a3', type: 'calc', difficulty: 1, points: 2,
      q: 'Die Spedition stellt einem Versender für eine Teilpartie 3.250,00 € netto in Rechnung. Berechne die Umsatzsteuer (19 %) und den Rechnungsbetrag.',
      formula: 'USt = Netto × 0,19; Brutto = Netto + USt',
      fields: [
        { id: 'ust', label: 'Umsatzsteuer', unit: '€', answer: 617.5, tol: 0.01 },
        { id: 'brutto', label: 'Rechnungsbetrag brutto', unit: '€', answer: 3867.5, tol: 0.01 }
      ],
      hints: ['19 % = 0,19.', 'Brutto = Netto × 1,19.'],
      solution: `**Formel:** USt = Netto × 0,19

**USt:** 3.250,00 € × 0,19 = **617,50 €**

**Brutto:** 3.250,00 € + 617,50 € = **3.867,50 €** (Probe: 3.250,00 € × 1,19 = 3.867,50 €)`
    },
    {
      id: 'lf03-umsatzsteuer-a4', type: 'calc', difficulty: 2, points: 2,
      q: 'Eine Eingangsrechnung eines Frachtführers lautet über 5.950,00 € brutto (19 % USt enthalten). Ermittle den Nettobetrag und die Vorsteuer.',
      formula: 'Netto = Brutto ÷ 1,19; Vorsteuer = Brutto − Netto',
      fields: [
        { id: 'netto', label: 'Nettobetrag', unit: '€', answer: 5000, tol: 0.01 },
        { id: 'vst', label: 'Vorsteuer', unit: '€', answer: 950, tol: 0.01 }
      ],
      hints: ['Der Bruttobetrag entspricht 119 %.', 'Nicht 19 % vom Bruttobetrag abziehen!'],
      solution: `**Formel:** Netto = Brutto ÷ 1,19

**Netto:** 5.950,00 € ÷ 1,19 = **5.000,00 €**

**Vorsteuer:** 5.950,00 € − 5.000,00 € = **950,00 €** (Probe: 5.000,00 € × 0,19 = 950,00 €)

Typischer Fehler: 5.950 € × 0,19 = 1.130,50 € wäre falsch, weil die 19 % sich auf den Nettobetrag beziehen.`
    },
    {
      id: 'lf03-umsatzsteuer-a5', type: 'booking', difficulty: 2, points: 3,
      q: 'Die Spedition schreibt einem Versender eine Ausgangsrechnung über einen Lkw-Transport von Saarlouis nach Stuttgart: 2.400,00 € netto + 19 % Umsatzsteuer. Bilde den Buchungssatz.',
      accounts: ['Forderungen a. LL', 'Verbindlichkeiten a. LL', 'Speditionserlöse', 'Umsatzsteuer', 'Vorsteuer', 'Bank', 'Kasse', 'Fuhrpark'],
      entries: [
        { side: 'S', account: 'Forderungen a. LL', amount: 2856 },
        { side: 'H', account: 'Speditionserlöse', amount: 2400 },
        { side: 'H', account: 'Umsatzsteuer', amount: 456 }
      ],
      hints: ['USt = 2.400 € × 0,19; der Kunde schuldet den Bruttobetrag.', 'Umsatzsteuer ist eine Verbindlichkeit gegenüber dem Finanzamt.'],
      solution: `**Forderungen a. LL 2.856 € an Speditionserlöse 2.400 € und Umsatzsteuer 456 €**

Rechnung: 2.400 € × 0,19 = 456 €; 2.400 € + 456 € = 2.856 €.

- **Forderungen a. LL**: Aktivkonto, Zugang → **Soll** (Bruttobetrag, den der Versender zahlen muss).
- **Speditionserlöse**: Ertragskonto, der Nettoerlös steht im **Haben**.
- **Umsatzsteuer**: Passivkonto (Schuld gegenüber dem Finanzamt), Zugang → **Haben**.

Probe: Soll 2.856 € = Haben 2.400 € + 456 €.`
    },
    {
      id: 'lf03-umsatzsteuer-a6', type: 'booking', difficulty: 2, points: 3,
      q: 'Die Spedition kauft eine Wechselbrücke auf Ziel. Die Eingangsrechnung lautet: 12.000,00 € netto + 19 % Umsatzsteuer. Bilde den Buchungssatz.',
      accounts: ['Fuhrpark', 'Vorsteuer', 'Umsatzsteuer', 'Verbindlichkeiten a. LL', 'Forderungen a. LL', 'Bank', 'Darlehensschulden'],
      entries: [
        { side: 'S', account: 'Fuhrpark', amount: 12000 },
        { side: 'S', account: 'Vorsteuer', amount: 2280 },
        { side: 'H', account: 'Verbindlichkeiten a. LL', amount: 14280 }
      ],
      hints: ['Die Wechselbrücke wird mit dem Nettobetrag aktiviert.', 'Bei Eingangsrechnungen entsteht Vorsteuer, keine Umsatzsteuer.'],
      solution: `**Fuhrpark 12.000 € und Vorsteuer 2.280 € an Verbindlichkeiten a. LL 14.280 €**

Rechnung: 12.000 € × 0,19 = 2.280 €; 12.000 € + 2.280 € = 14.280 €.

- **Fuhrpark**: Aktivkonto, Zugang → **Soll** (netto).
- **Vorsteuer**: Aktivkonto (Forderung gegenüber dem Finanzamt), Zugang → **Soll**.
- **Verbindlichkeiten a. LL**: Passivkonto, Zugang → **Haben** (brutto, so viel muss bezahlt werden).`
    },
    {
      id: 'lf03-umsatzsteuer-a7', type: 'booking', difficulty: 2, points: 3,
      q: 'Für das Büro der Disposition wird ein Aktenschrank gekauft und bar bezahlt: 800,00 € netto + 19 % Umsatzsteuer. Bilde den Buchungssatz.',
      accounts: ['Betriebs- und Geschäftsausstattung', 'Fuhrpark', 'Vorsteuer', 'Umsatzsteuer', 'Kasse', 'Bank', 'Verbindlichkeiten a. LL'],
      entries: [
        { side: 'S', account: 'Betriebs- und Geschäftsausstattung', amount: 800 },
        { side: 'S', account: 'Vorsteuer', amount: 152 },
        { side: 'H', account: 'Kasse', amount: 952 }
      ],
      hints: ['Ein Aktenschrank gehört zur Betriebs- und Geschäftsausstattung.', 'Bar bezahlt: Welches Konto nimmt ab?'],
      solution: `**Betriebs- und Geschäftsausstattung 800 € und Vorsteuer 152 € an Kasse 952 €**

Rechnung: 800 € × 0,19 = 152 €; 800 € + 152 € = 952 €.

- **BGA**: Aktivkonto, Zugang → Soll (netto).
- **Vorsteuer**: Aktivkonto, Zugang → Soll.
- **Kasse**: Aktivkonto, Abgang → Haben (brutto).`
    },
    {
      id: 'lf03-umsatzsteuer-a8', type: 'calc', difficulty: 2, points: 2,
      q: 'Im April 2026 hat die Spedition 38.400,00 € Umsatzsteuer und 24.150,00 € Vorsteuer gebucht. Ermittle die Zahllast.',
      formula: 'Zahllast = Umsatzsteuer − Vorsteuer',
      fields: [
        { id: 'zl', label: 'Zahllast', unit: '€', answer: 14250, tol: 0.01 }
      ],
      hints: ['Welcher Betrag ist größer?', 'Von der Schuld gegenüber dem Finanzamt wird die Forderung abgezogen.'],
      solution: `**Formel:** Zahllast = USt − VSt

**Zahllast:** 38.400,00 € − 24.150,00 € = **14.250,00 €**

Die Umsatzsteuer ist größer, also muss die Spedition 14.250,00 € an das Finanzamt zahlen – bis zum 10.05.2026 (ohne Fristverlängerung). Da der 10.05.2026 ein Sonntag ist, endet die Frist am 11.05.2026.`
    },
    {
      id: 'lf03-umsatzsteuer-a9', type: 'booking', difficulty: 3, points: 2,
      q: 'Schließe zum Monatsende das Konto Vorsteuer (Saldo 24.150,00 €) über das Konto Umsatzsteuer (Saldo 38.400,00 €) ab. Bilde die Umbuchung.',
      accounts: ['Umsatzsteuer', 'Vorsteuer', 'Bank', 'Schlussbilanzkonto', 'Forderungen a. LL', 'Verbindlichkeiten a. LL'],
      entries: [
        { side: 'S', account: 'Umsatzsteuer', amount: 24150 },
        { side: 'H', account: 'Vorsteuer', amount: 24150 }
      ],
      hints: ['Das kleinere Konto wird über das größere abgeschlossen.', 'Vorsteuer steht im Soll – zum Ausgleich wird sie im Haben gebucht.'],
      solution: `**Umsatzsteuer 24.150 € an Vorsteuer 24.150 €**

- Die Vorsteuer (Aktivkonto) hat ihren Saldo im Soll. Zum Abschluss wird sie mit 24.150 € im **Haben** ausgebucht.
- Die Umsatzsteuer (Passivkonto) wird um diesen Betrag im **Soll** gemindert.
- Auf dem Konto Umsatzsteuer bleibt die Zahllast stehen: 38.400 € − 24.150 € = 14.250 €.`
    },
    {
      id: 'lf03-umsatzsteuer-a10', type: 'booking', difficulty: 2, points: 2,
      q: 'Die Zahllast von 14.250,00 € wird per Bank an das Finanzamt überwiesen. Bilde den Buchungssatz.',
      accounts: ['Umsatzsteuer', 'Vorsteuer', 'Bank', 'Kasse', 'Verbindlichkeiten a. LL', 'Eigenkapital'],
      entries: [
        { side: 'S', account: 'Umsatzsteuer', amount: 14250 },
        { side: 'H', account: 'Bank', amount: 14250 }
      ],
      hints: ['Die Schuld gegenüber dem Finanzamt erlischt.', 'Das Bankguthaben nimmt ab.'],
      solution: `**Umsatzsteuer 14.250 € an Bank 14.250 €**

- **Umsatzsteuer**: Passivkonto, Abgang (Schuld wird bezahlt) → **Soll**.
- **Bank**: Aktivkonto, Abgang → **Haben**.

Art: Aktiv-Passiv-Minderung.`
    },
    {
      id: 'lf03-umsatzsteuer-a11', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Begriffe den Beschreibungen zu.',
      pairs: [
        ['Vorsteuer', 'Steuer auf Eingangsrechnungen, Forderung gegenüber dem Finanzamt'],
        ['Umsatzsteuer', 'Steuer auf Ausgangsrechnungen, Verbindlichkeit gegenüber dem Finanzamt'],
        ['Zahllast', 'Umsatzsteuer ist größer als Vorsteuer, Differenz wird gezahlt'],
        ['Vorsteuerüberhang', 'Vorsteuer ist größer als Umsatzsteuer, Differenz wird erstattet']
      ],
      hints: ['„Vor“: die Steuer, die man vorher an andere gezahlt hat.', 'Überhang = mehr als nötig.'],
      solution: 'Vorsteuer = gezahlte Steuer aus Eingangsrechnungen (Forderung). Umsatzsteuer = berechnete Steuer aus Ausgangsrechnungen (Verbindlichkeit). Zahllast = USt > VSt. Vorsteuerüberhang = VSt > USt.'
    },
    {
      id: 'lf03-umsatzsteuer-a12', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Arbeitsschritte zur Umsatzsteuer am Monatsende in die richtige Reihenfolge (monatliche Voranmeldung, keine Fristverlängerung).',
      items: [
        'Alle Eingangs- und Ausgangsrechnungen des Monats mit Vorsteuer bzw. Umsatzsteuer buchen',
        'Salden der Konten Vorsteuer und Umsatzsteuer ermitteln',
        'Kleineres Steuerkonto über das größere abschließen und Zahllast feststellen',
        'Umsatzsteuer-Voranmeldung elektronisch übermitteln (bis zum 10. des Folgemonats)',
        'Zahllast überweisen und buchen: Umsatzsteuer an Bank'
      ],
      hints: ['Erst buchen, dann abschließen.', 'Die Zahlung ist zum selben Termin fällig wie die Voranmeldung – gebucht wird sie, wenn sie erfolgt.'],
      solution: 'Rechnungen buchen → Salden ermitteln → Umbuchung (Umsatzsteuer an Vorsteuer) und Zahllast feststellen → Voranmeldung übermitteln → Zahllast überweisen und buchen. Voranmeldung und Vorauszahlung sind am 10. Tag nach Ablauf des Monats fällig (§ 18 Abs. 1 UStG).'
    },
    {
      id: 'lf03-umsatzsteuer-a13', type: 'mc', difficulty: 3, points: 2,
      q: 'Die Saar-Trans Spedition GmbH besorgt für einen Maschinenbauer aus Saarbrücken die Beförderung einer Maschine, die in die **Schweiz ausgeführt** wird. Welche Aussagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Die Leistung kann nach § 4 Nr. 3 UStG steuerfrei sein, weil sie sich unmittelbar auf einen Gegenstand der Ausfuhr bezieht.',
        'Jede Beförderung über eine Staatsgrenze ist automatisch umsatzsteuerfrei.',
        'Die Spedition muss die Voraussetzungen der Steuerbefreiung nachweisen.',
        'Auf einer Rechnung über eine steuerfreie Leistung ist kein Hinweis nötig.'
      ],
      correct: [0, 2],
      hints: ['Die Schweiz ist ein Drittland, die Maschine wird ausgeführt.', 'Lies § 4 Nr. 3 Satz 3 und § 14 Abs. 4 Satz 1 Nr. 8 UStG.'],
      solution: `Richtig sind **A und C**.

- **A**: § 4 Nr. 3 Buchst. a Doppelbuchst. aa UStG befreit grenzüberschreitende Beförderungen und andere sonstige Leistungen, die sich unmittelbar auf Gegenstände der Ausfuhr beziehen.
- **B** ist falsch: Entscheidend ist der Bezug zur Ausfuhr bzw. Einfuhr, nicht allein der Grenzübertritt. Bei Transporten innerhalb der EU gelten andere Regeln (Ort der Leistung, § 3a UStG).
- **C**: Nach § 4 Nr. 3 Satz 3 UStG muss der Unternehmer die Voraussetzungen nachweisen (Belegnachweis; Einzelheiten in der UStDV).
- **D** ist falsch: Die Rechnung muss einen Hinweis auf die Steuerbefreiung enthalten (§ 14 Abs. 4 Satz 1 Nr. 8 UStG).

Im Einzelfall prüft die Buchhaltung oder die Steuerberatung.`
    },
    {
      id: 'lf03-umsatzsteuer-a14', type: 'text', difficulty: 2, points: 3,
      q: 'Ein Kunde fragt: „Warum ist die Umsatzsteuer für Ihre Spedition kein Kostenfaktor, obwohl Sie auf jede Dieselrechnung 19 % bezahlen?“ Erkläre ihm das Prinzip in eigenen Worten.',
      model: 'Die Umsatzsteuer, die wir auf Eingangsrechnungen wie Diesel bezahlen, ist für uns Vorsteuer. Wir dürfen sie von der Umsatzsteuer abziehen, die wir unseren Kunden in Rechnung stellen und an das Finanzamt abführen müssen. Wir zahlen also nur die Differenz, die Zahllast. Damit ist die Steuer für uns ein durchlaufender Posten. Tragen muss sie am Ende der Endverbraucher, der keinen Vorsteuerabzug hat.',
      criteria: [
        { text: 'nennt Vorsteuer bzw. Vorsteuerabzug', keywords: ['Vorsteuer'], points: 1 },
        { text: 'erklärt die Verrechnung mit der Umsatzsteuer / Zahllast', keywords: ['abzieh|verrechn|Zahllast|Differenz'], points: 1 },
        { text: 'nennt durchlaufenden Posten oder Endverbraucher als Träger', keywords: ['durchlaufend|Endverbraucher|Verbraucher'], points: 1 }
      ],
      hints: ['Was passiert mit der Steuer aus Eingangsrechnungen?', 'Wer kann die Steuer nicht weitergeben?'],
      solution: 'Die gezahlte Steuer ist **Vorsteuer** und wird mit der eingenommenen **Umsatzsteuer** verrechnet; abgeführt wird nur die **Zahllast**. Für die Spedition ist die Umsatzsteuer daher ein **durchlaufender Posten**; wirtschaftlich trägt sie der **Endverbraucher**.'
    },
    {
      id: 'lf03-umsatzsteuer-a15', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Großinvestition im Mai',
      intro: `Die Hochwald Logistik e.K. (monatliche Voranmeldung) hat im Mai 2026 folgende Rechnungen gebucht (alle Beträge netto, 19 % USt):

- Ausgangsrechnungen an Versender: 120.000,00 €
- Eingangsrechnung für eine neue Sattelzugmaschine: 95.000,00 €
- Eingangsrechnungen für Diesel und Werkstatt: 30.000,00 €`,
      hints: ['Berechne zuerst die Umsatzsteuer und die gesamte Vorsteuer.', 'Vergleiche: Welcher Betrag ist größer?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf03-umsatzsteuer-a15-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Umsatzsteuer, die gesamte Vorsteuer und den Vorsteuerüberhang.',
          formula: 'Vorsteuerüberhang = Vorsteuer − Umsatzsteuer',
          fields: [
            { id: 'ust', label: 'Umsatzsteuer', unit: '€', answer: 22800, tol: 0.01 },
            { id: 'vst', label: 'Vorsteuer gesamt', unit: '€', answer: 23750, tol: 0.01 },
            { id: 'ueb', label: 'Vorsteuerüberhang', unit: '€', answer: 950, tol: 0.01 }
          ],
          hints: ['Vorsteuer: (95.000 € + 30.000 €) × 0,19.', 'Hier ist die Vorsteuer größer.'],
          solution: `**USt:** 120.000 € × 0,19 = **22.800 €**

**VSt:** 95.000 € × 0,19 = 18.050 €; 30.000 € × 0,19 = 5.700 €; zusammen 18.050 € + 5.700 € = **23.750 €** (Kontrolle: 125.000 € × 0,19 = 23.750 €)

**Vorsteuerüberhang:** 23.750 € − 22.800 € = **950 €**`
        },
        {
          id: 'lf03-umsatzsteuer-a15-2', type: 'booking', difficulty: 3, points: 2,
          q: 'Bilde die Umbuchung zum Monatsende (das kleinere Konto wird über das größere abgeschlossen).',
          accounts: ['Umsatzsteuer', 'Vorsteuer', 'Bank', 'Forderungen a. LL', 'Verbindlichkeiten a. LL', 'Schlussbilanzkonto'],
          entries: [
            { side: 'S', account: 'Umsatzsteuer', amount: 22800 },
            { side: 'H', account: 'Vorsteuer', amount: 22800 }
          ],
          hints: ['Kleiner ist diesmal die Umsatzsteuer.', 'Umsatzsteuer hat ihren Saldo im Haben – zum Ausbuchen ins Soll.'],
          solution: `**Umsatzsteuer 22.800 € an Vorsteuer 22.800 €**

Die Umsatzsteuer (Passivkonto, Saldo im Haben) ist das kleinere Konto und wird im **Soll** ausgebucht. Gegenbuchung im **Haben** der Vorsteuer. Auf dem Konto Vorsteuer bleibt ein Sollsaldo von 23.750 € − 22.800 € = 950 € stehen: der **Vorsteuerüberhang**, eine Forderung gegenüber dem Finanzamt.`
        },
        {
          id: 'lf03-umsatzsteuer-a15-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen zum Ergebnis sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Spedition muss für Mai 950 € an das Finanzamt zahlen.',
            'Die Spedition hat für Mai einen Erstattungsanspruch von 950 € gegenüber dem Finanzamt.',
            'Auch bei einem Überhang muss die Voranmeldung für Mai fristgerecht übermittelt werden.',
            'Der Überhang entsteht vor allem durch die Vorsteuer aus der großen Investition.'
          ],
          correct: [1, 2, 3],
          hints: ['Vorsteuer > Umsatzsteuer: Wer bekommt Geld?', 'Die Pflicht zur Voranmeldung hängt nicht vom Ergebnis ab.'],
          solution: 'Richtig sind **B, C und D**. Weil die Vorsteuer größer ist, entsteht ein **Erstattungsanspruch** (B). Die Voranmeldung ist trotzdem bis zum 10.06.2026 zu übermitteln (C). Ursache ist die Vorsteuer von 18.050 € aus dem Kauf der Sattelzugmaschine (D). A ist falsch, es gibt keine Zahllast.'
        }
      ]
    }
  ],
  quiz: ['lf03-umsatzsteuer-a2', 'lf03-umsatzsteuer-a4', 'lf03-umsatzsteuer-a5', 'lf03-umsatzsteuer-a8', 'lf03-umsatzsteuer-a15'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 3, Inhalte: Umsatzsteuer, Vorsteuer, Zahllast' },
    { title: 'Umsatzsteuergesetz § 12 Steuersätze', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html', asOf: '2026-10' },
    { title: 'Umsatzsteuergesetz § 4 Steuerbefreiungen (Nr. 3)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__4.html', asOf: '2026-10' },
    { title: 'Umsatzsteuergesetz § 14 Ausstellung von Rechnungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html', asOf: '2026-10' },
    { title: 'Umsatzsteuergesetz § 15 Vorsteuerabzug', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html', asOf: '2026-10' },
    { title: 'Umsatzsteuergesetz § 18 Besteuerungsverfahren', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__18.html', asOf: '2026-10' },
    { title: 'Umsatzsteuer-Durchführungsverordnung § 46 (Fristverlängerung)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustdv_1980/__46.html', asOf: '2026-10' },
    { title: 'Abgabenordnung § 108 Fristen und Termine', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ao_1977/__108.html', asOf: '2026-10' }
  ],
  links: ['lf03-buchen-bestandskonten', 'lf03-inventur-bilanz']
};
