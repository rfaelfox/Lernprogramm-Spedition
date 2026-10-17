export default {
  id: 'lf10-incoterms',
  area: 'LF10',
  topic: 'lf10-incoterms',
  title: 'Incoterms® 2020',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: 'Incoterms® 2020, gültig seit 1.1.2020; Stand der Prüfung 2026',
    note: 'Incoterms® ist eine eingetragene Marke der Internationalen Handelskammer (ICC). Der Volltext der Regeln ist urheberrechtlich geschützt; diese Lerneinheit enthält nur eigene, vereinfachte Erklärungen. Maßgeblich ist die offizielle ICC-Publikation. Ältere Fassungen (z. B. 2010) dürfen weiter vereinbart werden, wenn die Version genannt ist.'
  },
  goals: [
    'Ich kann erklären, wozu Incoterms® dienen und dass sie nur gelten, wenn sie im Kaufvertrag vereinbart werden.',
    'Ich kann die 11 Klauseln der Incoterms® 2020 den beiden Gruppen „alle Transportarten“ und „nur See- und Binnenschiffstransport“ zuordnen.',
    'Ich kann für jede Klausel angeben, wo die Gefahr und wo die Kosten vom Verkäufer auf den Käufer übergehen.',
    'Ich kann die Versicherungspflicht bei CIF (mindestens ICC C) und CIP (ICC A) erklären und die Mindestversicherungssumme berechnen.',
    'Ich kann eine Incoterms®-Klausel korrekt mit Ort und Version angeben.',
    'Ich kann erklären, was Incoterms® nicht regeln, insbesondere Eigentumsübergang und Zahlung.',
    'Ich kann für einen Exportauftrag eine geeignete Klausel auswählen und begründen.'
  ],
  simple: `# Worum geht es?

Wenn ein Unternehmen aus dem Saarland Waren ins Ausland verkauft, müssen Verkäufer und Käufer klären:

- **Wer bezahlt** den Transport, die Verladung, die Zollabfertigung und die Versicherung?
- **Ab wann trägt der Käufer das Risiko** (die Gefahr), wenn die Ware unterwegs beschädigt wird oder verloren geht?
- **Wer erledigt** welche Aufgaben, z. B. Ausfuhr- und Einfuhrabfertigung?

Damit das nicht in jedem Vertrag neu und in jeder Sprache anders formuliert werden muss, gibt es die **Incoterms®** (International Commercial Terms). Sie werden von der **Internationalen Handelskammer (ICC)** in Paris herausgegeben. Aktuell ist die Fassung **Incoterms® 2020**.

Jede Klausel ist eine Abkürzung aus drei Buchstaben, zum Beispiel **EXW** (ab Werk) oder **DDP** (geliefert verzollt). Je weiter man in der Liste von EXW zu DDP geht, desto mehr Pflichten übernimmt der Verkäufer.

**Wichtig:**
- Incoterms® gelten nur, wenn Käufer und Verkäufer sie **im Kaufvertrag vereinbaren**.
- Man nennt immer **Klausel + Ort + Version**, z. B. **„FCA Saarbrücken Incoterms® 2020“**.
- Incoterms® regeln **nicht**, wann das **Eigentum** übergeht und **wie bezahlt** wird.

**Zwei Gruppen:**

| Für alle Transportarten (7) | Nur für See- und Binnenschiffstransport (4) |
|---|---|
| EXW, FCA, CPT, CIP, DAP, DPU, DDP | FAS, FOB, CFR, CIF |`,
  deep: `# Die 11 Klauseln im Überblick

> Vereinfachte eigene Darstellung. „Lieferung“ meint den Punkt, an dem der Verkäufer seine Lieferpflicht erfüllt und die Gefahr auf den Käufer übergeht.

## Klauseln für alle Transportarten

| Klausel | Bedeutung (deutsch, sinngemäß) | Gefahrübergang | Kosten des Haupttransports |
|---|---|---|---|
| **EXW** Ex Works | ab Werk | Ware wird beim Verkäufer bereitgestellt, nicht verladen | Käufer |
| **FCA** Free Carrier | frei Frachtführer | Übergabe an den vom Käufer benannten Frachtführer am benannten Ort (beim Verkäufer: verladen auf das Abholfahrzeug; anderswo: auf dem ankommenden Fahrzeug des Verkäufers, entladebereit) | Käufer |
| **CPT** Carriage Paid To | frachtfrei | Übergabe an den **ersten** Frachtführer | Verkäufer bis zum Bestimmungsort |
| **CIP** Carriage and Insurance Paid To | frachtfrei versichert | Übergabe an den **ersten** Frachtführer | Verkäufer bis zum Bestimmungsort + Versicherung (ICC A) |
| **DAP** Delivered at Place | geliefert benannter Ort | am Bestimmungsort auf dem ankommenden Fahrzeug, **entladebereit** | Verkäufer |
| **DPU** Delivered at Place Unloaded | geliefert benannter Ort entladen | am Bestimmungsort **entladen** | Verkäufer (auch Entladen) |
| **DDP** Delivered Duty Paid | geliefert verzollt | wie DAP, zusätzlich **Einfuhrabfertigung und Einfuhrabgaben** durch den Verkäufer | Verkäufer |

## Klauseln nur für See- und Binnenschiffstransport

| Klausel | Bedeutung (deutsch, sinngemäß) | Gefahrübergang | Kosten des Haupttransports |
|---|---|---|---|
| **FAS** Free Alongside Ship | frei Längsseite Schiff | Ware liegt **längsseits** des Schiffes im Verschiffungshafen | Käufer |
| **FOB** Free On Board | frei an Bord | Ware ist **an Bord** des Schiffes im Verschiffungshafen | Käufer |
| **CFR** Cost and Freight | Kosten und Fracht | **an Bord** im Verschiffungshafen | Verkäufer bis Bestimmungshafen |
| **CIF** Cost, Insurance and Freight | Kosten, Versicherung und Fracht | **an Bord** im Verschiffungshafen | Verkäufer bis Bestimmungshafen + Versicherung (mind. ICC C) |

## Die Logik der Buchstaben

- **E** (EXW): Abholklausel, der Käufer holt ab.
- **F** (FCA, FAS, FOB): Der Verkäufer liefert an den Frachtführer des Käufers, der **Haupttransport ist nicht bezahlt**.
- **C** (CPT, CIP, CFR, CIF): Der Verkäufer **bezahlt den Haupttransport**, die **Gefahr geht aber schon bei der Übergabe im Abgangsland** über. Es gibt also **zwei kritische Punkte**: Gefahrübergang im Abgangsland, Kostenübergang im Bestimmungsland.
- **D** (DAP, DPU, DDP): Ankunftsklauseln. Der Verkäufer trägt Kosten **und** Gefahr bis zum Bestimmungsort.

## Zollabfertigung

- In der Regel: **Ausfuhrabfertigung** durch den Verkäufer, **Einfuhrabfertigung** durch den Käufer.
- Ausnahmen: Bei **EXW** übernimmt der Käufer auch die Ausfuhrabfertigung (der Verkäufer muss nur dabei helfen). Bei **DDP** übernimmt der Verkäufer auch die Einfuhrabfertigung und zahlt die Einfuhrabgaben.

## Versicherung bei CIF und CIP

- Nur bei **CIF** und **CIP** muss der Verkäufer eine Transportversicherung zugunsten des Käufers abschließen. Bei allen anderen Klauseln ist eine Versicherung nicht vorgeschrieben, kann aber im eigenen Interesse sinnvoll sein.
- **CIF:** Mindestdeckung nach den Institute Cargo Clauses **(C)**, einer Deckung mit eingeschränktem Umfang (benannte Gefahren).
- **CIP:** seit 2020 höhere Mindestdeckung nach **Institute Cargo Clauses (A)**, also „alle Risiken“ mit den üblichen Ausschlüssen.
- **Versicherungssumme:** mindestens **Kaufpreis + 10 %**, also **110 % des Vertragswerts**, in der Währung des Vertrags.
- Die Parteien können eine andere Deckung vereinbaren.

## Was Incoterms® regeln und was nicht

**Sie regeln u. a.:** Lieferort und Gefahrübergang, Verteilung der Kosten, Transport- und Versicherungsverträge, Ausfuhr- und Einfuhrabfertigung, Liefernachweis und Transportdokumente, Prüfung, Verpackung und Kennzeichnung, Benachrichtigungen, Sicherheitsanforderungen.

**Sie regeln nicht:**
- den **Eigentumsübergang** (dafür gelten Kaufvertrag und anwendbares Recht, z. B. Eigentumsvorbehalt),
- die **Zahlung** (Preis, Zahlungsbedingung, Akkreditiv usw.),
- ob überhaupt ein **Kaufvertrag** wirksam zustande gekommen ist,
- die **Folgen von Vertragsverletzungen** (z. B. Schadenersatz bei Mängeln) und Haftungsfragen aus Frachtverträgen.

## Weitere Neuerungen der Fassung 2020 (Auswahl)

- **DAT** (Delivered at Terminal) wurde zu **DPU**: Entladen ist jetzt an jedem benannten Ort möglich, nicht nur an einem Terminal.
- Bei **FCA** können die Parteien vereinbaren, dass der Käufer seinen Frachtführer anweist, dem Verkäufer ein **Bordkonnossement** auszustellen (wichtig bei Akkreditiven).
- Bei FCA, DAP, DPU und DDP ist ausdrücklich berücksichtigt, dass Verkäufer oder Käufer **mit eigenen Fahrzeugen** transportieren.

## FCA statt FOB beim Container

FOB, FAS, CFR und CIF passen eigentlich nur, wenn die Ware direkt am Schiff übergeben wird (z. B. Massengut). Ein **Container** wird aber meist schon im Containerterminal oder beim Versender übergeben. Würde FOB vereinbart, trüge der Verkäufer die Gefahr noch im Terminal, obwohl er keinen Einfluss mehr auf die Ware hat. Für Container empfiehlt sich deshalb **FCA** (statt FOB), **CPT** (statt CFR) oder **CIP** (statt CIF).

> **Marke und Urheberrecht:** „Incoterms®“ ist eine eingetragene Marke der ICC. Der Volltext der Regeln ist urheberrechtlich geschützt und über die ICC erhältlich. Diese Lerneinheit gibt nur eigene, vereinfachte Erklärungen wieder.`,
  terms: [
    { term: 'Incoterms®', def: 'Internationale Regeln der Internationalen Handelskammer (ICC) für die Auslegung von Lieferklauseln im Kaufvertrag; aktuell Incoterms® 2020.' },
    { term: 'ICC', def: 'International Chamber of Commerce, Internationale Handelskammer mit Sitz in Paris; Herausgeberin der Incoterms®.' },
    { term: 'Gefahrübergang', def: 'Zeitpunkt bzw. Ort, ab dem der Käufer das Risiko von Verlust oder Beschädigung der Ware trägt.' },
    { term: 'Kostenübergang', def: 'Punkt, ab dem der Käufer die Kosten (z. B. Fracht, Umschlag) trägt; bei C-Klauseln liegt er später als der Gefahrübergang.' },
    { term: 'Zweipunktklausel', def: 'Bezeichnung für die C-Klauseln: Gefahrübergang im Abgangsland, Kostenübergang erst im Bestimmungsland.' },
    { term: 'Institute Cargo Clauses (A)', def: 'Englische Standardbedingungen für die Transportversicherung mit Deckung gegen alle Risiken (mit Ausschlüssen); Mindestdeckung bei CIP.' },
    { term: 'Institute Cargo Clauses (C)', def: 'Standardbedingungen mit eingeschränkter Deckung für benannte Gefahren; Mindestdeckung bei CIF.' },
    { term: 'Benannter Ort', def: 'Ort, der hinter der Klausel steht (z. B. FCA Saarbrücken); bestimmt Lieferort oder Bestimmungsort und sollte möglichst genau angegeben werden.' },
    { term: 'Bordkonnossement', def: 'Seefrachtdokument, das bestätigt, dass die Ware an Bord verladen ist; häufig Voraussetzung im Akkreditivgeschäft.' },
    { term: 'Einfuhrabgaben', def: 'Zölle und Einfuhrumsatzsteuer bzw. sonstige Abgaben bei der Einfuhr; nur bei DDP trägt sie der Verkäufer.' }
  ],
  example: `# Beispiel: Pumpen aus Saarbrücken nach Montreal (Beispielfall)

Die Saar-Pumpen GmbH in Saarbrücken verkauft 2 Paletten Pumpen an einen Kunden in Montreal (Kanada). Der Kunde hat eine eigene Spedition, die die Ware in Saarbrücken abholen und per Lkw nach Antwerpen und per Containerschiff nach Montreal bringen soll.

**Vereinbart wird:** „FCA Saarbrücken, Werk Saar-Pumpen GmbH, Incoterms® 2020“

- **Verkäufer:** stellt die Ware verpackt bereit, **verlädt** sie auf den Lkw der Spedition des Käufers und erledigt die **Ausfuhrabfertigung**.
- **Gefahrübergang:** wenn die Ware auf dem Abholfahrzeug verladen ist.
- **Käufer:** bezahlt Vorlauf, Seefracht, Nachlauf, Einfuhrabfertigung und Einfuhrabgaben; eine Versicherung schließt er im eigenen Interesse ab.

**Warum nicht FOB Antwerpen?** Die Pumpen werden schon in Saarbrücken im Container übergeben. Bei FOB trüge die Saar-Pumpen GmbH das Risiko, bis der Container in Antwerpen an Bord ist, ohne den Transport steuern zu können.

**Warum nicht EXW?** Bei EXW müsste der Käufer verladen und auch die Ausfuhrabfertigung in der EU übernehmen. Für einen kanadischen Käufer ist das schwierig; FCA ist hier passender.

**Variante CIP Montreal:** Würde der Kunde verlangen „CIP Montreal Incoterms® 2020“, müsste die Saar-Pumpen GmbH Transport und Versicherung bis Montreal bezahlen (mindestens 110 % des Kaufpreises, Deckung ICC A). Die **Gefahr** ginge trotzdem schon in Saarbrücken bei der Übergabe an den ersten Frachtführer über.

**Nicht geregelt:** Die Zahlung (z. B. per Akkreditiv) und der Eigentumsübergang (z. B. Eigentumsvorbehalt) stehen in eigenen Vertragsklauseln.`,
  rules: [
    'Incoterms® immer mit Klausel, möglichst genauem Ort und Version angeben: „FCA Saarbrücken Incoterms® 2020“.',
    'EXW, FCA, CPT, CIP, DAP, DPU, DDP passen für alle Transportarten; FAS, FOB, CFR, CIF nur für See- und Binnenschiffstransport.',
    'Bei C-Klauseln zahlt der Verkäufer den Haupttransport, die Gefahr geht aber schon im Abgangsland über.',
    'Nur CIF und CIP verpflichten zur Versicherung: CIF mindestens ICC (C), CIP ICC (A), jeweils mindestens 110 % des Kaufpreises.',
    'Incoterms® regeln weder Eigentumsübergang noch Zahlung.',
    'Für Container FCA, CPT oder CIP statt FOB, CFR oder CIF verwenden.',
    'DDP ist die einzige Klausel, bei der der Verkäufer die Einfuhrabgaben trägt; bei EXW übernimmt der Käufer sogar die Ausfuhrabfertigung.'
  ],
  summary: `- **Incoterms® 2020** der ICC: 11 Klauseln, gelten nur bei Vereinbarung, Angabe mit Ort und Version.
- **Alle Transportarten:** EXW, FCA, CPT, CIP, DAP, DPU, DDP. **Nur See/Binnenschiff:** FAS, FOB, CFR, CIF.
- **E** = Abholung, **F** = Haupttransport unbezahlt, **C** = Haupttransport bezahlt, Gefahr früh, **D** = Ankunft, Kosten und Gefahr bis Bestimmungsort.
- **Versicherung:** CIF mind. ICC (C), CIP ICC (A); Versicherungssumme mind. 110 %.
- **Zoll:** Ausfuhr meist Verkäufer, Einfuhr meist Käufer; Ausnahmen EXW (Käufer macht beides) und DDP (Verkäufer macht beides).
- **Nicht geregelt:** Eigentumsübergang, Zahlung, Vertragsschluss, Folgen von Vertragsverletzungen.
- **Marke:** „Incoterms®“ ist eine Marke der ICC; der Volltext ist geschützt.`,
  mistakes: [
    { wrong: 'Bei CIF trägt der Verkäufer das Risiko bis zum Bestimmungshafen, weil er ja die Fracht zahlt.', right: 'Bei CIF geht die Gefahr über, sobald die Ware im Verschiffungshafen an Bord ist. Der Verkäufer zahlt nur Fracht und Versicherung bis zum Bestimmungshafen.' },
    { wrong: 'Mit dem Gefahrübergang geht auch das Eigentum auf den Käufer über.', right: 'Incoterms® regeln den Eigentumsübergang nicht. Das richtet sich nach Kaufvertrag und anwendbarem Recht (z. B. Eigentumsvorbehalt).' },
    { wrong: 'FOB kann man für jede Sendung verwenden, auch für Luftfracht oder Lkw-Transporte.', right: 'FOB ist nur für See- und Binnenschiffstransport gedacht. Für andere Transportarten und Container passt FCA.' },
    { wrong: 'Es reicht, „FOB“ in den Vertrag zu schreiben.', right: 'Zur eindeutigen Vereinbarung gehören Klausel, genauer Ort und Version, z. B. „FOB Antwerpen Incoterms® 2020“.' },
    { wrong: 'Bei jeder Incoterms®-Klausel muss der Verkäufer die Ware versichern.', right: 'Nur bei CIF und CIP besteht eine Versicherungspflicht des Verkäufers.' },
    { wrong: 'DAP und DPU sind dasselbe.', right: 'Bei DAP liefert der Verkäufer entladebereit auf dem Fahrzeug, bei DPU muss er die Ware am Bestimmungsort auch entladen.' }
  ],
  flashcards: [
    { q: 'Wer gibt die Incoterms® heraus?', a: 'Die Internationale Handelskammer (ICC) in Paris.' },
    { q: 'Welche 7 Klauseln gelten für alle Transportarten?', a: 'EXW, FCA, CPT, CIP, DAP, DPU, DDP.' },
    { q: 'Welche 4 Klauseln gelten nur für See- und Binnenschiffstransport?', a: 'FAS, FOB, CFR, CIF.' },
    { q: 'Wo geht bei FOB die Gefahr über?', a: 'Wenn die Ware im Verschiffungshafen an Bord des Schiffes ist.' },
    { q: 'Wo geht bei CPT die Gefahr über?', a: 'Bei der Übergabe an den ersten Frachtführer, obwohl der Verkäufer den Transport bis zum Bestimmungsort bezahlt.' },
    { q: 'Welche Mindestdeckung gilt bei CIF und bei CIP?', a: 'CIF: Institute Cargo Clauses (C). CIP: Institute Cargo Clauses (A). Jeweils mindestens 110 % des Kaufpreises.' },
    { q: 'Was regeln Incoterms® nicht?', a: 'Eigentumsübergang, Zahlung und Preis, Zustandekommen des Kaufvertrags, Folgen von Vertragsverletzungen.' },
    { q: 'Wie gibt man eine Klausel korrekt an?', a: 'Klausel + genauer Ort + Version, z. B. „FCA Saarbrücken Incoterms® 2020“.' },
    { q: 'Welche Klausel ersetzt seit 2020 DAT?', a: 'DPU (Delivered at Place Unloaded).' },
    { q: 'Bei welcher Klausel hat der Verkäufer die meisten Pflichten?', a: 'DDP: Er trägt Kosten und Gefahr bis zum Bestimmungsort sowie Einfuhrabfertigung und Einfuhrabgaben.' },
    { q: 'Warum soll man für Container FCA statt FOB verwenden?', a: 'Der Container wird schon vor der Verladung im Terminal oder beim Versender übergeben; bei FOB trüge der Verkäufer bis zur Verladung an Bord ein Risiko, das er nicht beeinflussen kann.' }
  ],
  tasks: [
    {
      id: 'lf10-incoterms-a1', type: 'match', difficulty: 1, points: 6,
      q: 'Ordne jeder Klausel ihren englischen Namen zu.',
      pairs: [
        ['EXW', 'Ex Works'],
        ['FCA', 'Free Carrier'],
        ['CIP', 'Carriage and Insurance Paid To'],
        ['DPU', 'Delivered at Place Unloaded'],
        ['FOB', 'Free On Board'],
        ['CFR', 'Cost and Freight']
      ],
      hints: ['Die Buchstaben sind die Anfangsbuchstaben der englischen Wörter.', 'Achte bei C-Klauseln auf „Insurance“.'],
      solution: 'EXW = Ex Works; FCA = Free Carrier; CIP = Carriage and Insurance Paid To; DPU = Delivered at Place Unloaded; FOB = Free On Board; CFR = Cost and Freight.'
    },
    {
      id: 'lf10-incoterms-a2', type: 'mc', difficulty: 1, points: 2,
      q: 'Welche Klauseln sind **nur für den See- und Binnenschiffstransport** vorgesehen? (Mehrfachauswahl)',
      options: ['FOB', 'FCA', 'CIF', 'CIP', 'FAS', 'DAP', 'CFR', 'DPU'],
      correct: [0, 2, 4, 6],
      hints: ['Es sind genau vier Klauseln.', 'Die Klauseln nennen ein Schiff oder einen Hafen: „Ship“, „Board“ bzw. Kosten und Fracht bis zum Hafen.'],
      solution: 'Nur See/Binnenschiff: **FAS, FOB, CFR, CIF**. FCA, CIP, DAP und DPU gelten für alle Transportarten (ebenso EXW, CPT, DDP).'
    },
    {
      id: 'lf10-incoterms-a3', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Die Incoterms® werden von der [[ICC|Internationalen Handelskammer|Internationale Handelskammer]] herausgegeben. Die aktuelle Fassung gilt seit dem 1.1.[[2020]]. Eine vollständige Angabe lautet zum Beispiel „FCA [[Saarbrücken]] Incoterms® 2020“, also Klausel, Ort und [[Version|Fassung|Jahr]].',
      hints: ['Die Organisation hat ihren Sitz in Paris.', 'Zur eindeutigen Angabe gehören drei Bestandteile.'],
      solution: 'Herausgeberin ist die **ICC** (Internationale Handelskammer). Die Fassung **2020** gilt seit 1.1.2020. Angabe: Klausel + Ort (**Saarbrücken**) + **Version**.'
    },
    {
      id: 'lf10-incoterms-a4', type: 'order', difficulty: 2, points: 7,
      q: 'Ordne die Klauseln für alle Transportarten nach **zunehmenden Pflichten des Verkäufers** (wenigste zuerst).',
      items: ['EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP'],
      hints: ['Beginne mit der Abholklausel und ende mit „geliefert verzollt“.', 'CIP = CPT plus Versicherung; DPU = DAP plus Entladen.'],
      solution: '**EXW** (bereitstellen) → **FCA** (übergeben an Frachtführer, Ausfuhr) → **CPT** (zusätzlich Haupttransport bezahlen) → **CIP** (zusätzlich versichern) → **DAP** (Gefahr bis Bestimmungsort) → **DPU** (zusätzlich entladen) → **DDP** (zusätzlich Einfuhrabfertigung und Einfuhrabgaben).'
    },
    {
      id: 'lf10-incoterms-a5', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Verkäufer in Homburg liefert „CPT Wien Incoterms® 2020“ per Lkw. Auf der Autobahn bei Nürnberg wird die Ware bei einem Unfall beschädigt. Wer trägt die Gefahr?',
      options: [
        'Der Verkäufer, weil er die Fracht bis Wien bezahlt.',
        'Der Käufer, weil die Gefahr bei der Übergabe an den ersten Frachtführer in Homburg übergegangen ist.',
        'Verkäufer und Käufer je zur Hälfte.',
        'Der Verkäufer, weil die Ware noch in Deutschland war.'
      ],
      correct: [1],
      hints: ['CPT ist eine C-Klausel.', 'Bei C-Klauseln fallen Gefahr- und Kostenübergang auseinander.'],
      solution: '**B.** Bei CPT geht die Gefahr mit der Übergabe an den ersten Frachtführer über, hier in Homburg. Der Verkäufer zahlt zwar die Fracht bis Wien, das Transportrisiko trägt aber der Käufer. Er kann sich ggf. an den Frachtführer halten (CMR-Haftung) oder an seine Versicherung.'
    },
    {
      id: 'lf10-incoterms-a6', type: 'mc', difficulty: 2, points: 2,
      q: 'Was regeln die Incoterms® 2020 **nicht**? (Mehrfachauswahl)',
      options: [
        'Den Zeitpunkt des Eigentumsübergangs',
        'Wer die Ausfuhrabfertigung übernimmt',
        'Die Zahlungsbedingungen, z. B. Zahlung per Akkreditiv',
        'Wo die Gefahr auf den Käufer übergeht',
        'Die Folgen, wenn die Ware mangelhaft ist'
      ],
      correct: [0, 2, 4],
      hints: ['Incoterms® sind Lieferklauseln, keine vollständigen Kaufverträge.', 'Zoll, Kosten und Gefahr gehören zum Kern der Incoterms®.'],
      solution: 'Nicht geregelt sind **Eigentumsübergang (A), Zahlung (C) und Rechtsfolgen von Vertragsverletzungen wie Mängeln (E)**. Ausfuhrabfertigung (B) und Gefahrübergang (D) sind gerade Inhalt der Klauseln.'
    },
    {
      id: 'lf10-incoterms-a7', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Exporteur verkauft Maschinenteile „CIF Montreal Incoterms® 2020“ zum Kaufpreis von **48.000 €**. Er schließt die Mindestversicherung ab. Die Versicherungsprämie beträgt (Beispielwert) **0,25 %** der Versicherungssumme. Berechne die Mindestversicherungssumme und die Prämie. Welche Deckung ist mindestens nötig?',
      formula: 'Versicherungssumme = Kaufpreis × 110 %; Prämie = Versicherungssumme × Prämiensatz',
      fields: [
        { id: 'vs', label: 'Mindestversicherungssumme', unit: '€', answer: 52800, tol: 0.01 },
        { id: 'pr', label: 'Versicherungsprämie', unit: '€', answer: 132, tol: 0.01 }
      ],
      hints: ['Mindestens Kaufpreis plus 10 %.', '0,25 % = 0,0025.'],
      solution: `**Mindestversicherungssumme:** 48.000 € × 110 % = 48.000 € × 1,10 = **52.800 €**

**Prämie:** 52.800 € × 0,25 % = 52.800 € × 0,0025 = **132,00 €**

**Deckung:** Bei CIF mindestens **Institute Cargo Clauses (C)**. Der Käufer kann eine höhere Deckung (z. B. ICC A) verlangen, die er dann in der Regel selbst bezahlt, sofern nichts anderes vereinbart ist.`
    },
    {
      id: 'lf10-incoterms-a8', type: 'calc', difficulty: 3, points: 4,
      q: `Für einen Seetransport von Saarbrücken über Antwerpen nach Halifax fallen folgende Kosten an (vereinfachte Beispielzahlen):

| Kostenposition | € |
|---|---:|
| Vorlauf Lkw Saarbrücken – Antwerpen | 680 |
| Ausfuhrabfertigung | 95 |
| Umschlag und Verladung an Bord in Antwerpen | 240 |
| Seefracht Antwerpen – Halifax | 1.850 |
| Transportversicherung | 120 |
| Einfuhrabfertigung und Einfuhrabgaben in Kanada | 210 |
| Nachlauf Halifax – Empfänger | 430 |

Vereinfachend gilt: Unter FOB trägt der Verkäufer alle Kosten bis einschließlich Verladung an Bord; die Versicherung schließt der Käufer ab. Unter CIF trägt der Verkäufer zusätzlich Seefracht und Versicherung.

Berechne die Kosten von Verkäufer und Käufer bei **FOB Antwerpen** und bei **CIF Halifax**.`,
      formula: 'Kosten Verkäufer = Summe aller Positionen bis zum Kostenübergangspunkt; Kosten Käufer = Gesamtkosten − Kosten Verkäufer',
      fields: [
        { id: 'fobv', label: 'FOB: Kosten Verkäufer', unit: '€', answer: 1015, tol: 0.01 },
        { id: 'fobk', label: 'FOB: Kosten Käufer', unit: '€', answer: 2610, tol: 0.01 },
        { id: 'cifv', label: 'CIF: Kosten Verkäufer', unit: '€', answer: 2985, tol: 0.01 },
        { id: 'cifk', label: 'CIF: Kosten Käufer', unit: '€', answer: 640, tol: 0.01 }
      ],
      hints: ['Gesamtkosten: Addiere alle sieben Positionen (3.625 €).', 'Einfuhrabfertigung und Nachlauf trägt bei beiden Klauseln der Käufer.'],
      solution: `**Gesamtkosten:** 680 + 95 + 240 + 1.850 + 120 + 210 + 430 = **3.625 €**

**FOB Antwerpen**
- Verkäufer: Vorlauf 680 € + Ausfuhr 95 € + Verladung 240 € = **1.015 €**
- Käufer: Seefracht 1.850 € + Versicherung 120 € + Einfuhr 210 € + Nachlauf 430 € = **2.610 €**

**CIF Halifax**
- Verkäufer: 1.015 € + Seefracht 1.850 € + Versicherung 120 € = **2.985 €**
- Käufer: Einfuhr 210 € + Nachlauf 430 € = **640 €**

Probe: 1.015 € + 2.610 € = 2.985 € + 640 € = 3.625 €. Wichtig: Bei beiden Klauseln geht die **Gefahr** in Antwerpen an Bord über. In der Praxis hängt die Verteilung der Hafenumschlagskosten (z. B. THC) auch von den Vereinbarungen mit der Reederei ab.`
    },
    {
      id: 'lf10-incoterms-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Ein Kunde möchte eine Containersendung „FOB Rotterdam“ verkaufen. Der Container wird bereits beim Verkäufer in Saarlouis beladen und vom Lkw der Reederei abgeholt. Erkläre, warum du stattdessen FCA empfiehlst, und formuliere die vollständige Klausel.',
      model: 'FOB ist für die Übergabe direkt am Schiff gedacht. Der Container verlässt aber schon in Saarlouis die Kontrolle des Verkäufers. Bei FOB trüge der Verkäufer die Gefahr trotzdem bis zur Verladung an Bord in Rotterdam, also auch während Vorlauf und Lagerung im Terminal, die er nicht beeinflussen kann. Bei FCA geht die Gefahr bei der Übergabe an den Frachtführer über, also dort, wo der Verkäufer die Ware tatsächlich aus der Hand gibt. Außerdem ist FCA für alle Transportarten geeignet. Klausel: „FCA Saarlouis, [genaue Adresse des Verkäufers], Incoterms® 2020“.',
      criteria: [
        { text: 'erklärt, dass FOB nur für Übergabe am Schiff / See passt', keywords: ['Schiff|an Bord|Bord|See'], points: 1 },
        { text: 'erklärt das Risiko des Verkäufers bis zur Verladung ohne Einfluss', keywords: ['Gefahr|Risiko', 'Einfluss|Kontrolle|Terminal|Vorlauf'], points: 1 },
        { text: 'formuliert FCA mit Ort und Version', keywords: ['FCA', 'Saarlouis', '2020'], points: 1 }
      ],
      hints: ['Wo übergibt der Verkäufer den Container tatsächlich?', 'Denke an Ort und Version in der Klausel.'],
      solution: 'FOB passt nur, wenn die Ware am Schiff übergeben wird. Hier wird der Container schon in Saarlouis übergeben; bei FOB trüge der Verkäufer bis zur Verladung an Bord in Rotterdam ein Risiko, das er nicht steuern kann. Bei **FCA** geht die Gefahr bei der Übergabe an den Frachtführer in Saarlouis über. Empfehlung: **„FCA Saarlouis, [Adresse], Incoterms® 2020“**.'
    },
    {
      id: 'lf10-incoterms-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Export einer Abfüllanlage nach Kanada',
      intro: `Die Bliestal Maschinenbau GmbH in Blieskastel verkauft eine Abfüllanlage im Wert von **86.000 €** an einen Getränkehersteller in Toronto. Die Anlage wird im 40-Fuß-Container beim Verkäufer verladen, per Lkw nach Antwerpen, per Seeschiff nach Montreal und per Bahn nach Toronto befördert.

Der Käufer möchte, dass der Verkäufer den gesamten Transport bis Toronto organisiert und bezahlt und die Ware mit umfassendem Versicherungsschutz versichert. Die Einfuhr in Kanada will der Käufer selbst abwickeln und bezahlen. Das Transportrisiko soll der Käufer ab der Übergabe in Blieskastel tragen.`,
      hints: ['Gesucht ist eine Klausel für alle Transportarten mit Versicherungspflicht.', 'Achte auf die Mindestdeckung dieser Klausel.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf10-incoterms-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Klausel passt am besten?',
          options: [
            'CIF Montreal Incoterms® 2020',
            'CIP Toronto Incoterms® 2020',
            'DDP Toronto Incoterms® 2020',
            'FCA Blieskastel Incoterms® 2020'
          ],
          correct: [1],
          hints: ['Multimodaler Transport mit Container: See-Klauseln scheiden aus.', 'Der Käufer will die Einfuhr selbst machen und das Risiko ab Blieskastel tragen.'],
          solution: '**CIP Toronto Incoterms® 2020.** Der Verkäufer zahlt Transport und Versicherung bis Toronto, die Gefahr geht bei der Übergabe an den ersten Frachtführer in Blieskastel über. CIF passt nicht für einen multimodalen Containertransport bis Toronto. Bei DDP müsste der Verkäufer die Einfuhr übernehmen und die Gefahr bis Toronto tragen. Bei FCA müsste der Käufer den Haupttransport bezahlen.'
        },
        {
          id: 'lf10-incoterms-a10-2', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Mindestversicherungssumme und die Prämie bei einem Prämiensatz von 0,4 % (Beispielwert).',
          formula: 'Versicherungssumme = Kaufpreis × 110 %; Prämie = Versicherungssumme × 0,4 %',
          fields: [
            { id: 'vs', label: 'Mindestversicherungssumme', unit: '€', answer: 94600, tol: 0.01 },
            { id: 'pr', label: 'Prämie', unit: '€', answer: 378.4, tol: 0.01 }
          ],
          hints: ['86.000 € × 1,10.', '0,4 % = 0,004.'],
          solution: `**Versicherungssumme:** 86.000 € × 1,10 = **94.600 €**

**Prämie:** 94.600 € × 0,004 = **378,40 €**

Bei CIP muss die Deckung mindestens den **Institute Cargo Clauses (A)** entsprechen („alle Risiken“), das passt zum Wunsch nach umfassendem Schutz.`
        },
        {
          id: 'lf10-incoterms-a10-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Im Hafen von Montreal wird der Container beim Umschlag beschädigt. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Gefahr ist bereits in Blieskastel auf den Käufer übergegangen.',
            'Der Käufer kann den Schaden aus der vom Verkäufer abgeschlossenen Transportversicherung geltend machen.',
            'Der Verkäufer muss eine neue Anlage liefern, weil er den Transport bezahlt hat.',
            'Mit dem Gefahrübergang in Blieskastel ist auch das Eigentum automatisch übergegangen.'
          ],
          correct: [0, 1],
          hints: ['Bei C-Klauseln liegen Gefahr- und Kostenübergang an verschiedenen Orten.', 'Die CIP-Versicherung wird zugunsten des Käufers abgeschlossen. Was regeln Incoterms® nicht?'],
          solution: 'Richtig sind **A und B**. Die Gefahr ging bei Übergabe an den ersten Frachtführer in Blieskastel über; die Versicherung nach CIP dient gerade dem Schutz des Käufers. C ist falsch, weil die Frachtzahlung nichts am Gefahrübergang ändert. D ist falsch: Incoterms® regeln den Eigentumsübergang nicht.'
        }
      ]
    },
    {
      id: 'lf10-incoterms-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Worin unterscheiden sich DAP und DPU?',
      options: [
        'Bei DPU muss der Verkäufer die Ware am Bestimmungsort entladen, bei DAP liefert er entladebereit auf dem Fahrzeug.',
        'Bei DAP trägt der Verkäufer die Einfuhrabgaben, bei DPU nicht.',
        'DPU gilt nur für Seetransporte, DAP für alle Transportarten.',
        'Bei DAP geht die Gefahr schon im Abgangsland über.'
      ],
      correct: [0],
      hints: ['Das „U“ steht für „Unloaded“.', 'Beide sind D-Klauseln für alle Transportarten.'],
      solution: '**A.** DPU = Delivered at Place **Unloaded**: Der Verkäufer trägt Kosten und Gefahr einschließlich Entladen. Bei DAP endet seine Pflicht mit der Bereitstellung entladebereit auf dem Fahrzeug. Einfuhrabgaben trägt bei beiden der Käufer (nur bei DDP der Verkäufer).'
    },
    {
      id: 'lf10-incoterms-a12', type: 'mc', difficulty: 1, points: 1,
      q: 'Bei welcher Klausel übernimmt der **Käufer** auch die Ausfuhrabfertigung im Land des Verkäufers?',
      options: ['FCA', 'EXW', 'FAS', 'DDP'],
      correct: [1],
      hints: ['Es ist die Klausel mit den wenigsten Pflichten des Verkäufers.', 'Bei allen F-Klauseln macht der Verkäufer die Ausfuhrabfertigung.'],
      solution: '**EXW.** Der Verkäufer stellt die Ware nur bereit; Verladen, Ausfuhr- und Einfuhrabfertigung sind Sache des Käufers (der Verkäufer hilft auf Verlangen bei Dokumenten). Bei FCA und FAS erledigt der Verkäufer die Ausfuhrabfertigung, bei DDP sogar die Einfuhrabfertigung.'
    }
  ],
  quiz: ['lf10-incoterms-a2', 'lf10-incoterms-a4', 'lf10-incoterms-a5', 'lf10-incoterms-a7', 'lf10-incoterms-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 10, Inhalte: Lieferbedingungen im Außenhandel (Incoterms), Gefahr- und Kostenübergang' },
    { title: 'Incoterms® 2020', publisher: 'International Chamber of Commerce (ICC)', url: 'https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/', asOf: 'Incoterms® 2020, geprüft 2026' },
    { title: 'Incoterms® 2020 – Übersicht der Änderungen (CIP/ICC A, DPU, FCA mit Bordkonnossement)', publisher: 'Foley & Lardner LLP', url: 'https://www.foley.com/insights/publications/2020/01/incoterms-2020-the-terms-they-are-achangin/', asOf: '2020, geprüft 2026' }
  ],
  links: []
};
