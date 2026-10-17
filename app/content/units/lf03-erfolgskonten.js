export default {
  id: 'lf03-erfolgskonten',
  area: 'LF03',
  topic: 'lf03-erfolgskonten',
  title: 'Erfolgskonten und Gewinn- und Verlustrechnung',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Pflicht zur Gewinn- und Verlustrechnung als Teil des Jahresabschlusses nach § 242 Abs. 2 und 3 HGB, Stand 2026. Alle Beträge in Beispielen und Aufgaben sind erfundene Beispielwerte (Bezugsjahr 2026); die Umsatzsteuer bleibt in dieser Einheit unberücksichtigt.'
  },
  goals: [
    'Ich kann Aufwendungen und Erträge einer Spedition erkennen und von Bestandsveränderungen unterscheiden.',
    'Ich kann Geschäftsfälle mit Aufwands- und Ertragskonten (z. B. Frachtaufwand, Speditionserlöse, Löhne und Gehälter, Mietaufwand, Kfz-Kosten) buchen.',
    'Ich kann erklären, warum Erfolgskonten Unterkonten des Eigenkapitals sind.',
    'Ich kann Aufwands- und Ertragskonten über das GuV-Konto abschließen.',
    'Ich kann Gewinn oder Verlust ermitteln und das GuV-Konto über das Eigenkapitalkonto abschließen.',
    'Ich kann Privatentnahmen buchen und das Privatkonto abschließen.'
  ],
  simple: `# Worum geht es?

In der Einheit „Bestandskonten und Buchungssatz“ hast du gebucht, wie sich Vermögen und Schulden **umschichten** (z. B. Lkw-Kauf gegen Banküberweisung). Dabei wird die Spedition weder reicher noch ärmer.

Viele Geschäftsfälle verändern aber das **Eigenkapital**:

- Die Spedition stellt einem Versender einen Transport in Rechnung → sie verdient Geld → **Ertrag** → Eigenkapital steigt.
- Die Spedition bezahlt Löhne, Miete, Diesel oder einen Frachtführer → sie verbraucht Werte → **Aufwand** → Eigenkapital sinkt.

# Warum nicht direkt auf dem Eigenkapitalkonto buchen?

Dann wüsste am Jahresende niemand, **wofür** das Geld ausgegeben und **womit** es verdient wurde. Deshalb gibt es für jede Aufwands- und Ertragsart ein eigenes Konto. Diese **Erfolgskonten** sind Unterkonten des Eigenkapitals.

# Die wichtigste Regel

| Kontenart | Soll | Haben |
|---|---|---|
| **Aufwandskonto** | Aufwand (mindert das Eigenkapital) | nur Korrekturen und Abschluss |
| **Ertragskonto** | nur Korrekturen und Abschluss | Ertrag (mehrt das Eigenkapital) |

Merke: Das Eigenkapital steht in der Bilanz im **Haben**. Was es **mindert** (Aufwand), steht im **Soll**; was es **mehrt** (Ertrag), steht im **Haben**.

# Und am Jahresende?

Alle Aufwands- und Ertragskonten werden auf dem **Gewinn- und Verlustkonto (GuV-Konto)** gesammelt. Sind die Erträge größer als die Aufwendungen, hat die Spedition einen **Gewinn** gemacht, sonst einen **Verlust**. Der Gewinn oder Verlust wird zum Schluss auf das Eigenkapitalkonto übertragen.`,
  deep: `# 1. Erfolgsvorgänge erkennen

Ein Geschäftsfall ist **erfolgswirksam**, wenn er das Eigenkapital verändert. Er ist **erfolgsneutral**, wenn nur Vermögen und Schulden umgeschichtet werden.

| Geschäftsfall | Art | Begründung |
|---|---|---|
| Kauf einer Wechselbrücke gegen Bankscheck | erfolgsneutral | Aktivtausch, Fuhrpark steigt, Bank sinkt |
| Rechnung an Versender für einen Sammelguttransport | erfolgswirksam (Ertrag) | Leistung verkauft, Eigenkapital steigt |
| Eingangsrechnung eines Frachtführers für den Hauptlauf | erfolgswirksam (Aufwand) | eingekaufte Fremdleistung verbraucht |
| Tilgung eines Darlehens per Bank | erfolgsneutral | Aktiv-Passiv-Minderung |
| Zinsen für das Darlehen per Bank | erfolgswirksam (Aufwand) | Preis für geliehenes Geld |

# 2. Typische Erfolgskonten einer Spedition

**Aufwandskonten**
- **Frachtaufwand** (auch „Speditionsaufwand“ oder „Aufwendungen für bezogene Leistungen“, je nach Kontenrahmen): Rechnungen von Frachtführern, Empfangsspediteuren, Reedereien, Airlines
- **Löhne und Gehälter**: Lohn der Fahrer und Lagerarbeiter, Gehalt der Disponenten
- **Mietaufwand**: Miete für Lagerhalle, Büro, Stellplätze
- **Kfz-Kosten**: Diesel, Reparaturen, Reifen, Kfz-Steuer und Kfz-Versicherung (Schulen und Kontenrahmen trennen das teilweise in mehrere Konten)
- weitere: Bürokosten, Versicherungen, Werbung, Zinsaufwand, Abschreibungen

**Ertragskonten**
- **Speditionserlöse** (in manchen Schulen „Umsatzerlöse“): Entgelte, die die Spedition den Versendern in Rechnung stellt
- **Provisionserträge**: z. B. Vermittlungsprovisionen
- **Mieterträge**: z. B. Untervermietung von Lagerfläche
- **Zinserträge**: Zinsen auf Bankguthaben

> Kontenbezeichnungen und Kontonummern unterscheiden sich je nach Kontenrahmen deiner Schule. Wichtig ist, ob ein Konto Aufwand oder Ertrag erfasst.

# 3. Buchen auf Erfolgskonten

Erfolgskonten haben **keinen Anfangsbestand**. Sie beginnen jedes Geschäftsjahr bei null.

- Eingangsrechnung Frachtführer 1.500 €: **Frachtaufwand** 1.500 € an **Verbindlichkeiten a. LL** 1.500 €
- Ausgangsrechnung an Versender 2.200 €: **Forderungen a. LL** 2.200 € an **Speditionserlöse** 2.200 €
- Gehaltszahlung 3.000 € per Bank (vereinfacht, ohne Abzüge): **Löhne und Gehälter** 3.000 € an **Bank** 3.000 €

Die Umsatzsteuer bleibt hier unberücksichtigt; sie folgt in der Einheit „Vorsteuer und Umsatzsteuer“.

# 4. Abschluss der Erfolgskonten

Nach **§ 242 Abs. 2 HGB** muss der Kaufmann zum Schluss jedes Geschäftsjahres Aufwendungen und Erträge in der **Gewinn- und Verlustrechnung** gegenüberstellen. In der Buchführung geschieht das auf dem **GuV-Konto**.

1. **Aufwandskonten** abschließen: Saldo steht im Haben des Aufwandskontos → Buchung **GuV-Konto an Aufwandskonto**.
2. **Ertragskonten** abschließen: Saldo steht im Soll des Ertragskontos → Buchung **Ertragskonto an GuV-Konto**.
3. **GuV-Konto** abschließen:
   - Erträge > Aufwendungen → **Gewinn**: Saldo im Soll des GuV-Kontos → **GuV-Konto an Eigenkapital**.
   - Aufwendungen > Erträge → **Verlust**: Saldo im Haben des GuV-Kontos → **Eigenkapital an GuV-Konto**.
4. **Eigenkapitalkonto** abschließen (nach dem Privatkonto): **Eigenkapital an Schlussbilanzkonto**.

| Soll GuV-Konto | Haben GuV-Konto |
|---|---|
| alle Aufwendungen | alle Erträge |
| Saldo = **Gewinn** (wenn Erträge größer) | Saldo = **Verlust** (wenn Aufwendungen größer) |

# 5. Privatentnahmen und Privateinlagen (kurz)

Bei Einzelunternehmen und Personengesellschaften kann der Inhaber Geld oder Gegenstände für private Zwecke entnehmen. Das ist **kein Aufwand** des Betriebs, mindert aber das Eigenkapital. Es wird auf dem **Privatkonto** (Unterkonto des Eigenkapitals) gebucht:

- Entnahme 800 € bar: **Privat** 800 € an **Kasse** 800 €
- Einlage 5.000 € auf das Bankkonto: **Bank** 5.000 € an **Privat** 5.000 €
- Abschluss bei Überhang der Entnahmen: **Eigenkapital an Privat**

> Gegenstands- und Leistungsentnahmen können umsatzsteuerpflichtig sein – das ist Stoff für später.

# 6. Eigenkapitalentwicklung

**Eigenkapital Ende = Eigenkapital Anfang + Gewinn (− Verlust) − Privatentnahmen + Privateinlagen**

Das ist dieselbe Beziehung wie beim Eigenkapitalvergleich aus der Einheit „Inventur, Inventar und Bilanz“ – nur von der anderen Seite gerechnet.`,
  terms: [
    { term: 'Erfolgskonto', def: 'Unterkonto des Eigenkapitals, auf dem Aufwendungen oder Erträge erfasst werden; hat keinen Anfangsbestand und wird über das GuV-Konto abgeschlossen.' },
    { term: 'Aufwand', def: 'Wertverzehr in einem Geschäftsjahr, der das Eigenkapital mindert, z. B. Frachtaufwand, Löhne, Miete, Kfz-Kosten. Buchung im Soll des Aufwandskontos.' },
    { term: 'Ertrag', def: 'Wertzuwachs in einem Geschäftsjahr, der das Eigenkapital mehrt, z. B. Speditionserlöse, Mieterträge, Zinserträge. Buchung im Haben des Ertragskontos.' },
    { term: 'Frachtaufwand', def: 'Aufwandskonto für eingekaufte Beförderungsleistungen, z. B. Rechnungen von Frachtführern oder Empfangsspediteuren.' },
    { term: 'Speditionserlöse', def: 'Ertragskonto für die Entgelte, die die Spedition ihren Auftraggebern für Speditions-, Transport- und Logistikleistungen berechnet.' },
    { term: 'GuV-Konto', def: 'Gewinn- und Verlustkonto: Abschlusskonto, auf dem alle Aufwendungen (Soll) und Erträge (Haben) gegenübergestellt werden; sein Saldo ist Gewinn oder Verlust.' },
    { term: 'Gewinn', def: 'Überschuss der Erträge über die Aufwendungen; erhöht das Eigenkapital. Buchung: GuV-Konto an Eigenkapital.' },
    { term: 'Verlust', def: 'Überschuss der Aufwendungen über die Erträge; mindert das Eigenkapital. Buchung: Eigenkapital an GuV-Konto.' },
    { term: 'Privatkonto', def: 'Unterkonto des Eigenkapitals für Entnahmen (Soll) und Einlagen (Haben) des Inhabers; kein Erfolgskonto.' },
    { term: 'Erfolgsneutral', def: 'Geschäftsfall, der das Eigenkapital nicht verändert, z. B. Aktivtausch oder Darlehenstilgung.' }
  ],
  example: `# Saar-Trans Spedition GmbH – Abschluss der Erfolgskonten (Beispielzahlen 2026)

Zum Jahresende weisen die Erfolgskonten folgende Salden aus:

| Aufwandskonten | € | Ertragskonten | € |
|---|---:|---|---:|
| Frachtaufwand | 98.000 | Speditionserlöse | 186.000 |
| Löhne und Gehälter | 52.000 | Mieterträge (Untervermietung Lagerfläche) | 4.000 |
| Mietaufwand | 9.000 | | |
| Kfz-Kosten | 14.500 | | |
| Bürokosten | 2.300 | | |
| Zinsaufwand | 1.200 | | |
| **Summe** | **177.000** | **Summe** | **190.000** |

# Abschlussbuchungen

1. GuV-Konto 98.000 € an Frachtaufwand 98.000 € (ebenso für jedes andere Aufwandskonto)
2. Speditionserlöse 186.000 € an GuV-Konto 186.000 €; Mieterträge 4.000 € an GuV-Konto 4.000 €
3. Saldo GuV-Konto: 190.000 € − 177.000 € = **13.000 € Gewinn** → **GuV-Konto 13.000 € an Eigenkapital 13.000 €**

# GuV-Konto

| Soll | € | Haben | € |
|---|---:|---|---:|
| Frachtaufwand | 98.000 | Speditionserlöse | 186.000 |
| Löhne und Gehälter | 52.000 | Mieterträge | 4.000 |
| Mietaufwand | 9.000 | | |
| Kfz-Kosten | 14.500 | | |
| Bürokosten | 2.300 | | |
| Zinsaufwand | 1.200 | | |
| Eigenkapital (Gewinn) | 13.000 | | |
| **Summe** | **190.000** | **Summe** | **190.000** |

Der Frachtaufwand ist mit Abstand der größte Aufwandsposten – typisch für eine Spedition, die viele Transporte an Frachtführer vergibt.`,
  rules: [
    'Aufwand mindert das Eigenkapital und steht im Soll, Ertrag mehrt das Eigenkapital und steht im Haben.',
    'Erfolgskonten haben keinen Anfangsbestand; sie werden jedes Jahr neu eröffnet.',
    'Aufwandskonten: GuV-Konto an Aufwandskonto. Ertragskonten: Ertragskonto an GuV-Konto.',
    'Gewinn: GuV-Konto an Eigenkapital. Verlust: Eigenkapital an GuV-Konto.',
    'Privatentnahmen sind kein Aufwand: Sie werden auf dem Privatkonto gebucht, nicht auf der GuV.',
    'Erst das Privatkonto und das GuV-Konto über Eigenkapital abschließen, dann das Eigenkapital über das Schlussbilanzkonto.'
  ],
  summary: `- **Erfolgswirksame** Geschäftsfälle verändern das Eigenkapital: **Aufwand** mindert (Soll), **Ertrag** mehrt (Haben).
- Spedition: **Frachtaufwand**, Löhne und Gehälter, Mietaufwand, Kfz-Kosten als Aufwand; **Speditionserlöse**, Miet- und Zinserträge als Ertrag.
- Abschluss: Aufwands- und Ertragskonten über das **GuV-Konto**, dessen Saldo über das **Eigenkapital**.
- **Gewinn**: GuV-Konto an Eigenkapital. **Verlust**: Eigenkapital an GuV-Konto.
- **Privatentnahmen**: Privat an Kasse/Bank; Abschluss Eigenkapital an Privat.
- EK Ende = EK Anfang + Gewinn − Verlust − Entnahmen + Einlagen. Grundlage: § 242 Abs. 2 HGB.`,
  mistakes: [
    { wrong: 'Speditionserlöse sind ein Aktivkonto, weil Geld hereinkommt.', right: 'Speditionserlöse sind ein Ertragskonto (Unterkonto des Eigenkapitals). Das Geld selbst landet auf Bank oder Forderungen.' },
    { wrong: 'Bei Gewinn bucht man „Eigenkapital an GuV-Konto“.', right: 'Gewinn erhöht das Eigenkapital (Passivkonto, Zugang im Haben): GuV-Konto an Eigenkapital.' },
    { wrong: 'Die Privatentnahme des Inhabers ist Aufwand und mindert den Gewinn.', right: 'Privatentnahmen sind kein betrieblicher Aufwand. Sie mindern das Eigenkapital über das Privatkonto, nicht den Gewinn.' },
    { wrong: 'Die Tilgung eines Darlehens ist Aufwand.', right: 'Die Tilgung ist erfolgsneutral (Aktiv-Passiv-Minderung). Nur die Zinsen sind Aufwand.' },
    { wrong: 'Erfolgskonten werden über das Schlussbilanzkonto abgeschlossen.', right: 'Erfolgskonten werden über das GuV-Konto abgeschlossen; nur Bestandskonten gehen auf das Schlussbilanzkonto.' }
  ],
  flashcards: [
    { q: 'Auf welcher Seite bucht man Aufwand?', a: 'Im Soll des Aufwandskontos, weil Aufwand das Eigenkapital (Haben-Konto) mindert.' },
    { q: 'Auf welcher Seite bucht man Ertrag?', a: 'Im Haben des Ertragskontos, weil Ertrag das Eigenkapital mehrt.' },
    { q: 'Buchungssatz Eingangsrechnung eines Frachtführers (ohne USt)?', a: 'Frachtaufwand an Verbindlichkeiten a. LL.' },
    { q: 'Buchungssatz Ausgangsrechnung an einen Versender (ohne USt)?', a: 'Forderungen a. LL an Speditionserlöse.' },
    { q: 'Wie wird ein Aufwandskonto abgeschlossen?', a: 'GuV-Konto an Aufwandskonto.' },
    { q: 'Wie wird ein Ertragskonto abgeschlossen?', a: 'Ertragskonto an GuV-Konto.' },
    { q: 'Buchungssatz bei Gewinn?', a: 'GuV-Konto an Eigenkapital.' },
    { q: 'Buchungssatz bei Verlust?', a: 'Eigenkapital an GuV-Konto.' },
    { q: 'Buchungssatz Privatentnahme in bar?', a: 'Privat an Kasse.' },
    { q: 'Welche Vorschrift verlangt die Gewinn- und Verlustrechnung?', a: '§ 242 Abs. 2 HGB: Gegenüberstellung der Aufwendungen und Erträge zum Schluss jedes Geschäftsjahres.' },
    { q: 'Haben Erfolgskonten einen Anfangsbestand?', a: 'Nein. Sie beginnen jedes Geschäftsjahr bei null.' }
  ],
  tasks: [
    {
      id: 'lf03-erfolgskonten-a1', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche der folgenden Konten sind **Aufwandskonten**? (Mehrfachauswahl)',
      options: ['Frachtaufwand', 'Speditionserlöse', 'Kfz-Kosten', 'Forderungen a. LL', 'Mietaufwand', 'Mieterträge'],
      correct: [0, 2, 4],
      hints: ['Aufwand = Werteverzehr, der das Eigenkapital mindert.', 'Forderungen sind ein Bestandskonto, Erlöse und Mieterträge sind Erträge.'],
      solution: 'Aufwandskonten sind **Frachtaufwand, Kfz-Kosten und Mietaufwand** – sie erfassen verbrauchte Leistungen und mindern das Eigenkapital. Speditionserlöse und Mieterträge sind **Ertragskonten**. Forderungen a. LL ist ein **Aktivkonto** (Bestandskonto).'
    },
    {
      id: 'lf03-erfolgskonten-a2', type: 'mc', difficulty: 1, points: 1,
      q: 'Welcher Geschäftsfall ist **erfolgsneutral**?',
      options: [
        'Die Spedition zahlt die Monatsmiete für die Lagerhalle per Bank.',
        'Die Spedition tilgt 10.000 € ihres Bankdarlehens per Überweisung.',
        'Ein Frachtführer schickt eine Rechnung für einen Hauptlauf.',
        'Die Bank schreibt Zinsen auf das Guthaben gut.'
      ],
      correct: [1],
      hints: ['Erfolgsneutral = das Eigenkapital ändert sich nicht.', 'Bei einer Tilgung sinken Schulden und Bankguthaben gleichzeitig.'],
      solution: 'Die **Darlehenstilgung** ist erfolgsneutral: Bank (Aktiva) und Darlehensschulden (Passiva) sinken um denselben Betrag (Aktiv-Passiv-Minderung). Miete und Frachtrechnung sind Aufwand, die Zinsgutschrift ist Ertrag.'
    },
    {
      id: 'lf03-erfolgskonten-a3', type: 'booking', difficulty: 1, points: 2,
      q: 'Die Saar-Trans Spedition GmbH erhält die Rechnung des Frachtführers Becker Transporte für einen Hauptlauf Saarbrücken–Hamburg über **1.850 €**. Die Rechnung wird später bezahlt. (Umsatzsteuer bleibt unberücksichtigt.)',
      accounts: ['Frachtaufwand', 'Speditionserlöse', 'Verbindlichkeiten a. LL', 'Forderungen a. LL', 'Bank', 'Kasse', 'Eigenkapital'],
      entries: [
        { side: 'S', account: 'Frachtaufwand', amount: 1850 },
        { side: 'H', account: 'Verbindlichkeiten a. LL', amount: 1850 }
      ],
      hints: ['Die Spedition kauft eine Beförderungsleistung ein – ist das Aufwand oder Ertrag?', 'Weil noch nicht bezahlt wird, entsteht eine Schuld.'],
      solution: `**Buchungssatz:** Frachtaufwand 1.850 € an Verbindlichkeiten a. LL 1.850 €

- **Frachtaufwand** ist ein Aufwandskonto. Aufwand mindert das Eigenkapital → **Soll**.
- **Verbindlichkeiten a. LL** ist ein Passivkonto. Die Schuld nimmt zu → Zugang im **Haben**.`
    },
    {
      id: 'lf03-erfolgskonten-a4', type: 'booking', difficulty: 1, points: 2,
      q: 'Die Saar-Trans Spedition GmbH stellt dem Versender Hochwald Getränke KG für eine Teilladung **2.450 €** in Rechnung (Zahlungsziel 30 Tage, Umsatzsteuer bleibt unberücksichtigt).',
      accounts: ['Frachtaufwand', 'Speditionserlöse', 'Verbindlichkeiten a. LL', 'Forderungen a. LL', 'Bank', 'Kasse', 'Eigenkapital'],
      entries: [
        { side: 'S', account: 'Forderungen a. LL', amount: 2450 },
        { side: 'H', account: 'Speditionserlöse', amount: 2450 }
      ],
      hints: ['Der Kunde zahlt erst später: Welches Aktivkonto steigt?', 'Die verkaufte Leistung ist ein Ertrag.'],
      solution: `**Buchungssatz:** Forderungen a. LL 2.450 € an Speditionserlöse 2.450 €

- **Forderungen a. LL** ist ein Aktivkonto; die Forderung entsteht → Zugang im **Soll**.
- **Speditionserlöse** ist ein Ertragskonto; Ertrag mehrt das Eigenkapital → **Haben**.`
    },
    {
      id: 'lf03-erfolgskonten-a5', type: 'booking', difficulty: 2, points: 3,
      q: 'Per Bankabbuchung werden bezahlt: Monatsmiete für die Lagerhalle **2.500 €** und die Reparatur einer Sattelzugmaschine **680 €**. Bilde einen zusammengesetzten Buchungssatz (Umsatzsteuer bleibt unberücksichtigt).',
      accounts: ['Mietaufwand', 'Kfz-Kosten', 'Fuhrpark', 'Bank', 'Kasse', 'Verbindlichkeiten a. LL', 'Mieterträge'],
      entries: [
        { side: 'S', account: 'Mietaufwand', amount: 2500 },
        { side: 'S', account: 'Kfz-Kosten', amount: 680 },
        { side: 'H', account: 'Bank', amount: 3180 }
      ],
      hints: ['Zwei Aufwandskonten im Soll, ein Konto im Haben.', 'Eine Reparatur erhöht nicht den Wert des Lkw, sie ist laufender Aufwand.'],
      solution: `**Buchungssatz:** Mietaufwand 2.500 €, Kfz-Kosten 680 € an Bank 3.180 €

- **Mietaufwand** und **Kfz-Kosten** sind Aufwandskonten → **Soll**.
- **Bank** ist ein Aktivkonto; das Guthaben nimmt ab → Abgang im **Haben**: 2.500 € + 680 € = **3.180 €**.
- Die Reparatur gehört nicht auf Fuhrpark, weil kein neuer Vermögensgegenstand entsteht.`
    },
    {
      id: 'lf03-erfolgskonten-a6', type: 'booking', difficulty: 1, points: 2,
      q: 'Die Löhne der Lagerarbeiter von **14.300 €** werden per Bank überwiesen (vereinfacht ohne Steuer- und Sozialversicherungsabzüge).',
      accounts: ['Löhne und Gehälter', 'Bank', 'Kasse', 'Eigenkapital', 'Privat', 'Verbindlichkeiten a. LL'],
      entries: [
        { side: 'S', account: 'Löhne und Gehälter', amount: 14300 },
        { side: 'H', account: 'Bank', amount: 14300 }
      ],
      hints: ['Löhne sind Aufwand.', 'Das Bankguthaben nimmt ab.'],
      solution: `**Buchungssatz:** Löhne und Gehälter 14.300 € an Bank 14.300 €

- **Löhne und Gehälter**: Aufwandskonto → **Soll**.
- **Bank**: Aktivkonto, Abgang → **Haben**.

Die genaue Lohnbuchung mit Lohnsteuer und Sozialversicherung lernst du später (siehe auch Einheit „Die fünf Zweige der Sozialversicherung“).`
    },
    {
      id: 'lf03-erfolgskonten-a7', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne jedem Geschäftsfall der Spedition das Konto zu, das im **Soll** gebucht wird.',
      pairs: [
        ['Rechnung eines Empfangsspediteurs für die Verteilung', 'Frachtaufwand'],
        ['Ausgangsrechnung an einen Versender', 'Forderungen a. LL'],
        ['Abschluss des Kontos Speditionserlöse', 'Speditionserlöse'],
        ['Inhaber entnimmt 300 € aus der Kasse für private Zwecke', 'Privat'],
        ['Abschluss des GuV-Kontos bei Gewinn', 'GuV-Konto']
      ],
      hints: ['Ein Ertragskonto wird über seine Soll-Seite abgeschlossen.', 'Bei Gewinn steht der Saldo im Soll des GuV-Kontos.'],
      solution: `- Rechnung Empfangsspediteur: **Frachtaufwand** an Verbindlichkeiten a. LL
- Ausgangsrechnung: **Forderungen a. LL** an Speditionserlöse
- Abschluss Ertragskonto: **Speditionserlöse** an GuV-Konto
- Privatentnahme: **Privat** an Kasse
- Gewinn: **GuV-Konto** an Eigenkapital`
    },
    {
      id: 'lf03-erfolgskonten-a8', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Aufwendungen werden im [[Soll]] gebucht, Erträge im [[Haben]]. Erfolgskonten sind Unterkonten des [[Eigenkapitals|Eigenkapital]]. Sie werden über das [[GuV-Konto|GuV|Gewinn- und Verlustkonto]] abgeschlossen. Ist die Summe der Erträge größer als die Summe der Aufwendungen, entsteht ein [[Gewinn]].',
      hints: ['Das Eigenkapital steht im Haben; was es mindert, steht im Soll.', 'Das Abschlusskonto der Erfolgskonten heißt kurz GuV.'],
      solution: 'Aufwand → **Soll**, Ertrag → **Haben**. Erfolgskonten sind Unterkonten des **Eigenkapitals** und werden über das **GuV-Konto** abgeschlossen. Erträge > Aufwendungen = **Gewinn**.'
    },
    {
      id: 'lf03-erfolgskonten-a9', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Abschlussarbeiten in die richtige Reihenfolge.',
      items: [
        'Laufende Geschäftsfälle des Jahres auf Bestands- und Erfolgskonten buchen',
        'Aufwands- und Ertragskonten über das GuV-Konto abschließen',
        'GuV-Konto (Gewinn oder Verlust) und Privatkonto über das Eigenkapitalkonto abschließen',
        'Eigenkapital und übrige Bestandskonten über das Schlussbilanzkonto abschließen'
      ],
      hints: ['Das GuV-Konto kann erst saldiert werden, wenn alle Erfolgskonten darauf abgeschlossen sind.', 'Das Eigenkapital wird zuletzt abgeschlossen, weil Gewinn und Privatkonto es noch verändern.'],
      solution: 'Buchen → Erfolgskonten auf GuV-Konto → GuV-Saldo und Privatkonto auf Eigenkapital → Eigenkapital und Bestandskonten auf Schlussbilanzkonto. Das Eigenkapital kann erst abgeschlossen werden, wenn Gewinn/Verlust und Privatentnahmen darauf übertragen sind; sonst stimmt der Schlussbestand nicht mit dem Inventar überein.'
    },
    {
      id: 'lf03-erfolgskonten-a10', type: 'calc', difficulty: 2, points: 3,
      q: `Die Spedition Bliesgau Logistik e.K. hat zum 31.12.2026 folgende Salden auf den Erfolgskonten (Beispielzahlen):

| Konto | € |
|---|---:|
| Speditionserlöse | 312.000 |
| Frachtaufwand | 171.500 |
| Löhne und Gehälter | 84.000 |
| Mietaufwand | 18.000 |
| Kfz-Kosten | 21.600 |
| Zinserträge | 400 |
| Bürokosten | 3.900 |

Berechne die Summe der Aufwendungen, die Summe der Erträge und den Erfolg (Gewinn positiv, Verlust negativ).`,
      formula: 'Erfolg = Summe Erträge − Summe Aufwendungen',
      fields: [
        { id: 'aufw', label: 'Summe Aufwendungen', unit: '€', answer: 299000, tol: 0.01 },
        { id: 'ertr', label: 'Summe Erträge', unit: '€', answer: 312400, tol: 0.01 },
        { id: 'erfolg', label: 'Erfolg (Gewinn +, Verlust −)', unit: '€', answer: 13400, tol: 0.01 }
      ],
      hints: ['Ordne zuerst jedes Konto Aufwand oder Ertrag zu.', 'Zinserträge sind Ertrag, Bürokosten sind Aufwand.'],
      solution: `**Formel:** Erfolg = Erträge − Aufwendungen

**Aufwendungen:** 171.500 € + 84.000 € + 18.000 € + 21.600 € + 3.900 € = **299.000 €**

**Erträge:** 312.000 € + 400 € = **312.400 €**

**Erfolg:** 312.400 € − 299.000 € = **13.400 € Gewinn**

Abschlussbuchung: GuV-Konto 13.400 € an Eigenkapital 13.400 €.`
    },
    {
      id: 'lf03-erfolgskonten-a11', type: 'booking', difficulty: 2, points: 2,
      q: 'Schließe das GuV-Konto der Bliesgau Logistik e.K. aus Aufgabe a10 ab (Gewinn **13.400 €**).',
      accounts: ['GuV-Konto', 'Eigenkapital', 'Schlussbilanzkonto', 'Privat', 'Speditionserlöse', 'Bank'],
      entries: [
        { side: 'S', account: 'GuV-Konto', amount: 13400 },
        { side: 'H', account: 'Eigenkapital', amount: 13400 }
      ],
      hints: ['Der Gewinn erhöht das Eigenkapital.', 'Das Eigenkapital ist ein Passivkonto: Zugänge stehen im Haben.'],
      solution: `**Buchungssatz:** GuV-Konto 13.400 € an Eigenkapital 13.400 €

- Im GuV-Konto sind die Erträge (Haben) größer als die Aufwendungen (Soll). Der Saldo steht zum Ausgleich auf der **Soll**-Seite.
- **Eigenkapital** ist ein Passivkonto; der Gewinn ist ein Zugang → **Haben**.`
    },
    {
      id: 'lf03-erfolgskonten-a12', type: 'booking', difficulty: 2, points: 2,
      q: 'Das Konto **Kfz-Kosten** der Saar-Trans Spedition GmbH weist am Jahresende einen Saldo von **14.500 €** aus. Bilde die Abschlussbuchung.',
      accounts: ['GuV-Konto', 'Kfz-Kosten', 'Fuhrpark', 'Schlussbilanzkonto', 'Eigenkapital'],
      entries: [
        { side: 'S', account: 'GuV-Konto', amount: 14500 },
        { side: 'H', account: 'Kfz-Kosten', amount: 14500 }
      ],
      hints: ['Aufwandskonten werden nicht über das Schlussbilanzkonto abgeschlossen.', 'Der Saldo eines Aufwandskontos steht auf der Haben-Seite.'],
      solution: `**Buchungssatz:** GuV-Konto 14.500 € an Kfz-Kosten 14.500 €

Die Aufwendungen stehen im Soll des Kontos Kfz-Kosten. Zum Ausgleich wird der Saldo im **Haben** eingetragen und als Aufwand in das **Soll** des GuV-Kontos übertragen.`
    },
    {
      id: 'lf03-erfolgskonten-a13', type: 'booking', difficulty: 1, points: 2,
      q: 'Der Inhaber der Bliesgau Logistik e.K. entnimmt **600 €** aus der Geschäftskasse für einen privaten Einkauf.',
      accounts: ['Privat', 'Kasse', 'Bank', 'Eigenkapital', 'Löhne und Gehälter', 'GuV-Konto'],
      entries: [
        { side: 'S', account: 'Privat', amount: 600 },
        { side: 'H', account: 'Kasse', amount: 600 }
      ],
      hints: ['Eine Privatentnahme ist kein Aufwand des Betriebs.', 'Entnahmen werden auf einem Unterkonto des Eigenkapitals gesammelt.'],
      solution: `**Buchungssatz:** Privat 600 € an Kasse 600 €

- **Privat** ist ein Unterkonto des Eigenkapitals. Entnahmen mindern das Eigenkapital → **Soll**.
- **Kasse** ist ein Aktivkonto; Abgang → **Haben**.
- Die Entnahme mindert nicht den Gewinn, weil sie nicht betrieblich veranlasst ist.`
    },
    {
      id: 'lf03-erfolgskonten-a14', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Jahresabschluss der Hochwald Logistik e.K.',
      intro: `Die Hochwald Logistik e.K. in Losheim am See hat zum 31.12.2026 folgende Salden (Beispielzahlen):

| Konto | € |
|---|---:|
| Speditionserlöse | 412.000 |
| Provisionserträge | 6.500 |
| Frachtaufwand | 236.000 |
| Löhne und Gehälter | 121.000 |
| Mietaufwand | 30.000 |
| Kfz-Kosten | 24.800 |
| Versicherungen | 9.200 |
| Zinsaufwand | 4.500 |
| Privat (Entnahmen) | 18.000 |

Das Eigenkapital betrug am 01.01.2026 **153.000 €**. Einlagen gab es keine.`,
      hints: ['Das Privatkonto gehört nicht in die GuV.', 'Prüfe, ob die Aufwendungen oder die Erträge größer sind.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf03-erfolgskonten-a14-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne Summe der Aufwendungen, Summe der Erträge und den Erfolg (Gewinn positiv, Verlust negativ).',
          formula: 'Erfolg = Summe Erträge − Summe Aufwendungen',
          fields: [
            { id: 'aufw', label: 'Summe Aufwendungen', unit: '€', answer: 425500, tol: 0.01 },
            { id: 'ertr', label: 'Summe Erträge', unit: '€', answer: 418500, tol: 0.01 },
            { id: 'erfolg', label: 'Erfolg (Gewinn +, Verlust −)', unit: '€', answer: -7000, tol: 0.01 }
          ],
          hints: ['Sechs Aufwandskonten, zwei Ertragskonten.', 'Die 18.000 € Privatentnahmen bleiben außen vor.'],
          solution: `**Aufwendungen:** 236.000 € + 121.000 € + 30.000 € + 24.800 € + 9.200 € + 4.500 € = **425.500 €**

**Erträge:** 412.000 € + 6.500 € = **418.500 €**

**Erfolg:** 418.500 € − 425.500 € = **−7.000 €**, also ein **Verlust von 7.000 €**.

Das Privatkonto ist kein Erfolgskonto und wird nicht berücksichtigt.`
        },
        {
          id: 'lf03-erfolgskonten-a14-2', type: 'booking', difficulty: 3, points: 2,
          q: 'Bilde die Buchung zum Abschluss des GuV-Kontos.',
          accounts: ['GuV-Konto', 'Eigenkapital', 'Privat', 'Schlussbilanzkonto', 'Bank'],
          entries: [
            { side: 'S', account: 'Eigenkapital', amount: 7000 },
            { side: 'H', account: 'GuV-Konto', amount: 7000 }
          ],
          hints: ['Bei einem Verlust ist die Soll-Seite des GuV-Kontos größer.', 'Ein Verlust mindert das Eigenkapital.'],
          solution: `**Buchungssatz:** Eigenkapital 7.000 € an GuV-Konto 7.000 €

- Im GuV-Konto überwiegen die Aufwendungen (Soll). Der Ausgleich steht im **Haben** des GuV-Kontos.
- **Eigenkapital** (Passivkonto) nimmt ab → Abgang im **Soll**.`
        },
        {
          id: 'lf03-erfolgskonten-a14-3', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne das Eigenkapital zum 31.12.2026 nach Abschluss von GuV-Konto und Privatkonto.',
          formula: 'EK Ende = EK Anfang + Gewinn − Verlust − Privatentnahmen + Privateinlagen',
          fields: [
            { id: 'minderung', label: 'Gesamte Minderung des Eigenkapitals', unit: '€', answer: 25000, tol: 0.01 },
            { id: 'ekende', label: 'Eigenkapital 31.12.2026', unit: '€', answer: 128000, tol: 0.01 }
          ],
          hints: ['Verlust und Privatentnahmen mindern das Eigenkapital.', 'Das Privatkonto wird mit „Eigenkapital an Privat“ abgeschlossen.'],
          solution: `**Formel:** EK Ende = EK Anfang − Verlust − Entnahmen + Einlagen

**Minderung:** 7.000 € (Verlust) + 18.000 € (Entnahmen) = **25.000 €**

**EK Ende:** 153.000 € − 25.000 € + 0 € = **128.000 €**

Buchungen: Eigenkapital an GuV-Konto 7.000 €; Eigenkapital an Privat 18.000 €.`
        }
      ]
    },
    {
      id: 'lf03-erfolgskonten-a15', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre, warum Aufwendungen im Soll und Erträge im Haben gebucht werden, und warum man dafür nicht direkt das Eigenkapitalkonto benutzt.',
      model: 'Erfolgskonten sind Unterkonten des Eigenkapitals. Das Eigenkapital ist ein Passivkonto, Zugänge stehen im Haben, Abgänge im Soll. Aufwendungen mindern das Eigenkapital und stehen deshalb im Soll, Erträge mehren es und stehen im Haben. Man bucht nicht direkt auf dem Eigenkapitalkonto, weil man sonst die Quellen des Erfolgs nicht erkennen könnte. Getrennte Konten zeigen in der GuV, welche Aufwendungen und Erträge in welcher Höhe angefallen sind, und erfüllen § 242 Abs. 2 HGB.',
      criteria: [
        { text: 'nennt Erfolgskonten als Unterkonten des Eigenkapitals', keywords: ['Unterkont', 'Eigenkapital'], points: 1 },
        { text: 'begründet Soll/Haben mit Minderung/Mehrung des Eigenkapitals', keywords: ['minder|Abgang|verringer', 'mehr|Zugang|erhöh'], points: 1 },
        { text: 'nennt Übersicht über Erfolgsquellen bzw. GuV als Grund', keywords: ['Quelle|Übersicht|erkennen|GuV|Gewinn- und Verlust|transparen'], points: 1 }
      ],
      hints: ['Überlege, wo das Eigenkapital in der Bilanz steht.', 'Was würde fehlen, wenn alles auf einem Konto stünde?'],
      solution: 'Erfolgskonten sind **Unterkonten des Eigenkapitals**. Weil das Eigenkapital als Passivkonto Zugänge im Haben und Abgänge im Soll erfasst, stehen **Aufwendungen (Minderung) im Soll** und **Erträge (Mehrung) im Haben**. Getrennte Konten zeigen, **woher** der Erfolg stammt; daraus entsteht die Gewinn- und Verlustrechnung (§ 242 Abs. 2 HGB).'
    }
  ],
  quiz: ['lf03-erfolgskonten-a1', 'lf03-erfolgskonten-a3', 'lf03-erfolgskonten-a10', 'lf03-erfolgskonten-a11', 'lf03-erfolgskonten-a14'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 3, Inhalte: Erfolgskonten, Gewinn- und Verlustrechnung, Privatkonto' },
    { title: 'Handelsgesetzbuch § 242 Pflicht zur Aufstellung (Bilanz, Gewinn- und Verlustrechnung)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__242.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 238 Buchführungspflicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__238.html', asOf: '2026' }
  ],
  links: ['lf03-buchen-bestandskonten', 'lf03-inventur-bilanz', 'lf03-umsatzsteuer']
};
