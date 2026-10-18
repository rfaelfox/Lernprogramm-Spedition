// Übungsaufgaben aus dem LF-7-Unterricht (Arbeitsblätter „Übungsaufgaben Umsatzsteuer“, Kontenrahmen der Modufa Spedition).
// Aufgabentexte nach den Arbeitsblättern, Lösungen selbst berechnet.

// Konten wie im Kontenrahmen der Arbeitsblätter
const K = {
  BGA: '0200 Anlagen, Maschinen, BGA',
  FP: '0220 Fuhrpark',
  KA: '1000 Kasse',
  BA: '1020 Bank',
  FO: '1400 Forderungen a. LL',
  VS: '1457 Vorsteuer',
  VB: '1600 Verbindlichkeiten a. LL',
  US: '1669 Umsatzsteuer',
  ZA: '2210 Zinsaufwendungen',
  ZE: '2710 Zinserträge',
  GE: '2800 Grundstücks- u. Gebäudeerträge',
  TS: '3000 Treib- und Schmierstoffe',
  RE: '3010 Reifen',
  ET: '3020 Ersatzteile und Werkstattmaterialien',
  HM: '3040 Heizmaterial',
  LO: '4000 Lohn- und Lohnnebenkosten',
  GH: '4100 Gehalts- und Gehaltsnebenkosten',
  REP: '4230 Reparaturen fremde Werkstätten',
  VE: '4240 Versicherung',
  MI: '4300 Miet- und Pachtkosten',
  BM: '4400 Aufwand Büromaterial',
  VW: '4400 Verwaltungskosten',
  KO: '4460 Kommunikationskosten',
  ST: '4500 Betriebliche Steuern',
  RB: '4650 Rechts-, Prüfungs- und Beratungskosten',
  LK: '7600 Lagereikosten',
  LFL: '8200 Luftfrachtspeditionsleistungen',
  KWL: '8400 Kraftwagenspeditionsleistungen',
  LAL: '8600 Lagereileistungen'
};
// Auf den Arbeitsblättern steht unter 4400 einmal „Aufwand Büromaterial“ und einmal „Verwaltungskosten“.
// Damit die Auswahl eindeutig bleibt, enthält jede Aufgabe nur eine der beiden Bezeichnungen.
const ALL = Object.values(K).filter((a) => a !== K.VW);
const ALL_VW = Object.values(K).filter((a) => a !== K.BM);

const eur = (n) => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
const side = (rows, s) => rows.filter((r) => r[0] === s).map((r) => `${r[1].replace(/^\d+ /, '')} ${eur(r[2])}`).join(' und ');

// Buchungssatz-Teilaufgabe: rows = [['S'|'H', Konto, Betrag], ...]
function bk(id, q, rows, why = '', { vw = false, points } = {}) {
  return {
    id, type: 'booking', difficulty: 2, points: points || rows.length,
    q,
    accounts: vw ? ALL_VW : ALL,
    entries: rows.map(([s, account, amount]) => ({ side: s, account, amount })),
    hints: ['Eingangsrechnung: Vorsteuer im Soll. Ausgangsrechnung: Umsatzsteuer im Haben.', 'Steht „brutto“ oder „Rechnungsbetrag“ da? Dann Netto = Brutto ÷ 1,19.'],
    solution: `**${side(rows, 'S')} an ${side(rows, 'H')}**${why ? '\n\n' + why : ''}`
  };
}
function zl(id, q, ust, vst, why) {
  return {
    id, type: 'calc', difficulty: 3, points: 3,
    q,
    formula: 'Zahllast = Umsatzsteuer − Vorsteuer (nur Buchungen dieses Monats)',
    fields: [
      { id: 'ust', label: 'Umsatzsteuer des Monats', unit: '€', answer: ust, tol: 0.01 },
      { id: 'vst', label: 'Vorsteuer des Monats', unit: '€', answer: vst, tol: 0.01 },
      { id: 'zl', label: ust >= vst ? 'Zahllast' : 'Vorsteuerüberhang', unit: '€', answer: Math.round(Math.abs(ust - vst) * 100) / 100, tol: 0.01 }
    ],
    hints: ['Zähle nur die Umsatzsteuer aus den Ausgangsrechnungen und die Vorsteuer aus den Eingangsrechnungen dieses Monats.', 'Der Anfangsbestand ist die Zahllast des Vormonats. Wird er im Monat überwiesen, heben sich Anfangsbestand und Zahlung auf.'],
    solution: why
  };
}

