export default {
  id: 'lf08-finanzierung',
  area: 'LF08',
  topic: 'lf08-finanzierung',
  title: 'Finanzierung: Bankkredit, Ratenkauf, Leasing',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Kreditsicherheiten nach BGB/HGB: Bürgschaft §§ 765, 766, 771, 773 BGB, §§ 349, 350 HGB; Eigentumsübertragung und Sicherungsübereignung §§ 929, 930 BGB; Eigentumsvorbehalt § 449 BGB; effektiver Jahreszins bei Verbraucherdarlehen § 16 PAngV, Stand 2026. Alle Zinssätze, Preise und Leasingraten in dieser Einheit sind selbst gewählte Beispielwerte, keine Marktzinsen.'
  },
  goals: [
    'Ich kann den Finanzierungsbedarf für eine Anschaffung (z. B. Lkw, Gabelstapler) ermitteln und Finanzierungsarten unterscheiden.',
    'Ich kann für ein Ratentilgungsdarlehen und ein Annuitätendarlehen Zinsen, Tilgung und Restschuld berechnen.',
    'Ich kann den Effektivzins als Vergleichsmaßstab für die Kreditkosten erklären.',
    'Ich kann die Mehrkosten eines Ratenkaufs gegenüber dem Barkauf berechnen.',
    'Ich kann Operating-Leasing und Finanzierungsleasing unterscheiden und Vor- und Nachteile des Leasings abwägen.',
    'Ich kann Kauf mit Kredit, Ratenkauf und Leasing in einem Kostenvergleich gegenüberstellen und eine begründete Entscheidung treffen.',
    'Ich kann Bürgschaft, Sicherungsübereignung und Eigentumsvorbehalt als Kreditsicherheiten erklären.'
  ],
  simple: `# Worum geht es?

Eine neue Sattelzugmaschine kostet schnell über 100.000 €, ein Gabelstapler mehrere zehntausend Euro. Kaum eine Spedition bezahlt das aus der Kasse. Es gibt drei typische Wege:

| Weg | So funktioniert es | Wem gehört das Fahrzeug? |
|---|---|---|
| **Bankkredit** | Die Bank leiht das Geld, die Spedition kauft und zahlt das Darlehen mit Zinsen zurück. | der Spedition (oft zur Sicherheit an die Bank übereignet) |
| **Ratenkauf** | Der Händler lässt den Kaufpreis in Raten zahlen. | bis zur letzten Rate meist dem Händler (Eigentumsvorbehalt) |
| **Leasing** | Die Spedition „mietet“ das Fahrzeug für eine feste Zeit gegen monatliche Raten. | dem Leasinggeber |

# Zinsen kosten Geld

Wer Geld leiht, zahlt **Zinsen**. Die Rückzahlung des geliehenen Betrags heißt **Tilgung**. Je länger und je höher der Kredit, desto mehr Zinsen.

# Die Bank will Sicherheiten

Damit die Bank ihr Geld sicher zurückbekommt, verlangt sie **Kreditsicherheiten**, zum Beispiel:
- **Bürgschaft**: Ein Dritter (z. B. der Inhaber privat) verspricht zu zahlen, wenn die Spedition nicht zahlt.
- **Sicherungsübereignung**: Die Bank wird Eigentümerin des Lkw, die Spedition darf ihn aber weiter fahren.
- **Eigentumsvorbehalt**: Der Verkäufer bleibt Eigentümer, bis alles bezahlt ist.`,
  deep: `# 1. Finanzierungsbedarf und Finanzierungsarten

Der **Finanzierungsbedarf** ergibt sich aus dem Anschaffungspreis (einschließlich Nebenkosten wie Überführung, Aufbauten, Zulassung) abzüglich der vorhandenen eigenen Mittel. Grundsätzlich unterscheidet man:

- **Eigenfinanzierung**: Geld des Inhabers oder einbehaltene Gewinne – keine Zinsen, aber die Liquidität sinkt.
- **Fremdfinanzierung**: Geld von Dritten, z. B. Bankkredit oder Lieferantenkredit (Ratenkauf) – Zinsen, Rückzahlungspflicht, Sicherheiten.
- **Leasing** als Sonderform: Man finanziert nicht den Kauf, sondern die **Nutzung**.

Faustregel (**goldene Bankregel**, eine kaufmännische Grundregel, kein Gesetz): Langfristig genutztes Anlagevermögen wie Lkw soll auch langfristig finanziert werden (Fristenkongruenz). Die Kreditlaufzeit soll aber die Nutzungsdauer nicht überschreiten – der Lkw soll abbezahlt sein, bevor er ersetzt werden muss.

# 2. Bankkredit (Darlehen)

## Ratentilgung (Abzahlungsdarlehen)

- Die **Tilgung** ist jedes Jahr **gleich hoch**: Tilgung = Kreditbetrag ÷ Laufzeit.
- Die **Zinsen** werden von der jeweiligen **Restschuld** berechnet und **sinken** deshalb.
- Die jährliche Belastung (Zins + Tilgung) ist am Anfang am höchsten und nimmt ab.

## Annuitätendarlehen

- Die **Annuität** (Zins + Tilgung) ist jedes Jahr **gleich hoch**.
- Der **Zinsanteil sinkt**, der **Tilgungsanteil steigt** von Jahr zu Jahr.
- Vorteil: gleichbleibende, gut planbare Belastung. Weil am Anfang weniger getilgt wird, zahlt man insgesamt etwas mehr Zinsen als bei der Ratentilgung.
- Die Annuität berechnet die Bank mit dem **Annuitätenfaktor**; in der Schule wird sie meist vorgegeben. Pro Jahr gilt: Zinsen = Restschuld × Zinssatz; Tilgung = Annuität − Zinsen; neue Restschuld = alte Restschuld − Tilgung.

## Effektivzins (begrifflich)

Der **Nominalzins** (Sollzins) ist der vertraglich vereinbarte Zinssatz. Kredite verursachen aber oft weitere Kosten, z. B. Bearbeitungs- oder Vermittlungsgebühren. Der **effektive Jahreszins** drückt die **Gesamtkosten** des Kredits als jährlichen Prozentsatz aus und ist deshalb der richtige Maßstab, um Kreditangebote zu vergleichen. Für **Verbraucherdarlehen** ist seine Angabe in der Preisangabenverordnung vorgeschrieben (§ 16 PAngV). Bei Firmenkrediten sollte man ihn trotzdem erfragen oder die Gesamtkosten selbst vergleichen.

# 3. Ratenkauf (Teilzahlung)

Der Verkäufer – oder eine mit ihm zusammenarbeitende Bank – gewährt einen **Zahlungsaufschub**: Anzahlung und danach feste Raten.

**Mehrkosten des Ratenkaufs = Anzahlung + Anzahl Raten × Rate − Barpreis**

Vorteile: schnell, unkompliziert, oft ohne weitere Sicherheiten außer dem **Eigentumsvorbehalt**. Nachteile: häufig teurer als ein Bankkredit; Skonto beim Barkauf entfällt.

# 4. Leasing

Beim Leasing überlässt der **Leasinggeber** (Leasinggesellschaft oder Hersteller) dem **Leasingnehmer** (Spedition) ein Wirtschaftsgut gegen **Leasingraten** zur Nutzung. Eigentümer bleibt der Leasinggeber.

| | **Operating-Leasing** | **Finanzierungsleasing (Finance-Leasing)** |
|---|---|---|
| Laufzeit | kurz bis mittel, oft kurzfristig kündbar | feste **Grundmietzeit**, während der nicht gekündigt werden kann |
| Investitionsrisiko (Wertverlust, technisches Veralten) | trägt der **Leasinggeber** | trägt im Wesentlichen der **Leasingnehmer** |
| Wartung, Reparatur | oft im Vertrag enthalten (Full-Service) | meist Sache des Leasingnehmers |
| Kosten des Leasinggebers | werden erst durch mehrere Leasingnehmer nacheinander gedeckt | werden in der Grundmietzeit ganz (**Vollamortisation**) oder bis auf einen kalkulierten Restwert (**Teilamortisation**) gedeckt |
| Nach Vertragsende | Rückgabe | Rückgabe, Verlängerung oder Kauf (je nach Vertrag, z. B. Kauf- oder Andienungsrecht) |
| Beispiel | Mietstapler für das Weihnachtsgeschäft | Sattelzugmaschine für 48 Monate |

Ob das Leasinggut steuerlich und bilanziell dem Leasinggeber oder dem Leasingnehmer zugerechnet wird, hängt von der Vertragsgestaltung ab; das wird in dieser Einheit nicht vertieft.

**Vorteile des Leasings**
- **Liquidität** bleibt erhalten, kein großer Kapitalbedarf auf einmal
- feste, gut planbare Raten
- Fuhrpark bleibt technisch modern (z. B. neue Abgasnormen, Maut-Einstufung)
- bei Service-Verträgen weniger Verwaltungsaufwand
- in der Regel keine zusätzlichen Kreditsicherheiten nötig

**Nachteile des Leasings**
- über die Laufzeit meist **teurer** als Kauf mit Eigen- oder Bankfinanzierung (der Leasinggeber will Zinsen, Risiko und Gewinn gedeckt haben)
- kein Eigentum, kein Restwert am Ende (außer bei Kaufoption)
- Bindung an die Grundmietzeit (Finanzierungsleasing), Vertragsauflagen (Kilometer, Zustand bei Rückgabe)

# 5. Kostenvergleich Kauf – Kredit – Leasing

Für einen fairen Vergleich betrachtet man die **gesamte Nutzungszeit**:

| Variante | Gesamtauszahlungen | − Restwert, der dem Betrieb gehört | = Nettokosten |
|---|---|---|---|
| Barkauf | Kaufpreis | Restwert | Kaufpreis − Restwert |
| Kauf mit Bankkredit | Kaufpreis + Zinsen (+ Gebühren) | Restwert | … |
| Ratenkauf | Anzahlung + Raten | Restwert | … |
| Leasing | Sonderzahlung + Leasingraten | – (Fahrzeug wird zurückgegeben) | … |

Vereinfachung in der Schule: Steuern, Versicherung und Wartung bleiben unberücksichtigt, wenn sie bei allen Varianten gleich sind. Beim Barkauf entgehen dem Betrieb Zinsen auf das gebundene Geld; außerdem fehlt das Geld für andere Zwecke. Die Entscheidung berücksichtigt deshalb **Kosten und Liquidität**.

# 6. Kreditsicherheiten

## Bürgschaft (§§ 765 ff. BGB)

- Der **Bürge** verpflichtet sich gegenüber dem Gläubiger (Bank), für die Schuld des **Hauptschuldners** (Spedition) einzustehen (§ 765 BGB).
- Die Bürgschaftserklärung eines Nichtkaufmanns muss **schriftlich** erteilt werden, die **elektronische Form ist ausgeschlossen** (§ 766 BGB).
- **Ausfallbürgschaft**: Der Bürge kann die **Einrede der Vorausklage** erheben – er zahlt erst, wenn die Zwangsvollstreckung gegen den Hauptschuldner erfolglos war (§ 771 BGB).
- **Selbstschuldnerische Bürgschaft**: Der Bürge **verzichtet** auf die Einrede der Vorausklage (§ 773 Abs. 1 Nr. 1 BGB); die Bank kann sich sofort an ihn wenden. Banken verlangen in der Regel diese Form.
- Ist die Bürgschaft für den Bürgen ein **Handelsgeschäft** (Bürge ist Kaufmann), steht ihm die Einrede der Vorausklage **nicht zu** (§ 349 HGB) und die Schriftform des § 766 BGB gilt nicht (§ 350 HGB).

## Sicherungsübereignung (§§ 929, 930 BGB)

- Die Spedition überträgt der Bank das **Eigentum** an einer beweglichen Sache (z. B. Lkw), bleibt aber **unmittelbare Besitzerin** und darf sie weiter nutzen.
- Die sonst nötige Übergabe wird durch eine Vereinbarung ersetzt, durch die die Bank den **mittelbaren Besitz** erhält (**Besitzkonstitut**, § 930 BGB).
- In der Praxis behält die Bank bei Fahrzeugen meist die **Zulassungsbescheinigung Teil II** (früher Fahrzeugbrief), damit das Fahrzeug nicht ohne Weiteres verkauft werden kann.
- Nach vollständiger Rückzahlung erhält die Spedition das Eigentum zurück (Rückübertragung nach Sicherungsvertrag).

## Eigentumsvorbehalt (§ 449 BGB)

- Der **Verkäufer** einer beweglichen Sache bleibt bis zur **vollständigen Zahlung** Eigentümer; im Zweifel geht das Eigentum erst mit der letzten Zahlung über (§ 449 Abs. 1 BGB).
- Zurückverlangen kann der Verkäufer die Sache aufgrund des Eigentumsvorbehalts nur, wenn er **vom Vertrag zurückgetreten** ist (§ 449 Abs. 2 BGB).
- Typisch beim **Ratenkauf** eines Gabelstaplers oder einer Regalanlage.

| Sicherheit | Wer ist Eigentümer? | Wer nutzt die Sache? | Typischer Einsatz |
|---|---|---|---|
| Bürgschaft | – (Person haftet zusätzlich) | – | Kredit an kleine Spedition, Inhaber bürgt |
| Sicherungsübereignung | Bank | Spedition | Bankkredit für Lkw |
| Eigentumsvorbehalt | Verkäufer bis zur letzten Rate | Spedition | Ratenkauf beim Händler |`,
  terms: [
    { term: 'Finanzierungsbedarf', def: 'Betrag, der für eine Anschaffung zusätzlich zu den eigenen Mitteln beschafft werden muss.' },
    { term: 'Tilgung', def: 'Rückzahlung des geliehenen Kreditbetrags (ohne Zinsen).' },
    { term: 'Ratentilgung', def: 'Darlehen mit jährlich gleich hoher Tilgung; die Zinsen und die Gesamtbelastung sinken mit der Restschuld.' },
    { term: 'Annuitätendarlehen', def: 'Darlehen mit gleichbleibender Jahresleistung (Annuität = Zinsen + Tilgung); Zinsanteil sinkt, Tilgungsanteil steigt.' },
    { term: 'Effektiver Jahreszins', def: 'Gesamtkosten eines Kredits (Zinsen und sonstige Kosten) als jährlicher Prozentsatz; Vergleichsmaßstab für Kreditangebote, bei Verbraucherdarlehen nach § 16 PAngV anzugeben.' },
    { term: 'Ratenkauf', def: 'Kauf mit Zahlung in Teilbeträgen (Anzahlung und Raten); meist mit Eigentumsvorbehalt und Mehrkosten gegenüber dem Barpreis.' },
    { term: 'Operating-Leasing', def: 'Kurzfristiges, meist kündbares Leasing; das Investitionsrisiko trägt der Leasinggeber.' },
    { term: 'Finanzierungsleasing', def: 'Leasing mit unkündbarer Grundmietzeit, in der die Kosten des Leasinggebers ganz oder überwiegend gedeckt werden; Risiko überwiegend beim Leasingnehmer.' },
    { term: 'Bürgschaft', def: 'Vertrag, durch den sich ein Bürge gegenüber dem Gläubiger verpflichtet, für die Verbindlichkeit eines Dritten einzustehen (§ 765 BGB).' },
    { term: 'Selbstschuldnerische Bürgschaft', def: 'Bürgschaft, bei der der Bürge auf die Einrede der Vorausklage verzichtet; der Gläubiger kann sofort den Bürgen in Anspruch nehmen.' },
    { term: 'Sicherungsübereignung', def: 'Übertragung des Eigentums an einer beweglichen Sache an den Kreditgeber zur Sicherheit, wobei der Schuldner Besitzer bleibt (Besitzkonstitut, § 930 BGB).' },
    { term: 'Eigentumsvorbehalt', def: 'Vereinbarung, dass der Verkäufer bis zur vollständigen Bezahlung Eigentümer der verkauften beweglichen Sache bleibt (§ 449 BGB).' }
  ],
  example: `# Bliesgau Logistik e.K. braucht einen neuen Elektro-Gabelstapler (Beispielzahlen)

Der Stapler kostet **32.000 €** netto. Er soll 4 Jahre genutzt werden; danach ist er voraussichtlich noch **8.000 €** wert. Drei Möglichkeiten:

| | Bankkredit | Ratenkauf beim Händler | Leasing |
|---|---|---|---|
| Bedingungen | 32.000 €, 4 Jahre, Ratentilgung, 6 % p. a. (Beispielzins) | 4.000 € Anzahlung + 36 Raten à 850 € | 48 Monatsraten à 720 €, keine Sonderzahlung, Rückgabe am Ende |
| Auszahlungen gesamt | 32.000 € + 4.800 € Zinsen = 36.800 € | 4.000 € + 30.600 € = 34.600 € | 48 × 720 € = 34.560 € |
| Restwert im Eigentum | 8.000 € | 8.000 € | – |
| **Nettokosten** | **28.800 €** | **26.600 €** | **34.560 €** |

**Zinsen beim Bankkredit** (Tilgung 8.000 € pro Jahr):
- Jahr 1: 32.000 € × 6 % = 1.920 €
- Jahr 2: 24.000 € × 6 % = 1.440 €
- Jahr 3: 16.000 € × 6 % = 960 €
- Jahr 4: 8.000 € × 6 % = 480 €
- Summe: **4.800 €**

**Ratenkauf**: Mehrkosten gegenüber dem Barpreis = 34.600 € − 32.000 € = **2.600 €**. In diesem Beispiel ist das günstiger als der Bankkredit, weil der Händler mit günstigen Konditionen den Verkauf fördert. Der Stapler bleibt bis zur letzten Rate unter **Eigentumsvorbehalt** des Händlers.

**Entscheidung:** Rein nach Kosten ist der Ratenkauf am günstigsten. Leasing ist am teuersten, schont aber die Liquidität, und der Stapler kann nach 4 Jahren einfach gegen ein neues Modell getauscht werden. Bliesgau Logistik hat genügend Liquidität und wählt den Ratenkauf.`,
  rules: [
    'Ratentilgung: gleiche Tilgung, sinkende Zinsen. Annuität: gleiche Gesamtrate, sinkender Zins- und steigender Tilgungsanteil.',
    'Zinsen werden immer von der Restschuld berechnet.',
    'Kreditangebote vergleicht man über den effektiven Jahreszins bzw. die Gesamtkosten, nicht über den Nominalzins.',
    'Mehrkosten Ratenkauf = Anzahlung + Summe der Raten − Barpreis.',
    'Beim Kostenvergleich den Restwert abziehen, wenn das Gut am Ende dem Betrieb gehört.',
    'Leasing: Eigentümer bleibt der Leasinggeber; Vorteil Liquidität, Nachteil meist höhere Gesamtkosten.',
    'Sicherungsübereignung: Bank wird Eigentümerin, Spedition bleibt Besitzerin. Eigentumsvorbehalt: Verkäufer bleibt Eigentümer bis zur letzten Zahlung.',
    'Selbstschuldnerische Bürgschaft: Bürge kann sofort in Anspruch genommen werden; bei Kaufleuten ist das gesetzlich der Normalfall (§ 349 HGB).'
  ],
  summary: `- **Finanzierungsarten**: Eigenfinanzierung, Bankkredit, Ratenkauf, Leasing.
- **Ratentilgung**: Tilgung = Kredit ÷ Laufzeit; Zinsen von der Restschuld, sinkend.
- **Annuitätendarlehen**: gleichbleibende Annuität; Zinsen = Restschuld × Zinssatz, Tilgung = Annuität − Zinsen.
- **Effektiver Jahreszins**: Gesamtkosten in Prozent pro Jahr – Vergleichsmaßstab (§ 16 PAngV bei Verbraucherdarlehen).
- **Ratenkauf**: Mehrkosten = Anzahlung + Raten − Barpreis; meist mit Eigentumsvorbehalt.
- **Leasing**: Operating (kurz, kündbar, Risiko beim Leasinggeber) vs. Finanzierungsleasing (Grundmietzeit, Risiko beim Leasingnehmer); schont Liquidität, meist teurer.
- **Kostenvergleich**: Gesamtauszahlungen − Restwert = Nettokosten; zusätzlich Liquidität beachten.
- **Sicherheiten**: Bürgschaft (§§ 765 ff. BGB, §§ 349, 350 HGB), Sicherungsübereignung (§ 930 BGB), Eigentumsvorbehalt (§ 449 BGB).`,
  mistakes: [
    { wrong: 'Beim Ratentilgungsdarlehen bleibt die jährliche Zahlung gleich.', right: 'Gleich bleibt nur die Tilgung; weil die Zinsen sinken, wird die jährliche Gesamtbelastung kleiner. Gleich bleibende Zahlungen hat das Annuitätendarlehen.' },
    { wrong: 'Die Zinsen werden jedes Jahr vom ursprünglichen Kreditbetrag berechnet.', right: 'Die Zinsen werden von der jeweiligen Restschuld berechnet.' },
    { wrong: 'Das Kreditangebot mit dem niedrigsten Nominalzins ist immer das günstigste.', right: 'Gebühren und Nebenkosten können ein Angebot verteuern; verglichen wird über den effektiven Jahreszins bzw. die Gesamtkosten.' },
    { wrong: 'Ein geleaster Lkw gehört nach der letzten Rate automatisch der Spedition.', right: 'Eigentümer bleibt der Leasinggeber; ein Erwerb ist nur möglich, wenn der Vertrag eine Kaufoption vorsieht und sie ausgeübt wird.' },
    { wrong: 'Bei der Sicherungsübereignung muss die Spedition den Lkw bei der Bank abstellen.', right: 'Die Spedition bleibt Besitzerin und nutzt den Lkw weiter; die Bank erhält nur das Eigentum und den mittelbaren Besitz (§ 930 BGB).' },
    { wrong: 'Beim Leasing ist der Kostenvergleich einfach Leasingraten gegen Kaufpreis.', right: 'Beim Kauf muss der Restwert abgezogen und die Finanzierung (Zinsen) einbezogen werden; außerdem ist die Liquidität zu beachten.' }
  ],
  flashcards: [
    { q: 'Was ist der Unterschied zwischen Ratentilgung und Annuitätendarlehen?', a: 'Ratentilgung: gleiche Tilgung, sinkende Gesamtrate. Annuität: gleiche Gesamtrate, Zinsanteil sinkt, Tilgungsanteil steigt.' },
    { q: 'Wie berechnet man die Tilgung beim Ratentilgungsdarlehen?', a: 'Kreditbetrag ÷ Laufzeit in Jahren.' },
    { q: 'Was drückt der effektive Jahreszins aus?', a: 'Die Gesamtkosten eines Kredits (Zinsen und sonstige Kosten) als jährlichen Prozentsatz.' },
    { q: 'Wie berechnet man die Mehrkosten eines Ratenkaufs?', a: 'Anzahlung + Anzahl Raten × Rate − Barpreis.' },
    { q: 'Wer trägt beim Operating-Leasing das Investitionsrisiko?', a: 'Der Leasinggeber.' },
    { q: 'Was ist die Grundmietzeit?', a: 'Die feste, unkündbare Vertragslaufzeit beim Finanzierungsleasing.' },
    { q: 'Nenne zwei Vor- und zwei Nachteile des Leasings.', a: 'Vorteile: Liquidität bleibt erhalten, planbare Raten, moderner Fuhrpark. Nachteile: meist teurer, kein Eigentum, Bindung an die Grundmietzeit.' },
    { q: 'Was ist eine Sicherungsübereignung?', a: 'Der Kreditnehmer überträgt dem Kreditgeber das Eigentum an einer beweglichen Sache, bleibt aber Besitzer und nutzt sie weiter (§ 930 BGB).' },
    { q: 'Was bedeutet Eigentumsvorbehalt?', a: 'Der Verkäufer bleibt Eigentümer, bis der Kaufpreis vollständig bezahlt ist (§ 449 BGB).' },
    { q: 'Was ist die Einrede der Vorausklage?', a: 'Recht des Bürgen, die Zahlung zu verweigern, bis eine Zwangsvollstreckung gegen den Hauptschuldner erfolglos war (§ 771 BGB); bei selbstschuldnerischer Bürgschaft und bei Kaufleuten ausgeschlossen.' },
    { q: 'Welche Form braucht die Bürgschaft einer Privatperson?', a: 'Schriftform; elektronische Form ist ausgeschlossen (§ 766 BGB).' }
  ],
  tasks: [
    {
      id: 'lf08-finanzierung-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Kreditsicherheit der passenden Situation zu.',
      pairs: [
        ['Bürgschaft', 'Die Inhaberin der Spedition verpflichtet sich privat, für den Kredit ihrer GmbH einzustehen.'],
        ['Sicherungsübereignung', 'Die Bank wird Eigentümerin der finanzierten Sattelzugmaschine, die Spedition fährt sie weiter.'],
        ['Eigentumsvorbehalt', 'Der Staplerhändler bleibt Eigentümer, bis die letzte Rate bezahlt ist.'],
        ['Selbstschuldnerische Bürgschaft', 'Die Bank kann sofort vom Bürgen Zahlung verlangen, ohne zuerst gegen die Spedition vorzugehen.']
      ],
      hints: ['Achte darauf, ob eine Person oder eine Sache die Sicherheit bildet.', 'Beim Eigentumsvorbehalt ist der Verkäufer, nicht die Bank beteiligt.'],
      solution: 'Bürgschaft = eine Person haftet zusätzlich (§ 765 BGB). Sicherungsübereignung = Bank wird Eigentümerin, Spedition bleibt Besitzerin (§ 930 BGB). Eigentumsvorbehalt = Verkäufer bleibt bis zur vollständigen Zahlung Eigentümer (§ 449 BGB). Selbstschuldnerische Bürgschaft = Verzicht auf die Einrede der Vorausklage (§ 773 Abs. 1 Nr. 1 BGB).'
    },
    {
      id: 'lf08-finanzierung-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Merkmale passen zum **Finanzierungsleasing**? (Mehrfachauswahl)',
      options: [
        'Feste, unkündbare Grundmietzeit',
        'Das Investitionsrisiko trägt im Wesentlichen der Leasingnehmer',
        'Kurzfristig kündbar, z. B. für drei Monate Weihnachtsgeschäft',
        'Die Kosten des Leasinggebers werden in der Grundmietzeit ganz oder bis auf einen Restwert gedeckt',
        'Wartung ist immer im Vertrag enthalten'
      ],
      correct: [0, 1, 3],
      hints: ['Finanzierungsleasing ersetzt wirtschaftlich eher eine Kreditfinanzierung.', 'Kurzfristige Kündbarkeit ist typisch für Operating-Leasing.'],
      solution: 'Richtig sind A, B und D. Beim Finanzierungsleasing gibt es eine **unkündbare Grundmietzeit**, das **Risiko liegt beim Leasingnehmer** und die Kosten werden **voll oder bis auf einen Restwert amortisiert**. Kurzfristige Kündbarkeit (C) ist ein Merkmal des Operating-Leasings. Wartung (E) kann vereinbart werden, ist beim Finanzierungsleasing aber meist Sache des Leasingnehmers.'
    },
    {
      id: 'lf08-finanzierung-a3', type: 'calc', difficulty: 2, points: 4,
      q: 'Die Saar-Trans Spedition GmbH finanziert eine Sattelzugmaschine mit einem Bankdarlehen über **120.000 €**, Laufzeit **4 Jahre**, **Ratentilgung**, Zinssatz **5 % p. a.** (Beispielzinssatz). Tilgung und Zinsen werden jeweils am Jahresende gezahlt. Berechne die jährliche Tilgung, die Zinsen im 1. und 2. Jahr und die Zinsen insgesamt.',
      formula: 'Tilgung = Kreditbetrag ÷ Laufzeit; Zinsen = Restschuld × Zinssatz',
      fields: [
        { id: 'tilg', label: 'Tilgung pro Jahr', unit: '€', answer: 30000, tol: 0.01 },
        { id: 'z1', label: 'Zinsen 1. Jahr', unit: '€', answer: 6000, tol: 0.01 },
        { id: 'z2', label: 'Zinsen 2. Jahr', unit: '€', answer: 4500, tol: 0.01 },
        { id: 'zges', label: 'Zinsen insgesamt', unit: '€', answer: 15000, tol: 0.01 }
      ],
      hints: ['120.000 € ÷ 4 Jahre.', 'Im 2. Jahr beträgt die Restschuld nur noch 90.000 €.'],
      solution: `**Tilgung:** 120.000 € ÷ 4 = **30.000 € pro Jahr**

| Jahr | Restschuld Jahresanfang | Zinsen 5 % | Tilgung | Belastung |
|---|---:|---:|---:|---:|
| 1 | 120.000 € | **6.000 €** | 30.000 € | 36.000 € |
| 2 | 90.000 € | **4.500 €** | 30.000 € | 34.500 € |
| 3 | 60.000 € | 3.000 € | 30.000 € | 33.000 € |
| 4 | 30.000 € | 1.500 € | 30.000 € | 31.500 € |
| **Summe** | | **15.000 €** | 120.000 € | 135.000 € |

Die jährliche Belastung sinkt, weil die Zinsen von der sinkenden Restschuld berechnet werden.`
    },
    {
      id: 'lf08-finanzierung-a4', type: 'calc', difficulty: 3, points: 4,
      q: 'Statt der Ratentilgung bietet die Bank für dieselben **120.000 €**, **4 Jahre**, **5 % p. a.** (Beispielzinssatz) ein **Annuitätendarlehen** an. Die jährliche Annuität beträgt laut Bank **33.841,42 €**. Berechne Zinsanteil, Tilgungsanteil und Restschuld für das 1. Jahr sowie den Zinsanteil im 2. Jahr.',
      formula: 'Zinsen = Restschuld × Zinssatz; Tilgung = Annuität − Zinsen; neue Restschuld = alte Restschuld − Tilgung',
      fields: [
        { id: 'z1', label: 'Zinsanteil 1. Jahr', unit: '€', answer: 6000, tol: 0.01 },
        { id: 't1', label: 'Tilgungsanteil 1. Jahr', unit: '€', answer: 27841.42, tol: 0.01 },
        { id: 'r1', label: 'Restschuld Ende 1. Jahr', unit: '€', answer: 92158.58, tol: 0.01 },
        { id: 'z2', label: 'Zinsanteil 2. Jahr', unit: '€', answer: 4607.93, tol: 0.01 }
      ],
      hints: ['Im 1. Jahr werden die Zinsen von 120.000 € berechnet.', 'Die Tilgung ist der Teil der Annuität, der nach Abzug der Zinsen übrig bleibt.'],
      solution: `**1. Jahr**
- Zinsen: 120.000,00 € × 0,05 = **6.000,00 €**
- Tilgung: 33.841,42 € − 6.000,00 € = **27.841,42 €**
- Restschuld: 120.000,00 € − 27.841,42 € = **92.158,58 €**

**2. Jahr**
- Zinsen: 92.158,58 € × 0,05 = 4.607,929 € ≈ **4.607,93 €**
- (Tilgung: 33.841,42 € − 4.607,93 € = 29.233,49 €)

Über 4 Jahre zahlt die Spedition 4 × 33.841,42 € = 135.365,68 €, also **15.365,68 € Zinsen** – etwas mehr als bei der Ratentilgung (15.000 €), weil am Anfang weniger getilgt wird. Dafür ist die Belastung jedes Jahr gleich.`
    },
    {
      id: 'lf08-finanzierung-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Händler bietet der Hochwald Logistik e.K. einen Elektro-Gabelstapler zum Barpreis von **32.000 €** an. Alternativ: **4.000 € Anzahlung** und **36 Monatsraten zu je 850 €** (Beispielwerte). Berechne den Gesamtbetrag beim Ratenkauf, die Mehrkosten und die Mehrkosten in Prozent des Barpreises.',
      formula: 'Mehrkosten = Anzahlung + Raten × Ratenbetrag − Barpreis',
      fields: [
        { id: 'gesamt', label: 'Gesamtbetrag Ratenkauf', unit: '€', answer: 34600, tol: 0.01 },
        { id: 'mehr', label: 'Mehrkosten', unit: '€', answer: 2600, tol: 0.01 },
        { id: 'proz', label: 'Mehrkosten in % des Barpreises', unit: '%', answer: 8.13, tol: 0.01 }
      ],
      hints: ['36 × 850 € plus Anzahlung.', 'Mehrkosten ÷ Barpreis × 100.'],
      solution: `**Gesamtbetrag:** 4.000 € + 36 × 850 € = 4.000 € + 30.600 € = **34.600 €**

**Mehrkosten:** 34.600 € − 32.000 € = **2.600 €**

**In Prozent:** 2.600 € ÷ 32.000 € × 100 = 8,125 % ≈ **8,13 %** (bezogen auf die gesamte Laufzeit von 3 Jahren, nicht pro Jahr)

Achtung: Die 8,13 % sind kein Jahreszins. Weil die Restschuld laufend sinkt, liegt der effektive Jahreszins anders als dieser einfache Prozentwert – zum Vergleich sollte man den Händler nach dem effektiven Jahreszins bzw. den Gesamtkosten fragen.`
    },
    {
      id: 'lf08-finanzierung-a6', type: 'mc', difficulty: 2, points: 1,
      q: 'Zwei Banken bieten der Spedition einen Kredit an. Bank A: Sollzins 4,8 %, Bearbeitungsgebühr 2 % des Kreditbetrags. Bank B: Sollzins 5,1 %, keine Gebühren. Welche Aussage ist **richtig**?',
      options: [
        'Bank A ist günstiger, weil der Sollzins niedriger ist.',
        'Für den Vergleich müssen alle Kreditkosten einbezogen werden; das leistet der effektive Jahreszins bzw. ein Gesamtkostenvergleich.',
        'Bank B ist immer teurer, weil Gebühren nicht zu den Kreditkosten gehören.',
        'Der effektive Jahreszins ist immer gleich dem Sollzins.'
      ],
      correct: [1],
      hints: ['Die Gebühr erhöht die Kosten von Bank A.', 'Welcher Zinssatz berücksichtigt alle Kosten?'],
      solution: 'Richtig ist B. Der **Sollzins** (Nominalzins) berücksichtigt keine Gebühren. Der **effektive Jahreszins** drückt die Gesamtkosten als jährlichen Prozentsatz aus und ist deshalb der richtige Vergleichsmaßstab (§ 16 PAngV für Verbraucherdarlehen). Bei Bank A kann der Effektivzins durch die Gebühr über dem von Bank B liegen.'
    },
    {
      id: 'lf08-finanzierung-a7', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zur Sicherungsübereignung und zum Eigentumsvorbehalt.',
      text: 'Bei der Sicherungsübereignung wird die Bank [[Eigentümerin|Eigentümer]] des Lkw, die Spedition bleibt [[Besitzerin|Besitzer]] und darf ihn weiter nutzen. Die Übergabe wird durch ein [[Besitzkonstitut]] ersetzt (§ 930 BGB). Bei Fahrzeugen behält die Bank meist die Zulassungsbescheinigung Teil [[II|2]]. Beim Eigentumsvorbehalt bleibt der [[Verkäufer|Lieferer|Händler]] Eigentümer, bis der Kaufpreis vollständig bezahlt ist.',
      hints: ['Eigentum = rechtliche Herrschaft, Besitz = tatsächliche Herrschaft.', 'Die Zulassungsbescheinigung Teil I führt der Fahrer mit, Teil II ersetzt den früheren Fahrzeugbrief.'],
      solution: 'Sicherungsübereignung: Bank = **Eigentümerin**, Spedition = **Besitzerin**; Ersatz der Übergabe durch **Besitzkonstitut** (§ 930 BGB); die Bank verwahrt die **Zulassungsbescheinigung Teil II**. Eigentumsvorbehalt: Der **Verkäufer** bleibt Eigentümer bis zur vollständigen Zahlung (§ 449 BGB).'
    },
    {
      id: 'lf08-finanzierung-a8', type: 'mc', difficulty: 3, points: 3,
      q: 'Welche Aussagen zur Bürgschaft sind **richtig**? (Mehrfachauswahl)',
      options: [
        'Die Bürgschaftserklärung einer Privatperson muss schriftlich erfolgen; per E-Mail ist sie nicht wirksam erteilt.',
        'Ein Kaufmann, für den die Bürgschaft ein Handelsgeschäft ist, kann sich auch mündlich verbürgen.',
        'Ein Kaufmann kann sich bei einer Bürgschaft, die für ihn ein Handelsgeschäft ist, auf die Einrede der Vorausklage berufen.',
        'Bei der selbstschuldnerischen Bürgschaft kann die Bank sofort den Bürgen in Anspruch nehmen.',
        'Durch die Bürgschaft wird der Bürge Eigentümer des finanzierten Lkw.'
      ],
      correct: [0, 1, 3],
      hints: ['Vergleiche § 766 BGB mit §§ 349, 350 HGB.', 'Die Bürgschaft ist eine Personalsicherheit, keine Sachsicherheit.'],
      solution: 'Richtig sind A, B und D. A: Schriftform, elektronische Form ausgeschlossen (§ 766 BGB). B: Für Kaufleute gilt die Schriftform nicht, wenn die Bürgschaft für sie ein Handelsgeschäft ist (§ 350 HGB). C ist falsch: Diesen Kaufleuten steht die Einrede der Vorausklage **nicht** zu (§ 349 HGB). D: Selbstschuldnerische Bürgschaft = Verzicht auf die Einrede (§ 773 Abs. 1 Nr. 1 BGB). E ist falsch: Der Bürge haftet mit seinem Vermögen, er erwirbt kein Eigentum.'
    },
    {
      id: 'lf08-finanzierung-a9', type: 'text', difficulty: 2, points: 4,
      q: 'Der Geschäftsführer der Saar-Trans Spedition GmbH überlegt, den Fuhrpark künftig zu leasen statt zu kaufen. Nenne je zwei Vor- und Nachteile des Leasings für die Spedition.',
      model: 'Vorteile: Die Liquidität bleibt erhalten, weil kein hoher Kaufpreis auf einmal bezahlt werden muss. Die Leasingraten sind fest und gut planbar. Außerdem bleibt der Fuhrpark modern, weil die Fahrzeuge nach der Laufzeit gegen neue getauscht werden. Nachteile: Leasing ist über die Laufzeit meist teurer als ein Kauf, weil der Leasinggeber Zinsen, Risiko und Gewinn einkalkuliert. Die Spedition wird nicht Eigentümer und hat am Ende keinen Restwert. Außerdem ist sie an die Grundmietzeit und an Vertragsauflagen gebunden.',
      criteria: [
        { text: 'nennt Liquidität/Kapitalbedarf als Vorteil', keywords: ['Liquidität|Kapital|kein hoher Kaufpreis|Eigenkapital'], points: 1 },
        { text: 'nennt einen weiteren Vorteil (planbare Raten, moderner Fuhrpark, Service)', keywords: ['planbar|feste Raten|modern|neu|Service|Wartung'], points: 1 },
        { text: 'nennt höhere Kosten als Nachteil', keywords: ['teurer|höhere Kosten|Gesamtkosten'], points: 1 },
        { text: 'nennt fehlendes Eigentum oder Vertragsbindung als Nachteil', keywords: ['Eigentum|Restwert|Grundmietzeit|gebunden|Bindung|Auflagen'], points: 1 }
      ],
      hints: ['Denke an das Bankkonto der Spedition und an den technischen Stand der Lkw.', 'Wem gehört der Lkw am Ende, und was kostet das Leasing insgesamt?'],
      solution: '**Vorteile:** Liquidität bleibt erhalten; feste, planbare Raten; moderner Fuhrpark; ggf. Service enthalten; meist keine zusätzlichen Sicherheiten. **Nachteile:** meist höhere Gesamtkosten; kein Eigentum und kein Restwert; Bindung an Grundmietzeit und Vertragsauflagen (z. B. Kilometerbegrenzung, Rückgabezustand).'
    },
    {
      id: 'lf08-finanzierung-a10', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Schritte einer Kreditfinanzierung für einen neuen Lkw in die richtige Reihenfolge.',
      items: [
        'Finanzierungsbedarf ermitteln (Kaufpreis − Eigenmittel)',
        'Kreditangebote mehrerer Banken einholen und vergleichen',
        'Kreditwürdigkeitsprüfung durch die Bank (Bilanzen, Auftragslage)',
        'Kreditvertrag und Sicherungsübereignungsvertrag unterschreiben',
        'Auszahlung an den Lkw-Händler, danach Zins- und Tilgungszahlungen'
      ],
      hints: ['Bevor man Angebote einholt, muss man wissen, wie viel Geld man braucht.', 'Die Bank zahlt erst aus, wenn Vertrag und Sicherheiten stehen.'],
      solution: 'Bedarf ermitteln → Angebote vergleichen → Kreditwürdigkeitsprüfung → Kredit- und Sicherungsvertrag → Auszahlung und Rückzahlung. Die Bank prüft vor dem Vertragsschluss, ob die Spedition den Kredit zurückzahlen kann, und sichert sich durch die Sicherungsübereignung des Lkw ab.'
    },
    {
      id: 'lf08-finanzierung-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Bliesgau Logistik e.K. kauft eine Regalanlage auf Raten unter Eigentumsvorbehalt. Nach der 8. Rate zahlt sie nicht mehr. Was darf der Verkäufer?',
      options: [
        'Die Regalanlage sofort ohne Weiteres abbauen, auch ohne Rücktritt.',
        'Die Regalanlage aufgrund des Eigentumsvorbehalts nur herausverlangen, wenn er vom Vertrag zurückgetreten ist.',
        'Nichts, weil die Spedition durch die Lieferung Eigentümerin geworden ist.',
        'Die Regalanlage behalten und zusätzlich alle restlichen Raten verlangen.'
      ],
      correct: [1],
      hints: ['Lies § 449 Abs. 2 BGB.', 'Wer ist bis zur letzten Rate Eigentümer?'],
      solution: 'Richtig ist B. Der Verkäufer bleibt Eigentümer (§ 449 Abs. 1 BGB), kann die Sache aber aufgrund des Eigentumsvorbehalts **nur nach Rücktritt** vom Vertrag herausverlangen (§ 449 Abs. 2 BGB). Bei einem Rücktritt werden die Leistungen rückabgewickelt; er kann nicht gleichzeitig Ware und volle Zahlung behalten.'
    },
    {
      id: 'lf08-finanzierung-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Neue Sattelzugmaschine für die Saar-Trans Spedition GmbH',
      intro: `Die Saar-Trans Spedition GmbH will eine Sattelzugmaschine anschaffen: Kaufpreis **120.000 €** netto, geplante Nutzung **4 Jahre**, danach erwarteter Restwert **40.000 €**. Es liegen drei Angebote vor (alle Werte sind Beispielwerte):

| Variante | Bedingungen |
|---|---|
| A Bankkredit | 120.000 €, 4 Jahre, Ratentilgung, 5 % p. a., keine Gebühren |
| B Ratenkauf beim Händler | 20.000 € Anzahlung, 48 Monatsraten à 2.450 € |
| C Finanzierungsleasing | 48 Monatsraten à 2.150 €, keine Sonderzahlung, Rückgabe nach 4 Jahren |

Steuern, Versicherung und Wartung sind bei allen Varianten gleich und bleiben unberücksichtigt. Bei A und B gehört der Lkw am Ende der Spedition.`,
      hints: ['Die Zinsen für Variante A kennst du schon aus der Ratentilgungs-Aufgabe.', 'Den Restwert nur abziehen, wenn der Lkw am Ende der Spedition gehört.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf08-finanzierung-a12-1', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne die Nettokosten (Gesamtauszahlungen − Restwert im Eigentum) aller drei Varianten.',
          formula: 'Nettokosten = Summe aller Auszahlungen − Restwert (nur bei Eigentum)',
          fields: [
            { id: 'a', label: 'Nettokosten A Bankkredit', unit: '€', answer: 95000, tol: 0.01 },
            { id: 'b', label: 'Nettokosten B Ratenkauf', unit: '€', answer: 97600, tol: 0.01 },
            { id: 'c', label: 'Nettokosten C Leasing', unit: '€', answer: 103200, tol: 0.01 }
          ],
          hints: ['A: 120.000 € + Zinsen (6.000 + 4.500 + 3.000 + 1.500 €).', 'B: Anzahlung + 48 × 2.450 €; C: 48 × 2.150 €.'],
          solution: `**A Bankkredit:** Zinsen 6.000 € + 4.500 € + 3.000 € + 1.500 € = 15.000 €; Auszahlungen 120.000 € + 15.000 € = 135.000 €; − 40.000 € Restwert = **95.000 €**

**B Ratenkauf:** 20.000 € + 48 × 2.450 € = 20.000 € + 117.600 € = 137.600 €; − 40.000 € Restwert = **97.600 €**

**C Leasing:** 48 × 2.150 € = **103.200 €** (kein Restwert, der Lkw wird zurückgegeben)

Reihenfolge nach Kosten: A (95.000 €) < B (97.600 €) < C (103.200 €).`
        },
        {
          id: 'lf08-finanzierung-a12-2', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Aussagen sind für die Entscheidung **richtig**? (Mehrfachauswahl)',
          options: [
            'Nach den Kosten ist der Bankkredit am günstigsten.',
            'Leasing kann trotz höherer Kosten sinnvoll sein, wenn die Spedition ihre Kreditlinie für andere Investitionen frei halten und den Lkw nach 4 Jahren problemlos tauschen will.',
            'Der Restwert von 40.000 € ist sicher und muss nicht geprüft werden.',
            'Beim Bankkredit ist die Belastung im 1. Jahr am höchsten.'
          ],
          correct: [0, 1, 3],
          hints: ['Restwerte von Lkw hängen vom Gebrauchtmarkt ab.', 'Bei Ratentilgung sinken die Zinsen von Jahr zu Jahr.'],
          solution: 'Richtig sind A, B und D. A: 95.000 € sind die niedrigsten Nettokosten. B: Leasing schont Kreditrahmen und Liquidität und erleichtert den Fahrzeugtausch – qualitative Gründe können die Mehrkosten rechtfertigen. D: Bei Ratentilgung ist die Belastung im 1. Jahr mit 36.000 € am höchsten. C ist falsch: Der Restwert ist eine **Schätzung**; fällt er niedriger aus, werden A und B teurer.'
        },
        {
          id: 'lf08-finanzierung-a12-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Die Spedition wählt den Bankkredit. Welche Kreditsicherheit ist für die Bank am naheliegendsten?',
          options: [
            'Eigentumsvorbehalt der Bank',
            'Sicherungsübereignung der Sattelzugmaschine an die Bank',
            'Die Bank behält den Lkw auf ihrem Parkplatz, bis der Kredit getilgt ist.',
            'Keine, weil Lkw nicht als Sicherheit taugen.'
          ],
          correct: [1],
          hints: ['Die Spedition braucht den Lkw jeden Tag im Einsatz.', 'Einen Eigentumsvorbehalt vereinbart nur ein Verkäufer.'],
          solution: 'Richtig ist B. Bei der **Sicherungsübereignung** (§ 930 BGB) wird die Bank Eigentümerin, die Spedition bleibt Besitzerin und setzt den Lkw weiter ein; die Bank verwahrt die Zulassungsbescheinigung Teil II. Ein **Eigentumsvorbehalt** setzt voraus, dass die Bank Verkäuferin ist (A falsch). Eine Übergabe an die Bank (C) würde die Nutzung verhindern.'
        }
      ]
    }
  ],
  quiz: ['lf08-finanzierung-a2', 'lf08-finanzierung-a3', 'lf08-finanzierung-a5', 'lf08-finanzierung-a8', 'lf08-finanzierung-a12'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 8, Inhalte: Ratenzahlung, Leasing, Bankfinanzierung; Ziel: Finanzierungsbedarf ermitteln und Finanzierungsart auswählen' },
    { title: 'Bürgerliches Gesetzbuch § 765 Vertragstypische Pflichten bei der Bürgschaft', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__765.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 766 Schriftform der Bürgschaftserklärung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__766.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 771 Einrede der Vorausklage', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__771.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 773 Ausschluss der Einrede der Vorausklage', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__773.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 349 Keine Einrede der Vorausklage', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__349.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 350 Formfreiheit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__350.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 929 Einigung und Übergabe', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__929.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 930 Besitzkonstitut', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__930.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 449 Eigentumsvorbehalt', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__449.html', asOf: '2026' },
    { title: 'Preisangabenverordnung § 16 Angabe des effektiven Jahreszinses', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/pangv_2022/__16.html', asOf: '2026' }
  ],
  links: ['lf08-angebotsvergleich', 'lf08-stoerungen', 'lf03-inventur-bilanz']
};
