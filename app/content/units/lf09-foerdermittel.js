export default {
  id: 'lf09-foerdermittel',
  area: 'LF09',
  topic: 'lf09-foerdermittel',
  title: 'Förder- und Lagertechnik im Überblick',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Maße und Lastangaben der EPAL-Europalette und der EPAL-Gitterbox laut EPAL-Produktdatenblättern; Voraussetzungen für Staplerfahrer nach § 7 DGUV Vorschrift 68 „Flurförderzeuge“ und DGUV Grundsatz 308-001, Stand der Prüfung Oktober 2026. Maße von Regalen, Gängen und Flächen in den Aufgaben sind Beispielwerte.'
  },
  goals: [
    'Ich kann Fachboden-, Paletten-, Durchlauf-, Einfahr-, Verschiebe- und Hochregal unterscheiden und einem Lagergut zuordnen.',
    'Ich kann Block- und Zeilenlagerung am Boden in Bezug auf Flächenbedarf und Zugriff beurteilen.',
    'Ich kann Stetig- und Unstetigförderer unterscheiden und Beispiele nennen.',
    'Ich kann Gabelstapler, Schubmaststapler, Hubwagen und fahrerlose Transportsysteme (FTS) mit ihren Einsatzbereichen beschreiben.',
    'Ich kann Maße und Belastbarkeit von Europalette und Gitterbox nennen.',
    'Ich kann die Voraussetzungen nennen, unter denen jemand einen Gabelstapler fahren darf.',
    'Ich kann Palettenstellplätze und den Flächenbedarf eines Lagers berechnen.'
  ],
  simple: `# Worum geht es?

Ein Lager braucht zwei Arten von Technik:

1. **Lagertechnik:** Wo und wie steht die Ware? Auf dem **Boden** oder im **Regal**.
2. **Fördertechnik:** Womit wird die Ware bewegt? Mit **Hubwagen**, **Gabelstapler**, **Förderband** oder **fahrerlosen Fahrzeugen**.

Dazu kommen die **Ladungsträger**, auf oder in denen die Ware liegt: **Europalette**, **Gitterbox**, Kunststoffbehälter.

# Die wichtigsten Regale

- **Fachbodenregal:** Regal mit Böden für Kartons und Kleinteile, von Hand bestückt.
- **Palettenregal:** Paletten stehen auf Trägern übereinander, jede Palette ist direkt erreichbar.
- **Durchlaufregal:** Hinten wird eingelagert, die Palette rollt nach vorn, vorn wird entnommen – automatisch **FIFO**.
- **Einfahrregal:** Der Stapler fährt in das Regal hinein; viele Paletten eines Artikels hintereinander.
- **Verschieberegal:** Die Regale stehen auf Schienen und werden zusammengeschoben; nur dort, wo man hin will, öffnet sich ein Gang.
- **Hochregal:** Sehr hohe Regale, meist vollautomatisch mit Regalbediengeräten.

# Die Europalette

Die Europalette ist **1.200 mm lang und 800 mm breit** (Grundfläche 0,96 m²) und 144 mm hoch. Sie wiegt etwa 25 kg und darf laut EPAL mit bis zu 1.500 kg belastet werden.

# Sicherheit

Gabelstapler sind gefährlich. Fahren darf nur, wer **mindestens 18 Jahre alt**, geeignet und **ausgebildet** ist, seine Befähigung nachgewiesen hat und vom Unternehmer **schriftlich beauftragt** wurde. Die Ausbildung wird umgangssprachlich „Staplerschein“ genannt.

> Lagerarten, Block- und Zeilenlagerung im Grundsatz sowie den Lagervertrag findest du in der Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“, den Ablauf im Lager in „Lagerorganisation, Lagerpapiere und Lagerkennzahlen“.`,
  deep: `# 1. Bodenlagerung

| | Blocklagerung | Zeilenlagerung |
|---|---|---|
| Anordnung | Ladeeinheiten dicht an dicht, oft gestapelt | Reihen mit Bedienungsgang davor |
| Technik | keine Regale, nur Stapler | keine Regale, nur Stapler |
| Flächennutzung | sehr hoch | mittel |
| Zugriff | nur auf vordere/oberste Einheit (LIFO) | jede Reihe erreichbar |
| Voraussetzung | stapelfähiges Gut (z. B. Getränke, Gitterboxen) | stapelfähig oder einzeln stehend |
| Kosten | sehr gering | gering |

Die Stapelhöhe hängt von der Belastbarkeit des Gutes und des Ladungsträgers ab. Laut EPAL darf z. B. die **unterste Europalette** bei der Stapelung beladener Paletten auf festem, ebenem Boden höchstens **5.500 kg** Auflast tragen, die **unterste Gitterbox** höchstens **6.000 kg**.

# 2. Regalarten

| Regal | Aufbau | Zugriff / Prinzip | Einsatz |
|---|---|---|---|
| **Fachbodenregal** | Stützen mit Fachböden, Höhe meist für Handbedienung | direkter Zugriff, Mann-zur-Ware | Kleinteile, Kartons, Ersatzteile, Kommissionierlager |
| **Palettenregal** (Zeilenregal) | Rahmen und Traversen, mehrere Ebenen | jede Palette direkt erreichbar, FIFO möglich | viele Artikel, Paletten |
| **Durchlaufregal** | geneigte Rollenbahnen, Beladung auf der einen, Entnahme auf der anderen Seite | **FIFO zwingend**, Ein- und Auslagerung getrennt | Lebensmittel, Getränke, Schnelldreher |
| **Einfahrregal** (Drive-in) | Stapler fährt in Regalgassen, Paletten liegen auf Konsolen hintereinander | meist **LIFO** (eine Bedienseite); als Durchfahrregal (Drive-through) mit zwei Seiten FIFO | wenige Artikel, große Mengen je Artikel, z. B. Tiefkühlware |
| **Verschieberegal** | Palettenregale auf verfahrbaren Unterwagen | nur ein Gang wird geöffnet; sehr hohe Raumnutzung, langsamer Zugriff | teure Lagerfläche (Kühlhaus), Langsamdreher, Archive |
| **Hochregal** | sehr hohe, oft tragende Regalkonstruktion (Silobauweise möglich) | meist **automatisch** durch Regalbediengeräte (RBG), schmale Gassen | große Palettenmengen, Zentrallager |
| **Kragarmregal** | einseitig auskragende Arme ohne vordere Stützen | seitlicher Zugriff | Langgut: Rohre, Profile, Holz |

**Grundregel:** Je **dichter** die Lagerung (Block, Einfahr-, Verschieberegal), desto **besser die Flächennutzung**, desto **schlechter der Einzelzugriff**. Je mehr **Automatik** (Hochregal, RBG), desto **höher Investition und Leistung**, desto **geringer die Flexibilität**.

# 3. Fördermittel

**Stetigförderer** bewegen Güter **kontinuierlich** auf einem festen Weg:
- Rollenbahn, Kettenförderer (Paletten), Bandförderer, Gurtförderer (Pakete), Hängeförderer (Textilien), Rutschen, Sorter.
- Vorteile: hoher Durchsatz, automatisierbar, wenig Personal. Nachteile: fester Verlauf, hohe Investition, Hindernis im Raum, Ausfall stoppt den Fluss.

**Unstetigförderer** bewegen Güter **in Einzelspielen** (Aufnehmen – Fahren – Abgeben – Leerfahrt):
- Handhubwagen, Elektro-Niederhubwagen, Gabelstapler, Schubmaststapler, Schmalgangstapler, Kran, Regalbediengerät, FTS.
- Vorteile: flexibel, beliebige Wege. Nachteile: Leerfahrten, Fahrer nötig (außer FTS/RBG), Unfallgefahr.

**Flurförderzeuge** sind Fördermittel, die sich **auf dem Boden** (Flur) bewegen und nicht an Schienen gebunden sind:

| Gerät | Merkmale | typischer Einsatz |
|---|---|---|
| **Handhubwagen** | von Hand gezogen, hebt nur wenige Zentimeter | Lkw be- und entladen, kurze Wege |
| **Elektro-Niederhubwagen** | elektrisch, Mitgänger oder Standplattform | Rampe, Bereitstellung, Horizontaltransport |
| **Gabelstapler** (Frontstapler, Gegengewichtsstapler) | Gegengewicht am Heck, Elektro-, Diesel- oder Gasantrieb, auch im Freien | Lkw-Verladung, Hof, Bodenlager, niedrige Regale |
| **Schubmaststapler** | Mast fährt zwischen den Radarmen vor und zurück, kompakte Bauweise, kein großes Gegengewicht | Hallenbetrieb, Palettenregal, schmalere Gänge, große Hubhöhen |
| **Schmalgang- bzw. Hochregalstapler** | Gabel dreht seitlich, fährt geführt im sehr schmalen Gang | hohe Regale mit sehr schmalen Gängen |
| **Fahrerloses Transportsystem (FTS)** | automatisch geführte Fahrzeuge (z. B. per Laser, Kamera, Bodenmarken), Leitrechner verteilt Fahraufträge | wiederkehrende Transporte, Schichtbetrieb, Ware-zum-Mann |

# 4. Ladungsträger

| Ladungsträger | Maße und Kennwerte (laut EPAL) | Besonderheit |
|---|---|---|
| **EPAL-Europalette** | 1.200 mm × 800 mm × 144 mm, ca. 25 kg, sichere Arbeitslast 1.500 kg | genormtes Tauschsystem; Grundfläche 0,96 m² |
| **EPAL-Gitterbox** | außen 1.240 mm × 835 mm, innen 1.200 mm × 800 mm, Tragfähigkeit 1.500 kg (ab Baujahr 1990), Eigengewicht 70 kg (ab Baujahr 2011) | stapelbar, für lose Teile und Kleinteile |
| **Kunststoffbehälter (Kleinladungsträger, KLT)** | Maße passend zur Palette (Modulmaße) | Kleinteilelager, Automatik, Ware-zum-Mann |

Weil sich Regalfächer, Lkw-Ladeflächen und Behälter an der Palette ausrichten, spricht man von **Modulmaßen**: Die Grundfläche der Palette ist ein Baustein der ganzen Logistikkette.

# 5. Arbeitssicherheit beim Staplerbetrieb

Nach **§ 7 DGUV Vorschrift 68 „Flurförderzeuge“** darf der Unternehmer mit dem **selbstständigen Steuern** von Flurförderzeugen mit Fahrersitz oder Fahrerstand nur Personen beauftragen, die
- **mindestens 18 Jahre** alt sind,
- für diese Tätigkeit **geeignet** und darin **ausgebildet** sind und
- ihre **Befähigung** nachgewiesen haben.

Der **Auftrag muss schriftlich** erteilt werden. Beschäftigte dürfen Flurförderzeuge nur steuern, wenn sie dazu beauftragt sind. Für Mitgänger-Flurförderzeuge genügt, dass die Person geeignet und **unterwiesen** ist.

Wie die Ausbildung aufgebaut sein soll, beschreibt der **DGUV Grundsatz 308-001** „Ausbildung und Beauftragung der Fahrer von Flurförderzeugen mit Fahrersitz und Fahrerstand“. Der Ausbildungsnachweis ist der umgangssprachliche **„Staplerschein“**. Ein Kfz-Führerschein ersetzt ihn nicht.

**Tragfähigkeitsdiagramm (Lastdiagramm):** Jeder Stapler hat ein Schild, das zeigt, welche Last er bei welchem **Lastschwerpunktabstand** und welcher **Hubhöhe** tragen darf. Liegt der Schwerpunkt der Last weiter vorn oder wird höher gehoben, **sinkt die zulässige Last** (Resttragfähigkeit). Überlast kann den Stapler nach vorn kippen lassen.

Weitere Grundregeln: Last tief und zum Mast geneigt transportieren, bei Sichtbehinderung rückwärts fahren oder Einweiser nutzen, keine Personen auf der Gabel mitnehmen, Fußgängerwege beachten, Schäden an Regalen (z. B. Anfahrschäden an Stützen) sofort melden.`,
  terms: [
    { term: 'Palettenregal', def: 'Regal aus Rahmen und Traversen, in dem Paletten auf mehreren Ebenen stehen; jede Palette ist direkt zugänglich.' },
    { term: 'Durchlaufregal', def: 'Regal mit geneigten Rollenbahnen; Beschickung auf einer, Entnahme auf der anderen Seite; erzwingt FIFO.' },
    { term: 'Einfahrregal', def: 'Kompaktregal, in das der Stapler hineinfährt; Paletten eines Artikels liegen hintereinander auf Konsolen; meist LIFO.' },
    { term: 'Verschieberegal', def: 'Regalzeilen auf verfahrbaren Unterwagen; es wird nur der benötigte Gang geöffnet, dadurch sehr hohe Raumnutzung.' },
    { term: 'Hochregallager', def: 'Lager mit sehr hohen Regalen, meist automatisch durch Regalbediengeräte in schmalen Gassen bedient.' },
    { term: 'Stetigförderer', def: 'Fördermittel, das Güter kontinuierlich auf festgelegtem Weg bewegt, z. B. Rollenbahn, Bandförderer.' },
    { term: 'Unstetigförderer', def: 'Fördermittel, das Güter in einzelnen Arbeitsspielen bewegt, z. B. Gabelstapler, Kran, Regalbediengerät.' },
    { term: 'Flurförderzeug', def: 'Auf dem Boden fahrendes, nicht schienengebundenes Fördermittel, z. B. Hubwagen, Gabelstapler, Schubmaststapler.' },
    { term: 'Schubmaststapler', def: 'Stapler, dessen Hubmast zwischen den Radarmen vor- und zurückfährt; kompakt, für Hallen und schmalere Regalgänge.' },
    { term: 'Fahrerloses Transportsystem (FTS)', def: 'Automatisch geführte Fahrzeuge, die von einem Leitrechner Transportaufträge erhalten.' },
    { term: 'Europalette', def: 'Genormte Tauschpalette (EPAL) mit 1.200 mm × 800 mm × 144 mm, ca. 25 kg, sichere Arbeitslast 1.500 kg.' },
    { term: 'Tragfähigkeitsdiagramm', def: 'Schild am Stapler, das die zulässige Last abhängig von Lastschwerpunktabstand und Hubhöhe angibt.' }
  ],
  example: `# Neues Lagerkonzept bei der Saarlogistik GmbH, Neunkirchen (Beispiel)

Die Saarlogistik GmbH plant eine Halle für drei Kunden. Der Lagerleiter ordnet jedem Kunden die passende Technik zu:

| Kunde | Lagergut | Lösung | Begründung |
|---|---|---|---|
| Bliesgau Getränke GmbH | 6 Artikel, je Artikel bis zu 300 Paletten, MHD | **Durchlaufregal** | große Mengen je Artikel, FIFO bzw. FEFO wird durch die Technik erzwungen |
| Saar-Autoteile KG | 8.000 Ersatzteile, meist Kleinteile | **Fachbodenregal** und Kunststoffbehälter, Kommissionierung per Scanner | viele Artikel, kleine Entnahmemengen, Mann-zur-Ware |
| Homburger Baustoffe GmbH | Pflastersteine auf Paletten, wetterfest | **Blocklager im Freilager**, 3-fach gestapelt | billig, stapelbar, keine Alterung, Zugriff LIFO genügt |

**Fördertechnik:** Für die Verladung an den Rampen nutzt die Saarlogistik Elektro-Niederhubwagen; im Palettenregal fahren **Schubmaststapler**, weil sie mit schmaleren Gängen auskommen als Frontstapler. Im Freilager wird ein **Diesel-Frontstapler** eingesetzt. Zwischen Wareneingang und Regal sollen später **FTS** pendeln.

**Sicherheit:** Der neue Mitarbeiter Jonas (19) hat bei einem Bildungsträger die Ausbildung nach DGUV Grundsatz 308-001 bestanden. Bevor er fährt, wird er auf den Schubmaststapler und die Halle **eingewiesen** und vom Lagerleiter **schriftlich beauftragt**. Die Auszubildende Lea (17) darf noch nicht selbstständig Stapler fahren.`,
  rules: [
    'Dicht lagern (Block, Einfahr-, Verschieberegal) spart Fläche, kostet aber Zugriff.',
    'Durchlaufregal = FIFO durch die Technik; Einfahrregal mit einer Bedienseite = LIFO.',
    'Stetigförderer = kontinuierlich und ortsfest; Unstetigförderer = in Einzelspielen und flexibel.',
    'Europalette: 1.200 × 800 mm = 0,96 m² Grundfläche – immer mit dieser Fläche rechnen.',
    'Bei Stellplatzberechnungen immer abrunden: Eine angefangene Palette passt nicht.',
    'Staplerfahrer: mindestens 18, geeignet, ausgebildet, Befähigung nachgewiesen und schriftlich beauftragt (§ 7 DGUV Vorschrift 68).',
    'Nie über das Tragfähigkeitsdiagramm hinaus heben: Mit Hubhöhe und Schwerpunktabstand sinkt die zulässige Last.'
  ],
  summary: `- **Bodenlagerung**: Block (dicht, LIFO) oder Zeile (Gang, direkter Zugriff).
- **Regale**: Fachboden (Kleinteile), Palettenregal (direkter Zugriff), Durchlauf (FIFO), Einfahr (kompakt, LIFO), Verschiebe (sehr kompakt, langsam), Hochregal (automatisch, RBG), Kragarm (Langgut).
- **Fördermittel**: Stetigförderer (Band, Rollenbahn) und Unstetigförderer (Stapler, Kran, RBG, FTS); Flurförderzeuge fahren auf dem Boden.
- **Ladungsträger**: Europalette 1.200 × 800 × 144 mm, 1.500 kg; Gitterbox innen 1.200 × 800 mm, 1.500 kg.
- **Sicherheit**: Staplerfahrer nach § 7 DGUV Vorschrift 68 ab 18, ausgebildet (DGUV Grundsatz 308-001), schriftlich beauftragt; Lastdiagramm beachten.
- **Rechnen**: Stellplätze = Zeilen × Felder × Paletten je Feld × Ebenen; Flächenbedarf = Grundflächen × 0,96 m² + Zuschlag für Gänge.`,
  mistakes: [
    { wrong: 'Im Einfahrregal kann jede Palette direkt entnommen werden.', right: 'Im Einfahrregal stehen Paletten hintereinander; zugänglich ist nur die vorderste. Deshalb meist LIFO und nur wenige Artikel je Gasse.' },
    { wrong: 'Ein Gabelstapler ist ein Stetigförderer, weil er ständig fährt.', right: 'Ein Stapler arbeitet in einzelnen Spielen (aufnehmen, fahren, abgeben, leer zurück) und ist daher ein Unstetigförderer.' },
    { wrong: 'Wer einen Pkw-Führerschein hat, darf im Lager Stapler fahren.', right: 'Erforderlich sind Eignung, Ausbildung, nachgewiesene Befähigung, Mindestalter 18 und ein schriftlicher Auftrag des Unternehmers.' },
    { wrong: '20,8 Paletten passen in eine Reihe, also rechne ich mit 21.', right: 'Stellplätze werden immer abgerundet: Es passen nur 20 vollständige Paletten.' },
    { wrong: 'Die Europalette ist 1.200 × 1.000 mm groß.', right: 'Die EPAL-Europalette misst 1.200 × 800 mm (0,96 m²).' },
    { wrong: 'Der Stapler trägt immer seine Nenntragfähigkeit, egal wie hoch gehoben wird.', right: 'Die zulässige Last hängt laut Tragfähigkeitsdiagramm von Hubhöhe und Lastschwerpunktabstand ab und kann deutlich sinken.' }
  ],
  flashcards: [
    { q: 'Welches Regal erzwingt das FIFO-Prinzip?', a: 'Das Durchlaufregal: Einlagerung hinten, Entnahme vorn.' },
    { q: 'Vorteil und Nachteil des Verschieberegals?', a: 'Vorteil: sehr hohe Flächen- und Raumnutzung. Nachteil: langsamer Zugriff, weil erst ein Gang geöffnet werden muss.' },
    { q: 'Für welche Güter eignet sich ein Kragarmregal?', a: 'Für Langgut wie Rohre, Profile, Holz.' },
    { q: 'Unterschied Stetig- und Unstetigförderer?', a: 'Stetigförderer fördern kontinuierlich auf festem Weg (Band, Rollenbahn); Unstetigförderer in Einzelspielen auf beliebigem Weg (Stapler, Kran).' },
    { q: 'Wodurch unterscheidet sich der Schubmaststapler vom Frontstapler?', a: 'Sein Mast fährt zwischen den Radarmen vor und zurück; er ist kompakter, braucht schmalere Gänge und wird vor allem in Hallen eingesetzt.' },
    { q: 'Was ist ein FTS?', a: 'Ein fahrerloses Transportsystem: automatisch geführte Fahrzeuge, die ein Leitrechner steuert.' },
    { q: 'Maße und Grundfläche der Europalette?', a: '1.200 mm × 800 mm × 144 mm; Grundfläche 0,96 m².' },
    { q: 'Wie schwer darf eine Europalette laut EPAL beladen werden?', a: 'Sichere Arbeitslast 1.500 kg.' },
    { q: 'Welche Voraussetzungen nennt § 7 DGUV Vorschrift 68 für Staplerfahrer?', a: 'Mindestens 18 Jahre, geeignet, ausgebildet, Befähigung nachgewiesen, schriftlicher Auftrag des Unternehmers.' },
    { q: 'Was zeigt das Tragfähigkeitsdiagramm?', a: 'Die zulässige Last je nach Lastschwerpunktabstand und Hubhöhe.' },
    { q: 'Formel Palettenstellplätze im Regal?', a: 'Regalzeilen × Felder je Zeile × Paletten je Feld × Ebenen.' }
  ],
  tasks: [
    {
      id: 'lf09-foerdermittel-a1', type: 'match', difficulty: 1, points: 6,
      q: 'Ordne jedem Regal die passende Beschreibung zu.',
      pairs: [
        ['Fachbodenregal', 'Kleinteile und Kartons, von Hand bestückt'],
        ['Palettenregal', 'Jede Palette ist auf Traversen direkt erreichbar'],
        ['Durchlaufregal', 'Geneigte Rollenbahnen, Entnahme auf der Gegenseite'],
        ['Einfahrregal', 'Stapler fährt in die Regalgasse, Paletten hintereinander'],
        ['Verschieberegal', 'Regale auf Schienen, nur ein Gang wird geöffnet'],
        ['Kragarmregal', 'Arme ohne vordere Stütze für Rohre und Profile']
      ],
      hints: ['Achte darauf, wie der Zugriff erfolgt.', 'Langgut braucht ein Regal ohne störende vordere Stützen.'],
      solution: 'Fachbodenregal = Kleinteile; Palettenregal = direkter Zugriff auf jede Palette; Durchlaufregal = Rollenbahnen mit Gefälle (FIFO); Einfahrregal = Stapler fährt hinein (meist LIFO); Verschieberegal = verfahrbare Regale; Kragarmregal = Langgut.'
    },
    {
      id: 'lf09-foerdermittel-a2', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Fördermittel sind **Stetigförderer**? (Mehrfachauswahl)',
      options: ['Rollenbahn', 'Schubmaststapler', 'Gurtförderband im Paketzentrum', 'Elektro-Niederhubwagen', 'Hängeförderer für Textilien', 'Fahrerloses Transportfahrzeug'],
      correct: [0, 2, 4],
      hints: ['Stetigförderer arbeiten kontinuierlich auf einem festen Weg.', 'Alles, was einzeln hin und her fährt, ist ein Unstetigförderer.'],
      solution: '**Stetigförderer**: Rollenbahn, Gurtförderband, Hängeförderer – sie fördern kontinuierlich auf festem Weg. Schubmaststapler, Niederhubwagen und FTS sind **Unstetigförderer**: Sie fahren in einzelnen Spielen und frei im Raum.'
    },
    {
      id: 'lf09-foerdermittel-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Angaben zu den Ladungsträgern (laut EPAL).',
      text: 'Die Europalette ist [[1200|1.200]] mm lang, [[800]] mm breit und 144 mm hoch. Ihre Grundfläche beträgt [[0,96|0.96]] m². Sie darf mit bis zu [[1500|1.500]] kg belastet werden. Die Gitterbox hat innen dieselbe Grundfläche wie die Europalette und eine Tragfähigkeit von [[1500|1.500]] kg.',
      hints: ['Grundfläche = Länge × Breite in Metern.', 'Europalette und Gitterbox haben laut EPAL dieselbe Tragfähigkeit.'],
      solution: 'Europalette 1.200 × 800 × 144 mm; 1,2 m × 0,8 m = **0,96 m²**; sichere Arbeitslast **1.500 kg**. Gitterbox: innen 1.200 × 800 mm, Tragfähigkeit **1.500 kg** (ab Baujahr 1990).'
    },
    {
      id: 'lf09-foerdermittel-a4', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Bliesgau Getränke GmbH lagert 5 Saftsorten mit je bis zu 250 Paletten. Die Ware hat ein Mindesthaltbarkeitsdatum; Einlagerung (Wareneingang) und Auslagerung (Versand) sollen sich nicht behindern. Welche Lagertechnik ist am besten geeignet?',
      options: ['Fachbodenregal', 'Einfahrregal mit einer Bedienseite', 'Durchlaufregal', 'Verschieberegal'],
      correct: [2],
      hints: ['Wenige Artikel, große Mengen, Haltbarkeit – welches Prinzip ist nötig?', 'Welches Regal hat getrennte Seiten für Ein- und Auslagerung?'],
      solution: '**Durchlaufregal**: Es lagert viele Paletten weniger Artikel kompakt, erzwingt durch die Rollenbahnen FIFO (bei gleichmäßigen Anlieferungen entspricht das meist FEFO) und trennt Beschickungs- und Entnahmeseite. Das Einfahrregal arbeitet mit einer Bedienseite nach LIFO, das Verschieberegal ist für häufige Zugriffe zu langsam, das Fachbodenregal ist nicht für Paletten gedacht.'
    },
    {
      id: 'lf09-foerdermittel-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Palettenregal hat **6 Regalzeilen** mit je **24 Feldern**. In jedes Feld passen **3 Europaletten** nebeneinander, es gibt **6 Ebenen** (einschließlich Bodenebene). Zurzeit sind **2.200 Stellplätze** belegt. Berechne die Anzahl der Palettenstellplätze und den Auslastungsgrad (auf zwei Nachkommastellen).',
      formula: 'Stellplätze = Zeilen × Felder × Paletten je Feld × Ebenen; Auslastung = belegte ÷ vorhandene Stellplätze × 100',
      fields: [
        { id: 'sp', label: 'Palettenstellplätze', unit: 'Stellplätze', answer: 2592, tol: 0.01 },
        { id: 'ag', label: 'Auslastungsgrad', unit: '%', answer: 84.88, tol: 0.01 }
      ],
      hints: ['Multipliziere alle vier Größen miteinander.', 'Teile die belegten durch die vorhandenen Stellplätze.'],
      solution: `**Stellplätze:** 6 Zeilen × 24 Felder × 3 Paletten × 6 Ebenen = **2.592 Stellplätze**

**Auslastungsgrad:** 2.200 ÷ 2.592 × 100 = 84,876… % ≈ **84,88 %**

Es sind 392 Stellplätze frei, die einem neuen Kunden angeboten werden könnten.`
    },
    {
      id: 'lf09-foerdermittel-a6', type: 'calc', difficulty: 2, points: 4,
      q: 'Eine Freifläche ist **24 m lang** und **13 m breit**. Europaletten sollen als Blocklager so gestellt werden, dass die **lange Palettenseite (1,2 m) parallel zur 24-m-Seite** liegt, **3 Paletten** übereinander. Abstände bleiben vereinfacht unberücksichtigt. Wie viele Paletten passen auf die Fläche?',
      formula: 'Paletten = abgerundet(Länge ÷ 1,2 m) × abgerundet(Breite ÷ 0,8 m) × Stapelhöhe',
      fields: [
        { id: 'l', label: 'Paletten entlang der 24-m-Seite', unit: 'Paletten', answer: 20, tol: 0 },
        { id: 'b', label: 'Paletten entlang der 13-m-Seite', unit: 'Paletten', answer: 16, tol: 0 },
        { id: 'e', label: 'Paletten je Ebene', unit: 'Paletten', answer: 320, tol: 0 },
        { id: 'g', label: 'Paletten insgesamt', unit: 'Paletten', answer: 960, tol: 0 }
      ],
      hints: ['Teile jede Seite durch das passende Palettenmaß und runde ab.', 'Multipliziere die Paletten je Ebene mit der Stapelhöhe.'],
      solution: `**Entlang der 24-m-Seite:** 24 m ÷ 1,2 m = **20 Paletten**

**Entlang der 13-m-Seite:** 13 m ÷ 0,8 m = 16,25 → abgerundet **16 Paletten**

**Je Ebene:** 20 × 16 = **320 Paletten**

**Insgesamt:** 320 × 3 = **960 Paletten**

Zum Vergleich: Bei gedrehten Paletten (24 m ÷ 0,8 m = 30; 13 m ÷ 1,2 m = 10,83 → 10) passen nur 300 je Ebene. Die Ausrichtung entscheidet also mit.`
    },
    {
      id: 'lf09-foerdermittel-a7', type: 'calc', difficulty: 2, points: 3,
      q: 'Für einen neuen Kunden sollen **840 Europaletten** Mineralwasser im Blocklager **4-fach** gestapelt werden. Für Gänge und Abstände rechnet der Lagerleiter mit einem **Zuschlag von 25 %** auf die reine Stellfläche. Wie groß ist der Flächenbedarf?',
      formula: 'Flächenbedarf = (Paletten ÷ Stapelhöhe) × 0,96 m² × (1 + Zuschlag)',
      fields: [
        { id: 'gp', label: 'Anzahl Grundflächen (Palettenstapel)', unit: 'Stück', answer: 210, tol: 0 },
        { id: 'sf', label: 'Reine Stellfläche', unit: 'm²', answer: 201.6, tol: 0.01 },
        { id: 'fb', label: 'Flächenbedarf mit Zuschlag', unit: 'm²', answer: 252, tol: 0.01 }
      ],
      hints: ['Wie viele Stapel entstehen bei 4 Paletten je Stapel?', 'Jede Europalette braucht 1,2 m × 0,8 m = 0,96 m² Grundfläche.'],
      solution: `**Grundflächen:** 840 Paletten ÷ 4 = **210 Stapel**

**Reine Stellfläche:** 210 × 0,96 m² = **201,6 m²**

**Flächenbedarf:** 201,6 m² × 1,25 = **252 m²**

Hinweis: Ob 4-fach gestapelt werden darf, hängt von der Belastbarkeit der Ware und der Paletten ab (laut EPAL höchstens 5.500 kg Auflast auf der untersten Europalette).`
    },
    {
      id: 'lf09-foerdermittel-a8', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zum selbstständigen Fahren eines Gabelstaplers mit Fahrersitz im Betrieb sind nach § 7 DGUV Vorschrift 68 richtig? (Mehrfachauswahl)',
      options: [
        'Der Fahrer muss mindestens 18 Jahre alt sein.',
        'Ein Pkw-Führerschein der Klasse B reicht als Nachweis der Befähigung.',
        'Der Unternehmer muss den Fahrer schriftlich beauftragen.',
        'Der Fahrer muss ausgebildet sein und seine Befähigung nachgewiesen haben.',
        'Eine Beauftragung durch einen früheren Arbeitgeber gilt im neuen Betrieb weiter.'
      ],
      correct: [0, 2, 3],
      hints: ['Die Vorschrift nennt Alter, Eignung, Ausbildung, Befähigung und die Form des Auftrags.', 'Der Auftrag erteilt der eigene Unternehmer – für seinen Betrieb.'],
      solution: 'Richtig: **A** (mindestens 18 Jahre), **C** (Auftrag schriftlich), **D** (geeignet, ausgebildet, Befähigung nachgewiesen). Falsch: B – ein Führerschein ersetzt die Staplerausbildung nicht; E – der Auftrag wird vom jeweiligen Unternehmer für seinen Betrieb erteilt, eine Einweisung auf Gerät und Arbeitsplatz ist nötig.'
    },
    {
      id: 'lf09-foerdermittel-a9', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe den Weg einer Palette bei der Einlagerung in ein automatisches Hochregallager in die richtige Reihenfolge.',
      items: [
        'Palette am Wareneingang mit Barcode-Etikett versehen',
        'Prüfung am Identifikationspunkt (Kontur, Gewicht, Etikett)',
        'Transport über Rollen- und Kettenförderer zur Regalgasse',
        'Übernahme durch das Regalbediengerät und Einlagerung ins Fach',
        'Bestätigung des Lagerplatzes und Bestandsbuchung im LVS'
      ],
      hints: ['Bevor die Automatik eine Palette annimmt, muss sie geprüft werden.', 'Gebucht wird erst, wenn die Palette wirklich im Fach steht.'],
      solution: 'Etikettieren → Prüfung am I-Punkt (eine Palette mit Überstand oder Übergewicht würde das Regal gefährden) → Stetigförderer bis zur Gasse → Regalbediengerät lagert ein → Bestätigung und Buchung im LVS.'
    },
    {
      id: 'lf09-foerdermittel-a10', type: 'text', difficulty: 2, points: 3,
      q: 'Die Saarlogistik GmbH beschafft Stapler für ein neues Palettenregal in der Halle und für die Verladung auf dem Hof. Begründe, wo du einen **Schubmaststapler** und wo einen **Frontstapler (Gegengewichtsstapler)** einsetzen würdest.',
      model: 'Im Palettenregal in der Halle setze ich den Schubmaststapler ein. Sein Mast fährt zwischen den Radarmen vor und zurück, er ist kompakter und kommt mit schmaleren Gängen aus; außerdem erreicht er große Hubhöhen. Dadurch kann das Regal mehr Stellplätze auf gleicher Fläche haben. Auf dem Hof und an den Lkw setze ich den Frontstapler ein, weil er robuster ist, auch im Freien auf unebenem Boden fahren kann und Lkw seitlich be- und entladen kann.',
      criteria: [
        { text: 'ordnet Schubmaststapler der Halle bzw. dem Regal zu', keywords: ['Schubmast', 'Halle|Regal'], points: 1 },
        { text: 'begründet mit schmalen Gängen oder Hubhöhe', keywords: ['schmal|Gang|Hubhöhe|kompakt'], points: 1 },
        { text: 'ordnet Frontstapler Hof/Lkw zu und begründet (Freien, robust)', keywords: ['Frontstapler|Gegengewicht', 'Hof|Freien|Lkw|robust'], points: 1 }
      ],
      hints: ['Welcher Stapler braucht weniger Platz zum Rangieren?', 'Welcher Stapler eignet sich für den Außeneinsatz?'],
      solution: '**Schubmaststapler** im Palettenregal: kompakte Bauweise, schmalere Gänge, große Hubhöhen → mehr Stellplätze je m². **Frontstapler** auf dem Hof: robust, für den Außeneinsatz und die Lkw-Verladung geeignet, je nach Antrieb auch Diesel oder Gas.'
    },
    {
      id: 'lf09-foerdermittel-a11', type: 'mc', difficulty: 3, points: 2,
      q: 'Ein Stapler hat laut Typenschild eine Nenntragfähigkeit von 1.600 kg. Ein Mitarbeiter soll eine 1.400 kg schwere, sehr lange Kiste auf die oberste Regalebene heben. Welche Aussagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Weil 1.400 kg unter 1.600 kg liegen, ist das Heben in jedem Fall erlaubt.',
        'Er muss im Tragfähigkeitsdiagramm prüfen, welche Last bei diesem Lastschwerpunktabstand und dieser Hubhöhe zulässig ist.',
        'Liegt der Schwerpunkt der Kiste weiter vorn als im Diagramm angegeben, sinkt die zulässige Last.',
        'Die Nenntragfähigkeit gilt unabhängig von der Hubhöhe.'
      ],
      correct: [1, 2],
      hints: ['Die Nenntragfähigkeit gilt nur unter bestimmten Bedingungen.', 'Je weiter die Last vom Mast entfernt ist, desto größer ist das Kippmoment.'],
      solution: 'Richtig: **B** und **C**. Die Nenntragfähigkeit gilt nur beim angegebenen Lastschwerpunktabstand und bis zu einer bestimmten Hubhöhe. Eine lange Kiste hat ihren Schwerpunkt weiter vorn, und in großer Höhe sinkt die zulässige Last zusätzlich (Resttragfähigkeit). Ob 1.400 kg zulässig sind, zeigt nur das Tragfähigkeitsdiagramm. A und D sind deshalb falsch.'
    },
    {
      id: 'lf09-foerdermittel-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Regalplanung für die Saar-Autoteile KG',
      intro: `Die Saar-Autoteile KG will bei der Saarlogistik GmbH dauerhaft **1.150 Paletten** mit rund 900 verschiedenen Artikeln einlagern. Jede Palette muss jederzeit einzeln erreichbar sein. Die Saarlogistik plant mit einer **höchstens 90-prozentigen Auslastung**, damit für Spitzen Platz bleibt.

Geplant ist ein Palettenregal mit **3 Paletten je Feld** und **5 Ebenen** (einschließlich Bodenebene). Je Regalfeld rechnet die Planung mit **7,5 m²** Hallenfläche einschließlich anteiliger Gangfläche (Beispielwert).`,
      hints: ['Teile die Palettenzahl durch die Auslastung und runde auf ganze Stellplätze auf.', 'Ein angefangenes Regalfeld muss vollständig gebaut werden.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf09-foerdermittel-a12-1', type: 'mc', difficulty: 2, points: 1,
          q: 'Welche Lagertechnik passt zu den Anforderungen?',
          options: ['Blocklager', 'Einfahrregal', 'Palettenregal (Zeilenregal)', 'Durchlaufregal mit 6 Paletten Tiefe'],
          correct: [2],
          hints: ['Viele verschiedene Artikel, jede Palette einzeln erreichbar.', 'Kompaktlager haben eingeschränkten Zugriff.'],
          solution: '**Palettenregal**: direkter Zugriff auf jede Palette, geeignet für viele Artikel. Blocklager, Einfahrregal und tiefe Durchlaufregale lagern mehrere Paletten hintereinander und eignen sich für wenige Artikel mit großen Mengen.'
        },
        {
          id: 'lf09-foerdermittel-a12-2', type: 'calc', difficulty: 3, points: 4,
          q: 'Berechne die benötigten Stellplätze, die Stellplätze je Feld, die Anzahl der Regalfelder und den Flächenbedarf.',
          formula: 'Stellplätze = Paletten ÷ Auslastung (aufrunden); Felder = Stellplätze ÷ (Paletten je Feld × Ebenen) (aufrunden); Fläche = Felder × 7,5 m²',
          fields: [
            { id: 'sp', label: 'Benötigte Stellplätze', unit: 'Stellplätze', answer: 1278, tol: 0 },
            { id: 'spf', label: 'Stellplätze je Regalfeld', unit: 'Stellplätze', answer: 15, tol: 0 },
            { id: 'rf', label: 'Anzahl Regalfelder', unit: 'Felder', answer: 86, tol: 0 },
            { id: 'fl', label: 'Flächenbedarf', unit: 'm²', answer: 645, tol: 0.01 }
          ],
          hints: ['1.150 ÷ 0,9 ergibt eine Kommazahl – aufrunden.', 'Je Feld: 3 Paletten × 5 Ebenen.'],
          solution: `**Benötigte Stellplätze:** 1.150 ÷ 0,90 = 1.277,8 → aufgerundet **1.278 Stellplätze**

**Stellplätze je Feld:** 3 × 5 = **15**

**Regalfelder:** 1.278 ÷ 15 = 85,2 → aufgerundet **86 Felder** (86 × 15 = 1.290 Stellplätze)

**Flächenbedarf:** 86 × 7,5 m² = **645 m²**

Hier wird **aufgerundet**, weil der Bedarf mindestens gedeckt sein muss. (Bei der Frage „Wie viele Paletten passen?“ wird dagegen abgerundet.)`
        },
        {
          id: 'lf09-foerdermittel-a12-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Für die Kommissionierung einzelner Teile aus den Paletten überlegt die Saarlogistik, ein fahrerloses Transportsystem einzusetzen, das Paletten aus dem Regalvorplatz zu Packplätzen bringt. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Das FTS ist ein Unstetigförderer.',
            'Das FTS verwirklicht das Prinzip Ware-zum-Mann.',
            'Für ein FTS braucht man keinen Leitrechner, weil die Fahrzeuge selbst entscheiden, welche Palette gebraucht wird.',
            'Ein FTS ersetzt die Prüfung der Regale und die Sicherheitsregeln im Lager.'
          ],
          correct: [0, 1],
          hints: ['Fährt das FTS kontinuierlich oder in einzelnen Aufträgen?', 'Wer verteilt die Transportaufträge?'],
          solution: 'Richtig: **A** (einzelne Fahraufträge, freie Wege → Unstetigförderer) und **B** (die Ware kommt zum Packplatz). Falsch: C – ein Leitrechner bzw. das LVS vergibt die Aufträge; D – Sicherheitsregeln gelten weiter, auch für Wege, auf denen Menschen und FTS gemeinsam unterwegs sind.'
        }
      ]
    }
  ],
  quiz: ['lf09-foerdermittel-a1', 'lf09-foerdermittel-a2', 'lf09-foerdermittel-a5', 'lf09-foerdermittel-a8', 'lf09-foerdermittel-a12'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 9, Inhalte: Lagertechnik, Fördermittel, Ladungsträger, Arbeitssicherheit' },
    { title: 'DGUV Vorschrift 68 „Flurförderzeuge“, § 7 Führen von Flurförderzeugen', publisher: 'BGN (Vorschriftentext der DGUV)', url: 'https://vorschriften.bgn-branchenwissen.de/daten/dguv/68/7.htm', asOf: '2026' },
    { title: 'DGUV Grundsatz 308-001 „Ausbildung und Beauftragung der Fahrer von Flurförderzeugen mit Fahrersitz und Fahrerstand“ (genannt in: Zertifizierung von Ausbildern für Flurförderzeugführer)', publisher: 'DGUV, Fachbereich Handel und Logistik', url: 'https://www.dguv.de/medien/fb-handelundlogistik/pdf-dokumente/affz_gs-hl.pdf', asOf: '2026' },
    { title: 'Produktdatenblatt EPAL-Europalette', publisher: 'European Pallet Association (EPAL)', url: 'https://cn.epal-pallets.org/fileadmin/user_upload/ntg_package/images/Produktdownloads/Produktdatenbla__tter/GB/EPAL-DS_Europalette_QR-Code_GB.pdf', asOf: '2026' },
    { title: 'Produktdatenblatt EPAL-Gitterbox', publisher: 'European Pallet Association (EPAL)', url: 'https://www.epal-pallets.org/fileadmin/user_upload/ntg_package/images/Produktdownloads/Produktdatenbla__tter/D/251219_GiBo_Produktdatenblatt_DE.pdf', asOf: '2026' }
  ],
  links: ['lf09-lager-grundlagen', 'lf09-lagerorganisation', 'lf09-lagerkosten']
};
