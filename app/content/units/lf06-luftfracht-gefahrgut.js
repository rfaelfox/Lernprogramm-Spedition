export default {
  id: 'lf06-luftfracht-gefahrgut',
  area: 'LF06',
  topic: 'lf06-gefahrgut',
  title: 'Gefahrgut in der Luftfracht',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026-10',
    note: 'ICAO Technical Instructions (Doc 9284), Ausgabe 2025–2026, gültig vom 01.01.2025 bis 31.12.2026; IATA Dangerous Goods Regulations 67. Ausgabe (2026). Lithiumbatterien nach IATA Lithium Battery Guidance Document (Stand 01.01.2026): UN 3480/3090 allein verpackt auf Passagierflugzeugen verboten (nur Frachtflugzeug, CAO); Ladezustand höchstens 30 % für UN 3480 und seit 01.01.2026 auch für UN 3481 „mit Ausrüstung verpackt“ (Section I; Section II bei Zellen/Batterien über 2,7 Wh); höchstens 5 kg Batterien je Versandstück im Passagierflugzeug bei „mit Ausrüstung verpackt/in Ausrüstung enthalten“. Kompetenzbasierte Gefahrgutschulung (CBTA) seit 01.01.2023 (LBA), Wiederholung alle 24 Monate (IATA). Erlaubnispflicht für Luftfahrtunternehmen nach § 27 LuftVG/§ 78 LuftVZO. Ab 2027 erscheint eine neue ICAO-Ausgabe – Werte dann prüfen.'
  },
  goals: [
    'Ich kann die Rechtsgrundlagen für Gefahrgut in der Luftfracht (ICAO-TI, IATA-DGR, LuftVG) nennen und ihr Verhältnis erklären.',
    'Ich kann die 9 Gefahrklassen mit Beispielen nennen und die Bedeutung von UN-Nummer und Verpackungsgruppe erklären.',
    'Ich kann Kennzeichnung und Bezettelung eines Gefahrgutpackstücks sowie die Shipper’s Declaration beschreiben.',
    'Ich kann erklären, warum manche Güter nur mit Frachtflugzeugen (CAO) befördert werden dürfen.',
    'Ich kann die wichtigsten Regeln für Lithiumbatterien anwenden.',
    'Ich kann die Verantwortung des Versenders und die Schulungspflicht beschreiben und Luftfracht kurz mit dem ADR vergleichen.'
  ],
  simple: `> **Annahme:** Deine Schule behandelt in LF 6 die Luftfracht. Falls es bei dir ein anderer Verkehrsträger ist, sag Bescheid.

# Worum geht es?

**Gefahrgut** sind Stoffe und Gegenstände, die bei der Beförderung Menschen, Tiere, Umwelt oder das Flugzeug gefährden können: Parfüm (entzündbar), Spraydosen (Gas), Batteriesäure (ätzend), Lithiumbatterien. Ein Feuer in 10.000 m Höhe ist besonders gefährlich, weil das Flugzeug nicht einfach anhalten kann. Deshalb sind die Regeln in der Luftfracht **strenger** als auf der Straße.

# Die Regelwerke

- **ICAO Technical Instructions (ICAO-TI):** die verbindlichen internationalen Vorschriften.
- **IATA Dangerous Goods Regulations (IATA-DGR):** das Handbuch, mit dem Airlines und Spediteure täglich arbeiten. Es enthält die ICAO-Regeln plus zusätzliche Vorgaben von Staaten und Airlines.

# Die drei wichtigsten Angaben

1. **UN-Nummer:** vierstellige Nummer für den Stoff, z. B. UN 1266 für Parfümerieerzeugnisse.
2. **Klasse:** welche Gefahr (1 bis 9).
3. **Verpackungsgruppe:** wie groß die Gefahr ist (I = hoch, II = mittel, III = gering).

# Wer ist verantwortlich?

Der **Versender**. Er muss das Gut richtig einstufen, verpacken, kennzeichnen und die **Shipper’s Declaration** (Gefahrguterklärung) unterschreiben. Wer Gefahrgut vorbereitet oder annimmt, braucht eine **Schulung**, die alle 24 Monate wiederholt wird.`,
  deep: `# 1. Rechtsgrundlagen

| Ebene | Regelwerk | Bedeutung |
|---|---|---|
| international | **Anhang (Annex) 18** zum Chicagoer Abkommen | Grundsätze der Gefahrgutbeförderung im Luftverkehr |
| international | **ICAO Technical Instructions (Doc 9284)** | detaillierte Vorschriften; erscheinen alle zwei Jahre (aktuell Ausgabe 2025–2026, gültig bis 31.12.2026) |
| Branche | **IATA Dangerous Goods Regulations (DGR)** | jährliches Arbeitshandbuch (2026: 67. Ausgabe); enthält alle ICAO-Vorschriften sowie strengere Abweichungen einzelner Staaten (State Variations) und Airlines (Operator Variations) |
| EU | VO (EU) Nr. 965/2012 (Flugbetrieb) | Gefahrgutgenehmigung für Luftfahrtunternehmen |
| Deutschland | **§ 27 LuftVG**, **§ 78 LuftVZO** | Beförderung gefährlicher Güter mit Luftfahrzeugen braucht eine **Erlaubnis** des Luftfahrt-Bundesamts (LBA); Gefahrgutverpackungen brauchen eine Zulassung (in der Regel durch die BAM) |

> Wer nach der IATA-DGR arbeitet, erfüllt damit auch die ICAO-TI, weil die DGR diese vollständig enthält und teils strenger ist.

# 2. Die 9 Gefahrklassen

Die Einteilung ist für alle Verkehrsträger gleich (UN-Empfehlungen). Einige Klassen sind in Unterklassen (Divisions) aufgeteilt.

| Klasse | Gefahr | Beispiele |
|---|---|---|
| **1** | explosive Stoffe und Gegenstände | Feuerwerkskörper, Munition |
| **2** | Gase (2.1 entzündbar, 2.2 nicht entzündbar/nicht giftig, 2.3 giftig) | Spraydosen, Propan, Stickstoff, Chlor |
| **3** | entzündbare flüssige Stoffe | Parfüm, Farben, Lacke, Benzin |
| **4** | entzündbare feste Stoffe (4.1), selbstentzündliche Stoffe (4.2), Stoffe, die mit Wasser entzündbare Gase bilden (4.3) | Streichhölzer, bestimmte Metallpulver, Natrium |
| **5** | entzündend (oxidierend) wirkende Stoffe (5.1), organische Peroxide (5.2) | bestimmte Dünger, Härter für Kunstharze |
| **6** | giftige Stoffe (6.1), ansteckungsgefährliche Stoffe (6.2) | Pflanzenschutzmittel, infektiöse Patientenproben |
| **7** | radioaktive Stoffe | medizinische Isotope |
| **8** | ätzende Stoffe | Batteriesäure, Natronlauge |
| **9** | verschiedene gefährliche Stoffe und Gegenstände | **Lithiumbatterien**, Trockeneis, Airbag-Module |

# 3. UN-Nummer, Versandbezeichnung, Verpackungsgruppe

- **UN-Nummer:** vierstellige Kennnummer, die einem Stoff oder einer Gruppe zugeordnet ist (z. B. UN 1266 Parfümerieerzeugnisse, UN 3480 Lithium-Ionen-Batterien).
- **Richtige Versandbezeichnung (Proper Shipping Name):** die genaue Bezeichnung aus der Gefahrgutliste.
- **Verpackungsgruppe (Packing Group, PG):** Gefahrengrad – **I** große, **II** mittlere, **III** geringe Gefahr. Nicht jede Klasse hat Verpackungsgruppen (z. B. Gase, radioaktive Stoffe).
- **Verpackungsanweisung (Packing Instruction):** legt fest, wie verpackt werden muss und wie viel je Versandstück zulässig ist – für Passagier- und Frachtflugzeuge unterschiedlich.
- **UN-geprüfte Verpackung:** Für die meisten Gefahrgüter sind bauartgeprüfte Verpackungen mit UN-Verpackungscode vorgeschrieben.

Manche Stoffe sind im Luftverkehr **ganz verboten**, andere nur auf Frachtflugzeugen zulässig.

# 4. Kennzeichnung und Bezettelung

**Kennzeichnen (Marks):** UN-Nummer und richtige Versandbezeichnung, Name und Anschrift von Versender und Empfänger, ggf. Nettomenge, UN-Verpackungscode, bei Flüssigkeiten Ausrichtungspfeile („diese Seite oben“).

**Bezetteln (Labels):**

- **Gefahrzettel** (auf der Spitze stehendes Quadrat) mit Symbol und Klassennummer – zeigen die Gefahr
- **Handhabungskennzeichen**, z. B.:
  - **Cargo Aircraft Only (CAO)** – „nur mit Frachtflugzeug“
  - **Lithiumbatterie-Kennzeichen** (rot schraffierter Rand mit UN-Nummer)
  - Gefahrzettel Klasse 9 für Lithiumbatterien

# 5. Shipper’s Declaration for Dangerous Goods (DGD)

Die **Gefahrguterklärung des Versenders** ist das zentrale Papier. Mit seiner Unterschrift bestätigt der Versender, dass das Gut richtig klassifiziert, verpackt, gekennzeichnet und bezettelt ist und den geltenden Vorschriften entspricht.

Wichtige Angaben: Versender, Empfänger, AWB-Nummer, Einschränkung **Passagier- und Frachtflugzeug** oder **nur Frachtflugzeug**, UN-Nummer, richtige Versandbezeichnung, Klasse, Verpackungsgruppe, Menge und Art der Verpackung, Verpackungsanweisung, Name und Unterschrift des Versenders, Datum.

Der **Luftfrachtspediteur** darf die Erklärung nicht „für den Kunden“ ausfüllen, wenn er die Angaben nicht selbst verantworten kann. Die Airline prüft die Sendung bei der Annahme mit einer **Annahmecheckliste** (Acceptance Check) und weist fehlerhafte Sendungen zurück.

# 6. Passagierflugzeug oder Frachtflugzeug (CAO)

Im Passagierflugzeug sitzen Menschen über dem Frachtraum; Brände sind dort schwerer zu bekämpfen. Deshalb gelten:

- **niedrigere Mengen je Versandstück** für Passagierflugzeuge,
- bestimmte Güter **nur auf Frachtflugzeugen** (Kennzeichen **Cargo Aircraft Only**),
- manche Güter sind **ganz verboten**.

# 7. Lithiumbatterien – der häufigste Fall

| Konfiguration | Lithium-Ionen | Lithium-Metall |
|---|---|---|
| Batterien allein | **UN 3480** | **UN 3090** |
| mit Ausrüstung verpackt (z. B. Ersatzakku neben dem Gerät im Karton) | UN 3481 | UN 3091 |
| in Ausrüstung enthalten (z. B. Akku im Laptop) | UN 3481 | UN 3091 |

Wichtige Regeln (Stand 2026, IATA-Leitfaden):

- **UN 3480 und UN 3090 allein verpackt: auf Passagierflugzeugen verboten**, nur mit Frachtflugzeug; Packstücke tragen den **CAO-Zettel**.
- **Ladezustand (State of Charge):** Lithium-Ionen-Batterien allein (UN 3480) höchstens **30 %** der Nennkapazität. Seit **01.01.2026** gilt die 30-%-Grenze auch für Lithium-Ionen-Batterien **mit Ausrüstung verpackt** (UN 3481, Section I; Section II für Zellen und Batterien über 2,7 Wh). Für Batterien **in Ausrüstung** wird 30 % empfohlen.
- **Mit Ausrüstung verpackt / in Ausrüstung enthalten:** im Passagierflugzeug höchstens **5 kg Nettogewicht Batterien je Versandstück**.
- **Prüfzusammenfassung UN 38.3:** Hersteller und Händler müssen eine Zusammenfassung der UN-Prüfungen bereitstellen; sie muss nicht jeder Sendung beiliegen, aber auf Anfrage verfügbar sein.
- Beschädigte oder defekte Batterien dürfen nicht wie normale Batterien versandt werden.

**Energie einer Batterie:** Wattstunden (Wh) = Nennspannung (V) × Nennkapazität (Ah).

# 8. Verantwortung und Schulung

**Versender:** einstufen (Klasse, UN-Nummer, Verpackungsgruppe), richtig verpacken, kennzeichnen, bezetteln, Shipper’s Declaration ausstellen und unterschreiben. Er haftet für falsche Angaben.

**Luftfrachtspediteur:** prüft Aufträge auf (auch **versteckte**) Gefahrgüter, z. B. „Ersatzteile“ mit Lithiumakkus oder „Kosmetik“ mit Parfüm; gibt Gefahrgut nur korrekt deklariert weiter.

**Airline:** Annahmeprüfung, Verladung nach Trennvorschriften, Information des Flugkapitäns.

**Schulungspflicht:** Jede Person, die Gefahrgut vorbereitet, zum Versand übergibt, annimmt oder handhabt, muss geschult sein. Seit **01.01.2023** ist die Gefahrgutschulung im Luftverkehr **kompetenzbasiert (CBTA)**. Die Schulung muss innerhalb von **24 Monaten** wiederholt werden. Das LBA veröffentlicht eine Liste zugelassener Schulungsanbieter.

# 9. Kurzvergleich mit dem ADR (Straße)

| | Luftfracht | Straße |
|---|---|---|
| Regelwerk | ICAO-TI / IATA-DGR | ADR, in Deutschland mit GGVSEB |
| Gefahrklassen, UN-Nummern | gleich (UN-System) | gleich (UN-System) |
| Begleitpapier | Shipper’s Declaration | Beförderungspapier |
| Fahrzeug-/Flugzeugkennzeichnung | keine Warntafeln, aber Information des Kapitäns | orangefarbene Warntafeln am Fahrzeug |
| Strenge | strenger, z. B. geringere Mengen, CAO-Pflicht, Ladezustand von Batterien | bestimmte Erleichterungen für kleine Mengen |

Eine Sendung, die nach ADR korrekt zum Flughafen gefahren wird, ist deshalb **nicht automatisch** luftfrachttauglich.`,
  terms: [
    { term: 'ICAO Technical Instructions (ICAO-TI)', def: 'Verbindliche internationale Vorschriften für die Beförderung gefährlicher Güter im Luftverkehr (Doc 9284), alle zwei Jahre neu.' },
    { term: 'IATA-DGR', def: 'Dangerous Goods Regulations der IATA; jährliches Arbeitshandbuch mit allen ICAO-Regeln plus Staaten- und Airline-Abweichungen.' },
    { term: 'UN-Nummer', def: 'Vierstellige Kennnummer eines gefährlichen Stoffes oder Gegenstandes nach den UN-Empfehlungen, z. B. UN 3480.' },
    { term: 'Verpackungsgruppe', def: 'Gefahrengrad eines Stoffes: I = große, II = mittlere, III = geringe Gefahr.' },
    { term: 'Gefahrzettel', def: 'Auf der Spitze stehender quadratischer Aufkleber mit Symbol und Klassennummer, der die Gefahr eines Packstücks zeigt.' },
    { term: 'Shipper’s Declaration (DGD)', def: 'Vom Versender unterschriebene Gefahrguterklärung mit UN-Nummer, Versandbezeichnung, Klasse, Verpackungsgruppe, Menge und Einschränkung Passagier-/Frachtflugzeug.' },
    { term: 'Cargo Aircraft Only (CAO)', def: 'Kennzeichen für Gefahrgut, das nur mit Frachtflugzeugen befördert werden darf.' },
    { term: 'State of Charge (SoC)', def: 'Ladezustand einer Batterie; bei Lithium-Ionen-Batterien allein höchstens 30 % (Stand 2026).' },
    { term: 'Versteckte Gefahrgüter', def: 'Gefährliche Güter, die unter harmloser Bezeichnung (z. B. „Ersatzteile“, „Kosmetik“) angemeldet werden.' },
    { term: 'CBTA', def: 'Competency-Based Training and Assessment: kompetenzbasierte Gefahrgutschulung im Luftverkehr seit 2023.' }
  ],
  example: `# Saar-Air-Logistik GmbH prüft drei Aufträge (Beispielfälle)

| Auftrag | Angegebene Ware | Prüfung durch den Spediteur |
|---|---|---|
| 1 | „Kosmetikproben“ nach Dubai | Rückfrage ergibt: Parfüm in Glasflakons → **Klasse 3, UN 1266**; Versender muss als Gefahrgut deklarieren |
| 2 | 200 E-Bike-Akkus (Lithium-Ionen) einzeln verpackt nach Atlanta | **UN 3480**: nur **Frachtflugzeug (CAO)**, Ladezustand höchstens 30 %, Gefahrzettel Klasse 9 und CAO-Zettel, Shipper’s Declaration |
| 3 | 10 Laptops mit eingebautem Akku nach Toronto | **UN 3481** (in Ausrüstung enthalten); Passagierflugzeug möglich, wenn die Mengengrenzen eingehalten sind |

**Was der Spediteur bei Auftrag 2 tut:**

1. Er bucht einen Flug mit **Frachtflugzeug**.
2. Er fordert vom Versender die unterschriebene **Shipper’s Declaration** und die Bestätigung des Ladezustands.
3. Er prüft Kennzeichen und Zettel auf jedem Karton, bevor er die Sendung an die Airline übergibt.
4. Die Airline führt die Annahmeprüfung durch und nimmt die Sendung erst dann an.`,
  rules: [
    'ICAO-TI sind die verbindliche Grundlage; die IATA-DGR enthalten sie vollständig und sind teilweise strenger.',
    'UN-Nummer + richtige Versandbezeichnung + Klasse + Verpackungsgruppe beschreiben jedes Gefahrgut eindeutig.',
    'Verpackungsgruppe I = große, II = mittlere, III = geringe Gefahr.',
    'Der Versender ist verantwortlich für Einstufung, Verpackung, Kennzeichnung und die Shipper’s Declaration.',
    'Lithium-Ionen-Batterien allein (UN 3480) dürfen nicht ins Passagierflugzeug, nur ins Frachtflugzeug (CAO), und höchstens 30 % geladen sein.',
    'Wer Gefahrgut vorbereitet oder annimmt, braucht eine Schulung, die alle 24 Monate wiederholt wird.',
    'Nach ADR korrekt ist nicht automatisch nach IATA-DGR korrekt.'
  ],
  summary: `- **Regelwerke:** ICAO Annex 18 und ICAO-TI (verbindlich, Ausgabe 2025–2026), IATA-DGR als Arbeitshandbuch (67. Ausgabe 2026), in Deutschland Erlaubnispflicht nach § 27 LuftVG.
- **9 Klassen** (UN-System): 1 explosiv, 2 Gase, 3 entzündbare Flüssigkeiten, 4 entzündbare Feststoffe, 5 oxidierend/Peroxide, 6 giftig/ansteckend, 7 radioaktiv, 8 ätzend, 9 verschiedene (z. B. Lithiumbatterien).
- **Kennzeichnung:** UN-Nummer und Versandbezeichnung, Gefahrzettel, ggf. CAO-Zettel und Lithiumbatterie-Kennzeichen.
- **Papier:** Shipper’s Declaration, vom Versender unterschrieben.
- **Lithium:** UN 3480/3090 allein nur CAO; Ladezustand ≤ 30 %; im Passagierflugzeug höchstens 5 kg Batterien je Versandstück bei UN 3481/3091.
- **Schulung:** kompetenzbasiert (CBTA), Wiederholung alle 24 Monate.`,
  mistakes: [
    { wrong: 'Die IATA-DGR sind ein Gesetz.', right: 'Verbindlich sind die ICAO Technical Instructions; die IATA-DGR sind das Arbeitshandbuch der Branche, das diese enthält und teils verschärft.' },
    { wrong: 'Verpackungsgruppe III ist die gefährlichste.', right: 'Verpackungsgruppe I bedeutet die größte Gefahr, III die geringste.' },
    { wrong: 'Die Shipper’s Declaration füllt die Airline aus.', right: 'Der Versender erstellt und unterschreibt sie und ist für die Angaben verantwortlich.' },
    { wrong: 'Einzeln verpackte Lithium-Ionen-Akkus dürfen mit jedem Flugzeug fliegen, wenn sie gut verpackt sind.', right: 'UN 3480 allein verpackt ist auf Passagierflugzeugen verboten und nur mit Frachtflugzeug (CAO) zulässig.' },
    { wrong: 'Wer einmal eine Gefahrgutschulung gemacht hat, ist dauerhaft qualifiziert.', right: 'Die Schulung muss innerhalb von 24 Monaten wiederholt werden.' },
    { wrong: 'Wenn eine Sendung nach ADR korrekt verpackt ist, darf sie auch fliegen.', right: 'Die Luftfahrtvorschriften sind strenger; Verpackung, Mengen und Kennzeichnung müssen nach ICAO-TI/IATA-DGR geprüft werden.' }
  ],
  flashcards: [
    { q: 'Welches Regelwerk ist für Gefahrgut in der Luftfracht verbindlich?', a: 'Die ICAO Technical Instructions (Doc 9284); in der Praxis wird mit den IATA-DGR gearbeitet.' },
    { q: 'Nenne die 9 Gefahrklassen in Stichworten.', a: '1 explosiv, 2 Gase, 3 entzündbare Flüssigkeiten, 4 entzündbare Feststoffe, 5 oxidierend/organische Peroxide, 6 giftig/ansteckend, 7 radioaktiv, 8 ätzend, 9 verschiedene.' },
    { q: 'Was bedeutet Verpackungsgruppe II?', a: 'Mittlere Gefahr (I = groß, III = gering).' },
    { q: 'Was ist eine UN-Nummer?', a: 'Eine vierstellige Kennnummer für einen gefährlichen Stoff oder Gegenstand, z. B. UN 3480 Lithium-Ionen-Batterien.' },
    { q: 'Wer unterschreibt die Shipper’s Declaration?', a: 'Der Versender.' },
    { q: 'Was bedeutet CAO?', a: 'Cargo Aircraft Only – darf nur mit Frachtflugzeug befördert werden.' },
    { q: 'Welche UN-Nummer haben Lithium-Ionen-Batterien allein, mit/in Ausrüstung?', a: 'Allein UN 3480, mit Ausrüstung verpackt oder in Ausrüstung enthalten UN 3481.' },
    { q: 'Welcher Ladezustand gilt für UN 3480?', a: 'Höchstens 30 % der Nennkapazität (Stand 2026).' },
    { q: 'Wie oft muss die Gefahrgutschulung wiederholt werden?', a: 'Innerhalb von 24 Monaten.' },
    { q: 'Wie berechnet man die Wattstunden einer Batterie?', a: 'Nennspannung (V) × Nennkapazität (Ah).' },
    { q: 'Zu welcher Klasse gehört Parfüm?', a: 'Klasse 3, entzündbare flüssige Stoffe (UN 1266 Parfümerieerzeugnisse).' }
  ],
  tasks: [
    {
      id: 'lf06-luftfracht-gefahrgut-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Welches Regelwerk ist die verbindliche internationale Grundlage für die Beförderung gefährlicher Güter im Luftverkehr?',
      options: ['ADR', 'ICAO Technical Instructions', 'IMDG-Code', 'CMR'],
      correct: [1],
      hints: ['ADR = Straße, IMDG = See.', 'Die IATA-DGR beruhen auf diesem Regelwerk.'],
      solution: '**ICAO Technical Instructions** (Doc 9284). Die IATA-DGR übernehmen sie und ergänzen strengere Staaten- und Airline-Vorgaben. ADR gilt für die Straße, der IMDG-Code für die See, die CMR ist Frachtrecht (keine Gefahrgutvorschrift).'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a2', type: 'match', difficulty: 1, points: 6,
      q: 'Ordne die Beispiele der richtigen Gefahrklasse zu.',
      pairs: [
        ['Feuerwerkskörper', 'Klasse 1 – explosive Stoffe'],
        ['Spraydose mit Propan', 'Klasse 2 – Gase'],
        ['Parfüm', 'Klasse 3 – entzündbare flüssige Stoffe'],
        ['Infektiöse Patientenprobe', 'Klasse 6 – giftige und ansteckungsgefährliche Stoffe'],
        ['Batteriesäure', 'Klasse 8 – ätzende Stoffe'],
        ['Lithium-Ionen-Akku', 'Klasse 9 – verschiedene gefährliche Stoffe und Gegenstände']
      ],
      hints: ['Parfüm enthält Alkohol.', 'Lithiumbatterien sind keine eigene Klasse, sondern fallen unter „verschiedene“.'],
      solution: 'Feuerwerk = 1; Spraydose = 2 (Gas, hier 2.1 entzündbar); Parfüm = 3; infektiöse Probe = 6 (6.2); Batteriesäure = 8; Lithium-Ionen-Akku = 9.'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Jeder gefährliche Stoff hat eine vierstellige [[UN-Nummer|UN Nummer|UN-Nr.]]. Die Verpackungsgruppe [[I|1]] steht für große Gefahr, die Verpackungsgruppe [[III|3]] für geringe Gefahr. Die Gefahrguterklärung heißt Shipper’s [[Declaration]] und wird vom [[Versender|Absender|Shipper]] unterschrieben.',
      hints: ['Römische Ziffern: I, II, III.', 'Wer kennt die Ware am besten?'],
      solution: '**UN-Nummer**; Verpackungsgruppe **I** = große, **III** = geringe Gefahr; **Shipper’s Declaration for Dangerous Goods**, unterschrieben vom **Versender**.'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a4', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aufgaben gehören zur Verantwortung des **Versenders** von Gefahrgut? (Mehrfachauswahl)',
      options: [
        'das Gut richtig einstufen (Klasse, UN-Nummer, Verpackungsgruppe)',
        'die Shipper’s Declaration ausstellen und unterschreiben',
        'die Packstücke kennzeichnen und bezetteln',
        'den Flugkapitän über die Ladung informieren',
        'die Annahmeprüfung am Flughafen durchführen'
      ],
      correct: [0, 1, 2],
      hints: ['Der Versender bereitet die Sendung vor.', 'Kapitäninformation und Annahmeprüfung macht die Airline.'],
      solution: 'Versender: **einstufen, Shipper’s Declaration, kennzeichnen und bezetteln** (sowie richtig verpacken). Die Annahmeprüfung (Acceptance Check) und die Information des Kapitäns sind Aufgaben der **Airline**.'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a5', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Kunde will 50 einzeln verpackte Lithium-Ionen-Ersatzakkus (UN 3480) nach Atlanta schicken. Was gilt?',
      options: [
        'Die Akkus dürfen mit jedem Passagierflug befördert werden.',
        'Die Akkus dürfen nur mit einem Frachtflugzeug befördert werden und höchstens 30 % geladen sein.',
        'Lithium-Ionen-Akkus sind im Luftverkehr generell verboten.',
        'Die Akkus sind kein Gefahrgut, wenn sie neu sind.'
      ],
      correct: [1],
      hints: ['UN 3480 = Batterien allein, nicht in einem Gerät.', 'Denke an das Kennzeichen CAO.'],
      solution: '**B**: UN 3480 allein verpackt ist auf Passagierflugzeugen verboten (nur Cargo Aircraft Only) und darf höchstens 30 % Ladezustand haben. Ein generelles Verbot gibt es nicht; neue Akkus sind ebenfalls Gefahrgut der Klasse 9.'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a6', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Lithium-Ionen-Akku hat eine Nennspannung von 3,6 V und eine Nennkapazität von 5 Ah. Berechne die Nennenergie in Wh und die höchstens zulässige Restenergie beim Versand als UN 3480 (30 % Ladezustand).',
      formula: 'Wh = V × Ah; zulässige Energie = Wh × 30 %',
      fields: [
        { id: 'wh', label: 'Nennenergie', unit: 'Wh', answer: 18, tol: 0.01 },
        { id: 'soc', label: 'höchstens zulässige Energie bei 30 %', unit: 'Wh', answer: 5.4, tol: 0.01 }
      ],
      hints: ['Spannung mal Kapazität.', '30 % = 0,30.'],
      solution: `**Formel:** Nennenergie (Wh) = Nennspannung (V) × Nennkapazität (Ah)

**Nennenergie:** 3,6 V × 5 Ah = **18 Wh**

**30 % Ladezustand:** 18 Wh × 0,30 = **5,4 Wh**`
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a7', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Hersteller packt Akkuschrauber mit je einem Ersatzakku (UN 3481, mit Ausrüstung verpackt) in einen Versandkarton. Jeder Ersatzakku wiegt netto 0,45 kg. Im Passagierflugzeug sind höchstens 5 kg Batterien je Versandstück zulässig. Wie viel Batteriegewicht hätten 12 Akkus, und wie viele Akkus passen höchstens in einen Karton?',
      formula: 'Höchstzahl = 5 kg ÷ Gewicht je Akku (abrunden)',
      fields: [
        { id: 'g12', label: 'Batteriegewicht bei 12 Akkus', unit: 'kg', answer: 5.4, tol: 0.01 },
        { id: 'max', label: 'höchstzulässige Anzahl Akkus', unit: 'Stück', answer: 11, tol: 0 }
      ],
      hints: ['12 × 0,45 kg = ?', '5 ÷ 0,45 = 11,11 – es gibt keine angefangenen Akkus.'],
      solution: `**12 Akkus:** 12 × 0,45 kg = **5,4 kg** → über der Grenze von 5 kg

**Höchstzahl:** 5 kg ÷ 0,45 kg = 11,11 → abgerundet **11 Akkus** (11 × 0,45 kg = 4,95 kg ≤ 5 kg)

Beim Akku mit Ausrüstung verpackt gilt außerdem seit 01.01.2026 ein Ladezustand von höchstens 30 % (Stand IATA-Leitfaden 2026).`
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a8', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte zur Vorbereitung einer Gefahrgut-Luftfrachtsendung in die richtige Reihenfolge.',
      items: [
        'Gut einstufen: UN-Nummer, Klasse, Verpackungsgruppe bestimmen',
        'zulässige Verpackung nach Verpackungsanweisung auswählen und verpacken',
        'Packstücke kennzeichnen und bezetteln',
        'Shipper’s Declaration ausstellen und unterschreiben',
        'Sendung an Spediteur/Airline übergeben; Annahmeprüfung durch die Airline'
      ],
      hints: ['Ohne Einstufung weiß man nicht, welche Verpackung erlaubt ist.', 'Die Erklärung bestätigt, was vorher gemacht wurde.'],
      solution: 'Einstufen → verpacken → kennzeichnen/bezetteln → Shipper’s Declaration → Übergabe und Annahmeprüfung. Die Erklärung kommt nach dem Verpacken, weil der Versender damit bestätigt, dass alles vorschriftsmäßig erledigt ist.'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre, warum für Gefahrgut in Passagierflugzeugen strengere Regeln gelten als in Frachtflugzeugen, und nenne zwei Folgen dieser Regeln.',
      model: 'Im Passagierflugzeug sind Menschen an Bord, und ein Brand im Frachtraum ist während des Fluges schwer zu bekämpfen, weil das Flugzeug nicht sofort landen kann. Deshalb sind im Passagierflugzeug nur geringere Mengen je Versandstück zulässig. Bestimmte Güter wie Lithium-Ionen-Batterien allein dürfen nur mit Frachtflugzeug befördert werden und tragen das Kennzeichen Cargo Aircraft Only.',
      criteria: [
        { text: 'nennt Gefährdung der Passagiere/Brandbekämpfung', keywords: ['Passagier|Menschen|Personen', 'Brand|Feuer|bekämpf'], points: 1 },
        { text: 'nennt geringere Mengen', keywords: ['Menge|weniger|geringer'], points: 1 },
        { text: 'nennt CAO/nur Frachtflugzeug', keywords: ['Cargo Aircraft Only|CAO|nur mit Frachtflugzeug|nur Frachtflugzeug'], points: 1 }
      ],
      hints: ['Wer sitzt über dem Frachtraum?', 'Denke an Mengengrenzen und an ein bestimmtes Kennzeichen.'],
      solution: 'Grund: Menschen an Bord, Brand schwer zu bekämpfen. Folgen: **geringere Mengen je Versandstück** im Passagierflugzeug; bestimmte Güter **nur mit Frachtflugzeug (CAO)**, z. B. UN 3480; manche Güter ganz verboten.'
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: „Kosmetikproben“ nach Dubai',
      intro: `Die St. Ingberter Beauty Line GmbH (Beispielname) beauftragt die Saar-Air-Logistik GmbH, 3 Kartons „Kosmetikproben“ per Luftfracht nach Dubai zu schicken. Beim Telefonat erwähnt die Mitarbeiterin, dass es sich um Parfüm in kleinen Glasflakons handelt. Eine Shipper’s Declaration liegt nicht vor. Du bist Auszubildende(r) in der Luftfrachtabteilung.`,
      hints: ['Parfüm enthält Alkohol.', 'Wer muss die Gefahrguterklärung unterschreiben?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf06-luftfracht-gefahrgut-a10-1', type: 'mc', difficulty: 2, points: 1,
          q: 'Wie ist die Sendung einzuordnen?',
          options: [
            'Kein Gefahrgut, weil es sich um Kosmetik handelt',
            'Gefahrgut Klasse 3 (entzündbare flüssige Stoffe), z. B. UN 1266 Parfümerieerzeugnisse',
            'Gefahrgut Klasse 8 (ätzende Stoffe)',
            'Gefahrgut Klasse 2 (Gase)'
          ],
          correct: [1],
          hints: ['Parfüm brennt.', 'Flüssig und entzündbar = welche Klasse?'],
          solution: 'Parfüm ist eine **entzündbare Flüssigkeit (Klasse 3)**; typische Eintragung UN 1266 Parfümerieerzeugnisse. Die harmlose Bezeichnung „Kosmetikproben“ ist ein Beispiel für **verstecktes Gefahrgut**. Die genaue Einstufung (z. B. Verpackungsgruppe) nimmt der Versender anhand des Sicherheitsdatenblatts vor.'
        },
        {
          id: 'lf06-luftfracht-gefahrgut-a10-2', type: 'mc', difficulty: 2, points: 3,
          q: 'Wie gehst du richtig vor? (Mehrfachauswahl)',
          options: [
            'Den Kunden informieren, dass die Sendung als Gefahrgut deklariert werden muss.',
            'Vom Versender eine unterschriebene Shipper’s Declaration und eine vorschriftsmäßige Verpackung, Kennzeichnung und Bezettelung verlangen.',
            'Die Sendung als „Kosmetikproben“ weitergeben, weil die Flakons klein sind.',
            'Die Shipper’s Declaration selbst ausfüllen und im Namen des Kunden unterschreiben, damit es schneller geht.',
            'Vor der Übergabe prüfen, ob die Packstücke richtig gekennzeichnet sind; die Airline führt danach ihre Annahmeprüfung durch.'
          ],
          correct: [0, 1, 4],
          hints: ['Falsche Deklaration gefährdet Menschen.', 'Die Verantwortung für die Erklärung liegt beim Versender.'],
          solution: 'Richtig: **A, B, E**. Die Sendung darf nicht als normale Fracht weitergegeben werden (C wäre eine Falschdeklaration). Die Shipper’s Declaration erstellt und unterschreibt der **Versender**, nicht der Spediteur im fremden Namen (D).'
        },
        {
          id: 'lf06-luftfracht-gefahrgut-a10-3', type: 'text', difficulty: 2, points: 3,
          q: 'Der Kunde fragt: „Wer darf bei uns eigentlich so eine Sendung vorbereiten?“ Antworte ihm mit Hinweis auf die Schulungspflicht.',
          model: 'Jede Person, die Gefahrgut für die Luftfracht vorbereitet oder zum Versand übergibt, muss eine Gefahrgutschulung nach den ICAO- bzw. IATA-Vorschriften haben. Die Schulung ist seit 2023 kompetenzbasiert (CBTA) und muss innerhalb von 24 Monaten wiederholt werden. Ohne geschultes Personal darf Ihr Unternehmen keine Shipper’s Declaration ausstellen.',
          criteria: [
            { text: 'nennt Schulungspflicht für vorbereitende Personen', keywords: ['Schulung|geschult'], points: 1 },
            { text: 'nennt Wiederholung nach 24 Monaten', keywords: ['24 Monate|24 Monaten|zwei Jahre'], points: 1 },
            { text: 'nennt Bezug zur Shipper’s Declaration oder zu ICAO/IATA', keywords: ['Declaration|Erklärung|ICAO|IATA'], points: 1 }
          ],
          hints: ['Wer Gefahrgut vorbereitet, braucht eine bestimmte Qualifikation.', 'Die Qualifikation läuft ab.'],
          solution: 'Nur **geschulte** Personen (Gefahrgutschulung nach ICAO-TI/IATA-DGR, kompetenzbasiert seit 2023). Wiederholung **innerhalb von 24 Monaten**. Erst dann darf der Mitarbeiter die Sendung vorbereiten und die Shipper’s Declaration unterschreiben.'
        }
      ]
    },
    {
      id: 'lf06-luftfracht-gefahrgut-a11', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zum Vergleich Luftfracht – Straße (ADR) sind **richtig**? (Mehrfachauswahl)',
      options: [
        'Gefahrklassen und UN-Nummern sind bei beiden Verkehrsträgern gleich.',
        'Eine nach ADR korrekt verpackte Sendung erfüllt automatisch die IATA-DGR.',
        'Auf der Straße heißt das Begleitpapier Beförderungspapier, in der Luftfracht Shipper’s Declaration.',
        'In der Luftfracht gelten generell geringere Anforderungen als auf der Straße.'
      ],
      correct: [0, 2],
      hints: ['Beide Systeme beruhen auf den UN-Empfehlungen.', 'Welcher Verkehrsträger ist strenger?'],
      solution: 'Richtig: **A** (gemeinsames UN-System) und **C** (Begleitpapiere). Falsch: B und D – die Luftfrachtvorschriften sind strenger (Mengengrenzen, CAO, Ladezustand von Batterien); eine ADR-konforme Sendung muss für den Flug neu geprüft werden.'
    }
  ],
  quiz: ['lf06-luftfracht-gefahrgut-a1', 'lf06-luftfracht-gefahrgut-a2', 'lf06-luftfracht-gefahrgut-a3', 'lf06-luftfracht-gefahrgut-a5', 'lf06-luftfracht-gefahrgut-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 6, Inhalte: Gefahrgutdokumente und Gefahrgutkennzeichnung' },
    { title: 'Technical Instructions for the Safe Transport of Dangerous Goods by Air (Doc 9284), Ausgabe 2025–2026', publisher: 'ICAO', url: 'https://www.icao.int/Dangerous-Goods/Technical-Instructions', asOf: '2025-2026' },
    { title: 'Lithium Battery Guidance Document (Stand 01.01.2026, Grundlage ICAO-TI 2025–2026 und IATA-DGR 67. Ausgabe)', publisher: 'IATA', url: 'https://www.iata.org/contentassets/05e6d8742b0047259bf3a700bc9d42b9/lithium-battery-guidance-document.pdf', asOf: '2026-01' },
    { title: 'How to Get Trained and Certified on Dangerous Goods Transported by Air', publisher: 'IATA', url: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/how-to-get-trained-and-certified-on-dangerous-goods-transported-by-air/', asOf: '2023-10' },
    { title: 'CBTA – Competency-Based Training and Assessment (Gefahrgut)', publisher: 'Luftfahrt-Bundesamt (LBA)', url: 'https://www.lba.de/DE/Luftfahrtunternehmen/Gefahrgut/CBTA/CBTA_node.html', asOf: '2026-10' },
    { title: 'Luftverkehrsgesetz § 27 Beförderung gefährlicher Güter', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/luftvg/__27.html', asOf: '2026' },
    { title: 'Luftverkehrs-Zulassungs-Ordnung § 78 Erlaubnis zur Beförderung gefährlicher Güter', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/luftvzo/__78.html', asOf: '2026' }
  ],
  links: ['lf06-luftfracht-recht', 'lf06-luftfracht-berechnung']
};
