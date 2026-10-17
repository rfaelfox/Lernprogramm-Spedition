export default {
  id: 'lf10-ausfuhrverfahren',
  area: 'LF10',
  topic: 'lf10-ausfuhrverfahren',
  title: 'Ausfuhrverfahren und Exportpapiere',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026-10',
    note: 'Ausfuhrverfahren nach Unionszollkodex (UZK) und Durchführungsverordnung (EU) 2015/2447; elektronische Anmeldung über ATLAS-Ausfuhr. Wertgrenzen laut zoll.de (abgerufen Oktober 2026): mündliche Ausfuhranmeldung bis 1.000 € Sendungswert bzw. 1.000 kg Eigenmasse, einstufiges Verfahren bei Waren bis 3.000 € (Art. 221 Abs. 2 UAbs. 2 UZK-IA). EORI-Antrag ab 1.10.2026 grundsätzlich online über das Zoll-Portal. Steuerfreie Ausfuhrlieferung nach § 4 Nr. 1 Buchst. a, § 6 UStG, Ausfuhrnachweis nach §§ 9, 10 UStDV. Präferenznachweise: Wertgrenze für nicht förmliche Nachweise in der Regel 6.000 € (je Abkommen verschieden). Stand Oktober 2026.'
  },
  goals: [
    'Ich kann das zweistufige Ausfuhrverfahren mit Ausfuhrzollstelle und Ausgangszollstelle beschreiben.',
    'Ich kann erklären, wozu ATLAS-Ausfuhr, Ausfuhranmeldung, MRN, Ausfuhrbegleitdokument und Ausgangsvermerk dienen.',
    'Ich kann begründen, warum ein Unternehmen eine EORI-Nummer braucht.',
    'Ich kann anhand der Wertgrenzen entscheiden, ob mündlich, einstufig oder zweistufig angemeldet werden kann.',
    'Ich kann erläutern, warum der Ausgangsvermerk für die Umsatzsteuerbefreiung der Ausfuhrlieferung wichtig ist.',
    'Ich kann Exportpapiere (Handelsrechnung, Packliste, Ursprungszeugnis, EUR.1, Erklärung zum Ursprung) ihrem Zweck zuordnen.'
  ],
  simple: `# Worum geht es?

Wer Waren aus der EU in ein **Drittland** (Land außerhalb der EU, z. B. Schweiz, USA, China) verkauft, muss die Ware beim **Zoll** anmelden. Das nennt man **Ausfuhr**. Der Zoll prüft, ob die Ware ausgeführt werden darf (z. B. keine Embargo- oder Rüstungsgüter), und bestätigt am Ende, dass sie die EU wirklich verlassen hat.

# Das zweistufige Verfahren in einfachen Worten

1. **Stufe 1 – Ausfuhrzollstelle** (im Inland, zuständig für den Sitz des Exporteurs bzw. den Ort der Verladung): Die Ausfuhranmeldung wird **elektronisch** über **ATLAS-Ausfuhr** abgegeben. Der Zoll prüft und überlässt die Ware zur Ausfuhr.
2. **Stufe 2 – Ausgangszollstelle** (dort, wo die Ware die EU verlässt, z. B. Seehafen Antwerpen, Flughafen Frankfurt oder eine Grenzzollstelle zur Schweiz): Sie bestätigt den **Ausgang** der Ware.
3. Danach schickt die Ausfuhrzollstelle dem Exporteur den **Ausgangsvermerk** – eine elektronische Bestätigung, dass die Ware die EU verlassen hat.

# Warum ist der Ausgangsvermerk so wichtig?

Lieferungen in ein Drittland sind **umsatzsteuerfrei** (Ausfuhrlieferung). Das Finanzamt erkennt die Steuerfreiheit aber nur an, wenn der Exporteur die Ausfuhr **nachweisen** kann – und der wichtigste Nachweis ist der Ausgangsvermerk.

# Wichtige Papiere

- **Handelsrechnung**: Was wurde zu welchem Preis verkauft?
- **Packliste**: Wie ist die Ware verpackt, wie viele Packstücke, welche Gewichte?
- **Ursprungszeugnis**: Aus welchem Land stammt die Ware?
- **Präferenznachweis** (EUR.1 oder Erklärung zum Ursprung): Damit bekommt der Käufer im Bestimmungsland oft einen **niedrigeren Zoll**.`,
  deep: `# Rechtsrahmen

Das Zollrecht ist in der EU einheitlich geregelt: **Unionszollkodex (UZK)** mit **Delegierter Verordnung (UZK-DA)** und **Durchführungsverordnung (UZK-IA, VO (EU) 2015/2447)**. In Deutschland wird die Ausfuhranmeldung elektronisch über das IT-Verfahren **ATLAS-Ausfuhr** abgegeben. Es ist die deutsche Umsetzung des europäischen Ausfuhrsystems **AES** (Automated Export System). Die elektronische Anmeldung ist Pflicht; Ausnahmen gelten u. a. für mündliche Anmeldungen und Ausfuhren mit Carnet ATA.

# Beteiligte und Begriffe

| Begriff | Bedeutung |
|---|---|
| **Ausführer** | Person mit Sitz in der EU, die den Vertrag mit dem Empfänger im Drittland geschlossen hat bzw. über die Ausfuhr bestimmt |
| **Anmelder/Vertreter** | gibt die Anmeldung ab; häufig der **Spediteur** als Vertreter (direkte oder indirekte Vertretung) |
| **Ausfuhrzollstelle** | Zollstelle, bei der die Ware angemeldet und gestellt wird; prüft, überlässt und erledigt das Verfahren |
| **Ausgangszollstelle** | letzte Zollstelle vor dem Verlassen des Zollgebiets der Union; überwacht und bestätigt den Ausgang |
| **MRN** (Movement Reference Number) | Registriernummer der Ausfuhranmeldung, mit der die Sendung an der Ausgangszollstelle identifiziert wird |
| **Ausfuhrbegleitdokument (ABD)** | Ausdruck, den die Ausfuhrzollstelle nach der Überlassung ausstellt; begleitet die Ware zur Ausgangszollstelle |
| **Ausgangsvermerk** | elektronische Nachricht der Ausfuhrzollstelle, die den Ausgang bestätigt und das Verfahren erledigt |
| **EORI-Nummer** | EU-weit gültige Identifikationsnummer für Wirtschaftsbeteiligte, in jeder Zollanmeldung anzugeben |

# Ablauf des zweistufigen Normalverfahrens

1. Ausführer oder Spediteur erstellt die **elektronische Ausfuhranmeldung** (u. a. EORI-Nummer, Warennummer, Menge, Gewicht, Wert, Empfänger, Bestimmungsland).
2. Die Ware wird bei der **Ausfuhrzollstelle gestellt** (oder bei Bewilligung an einem zugelassenen Ort).
3. Die Ausfuhrzollstelle prüft (ggf. Beschau), vergibt die **MRN** und **überlässt** die Ware zur Ausfuhr; es wird ein **ABD** erstellt.
4. Die Ware wird zur **Ausgangszollstelle** befördert und dort mit der MRN gestellt.
5. Die Ausgangszollstelle prüft und bestätigt den **Ausgang** an die Ausfuhrzollstelle.
6. Die Ausfuhrzollstelle erledigt das Verfahren und sendet den **Ausgangsvermerk** an den Anmelder.

# Wertgrenzen (laut zoll.de, Stand Oktober 2026)

| Wert der Sendung | Möglichkeit |
|---|---|
| bis **1.000 €** und bis **1.000 kg** Eigenmasse | **mündliche** Ausfuhranmeldung direkt bei der Ausgangszollstelle möglich (wenn keine Verbote, Beschränkungen oder Erstattungen betroffen sind) |
| bis **3.000 €** | **einstufiges** Verfahren: elektronische Anmeldung direkt bei der Ausgangszollstelle möglich |
| über **3.000 €** | **zweistufiges** Verfahren (Regelfall) |

Maßgeblich ist der aus dem Rechnungspreis berechnete **statistische Wert**. Eine Sendung darf **nicht gestückelt** werden, um unter eine Wertgrenze zu kommen.

> Die Wertgrenzen können sich ändern. Vor der Anwendung immer auf zoll.de prüfen.

# Ausfuhrlieferung und Umsatzsteuer

Nach **§ 4 Nr. 1 Buchst. a i. V. m. § 6 UStG** ist eine Lieferung steuerfrei, wenn die Ware vom Unternehmer oder (bei einem ausländischen Abnehmer) vom Abnehmer ins **Drittlandsgebiet** befördert oder versendet wird. Der Unternehmer muss das **nachweisen** (§ 6 Abs. 4 UStG):

- **Ausfuhrnachweis** (Belegnachweis): bei elektronischer Ausfuhranmeldung der **Ausgangsvermerk** bzw. **Alternativ-Ausgangsvermerk** der Ausfuhrzollstelle (§§ 9, 10 UStDV)
- **Buchnachweis**: Aufzeichnungen in der Buchführung (Abnehmer, Menge, Entgelt, Tag der Lieferung)

Fehlt der Nachweis, kann das Finanzamt **Umsatzsteuer nachfordern**. Deshalb archivieren Spediteur und Exporteur den Ausgangsvermerk sorgfältig.

# Exportpapiere

| Papier | Zweck | Aussteller |
|---|---|---|
| **Handelsrechnung** (Commercial Invoice) | Grundlage für Zollwert, Einfuhrabgaben, Akkreditiv | Exporteur |
| **Packliste** (Packing List) | Anzahl, Art, Markierung und Gewichte der Packstücke; Grundlage für Beschau und Verladung | Exporteur oder Spediteur |
| **Ursprungszeugnis** | bescheinigt den **nichtpräferenziellen** Ursprung (Herkunftsland), z. B. für Handelspolitik oder Akkreditiv | Industrie- und Handelskammer (IHK) |
| **Warenverkehrsbescheinigung EUR.1** | **förmlicher** Präferenznachweis: Ware hat präferenziellen Ursprung im Sinne eines Freihandelsabkommens → Zollermäßigung im Einfuhrland | Zollstelle bestätigt |
| **Erklärung zum Ursprung / Ursprungserklärung auf der Rechnung** | **nicht förmlicher** Präferenznachweis, vom Ausführer selbst auf Rechnung oder Handelspapier abgegeben; ohne besonderen Status in der Regel bis **6.000 €**, darüber als **ermächtigter Ausführer** oder **registrierter Ausführer (REX)**, je nach Abkommen | Ausführer |

Präferenz bedeutet: Das Einfuhrland gewährt für Ursprungswaren aus der EU einen **niedrigeren oder keinen Zoll**. Ein Präferenznachweis hilft also vor allem dem **Käufer**.`,
  terms: [
    { term: 'Ausfuhr', def: 'Verbringen von Unionswaren aus dem Zollgebiet der Union in ein Drittland, verbunden mit dem Zollverfahren Ausfuhr.' },
    { term: 'ATLAS-Ausfuhr', def: 'Deutsches IT-Verfahren des Zolls zur elektronischen Abwicklung der Ausfuhr; Teil des europäischen Ausfuhrsystems AES.' },
    { term: 'Ausfuhrzollstelle', def: 'Zollstelle, bei der die Ausfuhranmeldung abgegeben und die Ware gestellt wird; überlässt die Ware und erledigt das Verfahren.' },
    { term: 'Ausgangszollstelle', def: 'Zollstelle, über die die Ware das Zollgebiet der Union verlässt; bestätigt den Ausgang.' },
    { term: 'MRN', def: 'Movement Reference Number: eindeutige Registriernummer einer Ausfuhranmeldung.' },
    { term: 'Ausfuhrbegleitdokument (ABD)', def: 'Dokument der Ausfuhrzollstelle nach der Überlassung, das die Ware zur Ausgangszollstelle begleitet.' },
    { term: 'Ausgangsvermerk', def: 'Elektronische Bestätigung der Ausfuhrzollstelle über den Ausgang der Ware; gilt als Ausfuhrnachweis für die Umsatzsteuer.' },
    { term: 'EORI-Nummer', def: 'Economic Operators Registration and Identification: EU-weit gültige Nummer zur Identifikation von Beteiligten in Zollanmeldungen.' },
    { term: 'Ausfuhrlieferung', def: 'Lieferung ins Drittlandsgebiet nach § 6 UStG; umsatzsteuerfrei nach § 4 Nr. 1 Buchst. a UStG, wenn der Nachweis geführt wird.' },
    { term: 'Präferenznachweis', def: 'Nachweis des präferenziellen Ursprungs (EUR.1, Erklärung zum Ursprung), mit dem im Einfuhrland ein ermäßigter Zoll gewährt werden kann.' },
    { term: 'Ursprungszeugnis', def: 'Von der IHK ausgestellte Bescheinigung über den nichtpräferenziellen Ursprung einer Ware.' }
  ],
  example: `# Beispiel: Laborgeräte von Homburg nach Zürich (Beispielfall)

Die **Saar-Labortechnik GmbH** in Homburg verkauft 6 Paletten Laborgeräte im Wert von 42.000 € an einen Kunden in Zürich (Schweiz). Die **Spedition Bliesgau Logistik** übernimmt Transport und Zollabwicklung als Vertreterin.

1. **Vorbereitung**: Die Spedition prüft, ob die Saar-Labortechnik eine **EORI-Nummer** hat, und lässt sich Handelsrechnung und Packliste geben. Der Kunde wünscht eine **Ursprungserklärung auf der Rechnung**, damit er die Waren in der Schweiz präferenzbegünstigt einführen kann. Weil der Wert über 6.000 € liegt, muss die Saar-Labortechnik dafür den Status als ermächtigter Ausführer haben (sonst EUR.1).
2. **Stufe 1**: Die Spedition übermittelt die **Ausfuhranmeldung** über ATLAS an die für Homburg zuständige **Ausfuhrzollstelle**. Der Wert liegt über 3.000 €, also gilt das **zweistufige Verfahren**. Der Zoll überlässt die Ware, die Sendung erhält eine **MRN**, das **ABD** wird ausgedruckt.
3. **Transport**: Der Lkw fährt mit ABD und MRN zur Grenze nach Basel.
4. **Stufe 2**: An der **Ausgangszollstelle** wird die Sendung mit der MRN gestellt. Der Zoll bestätigt den Ausgang.
5. **Abschluss**: Die Ausfuhrzollstelle sendet den **Ausgangsvermerk**. Die Spedition leitet ihn an die Saar-Labortechnik weiter. Diese stellt die Rechnung **ohne Umsatzsteuer** aus und bewahrt den Ausgangsvermerk als **Ausfuhrnachweis** auf.`,
  rules: [
    'Ausfuhr = Ware verlässt das Zollgebiet der EU in ein Drittland; Lieferungen in andere EU-Staaten sind keine Ausfuhr.',
    'Regelfall ist das zweistufige Verfahren: Ausfuhrzollstelle (Inland) → Ausgangszollstelle (Grenze/Hafen/Flughafen).',
    'Ohne EORI-Nummer keine Zollanmeldung.',
    'Ohne Ausgangsvermerk kein sicherer Nachweis für die steuerfreie Ausfuhrlieferung.',
    'Wertgrenzen (1.000 € mündlich, 3.000 € einstufig) beziehen sich auf die ganze Sendung – Stückeln ist verboten.',
    'Ursprungszeugnis = Herkunftsnachweis (IHK); EUR.1 und Erklärung zum Ursprung = Präferenznachweise für Zollvorteile im Einfuhrland.'
  ],
  summary: `- Ausfuhranmeldung **elektronisch** über **ATLAS-Ausfuhr** (deutscher Teil von AES).
- **Zweistufig**: Ausfuhrzollstelle prüft und überlässt (MRN, ABD) → Ausgangszollstelle bestätigt Ausgang → **Ausgangsvermerk**.
- **Wertgrenzen** (zoll.de, Stand 10/2026): bis 1.000 € bzw. 1.000 kg mündlich, bis 3.000 € einstufig möglich.
- **EORI-Nummer**: EU-weite Beteiligtennummer, Pflichtangabe in Zollanmeldungen.
- **Ausfuhrlieferung** (§ 6 UStG) ist steuerfrei (§ 4 Nr. 1a UStG), Nachweis durch Ausgangsvermerk und Buchnachweis.
- **Exportpapiere**: Handelsrechnung, Packliste, Ursprungszeugnis (IHK), EUR.1 (Zoll), Erklärung zum Ursprung (Ausführer; ohne Status meist bis 6.000 €).`,
  mistakes: [
    { wrong: 'Eine Lieferung nach Österreich ist eine Ausfuhr und braucht eine Ausfuhranmeldung.', right: 'Österreich ist EU-Mitglied. Lieferungen innerhalb der EU sind keine Ausfuhr (umsatzsteuerlich innergemeinschaftliche Lieferung). Ausfuhr gibt es nur in Drittländer.' },
    { wrong: 'Der Ausgangsvermerk kommt von der Ausgangszollstelle an der Grenze.', right: 'Die Ausgangszollstelle bestätigt den Ausgang an die Ausfuhrzollstelle. Den Ausgangsvermerk erstellt und versendet die Ausfuhrzollstelle.' },
    { wrong: 'Ein Ursprungszeugnis bringt dem Käufer automatisch einen Präferenzzoll.', right: 'Das Ursprungszeugnis belegt nur den nichtpräferenziellen Ursprung. Für Zollpräferenzen braucht man einen Präferenznachweis wie EUR.1 oder eine Erklärung zum Ursprung.' },
    { wrong: 'Eine Sendung über 5.000 € kann man in zwei Teile aufteilen, um einstufig anzumelden.', right: 'Das Stückeln einer Sendung zum Unterschreiten der Wertgrenze ist nach Auskunft des Zolls nicht zulässig.' },
    { wrong: 'Wenn die Ware die EU verlassen hat, ist der Nachweis für das Finanzamt egal.', right: 'Die Steuerbefreiung setzt den Ausfuhr- und Buchnachweis voraus. Fehlt er, droht eine Nachforderung der Umsatzsteuer.' }
  ],
  flashcards: [
    { q: 'Welche zwei Zollstellen sind am zweistufigen Ausfuhrverfahren beteiligt?', a: 'Ausfuhrzollstelle (Anmeldung, Überlassung, Erledigung) und Ausgangszollstelle (Bestätigung des Ausgangs).' },
    { q: 'Wie heißt das deutsche IT-Verfahren für die Ausfuhr?', a: 'ATLAS-Ausfuhr (deutsche Umsetzung des EU-Ausfuhrsystems AES).' },
    { q: 'Was ist die MRN?', a: 'Movement Reference Number – die Registriernummer der Ausfuhranmeldung.' },
    { q: 'Wer versendet den Ausgangsvermerk?', a: 'Die Ausfuhrzollstelle, nachdem die Ausgangszollstelle den Ausgang bestätigt hat.' },
    { q: 'Wozu braucht man eine EORI-Nummer?', a: 'Zur Identifikation als Beteiligter in Zollanmeldungen; sie gilt EU-weit.' },
    { q: 'Bis zu welchem Wert ist eine mündliche Ausfuhranmeldung möglich (zoll.de, Stand 10/2026)?', a: 'Bis 1.000 € Sendungswert bzw. 1.000 kg Eigenmasse, sofern keine Verbote oder Beschränkungen betroffen sind.' },
    { q: 'Bis zu welchem Wert ist das einstufige Verfahren möglich (zoll.de, Stand 10/2026)?', a: 'Bis 3.000 € Warenwert.' },
    { q: 'Welche Vorschrift definiert die Ausfuhrlieferung?', a: '§ 6 UStG; steuerfrei nach § 4 Nr. 1 Buchst. a UStG.' },
    { q: 'Wer stellt in Deutschland Ursprungszeugnisse aus?', a: 'Die Industrie- und Handelskammern (IHK).' },
    { q: 'Was ist der Unterschied zwischen EUR.1 und Erklärung zum Ursprung?', a: 'EUR.1 ist förmlich und wird vom Zoll bestätigt; die Erklärung zum Ursprung gibt der Ausführer selbst ab (nicht förmlich).' }
  ],
  tasks: [
    {
      id: 'lf10-ausfuhrverfahren-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'In welchem Fall liegt eine **Ausfuhr** im zollrechtlichen Sinn vor?',
      options: ['Lieferung von Saarbrücken nach Metz (Frankreich)', 'Lieferung von Saarlouis nach Basel (Schweiz)', 'Lieferung von Homburg nach Luxemburg', 'Lieferung von Merzig nach Wien'],
      correct: [1],
      hints: ['Ausfuhr bedeutet: Die Ware verlässt das Zollgebiet der EU.', 'Welches der Länder ist kein EU-Mitglied?'],
      solution: 'Nur die **Schweiz** ist ein Drittland. Frankreich, Luxemburg und Österreich gehören zur EU – Lieferungen dorthin sind innergemeinschaftliche Lieferungen ohne Ausfuhranmeldung.'
    },
    {
      id: 'lf10-ausfuhrverfahren-a2', type: 'order', difficulty: 2, points: 6,
      q: 'Bringe die Schritte des zweistufigen Ausfuhrverfahrens in die richtige Reihenfolge.',
      items: [
        'Spediteur übermittelt die elektronische Ausfuhranmeldung über ATLAS',
        'Ware wird bei der Ausfuhrzollstelle gestellt',
        'Ausfuhrzollstelle überlässt die Ware, MRN und ABD liegen vor',
        'Ware wird mit MRN bei der Ausgangszollstelle gestellt',
        'Ausgangszollstelle bestätigt den Ausgang an die Ausfuhrzollstelle',
        'Ausfuhrzollstelle sendet den Ausgangsvermerk'
      ],
      hints: ['Stufe 1 findet im Inland statt, Stufe 2 an der EU-Außengrenze.', 'Der Ausgangsvermerk ist der letzte Schritt.'],
      solution: 'Anmeldung → Gestellung an der Ausfuhrzollstelle → Überlassung (MRN, ABD) → Gestellung an der Ausgangszollstelle → Ausgangsbestätigung → **Ausgangsvermerk** durch die Ausfuhrzollstelle, die damit das Verfahren erledigt.'
    },
    {
      id: 'lf10-ausfuhrverfahren-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Die Ausfuhranmeldung wird in Deutschland elektronisch über [[ATLAS|ATLAS-Ausfuhr]] abgegeben. In jeder Zollanmeldung muss die [[EORI-Nummer|EORI]] des Beteiligten stehen. Die Anmeldung erhält eine Registriernummer, die [[MRN]]. Den Ausgang bestätigt die [[Ausgangszollstelle]]. Als Nachweis für die Umsatzsteuerbefreiung dient der [[Ausgangsvermerk]].',
      hints: ['Das deutsche IT-Verfahren heißt wie ein Kartenwerk.', 'Movement Reference Number.'],
      solution: 'ATLAS(-Ausfuhr), EORI-Nummer, MRN, Ausgangszollstelle, Ausgangsvermerk.'
    },
    {
      id: 'lf10-ausfuhrverfahren-a4', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne das Exportpapier seinem Zweck zu.',
      pairs: [
        ['Handelsrechnung', 'Grundlage für Zollwert und Zahlung'],
        ['Packliste', 'Anzahl, Markierung und Gewichte der Packstücke'],
        ['Ursprungszeugnis', 'Nichtpräferenzieller Ursprung, ausgestellt von der IHK'],
        ['Warenverkehrsbescheinigung EUR.1', 'Förmlicher Präferenznachweis, vom Zoll bestätigt'],
        ['Erklärung zum Ursprung', 'Präferenznachweis, den der Ausführer selbst auf der Rechnung abgibt']
      ],
      hints: ['Präferenz = Zollvorteil.', 'Förmlich = eine Behörde bestätigt.'],
      solution: 'Handelsrechnung: Preis, Zollwert, Zahlung. Packliste: Packstücke und Gewichte. Ursprungszeugnis: Herkunftsland (IHK). EUR.1: förmlicher Präferenznachweis (Zoll). Erklärung zum Ursprung: nicht förmlicher Präferenznachweis durch den Ausführer.'
    },
    {
      id: 'lf10-ausfuhrverfahren-a5', type: 'calc', difficulty: 2, points: 2,
      q: 'Eine Sendung Ersatzteile in die USA wird mit 2.640 USD berechnet. Für die Umrechnung gilt ein Kurs von 1,20 USD je 1 € (Beispielwert). Berechne den Wert in Euro und gib an, um wie viel Euro die Wertgrenze für das einstufige Verfahren (3.000 €, zoll.de, Stand 10/2026) unterschritten wird.',
      formula: 'Wert in € = Wert in USD ÷ Kurs (USD je €); Abstand = 3.000 € − Wert in €',
      fields: [
        { id: 'eur', label: 'Wert in Euro', unit: '€', answer: 2200, tol: 0.01 },
        { id: 'abstand', label: 'Unterschreitung der Wertgrenze', unit: '€', answer: 800, tol: 0.01 }
      ],
      hints: ['Bei einer Mengennotierung (USD je €) wird durch den Kurs geteilt.', '2.640 ÷ 1,20 = ?'],
      solution: `**Formel:** Wert in € = USD ÷ Kurs

**Umrechnung:** 2.640 USD ÷ 1,20 USD/€ = **2.200 €**

**Abstand zur Grenze:** 3.000 € − 2.200 € = **800 €**

Ergebnis: Die Sendung liegt über 1.000 € (keine mündliche Anmeldung), aber unter 3.000 €. Das **einstufige Verfahren** direkt bei der Ausgangszollstelle ist daher möglich.`
    },
    {
      id: 'lf10-ausfuhrverfahren-a6', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Saar-Labortechnik GmbH liefert Geräte für netto 18.000 € an einen Kunden in Norwegen. Wie viel Umsatzsteuer (Regelsatz 19 %, § 12 UStG, Stand 2026) müsste sie in Rechnung stellen, wenn der Ausfuhrnachweis fehlen würde, und wie hoch ist die Umsatzsteuer bei nachgewiesener Ausfuhrlieferung?',
      formula: 'USt = Nettobetrag × 19 %; Ausfuhrlieferung: USt = 0 €',
      fields: [
        { id: 'ohne', label: 'USt ohne Nachweis', unit: '€', answer: 3420, tol: 0.01 },
        { id: 'mit', label: 'USt mit Nachweis', unit: '€', answer: 0, tol: 0.01 }
      ],
      hints: ['18.000 × 0,19.', 'Ausfuhrlieferungen sind nach § 4 Nr. 1a UStG steuerfrei.'],
      solution: `**Ohne Nachweis:** 18.000 € × 19 % = **3.420 €** – dieses Risiko trägt der Exporteur, wenn er die Ausfuhr nicht belegen kann.

**Mit Nachweis (Ausgangsvermerk + Buchnachweis):** steuerfreie Ausfuhrlieferung nach § 4 Nr. 1 Buchst. a i. V. m. § 6 UStG → **0 €**.`
    },
    {
      id: 'lf10-ausfuhrverfahren-a7', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zu Präferenznachweisen sind richtig? (Mehrfachauswahl)',
      options: [
        'Ein Präferenznachweis kann dem Käufer im Einfuhrland einen niedrigeren Zoll ermöglichen.',
        'Die EUR.1 ist ein förmlicher Nachweis, der von einer Zollstelle bestätigt wird.',
        'Eine Erklärung zum Ursprung darf jeder Ausführer ohne Wertgrenze abgeben.',
        'Oberhalb der Wertgrenze ist je nach Abkommen der Status „Ermächtigter Ausführer“ oder „Registrierter Ausführer (REX)“ nötig.',
        'Das Ursprungszeugnis der IHK ist ein Präferenznachweis.'
      ],
      correct: [0, 1, 3],
      hints: ['Nicht förmliche Nachweise sind nur bis zu einer Wertgrenze (meist 6.000 €) für jeden Ausführer möglich.', 'Unterscheide präferenziellen und nichtpräferenziellen Ursprung.'],
      solution: 'Richtig sind **A, B und D**. Ohne besonderen Status darf eine Erklärung zum Ursprung nur bis zur Wertgrenze (in der Regel 6.000 €) abgegeben werden (C falsch). Das Ursprungszeugnis betrifft den nichtpräferenziellen Ursprung und bringt keinen Präferenzzoll (E falsch).'
    },
    {
      id: 'lf10-ausfuhrverfahren-a8', type: 'mc', difficulty: 1, points: 1,
      q: 'Welche Stelle erstellt und versendet den **Ausgangsvermerk**?',
      options: ['Die Ausgangszollstelle', 'Die Ausfuhrzollstelle', 'Das Finanzamt des Exporteurs', 'Die IHK'],
      correct: [1],
      hints: ['Die Ausgangszollstelle meldet den Ausgang an eine andere Zollstelle.', 'Welche Stelle erledigt das Verfahren?'],
      solution: 'Die **Ausfuhrzollstelle** erledigt das Verfahren, nachdem ihr die Ausgangszollstelle den Ausgang bestätigt hat, und versendet dann den Ausgangsvermerk.'
    },
    {
      id: 'lf10-ausfuhrverfahren-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Ein Kunde fragt: „Warum soll ich den Ausgangsvermerk aufbewahren, die Ware ist doch längst in China?“ Erkläre es ihm.',
      model: 'Die Lieferung nach China ist eine Ausfuhrlieferung nach § 6 UStG und deshalb umsatzsteuerfrei. Die Steuerfreiheit gilt aber nur, wenn der Unternehmer die Ausfuhr nachweist. Der Ausgangsvermerk der Ausfuhrzollstelle ist der Ausfuhrnachweis nach der UStDV. Fehlt er bei einer Prüfung, kann das Finanzamt die Umsatzsteuer nachfordern.',
      criteria: [
        { text: 'nennt Steuerfreiheit der Ausfuhrlieferung', keywords: ['steuerfrei|Steuerbefreiung|ohne Umsatzsteuer'], points: 1 },
        { text: 'nennt Nachweispflicht', keywords: ['Nachweis|nachweis|Beleg'], points: 1 },
        { text: 'nennt Folge: Nachforderung der Umsatzsteuer', keywords: ['nachford|nachzahl|Umsatzsteuer zahlen|Finanzamt'], points: 1 }
      ],
      hints: ['Welche Steuer wird bei der Ausfuhr nicht berechnet?', 'Was verlangt das Finanzamt dafür?'],
      solution: 'Ausfuhrlieferungen sind **steuerfrei** (§ 4 Nr. 1a, § 6 UStG), aber nur mit **Nachweis**. Der **Ausgangsvermerk** ist der Ausfuhrnachweis (§§ 9, 10 UStDV). Ohne ihn kann das **Finanzamt** bei einer Prüfung die Umsatzsteuer nachfordern.'
    },
    {
      id: 'lf10-ausfuhrverfahren-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Drei Sendungen in die Schweiz',
      intro: `Die Spedition Bliesgau Logistik soll für verschiedene Kunden Sendungen in die Schweiz abwickeln (Wertgrenzen laut zoll.de, Stand Oktober 2026; keine Verbote oder Beschränkungen betroffen):

| Sendung | Wert | Gewicht |
|---|---:|---:|
| A: Ersatzteile | 850 € | 120 kg |
| B: Werkzeuge | 2.700 € | 400 kg |
| C: Maschine | 48.000 € | 3.200 kg |

Ein Kunde mit einer vierten Sendung im Wert von 5.400 € schlägt vor, sie in zwei Teile zu je 2.700 € aufzuteilen.`,
      hints: ['Prüfe zuerst die Grenze 1.000 € / 1.000 kg, dann 3.000 €.', 'Was sagt der Zoll zum Stückeln?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf10-ausfuhrverfahren-a10-1', type: 'match', difficulty: 2, points: 3,
          q: 'Ordne jeder Sendung die einfachste zulässige Anmeldungsform zu.',
          pairs: [
            ['Sendung A (850 €, 120 kg)', 'Mündliche Anmeldung bei der Ausgangszollstelle möglich'],
            ['Sendung B (2.700 €, 400 kg)', 'Einstufiges Verfahren: elektronische Anmeldung bei der Ausgangszollstelle'],
            ['Sendung C (48.000 €, 3.200 kg)', 'Zweistufiges Verfahren über Ausfuhr- und Ausgangszollstelle']
          ],
          hints: ['A liegt unter 1.000 € und unter 1.000 kg.', 'B liegt über 1.000 €, aber unter 3.000 €.'],
          solution: 'A: bis 1.000 € und 1.000 kg → mündlich möglich. B: über 1.000 €, bis 3.000 € → einstufig. C: über 3.000 € → zweistufig.'
        },
        {
          id: 'lf10-ausfuhrverfahren-a10-2', type: 'mc', difficulty: 2, points: 1,
          q: 'Wie reagierst du auf den Vorschlag, die Sendung über 5.400 € aufzuteilen?',
          options: [
            'Zustimmen, weil jede Teilsendung unter 3.000 € liegt.',
            'Ablehnen, weil das Stückeln einer Sendung zum Unterschreiten der Wertgrenze nicht zulässig ist.',
            'Zustimmen, wenn die Teile an verschiedenen Tagen fahren.',
            'Ablehnen, weil Sendungen über 5.000 € gar nicht ausgeführt werden dürfen.'
          ],
          correct: [1],
          hints: ['Der Zoll hat zum Stückeln eine klare Aussage gemacht.', 'Es gibt keine Höchstgrenze für Ausfuhren.'],
          solution: 'Das Aufteilen einer Sendung, um unter die Wertgrenze zu kommen, ist laut Zoll **nicht zulässig**. Die Sendung über 5.400 € ist zweistufig anzumelden.'
        },
        {
          id: 'lf10-ausfuhrverfahren-a10-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Für Sendung C wünscht der Schweizer Kunde einen Präferenznachweis. Der Exporteur hat **keinen** Status als ermächtigter Ausführer. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Er kann eine Warenverkehrsbescheinigung EUR.1 beim Zoll bestätigen lassen.',
            'Er darf ohne Weiteres eine Erklärung zum Ursprung auf die Rechnung setzen, egal wie hoch der Wert ist.',
            'Ein Ursprungszeugnis der IHK ersetzt den Präferenznachweis.',
            'Der Wert von 48.000 € liegt über der üblichen Wertgrenze für nicht förmliche Nachweise (6.000 €).'
          ],
          correct: [0, 3],
          hints: ['Förmlich oder nicht förmlich?', 'Bis zu welchem Wert darf jeder Ausführer selbst erklären?'],
          solution: 'Richtig sind **A und D**. Ohne Status darf der Exporteur eine Erklärung zum Ursprung nur bis zur Wertgrenze (in der Regel 6.000 €) abgeben; bei 48.000 € braucht er die förmliche **EUR.1**. Das Ursprungszeugnis betrifft nur den nichtpräferenziellen Ursprung.'
        }
      ]
    }
  ],
  quiz: ['lf10-ausfuhrverfahren-a2', 'lf10-ausfuhrverfahren-a3', 'lf10-ausfuhrverfahren-a5', 'lf10-ausfuhrverfahren-a8', 'lf10-ausfuhrverfahren-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 10, Inhalte: Ausfuhrverfahren; Begleitpapiere, Ausfuhrdokumente' },
    { title: 'Das IT-Verfahren ATLAS-Ausfuhr', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/ATLAS/ATLAS-Ausfuhr/IT-Verfahren-ATLAS-Ausfuhr/it-verfahren-atlas-ausfuhr.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Endgültige Ausfuhr (Normalverfahren)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Unternehmen/Warenverkehr/Ausfuhr-in-einen-Nicht-EU-Staat/Verfahren/Endgueltige-Ausfuhr/endgueltige-ausfuhr.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Warenausfuhr im einstufigen Verfahren (Wertgrenzen 1.000 € / 3.000 €)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Ausfuhrverfahren/Warenausfuhr-einstufiges-Verfahren/warenausfuhr-einstufiges-verfahren_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'EORI-Nummer', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/EORI-Nummer/eori-nummer_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Übersicht über Präferenznachweise', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Warenursprung-Praeferenzen/Praeferenzen/Praeferenznachweise/Uebersicht-ueber-Praeferenznachweise/uebersicht-ueber-praeferenznachweise_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Umsatzsteuergesetz § 6 Ausfuhrlieferung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__6.html', asOf: '2026' },
    { title: 'Umsatzsteuer-Durchführungsverordnung § 9 Ausfuhrnachweis in Beförderungsfällen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustdv_1980/__9.html', asOf: '2026' },
    { title: 'Umsatzsteuer-Durchführungsverordnung § 10 Ausfuhrnachweis in Versendungsfällen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustdv_1980/__10.html', asOf: '2026' },
    { title: 'Ursprungszeugnisse: Zweck und Ausfüllhilfen', publisher: 'IHK zu Dortmund', url: 'https://www.ihk.de/dortmund/menue/international/dokumente-in-der-aussenwirtschaft/ursprungszeugnis-305296', asOf: 'abgerufen 2026-10-17' }
  ],
  links: ['lf10-incoterms', 'lf10-zahlungssicherung', 'lf03-umsatzsteuer']
};
