export default {
  id: 'lf03-zahlungsverkehr',
  area: 'LF03',
  topic: 'lf03-zahlungsverkehr',
  title: 'Zahlungsverkehr und Skonto',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026-10',
    note: 'SEPA-Lastschrift: Erstattungsanspruch ohne Angabe von Gründen innerhalb von 8 Wochen ab Belastung (§ 675x Abs. 2 und 4 BGB), bei nicht autorisierten oder fehlerhaften Zahlungen Anzeige spätestens 13 Monate nach Belastung (§ 676b Abs. 2 BGB); bei der SEPA-Firmenlastschrift ist die Erstattung autorisierter Zahlungen nach den Bankbedingungen ausgeschlossen (zulässig nach § 675x Abs. 3 BGB). Echtzeitüberweisung nach Verordnung (EU) 2024/886: Gutschrift innerhalb von 10 Sekunden, rund um die Uhr, nicht teurer als eine normale Überweisung, Empfängerüberprüfung; Senden und Empfängerüberprüfung im Euroraum Pflicht seit 9.10.2025. Steuerberichtigung bei Skonto nach § 17 Abs. 1 UStG, Regelsteuersatz 19 %. Stand Oktober 2026; Zinssätze in den Aufgaben sind Beispielwerte.'
  },
  goals: [
    'Ich kann Barzahlung, halbbare und bargeldlose Zahlung unterscheiden und Beispiele aus der Spedition nennen.',
    'Ich kann SEPA-Überweisung, Dauerauftrag, Echtzeitüberweisung und Kartenzahlung beschreiben.',
    'Ich kann SEPA-Basislastschrift und SEPA-Firmenlastschrift vergleichen, insbesondere die Rückgabemöglichkeiten.',
    'Ich kann Skontobetrag, Zahlbetrag und den ungefähren effektiven Jahreszins eines Skontos berechnen.',
    'Ich kann einen Zahlungseingang mit Skontoabzug einschließlich Umsatzsteuerkorrektur buchen.',
    'Ich kann erklären, wann ein Kunde in Zahlungsverzug gerät, und weiß, wo das ausführlich behandelt wird.'
  ],
  simple: `# Drei Arten zu bezahlen

| Art | Zahler | Empfänger | Beispiel in der Spedition |
|---|---|---|---|
| **Barzahlung** | Bargeld | Bargeld | Fahrer zahlt Parkgebühr bar; Kunde holt Sendung am Lager ab und zahlt bar |
| **Halbbare Zahlung** | Bargeld | Konto (oder umgekehrt) | Bareinzahlung auf das Konto eines Lieferanten; Auszahlung eines Barschecks |
| **Bargeldlose Zahlung** | Konto | Konto | Überweisung an einen Frachtführer, Lastschrift für Leasingraten, Kartenzahlung an der Tankstelle |

Speditionen bezahlen fast alles **bargeldlos**: Das ist schneller, sicherer und automatisch dokumentiert (Kontoauszug als Beleg).

# Die wichtigsten bargeldlosen Wege

- **SEPA-Überweisung**: Der Zahler schickt Geld an die IBAN des Empfängers.
- **Dauerauftrag**: Überweisung mit gleichem Betrag zum gleichen Termin, z. B. Miete der Lagerhalle.
- **Echtzeitüberweisung**: Das Geld ist in Sekunden beim Empfänger, auch nachts und am Wochenende.
- **SEPA-Lastschrift**: Der **Empfänger** holt das Geld beim Zahler ab – mit dessen Erlaubnis (**Mandat**).
- **Kartenzahlung**: Debitkarte (z. B. girocard) oder Kreditkarte, z. B. Tankkarte für die Lkw-Flotte.

# Skonto

**Skonto** ist ein Preisnachlass für schnelles Bezahlen. Beispiel auf einer Rechnung: „Zahlbar innerhalb von 10 Tagen mit 2 % Skonto oder innerhalb von 30 Tagen netto.“ Wer nach 8 Tagen zahlt, darf 2 % abziehen.`,
  deep: `# 1. SEPA-Überweisung und Dauerauftrag

Im **SEPA-Raum** (Single Euro Payments Area) werden Euro-Zahlungen mit einheitlichen Verfahren abgewickelt. Notwendige Angaben: Name des Empfängers, **IBAN**, Betrag, Verwendungszweck (z. B. Rechnungsnummer). Die Bank führt eine normale Überweisung in der Regel bis zum Ende des folgenden Geschäftstags aus (§ 675s BGB).

Der **Dauerauftrag** eignet sich für regelmäßige, gleich hohe Zahlungen (Miete, Darlehensrate).

# 2. Echtzeitüberweisung (Instant Payment)

Nach der **Verordnung (EU) 2024/886** gilt für Echtzeitüberweisungen in Euro:
- Das Geld ist **innerhalb von 10 Sekunden** auf dem Empfängerkonto.
- Sie ist **rund um die Uhr an allen Kalendertagen** möglich.
- Sie darf **nicht mehr kosten** als eine normale Überweisung.
- Vor jeder Überweisung prüft die Bank, ob **Name und IBAN** des Empfängers zusammenpassen (**Empfängerüberprüfung**). Weicht der Name ab, wird der Zahler gewarnt.
- Banken im Euroraum müssen Echtzeitüberweisungen seit **9. Januar 2025 empfangen** und seit **9. Oktober 2025 senden** können.

Vorteil für die Spedition: Ein neuer Kunde kann vor der Abholung zahlen, und die Disposition sieht den Geldeingang sofort.

# 3. SEPA-Lastschrift

Bei der Lastschrift **zieht der Zahlungsempfänger** den Betrag ein. Er braucht:
- eine **Gläubiger-Identifikationsnummer**,
- ein vom Zahler unterschriebenes **Mandat** mit **Mandatsreferenz**,
- eine **Vorabinformation** (Pre-Notification) an den Zahler über Betrag und Fälligkeit.

| Merkmal | SEPA-Basislastschrift | SEPA-Firmenlastschrift |
|---|---|---|
| Zahler | Verbraucher und Unternehmen | **nur Nicht-Verbraucher** (Unternehmen) |
| Mandat | nur Zahlungsempfänger erhält es | zusätzlich muss der Zahler das Mandat **seiner Bank bestätigen** |
| Rückgabe einer **autorisierten** Lastschrift | **ohne Angabe von Gründen innerhalb von 8 Wochen** ab Belastung (§ 675x Abs. 2 und 4 BGB) | **keine Erstattung** (nach den Bankbedingungen ausgeschlossen, wie § 675x Abs. 3 BGB es erlaubt) |
| **nicht autorisierte** Lastschrift (kein Mandat) | Anzeige bis **13 Monate** nach Belastung (§ 676b Abs. 2 BGB) | ebenfalls **13 Monate** |
| Sicherheit für den Empfänger | geringer (Rückgaberisiko) | hoch |

Für eine Spedition bedeutet das: Zieht sie die Frachtkosten eines Stammkunden per **Basislastschrift** ein, kann der Kunde noch 8 Wochen lang zurückgeben lassen. Mit einer **Firmenlastschrift** ist das Geld sicher – sofern der Kunde ein Unternehmen ist und sein Mandat bei der Bank bestätigt hat.

# 4. Kartenzahlung

- **Debitkarte** (z. B. girocard): Belastung des Girokontos zeitnah.
- **Kreditkarte**: Umsätze werden gesammelt und später (z. B. monatlich) abgerechnet.
- **Tank- und Flottenkarten**: Fahrer tanken und zahlen Maut ohne Bargeld; die Spedition erhält eine Sammelrechnung.

# 5. Skonto berechnen und beurteilen

- **Skontobetrag** = Rechnungsbetrag × Skontosatz ÷ 100
- **Zahlbetrag** = Rechnungsbetrag − Skontobetrag
- **Effektiver Jahreszins (Näherung)** = Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist)

Beispiel „10 Tage 2 %, 30 Tage netto“: 2 × 360 ÷ 20 = **36 %** pro Jahr. Wer auf Skonto verzichtet, „leiht“ sich das Geld für 20 Tage zu diesem sehr hohen Zinssatz. Deshalb lohnt sich Skonto fast immer – auch mit einem Kontokorrentkredit. (Genauer wäre Skontosatz ÷ (100 − Skontosatz) × 100 × 360 ÷ Tage; in der Schule genügt meist die Näherung. Mehr zum Vergleich mit Kreditzinsen in der Einheit „Beschaffung und Angebotsvergleich“.)

# 6. Zahlungseingang mit Skonto buchen – mit Umsatzsteuerkorrektur

Wir buchen in dieser Einheit **mit Korrektur der Umsatzsteuer** sofort beim Zahlungseingang. Grund: Durch den Skontoabzug sinkt das Entgelt. Nach **§ 17 Abs. 1 UStG** muss der leistende Unternehmer dann die geschuldete Umsatzsteuer berichtigen (und der Kunde seine Vorsteuer).

Vorgehen beim Skonto, das die Spedition ihrem Kunden **gewährt**:
1. Brutto-Skonto = Rechnungsbetrag (brutto) × Skontosatz
2. Netto-Skonto = Brutto-Skonto ÷ 1,19
3. Steuerkorrektur = Brutto-Skonto − Netto-Skonto (= Netto-Skonto × 0,19)

**Buchungssatz:** Bank (Zahlbetrag) + **Gewährte Skonti** (Netto-Skonto) + **Umsatzsteuer** (Steuerkorrektur) an **Forderungen a. LL** (Rechnungsbetrag).

- „Gewährte Skonti“ ist ein Unterkonto der Speditionserlöse (manche Schulen: „Erlösberichtigungen“) und mindert die Erlöse.
- Die Umsatzsteuer ist ein Passivkonto; die Schuld gegenüber dem Finanzamt sinkt → Soll.

> Viele Betriebe sammeln Skonti auch zunächst brutto und korrigieren die Umsatzsteuer erst am Monatsende. Das Ergebnis ist dasselbe; frage in der Schule nach, welche Variante ihr verwendet.

# 7. Zahlungsverzug (kurz)

Zahlt ein Kunde nach Fälligkeit nicht, gerät er durch eine **Mahnung**, bei kalendermäßig bestimmtem Zahlungstermin auch ohne Mahnung, und spätestens **30 Tage nach Fälligkeit und Zugang der Rechnung** in Verzug (§ 286 BGB). Folgen sind Verzugszinsen und unter Unternehmen eine Pauschale von 40 € (§ 288 BGB). Ausführlich: Einheit „Mangelhafte Lieferung und Lieferungsverzug“ (Abschnitt Zahlungsverzug) und Einheit „Kaufmännisches Mahnverfahren“.`,
  terms: [
    { term: 'Halbbare Zahlung', def: 'Eine Seite zahlt oder erhält Bargeld, die andere Seite nutzt ein Konto, z. B. Bareinzahlung auf ein fremdes Konto oder Barscheck.' },
    { term: 'IBAN', def: 'Internationale Kontonummer (International Bank Account Number); in Deutschland 22 Stellen, beginnt mit DE.' },
    { term: 'SEPA', def: 'Single Euro Payments Area: einheitlicher Euro-Zahlungsverkehrsraum mit gleichen Verfahren für Überweisung und Lastschrift.' },
    { term: 'Echtzeitüberweisung', def: 'Überweisung, die innerhalb von 10 Sekunden rund um die Uhr gutgeschrieben wird und nicht mehr kosten darf als eine normale Überweisung (VO (EU) 2024/886).' },
    { term: 'Empfängerüberprüfung', def: 'Abgleich von Empfängername und IBAN vor Ausführung einer Überweisung; bei Abweichung wird der Zahler gewarnt.' },
    { term: 'SEPA-Lastschriftmandat', def: 'Schriftliche Erlaubnis des Zahlers, dass der Zahlungsempfänger Beträge von seinem Konto einziehen darf; enthält Gläubiger-ID und Mandatsreferenz.' },
    { term: 'SEPA-Basislastschrift', def: 'Lastschriftverfahren für alle Zahler; autorisierte Lastschriften können innerhalb von 8 Wochen ohne Begründung zurückgegeben werden.' },
    { term: 'SEPA-Firmenlastschrift', def: 'Lastschriftverfahren nur für Nicht-Verbraucher; Mandat muss der Zahlerbank bestätigt werden; keine Erstattung autorisierter Lastschriften.' },
    { term: 'Skonto', def: 'Preisnachlass für Zahlung innerhalb einer kurzen Frist (Skontofrist).' },
    { term: 'Gewährte Skonti', def: 'Unterkonto der Erlöse, auf dem die Netto-Skontobeträge erfasst werden, die Kunden abziehen dürfen.' }
  ],
  example: `# Saar-Trans Spedition GmbH – Zahlungseingang mit Skonto (Beispielzahlen 2026)

Die Saar-Trans Spedition GmbH hat der Bliesgau Möbel GmbH am 02.03.2026 eine Komplettladung Saarbrücken–München in Rechnung gestellt:

| Posten | € |
|---|---:|
| Speditionsentgelt netto | 2.000,00 |
| + 19 % Umsatzsteuer | 380,00 |
| = Rechnungsbetrag | 2.380,00 |

Zahlungsbedingung: „10 Tage 2 % Skonto, 30 Tage netto“. Der Kunde überweist am 10.03.2026 – also innerhalb der Skontofrist.

# Rechnung

| Schritt | Rechnung | € |
|---|---|---:|
| Brutto-Skonto | 2.380,00 × 2 % | 47,60 |
| Netto-Skonto | 47,60 ÷ 1,19 | 40,00 |
| Umsatzsteuerkorrektur | 47,60 − 40,00 | 7,60 |
| Zahlbetrag | 2.380,00 − 47,60 | 2.332,40 |

# Buchung

| Soll | € | Haben | € |
|---|---:|---|---:|
| Bank | 2.332,40 | Forderungen a. LL | 2.380,00 |
| Gewährte Skonti | 40,00 | | |
| Umsatzsteuer | 7,60 | | |
| **Summe** | **2.380,00** | **Summe** | **2.380,00** |

Die Forderung ist damit vollständig ausgeglichen. Das Speditionsentgelt beträgt wirtschaftlich nur noch 1.960 € netto, die Umsatzsteuer nur noch 372,40 € (= 1.960 × 19 %).

# Und ein Stammkunde per Lastschrift?

Die Hochwald Getränke KG lässt monatlich per **SEPA-Firmenlastschrift** einziehen. Sie hat das Mandat ihrer Bank bestätigt. Saar-Trans muss nicht befürchten, dass eine korrekt eingezogene Lastschrift ohne Grund zurückgegeben wird.`,
  rules: [
    'Barzahlung: Bargeld auf beiden Seiten; halbbar: eine Seite Bargeld, eine Seite Konto; bargeldlos: Konto zu Konto.',
    'Bei der Überweisung schickt der Zahler das Geld, bei der Lastschrift holt der Empfänger es mit Mandat ab.',
    'SEPA-Basislastschrift: Rückgabe ohne Grund 8 Wochen; nicht autorisiert: 13 Monate. Firmenlastschrift: keine Rückgabe autorisierter Lastschriften.',
    'Skontobetrag vom Bruttorechnungsbetrag berechnen, Netto-Skonto durch Division durch 1,19.',
    'Skonto mindert das Entgelt – deshalb wird die Umsatzsteuer berichtigt (§ 17 UStG).',
    'Effektiver Jahreszins des Skontos ≈ Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist): Skonto lohnt sich fast immer.'
  ],
  summary: `- **Zahlungsarten**: bar, halbbar, bargeldlos. Speditionen zahlen überwiegend bargeldlos.
- **SEPA-Überweisung** (IBAN), **Dauerauftrag**, **Echtzeitüberweisung** (10 Sekunden, rund um die Uhr, Empfängerüberprüfung).
- **SEPA-Lastschrift**: Basis (8 Wochen Rückgabe ohne Grund) und Firmen (nur Unternehmen, keine Rückgabe autorisierter Lastschriften); nicht autorisiert: 13 Monate.
- **Kartenzahlung**: Debit-, Kredit-, Tankkarte.
- **Skonto**: Skontobetrag, Zahlbetrag, effektiver Jahreszins ≈ Skontosatz × 360 ÷ (Ziel − Skontofrist).
- **Buchung Zahlungseingang mit Skonto**: Bank + Gewährte Skonti + Umsatzsteuer an Forderungen a. LL.
- **Zahlungsverzug**: kurz hier, ausführlich in „Mangelhafte Lieferung und Lieferungsverzug“ und „Kaufmännisches Mahnverfahren“.`,
  mistakes: [
    { wrong: 'Bei der Lastschrift überweist der Kunde das Geld selbst.', right: 'Bei der Lastschrift zieht der Zahlungsempfänger den Betrag mit einem Mandat des Zahlers ein.' },
    { wrong: 'Auch eine Firmenlastschrift kann der Kunde 8 Wochen lang ohne Grund zurückgeben.', right: 'Das 8-Wochen-Recht gilt nur bei der Basislastschrift. Bei der Firmenlastschrift ist die Erstattung autorisierter Zahlungen ausgeschlossen.' },
    { wrong: 'Der Skonto wird vom Nettobetrag berechnet, die Umsatzsteuer bleibt unverändert.', right: 'Der Kunde zieht den Skonto vom Rechnungsbetrag (brutto) ab. Weil das Entgelt sinkt, muss auch die Umsatzsteuer anteilig berichtigt werden.' },
    { wrong: 'Gewährte Skonti werden im Haben gebucht, weil Geld fehlt.', right: 'Gewährte Skonti mindern die Erlöse und stehen daher im Soll (Erlösminderung).' },
    { wrong: '2 % Skonto sind nur 2 % Zinsen – das lohnt sich nicht.', right: 'Die 2 % beziehen sich auf wenige Tage (z. B. 20 Tage). Aufs Jahr gerechnet sind das rund 36 %.' }
  ],
  flashcards: [
    { q: 'Was ist eine halbbare Zahlung? Beispiel?', a: 'Eine Seite nutzt Bargeld, die andere ein Konto, z. B. Bareinzahlung auf das Konto eines Lieferanten.' },
    { q: 'Wie schnell muss eine Echtzeitüberweisung gutgeschrieben sein?', a: 'Innerhalb von 10 Sekunden, rund um die Uhr an allen Kalendertagen (VO (EU) 2024/886).' },
    { q: 'Was prüft die Bank bei der Empfängerüberprüfung?', a: 'Ob der Name des Empfängers zur angegebenen IBAN passt.' },
    { q: 'Wie lange kann eine autorisierte SEPA-Basislastschrift zurückgegeben werden?', a: '8 Wochen ab Belastung ohne Angabe von Gründen (§ 675x BGB).' },
    { q: 'Frist bei einer nicht autorisierten Lastschrift?', a: 'Anzeige spätestens 13 Monate nach dem Tag der Belastung (§ 676b Abs. 2 BGB).' },
    { q: 'Wer darf die SEPA-Firmenlastschrift nutzen?', a: 'Nur Zahler, die keine Verbraucher sind; sie müssen das Mandat ihrer Bank bestätigen.' },
    { q: 'Formel effektiver Jahreszins des Skontos (Näherung)?', a: 'Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist).' },
    { q: 'Buchungssatz Zahlungseingang mit Skonto (mit USt-Korrektur)?', a: 'Bank, Gewährte Skonti, Umsatzsteuer an Forderungen a. LL.' },
    { q: 'Warum wird beim Skonto die Umsatzsteuer korrigiert?', a: 'Das Entgelt sinkt; nach § 17 Abs. 1 UStG muss die geschuldete Steuer berichtigt werden.' },
    { q: 'Wann kommt ein Kunde spätestens ohne Mahnung in Zahlungsverzug?', a: '30 Tage nach Fälligkeit und Zugang der Rechnung (§ 286 Abs. 3 BGB; bei Verbrauchern nur mit Hinweis auf der Rechnung).' }
  ],
  tasks: [
    {
      id: 'lf03-zahlungsverkehr-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne jeden Vorgang der richtigen Zahlungsart zu.',
      pairs: [
        ['Ein Selbstabholer zahlt die Lagergebühr am Schalter mit Geldscheinen.', 'Barzahlung'],
        ['Der Fahrer zahlt bar bei der Bank auf das Konto einer Werkstatt ein.', 'Halbbare Zahlung'],
        ['Die Spedition überweist die Rechnung eines Frachtführers.', 'Bargeldlose Zahlung (Überweisung)'],
        ['Der Leasinggeber zieht die monatliche Rate für einen Lkw ein.', 'Bargeldlose Zahlung (Lastschrift)']
      ],
      hints: ['Prüfe für Zahler und Empfänger getrennt: Bargeld oder Konto?', 'Wer löst die Zahlung aus – Zahler oder Empfänger?'],
      solution: 'Bargeld auf beiden Seiten = **Barzahlung**; Bargeld auf ein Konto = **halbbar**; Konto zu Konto, vom Zahler ausgelöst = **Überweisung**; Konto zu Konto, vom Empfänger mit Mandat ausgelöst = **Lastschrift**.'
    },
    {
      id: 'lf03-zahlungsverkehr-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zur **Echtzeitüberweisung** nach der Verordnung (EU) 2024/886 sind richtig? (Mehrfachauswahl)',
      options: [
        'Das Geld muss innerhalb von 10 Sekunden beim Empfänger sein.',
        'Sie ist nur an Bankarbeitstagen während der Geschäftszeiten möglich.',
        'Sie darf nicht teurer sein als eine normale SEPA-Überweisung.',
        'Vor der Ausführung wird geprüft, ob Name und IBAN des Empfängers zusammenpassen.',
        'Sie kann vom Zahler noch 8 Wochen lang ohne Grund zurückgeholt werden.'
      ],
      correct: [0, 2, 3],
      hints: ['Echtzeit heißt auch: jederzeit.', 'Das 8-Wochen-Recht gehört zu einem anderen Verfahren.'],
      solution: 'Richtig: **10 Sekunden**, **kein höherer Preis**, **Empfängerüberprüfung**. Echtzeitüberweisungen sind rund um die Uhr an allen Kalendertagen möglich. Das Erstattungsrecht von 8 Wochen gilt für die SEPA-Basislastschrift, nicht für Überweisungen – eine Echtzeitüberweisung ist sofort endgültig.'
    },
    {
      id: 'lf03-zahlungsverkehr-a3', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Lücken zur SEPA-Lastschrift.',
      text: 'Bei der Lastschrift braucht der Zahlungsempfänger ein unterschriebenes [[Mandat|Lastschriftmandat|SEPA-Mandat]] des Zahlers. Eine autorisierte Basislastschrift kann der Zahler innerhalb von [[8|acht]] Wochen ohne Angabe von Gründen zurückgeben lassen. Bei einer nicht autorisierten Lastschrift beträgt die Frist [[13|dreizehn]] Monate. Die [[Firmenlastschrift|SEPA-Firmenlastschrift]] dürfen nur Zahler nutzen, die keine [[Verbraucher]] sind.',
      hints: ['Die Erlaubnis zum Einzug hat einen eigenen Namen.', 'Ein Verfahren ist nur für Unternehmen gedacht.'],
      solution: 'Mandat; **8 Wochen** (§ 675x Abs. 2 und 4 BGB); **13 Monate** (§ 676b Abs. 2 BGB); **Firmenlastschrift** nur für Nicht-**Verbraucher**.'
    },
    {
      id: 'lf03-zahlungsverkehr-a4', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Saar-Trans Spedition GmbH möchte bei einem neuen Geschäftskunden (GmbH) die monatlichen Lagergebühren so einziehen, dass eine Rückgabe der korrekt eingezogenen Beträge ausgeschlossen ist. Welches Verfahren ist geeignet?',
      options: ['SEPA-Basislastschrift', 'SEPA-Firmenlastschrift', 'Dauerauftrag der Spedition', 'Barscheck'],
      correct: [1],
      hints: ['Ein Dauerauftrag wird vom Zahler eingerichtet, nicht vom Empfänger.', 'Welches Lastschriftverfahren kennt kein Erstattungsrecht für autorisierte Zahlungen?'],
      solution: '**SEPA-Firmenlastschrift**: Der Kunde ist kein Verbraucher, bestätigt das Mandat seiner Bank, und eine Erstattung autorisierter Lastschriften ist ausgeschlossen. Bei der Basislastschrift könnte der Kunde 8 Wochen lang zurückgeben lassen. Einen Dauerauftrag richtet der Zahler selbst ein; die Spedition hätte darauf keinen Einfluss.'
    },
    {
      id: 'lf03-zahlungsverkehr-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Die Spedition stellt einem Versender **4.165,00 €** (3.500,00 € netto + 665,00 € USt) in Rechnung. Zahlungsbedingung: „14 Tage 3 % Skonto, 45 Tage netto“. Der Kunde zahlt nach 12 Tagen. Berechne den Brutto-Skonto, den Netto-Skonto und den Zahlbetrag.',
      formula: 'Skonto = Rechnungsbetrag × Skontosatz ÷ 100; Netto-Skonto = Brutto-Skonto ÷ 1,19; Zahlbetrag = Rechnungsbetrag − Skonto',
      fields: [
        { id: 'brutto', label: 'Brutto-Skonto', unit: '€', answer: 124.95, tol: 0.01 },
        { id: 'netto', label: 'Netto-Skonto', unit: '€', answer: 105, tol: 0.01 },
        { id: 'zahl', label: 'Zahlbetrag', unit: '€', answer: 4040.05, tol: 0.01 }
      ],
      hints: ['12 Tage liegen innerhalb der Skontofrist von 14 Tagen.', 'Rechne den Skonto vom Bruttobetrag 4.165,00 €.'],
      solution: `**Brutto-Skonto:** 4.165,00 € × 3 ÷ 100 = **124,95 €**

**Netto-Skonto:** 124,95 € ÷ 1,19 = **105,00 €** (Probe: 3.500,00 € × 3 % = 105,00 €)

**Umsatzsteuerkorrektur:** 124,95 € − 105,00 € = 19,95 €

**Zahlbetrag:** 4.165,00 € − 124,95 € = **4.040,05 €**`
    },
    {
      id: 'lf03-zahlungsverkehr-a6', type: 'booking', difficulty: 3, points: 4,
      q: 'Buche den Zahlungseingang aus Aufgabe a5 auf dem Bankkonto (Buchung **mit Umsatzsteuerkorrektur**).',
      accounts: ['Bank', 'Forderungen a. LL', 'Gewährte Skonti', 'Umsatzsteuer', 'Vorsteuer', 'Speditionserlöse', 'Verbindlichkeiten a. LL'],
      entries: [
        { side: 'S', account: 'Bank', amount: 4040.05 },
        { side: 'S', account: 'Gewährte Skonti', amount: 105 },
        { side: 'S', account: 'Umsatzsteuer', amount: 19.95 },
        { side: 'H', account: 'Forderungen a. LL', amount: 4165 }
      ],
      hints: ['Die Forderung erlischt in voller Höhe – auch der abgezogene Teil.', 'Skonto mindert Erlöse und Umsatzsteuerschuld: Beide Korrekturen stehen im Soll.'],
      solution: `**Buchungssatz:** Bank 4.040,05 €, Gewährte Skonti 105,00 €, Umsatzsteuer 19,95 € an Forderungen a. LL 4.165,00 €

- **Bank** (Aktivkonto): Zugang des Zahlbetrags → **Soll**.
- **Gewährte Skonti** (Erlösminderung, Unterkonto der Speditionserlöse): mindert den Ertrag → **Soll**.
- **Umsatzsteuer** (Passivkonto): Die Schuld gegenüber dem Finanzamt sinkt (§ 17 Abs. 1 UStG) → Abgang im **Soll**.
- **Forderungen a. LL** (Aktivkonto): Die Forderung erlischt vollständig → Abgang im **Haben**.

Kontrolle: 4.040,05 + 105,00 + 19,95 = 4.165,00 € = Haben.`
    },
    {
      id: 'lf03-zahlungsverkehr-a7', type: 'calc', difficulty: 2, points: 2,
      q: 'Berechne für die Zahlungsbedingung „14 Tage 3 % Skonto, 45 Tage netto“ den effektiven Jahreszins des Skontos mit der Näherungsformel (auf zwei Nachkommastellen).',
      formula: 'Effektiver Jahreszins ≈ Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist)',
      fields: [
        { id: 'tage', label: 'Kredittage (Zahlungsziel − Skontofrist)', unit: 'Tage', answer: 31, tol: 0 },
        { id: 'zins', label: 'Effektiver Jahreszins', unit: '%', answer: 34.84, tol: 0.05 }
      ],
      hints: ['Kredittage = 45 − 14.', 'Setze 3 % × 360 ÷ Kredittage.'],
      solution: `**Kredittage:** 45 Tage − 14 Tage = **31 Tage**

**Effektiver Jahreszins:** 3 × 360 ÷ 31 = 1.080 ÷ 31 ≈ **34,84 %**

Wer den Skonto nicht nutzt, zahlt für 31 Tage „Lieferantenkredit“ umgerechnet rund 35 % Zinsen pro Jahr. (Die genauere Formel 3 ÷ 97 × 100 × 360 ÷ 31 ergibt etwa 35,92 %.)`
    },
    {
      id: 'lf03-zahlungsverkehr-a8', type: 'calc', difficulty: 3, points: 3,
      q: 'Die Spedition erhält eine Rechnung über einen neuen Gabelstapler über **12.000 €** (Zahlungsbedingung: „10 Tage 2 % Skonto, 30 Tage netto“). Um Skonto zu nutzen, müsste sie ihren Kontokorrentkredit zu **11 % p. a.** (Beispielwert) für 20 Tage in Anspruch nehmen. Berechne Skontobetrag, Kreditzinsen für den Zahlbetrag und den Finanzierungsvorteil (kaufmännisch mit 360 Zinstagen, Ergebnis auf Cent).',
      formula: 'Zinsen = Kapital × Zinssatz × Tage ÷ (100 × 360); Vorteil = Skonto − Zinsen',
      fields: [
        { id: 'skonto', label: 'Skontobetrag', unit: '€', answer: 240, tol: 0.01 },
        { id: 'zinsen', label: 'Kreditzinsen', unit: '€', answer: 71.87, tol: 0.01 },
        { id: 'vorteil', label: 'Finanzierungsvorteil', unit: '€', answer: 168.13, tol: 0.01 }
      ],
      hints: ['Finanziert werden muss nur der Zahlbetrag nach Skontoabzug.', 'Die Kreditdauer ist Zahlungsziel minus Skontofrist.'],
      solution: `**Skonto:** 12.000 € × 2 ÷ 100 = **240,00 €**

**Zahlbetrag (Kreditbetrag):** 12.000 € − 240 € = 11.760 €

**Zinsen:** 11.760 € × 11 × 20 ÷ (100 × 360) = 2.587.200 ÷ 36.000 = 71,8666… ≈ **71,87 €**

**Finanzierungsvorteil:** 240,00 € − 71,87 € = **168,13 €**

Die Skontozahlung mit Kredit lohnt sich.`
    },
    {
      id: 'lf03-zahlungsverkehr-a9', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe den Ablauf einer SEPA-Basislastschrift in die richtige Reihenfolge.',
      items: [
        'Der Kunde unterschreibt ein SEPA-Lastschriftmandat für die Spedition.',
        'Die Spedition schickt dem Kunden eine Vorabinformation über Betrag und Fälligkeit.',
        'Die Spedition reicht die Lastschrift bei ihrer Bank ein.',
        'Das Konto des Kunden wird belastet, die Spedition erhält die Gutschrift.'
      ],
      hints: ['Ohne Erlaubnis darf nichts eingezogen werden.', 'Die Vorabinformation kommt vor dem Einzug.'],
      solution: 'Mandat → Vorabinformation (Pre-Notification) → Einreichung bei der Bank (der Gläubigerbank) → Belastung beim Kunden und Gutschrift bei der Spedition. Danach beginnt für den Kunden die 8-Wochen-Frist für eine Rückgabe ohne Grund.'
    },
    {
      id: 'lf03-zahlungsverkehr-a10', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Kunde hat am 03.08.2026 eine Rechnung erhalten, die sofort fällig ist. Er zahlt nicht. Die Spedition schickt keine Mahnung. Wann ist der Kunde (ein Unternehmen) spätestens in Zahlungsverzug?',
      options: ['Sofort am 03.08.2026', '30 Tage nach Fälligkeit und Zugang der Rechnung', 'Erst nach drei Mahnungen', 'Erst mit Zustellung eines Mahnbescheids'],
      correct: [1],
      hints: ['§ 286 Abs. 3 BGB nennt eine feste Frist.', 'Eine Mahnung beschleunigt den Verzug, ist aber nicht immer nötig.'],
      solution: 'Nach **§ 286 Abs. 3 BGB** kommt der Schuldner einer Entgeltforderung spätestens **30 Tage nach Fälligkeit und Zugang** der Rechnung in Verzug (bei Verbrauchern nur, wenn die Rechnung darauf hinweist). Mit einer Mahnung nach Fälligkeit wäre er schon früher in Verzug. Mehr in der Einheit „Kaufmännisches Mahnverfahren“.'
    },
    {
      id: 'lf03-zahlungsverkehr-a11', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre, warum beim Zahlungseingang mit Skontoabzug die Umsatzsteuer korrigiert werden muss, und nenne die Konten, die im Soll gebucht werden.',
      model: 'Durch den Skontoabzug sinkt das tatsächliche Entgelt für die Speditionsleistung. Nach § 17 Abs. 1 UStG ändert sich damit die Bemessungsgrundlage, und die Spedition muss die geschuldete Umsatzsteuer berichtigen. Im Soll werden Bank (Zahlbetrag), Gewährte Skonti (Netto-Skonto als Erlösminderung) und Umsatzsteuer (Steuerkorrektur) gebucht, im Haben die Forderungen a. LL.',
      criteria: [
        { text: 'nennt Minderung des Entgelts bzw. der Bemessungsgrundlage', keywords: ['Entgelt|Bemessungsgrundlage|Nettobetrag', 'sinkt|mindert|geringer|ändert'], points: 1 },
        { text: 'nennt § 17 UStG oder Berichtigungspflicht', keywords: ['17|berichtig'], points: 1 },
        { text: 'nennt Bank, Gewährte Skonti und Umsatzsteuer im Soll', keywords: ['Bank', 'Skont', 'Umsatzsteuer'], points: 1 }
      ],
      hints: ['Auf welchen Betrag wird die Umsatzsteuer berechnet?', 'Drei Konten im Soll, eines im Haben.'],
      solution: 'Der Skonto **mindert das Entgelt** (Bemessungsgrundlage). Deshalb muss die Umsatzsteuer nach **§ 17 Abs. 1 UStG berichtigt** werden. Soll: **Bank**, **Gewährte Skonti**, **Umsatzsteuer**; Haben: Forderungen a. LL.'
    },
    {
      id: 'lf03-zahlungsverkehr-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Zahlungseingang bei der Hochwald Logistik e.K.',
      intro: `Die Hochwald Logistik e.K. hat der Saarland Baustoffe GmbH für Baustellenbelieferungen **5.950,00 €** in Rechnung gestellt (5.000,00 € netto + 950,00 € USt 19 %). Zahlungsbedingung: „8 Tage 2 % Skonto, 30 Tage netto“.

Die Saarland Baustoffe GmbH bezahlt nach 6 Tagen per Echtzeitüberweisung unter Abzug von Skonto.`,
      hints: ['Prüfe zuerst, ob der Skontoabzug berechtigt ist.', 'Brutto-Skonto ÷ 1,19 ergibt den Netto-Skonto.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf03-zahlungsverkehr-a12-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne Brutto-Skonto, Umsatzsteuerkorrektur und Zahlbetrag.',
          formula: 'Brutto-Skonto = Rechnungsbetrag × 2 %; USt-Korrektur = Brutto-Skonto − Brutto-Skonto ÷ 1,19',
          fields: [
            { id: 'brutto', label: 'Brutto-Skonto', unit: '€', answer: 119, tol: 0.01 },
            { id: 'ust', label: 'Umsatzsteuerkorrektur', unit: '€', answer: 19, tol: 0.01 },
            { id: 'zahl', label: 'Zahlbetrag', unit: '€', answer: 5831, tol: 0.01 }
          ],
          hints: ['6 Tage liegen innerhalb der Skontofrist.', 'Netto-Skonto = 2 % von 5.000 €.'],
          solution: `**Brutto-Skonto:** 5.950,00 € × 2 % = **119,00 €**

**Netto-Skonto:** 119,00 € ÷ 1,19 = 100,00 €

**USt-Korrektur:** 119,00 € − 100,00 € = **19,00 €**

**Zahlbetrag:** 5.950,00 € − 119,00 € = **5.831,00 €**`
        },
        {
          id: 'lf03-zahlungsverkehr-a12-2', type: 'booking', difficulty: 3, points: 4,
          q: 'Buche den Zahlungseingang mit Umsatzsteuerkorrektur.',
          accounts: ['Bank', 'Kasse', 'Forderungen a. LL', 'Gewährte Skonti', 'Umsatzsteuer', 'Vorsteuer', 'Speditionserlöse'],
          entries: [
            { side: 'S', account: 'Bank', amount: 5831 },
            { side: 'S', account: 'Gewährte Skonti', amount: 100 },
            { side: 'S', account: 'Umsatzsteuer', amount: 19 },
            { side: 'H', account: 'Forderungen a. LL', amount: 5950 }
          ],
          hints: ['Die Spedition ist hier Leistende – also Umsatzsteuer, nicht Vorsteuer.', 'Im Haben steht nur ein Konto.'],
          solution: `**Buchungssatz:** Bank 5.831,00 €, Gewährte Skonti 100,00 €, Umsatzsteuer 19,00 € an Forderungen a. LL 5.950,00 €

- Bank: Zugang (Aktivkonto) → Soll
- Gewährte Skonti: Erlösminderung → Soll
- Umsatzsteuer: Schuld an das Finanzamt sinkt (Passivkonto, Abgang) → Soll
- Forderungen a. LL: erlischt (Aktivkonto, Abgang) → Haben

Summe Soll 5.950,00 € = Summe Haben 5.950,00 €.`
        }
      ]
    }
  ],
  quiz: ['lf03-zahlungsverkehr-a2', 'lf03-zahlungsverkehr-a4', 'lf03-zahlungsverkehr-a5', 'lf03-zahlungsverkehr-a6', 'lf03-zahlungsverkehr-a7'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 3, Inhalte: Zahlungsverkehr, Skonto, Zahlungsverzug' },
    { title: 'Bürgerliches Gesetzbuch § 675x Erstattungsanspruch bei einem vom oder über den Zahlungsempfänger ausgelösten Zahlungsvorgang', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__675x.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 676b Anzeige nicht autorisierter oder fehlerhaft ausgeführter Zahlungsvorgänge', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__676b.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 675s Ausführungsfrist für Zahlungsvorgänge', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__675s.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 286 Verzug des Schuldners', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__286.html', asOf: '2026' },
    { title: 'Verordnung (EU) 2024/886 über Echtzeitüberweisungen in Euro', publisher: 'Amt für Veröffentlichungen der EU (EUR-Lex)', url: 'https://eur-lex.europa.eu/eli/reg/2024/886/oj', asOf: '2026-10-17' },
    { title: 'Umsatzsteuergesetz § 17 Änderung der Bemessungsgrundlage', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__17.html', asOf: '2026-10-17' },
    { title: 'Bedingungen für Zahlungen mittels Lastschrift im SEPA-Firmenlastschriftverfahren (Beispiel einer Bank)', publisher: 'Deutsche Bank AG', url: 'https://www.deutsche-bank.de/dam/deutschebank/de/shared/pdf/ser-agb-bedingungen-SEPA-Firmenlastschriftverfahren_ag.pdf', asOf: '2026-10-17' }
  ],
  links: ['lf03-umsatzsteuer', 'lf03-erfolgskonten', 'lf08-angebotsvergleich', 'lf08-stoerungen', 'lf05-mahnverfahren']
};
