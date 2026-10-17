export default {
  id: 'lf09-lagerkosten',
  area: 'LF09',
  topic: 'lf09-lagerkosten',
  title: 'Lagerkosten, Angebot und Abrechnung',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Regelsteuersatz der Umsatzsteuer 19 % (§ 12 Abs. 1 UStG) und Pflichtangaben einer Rechnung (§ 14 Abs. 4 UStG), Stand der Prüfung Oktober 2026. Alle Preise, Kosten und Mengen sind Beispielwerte, keine Marktpreise.'
  },
  goals: [
    'Ich kann die Kostenarten eines Lagers nennen und in fixe und variable Kosten einteilen.',
    'Ich kann die Kosten je Palettenstellplatz und Monat aus den Jahreskosten berechnen und den Einfluss der Auslastung erklären.',
    'Ich kann ein Ein- und Auslagerungsentgelt und ein Kommissionierentgelt je Position aus Stundenkosten und Leistung kalkulieren.',
    'Ich kann eine Monatsrechnung über Lagerleistungen mit Umsatzsteuer erstellen und buchen.',
    'Ich kann ein Lagerangebot mit Gewinnzuschlag kalkulieren.',
    'Ich kann Eigen- und Fremdlager mit Kostenvergleich und kritischer Menge beurteilen und qualitative Gründe nennen.'
  ],
  simple: `# Worum geht es?

Eine Spedition, die Lagerleistungen verkauft, muss wissen: **Was kostet mich ein Stellplatz? Was kostet mich eine Ein- oder Auslagerung? Was kostet eine Kommissionierposition?** Nur dann kann sie einen Preis anbieten, der die Kosten deckt und Gewinn bringt.

# Die drei Bausteine eines Lagerpreises

1. **Lagergeld** – für das reine Lagern, meist **je Palettenstellplatz und Monat** (oder je Palette und Tag, je m², je Tonne).
2. **Handling** – für jede Bewegung: **Einlagerungs- und Auslagerungsentgelt je Palette**.
3. **Kommissionierentgelt** – für das Zusammenstellen von Aufträgen, z. B. **je Position** (Artikelzeile) oder je Karton.

Dazu kommen oft Zusatzleistungen (Etikettieren, Folieren, Retourenbearbeitung).

# Vom Kostenpreis zum Angebotspreis

**Selbstkosten + Gewinnzuschlag = Angebotspreis (netto)**

Auf der Rechnung kommt dann noch die **Umsatzsteuer** dazu: Lagerleistungen an Unternehmen in Deutschland werden mit **19 %** besteuert (§ 12 Abs. 1 UStG).

# Selbst lagern oder lagern lassen?

Ein **Eigenlager** hat hohe **fixe Kosten** (Halle, Regale, Personal), die auch bei leerem Lager anfallen. Ein **Fremdlager** kostet nur, was man nutzt. Bis zu einer bestimmten Menge, der **kritischen Menge**, ist das Fremdlager günstiger, darüber das Eigenlager.

> Die Lagerfunktionen, den Lagervertrag und ein erstes einfaches Lagergeld-Beispiel findest du in der Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“.`,
  deep: `# 1. Lagerkostenarten

| Kostenart | Beispiele | meist |
|---|---|---|
| **Raumkosten** | Miete oder Abschreibung der Halle, Zinsen auf das gebundene Kapital, Grundsteuer, Gebäudeversicherung, Instandhaltung, Heizung, Beleuchtung | fix |
| **Kosten der Lagertechnik** | Abschreibung von Regalen, Staplern, Fördertechnik; Wartung; Ladestrom | überwiegend fix, Energie teils variabel |
| **Personalkosten** | Löhne und Lohnnebenkosten der Lagermitarbeiter, Staplerfahrer, Kommissionierer | kurzfristig fix, bei Aushilfen/Zeitarbeit variabel |
| **Verwaltungs- und IT-Kosten** | Lagerverwaltungssystem, Scanner, Büro, Abrechnung | fix |
| **Versicherung und Risiko** | Haftungsversicherung des Lagerhalters, Schäden, Inventurdifferenzen | fix bzw. schwankend |
| **Material** | Stretchfolie, Etiketten, Kartonage | variabel |

**Fixe Kosten** fallen an, egal wie viele Paletten gelagert oder bewegt werden. **Variable Kosten** steigen mit der Menge (z. B. Folie je Palette, Aushilfsstunden je Auftrag).

> Aus Sicht des **Einlagerers** (Kunde) kommen weitere Kosten der Lagerhaltung hinzu: Zinsen für das in der Ware gebundene Kapital, Schwund, Veralterung. Sie werden oft mit dem **Lagerhaltungskostensatz** = Lagerhaltungskosten ÷ Ø Lagerbestand in € × 100 ausgedrückt. Das ist ein Grund, warum Kunden kurze Lagerdauern wünschen (siehe Lagerkennzahlen in „Lagerorganisation, Lagerpapiere und Lagerkennzahlen“).

# 2. Kosten je Palettenstellplatz und Monat

Die Kosten des Lagerbereichs (Raum, Regale, anteilige Verwaltung) werden auf die Stellplätze verteilt:

**Kosten je Stellplatz und Monat = Jahreskosten Lagerbereich ÷ (Anzahl Stellplätze × 12)**

Weil die Kosten weitgehend **fix** sind, ist die **Auslastung** entscheidend. Kalkuliert der Lagerhalter mit einer realistischen Auslastung, verteilt er die Kosten auf die **belegten** Stellplätze:

**Kosten je belegtem Stellplatz und Monat = Jahreskosten ÷ (Stellplätze × Auslastungsgrad × 12)**

Leer stehende Plätze verdienen kein Geld, kosten aber.

# 3. Handling- und Kommissionierentgelte

Diese Leistungen werden vor allem durch **Personal- und Gerätezeit** verursacht:

**Kosten je Ein- oder Auslagerung = Kosten je Stunde (Mitarbeiter + Stapler) ÷ Bewegungen je Stunde**

**Kosten je Kommissionierposition = Kosten je Stunde Kommissionierer ÷ Positionen je Stunde**

Steigt die Leistung (z. B. durch Pick by Voice oder bessere Lagerplatzvergabe), sinken die Kosten je Bewegung.

# 4. Abrechnungsarten für das Lagergeld

| Abrechnungsart | Grundlage | Bemerkung |
|---|---|---|
| je **Stellplatz und Monat** | Stichtagsbestand, Höchstbestand oder fest gemietete Plätze | einfach; feste Platzmiete gibt dem Lagerhalter Planungssicherheit |
| je **Palette und Tag** (Palettentage) | tagesgenaue Lagerdauer jeder Palette laut LVS | gerecht bei stark schwankenden Beständen |
| je **m² und Monat** | belegte oder gemietete Fläche | bei Sperrgut, Bodenlagerung |
| je **Tonne** oder **m³** | Gewicht oder Volumen | bei Schüttgut, Massengut |

**Palettentage** = Summe aus (Anzahl Paletten × Lagertage) aller Paletten im Abrechnungszeitraum.

# 5. Monatsrechnung mit Umsatzsteuer

| Position | Rechnung |
|---|---|
| Lagergeld | Menge × Preis |
| Einlagerung | Paletten × Preis |
| Auslagerung | Paletten × Preis |
| Kommissionierung | Positionen × Preis |
| **Summe netto** | |
| + Umsatzsteuer 19 % | Summe netto × 0,19 |
| **Rechnungsbetrag brutto** | |

Die Rechnung muss die Pflichtangaben nach **§ 14 Abs. 4 UStG** enthalten, u. a. Name und Anschrift beider Parteien, Steuernummer oder USt-IdNr. des Lagerhalters, Ausstellungsdatum, fortlaufende Rechnungsnummer, Art und Umfang der Leistung, Zeitpunkt (Leistungszeitraum), Entgelt, Steuersatz und Steuerbetrag.

**Buchung beim Lagerhalter:** Forderungen a. LL (brutto) an Erlöse aus Lagerleistungen (netto) und Umsatzsteuer.

# 6. Angebotskalkulation mit Gewinnzuschlag

1. Leistungsmengen des Kunden schätzen (Stellplätze, Bewegungen, Positionen je Monat).
2. Mengen mit den Kostensätzen bewerten → **Selbstkosten**.
3. **Gewinnzuschlag** in Prozent der Selbstkosten aufschlagen → **Angebotspreis netto**.
4. Preise je Einheit für das Angebot ableiten und mit Marktpreisen vergleichen.

**Angebotspreis = Selbstkosten × (1 + Gewinnzuschlag in % ÷ 100)**

# 7. Eigenlager oder Fremdlager?

**Kosten Eigenlager = fixe Kosten + variable Kosten je Palette × Menge**

**Kosten Fremdlager = Preis je Palette × Menge**

**Kritische Menge = fixe Kosten Eigenlager ÷ (Preis Fremdlager je Palette − variable Kosten Eigenlager je Palette)**

- Menge **unter** der kritischen Menge → **Fremdlager** günstiger.
- Menge **über** der kritischen Menge → **Eigenlager** günstiger.

**Qualitative Gesichtspunkte**

| für ein Fremdlager | für ein Eigenlager |
|---|---|
| keine Investition, Kapital bleibt frei | volle Kontrolle über Ware und Abläufe |
| nur bezahlen, was man nutzt; flexibel bei Schwankungen | Lager-Know-how bleibt im Unternehmen |
| Spezialwissen des Logistikdienstleisters (z. B. Gefahrgut, Kühlung) | keine Abhängigkeit von einem Dienstleister |
| Kombination mit Transport und Verteilung aus einer Hand | Nähe zur Produktion, kurze Wege |
| Risiko der Auslastung trägt der Dienstleister | bei hoher, gleichmäßiger Menge günstiger |`,
  terms: [
    { term: 'Lagergeld', def: 'Entgelt für das Lagern selbst, z. B. je Palettenstellplatz und Monat, je Palette und Tag, je m² oder je Tonne.' },
    { term: 'Handlingentgelt', def: 'Entgelt für Ein- und Auslagerung, meist je Palette und Bewegung.' },
    { term: 'Kommissionierentgelt', def: 'Entgelt für das Zusammenstellen von Aufträgen, z. B. je Position (Auftragszeile) oder je Karton.' },
    { term: 'Palettentag', def: 'Abrechnungseinheit: eine Palette, die einen Tag gelagert wird; Summe aus Paletten × Lagertage.' },
    { term: 'Fixe Kosten', def: 'Kosten, die unabhängig von der Menge anfallen, z. B. Hallenmiete, Abschreibung der Regale.' },
    { term: 'Variable Kosten', def: 'Kosten, die mit der Menge steigen, z. B. Folie je Palette, Aushilfsstunden.' },
    { term: 'Auslastungsgrad', def: 'Belegte Stellplätze ÷ vorhandene Stellplätze × 100; bestimmt, auf wie viele Plätze die fixen Kosten verteilt werden.' },
    { term: 'Selbstkosten', def: 'Alle Kosten, die für eine Leistung anfallen; Grundlage der Angebotskalkulation.' },
    { term: 'Gewinnzuschlag', def: 'Prozentualer Aufschlag auf die Selbstkosten, der den Gewinn des Lagerhalters ergibt.' },
    { term: 'Kritische Menge', def: 'Menge, bei der Eigenlager und Fremdlager gleich viel kosten; darüber ist das Eigenlager günstiger.' },
    { term: 'Lagerhaltungskostensatz', def: 'Lagerhaltungskosten des Einlagerers ÷ durchschnittlicher Lagerbestand in € × 100.' }
  ],
  example: `# Kalkulation bei der Saarlogistik GmbH, Neunkirchen (Beispielwerte, Bezugsjahr 2026)

**Schritt 1 – Stellplatzkosten.** Für den Regalbereich mit 2.600 Stellplätzen fallen im Jahr 312.000 € an (Abschreibung Halle und Regale, Energie, Versicherung, Instandhaltung, anteilige Verwaltung).

- je vorhandenem Stellplatz und Monat: 312.000 € ÷ (2.600 × 12) = **10,00 €**
- bei 85 % Auslastung je belegtem Stellplatz: 312.000 € ÷ (2.600 × 0,85 × 12) = **11,76 €**

**Schritt 2 – Handling.** Ein Staplerfahrer kostet einschließlich Stapler 42,00 € je Stunde und schafft 20 Ein- oder Auslagerungen je Stunde: 42,00 € ÷ 20 = **2,10 € je Bewegung**.

**Schritt 3 – Kommissionierung.** Ein Kommissionierer kostet 36,00 € je Stunde und schafft 90 Positionen: 36,00 € ÷ 90 = **0,40 € je Position**.

**Schritt 4 – Angebot.** Mit einem Gewinnzuschlag von 20 % bietet die Saarlogistik der Bliesgau Getränke GmbH an: Lagergeld 11,50 € je Stellplatz und Monat (gerundet, marktüblich), Ein- und Auslagerung je 2,60 € je Palette (gerundet), Kommissionierung 0,48 € je Position.

**Schritt 5 – Monatsrechnung Juni:**

| Position | Rechnung | € |
|---|---|---:|
| Lagergeld | 380 Stellplätze × 11,50 € | 4.370,00 |
| Einlagerung | 210 Paletten × 2,60 € | 546,00 |
| Auslagerung | 245 Paletten × 2,60 € | 637,00 |
| Kommissionierung | 3.400 Positionen × 0,48 € | 1.632,00 |
| **Summe netto** | | **7.185,00** |
| Umsatzsteuer 19 % | 7.185,00 € × 0,19 | 1.365,15 |
| **Rechnungsbetrag** | | **8.550,15** |

**Buchung:** Forderungen a. LL 8.550,15 € an Erlöse aus Lagerleistungen 7.185,00 € und Umsatzsteuer 1.365,15 €.`,
  rules: [
    'Lagerpreis = Lagergeld + Handling + Kommissionierung + Zusatzleistungen.',
    'Kosten je Stellplatz und Monat = Jahreskosten ÷ (Stellplätze × 12); mit Auslastung rechnen, weil leere Plätze nichts einbringen.',
    'Kosten je Bewegung oder Position = Kosten je Stunde ÷ Leistung je Stunde.',
    'Angebotspreis netto = Selbstkosten × (1 + Gewinnzuschlag); Umsatzsteuer kommt erst auf die Rechnung.',
    'Lagerleistungen an inländische Unternehmen: 19 % Umsatzsteuer (§ 12 Abs. 1 UStG).',
    'Kritische Menge = Fixkosten Eigenlager ÷ (Fremdlagerpreis − variable Kosten Eigenlager); darüber lohnt sich das Eigenlager.',
    'Die Entscheidung Eigen- oder Fremdlager nie nur nach Kosten treffen: Flexibilität, Kapitalbindung, Know-how und Kontrolle berücksichtigen.'
  ],
  summary: `- **Lagerkostenarten**: Raum, Lagertechnik, Personal, Verwaltung/IT, Versicherung, Material – überwiegend **fix**.
- **Kostensätze**: je Stellplatz und Monat (Auslastung beachten), je Bewegung, je Kommissionierposition.
- **Abrechnung**: Stellplatz/Monat, Palettentage, m², Tonne; plus Handling und Kommissionierung; **+ 19 % USt**.
- **Buchung**: Forderungen a. LL an Erlöse aus Lagerleistungen und Umsatzsteuer.
- **Angebot**: Selbstkosten + Gewinnzuschlag = Angebotspreis netto.
- **Eigen- vs. Fremdlager**: Kostenvergleich, **kritische Menge**, qualitative Kriterien.`,
  mistakes: [
    { wrong: 'Die Kosten je Stellplatz rechne ich mit allen vorhandenen Plätzen, auch wenn nur 85 % belegt sind.', right: 'Wer mit 100 % Auslastung kalkuliert, deckt bei geringerer Belegung seine fixen Kosten nicht. Realistische Auslastung einrechnen.' },
    { wrong: 'Der Gewinnzuschlag wird auf den Bruttobetrag gerechnet.', right: 'Der Gewinnzuschlag kommt auf die Selbstkosten (netto); die Umsatzsteuer wird erst auf der Rechnung auf den Nettobetrag aufgeschlagen.' },
    { wrong: 'Die Umsatzsteuer ist ein Erlös des Lagerhalters.', right: 'Die Umsatzsteuer ist eine Verbindlichkeit gegenüber dem Finanzamt und wird auf dem Konto Umsatzsteuer im Haben gebucht.' },
    { wrong: 'Unterhalb der kritischen Menge ist das Eigenlager günstiger.', right: 'Unterhalb der kritischen Menge ist das Fremdlager günstiger, weil die hohen Fixkosten des Eigenlagers auf zu wenige Paletten verteilt werden.' },
    { wrong: 'Ein Lager, das 90 % der Zeit voll ist, braucht keine Handlingentgelte, das Lagergeld reicht.', right: 'Ein- und Auslagerungen verursachen Personal- und Staplerkosten je Bewegung; bei hoher Umschlagshäufigkeit sind sie ein großer Kostenblock.' }
  ],
  flashcards: [
    { q: 'Aus welchen Bausteinen besteht ein typischer Lagerpreis?', a: 'Lagergeld, Ein- und Auslagerungsentgelt (Handling), Kommissionierentgelt, Zusatzleistungen.' },
    { q: 'Formel Kosten je Stellplatz und Monat?', a: 'Jahreskosten Lagerbereich ÷ (Anzahl Stellplätze × 12).' },
    { q: 'Warum muss die Auslastung in die Stellplatzkalkulation?', a: 'Die Kosten sind überwiegend fix; nur belegte Plätze bringen Erlöse, also müssen sie die Kosten tragen.' },
    { q: 'Formel Kosten je Ein- oder Auslagerung?', a: 'Kosten je Stunde (Mitarbeiter + Gerät) ÷ Bewegungen je Stunde.' },
    { q: 'Was ist ein Palettentag?', a: 'Eine Palette, die einen Tag lagert; Lagergeld = Summe Palettentage × Preis je Palettentag.' },
    { q: 'Welcher Umsatzsteuersatz gilt für Lagerleistungen an ein inländisches Unternehmen?', a: '19 % (§ 12 Abs. 1 UStG, Stand 2026).' },
    { q: 'Buchungssatz für eine Lagerrechnung beim Lagerhalter?', a: 'Forderungen a. LL an Erlöse aus Lagerleistungen und Umsatzsteuer.' },
    { q: 'Formel Angebotspreis netto?', a: 'Selbstkosten × (1 + Gewinnzuschlag ÷ 100).' },
    { q: 'Formel kritische Menge Eigen- gegen Fremdlager?', a: 'Fixe Kosten Eigenlager ÷ (Fremdlagerpreis je Einheit − variable Kosten Eigenlager je Einheit).' },
    { q: 'Nenne zwei qualitative Gründe für ein Fremdlager.', a: 'Z. B. keine Investition/Kapitalbindung, Flexibilität bei schwankenden Mengen, Spezialwissen des Dienstleisters, Transport aus einer Hand.' }
  ],
  tasks: [
    {
      id: 'lf09-lagerkosten-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jeder Kostenposition der Saarlogistik GmbH die passende Lagerkostenart zu.',
      pairs: [
        ['Abschreibung der Lagerhalle', 'Raumkosten'],
        ['Wartung der Schubmaststapler', 'Kosten der Lagertechnik'],
        ['Lohn der Kommissionierer', 'Personalkosten'],
        ['Lizenzgebühr für das Lagerverwaltungssystem', 'Verwaltungs- und IT-Kosten'],
        ['Stretchfolie zum Wickeln der Paletten', 'Materialkosten']
      ],
      hints: ['Frage dich, wodurch die Kosten verursacht werden: Gebäude, Gerät, Mensch, Software oder Verbrauchsmaterial?', 'Die Folie wird je Palette verbraucht.'],
      solution: 'Halle → **Raumkosten**; Stapler-Wartung → **Lagertechnik**; Kommissionierer → **Personal**; LVS-Lizenz → **Verwaltung/IT**; Folie → **Material** (variabel je Palette).'
    },
    {
      id: 'lf09-lagerkosten-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Kosten eines Lagers sind **fixe Kosten**, die auch anfallen, wenn im Monat kaum Paletten gelagert werden? (Mehrfachauswahl)',
      options: ['Hallenmiete', 'Stretchfolie je ausgelagerter Palette', 'Abschreibung der Palettenregale', 'Gebäudeversicherung', 'Lohn für Aushilfen, die nur bei Bedarf gebucht werden'],
      correct: [0, 2, 3],
      hints: ['Fixe Kosten hängen nicht von der Menge ab.', 'Was nur bei Bedarf eingekauft oder gebucht wird, ist variabel.'],
      solution: 'Fix: **Hallenmiete, Abschreibung der Regale, Gebäudeversicherung** – sie fallen unabhängig von der Menge an. Variabel: Stretchfolie (je Palette) und bedarfsabhängig gebuchte Aushilfen.'
    },
    {
      id: 'lf09-lagerkosten-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Für den Regalbereich der Saarlogistik GmbH mit **2.600 Palettenstellplätzen** fallen im Jahr an (Beispielwerte):

| Kostenposition | € je Jahr |
|---|---:|
| Abschreibung Halle | 180.000 |
| Abschreibung Regale | 36.000 |
| Energie und Heizung | 42.000 |
| Versicherung und Grundsteuer | 18.000 |
| Instandhaltung | 12.000 |
| anteilige Verwaltung | 24.000 |

Berechne die Jahreskosten, die Kosten je vorhandenem Stellplatz und Monat sowie die Kosten je **belegtem** Stellplatz und Monat bei einer Auslastung von **85 %** (auf Cent gerundet).`,
      formula: 'Kosten je Stellplatz und Monat = Jahreskosten ÷ (Stellplätze × Auslastung × 12)',
      fields: [
        { id: 'jk', label: 'Jahreskosten', unit: '€', answer: 312000, tol: 0.01 },
        { id: 'k100', label: 'Kosten je vorhandenem Stellplatz und Monat', unit: '€', answer: 10, tol: 0.01 },
        { id: 'k85', label: 'Kosten je belegtem Stellplatz und Monat (85 %)', unit: '€', answer: 11.76, tol: 0.01 }
      ],
      hints: ['Addiere zuerst alle Kostenpositionen.', 'Bei 85 % Auslastung sind im Durchschnitt nur 2.600 × 0,85 = 2.210 Plätze belegt.'],
      solution: `**Jahreskosten:** 180.000 € + 36.000 € + 42.000 € + 18.000 € + 12.000 € + 24.000 € = **312.000 €**

**Je vorhandenem Stellplatz und Monat:** 312.000 € ÷ (2.600 × 12) = 312.000 € ÷ 31.200 = **10,00 €**

**Je belegtem Stellplatz und Monat:** 312.000 € ÷ (2.600 × 0,85 × 12) = 312.000 € ÷ 26.520 = 11,7647… € ≈ **11,76 €**

Deutung: Weil die Kosten fix sind, steigen die Kosten je belegtem Platz, wenn die Auslastung sinkt.`
    },
    {
      id: 'lf09-lagerkosten-a4', type: 'calc', difficulty: 2, points: 4,
      q: 'Ein Staplerfahrer kostet einschließlich Stapler **42,00 € je Stunde** und schafft **20 Ein- oder Auslagerungen** je Stunde. Ein Kommissionierer kostet **36,00 € je Stunde** und schafft **90 Positionen** je Stunde. Kalkuliere die Kosten je Bewegung und je Position sowie die Entgelte mit **20 %** (Handling) bzw. **25 %** (Kommissionierung) Gewinnzuschlag.',
      formula: 'Kosten je Einheit = Kosten je Stunde ÷ Leistung je Stunde; Entgelt = Kosten × (1 + Zuschlag)',
      fields: [
        { id: 'kb', label: 'Kosten je Ein- oder Auslagerung', unit: '€', answer: 2.1, tol: 0.01 },
        { id: 'eb', label: 'Handlingentgelt je Palette (20 %)', unit: '€', answer: 2.52, tol: 0.01 },
        { id: 'kp', label: 'Kosten je Kommissionierposition', unit: '€', answer: 0.4, tol: 0.01 },
        { id: 'ep', label: 'Kommissionierentgelt je Position (25 %)', unit: '€', answer: 0.5, tol: 0.01 }
      ],
      hints: ['Teile die Stundenkosten durch die Leistung je Stunde.', 'Gewinnzuschlag: Kosten × 1,20 bzw. × 1,25.'],
      solution: `**Kosten je Bewegung:** 42,00 € ÷ 20 = **2,10 €**

**Handlingentgelt:** 2,10 € × 1,20 = **2,52 €**

**Kosten je Position:** 36,00 € ÷ 90 = **0,40 €**

**Kommissionierentgelt:** 0,40 € × 1,25 = **0,50 €**

Steigert der Kommissionierer seine Leistung z. B. durch Pick by Voice auf 120 Positionen je Stunde, sinken die Kosten auf 36,00 € ÷ 120 = 0,30 € je Position.`
    },
    {
      id: 'lf09-lagerkosten-a5', type: 'calc', difficulty: 2, points: 4,
      q: `Erstelle die Monatsrechnung Juni der Saarlogistik GmbH an die Bliesgau Getränke GmbH (Preise netto, Beispielwerte):

- Lagergeld: 380 Stellplätze × 11,50 €
- Einlagerung: 210 Paletten × 2,60 €
- Auslagerung: 245 Paletten × 2,60 €
- Kommissionierung: 3.400 Positionen × 0,48 €

Berechne Nettobetrag, Umsatzsteuer (19 %) und Rechnungsbetrag.`,
      formula: 'Rechnungsbetrag = Summe netto + Summe netto × 19 %',
      fields: [
        { id: 'lg', label: 'Lagergeld', unit: '€', answer: 4370, tol: 0.01 },
        { id: 'ha', label: 'Ein- und Auslagerung zusammen', unit: '€', answer: 1183, tol: 0.01 },
        { id: 'ko', label: 'Kommissionierung', unit: '€', answer: 1632, tol: 0.01 },
        { id: 'net', label: 'Summe netto', unit: '€', answer: 7185, tol: 0.01 },
        { id: 'ust', label: 'Umsatzsteuer 19 %', unit: '€', answer: 1365.15, tol: 0.01 },
        { id: 'br', label: 'Rechnungsbetrag brutto', unit: '€', answer: 8550.15, tol: 0.01 }
      ],
      hints: ['Rechne jede Position einzeln und addiere dann.', 'Die Umsatzsteuer wird vom Nettobetrag berechnet.'],
      solution: `**Lagergeld:** 380 × 11,50 € = **4.370,00 €**

**Einlagerung:** 210 × 2,60 € = 546,00 €; **Auslagerung:** 245 × 2,60 € = 637,00 € → zusammen **1.183,00 €**

**Kommissionierung:** 3.400 × 0,48 € = **1.632,00 €**

**Summe netto:** 4.370,00 € + 1.183,00 € + 1.632,00 € = **7.185,00 €**

**Umsatzsteuer:** 7.185,00 € × 0,19 = **1.365,15 €**

**Rechnungsbetrag:** 7.185,00 € + 1.365,15 € = **8.550,15 €**`
    },
    {
      id: 'lf09-lagerkosten-a6', type: 'booking', difficulty: 2, points: 3,
      q: 'Buche die Ausgangsrechnung aus der vorherigen Aufgabe bei der Saarlogistik GmbH: netto 7.185,00 €, Umsatzsteuer 1.365,15 €, brutto 8.550,15 €. Die Rechnung ist noch nicht bezahlt.',
      accounts: ['Forderungen a. LL', 'Verbindlichkeiten a. LL', 'Erlöse aus Lagerleistungen', 'Speditionserlöse', 'Umsatzsteuer', 'Vorsteuer', 'Bank'],
      entries: [
        { side: 'S', account: 'Forderungen a. LL', amount: 8550.15 },
        { side: 'H', account: 'Erlöse aus Lagerleistungen', amount: 7185 },
        { side: 'H', account: 'Umsatzsteuer', amount: 1365.15 }
      ],
      hints: ['Der Kunde schuldet uns den Bruttobetrag – welches Aktivkonto nimmt zu?', 'Die Umsatzsteuer schulden wir dem Finanzamt.'],
      solution: `**Buchungssatz:** Forderungen a. LL 8.550,15 € an Erlöse aus Lagerleistungen 7.185,00 € und Umsatzsteuer 1.365,15 €

- **Forderungen a. LL** (Aktivkonto) nehmen zu → **Soll**, Bruttobetrag, weil der Kunde den gesamten Rechnungsbetrag schuldet.
- **Erlöse aus Lagerleistungen** (Ertragskonto) → **Haben**, Nettobetrag; Erträge mehren das Eigenkapital.
- **Umsatzsteuer** (Passivkonto, Verbindlichkeit gegenüber dem Finanzamt) nimmt zu → **Haben**.

Kontrolle: Soll 8.550,15 € = Haben 7.185,00 € + 1.365,15 €. Vorsteuer wäre falsch, weil sie nur bei Eingangsrechnungen entsteht.`
    },
    {
      id: 'lf09-lagerkosten-a7', type: 'calc', difficulty: 3, points: 3,
      q: `Die Saar-Autoteile KG fragt ein Lagerangebot an. Die Saarlogistik schätzt je Monat (Beispielwerte):

- 300 Stellplätze, Kosten 10,40 € je Stellplatz und Monat
- 500 Ein- und Auslagerungen, Kosten 2,10 € je Bewegung
- 2.000 Kommissionierpositionen, Kosten 0,40 € je Position
- kundenspezifische Verwaltung (Bestandsmeldungen, Abrechnung): 330,00 €

Kalkuliere Selbstkosten, Gewinn bei **12 %** Gewinnzuschlag und den monatlichen Angebotspreis netto.`,
      formula: 'Angebotspreis netto = Selbstkosten + Selbstkosten × 12 %',
      fields: [
        { id: 'sk', label: 'Selbstkosten je Monat', unit: '€', answer: 5300, tol: 0.01 },
        { id: 'gw', label: 'Gewinn (12 %)', unit: '€', answer: 636, tol: 0.01 },
        { id: 'ap', label: 'Angebotspreis netto je Monat', unit: '€', answer: 5936, tol: 0.01 }
      ],
      hints: ['Multipliziere jede Menge mit ihrem Kostensatz und addiere die Verwaltung.', 'Der Gewinnzuschlag bezieht sich auf die Selbstkosten.'],
      solution: `**Stellplätze:** 300 × 10,40 € = 3.120,00 €

**Bewegungen:** 500 × 2,10 € = 1.050,00 €

**Kommissionierung:** 2.000 × 0,40 € = 800,00 €

**Verwaltung:** 330,00 €

**Selbstkosten:** 3.120,00 € + 1.050,00 € + 800,00 € + 330,00 € = **5.300,00 €**

**Gewinn:** 5.300,00 € × 0,12 = **636,00 €**

**Angebotspreis netto:** 5.300,00 € + 636,00 € = **5.936,00 €** je Monat (zzgl. 19 % Umsatzsteuer auf der Rechnung)`
    },
    {
      id: 'lf09-lagerkosten-a8', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zur Lagerabrechnung.',
      text: 'Das Entgelt für das reine Lagern heißt [[Lagergeld]]. Für jede Ein- und Auslagerung wird ein [[Handlingentgelt|Handling|Umschlagsentgelt]] berechnet. Bei tagesgenauer Abrechnung multipliziert man die Summe der [[Palettentage]] mit dem Preis je Tag. Auf den Nettobetrag kommt die Umsatzsteuer mit [[19]] %. Bis zur [[kritischen Menge|kritische Menge]] ist das Fremdlager günstiger als das Eigenlager.',
      hints: ['Ein Begriff setzt sich aus „Palette“ und „Tag“ zusammen.', 'Den Regelsteuersatz regelt § 12 Abs. 1 UStG.'],
      solution: 'Lagergeld (Lagern), Handlingentgelt (Bewegung), Palettentage (tagesgenaue Abrechnung), 19 % Umsatzsteuer (§ 12 Abs. 1 UStG), kritische Menge (Kostengleichheit Eigen-/Fremdlager).'
    },
    {
      id: 'lf09-lagerkosten-a9', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte der Angebotskalkulation für einen neuen Lagerkunden in die richtige Reihenfolge.',
      items: [
        'Anforderungen und Mengen des Kunden erfassen (Stellplätze, Bewegungen, Positionen)',
        'Kostensätze je Stellplatz, Bewegung und Position ermitteln',
        'Mengen mit Kostensätzen bewerten und Selbstkosten berechnen',
        'Gewinnzuschlag aufschlagen und Angebotspreis netto bilden',
        'Angebot mit Preisen je Einheit, Geltung der ADSp und Umsatzsteuerhinweis versenden'
      ],
      hints: ['Ohne Mengengerüst kann man nichts bewerten.', 'Der Gewinn kommt erst auf die fertigen Selbstkosten.'],
      solution: 'Mengengerüst → Kostensätze → Selbstkosten → Gewinnzuschlag → Angebot. Im Angebot werden üblicherweise die Preise je Einheit genannt, damit sich die Rechnung später nach den tatsächlichen Mengen richtet; der Hinweis auf die ADSp sorgt für deren Einbeziehung (siehe Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“).'
    },
    {
      id: 'lf09-lagerkosten-a10', type: 'calc', difficulty: 3, points: 4,
      q: `Die Homburger Baustoffe GmbH überlegt, ein eigenes Lager zu betreiben (Beispielwerte):

- **Eigenlager:** fixe Kosten 8.400 € je Monat, variable Kosten 3,20 € je Palette und Monat
- **Fremdlager** bei der Saarlogistik: 9,20 € je Palette und Monat (Lagergeld und Handling pauschal)

Berechne die kritische Menge sowie die Kosten beider Varianten bei durchschnittlich **1.100 Paletten**.`,
      formula: 'Kritische Menge = Fixkosten ÷ (Fremdlagerpreis − variable Kosten Eigenlager)',
      fields: [
        { id: 'km', label: 'Kritische Menge', unit: 'Paletten', answer: 1400, tol: 0.5 },
        { id: 'ke', label: 'Kosten Eigenlager bei 1.100 Paletten', unit: '€', answer: 11920, tol: 0.01 },
        { id: 'kf', label: 'Kosten Fremdlager bei 1.100 Paletten', unit: '€', answer: 10120, tol: 0.01 },
        { id: 'vt', label: 'Kostenvorteil der günstigeren Variante', unit: '€', answer: 1800, tol: 0.01 }
      ],
      hints: ['Bei der kritischen Menge gilt: 8.400 + 3,20 × x = 9,20 × x.', 'Vergleiche danach die Kosten bei 1.100 Paletten.'],
      solution: `**Ansatz:** 8.400 € + 3,20 € × x = 9,20 € × x → 8.400 € = 6,00 € × x

**Kritische Menge:** x = 8.400 € ÷ (9,20 € − 3,20 €) = **1.400 Paletten**

**Eigenlager bei 1.100 Paletten:** 8.400 € + 3,20 € × 1.100 = 8.400 € + 3.520 € = **11.920 €**

**Fremdlager bei 1.100 Paletten:** 9,20 € × 1.100 = **10.120 €**

**Kostenvorteil:** 11.920 € − 10.120 € = **1.800 €** je Monat zugunsten des **Fremdlagers**, weil 1.100 Paletten unter der kritischen Menge von 1.400 liegen.`
    },
    {
      id: 'lf09-lagerkosten-a11', type: 'text', difficulty: 2, points: 4,
      q: 'Die Homburger Baustoffe GmbH erwartet in zwei Jahren durchschnittlich 1.600 Paletten, also mehr als die kritische Menge. Der Geschäftsführer will deshalb sofort ein Eigenlager bauen. Nimm Stellung und nenne **mindestens drei qualitative Gesichtspunkte**.',
      model: 'Rein rechnerisch wäre das Eigenlager bei 1.600 Paletten günstiger, weil die Menge über der kritischen Menge von 1.400 Paletten liegt. Ich würde aber nicht sofort bauen. Erstens ist die Menge nur eine Prognose; schwankt sie oder sinkt sie, bleiben die hohen Fixkosten. Das Fremdlager ist flexibel, man zahlt nur, was man nutzt. Zweitens bindet ein Eigenlager viel Kapital in Halle, Regalen und Staplern, das für das Kerngeschäft fehlt. Drittens bringt der Logistikdienstleister Know-how, ein Lagerverwaltungssystem und Transport aus einer Hand mit. Für das Eigenlager sprechen die bessere Kontrolle und die Unabhängigkeit vom Dienstleister. Empfehlung: zunächst Fremdlager mit befristetem Vertrag und die Entscheidung bei gesicherter Menge erneut prüfen.',
      criteria: [
        { text: 'erkennt, dass die Menge über der kritischen Menge liegt (rechnerisch Eigenlager)', keywords: ['kritisch', 'Eigenlager|günstiger'], points: 1 },
        { text: 'nennt Unsicherheit der Prognose bzw. Flexibilität des Fremdlagers', keywords: ['Prognose|schwank|flexibel|Flexibilität|Risiko'], points: 1 },
        { text: 'nennt Kapitalbindung bzw. Investition', keywords: ['Kapital|Investition'], points: 1 },
        { text: 'nennt Know-how/Dienstleister oder Kontrolle/Unabhängigkeit und gibt eine Empfehlung', keywords: ['Know-how|Spezial|Kontrolle|Unabhängig|aus einer Hand', 'Empfehl|würde|rate'], points: 1 }
      ],
      hints: ['Ist eine Menge in zwei Jahren sicher?', 'Denke an Geld, Flexibilität und Fachwissen.'],
      solution: 'Rechnerisch spricht die Menge über der kritischen Menge für das Eigenlager. Qualitativ sind zu bedenken: **Prognoseunsicherheit** und hohe **Fixkosten** (Risiko bei sinkender Menge), **Kapitalbindung** durch Investition, **Flexibilität** und **Know-how** des Dienstleisters, Transport aus einer Hand; für das Eigenlager **Kontrolle** und **Unabhängigkeit**. Sinnvoll: zunächst Fremdlager, Entscheidung später mit gesicherten Zahlen.'
    },
    {
      id: 'lf09-lagerkosten-a12', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Tagesgenaue Lagerabrechnung für die Saar-Autoteile KG',
      intro: `Die Saarlogistik GmbH rechnet mit der Saar-Autoteile KG das Lagergeld **tagesgenau nach Palettentagen** ab. Vereinbart sind (netto, Beispielwerte):

- Lagergeld 0,36 € je Palette und Tag
- Ein- und Auslagerung je 2,50 € je Palette

Laut LVS im Juli (31 Tage):

| Bestand | Lagertage im Juli |
|---|---:|
| 180 Paletten | 31 |
| 60 Paletten | 18 |
| 25 Paletten | 9 |

Im Juli wurden **85 Paletten eingelagert** und **70 Paletten ausgelagert**.`,
      hints: ['Palettentage = Paletten × Lagertage, für jede Zeile, dann addieren.', 'Umsatzsteuer erst auf die Nettosumme und kaufmännisch auf Cent runden.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf09-lagerkosten-a12-1', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne die Palettentage und das Lagergeld für Juli.',
          formula: 'Lagergeld = Σ (Paletten × Lagertage) × Preis je Palettentag',
          fields: [
            { id: 'pt', label: 'Palettentage', unit: 'Palettentage', answer: 6885, tol: 0.01 },
            { id: 'lg', label: 'Lagergeld', unit: '€', answer: 2478.6, tol: 0.01 }
          ],
          hints: ['180 × 31 + 60 × 18 + 25 × 9', 'Multipliziere mit 0,36 €.'],
          solution: `**Palettentage:** 180 × 31 = 5.580; 60 × 18 = 1.080; 25 × 9 = 225 → 5.580 + 1.080 + 225 = **6.885 Palettentage**

**Lagergeld:** 6.885 × 0,36 € = **2.478,60 €**`
        },
        {
          id: 'lf09-lagerkosten-a12-2', type: 'calc', difficulty: 2, points: 4,
          q: 'Berechne das Handlingentgelt, den Nettobetrag, die Umsatzsteuer (19 %) und den Rechnungsbetrag.',
          formula: 'Rechnungsbetrag = (Lagergeld + Handling) × 1,19',
          fields: [
            { id: 'ha', label: 'Handlingentgelt (Ein- und Auslagerung)', unit: '€', answer: 387.5, tol: 0.01 },
            { id: 'net', label: 'Summe netto', unit: '€', answer: 2866.1, tol: 0.01 },
            { id: 'ust', label: 'Umsatzsteuer 19 %', unit: '€', answer: 544.56, tol: 0.01 },
            { id: 'br', label: 'Rechnungsbetrag brutto', unit: '€', answer: 3410.66, tol: 0.01 }
          ],
          hints: ['(85 + 70) Bewegungen × 2,50 €', '2.866,10 € × 0,19 = 544,559 € → auf Cent runden.'],
          solution: `**Handling:** Einlagerung 85 × 2,50 € = 212,50 €; Auslagerung 70 × 2,50 € = 175,00 € → **387,50 €**

**Summe netto:** 2.478,60 € + 387,50 € = **2.866,10 €**

**Umsatzsteuer:** 2.866,10 € × 0,19 = 544,559 € ≈ **544,56 €**

**Rechnungsbetrag:** 2.866,10 € + 544,56 € = **3.410,66 €**`
        },
        {
          id: 'lf09-lagerkosten-a12-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Angaben muss die Rechnung nach § 14 Abs. 4 UStG unter anderem enthalten? (Mehrfachauswahl)',
          options: [
            'Steuernummer oder USt-IdNr. der Saarlogistik GmbH',
            'Zeitpunkt der Leistung, hier den Leistungszeitraum Juli',
            'Die Zahl der Mitarbeiter, die die Paletten bewegt haben',
            'Den kalkulierten Gewinnzuschlag der Saarlogistik',
            'Eine fortlaufende, einmalig vergebene Rechnungsnummer'
          ],
          correct: [0, 1, 4],
          hints: ['Pflichtangaben dienen dem Finanzamt und dem Vorsteuerabzug des Kunden.', 'Interne Kalkulationsdaten gehören nicht auf die Rechnung.'],
          solution: 'Pflichtangaben sind u. a. **Steuernummer oder USt-IdNr.** des leistenden Unternehmers, der **Zeitpunkt der Leistung** und eine **fortlaufende Rechnungsnummer** (§ 14 Abs. 4 Satz 1 Nr. 2, 4 und 6 UStG). Mitarbeiterzahl und Gewinnzuschlag sind interne Daten und keine Pflichtangaben.'
        }
      ]
    }
  ],
  quiz: ['lf09-lagerkosten-a2', 'lf09-lagerkosten-a3', 'lf09-lagerkosten-a5', 'lf09-lagerkosten-a6', 'lf09-lagerkosten-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 9, Inhalte: Lagerkosten, Lagerentgelte, Angebotserstellung, Eigen- und Fremdlagerung' },
    { title: 'Umsatzsteuergesetz § 12 Steuersätze', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html', asOf: '2026' },
    { title: 'Umsatzsteuergesetz § 14 Ausstellung von Rechnungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html', asOf: '2026' }
  ],
  links: ['lf09-lager-grundlagen', 'lf09-lagerorganisation', 'lf09-foerdermittel', 'lf03-umsatzsteuer']
};