export default {
  id: 'lf07-umsatzsteuer-uebungen',
  area: 'LF07',
  topic: 'lf07-ust-unterricht',
  title: 'Umsatzsteuer: Übungsaufgaben aus dem Unterricht',
  status: 'vollstaendig',
  minutes: 90,
  // Verknüpfung mit der nächsten Klassenarbeit in LF 7 (Unterricht dienstags)
  examPrep: { kind: 'Klassenarbeit', weekday: 2, note: 'Umsatzsteuer' },
  validity: {
    asOf: '2026',
    note: 'Steuersätze 19 % und 7 % (§ 12 UStG), Stand Oktober 2026. Aufgaben und Kontenrahmen stammen von den Arbeitsblättern aus dem LF-7-Unterricht; die Lösungen sind selbst berechnet.'
  },
  goals: [
    'Ich kann an einer Leistungskette zeigen, dass jede Stufe nur ihren Mehrwert versteuert.',
    'Ich kann Netto, Steuer und Brutto sicher berechnen, auch bei 7 %.',
    'Ich kann Eingangs- und Ausgangsrechnungen, Bankauszüge und Barkäufe mit dem Kontenrahmen der Modufa Spedition buchen.',
    'Ich erkenne steuerfreie Vorgänge wie Löhne, Zinsen, Versicherungen, Miete und Gewerbesteuer.',
    'Ich kann die Konten Vorsteuer und Umsatzsteuer führen, die Zahllast ermitteln und ihre Überweisung buchen.'
  ],
  simple: `# Worum geht es?

Diese Lektion enthält die **Übungsaufgaben Umsatzsteuer aus dem LF-7-Unterricht** mit dem Kontenrahmen der **Modufa Spedition**. Sie bereitet dich auf die nächste Klassenarbeit in LF 7 vor.

# Das Wichtigste aus deiner Mitschrift

- Umsatzsteuer = **Mehrwertsteuer**. Der Staat erhebt sie auf gewerbliche Güter und Dienstleistungen.
- **Steuerfrei** sind z. B. Vermietung, Arztleistungen, Immobiliengeschäfte und Exporte.
- Steuersätze: **19 %** normal, **7 %** z. B. für Lebensmittel und Verlagsprodukte (Bücher, Zeitschriften).
- Die Steuer wird auf den **Nettoverkaufspreis** erhoben.
- Die Steuer beim **Einkauf** heißt **Vorsteuer**. Sie ist eine **Forderung** gegenüber dem Finanzamt.
- Die Steuer beim **Verkauf** heißt **Umsatzsteuer**. Sie ist eine **Verbindlichkeit** gegenüber dem Finanzamt.

# Die drei Rechenwege

| gesucht | 19 % | 7 % |
|---|---|---|
| Steuer aus Netto | Netto × 0,19 | Netto × 0,07 |
| Netto aus Brutto | Brutto ÷ 1,19 | Brutto ÷ 1,07 |
| Steuer aus Brutto | Brutto − Netto | Brutto − Netto |

**Achtung:** Nie 19 % vom Bruttobetrag rechnen. Beispiel: 95.795 € brutto ÷ 1,19 = 80.500 € netto, Steuer 15.295 €. Falsch wäre 95.795 € × 0,19 = 18.201,05 €.

# So erkennst du, was zu buchen ist

| Beleg | typischer Buchungssatz |
|---|---|
| **ER** (Eingangsrechnung) | Aufwand oder Anlage (netto) + **Vorsteuer** an Verbindlichkeiten (brutto) |
| **AR** (Ausgangsrechnung) | Forderungen (brutto) an Leistungserlöse (netto) + **Umsatzsteuer** |
| **BA**, Zahlung einer ER | Verbindlichkeiten an Bank |
| **BA**, Zahlungseingang eines Kunden | Bank an Forderungen |
| Barkauf | Aufwand + Vorsteuer an Kasse |

Keine Umsatzsteuer haben: **Löhne und Gehälter, Zinsen, Versicherungen, Miete für Grundstücke und Räume, Gewerbesteuer und Grundsteuer**.

# Zahllast

**Zahllast = Umsatzsteuer − Vorsteuer** des Monats. Überwiesen wird sie mit **Umsatzsteuer an Bank**, nicht mit Verbindlichkeiten an Bank.`,
  deep: `# Aufgabe 1 vom ersten Arbeitsblatt: der Weg eines Möbelstücks

| Umsatzstufe | Einkauf netto | Vorsteuer | Verkauf netto | Umsatzsteuer | Mehrwert | Zahllast |
|---|---:|---:|---:|---:|---:|---:|
| Forstbetrieb | 0 | 0 | 500 | 95 | 500 | 95 |
| Schreinerei | 500 | 95 | 900 | 171 | 400 | 76 |
| Möbel Martin | 900 | 171 | 2.100 | 399 | 1.200 | 228 |
| **Summe** | | | | | **2.100** | **399** |

Das Finanzamt erhält insgesamt 95 + 76 + 228 = **399 €**. Das sind genau 19 % vom Endpreis 2.100 €. Jede Stufe versteuert nur ihren **Mehrwert** (Verkauf netto − Einkauf netto).

**Warum ist die Umsatzsteuer für die Schreinerei kein Kostenfaktor?** Die Schreinerei zahlt 95 € Vorsteuer an den Forstbetrieb und nimmt 171 € Umsatzsteuer von Möbel Martin ein. An das Finanzamt überweist sie 171 − 95 = 76 €. Ausgegeben hat sie 95 + 76 = 171 €, eingenommen hat sie 171 €. Es bleibt nichts bei ihr hängen.

# Die Zahllast aus T-Konten ablesen

Auf den Arbeitsblättern steht auf dem Konto Umsatzsteuer oft ein **Anfangsbestand** im Haben. Das ist die Zahllast des Vormonats. Wird sie im Monat überwiesen (*Umsatzsteuer an Bank*), steht derselbe Betrag im Soll und beide heben sich auf.

Beispiel vom Arbeitsblatt: Umsatzsteuer Haben 2.500 (Anfangsbestand), 1.700, 4.800; Soll 2.500 (Überweisung). Vorsteuer Soll 1.500, 700, 3.200.

- Umsatzsteuer des Monats: 1.700 + 4.800 = **6.500 €**
- Vorsteuer des Monats: 1.500 + 700 + 3.200 = **5.400 €**
- Zahllast: 6.500 − 5.400 = **1.100 €**

# Abschluss in zwei Schritten

1. **Umbuchung:** Das kleinere Konto wird über das größere abgeschlossen, meist *Umsatzsteuer an Vorsteuer* in Höhe der Vorsteuer.
2. **Überweisung:** *Umsatzsteuer an Bank* in Höhe der Zahllast.

Ist die Vorsteuer größer, entsteht ein **Vorsteuerüberhang**. Dann gibt es nichts zu überweisen, das Finanzamt erstattet den Betrag.

# Anfangsbestand Vorsteuer und Zahlung „abzüglich Vorsteuerguthaben“

In Aufgabe 5 hat die Vorsteuer einen Anfangsbestand von 150 € und die Umsatzsteuer von 3.900 €. Die Zahlung für den Vormonat beträgt 3.900 − 150 = 3.750 €. Gebucht wird *Umsatzsteuer 3.900 an Vorsteuer 150 und Bank 3.750*. Damit sind beide Anfangsbestände ausgeglichen, und für den neuen Monat zählen nur die neuen Buchungen.

# Verkauf von Anlagen

Verkauft die Spedition eine alte Wechselbrücke oder einen Firmen-PKW, schreibt sie eine Rechnung mit Umsatzsteuer: *Forderungen an Fuhrpark (netto) und Umsatzsteuer*. In diesen Aufgaben wird angenommen, dass der Verkaufspreis dem Buchwert entspricht. Gewinne oder Verluste aus Anlagenverkäufen kommen später.`,
  terms: [
    { term: 'ER, AR, BA', def: 'Eingangsrechnung (wir kaufen ein), Ausgangsrechnung (wir stellen eine Leistung in Rechnung), Bankauszug (Lastschrift = Geld geht ab, Gutschrift = Geld kommt herein).' },
    { term: 'Mehrwert', def: 'Unterschied zwischen Nettoverkaufspreis und Nettoeinkaufspreis einer Stufe. Nur er wird auf jeder Stufe besteuert.' },
    { term: 'Vorsteuer (1457)', def: 'Umsatzsteuer auf Eingangsrechnungen. Aktivkonto, Forderung gegenüber dem Finanzamt, Buchung im Soll.' },
    { term: 'Umsatzsteuer (1669)', def: 'Steuer auf Ausgangsrechnungen. Passivkonto, Verbindlichkeit gegenüber dem Finanzamt, Buchung im Haben.' },
    { term: 'Zahllast', def: 'Umsatzsteuer minus Vorsteuer eines Monats. Wird in der Regel monatlich ermittelt und bis zum 10. des Folgemonats überwiesen.' },
    { term: 'Vorsteuerüberhang', def: 'Die Vorsteuer ist größer als die Umsatzsteuer. Das Finanzamt erstattet den Unterschied.' },
    { term: 'Lagereileistungen (8600) und Lagereikosten (7600)', def: 'Lagereileistungen sind Erträge aus Lagerleistungen für Kunden (Ausgangsrechnung). Lagereikosten sind Aufwendungen für fremde Lagerleistungen (Eingangsrechnung).' }
  ],
  example: `# Vier Buchungen, die oft falsch gemacht werden

**1. Telefonrechnung brutto 249,90 € per Lastschrift**

Netto = 249,90 ÷ 1,19 = 210,00 €, Vorsteuer = 39,90 €.

*Kommunikationskosten 210,00 und Vorsteuer 39,90 an Bank 249,90*

**2. AR über Lagerleistung, brutto 95.795 €**

Netto = 95.795 ÷ 1,19 = 80.500 €, Umsatzsteuer = 15.295 €. Erlöskonto ist **8600 Lagereileistungen**, nicht 7600 Lagereikosten.

*Forderungen 95.795 an Lagereileistungen 80.500 und Umsatzsteuer 15.295*

**3. Lastschrift für eine Eingangsrechnung (ER 2237, 26.180 €)**

Wir bezahlen eine Schuld. *Verbindlichkeiten 26.180 an Bank 26.180*

**4. Überweisung der Zahllast**

*Umsatzsteuer an Bank*. Die Zahllast steht auf dem Konto Umsatzsteuer, nicht auf den Verbindlichkeiten a. LL.`,
  rules: [
    'Brutto ÷ 1,19 = Netto. Nie 19 % vom Bruttobetrag rechnen.',
    'Fachzeitschriften, Bücher und Lebensmittel: 7 %, also Brutto ÷ 1,07.',
    'Löhne, Gehälter, Zinsen, Versicherungen, Miete und Gewerbe- oder Grundsteuer: keine Vorsteuer.',
    'ER: Vorsteuer im Soll. AR: Umsatzsteuer im Haben.',
    'Kunde zahlt: Bank an Forderungen. Wir zahlen eine ER: Verbindlichkeiten an Bank.',
    'Erträge aus Lagerleistungen auf 8600 Lagereileistungen, nicht auf 7600 Lagereikosten.',
    'Zahllast = Umsatzsteuer − Vorsteuer des Monats; Überweisung: Umsatzsteuer an Bank.'
  ],
  summary: `- Jede Stufe versteuert nur ihren **Mehrwert**; für Unternehmen ist die Umsatzsteuer **kein Kostenfaktor**, sie trägt der **Endverbraucher**.
- **Netto = Brutto ÷ 1,19** (bei 7 %: ÷ 1,07).
- **ER**: Aufwand/Anlage + Vorsteuer an Verbindlichkeiten. **AR**: Forderungen an Leistungserlöse + Umsatzsteuer.
- **Steuerfrei** in diesen Aufgaben: Löhne, Gehälter, Zinsen, Versicherungen, Miete, Gewerbe- und Grundsteuer.
- **Zahllast** = Umsatzsteuer − Vorsteuer; Umbuchung *Umsatzsteuer an Vorsteuer*, Überweisung *Umsatzsteuer an Bank*.`,
  mistakes: [
    { wrong: '95.795 € brutto × 0,19 = 18.201,05 € Umsatzsteuer.', right: 'Der Bruttobetrag ist 119 %. Netto = 95.795 ÷ 1,19 = 80.500 €, Umsatzsteuer = 15.295 €.' },
    { wrong: 'Telefonrechnung brutto 249,90 €: Vorsteuer = 249,90 × 0,19 = 47,48 €.', right: 'Netto = 249,90 ÷ 1,19 = 210,00 €, Vorsteuer = 39,90 €.' },
    { wrong: 'Löhne 12.500 € plus 19 % = 14.875 € an Bank.', right: 'Löhne sind nicht umsatzsteuerpflichtig: Lohn- und Lohnnebenkosten 12.500 an Bank 12.500.' },
    { wrong: 'AR über Lagerleistung: Forderungen an Lagereikosten.', right: 'Eine Ausgangsrechnung bringt Ertrag: Forderungen an 8600 Lagereileistungen und Umsatzsteuer.' },
    { wrong: 'Kauf von Schreibwaren auf BGA buchen.', right: 'Schreibwaren werden verbraucht, sie sind Aufwand: Aufwand Büromaterial bzw. Verwaltungskosten, keine Anlage.' },
    { wrong: 'Lastschrift für eine Eingangsrechnung: Forderungen an Bank.', right: 'Wir bezahlen eine Schuld: Verbindlichkeiten a. LL an Bank.' },
    { wrong: 'Bankgutschrift vom Kunden: Bank an Verbindlichkeiten.', right: 'Der Kunde begleicht unsere Forderung: Bank an Forderungen a. LL.' },
    { wrong: 'Überweisung der Zahllast: Verbindlichkeiten a. LL an Bank.', right: 'Die Zahllast steht auf dem Konto Umsatzsteuer: Umsatzsteuer an Bank.' },
    { wrong: 'Den Anfangsbestand der Umsatzsteuer zur Zahllast des neuen Monats zählen.', right: 'Der Anfangsbestand ist die Zahllast des Vormonats. Wird sie überwiesen, heben sich Anfangsbestand und Zahlung auf.' }
  ],
  flashcards: [
    { q: 'Was ist der Mehrwert einer Umsatzstufe?', a: 'Nettoverkaufspreis − Nettoeinkaufspreis.' },
    { q: 'Warum ist die Umsatzsteuer für ein Unternehmen kein Kostenfaktor?', a: 'Die gezahlte Vorsteuer wird mit der eingenommenen Umsatzsteuer verrechnet; abgeführt wird nur die Differenz (Zahllast). Tragen muss die Steuer der Endverbraucher.' },
    { q: 'Wie rechnest du Netto aus 42.840 € brutto (19 %)?', a: '42.840 ÷ 1,19 = 36.000 € netto; Umsatzsteuer 6.840 €.' },
    { q: 'Wie viel Vorsteuer stecken in 17,85 € brutto für Fachzeitschriften?', a: '7 %: 17,85 ÷ 1,07 = 16,68 € netto; Vorsteuer 1,17 €.' },
    { q: 'Buchungssatz: AR für Kraftwagenspeditionsleistung', a: 'Forderungen a. LL an Kraftwagenspeditionsleistungen (netto) und Umsatzsteuer.' },
    { q: 'Buchungssatz: ER für LKW-Reparatur', a: 'Reparaturen fremde Werkstätten (netto) und Vorsteuer an Verbindlichkeiten a. LL (brutto).' },
    { q: 'Buchungssatz: BA Zahlungseingang eines Kunden', a: 'Bank an Forderungen a. LL.' },
    { q: 'Buchungssatz: BA Lastschrift für eine Eingangsrechnung', a: 'Verbindlichkeiten a. LL an Bank.' },
    { q: 'Buchungssatz: Gewerbesteuer per Lastschrift', a: 'Betriebliche Steuern an Bank (ohne Vorsteuer).' },
    { q: 'Buchungssatz: Mieteinnahme für ein Grundstück per Bank', a: 'Bank an Grundstücks- u. Gebäudeerträge (steuerfrei).' },
    { q: 'Welche Vorgänge in den Übungen haben keine Umsatzsteuer?', a: 'Löhne, Gehälter, Zinsen, Versicherungen, Miete, Gewerbesteuer, Grundsteuer und Zahlungen von Rechnungen.' },
    { q: 'Buchungssatz: Überweisung der Zahllast', a: 'Umsatzsteuer an Bank.' },
    { q: 'Bis wann wird die Zahllast in der Regel überwiesen?', a: 'Monatlich, bis zum 10. des Folgemonats.' },
    { q: 'Verkauf einer alten Wechselbrücke für 7.378 € brutto auf Rechnung', a: 'Forderungen 7.378 an Fuhrpark 6.200 und Umsatzsteuer 1.178 (Annahme: Verkaufspreis = Buchwert).' }
  ],
  tasks: [
    {
      id: 'lf07-ust-u-a1', type: 'case', difficulty: 2, points: 9,
      q: 'Arbeitsblatt Aufgabe 1: Umsatzstufen eines Möbelstücks',
      intro: `Ein Möbelstück entsteht in drei Stufen (alle Preise netto, 19 % USt):

| Umsatzstufe | Einkaufspreis netto | Verkaufspreis netto |
|---|---:|---:|
| Forstbetrieb | 0 € | 500 € |
| Schreinerei | 500 € | 900 € |
| Möbel Martin | 900 € | 2.100 € |`,
      hints: ['Der Einkaufspreis einer Stufe ist der Verkaufspreis der Stufe davor.', 'Zahllast = Umsatzsteuer − Vorsteuer.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf07-ust-u-a1-1', type: 'calc', difficulty: 1, points: 3,
          q: 'Schreinerei: Berechne Vorsteuer, Umsatzsteuer und Zahllast.',
          formula: 'Vorsteuer = Einkauf × 0,19; Umsatzsteuer = Verkauf × 0,19; Zahllast = USt − VSt',
          fields: [
            { id: 'vst', label: 'Vorsteuer', unit: '€', answer: 95, tol: 0.01 },
            { id: 'ust', label: 'Umsatzsteuer', unit: '€', answer: 171, tol: 0.01 },
            { id: 'zl', label: 'Zahllast', unit: '€', answer: 76, tol: 0.01 }
          ],
          hints: ['500 × 0,19 und 900 × 0,19.'],
          solution: 'Vorsteuer 500 × 0,19 = **95 €**, Umsatzsteuer 900 × 0,19 = **171 €**, Zahllast 171 − 95 = **76 €**. Der Mehrwert der Schreinerei ist 400 €, und 400 × 0,19 = 76 €.'
        },
        {
          id: 'lf07-ust-u-a1-2', type: 'calc', difficulty: 2, points: 3,
          q: 'Möbel Martin: Berechne Mehrwert, Umsatzsteuer und Zahllast.',
          fields: [
            { id: 'mw', label: 'Mehrwert', unit: '€', answer: 1200, tol: 0.01 },
            { id: 'ust', label: 'Umsatzsteuer', unit: '€', answer: 399, tol: 0.01 },
            { id: 'zl', label: 'Zahllast', unit: '€', answer: 228, tol: 0.01 }
          ],
          hints: ['Mehrwert = Verkauf netto − Einkauf netto.'],
          solution: 'Mehrwert 2.100 − 900 = **1.200 €**, Umsatzsteuer 2.100 × 0,19 = **399 €**, Vorsteuer 900 × 0,19 = 171 €, Zahllast 399 − 171 = **228 €**.'
        },
        {
          id: 'lf07-ust-u-a1-3', type: 'calc', difficulty: 2, points: 1,
          q: 'Wie viel Umsatzsteuer erhält das Finanzamt insgesamt von allen drei Stufen?',
          fields: [{ id: 'sum', label: 'Summe der Zahllasten', unit: '€', answer: 399, tol: 0.01 }],
          hints: ['Forstbetrieb 95 € + Schreinerei + Möbel Martin.'],
          solution: '95 + 76 + 228 = **399 €**. Das sind genau 19 % vom Endpreis 2.100 €, den der Endverbraucher zahlt.'
        },
        {
          id: 'lf07-ust-u-a1-4', type: 'mc', difficulty: 2, points: 1,
          q: 'Warum ist die Umsatzsteuer für die Schreinerei kein Kostenfaktor?',
          options: [
            'Weil sie die gezahlte Vorsteuer von 95 € mit der eingenommenen Umsatzsteuer von 171 € verrechnen darf und nur 76 € abführt.',
            'Weil Schreinereien von der Umsatzsteuer befreit sind.',
            'Weil der Forstbetrieb die Steuer für sie bezahlt.',
            'Weil die Schreinerei die Umsatzsteuer als Aufwand absetzt.'
          ],
          correct: [0],
          hints: ['Rechne: Was zahlt sie aus, was nimmt sie ein?'],
          solution: 'Die Schreinerei zahlt 95 € Vorsteuer und 76 € Zahllast, zusammen 171 €. Genau 171 € Umsatzsteuer hat sie von Möbel Martin eingenommen. Die Steuer läuft nur durch.'
        }
      ]
    },
    {
      id: 'lf07-ust-u-a2', type: 'cloze', difficulty: 1, points: 9,
      q: 'Arbeitsblatt Aufgabe 2: Ergänze den Lückentext.',
      text: 'Die USt ist nur vom [[Endverbraucher|Verbraucher]] zu tragen. Sie belastet das [[Unternehmen]] nicht. Die Vorsteuer stellt eine [[Forderung]] gegenüber dem Finanzamt dar. Die Umsatzsteuer ist dagegen eine [[Verbindlichkeit]] gegenüber dem Finanzamt. Die Zahllast wird in der Regel [[monatlich]] ermittelt und bis zum [[10.|10|zehnten]] des [[Folgemonats|nächsten Monats]] an das Finanzamt überwiesen. Mehrwert ist der [[Unterschied|Differenzbetrag|Differenz]] zwischen dem Nettoverkaufs- und Nettoeinkaufspreis. Durch den Vorsteuerabzug wird erreicht, dass auf jeder Stufe des Warenwegs nur der [[Mehrwert]] dieser Stufe besteuert wird.',
      hints: ['Vorsteuer: Geld, das wir vom Finanzamt bekommen. Umsatzsteuer: Geld, das wir dem Finanzamt schulden.'],
      solution: 'Endverbraucher · Unternehmen · Forderung · Verbindlichkeit · monatlich · 10. · Folgemonats · Unterschied · Mehrwert'
    },
    {
      id: 'lf07-ust-u-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Arbeitsblatt Aufgabe 3: Ermittle die Zahllast aus den T-Konten.

- **Umsatzsteuer:** Soll 2.500; Haben 2.500 (Anfangsbestand), 1.700, 4.800
- **Vorsteuer:** Soll 1.500, 700, 3.200`,
      formula: 'Zahllast = Umsatzsteuer − Vorsteuer (nur Buchungen dieses Monats)',
      fields: [
        { id: 'ust', label: 'Umsatzsteuer des Monats', unit: '€', answer: 6500, tol: 0.01 },
        { id: 'vst', label: 'Vorsteuer des Monats', unit: '€', answer: 5400, tol: 0.01 },
        { id: 'zl', label: 'Zahllast', unit: '€', answer: 1100, tol: 0.01 }
      ],
      hints: ['Die 2.500 im Haben ist der Anfangsbestand, die 2.500 im Soll seine Überweisung. Beide heben sich auf.'],
      solution: `Umsatzsteuer: 1.700 + 4.800 = **6.500 €** (der Anfangsbestand 2.500 € wurde mit 2.500 € im Soll bezahlt).

Vorsteuer: 1.500 + 700 + 3.200 = **5.400 €**

Zahllast: 6.500 − 5.400 = **1.100 €**. Rechne zur Kontrolle mit den Saldos: Umsatzsteuer 9.000 − 2.500 = 6.500 €.`
    },
    {
      id: 'lf07-ust-u-a4', type: 'case', difficulty: 3, points: 40,
      q: 'Übungsaufgaben Umsatzsteuer, Aufgabe 1 (Modufa Spedition)',
      intro: 'Bilde die Buchungssätze und führe die Konten Vorsteuer und Umsatzsteuer, so dass du daraus die Zahllast errechnen kannst. ER = Eingangsrechnung, AR = Ausgangsrechnung, BA = Bankauszug. Steuersatz 19 %, sofern nicht anders angegeben.',
      hints: ['Prüfe bei jedem Beleg zuerst: netto oder brutto? Gibt es überhaupt Umsatzsteuer?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        bk('lf07-ust-u-a4-a', 'a) Bareinkauf von Büromaterial, Rechnungsbetrag 41,65 €', [['S', K.BM, 35], ['S', K.VS, 6.65], ['H', K.KA, 41.65]], 'Netto = 41,65 ÷ 1,19 = 35,00 €, Vorsteuer 6,65 €. Bar bezahlt, also Kasse im Haben.'),
        bk('lf07-ust-u-a4-b', 'b) AR 123 an die BASF AG Ludwigshafen für erbrachte LKW-Speditionsleistung, netto 28.000,00 €', [['S', K.FO, 33320], ['H', K.KWL, 28000], ['H', K.US, 5320]], 'Umsatzsteuer 28.000 × 0,19 = 5.320 €, Forderung brutto 33.320 €.'),
        bk('lf07-ust-u-a4-c', 'c) BA: Überweisung der Löhne 12.500,00 €', [['S', K.LO, 12500], ['H', K.BA, 12500]], 'Löhne sind **nicht** umsatzsteuerpflichtig. Es gibt keine Vorsteuer und keinen Aufschlag. Falsch wäre 14.875 €.'),
        bk('lf07-ust-u-a4-d', 'd) ER über den Kauf eines PKW, Rechnungsbetrag 32.130,00 €', [['S', K.FP, 27000], ['S', K.VS, 5130], ['H', K.VB, 32130]], 'Netto = 32.130 ÷ 1,19 = 27.000 €, Vorsteuer 5.130 €. Der PKW gehört zum Fuhrpark.'),
        bk('lf07-ust-u-a4-e', 'e) ER über den Kauf einer neuen Büroeinrichtung 11.000,00 € + 19 % USt', [['S', K.BGA, 11000], ['S', K.VS, 2090], ['H', K.VB, 13090]], 'Vorsteuer 11.000 × 0,19 = **2.090 €**, Verbindlichkeit 13.090 €.'),
        bk('lf07-ust-u-a4-f', 'f) AR 124 an die BASF AG Ludwigshafen für erbrachte Lagerleistung, netto 18.000,00 €', [['S', K.FO, 21420], ['H', K.LAL, 18000], ['H', K.US, 3420]], 'Umsatzsteuer 18.000 × 0,19 = 3.420 €.'),
        bk('lf07-ust-u-a4-g', 'g) AR 125 an die BASF AG Ludwigshafen für erbrachte Luftfrachtspeditionsleistung, Rechnungsbetrag 42.840,00 €', [['S', K.FO, 42840], ['H', K.LFL, 36000], ['H', K.US, 6840]], 'Rechnungsbetrag = brutto. Netto = 42.840 ÷ 1,19 = 36.000 €, Umsatzsteuer 6.840 €.'),
        bk('lf07-ust-u-a4-h', 'h) Barkauf von Speditions-Fachzeitschriften, Bruttobetrag 17,85 €', [['S', K.VW, 16.68], ['S', K.VS, 1.17], ['H', K.KA, 17.85]], 'Zeitschriften haben **7 %**. Netto = 17,85 ÷ 1,07 = 16,68 €, Vorsteuer 1,17 €.', { vw: true }),
        bk('lf07-ust-u-a4-i', 'i) BA: Wir begleichen die ausstehende Rechnung 247 per Banküberweisung, 17.500,00 €', [['S', K.VB, 17500], ['H', K.BA, 17500]], 'Zahlung einer Eingangsrechnung: keine neue Steuer, die Vorsteuer wurde schon beim Rechnungseingang gebucht.'),
        bk('lf07-ust-u-a4-j', 'j) BA: Gutschrift auf dem Bankkonto, Überweisender BASF AG für die Rechnungen 123 (33.320 €), 124 (21.420 €) und 125 (42.840 €), Summe 97.580,00 €', [['S', K.BA, 97580], ['H', K.FO, 97580]], 'Der Kunde begleicht unsere Forderungen.'),
        bk('lf07-ust-u-a4-k', 'k) Reparatur an unserem LKW. Eingangsrechnung über netto 970,00 € zzgl. 184,30 € MwSt = 1.154,30 €', [['S', K.REP, 970], ['S', K.VS, 184.3], ['H', K.VB, 1154.3]]),
        bk('lf07-ust-u-a4-l', 'l) BA: Bankbelastung für Darlehenszinsen 1.200,00 €', [['S', K.ZA, 1200], ['H', K.BA, 1200]], 'Zinsen sind umsatzsteuerfrei.'),
        bk('lf07-ust-u-a4-m', 'm) BA: Wir erhalten die Februarmiete unseres Mieters J. Kisch in Höhe von 450,00 €', [['S', K.BA, 450], ['H', K.GE, 450]], 'Die Vermietung eines Grundstücks ist steuerfrei. Der Ertrag kommt auf 2800 Grundstücks- u. Gebäudeerträge.'),
        zl('lf07-ust-u-a4-z', 'Führe die Konten Vorsteuer und Umsatzsteuer und ermittle die Zahllast.', 15580, 7412.12, `**Umsatzsteuer (Haben):** b) 5.320 + f) 3.420 + g) 6.840 = **15.580,00 €**

