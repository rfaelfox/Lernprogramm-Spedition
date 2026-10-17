export default {
  id: 'lf05-speditionsvertrag',
  area: 'LF05',
  topic: 'lf05-speditionsvertrag',
  title: 'Speditionsvertrag, ADSp und Haftung des Spediteurs',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026-10',
    note: 'Speditionsvertrag §§ 453–466 HGB (Pflichten § 454, Versenderpflichten § 455, Fälligkeit § 456, Selbsteintritt § 458, Fixkostenspedition § 459, Sammelladung § 460, Haftung § 461 mit Verweis auf § 431: 8,33 SZR je kg, Haftung für andere § 462, Verjährung § 463 i. V. m. § 439, AGB-Spielraum 2–40 SZR § 466), geprüft am 17.10.2026. ADSp 2017 (Ziffern 2, 21, 23, 27, 28) nach dem von den Verbänden empfohlenen Text, Stand Empfehlung 2017, geprüft 2026. Der Euro-Wert eines Sonderziehungsrechts (SZR) ändert sich täglich; in den Aufgaben wird ein Beispielkurs verwendet.'
  },
  goals: [
    'Ich kann den Speditionsvertrag vom Frachtvertrag abgrenzen und die Beteiligten benennen.',
    'Ich kann die Pflichten des Spediteurs (§ 454 HGB) und des Versenders (§ 455 HGB) beschreiben.',
    'Ich kann erklären, wann der Spediteur wie ein Frachtführer haftet (Selbsteintritt, Fixkosten, Sammelladung).',
    'Ich kann die Haftung des Spediteurs nach § 461 HGB (Obhutshaftung und Haftung für Pflichtverletzungen) unterscheiden.',
    'Ich kann erklären, wie die ADSp 2017 Vertragsbestandteil werden und für wen sie nicht gelten.',
    'Ich kann Haftungshöchstbeträge nach HGB und ADSp 2017 (8,33 SZR/kg, 1,25 Mio. €, 125.000 €) berechnen.'
  ],
  simple: `# Spediteur oder Frachtführer?

- Der **Frachtführer** **fährt** selbst: Er verpflichtet sich, das Gut zum Bestimmungsort zu **befördern** und dort abzuliefern (§ 407 HGB).
- Der **Spediteur** **organisiert**: Er verpflichtet sich, die **Versendung zu besorgen** (§ 453 HGB). Er sucht den passenden Verkehrsträger und Frachtführer aus, schließt die Verträge und gibt die nötigen Anweisungen.

Der Auftraggeber des Spediteurs heißt **Versender**. Er zahlt die vereinbarte Vergütung.

# Wenn der Spediteur doch selbst fährt

Viele Speditionen haben eigene Lkw. Dann gilt:

| Fall | Was passiert? | Folge |
|---|---|---|
| **Selbsteintritt** (§ 458 HGB) | Spediteur befördert selbst | für die Beförderung Rechte und Pflichten eines **Frachtführers** |
| **Fixkostenspedition** (§ 459 HGB) | fester Preis inklusive Beförderung | wie ein **Frachtführer** |
| **Sammelladung** (§ 460 HGB) | Güter mehrerer Versender in einer Ladung | wie ein **Frachtführer** (siehe Einheit „Ablauf des Sammelgutverkehrs“) |

In der Praxis arbeiten Speditionen fast immer zu festen Preisen oder in Sammelladung – deshalb haften sie meist **wie ein Frachtführer**.

# Die ADSp

Die **Allgemeinen Deutschen Spediteurbedingungen (ADSp 2017)** sind Allgemeine Geschäftsbedingungen, die Verbände der Wirtschaft und der Speditionsbranche gemeinsam empfehlen. Sie regeln z. B. Haftungshöchstbeträge, Versicherung und Pflichten beider Seiten. Sie gelten **nur, wenn sie vereinbart** werden, und **nicht gegenüber Verbrauchern**.`,
  deep: `# 1. Der Speditionsvertrag (§ 453 HGB)

- **Spediteur**: verpflichtet sich, die Versendung des Gutes zu besorgen.
- **Versender**: verpflichtet sich, die vereinbarte Vergütung zu zahlen.
- Die Vergütung ist **fällig**, sobald das Gut dem Frachtführer oder Verfrachter übergeben ist (§ 456 HGB).
- Das Speditionsrecht des HGB gilt, wenn die Besorgung zum Betrieb eines gewerblichen Unternehmens gehört (§ 453 Abs. 3 HGB).

# 2. Pflichten des Spediteurs (§ 454 HGB)

**Hauptpflicht: Organisation der Beförderung**
1. Bestimmung des **Beförderungsmittels** und des **Beförderungsweges**,
2. **Auswahl** der ausführenden Unternehmer, Abschluss der Fracht-, Lager- und Speditionsverträge, **Information und Weisungen** an diese,
3. **Sicherung von Schadensersatzansprüchen** des Versenders (z. B. Schaden beim Frachtführer anzeigen).

**Weitere Leistungen nur, wenn vereinbart** (Abs. 2): z. B. Versicherung, Verpackung, Kennzeichnung, Zollbehandlung.

Der Spediteur schließt die Verträge **im eigenen Namen** oder – mit Vollmacht – im Namen des Versenders (Abs. 3). Er muss die **Interessen des Versenders wahrnehmen** und dessen **Weisungen befolgen** (Abs. 4).

# 3. Pflichten des Versenders (§ 455 HGB)

- Gut, soweit erforderlich, **verpacken und kennzeichnen**,
- **Urkunden** zur Verfügung stellen und **Auskünfte** erteilen,
- bei **gefährlichem Gut** rechtzeitig **in Textform** die genaue Art der Gefahr und Vorsichtsmaßnahmen mitteilen.

Verletzt er diese Pflichten, haftet er dem Spediteur für Schäden und Aufwendungen **auch ohne Verschulden** (Abs. 2); ein **Verbraucher** haftet nur bei Verschulden (Abs. 3).

# 4. Haftung des Spediteurs

| Schaden | Grundlage | Art der Haftung | Höhe |
|---|---|---|---|
| **Verlust oder Beschädigung** des Gutes in seiner **Obhut** (z. B. im eigenen Umschlaglager) | § 461 Abs. 1 HGB | verschuldensunabhängig (Obhutshaftung) wie ein Frachtführer | begrenzt auf **8,33 SZR je kg** Rohgewicht (§ 431 HGB) |
| **Andere Schäden** durch Verletzung einer Pflicht aus § 454 (z. B. falsche Weisung, unzuverlässiger Frachtführer ausgewählt) | § 461 Abs. 2 HGB | **vermutetes Verschulden**: Spediteur haftet, außer der Schaden war mit der Sorgfalt eines ordentlichen Kaufmanns nicht abzuwenden | gesetzlich nicht begrenzt; ADSp begrenzen (siehe unten) |
| Beförderung bei **Selbsteintritt, Fixkosten, Sammelladung** | §§ 458–460 HGB | Haftung als **Frachtführer** (§§ 425 ff. HGB) | 8,33 SZR je kg |

- Hat der Versender oder ein Mangel des Gutes zum Schaden beigetragen, wird der Ersatz entsprechend gekürzt (§ 461 Abs. 3 HGB).
- Der Spediteur haftet für seine **Leute** und für **eingesetzte Unternehmer** wie für eigenes Handeln (§ 462 HGB).
- **Verjährung**: § 439 HGB gilt entsprechend (§ 463 HGB) – in der Regel **ein Jahr**.

# 5. ADSp 2017 – Einbeziehung und Anwendungsbereich

- Die ADSp sind **AGB**. Sie werden nur Vertragsinhalt, wenn sie **vereinbart** werden – üblich ist ein klarer Hinweis in Angebot, Auftragsbestätigung und auf Geschäftspapieren („Wir arbeiten ausschließlich auf Grundlage der ADSp 2017 …“).
- Sie gelten für Verkehrsverträge, bei denen der **Spediteur Auftragnehmer** ist (Ziffer 2.1) – also auch für Fracht-, Lager- und logistische Leistungen.
- **Nicht** anwendbar gegenüber **Verbrauchern** (Ziffer 2.4) und nicht für Verträge, die **ausschließlich** z. B. Verpackungsarbeiten, Umzugsgut, Kran- und Montagearbeiten oder genehmigungspflichtige Schwertransporte betreffen (Ziffer 2.3).
- Zwingendes Recht geht vor (Ziffer 2.2). Nach **§ 466 Abs. 2 HGB** darf ein Haftungshöchstbetrag für Güterschäden in AGB nur zwischen **2 und 40 SZR je kg** festgelegt werden, und der Verwender muss in geeigneter Weise darauf hinweisen.

# 6. Haftungsbegrenzungen nach ADSp 2017 (Ziffer 23)

| Ziffer | Fall | Begrenzung |
|---|---|---|
| 23.1.1 | Güterschaden in der Obhut (Spediteur als Frachtführer, Selbsteintritt, Fixkosten, Sammelladung, Obhut nach § 461 Abs. 1) | **8,33 SZR je kg** |
| 23.1.2 | multimodal mit Seestrecke, Schadenort unbekannt | 2 SZR je kg |
| 23.1.3 | zusätzlich je **Schadenfall** | höchstens **1,25 Mio. €** oder **2 SZR je kg**, je nachdem, welcher Betrag **höher** ist |
| 23.3 | Güterschäden, die nicht unter 23.1 fallen (z. B. § 461 Abs. 2 HGB) | 8,33 SZR je kg (bei Seebeförderung 2 SZR), höchstens 1,25 Mio. € je Schadenfall |
| 23.4 | **andere als Güterschäden** (Vermögensschäden), außer Lagerung, Personen- und Drittsachschäden | **das Dreifache** des Betrags bei Verlust des Gutes, höchstens **125.000 €** je Schadenfall |
| 23.5 | je **Schadenereignis** (z. B. Brand im Umschlaglager mit vielen Geschädigten) | höchstens **2,5 Mio. €** oder 2 SZR je kg, je nachdem, welcher Betrag höher ist |

**Qualifiziertes Verschulden (Ziffer 27):** Bei **Vorsatz** oder **grober Fahrlässigkeit** des Spediteurs oder seiner Erfüllungsgehilfen sowie bei Verletzung **vertragswesentlicher Pflichten** gelten viele dieser Begrenzungen nicht (bei wesentlichen Pflichten ist der Ersatz auf den vorhersehbaren, typischen Schaden begrenzt). Für Güterschäden in der Obhut bleibt § 435 HGB maßgeblich (Vorsatz oder Leichtfertigkeit im Bewusstsein eines wahrscheinlichen Schadens).

# 7. Versicherung (vorsichtig gelesen)

- **Güterversicherung (Ziffer 21 ADSp)**: Der Spediteur besorgt eine Transportversicherung für das Gut **nur**, wenn der Auftraggeber ihn **vor Übergabe** des Gutes damit beauftragt – oder wenn dies im Interesse des Auftraggebers vermutet wird (z. B. Wertangabe „zur Versicherung“ im Auftrag, frühere Versicherung im laufenden Geschäft). Die Güterversicherung deckt den **Wert** des Gutes, nicht nur die begrenzte Haftung.
- **Haftungsversicherung (Ziffer 28 ADSp)**: Der Spediteur **muss** eine Haftungsversicherung abschließen, die mindestens seine gesetzliche und ADSp-Haftung abdeckt. Auf die Haftungsregelungen der ADSp kann er sich nur berufen, wenn er bei Auftragserteilung **ausreichend versichert** war (Ziffer 28.3).

> Welche Versicherungsprodukte im Einzelnen angeboten werden, unterscheidet sich je nach Versicherer. Für Schulaufgaben genügt: Haftungsversicherung schützt den **Spediteur**, Güterversicherung schützt den **Wert der Ware** des Kunden.`,
  terms: [
    { term: 'Speditionsvertrag', def: 'Vertrag, durch den sich der Spediteur verpflichtet, die Versendung des Gutes zu besorgen, und der Versender, die Vergütung zu zahlen (§ 453 HGB).' },
    { term: 'Versender', def: 'Auftraggeber des Spediteurs im Speditionsvertrag.' },
    { term: 'Frachtführer', def: 'Unternehmer, der sich verpflichtet, das Gut zum Bestimmungsort zu befördern und dort an den Empfänger abzuliefern (§ 407 HGB).' },
    { term: 'Selbsteintritt', def: 'Der Spediteur führt die Beförderung selbst aus und hat insoweit die Rechte und Pflichten eines Frachtführers (§ 458 HGB).' },
    { term: 'Fixkostenspedition', def: 'Vereinbarung eines festen Betrags, der die Beförderungskosten einschließt; der Spediteur hat dann die Rechte und Pflichten eines Frachtführers (§ 459 HGB).' },
    { term: 'Sammelladung', def: 'Güter mehrerer Versender werden gemeinsam befördert; für die Beförderung hat der Spediteur die Rechte und Pflichten eines Frachtführers (§ 460 HGB).' },
    { term: 'Obhutshaftung', def: 'Verschuldensunabhängige Haftung für Verlust oder Beschädigung des Gutes, solange es sich in der Obhut des Spediteurs befindet (§ 461 Abs. 1 HGB).' },
    { term: 'Sonderziehungsrecht (SZR)', def: 'Rechnungseinheit des Internationalen Währungsfonds; Grundlage der Haftungshöchstbeträge, z. B. 8,33 SZR je kg (§ 431 Abs. 4 HGB).' },
    { term: 'ADSp 2017', def: 'Allgemeine Deutsche Spediteurbedingungen, von Verbänden empfohlene AGB für Verkehrsverträge, bei denen der Spediteur Auftragnehmer ist; gelten nur bei Vereinbarung und nicht gegenüber Verbrauchern.' },
    { term: 'Güterschaden / Vermögensschaden', def: 'Güterschaden: Verlust oder Beschädigung des Gutes. Vermögensschaden (andere als Güterschäden): z. B. Kosten durch falsche Weisung oder fehlende Zollanmeldung.' },
    { term: 'Haftungsversicherung', def: 'Pflichtversicherung des Spediteurs nach Ziffer 28 ADSp, die seine Haftung gegenüber Auftraggebern abdeckt.' }
  ],
  example: `# Saar-Trans Spedition GmbH – drei Aufträge, drei Rechtslagen (Beispiel 2026)

**Auftrag 1:** Die Dillinger Röhren AG beauftragt Saar-Trans, eine Sendung Stahlrohre nach Rotterdam zu „besorgen“. Saar-Trans wählt Binnenschiff, schließt den Frachtvertrag mit einer Reederei und rechnet Kosten plus Provision ab.
→ **Reiner Speditionsvertrag.** Saar-Trans haftet für Fehler bei der Organisation (§ 461 Abs. 2 HGB) und für Schäden, solange die Rohre in ihrem eigenen Lager stehen (§ 461 Abs. 1 HGB).

**Auftrag 2:** Ein Versender bucht eine Palette Saarbrücken–Leipzig zum **Festpreis von 145 €**. Saar-Trans befördert sie im Sammelgutverkehr.
→ **Fixkosten und Sammelladung** (§§ 459, 460 HGB): Saar-Trans haftet für die Beförderung **wie ein Frachtführer**.

**Auftrag 3:** Eine Privatperson lässt ein Paket Möbelteile versenden.
→ Speditionsrecht des HGB gilt, aber **die ADSp nicht** (Verbraucher, Ziffer 2.4); zum Nachteil des Verbrauchers darf von den Haftungsregeln nicht abgewichen werden (§ 466 Abs. 4 HGB).

# Haftungsrechnung (Beispielkurs 1 SZR = 1,20 €)

Bei Auftrag 2 wird die 320 kg schwere Palette (Warenwert 6.800 €) im Umschlaglager durch einen Stapler beschädigt und ist wertlos.

- Haftungshöchstbetrag: 320 kg × 8,33 SZR = 2.665,60 SZR
- in Euro: 2.665,60 × 1,20 € = **3.198,72 €**
- Ersatz: **3.198,72 €** (der niedrigere Wert aus Schaden 6.800 € und Höchstbetrag). Den Rest trägt der Versender – es sei denn, er hat eine **Güterversicherung** über Saar-Trans eindecken lassen.`,
  rules: [
    'Spediteur besorgt (organisiert) die Versendung, Frachtführer befördert.',
    'Bei Selbsteintritt, Fixkosten und Sammelladung haftet der Spediteur für die Beförderung wie ein Frachtführer.',
    'Obhutsschäden: verschuldensunabhängig, begrenzt auf 8,33 SZR je kg (§§ 461 Abs. 1, 431 HGB).',
    'Andere Pflichtverletzungen: Haftung bei vermutetem Verschulden (§ 461 Abs. 2 HGB).',
    'ADSp gelten nur, wenn sie vereinbart wurden, und nie gegenüber Verbrauchern.',
    'ADSp-Höchstbeträge: 1,25 Mio. € je Schadenfall (oder 2 SZR/kg, falls höher), 125.000 € für Vermögensschäden, 2,5 Mio. € je Schadenereignis.',
    'Haftungsversicherung schützt den Spediteur, Güterversicherung den Warenwert – Letztere nur auf Auftrag vor Übergabe.'
  ],
  summary: `- **Speditionsvertrag** (§ 453 HGB): Spediteur **besorgt** die Versendung, Versender zahlt; Vergütung fällig bei Übergabe an den Frachtführer (§ 456).
- **Pflichten** Spediteur (§ 454): Beförderungsmittel und -weg, Auswahl und Verträge mit ausführenden Unternehmern, Sicherung von Ersatzansprüchen, Interessenwahrung; Versender (§ 455): Verpackung, Kennzeichnung, Papiere, Gefahrgutangaben.
- **Frachtführerhaftung** bei **Selbsteintritt** (§ 458), **Fixkosten** (§ 459), **Sammelladung** (§ 460).
- **Haftung § 461**: Obhut verschuldensunabhängig (8,33 SZR/kg), sonstige Pflichtverletzungen mit vermutetem Verschulden; Haftung für Gehilfen (§ 462); Verjährung 1 Jahr (§§ 463, 439).
- **ADSp 2017**: Vereinbarung nötig, nicht für Verbraucher; Ziffer 23: 8,33 SZR/kg, 1,25 Mio. € je Schadenfall, 125.000 € Vermögensschäden, 2,5 Mio. € je Ereignis; Ziffer 21 Güterversicherung auf Auftrag, Ziffer 28 Haftungsversicherung Pflicht.`,
  mistakes: [
    { wrong: 'Ein Spediteur haftet nie wie ein Frachtführer, weil er nur organisiert.', right: 'Bei Selbsteintritt, Fixkostenspedition und Sammelladung hat er für die Beförderung die Rechte und Pflichten eines Frachtführers (§§ 458–460 HGB).' },
    { wrong: 'Die ADSp gelten automatisch für jeden Speditionsauftrag.', right: 'Die ADSp sind AGB und müssen vereinbart werden; gegenüber Verbrauchern gelten sie nicht (Ziffer 2.4).' },
    { wrong: 'Der Spediteur muss die Ware immer gegen Transportschäden versichern.', right: 'Eine Güterversicherung besorgt der Spediteur nur auf Auftrag vor Übergabe oder bei vermutetem Interesse (Ziffer 21 ADSp). Pflicht ist nur seine eigene Haftungsversicherung (Ziffer 28).' },
    { wrong: 'Der Spediteur ersetzt immer den vollen Warenwert.', right: 'Die Haftung ist für Güterschäden auf 8,33 SZR je kg Rohgewicht begrenzt; ersetzt wird höchstens der tatsächliche Schaden.' },
    { wrong: 'Bei Vermögensschäden gilt die Grenze von 1,25 Mio. €.', right: 'Für andere als Güterschäden begrenzen die ADSp auf das Dreifache des Verlustbetrags, höchstens 125.000 € je Schadenfall (Ziffer 23.4).' },
    { wrong: 'Gefahrgut muss der Versender dem Spediteur nur mündlich ankündigen.', right: 'Der Versender muss rechtzeitig in Textform die genaue Art der Gefahr mitteilen (§ 455 Abs. 1 HGB).' }
  ],
  flashcards: [
    { q: 'Was ist die Hauptpflicht des Spediteurs?', a: 'Die Versendung des Gutes zu besorgen (§ 453 HGB), also die Beförderung zu organisieren (§ 454 HGB).' },
    { q: 'Wann ist die Vergütung des Spediteurs fällig?', a: 'Sobald das Gut dem Frachtführer oder Verfrachter übergeben ist (§ 456 HGB).' },
    { q: 'Was bedeutet Selbsteintritt?', a: 'Der Spediteur befördert selbst und hat insoweit die Rechte und Pflichten eines Frachtführers (§ 458 HGB).' },
    { q: 'Was ist Fixkostenspedition?', a: 'Vereinbarung eines festen Preises einschließlich Beförderungskosten; Spediteur haftet wie ein Frachtführer (§ 459 HGB).' },
    { q: 'Wie haftet der Spediteur für Güterschäden in seiner Obhut?', a: 'Verschuldensunabhängig, begrenzt auf 8,33 SZR je kg Rohgewicht (§ 461 Abs. 1 i. V. m. § 431 HGB).' },
    { q: 'Wie haftet er für sonstige Pflichtverletzungen?', a: 'Bei vermutetem Verschulden: außer der Schaden war mit der Sorgfalt eines ordentlichen Kaufmanns nicht abzuwenden (§ 461 Abs. 2 HGB).' },
    { q: 'Gegenüber wem gelten die ADSp 2017 nicht?', a: 'Gegenüber Verbrauchern (Ziffer 2.4 ADSp).' },
    { q: 'Höchstbetrag je Schadenfall nach Ziffer 23.1.3 ADSp?', a: '1,25 Mio. € oder 2 SZR je kg, je nachdem, welcher Betrag höher ist.' },
    { q: 'Haftungsgrenze für Vermögensschäden nach ADSp?', a: 'Dreifacher Betrag bei Verlust des Gutes, höchstens 125.000 € je Schadenfall (Ziffer 23.4).' },
    { q: 'In welchem Rahmen dürfen AGB die Güterschadenhaftung festlegen?', a: 'Zwischen 2 und 40 SZR je kg mit geeignetem Hinweis (§ 466 Abs. 2 HGB).' },
    { q: 'Wann besorgt der Spediteur eine Güterversicherung?', a: 'Wenn der Auftraggeber ihn vor Übergabe des Gutes beauftragt oder das Interesse vermutet wird (Ziffer 21 ADSp).' }
  ],
  tasks: [
    {
      id: 'lf05-speditionsvertrag-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Worin unterscheidet sich der Spediteur grundsätzlich vom Frachtführer?',
      options: [
        'Der Spediteur befördert das Gut selbst, der Frachtführer organisiert nur.',
        'Der Spediteur besorgt die Versendung, der Frachtführer führt die Beförderung durch.',
        'Der Spediteur arbeitet nur international, der Frachtführer nur national.',
        'Es gibt keinen Unterschied; die Begriffe sind gleichbedeutend.'
      ],
      correct: [1],
      hints: ['Vergleiche § 453 und § 407 HGB.', 'Besorgen heißt organisieren.'],
      solution: 'Der **Spediteur besorgt** (organisiert) die Versendung (§ 453 HGB), der **Frachtführer befördert** das Gut und liefert es ab (§ 407 HGB). Ein Spediteur kann aber durch Selbsteintritt, Fixkosten oder Sammelladung zusätzlich Frachtführerpflichten übernehmen.'
    },
    {
      id: 'lf05-speditionsvertrag-a2', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Situation der zutreffenden Vorschrift zu.',
      pairs: [
        ['Saar-Trans befördert eine Komplettladung mit eigenem Lkw, obwohl nur die Besorgung vereinbart war.', 'Selbsteintritt (§ 458 HGB)'],
        ['Saar-Trans vereinbart für eine Palette nach Leipzig einen Festpreis von 145 € inklusive Transport.', 'Fixkostenspedition (§ 459 HGB)'],
        ['Saar-Trans fasst 24 Sendungen verschiedener Versender in einer Wechselbrücke nach Hamburg zusammen.', 'Sammelladung (§ 460 HGB)'],
        ['Saar-Trans bucht für einen Kunden Platz auf einem Binnenschiff und rechnet Kosten plus Provision ab.', 'Reiner Speditionsvertrag (§§ 453, 454 HGB)']
      ],
      hints: ['Nur eine Situation ist eine reine Besorgung ohne Frachtführerpflichten.', 'Achte auf Festpreis, eigenen Lkw und mehrere Versender.'],
      solution: 'Eigener Lkw → **Selbsteintritt**; Festpreis inklusive Beförderung → **Fixkostenspedition**; mehrere Versender in einer Ladung → **Sammelladung** (Details in „Ablauf des Sammelgutverkehrs“); Organisation gegen Kosten plus Provision → **reiner Speditionsvertrag**. In den ersten drei Fällen haftet Saar-Trans für die Beförderung wie ein Frachtführer.'
    },
    {
      id: 'lf05-speditionsvertrag-a3', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Pflichten hat der Spediteur nach § 454 HGB **ohne besondere Vereinbarung**? (Mehrfachauswahl)',
      options: [
        'Beförderungsmittel und Beförderungsweg bestimmen',
        'Ausführende Frachtführer auswählen und die Frachtverträge schließen',
        'Das Gut gegen Transportschäden versichern',
        'Schadensersatzansprüche des Versenders sichern',
        'Das Gut verpacken'
      ],
      correct: [0, 1, 3],
      hints: ['§ 454 Abs. 1 nennt drei Kernpflichten.', 'Versicherung und Verpackung gehören zu den Leistungen, die extra vereinbart werden müssen.'],
      solution: 'Kernpflichten nach **§ 454 Abs. 1 HGB**: Beförderungsmittel/-weg bestimmen, ausführende Unternehmer auswählen und Verträge schließen, Schadensersatzansprüche sichern. **Versicherung** und **Verpackung** schuldet er nur, wenn sie **vereinbart** sind (§ 454 Abs. 2 HGB); die Verpackung ist ohnehin grundsätzlich Pflicht des Versenders (§ 455 HGB).'
    },
    {
      id: 'lf05-speditionsvertrag-a4', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Lücken zur Haftung des Spediteurs.',
      text: 'Für Verlust und Beschädigung des Gutes in seiner [[Obhut]] haftet der Spediteur ohne Verschulden, höchstens mit [[8,33|8.33]] Sonderziehungsrechten je Kilogramm Rohgewicht. Für andere Schäden aus der Verletzung seiner Pflichten haftet er, es sei denn, der Schaden konnte durch die Sorgfalt eines ordentlichen [[Kaufmanns|Kaufmann]] nicht abgewendet werden. Für seine Leute und eingesetzte Unternehmer haftet er wie für [[eigenes|eigene]] Handeln. Ansprüche verjähren in der Regel in [[einem|1]] Jahr.',
      hints: ['§ 461 Abs. 1 und 2, § 462, § 463 HGB.', 'Die Verjährung verweist auf das Frachtrecht.'],
      solution: '**Obhut** (§ 461 Abs. 1), **8,33** SZR/kg (§ 431), Sorgfalt eines ordentlichen **Kaufmanns** (§ 461 Abs. 2), Haftung für Gehilfen wie für **eigenes** Handeln (§ 462), Verjährung **ein** Jahr (§§ 463, 439 HGB).'
    },
    {
      id: 'lf05-speditionsvertrag-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Im Umschlaglager der Saar-Trans Spedition GmbH fallen zwei Paletten (zusammen **540 kg**, Warenwert **9.200 €**) vom Stapler und sind wertlos. Es gelten HGB und ADSp 2017. Angenommener Kurs: **1 SZR = 1,20 €** (Beispielwert). Berechne den Höchstbetrag in SZR, in Euro und den Ersatzbetrag.',
      formula: 'Höchstbetrag = Rohgewicht (kg) × 8,33 SZR × Kurs; Ersatz = Minimum aus Schaden und Höchstbetrag',
      fields: [
        { id: 'szr', label: 'Höchstbetrag', unit: 'SZR', answer: 4498.2, tol: 0.01 },
        { id: 'eur', label: 'Höchstbetrag in Euro', unit: '€', answer: 5397.84, tol: 0.01 },
        { id: 'ersatz', label: 'Ersatzbetrag', unit: '€', answer: 5397.84, tol: 0.01 }
      ],
      hints: ['Güterschaden in der Obhut: § 461 Abs. 1 HGB bzw. Ziffer 23.1.1 ADSp.', 'Ersetzt wird der tatsächliche Schaden, höchstens bis zum Höchstbetrag.'],
      solution: `**Formel:** Höchstbetrag = kg × 8,33 SZR × Kurs

**SZR:** 540 kg × 8,33 SZR/kg = **4.498,20 SZR**

**Euro:** 4.498,20 SZR × 1,20 €/SZR = **5.397,84 €**

**Ersatz:** Schaden 9.200 € > Höchstbetrag 5.397,84 € → Ersatz **5.397,84 €**. Der Versender bleibt auf 3.802,16 € sitzen, wenn keine Güterversicherung besteht.`
    },
    {
      id: 'lf05-speditionsvertrag-a6', type: 'calc', difficulty: 3, points: 3,
      q: 'Beim Brand einer Umschlaghalle wird eine Sendung Maschinenteile von **180.000 kg** (Warenwert **2,4 Mio. €**) eines einzigen Versenders zerstört. Es gelten die ADSp 2017, Kurs **1 SZR = 1,20 €** (Beispielwert), kein qualifiziertes Verschulden. Berechne den Betrag nach 8,33 SZR/kg, den Vergleichsbetrag 2 SZR/kg und die Haftung nach Ziffer 23.1.3.',
      formula: 'Haftung = min(8,33 SZR/kg × kg; max(1.250.000 €; 2 SZR/kg × kg))',
      fields: [
        { id: 'b833', label: '8,33 SZR/kg in Euro', unit: '€', answer: 1799280, tol: 0.5 },
        { id: 'b2', label: '2 SZR/kg in Euro', unit: '€', answer: 432000, tol: 0.5 },
        { id: 'haft', label: 'Haftung nach ADSp', unit: '€', answer: 1250000, tol: 0.5 }
      ],
      hints: ['Ziffer 23.1.3: Übersteigt der Betrag 1,25 Mio. €, gilt 1,25 Mio. € oder 2 SZR/kg – der höhere Wert.', 'Vergleiche 1,25 Mio. € mit dem 2-SZR-Betrag.'],
      solution: `**8,33 SZR/kg:** 180.000 kg × 8,33 = 1.499.400 SZR × 1,20 € = **1.799.280 €**

Das übersteigt 1,25 Mio. € → Ziffer 23.1.3 greift.

**2 SZR/kg:** 180.000 kg × 2 = 360.000 SZR × 1,20 € = **432.000 €**

Der höhere Wert aus 1.250.000 € und 432.000 € ist **1.250.000 €**.

**Haftung:** **1.250.000 €** (zusätzlich wäre die Grenze von 2,5 Mio. € je Schadenereignis nach Ziffer 23.5 zu beachten, wenn mehrere Versender betroffen sind).`
    },
    {
      id: 'lf05-speditionsvertrag-a7', type: 'calc', difficulty: 3, points: 2,
      q: 'Saar-Trans hat für einen Kunden nur die Besorgung einer Sendung übernommen (reiner Speditionsvertrag, Abrechnung Kosten plus Provision). Ein Disponent der Saar-Trans gibt dem beauftragten Frachtführer eine falsche Lieferadresse. Die Sendung (**500 kg**) kommt unbeschädigt, aber drei Tage zu spät an; der Kunde muss eine Vertragsstrafe zahlen und verlangt **18.000 €** Vermögensschaden. Es gelten ADSp 2017 (Ziffer 23.4), Kurs **1 SZR = 1,20 €** (Beispielwert), kein qualifiziertes Verschulden. Berechne die Haftungsgrenze und den Ersatz.',
      formula: 'Grenze = 3 × (kg × 8,33 SZR × Kurs), höchstens 125.000 €; Ersatz = Minimum aus Schaden und Grenze',
      fields: [
        { id: 'grenze', label: 'Haftungsgrenze', unit: '€', answer: 14994, tol: 0.01 },
        { id: 'ersatz', label: 'Ersatzbetrag', unit: '€', answer: 14994, tol: 0.01 }
      ],
      hints: ['Es ist kein Güterschaden, sondern ein „anderer Schaden“.', 'Erst den Verlustbetrag berechnen, dann verdreifachen.'],
      solution: `**Verlustbetrag:** 500 kg × 8,33 SZR = 4.165 SZR × 1,20 € = 4.998 €

**Grenze nach Ziffer 23.4:** 3 × 4.998 € = **14.994 €** (unter 125.000 €)

**Ersatz:** Schaden 18.000 € > Grenze → **14.994 €**

Gesetzliche Grundlage der Haftung ist § 461 Abs. 2 HGB (Verletzung einer Pflicht aus § 454: Information und Weisungen an den Frachtführer). Bei grober Fahrlässigkeit würde die Begrenzung nach Ziffer 27 entfallen.`
    },
    {
      id: 'lf05-speditionsvertrag-a8', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zu den ADSp 2017 sind richtig? (Mehrfachauswahl)',
      options: [
        'Sie werden nur Vertragsbestandteil, wenn sie vereinbart werden.',
        'Sie gelten auch, wenn der Auftraggeber eine Privatperson ist.',
        'Sie sind von Verbänden der verladenden Wirtschaft und der Speditionsbranche gemeinsam empfohlen.',
        'Sie sind ein Gesetz und gehen dem HGB vor.',
        'Der Spediteur kann sich auf ihre Haftungsregeln nur berufen, wenn er ausreichend haftungsversichert ist.'
      ],
      correct: [0, 2, 4],
      hints: ['ADSp sind Allgemeine Geschäftsbedingungen.', 'Lies Ziffer 2.4 und Ziffer 28.3.'],
      solution: 'Richtig: **Vereinbarung nötig** (AGB), **gemeinsame Empfehlung der Verbände** (u. a. BDI, DIHK, DSLV, BGL), **Berufung auf Haftungsregeln nur bei ausreichender Haftungsversicherung** (Ziffer 28.3). Falsch: Gegenüber **Verbrauchern** gelten sie nicht (Ziffer 2.4). Sie sind **kein Gesetz**; zwingendes Recht geht vor (Ziffer 2.2, § 466 HGB).'
    },
    {
      id: 'lf05-speditionsvertrag-a9', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne den ADSp-Höchstbetrag dem passenden Fall zu.',
      pairs: [
        ['Güterschaden in der Obhut des Spediteurs', '8,33 SZR je kg'],
        ['Obergrenze je Schadenfall bei Güterschäden', '1,25 Mio. € oder 2 SZR je kg, der höhere Betrag'],
        ['Andere als Güterschäden (Vermögensschäden)', 'Dreifacher Verlustbetrag, höchstens 125.000 €'],
        ['Obergrenze je Schadenereignis', '2,5 Mio. € oder 2 SZR je kg, der höhere Betrag']
      ],
      hints: ['Ziffer 23.1.1, 23.1.3, 23.4 und 23.5.', 'Je Ereignis ist die Grenze höher als je Schadenfall.'],
      solution: '23.1.1: **8,33 SZR/kg**; 23.1.3: **1,25 Mio. €** je Schadenfall (oder 2 SZR/kg, wenn höher); 23.4: **dreifacher Verlustbetrag, max. 125.000 €**; 23.5: **2,5 Mio. €** je Schadenereignis (oder 2 SZR/kg, wenn höher).'
    },
    {
      id: 'lf05-speditionsvertrag-a10', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Schritte einer reinen Speditionsabwicklung nach § 454 HGB in eine sinnvolle Reihenfolge.',
      items: [
        'Speditionsauftrag des Versenders annehmen (Vereinbarung der ADSp)',
        'Beförderungsmittel und Beförderungsweg bestimmen',
        'Frachtführer auswählen, Frachtvertrag schließen und Weisungen erteilen',
        'Gut an den Frachtführer übergeben – die Speditionsvergütung wird fällig'
      ],
      hints: ['Erst muss ein Vertrag bestehen.', 'Die Fälligkeit nach § 456 HGB knüpft an die Übergabe an den Frachtführer an.'],
      solution: 'Auftrag annehmen (Speditionsvertrag, ADSp einbeziehen) → Verkehrsmittel und Weg bestimmen (§ 454 Abs. 1 Nr. 1) → Frachtführer auswählen, Vertrag und Weisungen (Nr. 2) → Übergabe an den Frachtführer; Vergütung fällig (§ 456 HGB).'
    },
    {
      id: 'lf05-speditionsvertrag-a11', type: 'text', difficulty: 2, points: 3,
      q: 'Ein Kunde fragt: „Ihr haftet doch sowieso für meine Ware – warum soll ich eine Versicherung über euch abschließen?“ Erkläre ihm den Unterschied zwischen Haftung des Spediteurs und Güterversicherung.',
      model: 'Die Haftung des Spediteurs ist für Güterschäden auf 8,33 Sonderziehungsrechte je Kilogramm begrenzt und greift nur, wenn der Spediteur nach HGB und ADSp haftet. Bei leichten, wertvollen Gütern liegt der Warenwert oft weit über dieser Grenze. Die Haftungsversicherung schützt den Spediteur. Eine Güterversicherung (Transportversicherung) deckt dagegen den Wert der Ware und zahlt auch, wenn der Spediteur nicht oder nur begrenzt haftet, etwa bei höherer Gewalt. Nach Ziffer 21 ADSp besorgt der Spediteur sie, wenn der Kunde ihn vor Übergabe des Gutes beauftragt.',
      criteria: [
        { text: 'nennt die Haftungsbegrenzung (8,33 SZR je kg)', keywords: ['8,33|8.33|begrenz|Höchstbetrag'], points: 1 },
        { text: 'erklärt, dass die Güterversicherung den Warenwert deckt', keywords: ['Güterversicherung|Transportversicherung', 'Wert|Warenwert'], points: 1 },
        { text: 'nennt Auftrag vor Übergabe bzw. Ziffer 21 ADSp', keywords: ['Auftrag|beauftrag|Ziffer 21|vor Übergabe'], points: 1 }
      ],
      hints: ['Wie hoch ist die Haftung bei einer leichten, teuren Sendung?', 'Wen schützt welche Versicherung?'],
      solution: 'Die **Haftung** ist **begrenzt** (8,33 SZR/kg) und setzt eine Haftung des Spediteurs voraus; die Haftungsversicherung schützt nur den Spediteur. Die **Güterversicherung** deckt den **Warenwert**, auch wenn der Spediteur nicht haftet. Sie wird nach **Ziffer 21 ADSp** nur besorgt, wenn der Kunde **vor Übergabe** einen Auftrag erteilt.'
    },
    {
      id: 'lf05-speditionsvertrag-a12', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Gefahrgut ohne Hinweis',
      intro: `Die Bliesgau Chemie GmbH beauftragt die Hochwald Logistik e.K. (ADSp 2017 vereinbart) zum Festpreis von 380 €, 12 Fässer (insgesamt **2.400 kg**) von Homburg nach Mannheim zu befördern. Dass es sich um Gefahrgut handelt, teilt die Bliesgau Chemie **nicht** mit. Beim Umschlag im Lager der Hochwald Logistik läuft ein Fass aus. Folgen:

- Reinigung der Lagerhalle und Entsorgung: **4.300 €** Kosten bei der Hochwald Logistik
- Zwei weitere Fässer sind beschädigt (zusammen **400 kg**, Warenwert **3.000 €**), weil ein Lagerarbeiter sie danach unsachgemäß mit dem Stapler bewegt hat.`,
      hints: ['Prüfe die Pflichten des Versenders nach § 455 HGB.', 'Beim Festpreis haftet der Spediteur wie ein Frachtführer; der Schaden entsteht in seiner Obhut.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf05-speditionsvertrag-a12-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen zu den Reinigungskosten von 4.300 € sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Bliesgau Chemie hätte die Gefahr rechtzeitig in Textform mitteilen müssen.',
            'Die Bliesgau Chemie haftet als Unternehmen auch ohne Verschulden für diese Kosten.',
            'Die Hochwald Logistik muss die Kosten selbst tragen, weil sie das Gut übernommen hat.',
            'Die Bliesgau Chemie haftet nur, wenn ihr Vorsatz nachgewiesen wird.'
          ],
          correct: [0, 1],
          hints: ['§ 455 Abs. 1 Satz 2 HGB.', '§ 455 Abs. 2 und 3 HGB unterscheiden Unternehmer und Verbraucher.'],
          solution: 'Richtig sind A und B. Der Versender muss bei gefährlichem Gut **rechtzeitig in Textform** die Art der Gefahr mitteilen (§ 455 Abs. 1 HGB). Für Schäden und Aufwendungen aus der unterlassenen Mitteilung haftet er **auch ohne Verschulden** (§ 455 Abs. 2 HGB); nur ein Verbraucher haftet lediglich bei Verschulden (Abs. 3).'
        },
        {
          id: 'lf05-speditionsvertrag-a12-2', type: 'calc', difficulty: 3, points: 2,
          q: 'Für die zwei beschädigten Fässer (400 kg, Warenwert 3.000 €) haftet die Hochwald Logistik (Obhutsschaden, Fixkostenspedition). Berechne den Höchstbetrag (Kurs 1 SZR = 1,20 €, Beispielwert) und den Ersatz.',
          formula: 'Höchstbetrag = kg × 8,33 SZR × Kurs; Ersatz = Minimum aus Schaden und Höchstbetrag',
          fields: [
            { id: 'hb', label: 'Höchstbetrag', unit: '€', answer: 3998.4, tol: 0.01 },
            { id: 'ersatz', label: 'Ersatzbetrag', unit: '€', answer: 3000, tol: 0.01 }
          ],
          hints: ['400 × 8,33 × 1,20.', 'Mehr als den tatsächlichen Schaden muss niemand ersetzen.'],
          solution: `**Höchstbetrag:** 400 kg × 8,33 SZR = 3.332 SZR × 1,20 € = **3.998,40 €**

**Ersatz:** Der Schaden (3.000 €) liegt unter dem Höchstbetrag → Ersatz **3.000 €**.

Grundlage: § 459 HGB (Festpreis) i. V. m. Frachtführerhaftung bzw. § 461 Abs. 1 HGB, Ziffer 23.1.1 ADSp. Ein Mitverschulden der Bliesgau Chemie (fehlender Gefahrguthinweis) könnte den Ersatz nach § 461 Abs. 3 HGB kürzen, wenn es zu diesem Schaden beigetragen hat.`
        },
        {
          id: 'lf05-speditionsvertrag-a12-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Die Hochwald Logistik wendet ein: „Der Lagerarbeiter war schuld, nicht wir.“ Was gilt?',
          options: [
            'Die Hochwald Logistik haftet für ihren Mitarbeiter wie für eigenes Handeln.',
            'Nur der Lagerarbeiter persönlich haftet.',
            'Niemand haftet, weil der Versender den Gefahrguthinweis unterlassen hat.',
            'Die Haftung entfällt, weil die ADSp vereinbart sind.'
          ],
          correct: [0],
          hints: ['§ 462 HGB.', 'Die ADSp begrenzen die Haftung, schließen sie aber nicht aus.'],
          solution: 'Nach **§ 462 HGB** (bzw. § 428 HGB bei Frachtführerhaftung) haftet der Spediteur für Handlungen seiner **Leute** in Ausübung ihrer Verrichtungen **wie für eigenes Handeln**. Die ADSp begrenzen die Höhe, schließen die Haftung aber nicht aus. Der fehlende Gefahrguthinweis kann allenfalls als Mitverursachung berücksichtigt werden.'
        }
      ]
    }
  ],
  quiz: ['lf05-speditionsvertrag-a1', 'lf05-speditionsvertrag-a2', 'lf05-speditionsvertrag-a5', 'lf05-speditionsvertrag-a8', 'lf05-speditionsvertrag-a9'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 5, Inhalte: Speditionsvertrag, Allgemeine Deutsche Spediteurbedingungen, Haftung des Spediteurs, Versicherungen' },
    { title: 'Handelsgesetzbuch § 453 Speditionsvertrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__453.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 454 Besorgung der Versendung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__454.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 455 Behandlung des Gutes, Begleitpapiere, Mitteilungs- und Auskunftspflichten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__455.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 456 Fälligkeit der Vergütung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__456.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 458 Selbsteintritt', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__458.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 459 Spedition zu festen Kosten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__459.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 461 Haftung des Spediteurs', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__461.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 462 Haftung für andere', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__462.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 466 Abweichende Vereinbarungen über die Haftung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__466.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 431 Haftungshöchstbetrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__431.html', asOf: '2026-10-17' },
    { title: 'Allgemeine Deutsche Spediteurbedingungen 2017 (ADSp 2017), Verbandsempfehlung (Abdruck des DSLV-Textes)', publisher: 'DSLV u. a. Verbände (Abdruck auf kemena.de)', url: 'https://www.kemena.de/wp-content/uploads/2023/11/ADSp_2017_DSLV_20161019.pdf', asOf: '2017, geprüft 2026-10-17' }
  ],
  links: ['lf05-sammelgut-ablauf', 'lf04-frachtvertrag-haftung', 'lf05-mahnverfahren']
};
