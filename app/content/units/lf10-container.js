export default {
  id: 'lf10-container',
  area: 'LF10',
  topic: 'lf10-container',
  title: 'Containerverkehr und Seefrachtberechnung',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Containermaße und Nutzlasten sind ungefähre Richtwerte (je nach Hersteller und Baujahr verschieden; maßgeblich ist das Typenschild/CSC-Schild des Containers). Frachtraten und Zuschläge (BAF, CAF, THC) sind Beispielwerte; echte Raten ändern sich laufend. VGM-Pflicht nach SOLAS Kapitel VI Regel 2 seit 1. Juli 2016. Konnossement: §§ 513 ff. HGB. Stand 2026.'
  },
  goals: [
    'Ich kann die gängigen Containertypen (20\', 40\', 40\' High Cube, Reefer, Open Top, Flat Rack) nach Einsatzzweck unterscheiden.',
    'Ich kann FCL- und LCL-Verladung erklären und für eine Sendung die passende Form vorschlagen.',
    'Ich kann den Ablauf einer Export-Seefrachtsendung mit den Beteiligten Reederei, NVOCC, Terminal und Spediteur beschreiben.',
    'Ich kann Arten des Konnossements unterscheiden und seine Funktionen nennen.',
    'Ich kann Seefracht nach Container-Rate und nach W/M-Rate (Maß oder Gewicht) berechnen.',
    'Ich kann die Zuschläge BAF, CAF und THC erklären und die VGM-Pflicht nach SOLAS anwenden.'
  ],
  simple: `# Worum geht es?

Rund um die Welt wird ein Großteil der Stückgüter in **Containern** verschifft. Ein Container ist eine genormte Stahlbox, die auf Lkw, Bahn, Binnenschiff und Seeschiff passt, ohne dass die Ware umgeladen werden muss.

# Die wichtigsten Größen (ungefähre Richtwerte)

| Typ | Außenlänge | Innenraum ca. | Nutzlast ca. |
|---|---|---|---|
| **20' Standard** (1 TEU) | ca. 6,06 m | ca. 33 m³ | ca. 21–28 t |
| **40' Standard** (2 TEU) | ca. 12,19 m | ca. 67 m³ | ca. 26–27 t |
| **40' High Cube** | ca. 12,19 m, ca. 30 cm höher | ca. 76 m³ | ca. 26–28 t |

**TEU** (Twenty-foot Equivalent Unit) ist die Zähleinheit: Ein 20'-Container = 1 TEU, ein 40'-Container = 2 TEU.

> Die Werte sind nur Richtwerte. Verbindlich sind die Angaben auf dem Container selbst und die der Reederei.

# FCL oder LCL?

- **FCL** (Full Container Load): Ein Versender füllt einen ganzen Container – bezahlt wird pro Container.
- **LCL** (Less than Container Load): Kleine Sendungen werden mit anderen in einem Container gesammelt (**Seefracht-Sammelgut**). Bezahlt wird nach **Maß oder Gewicht** (W/M).

# Die W/M-Regel

Bei LCL rechnet die Reederei oder der Sammelladungsspediteur mit **Frachttonnen (frt)**: **1 t = 1 m³**. Es wird verglichen, ob die Sendung mehr Tonnen oder mehr Kubikmeter hat – **der höhere Wert wird berechnet**.`,
  deep: `# Containertypen

| Typ | Einsatz |
|---|---|
| **Standard/Dry Container** (20', 40') | allgemeines Stückgut in Kartons, Kisten, auf Paletten |
| **High Cube** (meist 40', ca. 2,90 m statt ca. 2,59 m Außenhöhe) | leichtes, voluminöses Gut |
| **Reefer** (Kühlcontainer) | temperaturgeführte Ware, z. B. Lebensmittel, Pharma; braucht Stromanschluss |
| **Open Top** | Ware, die von oben per Kran beladen werden muss oder zu hoch ist (Planendach) |
| **Flat Rack** | Schwergut und übergroße Teile (Maschinen, Fahrzeuge); ohne Seitenwände |
| **Tankcontainer** | flüssige Güter in einem Tank im Rahmen |

# Beteiligte in der Seefracht

| Beteiligter | Rolle |
|---|---|
| **Versender/Ablader** | übergibt das Gut zur Beförderung |
| **Spediteur** | organisiert Vorlauf, Buchung, Zoll, Dokumente; bei LCL oft Sammelladungsspediteur |
| **Reederei** (Carrier, Verfrachter) | betreibt die Schiffe, stellt die Container und das Master-Konnossement aus |
| **NVOCC** (Non-Vessel Operating Common Carrier) | tritt gegenüber dem Kunden als Verfrachter auf und stellt eigene Konnossemente (House B/L) aus, **ohne eigene Schiffe** zu betreiben; kauft Stellplätze bei Reedereien |
| **Containerterminal** | Umschlag zwischen Lkw/Bahn/Binnenschiff und Seeschiff, Zwischenlagerung der Container |
| **CFS** (Container Freight Station) | Packstation, in der LCL-Sendungen gestaut und entladen werden |

# Ablauf einer Export-Seefrachtsendung (FCL)

1. **Buchung** bei der Reederei oder dem NVOCC (Buchungsbestätigung mit Schiff, Abfahrt, Closing, Leercontainer-Depot)
2. **Leercontainer** wird im Depot abgeholt und zum Versender gebracht (Vorlauf per Lkw, Bahn oder Binnenschiff)
3. **Beladen und Verplomben** beim Versender (Stauung und Ladungssicherung)
4. **VGM** (Verified Gross Mass) ermitteln und vor dem Closing an die Reederei melden
5. **Ausfuhranmeldung** (siehe Einheit „Ausfuhrverfahren und Exportpapiere“)
6. Anlieferung am **Terminal** bis zum Closing-Termin
7. **Verladung** auf das Schiff, Ausstellung des **Konnossements**
8. **Seetransport**, Entladung im Bestimmungshafen, Nachlauf zum Empfänger

Bei **LCL** liefert der Versender seine Sendung an die **CFS** des Sammelladungsspediteurs; dort wird sie mit anderen Sendungen in einen Container gestaut.

# VGM-Pflicht nach SOLAS

Seit dem **1. Juli 2016** darf ein beladener Container nach dem internationalen Übereinkommen **SOLAS** (Kapitel VI Regel 2) nur verladen werden, wenn sein **überprüftes Bruttogewicht (VGM)** vorliegt. Verantwortlich ist der **Ablader/Versender** (Shipper laut Konnossement). Zwei Methoden:

- **Methode 1**: Den gepackten und verplombten Container als Ganzes wiegen.
- **Methode 2**: Gewicht aller Packstücke, Paletten, Stau- und Sicherungsmaterial wiegen und das **Leergewicht (Tara)** des Containers addieren.

Fehlt die VGM, dürfen Kapitän und Terminal den Container **nicht an Bord** nehmen.

# Das Konnossement (Bill of Lading, B/L)

Das Konnossement ist ein **Wertpapier** des Seefrachtrechts (§§ 513 ff. HGB). Es hat drei Funktionen:

1. **Empfangsbestätigung**: Der Verfrachter bestätigt die Übernahme bzw. Verladung des Gutes.
2. **Beweisurkunde** für den Inhalt des Seefrachtvertrags.
3. **Traditionspapier/Warenwertpapier**: Wer das Original besitzt, kann die Ware im Bestimmungshafen herausverlangen. Mit der Übergabe des Konnossements kann man die Ware übertragen.

| Art | Merkmal |
|---|---|
| **Bordkonnossement** (shipped on board) | bestätigt die Verladung an Bord eines bestimmten Schiffes; im Akkreditiv meist verlangt |
| **Übernahmekonnossement** (received for shipment) | bestätigt nur die Übernahme, z. B. im Terminal; kann durch An-Bord-Vermerk zum Bordkonnossement werden |
| **Orderkonnossement** | „an Order“ ausgestellt, durch Indossament übertragbar |
| **Namenskonnossement** | auf einen bestimmten Empfänger ausgestellt |
| **Reines Konnossement** (clean) | ohne Vermerke über Mängel an Gut oder Verpackung |
| **Unreines Konnossement** (foul/claused) | mit einschränkenden Vermerken, z. B. „Kisten beschädigt“ |
| **Master B/L / House B/L** | Master B/L stellt die Reederei dem NVOCC/Spediteur aus, House B/L stellt der NVOCC/Spediteur seinen Kunden aus |

Ein **Seefrachtbrief** (Sea Waybill) ist **kein** Wertpapier; die Ware wird an den genannten Empfänger ohne Vorlage eines Originals ausgeliefert.

# Seefrachtberechnung

**FCL**: Grundrate je Container (z. B. je 20' oder 40') plus Zuschläge.

**LCL**: Rate je **Frachttonne (W/M = weight or measurement)**:

- Gewicht in t und Volumen in m³ ermitteln (Volumen = Länge × Breite × Höhe × Anzahl Packstücke)
- **frachtpflichtige Menge = der größere Wert** (1 t entspricht 1 m³)
- Fracht = frachtpflichtige Menge × Rate je W/M

# Zuschläge (typische Bezeichnungen)

| Zuschlag | Bedeutung |
|---|---|
| **BAF** (Bunker Adjustment Factor) | Bunkerzuschlag für schwankende Treibstoffkosten |
| **CAF** (Currency Adjustment Factor) | Währungszuschlag für Wechselkursschwankungen, oft in % der Grundfracht |
| **THC** (Terminal Handling Charge) | Umschlagskosten im Terminal, getrennt für Abgangs- und Bestimmungshafen |

Wer welche Kosten trägt, hängt von der vereinbarten Incoterms®-Klausel ab (siehe Einheit „Incoterms® 2020“).`,
  terms: [
    { term: 'TEU', def: 'Twenty-foot Equivalent Unit: Zähleinheit für Container; 1 TEU entspricht einem 20-Fuß-Container.' },
    { term: 'FCL', def: 'Full Container Load: Ein Versender nutzt einen ganzen Container; Abrechnung je Container.' },
    { term: 'LCL', def: 'Less than Container Load: Teilladung, die mit anderen Sendungen in einem Container gesammelt wird; Abrechnung nach W/M.' },
    { term: 'W/M-Rate', def: 'Weight or Measurement: Frachtrate je Frachttonne; berechnet wird das Gewicht in t oder das Volumen in m³ – je nachdem, was größer ist (1 t = 1 m³).' },
    { term: 'NVOCC', def: 'Non-Vessel Operating Common Carrier: Seefrachtunternehmer ohne eigene Schiffe, der eigene Konnossemente ausstellt.' },
    { term: 'Konnossement', def: 'Wertpapier des Seefrachtrechts: Empfangsbestätigung, Beweisurkunde und Traditionspapier; das Original berechtigt zur Herausgabe der Ware.' },
    { term: 'BAF', def: 'Bunker Adjustment Factor: Zuschlag für Treibstoffkosten in der Seefracht.' },
    { term: 'CAF', def: 'Currency Adjustment Factor: Zuschlag für Wechselkursrisiken, meist in Prozent der Grundfracht.' },
    { term: 'THC', def: 'Terminal Handling Charge: Gebühr für den Umschlag des Containers im Terminal.' },
    { term: 'VGM', def: 'Verified Gross Mass: überprüftes Bruttogewicht eines beladenen Containers, das nach SOLAS vor der Verladung vorliegen muss.' },
    { term: 'CFS', def: 'Container Freight Station: Packstation zum Be- und Entladen von LCL-Sendungen.' },
    { term: 'Closing', def: 'Letzter Termin, bis zu dem Container, Dokumente bzw. VGM für ein bestimmtes Schiff beim Terminal oder der Reederei vorliegen müssen.' }
  ],
  example: `# Beispiel: Stahlteile von Dillingen nach Shanghai (Beispielwerte 2026)

Die **Saar-Stahlbau GmbH** in Dillingen exportiert Stahlteile nach Shanghai. Die **Spedition Hochwald Logistik** bucht einen **40'-Standardcontainer** (FCL) über Antwerpen.

**Frachtkosten laut Angebot der Reederei (Beispielwerte):**

| Position | Betrag |
|---|---:|
| Grundfracht 40' Antwerpen–Shanghai | 1.600,00 € |
| BAF | 420,00 € |
| CAF 4 % der Grundfracht | 64,00 € |
| THC Antwerpen | 260,00 € |
| **Summe** | **2.344,00 €** |

**VGM nach Methode 2:**

| Bestandteil | kg |
|---|---:|
| Stahlteile (gewogen) | 19.200 |
| Paletten und Holzkeile | 480 |
| Gurte und Sicherungsmaterial | 70 |
| Tara Container laut Türbeschriftung (Beispiel) | 3.750 |
| **VGM** | **23.500** |

Die Spedition meldet die VGM vor dem Closing an die Reederei. Ohne diese Meldung würde der Container im Terminal stehen bleiben.

**Eine kleinere Sendung** desselben Kunden (3 Kisten, zusammen 1,8 t und 4,5 m³) geht als **LCL**: Weil 4,5 m³ mehr ist als 1,8 t, wird nach **Maß** abgerechnet: 4,5 frt × 55 €/W/M = **247,50 €** Seefracht.`,
  rules: [
    '1 TEU = ein 20\'-Container; ein 40\'-Container = 2 TEU.',
    'FCL wird je Container bezahlt, LCL nach W/M.',
    'W/M: 1 t = 1 m³ – berechnet wird immer der höhere Wert.',
    'Ohne VGM keine Verladung: Der Versender muss das Bruttogewicht des Containers vor dem Closing melden.',
    'Das Original-Konnossement ist ein Wertpapier: Wer es hat, bekommt die Ware.',
    'Containermaße und Nutzlasten sind nur Richtwerte – verbindlich sind Typenschild und Angaben der Reederei.'
  ],
  summary: `- **Containertypen**: 20', 40', 40' High Cube, Reefer, Open Top, Flat Rack, Tank; Maße und Nutzlast nur als **Richtwerte**.
- **FCL** = ganzer Container (Rate je Container), **LCL** = Sammelgut (Rate je W/M).
- **Beteiligte**: Versender, Spediteur, Reederei, NVOCC (ohne eigene Schiffe), Terminal, CFS.
- **Konnossement**: Wertpapier (Empfangsbestätigung, Beweis, Traditionspapier); Arten: Bord-/Übernahme-, Order-/Namens-, rein/unrein, Master/House.
- **W/M**: frachtpflichtige Menge = max(Gewicht in t; Volumen in m³) × Rate.
- **Zuschläge**: BAF (Bunker), CAF (Währung), THC (Terminal).
- **VGM** nach SOLAS seit 1.7.2016: Methode 1 (Container wiegen) oder Methode 2 (Inhalt + Tara).`,
  mistakes: [
    { wrong: 'Bei LCL wird immer nach Gewicht abgerechnet.', right: 'Bei LCL wird nach W/M abgerechnet: Gewicht in t und Volumen in m³ werden verglichen, der höhere Wert gilt.' },
    { wrong: 'Ein NVOCC ist eine Reederei mit eigenen Schiffen.', right: 'Ein NVOCC betreibt keine eigenen Schiffe. Er stellt eigene Konnossemente aus und kauft Stellplätze bei Reedereien.' },
    { wrong: 'Die VGM ist nur das Gewicht der Ware.', right: 'Die VGM ist das Bruttogewicht des beladenen Containers: Ware, Verpackung, Sicherungsmaterial und Leergewicht des Containers.' },
    { wrong: 'Ein Seefrachtbrief (Sea Waybill) funktioniert wie ein Konnossement.', right: 'Der Seefrachtbrief ist kein Wertpapier; die Ware wird ohne Vorlage eines Originals an den genannten Empfänger ausgeliefert.' },
    { wrong: 'In einen 40\'-Container passt immer doppelt so viel Gewicht wie in einen 20\'-Container.', right: 'Das Volumen ist etwa doppelt so groß, die zulässige Nutzlast aber nicht. Schweres Gut passt oft besser in 20\'-Container.' }
  ],
  flashcards: [
    { q: 'Was bedeutet TEU?', a: 'Twenty-foot Equivalent Unit – Zähleinheit; ein 20\'-Container = 1 TEU.' },
    { q: 'Unterschied FCL und LCL?', a: 'FCL = ganzer Container für einen Versender; LCL = Teilladung, die mit anderen Sendungen gesammelt wird.' },
    { q: 'Wie funktioniert die W/M-Regel?', a: '1 t = 1 m³; Gewicht in t und Volumen in m³ werden verglichen, der höhere Wert wird mit der Rate multipliziert.' },
    { q: 'Was ist ein NVOCC?', a: 'Seefrachtunternehmer ohne eigene Schiffe, der eigene Konnossemente (House B/L) ausstellt.' },
    { q: 'Wofür steht BAF?', a: 'Bunker Adjustment Factor – Treibstoffzuschlag.' },
    { q: 'Wofür steht CAF?', a: 'Currency Adjustment Factor – Währungszuschlag.' },
    { q: 'Wofür steht THC?', a: 'Terminal Handling Charge – Umschlagsgebühr im Terminal.' },
    { q: 'Seit wann gilt die VGM-Pflicht nach SOLAS?', a: 'Seit dem 1. Juli 2016.' },
    { q: 'Welche zwei Methoden zur VGM-Ermittlung gibt es?', a: 'Methode 1: beladenen Container wiegen; Methode 2: Inhalt einschließlich Verpackung und Sicherung wiegen und Tara addieren.' },
    { q: 'Welche drei Funktionen hat das Konnossement?', a: 'Empfangsbestätigung, Beweisurkunde für den Frachtvertrag, Traditions- bzw. Wertpapier.' },
    { q: 'Wann nimmt man einen Open-Top-Container?', a: 'Wenn die Ware von oben per Kran geladen werden muss oder zu hoch für einen Standardcontainer ist.' }
  ],
  tasks: [
    {
      id: 'lf10-container-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne den Containertyp der passenden Ladung zu.',
      pairs: [
        ['40\' High Cube', 'Leichte, voluminöse Polstermöbel'],
        ['Reefer', 'Tiefgekühlte Lebensmittel'],
        ['Open Top', 'Hohe Maschine, die per Kran von oben geladen wird'],
        ['Flat Rack', 'Übergroßes Baumaschinenteil ohne Seitenwände'],
        ['20\' Standard', 'Schwere Stahlteile auf Paletten']
      ],
      hints: ['High Cube = mehr Höhe und Volumen.', 'Schweres Gut erreicht die Nutzlast schon bei wenig Volumen.'],
      solution: 'High Cube: viel Volumen für leichtes Gut. Reefer: Kühlung. Open Top: Beladung von oben. Flat Rack: Überbreite/Überhöhe, Schwergut. 20\' Standard: schweres Gut, weil das Gewichtslimit vor dem Volumen erreicht wird.'
    },
    {
      id: 'lf10-container-a2', type: 'calc', difficulty: 2, points: 3,
      q: 'Eine LCL-Sendung besteht aus 4 Paletten mit je 1,20 m × 0,80 m × 1,50 m und wiegt insgesamt 2.400 kg. Die Rate beträgt 52 € je W/M (Beispielwert). Berechne Volumen, frachtpflichtige Menge und Seefracht.',
      formula: 'Volumen = L × B × H × Anzahl; frachtpflichtige Menge = max(t; m³); Fracht = Menge × Rate',
      fields: [
        { id: 'vol', label: 'Volumen', unit: 'm³', answer: 5.76, tol: 0.01 },
        { id: 'frt', label: 'Frachtpflichtige Menge', unit: 'frt', answer: 5.76, tol: 0.01 },
        { id: 'fracht', label: 'Seefracht', unit: '€', answer: 299.52, tol: 0.01 }
      ],
      hints: ['1,20 × 0,80 × 1,50 = 1,44 m³ je Palette.', 'Vergleiche 2,4 t mit dem Volumen.'],
      solution: `**Volumen:** 1,20 m × 0,80 m × 1,50 m = 1,44 m³ je Palette; 1,44 m³ × 4 = **5,76 m³**

**Gewicht:** 2.400 kg = 2,4 t

**Vergleich:** 5,76 m³ > 2,4 t → Abrechnung nach **Maß**: **5,76 frt**

**Seefracht:** 5,76 frt × 52 €/frt = **299,52 €**`
    },
    {
      id: 'lf10-container-a3', type: 'calc', difficulty: 2, points: 2,
      q: 'Eine LCL-Sendung Gussteile wiegt 6.800 kg und hat ein Volumen von 4,2 m³. Die Rate beträgt 48 € je W/M (Beispielwert). Berechne die frachtpflichtige Menge und die Seefracht.',
      formula: 'Fracht = max(Gewicht in t; Volumen in m³) × Rate',
      fields: [
        { id: 'frt', label: 'Frachtpflichtige Menge', unit: 'frt', answer: 6.8, tol: 0.01 },
        { id: 'fracht', label: 'Seefracht', unit: '€', answer: 326.4, tol: 0.01 }
      ],
      hints: ['Rechne kg in t um.', '6,8 t oder 4,2 m³ – was ist größer?'],
      solution: `**Gewicht:** 6.800 kg = 6,8 t; **Volumen:** 4,2 m³

**Vergleich:** 6,8 > 4,2 → Abrechnung nach **Gewicht**: **6,8 frt**

**Seefracht:** 6,8 frt × 48 €/frt = **326,40 €**`
    },
    {
      id: 'lf10-container-a4', type: 'calc', difficulty: 2, points: 3,
      q: 'Für einen 40\' High Cube (FCL) Hamburg–New York nennt die Reederei (Beispielwerte): Grundfracht 1.950 €, BAF 380 €, CAF 5 % der Grundfracht, THC Hamburg 260 €. Berechne den CAF, die Summe der Zuschläge und die Gesamtkosten.',
      formula: 'Gesamt = Grundfracht + BAF + CAF + THC; CAF = Grundfracht × 5 %',
      fields: [
        { id: 'caf', label: 'CAF', unit: '€', answer: 97.5, tol: 0.01 },
        { id: 'zus', label: 'Summe Zuschläge (BAF + CAF + THC)', unit: '€', answer: 737.5, tol: 0.01 },
        { id: 'gesamt', label: 'Gesamtkosten', unit: '€', answer: 2687.5, tol: 0.01 }
      ],
      hints: ['CAF bezieht sich hier auf die Grundfracht.', 'Zähle alle Zuschläge zusammen und addiere die Grundfracht.'],
      solution: `**CAF:** 1.950 € × 5 % = **97,50 €**

**Zuschläge:** 380 € + 97,50 € + 260 € = **737,50 €**

**Gesamtkosten:** 1.950 € + 737,50 € = **2.687,50 €**`
    },
    {
      id: 'lf10-container-a5', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Versender ermittelt die VGM nach **Methode 2**: Ware 14.350 kg, Paletten 420 kg, Stau- und Sicherungsmaterial 85 kg, Tara des 20\'-Containers laut Beschriftung 2.230 kg (Beispielwert). Berechne das Gewicht des Inhalts und die VGM.',
      formula: 'VGM = Ware + Verpackung + Sicherungsmaterial + Tara',
      fields: [
        { id: 'inhalt', label: 'Gewicht Inhalt', unit: 'kg', answer: 14855, tol: 0.5 },
        { id: 'vgm', label: 'VGM', unit: 'kg', answer: 17085, tol: 0.5 }
      ],
      hints: ['Zum Inhalt gehören auch Paletten und Sicherungsmaterial.', 'Zum Schluss kommt das Leergewicht des Containers dazu.'],
      solution: `**Inhalt:** 14.350 kg + 420 kg + 85 kg = **14.855 kg**

**VGM:** 14.855 kg + 2.230 kg = **17.085 kg**

Die VGM muss vor dem Closing an die Reederei gemeldet werden.`
    },
    {
      id: 'lf10-container-a6', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zum Konnossement sind richtig? (Mehrfachauswahl)',
      options: [
        'Wer das Original-Konnossement besitzt, kann im Bestimmungshafen die Ware herausverlangen.',
        'Ein Bordkonnossement bestätigt, dass die Ware auf einem bestimmten Schiff verladen ist.',
        'Ein Seefrachtbrief ist ebenfalls ein Wertpapier.',
        'Ein Vermerk „Verpackung beschädigt“ macht das Konnossement unrein.',
        'Ein House B/L wird von der Reederei an den NVOCC ausgestellt.'
      ],
      correct: [0, 1, 3],
      hints: ['Denke an die Funktion als Traditionspapier.', 'Master B/L: Reederei → NVOCC; House B/L: NVOCC → Kunde.'],
      solution: 'Richtig sind **A, B und D**. Der Seefrachtbrief ist kein Wertpapier (C falsch). Die Reederei stellt dem NVOCC das **Master** B/L aus; das **House** B/L stellt der NVOCC seinem Kunden aus (E falsch).'
    },
    {
      id: 'lf10-container-a7', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Ein Container, den ein Versender allein füllt, heißt [[FCL]]-Sendung. Eine Teilladung nennt man [[LCL]]. Bei LCL gilt: 1 t entspricht 1 [[m³|Kubikmeter|cbm]]. Der Treibstoffzuschlag heißt [[BAF]], die Umschlagsgebühr im Terminal [[THC]].',
      hints: ['Full und Less.', 'Bunker und Terminal.'],
      solution: 'FCL (Full Container Load), LCL (Less than Container Load), 1 t = 1 m³, BAF (Bunker Adjustment Factor), THC (Terminal Handling Charge).'
    },
    {
      id: 'lf10-container-a8', type: 'order', difficulty: 2, points: 6,
      q: 'Bringe den Ablauf einer FCL-Exportsendung in die richtige Reihenfolge.',
      items: [
        'Buchung bei der Reederei mit Bestätigung von Schiff und Closing',
        'Leercontainer im Depot abholen und zum Versender bringen',
        'Container beladen, sichern und verplomben',
        'VGM ermitteln und an die Reederei melden',
        'Container bis zum Closing im Terminal anliefern',
        'Verladung auf das Schiff und Ausstellung des Konnossements'
      ],
      hints: ['Ohne Buchung gibt es keinen Leercontainer.', 'Das Konnossement entsteht bei bzw. nach der Verladung.'],
      solution: 'Buchung → Leercontainer → Beladen/Verplomben → VGM melden → Anlieferung bis Closing → Verladung und Konnossement. Die Ausfuhranmeldung läuft parallel und muss vor der Verladung erledigt sein.'
    },
    {
      id: 'lf10-container-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre einem neuen Kollegen, was ein NVOCC ist und warum ein Spediteur als NVOCC auftreten kann.',
      model: 'Ein NVOCC (Non-Vessel Operating Common Carrier) ist ein Seefrachtunternehmer, der keine eigenen Schiffe betreibt. Er kauft Stellplätze bei Reedereien und stellt seinen Kunden eigene Konnossemente (House B/L) aus. Gegenüber der Reederei ist er selbst Versender und erhält das Master B/L. Ein Spediteur tritt als NVOCC auf, um Sammelladungen (LCL) zu bilden, bessere Raten zu erzielen und dem Kunden ein eigenes Transportdokument anzubieten.',
      criteria: [
        { text: 'nennt: keine eigenen Schiffe', keywords: ['keine eigenen Schiffe|ohne eigene Schiffe|ohne Schiffe|keine Schiffe'], points: 1 },
        { text: 'nennt eigene Konnossemente/House B/L', keywords: ['House|eigene Konnossement|eigenes Konnossement|eigenes Transportdokument'], points: 1 },
        { text: 'nennt Vorteil wie Sammelladung oder bessere Raten', keywords: ['Sammel|LCL|Rate|günstig'], points: 1 }
      ],
      hints: ['Was bedeutet „Non-Vessel Operating“?', 'Welches Dokument bekommt der Kunde, welches der NVOCC?'],
      solution: 'NVOCC = Seefrachtunternehmer **ohne eigene Schiffe**. Er stellt ein **House B/L** an den Kunden aus und erhält von der Reederei das **Master B/L**. Vorteil: **Sammelladungen** (LCL) bilden, bessere **Raten** einkaufen, eigenes Dokument und eigene Haftung anbieten.'
    },
    {
      id: 'lf10-container-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: LCL oder FCL?',
      intro: `Ein Kunde aus Völklingen möchte 28 Kisten Ersatzteile nach Dubai verschiffen. Gesamtgewicht 5,2 t, Gesamtvolumen 14,5 m³. Die Spedition hat zwei Angebote (Beispielwerte):

- **LCL**: 62 € je W/M plus CFS-Gebühr 15 € je W/M
- **FCL 20'**: Grundfracht 780 €, BAF 210 €, THC 255 €; der Kunde belädt selbst und bekommt den Container für 4 Stunden kostenlos gestellt (Vorlauf in beiden Fällen gleich teuer)`,
      hints: ['Bei LCL zuerst die frachtpflichtige Menge bestimmen.', 'Vergleiche danach beide Summen.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf10-container-a10-1', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne die frachtpflichtige Menge und die Gesamtkosten LCL.',
          formula: 'LCL = max(t; m³) × (Rate + CFS-Gebühr)',
          fields: [
            { id: 'frt', label: 'Frachtpflichtige Menge', unit: 'frt', answer: 14.5, tol: 0.01 },
            { id: 'lcl', label: 'Kosten LCL', unit: '€', answer: 1116.5, tol: 0.01 }
          ],
          hints: ['14,5 m³ > 5,2 t.', '62 € + 15 € = 77 € je W/M.'],
          solution: `**Vergleich:** 14,5 m³ > 5,2 t → **14,5 frt**

**Kosten LCL:** 14,5 × (62 € + 15 €) = 14,5 × 77 € = **1.116,50 €**`
        },
        {
          id: 'lf10-container-a10-2', type: 'calc', difficulty: 1, points: 1,
          q: 'Berechne die Kosten FCL.',
          formula: 'FCL = Grundfracht + BAF + THC',
          fields: [
            { id: 'fcl', label: 'Kosten FCL', unit: '€', answer: 1245, tol: 0.01 }
          ],
          hints: ['Addiere alle drei Positionen.', '780 + 210 + 255.'],
          solution: '**Kosten FCL:** 780 € + 210 € + 255 € = **1.245,00 €**'
        },
        {
          id: 'lf10-container-a10-3', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Aussagen zur Entscheidung sind richtig? (Mehrfachauswahl)',
          options: [
            'LCL ist in diesem Fall um 128,50 € günstiger.',
            'Für FCL spricht, dass die Ware nicht mit fremden Sendungen umgeschlagen wird und das Beschädigungsrisiko sinkt.',
            'Bei FCL muss keine VGM gemeldet werden, weil der Kunde selbst belädt.',
            'Bei LCL muss die Sendung zusätzlich in der CFS umgeschlagen werden, was mehr Zeit kosten kann.'
          ],
          correct: [0, 1, 3],
          hints: ['1.245,00 € − 1.116,50 € = ?', 'Gilt die VGM-Pflicht für jeden beladenen Container?'],
          solution: 'Richtig sind **A, B und D**. Die Differenz beträgt 1.245,00 € − 1.116,50 € = **128,50 €** zugunsten LCL. FCL bietet weniger Umschlag und damit weniger Risiko. LCL braucht den zusätzlichen Umschlag in der CFS. Die VGM-Pflicht gilt für **jeden** beladenen Container (C falsch).'
        }
      ]
    }
  ],
  quiz: ['lf10-container-a2', 'lf10-container-a3', 'lf10-container-a6', 'lf10-container-a7', 'lf10-container-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 10, Inhalte: Disposition von Frachtraum und Lademitteln (Container); Spediteurversanddokumente; Spezielles Frachtrecht' },
    { title: 'Handelsgesetzbuch § 513 Anspruch auf Ausstellung eines Konnossements', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__513.html', asOf: '2026' },
    { title: 'Verification of Gross Mass of Packed Containers (SOLAS Chapter VI Regulation 2)', publisher: 'Marine Department, Government of the Hong Kong SAR', url: 'https://www.mardep.gov.hk/en/public-services/port-services/miss/miss-vgm/index.html', asOf: 'in Kraft seit 1.7.2016, geprüft 2026' }
  ],
  links: ['lf10-incoterms', 'lf10-multimodal', 'lf10-zahlungssicherung', 'lf10-ausfuhrverfahren']
};
