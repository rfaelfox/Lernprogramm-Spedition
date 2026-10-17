export default {
  id: 'lf02-vollmachten',
  area: 'LF02',
  topic: 'lf02-vollmachten',
  title: 'Vollmachten: Handlungsvollmacht und Prokura',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Kaufmannseigenschaft § 1 HGB, Prokura §§ 48–53 HGB, Handlungsvollmacht §§ 54, 57, 58 HGB, Publizität des Handelsregisters § 15 HGB; Stand Oktober 2026.'
  },
  goals: [
    'Ich kann erklären, wer Kaufmann nach § 1 HGB ist und warum das für Vollmachten wichtig ist.',
    'Ich kann allgemeine Handlungsvollmacht, Artvollmacht und Einzelvollmacht unterscheiden.',
    'Ich kann die gesetzlichen Grenzen der Handlungsvollmacht nach § 54 Abs. 2 HGB nennen.',
    'Ich kann Erteilung, Eintragung, Umfang und Grenzen der Prokura erklären.',
    'Ich kann Einzel- und Gesamtprokura unterscheiden und weiß, wie ein Prokurist zeichnet.',
    'Ich kann entscheiden, ob ein Bevollmächtigter ein bestimmtes Geschäft abschließen darf.',
    'Ich kann erklären, wann eine Prokura erlischt und welche Rolle das Handelsregister dabei spielt.'
  ],
  simple: `# Warum Vollmachten?

Der Inhaber einer Spedition kann nicht jeden Frachtauftrag selbst unterschreiben. Deshalb gibt er Mitarbeitenden eine **Vollmacht**: die Befugnis, im Namen des Unternehmens zu handeln. Das Unternehmen ist dann an die Geschäfte gebunden.

Das HGB kennt zwei kaufmännische Vollmachten – sie setzen voraus, dass das Unternehmen **Kaufmann** ist (§ 1 HGB: wer ein Handelsgewerbe betreibt; eine GmbH ist es immer).

# Handlungsvollmacht (§ 54 HGB)

| Art | Umfang | Beispiel |
|---|---|---|
| **Allgemeine Handlungsvollmacht** | alle **gewöhnlichen** Geschäfte des Betriebs | Niederlassungsleiter |
| **Artvollmacht** | eine bestimmte **Art** von Geschäften, immer wieder | Disponentin darf Frachtaufträge an Unternehmer vergeben |
| **Einzelvollmacht** | ein **einzelnes** Geschäft | Azubi soll heute ein Paket Druckerpapier kaufen |

Formfrei, auch mündlich oder stillschweigend; **keine** Eintragung ins Handelsregister.

# Prokura (§§ 48–53 HGB)

Die stärkste Vollmacht: Der Prokurist darf fast **alle** Geschäfte, die **irgendein** Handelsgewerbe mit sich bringt – auch ungewöhnliche.
- Nur der **Inhaber** darf sie erteilen, und zwar **ausdrücklich**.
- Sie wird ins **Handelsregister** eingetragen.
- Der Prokurist zeichnet mit **ppa.**

# Was darf der Prokurist **nicht**?

Grundstücke **verkaufen oder belasten** (nur mit besonderer Befugnis), Prokura erteilen, die Bilanz unterschreiben, das Geschäft verkaufen oder auflösen.`,
  deep: `# Kaufmannseigenschaft kurz

- **§ 1 Abs. 1 HGB**: Kaufmann ist, wer ein **Handelsgewerbe** betreibt.
- **§ 1 Abs. 2 HGB**: Handelsgewerbe ist **jeder Gewerbebetrieb**, es sei denn, das Unternehmen erfordert nach **Art oder Umfang** keinen in kaufmännischer Weise eingerichteten Geschäftsbetrieb (Kleingewerbe).
- Eine Spedition mit Disposition, Buchhaltung und mehreren Mitarbeitenden ist daher regelmäßig **Istkaufmann**. Kapitalgesellschaften wie GmbH und AG sind Kaufleute kraft Rechtsform (**Formkaufmann**).
- Nur Kaufleute können **Prokura** erteilen; die Prokura wird im Handelsregister eingetragen.

# Handlungsvollmacht im Detail (§ 54 HGB)

**Abs. 1 – Umfang**: Die Handlungsvollmacht erstreckt sich auf alle Geschäfte und Rechtshandlungen, die der Betrieb **eines derartigen** Handelsgewerbes oder die Vornahme **derartiger** Geschäfte **gewöhnlich** mit sich bringt. Maßstab ist also das Übliche in einer Spedition dieser Art.

**Abs. 2 – gesetzliche Grenzen**: Nur mit **besonderer Befugnis** darf der Handlungsbevollmächtigte
1. **Grundstücke veräußern oder belasten**,
2. **Wechselverbindlichkeiten** eingehen,
3. **Darlehen aufnehmen**,
4. **Prozesse führen**.

**Abs. 3 – sonstige Beschränkungen**: Weitere (betriebsinterne) Beschränkungen muss ein Dritter nur gegen sich gelten lassen, wenn er sie **kannte oder kennen musste**.

Weitere Regeln:
- **Erteilung**: formfrei durch den Inhaber oder einen Prokuristen (ausdrücklich, mündlich, schriftlich oder durch schlüssiges Verhalten).
- **Zeichnung** (§ 57 HGB): mit einem Zusatz, der das Vollmachtsverhältnis ausdrückt, ohne auf Prokura hinzuweisen. In der Praxis üblich: **i. V.** (in Vollmacht) bei allgemeiner Vollmacht und Artvollmacht, **i. A.** (im Auftrag) bei Einzelvollmacht oder reiner Ausführung.
- **Übertragung** (§ 58 HGB): nur mit **Zustimmung des Inhabers**.

# Prokura im Detail

| Merkmal | Regelung |
|---|---|
| **Erteilung** (§ 48 Abs. 1) | nur durch den **Inhaber** oder seinen gesetzlichen Vertreter, nur durch **ausdrückliche Erklärung** (nicht stillschweigend) |
| **Gesamtprokura** (§ 48 Abs. 2) | Erteilung an mehrere Personen **gemeinschaftlich**: sie dürfen nur zusammen handeln |
| **Umfang** (§ 49 Abs. 1) | alle gerichtlichen und außergerichtlichen Geschäfte und Rechtshandlungen, die der Betrieb **eines** (irgendeines) Handelsgewerbes mit sich bringt – auch branchenfremde und ungewöhnliche |
| **Grundstücke** (§ 49 Abs. 2) | **Veräußerung und Belastung** nur mit besonderer Befugnis; der **Kauf** eines Grundstücks ist erlaubt |
| **Beschränkungen** (§ 50) | im Außenverhältnis **unwirksam**; Ausnahme: Beschränkung auf eine Niederlassung mit eigener Firma (**Filialprokura**, § 50 Abs. 3) |
| **Zeichnung** (§ 51) | Firma + Zusatz, der die Prokura andeutet + eigener Name, z. B. **ppa.** |
| **Widerruf/Übertragung** (§ 52) | **jederzeit widerruflich**; **nicht übertragbar**; erlischt **nicht** durch den Tod des Inhabers |
| **Handelsregister** (§ 53) | Erteilung und Erlöschen sind zur Eintragung anzumelden; die Eintragung ist **deklaratorisch** – die Prokura gilt schon ab der Erteilung |

**Innen- und Außenverhältnis**: Legt der Inhaber intern fest, dass der Prokurist nur Geschäfte bis 50.000 € abschließen darf, ist ein Geschäft über 80.000 € **trotzdem wirksam** (§ 50 Abs. 1). Der Prokurist verletzt aber seine Pflichten gegenüber dem Arbeitgeber – mögliche Folgen: Abmahnung, Widerruf, Schadensersatz.

**Typische Geschäfte, die auch der Prokurist nicht vornehmen darf** (sog. Inhaber- oder Grundlagengeschäfte, weil sie das Unternehmen selbst betreffen):
- Prokura erteilen (§ 48: nur der Inhaber),
- Jahresabschluss/Bilanz unterzeichnen (§ 245 HGB: der Kaufmann),
- das Geschäft veräußern, einstellen oder auflösen, neue Gesellschafter aufnehmen,
- Insolvenzantrag für das Unternehmen stellen,
- Grundstücke veräußern oder belasten (ohne besondere Befugnis).

**Erlöschen der Prokura**: Widerruf (§ 52 Abs. 1), Ende des zugrunde liegenden Arbeitsverhältnisses, Tod des Prokuristen, Einstellung oder Veräußerung des Geschäfts, Eröffnung des Insolvenzverfahrens. **Nicht** beim Tod des Inhabers (§ 52 Abs. 3).

**§ 15 Abs. 1 HGB**: Solange das Erlöschen nicht eingetragen und bekanntgemacht ist, kann es einem gutgläubigen Dritten nicht entgegengehalten werden. Deshalb ist die Löschung sofort anzumelden.

# Vergleich

| | Allgemeine Handlungsvollmacht | Prokura |
|---|---|---|
| Erteilung durch | Inhaber oder Prokurist | nur Inhaber |
| Form | formfrei, auch stillschweigend | ausdrücklich |
| Handelsregister | nein | ja (deklaratorisch) |
| Umfang | gewöhnliche Geschäfte **dieser** Branche | Geschäfte **jedes** Handelsgewerbes |
| Darlehen aufnehmen, Wechsel, Prozess | nur mit besonderer Befugnis | ja |
| Grundstücke veräußern/belasten | nur mit besonderer Befugnis | nur mit besonderer Befugnis |
| Beschränkungen nach außen | wirksam, wenn Dritter sie kannte/kennen musste | unwirksam (§ 50) |
| Zeichnung | i. V. / i. A. | ppa. |`,
  terms: [
    { term: 'Vollmacht', def: 'Durch Rechtsgeschäft erteilte Befugnis, im Namen eines anderen zu handeln und ihn dadurch zu verpflichten.' },
    { term: 'Kaufmann (Istkaufmann)', def: 'Wer ein Handelsgewerbe betreibt, also einen Gewerbebetrieb, der nach Art oder Umfang einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert (§ 1 HGB).' },
    { term: 'Allgemeine Handlungsvollmacht', def: 'Befugnis zu allen gewöhnlichen Geschäften, die der Betrieb eines derartigen Handelsgewerbes mit sich bringt (§ 54 Abs. 1 HGB).' },
    { term: 'Artvollmacht', def: 'Handlungsvollmacht für eine bestimmte Art von wiederkehrenden Geschäften, z. B. Erteilung von Frachtaufträgen.' },
    { term: 'Einzelvollmacht', def: 'Handlungsvollmacht für ein einzelnes, bestimmtes Geschäft.' },
    { term: 'Prokura', def: 'Umfassende, ins Handelsregister einzutragende kaufmännische Vollmacht für alle Geschäfte, die der Betrieb irgendeines Handelsgewerbes mit sich bringt (§§ 48–53 HGB).' },
    { term: 'Gesamtprokura', def: 'Prokura, die mehreren Personen gemeinschaftlich erteilt ist; sie können nur gemeinsam wirksam handeln (§ 48 Abs. 2 HGB).' },
    { term: 'Filialprokura', def: 'Auf eine Niederlassung beschränkte Prokura, nach außen nur wirksam, wenn die Niederlassung unter einer eigenen Firma geführt wird (§ 50 Abs. 3 HGB).' },
    { term: 'ppa.', def: 'Abkürzung für „per procura“; Zusatz, mit dem der Prokurist zeichnet (§ 51 HGB).' },
    { term: 'Deklaratorische Eintragung', def: 'Eintragung, die eine bereits bestehende Rechtslage nur bekannt macht; die Prokura ist schon mit der Erteilung wirksam.' },
    { term: 'Publizität des Handelsregisters', def: 'Nicht eingetragene und bekanntgemachte eintragungspflichtige Tatsachen können gutgläubigen Dritten nicht entgegengehalten werden (§ 15 Abs. 1 HGB).' }
  ],
  example: `# Vollmachten bei der Hochwald Spedition GmbH, Merzig (Beispiel)

| Person | Stelle | Vollmacht | Zeichnet |
|---|---|---|---|
| Frau Dr. Becker | Geschäftsführerin | gesetzliche Vertreterin der GmbH | ohne Zusatz |
| Herr Schmitt | Kaufmännischer Leiter | Einzelprokura, im Handelsregister eingetragen | Hochwald Spedition GmbH ppa. Schmitt |
| Frau Yilmaz und Herr Roth | Leitung Luftfracht und Leitung Lager | Gesamtprokura (nur gemeinsam) | ppa. Yilmaz ppa. Roth |
| Herr Kraus | Niederlassungsleiter Trier | allgemeine Handlungsvollmacht | i. V. Kraus |
| Frau Meier | Disponentin Landverkehr | Artvollmacht: Frachtaufträge an Unternehmer erteilen | i. V. Meier |
| Lukas | Auszubildender | Einzelvollmacht: Paletten beim Händler abholen und bar bezahlen | i. A. Lukas |

**Situation 1:** Herr Schmitt kauft ein Nachbargrundstück für eine neue Umschlaghalle. → **Darf er**: Der **Erwerb** von Grundstücken ist von der Prokura gedeckt (§ 49 Abs. 1); nur Veräußerung und Belastung sind ausgenommen (§ 49 Abs. 2).

**Situation 2:** Für den Kaufpreis will Herr Schmitt eine Grundschuld auf das Grundstück eintragen lassen. → **Darf er nicht** ohne besondere Befugnis: Das ist eine **Belastung** eines Grundstücks.

**Situation 3:** Herr Kraus nimmt für die Niederlassung ein Darlehen über 40.000 € auf. → **Darf er nicht** ohne besondere Befugnis (§ 54 Abs. 2 HGB: Darlehensaufnahme).

**Situation 4:** Frau Yilmaz unterschreibt allein einen Leasingvertrag für Stapler. → Nicht wirksam, weil sie nur **gemeinsam** mit Herrn Roth handeln darf; der Vertrag wird erst wirksam, wenn die Gesellschaft (z. B. Herr Roth oder die Geschäftsführerin) ihn genehmigt.`,
  rules: [
    'Prokura: nur vom Inhaber, nur ausdrücklich, Eintragung ins Handelsregister, Zeichnung ppa.',
    'Prokura gilt für Geschäfte jedes Handelsgewerbes; Handlungsvollmacht nur für gewöhnliche Geschäfte dieser Branche.',
    'Prokurist: Grundstücke kaufen ja, verkaufen oder belasten nur mit besonderer Befugnis.',
    'Handlungsbevollmächtigter: Grundstücke veräußern/belasten, Wechsel, Darlehen aufnehmen, Prozesse führen nur mit besonderer Befugnis (§ 54 Abs. 2).',
    'Interne Beschränkungen der Prokura sind nach außen unwirksam (§ 50 HGB).',
    'Prokura erlischt nicht durch den Tod des Inhabers; Erlöschen sofort im Handelsregister löschen lassen (§ 15 HGB).',
    'Inhabergeschäfte (Prokura erteilen, Bilanz unterzeichnen, Geschäft verkaufen, Insolvenzantrag) bleiben dem Inhaber vorbehalten.'
  ],
  summary: `- **Kaufmann** (§ 1 HGB): betreibt ein Handelsgewerbe; GmbH/AG sind Formkaufleute.
- **Handlungsvollmacht** (§ 54): allgemeine, Art- und Einzelvollmacht; formfrei, keine Eintragung; gewöhnliche Geschäfte; Grenzen nach Abs. 2: Grundstücke veräußern/belasten, Wechsel, Darlehen aufnehmen, Prozessführung.
- **Prokura** (§§ 48–53): ausdrücklich durch den Inhaber, Eintragung (deklaratorisch), Umfang: Geschäfte jedes Handelsgewerbes, Grenze: Grundstücke veräußern/belasten; Beschränkung nach außen unwirksam; Einzel- oder Gesamtprokura; Zeichnung **ppa.**
- **Erlöschen**: Widerruf, Ende des Arbeitsverhältnisses, Tod des Prokuristen, Geschäftsaufgabe, Insolvenz – **nicht** Tod des Inhabers. Löschung eintragen (§ 15 HGB).`,
  mistakes: [
    { wrong: 'Die Prokura ist erst ab der Eintragung im Handelsregister wirksam.', right: 'Die Prokura wirkt ab der ausdrücklichen Erteilung; die Eintragung ist deklaratorisch, aber Pflicht (§ 53 HGB).' },
    { wrong: 'Ein Prokurist darf keine Grundstücke kaufen.', right: 'Der Kauf ist erlaubt. Nur Veräußerung und Belastung von Grundstücken brauchen eine besondere Befugnis (§ 49 Abs. 2 HGB).' },
    { wrong: 'Wenn der Chef dem Prokuristen intern eine Grenze von 50.000 € setzt, ist ein Vertrag über 80.000 € unwirksam.', right: 'Nach außen ist die Beschränkung unwirksam (§ 50 Abs. 1 HGB); der Vertrag gilt. Intern kann der Prokurist haftbar sein.' },
    { wrong: 'Ein Prokurist kann einem Kollegen Prokura erteilen.', right: 'Prokura kann nur der Inhaber oder sein gesetzlicher Vertreter erteilen (§ 48 Abs. 1 HGB). Handlungsvollmacht darf der Prokurist erteilen.' },
    { wrong: 'Mit dem Tod des Inhabers erlischt die Prokura.', right: 'Die Prokura erlischt nicht durch den Tod des Inhabers (§ 52 Abs. 3 HGB).' },
    { wrong: 'Ein allgemeiner Handlungsbevollmächtigter darf für die Spedition einen Kredit aufnehmen.', right: 'Darlehensaufnahme erfordert nach § 54 Abs. 2 HGB eine besondere Befugnis.' }
  ],
  flashcards: [
    { q: 'Wer ist Kaufmann nach § 1 HGB?', a: 'Wer ein Handelsgewerbe betreibt – jeder Gewerbebetrieb, der nach Art oder Umfang einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert.' },
    { q: 'Welche drei Arten der Handlungsvollmacht gibt es?', a: 'Allgemeine Handlungsvollmacht, Artvollmacht, Einzelvollmacht.' },
    { q: 'Welche vier Geschäfte darf ein Handlungsbevollmächtigter nur mit besonderer Befugnis vornehmen?', a: 'Grundstücke veräußern oder belasten, Wechselverbindlichkeiten eingehen, Darlehen aufnehmen, Prozesse führen (§ 54 Abs. 2 HGB).' },
    { q: 'Wie wird Prokura erteilt?', a: 'Nur vom Inhaber oder seinem gesetzlichen Vertreter und nur durch ausdrückliche Erklärung (§ 48 Abs. 1 HGB).' },
    { q: 'Was darf ein Prokurist bei Grundstücken nicht ohne besondere Befugnis?', a: 'Grundstücke veräußern oder belasten (§ 49 Abs. 2 HGB). Kaufen darf er.' },
    { q: 'Was ist Gesamtprokura?', a: 'Prokura, die mehreren Personen gemeinschaftlich erteilt ist; sie handeln nur zusammen wirksam.' },
    { q: 'Wie zeichnet ein Prokurist?', a: 'Firma, Zusatz „ppa.“ und eigener Name (§ 51 HGB).' },
    { q: 'Ist eine interne Beschränkung der Prokura Dritten gegenüber wirksam?', a: 'Nein (§ 50 Abs. 1 HGB). Ausnahme: Filialprokura bei Niederlassung mit eigener Firma.' },
    { q: 'Erlischt die Prokura beim Tod des Inhabers?', a: 'Nein (§ 52 Abs. 3 HGB).' },
    { q: 'Was bewirkt § 15 Abs. 1 HGB beim Widerruf einer Prokura?', a: 'Ist das Erlöschen nicht eingetragen und bekanntgemacht, kann es gutgläubigen Dritten nicht entgegengehalten werden.' },
    { q: 'Darf ein Handlungsbevollmächtigter seine Vollmacht weitergeben?', a: 'Nur mit Zustimmung des Inhabers (§ 58 HGB).' }
  ],
  tasks: [
    {
      id: 'lf02-vollmachten-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Der Geschäftsführer der Saar-Express GmbH sagt beim Betriebsfest zu seiner Abteilungsleiterin: „Sie machen das so gut, Sie sind ab jetzt praktisch meine rechte Hand.“ Hat sie damit Prokura?',
      options: [
        'Ja, Prokura kann formlos und auch stillschweigend erteilt werden.',
        'Nein, Prokura muss ausdrücklich erteilt werden; die Aussage ist keine ausdrückliche Prokuraerteilung.',
        'Ja, aber erst nach Eintragung ins Handelsregister.',
        'Nein, weil eine GmbH keine Prokura erteilen kann.'
      ],
      correct: [1],
      hints: ['Lies § 48 Abs. 1 HGB.', 'Eine GmbH ist Formkaufmann.'],
      solution: 'Prokura kann nur durch **ausdrückliche Erklärung** erteilt werden (§ 48 Abs. 1 HGB) – also klar als „Prokura“ erkennbar. Eine lobende Bemerkung reicht nicht. Eine GmbH kann als Kaufmann Prokura erteilen (durch den Geschäftsführer als gesetzlichen Vertreter). Die Eintragung ist nur deklaratorisch.'
    },
    {
      id: 'lf02-vollmachten-a2', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Situation der passenden Vollmacht zu.',
      pairs: [
        ['Der Niederlassungsleiter darf alle üblichen Geschäfte der Niederlassung abschließen', 'Allgemeine Handlungsvollmacht'],
        ['Die Disponentin vergibt täglich Frachtaufträge an Subunternehmer', 'Artvollmacht'],
        ['Der Azubi soll einmalig Kartons im Baumarkt kaufen', 'Einzelvollmacht'],
        ['Der kaufmännische Leiter darf ein Grundstück für eine neue Halle kaufen', 'Prokura']
      ],
      hints: ['Ein Geschäft – eine Art von Geschäften – alle gewöhnlichen Geschäfte.', 'Grundstückskauf ist kein gewöhnliches Geschäft einer Spedition.'],
      solution: 'Alle gewöhnlichen Geschäfte = **allgemeine Handlungsvollmacht**; wiederkehrende Geschäfte einer Art = **Artvollmacht**; ein Geschäft = **Einzelvollmacht**; außergewöhnliches Geschäft wie Grundstückskauf = von der **Prokura** gedeckt (§ 49 Abs. 1 HGB).'
    },
    {
      id: 'lf02-vollmachten-a3', type: 'mc', difficulty: 2, points: 5,
      q: 'Welche Geschäfte darf ein **Einzelprokurist** ohne besondere Befugnis vornehmen? (Mehrfachauswahl)',
      options: [
        'Ein Darlehen über 200.000 € für neue Lkw aufnehmen',
        'Das Betriebsgrundstück verkaufen',
        'Einen Rechtsstreit gegen einen säumigen Kunden führen',
        'Einem Kollegen Prokura erteilen',
        'Ein Grundstück für ein neues Lager kaufen',
        'Die Jahresbilanz unterzeichnen',
        'Einen Wechsel akzeptieren',
        'Einer Disponentin Artvollmacht erteilen'
      ],
      correct: [0, 2, 4, 6, 7],
      hints: ['Die Prokura umfasst auch ungewöhnliche Geschäfte; nur Grundstücke veräußern/belasten ist ausgenommen.', 'Manche Handlungen sind dem Inhaber vorbehalten.'],
      solution: `**Erlaubt:** Darlehen aufnehmen, Prozess führen, Grundstück **kaufen**, Wechsel akzeptieren, Artvollmacht erteilen – all das bringt der Betrieb eines Handelsgewerbes mit sich (§ 49 Abs. 1 HGB).

**Nicht erlaubt:** Grundstück **verkaufen** (§ 49 Abs. 2 HGB, nur mit besonderer Befugnis), **Prokura erteilen** (§ 48 Abs. 1 HGB, nur Inhaber), **Bilanz unterzeichnen** (§ 245 HGB, Kaufmann selbst).

**Artvollmacht erteilen** ist ebenfalls erlaubt: Ein Prokurist darf Handlungsvollmacht erteilen – nur Prokura nicht. Richtig sind also A, C, E, G und H.`
    },
    {
      id: 'lf02-vollmachten-a4', type: 'mc', difficulty: 2, points: 2,
      q: 'Herr Kraus hat **allgemeine Handlungsvollmacht** für die Niederlassung einer Spedition. Was darf er **ohne** besondere Befugnis? (Mehrfachauswahl)',
      options: [
        'Einen Frachtvertrag mit einem Großkunden abschließen',
        'Einen Kontokorrentkredit bei der Bank aufnehmen',
        'Eine Aushilfskraft für das Lager einstellen',
        'Gegen einen Kunden Klage beim Amtsgericht erheben'
      ],
      correct: [0, 2],
      hints: ['Gewöhnliche Geschäfte einer Spedition sind erlaubt.', 'Prüfe die vier Ausnahmen in § 54 Abs. 2 HGB.'],
      solution: '**Frachtvertrag** und **Einstellung einer Aushilfe** sind gewöhnliche Geschäfte einer Spedition (§ 54 Abs. 1 HGB). **Kreditaufnahme** und **Prozessführung** gehören zu den Geschäften, die nach § 54 Abs. 2 HGB eine besondere Befugnis erfordern.'
    },
    {
      id: 'lf02-vollmachten-a5', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Prokura kann nur vom [[Inhaber|Kaufmann|Geschäftsinhaber]] erteilt werden und muss [[ausdrücklich]] erklärt werden. Sie ist zur Eintragung in das [[Handelsregister]] anzumelden. Der Prokurist zeichnet mit dem Zusatz [[ppa.|ppa|pp.]]. Ein Handlungsbevollmächtigter zeichnet in der Praxis meist mit [[i. V.|i.V.|iV|i. V]].',
      hints: ['§ 48 und § 53 HGB.', '„per procura“ und „in Vollmacht“.'],
      solution: 'Erteilung nur durch den **Inhaber**, **ausdrücklich** (§ 48), Anmeldung zum **Handelsregister** (§ 53), Zeichnung **ppa.** (§ 51); Handlungsbevollmächtigte zeichnen mit einem das Vollmachtsverhältnis ausdrückenden Zusatz (§ 57), in der Praxis **i. V.**'
    },
    {
      id: 'lf02-vollmachten-a6', type: 'mc', difficulty: 3, points: 1,
      q: 'Prokuristin Frau Lang darf laut Arbeitsvertrag nur Verträge bis 50.000 € abschließen. Sie kauft für die Spedition eine gebrauchte Sattelzugmaschine für 85.000 €. Der Verkäufer kennt die interne Grenze nicht. Was gilt?',
      options: [
        'Der Kaufvertrag ist unwirksam, weil Frau Lang ihre Grenze überschritten hat.',
        'Der Kaufvertrag ist wirksam; Frau Lang kann aber im Innenverhältnis zur Verantwortung gezogen werden.',
        'Der Kaufvertrag ist bis 50.000 € wirksam, darüber unwirksam.',
        'Der Vertrag ist schwebend unwirksam, bis die Grenze ins Handelsregister eingetragen ist.'
      ],
      correct: [1],
      hints: ['§ 50 Abs. 1 HGB.', 'Unterscheide Außen- und Innenverhältnis.'],
      solution: 'Eine Beschränkung des Umfangs der Prokura ist **Dritten gegenüber unwirksam** (§ 50 Abs. 1 HGB). Der Kauf bindet die Spedition. Im **Innenverhältnis** hat Frau Lang aber gegen ihre Pflichten verstoßen – möglich sind Abmahnung, Widerruf der Prokura oder Schadensersatz. Eine Wertgrenze kann nicht ins Handelsregister eingetragen werden.'
    },
    {
      id: 'lf02-vollmachten-a7', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Schritte rund um eine Prokura in die richtige Reihenfolge.',
      items: [
        'Der Inhaber erteilt Herrn Schmitt ausdrücklich Prokura',
        'Herr Schmitt darf ab sofort mit ppa. zeichnen',
        'Der Inhaber meldet die Prokura zur Eintragung ins Handelsregister an',
        'Die Prokura wird eingetragen und bekanntgemacht'
      ],
      hints: ['Die Prokura ist schon mit der Erteilung wirksam.', 'Eintragung ist deklaratorisch.'],
      solution: 'Erteilung (ausdrücklich, § 48) → Prokura wirksam, Zeichnung mit ppa. möglich → Anmeldung (§ 53) → Eintragung und Bekanntmachung. Die Eintragung macht die bereits wirksame Prokura nur öffentlich bekannt (**deklaratorisch**).'
    },
    {
      id: 'lf02-vollmachten-a8', type: 'mc', difficulty: 3, points: 2,
      q: 'Welche Ereignisse lassen eine Prokura **erlöschen**? (Mehrfachauswahl)',
      options: [
        'Der Inhaber widerruft die Prokura',
        'Der Inhaber der Spedition stirbt',
        'Der Prokurist scheidet aus dem Unternehmen aus',
        'Der Prokurist schließt ein Geschäft über einer internen Wertgrenze ab'
      ],
      correct: [0, 2],
      hints: ['§ 52 HGB regelt Widerruf und Tod des Inhabers.', 'Eine Pflichtverletzung beendet die Prokura nicht automatisch.'],
      solution: '**Widerruf** (jederzeit möglich, § 52 Abs. 1) und **Ende des Arbeitsverhältnisses** beenden die Prokura. Der **Tod des Inhabers** lässt sie bestehen (§ 52 Abs. 3). Eine Überschreitung interner Grenzen ist eine Pflichtverletzung, beendet die Prokura aber nicht von selbst – der Inhaber kann sie daraufhin widerrufen.'
    },
    {
      id: 'lf02-vollmachten-a9', type: 'text', difficulty: 2, points: 4,
      q: 'Nenne vier Unterschiede zwischen allgemeiner Handlungsvollmacht und Prokura.',
      model: 'Erstens wird die Prokura nur vom Inhaber ausdrücklich erteilt, die Handlungsvollmacht formfrei auch vom Prokuristen. Zweitens wird die Prokura ins Handelsregister eingetragen, die Handlungsvollmacht nicht. Drittens umfasst die Prokura Geschäfte jedes Handelsgewerbes, die Handlungsvollmacht nur gewöhnliche Geschäfte dieser Branche. Viertens darf der Prokurist Darlehen aufnehmen und Prozesse führen, der Handlungsbevollmächtigte nur mit besonderer Befugnis. Außerdem zeichnet der Prokurist mit ppa., der Handlungsbevollmächtigte mit i. V.',
      criteria: [
        { text: 'Erteilung: ausdrücklich durch Inhaber vs. formfrei', keywords: ['ausdrücklich|formfrei|Inhaber'], points: 1 },
        { text: 'Handelsregistereintragung', keywords: ['Handelsregister'], points: 1 },
        { text: 'Umfang: jedes Handelsgewerbe vs. gewöhnliche Geschäfte', keywords: ['gewöhnlich|jedes Handelsgewerbe|irgendein|ungewöhnlich'], points: 1 },
        { text: 'Darlehen/Prozess/Wechsel oder Zeichnung ppa./i. V.', keywords: ['Darlehen|Prozess|Wechsel|ppa|i. V.|i.V.'], points: 1 }
      ],
      hints: ['Denke an Erteilung, Register, Umfang und Grenzen.', 'Auch die Zeichnung unterscheidet sich.'],
      solution: 'Unterschiede: **Erteilung** (Prokura nur durch Inhaber, ausdrücklich – Handlungsvollmacht formfrei, auch durch Prokuristen), **Handelsregister** (nur Prokura), **Umfang** (Prokura: jedes Handelsgewerbe – Handlungsvollmacht: gewöhnliche Geschäfte dieser Branche), **Grenzen** (Darlehen, Wechsel, Prozess: für Prokuristen erlaubt, für Handlungsbevollmächtigte nur mit besonderer Befugnis), **Beschränkungen** nach außen (bei Prokura unwirksam), **Zeichnung** (ppa. bzw. i. V./i. A.).'
    },
    {
      id: 'lf02-vollmachten-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: „Darf er das?“ bei der Bliestal Logistik e.K.',
      intro: `Inhaber Peter Hahn hat folgende Vollmachten erteilt:
- **Jana Wolf**: Einzelprokura, im Handelsregister eingetragen.
- **Tobias Berg** und **Nina Fuchs**: Gesamtprokura.
- **Marco Diehl**: allgemeine Handlungsvollmacht.

Im März 2026 widerruft Herr Hahn die Prokura von Tobias Berg, weil dieser zum 31.03. ausscheidet. Die Löschung im Handelsregister vergisst er.`,
      hints: ['Prüfe für jede Person, welche Vollmacht sie hat und welche Grenzen gelten.', 'Denke an § 15 Abs. 1 HGB.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf02-vollmachten-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Handlungen sind **wirksam**? (Mehrfachauswahl)',
          options: [
            'Jana Wolf belastet ohne besondere Befugnis das Betriebsgrundstück mit einer Grundschuld.',
            'Jana Wolf erteilt einem Disponenten Artvollmacht für Frachtaufträge.',
            'Nina Fuchs unterschreibt allein einen Mietvertrag für eine Lagerhalle.',
            'Marco Diehl kauft Paletten und Stretchfolie für das Lager.'
          ],
          correct: [1, 3],
          hints: ['Belastung von Grundstücken ist auch dem Prokuristen verwehrt.', 'Gesamtprokuristen handeln nur gemeinsam.'],
          solution: '**B** ist wirksam: Ein Prokurist darf Handlungsvollmacht erteilen. **D** ist wirksam: gewöhnliches Geschäft einer Spedition (§ 54 Abs. 1). **A** ist unwirksam: Belastung eines Grundstücks erfordert besondere Befugnis (§ 49 Abs. 2). **C** ist unwirksam: Nina Fuchs hat Gesamtprokura und darf nur gemeinsam handeln (§ 48 Abs. 2).'
        },
        {
          id: 'lf02-vollmachten-a10-2', type: 'mc', difficulty: 3, points: 1,
          q: 'Am 10.04.2026 unterschreibt Tobias Berg gemeinsam mit Nina Fuchs einen Leasingvertrag mit der Saar-Leasing AG, die vom Widerruf nichts weiß. Ist die Bliestal Logistik e.K. gebunden?',
          options: [
            'Nein, weil die Prokura von Tobias Berg widerrufen war.',
            'Ja, weil das Erlöschen nicht eingetragen und bekanntgemacht war und die Leasinggesellschaft gutgläubig war (§ 15 Abs. 1 HGB).',
            'Nein, weil Gesamtprokuristen keine Leasingverträge abschließen dürfen.',
            'Ja, aber nur zur Hälfte, weil nur einer der beiden noch Prokurist war.'
          ],
          correct: [1],
          hints: ['Das Erlöschen der Prokura ist eine eintragungspflichtige Tatsache (§ 53 Abs. 2).', 'Was gilt gegenüber Dritten, solange eine solche Tatsache nicht eingetragen ist?'],
          solution: 'Das Erlöschen ist eintragungspflichtig (§ 53 Abs. 2 HGB). Weil es **nicht eingetragen und bekanntgemacht** war und die Saar-Leasing AG es **nicht kannte**, kann Herr Hahn es ihr nicht entgegenhalten (**§ 15 Abs. 1 HGB**). Der Vertrag bindet das Unternehmen. Lehre: Löschung sofort anmelden.'
        },
        {
          id: 'lf02-vollmachten-a10-3', type: 'text', difficulty: 3, points: 3,
          q: 'Marco Diehl möchte für die Spedition einen Kredit über 30.000 € aufnehmen und den Kunden „Weinhandel Mosel“ wegen offener Rechnungen verklagen. Prüfe, ob er das darf, und nenne, was Herr Hahn tun könnte, damit Herr Diehl es darf.',
          model: 'Herr Diehl hat allgemeine Handlungsvollmacht. Nach § 54 Abs. 2 HGB darf ein Handlungsbevollmächtigter Darlehen aufnehmen und Prozesse führen nur, wenn ihm diese Befugnis besonders erteilt ist. Ohne diese Sonderbefugnis darf er weder den Kredit aufnehmen noch klagen. Herr Hahn könnte ihm eine besondere Befugnis für Darlehensaufnahme und Prozessführung erteilen oder ihm Prokura erteilen und im Handelsregister eintragen lassen.',
          criteria: [
            { text: 'erkennt allgemeine Handlungsvollmacht und § 54 Abs. 2', keywords: ['54|Handlungsvollmacht'], points: 1 },
            { text: 'verneint Kredit und Klage ohne Sonderbefugnis', keywords: ['nicht|kein|ohne'], points: 1 },
            { text: 'Lösung: besondere Befugnis erteilen oder Prokura', keywords: ['besondere Befugnis|Sonderbefugnis|besonders erteilt|Prokura'], points: 1 }
          ],
          hints: ['Welche vier Geschäfte nennt § 54 Abs. 2 HGB?', 'Wie kann der Inhaber den Umfang erweitern?'],
          solution: 'Herr Diehl hat **allgemeine Handlungsvollmacht**. **Darlehensaufnahme** und **Prozessführung** sind nach **§ 54 Abs. 2 HGB** nur mit **besonderer Befugnis** erlaubt – er darf beides also nicht. Herr Hahn kann ihm diese **Befugnis ausdrücklich zusätzlich erteilen** oder ihm **Prokura** erteilen (§ 49 Abs. 1 umfasst Darlehen und Prozesse).'
        }
      ]
    },
    {
      id: 'lf02-vollmachten-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Welche Unterschrift eines Prokuristen entspricht § 51 HGB?',
      options: [
        'i. A. Schmitt',
        'Hochwald Spedition GmbH ppa. Schmitt',
        'Schmitt, Prokurist (ohne Firma)',
        'i. V. Hochwald Spedition GmbH'
      ],
      correct: [1],
      hints: ['Der Prokurist fügt der Firma seinen Namen hinzu.', 'Der Zusatz muss die Prokura andeuten.'],
      solution: 'Nach § 51 HGB zeichnet der Prokurist, indem er der **Firma** seinen **Namen** mit einem die Prokura andeutenden **Zusatz** beifügt: „Hochwald Spedition GmbH **ppa.** Schmitt“. „i. A.“ und „i. V.“ sind Zusätze für Handlungsbevollmächtigte.'
    },
    {
      id: 'lf02-vollmachten-a12', type: 'mc', difficulty: 1, points: 1,
      q: 'Die Spedition von Frau Klein beschäftigt 25 Mitarbeitende, führt eine doppelte Buchführung und hat 40 Lkw. Ist sie Kauffrau nach § 1 HGB?',
      options: [
        'Nein, Kaufmann wird man nur durch Eintragung ins Handelsregister.',
        'Ja, sie betreibt ein Handelsgewerbe, das einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert.',
        'Nein, Speditionen sind keine Gewerbebetriebe.',
        'Ja, aber nur, wenn sie eine GmbH gründet.'
      ],
      correct: [1],
      hints: ['§ 1 Abs. 2 HGB: Art und Umfang des Betriebs.', 'Die Eintragung ist beim Istkaufmann nur deklaratorisch.'],
      solution: 'Frau Klein ist **Istkauffrau**: Ihr Gewerbebetrieb erfordert nach Art und Umfang einen kaufmännisch eingerichteten Geschäftsbetrieb (§ 1 Abs. 1 und 2 HGB). Die Kaufmannseigenschaft hängt nicht von der Eintragung ab. Sie kann daher auch **Prokura** erteilen.'
    }
  ],
  quiz: ['lf02-vollmachten-a1', 'lf02-vollmachten-a2', 'lf02-vollmachten-a4', 'lf02-vollmachten-a6', 'lf02-vollmachten-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 2, Inhalte: Vollmachten' },
    { title: 'Handelsgesetzbuch § 1 Istkaufmann', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__1.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 15 Publizität des Handelsregisters', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__15.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 48 Erteilung der Prokura', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__48.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 49 Umfang der Prokura', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__49.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 50 Beschränkung der Prokura', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__50.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 51 Zeichnung des Prokuristen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__51.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 52 Widerruflichkeit, Unübertragbarkeit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__52.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 53 Anmeldung der Prokura', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__53.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 54 Handlungsvollmacht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__54.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 57 Zeichnung des Handlungsbevollmächtigten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__57.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 58 Übertragung der Handlungsvollmacht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__58.html', asOf: '2026' }
  ],
  links: ['lf02-aufbauorganisation', 'wiso-kaufvertrag']
};
