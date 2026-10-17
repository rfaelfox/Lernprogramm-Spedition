export default {
  id: 'lf08-stoerungen',
  area: 'LF08',
  topic: 'lf08-stoerungen',
  title: 'Mangelhafte Lieferung und Lieferungsverzug',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Sachmangel § 434 BGB, Rechte des Käufers §§ 437–441 BGB, Verjährung § 438 BGB (regelmäßig 2 Jahre ab Ablieferung), Rügepflicht § 377 HGB, Verzug §§ 286–288 BGB (Verzugszins 9 bzw. 5 Prozentpunkte über dem Basiszinssatz, 40 € Pauschale), Fixhandelskauf § 376 HGB, Annahmeverzug § 293 BGB und § 373 HGB, Stand 2026. Der Basiszinssatz (§ 247 BGB) ändert sich zum 1.1. und 1.7.; in den Aufgaben wird ein Beispielwert verwendet.'
  },
  goals: [
    'Ich kann Mangelarten nach § 434 BGB an Beispielen aus der Beschaffung einer Spedition erkennen.',
    'Ich kann die Untersuchungs- und Rügepflicht beim zweiseitigen Handelskauf (§ 377 HGB) anwenden.',
    'Ich kann die Rechte des Käufers bei mangelhafter Lieferung in der richtigen Rangfolge nennen und eine Minderung berechnen.',
    'Ich kann die Voraussetzungen des Lieferungsverzugs prüfen und erkennen, wann eine Mahnung entbehrlich ist.',
    'Ich kann die Rechte des Käufers beim Lieferungsverzug und beim Fixhandelskauf unterscheiden und einen Verzugsschaden berechnen.',
    'Ich kann Annahmeverzug und Zahlungsverzug in Grundzügen beschreiben und Verzugszinsen berechnen.'
  ],
  simple: `# Worum geht es?

Beim Kaufvertrag hat jede Seite Pflichten (§ 433 BGB): Der **Verkäufer** muss die Ware **mangelfrei und rechtzeitig** liefern, der **Käufer** muss sie **abnehmen und bezahlen**. Wird eine dieser Pflichten verletzt, spricht man von einer **Kaufvertragsstörung**.

# Die vier wichtigsten Störungen

| Störung | Wer ist schuld? | Beispiel aus der Spedition |
|---|---|---|
| **Mangelhafte Lieferung** | Verkäufer | Die gelieferte Stretchfolie reißt, weil sie dünner ist als bestellt. |
| **Lieferungsverzug** | Verkäufer | Die Europaletten kommen nicht zum vereinbarten Termin. |
| **Annahmeverzug** | Käufer | Die Spedition nimmt den bestellten Gabelstapler nicht an. |
| **Zahlungsverzug** | Käufer | Die Spedition bezahlt die Rechnung für Dieselkraftstoff nicht rechtzeitig. |

# Was tun bei mangelhafter Ware?

1. Ware **sofort prüfen** (Kaufleute müssen das, § 377 HGB).
2. Mangel **sofort melden** (Mängelrüge).
3. Zuerst **Nacherfüllung** verlangen: reparieren oder neu liefern.
4. Klappt das nicht: **Rücktritt** oder **Minderung**, ggf. **Schadensersatz**.

# Was tun, wenn die Ware nicht kommt?

Der Lieferer ist im **Verzug**, wenn die Lieferung fällig ist, er **gemahnt** wurde (oder eine Mahnung nicht nötig ist, z. B. bei festem Kalendertermin) und er die Verspätung zu vertreten hat. Dann kann die Spedition weiter Lieferung und Ersatz des Verspätungsschadens verlangen – und nach einer **Nachfrist** vom Vertrag zurücktreten oder Schadensersatz statt der Lieferung fordern.

> Die Grundlagen zum Kaufvertrag findest du in der Einheit „Geschäftsfähigkeit und Kaufvertrag“.`,
  deep: `# 1. Mangelhafte Lieferung (Schlechtleistung)

## Wann ist eine Sache mangelhaft? (§ 434 BGB)

Die Sache ist frei von Sachmängeln, wenn sie bei **Gefahrübergang** drei Anforderungen erfüllt:

| Anforderung | Inhalt | Beispiel Spedition |
|---|---|---|
| **subjektive Anforderungen** (Abs. 2) | vereinbarte Beschaffenheit (u. a. Art, **Menge**, Qualität, Funktionalität), Eignung für die vertraglich vorausgesetzte Verwendung, vereinbartes Zubehör und Anleitungen | Bestellt: Stretchfolie 23 µm, geliefert: 17 µm. Bestellt: 500 Paletten, geliefert: 450. |
| **objektive Anforderungen** (Abs. 3) | Eignung für die gewöhnliche Verwendung, übliche Beschaffenheit, auch nach öffentlichen Äußerungen (Werbung); Übereinstimmung mit Probe/Muster; übliches Zubehör und Anleitungen | Der Werbeprospekt verspricht 8 Stunden Akkulaufzeit für den Elektro-Hubwagen, er hält nur 3 Stunden. |
| **Montageanforderungen** (Abs. 4) | sachgemäße Montage; Mangel bei fehlerhafter Montage durch den Verkäufer oder mangelhafter Montageanleitung | Der Lieferer montiert das Palettenregal falsch, die Traversen sitzen nicht fest. |

Außerdem gilt nach **Abs. 5**: Liefert der Verkäufer eine **andere Sache** als geschuldet (**Falschlieferung**, z. B. Gitterboxen statt Europaletten), steht das einem Sachmangel gleich.

Nach der Erkennbarkeit unterscheidet man **offene Mängel** (bei der Prüfung sofort erkennbar), **versteckte Mängel** (zeigen sich erst später) und **arglistig verschwiegene Mängel** (der Verkäufer kannte sie und hat sie bewusst verschwiegen).

## Untersuchungs- und Rügepflicht (§ 377 HGB)

Beim **zweiseitigen Handelskauf** – der Kauf ist für **beide** Seiten ein Handelsgeschäft, z. B. Spedition (Kaufmann) kauft bei einem Palettenhersteller (Kaufmann) – gilt:

- Der Käufer muss die Ware **unverzüglich nach Ablieferung untersuchen**, soweit das im ordnungsgemäßen Geschäftsgang möglich ist.
- Einen erkennbaren Mangel muss er **unverzüglich anzeigen** (rügen). „Unverzüglich“ heißt **ohne schuldhaftes Zögern** (§ 121 Abs. 1 BGB).
- Zeigt sich ein Mangel erst **später** (versteckter Mangel), muss er **unverzüglich nach der Entdeckung** gerügt werden.
- Wer nicht rechtzeitig rügt, verliert seine Mängelrechte: Die Ware **gilt als genehmigt**.
- Es genügt die **rechtzeitige Absendung** der Rüge.
- Bei **arglistig verschwiegenen** Mängeln kann sich der Verkäufer nicht auf eine verspätete Rüge berufen.

> Beim **bürgerlichen Kauf** oder **einseitigen Handelskauf** gilt § 377 HGB nicht. Der Käufer muss dann nur die Verjährungsfrist beachten.

## Rechte des Käufers (§ 437 BGB)

**Vorrangig: Nacherfüllung (§ 439 BGB)**
- Der **Käufer wählt**: **Nachbesserung** (Mangel beseitigen) oder **Ersatzlieferung** (mangelfreie Sache liefern).
- Der Verkäufer trägt die erforderlichen Kosten (Transport, Arbeit, Material).
- Der Verkäufer kann die gewählte Art verweigern, wenn sie **unverhältnismäßige Kosten** verursacht; dann bleibt die andere Art.
- Der Käufer setzt dem Verkäufer dafür eine **angemessene Frist**.

**Nachrangig (nach erfolglosem Ablauf der Frist):**
- **Rücktritt** vom Vertrag (§§ 440, 323 BGB): Ware zurück, Geld zurück. Ausgeschlossen bei **unerheblicher** Pflichtverletzung (§ 323 Abs. 5 BGB).
- **Minderung** (§ 441 BGB): Herabsetzen des Kaufpreises – auch bei unerheblichen Mängeln möglich.
- **Schadensersatz** (§§ 440, 280, 281 BGB), wenn der Verkäufer den Mangel **zu vertreten** hat, z. B. Kosten für den Ausfall eines Gabelstaplers. Schadensersatz kann **neben** dem Rücktritt verlangt werden.

Die Fristsetzung ist **entbehrlich** (§ 440 BGB, § 323 Abs. 2 BGB), wenn der Verkäufer die Nacherfüllung verweigert, wenn sie **fehlgeschlagen** oder dem Käufer **unzumutbar** ist. Eine Nachbesserung gilt nach dem **zweiten erfolglosen Versuch** als fehlgeschlagen, wenn sich nicht aus den Umständen etwas anderes ergibt.

**Berechnung der Minderung (§ 441 Abs. 3 BGB):**

**geminderter Preis = vereinbarter Preis × Wert mit Mangel ÷ Wert ohne Mangel**

Maßgeblich sind die Werte zur Zeit des Vertragsschlusses; notfalls wird geschätzt.

## Verjährung (§ 438 BGB)

| Fall | Frist | Beginn |
|---|---|---|
| bewegliche Sachen (Regelfall) | **2 Jahre** | mit **Ablieferung** |
| Bauwerke und Baustoffe, die den Mangel eines Bauwerks verursacht haben | 5 Jahre | Ablieferung bzw. Übergabe |
| arglistig verschwiegener Mangel | regelmäßige Verjährungsfrist (bei Bauwerken mindestens 5 Jahre) | – |

# 2. Lieferungsverzug (Nicht-rechtzeitig-Lieferung)

## Voraussetzungen (§ 286 BGB)

1. **Fälligkeit** der Lieferung
2. **Mahnung** nach Fälligkeit (auch Klage oder Mahnbescheid zählen als Mahnung)
3. **Vertretenmüssen**: Der Verkäufer ist nicht im Verzug, solange die Verspätung auf einem Umstand beruht, den er **nicht zu vertreten** hat (§ 286 Abs. 4 BGB), z. B. unvorhersehbare höhere Gewalt.

**Die Mahnung ist entbehrlich (§ 286 Abs. 2 BGB),** wenn
- die Lieferzeit **nach dem Kalender bestimmt** ist („Lieferung am 03.11.2026“, „bis Ende KW 45“),
- die Lieferzeit sich **von einem Ereignis an** nach dem Kalender berechnen lässt („10 Tage nach Abruf“),
- der Verkäufer die Lieferung **ernsthaft und endgültig verweigert**,
- **besondere Gründe** den sofortigen Verzug rechtfertigen.

„Lieferung so bald wie möglich“ oder „Lieferung ab Mitte November“ ist **nicht** kalendermäßig bestimmt – hier muss gemahnt werden.

## Rechte des Käufers

| ohne Nachfrist | nach Ablauf einer angemessenen Nachfrist |
|---|---|
| **Lieferung verlangen** (Vertrag bleibt bestehen) | **Rücktritt** vom Vertrag (§ 323 BGB) – setzt kein Verschulden voraus |
| **und** Ersatz des **Verzögerungsschadens** (§§ 280 Abs. 2, 286 BGB), z. B. Mietkosten für einen Ersatzstapler | **Schadensersatz statt der Leistung** (§§ 280 Abs. 3, 281 BGB), z. B. Mehrkosten eines **Deckungskaufs** bei einem anderen Lieferer |

Rücktritt und Schadensersatz können **kombiniert** werden. Während des Verzugs haftet der Verkäufer verschärft: für **jede Fahrlässigkeit** und sogar für **Zufall**, außer der Schaden wäre auch bei rechtzeitiger Lieferung eingetreten (§ 287 BGB).

## Fixkauf

- **Fixgeschäft (§ 323 Abs. 2 Nr. 2 BGB):** Der Termin ist vertraglich bestimmt **und** für den Käufer – erkennbar für den Verkäufer – **wesentlich**. Dann kann der Käufer **ohne Nachfrist** zurücktreten.
- **Fixhandelskauf (§ 376 HGB):** Beim Handelskauf ist vereinbart, dass genau zu einer festbestimmten Zeit geliefert wird (z. B. „Lieferung am 03.11.2026 fix“). Wird nicht rechtzeitig geliefert, kann der Käufer **sofort zurücktreten** oder, wenn der Verkäufer im Verzug ist, **Schadensersatz wegen Nichterfüllung** verlangen. **Erfüllung** (die Lieferung selbst) kann er nur verlangen, wenn er dem Verkäufer **unverzüglich nach Ablauf der Zeit** mitteilt, dass er darauf besteht.

# 3. Annahmeverzug (kurz)

Der **Käufer** (als Gläubiger der Lieferung) kommt in Annahmeverzug, wenn er die ihm ordnungsgemäß angebotene Ware **nicht annimmt** (§ 293 BGB). Ein Verschulden ist nicht nötig. Beim Handelskauf darf der Verkäufer die Ware auf **Kosten und Gefahr des Käufers** in einem öffentlichen Lagerhaus oder sonst sicher **hinterlegen** und nach vorheriger **Androhung** einen **Selbsthilfeverkauf** (öffentliche Versteigerung; bei Börsen- oder Marktpreis auch freihändiger Verkauf durch einen ermächtigten Handelsmakler) durchführen (§ 373 HGB). Für Speditionen interessant: Sie lagern solche Ware oft im Auftrag des Verkäufers ein.

# 4. Zahlungsverzug (kurz)

Der Käufer kommt mit der Zahlung in Verzug nach **Fälligkeit und Mahnung**, ohne Mahnung bei **kalendermäßig bestimmtem** Zahlungstermin, **spätestens 30 Tage** nach Fälligkeit und Zugang der Rechnung (§ 286 Abs. 3 BGB; gegenüber Verbrauchern nur, wenn die Rechnung darauf hinweist).

Folgen (§ 288 BGB):
- **Verzugszinsen**: **5 Prozentpunkte** über dem Basiszinssatz; bei **Entgeltforderungen ohne Beteiligung eines Verbrauchers** **9 Prozentpunkte** über dem Basiszinssatz.
- **Pauschale von 40 €** gegen Schuldner, die keine Verbraucher sind (wird auf Rechtsverfolgungskosten angerechnet).
- Der Basiszinssatz (§ 247 BGB) wird zum 1. Januar und 1. Juli angepasst und von der Deutschen Bundesbank bekannt gegeben – vor jeder Berechnung den aktuellen Wert nachsehen.

**Verzugszinsen = Betrag × Zinssatz × Tage ÷ 360** (in der Schule meist mit 360 Zinstagen gerechnet).`,
  terms: [
    { term: 'Sachmangel', def: 'Die Sache erfüllt bei Gefahrübergang nicht die subjektiven, objektiven oder Montageanforderungen (§ 434 BGB); eine Falschlieferung steht einem Sachmangel gleich.' },
    { term: 'Zweiseitiger Handelskauf', def: 'Kaufvertrag, der für Käufer und Verkäufer ein Handelsgeschäft ist (beide Kaufleute); dann gilt die Rügepflicht nach § 377 HGB.' },
    { term: 'Mängelrüge', def: 'Anzeige eines Mangels an den Verkäufer; beim zweiseitigen Handelskauf unverzüglich, sonst gilt die Ware als genehmigt.' },
    { term: 'Offener / versteckter Mangel', def: 'Offen: bei ordnungsgemäßer Prüfung sofort erkennbar. Versteckt: zeigt sich erst später, muss dann unverzüglich nach Entdeckung gerügt werden.' },
    { term: 'Nacherfüllung', def: 'Vorrangiges Recht des Käufers: Nachbesserung (Reparatur) oder Ersatzlieferung, nach Wahl des Käufers (§ 439 BGB).' },
    { term: 'Minderung', def: 'Herabsetzen des Kaufpreises im Verhältnis Wert mit Mangel zu Wert ohne Mangel (§ 441 BGB).' },
    { term: 'Rücktritt', def: 'Rückabwicklung des Vertrags: Ware und Geld werden zurückgegeben; bei unerheblichen Mängeln ausgeschlossen (§ 323 Abs. 5 BGB).' },
    { term: 'Lieferungsverzug', def: 'Schuldhafte Nichtlieferung trotz Fälligkeit und Mahnung oder trotz kalendermäßig bestimmter Lieferzeit (§ 286 BGB).' },
    { term: 'Deckungskauf', def: 'Ersatzkauf bei einem anderen Lieferer; die Mehrkosten sind Teil des Schadensersatzes statt der Leistung.' },
    { term: 'Fixhandelskauf', def: 'Handelskauf mit genau festbestimmtem Liefertermin (§ 376 HGB); bei Überschreitung sofortiger Rücktritt, Erfüllung nur bei unverzüglicher Mitteilung.' },
    { term: 'Annahmeverzug', def: 'Der Gläubiger (z. B. Käufer) nimmt die ordnungsgemäß angebotene Leistung nicht an (§ 293 BGB).' },
    { term: 'Verzugszinsen', def: 'Zinsen auf eine verspätet gezahlte Geldschuld: 5 bzw. bei Entgeltforderungen unter Unternehmern 9 Prozentpunkte über dem Basiszinssatz (§ 288 BGB).' }
  ],
  example: `# Zwei Störungen bei der Saar-Trans Spedition GmbH (Beispiel)

**Fall 1: Die dünne Folie.** Am Montag, 05.10.2026, liefert die FolienWerk GmbH 80 Rollen Stretchfolie. Bestellt war eine Stärke von 23 µm. Der Lagermitarbeiter misst bei der Wareneingangskontrolle an zwei Rollen nur 17 µm – beim Umwickeln reißt die Folie. Die Auszubildende Lea schickt **noch am selben Tag** eine Mängelrüge per E-Mail mit Fotos und Messprotokoll.

- Mangelart: Abweichung von der **vereinbarten Beschaffenheit** (subjektive Anforderung, § 434 Abs. 2 BGB), offener Mangel.
- § 377 HGB ist erfüllt: Beide Seiten sind Kaufleute, untersucht und gerügt wurde unverzüglich.
- Saar-Trans verlangt **Ersatzlieferung** innerhalb von 5 Arbeitstagen. Die FolienWerk GmbH liefert rechtzeitig mangelfreie Folie und holt die alte auf eigene Kosten ab. Damit ist der Fall erledigt – Rücktritt oder Minderung kommen nicht mehr in Betracht.

**Fall 2: Die fehlenden Paletten.** Saar-Trans hat 600 Europaletten zu 11,50 € je Stück bestellt, „Lieferung am 03.11.2026“. Am 03.11. kommt nichts; der Lieferer hat den Auftrag schlicht vergessen.

- Fälligkeit: 03.11.2026. Mahnung **entbehrlich**, weil der Termin kalendermäßig bestimmt ist (§ 286 Abs. 2 Nr. 1 BGB). Vertretenmüssen: Vergessen ist fahrlässig. → **Lieferungsverzug ab 04.11.2026.**
- Saar-Trans setzt eine Nachfrist bis 06.11.2026. Auch dann wird nicht geliefert.
- Saar-Trans tritt zurück und kauft die Paletten bei einem anderen Lieferer für 12,40 € je Stück, zuzüglich 120 € Expressfracht (**Deckungskauf**).
- Schadensersatz statt der Leistung: (600 × 12,40 € + 120 €) − 600 × 11,50 € = 7.560 € − 6.900 € = **660 €**.`,
  rules: [
    'Erst prüfen, dann rügen: Beim zweiseitigen Handelskauf unverzüglich untersuchen und Mängel unverzüglich anzeigen – sonst gilt die Ware als genehmigt.',
    'Nacherfüllung zuerst: Der Käufer wählt Nachbesserung oder Ersatzlieferung und setzt eine angemessene Frist.',
    'Erst nach erfolgloser Frist: Rücktritt (nicht bei unerheblichem Mangel) oder Minderung, bei Verschulden zusätzlich Schadensersatz.',
    'Mängelansprüche bei beweglichen Sachen verjähren in der Regel 2 Jahre nach Ablieferung.',
    'Lieferungsverzug = Fälligkeit + Mahnung (oder entbehrlich) + Vertretenmüssen.',
    'Kalendermäßig bestimmter Termin = keine Mahnung nötig; „so bald wie möglich“ = Mahnung nötig.',
    'Rücktritt und Schadensersatz statt der Leistung erst nach erfolgloser Nachfrist – beim Fixhandelskauf sofort.',
    'Beim Fixhandelskauf muss man unverzüglich mitteilen, wenn man trotzdem noch Lieferung will.'
  ],
  summary: `- **Mangelarten (§ 434 BGB)**: Abweichung von subjektiven Anforderungen (vereinbarte Beschaffenheit, Menge, Verwendung, Zubehör), objektiven Anforderungen (übliche Beschaffenheit, Werbung, Muster) und Montageanforderungen; Falschlieferung steht gleich.
- **§ 377 HGB**: zweiseitiger Handelskauf → unverzüglich untersuchen und rügen, versteckte Mängel unverzüglich nach Entdeckung.
- **Rechte (§ 437 BGB)**: 1. Nacherfüllung (Käufer wählt) → 2. Rücktritt oder Minderung, ggf. Schadensersatz.
- **Minderung**: Preis × Wert mit Mangel ÷ Wert ohne Mangel.
- **Verjährung**: 2 Jahre ab Ablieferung (Regelfall).
- **Lieferungsverzug (§ 286 BGB)**: Fälligkeit, Mahnung (entbehrlich bei Kalendertermin), Vertretenmüssen → Lieferung + Verzögerungsschaden; nach Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung.
- **Fixhandelskauf (§ 376 HGB)**: sofortiger Rücktritt; Erfüllung nur bei unverzüglicher Mitteilung.
- **Annahmeverzug**: Hinterlegung und Selbsthilfeverkauf (§ 373 HGB). **Zahlungsverzug**: Verzugszinsen 9 bzw. 5 Prozentpunkte über Basiszinssatz, 40 € Pauschale.`,
  mistakes: [
    { wrong: 'Bei mangelhafter Ware kann die Spedition sofort vom Vertrag zurücktreten.', right: 'Zuerst muss dem Verkäufer Gelegenheit zur Nacherfüllung mit angemessener Frist gegeben werden; Rücktritt erst danach (Ausnahmen: Verweigerung, Fehlschlagen, Unzumutbarkeit).' },
    { wrong: 'Der Verkäufer entscheidet, ob repariert oder neu geliefert wird.', right: 'Der Käufer wählt die Art der Nacherfüllung (§ 439 Abs. 1 BGB); der Verkäufer kann nur bei unverhältnismäßigen Kosten verweigern.' },
    { wrong: 'Man hat zwei Jahre Zeit, um einen Mangel zu rügen.', right: 'Beim zweiseitigen Handelskauf muss unverzüglich gerügt werden (§ 377 HGB). Die zwei Jahre betreffen die Verjährung der Ansprüche.' },
    { wrong: 'Wenn der Lieferer zu spät liefert, ist er immer automatisch im Verzug.', right: 'Ohne kalendermäßig bestimmten Termin muss er erst gemahnt werden, und er muss die Verspätung zu vertreten haben.' },
    { wrong: 'Eine falsche Ware (Gitterboxen statt Paletten) ist kein Mangel, sondern gar keine Lieferung.', right: 'Die Falschlieferung steht einem Sachmangel gleich (§ 434 Abs. 5 BGB); es gelten die Mängelrechte.' },
    { wrong: 'Beim Fixhandelskauf kann der Käufer jederzeit später noch auf Lieferung bestehen.', right: 'Erfüllung kann er nur verlangen, wenn er unverzüglich nach Ablauf der Lieferzeit mitteilt, dass er darauf besteht (§ 376 HGB).' }
  ],
  flashcards: [
    { q: 'Welche drei Anforderungen muss eine Sache nach § 434 BGB erfüllen?', a: 'Subjektive Anforderungen, objektive Anforderungen und Montageanforderungen – jeweils bei Gefahrübergang.' },
    { q: 'Was verlangt § 377 HGB vom Käufer?', a: 'Beim zweiseitigen Handelskauf: Ware unverzüglich untersuchen und Mängel unverzüglich rügen; sonst gilt die Ware als genehmigt.' },
    { q: 'Was bedeutet „unverzüglich“?', a: 'Ohne schuldhaftes Zögern (§ 121 Abs. 1 BGB).' },
    { q: 'Welches Recht hat bei Mängeln Vorrang?', a: 'Die Nacherfüllung: Nachbesserung oder Ersatzlieferung nach Wahl des Käufers.' },
    { q: 'Wann gilt eine Nachbesserung als fehlgeschlagen?', a: 'In der Regel nach dem zweiten erfolglosen Versuch (§ 440 BGB).' },
    { q: 'Wie berechnet man den geminderten Kaufpreis?', a: 'Vereinbarter Preis × Wert mit Mangel ÷ Wert ohne Mangel (§ 441 Abs. 3 BGB).' },
    { q: 'Wann verjähren Mängelansprüche beim Kauf eines Gabelstaplers?', a: 'In der Regel 2 Jahre nach Ablieferung (§ 438 BGB).' },
    { q: 'Voraussetzungen des Lieferungsverzugs?', a: 'Fälligkeit, Mahnung (oder entbehrlich) und Vertretenmüssen des Verkäufers (§ 286 BGB).' },
    { q: 'Wann ist eine Mahnung entbehrlich?', a: 'Bei kalendermäßig bestimmter Leistungszeit, bei Frist ab einem Ereignis, bei ernsthafter und endgültiger Verweigerung, bei besonderen Gründen.' },
    { q: 'Wie hoch sind Verzugszinsen bei einer Rechnung zwischen zwei Unternehmen?', a: '9 Prozentpunkte über dem Basiszinssatz, zusätzlich 40 € Pauschale (§ 288 BGB).' },
    { q: 'Was darf der Verkäufer beim Annahmeverzug des Käufers im Handelskauf tun?', a: 'Ware auf Kosten und Gefahr des Käufers hinterlegen und nach Androhung einen Selbsthilfeverkauf durchführen (§ 373 HGB).' }
  ],
  tasks: [
    {
      id: 'lf08-stoerungen-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Fälle aus dem Wareneingang der Saar-Trans Spedition GmbH der passenden Mangelart zu.',
      pairs: [
        ['Statt 500 bestellter Europaletten werden nur 450 geliefert.', 'Abweichung in der vereinbarten Menge (subjektive Anforderung)'],
        ['Statt Europaletten werden Gitterboxen geliefert.', 'Falschlieferung (steht einem Sachmangel gleich)'],
        ['Der Lieferer baut das Palettenregal falsch zusammen.', 'Montagemangel'],
        ['Der Prospekt verspricht 8 Stunden Akkulaufzeit, der Hubwagen schafft 3 Stunden.', 'Abweichung von der üblichen Beschaffenheit nach öffentlichen Äußerungen (objektive Anforderung)']
      ],
      hints: ['Die Menge gehört nach § 434 Abs. 2 BGB zur vereinbarten Beschaffenheit.', 'Werbeaussagen sind öffentliche Äußerungen im Sinne von § 434 Abs. 3 BGB.'],
      solution: 'Zu wenig Paletten = Abweichung von der vereinbarten **Menge** (§ 434 Abs. 2 BGB). Gitterboxen = **Falschlieferung** (§ 434 Abs. 5 BGB). Falsch montiertes Regal = **Montagemangel** (§ 434 Abs. 4 BGB). Akkulaufzeit laut Prospekt = **objektive Anforderung**, weil der Käufer die beworbene Beschaffenheit erwarten darf (§ 434 Abs. 3 BGB).'
    },
    {
      id: 'lf08-stoerungen-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zur Untersuchungs- und Rügepflicht nach § 377 HGB sind **richtig**? (Mehrfachauswahl)',
      options: [
        'Sie gilt, wenn der Kauf für beide Vertragspartner ein Handelsgeschäft ist.',
        'Offene Mängel müssen unverzüglich nach der Untersuchung angezeigt werden.',
        'Versteckte Mängel müssen unverzüglich nach ihrer Entdeckung angezeigt werden.',
        'Die Rüge ist nur rechtzeitig, wenn sie innerhalb der Frist beim Verkäufer ankommt.',
        'Sie gilt auch, wenn der Auszubildende privat bei einem Händler einen Laptop kauft.'
      ],
      correct: [0, 1, 2],
      hints: ['Wer muss Kaufmann sein, damit § 377 HGB gilt?', 'Lies in der Erklärung nach, was zur Absendung der Anzeige gesagt wird.'],
      solution: 'Richtig sind A, B und C. § 377 HGB gilt nur beim **zweiseitigen Handelskauf**. Offene Mängel sind unverzüglich nach der Untersuchung, versteckte unverzüglich nach Entdeckung zu rügen. D ist falsch: Es genügt die **rechtzeitige Absendung** (§ 377 Abs. 4 HGB). E ist falsch: Ein Privatkauf ist für den Käufer kein Handelsgeschäft.'
    },
    {
      id: 'lf08-stoerungen-a3', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe das Vorgehen der Spedition bei einem mangelhaften Gabelstapler in die richtige Reihenfolge.',
      items: [
        'Stapler bei Ablieferung untersuchen',
        'Mangel dokumentieren (Fotos, Protokoll)',
        'Mangel unverzüglich beim Verkäufer rügen',
        'Nacherfüllung verlangen und angemessene Frist setzen',
        'Nach erfolglosem Fristablauf Rücktritt oder Minderung erklären, ggf. Schadensersatz verlangen'
      ],
      hints: ['Ohne Untersuchung kann man keinen Mangel feststellen.', 'Rücktritt und Minderung sind nachrangige Rechte.'],
      solution: 'Untersuchen → dokumentieren → unverzüglich rügen (§ 377 HGB) → Nacherfüllung mit Frist (§ 439 BGB) → erst danach Rücktritt oder Minderung, bei Verschulden zusätzlich Schadensersatz (§§ 437, 440, 323, 441, 281 BGB).'
    },
    {
      id: 'lf08-stoerungen-a4', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Spedition hat eine Waage für die Paletten-Annahme gekauft, die falsch wiegt. Der Verkäufer will sie zurückschicken lassen und reparieren, die Spedition möchte sofort eine neue Waage. Wer entscheidet über die Art der Nacherfüllung?',
      options: [
        'Der Verkäufer, weil er die Kosten trägt.',
        'Der Käufer; der Verkäufer kann die Ersatzlieferung nur bei unverhältnismäßigen Kosten verweigern.',
        'Ein Gericht, weil sich beide nicht einigen.',
        'Niemand – der Käufer muss sofort vom Vertrag zurücktreten.'
      ],
      correct: [1],
      hints: ['Lies § 439 Abs. 1 BGB: „nach seiner Wahl“.', 'Es gibt eine Ausnahme bei sehr hohen Kosten (§ 439 Abs. 4 BGB).'],
      solution: 'Richtig ist B. Nach § 439 Abs. 1 BGB wählt der **Käufer** zwischen Nachbesserung und Ersatzlieferung. Der Verkäufer kann die gewählte Art nur verweigern, wenn sie unverhältnismäßige Kosten verursacht (§ 439 Abs. 4 BGB); dann bleibt die andere Art. Rücktritt kommt erst nach erfolgloser Nacherfüllung in Betracht.'
    },
    {
      id: 'lf08-stoerungen-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Die Bliesgau Logistik e.K. kauft einen gebrauchten Gabelstapler für **24.000 €**. Ohne Mangel wäre er **25.000 €** wert, mit dem festgestellten Hubmastschaden nur **22.500 €**. Die Nachbesserung ist zweimal fehlgeschlagen; die Spedition behält den Stapler und mindert (Beispielwerte). Berechne den geminderten Kaufpreis und den Minderungsbetrag.',
      formula: 'geminderter Preis = vereinbarter Preis × Wert mit Mangel ÷ Wert ohne Mangel',
      fields: [
        { id: 'verh', label: 'Verhältnis Wert mit Mangel ÷ Wert ohne Mangel', unit: '%', answer: 90, tol: 0.1 },
        { id: 'preis', label: 'geminderter Kaufpreis', unit: '€', answer: 21600, tol: 0.01 },
        { id: 'minderung', label: 'Minderungsbetrag', unit: '€', answer: 2400, tol: 0.01 }
      ],
      hints: ['Der Kaufpreis wird im gleichen Verhältnis gesenkt, in dem der Wert durch den Mangel sinkt.', 'Nicht einfach 25.000 € − 22.500 € vom Kaufpreis abziehen.'],
      solution: `**Formel (§ 441 Abs. 3 BGB):** geminderter Preis = vereinbarter Preis × Wert mit Mangel ÷ Wert ohne Mangel

**Verhältnis:** 22.500 € ÷ 25.000 € = 0,9 = **90 %**

**Geminderter Preis:** 24.000 € × 0,9 = **21.600 €**

**Minderungsbetrag:** 24.000 € − 21.600 € = **2.400 €**

Hinweis: Der Wertverlust beträgt 2.500 €, die Minderung aber nur 2.400 €, weil die Spedition schon unter dem Wert (24.000 € statt 25.000 €) gekauft hatte – dieser Vorteil bleibt ihr erhalten.`
    },
    {
      id: 'lf08-stoerungen-a6', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Lieferungsverzug setzt voraus: die Lieferung ist [[fällig]], der Käufer hat [[gemahnt|eine Mahnung geschickt]] und der Verkäufer hat die Verspätung zu [[vertreten]]. Ist der Liefertermin nach dem [[Kalender]] bestimmt, ist keine Mahnung nötig. Mängelansprüche bei beweglichen Sachen verjähren in der Regel nach [[2|zwei]] Jahren ab Ablieferung.',
      hints: ['Drei Voraussetzungen nach § 286 BGB.', 'Die Verjährung nach § 438 BGB ist im Regelfall kurz.'],
      solution: 'Verzug: **fällig**, **gemahnt** (§ 286 Abs. 1 BGB), Verspätung zu **vertreten** (§ 286 Abs. 4 BGB). Bei einem nach dem **Kalender** bestimmten Termin ist die Mahnung entbehrlich (§ 286 Abs. 2 Nr. 1 BGB). Verjährung im Regelfall **2 Jahre** ab Ablieferung (§ 438 Abs. 1 Nr. 3, Abs. 2 BGB).'
    },
    {
      id: 'lf08-stoerungen-a7', type: 'mc', difficulty: 2, points: 3,
      q: 'Bei welchen Lieferzeitvereinbarungen kommt der Lieferer **ohne Mahnung** in Verzug, wenn er nicht rechtzeitig liefert? (Mehrfachauswahl)',
      options: [
        '„Lieferung am 12.11.2026“',
        '„Lieferung so schnell wie möglich“',
        '„Lieferung 10 Tage nach Abruf“ – die Spedition ruft am 02.11. ab',
        '„Lieferung voraussichtlich im November“',
        'Der Lieferer schreibt: „Wir werden die Paletten auf keinen Fall liefern.“'
      ],
      correct: [0, 2, 4],
      hints: ['Kann man den letzten Liefertag sicher im Kalender ankreuzen?', 'Auch eine endgültige Weigerung macht die Mahnung überflüssig.'],
      solution: 'Ohne Mahnung: **A** (kalendermäßig bestimmt, § 286 Abs. 2 Nr. 1 BGB), **C** (Frist ab einem Ereignis berechenbar, Nr. 2), **E** (ernsthafte und endgültige Verweigerung, Nr. 3). Bei B und D lässt sich kein bestimmter Tag ermitteln – hier muss die Spedition mahnen.'
    },
    {
      id: 'lf08-stoerungen-a8', type: 'mc', difficulty: 2, points: 1,
      q: 'Der Lieferer einer Regalanlage ist seit einer Woche in Verzug. Die Spedition muss für diese Zeit ein Außenlager anmieten. Was kann sie **ohne** Nachfristsetzung verlangen?',
      options: [
        'Nur den Rücktritt vom Vertrag.',
        'Lieferung der Regalanlage und Ersatz der Mietkosten als Verzögerungsschaden.',
        'Schadensersatz statt der Leistung für einen Deckungskauf.',
        'Nichts, solange keine Nachfrist abgelaufen ist.'
      ],
      correct: [1],
      hints: ['Welche Rechte setzen eine Nachfrist voraus, welche nicht?', 'Der Vertrag bleibt bestehen, wenn die Spedition weiter Lieferung will.'],
      solution: 'Richtig ist B. Neben der Lieferung kann der Käufer den **Verzögerungsschaden** verlangen (§§ 280 Abs. 1 und 2, 286 BGB) – hier die Mietkosten für das Außenlager. **Rücktritt** (§ 323 BGB) und **Schadensersatz statt der Leistung** (§ 281 BGB) setzen dagegen grundsätzlich den erfolglosen Ablauf einer angemessenen Nachfrist voraus.'
    },
    {
      id: 'lf08-stoerungen-a9', type: 'calc', difficulty: 3, points: 3,
      q: 'Die Spedition Hochwald Logistik e.K. hat einer Tankstellenkette eine Rechnung über **8.400,00 €** für Transportleistungen gestellt. Die Kundin (ein Unternehmen) zahlt **45 Tage** zu spät. Angenommener Basiszinssatz: **2,00 %** (Beispielwert – aktuellen Wert bei der Deutschen Bundesbank nachsehen). Berechne Verzugszinsen (360 Zinstage) und die Gesamtforderung aus Zinsen und Pauschale.',
      formula: 'Verzugszinsen = Betrag × (Basiszinssatz + 9 Prozentpunkte) × Tage ÷ 360; Gesamtforderung = Zinsen + 40 € Pauschale',
      fields: [
        { id: 'satz', label: 'Verzugszinssatz', unit: '%', answer: 11, tol: 0 },
        { id: 'zins', label: 'Verzugszinsen', unit: '€', answer: 115.5, tol: 0.01 },
        { id: 'gesamt', label: 'Zinsen + Pauschale', unit: '€', answer: 155.5, tol: 0.01 }
      ],
      hints: ['Es handelt sich um eine Entgeltforderung, an der kein Verbraucher beteiligt ist.', 'Die Pauschale nach § 288 Abs. 5 BGB beträgt 40 €.'],
      solution: `**Zinssatz (§ 288 Abs. 2 BGB):** 2,00 % + 9 Prozentpunkte = **11 %**

**Verzugszinsen:** 8.400,00 € × 0,11 × 45 ÷ 360 = **115,50 €**

**Pauschale (§ 288 Abs. 5 BGB):** 40,00 €

**Gesamt:** 115,50 € + 40,00 € = **155,50 €**

Die Pauschale wird auf einen Schadensersatz angerechnet, soweit dieser Rechtsverfolgungskosten betrifft (z. B. Anwaltskosten).`
    },
    {
      id: 'lf08-stoerungen-a10', type: 'text', difficulty: 3, points: 3,
      q: 'Erkläre den Unterschied zwischen einem „normalen“ Liefertermin und einem **Fixhandelskauf** nach § 376 HGB. Was muss die Spedition beim Fixhandelskauf beachten, wenn sie die Ware trotz Verspätung noch haben will?',
      model: 'Bei einem normalen Liefertermin kann die Spedition erst nach Ablauf einer angemessenen Nachfrist zurücktreten oder Schadensersatz statt der Leistung verlangen. Beim Fixhandelskauf ist vereinbart, dass genau zu einer festbestimmten Zeit geliefert wird, z. B. „am 03.11. fix“. Wird nicht rechtzeitig geliefert, kann die Spedition sofort ohne Nachfrist zurücktreten oder bei Verzug Schadensersatz wegen Nichterfüllung verlangen. Will sie die Ware trotzdem noch, muss sie dem Verkäufer unverzüglich nach Ablauf der Lieferzeit mitteilen, dass sie auf Erfüllung besteht.',
      criteria: [
        { text: 'nennt Nachfrist beim normalen Termin', keywords: ['Nachfrist|Frist'], points: 1 },
        { text: 'nennt sofortigen Rücktritt ohne Nachfrist beim Fixhandelskauf', keywords: ['sofort|ohne Nachfrist|ohne Frist', 'Rücktritt|zurücktreten'], points: 1 },
        { text: 'nennt unverzügliche Mitteilung, um Erfüllung zu verlangen', keywords: ['unverzüglich', 'Erfüllung|besteht|Lieferung'], points: 1 }
      ],
      hints: ['Denke an die Nachfrist beim normalen Verzug.', 'Was sagt § 376 Abs. 1 Satz 2 HGB zur Erfüllung?'],
      solution: 'Normaler Termin: Rücktritt/Schadensersatz statt der Leistung erst nach **Nachfrist** (§§ 323, 281 BGB). Fixhandelskauf (§ 376 HGB): **sofortiger Rücktritt**, bei Verzug Schadensersatz wegen Nichterfüllung. Erfüllung nur, wenn die Spedition **unverzüglich nach Ablauf der Zeit** mitteilt, dass sie darauf besteht.'
    },
    {
      id: 'lf08-stoerungen-a11', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne der Kaufvertragsstörung die typische Rechtsfolge zu.',
      pairs: [
        ['Mangelhafte Lieferung', 'Vorrangig Nacherfüllung: Nachbesserung oder Ersatzlieferung'],
        ['Lieferungsverzug', 'Lieferung und Verzögerungsschaden, nach Nachfrist Rücktritt oder Schadensersatz statt der Leistung'],
        ['Annahmeverzug beim Handelskauf', 'Hinterlegung und nach Androhung Selbsthilfeverkauf'],
        ['Zahlungsverzug unter Unternehmern', 'Verzugszinsen 9 Prozentpunkte über dem Basiszinssatz und 40 € Pauschale']
      ],
      hints: ['Zwei Störungen gehen vom Verkäufer aus, zwei vom Käufer.', 'Der Selbsthilfeverkauf ist in § 373 HGB geregelt.'],
      solution: 'Mangel → Nacherfüllung (§ 439 BGB); Lieferungsverzug → §§ 280, 281, 286, 323 BGB; Annahmeverzug → § 373 HGB; Zahlungsverzug → § 288 BGB.'
    },
    {
      id: 'lf08-stoerungen-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Die vergessenen Europaletten',
      intro: `Die Saar-Trans Spedition GmbH (Kaufmann) bestellt bei der Palettenwerk Pfalz GmbH **600 neue Europaletten zu 11,50 €** je Stück netto, „Lieferung am 03.11.2026“. Am 03.11. wird nicht geliefert, weil der Verkäufer den Auftrag vergessen hat. Saar-Trans setzt am 04.11. schriftlich eine Nachfrist bis 06.11.2026. Auch bis dahin wird nicht geliefert. Saar-Trans kauft die Paletten daraufhin bei einem anderen Händler für **12,40 €** je Stück netto, zuzüglich **120,00 €** Expressfracht (Beispielwerte).`,
      hints: ['Prüfe zuerst die drei Voraussetzungen des Verzugs.', 'Der Schaden ist die Differenz zwischen Deckungskauf und ursprünglich vereinbartem Preis.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf08-stoerungen-a12-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen zum Verzug des Palettenwerks sind **richtig**? (Mehrfachauswahl)',
          options: [
            'Das Palettenwerk ist ab dem 04.11.2026 ohne Mahnung im Verzug.',
            'Ein Verzug liegt nicht vor, weil Saar-Trans nicht gemahnt hat.',
            'Das Vergessen des Auftrags hat das Palettenwerk zu vertreten.',
            'Ein Verzug liegt nicht vor, weil das Palettenwerk nicht absichtlich gehandelt hat.'
          ],
          correct: [0, 2],
          hints: ['Der Termin ist ein konkretes Kalenderdatum.', 'Zu vertreten sind Vorsatz und Fahrlässigkeit.'],
          solution: 'Richtig sind A und C. Der Termin ist **kalendermäßig bestimmt**, die Mahnung ist entbehrlich (§ 286 Abs. 2 Nr. 1 BGB). Vergessen ist **fahrlässig**; der Schuldner hat Vorsatz und Fahrlässigkeit zu vertreten. Absicht ist nicht erforderlich.'
        },
        {
          id: 'lf08-stoerungen-a12-2', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Rechte hat Saar-Trans nach Ablauf der Nachfrist am 06.11.2026? (Mehrfachauswahl)',
          options: [
            'Rücktritt vom Vertrag',
            'Schadensersatz statt der Leistung, z. B. Mehrkosten eines Deckungskaufs',
            'Minderung des Kaufpreises',
            'Weiterhin Lieferung verlangen'
          ],
          correct: [0, 1, 3],
          hints: ['Minderung ist ein Recht bei mangelhafter Lieferung.', 'Nach erfolgloser Nachfrist stehen die Rechte nebeneinander zur Wahl.'],
          solution: 'Richtig sind A, B und D. Nach erfolgloser Nachfrist kann Saar-Trans **zurücktreten** (§ 323 BGB) und **Schadensersatz statt der Leistung** verlangen (§§ 280 Abs. 3, 281 BGB) – beides lässt sich kombinieren. Solange sie keinen Schadensersatz statt der Leistung verlangt hat, kann sie auch weiterhin **Lieferung** fordern. **Minderung** gibt es nur bei Sachmängeln.'
        },
        {
          id: 'lf08-stoerungen-a12-3', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne den Schaden aus dem Deckungskauf.',
          formula: 'Schaden = (Menge × Preis Deckungskauf + Mehrfracht) − Menge × vereinbarter Preis',
          fields: [
            { id: 'vereinbart', label: 'Ursprünglich vereinbarter Preis', unit: '€', answer: 6900, tol: 0.01 },
            { id: 'deckung', label: 'Kosten des Deckungskaufs inkl. Expressfracht', unit: '€', answer: 7560, tol: 0.01 },
            { id: 'schaden', label: 'Schaden', unit: '€', answer: 660, tol: 0.01 }
          ],
          hints: ['600 × 11,50 € und 600 × 12,40 €.', 'Die Expressfracht wäre ohne den Verzug nicht angefallen.'],
          solution: `**Vereinbarter Preis:** 600 × 11,50 € = **6.900,00 €**

**Deckungskauf:** 600 × 12,40 € = 7.440,00 € + 120,00 € Expressfracht = **7.560,00 €**

**Schaden:** 7.560,00 € − 6.900,00 € = **660,00 €**

Diesen Betrag kann Saar-Trans als Schadensersatz statt der Leistung vom Palettenwerk verlangen (§§ 280, 281 BGB).`
        }
      ]
    },
    {
      id: 'lf08-stoerungen-a13', type: 'case', difficulty: 3, points: 4,
      q: 'Fall: Die zu spät geprüfte Folie',
      intro: `Die Bliesgau Logistik e.K. erhält am **02.10.2026** von der FolienWerk GmbH 80 Rollen Stretchfolie. Die Kartons werden ungeöffnet ins Lager gestellt. Erst am **20.10.2026** stellt ein Lagermitarbeiter beim ersten Einsatz fest, dass auf allen Rollen statt der bestellten 23 µm nur 17 µm aufgedruckt sind und die Folie ständig reißt. Bliesgau Logistik rügt noch am selben Tag.`,
      hints: ['Hätte man den Mangel bei einer Prüfung am Wareneingang erkennen können?', 'Was ist die Folge einer verspäteten Rüge beim zweiseitigen Handelskauf?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf08-stoerungen-a13-1', type: 'mc', difficulty: 3, points: 2,
          q: 'Wie ist die Rechtslage?',
          options: [
            'Die Rüge ist rechtzeitig, weil sie am Tag der Entdeckung erfolgte.',
            'Die Rüge ist verspätet, weil es sich um einen offenen Mangel handelt, der bei unverzüglicher Untersuchung erkennbar gewesen wäre; die Ware gilt als genehmigt.',
            'Die Rüge ist rechtzeitig, weil man zwei Jahre Zeit hat.',
            '§ 377 HGB gilt hier nicht, weil Bliesgau Logistik ein Einzelunternehmen ist.'
          ],
          correct: [1],
          hints: ['Der Aufdruck „17 µm“ war schon beim Öffnen eines Kartons sichtbar.', 'Auch ein eingetragener Kaufmann (e.K.) ist Kaufmann.'],
          solution: 'Richtig ist B. Der Mangel war bei einer Stichprobe am Wareneingang **erkennbar** (Aufdruck auf der Rolle) – also ein **offener Mangel**. Bliesgau hätte unverzüglich nach dem 02.10. untersuchen und rügen müssen. Die Rüge am 20.10. ist verspätet, die Ware **gilt als genehmigt** (§ 377 Abs. 2 HGB). Die zwei Jahre (§ 438 BGB) betreffen die Verjährung, nicht die Rügefrist. Ein e.K. ist Kaufmann, der Kauf ist ein zweiseitiger Handelskauf.'
        },
        {
          id: 'lf08-stoerungen-a13-2', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Maßnahmen verhindern solche Fälle künftig? (Mehrfachauswahl)',
          options: [
            'Wareneingangskontrolle mit Stichproben direkt bei Anlieferung',
            'Abgleich von Lieferschein und Bestellung (Art, Menge, Spezifikation)',
            'Kartons erst bei Bedarf öffnen, um Zeit zu sparen',
            'Feste Regel: Mängel sofort mit Fotos dokumentieren und noch am selben Tag rügen'
          ],
          correct: [0, 1, 3],
          hints: ['§ 377 HGB verlangt eine Untersuchung im ordnungsgemäßen Geschäftsgang.', 'Was hat im Fall zum Verlust der Rechte geführt?'],
          solution: 'Richtig sind A, B und D. Eine **unverzügliche Wareneingangskontrolle** mit Stichproben, der **Abgleich mit der Bestellung** und eine **sofortige, dokumentierte Rüge** sichern die Mängelrechte. Kartons ungeprüft einzulagern (C) hat im Fall gerade zum Verlust der Rechte geführt.'
        }
      ]
    }
  ],
  quiz: ['lf08-stoerungen-a2', 'lf08-stoerungen-a5', 'lf08-stoerungen-a7', 'lf08-stoerungen-a8', 'lf08-stoerungen-a12'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 8, Inhalte: Sachmangel, Schlechtleistung; Lieferungsverzug' },
    { id: 'saar-wiso-2016', ref: 'W4' },
    { title: 'Bürgerliches Gesetzbuch § 434 Sachmangel', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__434.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 437 Rechte des Käufers bei Mängeln', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__437.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 438 Verjährung der Mängelansprüche', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__438.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 439 Nacherfüllung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__439.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 440 Besondere Bestimmungen für Rücktritt und Schadensersatz', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__440.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 441 Minderung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__441.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 323 Rücktritt wegen nicht oder nicht vertragsgemäß erbrachter Leistung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__323.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 280 Schadensersatz wegen Pflichtverletzung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__280.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 281 Schadensersatz statt der Leistung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__281.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 286 Verzug des Schuldners', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__286.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 287 Verantwortlichkeit während des Verzugs', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__287.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 288 Verzugszinsen und sonstiger Verzugsschaden', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__288.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 247 Basiszinssatz', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__247.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 293 Annahmeverzug', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__293.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 121 Anfechtungsfrist (Begriff „unverzüglich“)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__121.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 373 Annahmeverzug des Käufers', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__373.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 376 Fixhandelskauf', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__376.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 377 Untersuchungs- und Rügepflicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__377.html', asOf: '2026' }
  ],
  links: ['wiso-kaufvertrag', 'lf08-angebotsvergleich', 'lf08-finanzierung']
};
