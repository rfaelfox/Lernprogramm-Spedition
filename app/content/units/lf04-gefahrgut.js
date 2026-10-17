export default {
  id: 'lf04-gefahrgut',
  area: 'LF04',
  topic: 'lf04-gefahrgut',
  title: 'Gefahrgut auf der Straße: ADR-Grundlagen',
  status: 'pruefen',
  minutes: 40,
  validity: {
    asOf: '2026-10',
    note: 'ADR in der Fassung 2025 (in Deutschland verkündet mit der 30. ADR-Änderungsverordnung vom 19.02.2025, BGBl. 2025 II Nr. 57; laut BMV gelten zum 01.01.2027 weitere Änderungen). Geprüft am 17.10.2026: ADR 1.1.3.6 (Tabelle und Faktoren 50/3/1), 5.3.2.2 (Maße der orangefarbenen Tafel), GGVSEB §§ 18, 19, 21, 28, GbV §§ 2, 3. Nicht an amtlicher Stelle geprüft und daher zu kontrollieren: die Bedeutung der Ziffern der Gefahrnummer (5.3.2.3, nur über ein Fachlexikon geprüft) und die Beförderungskategorien der Beispielstoffe (Tabelle A, Spalte 15). Vor Prüfungen mit der aktuellen ADR-Ausgabe abgleichen.'
  },
  goals: [
    'Ich kann die Rechtsgrundlagen ADR, GGVSEB und GbV einordnen.',
    'Ich kann die neun Gefahrklassen nennen und Beispiele zuordnen.',
    'Ich kann die Pflichten von Absender, Verlader, Beförderer und Fahrzeugführer unterscheiden.',
    'Ich kann eine orangefarbene Warntafel lesen (Gefahrnummer oben, UN-Nummer unten).',
    'Ich kann Beförderungspapier, schriftliche Weisungen und ADR-Schulungsbescheinigung unterscheiden.',
    'Ich kann mit der 1000-Punkte-Regel nach ADR 1.1.3.6 prüfen, ob eine Beförderung teilweise freigestellt ist.'
  ],
  simple: `# Worum geht es?

**Gefährliche Güter** sind Stoffe und Gegenstände, von denen bei der Beförderung Gefahren für Menschen, Tiere und Umwelt ausgehen können, zum Beispiel Benzin, Gasflaschen, Säuren, Lacke oder Lithiumbatterien. Für ihre Beförderung auf der Straße gelten strenge Regeln.

**Die drei wichtigsten Vorschriften:**

| Vorschrift | Inhalt |
|---|---|
| **ADR** | Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße. Enthält die technischen Vorschriften (Klassen, Verpackung, Kennzeichnung, Papiere, Fahrzeuge). |
| **GGVSEB** | Gefahrgutverordnung Straße, Eisenbahn und Binnenschifffahrt. Macht das ADR auch für Inlandstransporte verbindlich und legt fest, **wer welche Pflichten** hat und welche Bußgelder drohen. |
| **GbV** | Gefahrgutbeauftragtenverordnung. Regelt, wann ein Unternehmen einen **Gefahrgutbeauftragten** bestellen muss. |

**Woran erkennt man einen Gefahrgut-Lkw?** An den **orangefarbenen Warntafeln** vorne und hinten. Bei Tanks steht oben die **Gefahrnummer** (z. B. 33 = leicht entzündbarer flüssiger Stoff) und unten die **UN-Nummer** (z. B. 1203 = Benzin).

**Kleine Mengen:** Wer nur wenig Gefahrgut befördert, ist nach der **1000-Punkte-Regel** (ADR 1.1.3.6) von vielen Pflichten befreit, zum Beispiel von den Warntafeln.

> Für Gefahrgut im Luftverkehr (IATA-DGR) siehe die Einheit *Gefahrgut in der Luftfracht*.`,
  deep: `# 1. Rechtsgrundlagen

- **ADR:** gilt international zwischen den Vertragsstaaten; Anlage A (Stoffe, Verpackung, Kennzeichnung, Papiere) und Anlage B (Fahrzeuge, Besatzung, Betrieb). Es wird alle zwei Jahre überarbeitet (aktuell ADR 2025).
- **GGVSEB:** erklärt das ADR auch für innerdeutsche Beförderungen für anwendbar und weist die Pflichten den einzelnen **Beteiligten** zu (§§ 17 ff.).
- **GbV:** Pflicht zur Bestellung eines Gefahrgutbeauftragten.
- Kontrollen auf der Straße führen u. a. Polizei und das Bundesamt für Logistik und Mobilität (BALM) durch.

# 2. Die neun Gefahrklassen

| Klasse | Bezeichnung | Beispiel |
|---|---|---|
| 1 | explosive Stoffe und Gegenstände mit Explosivstoff | Feuerwerkskörper |
| 2 | Gase | Propan, Druckgasflaschen |
| 3 | entzündbare flüssige Stoffe | Benzin, Diesel, Lacke |
| 4.1 | entzündbare feste Stoffe, selbstzersetzliche Stoffe | Streichhölzer |
| 4.2 | selbstentzündliche Stoffe | ölgetränkte Putzlappen |
| 4.3 | Stoffe, die in Berührung mit Wasser entzündbare Gase entwickeln | Natrium |
| 5.1 | entzündend (oxidierend) wirkende Stoffe | Wasserstoffperoxid-Lösung |
| 5.2 | organische Peroxide | Härter für Kunstharz |
| 6.1 | giftige Stoffe | Pflanzenschutzmittel |
| 6.2 | ansteckungsgefährliche Stoffe | klinische Proben |
| 7 | radioaktive Stoffe | medizinische Isotope |
| 8 | ätzende Stoffe | Schwefelsäure, Batteriesäure |
| 9 | verschiedene gefährliche Stoffe und Gegenstände | Lithiumbatterien, Trockeneis |

Jeder Stoff hat eine vierstellige **UN-Nummer** (z. B. UN 1203 Benzin). Viele Stoffe sind einer **Verpackungsgruppe** zugeordnet: I = hohe, II = mittlere, III = geringe Gefahr.

# 3. Beteiligte und Pflichten (GGVSEB, Auswahl)

| Beteiligter | Wer ist das? | wichtige Pflichten |
|---|---|---|
| **Absender** (§ 18) | wer Gefahrgut selbst oder durch Dritte versendet | Gut richtig klassifizieren; Beförderer über das Gefahrgut informieren; **Beförderungspapier** und Begleitpapiere mitgeben; nur zugelassene Verpackungen; Kopie des Beförderungspapiers **mindestens 3 Monate** aufbewahren |
| **Verlader** (§ 21) | wer Versandstücke in das Fahrzeug verlädt | Versandstücke prüfen, **beschädigte oder undichte** nicht übergeben; Fahrzeugführer über das Gefahrgut informieren; für Kennzeichnung (Großzettel, orangefarbene Tafeln) sorgen |
| **Beförderer** (§ 19) | wer die Beförderung durchführt | **schriftliche Weisungen** vor Fahrtantritt der Besatzung übergeben und sicherstellen, dass sie verstanden werden; nur Fahrer mit gültiger **ADR-Schulungsbescheinigung** einsetzen; Ausrüstung und Feuerlöscher bereitstellen; Kopie des Beförderungspapiers 3 Monate aufbewahren |
| **Fahrzeugführer** (§ 28) | Fahrerin oder Fahrer | keine beschädigten Versandstücke befördern; orangefarbene Tafeln anbringen oder abdecken; Papiere, Bescheinigung und Ausrüstung mitführen; schriftliche Weisungen befolgen |

Eine **Spedition** kann je nach Rolle Absender (gegenüber dem Frachtführer), Verlader (im eigenen Umschlaglager) oder Beförderer (mit eigenen Lkw) sein.

# 4. Gefahrgutbeauftragter (GbV)

- Jedes Unternehmen, das an der Beförderung gefährlicher Güter beteiligt ist und Pflichten nach GGVSEB hat, muss **mindestens einen Gefahrgutbeauftragten in Textform bestellen** (§ 3 GbV). Er braucht einen gültigen **Schulungsnachweis** für den Verkehrsträger.
- Der Unternehmer kann die Aufgabe selbst übernehmen; auch ein externer Berater ist möglich. Der Name wird den Mitarbeitern bekanntgegeben.
- **Befreiungen (§ 2 GbV), Auswahl:** Unternehmen, die nur Mengen innerhalb von **ADR 1.1.3.6** befördern; Unternehmen, die nur als Empfänger oder Fahrzeugführer beteiligt sind; bestimmte Beteiligte mit höchstens **50 t netto** Gefahrgut im Kalenderjahr.

# 5. Kennzeichnung des Fahrzeugs

**Orangefarbene Tafel (ADR 5.3.2):** rückstrahlend, **40 cm breit, 30 cm hoch**, schwarzer Rand 15 mm.

- Stückgut-Lkw: Tafeln **ohne Nummern** vorne und hinten.
- Tank und lose Schüttung: Tafeln **mit Nummern**: **oben die Gefahrnummer** (Nummer zur Kennzeichnung der Gefahr), **unten die UN-Nummer**.

**Gefahrnummer lesen:**

| Ziffer | Gefahr |
|---|---|
| 2 | Entweichen von Gas durch Druck oder chemische Reaktion |
| 3 | Entzündbarkeit von Flüssigkeiten (Dämpfen) und Gasen |
| 4 | Entzündbarkeit fester Stoffe |
| 5 | oxidierende (brandfördernde) Wirkung |
| 6 | Giftigkeit oder Ansteckungsgefahr |
| 7 | Radioaktivität |
| 8 | Ätzwirkung |
| 9 | Gefahr einer spontanen heftigen Reaktion |

- **Verdopplung** einer Ziffer = Verstärkung der Gefahr (33 = leicht entzündbar).
- **0** an zweiter Stelle = keine weitere Gefahr (30 = entzündbarer flüssiger Stoff, z. B. Diesel).
- **X** vor der Nummer = reagiert gefährlich mit Wasser; nicht mit Wasser löschen.

**Gefahrzettel und Großzettel:** Versandstücke tragen rautenförmige Gefahrzettel der jeweiligen Klasse. Tanks, Container und bestimmte Fahrzeuge tragen vergrößerte **Großzettel** (Placards) mit denselben Symbolen.

# 6. Begleitpapiere

| Papier | Inhalt | wer stellt bereit |
|---|---|---|
| **Beförderungspapier** (ADR 5.4.1) | u. a. UN-Nummer, offizielle Benennung, Gefahrzettelmuster, Verpackungsgruppe, Anzahl und Beschreibung der Versandstücke, Gesamtmenge, Absender, Empfänger, Tunnelbeschränkungscode; Beispiel: *UN 1203 BENZIN, 3, II, (D/E)* | Absender |
| **Schriftliche Weisungen** (ADR 5.4.3) | einheitliches Formblatt mit Maßnahmen bei Unfällen und Notfällen, in einer Sprache, die die Besatzung lesen und verstehen kann | Beförderer |
| **ADR-Schulungsbescheinigung** (ADR 8.2) | Nachweis der Fahrerschulung (Basiskurs, ggf. Aufbaukurse Tank, Klasse 1, Klasse 7); gilt **fünf Jahre** und wird nach Auffrischungsschulung und Prüfung verlängert | Fahrzeugführer |

# 7. Freistellung nach ADR 1.1.3.6 (1000-Punkte-Regel)

Jeder Stoff ist einer **Beförderungskategorie** (0 bis 4) zugeordnet (Tabelle A, Spalte 15). Bleibt die Menge **je Beförderungseinheit** unter den Grenzen, entfallen viele Pflichten.

| Beförderungskategorie | höchstzulässige Menge je Beförderungseinheit | Faktor für die Punkte |
|---|---|---|
| 0 | 0 (keine Freistellung) | – |
| 1 | 20 | × 50 |
| 2 | 333 | × 3 |
| 3 | 1000 | × 1 |
| 4 | unbegrenzt | × 0 (zählt nicht) |

**Menge:** feste Stoffe, verflüssigte Gase: Nettomasse in **kg**; flüssige Stoffe: Inhalt in **Litern**; verdichtete Gase: Fassungsraum des Gefäßes in Litern; Gegenstände: Masse ohne Verpackung.

**Gemischte Ladung:** Punkte = Menge BK 1 × 50 + Menge BK 2 × 3 + Menge BK 3 × 1. **Summe höchstens 1000 Punkte.**

**Wenn freigestellt, entfallen z. B.:** orangefarbene Tafeln (Kapitel 5.3), schriftliche Weisungen (5.4.3), ADR-Schulungsbescheinigung des Fahrers und die meisten Vorschriften aus Teil 8 und 9.

**Es bleiben z. B.:** richtig verpackte, gekennzeichnete und bezettelte Versandstücke, **Beförderungspapier**, **ein Feuerlöscher mit mindestens 2 kg** Fassungsvermögen, **Unterweisung** der beteiligten Personen (8.2.3), Zusammenladeverbote und Ladungssicherung.`,
  terms: [
    { term: 'ADR', def: 'Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße; enthält die technischen Vorschriften und wird alle zwei Jahre aktualisiert.' },
    { term: 'GGVSEB', def: 'Gefahrgutverordnung Straße, Eisenbahn und Binnenschifffahrt; macht das ADR innerstaatlich anwendbar und legt die Pflichten der Beteiligten fest.' },
    { term: 'UN-Nummer', def: 'Vierstellige Nummer, die einen Stoff oder Gegenstand weltweit eindeutig kennzeichnet, z. B. UN 1203 für Benzin.' },
    { term: 'Gefahrnummer', def: 'Zwei- oder dreistellige Nummer im oberen Feld der orangefarbenen Tafel, die die Hauptgefahren beschreibt; X davor = reagiert gefährlich mit Wasser.' },
    { term: 'Verpackungsgruppe', def: 'Einstufung nach Gefahrengrad: I hohe, II mittlere, III geringe Gefahr.' },
    { term: 'Beförderungskategorie', def: 'Einteilung der Gefahrgüter in 0 bis 4 für die Freistellung nach ADR 1.1.3.6.' },
    { term: 'Beförderungseinheit', def: 'Kraftfahrzeug ohne Anhänger oder Kraftfahrzeug mit Anhänger bzw. Sattelzug.' },
    { term: 'Beförderungspapier', def: 'Vom Absender bereitgestelltes Dokument mit den Angaben zum Gefahrgut (UN-Nummer, Benennung, Klasse, Verpackungsgruppe, Menge usw.).' },
    { term: 'Schriftliche Weisungen', def: 'Einheitliches Formblatt mit Verhaltensregeln für Unfälle und Notfälle; der Beförderer übergibt es der Besatzung vor Fahrtantritt.' },
    { term: 'Gefahrgutbeauftragter', def: 'Vom Unternehmen in Textform bestellte, geschulte Person, die auf die Einhaltung der Gefahrgutvorschriften achtet (GbV).' },
    { term: 'ADR-Schulungsbescheinigung', def: 'Nachweis, dass der Fahrzeugführer eine Gefahrgutschulung mit Prüfung abgeschlossen hat; gilt fünf Jahre.' }
  ],
  example: `# Praxisbeispiel: Lacke für einen Baumarkt

Die Spedition Saar-Logistik soll für einen Hersteller in Homburg Lacke zu einem Baumarkt in Trier liefern. Laut Sicherheitsdatenblatt und Beförderungspapier:

- **UN 1263 FARBE, 3, II**, 15 Kanister zu je 10 l = 150 l, Beförderungskategorie 2
- **UN 1263 FARBE, 3, III**, 20 Kanister zu je 20 l = 400 l, Beförderungskategorie 3

**1000-Punkte-Prüfung:**

| Position | Menge | Faktor | Punkte |
|---|---|---|---|
| BK 2 | 150 l | × 3 | 450 |
| BK 3 | 400 l | × 1 | 400 |
| **Summe** | | | **850** |

850 Punkte ≤ 1000 Punkte: Die Beförderung ist nach **ADR 1.1.3.6 teilweise freigestellt**.

**Folgen:**

- Der Lkw braucht **keine orangefarbenen Tafeln**, der Fahrer **keine ADR-Schulungsbescheinigung**, schriftliche Weisungen sind nicht vorgeschrieben.
- Pflicht bleiben: Beförderungspapier, 2-kg-Feuerlöscher, Unterweisung des Fahrers, ordentliche Ladungssicherung, gekennzeichnete und bezettelte Kanister.

**Abwandlung:** Der Kunde bestellt zusätzlich 60 l der Verpackungsgruppe II. Dann: 210 l × 3 = 630 Punkte + 400 = **1030 Punkte** > 1000. Die Freistellung entfällt: Warntafeln, schriftliche Weisungen und ein Fahrer mit ADR-Bescheinigung sind nötig.`,
  rules: [
    'ADR = technische Regeln, GGVSEB = Pflichten der Beteiligten und Bußgelder, GbV = Gefahrgutbeauftragter.',
    'Orangefarbene Tafel: oben Gefahrnummer, unten UN-Nummer; X bedeutet: kein Wasser.',
    'Verdoppelte Ziffer = verstärkte Gefahr; 0 = keine weitere Gefahr.',
    'Absender stellt das Beförderungspapier, Beförderer die schriftlichen Weisungen, der Fahrer hat die ADR-Schulungsbescheinigung.',
    '1000-Punkte-Regel: BK 1 × 50, BK 2 × 3, BK 3 × 1, BK 4 zählt nicht; Summe höchstens 1000.',
    'Auch bei Freistellung bleiben Beförderungspapier, 2-kg-Feuerlöscher und Unterweisung Pflicht.',
    'Beförderungskategorie 0 ist nie nach 1.1.3.6 freigestellt.'
  ],
  summary: `- Rechtsgrundlagen: ADR (international, technische Regeln), GGVSEB (innerstaatlich, Pflichten), GbV (Gefahrgutbeauftragter).
- 9 Klassen: 1 Explosiv, 2 Gase, 3 entzündbare Flüssigkeiten, 4.1–4.3 entzündbare/selbstentzündliche/mit Wasser reagierende Feststoffe, 5.1–5.2 oxidierend/organische Peroxide, 6.1–6.2 giftig/ansteckend, 7 radioaktiv, 8 ätzend, 9 verschiedene.
- Beteiligte: Absender (Klassifizierung, Beförderungspapier), Verlader (Versandstücke prüfen, Kennzeichnung), Beförderer (schriftliche Weisungen, geschulte Fahrer, Ausrüstung), Fahrzeugführer (mitführen, Tafeln).
- Orangefarbene Tafel 40 × 30 cm: Gefahrnummer oben, UN-Nummer unten.
- Freistellung 1.1.3.6: höchstens 1000 Punkte je Beförderungseinheit.`,
  mistakes: [
    { wrong: 'Auf der orangefarbenen Tafel steht oben die UN-Nummer.', right: 'Oben steht die Gefahrnummer, unten die vierstellige UN-Nummer.' },
    { wrong: 'Bei der 1000-Punkte-Regel addiert man einfach alle Kilogramm und Liter.', right: 'Jede Menge wird mit dem Faktor ihrer Beförderungskategorie multipliziert (50, 3, 1, Kategorie 4 zählt nicht).' },
    { wrong: 'Bei Freistellung nach 1.1.3.6 braucht man gar keine Papiere.', right: 'Das Beförderungspapier bleibt Pflicht, ebenso ein 2-kg-Feuerlöscher und die Unterweisung.' },
    { wrong: 'Die schriftlichen Weisungen stellt der Absender aus.', right: 'Der Beförderer übergibt sie der Fahrzeugbesatzung vor Fahrtantritt (§ 19 GGVSEB).' },
    { wrong: 'Eine Spedition ohne eigene Lkw hat mit Gefahrgutpflichten nichts zu tun.', right: 'Sie kann Absender oder Verlader sein und hat dann eigene Pflichten nach GGVSEB.' },
    { wrong: 'Ein X vor der Gefahrnummer bedeutet „explosiv“.', right: 'X bedeutet, dass der Stoff gefährlich mit Wasser reagiert.' }
  ],
  flashcards: [
    { q: 'Was regelt das ADR?', a: 'Die technischen Vorschriften für die Beförderung gefährlicher Güter auf der Straße: Klassifizierung, Verpackung, Kennzeichnung, Papiere, Fahrzeuge, Besatzung.' },
    { q: 'Was regelt die GGVSEB?', a: 'Sie macht das ADR innerstaatlich anwendbar und weist den Beteiligten (Absender, Verlader, Beförderer, Fahrzeugführer …) ihre Pflichten zu.' },
    { q: 'Was steht oben und unten auf der orangefarbenen Tafel?', a: 'Oben die Gefahrnummer, unten die UN-Nummer.' },
    { q: 'Was bedeutet die Gefahrnummer 33?', a: 'Leicht entzündbarer flüssiger Stoff (verdoppelte 3 = verstärkte Entzündbarkeit).' },
    { q: 'Was bedeutet ein X vor der Gefahrnummer?', a: 'Der Stoff reagiert gefährlich mit Wasser.' },
    { q: 'Welche Gefahrklasse haben ätzende Stoffe?', a: 'Klasse 8.' },
    { q: 'Welche Faktoren gelten bei der 1000-Punkte-Regel?', a: 'Beförderungskategorie 1: × 50, Kategorie 2: × 3, Kategorie 3: × 1; Kategorie 4 zählt nicht, Kategorie 0 ist nie freigestellt.' },
    { q: 'Wer übergibt die schriftlichen Weisungen?', a: 'Der Beförderer an die Fahrzeugbesatzung vor Fahrtantritt.' },
    { q: 'Wie lange gilt die ADR-Schulungsbescheinigung?', a: 'Fünf Jahre; Verlängerung nach Auffrischungsschulung und Prüfung.' },
    { q: 'Was bleibt bei Freistellung nach 1.1.3.6 Pflicht?', a: 'U. a. Beförderungspapier, ein Feuerlöscher mit mindestens 2 kg, Unterweisung der Beteiligten, korrekt gekennzeichnete Versandstücke, Ladungssicherung.' },
    { q: 'Wann muss kein Gefahrgutbeauftragter bestellt werden?', a: 'Z. B. wenn ein Unternehmen nur Mengen innerhalb von ADR 1.1.3.6 befördert (§ 2 GbV).' }
  ],
  tasks: [
    {
      id: 'lf04-gefahrgut-a1', type: 'mc', difficulty: 1, points: 2,
      q: 'Welche Aussagen zu den Rechtsgrundlagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Das ADR ist ein internationales Übereinkommen für die Beförderung gefährlicher Güter auf der Straße.',
        'Die GGVSEB gilt nur für die Binnenschifffahrt.',
        'Die GGVSEB regelt, welche Pflichten Absender, Verlader und Beförderer haben.',
        'Die GbV regelt die Maße der orangefarbenen Warntafel.'
      ],
      correct: [0, 2],
      hints: ['GGVSEB steht für Straße, Eisenbahn und Binnenschifffahrt.', 'Die GbV betrifft eine Person im Unternehmen.'],
      solution: 'Richtig sind **1 und 3**. Die GGVSEB gilt für Straße, Eisenbahn und Binnenschifffahrt und legt die Pflichten fest. Die GbV regelt den Gefahrgutbeauftragten; die Tafelmaße stehen im ADR (5.3.2.2).'
    },
    {
      id: 'lf04-gefahrgut-a2', type: 'match', difficulty: 1, points: 6,
      q: 'Ordne die Gefahrklasse dem passenden Beispiel zu.',
      pairs: [
        ['Klasse 2', 'Propan in Gasflaschen'],
        ['Klasse 3', 'Dieselkraftstoff'],
        ['Klasse 4.3', 'Natrium (entwickelt mit Wasser entzündbare Gase)'],
        ['Klasse 6.1', 'giftiges Pflanzenschutzmittel'],
        ['Klasse 8', 'Batteriesäure'],
        ['Klasse 9', 'Lithiumbatterien']
      ],
      hints: ['3 = entzündbare Flüssigkeiten, 8 = ätzend.', 'Klasse 9 sammelt „verschiedene“ Gefahrgüter.'],
      solution: 'Gase = 2, Diesel = 3, Natrium = 4.3, giftige Stoffe = 6.1, Säure = 8, Lithiumbatterien = 9.'
    },
    {
      id: 'lf04-gefahrgut-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze den Text zur orangefarbenen Warntafel.',
      text: 'Die orangefarbene Tafel ist [[40]] cm breit und [[30]] cm hoch. Bei Tankfahrzeugen steht im oberen Feld die [[Gefahrnummer|Nummer zur Kennzeichnung der Gefahr]] und im unteren Feld die [[UN-Nummer|UN Nummer]]. Ein vorangestelltes [[X]] bedeutet, dass der Stoff gefährlich mit Wasser reagiert.',
      hints: ['Das Format ist breiter als hoch.', 'Die vierstellige Nummer steht unten.'],
      solution: '40 – 30 – Gefahrnummer – UN-Nummer – X (ADR 5.3.2.2 und 5.3.2.3).'
    },
    {
      id: 'lf04-gefahrgut-a4', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Lkw (eine Beförderungseinheit) soll laden: 200 l eines Stoffes der Beförderungskategorie 2, 300 kg eines Stoffes der Beförderungskategorie 3 und 50 kg eines Gegenstands der Beförderungskategorie 4. Berechne die Punkte für Kategorie 2 und 3 und die Gesamtpunktzahl. Ist die Beförderung nach ADR 1.1.3.6 freigestellt?',
      formula: 'Punkte = Menge BK 1 × 50 + Menge BK 2 × 3 + Menge BK 3 × 1 (BK 4 zählt nicht); freigestellt, wenn Summe ≤ 1000',
      fields: [
        { id: 'bk2', label: 'Punkte Kategorie 2', unit: 'Punkte', answer: 600, tol: 0 },
        { id: 'bk3', label: 'Punkte Kategorie 3', unit: 'Punkte', answer: 300, tol: 0 },
        { id: 'summe', label: 'Gesamtpunkte', unit: 'Punkte', answer: 900, tol: 0 }
      ],
      hints: ['200 × 3 und 300 × 1.', 'Kategorie 4 wird nicht mitgerechnet.'],
      solution: `**Formel:** Punkte = BK 1 × 50 + BK 2 × 3 + BK 3 × 1

1. BK 2: 200 l × 3 = **600 Punkte**
2. BK 3: 300 kg × 1 = **300 Punkte**
3. BK 4: 50 kg × 0 = 0 Punkte
4. Summe: 600 + 300 = **900 Punkte** ≤ 1000

Die Beförderung ist **teilweise freigestellt**: keine orangefarbenen Tafeln, keine ADR-Schulungsbescheinigung, keine schriftlichen Weisungen. Beförderungspapier, 2-kg-Feuerlöscher und Unterweisung bleiben Pflicht.`
    },
    {
      id: 'lf04-gefahrgut-a5', type: 'calc', difficulty: 3, points: 3,
      q: 'Auf einem Lkw befinden sich bereits 400 kg eines Stoffes der Beförderungskategorie 3. Wie viele Punkte sind noch frei? Wie viele Liter eines Stoffes der Kategorie 2 **oder alternativ** wie viele kg eines Stoffes der Kategorie 1 dürfen höchstens zugeladen werden, damit die Freistellung erhalten bleibt?',
      formula: 'freie Punkte = 1000 − bereits belegte Punkte; zulässige Menge = freie Punkte ÷ Faktor',
      fields: [
        { id: 'frei', label: 'freie Punkte', unit: 'Punkte', answer: 600, tol: 0 },
        { id: 'bk2', label: 'höchstens Kategorie 2', unit: 'l', answer: 200, tol: 0 },
        { id: 'bk1', label: 'höchstens Kategorie 1', unit: 'kg', answer: 12, tol: 0 }
      ],
      hints: ['400 kg × 1 = 400 Punkte sind belegt.', 'Teile die freien Punkte durch 3 bzw. durch 50.'],
      solution: `1. Belegt: 400 kg × 1 = 400 Punkte; frei: 1000 − 400 = **600 Punkte**
2. Kategorie 2: 600 ÷ 3 = **200 l**
3. Kategorie 1: 600 ÷ 50 = **12 kg**

Je gefährlicher die Kategorie, desto kleiner die freigestellte Menge.`
    },
    {
      id: 'lf04-gefahrgut-a6', type: 'mc', difficulty: 2, points: 3,
      q: 'Eine Beförderung ist nach ADR 1.1.3.6 teilweise freigestellt. Welche Pflichten bleiben bestehen? (Mehrfachauswahl)',
      options: [
        'Beförderungspapier mitführen',
        'orangefarbene Tafeln vorne und hinten anbringen',
        'mindestens einen Feuerlöscher mit 2 kg Fassungsvermögen mitführen',
        'Fahrer mit ADR-Schulungsbescheinigung einsetzen',
        'beteiligte Personen nach ADR 8.2.3 unterweisen',
        'schriftliche Weisungen übergeben'
      ],
      correct: [0, 2, 4],
      hints: ['1.1.3.6.2 befreit u. a. von Kapitel 5.3 und Abschnitt 5.4.3.', 'Teil 8 entfällt weitgehend, mit Ausnahmen wie dem Feuerlöscher und der Unterweisung.'],
      solution: 'Richtig sind **1, 3 und 5**. Kennzeichnung des Fahrzeugs (Kapitel 5.3), schriftliche Weisungen (5.4.3) und die ADR-Schulungsbescheinigung entfallen. Beförderungspapier, 2-kg-Feuerlöscher (8.1.4.2) und Unterweisung (8.2.3) bleiben.'
    },
    {
      id: 'lf04-gefahrgut-a7', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Pflicht dem Beteiligten nach GGVSEB zu.',
      pairs: [
        ['Absender', 'Beförderungspapier mitgeben und Gut richtig klassifizieren'],
        ['Verlader', 'beschädigte oder undichte Versandstücke nicht übergeben'],
        ['Beförderer', 'schriftliche Weisungen vor Fahrtantritt übergeben'],
        ['Fahrzeugführer', 'Begleitpapiere und Schulungsbescheinigung mitführen']
      ],
      hints: ['Wer kennt das Gut am besten?', 'Wer ist für Fahrzeug und Besatzung verantwortlich?'],
      solution: 'Absender (§ 18): Klassifizierung, Beförderungspapier. Verlader (§ 21): Versandstücke prüfen. Beförderer (§ 19): schriftliche Weisungen, geschulte Fahrer. Fahrzeugführer (§ 28): Mitführpflichten.'
    },
    {
      id: 'lf04-gefahrgut-a8', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Tank-Lkw trägt eine orangefarbene Tafel mit den Nummern 33 (oben) und 1203 (unten). Was bedeutet das?',
      options: [
        'Gefahrnummer 33: leicht entzündbarer flüssiger Stoff; UN 1203: Benzin',
        'UN-Nummer 33, Gefahrnummer 1203',
        'Klasse 3, Verpackungsgruppe 3; Gewicht 1.203 kg',
        'Gefahrnummer 33: ätzend; UN 1203: Diesel'
      ],
      correct: [0],
      hints: ['Oben steht die Gefahrnummer.', 'Die verdoppelte 3 steht für erhöhte Entzündbarkeit.'],
      solution: '**Gefahrnummer 33** = leicht entzündbarer flüssiger Stoff, **UN 1203** = Benzin. Diesel hat die UN-Nummer 1202 und meist die Gefahrnummer 30.'
    },
    {
      id: 'lf04-gefahrgut-a9', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zum Gefahrgutbeauftragten sind richtig? (Mehrfachauswahl)',
      options: [
        'Er muss in Textform bestellt werden.',
        'Er braucht einen gültigen Schulungsnachweis.',
        'Jedes Unternehmen, das jemals Gefahrgut empfängt, muss einen bestellen.',
        'Es darf nie eine externe Person sein.'
      ],
      correct: [0, 1],
      hints: ['§ 3 GbV regelt Form und Voraussetzungen.', '§ 2 GbV befreit z. B. reine Empfänger.'],
      solution: 'Richtig sind **1 und 2** (§ 3 GbV). Reine Empfänger sind nach § 2 GbV befreit, ebenso Unternehmen, die nur Mengen innerhalb von 1.1.3.6 befördern. Auch eine externe Person darf bestellt werden.'
    },
    {
      id: 'lf04-gefahrgut-a10', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte bei der Annahme eines Gefahrgutauftrags in der Spedition in eine sinnvolle Reihenfolge.',
      items: [
        'Angaben des Absenders prüfen: UN-Nummer, Klasse, Verpackungsgruppe, Menge',
        'Beförderungskategorie ermitteln und 1000-Punkte-Regel prüfen',
        'Fahrzeug und Fahrer auswählen (ADR-Bescheinigung, Ausrüstung, Kennzeichnung)',
        'Beförderungspapier und ggf. schriftliche Weisungen bereitstellen',
        'Verladen, Versandstücke prüfen und Ladung sichern'
      ],
      hints: ['Ohne Stoffdaten keine Punkteberechnung.', 'Ob ein ADR-Fahrer nötig ist, hängt von der Freistellung ab.'],
      solution: 'Stoffdaten – Freistellung prüfen – Fahrzeug/Fahrer – Papiere – Verladen. Erst die Punkteberechnung zeigt, ob Tafeln, schriftliche Weisungen und ein ADR-geschulter Fahrer nötig sind.'
    },
    {
      id: 'lf04-gefahrgut-a11', type: 'text', difficulty: 3, points: 4,
      q: 'Erkläre den Unterschied zwischen Beförderungspapier und schriftlichen Weisungen: Wer stellt sie bereit, und wozu dienen sie? (3–5 Sätze)',
      model: 'Das Beförderungspapier stellt der Absender bereit. Es beschreibt das Gefahrgut, zum Beispiel mit UN-Nummer, offizieller Benennung, Gefahrzettelmuster, Verpackungsgruppe, Anzahl der Versandstücke und Gesamtmenge. Die schriftlichen Weisungen übergibt der Beförderer der Fahrzeugbesatzung vor Fahrtantritt. Sie sind ein einheitliches Formblatt mit Maßnahmen bei Unfällen und Notfällen und müssen in einer Sprache sein, die die Besatzung versteht.',
      criteria: [
        { text: 'nennt den Absender beim Beförderungspapier', keywords: ['Absender'], points: 1 },
        { text: 'nennt Inhalte des Beförderungspapiers', keywords: ['UN-Nummer|UN Nummer|Benennung|Verpackungsgruppe|Menge'], points: 1 },
        { text: 'nennt den Beförderer bei den schriftlichen Weisungen', keywords: ['Beförderer'], points: 1 },
        { text: 'nennt Unfall- oder Notfallmaßnahmen', keywords: ['Unfall|Notfall|Maßnahmen|Verhalten'], points: 1 }
      ],
      hints: ['Ein Papier beschreibt die Ladung, das andere das Verhalten im Notfall.', 'Denke an §§ 18 und 19 GGVSEB.'],
      solution: 'Siehe Musterlösung: Beförderungspapier = Angaben zum Gut, vom Absender; schriftliche Weisungen = Notfallmaßnahmen, vom Beförderer an die Besatzung.'
    },
    {
      id: 'lf04-gefahrgut-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fallsituation: Sammelladung mit Gefahrgut',
      intro: 'Die Spedition Saar-Logistik will einen Lkw ihres Nahverkehrs mit mehreren Gefahrgutsendungen beladen: 10 kg eines Stoffes der Beförderungskategorie 1, 120 l eines Stoffes der Beförderungskategorie 2 und 200 kg eines Stoffes der Beförderungskategorie 3. Der eingeplante Fahrer hat keine ADR-Schulungsbescheinigung, der Lkw hat keine orangefarbenen Tafeln.',
      parts: [
        {
          id: 'lf04-gefahrgut-a12a', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Punkte je Kategorie und die Gesamtpunktzahl.',
          formula: 'Punkte = BK 1 × 50 + BK 2 × 3 + BK 3 × 1',
          fields: [
            { id: 'bk1', label: 'Punkte Kategorie 1', unit: 'Punkte', answer: 500, tol: 0 },
            { id: 'bk2', label: 'Punkte Kategorie 2', unit: 'Punkte', answer: 360, tol: 0 },
            { id: 'summe', label: 'Gesamtpunkte', unit: 'Punkte', answer: 1060, tol: 0 }
          ],
          hints: ['10 × 50, 120 × 3, 200 × 1.', 'Liegt die Summe über 1000?'],
          solution: `1. BK 1: 10 kg × 50 = **500 Punkte**
2. BK 2: 120 l × 3 = **360 Punkte**
3. BK 3: 200 kg × 1 = 200 Punkte
4. Summe: 500 + 360 + 200 = **1.060 Punkte** > 1000 → **nicht freigestellt**`
        },
        {
          id: 'lf04-gefahrgut-a12b', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Folgen hat das Ergebnis für die geplante Beförderung? (Mehrfachauswahl)',
          options: [
            'Der Lkw braucht orangefarbene Tafeln vorne und hinten.',
            'Der Fahrer braucht eine gültige ADR-Schulungsbescheinigung.',
            'Der Beförderer muss der Besatzung schriftliche Weisungen übergeben.',
            'Es ändert sich nichts, weil es sich um Nahverkehr handelt.'
          ],
          correct: [0, 1, 2],
          hints: ['Ohne Freistellung gelten Kapitel 5.3, Abschnitt 5.4.3 und Teil 8 voll.', 'Die Entfernung spielt für 1.1.3.6 keine Rolle.'],
          solution: 'Richtig sind **1, 2 und 3**. Ohne Freistellung gelten Kennzeichnung (5.3), schriftliche Weisungen (5.4.3) und die Fahrerschulung (8.2) voll. Für 1.1.3.6 zählt nur die Menge je Beförderungseinheit, nicht die Strecke.'
        },
        {
          id: 'lf04-gefahrgut-a12c', type: 'calc', difficulty: 3, points: 2,
          q: 'Die Disponentin will die Kategorie-3-Sendung auf eine spätere Tour verschieben. Wie viele Punkte bleiben dann, und ist die Ladung freigestellt? Gib die Punkte und die Punkte-Reserve bis 1000 an.',
          formula: 'Summe neu = BK 1 × 50 + BK 2 × 3; Reserve = 1000 − Summe neu',
          fields: [
            { id: 'neu', label: 'Gesamtpunkte ohne Kategorie 3', unit: 'Punkte', answer: 860, tol: 0 },
            { id: 'reserve', label: 'Reserve bis 1000', unit: 'Punkte', answer: 140, tol: 0 }
          ],
          hints: ['500 + 360 = ?', '1000 minus das Ergebnis.'],
          solution: `1. Neu: 500 + 360 = **860 Punkte** ≤ 1000 → **teilweise freigestellt**
2. Reserve: 1000 − 860 = **140 Punkte** (z. B. bis zu 140 kg eines Stoffes der Kategorie 3)

Dann darf der Fahrer ohne ADR-Bescheinigung fahren, braucht aber eine Unterweisung, Beförderungspapier und einen 2-kg-Feuerlöscher.`
        }
      ],
      hints: ['Rechne zuerst die Punkte.', 'Überlege, welche Pflichten bei Überschreitung wieder gelten.'],
      solution: '1.060 Punkte: nicht freigestellt, also Tafeln, schriftliche Weisungen und ADR-geschulter Fahrer nötig. Ohne die Kategorie-3-Sendung 860 Punkte: freigestellt mit 140 Punkten Reserve.'
    }
  ],
  quiz: ['lf04-gefahrgut-a3', 'lf04-gefahrgut-a4', 'lf04-gefahrgut-a6', 'lf04-gefahrgut-a7', 'lf04-gefahrgut-a8'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 4, Inhalte: Beförderung gefährlicher Güter im Güterkraftverkehr, Pflichten der Beteiligten, Kennzeichnung und Begleitpapiere' },
    { title: 'Gefahrgutrecht/-vorschriften Straße (ADR, 30. ADR-Änderungsverordnung, GGVSEB)', publisher: 'Bundesministerium für Verkehr (BMV)', url: 'https://www.bmv.de/SharedDocs/DE/Artikel/G/Gefahrgut/gefahrgut-recht-vorschriften-strasse.html', asOf: '2026-10-17' },
    { title: 'ADR 2025, Kapitel 1.1 Geltungsbereich und Anwendbarkeit (Abschnitt 1.1.3.6)', publisher: 'Textausgabe Gefahrgutshop (Wortlaut des ADR)', url: 'https://www.gefahrgutshop.de/fileadmin/pdfs/ADR_2025/Gefahrgutshop_ADR_2025_Kapitel_1-1_Geltungsbereich-und_Anwendbarkeit.pdf', asOf: '2026-10-17' },
    { title: 'ADR/RID 5.3.2.2 Vorschriften für die orangefarbenen Tafeln', publisher: 'umwelt-online (Textwiedergabe)', url: 'https://umwelt-online.de/recht/gefahr.gut/adr/adr_rid23/5322.htm', asOf: '2026-10-17' },
    { title: 'GGVSEB § 18 Pflichten des Absenders', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ggvseb/__18.html', asOf: '2026-10-17' },
    { title: 'GGVSEB § 19 Pflichten des Beförderers', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ggvseb/__19.html', asOf: '2026-10-17' },
    { title: 'GGVSEB § 21 Pflichten des Verladers', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ggvseb/__21.html', asOf: '2026-10-17' },
    { title: 'GGVSEB § 28 Pflichten des Fahrzeugführers im Straßenverkehr', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ggvseb/__28.html', asOf: '2026-10-17' },
    { title: 'Gefahrgutbeauftragtenverordnung § 2 Befreiungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/gbv_2011/__2.html', asOf: '2026-10-17' },
    { title: 'Gefahrgutbeauftragtenverordnung § 3 Bestellung von Gefahrgutbeauftragten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/gbv_2011/__3.html', asOf: '2026-10-17' }
  ],
  links: ['lf06-luftfracht-gefahrgut', 'lf04-fahrzeugplanung', 'lf04-lenkzeiten']
};
