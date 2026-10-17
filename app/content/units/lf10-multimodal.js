export default {
  id: 'lf10-multimodal',
  area: 'LF10',
  topic: 'lf10-multimodal',
  title: 'Multimodaler und kombinierter Verkehr',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Haftung beim multimodalen Frachtvertrag nach §§ 452–452d HGB; Regelhaftung 8,33 Rechnungseinheiten (SZR) je kg (§ 431 HGB); Seestrecke 666,67 SZR je Stück oder 2 SZR je kg, der höhere Betrag (§ 504 HGB). 44 t zulässiges Gesamtgewicht für bestimmte Sattelkraftfahrzeuge in der intermodalen Beförderung nach § 34 Abs. 6 Nr. 6 Buchst. b StVZO. Begriffe nach „Terminology on Combined Transport“ (UNECE/ECMT/Europäische Kommission, 2001). SZR-Kurse und Kosten in den Aufgaben sind Beispielwerte. Stand 2026.'
  },
  goals: [
    'Ich kann die Begriffe multimodal, intermodal und kombinierter Verkehr voneinander abgrenzen.',
    'Ich kann unbegleiteten (Container, Wechselbrücke, Sattelauflieger) und begleiteten kombinierten Verkehr (Rollende Landstraße) beschreiben.',
    'Ich kann Vor- und Nachteile des kombinierten Verkehrs für einen Kunden abwägen.',
    'Ich kann die Haftung beim multimodalen Transport bei unbekanntem und bekanntem Schadensort nach §§ 452 ff. HGB bestimmen.',
    'Ich kann Haftungshöchstbeträge in SZR und Euro berechnen.',
    'Ich kann erklären, wozu das FIATA-Dokument FBL dient.'
  ],
  simple: `# Worum geht es?

Viele Sendungen werden nicht mit nur einem Verkehrsmittel befördert. Ein Container fährt z. B. per **Lkw** zum Bahnterminal, per **Bahn** zum Seehafen, per **Schiff** nach Asien und dort wieder per **Lkw** zum Empfänger.

# Drei Begriffe, die oft verwechselt werden

| Begriff | Bedeutung | Beispiel |
|---|---|---|
| **Multimodal** | Beförderung mit **mindestens zwei verschiedenen Verkehrsträgern** | Paletten per Lkw zum Flughafen, umgeladen ins Flugzeug |
| **Intermodal** | multimodal, aber in **derselben Ladeeinheit** – die Ware selbst wird beim Wechsel **nicht umgeschlagen** | Container Lkw → Bahn → Schiff |
| **Kombinierter Verkehr (KV)** | intermodal, wobei der **Hauptlauf** auf Schiene, Binnenwasserstraße oder See liegt und **Vor- und Nachlauf auf der Straße möglichst kurz** sind | Wechselbrücke Saarbrücken → Bahn → Verona, kurzer Lkw-Nachlauf |

Merke: **Jeder kombinierte Verkehr ist intermodal, jeder intermodale Verkehr ist multimodal – aber nicht umgekehrt.**

# Formen des kombinierten Verkehrs

- **Unbegleitet**: Nur die Ladeeinheit fährt mit der Bahn – **Container**, **Wechselbrücke** oder **kranbarer Sattelauflieger**. Der Fahrer bleibt zu Hause.
- **Begleitet** (**Rollende Landstraße**, RoLa): Der ganze Lkw fährt auf einen Niederflurwagen, der Fahrer reist im Begleitwagen mit.

# Wer haftet?

Hat der Kunde **einen einzigen Frachtvertrag** für die ganze Strecke geschlossen, spricht das HGB vom **multimodalen Frachtvertrag** (§ 452 HGB). Der Frachtführer haftet grundsätzlich nach den allgemeinen Regeln des HGB-Frachtrechts. Weiß man aber, **auf welcher Teilstrecke** der Schaden entstanden ist, gilt das Recht **dieser Teilstrecke** (§ 452a HGB).`,
  deep: `# Begriffe nach der „Terminology on Combined Transport“

Die gemeinsame Terminologie von UNECE, ECMT (heute ITF) und Europäischer Kommission (2001) definiert:

- **Multimodaler Verkehr**: Beförderung von Gütern mit zwei oder mehr Verkehrsträgern.
- **Intermodaler Verkehr**: Beförderung von Gütern in ein und derselben Ladeeinheit oder demselben Straßenfahrzeug mit mehreren Verkehrsträgern nacheinander, ohne dass die Güter selbst umgeschlagen werden.
- **Kombinierter Verkehr**: intermodaler Verkehr, bei dem der überwiegende Teil der Strecke in Europa per Bahn, Binnenschiff oder Seeschiff zurückgelegt wird und Vor- und Nachlauf auf der Straße so kurz wie möglich sind.

# Ladeeinheiten im unbegleiteten KV

| Ladeeinheit | Merkmale |
|---|---|
| **Container** (ISO-Container) | stapelbar, see- und bahntauglich, Umschlag per Kran oder Reachstacker |
| **Wechselbrücke** (Wechselaufbau) | Ladungsträger mit Stützbeinen, abstellbar ohne Kran; meist nicht stapelbar; kranbar über Greifkanten |
| **Kranbarer Sattelauflieger** | Auflieger mit Greifkanten, wird per Kran auf den Taschenwagen gehoben |
| **Nicht kranbarer Sattelauflieger** | nur mit besonderen Umschlagsystemen (horizontaler Umschlag) bahnfähig |

# Begleiteter KV (Rollende Landstraße)

Kompletter Lastzug mit Fahrer auf Niederflurwagen. **Vorteil**: kein Umbau, kein besonderes Equipment, Fahrer nutzt die Bahnfahrt als Ruhezeit. **Nachteil**: hohes Totgewicht (Zugmaschine fährt mit), geringe Nutzlast je Zug. Das Angebot wurde in den letzten Jahren stark verringert; aktuelle Verbindungen sind beim jeweiligen Betreiber zu prüfen.

# Vor- und Nachteile des kombinierten Verkehrs

| Vorteile | Nachteile |
|---|---|
| geringere CO₂-Emissionen im Hauptlauf | zusätzliche **Umschlagkosten** und **-zeiten** im Terminal |
| Entlastung von Straßen und Fahrpersonal (Fahrermangel) | feste Abfahrts- und Annahmeschlusszeiten, weniger flexibel |
| unabhängig von Sonn- und Feiertagsfahrverboten im Hauptlauf | Terminal muss in der Nähe liegen, sonst lange Vor-/Nachläufe |
| erhöhtes Gesamtgewicht im Vor- und Nachlauf: **44 t** für bestimmte Sattelkraftfahrzeuge mit Containern oder Wechselaufbauten bis 45 Fuß (§ 34 Abs. 6 Nr. 6 Buchst. b StVZO) | besondere Ladeeinheiten (kranbar) nötig, Investitionen |
| gut planbare Laufzeiten auf langen Strecken | Störungen im Bahnnetz (Baustellen, Streiks) wirken auf die ganze Kette |

# Haftung beim multimodalen Frachtvertrag (§§ 452–452d HGB)

**Voraussetzungen des § 452 HGB:**
1. **ein einheitlicher Frachtvertrag** über die gesamte Strecke,
2. **verschiedenartige Beförderungsmittel**,
3. hätte man über jede Teilstrecke einen eigenen Vertrag geschlossen, würden **mindestens zwei** davon **unterschiedlichen Rechtsvorschriften** unterliegen.

Das gilt auch, wenn ein Teil der Beförderung **über See** erfolgt.

| Fall | Anwendbares Recht |
|---|---|
| **Schadensort unbekannt** | allgemeines Frachtrecht des HGB (§§ 407 ff.), Haftung bis **8,33 SZR je kg** Rohgewicht (§ 431 HGB) |
| **Schadensort bekannt** (§ 452a HGB) | Recht der Teilstrecke, als ob über diese Teilstrecke ein eigener Vertrag geschlossen worden wäre – z. B. Seestrecke: **666,67 SZR je Stück** oder **2 SZR je kg**, je nachdem, was höher ist (§ 504 HGB); internationale Straßenstrecke: CMR |

- **Beweislast**: Wer behauptet, der Schaden sei auf einer **bestimmten Teilstrecke** entstanden, muss das beweisen (§ 452a Satz 2 HGB). Meist ist das die Partei, für die das Teilstreckenrecht günstiger ist.
- **Schadensanzeige und Verjährung** (§ 452b HGB): Die Schadensanzeige nach § 438 HGB gilt unabhängig vom Schadensort; die Verjährung richtet sich nach der **Ablieferung beim Empfänger** und tritt auch bei bekanntem Schadensort **frühestens nach § 439 HGB** ein.
- **Abweichende Vereinbarungen** (§ 452d HGB): In **vorformulierten Vertragsbedingungen** (AGB) kann vereinbart werden, dass auch bei bekanntem Schadensort das allgemeine HGB-Frachtrecht gilt (generell oder für eine genannte Teilstrecke). **Zwingende internationale Übereinkommen** (z. B. CMR für eine grenzüberschreitende Straßenstrecke) können dadurch aber **nicht** ausgeschaltet werden.

**SZR** (Sonderziehungsrecht) ist die Rechnungseinheit des Internationalen Währungsfonds. Umgerechnet wird nach dem Kurs am Tag der Übernahme des Gutes oder einem vereinbarten Tag (§ 431 Abs. 4 HGB).

# FBL – FIATA Multimodal Transport Bill of Lading

- **handelbares (begebbares) multimodales Konnossement** der FIATA (Internationale Föderation der Spediteurorganisationen)
- wird vom **Spediteur als multimodaler Frachtführer** (MTO, Multimodal Transport Operator) ausgestellt, der damit die **Haftung für die gesamte Strecke** übernimmt
- Aussteller muss Mitglied eines nationalen FIATA-Verbands sein (in Deutschland über den DSLV) und eine **Haftpflichtversicherung** für die FBL-Haftung haben
- kann ein Traditionspapier sein: Mit dem Original wird die Ware am Bestimmungsort ausgeliefert – deshalb geeignet für das **Akkreditivgeschäft**, wenn das Akkreditiv ein multimodales Dokument zulässt
- Unterschied zum **FCR**: Das FCR ist nur eine Übernahmebescheinigung (siehe Einheit „Zahlungssicherung im Außenhandel“), das FBL ein Transportdokument mit Haftungsübernahme`,
  terms: [
    { term: 'Multimodaler Verkehr', def: 'Beförderung von Gütern mit zwei oder mehr verschiedenen Verkehrsträgern.' },
    { term: 'Intermodaler Verkehr', def: 'Multimodale Beförderung in derselben Ladeeinheit oder demselben Straßenfahrzeug, ohne dass die Güter selbst umgeschlagen werden.' },
    { term: 'Kombinierter Verkehr', def: 'Intermodaler Verkehr mit Hauptlauf auf Schiene, Binnenwasserstraße oder See und möglichst kurzem Straßenvor- und -nachlauf.' },
    { term: 'Wechselbrücke', def: 'Austauschbarer Ladungsträger mit Stützbeinen, der ohne Kran abgestellt werden kann; im KV über Greifkanten kranbar.' },
    { term: 'Rollende Landstraße (RoLa)', def: 'Begleiteter kombinierter Verkehr: Kompletter Lkw fährt auf Niederflurwagen, der Fahrer reist mit.' },
    { term: 'Multimodaler Frachtvertrag', def: 'Einheitlicher Frachtvertrag über eine Beförderung mit verschiedenartigen Beförderungsmitteln, bei dem Teilstrecken unterschiedlichem Recht unterlägen (§ 452 HGB).' },
    { term: 'Bekannter Schadensort', def: 'Steht fest, auf welcher Teilstrecke der Schaden entstand, gilt das Recht dieser Teilstrecke (§ 452a HGB).' },
    { term: 'Unbekannter Schadensort', def: 'Lässt sich die Teilstrecke nicht feststellen, gilt das allgemeine HGB-Frachtrecht mit 8,33 SZR je kg (§§ 452, 431 HGB).' },
    { term: 'SZR', def: 'Sonderziehungsrecht des Internationalen Währungsfonds; Rechnungseinheit für Haftungshöchstbeträge.' },
    { term: 'FBL', def: 'FIATA Multimodal Transport Bill of Lading: handelbares multimodales Konnossement, das ein Spediteur als multimodaler Frachtführer ausstellt.' },
    { term: 'MTO', def: 'Multimodal Transport Operator: Unternehmer, der einen multimodalen Beförderungsvertrag im eigenen Namen schließt und für die ganze Strecke haftet.' }
  ],
  example: `# Beispiel: Wechselbrücke Saarbrücken – Verona (Beispielwerte 2026)

Die **Saar-Trans Spedition GmbH** soll für einen Getränkehersteller aus Merzig wöchentlich eine Wechselbrücke (24 t Ware) nach Verona befördern. Sie vergleicht:

| Kosten je Sendung | Straße durchgehend | Kombinierter Verkehr |
|---|---:|---:|
| Lkw Merzig → Verona (ca. 1.000 km) | 1.480 € | – |
| Vorlauf Merzig → KV-Terminal | – | 190 € |
| Bahn Terminal → Verona | – | 860 € |
| Umschlag (2 Terminals, je 38 €) | – | 76 € |
| Nachlauf Terminal Verona → Kunde | – | 160 € |
| **Summe** | **1.480 €** | **1.286 €** |

Der KV ist 194 € günstiger, spart Fahrerstunden und vermeidet Fahrverbote am Wochenende. Dafür muss die Wechselbrücke bis zum **Annahmeschluss** im Terminal sein, und die Laufzeit ist etwas länger.

**Haftung**: Die Saar-Trans schließt mit dem Kunden **einen Frachtvertrag** über die gesamte Strecke ab (Straße und Schiene). Kommt die Ware beschädigt an und lässt sich nicht klären, wo der Schaden passiert ist, haftet die Saar-Trans nach HGB bis **8,33 SZR je kg**. Steht fest, dass der Schaden auf der grenzüberschreitenden **Bahnstrecke** entstand, gilt das Recht dieser Teilstrecke.`,
  rules: [
    'Kombiniert ⊂ intermodal ⊂ multimodal.',
    'Intermodal heißt: Die Ladeeinheit wechselt das Verkehrsmittel, die Ware selbst bleibt unberührt.',
    'Unbegleiteter KV: nur die Ladeeinheit fährt; begleiteter KV (RoLa): der ganze Lkw mit Fahrer.',
    'Schadensort unbekannt → allgemeines HGB-Frachtrecht (8,33 SZR je kg).',
    'Schadensort bekannt → Recht der Teilstrecke (§ 452a HGB); wer das behauptet, muss es beweisen.',
    'Das FBL ist ein handelbares multimodales Konnossement, mit dem der Spediteur als Frachtführer für die ganze Strecke haftet.'
  ],
  summary: `- **Multimodal** = mindestens zwei Verkehrsträger; **intermodal** = in derselben Ladeeinheit ohne Umschlag der Ware; **kombiniert** = intermodal mit Hauptlauf Schiene/Wasser und kurzem Straßenvor- und -nachlauf.
- **Unbegleiteter KV**: Container, Wechselbrücke, kranbarer Sattelauflieger. **Begleiteter KV**: Rollende Landstraße.
- **Vorteile**: Umwelt, Fahrpersonal, Fahrverbote, 44 t im Vor-/Nachlauf (bestimmte Fahrzeuge, § 34 StVZO). **Nachteile**: Umschlagkosten und -zeit, feste Zeiten, Terminalnähe.
- **Haftung** (§§ 452–452d HGB): ein Vertrag, verschiedene Beförderungsmittel → unbekannter Schadensort: 8,33 SZR/kg; bekannter Schadensort: Teilstreckenrecht (z. B. See 666,67 SZR/Stück oder 2 SZR/kg).
- **FBL**: FIATA-Multimodal-Konnossement, handelbar, Spediteur als MTO.`,
  mistakes: [
    { wrong: 'Multimodal und kombiniert bedeuten dasselbe.', right: 'Multimodal ist der Oberbegriff (mindestens zwei Verkehrsträger). Kombinierter Verkehr ist ein Spezialfall: intermodal mit Hauptlauf auf Schiene/Wasser und kurzem Straßenanteil.' },
    { wrong: 'Wenn die Ware am Flughafen von der Palette in einen Luftfrachtcontainer umgeladen wird, ist das intermodaler Verkehr.', right: 'Wird die Ware selbst umgeschlagen, ist das multimodal, aber nicht intermodal.' },
    { wrong: 'Bei einem multimodalen Transport haftet der Frachtführer immer nach Seerecht, wenn eine Seestrecke dabei ist.', right: 'Seerecht gilt nur, wenn bewiesen ist, dass der Schaden auf der Seestrecke entstand (§ 452a HGB). Bei unbekanntem Schadensort gilt das allgemeine Frachtrecht mit 8,33 SZR je kg.' },
    { wrong: 'Per AGB kann man die CMR auf der Straßenteilstrecke ausschließen.', right: 'Zwingende Bestimmungen internationaler Übereinkommen wie der CMR können nicht ausgeschlossen werden (§ 452d Abs. 3 HGB).' },
    { wrong: 'Bei der Rollenden Landstraße fährt nur der Auflieger auf der Bahn.', right: 'Bei der RoLa fährt der komplette Lastzug mit; der Fahrer reist im Begleitwagen. Nur der Auflieger allein wäre unbegleiteter KV.' }
  ],
  flashcards: [
    { q: 'Was ist multimodaler Verkehr?', a: 'Beförderung mit mindestens zwei verschiedenen Verkehrsträgern.' },
    { q: 'Was unterscheidet intermodalen vom multimodalen Verkehr?', a: 'Beim intermodalen Verkehr bleibt die Ware in derselben Ladeeinheit; sie wird beim Wechsel des Verkehrsträgers nicht umgeschlagen.' },
    { q: 'Was kennzeichnet den kombinierten Verkehr?', a: 'Hauptlauf auf Schiene, Binnenwasserstraße oder See; Vor- und Nachlauf auf der Straße möglichst kurz.' },
    { q: 'Nenne drei Ladeeinheiten des unbegleiteten KV.', a: 'Container, Wechselbrücke, kranbarer Sattelauflieger.' },
    { q: 'Was ist die Rollende Landstraße?', a: 'Begleiteter KV: Der komplette Lkw fährt auf einem Niederflurwagen, der Fahrer reist mit.' },
    { q: 'Welche Haftung gilt beim multimodalen Frachtvertrag bei unbekanntem Schadensort?', a: 'Allgemeines HGB-Frachtrecht: bis 8,33 SZR je kg Rohgewicht (§§ 452, 431 HGB).' },
    { q: 'Was gilt bei bekanntem Schadensort?', a: 'Das Recht der Teilstrecke, auf der der Schaden eintrat (§ 452a HGB).' },
    { q: 'Wer muss beweisen, auf welcher Teilstrecke der Schaden entstand?', a: 'Derjenige, der sich darauf beruft (§ 452a Satz 2 HGB).' },
    { q: 'Wie hoch ist die Haftung auf der Seestrecke nach § 504 HGB?', a: '666,67 SZR je Stück oder Einheit oder 2 SZR je kg Rohgewicht – der höhere Betrag.' },
    { q: 'Was ist das FBL?', a: 'FIATA Multimodal Transport Bill of Lading: handelbares multimodales Konnossement, ausgestellt vom Spediteur als multimodaler Frachtführer.' },
    { q: 'Welches Gesamtgewicht ist im Vor- und Nachlauf des KV für bestimmte Sattelkraftfahrzeuge zulässig?', a: '44 t (dreiachsige Zugmaschine, zwei- oder dreiachsiger Auflieger, Container/Wechselaufbauten bis 45 Fuß; § 34 Abs. 6 Nr. 6 Buchst. b StVZO).' }
  ],
  tasks: [
    {
      id: 'lf10-multimodal-a1', type: 'match', difficulty: 1, points: 3,
      q: 'Ordne den Begriff der passenden Beschreibung zu.',
      pairs: [
        ['Multimodaler Verkehr', 'Mindestens zwei verschiedene Verkehrsträger'],
        ['Intermodaler Verkehr', 'Wechsel des Verkehrsträgers in derselben Ladeeinheit ohne Umschlag der Ware'],
        ['Kombinierter Verkehr', 'Hauptlauf auf Schiene oder Wasser, möglichst kurzer Straßenvor- und -nachlauf']
      ],
      hints: ['Vom allgemeinsten zum speziellsten Begriff.', 'Achte darauf, ob die Ware selbst umgeschlagen wird.'],
      solution: 'Multimodal = Oberbegriff (zwei oder mehr Verkehrsträger). Intermodal = zusätzlich dieselbe Ladeeinheit, kein Umschlag der Ware. Kombiniert = intermodal mit Hauptlauf auf Schiene/Binnenschiff/See und kurzem Straßenanteil.'
    },
    {
      id: 'lf10-multimodal-a2', type: 'mc', difficulty: 2, points: 1,
      q: 'Eine Spedition bringt eine Wechselbrücke per Lkw zum Terminal Saarbrücken, von dort fährt sie per Bahn nach Verona und wird dort per Lkw 15 km zum Kunden gebracht. Welche Bezeichnung trifft **am genauesten** zu?',
      options: ['Multimodaler Verkehr', 'Intermodaler Verkehr', 'Kombinierter Verkehr', 'Gebrochener Verkehr mit Umschlag der Ware'],
      correct: [2],
      hints: ['Wird die Ware selbst umgeladen?', 'Wo liegt der Hauptlauf, wie lang ist der Straßenanteil?'],
      solution: '**Kombinierter Verkehr**: Die Ware bleibt in der Wechselbrücke (intermodal), der Hauptlauf liegt auf der Schiene, Vor- und Nachlauf auf der Straße sind kurz. Multimodal und intermodal sind zwar auch zutreffend, aber weniger genau.'
    },
    {
      id: 'lf10-multimodal-a3', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen sind **Vorteile** des kombinierten Verkehrs gegenüber dem reinen Straßentransport? (Mehrfachauswahl)',
      options: [
        'Geringere CO₂-Emissionen im Hauptlauf',
        'Keine Umschlagkosten',
        'Weniger Fahrpersonal nötig',
        'Höhere Flexibilität bei kurzfristigen Abholungen',
        'Hauptlauf unabhängig von Sonn- und Feiertagsfahrverboten für Lkw'
      ],
      correct: [0, 2, 4],
      hints: ['Was passiert im Terminal?', 'Bahnabfahrten haben feste Zeiten.'],
      solution: 'Richtig sind **A, C und E**. Der KV hat gerade **zusätzliche** Umschlagkosten im Terminal (B falsch) und ist wegen fester Abfahrts- und Annahmeschlusszeiten **weniger** flexibel (D falsch).'
    },
    {
      id: 'lf10-multimodal-a4', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zur Haftung nach HGB.',
      text: 'Wird die Beförderung aufgrund eines [[einheitlichen|einzigen]] Frachtvertrags mit verschiedenartigen Beförderungsmitteln durchgeführt, gilt § [[452]] HGB. Ist der Schadensort unbekannt, haftet der Frachtführer bis [[8,33|8.33]] SZR je kg. Ist der Schadensort bekannt, gilt das Recht der [[Teilstrecke]]. Beweisen muss das, wer sich darauf [[beruft]].',
      hints: ['Die Vorschriften stehen in §§ 452 bis 452d HGB.', 'Die Regelhaftung des HGB-Frachtrechts steht in § 431 HGB.'],
      solution: 'Einheitlicher Frachtvertrag → § 452 HGB; unbekannter Schadensort → 8,33 SZR/kg (§ 431 HGB); bekannter Schadensort → Recht der **Teilstrecke** (§ 452a HGB); Beweislast trägt, wer sich auf den bestimmten Schadensort **beruft**.'
    },
    {
      id: 'lf10-multimodal-a5', type: 'calc', difficulty: 2, points: 2,
      q: 'Bei einem multimodalen Transport (Lkw – Bahn – Seeschiff) geht eine Kiste mit 1.200 kg Rohgewicht verloren. Der Schadensort lässt sich **nicht** feststellen. Der Wert eines SZR beträgt am Übernahmetag 1,15 € (Beispielwert). Berechne den Haftungshöchstbetrag in SZR und in Euro.',
      formula: 'Haftung = Rohgewicht in kg × 8,33 SZR; in € = SZR × Kurs',
      fields: [
        { id: 'szr', label: 'Haftungshöchstbetrag', unit: 'SZR', answer: 9996, tol: 0.01 },
        { id: 'eur', label: 'Haftungshöchstbetrag', unit: '€', answer: 11495.4, tol: 0.01 }
      ],
      hints: ['Unbekannter Schadensort → allgemeines Frachtrecht.', '1.200 × 8,33 = ?'],
      solution: `**Rechtsgrundlage:** §§ 452, 431 Abs. 1 HGB (Schadensort unbekannt)

**In SZR:** 1.200 kg × 8,33 SZR/kg = **9.996 SZR**

**In Euro:** 9.996 SZR × 1,15 €/SZR = **11.495,40 €**

Die Haftung ist auf den tatsächlichen Schaden begrenzt; ist der Warenwert niedriger, wird nur dieser ersetzt.`
    },
    {
      id: 'lf10-multimodal-a6', type: 'calc', difficulty: 3, points: 3,
      q: 'Bei derselben Beförderung wird nachgewiesen, dass eine **unverpackte Maschine** (1 Stück, 3.000 kg Rohgewicht) auf der **Seestrecke** beschädigt wurde. Nach § 504 HGB gilt: 666,67 SZR je Stück oder 2 SZR je kg, der höhere Betrag. Berechne beide Beträge und die maßgebliche Höchsthaftung.',
      formula: 'Höchsthaftung = max(Stückzahl × 666,67 SZR; kg × 2 SZR)',
      fields: [
        { id: 'stueck', label: 'Betrag nach Stück', unit: 'SZR', answer: 666.67, tol: 0.01 },
        { id: 'kg', label: 'Betrag nach Gewicht', unit: 'SZR', answer: 6000, tol: 0.01 },
        { id: 'max', label: 'Maßgebliche Höchsthaftung', unit: 'SZR', answer: 6000, tol: 0.01 }
      ],
      hints: ['Bekannter Schadensort → Recht der Teilstrecke (§ 452a HGB).', 'Vergleiche 1 × 666,67 mit 3.000 × 2.'],
      solution: `**Rechtsgrundlage:** § 452a HGB (bekannter Schadensort Seestrecke) i. V. m. § 504 HGB

**Je Stück:** 1 × 666,67 SZR = **666,67 SZR**

**Je kg:** 3.000 kg × 2 SZR/kg = **6.000 SZR**

**Maßgeblich (höherer Betrag):** **6.000 SZR**

Zum Vergleich: Bei unbekanntem Schadensort wären es 3.000 × 8,33 = 24.990 SZR. Für den Frachtführer ist der Nachweis der Seestrecke also günstig – er trägt dafür die Beweislast.`
    },
    {
      id: 'lf10-multimodal-a7', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Prüfschritte zur Haftung bei einem Schaden im multimodalen Transport in eine sinnvolle Reihenfolge.',
      items: [
        'Prüfen, ob ein einheitlicher Frachtvertrag über die ganze Strecke vorliegt',
        'Prüfen, ob verschiedenartige Beförderungsmittel mit unterschiedlichem Teilstreckenrecht eingesetzt wurden',
        'Klären, ob der Schadensort bekannt und beweisbar ist',
        'Anwendbares Recht bestimmen: allgemeines HGB-Frachtrecht oder Teilstreckenrecht',
        'Haftungshöchstbetrag berechnen und mit dem tatsächlichen Schaden vergleichen'
      ],
      hints: ['Erst die Voraussetzungen des § 452 HGB, dann § 452a HGB.', 'Gerechnet wird ganz zum Schluss.'],
      solution: 'Einheitlicher Vertrag → verschiedenartige Beförderungsmittel/unterschiedliches Recht (§ 452) → Schadensort bekannt? (§ 452a) → anwendbares Recht → Höchstbetrag berechnen und mit dem Schaden vergleichen.'
    },
    {
      id: 'lf10-multimodal-a8', type: 'calc', difficulty: 2, points: 2,
      q: 'Eine Wechselbrücke soll von Saarlouis nach Mailand. Straße durchgehend: 1.520 €. Kombinierter Verkehr (Beispielwerte): Vorlauf 175 €, Bahn 880 €, Umschlag 2 × 40 €, Nachlauf 185 €. Berechne die KV-Kosten und die Ersparnis.',
      formula: 'KV-Kosten = Vorlauf + Bahn + Umschlag + Nachlauf; Ersparnis = Straße − KV',
      fields: [
        { id: 'kv', label: 'Kosten KV', unit: '€', answer: 1320, tol: 0.01 },
        { id: 'ersparnis', label: 'Ersparnis', unit: '€', answer: 200, tol: 0.01 }
      ],
      hints: ['Umschlag fällt in zwei Terminals an.', '175 + 880 + 80 + 185.'],
      solution: `**KV-Kosten:** 175 € + 880 € + 2 × 40 € + 185 € = **1.320 €**

**Ersparnis:** 1.520 € − 1.320 € = **200 €** je Sendung

Neben den Kosten sind Laufzeit, Annahmeschluss und Terminalnähe zu prüfen.`
    },
    {
      id: 'lf10-multimodal-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Ein Kunde möchte für einen Export nach Kanada ein FBL statt eines Seekonnossements der Reederei. Erkläre, was ein FBL ist und welchen Vorteil es ihm bietet.',
      model: 'Das FBL ist das FIATA Multimodal Transport Bill of Lading, ein handelbares multimodales Konnossement. Es wird vom Spediteur ausgestellt, der als multimodaler Frachtführer (MTO) für die gesamte Strecke von Haus zu Haus haftet. Der Kunde hat damit einen einzigen Vertragspartner und ein durchgehendes Dokument für Vorlauf, Seestrecke und Nachlauf. Weil es handelbar ist, kann es auch im Akkreditivgeschäft eingesetzt werden, wenn das Akkreditiv ein multimodales Dokument zulässt.',
      criteria: [
        { text: 'nennt FIATA und multimodal', keywords: ['FIATA', 'multimodal'], points: 1 },
        { text: 'nennt Haftung des Spediteurs für die gesamte Strecke', keywords: ['gesamte|ganze|durchgehend|Haus zu Haus', 'haft|Frachtführer|MTO'], points: 1 },
        { text: 'nennt Handelbarkeit oder Akkreditiv', keywords: ['handelbar|begebbar|Akkreditiv|Wertpapier|Traditionspapier'], points: 1 }
      ],
      hints: ['Wofür steht FBL?', 'Wer haftet bei einem FBL – und für welche Strecke?'],
      solution: '**FBL** = FIATA Multimodal Transport Bill of Lading. Der Spediteur stellt es als **multimodaler Frachtführer** aus und **haftet für die gesamte Strecke**. Vorteil: ein Vertragspartner, ein durchgehendes Dokument; als **handelbares** Dokument auch für Akkreditive geeignet, wenn diese ein multimodales Dokument zulassen.'
    },
    {
      id: 'lf10-multimodal-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Schaden auf dem Weg nach Montreal',
      intro: `Die Spedition Hochwald Logistik übernimmt für einen Saarbrücker Hersteller einen Container „von Haus zu Haus“ nach Montreal zu einem festen Preis (Lkw Saarbrücken – Antwerpen, Seeschiff Antwerpen – Montreal, Lkw Montreal – Empfänger). Sie stellt ein FBL aus. Im Container befinden sich 20 Kisten mit insgesamt 8.000 kg Rohgewicht.

Bei Ankunft beim Empfänger sind 2 Kisten (zusammen 800 kg) durch Wassereintritt beschädigt. Der Container hat ein kleines Loch im Dach. Wann der Schaden entstand, ist zunächst unklar. SZR-Kurs am Übernahmetag: 1,15 € (Beispielwert).`,
      hints: ['Prüfe die Voraussetzungen des § 452 HGB.', 'Was ändert sich, wenn ein Gutachten die Seestrecke als Schadensort nachweist?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf10-multimodal-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen treffen zu? (Mehrfachauswahl)',
          options: [
            'Es liegt ein multimodaler Frachtvertrag nach § 452 HGB vor, weil ein einheitlicher Vertrag mit verschiedenartigen Beförderungsmitteln geschlossen wurde.',
            'Weil eine Seestrecke dabei ist, kann § 452 HGB nicht angewendet werden.',
            'Solange der Schadensort unbekannt ist, haftet die Spedition nach allgemeinem HGB-Frachtrecht.',
            'Die Spedition haftet nicht, weil die Reederei den Container transportiert hat.'
          ],
          correct: [0, 2],
          hints: ['§ 452 Satz 2 HGB nennt die Seestrecke ausdrücklich.', 'Wer ist Vertragspartner des Kunden?'],
          solution: 'Richtig sind **A und C**. § 452 HGB gilt ausdrücklich auch, wenn ein Teil über See befördert wird (B falsch). Vertragspartner und Frachtführer gegenüber dem Kunden ist die Spedition; sie haftet für ihre Unterfrachtführer (D falsch).'
        },
        {
          id: 'lf10-multimodal-a10-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne den Haftungshöchstbetrag bei **unbekanntem** Schadensort für die beschädigten 800 kg in SZR und Euro.',
          formula: 'Haftung = 800 kg × 8,33 SZR/kg; in € = SZR × 1,15',
          fields: [
            { id: 'szr', label: 'Höchstbetrag', unit: 'SZR', answer: 6664, tol: 0.01 },
            { id: 'eur', label: 'Höchstbetrag', unit: '€', answer: 7663.6, tol: 0.01 }
          ],
          hints: ['Maßgeblich ist das Rohgewicht der beschädigten Kisten.', '800 × 8,33.'],
          solution: `**In SZR:** 800 kg × 8,33 SZR/kg = **6.664 SZR**

**In Euro:** 6.664 SZR × 1,15 €/SZR = **7.663,60 €**`
        },
        {
          id: 'lf10-multimodal-a10-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Ein Gutachten belegt später, dass das Wasser bei schwerem Seegang auf der Seestrecke eindrang. Was folgt daraus?',
          options: [
            'Es gilt weiterhin das allgemeine HGB-Frachtrecht mit 8,33 SZR je kg.',
            'Es gilt das Recht der Seestrecke (§ 452a HGB); die Haftungshöchstbeträge des Seefrachtrechts sind deutlich niedriger.',
            'Die Spedition haftet dann gar nicht mehr.',
            'Der Kunde muss den Schaden nun selbst bei der Reederei in Kanada einklagen.'
          ],
          correct: [1],
          hints: ['Bekannter Schadensort → § 452a HGB.', 'Vergleiche § 504 HGB (2 SZR/kg) mit § 431 HGB.'],
          solution: 'Bei **bekanntem** Schadensort gilt das Recht der **Teilstrecke** (§ 452a HGB), hier Seefrachtrecht mit 666,67 SZR je Stück oder 2 SZR je kg (§ 504 HGB). Für 2 Kisten mit 800 kg: max(2 × 666,67 = 1.333,34; 800 × 2 = 1.600) = 1.600 SZR. Die Spedition bleibt Vertragspartnerin und haftet, nur nach anderen Grenzen.'
        }
      ]
    }
  ],
  quiz: ['lf10-multimodal-a1', 'lf10-multimodal-a3', 'lf10-multimodal-a4', 'lf10-multimodal-a5', 'lf10-multimodal-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 10, Inhalte: Multimodale Verkehre; Spezielles Frachtrecht; Spediteurversanddokumente' },
    { title: 'Handelsgesetzbuch § 452 Frachtvertrag über eine Beförderung mit verschiedenartigen Beförderungsmitteln', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__452.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 452a Bekannter Schadensort', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__452a.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 452b Schadensanzeige. Verjährung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__452b.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 452d Abweichende Vereinbarungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__452d.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 431 Haftungshöchstbetrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__431.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 504 Haftungshöchstbetrag bei Güterschäden (Seefracht)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__504.html', asOf: '2026' },
    { title: 'Straßenverkehrs-Zulassungs-Ordnung § 34 Achslast und Gesamtgewicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/stvzo_2012/__34.html', asOf: '2026' },
    { title: 'Terminology on Combined Transport (UNECE/ECMT/Europäische Kommission, 2001) – Begriffe combined, intermodal, multimodal transport', publisher: 'European Union Agency for Railways, Railway Terminology Collection', url: 'https://www.era.europa.eu/era-railway-terminology-collection/combinedtransport/term_1/freight', asOf: '2001, geprüft 2026' },
    { title: 'FBL – Negotiable FIATA Multimodal Transport Bill of Lading (FAQ)', publisher: 'FIATA', url: 'https://www.efbl.fiata.org/faq', asOf: 'geprüft 2026' }
  ],
  links: ['lf10-container', 'lf10-incoterms', 'lf10-zahlungssicherung', 'lf04-frachtvertrag-haftung', 'lf04-verkehrstraeger-vergleich']
};