**Vorsteuer (Soll):** a) 6,65 + d) 5.130 + e) 2.090 + h) 1,17 + k) 184,30 = **7.412,12 €**

**Zahllast:** 15.580,00 − 7.412,12 = **8.167,88 €**`),
        bk('lf07-ust-u-a4-n1', 'n) Schließe zuerst das Konto Vorsteuer über das Konto Umsatzsteuer ab (Umbuchung).', [['S', K.US, 7412.12], ['H', K.VS, 7412.12]], 'Das kleinere Konto (Vorsteuer) wird über das größere abgeschlossen.'),
        bk('lf07-ust-u-a4-n2', 'n) Buche die Überweisung der Zahllast an das Finanzamt.', [['S', K.US, 8167.88], ['H', K.BA, 8167.88]], 'Die Zahllast steht auf dem Konto Umsatzsteuer. Gebucht wird **Umsatzsteuer an Bank**.')
      ]
    },
    {
      id: 'lf07-ust-u-a5', type: 'case', difficulty: 3, points: 50,
      q: 'Übungsaufgaben Umsatzsteuer, Aufgabe 2 (Hausaufgabe)',
      intro: 'Bilde die Buchungssätze und führe die Konten Vorsteuer (Anfangsbestand 0,00 €) und Umsatzsteuer (Anfangsbestand 4.800,00 €). Steuersatz 19 %.',
      hints: ['Bei „Rechnungsbetrag“ oder „Bruttobetrag“ zuerst durch 1,19 teilen.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        bk('lf07-ust-u-a5-a', 'a) BA: Lastschrift, Gewerbesteuerzahlung an das Finanzamt Saarbrücken 4.000,00 €', [['S', K.ST, 4000], ['H', K.BA, 4000]], 'Gewerbesteuer ist eine betriebliche Steuer ohne Umsatzsteuer.'),
        bk('lf07-ust-u-a5-b', 'b) BA: Lastschrift, Umsatzsteuerzahlung für den Monat Januar 4.800,00 €', [['S', K.US, 4800], ['H', K.BA, 4800]], 'Damit ist der Anfangsbestand der Umsatzsteuer bezahlt.'),
        bk('lf07-ust-u-a5-c', 'c) BA: Lastschrift für das Begleichen der Rechnung 4711 des Treibstofflieferers Fuchs OIL mit 3.750,00 € und die Abbuchung der Telefonrechnung brutto 249,90 €', [['S', K.VB, 3750], ['S', K.KO, 210], ['S', K.VS, 39.9], ['H', K.BA, 3999.9]], `Die Rechnung 4711 ist schon gebucht, also nur Verbindlichkeiten an Bank. Die Telefonrechnung wird direkt abgebucht: Netto = 249,90 ÷ 1,19 = **210,00 €**, Vorsteuer **39,90 €** (nicht 47,48 €). Bank insgesamt 3.750 + 249,90 = 3.999,90 €.`),
        bk('lf07-ust-u-a5-d', 'd) BA: Zahlungseingang des Kunden Globus, Rechnung 349 mit 1.800,00 €', [['S', K.BA, 1800], ['H', K.FO, 1800]]),
        bk('lf07-ust-u-a5-e', 'e) ER 234 über den Kauf einer Schreibtischlampe, Nettopreis 90,00 €', [['S', K.BGA, 90], ['S', K.VS, 17.1], ['H', K.VB, 107.1]]),
        bk('lf07-ust-u-a5-f', 'f) ER 2235 über den Kauf von Schreibwaren, Rechnungsbetrag 85,68 €', [['S', K.BM, 72], ['S', K.VS, 13.68], ['H', K.VB, 85.68]], 'Netto = 85,68 ÷ 1,19 = 72,00 €. Schreibwaren werden verbraucht, also **Aufwand Büromaterial**, nicht BGA.'),
        bk('lf07-ust-u-a5-g', 'g) AR 149 an die Tailor Hoff GmbH für erbrachte Speditionsleistung, Rechnungsbetrag 511,70 €', [['S', K.FO, 511.7], ['H', K.KWL, 430], ['H', K.US, 81.7]], 'Netto = 511,70 ÷ 1,19 = 430,00 €. Annahme: Speditionsleistung mit dem LKW (8400).'),
        bk('lf07-ust-u-a5-h', 'h) BA: Zahlung der Rechnung 234 mit 107,10 € und der Rechnung 2235 mit 85,68 €', [['S', K.VB, 192.78], ['H', K.BA, 192.78]]),
        bk('lf07-ust-u-a5-i', 'i) Wir verkaufen eine veraltete Wechselbrücke an den Schrotthändler vor Ort, Rechnungsbetrag 7.378,00 €', [['S', K.FO, 7378], ['H', K.FP, 6200], ['H', K.US, 1178]], 'Netto = 7.378 ÷ 1,19 = 6.200 €. Die Wechselbrücke war im **Fuhrpark**; Annahme: Verkaufspreis = Buchwert.'),
        bk('lf07-ust-u-a5-j', 'j) AR 150 an die Tailor Hoff GmbH für erbrachte Luftfrachtspeditionsleistung, Nettobetrag 29.000,00 €', [['S', K.FO, 34510], ['H', K.LFL, 29000], ['H', K.US, 5510]]),
        bk('lf07-ust-u-a5-k1', 'k) BA: Bankbelastung für Darlehenszinsen 1.700,00 €', [['S', K.ZA, 1700], ['H', K.BA, 1700]]),
        bk('lf07-ust-u-a5-k2', 'k) BA: Bankbelastung für die Februarmiete unserer Lagerhalle 1.400,00 €', [['S', K.MI, 1400], ['H', K.BA, 1400]], 'Laut Aufgabe ohne Umsatzsteuer.'),
        bk('lf07-ust-u-a5-k3', 'k) BA: Bankgutschrift, Überweisender Tailor Hoff GmbH, Rechnungs-Nr. 150 mit 33.640,00 €', [['S', K.BA, 33640], ['H', K.FO, 33640]], 'Der Kunde zahlt, also **Forderungen** im Haben, nicht Verbindlichkeiten. Gebucht wird der eingegangene Betrag; 870 € der Rechnung bleiben offen.'),
        bk('lf07-ust-u-a5-l', 'l) ER 2236 über den Kauf eines LKW: Nettopreis 98.500,00 €, USt 18.715,00 €, Summe 117.215,00 €', [['S', K.FP, 98500], ['S', K.VS, 18715], ['H', K.VB, 117215]]),
        bk('lf07-ust-u-a5-m', 'm) AR 151 für erbrachte Lagerleistung an die BASF AG Ludwigshafen mit einem Bruttobetrag von 95.795,00 €', [['S', K.FO, 95795], ['H', K.LAL, 80500], ['H', K.US, 15295]], 'Netto = 95.795 ÷ 1,19 = **80.500 €**, Umsatzsteuer **15.295 €** (nicht 95.795 × 0,19). Erlöskonto **8600 Lagereileistungen**, nicht 7600 Lagereikosten.'),
        bk('lf07-ust-u-a5-n', 'n) BA: Überweisung der Löhne für den Monat Februar mit 16.200,00 €', [['S', K.LO, 16200], ['H', K.BA, 16200]]),
        bk('lf07-ust-u-a5-o', 'o) ER 2237: Kauf von Treibstoffen bei Fuchs OIL, netto 22.000,00 €', [['S', K.TS, 22000], ['S', K.VS, 4180], ['H', K.VB, 26180]]),
        bk('lf07-ust-u-a5-p', 'p) AR 152 für erbrachte Speditionsleistung gegenüber der Saarstahl AG, Rechnungsbetrag 180.880,00 €', [['S', K.FO, 180880], ['H', K.KWL, 152000], ['H', K.US, 28880]], 'Netto = 180.880 ÷ 1,19 = **152.000 €**, Umsatzsteuer **28.880 €**.'),
        bk('lf07-ust-u-a5-q1', 'q) BA: Gutschrift AR 151, 95.795,00 €', [['S', K.BA, 95795], ['H', K.FO, 95795]]),
        bk('lf07-ust-u-a5-q2', 'q) BA: Lastschrift ER 2237, 26.180,00 €', [['S', K.VB, 26180], ['H', K.BA, 26180]], 'Wir bezahlen eine Eingangsrechnung: **Verbindlichkeiten** an Bank.'),
        zl('lf07-ust-u-a5-r', 'r) Ermittle die Zahllast.', 50944.7, 22965.68, `**Umsatzsteuer:** Anfangsbestand 4.800 wurde in b) bezahlt. Neu: g) 81,70 + i) 1.178 + j) 5.510 + m) 15.295 + p) 28.880 = **50.944,70 €**

