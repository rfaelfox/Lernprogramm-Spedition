export default {
  id: 'lf04-frachtvertrag-haftung',
  area: 'LF04',
  topic: 'lf04-frachtrecht',
  title: 'Frachtvertrag und Haftung nach HGB',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026-10',
    note: 'HGB §§ 407, 408, 412, 423, 425, 426, 427, 429, 431, 435, 438, 449 am 17.10.2026 auf gesetze-im-internet.de geprüft. Haftungshöchstbetrag 8,33 Rechnungseinheiten (Sonderziehungsrechte, SZR) je kg Rohgewicht (§ 431 Abs. 1), Lieferfristüberschreitung höchstens dreifache Fracht (§ 431 Abs. 3). Der Eurowert eines SZR ändert sich täglich; alle Kurse in dieser Einheit sind angenommene Beispielwerte. §§ 420 und 421 (Fracht, Empfänger) konnten bei der Prüfung nicht abgerufen werden und werden nur allgemein erwähnt.'
  },
  goals: [
    'Ich kann die Beteiligten am Frachtvertrag (Absender, Frachtführer, Empfänger) und ihre Hauptpflichten nennen.',
    'Ich kann Aufgaben und Inhalt des Frachtbriefs nach § 408 HGB erklären.',
    'Ich kann die Obhutshaftung des Frachtführers nach § 425 HGB und die Haftungsausschlüsse nach §§ 426 und 427 HGB anwenden.',
    'Ich kann den Haftungshöchstbetrag nach § 431 HGB für Verlust, Beschädigung und Lieferfristüberschreitung berechnen.',
    'Ich kann erklären, wann die Haftungsbegrenzungen nach § 435 HGB wegfallen.'
  ],
  simple: `# Worum geht es?

Wer Güter gegen Bezahlung befördern lässt, schließt einen **Frachtvertrag**. Er ist im Handelsgesetzbuch (HGB) ab **§ 407** geregelt. Das gilt für Beförderungen auf der Straße, der Schiene, auf Binnengewässern und in der Luft innerhalb Deutschlands, wenn die Beförderung zum Betrieb eines gewerblichen Unternehmens gehört.

**Die Beteiligten:**

- **Absender:** beauftragt die Beförderung und zahlt die Fracht (z. B. ein Hersteller oder ein Spediteur).
- **Frachtführer:** befördert das Gut zum Bestimmungsort und liefert es dort ab (z. B. ein Transportunternehmen mit eigenen Lkw).
- **Empfänger:** soll das Gut erhalten. Er ist nicht Vertragspartner, bekommt aber eigene Rechte, sobald das Gut angekommen ist.

**Haftung in einem Satz:** Der Frachtführer haftet für Verlust, Beschädigung und verspätete Ablieferung, solange das Gut in seiner **Obhut** ist, also von der Übernahme bis zur Ablieferung. Er muss dafür kein Verschulden haben. Die Haftung ist aber nach oben begrenzt: **8,33 Sonderziehungsrechte (SZR) je Kilogramm Rohgewicht**.

**Beispiel:** Eine Palette mit 500 kg geht verloren. Höchstens 500 × 8,33 = 4.165 SZR werden ersetzt. Bei einem angenommenen Kurs von 1 SZR = 1,20 € (Beispielwert) sind das 4.998,00 €. Ist die Ware weniger wert, wird nur der Warenwert ersetzt.`,
  deep: `# 1. Frachtvertrag (§ 407 HGB)

| Beteiligter | Hauptpflicht | Beispiele weiterer Pflichten |
|---|---|---|
| Frachtführer | Gut zum Bestimmungsort befördern und an den Empfänger abliefern (§ 407 Abs. 1) | betriebssichere Verladung (§ 412), Lieferfrist einhalten (§ 423) |
| Absender | vereinbarte Fracht zahlen (§ 407 Abs. 2) | Gut beförderungssicher laden, stauen, befestigen und entladen (§ 412), verpacken und kennzeichnen, Angaben und Begleitpapiere liefern |
| Empfänger | nicht Vertragspartei | hat nach Ankunft eigene Rechte; wer Ablieferung verlangt, muss die noch offene Fracht zahlen |

Der Frachtvertrag ist ein **Konsensualvertrag**: Er kommt durch zwei übereinstimmende Willenserklärungen zustande. Ein Frachtbrief ist dafür nicht nötig.

# 2. Frachtbrief (§ 408 HGB)

- Der **Frachtführer kann** die Ausstellung verlangen. Er ist keine Voraussetzung für den Vertrag, sondern ein **Beweisdokument**.
- **Drei Originalausfertigungen**, vom **Absender** unterzeichnet (der Frachtführer unterschreibt, wenn der Absender es verlangt). Eine erhält der Absender, eine begleitet das Gut, eine behält der Frachtführer.
- Wichtige Angaben: Ort und Tag der Ausstellung, Absender, Frachtführer, Empfänger, Übernahme- und Ablieferungsstelle, Art des Gutes und der Verpackung, Anzahl, Zeichen und Nummern der Frachtstücke, **Rohgewicht**, Fracht, Gefahrgutbezeichnung, Nachnahme, Weisungen.
- Ein **elektronischer Frachtbrief** ist gleichgestellt, wenn er dieselben Funktionen erfüllt (§ 408 Abs. 3).

# 3. Lieferfrist (§ 423 HGB)

Der Frachtführer muss das Gut innerhalb der **vereinbarten** Frist abliefern. Ist nichts vereinbart, gilt die Frist, die man einem **sorgfältigen Frachtführer** unter den Umständen vernünftigerweise zubilligen kann.

# 4. Obhutshaftung (§ 425 HGB)

Der Frachtführer haftet für Schäden durch **Verlust**, **Beschädigung** oder **Überschreitung der Lieferfrist**, die zwischen **Übernahme und Ablieferung** entstehen. Das ist eine **verschuldensunabhängige** Haftung (Gefährdungshaftung). Haben Absender, Empfänger oder ein besonderer Mangel des Gutes mitgewirkt, wird der Schaden geteilt (§ 425 Abs. 2).

# 5. Haftungsausschlüsse

**§ 426 HGB – unabwendbares Ereignis:** keine Haftung, wenn der Schaden auf Umständen beruht, die der Frachtführer auch bei **größter Sorgfalt** nicht vermeiden und deren Folgen er nicht abwenden konnte.

**§ 427 HGB – besondere Haftungsausschlussgründe**, z. B.:

1. vereinbarte oder übliche Verwendung offener, nicht mit Planen gedeckter Fahrzeuge oder Verladung auf Deck
2. ungenügende Verpackung durch den Absender
3. Behandeln, Verladen oder Entladen durch Absender oder Empfänger
4. natürliche Beschaffenheit des Gutes (Bruch, Rost, innerer Verderb, Austrocknen, Auslaufen, normaler Schwund)
5. ungenügende Kennzeichnung der Frachtstücke durch den Absender
6. Beförderung lebender Tiere

Konnte der Schaden aus einer dieser Gefahren entstehen, wird **vermutet**, dass er daraus entstanden ist (§ 427 Abs. 2).

# 6. Umfang der Haftung (§§ 429, 431 HGB)

**Wertersatz (§ 429):** ersetzt wird der Wert des Gutes **am Ort und zur Zeit der Übernahme**. Bei Beschädigung: Wert unbeschädigt minus Wert beschädigt.

**Haftungshöchstbetrag (§ 431):**

| Schadensart | Grenze | Vorschrift |
|---|---|---|
| Verlust oder Beschädigung | 8,33 Rechnungseinheiten (SZR) je kg **Rohgewicht** | § 431 Abs. 1 |
| nur ein Teil der Sendung entwertet | Rohgewicht nur des entwerteten Teils | § 431 Abs. 2 |
| Überschreitung der Lieferfrist | **dreifacher Betrag der Fracht** | § 431 Abs. 3 |

Die **Rechnungseinheit** ist das **Sonderziehungsrecht (SZR)** des Internationalen Währungsfonds. Umgerechnet wird zum Kurs am **Tag der Übernahme** des Gutes oder an einem vereinbarten Tag (§ 431 Abs. 4).

**Rechenweg:**

1. Höchstbetrag in SZR = Rohgewicht (kg) × 8,33 SZR/kg
2. Höchstbetrag in € = SZR × Kurs (€/SZR)
3. Ersatz = **der niedrigere Betrag** aus Schaden (Wertersatz) und Höchstbetrag

# 7. Wegfall der Haftungsgrenzen (§ 435 HGB)

Die Haftungsbefreiungen und -begrenzungen gelten **nicht**, wenn der Schaden auf eine Handlung oder Unterlassung zurückgeht, die der Frachtführer (oder seine Leute nach § 428) **vorsätzlich** oder **leichtfertig und in dem Bewusstsein, dass ein Schaden mit Wahrscheinlichkeit eintreten werde**, begangen hat. Man spricht von **qualifiziertem Verschulden**. Dann haftet der Frachtführer **unbegrenzt**.

# 8. Schadensanzeige (§ 438 HGB)

- Äußerlich erkennbarer Schaden: Anzeige **bei Ablieferung**.
- Äußerlich nicht erkennbarer Schaden: Anzeige innerhalb von **7 Tagen** nach Ablieferung.
- Lieferfristüberschreitung: Anzeige innerhalb von **21 Tagen** nach Ablieferung, sonst erlischt der Anspruch.

Nach der Ablieferung muss die Anzeige in **Textform** erfolgen.

# 9. Abweichende Vereinbarungen (§ 449 HGB)

In vorformulierten Bedingungen (AGB) darf die Haftungsgrenze für Verlust und Beschädigung nur auf einen Betrag **zwischen 2 und 40 SZR je kg** festgelegt werden, und der Vertragspartner muss in geeigneter Weise darauf hingewiesen werden. Andere Abweichungen müssen im Einzelnen ausgehandelt werden. Ist der Absender ein Verbraucher, darf nicht zu seinem Nachteil abgewichen werden.`,
  terms: [
    { term: 'Frachtvertrag', def: 'Vertrag, durch den sich der Frachtführer verpflichtet, das Gut zum Bestimmungsort zu befördern und dort an den Empfänger abzuliefern; der Absender zahlt die Fracht (§ 407 HGB).' },
    { term: 'Absender', def: 'Vertragspartner des Frachtführers, der die Beförderung in Auftrag gibt und die Fracht schuldet.' },
    { term: 'Frachtführer', def: 'Unternehmer, der die Beförderung des Gutes gewerblich übernimmt und ausführt.' },
    { term: 'Empfänger', def: 'Person, an die das Gut abzuliefern ist. Nicht Vertragspartei, hat aber nach Ankunft des Gutes eigene Rechte.' },
    { term: 'Frachtbrief', def: 'Beweisurkunde über Abschluss und Inhalt des Frachtvertrags und die Übernahme des Gutes; drei Originale, vom Absender unterzeichnet (§ 408 HGB).' },
    { term: 'Lieferfrist', def: 'Vereinbarte Frist oder, ohne Vereinbarung, die Frist, die einem sorgfältigen Frachtführer vernünftigerweise zuzubilligen ist (§ 423 HGB).' },
    { term: 'Obhutshaftung', def: 'Verschuldensunabhängige Haftung des Frachtführers für Verlust, Beschädigung und Lieferfristüberschreitung zwischen Übernahme und Ablieferung (§ 425 HGB).' },
    { term: 'Sonderziehungsrecht (SZR)', def: 'Rechnungseinheit des Internationalen Währungsfonds. Ihr Eurowert ändert sich täglich. Grundlage des Haftungshöchstbetrags (§ 431 Abs. 4 HGB).' },
    { term: 'Rohgewicht', def: 'Gewicht des Gutes einschließlich Verpackung (Bruttogewicht). Bezugsgröße für den Haftungshöchstbetrag.' },
    { term: 'Qualifiziertes Verschulden', def: 'Vorsatz oder Leichtfertigkeit im Bewusstsein, dass ein Schaden mit Wahrscheinlichkeit eintreten werde. Führt zum Wegfall der Haftungsgrenzen (§ 435 HGB).' }
  ],
  example: `# Praxisbeispiel: Verlorene Palette auf dem Weg nach Köln

Die Druckerei Saarprint GmbH in Saarbrücken (Absender) beauftragt die Transportfirma Bliestal-Trans KG (Frachtführer), 4 Paletten Prospekte an einen Verlag in Köln (Empfänger) zu bringen. Fracht: 420,00 €. Übernahme am 01.10.2026.

Beim Umladen in einem Zwischenlager geht eine Palette verloren. Rohgewicht der Palette: 650 kg, Warenwert laut Rechnung: 7.800,00 €.

**Prüfung:**

1. **Frachtvertrag?** Ja, gewerbliche Beförderung auf der Straße im Inland, §§ 407 ff. HGB.
2. **Schaden in der Obhutszeit?** Ja, zwischen Übernahme und Ablieferung, § 425 HGB.
3. **Haftungsausschluss?** Kein unabwendbares Ereignis (§ 426) und kein besonderer Grund nach § 427 erkennbar.
4. **Höhe:** Wertersatz nach § 429 = 7.800,00 €. Höchstbetrag nach § 431 Abs. 1:
   - 650 kg × 8,33 SZR/kg = 5.414,50 SZR
   - angenommener Kurs am Übernahmetag 01.10.2026: 1 SZR = 1,20 € (**Beispielwert**, kein amtlicher Kurs)
   - 5.414,50 SZR × 1,20 €/SZR = 6.497,40 €
5. **Ergebnis:** Ersetzt werden **6.497,40 €**, weil der Höchstbetrag niedriger ist als der Warenwert. Den Rest (1.302,60 €) trägt der Absender oder seine Transportversicherung.

**Abwandlung:** Hätte der Fahrer die Palette bewusst unverschlossen über Nacht an einer unbewachten Rampe abgestellt, obwohl in der Gegend häufig gestohlen wird, käme **qualifiziertes Verschulden** nach § 435 HGB in Betracht. Dann haftet der Frachtführer unbegrenzt mit 7.800,00 €.`,
  rules: [
    'Frachtführer befördert und liefert ab, Absender zahlt die Fracht (§ 407 HGB).',
    'Der Frachtbrief beweist den Vertrag, er ist aber keine Voraussetzung dafür.',
    'Obhutshaftung: von der Übernahme bis zur Ablieferung, auch ohne Verschulden (§ 425 HGB).',
    'Verlust und Beschädigung: höchstens 8,33 SZR je kg Rohgewicht. Ersetzt wird immer der niedrigere Betrag aus Schaden und Höchstbetrag.',
    'Lieferfristüberschreitung: höchstens das Dreifache der Fracht (§ 431 Abs. 3 HGB).',
    'Bei Vorsatz oder bewusster Leichtfertigkeit fallen alle Grenzen weg (§ 435 HGB).'
  ],
  summary: `- Frachtvertrag nach §§ 407 ff. HGB: Absender, Frachtführer, Empfänger.
- Frachtbrief (§ 408): Beweisurkunde, drei Originale, vom Absender unterzeichnet.
- Lieferfrist (§ 423): vereinbart oder angemessen.
- Obhutshaftung (§ 425): Verlust, Beschädigung, Verspätung zwischen Übernahme und Ablieferung, verschuldensunabhängig.
- Keine Haftung bei unabwendbarem Ereignis (§ 426) und bei den besonderen Gründen des § 427 (z. B. schlechte Verpackung, Verladen durch den Absender).
- Höchstbetrag (§ 431): 8,33 SZR je kg Rohgewicht; bei Lieferfristüberschreitung dreifache Fracht. SZR-Kurs vom Übernahmetag.
- Qualifiziertes Verschulden (§ 435): unbegrenzte Haftung.
- Schadensanzeige (§ 438): sofort, 7 Tage bei verdeckten Schäden, 21 Tage bei Verspätung.`,
  mistakes: [
    { wrong: 'Ohne Frachtbrief gibt es keinen Frachtvertrag.', right: 'Der Frachtvertrag entsteht durch Einigung. Der Frachtbrief dient nur als Beweis.' },
    { wrong: 'Der Frachtführer haftet nur, wenn er schuld ist.', right: 'Die Obhutshaftung nach § 425 HGB gilt verschuldensunabhängig. Er wird nur durch §§ 426, 427 befreit.' },
    { wrong: 'Die Haftungsgrenze wird mit dem Nettogewicht der Ware berechnet.', right: 'Maßgeblich ist das Rohgewicht, also einschließlich Verpackung.' },
    { wrong: 'Es wird immer der Haftungshöchstbetrag gezahlt.', right: 'Ersetzt wird der tatsächliche Wertverlust, höchstens aber der Höchstbetrag. Der niedrigere Wert gilt.' },
    { wrong: 'Bei Verspätung gilt auch die Grenze von 8,33 SZR je kg.', right: 'Bei Lieferfristüberschreitung ist die Haftung auf den dreifachen Betrag der Fracht begrenzt.' },
    { wrong: 'Der SZR-Kurs aus dem Schulbuch gilt immer.', right: 'Der Kurs schwankt täglich. Maßgeblich ist der Kurs am Tag der Übernahme oder am vereinbarten Tag.' }
  ],
  flashcards: [
    { q: 'Welche Hauptpflichten regelt § 407 HGB?', a: 'Frachtführer: Gut zum Bestimmungsort befördern und an den Empfänger abliefern. Absender: vereinbarte Fracht zahlen.' },
    { q: 'Wer kann die Ausstellung eines Frachtbriefs verlangen?', a: 'Der Frachtführer (§ 408 Abs. 1 HGB).' },
    { q: 'Wie viele Originale hat der Frachtbrief und wer bekommt sie?', a: 'Drei: Absender, eine begleitet das Gut, eine behält der Frachtführer.' },
    { q: 'Was bedeutet Obhutshaftung?', a: 'Haftung für Verlust, Beschädigung und Lieferfristüberschreitung zwischen Übernahme und Ablieferung, unabhängig vom Verschulden (§ 425 HGB).' },
    { q: 'Wie hoch ist der Haftungshöchstbetrag bei Verlust nach HGB?', a: '8,33 Rechnungseinheiten (SZR) je kg Rohgewicht (§ 431 Abs. 1 HGB).' },
    { q: 'Wie hoch haftet der Frachtführer höchstens bei Lieferfristüberschreitung?', a: 'Mit dem dreifachen Betrag der Fracht (§ 431 Abs. 3 HGB).' },
    { q: 'Nenne drei besondere Haftungsausschlussgründe nach § 427 HGB.', a: 'Z. B. ungenügende Verpackung durch den Absender, Verladen durch Absender oder Empfänger, natürliche Beschaffenheit des Gutes, ungenügende Kennzeichnung, lebende Tiere, offene Fahrzeuge.' },
    { q: 'Wann entfallen die Haftungsgrenzen?', a: 'Bei Vorsatz oder Leichtfertigkeit im Bewusstsein, dass ein Schaden wahrscheinlich eintritt (§ 435 HGB).' },
    { q: 'Welcher SZR-Kurs gilt für die Umrechnung?', a: 'Der Kurs am Tag der Übernahme des Gutes oder an einem von den Parteien vereinbarten Tag (§ 431 Abs. 4 HGB).' },
    { q: 'Innerhalb welcher Frist muss ein äußerlich nicht erkennbarer Schaden angezeigt werden?', a: 'Innerhalb von 7 Tagen nach Ablieferung (§ 438 Abs. 2 HGB).' }
  ],
  tasks: [
    {
      id: 'lf04-frachtvertrag-haftung-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Die Spedition Weber beauftragt den Unternehmer Klein, mit seinem Lkw 10 Paletten von Saarlouis nach Mainz zu fahren. Welche Rolle hat die Spedition Weber im Frachtvertrag?',
      options: ['Frachtführer', 'Absender', 'Empfänger', 'Verfrachter'],
      correct: [1],
      hints: ['Wer gibt die Beförderung in Auftrag und zahlt die Fracht?', 'Auch ein Spediteur kann gegenüber dem Frachtführer Absender sein.'],
      solution: '**Absender.** Die Spedition schließt den Frachtvertrag mit Klein und schuldet die Fracht (§ 407 Abs. 2 HGB). Klein ist Frachtführer, der Kunde in Mainz Empfänger.'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'In welchen Fällen ist der Frachtführer nach § 427 HGB von der Haftung befreit? (Mehrfachauswahl)',
      options: [
        'Der Absender hat Glasflaschen nur in dünnen Karton ohne Polsterung verpackt; sie gehen zu Bruch.',
        'Der Fahrer fährt beim Rangieren gegen eine Rampe; die Ladung wird beschädigt.',
        'Der Absender hat die Paletten selbst verladen und nicht gesichert; sie kippen beim Bremsen um.',
        'Obst verdirbt durch inneren Verderb, obwohl Kühlung und Laufzeit vertragsgemäß waren.',
        'Der Lkw wird über Nacht nicht abgeschlossen, Ware wird gestohlen.'
      ],
      correct: [0, 2, 3],
      hints: ['§ 427 nennt Gefahren aus dem Bereich des Absenders oder des Gutes selbst.', 'Fehler des Fahrers fallen in den Verantwortungsbereich des Frachtführers.'],
      solution: 'Richtig sind **1, 3 und 4**: ungenügende Verpackung (§ 427 Abs. 1 Nr. 2), Verladen durch den Absender (Nr. 3), natürliche Beschaffenheit (Nr. 4). Rangierfehler und offener Lkw sind Fehler des Frachtführers bzw. seiner Leute; dafür haftet er. Beim unverschlossenen Lkw kann sogar qualifiziertes Verschulden (§ 435) vorliegen.'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a3', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jeder Vorschrift des HGB ihren Inhalt zu.',
      pairs: [
        ['§ 407', 'Pflichten aus dem Frachtvertrag'],
        ['§ 408', 'Frachtbrief'],
        ['§ 425', 'Obhutshaftung für Güter- und Verspätungsschäden'],
        ['§ 431', 'Haftungshöchstbetrag'],
        ['§ 435', 'Wegfall der Haftungsbegrenzungen bei qualifiziertem Verschulden']
      ],
      hints: ['Die Vorschriften folgen dem Ablauf: Vertrag, Dokument, Haftung, Grenze, Ausnahme.', '§ 431 enthält die Zahl 8,33.'],
      solution: '§ 407 Frachtvertrag, § 408 Frachtbrief, § 425 Obhutshaftung, § 431 Höchstbetrag (8,33 SZR/kg bzw. dreifache Fracht), § 435 Wegfall der Grenzen bei Vorsatz oder bewusster Leichtfertigkeit.'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a4', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze den Text zur Haftung des Frachtführers.',
      text: 'Der Frachtführer haftet für Verlust und Beschädigung in der Zeit von der [[Übernahme]] bis zur [[Ablieferung]]. Die Haftung ist auf [[8,33|8.33]] Sonderziehungsrechte je Kilogramm [[Rohgewicht|Bruttogewicht]] begrenzt. Bei Überschreitung der Lieferfrist haftet er höchstens mit dem [[dreifachen|3-fachen]] Betrag der Fracht.',
      hints: ['Die Obhutszeit hat einen Anfang und ein Ende.', 'Gewicht einschließlich Verpackung; bei Verspätung ist die Fracht die Bezugsgröße.'],
      solution: 'Übernahme – Ablieferung – 8,33 – Rohgewicht – dreifachen (§§ 425, 431 Abs. 1 und 3 HGB).'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a5', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Prüfschritte bei einem Güterschaden in eine sinnvolle Reihenfolge.',
      items: [
        'Prüfen, ob ein Frachtvertrag nach §§ 407 ff. HGB vorliegt',
        'Prüfen, ob der Schaden in der Obhutszeit entstanden ist (§ 425)',
        'Haftungsausschlüsse prüfen (§§ 426, 427)',
        'Wertersatz ermitteln und mit dem Höchstbetrag vergleichen (§§ 429, 431)',
        'Prüfen, ob qualifiziertes Verschulden die Grenze aufhebt (§ 435)'
      ],
      hints: ['Ohne Vertrag keine frachtrechtliche Haftung.', 'Erst wenn feststeht, dass und wie viel gehaftet wird, fragt man, ob die Grenze ausnahmsweise wegfällt.'],
      solution: 'Vertrag – Obhutszeit – Ausschlüsse – Höhe (Wert und Höchstbetrag) – Wegfall der Grenze nach § 435.'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a6', type: 'calc', difficulty: 2, points: 4,
      q: 'Eine Sendung mit 1.200 kg Rohgewicht und einem Warenwert von 22.000,00 € geht beim Frachtführer vollständig verloren. Übernahmetag: 05.10.2026. **Angenommener Kurs am Übernahmetag: 1 SZR = 1,20 € (Beispielwert, kein amtlicher Kurs).** Berechne den Höchstbetrag in SZR und in Euro sowie die Entschädigung.',
      formula: 'Höchstbetrag (SZR) = Rohgewicht × 8,33; Höchstbetrag (€) = SZR × Kurs; Entschädigung = min(Warenwert; Höchstbetrag)',
      fields: [
        { id: 'szr', label: 'Höchstbetrag in SZR', unit: 'SZR', answer: 9996, tol: 0.01 },
        { id: 'eur', label: 'Höchstbetrag in Euro', unit: '€', answer: 11995.2, tol: 0.01 },
        { id: 'ersatz', label: 'Entschädigung', unit: '€', answer: 11995.2, tol: 0.01 }
      ],
      hints: ['Zuerst Rohgewicht mal 8,33 SZR/kg.', 'Dann in Euro umrechnen und mit dem Warenwert vergleichen: der niedrigere Betrag wird ersetzt.'],
      solution: `**Formel:** Höchstbetrag = Rohgewicht (kg) × 8,33 SZR/kg (§ 431 Abs. 1 HGB)

1. 1.200 kg × 8,33 SZR/kg = **9.996,00 SZR**
2. 9.996,00 SZR × 1,20 €/SZR = **11.995,20 €** (Beispielkurs vom 05.10.2026)
3. Vergleich: Warenwert 22.000,00 € > Höchstbetrag 11.995,20 €
4. Entschädigung: **11.995,20 €**

Der Absender bleibt auf 10.004,80 € sitzen, wenn er keine Transportversicherung hat.`
    },
    {
      id: 'lf04-frachtvertrag-haftung-a7', type: 'calc', difficulty: 3, points: 4,
      q: 'Eine Sendung besteht aus 3 Paletten mit je 400 kg Rohgewicht. Nur eine Palette wird beschädigt, die beiden anderen sind unversehrt und voll verwendbar. Wert der beschädigten Palette unbeschädigt: 9.000,00 €, nach der Beschädigung: 4.000,00 €. **Angenommener Kurs am Übernahmetag 12.10.2026: 1 SZR = 1,20 € (Beispielwert).** Berechne den Schaden, den Höchstbetrag in Euro und die Entschädigung.',
      formula: 'Schaden = Wert unbeschädigt − Wert beschädigt; Höchstbetrag = Rohgewicht des entwerteten Teils × 8,33 × Kurs',
      fields: [
        { id: 'schaden', label: 'Schaden (Wertminderung)', unit: '€', answer: 5000, tol: 0.01 },
        { id: 'hb', label: 'Höchstbetrag in Euro', unit: '€', answer: 3998.4, tol: 0.01 },
        { id: 'ersatz', label: 'Entschädigung', unit: '€', answer: 3998.4, tol: 0.01 }
      ],
      hints: ['Bei Teilschaden zählt nach § 431 Abs. 2 nur das Gewicht des entwerteten Teils.', '400 kg × 8,33 SZR/kg, dann mal 1,20 €/SZR.'],
      solution: `1. Schaden nach § 429 Abs. 2: 9.000,00 € − 4.000,00 € = **5.000,00 €**
2. Gewicht des entwerteten Teils (§ 431 Abs. 2): 400 kg (nicht 1.200 kg, weil nur eine Palette entwertet ist)
3. Höchstbetrag: 400 kg × 8,33 SZR/kg = 3.332,00 SZR; 3.332,00 SZR × 1,20 €/SZR = **3.998,40 €**
4. Vergleich: 5.000,00 € > 3.998,40 €, also Entschädigung **3.998,40 €**`
    },
    {
      id: 'lf04-frachtvertrag-haftung-a8', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Frachtführer liefert eine Maschine zwei Tage zu spät ab. Vereinbarte Fracht: 850,00 €. Dem Empfänger entsteht durch die Verspätung ein nachgewiesener Schaden von 3.100,00 €. Wie hoch ist der Haftungshöchstbetrag und wie viel muss der Frachtführer ersetzen?',
      formula: 'Höchstbetrag = 3 × Fracht; Ersatz = min(Verspätungsschaden; Höchstbetrag)',
      fields: [
        { id: 'hb', label: 'Höchstbetrag', unit: '€', answer: 2550, tol: 0.01 },
        { id: 'ersatz', label: 'Ersatz', unit: '€', answer: 2550, tol: 0.01 }
      ],
      hints: ['Bei Verspätung gilt nicht das Gewicht, sondern die Fracht.', '§ 431 Abs. 3 HGB: dreifacher Betrag.'],
      solution: `1. Höchstbetrag (§ 431 Abs. 3 HGB): 3 × 850,00 € = **2.550,00 €**
2. Vergleich: Schaden 3.100,00 € > 2.550,00 €
3. Ersatz: **2.550,00 €**

Wichtig: Der Empfänger muss die Lieferfristüberschreitung innerhalb von 21 Tagen nach Ablieferung anzeigen (§ 438 Abs. 3 HGB), sonst erlischt der Anspruch.`
    },
    {
      id: 'lf04-frachtvertrag-haftung-a9', type: 'mc', difficulty: 1, points: 2,
      q: 'Welche Aussagen zum Frachtbrief nach § 408 HGB sind richtig? (Mehrfachauswahl)',
      options: [
        'Ohne Frachtbrief ist der Frachtvertrag unwirksam.',
        'Der Frachtführer kann die Ausstellung eines Frachtbriefs verlangen.',
        'Der Frachtbrief wird in drei Originalausfertigungen ausgestellt.',
        'Der Frachtbrief muss immer vom Empfänger unterschrieben werden.'
      ],
      correct: [1, 2],
      hints: ['Ist der Frachtbrief Voraussetzung oder Beweismittel?', 'Unterschreiben muss der Absender.'],
      solution: 'Richtig sind **2 und 3**. Der Frachtvertrag entsteht durch Einigung; der Frachtbrief beweist ihn nur. Unterzeichnet wird er vom Absender, auf dessen Verlangen auch vom Frachtführer.'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a10', type: 'text', difficulty: 3, points: 4,
      q: 'Erkläre, was § 435 HGB regelt, und nenne ein Beispiel aus dem Transportalltag. (3–5 Sätze)',
      model: '§ 435 HGB regelt, dass die Haftungsbefreiungen und Haftungsbegrenzungen nicht gelten, wenn der Frachtführer oder seine Leute vorsätzlich oder leichtfertig und in dem Bewusstsein gehandelt haben, dass ein Schaden mit Wahrscheinlichkeit eintreten werde. Man nennt das qualifiziertes Verschulden. Dann haftet der Frachtführer unbegrenzt in Höhe des vollen Schadens und nicht nur bis 8,33 SZR je kg. Beispiel: Ein Fahrer lässt einen beladenen Lkw mit hochwertiger Elektronik über Nacht unverschlossen auf einem unbewachten Parkplatz stehen, obwohl er weiß, dass dort häufig Ladung gestohlen wird.',
      criteria: [
        { text: 'nennt den Wegfall der Haftungsgrenzen', keywords: ['entfall|Wegfall|unbegrenzt|nicht gelten|gelten nicht'], points: 1 },
        { text: 'nennt Vorsatz oder Leichtfertigkeit', keywords: ['Vorsatz|vorsätzlich|leichtfertig'], points: 1 },
        { text: 'nennt das Bewusstsein der Schadenswahrscheinlichkeit', keywords: ['Bewusstsein|wahrscheinlich|Wahrscheinlichkeit'], points: 1 },
        { text: 'gibt ein passendes Beispiel', keywords: ['Beispiel|z. B.|etwa|Diebstahl|unverschlossen|Parkplatz'], points: 1 }
      ],
      hints: ['Was passiert mit den 8,33 SZR je kg?', 'Einfache Fahrlässigkeit reicht nicht. Welcher Verschuldensgrad wird verlangt?'],
      solution: 'Siehe Musterlösung: Bei Vorsatz oder Leichtfertigkeit im Bewusstsein der Schadenswahrscheinlichkeit fallen alle Haftungsbefreiungen und -grenzen weg; der Frachtführer haftet unbegrenzt. Beispiel: unverschlossener Lkw mit wertvoller Ladung auf unbewachtem Parkplatz in diebstahlgefährdeter Gegend.'
    },
    {
      id: 'lf04-frachtvertrag-haftung-a11', type: 'case', difficulty: 3, points: 7,
      q: 'Fallsituation: Kühlgeräte für Trier',
      intro: 'Die Elektro Merzig GmbH (Absender) beauftragt die Hochwald-Transporte OHG (Frachtführer), 8 Kühlgeräte (Rohgewicht insgesamt 800 kg, Warenwert insgesamt 6.000,00 €) nach Trier zu befördern. Fracht: 260,00 €, Übernahmetag 14.10.2026. Der Fahrer verlädt selbst. Er stellt die Geräte ungesichert auf die Ladefläche; bei einer Vollbremsung fallen alle Geräte um und sind wertlos. Der Empfänger bemerkt den Schaden sofort bei Ablieferung und vermerkt ihn auf dem Frachtbrief. **Angenommener Kurs am Übernahmetag: 1 SZR = 1,20 € (Beispielwert).**',
      parts: [
        {
          id: 'lf04-frachtvertrag-haftung-a11a', type: 'mc', difficulty: 2, points: 2,
          q: 'Haftet der Frachtführer dem Grunde nach?',
          options: [
            'Nein, weil Verladen nach § 427 Abs. 1 Nr. 3 HGB immer ein Haftungsausschluss ist.',
            'Ja, der Schaden entstand in der Obhutszeit, und verladen hat nicht der Absender, sondern der Fahrer des Frachtführers.',
            'Nein, weil der Frachtführer kein Verschulden trifft.',
            'Ja, aber nur, wenn der Empfänger innerhalb von 21 Tagen schriftlich anzeigt.'
          ],
          correct: [1],
          hints: ['§ 427 Abs. 1 Nr. 3 betrifft Verladen durch Absender oder Empfänger.', 'Für seine Leute (Fahrer) muss der Frachtführer einstehen.'],
          solution: '**Ja.** Der Schaden entstand zwischen Übernahme und Ablieferung (§ 425 HGB). Der Ausschluss nach § 427 Abs. 1 Nr. 3 greift nicht, weil der Fahrer des Frachtführers verladen hat. Die Anzeige erfolgte bei Ablieferung (§ 438 Abs. 1).'
        },
        {
          id: 'lf04-frachtvertrag-haftung-a11b', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne den Höchstbetrag in Euro und die Entschädigung.',
          formula: 'Höchstbetrag = 800 kg × 8,33 SZR/kg × 1,20 €/SZR; Entschädigung = min(Warenwert; Höchstbetrag)',
          fields: [
            { id: 'szr', label: 'Höchstbetrag in SZR', unit: 'SZR', answer: 6664, tol: 0.01 },
            { id: 'hb', label: 'Höchstbetrag in Euro', unit: '€', answer: 7996.8, tol: 0.01 },
            { id: 'ersatz', label: 'Entschädigung', unit: '€', answer: 6000, tol: 0.01 }
          ],
          hints: ['800 × 8,33 = ?', 'Hier ist der Warenwert niedriger als der Höchstbetrag.'],
          solution: `1. 800 kg × 8,33 SZR/kg = **6.664,00 SZR**
2. 6.664,00 SZR × 1,20 €/SZR = **7.996,80 €**
3. Warenwert 6.000,00 € < 7.996,80 €, daher Entschädigung **6.000,00 €** (Wertersatz nach § 429, nie mehr als der tatsächliche Schaden).`
        },
        {
          id: 'lf04-frachtvertrag-haftung-a11c', type: 'mc', difficulty: 2, points: 2,
          q: 'Wäre der Schaden äußerlich nicht erkennbar gewesen: Bis wann hätte der Empfänger ihn anzeigen müssen?',
          options: ['Sofort bei Ablieferung', 'Innerhalb von 7 Tagen nach Ablieferung', 'Innerhalb von 21 Tagen nach Ablieferung', 'Innerhalb eines Jahres'],
          correct: [1],
          hints: ['§ 438 Abs. 2 HGB.', '21 Tage gelten für Lieferfristüberschreitungen.'],
          solution: '**Innerhalb von 7 Tagen** nach Ablieferung, in Textform (§ 438 Abs. 2 und 4 HGB). Sonst wird vermutet, dass das Gut unbeschädigt abgeliefert wurde.'
        }
      ],
      hints: ['Prüfe zuerst, wer verladen hat.', 'Vergleiche danach Warenwert und Höchstbetrag.'],
      solution: 'Der Frachtführer haftet (Obhutshaftung, kein Ausschluss, weil sein Fahrer verladen hat). Höchstbetrag 7.996,80 €, ersetzt wird der niedrigere Warenwert von 6.000,00 €. Verdeckte Schäden wären binnen 7 Tagen anzuzeigen.'
    }
  ],
  quiz: [
    'lf04-frachtvertrag-haftung-a2',
    'lf04-frachtvertrag-haftung-a4',
    'lf04-frachtvertrag-haftung-a6',
    'lf04-frachtvertrag-haftung-a8',
    'lf04-frachtvertrag-haftung-a9'
  ],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 4, Inhalte: Frachtvertrag, Frachtbrief, Haftung des Frachtführers im Güterkraftverkehr' },
    { title: 'Handelsgesetzbuch § 407 Frachtvertrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__407.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 408 Frachtbrief', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__408.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 412 Verladen und Entladen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__412.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 423 Lieferfrist', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__423.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 425 Haftung für Güter- und Verspätungsschäden', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__425.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 426 Haftungsausschluss', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__426.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 427 Besondere Haftungsausschlussgründe', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__427.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 429 Wertersatz', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__429.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 431 Haftungshöchstbetrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__431.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 435 Wegfall der Haftungsbefreiungen und -begrenzungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__435.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 438 Schadensanzeige', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__438.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 449 Abweichende Vereinbarungen über die Haftung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__449.html', asOf: '2026-10-17' }
  ],
  links: ['lf04-verkehrstraeger-vergleich', 'lf05-sammelgut-ablauf']
};
