export default {
  id: 'lf07-kostenarten',
  area: 'LF07',
  topic: 'lf07-kostenarten',
  title: 'Kostenarten-, Kostenstellen- und Kostenträgerrechnung',
  status: 'vollstaendig',
  minutes: 50,
  validity: null,
  goals: [
    'Ich kann Aufwand und Kosten voneinander abgrenzen und neutrale Aufwendungen erkennen.',
    'Ich kann Grundkosten, Anderskosten und Zusatzkosten unterscheiden und kalkulatorische Kosten berechnen.',
    'Ich kann Einzelkosten und Gemeinkosten sowie fixe und variable Kosten in einer Spedition unterscheiden.',
    'Ich kann Gemeinkosten mit Verteilungsschlüsseln in einem einfachen Betriebsabrechnungsbogen (BAB) auf Kostenstellen verteilen.',
    'Ich kann Zuschlagssätze aus dem BAB ermitteln.',
    'Ich kann mit der Zuschlagskalkulation einen Angebotspreis für einen Speditionsauftrag berechnen.'
  ],
  simple: `# Worum geht es?

Eine Spedition muss wissen, **was ihre Leistungen kosten**. Nur dann kann sie Preise kalkulieren, die alle Kosten decken und einen Gewinn bringen. Dafür gibt es die **Kosten- und Leistungsrechnung (KLR)**. Sie läuft in drei Schritten ab:

1. **Kostenartenrechnung** – *Welche* Kosten sind entstanden? (z. B. Personal, Diesel, Miete, Abschreibungen)
2. **Kostenstellenrechnung** – *Wo* sind die Kosten entstanden? (z. B. Fuhrpark, Lager, Sammelgut, Verwaltung)
3. **Kostenträgerrechnung** – *Wofür* sind die Kosten entstanden? (z. B. für eine Sammelgutsendung, einen Lagerauftrag, eine Tour)

# Aufwand ist nicht gleich Kosten

- **Aufwand** ist jeder Werteverzehr, der in der Finanzbuchhaltung (Gewinn- und Verlustrechnung) gebucht wird.
- **Kosten** sind nur der Werteverzehr, der durch die **eigentliche betriebliche Leistung** (Spedieren, Transportieren, Lagern) entsteht.

Eine Spende an den Sportverein ist Aufwand, aber keine Kosten. Sie hat mit dem Speditionsgeschäft nichts zu tun. Solche Aufwendungen heißen **neutrale Aufwendungen**.

# Einzelkosten und Gemeinkosten

- **Einzelkosten** kann man einem Auftrag direkt zuordnen, z. B. die Rechnung des Frachtführers für genau diese Sendung.
- **Gemeinkosten** entstehen für viele Aufträge gemeinsam, z. B. Miete der Umschlaghalle, Gehälter in der Buchhaltung, Software. Sie werden über Kostenstellen und **Zuschläge** verteilt.

# Fixe und variable Kosten

- **Fixe Kosten** bleiben gleich, egal wie viel gefahren oder umgeschlagen wird (Miete, Versicherung, Gehälter).
- **Variable Kosten** steigen mit der Leistung (Diesel je km, Verpackung je Palette).`,
  deep: `# Abgrenzung von Aufwand und Kosten

| Finanzbuchhaltung | | Kosten- und Leistungsrechnung |
|---|---|---|
| **neutraler Aufwand** | Zweckaufwand = **Grundkosten** | **Zusatzkosten** |
| | Aufwand ≠ Kosten in der Höhe → **Anderskosten** | |

**Neutrale Aufwendungen** werden nicht in die Kostenrechnung übernommen. Man unterscheidet:
- **betriebsfremd**: hat mit dem Betriebszweck nichts zu tun (Spende, Kursverlust bei Wertpapieren),
- **außerordentlich**: ungewöhnlich und selten (Verlust beim Verkauf eines Lkw unter Buchwert, nicht versicherter Brandschaden),
- **periodenfremd**: betrifft ein anderes Geschäftsjahr (Steuernachzahlung für das Vorjahr).

**Grundkosten** sind Aufwendungen, die genau so auch Kosten sind (Fahrerlöhne, Diesel, Frachtkosten an Frachtführer, Miete).

**Kalkulatorische Kosten** sorgen dafür, dass die Kostenrechnung den *tatsächlichen* Werteverzehr zeigt:

| Kalkulatorische Kostenart | Art | Idee |
|---|---|---|
| kalkulatorische Abschreibung | Anderskosten | vom **Wiederbeschaffungswert** statt vom Anschaffungswert, über die tatsächliche Nutzungsdauer |
| kalkulatorische Zinsen | Anderskosten | Zinsen auf das **gesamte betriebsnotwendige Kapital**, also auch auf das Eigenkapital |
| kalkulatorischer Unternehmerlohn | Zusatzkosten | Arbeitsleistung des Inhabers einer Einzelunternehmung oder Personengesellschaft, die kein Gehalt erhält |
| kalkulatorische Wagnisse | Anderskosten | durchschnittliche Schadensfälle (z. B. Transportschäden) statt zufälliger Einzelschäden |

> Kosten = Aufwand − neutrale Aufwendungen − in der Höhe abweichende Aufwendungen + Anderskosten + Zusatzkosten

# Kostenstellenrechnung mit dem BAB

Im **Betriebsabrechnungsbogen (BAB)** stehen die Gemeinkostenarten in den Zeilen und die Kostenstellen in den Spalten. Typische Kostenstellen einer Spedition:

- **Fuhrpark** (eigene Lkw, Werkstatt),
- **Lager** (Kontraktlogistik, Lagerung),
- **Sammelgut / Umschlag** (Umschlaghalle, Vor- und Nachlauf-Disposition),
- **Verwaltung** (Geschäftsführung, Buchhaltung, EDV).

Gemeinkosten werden **direkt** nach Belegen (z. B. Lohnliste) oder **indirekt** über **Verteilungsschlüssel** verteilt:

| Gemeinkostenart | möglicher Schlüssel |
|---|---|
| Miete, Heizung, Reinigung | Fläche in m² |
| Strom | kWh (Zähler) oder installierte Leistung |
| kalkulatorische Abschreibungen, Zinsen | Anlagewerte je Kostenstelle |
| Sozialkosten, Kantine | Anzahl Mitarbeiter oder Lohnsumme |

# Zuschlagssätze

> **Zuschlagssatz = Gemeinkosten der Kostenstelle ÷ Zuschlagsgrundlage × 100**

Zuschlagsgrundlage sind meist die **Einzelkosten** der Kostenstelle (z. B. Fremdfrachtkosten im Sammelgut). Die Verwaltungsgemeinkosten werden oft auf die **Herstellkosten der Leistung** (Einzelkosten + Gemeinkosten der Leistungsstellen) bezogen.

# Kostenträgerrechnung: Zuschlagskalkulation

| Schema | |
|---|---|
| Einzelkosten des Auftrags | z. B. Vor-, Haupt-, Nachlauf |
| + Gemeinkosten der Leistungsstelle (in % der Einzelkosten) | |
| = Herstellkosten der Leistung | |
| + Verwaltungsgemeinkosten (in % der Herstellkosten) | |
| = **Selbstkosten** | |
| + Gewinnzuschlag (in % der Selbstkosten) | |
| = **Angebotspreis (netto)** | |

Man unterscheidet die **Kostenträgerstückrechnung** (Kalkulation eines einzelnen Auftrags) und die **Kostenträgerzeitrechnung** (Kosten und Leistungen aller Aufträge einer Periode, z. B. eines Monats).

# Fixe und variable Kosten

Die Gesamtkosten lassen sich als **Kostenfunktion** schreiben: **K = K(fix) + k(var) × x** (x = Leistungsmenge, z. B. km). Je mehr geleistet wird, desto kleiner werden die fixen Kosten je Einheit (**Fixkostendegression**). Darauf baut die Deckungsbeitragsrechnung auf.`,
  terms: [
    { term: 'Aufwand', def: 'Gesamter in der Finanzbuchhaltung erfasster Werteverzehr einer Periode, auch wenn er nichts mit dem Betriebszweck zu tun hat.' },
    { term: 'Kosten', def: 'Bewerteter Verbrauch von Gütern und Dienstleistungen zur Erstellung der betrieblichen Leistung (Spedieren, Transportieren, Lagern).' },
    { term: 'Neutraler Aufwand', def: 'Aufwand, der keine Kosten ist: betriebsfremd, außerordentlich oder periodenfremd.' },
    { term: 'Grundkosten', def: 'Kosten, denen ein Aufwand in gleicher Höhe gegenübersteht (Zweckaufwand), z. B. Fahrerlöhne, Diesel, Fremdfrachten.' },
    { term: 'Anderskosten', def: 'Kosten, die in anderer Höhe als der Aufwand angesetzt werden, z. B. kalkulatorische Abschreibung vom Wiederbeschaffungswert.' },
    { term: 'Zusatzkosten', def: 'Kosten, denen kein Aufwand gegenübersteht, z. B. kalkulatorischer Unternehmerlohn.' },
    { term: 'Einzelkosten', def: 'Kosten, die einem Kostenträger (Auftrag, Sendung) direkt zugerechnet werden können, z. B. Frachtführerrechnung für eine Sendung.' },
    { term: 'Gemeinkosten', def: 'Kosten, die für mehrere Kostenträger gemeinsam entstehen und über Kostenstellen und Zuschläge verteilt werden, z. B. Hallenmiete.' },
    { term: 'Kostenstelle', def: 'Betrieblicher Bereich, in dem Kosten entstehen und verantwortet werden, z. B. Fuhrpark, Lager, Sammelgut, Verwaltung.' },
    { term: 'Kostenträger', def: 'Betriebliche Leistung, die die Kosten tragen muss, z. B. Sammelgutsendung, Lagerauftrag, Komplettladung.' },
    { term: 'Betriebsabrechnungsbogen (BAB)', def: 'Tabelle zur Verteilung der Gemeinkosten auf die Kostenstellen und zur Ermittlung der Zuschlagssätze.' },
    { term: 'Verteilungsschlüssel', def: 'Maßgröße, nach der Gemeinkosten verteilt werden, z. B. m², kWh, Anlagewerte, Mitarbeiterzahl.' },
    { term: 'Zuschlagssatz', def: 'Gemeinkosten einer Kostenstelle in Prozent ihrer Zuschlagsgrundlage (meist Einzelkosten).' }
  ],
  example: `# Saar-Trans Spedition GmbH – BAB für das Jahr 2025 (Beispielzahlen)

Die Spedition hat 660.000 € Gemeinkosten. Sie werden so verteilt:

| Gemeinkostenart | Summe € | Schlüssel | Fuhrpark | Lager | Sammelgut | Verwaltung |
|---|---:|---|---:|---:|---:|---:|
| Gehälter/Hilfslöhne | 240.000 | Lohnliste (direkt) | 40.000 | 80.000 | 60.000 | 60.000 |
| Miete Gebäude | 120.000 | 1.000 : 4.000 : 2.500 : 500 m² | 15.000 | 60.000 | 37.500 | 7.500 |
| Energie | 48.000 | 2 : 5 : 4 : 1 | 8.000 | 20.000 | 16.000 | 4.000 |
| kalk. Abschreibungen | 180.000 | Anlagewerte 600 : 300 : 180 : 120 Tsd. € | 90.000 | 45.000 | 27.000 | 18.000 |
| Sonstige Gemeinkosten | 72.000 | Mitarbeiter 3 : 4 : 3 : 2 | 18.000 | 24.000 | 18.000 | 12.000 |
| **Summe** | **660.000** | | **171.000** | **229.000** | **158.500** | **101.500** |

**So wurde gerechnet (Beispiel Miete):** 120.000 € ÷ 8.000 m² = 15 €/m²; Lager: 4.000 m² × 15 €/m² = 60.000 €.

# Zuschlagssätze

| Kostenstelle | Gemeinkosten | Zuschlagsgrundlage | Zuschlagssatz |
|---|---:|---|---:|
| Fuhrpark | 171.000 € | Einzelkosten (Fahrerlöhne, Diesel) 570.000 € | 30 % |
| Lager | 229.000 € | Einzelkosten Lager 458.000 € | 50 % |
| Sammelgut | 158.500 € | Fremdfrachten Vor-/Haupt-/Nachlauf 634.000 € | 25 % |
| Verwaltung | 101.500 € | Herstellkosten 2.220.500 € | rund 4,57 % |

Herstellkosten = 570.000 + 171.000 + 458.000 + 229.000 + 634.000 + 158.500 = 2.220.500 €.

# Kalkulation einer Sammelgutsendung

Einzelkosten: Vorlauf 120 €, Hauptlauf 380 €, Nachlauf 100 € = 600 €. Mit 25 % Sammelgut-Gemeinkosten ergeben sich 150 €, also Herstellkosten von 750 €. Darauf kommen die Verwaltungsgemeinkosten und ein Gewinnzuschlag.`,
  rules: [
    'Nicht jeder Aufwand ist Kosten: Neutrale Aufwendungen (betriebsfremd, außerordentlich, periodenfremd) bleiben draußen.',
    'Kalkulatorische Abschreibung vom Wiederbeschaffungswert, kalkulatorische Zinsen auf das betriebsnotwendige Kapital.',
    'Erst Kostenarten (welche?), dann Kostenstellen (wo?), dann Kostenträger (wofür?).',
    'Einzelkosten direkt auf den Auftrag, Gemeinkosten über den BAB und Zuschläge.',
    'Zuschlagssatz = Gemeinkosten ÷ Zuschlagsgrundlage × 100.',
    'Der Gewinnzuschlag wird auf die Selbstkosten gerechnet, nicht auf die Einzelkosten.',
    'Einzel-/Gemeinkosten fragt nach der Zurechenbarkeit, fix/variabel nach der Abhängigkeit von der Leistungsmenge.'
  ],
  summary: `- **Kostenartenrechnung**: Aufwand − neutraler Aufwand = Zweckaufwand (Grundkosten); dazu kommen **Anderskosten** (z. B. kalk. Abschreibung, kalk. Zinsen) und **Zusatzkosten** (z. B. kalk. Unternehmerlohn).
- **Kostenstellenrechnung**: Gemeinkosten werden im **BAB** direkt oder mit **Verteilungsschlüsseln** (m², kWh, Anlagewerte, Mitarbeiter) auf Fuhrpark, Lager, Sammelgut und Verwaltung verteilt.
- **Zuschlagssatz** = Gemeinkosten ÷ Einzelkosten × 100.
- **Kostenträgerrechnung (Zuschlagskalkulation)**: Einzelkosten + Gemeinkostenzuschlag = Herstellkosten; + Verwaltungsgemeinkosten = Selbstkosten; + Gewinn = Angebotspreis.
- **Fix/variabel**: K = K(fix) + k(var) × x; mit steigender Leistung sinken die Fixkosten je Einheit.`,
  mistakes: [
    { wrong: 'Die Spende an den Sportverein wird in die Gemeinkosten der Verwaltung übernommen.', right: 'Die Spende ist betriebsfremder neutraler Aufwand und wird in der Kostenrechnung nicht erfasst.' },
    { wrong: 'Die kalkulatorische Abschreibung wird vom Anschaffungswert berechnet.', right: 'Kalkulatorisch wird vom Wiederbeschaffungswert abgeschrieben, damit die Ersatzbeschaffung aus den Erlösen finanziert werden kann.' },
    { wrong: 'Gemeinkosten sind dasselbe wie fixe Kosten.', right: 'Gemeinkosten können auch variabel sein (z. B. Strom der Umschlaghalle). Die Begriffe beschreiben unterschiedliche Merkmale: Zurechenbarkeit bzw. Abhängigkeit von der Menge.' },
    { wrong: 'Der Gewinnzuschlag wird auf die Einzelkosten aufgeschlagen.', right: 'Der Gewinnzuschlag wird auf die Selbstkosten (alle Kosten des Auftrags) berechnet.' },
    { wrong: 'Kalkulatorische Zinsen werden nur auf Bankkredite berechnet.', right: 'Kalkulatorische Zinsen werden auf das gesamte betriebsnotwendige Kapital berechnet, also auch auf das Eigenkapital.' }
  ],
  flashcards: [
    { q: 'Welche drei Stufen hat die Kostenrechnung?', a: 'Kostenartenrechnung (welche Kosten?), Kostenstellenrechnung (wo?), Kostenträgerrechnung (wofür?).' },
    { q: 'Welche drei Arten neutraler Aufwendungen gibt es?', a: 'Betriebsfremde, außerordentliche und periodenfremde Aufwendungen.' },
    { q: 'Was sind Grundkosten?', a: 'Aufwendungen, die in gleicher Höhe Kosten sind (Zweckaufwand), z. B. Fahrerlöhne, Diesel, Fremdfrachten.' },
    { q: 'Nenne ein Beispiel für Zusatzkosten.', a: 'Kalkulatorischer Unternehmerlohn des Inhabers einer Einzelunternehmung.' },
    { q: 'Wovon wird die kalkulatorische Abschreibung berechnet?', a: 'Vom Wiederbeschaffungswert, verteilt auf die tatsächliche Nutzungsdauer.' },
    { q: 'Unterschied Einzelkosten – Gemeinkosten?', a: 'Einzelkosten sind einem Auftrag direkt zurechenbar, Gemeinkosten entstehen für viele Aufträge gemeinsam.' },
    { q: 'Wozu dient der BAB?', a: 'Zur Verteilung der Gemeinkosten auf die Kostenstellen und zur Ermittlung der Zuschlagssätze.' },
    { q: 'Welcher Verteilungsschlüssel passt für die Hallenmiete?', a: 'Die genutzte Fläche in m².' },
    { q: 'Wie lautet die Formel für den Zuschlagssatz?', a: 'Gemeinkosten der Kostenstelle ÷ Zuschlagsgrundlage × 100.' },
    { q: 'Wie lautet das Schema der Zuschlagskalkulation?', a: 'Einzelkosten + GK-Zuschlag = Herstellkosten; + Verwaltungs-GK = Selbstkosten; + Gewinn = Angebotspreis.' },
    { q: 'Was bedeutet Fixkostendegression?', a: 'Mit steigender Leistungsmenge sinken die fixen Kosten je Einheit, weil sie sich auf mehr Einheiten verteilen.' }
  ],
  tasks: [
    {
      id: 'lf07-kostenarten-a1', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche der folgenden Aufwendungen der Saar-Trans Spedition GmbH sind **neutrale Aufwendungen**? (Mehrfachauswahl)',
      options: [
        'Spende an den örtlichen Fußballverein',
        'Dieselkosten für die eigenen Lkw',
        'Verlust beim Verkauf einer Sattelzugmaschine unter Buchwert',
        'Miete für die Umschlaghalle',
        'Gewerbesteuernachzahlung für das Vorjahr'
      ],
      correct: [0, 2, 4],
      hints: ['Neutral heißt: hat nichts mit der laufenden Leistungserstellung dieses Jahres zu tun.', 'Denke an betriebsfremd, außerordentlich und periodenfremd.'],
      solution: 'Neutral sind die **Spende** (betriebsfremd), der **Verlust beim Lkw-Verkauf** (außerordentlich) und die **Steuernachzahlung für das Vorjahr** (periodenfremd). Diesel und Hallenmiete entstehen durch das laufende Speditionsgeschäft und sind **Grundkosten**.'
    },
    {
      id: 'lf07-kostenarten-a2', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne jedem Begriff das passende Beispiel aus einer Spedition zu.',
      pairs: [
        ['Grundkosten', 'Rechnung des Frachtführers für den Hauptlauf'],
        ['Anderskosten', 'Abschreibung des Lkw vom Wiederbeschaffungswert statt vom Anschaffungswert'],
        ['Zusatzkosten', 'Unternehmerlohn für den Inhaber einer Einzelunternehmung'],
        ['Neutraler Aufwand', 'Kursverlust bei Aktien, die die Spedition als Geldanlage hält']
      ],
      hints: ['Gibt es einen Aufwand in gleicher Höhe, in anderer Höhe oder gar keinen?', 'Neutraler Aufwand ist Aufwand ohne Kosten.'],
      solution: '**Grundkosten**: Aufwand = Kosten (Fremdfracht). **Anderskosten**: Kosten in anderer Höhe als der Aufwand (kalk. Abschreibung). **Zusatzkosten**: Kosten ohne Aufwand (kalk. Unternehmerlohn, der Inhaber erhält kein Gehalt). **Neutraler Aufwand**: Aufwand ohne Kosten (betriebsfremder Kursverlust).'
    },
    {
      id: 'lf07-kostenarten-a3', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Kosten, die einem Auftrag direkt zugerechnet werden können, heißen [[Einzelkosten]]. Kosten, die für viele Aufträge gemeinsam entstehen, heißen [[Gemeinkosten]]. Sie werden im [[Betriebsabrechnungsbogen|BAB]] auf die Kostenstellen verteilt. Die Hallenmiete wird dabei meist nach der [[Fläche|Quadratmeter|m²|qm]] verteilt.',
      hints: ['Direkt zurechenbar oder nicht?', 'Welche Maßgröße passt zu einer Miete?'],
      solution: '**Einzelkosten** (direkt zurechenbar, z. B. Fremdfracht), **Gemeinkosten** (gemeinsam, z. B. Miete). Verteilung im **Betriebsabrechnungsbogen (BAB)**; Miete nach **Fläche (m²)**.'
    },
    {
      id: 'lf07-kostenarten-a4', type: 'mc', difficulty: 1, points: 1,
      q: 'Welche Kosten der Kostenstelle Lager sind **fixe Kosten**?',
      options: ['Stretchfolie je kommissionierter Palette', 'Miete für das Hochregallager', 'Strom für Gabelstapler je Betriebsstunde', 'Aushilfslöhne je Lagerauftrag'],
      correct: [1],
      hints: ['Fixe Kosten ändern sich nicht mit der Menge.', 'Welche Kosten fallen auch an, wenn kein Auftrag kommt?'],
      solution: 'Die **Miete** ist fix: Sie fällt jeden Monat in gleicher Höhe an, egal wie viele Paletten bewegt werden. Folie, Staplerstrom und Aushilfslöhne je Auftrag steigen mit der Menge und sind **variabel**.'
    },
    {
      id: 'lf07-kostenarten-a5', type: 'calc', difficulty: 2, points: 3,
      q: `Die Bliesgau Logistik e.K. weist in der Gewinn- und Verlustrechnung 2025 Aufwendungen von **2.400.000 €** aus. Darin enthalten sind:

- neutrale Aufwendungen (Spende, Verlust aus Anlagenverkauf, Steuernachzahlung Vorjahr): 25.000 €
- bilanzielle Abschreibungen: 150.000 €
- Zinsaufwand für Darlehen: 30.000 €

In der Kostenrechnung werden angesetzt: kalkulatorische Abschreibungen 170.000 €, kalkulatorische Zinsen 45.000 €, kalkulatorischer Unternehmerlohn 60.000 €.

Berechne die Grundkosten (Aufwand ohne neutrale Aufwendungen, bilanzielle Abschreibungen und Zinsaufwand), die kalkulatorischen Kosten und die gesamten Kosten.`,
      formula: 'Kosten = Grundkosten + kalkulatorische Kosten',
      fields: [
        { id: 'grund', label: 'Grundkosten', unit: '€', answer: 2195000, tol: 0.01 },
        { id: 'kalk', label: 'Kalkulatorische Kosten', unit: '€', answer: 275000, tol: 0.01 },
        { id: 'kosten', label: 'Gesamte Kosten', unit: '€', answer: 2470000, tol: 0.01 }
      ],
      hints: ['Ziehe vom Aufwand alles ab, was nicht oder in anderer Höhe in die Kostenrechnung eingeht.', 'Die kalkulatorischen Werte ersetzen die bilanziellen Werte; der Unternehmerlohn kommt zusätzlich dazu.'],
      solution: `**Formel:** Kosten = (Aufwand − neutrale Aufwendungen − bilanzielle Abschreibungen − Zinsaufwand) + kalkulatorische Kosten

**Grundkosten:** 2.400.000 € − 25.000 € − 150.000 € − 30.000 € = **2.195.000 €**

**Kalkulatorische Kosten:** 170.000 € + 45.000 € + 60.000 € = **275.000 €**

**Kosten:** 2.195.000 € + 275.000 € = **2.470.000 €**

Begründung: Abschreibungen und Zinsen werden durch die kalkulatorischen Werte (Anderskosten) ersetzt, der Unternehmerlohn ist Zusatzkosten, die neutralen Aufwendungen entfallen.`
    },
    {
      id: 'lf07-kostenarten-a6', type: 'calc', difficulty: 2, points: 3,
      q: `Für den Fuhrpark der Bliesgau Logistik e.K. gilt (Beispielzahlen):

- Wiederbeschaffungswert der Fahrzeuge: 850.000 €, Nutzungsdauer 5 Jahre (lineare Abschreibung)
- betriebsnotwendiges Kapital des Unternehmens: 750.000 €, kalkulatorischer Zinssatz 6 %

Berechne die kalkulatorische Abschreibung, die kalkulatorischen Zinsen und die Summe beider kalkulatorischer Kosten je Jahr.`,
      formula: 'kalk. AfA = Wiederbeschaffungswert ÷ Nutzungsdauer; kalk. Zinsen = betriebsnotwendiges Kapital × Zinssatz',
      fields: [
        { id: 'afa', label: 'Kalkulatorische Abschreibung', unit: '€/Jahr', answer: 170000, tol: 0.01 },
        { id: 'zins', label: 'Kalkulatorische Zinsen', unit: '€/Jahr', answer: 45000, tol: 0.01 },
        { id: 'summe', label: 'Summe', unit: '€/Jahr', answer: 215000, tol: 0.01 }
      ],
      hints: ['Teile den Wiederbeschaffungswert durch die Jahre.', '6 % von 750.000 €.'],
      solution: `**Kalkulatorische Abschreibung:** 850.000 € ÷ 5 Jahre = **170.000 € je Jahr**

**Kalkulatorische Zinsen:** 750.000 € × 6 % = 750.000 € × 0,06 = **45.000 € je Jahr**

**Summe:** 170.000 € + 45.000 € = **215.000 €**

Begründung: Der Wiederbeschaffungswert sichert, dass über die Preise genug Geld für einen neuen Lkw verdient wird. Zinsen werden auch auf das Eigenkapital angesetzt, weil es anderswo Zinsen bringen könnte.`
    },
    {
      id: 'lf07-kostenarten-a7', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Gebäudemiete von **120.000 €** soll nach Fläche verteilt werden: Fuhrpark 1.000 m², Lager 4.000 m², Sammelgut 2.500 m², Verwaltung 500 m². Berechne den Mietanteil je m² und den Anteil der Kostenstelle **Sammelgut**.',
      formula: 'Anteil = Gesamtkosten ÷ Summe der Schlüsseleinheiten × Schlüsseleinheiten der Kostenstelle',
      fields: [
        { id: 'jeqm', label: 'Miete je m²', unit: '€/m²', answer: 15, tol: 0.01 },
        { id: 'sg', label: 'Mietanteil Sammelgut', unit: '€', answer: 37500, tol: 0.01 }
      ],
      hints: ['Addiere zuerst alle Flächen.', 'Multipliziere den Wert je m² mit der Fläche des Sammelguts.'],
      solution: `**Summe Fläche:** 1.000 + 4.000 + 2.500 + 500 = 8.000 m²

**Miete je m²:** 120.000 € ÷ 8.000 m² = **15 €/m²**

**Sammelgut:** 2.500 m² × 15 €/m² = **37.500 €**

Probe: 15.000 € + 60.000 € + 37.500 € + 7.500 € = 120.000 €.`
    },
    {
      id: 'lf07-kostenarten-a8', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Arbeitsschritte von der Kostenerfassung bis zum Angebotspreis in die richtige Reihenfolge.',
      items: [
        'Kosten aus der Buchhaltung übernehmen, neutrale Aufwendungen abgrenzen und kalkulatorische Kosten ansetzen',
        'Einzelkosten und Gemeinkosten trennen',
        'Gemeinkosten im BAB auf Kostenstellen verteilen und Zuschlagssätze berechnen',
        'Angebotspreis eines Auftrags mit der Zuschlagskalkulation ermitteln'
      ],
      hints: ['Kostenarten → Kostenstellen → Kostenträger.', 'Zuschlagssätze braucht man, bevor man kalkulieren kann.'],
      solution: '1. **Kostenartenrechnung** (Abgrenzung, kalkulatorische Kosten) → 2. Trennung **Einzel-/Gemeinkosten** → 3. **Kostenstellenrechnung** im BAB mit Zuschlagssätzen → 4. **Kostenträgerrechnung** (Kalkulation des Auftrags).'
    },
    {
      id: 'lf07-kostenarten-a9', type: 'calc', difficulty: 3, points: 5,
      q: `Die Saar-Trans Spedition GmbH kalkuliert eine Sammelgutsendung von Saarbrücken nach Hamburg. Einzelkosten: Vorlauf 120 €, Hauptlauf 380 €, Nachlauf 100 €.

Zuschlagssätze: Sammelgut-Gemeinkosten **25 %** auf die Einzelkosten, Verwaltungsgemeinkosten **5 %** auf die Herstellkosten, Gewinnzuschlag **10 %** auf die Selbstkosten.

Berechne den Nettoangebotspreis.`,
      formula: 'Einzelkosten + GK-Zuschlag = Herstellkosten; + Verwaltungs-GK = Selbstkosten; + Gewinn = Angebotspreis',
      fields: [
        { id: 'gk', label: 'Sammelgut-Gemeinkosten', unit: '€', answer: 150, tol: 0.01 },
        { id: 'hk', label: 'Herstellkosten', unit: '€', answer: 750, tol: 0.01 },
        { id: 'vw', label: 'Verwaltungsgemeinkosten', unit: '€', answer: 37.5, tol: 0.01 },
        { id: 'sk', label: 'Selbstkosten', unit: '€', answer: 787.5, tol: 0.01 },
        { id: 'preis', label: 'Angebotspreis netto', unit: '€', answer: 866.25, tol: 0.01 }
      ],
      hints: ['Einzelkosten: 120 + 380 + 100.', 'Jeder Zuschlag bezieht sich auf das Zwischenergebnis davor.'],
      solution: `**Einzelkosten:** 120 € + 380 € + 100 € = 600 €

| Schritt | Rechnung | € |
|---|---|---:|
| Einzelkosten | | 600,00 |
| + Sammelgut-GK 25 % | 600 × 0,25 | 150,00 |
| = Herstellkosten | | 750,00 |
| + Verwaltungs-GK 5 % | 750 × 0,05 | 37,50 |
| = Selbstkosten | | 787,50 |
| + Gewinn 10 % | 787,50 × 0,10 | 78,75 |
| = **Angebotspreis netto** | | **866,25** |`
    },
    {
      id: 'lf07-kostenarten-a10', type: 'calc', difficulty: 2, points: 3,
      q: 'Der Fuhrpark einer Spedition hat fixe Kosten von **96.000 €** je Jahr und variable Kosten von **0,62 €/km**. Berechne die Gesamtkosten und die Kosten je km bei 120.000 km sowie die Kosten je km bei 150.000 km.',
      formula: 'K = K(fix) + k(var) × x; Kosten je km = K ÷ x',
      fields: [
        { id: 'k120', label: 'Gesamtkosten bei 120.000 km', unit: '€', answer: 170400, tol: 0.01 },
        { id: 'km120', label: 'Kosten je km bei 120.000 km', unit: '€/km', answer: 1.42, tol: 0.005 },
        { id: 'km150', label: 'Kosten je km bei 150.000 km', unit: '€/km', answer: 1.26, tol: 0.005 }
      ],
      hints: ['Variable Kosten = 0,62 €/km × gefahrene km.', 'Die fixen Kosten bleiben bei 96.000 €.'],
      solution: `**Formel:** K = K(fix) + k(var) × x

**120.000 km:** 96.000 € + 0,62 €/km × 120.000 km = 96.000 € + 74.400 € = **170.400 €**; je km: 170.400 € ÷ 120.000 km = **1,42 €/km**

**150.000 km:** 96.000 € + 0,62 €/km × 150.000 km = 96.000 € + 93.000 € = 189.000 €; je km: 189.000 € ÷ 150.000 km = **1,26 €/km**

Die Kosten je km sinken, weil sich die fixen Kosten auf mehr Kilometer verteilen (**Fixkostendegression**: 0,80 €/km statt 0,64 €/km Fixkostenanteil).`
    },
    {
      id: 'lf07-kostenarten-a11', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: BAB der Saar-Trans Spedition GmbH',
      intro: `Die Saar-Trans Spedition GmbH verteilt ihre Gemeinkosten 2025 auf die Kostenstellen Fuhrpark, Lager, Sammelgut und Verwaltung (Beispielzahlen):

| Gemeinkostenart | Summe € | Verteilung |
|---|---:|---|
| Gehälter/Hilfslöhne | 240.000 | direkt: 40.000 / 80.000 / 60.000 / 60.000 |
| Miete | 120.000 | m²: 1.000 / 4.000 / 2.500 / 500 |
| Energie | 48.000 | Schlüssel 2 : 5 : 4 : 1 |
| kalk. Abschreibungen | 180.000 | Anlagewerte 600.000 / 300.000 / 180.000 / 120.000 € |
| Sonstige | 72.000 | Mitarbeiter 3 : 4 : 3 : 2 |

Die Einzelkosten (Fremdfrachten) der Kostenstelle Sammelgut betragen 634.000 €.`,
      hints: ['Rechne für jede Zeile den Wert je Schlüsseleinheit aus.', 'Der Zuschlagssatz bezieht die Gemeinkosten auf die Einzelkosten.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf07-kostenarten-a11-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne für die Kostenstelle **Sammelgut** den Energieanteil, den Abschreibungsanteil und die Summe der Gemeinkosten.',
          formula: 'Anteil = Summe ÷ Schlüsselsumme × Schlüsselanteil',
          fields: [
            { id: 'en', label: 'Energie Sammelgut', unit: '€', answer: 16000, tol: 0.01 },
            { id: 'afa', label: 'Kalk. Abschreibungen Sammelgut', unit: '€', answer: 27000, tol: 0.01 },
            { id: 'sum', label: 'Gemeinkosten Sammelgut gesamt', unit: '€', answer: 158500, tol: 0.01 }
          ],
          hints: ['Energie: 48.000 € ÷ 12 Teile.', 'Abschreibungen: 180.000 € sind 15 % der Anlagewerte von 1.200.000 €.'],
          solution: `**Energie:** 48.000 € ÷ (2 + 5 + 4 + 1 = 12) = 4.000 € je Teil; Sammelgut 4 × 4.000 € = **16.000 €**

**Abschreibungen:** 180.000 € ÷ 1.200.000 € = 0,15; Sammelgut 180.000 € × 0,15 = **27.000 €**

**Miete:** 120.000 € ÷ 8.000 m² = 15 €/m²; 2.500 m² × 15 €/m² = 37.500 €

**Sonstige:** 72.000 € ÷ 12 = 6.000 € je Mitarbeiteranteil; 3 × 6.000 € = 18.000 €

**Summe Sammelgut:** 60.000 + 37.500 + 16.000 + 27.000 + 18.000 = **158.500 €**`
        },
        {
          id: 'lf07-kostenarten-a11-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne den Gemeinkostenzuschlagssatz der Kostenstelle Sammelgut.',
          formula: 'Zuschlagssatz = Gemeinkosten ÷ Einzelkosten × 100',
          fields: [
            { id: 'zs', label: 'Zuschlagssatz Sammelgut', unit: '%', answer: 25, tol: 0.01 }
          ],
          hints: ['Gemeinkosten aus Teilaufgabe 1.', 'Einzelkosten: 634.000 €.'],
          solution: `**Zuschlagssatz:** 158.500 € ÷ 634.000 € × 100 = **25 %**

Bedeutung: Auf jeden Euro Fremdfracht im Sammelgut kommen 0,25 € Gemeinkosten.`
        },
        {
          id: 'lf07-kostenarten-a11-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Die Geschäftsführung überlegt, die Energiekosten künftig nach Mitarbeiterzahl statt nach Zählerständen zu verteilen. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Ein Schlüssel sollte die Kostenverursachung möglichst genau abbilden; Zählerstände sind dafür besser geeignet.',
            'Ein anderer Schlüssel verändert die Summe der Gemeinkosten des Unternehmens.',
            'Ein unpassender Schlüssel kann dazu führen, dass Sammelgutsendungen zu teuer oder zu billig kalkuliert werden.',
            'Der Verteilungsschlüssel hat keinen Einfluss auf die Zuschlagssätze.'
          ],
          correct: [0, 2],
          hints: ['Denke an das Verursachungsprinzip.', 'Die Gesamtsumme bleibt, nur die Verteilung ändert sich.'],
          solution: 'Richtig sind A und C. Nach dem **Verursachungsprinzip** sollen Kosten der Stelle zugeordnet werden, die sie verursacht. Ein anderer Schlüssel verschiebt Kosten zwischen den Kostenstellen (die Gesamtsumme bleibt gleich) und verändert damit die **Zuschlagssätze** und die Preise.'
        }
      ]
    },
    {
      id: 'lf07-kostenarten-a12', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre einer neuen Auszubildenden, warum eine Spedition in der Kostenrechnung nicht einfach alle Aufwendungen aus der Gewinn- und Verlustrechnung übernimmt. Nenne zwei Beispiele.',
      model: 'Die Kostenrechnung soll nur den Werteverzehr zeigen, der durch die betriebliche Leistung entsteht, damit Preise richtig kalkuliert werden. Neutrale Aufwendungen wie eine Spende (betriebsfremd) oder eine Steuernachzahlung für das Vorjahr (periodenfremd) werden deshalb nicht übernommen. Außerdem werden manche Aufwendungen durch kalkulatorische Kosten ersetzt, zum Beispiel die Abschreibung vom Wiederbeschaffungswert statt vom Anschaffungswert, und es kommen Zusatzkosten wie der kalkulatorische Unternehmerlohn hinzu.',
      criteria: [
        { text: 'nennt das Ziel: nur betrieblicher Werteverzehr / richtige Kalkulation', keywords: ['betrieblich|Leistung|Kalkulation|Preis'], points: 1 },
        { text: 'nennt neutrale Aufwendungen mit Beispiel', keywords: ['neutral|betriebsfremd|periodenfremd|außerordentlich', 'Spende|Nachzahlung|Verlust|Kursverlust'], points: 1 },
        { text: 'nennt kalkulatorische Kosten (Anders- oder Zusatzkosten)', keywords: ['kalkulatorisch|Wiederbeschaffung|Unternehmerlohn|Anderskosten|Zusatzkosten'], points: 1 }
      ],
      hints: ['Was soll die Kostenrechnung zeigen?', 'Denke an neutrale Aufwendungen und kalkulatorische Kosten.'],
      solution: 'Die Kostenrechnung dient der **Kalkulation** und Steuerung. Sie erfasst nur den **betrieblichen** Werteverzehr. **Neutrale Aufwendungen** (Spende, Steuernachzahlung Vorjahr, Verlust aus Lkw-Verkauf) bleiben draußen. Manche Aufwendungen werden durch **kalkulatorische Kosten** ersetzt (Abschreibung vom Wiederbeschaffungswert, Zinsen auf das gesamte Kapital), und **Zusatzkosten** wie der Unternehmerlohn kommen hinzu.'
    }
  ],
  quiz: ['lf07-kostenarten-a1', 'lf07-kostenarten-a5', 'lf07-kostenarten-a9', 'lf07-kostenarten-a10', 'lf07-kostenarten-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 7, Inhalte: Kosten- und Leistungsrechnung, Abgrenzung Aufwand/Kosten, Kostenarten-, Kostenstellen- und Kostenträgerrechnung, Zuschlagskalkulation' },
    { title: 'Handelsgesetzbuch § 275 Gliederung der Gewinn- und Verlustrechnung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__275.html', asOf: '2026' }
  ],
  links: ['lf07-fahrzeugkosten', 'lf07-deckungsbeitrag', 'lf07-kennzahlen']
};