**Vorsteuer:** c) 39,90 + e) 17,10 + f) 13,68 + l) 18.715 + o) 4.180 = **22.965,68 €**

**Zahllast:** 50.944,70 − 22.965,68 = **27.979,02 €**`),
        bk('lf07-ust-u-a5-s', 's) BA: Überweisung der Zahllast an das Finanzamt Saarbrücken (nach der Umbuchung Umsatzsteuer an Vorsteuer).', [['S', K.US, 27979.02], ['H', K.BA, 27979.02]], 'Umsatzsteuer an Bank, nicht Verbindlichkeiten an Bank.')
      ]
    },
    {
      id: 'lf07-ust-u-a6', type: 'case', difficulty: 3, points: 30,
      q: 'Übungsaufgaben Umsatzsteuer, Aufgabe 3',
      intro: 'Bilde die Buchungssätze und führe die Konten Vorsteuer (Anfangsbestand 0,00 €) und Umsatzsteuer (Anfangsbestand 2.200,00 €). Den Fall j) (Einkauf für das Betriebsfest) lässt diese Lektion aus, siehe Hinweis bei der Zahllast.',
      hints: ['Achte bei g) auf „Rechnungsbetrag“.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        bk('lf07-ust-u-a6-a', 'a) BA: Lastschrift, Grundsteuer an das Finanzamt Saarbrücken 70,00 €', [['S', K.ST, 70], ['H', K.BA, 70]], 'Grundsteuer ist eine betriebliche Steuer ohne Umsatzsteuer.'),
        bk('lf07-ust-u-a6-b', 'b) BA: Lastschrift, Umsatzsteuerzahlung für den Monat Januar 2.200,00 €', [['S', K.US, 2200], ['H', K.BA, 2200]]),
        bk('lf07-ust-u-a6-c', 'c) BA: Lastschrift, Güterschadenhaftpflichtversicherung 950,00 €', [['S', K.VE, 950], ['H', K.BA, 950]], 'Versicherungen sind umsatzsteuerfrei.'),
        bk('lf07-ust-u-a6-d', 'd) BA: Zahlungseingang des Kunden Hager, Rechnung 349 mit 5.800,00 €', [['S', K.BA, 5800], ['H', K.FO, 5800]]),
        bk('lf07-ust-u-a6-e', 'e) ER 234 über den Kauf eines Schreibtisches, Nettopreis 900,00 €', [['S', K.BGA, 900], ['S', K.VS, 171], ['H', K.VB, 1071]]),
        bk('lf07-ust-u-a6-f', 'f) ER 2235 über den Kauf von Schreibwaren, Nettobetrag 20,00 €', [['S', K.BM, 20], ['S', K.VS, 3.8], ['H', K.VB, 23.8]]),
        bk('lf07-ust-u-a6-g', 'g) AR 149 an die Hager GmbH für erbrachte Speditionsleistung, Rechnungsbetrag 1.102,00 €', [['S', K.FO, 1102], ['H', K.KWL, 926.05], ['H', K.US, 175.95]], 'Netto = 1.102 ÷ 1,19 = 926,05 € (gerundet), Umsatzsteuer 175,95 €.'),
        bk('lf07-ust-u-a6-h', 'h) BA: Zahlung der Rechnung 234 mit 1.044,00 € und der Rechnung 2235 mit 23,20 €, Summe 1.067,20 €', [['S', K.VB, 1067.2], ['H', K.BA, 1067.2]], 'Gebucht wird der überwiesene Betrag. Auf dem Arbeitsblatt sind die Zahlbeträge kleiner als die Rechnungen (1.071 € und 23,80 €). Wie die Differenz behandelt wird (z. B. als Skonto), klärt der Unterricht.'),
        bk('lf07-ust-u-a6-i', 'i) AR 150 an die Hager GmbH für erbrachte Luftfrachtspeditionsleistung, Nettobetrag 22.500,00 €', [['S', K.FO, 26775], ['H', K.LFL, 22500], ['H', K.US, 4275]]),
        bk('lf07-ust-u-a6-k1', 'k) BA: Bankgutschrift für Zinsen 130,00 €', [['S', K.BA, 130], ['H', K.ZE, 130]]),
        bk('lf07-ust-u-a6-k2', 'k) BA: Bankbelastung für die Februarmiete unserer Büroräume 1.700,00 €', [['S', K.MI, 1700], ['H', K.BA, 1700]]),
        bk('lf07-ust-u-a6-k3', 'k) BA: Bankgutschrift, Überweisender Hager GmbH, Rechnungs-Nr. 150 mit 26.100,00 €', [['S', K.BA, 26100], ['H', K.FO, 26100]]),
        bk('lf07-ust-u-a6-l', 'l) ER 2236 über den Kauf eines PKW: Nettopreis 48.500,00 €, USt 7.760,00 €, Summe 56.260,00 €', [['S', K.FP, 48500], ['S', K.VS, 7760], ['H', K.VB, 56260]], 'Gebucht wird die Steuer, die auf der Rechnung steht. Hinweis: 7.760 € sind 16 % von 48.500 €; bei 19 % wären es 9.215 €.'),
        zl('lf07-ust-u-a6-m', 'm) Ermittle das Ergebnis aus den Konten Vorsteuer und Umsatzsteuer (ohne Fall j).', 4450.95, 7934.8, `**Umsatzsteuer:** Anfangsbestand 2.200 wurde in b) bezahlt. Neu: g) 175,95 + i) 4.275 = **4.450,95 €**

