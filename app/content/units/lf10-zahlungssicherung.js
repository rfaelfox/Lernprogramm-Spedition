export default {
  id: 'lf10-zahlungssicherung',
  area: 'LF10',
  topic: 'lf10-zahlungssicherung',
  title: 'Zahlungssicherung im Außenhandel: Inkasso und Akkreditiv',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Dokumentenakkreditive werden in der Praxis den „Einheitlichen Richtlinien und Gebräuche für Dokumentenakkreditive“ (ERA/UCP 600, ICC, Revision 2007) unterstellt, Dokumenteninkassi den „Einheitlichen Richtlinien für Inkassi“ (ERI/URC 522, ICC). Es handelt sich um private Regelwerke der Internationalen Handelskammer, die nur gelten, wenn sie vereinbart sind. Gebühren und Prämien in dieser Einheit sind Beispielwerte. Stand 2026.'
  },
  goals: [
    'Ich kann die Zahlungsbedingungen Vorauszahlung, offene Rechnung, Dokumenteninkasso und Dokumentenakkreditiv nach ihrem Risiko für Exporteur und Importeur ordnen.',
    'Ich kann „Dokumente gegen Zahlung“ (D/P) und „Dokumente gegen Akzept“ (D/A) unterscheiden.',
    'Ich kann den Ablauf eines Dokumentenakkreditivs mit allen Beteiligten beschreiben.',
    'Ich kann erklären, was ein unwiderrufliches und ein bestätigtes Akkreditiv für den Exporteur bedeutet.',
    'Ich kann begründen, warum Banken nur Dokumente prüfen und warum der Spediteur die Akkreditivbedingungen genau beachten muss.',
    'Ich kann die Spediteurdokumente Konnossement, FCR und Versicherungsdokument im Zahlungsverkehr einordnen.'
  ],
  simple: `# Worum geht es?

Im Außenhandel kennen sich Verkäufer (**Exporteur**) und Käufer (**Importeur**) oft kaum, sitzen in verschiedenen Ländern und unterliegen verschiedenen Rechtsordnungen. Beide haben ein Risiko:

- Der **Exporteur** fürchtet: „Ich liefere, aber der Kunde zahlt nicht.“
- Der **Importeur** fürchtet: „Ich zahle, aber die Ware kommt nicht oder ist falsch.“

Die **Zahlungsbedingung** im Kaufvertrag legt fest, wer welches Risiko trägt.

# Die vier wichtigsten Zahlungsbedingungen

| Zahlungsbedingung | Wie funktioniert sie? | Wer trägt das Risiko? |
|---|---|---|
| **Vorauszahlung** | Käufer zahlt, bevor die Ware versandt wird | fast nur der **Importeur** |
| **Offene Rechnung** (Zahlung nach Erhalt) | Ware wird geliefert, Käufer zahlt später | fast nur der **Exporteur** |
| **Dokumenteninkasso** | Banken übergeben die Warendokumente erst gegen Zahlung oder Wechselakzept | verteilt, Exporteur trägt das Abnahmerisiko |
| **Dokumentenakkreditiv** | Bank des Käufers verspricht Zahlung gegen ordnungsgemäße Dokumente | am besten für **beide** ausgeglichen |

# Die Idee dahinter: Dokumente statt Ware

Banken fassen keine Ware an. Sie arbeiten nur mit **Dokumenten**. Wer das Original-Konnossement hat, kann im Bestimmungshafen die Ware herausverlangen. Deshalb sind Dokumente so wertvoll – und deshalb ist der **Spediteur**, der viele dieser Dokumente beschafft oder ausstellt, so wichtig.

> Merke: Beim Akkreditiv zählt nur, ob die **Dokumente** genau den Bedingungen entsprechen – nicht, ob die Ware in Ordnung ist.`,
  deep: `# Vorauszahlung und offene Rechnung

- **Vorauszahlung** (auch Anzahlung als Teilbetrag): Der Exporteur ist sicher. Der Importeur gibt Geld aus der Hand, ohne Sicherheit über Lieferung und Qualität. Üblich bei neuen Kunden, Sonderanfertigungen oder unsicheren Ländern.
- **Offene Rechnung** (Zahlung gegen Rechnung, „clean payment“): Die Ware und die Dokumente gehen direkt an den Käufer. Üblich bei langjährigen Geschäftsbeziehungen und im EU-Binnenhandel. Der Exporteur kann sich zusätzlich durch eine Ausfuhrkreditversicherung absichern.

# Dokumenteninkasso

Beim Inkasso beauftragt der Exporteur seine Bank (**Einreicherbank**), die Dokumente über eine Bank im Land des Käufers (**Inkassobank**, vorlegende Bank) nur unter einer Bedingung auszuhändigen. Die Banken handeln als Treuhänder, sie **garantieren aber keine Zahlung**. Grundlage ist meist das ICC-Regelwerk **ERI/URC 522**.

| | **D/P – Dokumente gegen Zahlung** | **D/A – Dokumente gegen Akzept** |
|---|---|---|
| Deutsche Bezeichnung | Kasse gegen Dokumente | Dokumente gegen Wechselakzept |
| Der Importeur erhält die Dokumente … | erst nach **Zahlung** | nach **Unterschrift (Akzept) eines Wechsels** |
| Zahlung | sofort | später, bei Fälligkeit des Wechsels |
| Risiko des Exporteurs | Käufer nimmt die Dokumente nicht auf (Ware liegt im Hafen) | zusätzlich: Wechsel wird bei Fälligkeit nicht eingelöst |

**Restrisiko beim Inkasso:** Verweigert der Käufer die Aufnahme, liegt die Ware im Bestimmungshafen. Der Exporteur muss Lagergeld, Rücktransport oder einen Notverkauf organisieren – oft mit Hilfe des Spediteurs.

# Dokumentenakkreditiv (Letter of Credit, L/C)

Ein Akkreditiv ist das **Zahlungsversprechen einer Bank**: Die Bank des Importeurs (**eröffnende Bank**, Akkreditivbank) verpflichtet sich, dem Exporteur (**Begünstigter**) den Betrag zu zahlen, wenn er innerhalb der Frist **akkreditivgerechte Dokumente** vorlegt.

## Beteiligte

| Beteiligter | Rolle |
|---|---|
| **Auftraggeber** (Importeur) | beantragt das Akkreditiv bei seiner Bank |
| **Eröffnende Bank** (Akkreditivbank) | gibt das Zahlungsversprechen ab, prüft die Dokumente, belastet den Importeur |
| **Avisierende Bank** (Akkreditivstelle, meist im Land des Exporteurs) | teilt dem Exporteur die Eröffnung mit und prüft die Echtheit |
| **Bestätigende Bank** (optional) | gibt ein **zusätzliches eigenes** Zahlungsversprechen ab |
| **Begünstigter** (Exporteur) | versendet die Ware und reicht die Dokumente ein |
| **Spediteur/Reederei** | übernimmt die Ware und stellt Transportdokumente aus |

## Ablauf in Kurzform

1. Kaufvertrag mit Zahlungsbedingung „Dokumentenakkreditiv“
2. Importeur beantragt das Akkreditiv bei seiner Bank
3. Eröffnende Bank eröffnet das Akkreditiv und schickt es an die avisierende Bank
4. Avisierende Bank teilt dem Exporteur die Eröffnung mit (Avisierung)
5. Exporteur prüft die Bedingungen und übergibt die Ware dem Spediteur
6. Spediteur bzw. Reederei stellt die Transportdokumente aus (z. B. Bordkonnossement)
7. Exporteur reicht alle Dokumente fristgerecht bei der Bank ein
8. Bank prüft die Dokumente; sind sie in Ordnung, wird gezahlt
9. Dokumente gehen an die eröffnende Bank, diese belastet den Importeur und übergibt ihm die Dokumente
10. Importeur holt mit den Dokumenten die Ware beim Frachtführer ab

## Unwiderruflich und bestätigt

- **Unwiderruflich**: Das Akkreditiv kann ohne Zustimmung aller Beteiligten, vor allem des Begünstigten, nicht geändert oder aufgehoben werden. Nach dem ICC-Regelwerk **ERA/UCP 600** gilt ein Akkreditiv als unwiderruflich, auch wenn das nicht ausdrücklich darin steht.
- **Bestätigt**: Eine Bank im Land des Exporteurs (meist die avisierende) übernimmt **zusätzlich** die Zahlungspflicht. Der Exporteur ist dann auch gegen das Risiko geschützt, dass die ausländische Bank oder das Land nicht zahlen kann (**Länderrisiko**, z. B. Devisenmangel, politische Krise). Die Bestätigung kostet zusätzliche Provision.

## Dokumentenstrenge

Die Banken prüfen nur, ob die Dokumente **nach ihrem äußeren Anschein** genau den Akkreditivbedingungen entsprechen und untereinander zusammenpassen. Typische Unstimmigkeiten:

- Verladedatum nach dem spätesten Verladetermin
- Dokumente nach Ablauf der Vorlagefrist oder der Gültigkeit eingereicht
- „unreines“ Konnossement mit Vermerk über beschädigte Verpackung
- Warenbeschreibung, Mengen oder Gewichte stimmen zwischen Rechnung, Packliste und Konnossement nicht überein
- falsche Hafenangaben oder fehlender An-Bord-Vermerk

Bei Unstimmigkeiten ist die Bank **nicht mehr zur Zahlung verpflichtet**. Der Exporteur hat dann praktisch nur noch ein Inkasso.

# Rolle des Spediteurs

Der Spediteur muss die Akkreditivbedingungen **vor** der Verladung kennen, weil er die meisten Dokumente beschafft oder selbst ausstellt:

| Dokument | Bedeutung im Zahlungsverkehr |
|---|---|
| **Konnossement (Bill of Lading, B/L)** | Wertpapier der Seefracht. Das Original berechtigt zur Herausgabe der Ware. In Akkreditiven meist verlangt: voller Satz, **an Bord** (shipped on board), **rein** (clean), an Order ausgestellt |
| **FCR** (Forwarders Certificate of Receipt, Spediteur-Übernahmebescheinigung, FIATA-Dokument) | Der Spediteur bestätigt, dass er die Ware **unwiderruflich** zur Beförderung an den Käufer übernommen hat. Kein Wertpapier, aber Nachweis für den Käufer, dass der Verkäufer nicht mehr über die Ware verfügen kann. Geeignet bei Vorauszahlung oder wenn das Akkreditiv es ausdrücklich zulässt |
| **FBL** (FIATA Multimodal Transport Bill of Lading) | vom Spediteur als multimodaler Frachtführer ausgestelltes, handelbares Durchkonnossement; siehe Einheit „Multimodaler Transport“ |
| **Versicherungsdokument** (Police oder Zertifikat) | Nachweis der Transportversicherung, bei CIF/CIP vom Verkäufer zu beschaffen; die Versicherungssumme beträgt in der Regel **110 %** des Warenwerts |

Die Lieferklausel (Incoterms®) bestimmt, wer Transport und Versicherung beschafft – Einzelheiten in der Einheit „Incoterms® 2020“.`,
  terms: [
    { term: 'Vorauszahlung', def: 'Der Importeur zahlt vor dem Versand der Ware; das Risiko liegt fast vollständig beim Importeur.' },
    { term: 'Offene Rechnung', def: 'Ware und Dokumente gehen direkt an den Käufer, der später zahlt; das Risiko liegt beim Exporteur.' },
    { term: 'Dokumenteninkasso', def: 'Banken übergeben die Warendokumente dem Importeur nur gegen Zahlung (D/P) oder Wechselakzept (D/A); keine Zahlungsgarantie der Banken.' },
    { term: 'D/P (Documents against Payment)', def: 'Dokumente gegen Zahlung, „Kasse gegen Dokumente“: Der Importeur erhält die Dokumente erst, wenn er gezahlt hat.' },
    { term: 'D/A (Documents against Acceptance)', def: 'Dokumente gegen Akzept: Der Importeur erhält die Dokumente gegen Unterschrift auf einem Wechsel und zahlt bei dessen Fälligkeit.' },
    { term: 'Dokumentenakkreditiv', def: 'Abstraktes Zahlungsversprechen einer Bank, dem Begünstigten gegen Vorlage akkreditivgerechter Dokumente innerhalb einer Frist zu zahlen.' },
    { term: 'Begünstigter', def: 'Der Exporteur, zu dessen Gunsten das Akkreditiv eröffnet wird.' },
    { term: 'Avisierende Bank', def: 'Bank im Land des Exporteurs, die ihm die Eröffnung des Akkreditivs mitteilt und dessen Echtheit prüft.' },
    { term: 'Bestätigtes Akkreditiv', def: 'Akkreditiv, für das eine zweite Bank (meist im Exportland) ein zusätzliches eigenes Zahlungsversprechen abgibt; schützt vor Bank- und Länderrisiko.' },
    { term: 'ERA/UCP 600', def: 'Einheitliche Richtlinien und Gebräuche für Dokumentenakkreditive der ICC (Revision 2007); privates Regelwerk, das im Akkreditiv vereinbart wird.' },
    { term: 'FCR', def: 'Forwarders Certificate of Receipt: FIATA-Spediteurübernahmebescheinigung, mit der der Spediteur die unwiderrufliche Übernahme der Ware zur Versendung an den Käufer bestätigt.' },
    { term: 'Reines Konnossement (clean B/L)', def: 'Konnossement ohne Vermerk über Mängel an Ware oder Verpackung; in Akkreditiven fast immer verlangt.' }
  ],
  example: `# Beispiel: Maschinenteile von Saarlouis nach Santos (Beispielfall)

Die **Saar-Antriebstechnik GmbH** in Saarlouis verkauft Getriebe im Wert von 85.000 € an einen neuen Kunden in São Paulo (Brasilien). Weil sich die Firmen nicht kennen, vereinbaren sie ein **unwiderrufliches, bestätigtes Dokumentenakkreditiv**. Die Bank des Käufers in São Paulo eröffnet das Akkreditiv, eine Bank in Saarbrücken avisiert und bestätigt es.

Im Akkreditiv stehen unter anderem (Auszug):

- Verschiffung von Antwerpen nach Santos, spätester Verladetag 15.11.
- Vorzulegen: Handelsrechnung (3-fach), Packliste, voller Satz reiner **Bordkonnossemente** an Order, Versicherungszertifikat über 110 % des Rechnungswerts
- Vorlage der Dokumente spätestens 21 Tage nach Verladung, Verfall am 30.11.

Die **Spedition Hochwald Logistik** in Merzig übernimmt den Auftrag. Die Disponentin vergleicht die Akkreditivbedingungen mit der Buchung bei der Reederei: Abfahrt des Schiffes ist am 08.11. in Antwerpen. Sie achtet darauf, dass

- im Konnossement **Antwerpen** und **Santos** stehen (nicht „Rotterdam“ als Umschlaghafen),
- der **An-Bord-Vermerk** mit Datum eingetragen wird,
- die Gewichte im Konnossement mit Packliste und Rechnung übereinstimmen,
- keine Vermerke wie „Verpackung beschädigt“ im Konnossement stehen.

Am 10.11. reicht die Saar-Antriebstechnik GmbH alle Dokumente bei der Bank in Saarbrücken ein. Diese prüft, findet keine Unstimmigkeiten und zahlt. Der Kunde in Brasilien erhält die Konnossemente über seine Bank und kann damit in Santos den Container übernehmen.`,
  rules: [
    'Vorauszahlung schützt den Exporteur, offene Rechnung den Importeur – Inkasso und Akkreditiv liegen dazwischen.',
    'Beim Dokumenteninkasso garantieren die Banken keine Zahlung, beim Akkreditiv schon.',
    'D/P: Dokumente nur gegen Geld. D/A: Dokumente gegen Wechselunterschrift, Geld erst später.',
    'Banken prüfen nur Dokumente, nicht die Ware: Schon kleine Abweichungen können die Zahlung verhindern.',
    'Ein bestätigtes Akkreditiv sichert den Exporteur zusätzlich gegen das Risiko der ausländischen Bank und des Landes ab.',
    'Der Spediteur muss die Akkreditivbedingungen vor der Verladung kennen und die Transportdokumente genau danach ausstellen lassen.'
  ],
  summary: `- **Vorauszahlung** → Risiko beim Importeur; **offene Rechnung** → Risiko beim Exporteur.
- **Dokumenteninkasso** (ICC-Regelwerk ERI/URC 522): **D/P** = Dokumente gegen Zahlung, **D/A** = Dokumente gegen Wechselakzept. Keine Zahlungsgarantie, Risiko der Nichtabnahme bleibt.
- **Dokumentenakkreditiv** (ICC-Regelwerk ERA/UCP 600): Zahlungsversprechen der Bank gegen akkreditivgerechte Dokumente. Beteiligte: Auftraggeber, eröffnende Bank, avisierende/bestätigende Bank, Begünstigter.
- **Unwiderruflich** = nicht einseitig änderbar; **bestätigt** = zusätzliche Zahlungspflicht einer Bank im Exportland.
- **Dokumentenstrenge**: Fristen, Daten, Häfen, Mengen, „clean on board“ müssen genau stimmen.
- **Spediteurdokumente**: Konnossement (Wertpapier), FCR (Übernahmebescheinigung), FBL, Versicherungsdokument (110 %).`,
  mistakes: [
    { wrong: 'Beim Dokumenteninkasso garantiert die Bank, dass der Exporteur sein Geld bekommt.', right: 'Beim Inkasso handeln die Banken nur als Treuhänder. Nimmt der Käufer die Dokumente nicht auf, gibt es kein Geld. Eine Zahlungsgarantie bietet erst das Akkreditiv.' },
    { wrong: 'Die Bank prüft beim Akkreditiv, ob die Ware in Ordnung ist.', right: 'Die Bank prüft nur die Dokumente auf Übereinstimmung mit den Akkreditivbedingungen. Ob die Ware mangelfrei ist, sieht sie nicht.' },
    { wrong: 'Bei D/A erhält der Importeur die Dokumente erst nach Zahlung.', right: 'Bei D/A erhält er die Dokumente schon gegen Akzept eines Wechsels; gezahlt wird erst bei Fälligkeit. Das ist D/P-Logik verwechselt.' },
    { wrong: 'Ein unwiderrufliches Akkreditiv ist automatisch bestätigt.', right: 'Unwiderruflich heißt nur: nicht einseitig änderbar. Eine Bestätigung ist ein zusätzliches Zahlungsversprechen einer weiteren Bank und muss eigens vereinbart werden.' },
    { wrong: 'Ein FCR ist dasselbe wie ein Konnossement.', right: 'Das FCR ist eine Übernahmebescheinigung des Spediteurs und kein Wertpapier; die Ware wird nicht gegen Vorlage des FCR ausgeliefert. Das Konnossement ist ein Wertpapier.' }
  ],
  flashcards: [
    { q: 'Welche Zahlungsbedingung ist für den Exporteur am sichersten?', a: 'Die Vorauszahlung.' },
    { q: 'Welche Zahlungsbedingung ist für den Importeur am günstigsten?', a: 'Die offene Rechnung (Zahlung nach Erhalt der Ware).' },
    { q: 'Was bedeutet D/P?', a: 'Documents against Payment – Dokumente gegen Zahlung („Kasse gegen Dokumente“).' },
    { q: 'Was bedeutet D/A?', a: 'Documents against Acceptance – Dokumente gegen Akzept eines Wechsels, Zahlung bei Fälligkeit.' },
    { q: 'Wer ist beim Akkreditiv der Begünstigte?', a: 'Der Exporteur (Verkäufer).' },
    { q: 'Wer ist beim Akkreditiv der Auftraggeber?', a: 'Der Importeur (Käufer), der das Akkreditiv bei seiner Bank beantragt.' },
    { q: 'Wovor schützt eine Akkreditivbestätigung?', a: 'Vor dem Risiko, dass die eröffnende ausländische Bank oder deren Land nicht zahlt (Bank- und Länderrisiko).' },
    { q: 'Was prüfen Banken beim Akkreditiv?', a: 'Nur die Dokumente – ob sie den Bedingungen genau entsprechen und zueinander passen.' },
    { q: 'Was ist ein reines Bordkonnossement?', a: 'Ein Konnossement, das die Verladung an Bord bestätigt und keine Vermerke über Mängel an Ware oder Verpackung enthält.' },
    { q: 'Wozu dient das FCR?', a: 'Der Spediteur bestätigt, dass er die Ware unwiderruflich zur Versendung an den Käufer übernommen hat.' },
    { q: 'Welches ICC-Regelwerk gilt meist für Akkreditive?', a: 'ERA/UCP 600 (Einheitliche Richtlinien und Gebräuche für Dokumentenakkreditive, Revision 2007).' }
  ],
  tasks: [
    {
      id: 'lf10-zahlungssicherung-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Ein Saarbrücker Exporteur liefert erstmals an einen unbekannten Kunden in einem Land mit Devisenproblemen. Der Kunde akzeptiert keine Vorauszahlung. Welche Zahlungsbedingung bietet dem Exporteur die **größte Sicherheit**?',
      options: ['Offene Rechnung mit 60 Tagen Ziel', 'Dokumenteninkasso D/A', 'Dokumenteninkasso D/P', 'Unwiderrufliches, von einer deutschen Bank bestätigtes Akkreditiv'],
      correct: [3],
      hints: ['Welche Zahlungsbedingung enthält ein Zahlungsversprechen einer Bank?', 'Das Land hat Devisenprobleme – wer schützt vor diesem Risiko?'],
      solution: '**Bestätigtes, unwiderrufliches Akkreditiv**: Neben der ausländischen eröffnenden Bank verpflichtet sich zusätzlich eine deutsche Bank zur Zahlung. Damit ist auch das Länderrisiko (Devisenmangel) abgesichert. Inkassi enthalten keine Zahlungsgarantie, die offene Rechnung ist für den Exporteur am riskantesten.'
    },
    {
      id: 'lf10-zahlungssicherung-a2', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zum **Dokumenteninkasso** sind richtig? (Mehrfachauswahl)',
      options: [
        'Bei D/P erhält der Importeur die Dokumente erst nach Zahlung.',
        'Die Inkassobank garantiert dem Exporteur die Zahlung.',
        'Nimmt der Importeur die Dokumente nicht auf, bleibt die Ware im Bestimmungsland liegen.',
        'Bei D/A zahlt der Importeur sofort bei Vorlage der Dokumente.',
        'Das Inkasso ist für den Exporteur sicherer als eine offene Rechnung.'
      ],
      correct: [0, 2, 4],
      hints: ['Bei einem Inkasso arbeiten die Banken als Treuhänder, nicht als Garanten.', 'Überlege, wann bei D/A gezahlt wird.'],
      solution: 'Richtig sind **A, C und E**. Bei D/P gibt es die Dokumente nur gegen Geld. Die Banken garantieren keine Zahlung (B falsch); verweigert der Käufer die Aufnahme, liegt die Ware im Hafen (C). Bei D/A erhält der Käufer die Dokumente gegen Wechselakzept und zahlt erst bei Fälligkeit (D falsch). Gegenüber der offenen Rechnung behält der Exporteur aber die Verfügung über die Ware, bis gezahlt bzw. akzeptiert ist (E).'
    },
    {
      id: 'lf10-zahlungssicherung-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zum Akkreditiv.',
      text: 'Der Importeur ist beim Akkreditiv der [[Auftraggeber]], der Exporteur der [[Begünstigte|Begünstigter]]. Die Bank des Importeurs heißt [[eröffnende Bank|Akkreditivbank|eröffnende]]. Die Bank im Exportland, die das Akkreditiv mitteilt, heißt [[avisierende Bank|avisierende|Akkreditivstelle]]. Gezahlt wird nur gegen akkreditivgerechte [[Dokumente]].',
      hints: ['Wer gibt den Auftrag, zu wessen Gunsten wird eröffnet?', 'Avis = Mitteilung.'],
      solution: 'Importeur = **Auftraggeber**, Exporteur = **Begünstigter**, Bank des Importeurs = **eröffnende Bank** (Akkreditivbank), Bank im Exportland = **avisierende Bank**. Gezahlt wird gegen **Dokumente**, die genau den Bedingungen entsprechen.'
    },
    {
      id: 'lf10-zahlungssicherung-a4', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Zahlungsbedingung der passenden Risikobeschreibung zu.',
      pairs: [
        ['Vorauszahlung', 'Importeur trägt das Risiko, dass die Ware nicht oder mangelhaft geliefert wird'],
        ['Offene Rechnung', 'Exporteur hat Ware und Dokumente aus der Hand gegeben, bevor er Geld hat'],
        ['Dokumenteninkasso D/P', 'Exporteur trägt das Risiko, dass der Käufer die Dokumente nicht aufnimmt'],
        ['Bestätigtes Akkreditiv', 'Zwei Banken haften für die Zahlung, wenn die Dokumente stimmen']
      ],
      hints: ['Wer gibt bei jeder Bedingung zuerst etwas aus der Hand?', 'Bestätigung = zusätzliche Bank.'],
      solution: 'Vorauszahlung: Der Importeur zahlt zuerst. Offene Rechnung: Der Exporteur liefert zuerst. D/P: Ohne Zahlung keine Dokumente, aber der Käufer kann die Abnahme verweigern. Bestätigtes Akkreditiv: eröffnende und bestätigende Bank sind zur Zahlung verpflichtet.'
    },
    {
      id: 'lf10-zahlungssicherung-a5', type: 'order', difficulty: 2, points: 8,
      q: 'Bringe die Schritte eines Dokumentenakkreditivs in die richtige Reihenfolge.',
      items: [
        'Exporteur und Importeur vereinbaren im Kaufvertrag die Zahlung per Akkreditiv',
        'Importeur beantragt bei seiner Bank die Eröffnung des Akkreditivs',
        'Eröffnende Bank eröffnet das Akkreditiv und sendet es an die avisierende Bank',
        'Avisierende Bank teilt dem Exporteur die Eröffnung mit',
        'Exporteur übergibt die Ware dem Spediteur, das Bordkonnossement wird ausgestellt',
        'Exporteur reicht die Dokumente fristgerecht bei der Bank ein',
        'Bank prüft die Dokumente und zahlt an den Exporteur',
        'Importeur wird belastet, erhält die Dokumente und holt damit die Ware ab'
      ],
      hints: ['Zuerst braucht es einen Vertrag, dann das Zahlungsversprechen, erst danach wird verladen.', 'Die Dokumente entstehen bei der Verladung – geprüft werden kann erst danach.'],
      solution: 'Kaufvertrag → Antrag des Importeurs → Eröffnung → Avisierung → Versand und Ausstellung der Transportdokumente → Einreichung → Prüfung und Zahlung → Belastung des Importeurs, Übergabe der Dokumente, Abholung der Ware. Der Exporteur sollte erst verladen, wenn ihm das Akkreditiv avisiert ist und er die Bedingungen geprüft hat.'
    },
    {
      id: 'lf10-zahlungssicherung-a6', type: 'calc', difficulty: 2, points: 3,
      q: 'Im Akkreditiv wird ein Versicherungszertifikat über **110 %** des CIF-Werts verlangt. Der CIF-Wert der Sendung beträgt 62.400 €. Die Transportversicherung berechnet eine Prämie von 0,35 % der Versicherungssumme (Beispielwert). Berechne den Aufschlag, die Versicherungssumme und die Prämie.',
      formula: 'Versicherungssumme = CIF-Wert × 110 %; Prämie = Versicherungssumme × Prämiensatz',
      fields: [
        { id: 'zuschlag', label: 'Aufschlag (10 %)', unit: '€', answer: 6240, tol: 0.01 },
        { id: 'vs', label: 'Versicherungssumme', unit: '€', answer: 68640, tol: 0.01 },
        { id: 'praemie', label: 'Prämie', unit: '€', answer: 240.24, tol: 0.01 }
      ],
      hints: ['Die 10 % decken den erwarteten Gewinn des Käufers (imaginärer Gewinn).', '0,35 % = 0,0035.'],
      solution: `**Formel:** Versicherungssumme = CIF-Wert × 1,10; Prämie = Versicherungssumme × 0,35 %

**Aufschlag:** 62.400 € × 10 % = **6.240 €**

**Versicherungssumme:** 62.400 € + 6.240 € = **68.640 €**

**Prämie:** 68.640 € × 0,0035 = **240,24 €**`
    },
    {
      id: 'lf10-zahlungssicherung-a7', type: 'calc', difficulty: 2, points: 4,
      q: `Die Saar-Antriebstechnik GmbH erhält ein bestätigtes Akkreditiv über 85.000 €. Ihre Bank berechnet (Beispielwerte):

- Avisierungsprovision 1 ‰ des Akkreditivbetrags
- Bestätigungsprovision 1,5 ‰ je angefangenes Quartal, Laufzeit 2 Quartale
- Dokumentenprüfungsprovision 1,5 ‰

Berechne die einzelnen Provisionen und die Gesamtkosten.`,
      formula: 'Provision = Akkreditivbetrag × Promillesatz ÷ 1.000 (bei der Bestätigung × Anzahl Quartale)',
      fields: [
        { id: 'avis', label: 'Avisierungsprovision', unit: '€', answer: 85, tol: 0.01 },
        { id: 'best', label: 'Bestätigungsprovision', unit: '€', answer: 255, tol: 0.01 },
        { id: 'pruef', label: 'Dokumentenprüfungsprovision', unit: '€', answer: 127.5, tol: 0.01 },
        { id: 'summe', label: 'Gesamtkosten', unit: '€', answer: 467.5, tol: 0.01 }
      ],
      hints: ['1 ‰ = 1/1.000.', 'Die Bestätigungsprovision fällt für jedes der 2 Quartale an.'],
      solution: `**Formel:** Provision = Betrag × ‰-Satz ÷ 1.000

**Avisierung:** 85.000 € × 1 ÷ 1.000 = **85,00 €**

**Bestätigung:** 85.000 € × 1,5 ÷ 1.000 × 2 = 127,50 € × 2 = **255,00 €**

**Dokumentenprüfung:** 85.000 € × 1,5 ÷ 1.000 = **127,50 €**

**Gesamtkosten:** 85,00 € + 255,00 € + 127,50 € = **467,50 €**`
    },
    {
      id: 'lf10-zahlungssicherung-a8', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Kunde in Kanada hat vorausbezahlt und möchte einen Nachweis, dass die Ware wirklich unwiderruflich an ihn unterwegs ist. Die Ware wird zunächst per Lkw zum Sammellager des Spediteurs gebracht. Welches Dokument kann der Spediteur dafür ausstellen?',
      options: ['Ein Forwarders Certificate of Receipt (FCR)', 'Einen CMR-Frachtbrief als Wertpapier', 'Eine Ausfuhranmeldung', 'Ein Ursprungszeugnis'],
      correct: [0],
      hints: ['Gesucht ist eine Übernahmebescheinigung des Spediteurs.', 'Das Dokument stammt von der FIATA.'],
      solution: 'Mit dem **FCR** bestätigt der Spediteur, dass er die Ware übernommen hat und sie unwiderruflich an den Käufer versenden wird. Der Verkäufer kann nur noch über die Ware verfügen, wenn er das Original-FCR zurückgibt. Der CMR-Frachtbrief ist kein Wertpapier, Ausfuhranmeldung und Ursprungszeugnis sind Zoll- bzw. Ursprungsdokumente.'
    },
    {
      id: 'lf10-zahlungssicherung-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre den Unterschied zwischen einem **unwiderruflichen** und einem **unwiderruflichen, bestätigten** Akkreditiv. Für welchen Exportfall würdest du die Bestätigung empfehlen?',
      model: 'Ein unwiderrufliches Akkreditiv kann ohne Zustimmung des Begünstigten nicht geändert oder aufgehoben werden; zur Zahlung verpflichtet ist nur die eröffnende Bank im Ausland. Beim bestätigten Akkreditiv gibt eine zweite Bank, meist im Land des Exporteurs, ein zusätzliches eigenes Zahlungsversprechen ab. Die Bestätigung empfiehlt sich bei Ländern mit politischem oder wirtschaftlichem Risiko (Länderrisiko, Devisenmangel) oder wenn die ausländische Bank wenig bekannt ist.',
      criteria: [
        { text: 'erklärt unwiderruflich (nicht einseitig änderbar)', keywords: ['nicht|ohne Zustimmung', 'änder|aufgehoben|widerruf'], points: 1 },
        { text: 'erklärt Bestätigung als zusätzliches Zahlungsversprechen einer zweiten Bank', keywords: ['zusätzlich|zweite|weitere', 'Bank'], points: 1 },
        { text: 'nennt Länderrisiko oder unsichere Bank als Anlass', keywords: ['Länderrisiko|politisch|Devisen|unsicher|unbekannt'], points: 1 }
      ],
      hints: ['Wer ist beim unwiderruflichen Akkreditiv zur Zahlung verpflichtet?', 'Was passiert, wenn das Käuferland keine Devisen mehr freigibt?'],
      solution: '**Unwiderruflich**: Das Zahlungsversprechen der eröffnenden Bank kann nicht einseitig geändert oder aufgehoben werden. **Bestätigt**: Zusätzlich verpflichtet sich eine zweite Bank (meist im Exportland). Empfehlenswert bei **Länderrisiko** (politische Unruhen, Devisenmangel) oder bei einer wenig bekannten ausländischen Bank.'
    },
    {
      id: 'lf10-zahlungssicherung-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Dokumentenprüfung beim Akkreditiv',
      intro: `Die Spedition Hochwald Logistik in Merzig organisiert für die Saar-Antriebstechnik GmbH einen Container von Antwerpen nach Santos. Das Akkreditiv verlangt (Auszug):

- voller Satz reiner Bordkonnossemente, an Order, Verladehafen Antwerpen, Bestimmungshafen Santos
- spätester Verladetag: 15.11.
- Vorlage der Dokumente spätestens 21 Tage nach dem Verladedatum, Verfall des Akkreditivs am 30.11.
- Handelsrechnung, Packliste, Versicherungszertifikat über 110 % des Rechnungswerts

Das Schiff verlässt Antwerpen erst am 17.11., weil es Verspätung hat. Im Entwurf des Konnossements steht außerdem: „2 crates slightly damaged“.`,
      hints: ['Vergleiche jedes Datum und jeden Vermerk mit den Bedingungen.', 'Die Bank prüft streng nach dem Wortlaut.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf10-zahlungssicherung-a10-1', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Unstimmigkeiten würde die Bank feststellen? (Mehrfachauswahl)',
          options: [
            'Das Verladedatum 17.11. liegt nach dem spätesten Verladetag.',
            'Das Konnossement ist wegen des Vermerks über beschädigte Kisten nicht „rein“.',
            'Die Vorlagefrist von 21 Tagen ist schon beim Verladen überschritten.',
            'Ein Konnossement an Order ist im Akkreditiv nicht zulässig.'
          ],
          correct: [0, 1],
          hints: ['Vergleiche 17.11. mit 15.11.', 'Was heißt „clean“?'],
          solution: 'Richtig sind **A und B**: Die Verladung am 17.11. verletzt den spätesten Verladetag 15.11., und der Vermerk über beschädigte Kisten macht das Konnossement „unrein“. Die Vorlagefrist beginnt erst mit der Verladung (C falsch), das Orderkonnossement wird ausdrücklich verlangt (D falsch).'
        },
        {
          id: 'lf10-zahlungssicherung-a10-2', type: 'mc', difficulty: 2, points: 1,
          q: 'Was folgt aus diesen Unstimmigkeiten, wenn nichts unternommen wird?',
          options: [
            'Die Bank muss trotzdem zahlen, weil die Ware unterwegs ist.',
            'Die Bank ist nicht mehr zur Zahlung verpflichtet; der Exporteur ist auf den guten Willen des Käufers angewiesen.',
            'Die Bank prüft die Ware im Hafen und entscheidet dann.',
            'Der Spediteur muss den Kaufpreis bezahlen.'
          ],
          correct: [1],
          hints: ['Das Akkreditiv verspricht Zahlung nur gegen akkreditivgerechte Dokumente.', 'Banken prüfen keine Ware.'],
          solution: 'Bei Unstimmigkeiten entfällt die Zahlungspflicht der Bank. Sie kann den Käufer fragen, ob er die Abweichungen akzeptiert; das Akkreditiv wird dann praktisch zu einem Inkasso.'
        },
        {
          id: 'lf10-zahlungssicherung-a10-3', type: 'text', difficulty: 3, points: 3,
          q: 'Was sollte die Spedition **vor** der Verladung unternehmen? Nenne drei Maßnahmen.',
          model: 'Die Spedition informiert den Exporteur sofort über die Verspätung, damit er beim Käufer eine Änderung des Akkreditivs (Verlängerung des Verladetermins) beantragen lässt. Sie prüft, ob ein früheres Schiff oder eine andere Reederei den Termin halten kann. Die beschädigten Kisten werden vor der Verladung neu verpackt oder ausgetauscht, damit ein reines Konnossement ausgestellt werden kann.',
          criteria: [
            { text: 'informiert den Exporteur/Auftraggeber', keywords: ['inform|benachrichtig|mitteil'], points: 1 },
            { text: 'nennt Änderung/Verlängerung des Akkreditivs', keywords: ['Änderung|änder|Verlänger|verlänger'], points: 1 },
            { text: 'nennt Neuverpackung oder Alternative für das Schiff', keywords: ['verpack|austausch|früher|anderes Schiff|andere Reederei|Alternativ'], points: 1 }
          ],
          hints: ['Wer kann ein unwiderrufliches Akkreditiv ändern lassen?', 'Wie bekommt man ein „reines“ Konnossement?'],
          solution: '1. Exporteur sofort informieren, damit der Käufer über seine Bank eine **Änderung** des Akkreditivs (späterer Verladetag) beantragt – bei einem unwiderruflichen Akkreditiv nur mit Zustimmung aller Beteiligten. 2. Alternative Abfahrt prüfen (früheres Schiff, andere Reederei). 3. Beschädigte Kisten **neu verpacken** oder austauschen, damit das Konnossement „clean“ ausgestellt wird.'
        }
      ]
    }
  ],
  quiz: ['lf10-zahlungssicherung-a1', 'lf10-zahlungssicherung-a2', 'lf10-zahlungssicherung-a5', 'lf10-zahlungssicherung-a7', 'lf10-zahlungssicherung-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 10, Inhalte: Dokumenteninkasso und Dokumentenakkreditiv; Begleitpapiere, Spediteurversanddokumente' },
    { title: 'UCP 600 – Uniform Customs and Practice for Documentary Credits (ERA)', publisher: 'International Chamber of Commerce (ICC)', url: 'https://academy.iccwbo.org/ucp-600', asOf: 'Revision 2007, geprüft 2026' },
    { title: 'URC 522 – Uniform Rules for Collections (ERI)', publisher: 'International Chamber of Commerce (ICC)', url: 'https://2go.iccwbo.org/urc-522-uniform-rules-for-collections-config-1.html', asOf: 'geprüft 2026' }
  ],
  links: ['lf10-incoterms', 'lf10-container', 'lf10-multimodal', 'lf10-ausfuhrverfahren']
};
