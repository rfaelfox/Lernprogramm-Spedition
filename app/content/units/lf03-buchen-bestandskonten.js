export default {
  id: 'lf03-buchen-bestandskonten',
  area: 'LF03',
  topic: 'lf03-bestandskonten',
  title: 'Bestandskonten und Buchungssatz',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Buchführungspflicht und Grundsätze ordnungsmäßiger Buchführung nach §§ 238, 239 HGB, Stand 2026. Kontenbezeichnungen ohne Kontonummern, weil die Nummern vom Kontenrahmen der Schule abhängen.'
  },
  goals: [
    'Ich kann eine Eröffnungsbilanz in Bestandskonten auflösen.',
    'Ich kann Aktivkonten und Passivkonten unterscheiden und weiß, auf welcher Seite Anfangsbestand, Zugänge und Abgänge stehen.',
    'Ich kann zu einem Geschäftsfall einer Spedition einen Buchungssatz (Soll an Haben) bilden.',
    'Ich kann die vier Arten der Bilanzveränderung erkennen und ihre Wirkung auf die Bilanzsumme erklären.',
    'Ich kann einen zusammengesetzten Buchungssatz bilden.',
    'Ich kann Bestandskonten über das Schlussbilanzkonto abschließen.'
  ],
  simple: `# Worum geht es?

Die Bilanz zeigt den Stand an **einem** Tag. Im Laufe des Jahres ändert sich aber fast jeden Tag etwas: Kunden zahlen, die Spedition kauft eine Wechselbrücke, ein Darlehen wird getilgt. Damit man nicht nach jedem Geschäftsfall eine neue Bilanz schreiben muss, wird die Bilanz in **Konten** aufgelöst. Jeder Bilanzposten bekommt ein eigenes Konto: das **Bestandskonto**.

# Das Konto in T-Form

Ein Konto hat zwei Seiten: links **Soll (S)**, rechts **Haben (H)**.

- **Aktivkonten** (Vermögen, z. B. Fuhrpark, Bank, Kasse, Forderungen a. LL): Der Anfangsbestand steht im **Soll** – so wie das Vermögen links in der Bilanz steht. Zugänge stehen im **Soll**, Abgänge im **Haben**.
- **Passivkonten** (Kapital, z. B. Eigenkapital, Darlehensschulden, Verbindlichkeiten a. LL): Der Anfangsbestand steht im **Haben** – so wie das Kapital rechts in der Bilanz steht. Zugänge stehen im **Haben**, Abgänge im **Soll**.

# Der Buchungssatz

Jeder Geschäftsfall wird **doppelt** gebucht: einmal im Soll und einmal im Haben, immer mit demselben Betrag. Der Buchungssatz sagt kurz, wo gebucht wird:

**Sollkonto an Habenkonto**

Beispiel: Ein Versender überweist 1.000 € auf unser Bankkonto. → **Bank 1.000 € an Forderungen a. LL 1.000 €**

# Vier Fragen für jeden Buchungssatz

1. Welche Konten sind betroffen?
2. Sind es Aktiv- oder Passivkonten?
3. Liegt ein Zugang (Mehrung) oder ein Abgang (Minderung) vor?
4. Auf welcher Seite wird also gebucht?`,
  deep: `# Vom Eröffnungsbilanzkonto zum Schlussbilanzkonto

1. **Eröffnungsbilanz** aufstellen (entspricht der Schlussbilanz des Vorjahres).
2. **Bestandskonten eröffnen**: Die Anfangsbestände werden über das **Eröffnungsbilanzkonto (EBK)** auf die Konten übertragen. Das EBK ist das Spiegelbild der Bilanz: Aktivposten stehen dort im Haben, Passivposten im Soll.
   - Aktivkonto: *Fuhrpark an Eröffnungsbilanzkonto*
   - Passivkonto: *Eröffnungsbilanzkonto an Eigenkapital*
3. **Laufende Geschäftsfälle** anhand von Belegen buchen (Grundbuch: zeitliche Ordnung; Hauptbuch: sachliche Ordnung auf den Konten).
4. **Konten abschließen**: Auf jedem Konto wird der **Schlussbestand (Saldo)** auf der **wertmäßig kleineren Seite** eingesetzt, damit beide Seiten gleich groß sind.
   - Aktivkonto: *Schlussbilanzkonto an Bank*
   - Passivkonto: *Darlehensschulden an Schlussbilanzkonto*
5. Das **Schlussbilanzkonto (SBK)** sammelt alle Schlussbestände. Die Schlussbestände laut Buchführung werden mit den Werten der **Inventur** verglichen. Abweichungen müssen geklärt und berichtigt werden, denn maßgeblich sind die tatsächlichen Bestände.

# Aufbau der Bestandskonten

| | Soll | Haben |
|---|---|---|
| **Aktivkonto** | Anfangsbestand, Zugänge | Abgänge, Schlussbestand |
| **Passivkonto** | Abgänge, Schlussbestand | Anfangsbestand, Zugänge |

# Die vier Arten der Bilanzveränderung

| Art | Was passiert? | Bilanzsumme | Beispiel aus der Spedition |
|---|---|---|---|
| **Aktivtausch** | ein Aktivposten steigt, ein anderer sinkt | bleibt gleich | Versender überweist eine offene Rechnung: *Bank an Forderungen a. LL* |
| **Passivtausch** | ein Passivposten steigt, ein anderer sinkt | bleibt gleich | Verbindlichkeit gegenüber einem Lieferanten wird in ein Darlehen umgewandelt: *Verbindlichkeiten a. LL an Darlehensschulden* |
| **Aktiv-Passiv-Mehrung** (Bilanzverlängerung) | Aktivposten und Passivposten steigen | steigt | Kauf eines Gabelstaplers auf Ziel: *Betriebs- und Geschäftsausstattung an Verbindlichkeiten a. LL* |
| **Aktiv-Passiv-Minderung** (Bilanzverkürzung) | Aktivposten und Passivposten sinken | sinkt | Tilgung eines Darlehens per Bank: *Darlehensschulden an Bank* |

# Der zusammengesetzte Buchungssatz

Sind **mehr als zwei Konten** betroffen, entsteht ein zusammengesetzter Buchungssatz. Auch hier gilt: **Summe Soll = Summe Haben**.

Beispiel: Kauf einer Wechselbrücke für 9.000 €, 3.000 € bar, 6.000 € per Banküberweisung:

| Soll | € | Haben | € |
|---|---:|---|---:|
| Fuhrpark | 9.000 | Kasse | 3.000 |
| | | Bank | 6.000 |

# Grundsätze

- **Keine Buchung ohne Beleg** (z. B. Kontoauszug, Eingangsrechnung, Ausgangsrechnung, Quittung).
- Buchungen müssen vollständig, richtig, zeitgerecht und geordnet sein (§ 239 Abs. 2 HGB).
- Eine Eintragung darf nicht so verändert werden, dass der ursprüngliche Inhalt nicht mehr feststellbar ist (§ 239 Abs. 3 HGB) – Fehler werden durch **Stornobuchungen** berichtigt.

> In dieser Einheit bleibt die Umsatzsteuer unberücksichtigt. Wie Vorsteuer und Umsatzsteuer gebucht werden, lernst du in der Einheit „Vorsteuer und Umsatzsteuer“.`,
  terms: [
    { term: 'Bestandskonto', def: 'Konto für einen Bilanzposten. Es übernimmt den Anfangsbestand aus der Bilanz, erfasst Zugänge und Abgänge und weist einen Schlussbestand aus.' },
    { term: 'Aktivkonto', def: 'Bestandskonto für einen Vermögensposten (z. B. Fuhrpark, Bank, Kasse, Forderungen a. LL). Anfangsbestand und Zugänge im Soll, Abgänge im Haben.' },
    { term: 'Passivkonto', def: 'Bestandskonto für einen Kapitalposten (z. B. Eigenkapital, Darlehensschulden, Verbindlichkeiten a. LL). Anfangsbestand und Zugänge im Haben, Abgänge im Soll.' },
    { term: 'Soll / Haben', def: 'Linke Seite (Soll) und rechte Seite (Haben) eines Kontos. Die Begriffe sind reine Seitenbezeichnungen.' },
    { term: 'Buchungssatz', def: 'Kurzanweisung, auf welchen Konten im Soll und im Haben gebucht wird: „Sollkonto an Habenkonto“.' },
    { term: 'Zusammengesetzter Buchungssatz', def: 'Buchungssatz mit mehr als zwei Konten. Die Summe der Sollbeträge muss der Summe der Habenbeträge entsprechen.' },
    { term: 'Saldo', def: 'Unterschiedsbetrag zwischen den Summen beider Kontoseiten. Beim Abschluss eines Bestandskontos ist er der Schlussbestand.' },
    { term: 'Eröffnungsbilanzkonto (EBK)', def: 'Hilfskonto zur Eröffnung der Bestandskonten. Spiegelbild der Eröffnungsbilanz.' },
    { term: 'Schlussbilanzkonto (SBK)', def: 'Abschlusskonto, auf das die Schlussbestände aller Bestandskonten gebucht werden. Es wird mit dem Inventar abgestimmt.' },
    { term: 'Aktivtausch', def: 'Bilanzveränderung, bei der ein Aktivposten zunimmt und ein anderer um denselben Betrag abnimmt. Bilanzsumme unverändert.' },
    { term: 'Bilanzverlängerung / Bilanzverkürzung', def: 'Aktiv-Passiv-Mehrung (Bilanzsumme steigt) bzw. Aktiv-Passiv-Minderung (Bilanzsumme sinkt).' }
  ],
  example: `# Köllertal Spedition GmbH – ein Monat in Konten (Beispielzahlen, ohne Umsatzsteuer)

**Eröffnungsbilanz zum 01.01.2026**

| Aktiva | € | Passiva | € |
|---|---:|---|---:|
| Fuhrpark | 300.000 | Eigenkapital | 180.000 |
| Betriebs- und Geschäftsausstattung | 40.000 | Darlehensschulden | 200.000 |
| Forderungen a. LL | 50.000 | Verbindlichkeiten a. LL | 50.000 |
| Bank | 35.000 | | |
| Kasse | 5.000 | | |
| **Summe** | **430.000** | **Summe** | **430.000** |

**Geschäftsfälle im Januar**

| Nr. | Geschäftsfall | Buchungssatz | Art |
|---|---|---|---|
| 1 | Ein Versender überweist 12.000 € | Bank 12.000 an Forderungen a. LL 12.000 | Aktivtausch |
| 2 | Kauf eines Gabelstaplers auf Ziel, 18.000 € | Betriebs- und Geschäftsausstattung 18.000 an Verbindlichkeiten a. LL 18.000 | Aktiv-Passiv-Mehrung |
| 3 | Eine Verbindlichkeit über 20.000 € wird in ein Darlehen umgewandelt | Verbindlichkeiten a. LL 20.000 an Darlehensschulden 20.000 | Passivtausch |
| 4 | Darlehenstilgung per Bank, 10.000 € | Darlehensschulden 10.000 an Bank 10.000 | Aktiv-Passiv-Minderung |
| 5 | Kauf einer Wechselbrücke für 9.000 €: 3.000 € bar, 6.000 € per Bank | Fuhrpark 9.000 an Kasse 3.000 und Bank 6.000 | Aktivtausch (zusammengesetzt) |

**Konto Bank (Aktivkonto)**

| Soll | € | Haben | € |
|---|---:|---|---:|
| Anfangsbestand | 35.000 | (4) Darlehensschulden | 10.000 |
| (1) Forderungen a. LL | 12.000 | (5) Fuhrpark | 6.000 |
| | | Schlussbestand | 31.000 |
| **Summe** | **47.000** | **Summe** | **47.000** |

**Schlussbilanzkonto zum 31.01.2026** (vereinfacht nach einem Monat)

| Soll (Aktiva) | € | Haben (Passiva) | € |
|---|---:|---|---:|
| Fuhrpark | 309.000 | Eigenkapital | 180.000 |
| Betriebs- und Geschäftsausstattung | 58.000 | Darlehensschulden | 210.000 |
| Forderungen a. LL | 38.000 | Verbindlichkeiten a. LL | 48.000 |
| Bank | 31.000 | | |
| Kasse | 2.000 | | |
| **Summe** | **438.000** | **Summe** | **438.000** |

Die Bilanzsumme ist um 8.000 € gestiegen: +18.000 € (Fall 2) − 10.000 € (Fall 4). Die Tauschvorgänge (Fälle 1, 3 und 5) ändern die Bilanzsumme nicht.`,
  rules: [
    'Aktivkonten: Anfangsbestand und Zugänge im Soll, Abgänge im Haben.',
    'Passivkonten: Anfangsbestand und Zugänge im Haben, Abgänge im Soll.',
    'Buchungssatz: Sollkonto an Habenkonto – zuerst Soll, dann Haben.',
    'Jeder Geschäftsfall berührt mindestens zwei Konten; Summe Soll = Summe Haben.',
    'Der Schlussbestand steht auf der wertmäßig kleineren Kontoseite.',
    'Keine Buchung ohne Beleg.',
    'Tauschvorgänge ändern die Bilanzsumme nicht, Mehrung und Minderung schon.'
  ],
  summary: `- Die **Eröffnungsbilanz** wird über das **EBK** in **Bestandskonten** aufgelöst.
- **Aktivkonten**: AB und Zugänge im **Soll**, Abgänge im **Haben**. **Passivkonten**: umgekehrt.
- **Buchungssatz**: *Sollkonto an Habenkonto*, Beträge auf beiden Seiten gleich; bei mehr als zwei Konten **zusammengesetzter Buchungssatz**.
- **Vier Bilanzveränderungen**: Aktivtausch, Passivtausch (Bilanzsumme gleich), Aktiv-Passiv-Mehrung (steigt), Aktiv-Passiv-Minderung (sinkt).
- **Abschluss**: Schlussbestände über das **Schlussbilanzkonto**, Abgleich mit der Inventur.`,
  mistakes: [
    { wrong: '„Soll“ bedeutet, dass wir etwas zahlen sollen, „Haben“, dass wir etwas haben.', right: 'Soll und Haben sind nur Bezeichnungen für die linke und rechte Kontoseite. Was sie bedeuten, hängt davon ab, ob es ein Aktiv- oder ein Passivkonto ist.' },
    { wrong: 'Beim Passivkonto Darlehensschulden steht eine Tilgung im Haben.', right: 'Eine Tilgung ist ein Abgang auf einem Passivkonto und steht daher im Soll: Darlehensschulden an Bank.' },
    { wrong: 'Der Schlussbestand wird auf der größeren Seite eingetragen.', right: 'Der Saldo wird auf der wertmäßig kleineren Seite eingesetzt, damit beide Seiten gleich groß sind.' },
    { wrong: 'Beim zusammengesetzten Buchungssatz genügt es, wenn auf jeder Seite ein Konto steht.', right: 'Es können mehrere Konten auf einer Seite stehen; entscheidend ist, dass die Summe der Sollbeträge der Summe der Habenbeträge entspricht.' },
    { wrong: 'Wenn ein Versender seine Rechnung bezahlt, steigt die Bilanzsumme.', right: 'Bank steigt, Forderungen a. LL sinken – ein Aktivtausch. Die Bilanzsumme bleibt gleich.' }
  ],
  flashcards: [
    { q: 'Wo steht der Anfangsbestand eines Aktivkontos?', a: 'Im Soll (links), wie das Vermögen auf der linken Bilanzseite.' },
    { q: 'Wo stehen Zugänge auf einem Passivkonto?', a: 'Im Haben (rechts).' },
    { q: 'Wie lautet die Grundform des Buchungssatzes?', a: 'Sollkonto an Habenkonto.' },
    { q: 'Was ist ein Aktivtausch? Beispiel?', a: 'Ein Aktivposten steigt, ein anderer sinkt; Bilanzsumme gleich. Beispiel: Versender überweist – Bank an Forderungen a. LL.' },
    { q: 'Was ist eine Aktiv-Passiv-Minderung? Beispiel?', a: 'Vermögen und Schulden sinken; Bilanzsumme sinkt. Beispiel: Zahlung an einen Frachtführer per Bank – Verbindlichkeiten a. LL an Bank.' },
    { q: 'Buchungssatz: Kauf eines Lkw auf Ziel (ohne USt)?', a: 'Fuhrpark an Verbindlichkeiten a. LL (Aktiv-Passiv-Mehrung).' },
    { q: 'Wann spricht man von einem zusammengesetzten Buchungssatz?', a: 'Wenn mehr als zwei Konten angesprochen werden.' },
    { q: 'Wie wird ein Aktivkonto abgeschlossen?', a: 'Schlussbilanzkonto an Aktivkonto (Schlussbestand im Haben des Aktivkontos).' },
    { q: 'Wie wird ein Passivkonto abgeschlossen?', a: 'Passivkonto an Schlussbilanzkonto (Schlussbestand im Soll des Passivkontos).' },
    { q: 'Womit werden die Schlussbestände laut Buchführung verglichen?', a: 'Mit den tatsächlichen Beständen laut Inventur.' }
  ],
  tasks: [
    {
      id: 'lf03-buchen-bestandskonten-a1', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche der folgenden Konten sind **Aktivkonten**? (Mehrfachauswahl)',
      options: ['Fuhrpark', 'Eigenkapital', 'Forderungen a. LL', 'Darlehensschulden', 'Bank', 'Verbindlichkeiten a. LL'],
      correct: [0, 2, 4],
      hints: ['Aktivkonten entstehen aus der linken Bilanzseite.', 'Was die Spedition besitzt oder von anderen bekommt, ist Vermögen.'],
      solution: 'Aktivkonten sind **Fuhrpark, Forderungen a. LL und Bank** – sie stehen als Vermögen auf der Aktivseite. Eigenkapital, Darlehensschulden und Verbindlichkeiten a. LL zeigen die Herkunft des Kapitals und sind **Passivkonten**.'
    },
    {
      id: 'lf03-buchen-bestandskonten-a2', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Regeln für Bestandskonten.',
      text: 'Auf Aktivkonten stehen der Anfangsbestand und die Zugänge im [[Soll]], die Abgänge im [[Haben]]. Auf Passivkonten steht der Anfangsbestand im [[Haben]]. Der Schlussbestand wird auf der wertmäßig [[kleineren]] Seite eingesetzt. Aktivkonten werden mit dem Buchungssatz „[[Schlussbilanzkonto|SBK]] an Aktivkonto“ abgeschlossen.',
      hints: ['Aktivkonten „spiegeln“ die linke Bilanzseite.', 'Der Saldo gleicht die Kontoseiten aus.'],
      solution: 'Aktivkonten: AB und Zugänge im **Soll**, Abgänge im **Haben**. Passivkonten: AB im **Haben**. Der Schlussbestand kommt auf die **kleinere** Seite, damit beide Summen gleich sind. Abschluss eines Aktivkontos: **Schlussbilanzkonto** an Aktivkonto.'
    },
    {
      id: 'lf03-buchen-bestandskonten-a3', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne jedem Geschäftsfall die passende Art der Bilanzveränderung zu.',
      pairs: [
        ['Ein Versender begleicht eine Rechnung per Banküberweisung', 'Aktivtausch'],
        ['Eine Verbindlichkeit a. LL wird in ein Darlehen umgewandelt', 'Passivtausch'],
        ['Kauf einer Wechselbrücke auf Ziel', 'Aktiv-Passiv-Mehrung'],
        ['Banküberweisung an einen Frachtführer zum Ausgleich seiner Rechnung', 'Aktiv-Passiv-Minderung']
      ],
      hints: ['Prüfe für jeden Fall: Welche Bilanzseite(n) sind betroffen?', 'Steigen oder sinken beide Seiten, ändert sich die Bilanzsumme.'],
      solution: `- Zahlung des Versenders: Bank ↑, Forderungen ↓ → nur Aktivseite → **Aktivtausch**.
- Umwandlung in Darlehen: Darlehensschulden ↑, Verbindlichkeiten ↓ → nur Passivseite → **Passivtausch**.
- Kauf auf Ziel: Fuhrpark ↑ (Aktiva), Verbindlichkeiten ↑ (Passiva) → **Aktiv-Passiv-Mehrung**.
- Zahlung an Frachtführer: Bank ↓ (Aktiva), Verbindlichkeiten ↓ (Passiva) → **Aktiv-Passiv-Minderung**.`
    },
    {
      id: 'lf03-buchen-bestandskonten-a4', type: 'booking', difficulty: 1, points: 2,
      q: 'Die Dillinger Hütten-Logistik GmbH, ein Versender, überweist zum Ausgleich einer offenen Rechnung 4.760 € auf das Bankkonto der Spedition. Bilde den Buchungssatz.',
      accounts: ['Bank', 'Kasse', 'Forderungen a. LL', 'Verbindlichkeiten a. LL', 'Fuhrpark', 'Eigenkapital', 'Darlehensschulden'],
      entries: [
        { side: 'S', account: 'Bank', amount: 4760 },
        { side: 'H', account: 'Forderungen a. LL', amount: 4760 }
      ],
      hints: ['Das Bankguthaben steigt. Die offene Forderung an den Versender ...?', 'Beide Konten sind Aktivkonten.'],
      solution: `**Bank 4.760 € an Forderungen a. LL 4.760 €**

- **Bank**: Aktivkonto, Zugang → **Soll**.
- **Forderungen a. LL**: Aktivkonto, die Forderung erlischt, also Abgang → **Haben**.

Art: **Aktivtausch**, die Bilanzsumme bleibt gleich. (Der Betrag enthält bereits die Umsatzsteuer der ursprünglichen Rechnung; bei der Zahlung wird keine Steuer gesondert gebucht.)`
    },
    {
      id: 'lf03-buchen-bestandskonten-a5', type: 'booking', difficulty: 1, points: 2,
      q: 'Die Spedition nimmt bei der Sparkasse ein Darlehen über 60.000 € auf. Der Betrag wird dem Bankkonto gutgeschrieben. Bilde den Buchungssatz.',
      accounts: ['Bank', 'Kasse', 'Darlehensschulden', 'Eigenkapital', 'Verbindlichkeiten a. LL', 'Forderungen a. LL', 'Fuhrpark'],
      entries: [
        { side: 'S', account: 'Bank', amount: 60000 },
        { side: 'H', account: 'Darlehensschulden', amount: 60000 }
      ],
      hints: ['Das Bankguthaben steigt – auf welcher Seite steht ein Zugang beim Aktivkonto?', 'Die Schulden steigen – Zugang auf einem Passivkonto.'],
      solution: `**Bank 60.000 € an Darlehensschulden 60.000 €**

- **Bank**: Aktivkonto, Zugang → **Soll**.
- **Darlehensschulden**: Passivkonto, Zugang → **Haben**.

Art: **Aktiv-Passiv-Mehrung** (Bilanzverlängerung), die Bilanzsumme steigt um 60.000 €.`
    },
    {
      id: 'lf03-buchen-bestandskonten-a6', type: 'booking', difficulty: 2, points: 2,
      q: 'Die Spedition begleicht die Rechnung des Frachtführers Hunsrück-Trans über 3.570 € per Banküberweisung. Bilde den Buchungssatz.',
      accounts: ['Bank', 'Kasse', 'Verbindlichkeiten a. LL', 'Forderungen a. LL', 'Darlehensschulden', 'Eigenkapital', 'Fuhrpark'],
      entries: [
        { side: 'S', account: 'Verbindlichkeiten a. LL', amount: 3570 },
        { side: 'H', account: 'Bank', amount: 3570 }
      ],
      hints: ['Die Schuld gegenüber dem Frachtführer erlischt.', 'Abgänge auf Passivkonten stehen im Soll.'],
      solution: `**Verbindlichkeiten a. LL 3.570 € an Bank 3.570 €**

- **Verbindlichkeiten a. LL**: Passivkonto, die Schuld nimmt ab (Abgang) → **Soll**.
- **Bank**: Aktivkonto, das Guthaben nimmt ab (Abgang) → **Haben**.

Art: **Aktiv-Passiv-Minderung** (Bilanzverkürzung), die Bilanzsumme sinkt um 3.570 €.`
    },
    {
      id: 'lf03-buchen-bestandskonten-a7', type: 'booking', difficulty: 2, points: 3,
      q: 'Die Spedition kauft einen gebrauchten Gabelstapler für 24.000 € (Umsatzsteuer bleibt unberücksichtigt). 4.000 € werden sofort per Bank überwiesen, der Rest wird auf Ziel gekauft. Bilde den zusammengesetzten Buchungssatz.',
      accounts: ['Betriebs- und Geschäftsausstattung', 'Fuhrpark', 'Bank', 'Kasse', 'Verbindlichkeiten a. LL', 'Forderungen a. LL', 'Darlehensschulden', 'Eigenkapital'],
      entries: [
        { side: 'S', account: 'Betriebs- und Geschäftsausstattung', amount: 24000 },
        { side: 'H', account: 'Bank', amount: 4000 },
        { side: 'H', account: 'Verbindlichkeiten a. LL', amount: 20000 }
      ],
      hints: ['Ein Gabelstapler ist kein Straßenfahrzeug, sondern gehört zur Betriebs- und Geschäftsausstattung.', 'Rest auf Ziel: 24.000 € − 4.000 € = ?'],
      solution: `**Betriebs- und Geschäftsausstattung 24.000 € an Bank 4.000 € und Verbindlichkeiten a. LL 20.000 €**

- **BGA**: Aktivkonto, Zugang → **Soll** 24.000 €.
- **Bank**: Aktivkonto, Abgang → **Haben** 4.000 €.
- **Verbindlichkeiten a. LL**: Passivkonto, Zugang → **Haben** 24.000 € − 4.000 € = 20.000 €.

Probe: Soll 24.000 € = Haben 4.000 € + 20.000 € = 24.000 €.`
    },
    {
      id: 'lf03-buchen-bestandskonten-a8', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Arbeitsschritte der Buchführung eines Geschäftsjahres in die richtige Reihenfolge.',
      items: [
        'Eröffnungsbilanz aufstellen',
        'Bestandskonten über das Eröffnungsbilanzkonto eröffnen',
        'Laufende Geschäftsfälle anhand von Belegen buchen',
        'Schlussbestände der Konten ermitteln und mit der Inventur abstimmen',
        'Konten über das Schlussbilanzkonto abschließen und Schlussbilanz aufstellen'
      ],
      hints: ['Am Anfang steht die Bilanz, am Ende auch.', 'Bevor man abschließt, müssen die Bestände mit der Inventur übereinstimmen.'],
      solution: 'Eröffnungsbilanz → Eröffnung der Konten (EBK) → Buchen der Geschäftsfälle → Salden ermitteln und mit der Inventur abgleichen → Abschluss über das SBK und Schlussbilanz. Die Schlussbilanz ist zugleich Grundlage der Eröffnungsbilanz des nächsten Jahres.'
    },
    {
      id: 'lf03-buchen-bestandskonten-a9', type: 'calc', difficulty: 2, points: 3,
      q: `Das Konto **Bank** der Spedition weist im Februar 2026 folgende Werte auf (Beispielzahlen):

- Anfangsbestand: 35.000 €
- Zugänge: Zahlungseingang Versender 12.000 €, Zahlungseingang Versender 8.500 €
- Abgänge: Darlehenstilgung 10.000 €, Kauf Wechselbrücke 6.000 €, Zahlung an Frachtführer 4.200 €

Ermittle die Summe der Sollseite (ohne Saldo), die Summe der Abgänge und den Schlussbestand.`,
      formula: 'Schlussbestand = (Anfangsbestand + Zugänge) − Abgänge',
      fields: [
        { id: 'soll', label: 'Summe Sollseite (AB + Zugänge)', unit: '€', answer: 55500, tol: 0.01 },
        { id: 'ab', label: 'Summe Abgänge (Haben ohne Saldo)', unit: '€', answer: 20200, tol: 0.01 },
        { id: 'sb', label: 'Schlussbestand', unit: '€', answer: 35300, tol: 0.01 }
      ],
      hints: ['Bank ist ein Aktivkonto: AB und Zugänge im Soll.', 'Der Schlussbestand ist der Unterschied zwischen beiden Seiten.'],
      solution: `**Formel:** Schlussbestand = (AB + Zugänge) − Abgänge

**Sollseite:** 35.000 € + 12.000 € + 8.500 € = **55.500 €**

**Abgänge (Haben):** 10.000 € + 6.000 € + 4.200 € = **20.200 €**

**Schlussbestand:** 55.500 € − 20.200 € = **35.300 €**

Der Schlussbestand wird auf der kleineren Seite (Haben) eingesetzt, dann sind beide Seiten 55.500 € groß. Abschlussbuchung: *Schlussbilanzkonto an Bank 35.300 €*.`
    },
    {
      id: 'lf03-buchen-bestandskonten-a10', type: 'booking', difficulty: 2, points: 2,
      q: 'Zum Jahresende hat das Konto **Darlehensschulden** einen Schlussbestand von 210.000 €. Bilde die Abschlussbuchung.',
      accounts: ['Darlehensschulden', 'Schlussbilanzkonto', 'Eröffnungsbilanzkonto', 'Bank', 'Eigenkapital', 'Verbindlichkeiten a. LL'],
      entries: [
        { side: 'S', account: 'Darlehensschulden', amount: 210000 },
        { side: 'H', account: 'Schlussbilanzkonto', amount: 210000 }
      ],
      hints: ['Darlehensschulden ist ein Passivkonto – auf welcher Seite steht der Schlussbestand?', 'Im Schlussbilanzkonto stehen die Passivposten im Haben.'],
      solution: `**Darlehensschulden 210.000 € an Schlussbilanzkonto 210.000 €**

- Darlehensschulden ist ein **Passivkonto**: AB und Zugänge stehen im Haben, deshalb ist die Sollseite die kleinere. Der Schlussbestand wird im **Soll** eingesetzt.
- Gegenbuchung im **Haben** des Schlussbilanzkontos – dort stehen wie in der Bilanz die Passivposten rechts.`
    },
    {
      id: 'lf03-buchen-bestandskonten-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Eine Verbindlichkeit a. LL über 20.000 € gegenüber einem Lkw-Händler wird auf Vereinbarung in ein langfristiges Darlehen umgewandelt. Welcher Buchungssatz ist richtig?',
      options: [
        'Darlehensschulden an Verbindlichkeiten a. LL 20.000 €',
        'Verbindlichkeiten a. LL an Darlehensschulden 20.000 €',
        'Bank an Darlehensschulden 20.000 €',
        'Verbindlichkeiten a. LL an Bank 20.000 €'
      ],
      correct: [1],
      hints: ['Es fließt kein Geld – Bank ist nicht betroffen.', 'Beide Konten sind Passivkonten: Was nimmt ab, was nimmt zu?'],
      solution: '**Verbindlichkeiten a. LL an Darlehensschulden 20.000 €**. Die Verbindlichkeit nimmt ab (Abgang auf einem Passivkonto → Soll), die Darlehensschulden nehmen zu (Zugang auf einem Passivkonto → Haben). Es handelt sich um einen **Passivtausch**; die Bilanzsumme bleibt gleich.'
    },
    {
      id: 'lf03-buchen-bestandskonten-a12', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre einer neuen Auszubildenden, warum der Anfangsbestand des Kontos Fuhrpark im Soll, der Anfangsbestand des Kontos Eigenkapital aber im Haben steht. Nenne auch, auf welcher Seite jeweils die Zugänge gebucht werden.',
      model: 'Die Bestandskonten werden aus der Bilanz abgeleitet. Fuhrpark ist ein Vermögensposten und steht in der Bilanz auf der linken Seite (Aktiva). Deshalb steht sein Anfangsbestand auch im Konto links, also im Soll; Zugänge werden ebenfalls im Soll gebucht. Eigenkapital steht als Kapitalposten auf der rechten Bilanzseite (Passiva). Daher steht der Anfangsbestand im Haben, und Zugänge werden im Haben gebucht.',
      criteria: [
        { text: 'erklärt die Ableitung aus der Bilanz (Aktiva links, Passiva rechts)', keywords: ['Bilanz', 'links|Aktiv', 'rechts|Passiv'], points: 1 },
        { text: 'Aktivkonto: AB und Zugänge im Soll', keywords: ['Fuhrpark|Aktivkonto', 'Soll'], points: 1 },
        { text: 'Passivkonto: AB und Zugänge im Haben', keywords: ['Eigenkapital|Passivkonto', 'Haben'], points: 1 }
      ],
      hints: ['Wo steht der Fuhrpark in der Bilanz, wo das Eigenkapital?', 'Die Konten übernehmen die Seite aus der Bilanz.'],
      solution: 'Bestandskonten übernehmen die Seite ihres Bilanzpostens: **Fuhrpark** ist Vermögen (Aktivseite, links) → AB und Zugänge im **Soll**. **Eigenkapital** ist Kapital (Passivseite, rechts) → AB und Zugänge im **Haben**. Abgänge stehen jeweils auf der Gegenseite.'
    },
    {
      id: 'lf03-buchen-bestandskonten-a13', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Ein Monat bei der Bliesgau Logistik e.K.',
      intro: `Die Bliesgau Logistik e.K. hat folgende Eröffnungsbilanz zum 01.03.2026 (Beispielzahlen, ohne Umsatzsteuer):

| Aktiva | € | Passiva | € |
|---|---:|---|---:|
| Fuhrpark | 180.000 | Eigenkapital | 94.000 |
| Forderungen a. LL | 26.000 | Darlehensschulden | 110.000 |
| Bank | 14.000 | Verbindlichkeiten a. LL | 20.000 |
| Kasse | 4.000 | | |
| **Summe** | **224.000** | **Summe** | **224.000** |

Geschäftsfälle im März:
1. Kauf einer gebrauchten Wechselbrücke für 7.500 €: 2.500 € bar, 5.000 € per Banküberweisung.
2. Tilgung des Darlehens per Banküberweisung: 8.000 €.`,
      hints: ['Bearbeite die Geschäftsfälle nacheinander.', 'Prüfe nach jedem Fall, ob sich die Bilanzsumme ändert.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf03-buchen-bestandskonten-a13-1', type: 'booking', difficulty: 2, points: 3,
          q: 'Bilde den Buchungssatz zu Geschäftsfall 1.',
          accounts: ['Fuhrpark', 'Bank', 'Kasse', 'Forderungen a. LL', 'Verbindlichkeiten a. LL', 'Darlehensschulden', 'Eigenkapital'],
          entries: [
            { side: 'S', account: 'Fuhrpark', amount: 7500 },
            { side: 'H', account: 'Kasse', amount: 2500 },
            { side: 'H', account: 'Bank', amount: 5000 }
          ],
          hints: ['Drei Konten sind betroffen.', 'Kasse und Bank nehmen ab.'],
          solution: `**Fuhrpark 7.500 € an Kasse 2.500 € und Bank 5.000 €**

- Fuhrpark: Aktivkonto, Zugang → Soll 7.500 €.
- Kasse: Aktivkonto, Abgang → Haben 2.500 €.
- Bank: Aktivkonto, Abgang → Haben 5.000 €.

Summe Soll 7.500 € = Summe Haben 7.500 €. Art: **Aktivtausch**.`
        },
        {
          id: 'lf03-buchen-bestandskonten-a13-2', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen treffen auf Geschäftsfall 2 zu? (Mehrfachauswahl)',
          options: [
            'Buchungssatz: Darlehensschulden an Bank 8.000 €',
            'Es handelt sich um eine Aktiv-Passiv-Minderung.',
            'Die Bilanzsumme bleibt gleich.',
            'Buchungssatz: Bank an Darlehensschulden 8.000 €'
          ],
          correct: [0, 1],
          hints: ['Beide Posten werden kleiner.', 'Abgang auf dem Passivkonto steht im Soll.'],
          solution: 'Richtig: **Darlehensschulden an Bank 8.000 €** (Passivkonto Abgang → Soll, Aktivkonto Abgang → Haben). Da Vermögen und Schulden gleichzeitig sinken, liegt eine **Aktiv-Passiv-Minderung** vor; die Bilanzsumme sinkt um 8.000 €.'
        },
        {
          id: 'lf03-buchen-bestandskonten-a13-3', type: 'calc', difficulty: 3, points: 3,
          q: 'Ermittle nach beiden Geschäftsfällen den Bestand auf dem Bankkonto und die neue Bilanzsumme.',
          formula: 'Bilanzsumme neu = Bilanzsumme alt ± Veränderungen durch Mehrung/Minderung',
          fields: [
            { id: 'bank', label: 'Bestand Bank', unit: '€', answer: 1000, tol: 0.01 },
            { id: 'bs', label: 'Neue Bilanzsumme', unit: '€', answer: 216000, tol: 0.01 }
          ],
          hints: ['Bank sinkt in beiden Fällen.', 'Der Aktivtausch ändert die Bilanzsumme nicht.'],
          solution: `**Bank:** 14.000 € − 5.000 € (Fall 1) − 8.000 € (Fall 2) = **1.000 €**

**Bilanzsumme:** Fall 1 ist ein Aktivtausch (keine Änderung). Fall 2 ist eine Aktiv-Passiv-Minderung: 224.000 € − 8.000 € = **216.000 €**

Kontrolle Aktiva: Fuhrpark 187.500 € + Forderungen a. LL 26.000 € + Bank 1.000 € + Kasse 1.500 € = 216.000 €
Kontrolle Passiva: Eigenkapital 94.000 € + Darlehensschulden 102.000 € + Verbindlichkeiten a. LL 20.000 € = 216.000 €`
        }
      ]
    }
  ],
  quiz: ['lf03-buchen-bestandskonten-a1', 'lf03-buchen-bestandskonten-a4', 'lf03-buchen-bestandskonten-a7', 'lf03-buchen-bestandskonten-a9', 'lf03-buchen-bestandskonten-a13'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 3, Inhalte: Bestandskonten, Buchungssatz, Bilanzveränderungen' },
    { title: 'Handelsgesetzbuch § 238 Buchführungspflicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__238.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 239 Führung der Handelsbücher', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__239.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 242 Pflicht zur Aufstellung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__242.html', asOf: '2026' }
  ],
  links: ['lf03-inventur-bilanz', 'lf03-umsatzsteuer']
};