**Vorsteuer:** e) 171 + f) 3,80 + l) 7.760 = **7.934,80 €**

Die Vorsteuer ist größer: **Vorsteuerüberhang 3.483,85 €**. Es gibt keine Zahllast; das Finanzamt erstattet den Betrag. Fall j) (Einkauf für das Betriebsfest) ist nicht enthalten, weil der Kassenzettel Waren mit 7 % und 19 % mischt und die Vorsteuerfrage bei Betriebsfesten im Unterricht geklärt werden sollte.`)
      ]
    },
    {
      id: 'lf07-ust-u-a7', type: 'case', difficulty: 3, points: 35,
      q: 'Übungsaufgaben Umsatzsteuer, Aufgabe 4',
      intro: 'Bilde die Buchungssätze und führe die Konten Vorsteuer (Anfangsbestand 0,00 €) und Umsatzsteuer (Anfangsbestand 6.500,00 €), sodass du die Zahllast ermitteln kannst.',
      hints: ['Bei e) ist der Nettobetrag gegeben, bei g) der Bruttobetrag.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        bk('lf07-ust-u-a7-a', 'a) BA: Lastschrift, Umsatzsteuerzahlung für den Vormonat 6.500,00 €', [['S', K.US, 6500], ['H', K.BA, 6500]]),
        bk('lf07-ust-u-a7-b', 'b) ER 3301 über die Reparatur eines LKW in einer fremden Werkstatt, netto 1.850,00 € zzgl. 19 % USt', [['S', K.REP, 1850], ['S', K.VS, 351.5], ['H', K.VB, 2201.5]]),
        bk('lf07-ust-u-a7-c', 'c) BA: Lastschrift, Kfz-Versicherung für den Fuhrpark 2.380,00 € (steuerfrei)', [['S', K.VE, 2380], ['H', K.BA, 2380]]),
        bk('lf07-ust-u-a7-d', 'd) ER 3302: Kauf von Reifen für den Fuhrpark, netto 3.200,00 €, USt 608,00 €, Summe 3.808,00 €', [['S', K.RE, 3200], ['S', K.VS, 608], ['H', K.VB, 3808]]),
        bk('lf07-ust-u-a7-e', 'e) AR 201 an die Ford-Werke GmbH Saarlouis für erbrachte Kraftwagenspeditionsleistung, netto 45.000,00 €', [['S', K.FO, 53550], ['H', K.KWL, 45000], ['H', K.US, 8550]], 'Bei einer AR gibt es **keine Vorsteuer**: Forderung brutto 53.550 € an Erlös 45.000 € und Umsatzsteuer 8.550 €.'),
        bk('lf07-ust-u-a7-f', 'f) Barkauf von Büromaterial, Bruttobetrag 63,84 €', [['S', K.BM, 53.65], ['S', K.VS, 10.19], ['H', K.KA, 63.84]], 'Netto = 63,84 ÷ 1,19 = 53,65 € (gerundet), Vorsteuer 10,19 €. Barkauf, also **Kasse**, nicht Bank.'),
        bk('lf07-ust-u-a7-g', 'g) AR 202 an die Ford-Werke GmbH Saarlouis für erbrachte Lagerleistung, Rechnungsbetrag brutto 14.280,00 €', [['S', K.FO, 14280], ['H', K.LAL, 12000], ['H', K.US, 2280]], 'Die Forderung ist der **Bruttobetrag** 14.280 €. Netto 12.000 € auf Lagereileistungen, Umsatzsteuer 2.280 €.'),
        bk('lf07-ust-u-a7-h', 'h) BA: Überweisung der Gehälter für die Verwaltung 9.800,00 € (steuerfrei)', [['S', K.GH, 9800], ['H', K.BA, 9800]]),
        bk('lf07-ust-u-a7-i', 'i) ER 3303 über den Kauf eines neuen Gabelstaplers (Anlagevermögen), netto 18.000,00 €, USt 3.420,00 €', [['S', K.BGA, 18000], ['S', K.VS, 3420], ['H', K.VB, 21420]]),
        bk('lf07-ust-u-a7-j', 'j) BA: Zahlungseingang Ford-Werke GmbH Saarlouis, Rechnung 201, Betrag 53.550,00 €', [['S', K.BA, 53550], ['H', K.FO, 53550]]),
        bk('lf07-ust-u-a7-k', 'k) BA: Bankbelastung für Darlehenszinsen 640,00 € (steuerfrei)', [['S', K.ZA, 640], ['H', K.BA, 640]]),
        bk('lf07-ust-u-a7-l', 'l) AR 203 an die Dillinger Hütte AG für erbrachte Luftfrachtspeditionsleistung, netto 61.500,00 €', [['S', K.FO, 73185], ['H', K.LFL, 61500], ['H', K.US, 11685]]),
        bk('lf07-ust-u-a7-m', 'm) BA: Gutschrift, Überweisender Dillinger Hütte AG, Rechnung 203, Betrag 73.185,00 €', [['S', K.BA, 73185], ['H', K.FO, 73185]]),
        bk('lf07-ust-u-a7-n', 'n) ER 3304: Rechnung des Vermieters über die Märzmiete für das Lagerhallengrundstück 3.100,00 € (steuerfrei)', [['S', K.MI, 3100], ['H', K.VB, 3100]], 'Eine Rechnung, die noch nicht bezahlt ist: Verbindlichkeiten im Haben.'),
        zl('lf07-ust-u-a7-o', 'o) Ermittle die Zahllast.', 22515, 4389.69, `**Umsatzsteuer:** Anfangsbestand 6.500 wurde in a) bezahlt. Neu: e) 8.550 + g) 2.280 + l) 11.685 = **22.515,00 €**

