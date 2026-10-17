export default {
  id: 'lf11-versandverfahren',
  area: 'LF11',
  topic: 'lf11-versandverfahren',
  title: 'Versandverfahren: Unionsversand, NCTS und Carnets',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026-10',
    note: 'Unionsversandverfahren nach Art. 226–236 Unionszollkodex (UZK, VO (EU) Nr. 952/2013) mit UZK-DA (VO (EU) 2015/2446) und UZK-IA (VO (EU) 2015/2447); gemeinsames Versandverfahren nach dem Übereinkommen über ein gemeinsames Versandverfahren. Vertragsparteien laut zoll.de (abgerufen Oktober 2026): EU, Island, Norwegen, Schweiz (mit Liechtenstein), Türkei, Nordmazedonien, Serbien, Vereinigtes Königreich, Ukraine, Georgien, Moldau, Montenegro. Elektronische Abwicklung in Deutschland über ATLAS-Versand (NCTS-Standard). Sicherheitstitel laut zoll.de über je 10.000 €. Carnet ATA laut zoll.de bis zu einem Jahr gültig, von der IHK ausgestellt. Stand Oktober 2026.'
  },
  goals: [
    'Ich kann erklären, wozu ein Versandverfahren dient und warum dabei keine Einfuhrabgaben erhoben werden.',
    'Ich kann entscheiden, ob eine Sendung im Verfahren T1 oder T2 befördert wird.',
    'Ich kann die Aufgaben von Abgangs-, Durchgangs- und Bestimmungszollstelle beschreiben.',
    'Ich kann den Ablauf eines Versandvorgangs in NCTS/ATLAS-Versand in die richtige Reihenfolge bringen.',
    'Ich kann begründen, warum eine Sicherheit zu leisten ist, und ihre Höhe überschlägig berechnen.',
    'Ich kann Carnet TIR und Carnet ATA voneinander und vom Unionsversand abgrenzen.'
  ],
  simple: `# Worum geht es?

Ein Container mit Fahrradteilen aus China kommt im Hafen Antwerpen an. Der Empfänger sitzt in Saarbrücken und möchte die Ware erst **dort** verzollen. Damit die Ware von Antwerpen nach Saarbrücken fahren darf, **ohne** dass schon in Belgien Zoll und Einfuhrumsatzsteuer bezahlt werden, gibt es das **Versandverfahren** (auch *Transit* genannt).

Die Idee: Die Ware fährt **unter Zollaufsicht** von einer Zollstelle zur anderen. Die Abgaben werden **ausgesetzt**, bis die Ware am Ziel ist und dort in ein anderes Zollverfahren kommt (z. B. Überlassung zum zollrechtlich freien Verkehr).

# Die drei wichtigsten Zollstellen

1. **Abgangszollstelle**: Hier beginnt der Versand. Die Versandanmeldung wird angenommen, die Ware wird ggf. verplombt.
2. **Durchgangszollstelle**: nur, wenn die Sendung unterwegs die Grenze zu einem anderen Vertragsland überquert (z. B. Schweiz).
3. **Bestimmungszollstelle**: Hier endet der Versand. Die Ware muss **unverändert** und **innerhalb der Frist** gestellt werden.

# T1 oder T2?

- **T1** (externes Versandverfahren): für **Nicht-Unionswaren**, also Waren, die noch nicht verzollt sind – z. B. Ware aus China.
- **T2** (internes Versandverfahren): für **Unionswaren**, die auf dem Weg von einem EU-Ort zum anderen ein Drittland durchqueren – z. B. von München über die Schweiz nach Mailand.

# Warum eine Sicherheit?

Wenn die Ware unterwegs „verschwindet“, entgehen dem Staat Zoll und Einfuhrumsatzsteuer. Deshalb muss der **Inhaber des Verfahrens** (oft der Spediteur) eine **Sicherheit** leisten – grundsätzlich gilt: **kein Versandverfahren ohne Sicherheit**.`,
  deep: `# Rechtsrahmen

| Verfahren | Rechtsgrundlage | Gebiet |
|---|---|---|
| **Unionsversandverfahren** | Art. 226–236 UZK, UZK-DA, UZK-IA | zwischen zwei Orten im Zollgebiet der Union |
| **Gemeinsames Versandverfahren** | Übereinkommen über ein gemeinsames Versandverfahren | zwischen EU und den Vertragsparteien (laut zoll.de, Stand 10/2026: Island, Norwegen, Schweiz mit Liechtenstein, Türkei, Nordmazedonien, Serbien, Vereinigtes Königreich, Ukraine, Georgien, Moldau, Montenegro) |
| **TIR-Verfahren** | TIR-Übereinkommen (UNECE) | internationale Straßenbeförderung zwischen den Vertragsparteien, auch weit außerhalb Europas |
| **Carnet ATA** | ATA-Übereinkommen | vorrangig vorübergehende Verwendung, kann auch als Versandpapier dienen |

Unionsversand und gemeinsames Versandverfahren laufen nach den **gleichen Grundsätzen** und werden elektronisch im **NCTS** (*New Computerised Transit System*) abgewickelt. In Deutschland heißt die Anwendung **ATLAS-Versand**. Schriftliche Versandanmeldungen sind nur noch in Ausnahmefällen zulässig.

# T1, T2 und T2F

| Kürzel | Verfahren | Waren | Beispiel |
|---|---|---|---|
| **T1** | externes Unionsversandverfahren bzw. externes gemeinsames Versandverfahren | **Nicht-Unionswaren** | Container aus Shanghai: Hafen Rotterdam → Zollstelle in Saarbrücken |
| **T2** | internes Unionsversandverfahren bzw. internes gemeinsames Versandverfahren | **Unionswaren**, deren Status beim Durchqueren eines Drittlands erhalten bleiben soll | Maschinenteile: München → Schweiz → Mailand |
| **T2F** | Versandanmeldung für Unionswaren | Unionswaren von/nach/zwischen Gebieten, die zum Zollgebiet, aber nicht zum Steuergebiet gehören | Lieferung auf die Kanarischen Inseln |

> Merke: Der Unionsstatus ist entscheidend. Nicht-Unionswaren → T1. Unionswaren, die ein Drittland durchqueren → T2. Reine Luft- oder Seebeförderungen fallen nach zoll.de nicht unter das interne Verfahren.

# Ablauf im Normalverfahren (NCTS/ATLAS-Versand)

1. **Versandanmeldung** wird elektronisch erstellt (Teilnehmereingabe durch den Spediteur als Inhaber des Verfahrens oder Benutzereingabe durch die Zollstelle).
2. **Gestellung** der Ware bei der Abgangszollstelle bzw. an einem von ihr bestimmten Ort.
3. Die Abgangszollstelle **nimmt die Anmeldung an**, wenn alle Angaben und Unterlagen vorliegen; die Sendung erhält eine **MRN** (Movement Reference Number).
4. Ggf. **Beschau** (risikoorientiert oder stichprobenweise).
5. Die Abgangszollstelle legt die **Gestellungsfrist** fest und sichert die **Nämlichkeit** (z. B. Zollverschluss/Plombe am verschlusssicheren Lkw oder Container).
6. **Überlassung** zum Versandverfahren; Ausdruck des **Versandbegleitdokuments (VBD)**. Gleichzeitig geht eine **Vorab-Ankunftsanzeige** an die Bestimmungszollstelle.
7. **Beförderung**; das VBD ist jeder **Durchgangszollstelle** vorzulegen.
8. **Gestellung bei der Bestimmungszollstelle**: Ware unverändert, Verschluss unverletzt, innerhalb der Frist, mit VBD. Damit endet das Verfahren (Art. 233 Abs. 2 UZK).
9. Die Bestimmungszollstelle meldet Eingang und Kontrollergebnis an die Abgangszollstelle; diese **erledigt** das Verfahren. Die Sicherheit ist dann für diesen Vorgang nicht mehr gebunden.

Die **Gestellungsfrist** wird von der Abgangszollstelle festgelegt und bindet auch die Zollbehörden der durchquerten Länder; diese dürfen sie nicht ändern.

# Pflichten der Beteiligten

- **Inhaber des Verfahrens** (Art. 233 Abs. 1 UZK): Gestellung der unveränderten Ware bei der Bestimmungszollstelle innerhalb der Frist, Einhaltung der Nämlichkeitsmaßnahmen, **Sicherheitsleistung**. Er haftet für die Abgaben.
- **Beförderer und Empfänger** (Art. 233 Abs. 3 UZK): Wer Waren annimmt und weiß, dass sie sich im Unionsversand befinden, muss sie ebenfalls fristgerecht und unverändert gestellen.

# Sicherheitsleistung

Die Sicherheit muss die **mögliche Abgabenschuld** abdecken. In Deutschland sind das die Einfuhrabgaben, die bei einer Einfuhr anfallen würden (Zoll, Einfuhrumsatzsteuer, ggf. Verbrauchsteuern), berechnet mit den höchsten einschlägigen Sätzen.

| Art | Erläuterung |
|---|---|
| **Barsicherheit** | Einzahlung bei der Abgangszollstelle, nach ordnungsgemäßer Erledigung Erstattung |
| **Bürgschaft (Einzelsicherheit)** | Verpflichtungserklärung eines Bürgen für einen Vorgang; Angabe der Sicherheits-Referenznummer |
| **Sicherheitstitel** | vom Bürgen ausgestellte Titel über **je 10.000 €**, ein Jahr gültig (zoll.de) |
| **Gesamtsicherheit** | für viele Vorgänge eines regelmäßigen Nutzers, auf Bewilligung; Reduzierung oder Befreiung unter zusätzlichen Voraussetzungen möglich |

Kraft Gesetzes keine Sicherheit u. a. bei Beförderungen auf dem Luftweg, auf dem Rhein und der Donau sowie durch Rohrleitungen (laut zoll.de).

# Vereinfachungen (Art. 233 Abs. 4 UZK)

- **Zugelassener Versender**: Ware wird ohne Gestellung bei der Zollstelle in das Versandverfahren übergeführt (z. B. vom eigenen Lager).
- **Zugelassener Empfänger**: Ware wird an einem zugelassenen Ort (z. B. Lager der Spedition) empfangen; das Verfahren endet dort.
- **Besondere Verschlüsse**, **Anmeldung mit verringerten Datenanforderungen**, **elektronisches Beförderungsdokument** als Zollanmeldung.

# Carnet TIR

- Internationales **Zollpapier für Straßenbeförderungen** nach dem TIR-Übereinkommen (UNECE).
- Die Abgaben werden in den durchfahrenen Ländern nicht erhoben; die Sicherheit übernimmt eine **internationale Bürgschaftskette** über national zugelassene Verbände. Das funktioniert nur in Ländern mit solchen Verbänden.
- Ware in **verschlusssicheren Fahrzeugen oder Behältern**; Zollverschluss bei Abgang, Kontrolle meist erst am Bestimmungsort.
- Im Zollgebiet der Union ist für TIR-Beförderungen eine **elektronische Anmeldung** vorgeschrieben. Daneben wird das elektronische **eTIR** eingeführt.
- Typischer Einsatz: Lkw-Verkehre in Länder außerhalb der Vertragsparteien des gemeinsamen Versandverfahrens, z. B. in Richtung Zentralasien oder Naher Osten.

# Carnet ATA (kurz)

- **Zollpassierscheinheft** für die **vorübergehende abgabenfreie Verwendung** von Gebrauchsgütern: Messe- und Ausstellungsgut, Berufsausrüstung, Warenmuster.
- In Deutschland ausschließlich von den **IHK** ausgestellt, bis zu **einem Jahr** gültig; Sicherheit über eine internationale Bürgenkette.
- Kann auch als **Versandpapier** verwendet werden. Mehr zur vorübergehenden Verwendung in der Einheit „Zollverfahren bei der Einfuhr“.`,
  terms: [
    { term: 'Versandverfahren', def: 'Besonderes Zollverfahren, in dem Waren unter Zollaufsicht und unter Aussetzung der Einfuhrabgaben von einer Zollstelle zu einer anderen befördert werden.' },
    { term: 'T1 (externes Versandverfahren)', def: 'Versandverfahren für Nicht-Unionswaren, z. B. vom Seehafen zur Zollstelle am Sitz des Empfängers.' },
    { term: 'T2 (internes Versandverfahren)', def: 'Versandverfahren für Unionswaren, die ein Drittland (Vertragspartei) durchqueren, damit ihr Unionsstatus erhalten bleibt.' },
    { term: 'NCTS / ATLAS-Versand', def: 'New Computerised Transit System: gemeinsamer IT-Standard für Versandverfahren; in Deutschland umgesetzt als ATLAS-Versand.' },
    { term: 'Abgangszollstelle', def: 'Zollstelle, die die Versandanmeldung annimmt; legt Gestellungsfrist und Nämlichkeitssicherung fest und erledigt später das Verfahren.' },
    { term: 'Durchgangszollstelle', def: 'Grenzzollstelle beim Eintritt in das Gebiet einer anderen Vertragspartei bzw. beim Wiedereintritt in die Union; ihr ist das Versandbegleitdokument vorzulegen.' },
    { term: 'Bestimmungszollstelle', def: 'Zollstelle, der die Waren zur Beendigung des Versandverfahrens gestellt werden.' },
    { term: 'MRN', def: 'Movement Reference Number: eindeutige Versandbezugsnummer eines Versandvorgangs.' },
    { term: 'Versandbegleitdokument (VBD)', def: 'Ausdruck mit MRN, der die Ware begleitet und Durchgangs- und Bestimmungszollstelle vorgelegt wird.' },
    { term: 'Gestellungsfrist', def: 'Von der Abgangszollstelle festgesetzte Frist, innerhalb der die Ware der Bestimmungszollstelle zu gestellen ist.' },
    { term: 'Inhaber des Verfahrens', def: 'Person, die das Versandverfahren anmeldet, die Sicherheit leistet und für die fristgerechte, unveränderte Gestellung haftet; häufig der Spediteur.' },
    { term: 'Carnet TIR', def: 'Internationales Zollpapier für Straßenbeförderungen in verschlusssicheren Fahrzeugen nach dem TIR-Übereinkommen, gesichert über eine Bürgschaftskette.' },
    { term: 'Carnet ATA', def: 'Zollpassierscheinheft für die vorübergehende abgabenfreie Verwendung von Gebrauchsgütern (Messegut, Berufsausrüstung, Muster); in Deutschland von der IHK ausgestellt.' }
  ],
  example: `# Beispiel: Seecontainer von Antwerpen nach Saarbrücken (Beispielfall)

Die **Saar-Trans Spedition GmbH** (Saarbrücken) ist zugelassener Teilnehmer an ATLAS-Versand und hat eine **Gesamtsicherheit**. Ihr Kunde, ein Fahrradhändler in Saarlouis, importiert einen 40-Fuß-Container mit Fahrradteilen aus China (Warenwert laut Rechnung 62.000 €). Die Ware soll in Saarbrücken verzollt werden.

1. Der Container wird in **Antwerpen** entladen. Die Ware ist **Nicht-Unionsware** → Versandverfahren **T1**.
2. Die Saar-Trans meldet den Versand über ihren Dienstleister im NCTS an. **Abgangszollstelle** ist die belgische Zollstelle im Hafen.
3. Die Abgangszollstelle nimmt die Anmeldung an, vergibt die **MRN**, legt die **Gestellungsfrist** fest und **verplombt** den Container.
4. Der Fahrer erhält das **VBD**. Die Bestimmungszollstelle in Saarbrücken bekommt eine **Vorab-Ankunftsanzeige**.
5. Auf der Strecke Belgien → Luxemburg → Deutschland verlässt die Sendung die EU nicht. Es gibt daher **keine Durchgangszollstelle**.
6. In Saarbrücken wird der Container mit unverletzter Plombe und VBD fristgerecht **gestellt**. Das Versandverfahren endet.
7. Anschließend meldet die Saar-Trans die Ware zur **Überlassung zum zollrechtlich freien Verkehr** an (Einheit „Zollverfahren bei der Einfuhr“). Erst jetzt werden Zoll und Einfuhrumsatzsteuer fällig (Einheit „Einfuhrabgaben berechnen“).

**Variante:** Wäre die Saar-Trans **zugelassener Empfänger**, könnte der Container direkt in ihr Lager fahren. Das Verfahren würde dann dort enden, ohne Fahrt zur Zollstelle.`,
  rules: [
    'Versandverfahren = Beförderung unter Zollaufsicht mit ausgesetzten Abgaben; es ersetzt nicht die spätere Verzollung.',
    'Nicht-Unionswaren → T1; Unionswaren durch ein Drittland → T2.',
    'Kein Versandverfahren ohne Sicherheitsleistung (Ausnahmen nur kraft Gesetzes oder durch Bewilligung).',
    'Ware unverändert, Verschluss unverletzt, innerhalb der Gestellungsfrist bei der Bestimmungszollstelle gestellen.',
    'Die Abgangszollstelle legt die Frist fest; Durchgangszollstellen dürfen sie nicht ändern.',
    'Durchgangszollstellen gibt es nur beim Grenzübertritt in das Gebiet einer anderen Vertragspartei bzw. zurück in die EU.',
    'Carnet TIR = Straßentransit weltweit mit Bürgschaftskette; Carnet ATA = vorübergehende Verwendung (Messe, Muster, Berufsausrüstung).'
  ],
  summary: `- **Versandverfahren** befördern Waren unter Zollaufsicht ohne Erhebung der Abgaben.
- **T1** für Nicht-Unionswaren, **T2** für Unionswaren durch ein Drittland, **T2F** für Gebiete außerhalb des Steuergebiets.
- Abwicklung elektronisch in **NCTS** (Deutschland: **ATLAS-Versand**): Anmeldung → MRN → Frist und Verschluss → VBD → Durchgangszollstelle(n) → Bestimmungszollstelle → Erledigung.
- **Sicherheit** deckt die mögliche Abgabenschuld (Zoll + EUSt + ggf. Verbrauchsteuern): Barsicherheit, Bürgschaft, Sicherheitstitel (je 10.000 €), Gesamtsicherheit.
- **Vereinfachungen**: zugelassener Versender, zugelassener Empfänger (Art. 233 Abs. 4 UZK).
- **Carnet TIR**: internationale Straßenbeförderung mit Bürgschaftskette; **Carnet ATA**: vorübergehende Verwendung, IHK, bis 1 Jahr.`,
  mistakes: [
    { wrong: 'Mit dem Versandverfahren ist die Ware verzollt.', right: 'Das Versandverfahren setzt die Abgaben nur aus. Am Ziel muss die Ware in ein weiteres Zollverfahren übergehen, z. B. in den zollrechtlich freien Verkehr.' },
    { wrong: 'Für Ware aus China, die über Rotterdam nach Deutschland kommt, nimmt man T2.', right: 'Ware aus China ist Nicht-Unionsware. Sie wird im T1-Verfahren befördert. T2 ist für Unionswaren gedacht.' },
    { wrong: 'Die Gestellungsfrist kann man bei einer Verzögerung an der Schweizer Grenze dort verlängern lassen.', right: 'Die Frist legt die Abgangszollstelle fest; die Behörden der durchquerten Länder dürfen sie nicht ändern.' },
    { wrong: 'Eine Fahrt Belgien → Luxemburg → Deutschland braucht Durchgangszollstellen.', right: 'Durchgangszollstellen gibt es nur beim Übertritt in das Gebiet einer anderen Vertragspartei oder zurück in die EU. Innerhalb der EU gibt es keine.' },
    { wrong: 'Ein Carnet ATA ist ein Transitpapier für jede Lkw-Ladung in die Türkei.', right: 'Das Carnet ATA dient vor allem der vorübergehenden Verwendung von Gebrauchsgütern (Messegut, Muster, Berufsausrüstung), nicht dem Transport von Handelsware zum Verkauf.' }
  ],
  flashcards: [
    { q: 'Wofür steht T1?', a: 'Externes Versandverfahren für Nicht-Unionswaren.' },
    { q: 'Wann wird T2 verwendet?', a: 'Für Unionswaren, die auf dem Weg zwischen zwei EU-Orten ein Drittland (Vertragspartei, z. B. Schweiz) durchqueren.' },
    { q: 'Wie heißt das deutsche IT-Verfahren für den Versand?', a: 'ATLAS-Versand, umgesetzt im gemeinsamen Standard NCTS.' },
    { q: 'Wer legt die Gestellungsfrist fest?', a: 'Die Abgangszollstelle; die Behörden der Durchgangsländer dürfen sie nicht ändern.' },
    { q: 'Wann endet das Unionsversandverfahren?', a: 'Wenn die Waren mit den erforderlichen Angaben der Bestimmungszollstelle gestellt werden (Art. 233 Abs. 2 UZK).' },
    { q: 'Was deckt die Sicherheit ab?', a: 'Die mögliche Abgabenschuld, also die Einfuhrabgaben (Zoll, EUSt, ggf. Verbrauchsteuern), die bei einer Einfuhr anfallen würden.' },
    { q: 'Über welchen Betrag lautet ein Sicherheitstitel?', a: 'Über 10.000 € je Titel (laut zoll.de), ein Jahr gültig.' },
    { q: 'Was darf ein zugelassener Empfänger?', a: 'Versandwaren an einem zugelassenen Ort (z. B. eigenes Lager) empfangen; das Verfahren endet dort.' },
    { q: 'Nenne vier Vertragsparteien des gemeinsamen Versandverfahrens außerhalb der EU.', a: 'z. B. Schweiz, Norwegen, Türkei, Vereinigtes Königreich (außerdem Island, Nordmazedonien, Serbien, Ukraine, Georgien, Moldau, Montenegro).' },
    { q: 'Wer stellt in Deutschland Carnets ATA aus?', a: 'Ausschließlich die Industrie- und Handelskammern (IHK).' }
  ],
  tasks: [
    {
      id: 'lf11-versandverfahren-a1', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Container mit Textilien aus Bangladesch wird in Hamburg entladen. Die Ware soll unverzollt zur Zollstelle in Saarbrücken gebracht und erst dort verzollt werden. Welches Verfahren wählt die Spedition?',
      options: ['Internes Unionsversandverfahren T2', 'Externes Unionsversandverfahren T1', 'Ausfuhrverfahren mit ATLAS-Ausfuhr', 'Carnet ATA'],
      correct: [1],
      hints: ['Hat die Ware den Status einer Unionsware?', 'Noch nicht verzollte Drittlandsware ist Nicht-Unionsware.'],
      solution: '**T1 (externes Unionsversandverfahren)**: Die Textilien sind **Nicht-Unionswaren**, weil sie noch nicht in den zollrechtlich freien Verkehr übergeführt wurden. Sie werden unter Zollaufsicht und Aussetzung der Abgaben von Hamburg (Abgangszollstelle) nach Saarbrücken (Bestimmungszollstelle) befördert. T2 ist für Unionswaren, Ausfuhr betrifft das Verlassen der EU, das Carnet ATA die vorübergehende Verwendung.'
    },
    {
      id: 'lf11-versandverfahren-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Staaten sind laut zoll.de (Stand Oktober 2026) Vertragsparteien des **gemeinsamen Versandverfahrens**, ohne EU-Mitglied zu sein? (Mehrfachauswahl)',
      options: ['Schweiz', 'Vereinigte Staaten', 'Norwegen', 'Türkei', 'China', 'Marokko'],
      correct: [0, 2, 3],
      hints: ['Es handelt sich vor allem um europäische Nachbarstaaten.', 'Auch die Türkei und das Vereinigte Königreich gehören dazu.'],
      solution: 'Richtig sind **Schweiz, Norwegen und Türkei**. Weitere Vertragsparteien sind Island, Liechtenstein (über die Schweiz), Nordmazedonien, Serbien, das Vereinigte Königreich, die Ukraine, Georgien, Moldau und Montenegro. Die USA, China und Marokko gehören nicht dazu. Für Lkw-Verkehre in Länder außerhalb dieses Kreises kommt z. B. das Carnet TIR in Frage.'
    },
    {
      id: 'lf11-versandverfahren-a3', type: 'order', difficulty: 2, points: 7,
      q: 'Bringe den Ablauf eines T1-Versandvorgangs im Normalverfahren (NCTS/ATLAS-Versand) in die richtige Reihenfolge.',
      items: [
        'Versandanmeldung elektronisch abgeben und Sicherheit angeben',
        'Ware bei der Abgangszollstelle gestellen',
        'Annahme der Anmeldung und Vergabe der MRN',
        'Festlegung der Gestellungsfrist und Anbringen des Zollverschlusses',
        'Überlassung zum Versandverfahren und Ausdruck des Versandbegleitdokuments',
        'Gestellung der unveränderten Ware mit VBD bei der Bestimmungszollstelle',
        'Erledigung des Verfahrens durch die Abgangszollstelle nach Rückmeldung der Bestimmungszollstelle'
      ],
      hints: ['Die Zollstelle kann die Anmeldung erst annehmen, wenn die Ware gestellt ist.', 'Das VBD begleitet die Ware – es muss also vor der Abfahrt vorliegen.'],
      solution: `1. **Anmeldung** in NCTS mit Sicherheitsangaben (z. B. Referenznummer der Gesamtsicherheit)
2. **Gestellung** bei der Abgangszollstelle (oder an einem von ihr bestimmten Ort)
3. **Annahme** und **MRN** – die Zollstelle nimmt nur an, wenn Angaben, Unterlagen und Ware vorliegen
4. **Gestellungsfrist** und **Nämlichkeitssicherung** (Plombe)
5. **Überlassung**, **VBD** wird gedruckt, Vorab-Ankunftsanzeige an die Bestimmungszollstelle
6. **Gestellung am Ziel** – damit endet das Verfahren (Art. 233 Abs. 2 UZK)
7. **Erledigung** durch die Abgangszollstelle; die Sicherheit wird für diesen Vorgang frei`
    },
    {
      id: 'lf11-versandverfahren-a4', type: 'cloze', difficulty: 2, points: 6,
      q: 'Ergänze die Lücken.',
      text: 'Im Versandverfahren werden Waren unter Zollaufsicht befördert, ohne dass [[Einfuhrabgaben|Abgaben|Zoll und Einfuhrumsatzsteuer]] erhoben werden. Die Sendung erhält bei der Annahme eine [[MRN|Versandbezugsnummer]]. Die Frist für die Gestellung legt die [[Abgangszollstelle]] fest. Beim Grenzübertritt in die Schweiz ist das VBD der [[Durchgangszollstelle]] vorzulegen. Das Verfahren endet, wenn die Ware der [[Bestimmungszollstelle]] gestellt wird. Ein Spediteur, der Waren in seinem eigenen Lager empfangen darf, hat den Status [[zugelassener Empfänger]].',
      hints: ['Denke an die drei Zollstellen: Anfang, Grenze, Ziel.', 'Die Vereinfachung für den Empfang steht in Art. 233 Abs. 4 Buchst. b UZK.'],
      solution: 'Abgaben (Zoll, Einfuhrumsatzsteuer) werden ausgesetzt. Die Nummer heißt **MRN**. Die **Abgangszollstelle** setzt die Gestellungsfrist fest, das VBD wird der **Durchgangszollstelle** vorgelegt, das Verfahren endet bei der **Bestimmungszollstelle**. Der Empfang am eigenen Ort ist dem **zugelassenen Empfänger** erlaubt.'
    },
    {
      id: 'lf11-versandverfahren-a5', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne das Papier bzw. Verfahren dem passenden Einsatzfall zu.',
      pairs: [
        ['T1', 'Unverzollte Elektronik aus Taiwan vom Flughafen Frankfurt zur Zollstelle in Saarbrücken'],
        ['T2', 'Unionsware von Stuttgart über die Schweiz nach Mailand'],
        ['Carnet TIR', 'Lkw-Ladung von Saarbrücken nach Kasachstan in einem verplombten Auflieger'],
        ['Carnet ATA', 'Messestand und Vorführmaschinen für eine Messe in Singapur, die anschließend zurückkommen'],
        ['T2F', 'Unionsware von Bremen auf die Kanarischen Inseln']
      ],
      hints: ['Prüfe zuerst den Status der Ware: Unionsware oder Nicht-Unionsware?', 'Carnet ATA = vorübergehende Verwendung; Carnet TIR = Straßentransport über viele Länder.'],
      solution: '**T1**: Nicht-Unionsware innerhalb der EU unter Zollaufsicht. **T2**: Unionsware, die mit der Schweiz eine Vertragspartei durchquert. **Carnet TIR**: Straßentransport in ein Land außerhalb der Vertragsparteien des gemeinsamen Versandverfahrens mit Bürgschaftskette. **Carnet ATA**: Gebrauchsgüter für eine Messe, die wieder zurückkommen. **T2F**: Unionsware in ein Gebiet, das zum Zollgebiet, aber nicht zum Steuergebiet gehört.'
    },
    {
      id: 'lf11-versandverfahren-a6', type: 'calc', difficulty: 3, points: 4,
      q: `Die Spedition Hochwald Logistik soll eine Sendung Werkzeugmaschinen (Nicht-Unionsware) im T1-Verfahren befördern. Sie hat keine Gesamtsicherheit und will **Sicherheitstitel** einsetzen.

- Zollwert der Ware: 48.000 €
- Zollsatz (Beispielwert): 4 %
- Einfuhrumsatzsteuer: 19 %

Berechne vereinfacht die mögliche Abgabenschuld (EUSt-Bemessungsgrundlage hier = Zollwert + Zoll; weitere Kosten bleiben unberücksichtigt) und die Anzahl der benötigten Sicherheitstitel über je 10.000 €.`,
      formula: 'Sicherheit = Zoll + EUSt; Anzahl Titel = Sicherheit ÷ 10.000 €, aufgerundet',
      fields: [
        { id: 'zoll', label: 'Zoll', unit: '€', answer: 1920, tol: 0.01 },
        { id: 'eust', label: 'Einfuhrumsatzsteuer', unit: '€', answer: 9484.8, tol: 0.01 },
        { id: 'sich', label: 'Mögliche Abgabenschuld', unit: '€', answer: 11404.8, tol: 0.01 },
        { id: 'titel', label: 'Anzahl Sicherheitstitel', unit: 'Stück', answer: 2, tol: 0 }
      ],
      hints: ['Berechne zuerst den Zoll vom Zollwert, dann die EUSt von (Zollwert + Zoll).', 'Ein Titel deckt höchstens 10.000 € – reicht einer?'],
      solution: `**Zoll:** 48.000 € × 4 % = **1.920,00 €**

**EUSt-Bemessungsgrundlage:** 48.000 € + 1.920 € = 49.920 €

**EUSt:** 49.920 € × 19 % = **9.484,80 €**

**Mögliche Abgabenschuld:** 1.920,00 € + 9.484,80 € = **11.404,80 €**

**Sicherheitstitel:** 11.404,80 € ÷ 10.000 € = 1,14 → aufgerundet **2 Titel**

Begründung: Die Sicherheit muss die volle mögliche Abgabenschuld abdecken. Ein Titel haftet nur bis 10.000 €, deshalb reicht ein Titel nicht aus. (Wie die EUSt-Bemessungsgrundlage genau gebildet wird, lernst du in der Einheit „Einfuhrabgaben berechnen“.)`
    },
    {
      id: 'lf11-versandverfahren-a7', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Pflichten hat die Spedition als **Inhaber des Versandverfahrens**? (Mehrfachauswahl)',
      options: [
        'Die Ware innerhalb der festgesetzten Frist der Bestimmungszollstelle gestellen',
        'Die Ware unverändert und mit unverletztem Zollverschluss gestellen',
        'Die Einfuhrabgaben bei der Abgangszollstelle sofort bar bezahlen',
        'Eine Sicherheit für die mögliche Abgabenschuld leisten',
        'Die Gestellungsfrist bei Bedarf selbst verlängern'
      ],
      correct: [0, 1, 3],
      hints: ['Die Abgaben werden im Versandverfahren gerade nicht erhoben.', 'Wer legt die Frist fest?'],
      solution: 'Richtig: **fristgerecht gestellen**, **unverändert/mit intaktem Verschluss gestellen**, **Sicherheit leisten** (Art. 233 Abs. 1 UZK). Die Abgaben werden nicht bezahlt, sondern nur gesichert (eine Barsicherheit wäre möglich, wird aber nach Erledigung erstattet). Die Frist setzt die Abgangszollstelle fest – der Inhaber kann sie nicht selbst verlängern.'
    },
    {
      id: 'lf11-versandverfahren-a8', type: 'mc', difficulty: 3, points: 2,
      q: 'Eine T2-Sendung (Unionsware) fährt von München über Österreich und die Schweiz nach Mailand. Bei welchen Stellen ist das Versandbegleitdokument als **Durchgangszollstelle** vorzulegen? (Mehrfachauswahl)',
      options: [
        'Bei der Grenzzollstelle zwischen Deutschland und Österreich',
        'Bei der Schweizer Zollstelle beim Eintritt in die Schweiz',
        'Bei der italienischen Zollstelle beim Wiedereintritt in die EU',
        'Bei jeder Autobahnraststätte mit Zollkontrolle'
      ],
      correct: [1, 2],
      hints: ['Deutschland und Österreich sind beide EU-Mitglieder.', 'Durchgangszollstellen liegen dort, wo die Sendung in das Gebiet einer anderen Vertragspartei oder zurück in die EU kommt.'],
      solution: '**B und C**: Die Durchgangszollstelle ist die Zollstelle beim Eintritt in das Gebiet einer anderen Vertragspartei (Schweiz) und beim Wiedereintritt in das Zollgebiet der Union (Italien). Zwischen Deutschland und Österreich gibt es keine Zollgrenze, weil beide zur EU gehören.'
    },
    {
      id: 'lf11-versandverfahren-a9', type: 'text', difficulty: 3, points: 3,
      q: 'Der Fahrer meldet, dass die Plombe am Container nach einer Polizeikontrolle beschädigt wurde, und er wegen eines Staus die Gestellungsfrist nicht einhalten kann. Erkläre, warum das für die Spedition als Inhaber des Verfahrens ein Problem ist und was sie tun sollte.',
      model: 'Die Spedition muss als Inhaber die Ware unverändert, mit unverletztem Zollverschluss und innerhalb der Frist der Bestimmungszollstelle gestellen. Ist der Verschluss verletzt oder wird die Frist überschritten, kann der Zoll die Nämlichkeit nicht mehr sicher feststellen; im schlimmsten Fall entsteht eine Zollschuld und die Sicherheit wird in Anspruch genommen. Die Spedition sollte den Vorfall sofort der nächsten Zollstelle melden, die Beschädigung der Plombe bestätigen lassen (z. B. durch die Polizei bzw. den Zoll) und die Verspätung mit Belegen begründen, damit die Bestimmungszollstelle den Vorgang ordnungsgemäß beenden kann.',
      criteria: [
        { text: 'nennt die Pflicht zur unveränderten, fristgerechten Gestellung', keywords: ['unverändert|Verschluss|Plombe', 'Frist'], points: 1 },
        { text: 'nennt die Folge Zollschuld/Inanspruchnahme der Sicherheit', keywords: ['Zollschuld|Abgaben|Sicherheit'], points: 1 },
        { text: 'nennt sofortige Meldung an den Zoll und Nachweise', keywords: ['melden|Meldung|informieren|benachrichtig', 'Zoll|Zollstelle'], points: 1 }
      ],
      hints: ['Was muss der Inhaber bei der Bestimmungszollstelle nachweisen?', 'Wer haftet für die Abgaben, wenn das Verfahren nicht ordnungsgemäß endet?'],
      solution: 'Kernaussagen: 1. Pflicht nach Art. 233 UZK: **unverändert, Verschluss intakt, fristgerecht** gestellen. 2. Bei Verstößen kann eine **Zollschuld** entstehen, für die der Inhaber haftet; die **Sicherheit** kann in Anspruch genommen werden. 3. Deshalb den Vorfall **sofort beim Zoll melden** und mit Belegen (Polizeibestätigung, Staumeldung) dokumentieren.'
    },
    {
      id: 'lf11-versandverfahren-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Importcontainer für die Bliesgau Logistik',
      intro: `Die **Bliesgau Logistik GmbH** in Homburg erhält den Auftrag, einen 20-Fuß-Container mit Haushaltsgeräten aus Südkorea vom Seehafen **Rotterdam** zu ihrem Lager in Homburg zu bringen. Dort soll die Ware für den Kunden verzollt werden. Die Bliesgau Logistik hat eine Bewilligung als **zugelassener Empfänger** für ihr Lager und eine **Gesamtsicherheit**. Der Lkw fährt über Belgien und Luxemburg.`,
      hints: ['Kläre zuerst den Status der Ware.', 'Prüfe, ob die Strecke die EU verlässt.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf11-versandverfahren-a10-1', type: 'mc', difficulty: 2, points: 1,
          q: 'In welchem Verfahren wird der Container von Rotterdam nach Homburg befördert?',
          options: ['T2', 'T1', 'Carnet ATA', 'Ausfuhrverfahren'],
          correct: [1],
          hints: ['Die Haushaltsgeräte sind noch nicht verzollt.', 'Nicht-Unionswaren → ?'],
          solution: '**T1**, weil die Haushaltsgeräte aus Südkorea **Nicht-Unionswaren** sind und unverzollt innerhalb der EU befördert werden.'
        },
        {
          id: 'lf11-versandverfahren-a10-2', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Aussagen zum Ablauf sind richtig? (Mehrfachauswahl)',
          options: [
            'Abgangszollstelle ist eine niederländische Zollstelle im Hafen Rotterdam.',
            'An der Grenze Belgien/Luxemburg ist eine Durchgangszollstelle anzufahren.',
            'Als zugelassener Empfänger kann die Bliesgau Logistik die Sendung in ihrem Lager in Homburg empfangen; das Verfahren endet dort.',
            'Die Gesamtsicherheit ersetzt die Einzelsicherheit für diesen Vorgang.',
            'Mit der Ankunft in Homburg sind Zoll und Einfuhrumsatzsteuer bereits bezahlt.'
          ],
          correct: [0, 2, 3],
          hints: ['Belgien, Luxemburg und Deutschland sind EU-Mitglieder.', 'Nach dem Versand muss die Ware erst noch in den freien Verkehr übergeführt werden.'],
          solution: 'Richtig sind **A, C, D**. Die Annahme der Versandanmeldung erfolgt in Rotterdam (Abgangszollstelle). Innerhalb der EU gibt es keine Durchgangszollstellen. Der zugelassene Empfänger darf an seinem zugelassenen Ort empfangen (Art. 233 Abs. 4 Buchst. b UZK). Die Gesamtsicherheit deckt mehrere Vorgänge ab. Die Abgaben fallen erst bei der anschließenden Überlassung zum zollrechtlich freien Verkehr an.'
        },
        {
          id: 'lf11-versandverfahren-a10-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Was muss die Bliesgau Logistik nach Ankunft im eigenen Lager beachten? (Mehrfachauswahl)',
          options: [
            'Sie darf den Verschluss nicht eigenmächtig entfernen, bevor die Zollstelle die Entladung erlaubt bzw. die Bewilligung es zulässt.',
            'Sie muss die Ankunft in ATLAS-Versand fristgerecht anzeigen.',
            'Sie darf die Ware sofort an den Endkunden ausliefern, weil der Versand beendet ist.',
            'Sie braucht keine weitere Zollanmeldung, weil T1 die Verzollung ersetzt.'
          ],
          correct: [0, 1],
          hints: ['Der Zoll muss entscheiden können, ob er die Ware beschauen will.', 'Das Versandverfahren ersetzt keine Verzollung.'],
          solution: 'Richtig sind **A und B**: Der zugelassene Empfänger zeigt die Ankunft elektronisch an und entlädt erst nach Entladeerlaubnis bzw. im Rahmen seiner Bewilligung. Danach ist die Ware in **vorübergehender Verwahrung**; sie darf erst nach der Überlassung zum zollrechtlich freien Verkehr ausgeliefert werden. T1 ersetzt keine Verzollung.'
        }
      ]
    },
    {
      id: 'lf11-versandverfahren-a11', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Art der Sicherheitsleistung der passenden Beschreibung zu.',
      pairs: [
        ['Barsicherheit', 'Betrag wird bei der Abgangszollstelle hinterlegt und nach Erledigung erstattet'],
        ['Bürgschaft als Einzelsicherheit', 'Verpflichtungserklärung eines Bürgen für einen einzelnen Versandvorgang'],
        ['Sicherheitstitel', 'Vom Bürgen ausgestellte Titel über je 10.000 €, ein Jahr gültig'],
        ['Gesamtsicherheit', 'Bewilligte Sicherheit für viele Versandvorgänge eines regelmäßigen Nutzers']
      ],
      hints: ['Einzelsicherheiten gelten für einen Vorgang.', 'Speditionen mit vielen Transitsendungen nutzen meist die Gesamtsicherheit.'],
      solution: 'Barsicherheit, Bürgschaft und Sicherheitstitel sind **Einzelsicherheiten**. Die **Gesamtsicherheit** deckt auf Bewilligung viele Vorgänge ab und kann unter zusätzlichen Voraussetzungen reduziert werden. Sicherheitstitel lauten laut zoll.de über **10.000 €** und gelten ein Jahr.'
    }
  ],
  quiz: ['lf11-versandverfahren-a1', 'lf11-versandverfahren-a3', 'lf11-versandverfahren-a6', 'lf11-versandverfahren-a8', 'lf11-versandverfahren-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 11, Inhalte: Versandverfahren, Zollpapiere, Sicherheitsleistung' },
    { title: 'Unionsversandverfahren und gemeinsames Versandverfahren', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Versandverfahren/Unions-gemeinsames-Versandverfahren/unions-gemeinsames-versandverfahren_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Unterscheidung der Versandverfahren (T1, T2, Vertragsparteien)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Versandverfahren/Unions-gemeinsames-Versandverfahren/Unterscheidung/unterscheidung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Normalverfahren (Überführung und Überlassung)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Versandverfahren/Unions-gemeinsames-Versandverfahren/Durchfuehrung-Versandverfahren/Ueberfuehrung-Ueberlassung/Normalverfahren/normalverfahren_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Sicherheitsleistung im Versandverfahren', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Versandverfahren/Unions-gemeinsames-Versandverfahren/Durchfuehrung-Versandverfahren/Sicherheitsleistung/sicherheitsleistung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Gemeinsamer IT-Standard NCTS', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Versandverfahren/Unions-gemeinsames-Versandverfahren/Durchfuehrung-Versandverfahren/Gemeinsamer-IT-Standard-NCTS/gemeinsamer-it-standard-ncts_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Carnet TIR', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Versandverfahren/Carnet-TIR/carnet-tir_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Carnet ATA – Allgemeines', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Voruebergehende-Verwendung/Carnet-ATA/Allgemeines/allgemeines.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Unionszollkodex Art. 233 (Verpflichtungen des Inhabers, Vereinfachungen)', publisher: 'Europäische Union (VO (EU) Nr. 952/2013)', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32013R0952', asOf: '2026' }
  ],
  links: ['lf11-zollverfahren', 'lf11-einfuhrabgaben', 'lf10-ausfuhrverfahren', 'lf10-container']
};
