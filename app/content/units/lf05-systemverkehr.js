export default {
  id: 'lf05-systemverkehr',
  area: 'LF05',
  topic: 'lf05-systemverkehr',
  title: 'Systemverkehre, KEP-Dienste und Sendungsverfolgung',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026-10',
    note: 'NVE/SSCC: 18-stellige Nummer mit Datenbezeichner (AI) 00 nach GS1-Standard, Aufbau und Strichcode GS1-128 laut GS1 Logistic Label Guideline, geprüft auf gs1.org am 17.10.2026. Gewichts- und Maßgrenzen von KEP-Diensten, Abgrenzung Stückgut/Teil-/Komplettladung und Laufzeiten sind keine gesetzlichen Werte, sondern typische Richtwerte bzw. Beispielwerte, die je Dienstleister und Netzwerk abweichen. Alle Kosten in den Aufgaben sind erfundene Beispielwerte (Bezugsjahr 2026).'
  },
  goals: [
    'Ich kann erklären, warum sich Speditionen zu Stückgutkooperationen und Systemverkehren zusammenschließen.',
    'Ich kann Hub-and-Spoke-System und Rasterverkehr vergleichen und die Zahl der Verbindungen berechnen.',
    'Ich kann den Ablauf einer Sendung mit Vorlauf, Hauptlauf und Nachlauf in einem 24-/48-Stunden-Netz beschreiben.',
    'Ich kann Stückgut, Teilladung und Komplettladung voneinander abgrenzen.',
    'Ich kann Kurier-, Express- und Paketdienste unterscheiden.',
    'Ich kann den Nutzen von Barcode, NVE/SSCC, Scanpunkten und Ablieferbeleg (POD) für die Sendungsverfolgung erklären.'
  ],
  simple: `# Worum geht es?

Ein mittelgroßer Spediteur in Saarbrücken kann nicht jeden Ort in Deutschland mit eigenen Lkw anfahren. Deshalb arbeitet er in einem **Netzwerk** mit anderen Speditionen zusammen. Jeder Partner holt in seiner Region ab und stellt in seiner Region zu. Dazwischen fahren die Sendungen über Nacht – entweder **direkt** von Depot zu Depot (**Rasterverkehr**) oder über ein zentrales Umschlagzentrum (**Hub**).

Den Grundablauf mit Versand- und Empfangsspediteur und Bordero kennst du aus der Einheit „Ablauf des Sammelgutverkehrs und Rückrechnung“. Hier geht es um das **System dahinter**.

# Drei Sendungsgrößen

- **Stückgut**: einzelne Pakete oder wenige Paletten → wird gesammelt und mehrfach umgeschlagen.
- **Teilladung**: ein größerer Teil eines Lkw → fährt meist direkt, der Rest wird mit anderen Teilladungen aufgefüllt.
- **Komplettladung**: der ganze Lkw für einen Auftrag → fährt direkt vom Versender zum Empfänger.

# KEP-Dienste

**K**urier, **E**xpress, **P**aket: Dienste für kleine, leichte Sendungen mit festen Regeln für Gewicht und Größe und viel Automatisierung.

# Wo ist meine Sendung?

Jedes Packstück bekommt ein **Etikett mit Barcode**. Bei jedem Umschlag wird gescannt. So entsteht eine lückenlose Kette von **Statusmeldungen**, die Kunden über **Track & Trace** im Internet abrufen können. Am Ende steht der **Ablieferscan** mit Unterschrift oder Foto (**POD** = Proof of Delivery).`,
  deep: `# 1. Stückgutkooperationen und Netzwerke

In einer **Stückgutkooperation** (Stückgutnetzwerk, Systemverkehr) arbeiten selbstständige Speditionen nach gemeinsamen Regeln zusammen:

- jeder Partner hat ein **Gebiet** (meist nach Postleitzahlen) und ist dort Versand- und Empfangsspediteur,
- gemeinsame **Laufzeitversprechen** (z. B. 24 oder 48 Stunden), **Qualitätsstandards** und **Abfahrts-/Ankunftszeiten**,
- gemeinsame **IT**, einheitliche Etiketten und **Statuscodes**,
- **Verrechnungssätze** zwischen den Partnern für Hauptlauf, Hub-Umschlag und Zustellung,
- gemeinsamer Marktauftritt gegenüber Großkunden.

Vorteil: **flächendeckendes Netz** ohne eigene Niederlassungen, bessere Auslastung durch gebündelte Mengen. Nachteil: **Abhängigkeit** von der Qualität der Partner, Abstimmungsaufwand, Verrechnungssätze legen einen Teil der Kosten fest.

# 2. Netzformen: Rasterverkehr und Hub-and-Spoke

| Merkmal | Rasterverkehr (Direktverkehr) | Hub-and-Spoke |
|---|---|---|
| Verbindungen bei n Depots | **n · (n − 1)** gerichtete Relationen | **2 · n** (jedes Depot zum Hub und zurück) |
| Umschläge | Versanddepot und Empfangsdepot | zusätzlich Umschlag im Hub |
| Auslastung | gut nur bei hohem Aufkommen je Relation | gut auch bei geringem Aufkommen, weil im Hub gebündelt wird |
| Laufzeit | kurz, frühe Ankunft | Umweg und Hub-Zeitfenster; trotzdem 24 h machbar |
| Risiko | wenig Umschlag, wenig Schäden | Hub ist Engpass; Störung im Hub trifft das ganze Netz |

In der Praxis: **Mischsysteme**. Relationen mit viel Aufkommen fahren direkt, schwache Relationen laufen über einen zentralen oder regionalen Hub.

**Beispiel:** 10 Depots → Raster 10 · 9 = **90** Relationen, Hub 2 · 10 = **20** Verbindungen.

# 3. Ablauf und Laufzeit im 24-Stunden-Netz

| Zeit (Beispiel) | Schritt |
|---|---|
| Tag 1, 8–17 Uhr | **Vorlauf**: Abholung beim Versender mit Nahverkehrs-Lkw |
| Tag 1, 17–20 Uhr | Eingangsscan und Ausgangsumschlag im **Versanddepot**, Bordero, Verladen in Wechselbrücken |
| Tag 1, ab 20 Uhr | **Hauptlauf** über Nacht zum Hub oder direkt zum Empfangsdepot |
| Nacht | Umschlag im **Hub** (enges Zeitfenster), Rückfahrt zu den Empfangsdepots |
| Tag 2, ab 5 Uhr | Eingangsumschlag im **Empfangsdepot**, Tourenbildung |
| Tag 2, vormittags | **Nachlauf**: Zustellung beim Empfänger, Ablieferscan |

- **24-h-Laufzeit** (Regellaufzeit): Zustellung am nächsten **Werktag** nach Abholung.
- **48-h-Laufzeit**: Zustellung am übernächsten Werktag, z. B. für entfernte Gebiete, Inseln oder Auslandsrelationen.
- Laufzeiten sind **Leistungsversprechen** des Netzwerks, keine gesetzlichen Fristen. Zusatzprodukte: Fix-Termin, Zustellung bis 10 Uhr oder 12 Uhr (gegen Aufpreis).

# 4. Stückgut, Teilladung, Komplettladung

Es gibt **keine gesetzliche Grenze**. Typische Richtwerte (je Spedition verschieden):

| | Stückgut | Teilladung | Komplettladung |
|---|---|---|---|
| Größe (Richtwert) | bis etwa 2,5–3 t bzw. wenige Paletten | etwa ab 3 t bis zu einem großen Teil des Lkw | ganzes Fahrzeug (z. B. 33 Europaletten oder volle Nutzlast) |
| Weg | Sammeln → Umschlag → Hauptlauf → Umschlag → Zustellung | meist direkt, evtl. mit Zuladung weiterer Teilpartien | direkt vom Versender zum Empfänger |
| Umschlag | mehrfach | keiner oder wenig | keiner |
| Preis | Stückguttarif nach Gewicht und Entfernung | nach Lademetern/Gewicht und Entfernung | Tourpreis bzw. km-Satz |

Lademeter und Fahrzeugauslastung findest du in der Einheit „Fahrzeug- und Ladeeinheitenplanung, Make or Buy“.

# 5. KEP-Dienste

| Dienst | Merkmal | Beispiel |
|---|---|---|
| **Kurier** | Sendung wird **persönlich begleitet**, direkt und sofort, ohne Umschlag | Ersatzteil für eine stehende Maschine, Dokumente |
| **Express** | **garantierte Zustellzeit** (z. B. bis 9, 10 oder 12 Uhr am nächsten Tag), Transport über ein Netz | Muster für eine Messe, eilige Ersatzteile |
| **Paket** | **standardisierte** Sendungen mit festen Gewichts- und Maßgrenzen, hoch automatisierte Sortierung, Regellaufzeit ohne Garantie | Online-Bestellungen, Ersatzteile an Werkstätten |

Typische Richtwerte im Paketdienst (keine gesetzlichen Werte, je Anbieter unterschiedlich): Höchstgewicht oft **31,5 kg** je Paket; Größe begrenzt über Höchstlänge und **Gurtmaß** (Gurtmaß = Länge + 2 × Breite + 2 × Höhe). Was darüber liegt, geht als Sperrgut gegen Zuschlag oder als Stückgut.

# 6. Sendungsverfolgung

- **Barcode-Etikett**: Jedes Packstück erhält ein Etikett mit maschinenlesbarem Code.
- **NVE/SSCC** (Nummer der Versandeinheit / Serial Shipping Container Code): weltweit eindeutige **18-stellige** Nummer nach GS1-Standard mit dem Datenbezeichner **(00)**; sie identifiziert eine Versandeinheit (z. B. eine Palette) über die ganze Kette, auch über Unternehmensgrenzen hinweg. Aufbau: Erweiterungsziffer, GS1-Basisnummer des Unternehmens, fortlaufende Seriennummer und am Ende eine Prüfziffer. Auf dem GS1-Transportetikett steht sie als Strichcode **GS1-128**.
- **Scanpunkte**: Abholung, Eingang Versanddepot, Verladung Hauptlauf, Eingang/Ausgang Hub, Eingang Empfangsdepot, Beladen Zustelltour, Zustellung.
- **Statusmeldungen** werden per Datenaustausch an Partner und Kunden übertragen, z. B. „abgeholt“, „im Hub“, „in Zustellung“, „zugestellt“, „Empfänger nicht angetroffen“, „Annahme verweigert“, „beschädigt“.
- **Track & Trace**: *Tracking* = aktuellen Ort/Status abfragen; *Tracing* = den zurückgelegten Weg im Nachhinein nachverfolgen.
- **Ablieferscan / POD (Proof of Delivery)**: Zustellnachweis mit Datum, Uhrzeit, Name, elektronischer Unterschrift oder Foto.

**Nutzen:** Schnittstellenkontrolle (Fehlmengen werden sofort am Umschlagpunkt erkannt), Haftungsnachweis bei Verlust oder Schaden, Kundeninformation, Abrechnung zwischen den Partnern, Kennzahlen zur Laufzeittreue.`,
  terms: [
    { term: 'Stückgutkooperation', def: 'Zusammenschluss selbstständiger Speditionen zu einem Netzwerk mit gemeinsamen Laufzeiten, Standards, IT und Verrechnungssätzen; jeder Partner bedient sein Gebiet.' },
    { term: 'Hub-and-Spoke', def: 'Netzform, in der alle Depots (Spokes) ihre Sendungen zu einem zentralen Umschlagpunkt (Hub) fahren; bei n Depots 2 · n Verbindungen.' },
    { term: 'Rasterverkehr (Direktverkehr)', def: 'Netzform, in der jedes Depot jedes andere direkt anfährt; bei n Depots n · (n − 1) gerichtete Relationen.' },
    { term: 'Vor-, Haupt-, Nachlauf', def: 'Abholung beim Versender im Nahbereich (Vorlauf), Fernstrecke zwischen Depots bzw. über den Hub (Hauptlauf), Zustellung beim Empfänger (Nachlauf).' },
    { term: 'Regellaufzeit 24 h / 48 h', def: 'Leistungsversprechen eines Netzwerks: Zustellung am nächsten bzw. übernächsten Werktag nach Abholung; keine gesetzliche Frist.' },
    { term: 'Teilladung', def: 'Sendung, die einen größeren Teil eines Fahrzeugs belegt und meist ohne Umschlag direkt befördert wird; Grenze zum Stückgut nur als Richtwert festgelegt.' },
    { term: 'Komplettladung', def: 'Sendung, die ein ganzes Fahrzeug nach Fläche oder Gewicht auslastet und direkt vom Versender zum Empfänger fährt.' },
    { term: 'KEP-Dienste', def: 'Kurier-, Express- und Paketdienste für kleine, leichte, standardisierte oder eilige Sendungen.' },
    { term: 'NVE / SSCC', def: 'Nummer der Versandeinheit (Serial Shipping Container Code): 18-stellige, weltweit eindeutige GS1-Nummer mit Datenbezeichner (00) zur Identifikation einer Versandeinheit.' },
    { term: 'Track & Trace', def: 'Sendungsverfolgung: Tracking zeigt den aktuellen Status, Tracing den zurückgelegten Weg.' },
    { term: 'POD (Proof of Delivery)', def: 'Ablieferbeleg: Nachweis der Zustellung mit Zeit, Empfängername und Unterschrift oder Foto, meist als Ablieferscan.' },
    { term: 'Gurtmaß', def: 'Maß für Paketgrößen: Länge + 2 × Breite + 2 × Höhe; Grenzwerte legt der jeweilige Paketdienst fest.' }
  ],
  example: `# Saar-Trans im Netzwerk „StückgutPlus“ (erfundenes Beispiel, Werte 2026)

Die Saar-Trans Spedition GmbH ist Partner einer Stückgutkooperation mit 40 Depots und einem Zentral-Hub bei Bad Hersfeld. Ihr Gebiet: PLZ 66.

**Montag, 14:30 Uhr:** Ein Elektrogroßhändler in Saarlouis übergibt 3 Paletten (820 kg) für einen Installateur in Kassel. Jede Palette bekommt ein Etikett mit NVE. Scan „abgeholt“.

**Montag, 18:10 Uhr:** Eingangsscan im Depot Saarbrücken, Verladung in die Wechselbrücke „Hub“. Scan „Hauptlauf“.

**Montag, 23:40 Uhr:** Ankunft im Hub, Umschlag auf die Wechselbrücke Richtung Kassel. Scan „Eingang Hub“ und „Ausgang Hub“.

**Dienstag, 5:30 Uhr:** Eingang beim Partner in Kassel – eine Palette fehlt beim Scan! Statusmeldung „Fehlmenge“. Über die Scans ist sofort klar: Die Palette wurde im Hub gescannt, aber nicht in die Kassel-Brücke verladen. Der Hub findet sie auf der Brücke nach Göttingen; sie wird am Mittwoch nachgeliefert.

**Dienstag, 10:15 Uhr:** Zustellung von 2 Paletten, Ablieferscan mit Unterschrift (POD) und Vermerk „1 Palette fehlt“.

**Warum direkt nach Frankfurt?** Saar-Trans hat täglich rund 8 t für das Rhein-Main-Gebiet. Für diese starke Relation fährt sie zusätzlich einen **Direktverkehr** zum Partner in Frankfurt – schneller und ohne Hub-Umschlag.

**Eilige Sendung:** Ein Steuergerät (4 kg) muss morgen um 9 Uhr in Hamburg sein. Das ist ein Fall für einen **Expressdienst** mit garantierter Zustellzeit, nicht für das Stückgutnetz.`,
  rules: [
    'Raster: n · (n − 1) Relationen; Hub: 2 · n Verbindungen.',
    'Starke Relationen direkt, schwache über den Hub – das ist das übliche Mischsystem.',
    'Vorlauf = Abholung, Hauptlauf = Fernstrecke über Nacht, Nachlauf = Zustellung.',
    '24 h und 48 h sind Leistungsversprechen des Netzwerks, keine gesetzlichen Fristen.',
    'Kurier = begleitet, Express = garantierte Zeit, Paket = standardisiert mit Grenzen.',
    'Jeder Umschlag = ein Scan: Nur so lassen sich Fehlmengen und Schäden einer Schnittstelle zuordnen.',
    'Die NVE/SSCC ist 18-stellig und bleibt über die ganze Transportkette gleich.'
  ],
  summary: `- **Stückgutkooperationen** schaffen flächendeckende Netze aus selbstständigen Partnern mit gemeinsamen Standards.
- **Rasterverkehr**: n · (n − 1) Relationen, schnell, aber nur bei viel Aufkommen wirtschaftlich. **Hub-and-Spoke**: 2 · n Verbindungen, hohe Bündelung, zusätzlicher Umschlag.
- **Ablauf**: Vorlauf (Abholung) → Versanddepot → Hauptlauf (nachts) → ggf. Hub → Empfangsdepot → Nachlauf (Zustellung); Regellaufzeit **24 h oder 48 h**.
- **Stückgut – Teilladung – Komplettladung**: Abgrenzung nach Richtwerten, entscheidend sind Umschlag und Direktfahrt.
- **KEP**: Kurier (begleitet), Express (garantierte Zeit), Paket (standardisiert, typischerweise bis 31,5 kg – je Anbieter).
- **Sendungsverfolgung**: Barcode-Etikett, **NVE/SSCC** (18 Stellen), Scans an jedem Umschlagpunkt, Statusmeldungen, Track & Trace, **POD**.`,
  mistakes: [
    { wrong: 'Hub-and-Spoke ist immer schneller als Direktverkehr.', right: 'Über den Hub entstehen Umweg und zusätzlicher Umschlag. Direktverkehr ist meist schneller, lohnt sich aber nur bei genügend Aufkommen.' },
    { wrong: 'Ab 3 t ist eine Sendung gesetzlich eine Teilladung.', right: 'Es gibt keine gesetzliche Grenze. Die Abgrenzung beruht auf Richtwerten der Spedition; entscheidend ist, ob umgeschlagen oder direkt gefahren wird.' },
    { wrong: 'Express und Kurier sind dasselbe.', right: 'Ein Kurier begleitet die Sendung persönlich und direkt. Express nutzt ein Netz mit Umschlag, garantiert aber eine Zustellzeit.' },
    { wrong: 'Die Sendungsverfolgung dient nur der Kundeninformation.', right: 'Sie dient auch der Schnittstellenkontrolle, dem Haftungsnachweis bei Verlust oder Schaden und der Abrechnung zwischen den Partnern.' },
    { wrong: '24-Stunden-Laufzeit heißt: Abholung Freitag, Zustellung Samstag.', right: 'Laufzeiten zählen in Werktagen des Netzwerks; bei Abholung am Freitag wird in der Regel am Montag zugestellt.' }
  ],
  flashcards: [
    { q: 'Wie viele Relationen hat ein Rasterverkehr mit n Depots?', a: 'n · (n − 1) gerichtete Relationen.' },
    { q: 'Wie viele Verbindungen hat ein Hub-and-Spoke-Netz mit n Depots?', a: '2 · n (jedes Depot zum Hub und zurück).' },
    { q: 'Nenne zwei Vorteile des Hub-and-Spoke-Systems.', a: 'Hohe Auslastung durch Bündelung auch bei geringem Aufkommen; wenige Linien, flächendeckendes Netz.' },
    { q: 'Nenne zwei Nachteile des Hub-and-Spoke-Systems.', a: 'Zusätzlicher Umschlag (Zeit, Kosten, Schadensrisiko) und Abhängigkeit vom Hub; Umwege.' },
    { q: 'Was bedeutet 24-Stunden-Regellaufzeit?', a: 'Zustellung am nächsten Werktag nach der Abholung (Leistungsversprechen des Netzwerks).' },
    { q: 'Wodurch unterscheidet sich eine Komplettladung vom Stückgut?', a: 'Sie belegt ein ganzes Fahrzeug und fährt ohne Umschlag direkt vom Versender zum Empfänger.' },
    { q: 'Was unterscheidet Kurier, Express und Paket?', a: 'Kurier: persönlich begleitet, direkt; Express: garantierte Zustellzeit über ein Netz; Paket: standardisiert mit Gewichts- und Maßgrenzen, Regellaufzeit.' },
    { q: 'Wie viele Stellen hat die NVE/SSCC und welchen Datenbezeichner?', a: '18 Stellen, Datenbezeichner (00) nach GS1.' },
    { q: 'Was ist ein POD?', a: 'Proof of Delivery: Zustellnachweis mit Zeit, Empfänger und Unterschrift oder Foto.' },
    { q: 'Unterschied Tracking und Tracing?', a: 'Tracking = aktueller Status/Ort; Tracing = zurückgelegter Weg im Nachhinein.' },
    { q: 'Wie berechnet man das Gurtmaß?', a: 'Länge + 2 × Breite + 2 × Höhe (längste Seite als Länge).' }
  ],
  tasks: [
    {
      id: 'lf05-systemverkehr-a1', type: 'calc', difficulty: 1, points: 3,
      q: 'Eine Stückgutkooperation hat **14 Partnerdepots**. Berechne die Zahl der Verbindungen im Rasterverkehr und im Hub-and-Spoke-System sowie die Differenz.',
      formula: 'Raster = n · (n − 1); Hub = 2 · n',
      fields: [
        { id: 'raster', label: 'Relationen Rasterverkehr', unit: 'Relationen', answer: 182, tol: 0 },
        { id: 'hub', label: 'Verbindungen Hub-and-Spoke', unit: 'Verbindungen', answer: 28, tol: 0 },
        { id: 'diff', label: 'Differenz', unit: 'Verbindungen', answer: 154, tol: 0 }
      ],
      hints: ['Im Raster fährt jedes Depot zu jedem anderen – aber nicht zu sich selbst.', 'Im Hub-System hat jedes Depot eine Hin- und eine Rückfahrt.'],
      solution: `**Raster:** n · (n − 1) = 14 · 13 = **182 Relationen**

**Hub-and-Spoke:** 2 · n = 2 · 14 = **28 Verbindungen**

**Differenz:** 182 − 28 = **154**

Je mehr Depots, desto stärker wächst der Vorteil des Hubs bei der Zahl der Linien, weil die Rasterzahl ungefähr mit n² steigt.`
    },
    {
      id: 'lf05-systemverkehr-a2', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Merkmale der richtigen Netzform bzw. dem richtigen Abschnitt zu.',
      pairs: [
        ['Hub-and-Spoke', 'Bündelung aller Sendungen in einem zentralen Umschlagpunkt'],
        ['Rasterverkehr', 'jedes Depot fährt jedes andere direkt an'],
        ['Vorlauf', 'Abholung beim Versender im Nahbereich'],
        ['Nachlauf', 'Zustellung vom Empfangsdepot zum Empfänger']
      ],
      hints: ['Hub = Nabe, Spoke = Speiche.', 'Vor = vor dem Hauptlauf, Nach = nach dem Hauptlauf.'],
      solution: '**Hub-and-Spoke**: zentrale Bündelung im Hub. **Rasterverkehr**: direkte Verbindungen zwischen allen Depots. **Vorlauf**: Abholung beim Versender. **Nachlauf**: Zustellung beim Empfänger.'
    },
    {
      id: 'lf05-systemverkehr-a3', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zum Hub-and-Spoke-System sind richtig? (Mehrfachauswahl)',
      options: [
        'Auch Relationen mit wenig Aufkommen können täglich bedient werden.',
        'Es entsteht ein zusätzlicher Umschlag mit Zeitbedarf und Schadensrisiko.',
        'Eine Störung im Hub kann viele Relationen gleichzeitig verzögern.',
        'Es gibt mehr Verbindungen als im Rasterverkehr.',
        'Sendungen sind grundsätzlich schneller als im Direktverkehr.'
      ],
      correct: [0, 1, 2],
      hints: ['Vergleiche 2 · n mit n · (n − 1).', 'Was passiert durch den Umweg über den Hub?'],
      solution: 'Richtig sind **A, B und C**: Durch die Bündelung lohnen sich auch schwache Relationen; dafür gibt es einen zusätzlichen Umschlag, und der Hub ist ein Engpass. D ist falsch (2 · n ist kleiner als n · (n − 1) ab n = 4). E ist falsch: Direktverkehr ist meist schneller, weil Umweg und Hub-Umschlag entfallen.'
    },
    {
      id: 'lf05-systemverkehr-a4', type: 'order', difficulty: 1, points: 6,
      q: 'Bringe die Scanpunkte einer Stückgutsendung im Hub-System in die richtige Reihenfolge.',
      items: [
        'Abholscan beim Versender',
        'Eingangsscan im Versanddepot',
        'Verladescan in die Wechselbrücke zum Hub',
        'Eingangs- und Ausgangsscan im Hub',
        'Eingangsscan im Empfangsdepot',
        'Ablieferscan mit Unterschrift (POD)'
      ],
      hints: ['Die Sendung beginnt beim Versender und endet beim Empfänger.', 'Der Hub liegt zwischen den beiden Depots.'],
      solution: 'Abholung (Vorlauf) → Eingang Versanddepot → Verladung Hauptlauf → Hub → Eingang Empfangsdepot → Zustellung mit **POD** (Nachlauf). An jeder Schnittstelle wird gescannt, damit Fehlmengen sofort einem Abschnitt zugeordnet werden können.'
    },
    {
      id: 'lf05-systemverkehr-a5', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken zur Laufzeit.',
      text: 'Eine Sendung wird am Montag abgeholt. Bei einer 24-Stunden-Regellaufzeit wird sie am [[Dienstag]] zugestellt, bei 48 Stunden am [[Mittwoch]]. Wird eine 24-Stunden-Sendung am Freitag abgeholt, wird sie in der Regel am [[Montag]] zugestellt. Der Transport zwischen den Depots heißt [[Hauptlauf]] und findet meist nachts statt.',
      hints: ['Laufzeiten zählen in Werktagen.', 'Abholung = Vorlauf, Zustellung = Nachlauf – und dazwischen?'],
      solution: '24 h → nächster Werktag: **Dienstag**; 48 h → übernächster Werktag: **Mittwoch**; Freitag + 24 h → **Montag** (Wochenende zählt nicht). Die Fernstrecke ist der **Hauptlauf**.'
    },
    {
      id: 'lf05-systemverkehr-a6', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne jede Sendung der passenden Versandart zu.',
      pairs: [
        ['Ein Mitarbeiter fährt sofort mit einem Ersatzteil im Transporter von Saarbrücken nach Mannheim', 'Kurier'],
        ['2 kg Muster, Zustellung garantiert morgen bis 10 Uhr', 'Express'],
        ['5 kg Online-Bestellung, Regellaufzeit 1–2 Tage', 'Paket'],
        ['4 Paletten mit 1.300 kg, Zustellung übermorgen', 'Stückgut']
      ],
      hints: ['Persönliche Begleitung = ?', 'Garantierte Uhrzeit = ?'],
      solution: '**Kurier**: persönlich begleitet, direkt. **Express**: garantierte Zustellzeit. **Paket**: kleine standardisierte Sendung mit Regellaufzeit. **Stückgut**: Palettensendung über das Stückgutnetz.'
    },
    {
      id: 'lf05-systemverkehr-a7', type: 'mc', difficulty: 2, points: 1,
      q: 'Welche Aussage zur **Teilladung** ist richtig?',
      options: [
        'Teilladungen werden immer über einen Hub umgeschlagen.',
        'Ab 3 t ist eine Sendung nach HGB eine Teilladung.',
        'Teilladungen fahren meist ohne Umschlag direkt; der freie Laderaum wird mit weiteren Teilpartien aufgefüllt.',
        'Teilladung und Komplettladung sind dasselbe.'
      ],
      correct: [2],
      hints: ['Teilladungen sind zu groß für den Umschlag im Stückgutnetz.', 'Gibt es eine gesetzliche Gewichtsgrenze?'],
      solution: 'Richtig ist **C**: Teilladungen belegen einen größeren Teil des Fahrzeugs und fahren in der Regel direkt; mehrere Teilpartien können kombiniert werden. Eine gesetzliche Gewichtsgrenze gibt es nicht (B falsch), ein Hub-Umschlag ist typisch für Stückgut (A falsch), die Komplettladung belegt das ganze Fahrzeug (D falsch).'
    },
    {
      id: 'lf05-systemverkehr-a8', type: 'calc', difficulty: 3, points: 3,
      q: `Saar-Trans prüft, ob sie für die Relation Saarbrücken–Hamburg einen Direktverkehr einrichtet (Beispielwerte 2026):

- **Direktverkehr:** Ein Lkw pro Nacht kostet 1.110 € je Tour, unabhängig von der geladenen Menge (bis zur Kapazitätsgrenze).
- **Über den Hub:** Verrechnungssätze insgesamt 18,50 € je 100 kg.

Berechne die kritische Menge pro Nacht sowie die Kosten über den Hub bei 4.800 kg und bei 7.500 kg.`,
      formula: 'kritische Menge = Tourkosten ÷ Hub-Satz je 100 kg × 100',
      fields: [
        { id: 'krit', label: 'kritische Menge', unit: 'kg', answer: 6000, tol: 1 },
        { id: 'k48', label: 'Hub-Kosten bei 4.800 kg', unit: '€', answer: 888, tol: 0.01 },
        { id: 'k75', label: 'Hub-Kosten bei 7.500 kg', unit: '€', answer: 1387.5, tol: 0.01 }
      ],
      hints: ['Setze gleich: 1.110 € = 18,50 € × x ÷ 100 kg.', 'Hub-Kosten = Menge ÷ 100 × 18,50 €.'],
      solution: `**Kritische Menge:** 1.110 € ÷ 18,50 € je 100 kg = 60 × 100 kg = **6.000 kg**

**Hub bei 4.800 kg:** 4.800 kg ÷ 100 × 18,50 € = 48 × 18,50 € = **888,00 €** → günstiger als die Direkttour (1.110 €)

**Hub bei 7.500 kg:** 7.500 kg ÷ 100 × 18,50 € = 75 × 18,50 € = **1.387,50 €** → teurer als die Direkttour (1.110 €)

**Ergebnis:** Liegt das Aufkommen regelmäßig über 6.000 kg pro Nacht, lohnt sich der Direktverkehr – zusätzlich sinken Laufzeit und Schadensrisiko, weil der Hub-Umschlag entfällt.`
    },
    {
      id: 'lf05-systemverkehr-a9', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Paket misst 90 cm × 50 cm × 40 cm und wiegt 34 kg. Der Paketdienst des Kunden nimmt laut seinen Bedingungen höchstens 300 cm Gurtmaß und 31,5 kg an (Beispielwerte). Berechne das Gurtmaß und die Gewichtsüberschreitung.',
      formula: 'Gurtmaß = Länge + 2 × Breite + 2 × Höhe',
      fields: [
        { id: 'gurt', label: 'Gurtmaß', unit: 'cm', answer: 270, tol: 0 },
        { id: 'ueber', label: 'Überschreitung Gewicht', unit: 'kg', answer: 2.5, tol: 0.01 }
      ],
      hints: ['Die längste Seite ist die Länge.', 'Überschreitung = tatsächliches Gewicht − Höchstgewicht.'],
      solution: `**Gurtmaß:** 90 cm + 2 × 50 cm + 2 × 40 cm = 90 + 100 + 80 = **270 cm** → unter 300 cm, Größe passt.

**Gewicht:** 34 kg − 31,5 kg = **2,5 kg** zu schwer.

**Folge:** Das Paket ist für den Paketdienst zu schwer. Es muss geteilt, als Sperrgut gegen Zuschlag (falls angeboten) oder als Stückgut versandt werden.`
    },
    {
      id: 'lf05-systemverkehr-a10', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zur NVE/SSCC und zur Sendungsverfolgung sind richtig? (Mehrfachauswahl)',
      options: [
        'Die NVE/SSCC ist eine 18-stellige Nummer nach GS1-Standard mit dem Datenbezeichner (00).',
        'Die NVE bleibt über die gesamte Transportkette gleich, auch wenn mehrere Speditionen beteiligt sind.',
        'Der Ablieferscan mit Unterschrift oder Foto dient als Zustellnachweis (POD).',
        'Für jeden Umschlag wird eine neue NVE vergeben.',
        'Track & Trace ist gesetzlich für alle Stückgutsendungen vorgeschrieben.'
      ],
      correct: [0, 1, 2],
      hints: ['Eine eindeutige Nummer ist nur sinnvoll, wenn sie sich nicht ändert.', 'Track & Trace ist ein Serviceangebot der Netzwerke.'],
      solution: 'Richtig sind **A, B und C**. Die NVE/SSCC ist 18-stellig (GS1, Datenbezeichner 00) und identifiziert eine Versandeinheit unverändert über die ganze Kette – deshalb wird sie **nicht** neu vergeben (D falsch). Der Ablieferscan ist der POD. Track & Trace ist eine Dienstleistung, keine gesetzliche Pflicht (E falsch).'
    },
    {
      id: 'lf05-systemverkehr-a11', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre, warum in einem Stückgutnetz an jeder Schnittstelle gescannt wird. Nenne drei Gründe.',
      model: 'Durch den Scan an jeder Schnittstelle sieht man sofort, wo eine Sendung ist und ob Packstücke fehlen. Fehlmengen oder Schäden lassen sich so dem Abschnitt bzw. Partner zuordnen, der dafür verantwortlich ist (Haftung). Außerdem erhalten Kunden über Track & Trace aktuelle Statusmeldungen, und die Partner können ihre Leistungen untereinander abrechnen und die Laufzeittreue messen.',
      criteria: [
        { text: 'Schnittstellenkontrolle / Fehlmengen erkennen', keywords: ['Fehl|fehlt|Schnittstelle|Kontroll|Verlust'], points: 1 },
        { text: 'Zuordnung von Verantwortung/Haftung', keywords: ['Haftung|verantwort|zuordn|Schaden'], points: 1 },
        { text: 'Kundeninformation oder Abrechnung/Kennzahlen', keywords: ['Kunde|Track|Status|Abrechn|Laufzeit|Kennzahl'], points: 1 }
      ],
      hints: ['Was passiert, wenn eine Palette fehlt?', 'Wer möchte außerdem wissen, wo die Sendung ist?'],
      solution: '1. **Schnittstellenkontrolle**: Fehlmengen werden sofort erkannt. 2. **Haftung**: Verlust oder Schaden lässt sich dem verantwortlichen Abschnitt/Partner zuordnen. 3. **Information und Abrechnung**: Statusmeldungen für Kunden (Track & Trace), Verrechnung zwischen den Partnern, Laufzeitkennzahlen.'
    },
    {
      id: 'lf05-systemverkehr-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Netzplanung bei der Westpfalz-Saar-Kooperation',
      intro: `Fünf mittelständische Speditionen aus dem Saarland, der Pfalz und Lothringen gründen die Kooperation „Westpfalz-Saar“. Sie wollen ihr Netz zunächst auf **8 Depots** erweitern. Das tägliche Aufkommen zwischen den meisten Depots liegt bei 1–3 t; nur zwischen Saarbrücken und Kaiserslautern sind es täglich rund 9 t in jede Richtung. Kunden erwarten eine Zustellung am nächsten Werktag.`,
      hints: ['Vergleiche die Zahl der Linien beider Netzformen.', 'Starke Relationen können anders behandelt werden als schwache.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf05-systemverkehr-a12-1', type: 'calc', difficulty: 2, points: 2,
          q: 'Wie viele Linien wären bei 8 Depots im Rasterverkehr bzw. im Hub-and-Spoke-System zu bedienen?',
          formula: 'Raster = n · (n − 1); Hub = 2 · n',
          fields: [
            { id: 'raster', label: 'Relationen Raster', unit: 'Relationen', answer: 56, tol: 0 },
            { id: 'hub', label: 'Verbindungen Hub', unit: 'Verbindungen', answer: 16, tol: 0 }
          ],
          hints: ['n = 8.', '8 · 7 und 2 · 8.'],
          solution: `**Raster:** 8 · (8 − 1) = 8 · 7 = **56 Relationen**

**Hub-and-Spoke:** 2 · 8 = **16 Verbindungen**`
        },
        {
          id: 'lf05-systemverkehr-a12-2', type: 'mc', difficulty: 3, points: 1,
          q: 'Welche Netzstruktur empfiehlst du der Kooperation?',
          options: [
            'Reiner Rasterverkehr, weil er am schnellsten ist',
            'Hub-and-Spoke für die schwachen Relationen, zusätzlich Direktverkehr Saarbrücken–Kaiserslautern',
            'Nur Komplettladungen zwischen allen Depots',
            'Alle Sendungen per Kurier'
          ],
          correct: [1],
          hints: ['Bei 1–3 t wären 56 Direktlinien kaum ausgelastet.', 'Die Relation mit 9 t täglich ist stark genug für einen eigenen Lkw.'],
          solution: 'Empfehlung **B (Mischsystem)**: Die vielen schwachen Relationen (1–3 t) werden im Hub gebündelt, damit die Lkw ausgelastet sind (nur 16 statt 56 Linien). Die starke Relation Saarbrücken–Kaiserslautern (9 t je Richtung) fährt direkt: schneller, ohne Hub-Umschlag. Reiner Raster wäre bei geringem Aufkommen unwirtschaftlich; Komplettladungen oder Kuriere passen nicht zu Stückgutmengen.'
        },
        {
          id: 'lf05-systemverkehr-a12-3', type: 'text', difficulty: 3, points: 4,
          q: 'Nenne vier Punkte, die die Partner in ihrem Kooperationsvertrag regeln sollten, damit das 24-Stunden-Versprechen gehalten werden kann.',
          model: 'Die Partner sollten verbindliche Abfahrts- und Ankunftszeiten für Depots und Hub festlegen, einheitliche Etiketten mit NVE und eine gemeinsame IT mit Scanpunkten und Statusmeldungen einführen, Verrechnungssätze für Hauptlauf, Umschlag und Zustellung vereinbaren sowie Qualitätsstandards und Regeln für Schadens- und Fehlmengenbearbeitung bzw. Haftung festlegen. Außerdem werden die Zustellgebiete der Partner nach Postleitzahlen abgegrenzt.',
          criteria: [
            { text: 'Zeiten/Fahrplan', keywords: ['Abfahrt|Ankunft|Zeit|Fahrplan'], points: 1 },
            { text: 'IT/Etiketten/Scans/Status', keywords: ['IT|Etikett|NVE|Scan|Status|Daten'], points: 1 },
            { text: 'Verrechnungssätze/Abrechnung', keywords: ['Verrechn|Abrechn|Preis|Satz'], points: 1 },
            { text: 'Qualität/Haftung/Schäden oder Gebiete', keywords: ['Qualität|Haftung|Schaden|Fehlmenge|Gebiet|Postleitzahl'], points: 1 }
          ],
          hints: ['Denke an Zeiten, Daten und Geld.', 'Was passiert bei Schäden – und wer ist wofür zuständig?'],
          solution: 'Zu regeln sind z. B.: **Abfahrts- und Ankunftszeiten** (Hub-Zeitfenster), **einheitliche IT, Etiketten (NVE) und Scanpunkte**, **Verrechnungssätze**, **Qualitätsstandards und Schadens-/Haftungsregeln**, **Gebietsabgrenzung** nach Postleitzahlen.'
        }
      ]
    }
  ],
  quiz: ['lf05-systemverkehr-a1', 'lf05-systemverkehr-a3', 'lf05-systemverkehr-a6', 'lf05-systemverkehr-a8', 'lf05-systemverkehr-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 5, Inhalte: Systemverkehre und Kooperationen im Sammelgutverkehr, Teil- und Komplettladungen, KEP-Dienste, Sendungsverfolgung' },
    { title: 'GS1 Anwendungs-ID (00): Serial Shipping Container Code (SSCC) / Nummer der Versandeinheit (NVE)', publisher: 'GS1', url: 'https://www.gs1.org/de/standards/barcodes/anwendungs-ids/00', asOf: '2026-10-17' },
    { title: 'GS1 Logistic Label Guideline', publisher: 'GS1', url: 'https://www.gs1.org/docs/tl/GS1_Logistic_Label_Guideline.pdf', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 460 Sammelladung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__460.html', asOf: '2026-10-17' }
  ],
  links: ['lf05-sammelgut-ablauf', 'lf04-fahrzeugplanung', 'lf04-verkehrstraeger-vergleich']
};