**Vorsteuer:** b) 351,50 + d) 608 + f) 10,19 + i) 3.420 = **4.389,69 €**

**Zahllast:** 22.515,00 − 4.389,69 = **18.125,31 €**`),
        bk('lf07-ust-u-a7-o2', 'o) Buche die Umbuchung der Vorsteuer.', [['S', K.US, 4389.69], ['H', K.VS, 4389.69]]),
        bk('lf07-ust-u-a7-p', 'p) BA: Überweisung der Zahllast an das Finanzamt Saarbrücken.', [['S', K.US, 18125.31], ['H', K.BA, 18125.31]])
      ]
    },
    {
      id: 'lf07-ust-u-a8', type: 'case', difficulty: 3, points: 40,
      q: 'Übungsaufgaben Umsatzsteuer, Aufgabe 5',
      intro: 'Bilde die Buchungssätze und führe die Konten Vorsteuer (Anfangsbestand 150,00 €) und Umsatzsteuer (Anfangsbestand 3.900,00 €), sodass du die Zahllast ermitteln kannst.',
      hints: ['Bei b) werden beide Anfangsbestände ausgeglichen.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        bk('lf07-ust-u-a8-a', 'a) BA: Lastschrift, Gewerbesteuervorauszahlung an das Finanzamt Saarbrücken 1.500,00 € (steuerfrei)', [['S', K.ST, 1500], ['H', K.BA, 1500]]),
        bk('lf07-ust-u-a8-b', 'b) BA: Lastschrift, Umsatzsteuerzahlung für den Vormonat abzüglich Vorsteuerguthaben, Restbetrag 3.750,00 €', [['S', K.US, 3900], ['H', K.VS, 150], ['H', K.BA, 3750]], 'Umsatzsteuer 3.900 − Vorsteuer 150 = 3.750 € Zahlung. Mit dieser Buchung sind **beide** Anfangsbestände ausgeglichen.'),
        bk('lf07-ust-u-a8-c', 'c) ER 5011 über den Kauf von Heizmaterial für die Lagerhalle, netto 640,00 €, USt 121,60 €', [['S', K.HM, 640], ['S', K.VS, 121.6], ['H', K.VB, 761.6]]),
        bk('lf07-ust-u-a8-d', 'd) AR 301 an die Villeroy & Boch AG Merzig für erbrachte Kraftwagenspeditionsleistung, Bruttobetrag 26.775,00 €', [['S', K.FO, 26775], ['H', K.KWL, 22500], ['H', K.US, 4275]]),
        bk('lf07-ust-u-a8-e', 'e) BA: Zahlungseingang des Kunden Klein, Rechnung 288 mit 2.400,00 €', [['S', K.BA, 2400], ['H', K.FO, 2400]]),
        bk('lf07-ust-u-a8-f', 'f) Barkauf von Ersatzteilen und Werkstattmaterial für die eigene Werkstatt, Rechnungsbetrag 95,20 € (brutto)', [['S', K.ET, 80], ['S', K.VS, 15.2], ['H', K.KA, 95.2]]),
        bk('lf07-ust-u-a8-g', 'g) ER 5012 über den Kauf eines gebrauchten Anhängers für den Fuhrpark, netto 9.500,00 €, USt 1.805,00 €', [['S', K.FP, 9500], ['S', K.VS, 1805], ['H', K.VB, 11305]]),
        bk('lf07-ust-u-a8-h', 'h) AR 302 an die Villeroy & Boch AG Merzig für erbrachte Lagerleistung, netto 12.400,00 €', [['S', K.FO, 14756], ['H', K.LAL, 12400], ['H', K.US, 2356]]),
        bk('lf07-ust-u-a8-i', 'i) BA: Bankbelastung für die Rechts- und Beratungskosten des Steuerberaters, netto 480,00 € zzgl. 19 % USt', [['S', K.RB, 480], ['S', K.VS, 91.2], ['H', K.BA, 571.2]], 'Die Rechnung wird direkt vom Konto abgebucht, deshalb Bank im Haben und keine Verbindlichkeit.'),
        bk('lf07-ust-u-a8-j', 'j) BA: Gutschrift, Überweisender Villeroy & Boch AG Merzig, Rechnung 301 (26.775 €) und 302 (14.756 €), Summe 41.531,00 €', [['S', K.BA, 41531], ['H', K.FO, 41531]]),
        bk('lf07-ust-u-a8-k', 'k) Wir verkaufen einen ausgemusterten Firmen-PKW an einen privaten Käufer, Rechnungsbetrag 8.330,00 €', [['S', K.FO, 8330], ['H', K.FP, 7000], ['H', K.US, 1330]], 'Netto = 8.330 ÷ 1,19 = 7.000 €, Umsatzsteuer 1.330 €. Annahme: Verkaufspreis = Buchwert.'),
        bk('lf07-ust-u-a8-l', 'l) BA: Überweisung der Löhne für den Monat März 14.900,00 € (steuerfrei)', [['S', K.LO, 14900], ['H', K.BA, 14900]]),
        bk('lf07-ust-u-a8-m', 'm) ER 5013: Kauf von Treib- und Schmierstoffen für die eigene Tankstelle, netto 5.400,00 €, USt 1.026,00 €', [['S', K.TS, 5400], ['S', K.VS, 1026], ['H', K.VB, 6426]]),
        bk('lf07-ust-u-a8-n', 'n) BA: Gutschrift für Zinserträge auf dem Sparkonto 85,00 € (steuerfrei)', [['S', K.BA, 85], ['H', K.ZE, 85]]),
        bk('lf07-ust-u-a8-o', 'o) AR 303 an die Saar-Ferngas AG für erbrachte Luftfrachtspeditionsleistung, netto 33.800,00 €', [['S', K.FO, 40222], ['H', K.LFL, 33800], ['H', K.US, 6422]]),
        zl('lf07-ust-u-a8-p', 'p) Ermittle die Zahllast.', 14383, 3059, `**Umsatzsteuer:** Anfangsbestand 3.900 wurde in b) ausgeglichen. Neu: d) 4.275 + h) 2.356 + k) 1.330 + o) 6.422 = **14.383,00 €**

