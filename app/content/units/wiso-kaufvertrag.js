export default {
  id: 'wiso-kaufvertrag',
  area: 'WISO',
  topic: 'wiso-w4-vertraege',
  title: 'Geschäftsfähigkeit und Kaufvertrag',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Bürgerliches Gesetzbuch (BGB) Stand 2026: Rechtsfähigkeit § 1, Volljährigkeit § 2, Geschäftsfähigkeit §§ 104–113, Nichtigkeit §§ 105, 117, 118, 125, 134, 138, Anfechtung §§ 119–124, 142, Antrag und Annahme §§ 145–151, Kaufvertrag § 433, Sachmangel und Rechte des Käufers §§ 434, 437, 439, Verzug §§ 286, 288, Annahmeverzug §§ 293 ff.; Handelsgesetzbuch §§ 373, 377. Verzugszinsen: 5 bzw. 9 Prozentpunkte über dem Basiszinssatz (§ 288 BGB); der Basiszinssatz wird halbjährlich angepasst.'
  },
  goals: [
    'Ich kann Rechtsfähigkeit und Geschäftsfähigkeit unterscheiden.',
    'Ich kann die drei Stufen der Geschäftsfähigkeit nach §§ 104–113 BGB auf Fälle anwenden, einschließlich des Taschengeldparagraphen.',
    'Ich kann erklären, wie ein Kaufvertrag durch Antrag und Annahme zustande kommt.',
    'Ich kann Anpreisungen von verbindlichen Angeboten unterscheiden.',
    'Ich kann die Pflichten von Käufer und Verkäufer nach § 433 BGB nennen.',
    'Ich kann nichtige und anfechtbare Rechtsgeschäfte unterscheiden.',
    'Ich kann die vier Kaufvertragsstörungen erkennen und den Beteiligten zuordnen.'
  ],
  simple: `# Wer darf Verträge schließen?

- **Rechtsfähigkeit:** Jeder Mensch kann Rechte und Pflichten haben – von der **Geburt bis zum Tod** (§ 1 BGB). Auch ein Baby kann z. B. Eigentümer sein. Unternehmen wie eine GmbH sind als **juristische Personen** ebenfalls rechtsfähig.
- **Geschäftsfähigkeit:** die Fähigkeit, **selbst wirksam Verträge zu schließen**. Sie hängt vom Alter ab:

| Alter | Stufe | Folge |
|---|---|---|
| unter 7 Jahre | geschäftsunfähig | Verträge sind **nichtig** |
| 7 bis 17 Jahre | beschränkt geschäftsfähig | Verträge brauchen meist die **Zustimmung der Eltern** |
| ab 18 Jahre | voll geschäftsfähig | Verträge sind **voll wirksam** |

# Wie entsteht ein Kaufvertrag?

Durch zwei **übereinstimmende Willenserklärungen**:
1. **Antrag** (Angebot): „Ich möchte 50 Europaletten zu 12 € pro Stück kaufen.“
2. **Annahme**: „Einverstanden, wir liefern.“

Wichtig: Werbung, Kataloge, Schaufenster und Onlineshops sind meist **noch kein Antrag**, sondern nur eine **Anpreisung** – eine Einladung an dich, selbst ein Angebot zu machen.

# Was muss jeder tun? (§ 433 BGB)

| Verkäufer | Käufer |
|---|---|
| Sache **übergeben** und **Eigentum verschaffen** | **Kaufpreis zahlen** |
| Sache **frei von Mängeln** liefern | Sache **abnehmen** |

# Was kann schiefgehen?

- **Mangelhafte Lieferung** und **Lieferungsverzug** – Fehler des **Verkäufers**
- **Annahmeverzug** und **Zahlungsverzug** – Fehler des **Käufers**`,
  deep: `# Geschäftsfähigkeit im Detail (§§ 104–113 BGB)

**Geschäftsunfähig** (§ 104) sind Kinder **unter 7 Jahren** und Personen mit dauerhafter krankhafter Störung der Geistestätigkeit. Ihre Willenserklärungen sind **nichtig** (§ 105). Für sie handeln die gesetzlichen Vertreter.

**Beschränkt geschäftsfähig** (§ 106) sind Minderjährige **von 7 bis 17 Jahren**:
- **Ohne Zustimmung wirksam** sind Geschäfte, die ihnen **lediglich einen rechtlichen Vorteil** bringen, z. B. ein Geschenk ohne Pflichten (§ 107).
- Andere Verträge brauchen die vorherige **Einwilligung** der Eltern. Fehlt sie, ist der Vertrag **schwebend unwirksam**: Er wird mit der nachträglichen **Genehmigung** wirksam oder mit ihrer Verweigerung endgültig unwirksam (§ 108). Fordert der Vertragspartner die Eltern zur Erklärung auf, gilt die Genehmigung nach **zwei Wochen** ohne Antwort als verweigert.
- **Taschengeldparagraph (§ 110):** Ein Vertrag ist von Anfang an wirksam, wenn die Minderjährige die Leistung **vollständig** mit Mitteln **bewirkt** (bezahlt), die ihr dafür oder zur freien Verfügung überlassen wurden. **Ratenkäufe** fallen nicht darunter, weil noch nicht vollständig gezahlt ist.
- **Erwerbsgeschäft (§ 112):** Erlauben die Eltern mit Genehmigung des Familiengerichts den selbstständigen Betrieb eines Erwerbsgeschäfts, ist der Minderjährige für die dazugehörigen Geschäfte voll geschäftsfähig.
- **Dienst- oder Arbeitsverhältnis (§ 113):** Erlauben die Eltern, ein Arbeitsverhältnis einzugehen, sind die damit verbundenen Geschäfte wirksam (z. B. Gehaltskonto). Für **Berufsausbildungsverhältnisse** wird § 113 nach herrschender Meinung **nicht** angewendet, weil dort das Lernen im Vordergrund steht – den Ausbildungsvertrag schließen die Eltern mit ab bzw. stimmen ihm zu.

**Voll geschäftsfähig** ist, wer **18 Jahre** alt ist (§ 2 BGB).

# Willenserklärung

Eine Willenserklärung ist die Äußerung eines Willens, der auf eine **Rechtsfolge** gerichtet ist (z. B. einen Vertrag schließen). Sie kann **ausdrücklich** (mündlich, schriftlich, per E-Mail) oder **schlüssig** (durch Handeln, z. B. Ware auf das Kassenband legen) abgegeben werden. Schweigen gilt grundsätzlich **nicht** als Zustimmung.

- **Empfangsbedürftige** Willenserklärungen (z. B. Angebot, Kündigung) werden erst mit **Zugang** beim Empfänger wirksam.
- **Einseitige Rechtsgeschäfte** brauchen eine Willenserklärung (Kündigung, Testament), **zwei- oder mehrseitige** mindestens zwei (Verträge).

# Antrag und Annahme (§§ 145–151 BGB)

| Situation | Regel |
|---|---|
| Antrag an einen Anwesenden (auch Telefon) | Annahme nur **sofort** möglich (§ 147 Abs. 1) |
| Antrag an einen Abwesenden (Brief, E-Mail) | Annahme bis zu dem Zeitpunkt, in dem unter regelmäßigen Umständen eine Antwort zu erwarten ist (§ 147 Abs. 2) |
| Antrag mit Frist | Annahme nur innerhalb der Frist (§ 148) |
| **verspätete** oder **abgeänderte** Annahme | gilt als **neuer Antrag** (§ 150) |
| Antrag mit Freizeichnungsklausel („freibleibend“, „solange Vorrat reicht“) | Bindung ganz oder teilweise **ausgeschlossen** (§ 145) |

Zwei Wege zum Kaufvertrag:
1. **Verkäufer** macht ein verbindliches Angebot → **Käufer** bestellt zu genau diesen Bedingungen (Annahme).
2. **Käufer** bestellt ohne vorheriges Angebot oder abweichend (Antrag) → **Verkäufer** nimmt an, z. B. durch **Auftragsbestätigung** oder durch **Lieferung**.

# Nichtigkeit und Anfechtbarkeit

| | **nichtig** | **anfechtbar** |
|---|---|---|
| Wirkung | von Anfang an unwirksam, ohne dass jemand etwas tun muss | zunächst **wirksam**, wird durch Anfechtung **rückwirkend nichtig** (§ 142) |
| Gründe | Geschäftsunfähigkeit (§ 105), Scheingeschäft (§ 117), Scherzgeschäft (§ 118), Formmangel (§ 125), Verstoß gegen ein gesetzliches Verbot (§ 134), Sittenwidrigkeit/Wucher (§ 138) | Inhalts- oder Erklärungsirrtum, Irrtum über eine verkehrswesentliche Eigenschaft (§ 119), falsche Übermittlung (§ 120), arglistige Täuschung, widerrechtliche Drohung (§ 123) |
| Frist | – | Irrtum: **unverzüglich** nach Entdeckung (§ 121); Täuschung/Drohung: **ein Jahr** (§ 124) |

> Ein bloßer **Motivirrtum** (z. B. „Ich dachte, ich brauche die Palettenregale noch“) berechtigt **nicht** zur Anfechtung.

# Kaufvertragsstörungen im Überblick

| Störung | Wer verletzt eine Pflicht? | Voraussetzungen (vereinfacht) | Rechte des anderen |
|---|---|---|---|
| **Mangelhafte Lieferung** (Schlechtleistung, §§ 434, 437 BGB) | Verkäufer | Sachmangel bei Gefahrübergang (falsche Beschaffenheit, falsche Art oder Menge, Montagefehler) | **vorrangig Nacherfüllung** (Nachbesserung oder Neulieferung), danach Rücktritt oder Minderung, ggf. Schadensersatz |
| **Lieferungsverzug** (Nicht-rechtzeitig-Lieferung, § 286 BGB) | Verkäufer | Fälligkeit, **Mahnung** (entbehrlich bei kalendermäßig bestimmtem Termin), Verschulden | Lieferung verlangen und Verzugsschaden; nach angemessener Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung |
| **Annahmeverzug** (§§ 293 ff. BGB, § 373 HGB) | Käufer | Ware wird ordnungsgemäß angeboten, aber nicht abgenommen | Verkäufer kann Ware einlagern (auf Kosten des Käufers), auf Abnahme klagen oder beim Handelskauf einen **Selbsthilfeverkauf** durchführen |
| **Zahlungsverzug** (§§ 286, 288 BGB) | Käufer | Fälligkeit und Mahnung, **oder** kalendermäßig bestimmter Termin, **oder** 30 Tage nach Fälligkeit und Zugang der Rechnung | Zahlung plus **Verzugszinsen** (Verbraucher beteiligt: 5, sonst 9 Prozentpunkte über Basiszinssatz), bei Unternehmern zusätzlich **40 € Pauschale** |

> **Kaufleute aufgepasst (§ 377 HGB):** Beim zweiseitigen Handelskauf muss der Käufer die Ware **unverzüglich untersuchen** und Mängel **unverzüglich rügen**. Sonst gilt die Ware als genehmigt. Speditionen, die Ware für den eigenen Betrieb kaufen, müssen deshalb den Wareneingang sofort prüfen.

Die Einzelheiten der Störungen (Fristen, Schadensersatz, Mahnverfahren) werden in den Lernfeldern 5 und 8 vertieft.`,
  terms: [
    { term: 'Rechtsfähigkeit', def: 'Fähigkeit, Träger von Rechten und Pflichten zu sein; bei Menschen von der Vollendung der Geburt bis zum Tod (§ 1 BGB), bei juristischen Personen mit der Gründung bzw. Eintragung.' },
    { term: 'Geschäftsfähigkeit', def: 'Fähigkeit, Rechtsgeschäfte selbst wirksam abzuschließen; abgestuft nach Alter (§§ 104–113 BGB).' },
    { term: 'Beschränkte Geschäftsfähigkeit', def: 'Minderjährige von 7 bis 17 Jahren; Verträge, die nicht nur rechtlich vorteilhaft sind, brauchen die Zustimmung der gesetzlichen Vertreter.' },
    { term: 'Schwebend unwirksam', def: 'Zustand eines Vertrags eines Minderjährigen ohne Einwilligung: wird durch Genehmigung wirksam, durch Verweigerung endgültig unwirksam (§ 108 BGB).' },
    { term: 'Taschengeldparagraph', def: '§ 110 BGB: Ein Vertrag eines Minderjährigen ist wirksam, wenn er die Leistung vollständig mit überlassenen Mitteln bezahlt.' },
    { term: 'Willenserklärung', def: 'Äußerung eines Willens, der auf eine Rechtsfolge gerichtet ist; ausdrücklich oder durch schlüssiges Handeln.' },
    { term: 'Antrag (Angebot)', def: 'Empfangsbedürftige Willenserklärung, mit der jemand einem bestimmten anderen einen Vertragsschluss verbindlich anbietet (§ 145 BGB).' },
    { term: 'Anpreisung', def: 'Werbung, Katalog, Schaufenster oder Webshop an die Allgemeinheit; kein verbindlicher Antrag, sondern Aufforderung zur Abgabe eines Angebots.' },
    { term: 'Nichtigkeit', def: 'Ein Rechtsgeschäft ist von Anfang an unwirksam, z. B. wegen Geschäftsunfähigkeit, Formmangel oder Sittenwidrigkeit.' },
    { term: 'Anfechtbarkeit', def: 'Ein Rechtsgeschäft ist zunächst wirksam, kann aber wegen Irrtum, Täuschung oder Drohung angefochten werden und ist dann rückwirkend nichtig.' },
    { term: 'Mängelrüge', def: 'Mitteilung des Käufers an den Verkäufer über einen festgestellten Mangel; beim zweiseitigen Handelskauf unverzüglich (§ 377 HGB).' },
    { term: 'Verzug', def: 'Schuldhafte Verspätung einer fälligen Leistung, in der Regel nach Mahnung (§ 286 BGB).' }
  ],
  example: `# Praxisbeispiel: Palettenkauf der Saar-Mosel Spedition GmbH (Bezugsjahr 2026)

**1. Anpreisung:** Die Holzwerk Merzig GmbH verschickt einen Rundbrief an viele Speditionen: „Neue EPAL-Europaletten ab 13,50 € netto pro Stück.“ → Das ist nur eine **Anpreisung**.

**2. Anfrage:** Die Spedition fragt nach Preis und Lieferzeit für 400 Paletten. → Eine Anfrage ist **unverbindlich**.

**3. Angebot (Antrag):** Holzwerk Merzig schickt am 2. März 2026 ein Angebot per E-Mail: 400 Paletten zu 13,20 € netto je Stück, Lieferung frei Haus bis 20. März 2026, zahlbar innerhalb von 30 Tagen. → **verbindlicher Antrag**.

**4. Bestellung (Annahme):** Am 3. März bestellt die Disponentin Frau Klein genau zu diesen Bedingungen. → **Kaufvertrag** ist geschlossen.

**5. Erfüllung:** Am 18. März liefert Holzwerk Merzig (Übergabe und Übereignung). Der Lagerleiter prüft den Wareneingang sofort und findet 15 gebrochene Paletten → **mangelhafte Lieferung**; er rügt unverzüglich per E-Mail (§ 377 HGB) und verlangt Ersatzlieferung (Nacherfüllung).

**6. Zahlung:** Die Rechnung über 400 × 13,20 € = 5.280,00 € netto zuzüglich 19 % Umsatzsteuer = 6.283,20 € geht am 18. März ein. Zahlt die Spedition nicht innerhalb von 30 Tagen nach Fälligkeit und Zugang der Rechnung, gerät sie in **Zahlungsverzug**.

**Weitere Beispiele aus dem Speditionsalltag**
- Ein Gabelstapler wird bestellt, aber trotz fest vereinbartem Liefertermin „15. Mai 2026“ nicht geliefert → **Lieferungsverzug** ohne Mahnung (kalendermäßig bestimmt).
- Bestellter Bürobedarf (Druckerpapier, Toner) wird angeliefert, aber die Annahme wird verweigert, weil das Lager voll ist → **Annahmeverzug** der Spedition.`,
  rules: [
    'Rechtsfähig ist jeder Mensch ab der Geburt; geschäftsfähig wird man stufenweise: unter 7 geschäftsunfähig, 7–17 beschränkt, ab 18 voll.',
    'Taschengeldparagraph nur bei vollständiger Bezahlung mit überlassenem Geld – Ratenkäufe sind nicht erfasst.',
    'Ein Kaufvertrag entsteht durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme.',
    'Werbung, Kataloge und Webshops sind keine Anträge, sondern Anpreisungen.',
    'Eine verspätete oder abgeänderte Annahme gilt als neuer Antrag (§ 150 BGB).',
    'Nichtig = von Anfang an unwirksam; anfechtbar = wirksam, bis jemand fristgerecht anficht.',
    'Mangelhafte Lieferung und Lieferungsverzug verursacht der Verkäufer, Annahmeverzug und Zahlungsverzug der Käufer.'
  ],
  summary: `- **Rechtsfähigkeit** (§ 1 BGB): Träger von Rechten und Pflichten ab Geburt.
- **Geschäftsfähigkeit:** unter 7 geschäftsunfähig (nichtig, § 105), 7–17 beschränkt (Zustimmung nötig, §§ 107–108; Ausnahmen §§ 110, 112, 113), ab 18 voll.
- **Willenserklärung:** ausdrücklich oder schlüssig; empfangsbedürftige Erklärungen wirken mit Zugang.
- **Kaufvertrag:** Antrag + Annahme; Anpreisungen sind unverbindlich; abgeänderte Annahme = neuer Antrag.
- **§ 433 BGB:** Verkäufer übergibt, übereignet, liefert mangelfrei; Käufer zahlt und nimmt ab.
- **Nichtig** (§§ 105, 117, 118, 125, 134, 138) vs. **anfechtbar** (§§ 119, 120, 123).
- **Störungen:** Verkäufer → mangelhafte Lieferung, Lieferungsverzug; Käufer → Annahmeverzug, Zahlungsverzug. Kaufleute müssen unverzüglich untersuchen und rügen (§ 377 HGB).`,
  mistakes: [
    { wrong: 'Ein Onlineshop, der Paletten zu 12 € anbietet, muss zu diesem Preis verkaufen.', right: 'Die Darstellung im Shop ist eine Anpreisung. Erst die Bestellung ist der Antrag, die Annahme erfolgt durch die Auftragsbestätigung oder die Lieferung.' },
    { wrong: 'Ein 16-Jähriger kann mit seinem Taschengeld ein Handy auf Raten kaufen.', right: 'Der Taschengeldparagraph (§ 110 BGB) gilt nur, wenn die Leistung vollständig bewirkt ist. Bei Ratenkauf ist der Vertrag schwebend unwirksam, bis die Eltern genehmigen.' },
    { wrong: 'Rechtsfähigkeit und Geschäftsfähigkeit sind dasselbe.', right: 'Rechtsfähig ist jeder Mensch ab Geburt. Geschäftsfähig, also selbst handlungsfähig im Rechtsverkehr, wird man abgestuft nach Alter.' },
    { wrong: 'Ein Vertrag mit einem Irrtum ist automatisch nichtig.', right: 'Bei einem Irrtum ist der Vertrag zunächst wirksam. Er wird erst durch eine unverzügliche Anfechtung rückwirkend nichtig. Ein reiner Motivirrtum reicht nicht.' },
    { wrong: 'Der Verkäufer ist nur verpflichtet, die Ware zu übergeben.', right: 'Er muss die Sache übergeben, das Eigentum verschaffen und sie frei von Sach- und Rechtsmängeln liefern (§ 433 Abs. 1 BGB).' },
    { wrong: 'Wenn der Käufer die Ware nicht abholt, ist das Lieferungsverzug.', right: 'Nimmt der Käufer ordnungsgemäß angebotene Ware nicht ab, ist das Annahmeverzug. Lieferungsverzug betrifft den Verkäufer.' }
  ],
  flashcards: [
    { q: 'Ab wann ist ein Mensch rechtsfähig?', a: 'Mit Vollendung der Geburt (§ 1 BGB).' },
    { q: 'Welche drei Stufen der Geschäftsfähigkeit gibt es?', a: 'Geschäftsunfähig (unter 7), beschränkt geschäftsfähig (7 bis 17), voll geschäftsfähig (ab 18).' },
    { q: 'Was bedeutet „schwebend unwirksam“?', a: 'Der Vertrag eines beschränkt Geschäftsfähigen ohne Einwilligung hängt von der Genehmigung der Eltern ab (§ 108 BGB).' },
    { q: 'Was regelt § 110 BGB?', a: 'Taschengeldparagraph: Wirksam ist ein Vertrag, den der Minderjährige vollständig mit überlassenen Mitteln bezahlt.' },
    { q: 'Wie kommt ein Kaufvertrag zustande?', a: 'Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme.' },
    { q: 'Ist ein Katalog ein verbindliches Angebot?', a: 'Nein, er ist eine Anpreisung (Aufforderung zur Abgabe eines Angebots).' },
    { q: 'Was gilt bei einer abgeänderten Annahme?', a: 'Sie gilt als Ablehnung verbunden mit einem neuen Antrag (§ 150 Abs. 2 BGB).' },
    { q: 'Nenne die Pflichten des Verkäufers nach § 433 BGB.', a: 'Übergabe, Eigentumsverschaffung, mangelfreie Lieferung.' },
    { q: 'Nenne die Pflichten des Käufers nach § 433 BGB.', a: 'Kaufpreis zahlen und die Sache abnehmen.' },
    { q: 'Unterschied nichtig – anfechtbar?', a: 'Nichtig: von Anfang an unwirksam. Anfechtbar: zunächst wirksam, durch Anfechtung rückwirkend nichtig.' },
    { q: 'Welche Kaufvertragsstörungen verursacht der Käufer?', a: 'Annahmeverzug und Zahlungsverzug.' },
    { q: 'Was verlangt § 377 HGB vom kaufmännischen Käufer?', a: 'Ware unverzüglich untersuchen und Mängel unverzüglich rügen, sonst gilt die Ware als genehmigt.' }
  ],
  tasks: [
    {
      id: 'wiso-kaufvertrag-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Die zweijährige Emma erbt von ihrer Großmutter ein Grundstück. Welche Aussage ist richtig?',
      options: [
        'Emma kann nicht Eigentümerin werden, weil sie geschäftsunfähig ist.',
        'Emma wird Eigentümerin, weil sie rechtsfähig ist.',
        'Emma wird erst mit 18 Jahren Eigentümerin.',
        'Emma wird Eigentümerin, weil sie beschränkt geschäftsfähig ist.'
      ],
      correct: [1],
      hints: ['Um Eigentümer zu sein, muss man Träger von Rechten sein.', 'Ab wann ist ein Mensch rechtsfähig?'],
      solution: 'Richtig ist B. Emma ist **rechtsfähig** ab Vollendung der Geburt (§ 1 BGB) und kann deshalb Erbin und Eigentümerin sein. Sie ist zwar **geschäftsunfähig** (§ 104), aber für das Erben braucht sie keine eigene Willenserklärung; ihre Eltern vertreten sie.'
    },
    {
      id: 'wiso-kaufvertrag-a2', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne jedem Fall die passende rechtliche Folge zu.',
      pairs: [
        ['Ein Sechsjähriger kauft ein Comicheft für 4 €.', 'nichtig (§ 105 BGB)'],
        ['Eine 15-Jährige kauft von ihrem Taschengeld bar ein Buch für 12 €.', 'wirksam nach § 110 BGB'],
        ['Ein 16-Jähriger kauft ohne Wissen der Eltern einen Motorroller auf Raten.', 'schwebend unwirksam (§ 108 BGB)'],
        ['Ein 14-Jähriger bekommt von seinem Onkel ein Fahrrad geschenkt.', 'wirksam, lediglich rechtlicher Vorteil (§ 107 BGB)'],
        ['Ein 19-jähriger Auszubildender kauft einen gebrauchten Pkw.', 'voll wirksam (volljährig)']
      ],
      hints: ['Bestimme zuerst die Stufe der Geschäftsfähigkeit nach dem Alter.', 'Bei 7- bis 17-Jährigen: Ist das Geschäft nur vorteilhaft, mit Taschengeld vollständig bezahlt oder keins von beidem?'],
      solution: 'Unter 7 → **nichtig**; Taschengeld und vollständig bezahlt → **wirksam (§ 110)**; Ratenkauf ohne Einwilligung → **schwebend unwirksam**; Schenkung ohne Pflichten → **lediglich rechtlicher Vorteil, wirksam**; ab 18 → **voll wirksam**.'
    },
    {
      id: 'wiso-kaufvertrag-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zum Zustandekommen des Kaufvertrags.',
      text: 'Ein Kaufvertrag entsteht durch zwei übereinstimmende [[Willenserklärungen]]. Die erste heißt [[Antrag|Angebot]], die zweite [[Annahme]]. Werbung in einem Katalog ist nur eine [[Anpreisung]]. Nach § 433 BGB muss der Käufer den Kaufpreis zahlen und die Sache [[abnehmen]].',
      hints: ['Das BGB verwendet für das Angebot den Begriff „Antrag“.', 'Der Käufer hat zwei Hauptpflichten.'],
      solution: 'Zwei übereinstimmende **Willenserklärungen**: **Antrag** und **Annahme**. Katalogwerbung ist eine **Anpreisung**. Käuferpflichten: zahlen und **abnehmen**.'
    },
    {
      id: 'wiso-kaufvertrag-a4', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte beim Kauf eines Gabelstaplers durch eine Spedition in die richtige Reihenfolge (Kaufvertrag durch Angebot des Verkäufers).',
      items: [
        'Ein Händler wirbt auf seiner Website für Elektrostapler.',
        'Die Spedition schickt eine Anfrage zu Preis und Lieferzeit.',
        'Der Händler schickt ein verbindliches Angebot.',
        'Die Spedition bestellt zu den Bedingungen des Angebots – der Kaufvertrag ist geschlossen.',
        'Der Händler liefert den Stapler und übereignet ihn.',
        'Die Spedition prüft den Stapler unverzüglich und bezahlt die Rechnung.'
      ],
      hints: ['Werbung und Anfrage sind noch unverbindlich.', 'Erst nach Vertragsschluss folgt die Erfüllung.'],
      solution: 'Anpreisung (Website) → Anfrage → Angebot (Antrag) → Bestellung (Annahme, Vertragsschluss) → Lieferung und Übereignung (Erfüllung durch den Verkäufer) → Prüfung (§ 377 HGB) und Zahlung (Erfüllung durch den Käufer).'
    },
    {
      id: 'wiso-kaufvertrag-a5', type: 'mc', difficulty: 2, points: 2,
      q: 'Ein Bürobedarfshändler bietet der Spedition per E-Mail 20 Kartons Druckerpapier zu 4,10 € je Packung an. Die Spedition antwortet: „Wir bestellen 20 Kartons zu 3,80 € je Packung.“ Was gilt?',
      options: [
        'Ein Kaufvertrag zu 4,10 € ist zustande gekommen.',
        'Ein Kaufvertrag zu 3,80 € ist zustande gekommen.',
        'Es ist noch kein Kaufvertrag zustande gekommen; die Bestellung ist ein neuer Antrag, den der Händler annehmen kann.',
        'Der Händler muss zu 3,80 € liefern, weil der Kunde immer recht hat.'
      ],
      correct: [2],
      hints: ['Stimmen Angebot und Bestellung überein?', '§ 150 Abs. 2 BGB regelt die Annahme unter Änderungen.'],
      solution: 'Richtig ist C. Eine Annahme mit **Änderungen** gilt als **Ablehnung des Angebots verbunden mit einem neuen Antrag** (§ 150 Abs. 2 BGB). Ein Vertrag entsteht erst, wenn der Händler den Preis von 3,80 € akzeptiert, z. B. durch Auftragsbestätigung oder Lieferung.'
    },
    {
      id: 'wiso-kaufvertrag-a6', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Rechtsgeschäfte sind **anfechtbar** (und nicht von vornherein nichtig)? (Mehrfachauswahl)',
      options: [
        'Ein Disponent tippt beim Bestellen von Wechselbrücken-Planen versehentlich 100 statt 10.',
        'Ein Kaufvertrag über ein Grundstück wird nur mündlich geschlossen.',
        'Ein Gebrauchtwagenhändler verschweigt einen Unfallschaden, obwohl die Spedition ausdrücklich danach fragt.',
        'Ein Vierjähriger tauscht seine Spielkonsole gegen einen Ball.',
        'Ein Lieferant droht, Geschäftsgeheimnisse zu veröffentlichen, wenn die Spedition nicht zu überhöhten Preisen kauft.'
      ],
      correct: [0, 2, 4],
      hints: ['Irrtum, Täuschung und Drohung führen zur Anfechtbarkeit.', 'Formmangel und Geschäftsunfähigkeit führen zur Nichtigkeit.'],
      solution: 'Anfechtbar sind A (**Erklärungsirrtum**, § 119 – unverzüglich anfechten), C (**arglistige Täuschung**, § 123) und E (**widerrechtliche Drohung**, § 123). B ist **nichtig** wegen Formmangels (§§ 125, 311b – Grundstücksverträge brauchen notarielle Beurkundung), D ist **nichtig** wegen Geschäftsunfähigkeit (§ 105).'
    },
    {
      id: 'wiso-kaufvertrag-a7', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne jeder Situation aus dem Speditionsalltag die passende Kaufvertragsstörung zu.',
      pairs: [
        ['Von 200 gelieferten Gitterboxen sind 30 verbogen.', 'mangelhafte Lieferung'],
        ['Der fest zum 10. Juni zugesagte Gabelstapler kommt nicht.', 'Lieferungsverzug'],
        ['Die Spedition verweigert die Annahme ordnungsgemäß gelieferter Kartons.', 'Annahmeverzug'],
        ['Die Spedition bezahlt die Tonerrechnung auch nach der Mahnung nicht.', 'Zahlungsverzug']
      ],
      hints: ['Zwei Störungen verursacht der Verkäufer, zwei der Käufer.', 'Ist die Ware da, aber fehlerhaft, oder gar nicht da?'],
      solution: 'Verbogene Gitterboxen → **mangelhafte Lieferung** (Verkäufer); Stapler kommt nicht → **Lieferungsverzug** (Verkäufer, Mahnung entbehrlich wegen Kalendertermin); Annahme verweigert → **Annahmeverzug** (Käufer); Rechnung nicht bezahlt → **Zahlungsverzug** (Käufer).'
    },
    {
      id: 'wiso-kaufvertrag-a8', type: 'text', difficulty: 2, points: 4,
      q: 'Erkläre den Unterschied zwischen **Rechtsfähigkeit** und **Geschäftsfähigkeit** und nenne für die **beschränkte Geschäftsfähigkeit** zwei Ausnahmen, in denen Minderjährige ohne Zustimmung im Einzelfall wirksam handeln können.',
      model: 'Rechtsfähigkeit ist die Fähigkeit, Träger von Rechten und Pflichten zu sein; sie beginnt beim Menschen mit der Geburt (§ 1 BGB). Geschäftsfähigkeit ist die Fähigkeit, selbst wirksam Rechtsgeschäfte abzuschließen; sie ist nach Alter gestuft. Beschränkt Geschäftsfähige (7 bis 17 Jahre) brauchen grundsätzlich die Zustimmung der Eltern. Ausnahmen: Geschäfte, die lediglich einen rechtlichen Vorteil bringen (§ 107, z. B. Schenkung), und der Taschengeldparagraph (§ 110, vollständige Bezahlung mit überlassenen Mitteln). Weitere Ausnahmen: selbstständiger Betrieb eines Erwerbsgeschäfts (§ 112) und Arbeitsverhältnis mit Ermächtigung (§ 113).',
      criteria: [
        { text: 'Rechtsfähigkeit = Träger von Rechten und Pflichten, ab Geburt', keywords: ['Träger|Rechte und Pflichten', 'Geburt'], points: 1 },
        { text: 'Geschäftsfähigkeit = selbst wirksam Rechtsgeschäfte/Verträge schließen', keywords: ['Rechtsgeschäft|Vertr|wirksam'], points: 1 },
        { text: 'nennt Ausnahme rechtlicher Vorteil oder Taschengeld', keywords: ['Vorteil|Schenkung|Taschengeld|110|107'], points: 1 },
        { text: 'nennt eine zweite Ausnahme', keywords: ['Erwerbsgeschäft|112|Arbeitsverhältnis|113|Taschengeld|Vorteil'], points: 1 }
      ],
      hints: ['Kann ein Baby Eigentümer sein? Kann es einen Vertrag schließen?', 'Denke an §§ 107, 110, 112 und 113 BGB.'],
      solution: 'Siehe Musterlösung: **Rechtsfähigkeit** = Träger von Rechten und Pflichten (ab Geburt); **Geschäftsfähigkeit** = eigenes wirksames Handeln (nach Alter gestuft). Ausnahmen: **lediglich rechtlicher Vorteil** (§ 107), **Taschengeldparagraph** (§ 110), **Erwerbsgeschäft** (§ 112), **Arbeitsverhältnis** (§ 113).'
    },
    {
      id: 'wiso-kaufvertrag-a9', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Paletten für die Blies-Logistik KG',
      intro: `Die Blies-Logistik KG (Homburg) benötigt neue Europaletten. Am **Montag, 9. März 2026**, erhält sie per E-Mail ein Angebot der Pfalz-Paletten GmbH: „300 EPAL-Europaletten, 13,40 € netto je Stück, Lieferung frei Haus innerhalb von 10 Tagen nach Bestellung. Zahlungsziel 30 Tage. Angebot gültig bis 13. März 2026.“

Der 17-jährige Auszubildende **Nico** soll die Bestellung vorbereiten. Er bestellt am **16. März 2026** per E-Mail im Namen der Blies-Logistik KG zu den Bedingungen des Angebots. Nico ist dazu von seiner Ausbilderin beauftragt.

Am 24. März werden 300 Paletten geliefert. Der Lagerleiter stellt bei der Wareneingangskontrolle am selben Tag fest, dass 20 Paletten Risse in den Klötzen haben.`,
      hints: ['Prüfe zuerst die Annahmefrist des Angebots.', 'Wer ist Vertragspartner – Nico oder die KG?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'wiso-kaufvertrag-a9-1', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Aussagen zum Vertragsschluss sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Bestellung vom 16. März ist verspätet und gilt als neuer Antrag der Blies-Logistik KG.',
            'Ein Kaufvertrag ist am 16. März mit Eingang der Bestellung zustande gekommen, weil sie das Angebot genau übernimmt.',
            'Durch die Lieferung am 24. März hat die Pfalz-Paletten GmbH den neuen Antrag schlüssig angenommen.',
            'Der Vertrag ist unwirksam, weil Nico minderjährig ist.'
          ],
          correct: [0, 2],
          hints: ['Bis wann war das Angebot gültig? § 148 und § 150 Abs. 1 BGB.', 'Nico handelt nicht für sich selbst, sondern als Vertreter der KG.'],
          solution: 'Richtig sind A und C. Das Angebot war bis **13. März** befristet (§ 148 BGB); die Bestellung vom 16. März ist **verspätet** und gilt als **neuer Antrag** (§ 150 Abs. 1 BGB). Die **Lieferung** ist eine schlüssige Annahme – damit besteht ein Kaufvertrag. Nicos Minderjährigkeit schadet nicht: Er gibt die Erklärung als **Vertreter** für die KG ab; für Vertreter genügt beschränkte Geschäftsfähigkeit (§ 165 BGB), Vertragspartner wird die KG.'
        },
        {
          id: 'wiso-kaufvertrag-a9-2', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Kaufvertragsstörung liegt am 24. März vor, und was muss die Blies-Logistik KG als Kaufmann tun?',
          options: [
            'Lieferungsverzug; sie muss eine Mahnung schicken.',
            'Mangelhafte Lieferung; sie muss den Mangel unverzüglich rügen (§ 377 HGB).',
            'Annahmeverzug; sie muss die Paletten zurückschicken.',
            'Es liegt keine Störung vor, Risse in Klötzen sind unerheblich.'
          ],
          correct: [1],
          hints: ['Die Ware ist pünktlich da – ist sie in Ordnung?', 'Beide Vertragspartner sind Kaufleute.'],
          solution: 'Richtig ist B. Die Paletten mit Rissen haben einen **Sachmangel** (§ 434 BGB) – **mangelhafte Lieferung**. Beim zweiseitigen Handelskauf muss die KG **unverzüglich untersuchen und rügen** (§ 377 HGB), sonst gilt die Ware als genehmigt. Die Lieferung kam innerhalb von 10 Tagen nach Vertragsschluss, also kein Lieferungsverzug.'
        },
        {
          id: 'wiso-kaufvertrag-a9-3', type: 'text', difficulty: 2, points: 2,
          q: 'Welches Recht sollte die Blies-Logistik KG wegen der 20 beschädigten Paletten **zuerst** geltend machen? Begründe kurz und nenne die beiden Möglichkeiten dieses Rechts.',
          model: 'Zuerst ist die Nacherfüllung zu verlangen (§§ 437 Nr. 1, 439 BGB), weil sie im Kaufrecht Vorrang vor Rücktritt, Minderung und Schadensersatz hat. Der Käufer kann wählen zwischen Nachbesserung (Reparatur der Paletten) und Ersatzlieferung (20 neue, mangelfreie Paletten). Bei Paletten ist die Ersatzlieferung praktisch sinnvoll.',
          criteria: [
            { text: 'nennt Nacherfüllung mit Vorrang', keywords: ['Nacherfüllung|nacherfüll', 'zuerst|Vorrang|vorrangig'], points: 1 },
            { text: 'nennt Nachbesserung und Ersatzlieferung', keywords: ['Nachbesserung|Reparatur|reparieren', 'Ersatzlieferung|Neulieferung|neue'], points: 1 }
          ],
          hints: ['Der Verkäufer bekommt im Kaufrecht eine „zweite Chance“.', 'Diese zweite Chance hat zwei Formen.'],
          solution: 'Zuerst **Nacherfüllung** (§ 439 BGB) – sie hat Vorrang. Wahl zwischen **Nachbesserung** und **Ersatzlieferung**. Erst wenn sie fehlschlägt oder verweigert wird, kommen Rücktritt, Minderung oder Schadensersatz in Betracht.'
        }
      ]
    },
    {
      id: 'wiso-kaufvertrag-a10', type: 'mc', difficulty: 2, points: 2,
      q: 'Wann gerät die Spedition als Käuferin ohne Mahnung in **Zahlungsverzug**? (Mehrfachauswahl)',
      options: [
        'Wenn im Vertrag ein kalendermäßig bestimmter Zahlungstermin vereinbart ist („zahlbar am 30. April 2026“) und sie nicht zahlt.',
        'Spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung.',
        'Sofort am Tag der Lieferung, auch ohne Rechnung.',
        'Erst nach dem dritten Mahnschreiben.'
      ],
      correct: [0, 1],
      hints: ['§ 286 Abs. 2 und 3 BGB nennen Fälle ohne Mahnung.', 'Unter Unternehmern spielt die 30-Tage-Regel eine wichtige Rolle.'],
      solution: 'Richtig sind A und B. Ohne Mahnung tritt Verzug ein, wenn ein **Termin nach dem Kalender bestimmt** ist (§ 286 Abs. 2 Nr. 1 BGB) oder spätestens **30 Tage nach Fälligkeit und Zugang der Rechnung** (§ 286 Abs. 3). Mehrere Mahnungen sind rechtlich nicht vorgeschrieben.'
    },
    {
      id: 'wiso-kaufvertrag-a11', type: 'mc', difficulty: 1, points: 2,
      q: 'Welche Pflichten hat der **Verkäufer** nach § 433 Abs. 1 BGB? (Mehrfachauswahl)',
      options: [
        'Die Sache übergeben',
        'Das Eigentum an der Sache verschaffen',
        'Die Sache frei von Sach- und Rechtsmängeln liefern',
        'Den Kaufpreis zahlen',
        'Die Sache abnehmen'
      ],
      correct: [0, 1, 2],
      hints: ['Zwei der Antworten sind Käuferpflichten (§ 433 Abs. 2).', 'Übergabe und Eigentum sind zwei verschiedene Dinge.'],
      solution: 'Richtig sind A, B und C (§ 433 Abs. 1 BGB). **Zahlen** und **Abnehmen** sind Pflichten des **Käufers** (§ 433 Abs. 2).'
    }
  ],
  quiz: ['wiso-kaufvertrag-a2', 'wiso-kaufvertrag-a3', 'wiso-kaufvertrag-a5', 'wiso-kaufvertrag-a7', 'wiso-kaufvertrag-a9'],
  sources: [
    { id: 'saar-wiso-2016', ref: 'W4' },
    { id: 'kmk-rlp-2004', ref: 'LF 8, Inhalte: Kaufvertrag' },
    { title: 'Bürgerliches Gesetzbuch § 1 Beginn der Rechtsfähigkeit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__1.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 104 Geschäftsunfähigkeit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__104.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 106 Beschränkte Geschäftsfähigkeit Minderjähriger', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__106.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 107 Einwilligung des gesetzlichen Vertreters', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__107.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 108 Vertragsschluss ohne Einwilligung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__108.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 110 Bewirken der Leistung mit eigenen Mitteln', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__110.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 113 Dienst- oder Arbeitsverhältnis', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__113.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 119 Anfechtbarkeit wegen Irrtums', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__119.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 123 Anfechtbarkeit wegen Täuschung oder Drohung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__123.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 145 Bindung an den Antrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__145.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 147 Annahmefrist', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__147.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 150 Verspätete und abändernde Annahme', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__150.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 433 Vertragstypische Pflichten beim Kaufvertrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__433.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 437 Rechte des Käufers bei Mängeln', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__437.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 286 Verzug des Schuldners', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__286.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 293 Annahmeverzug', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__293.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 377 Untersuchungs- und Rügepflicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__377.html', asOf: '2026' }
  ],
  links: ['wiso-ausbildungsvertrag']
};