**Vorsteuer:** Anfangsbestand 150 wurde in b) ausgeglichen. Neu: c) 121,60 + f) 15,20 + g) 1.805 + i) 91,20 + m) 1.026 = **3.059,00 €**

**Zahllast:** 14.383 − 3.059 = **11.324,00 €**

Kontrolle mit den ganzen Konten: Umsatzsteuer 3.900 + 14.383 − 3.900 = 14.383; Vorsteuer 150 + 3.059 − 150 = 3.059. Vergiss die Vorsteuer aus i) (91,20 €) nicht.`),
        bk('lf07-ust-u-a8-q', 'q) BA: Überweisung der Zahllast an das Finanzamt Saarbrücken (nach der Umbuchung).', [['S', K.US, 11324], ['H', K.BA, 11324]])
      ]
    },
    {
      id: 'lf07-ust-u-a9', type: 'mc', difficulty: 2, points: 2,
      q: 'Bei welchen Vorgängen fällt in den Übungen **keine** Vor- oder Umsatzsteuer an? (Mehrfachauswahl)',
      options: ['Überweisung der Löhne', 'Bankbelastung für Darlehenszinsen', 'ER über LKW-Reparatur', 'Lastschrift Kfz-Versicherung', 'AR für Lagerleistung', 'Lastschrift Gewerbesteuer'],
      correct: [0, 1, 3, 5],
      hints: ['Umsatzsteuer gibt es nur bei Lieferungen und Leistungen, die nicht befreit sind.'],
      solution: 'Ohne Steuer: **Löhne, Zinsen, Versicherung, Gewerbesteuer**. Reparatur (Vorsteuer) und Lagerleistung (Umsatzsteuer) sind steuerpflichtig.'
    },
    {
      id: 'lf07-ust-u-a10', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne jedem Beleg den passenden Buchungssatz zu.',
      pairs: [
        ['ER für Treibstoff', 'Treib- und Schmierstoffe + Vorsteuer an Verbindlichkeiten'],
        ['AR für Luftfracht', 'Forderungen an Luftfrachtspeditionsleistungen + Umsatzsteuer'],
        ['BA: Kunde zahlt', 'Bank an Forderungen'],
        ['BA: Wir zahlen eine ER', 'Verbindlichkeiten an Bank'],
        ['Überweisung der Zahllast', 'Umsatzsteuer an Bank']
      ],
      hints: ['Wer zahlt an wen?'],
      solution: 'ER → Vorsteuer im Soll · AR → Umsatzsteuer im Haben · Kunde zahlt → Bank an Forderungen · wir zahlen → Verbindlichkeiten an Bank · Zahllast → Umsatzsteuer an Bank.'
    },
    {
      id: 'lf07-ust-u-a11', type: 'calc', difficulty: 2, points: 4,
      q: 'Rechne schnell: Bestimme jeweils den Nettobetrag (19 %).',
      fields: [
        { id: 'a', label: '95.795,00 € brutto', unit: '€', answer: 80500, tol: 0.01 },
        { id: 'b', label: '180.880,00 € brutto', unit: '€', answer: 152000, tol: 0.01 },
        { id: 'c', label: '249,90 € brutto', unit: '€', answer: 210, tol: 0.01 },
        { id: 'd', label: '8.330,00 € brutto', unit: '€', answer: 7000, tol: 0.01 }
      ],
      hints: ['Immer durch 1,19 teilen.'],
      solution: '95.795 ÷ 1,19 = **80.500 €** · 180.880 ÷ 1,19 = **152.000 €** · 249,90 ÷ 1,19 = **210,00 €** · 8.330 ÷ 1,19 = **7.000 €**'
    }
  ],
  quiz: ['lf07-ust-u-a2', 'lf07-ust-u-a3', 'lf07-ust-u-a9', 'lf07-ust-u-a10', 'lf07-ust-u-a11'],
  sources: [
    { title: 'Arbeitsblätter „Übungsaufgaben Umsatzsteuer“ mit Kontenrahmen der Modufa Spedition', publisher: 'LF-7-Unterricht, KBBZ Halberg (von Rafael hochgeladen)', asOf: '2026-10' },
    { title: 'Umsatzsteuergesetz § 12 Steuersätze', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html', asOf: '2026-10' },
    { title: 'Umsatzsteuergesetz § 18 Besteuerungsverfahren', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__18.html', asOf: '2026-10' }
  ],
  links: ['lf03-umsatzsteuer', 'lf03-buchen-bestandskonten', 'lf03-erfolgskonten']
};
