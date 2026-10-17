export default {
  id: 'lf14-marketingmix',
  area: 'LF14',
  topic: 'lf14-marketingmix',
  title: 'Marketing-Mix einer Spedition',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Grenzen der Werbung nach UWG: irreführende geschäftliche Handlungen (§ 5), vergleichende Werbung (§ 6), unzumutbare Belästigungen wie Telefon- und E-Mail-Werbung ohne Einwilligung (§ 7), Stand 2026. Alle Preise, Kosten und Kampagnenzahlen sind Beispielwerte.'
  },
  goals: [
    'Ich kann die vier Instrumente des Marketing-Mix auf eine Spedition anwenden.',
    'Ich kann das Leistungsprogramm einer Spedition beschreiben und Leistungen nach Produktlebenszyklus und BCG-Matrix einordnen.',
    'Ich kann kosten-, nachfrage- und konkurrenzorientierte Preisbildung unterscheiden und einen Angebotspreis mit Gewinnzuschlag und Rabatt kalkulieren.',
    'Ich kann Formen der Preisdifferenzierung an Beispielen aus der Logistik erklären.',
    'Ich kann eine Werbemaßnahme nach AIDA planen und ihren Erfolg mit Kennzahlen kontrollieren.',
    'Ich kann rechtliche Grenzen der Werbung nach UWG nennen.',
    'Ich kann Vertriebswege einer Spedition (Außendienst, Key-Account-Management, Onlineportale) beurteilen.'
  ],
  simple: `# Worum geht es?

Eine Spedition verkauft **Dienstleistungen**: Transport, Umschlag, Lagerung, Verzollung, Beratung. Damit Kunden diese Leistungen kaufen, setzt sie vier Werkzeuge ein – den **Marketing-Mix** (die „4 P“):

| Instrument | Frage | Beispiel Spedition |
|---|---|---|
| **Leistungspolitik** (Product) | *Was* bieten wir an? | Stückgut, Teil- und Komplettladungen, Lager, Zollabwicklung |
| **Preispolitik** (Price) | *Zu welchem Preis* und zu welchen Bedingungen? | Haustarif, Rabatte, Zahlungsziel, Dieselzuschlag |
| **Kommunikationspolitik** (Promotion) | *Wie* erfahren Kunden davon? | Website, Messe, Mailing, Social Media, Pressebericht |
| **Distributionspolitik** (Place) | *Über welchen Weg* wird verkauft? | Außendienst, Key-Account-Manager, Onlinebuchung |

Die vier Instrumente müssen **zusammenpassen**: Ein Premium-Expressdienst mit Billigpreisen und ohne persönliche Betreuung wäre unglaubwürdig.

# Die wichtigsten Ideen

- **Produktlebenszyklus**: Leistungen werden eingeführt, wachsen, reifen, sättigen und gehen zurück.
- **Preis**: kann sich an den **Kosten**, an der **Nachfrage** oder an der **Konkurrenz** orientieren.
- **AIDA**: Gute Werbung weckt **A**ufmerksamkeit, **I**nteresse, den **D**rang (Wunsch) und führt zur **A**ktion (Auftrag).
- **Werbeerfolgskontrolle**: Hat sich die Werbung gelohnt? Mehr Deckungsbeitrag als Werbekosten?`,
  deep: `# 1. Leistungspolitik

**Leistungsprogramm**: Gesamtheit aller angebotenen Leistungen.
- **Programmbreite**: Wie viele verschiedene Leistungsbereiche? (Straße, Luft, See, Lager, Zoll)
- **Programmtiefe**: Wie viele Varianten innerhalb eines Bereichs? (Stückgut Standard, Fixtermin, Express, Gefahrgut, temperaturgeführt)

Entscheidungen: **Leistungsinnovation** (neue Leistung, z. B. Fulfillment), **Leistungsvariation** (bestehende Leistung verändern, z. B. Zustellung mit Zeitfenster), **Leistungsdifferenzierung** (zusätzliche Variante), **Leistungseliminierung** (Leistung einstellen), **Diversifikation** (neues Geschäftsfeld). Zusatzleistungen (**Value Added Services**) wie Etikettieren, Retourenabwicklung oder Montage binden Kunden.

**Produktlebenszyklus**

| Phase | Umsatz | Gewinn | typische Maßnahmen |
|---|---|---|---|
| Einführung | gering | meist negativ | Bekanntmachen, Pilotkunden gewinnen |
| Wachstum | steigt stark | wird positiv | Kapazität ausbauen, Werbung verstärken |
| Reife | steigt langsam | am höchsten | Leistung variieren, Kunden binden |
| Sättigung | stagniert | sinkt | Preiswettbewerb, Kosten senken, Relaunch |
| Rückgang | sinkt | gering/negativ | Eliminierung prüfen |

**Portfolio-Analyse (BCG-Matrix)**: Einordnung nach **Marktwachstum** (vertikal) und **relativem Marktanteil** (horizontal).

| | niedriger relativer Marktanteil | hoher relativer Marktanteil |
|---|---|---|
| **hohes Marktwachstum** | **Question Mark** (Fragezeichen): investieren oder aufgeben | **Star**: investieren, Position halten |
| **niedriges Marktwachstum** | **Poor Dog** (armer Hund): abbauen, eliminieren | **Cash Cow** (Melkkuh): Gewinne abschöpfen, wenig investieren |

Ziel ist ein **ausgewogenes Portfolio**: Die Cash Cows finanzieren Stars und ausgewählte Question Marks. Den relativen Marktanteil berechnest du wie in der Einheit „Marktforschung, Kundenanalyse und SWOT“.

# 2. Preispolitik

| Orientierung | Vorgehen | Beispiel |
|---|---|---|
| **kostenorientiert** | Selbstkosten + Gewinnzuschlag | Tourpreis aus Fahrzeugkostenrechnung + 10 % |
| **nachfrageorientiert** | Was ist der Kunde bereit zu zahlen? | Expresszustellung vor 10 Uhr deutlich teurer |
| **konkurrenzorientiert** | Orientierung am Marktpreis/Leitpreis | Angebot knapp unter dem Preis des Hauptkonkurrenten bei einer Ausschreibung |

**Angebotskalkulation (vorwärts)**

| Schritt | Rechnung |
|---|---|
| Selbstkosten | aus Kostenrechnung |
| + Gewinnzuschlag | in % der Selbstkosten |
| = Nettopreis (Barpreis/Zielpreis vereinfacht) | |
| + Kundenrabatt | im Hundert: Nettopreis ÷ (100 % − Rabattsatz) × 100 % |
| = Listenpreis (Angebotspreis vor Rabatt) | |

Die **Preisuntergrenze** liegt kurzfristig bei den **variablen Kosten** (Deckungsbeitrag ≥ 0), langfristig bei den **Selbstkosten** – siehe Einheit „Deckungsbeitragsrechnung und Break-even“. Umsatzsteuer kommt bei Angeboten an Unternehmen als gesonderter Betrag hinzu.

**Preisdifferenzierung**: gleiche Leistung, unterschiedliche Preise.

| Art | Beispiel Logistik |
|---|---|
| zeitlich | Zuschlag für Samstagszustellung, günstigere Preise für Rückladungen |
| räumlich | unterschiedliche Tarife je Zone oder Relation |
| mengenmäßig | Staffelpreise nach Gewicht oder Palettenzahl, Jahresbonus |
| personell/kundengruppenbezogen | Sonderkonditionen für Rahmenvertragskunden |
| leistungsbezogen | Standard, Fixtermin, Express |

Weitere Instrumente der **Konditionenpolitik**: Rabatte, Boni, Skonto, Zahlungsziel, Zuschläge (z. B. Dieselfloater), Rahmenverträge.

# 3. Kommunikationspolitik

**Werbung** (Ziel: Absatz fördern). Planung: Werbeziel → Zielgruppe → Werbebotschaft → Werbemittel (Anzeige, Mailing, Video, Lkw-Beschriftung) → Werbeträger (Fachzeitschrift, Website, LinkedIn, Lkw) → Werbeetat → Zeitplan → Werbeerfolgskontrolle.

**AIDA-Formel**: Attention (Aufmerksamkeit) → Interest (Interesse) → Desire (Wunsch) → Action (Handlung, z. B. Angebotsanfrage).

**Werbeerfolgskontrolle**

| Kennzahl | Formel |
|---|---|
| Responsequote | Reaktionen ÷ angesprochene Empfänger × 100 |
| Abschlussquote (Konversionsrate) | Aufträge ÷ Reaktionen × 100 |
| Kosten je Neukunde | Werbekosten ÷ gewonnene Kunden |
| ökonomischer Werbeerfolg | zusätzlicher Deckungsbeitrag durch Werbung − Werbekosten |
| Werberendite | ökonomischer Werbeerfolg ÷ Werbekosten × 100 |

Neben dem **ökonomischen** Erfolg gibt es den **außerökonomischen** Erfolg (Bekanntheitsgrad, Image, Klicks, Follower).

**Public Relations (Öffentlichkeitsarbeit)**: Pflege des **Ansehens** des ganzen Unternehmens, nicht direkt Verkauf: Tag der offenen Tür, Pressemitteilung über neue E-Lkw, Sponsoring des örtlichen Sportvereins, Nachhaltigkeitsbericht. **Verkaufsförderung**: kurzfristige Anreize, z. B. Einführungsrabatt, Schulung der Kunden für das Buchungsportal. **Social Media**: Arbeitgebermarke (Fahrer- und Azubi-Gewinnung), Fachbeiträge, schnelle Information; Risiko: öffentliche Kritik, Pflegeaufwand.

**Grenzen nach UWG** (Auswahl):
- **§ 5 UWG**: **irreführende** geschäftliche Handlungen sind unlauter, z. B. „24-Stunden-Zustellung europaweit garantiert“, wenn das nicht stimmt.
- **§ 6 UWG**: **vergleichende Werbung** ist erlaubt, wenn sie sachlich, nachprüfbar und auf gleichartige Leistungen bezogen ist; sie darf den Mitbewerber nicht herabsetzen oder verunglimpfen.
- **§ 7 UWG**: **unzumutbare Belästigung** – E-Mail-Werbung grundsätzlich nur mit vorheriger ausdrücklicher Einwilligung; Telefonwerbung bei Unternehmen nur mit zumindest mutmaßlicher Einwilligung, bei Verbrauchern nur mit ausdrücklicher Einwilligung.

# 4. Distributions- und Vertriebspolitik

| Vertriebsweg | Merkmale | geeignet für |
|---|---|---|
| **Außendienst** (Reisende als Angestellte; Handelsvertreter als selbstständige Kaufleute) | persönliche Beratung, Neukundengewinnung, teuer | erklärungsbedürftige Leistungen, Lager- und Kontraktlogistik |
| **Key-Account-Management** | ein fester Verantwortlicher für einen Großkunden, kennt dessen Prozesse | A-Kunden |
| **Innendienst/Verkauf am Telefon** | Angebote, Nachfassen, Betreuung bestehender Kunden | B- und C-Kunden |
| **Onlineportal/Buchungsplattform** | Preis sofort sichtbar, Buchung rund um die Uhr, geringe Kosten je Auftrag | Standardsendungen, C-Kunden |
| **Kooperationen/Netzwerke** | Leistungen über Partner (Stückgutkooperation) anbieten | Flächendeckung |

**Reisender oder Handelsvertreter?** Der Reisende verursacht hohe **Fixkosten** (Gehalt, Firmenwagen), der Handelsvertreter vor allem **variable Kosten** (Provision). Bei geringem Umsatz ist der Handelsvertreter günstiger, bei hohem Umsatz der Reisende. Der kritische Umsatz ist der Punkt, an dem beide gleich viel kosten.`,
  terms: [
    { term: 'Marketing-Mix', def: 'Abgestimmte Kombination aus Leistungs-, Preis-, Kommunikations- und Distributionspolitik.' },
    { term: 'Leistungsprogramm', def: 'Gesamtheit der von der Spedition angebotenen Leistungen, beschrieben durch Programmbreite und Programmtiefe.' },
    { term: 'Produktlebenszyklus', def: 'Modell der Umsatz- und Gewinnentwicklung einer Leistung über die Phasen Einführung, Wachstum, Reife, Sättigung und Rückgang.' },
    { term: 'BCG-Matrix (Portfolio-Analyse)', def: 'Einordnung von Leistungen nach Marktwachstum und relativem Marktanteil in Question Marks, Stars, Cash Cows und Poor Dogs.' },
    { term: 'Preisdifferenzierung', def: 'Gleiche oder ähnliche Leistung wird zu unterschiedlichen Preisen angeboten, z. B. zeitlich, räumlich, mengenmäßig oder nach Kundengruppen.' },
    { term: 'Preisuntergrenze', def: 'Niedrigster vertretbarer Preis: kurzfristig variable Kosten, langfristig Selbstkosten.' },
    { term: 'AIDA', def: 'Werbewirkungsmodell: Attention, Interest, Desire, Action.' },
    { term: 'Werbeerfolgskontrolle', def: 'Prüfung, ob eine Werbemaßnahme ihr Ziel erreicht hat, z. B. über Responsequote, Kosten je Neukunde oder Werberendite.' },
    { term: 'Public Relations', def: 'Öffentlichkeitsarbeit zur Pflege von Image und Vertrauen in das gesamte Unternehmen.' },
    { term: 'Key-Account-Management', def: 'Betreuung besonders wichtiger Großkunden durch einen festen, verantwortlichen Ansprechpartner.' },
    { term: 'Vergleichende Werbung', def: 'Werbung, die einen Mitbewerber oder dessen Leistungen erkennbar macht; nur unter den Voraussetzungen des § 6 UWG zulässig.' }
  ],
  example: `# Saar-Rhône Spedition GmbH, Saarbrücken – Einführung eines Fixtermindienstes nach Frankreich (Beispielzahlen)

**Leistungspolitik:** Neu ins Programm kommt „Fix24 France“: Stückgut aus dem Saarland in den Großraum Lyon mit garantiertem Zustelltag. Das ist eine **Leistungsdifferenzierung** des bestehenden Frankreich-Stückguts. In der BCG-Matrix ist Fix24 zunächst ein **Question Mark** (wachsender Markt, noch kleiner Marktanteil).

**Preispolitik:** Kalkulation je 1-Paletten-Sendung (bis 500 kg): Selbstkosten 168 € + 15 % Gewinn = 193,20 €. Da Kunden für die Termingarantie mehr zahlen (nachfrageorientiert) und der Hauptkonkurrent 199 € verlangt (konkurrenzorientiert), wird der Preis auf **195 €** festgelegt. Rahmenvertragskunden erhalten ab 50 Sendungen im Monat 5 % Rabatt (**mengenmäßige Preisdifferenzierung**).

**Kommunikationspolitik nach AIDA:**
- **A**: Mailing und LinkedIn-Beitrag mit dem Bild „Ihre Palette – Dienstag in Lyon. Garantiert.“
- **I**: Landingpage mit Laufzeitkarte und Beispielpreisen
- **D**: Erfahrungsbericht eines Pilotkunden aus Homburg
- **A**: Button „Jetzt Testsendung buchen“ mit Einführungsrabatt (Verkaufsförderung)

Ergänzend erscheint ein Pressebericht in der Regionalzeitung (**Public Relations**).

**Werbeerfolgskontrolle:** 1.200 Empfänger, 48 Anfragen (Responsequote 4 %), 12 neue Kunden (Abschlussquote 25 %), Kosten 4.800 € → **400 € je Neukunde**.

**Distributionspolitik:** Großkunden werden vom Key-Account-Manager angesprochen, kleinere Versender buchen über das Onlineportal.

**UWG-Prüfung:** Die Aussage „schneller als jede andere Spedition im Saarland“ wird gestrichen, weil sie nicht nachprüfbar ist und irreführend sein könnte (§ 5 UWG).`,
  rules: [
    'Die vier Instrumente des Marketing-Mix müssen zueinander und zur Zielgruppe passen.',
    'Kostenorientierter Preis = Selbstkosten + Gewinnzuschlag; Rabatt wird im Hundert aufgeschlagen.',
    'Preisuntergrenze: kurzfristig variable Kosten, langfristig Selbstkosten.',
    'Cash Cows finanzieren Stars und ausgewählte Question Marks; Poor Dogs werden abgebaut.',
    'Werbung wirkt nach AIDA: Aufmerksamkeit → Interesse → Wunsch → Handlung.',
    'Werbung hat sich ökonomisch gelohnt, wenn der zusätzliche Deckungsbeitrag größer ist als die Werbekosten.',
    'Werbung darf nicht irreführen (§ 5 UWG), Mitbewerber nicht herabsetzen (§ 6 UWG) und nicht unzumutbar belästigen (§ 7 UWG).'
  ],
  summary: `- **Leistungspolitik**: Leistungsprogramm (Breite, Tiefe), Innovation, Variation, Differenzierung, Eliminierung; **Produktlebenszyklus**; **BCG-Matrix** (Question Mark, Star, Cash Cow, Poor Dog).
- **Preispolitik**: kosten-, nachfrage-, konkurrenzorientiert; Kalkulation Selbstkosten + Gewinn (+ Rabatt im Hundert); **Preisdifferenzierung** zeitlich, räumlich, mengenmäßig, personell; Konditionen.
- **Kommunikationspolitik**: Werbung (AIDA, Werbeplan, Erfolgskontrolle), Public Relations, Verkaufsförderung, Social Media; UWG §§ 5–7.
- **Distributionspolitik**: Außendienst (Reisender/Handelsvertreter), Key-Account-Management, Innendienst, Onlineportal, Kooperationen.`,
  mistakes: [
    { wrong: 'Der Rabatt wird vom Nettopreis „vom Hundert“ aufgeschlagen: 1.375 € × 1,05.', right: 'Damit nach Abzug des Rabatts der Nettopreis übrig bleibt, rechnet man im Hundert: 1.375 € ÷ 0,95.' },
    { wrong: 'Public Relations ist dasselbe wie Werbung.', right: 'Werbung zielt auf den Absatz bestimmter Leistungen, PR auf Image und Vertrauen in das ganze Unternehmen.' },
    { wrong: 'Eine Cash Cow sollte stark ausgebaut werden, weil sie viel Geld bringt.', right: 'Cash Cows stehen in einem Markt mit geringem Wachstum; man schöpft die Gewinne ab und investiert nur zur Erhaltung.' },
    { wrong: 'Eine hohe Responsequote beweist, dass sich die Werbung gelohnt hat.', right: 'Entscheidend ist der ökonomische Werbeerfolg: zusätzlicher Deckungsbeitrag minus Werbekosten.' },
    { wrong: 'Vergleichende Werbung ist in Deutschland verboten.', right: 'Sie ist zulässig, wenn sie die Voraussetzungen des § 6 UWG erfüllt (sachlich, nachprüfbar, gleichartige Leistungen, keine Herabsetzung).' }
  ],
  flashcards: [
    { q: 'Nenne die vier Instrumente des Marketing-Mix.', a: 'Leistungs-(Produkt-)politik, Preispolitik, Kommunikationspolitik, Distributionspolitik.' },
    { q: 'Was ist der Unterschied zwischen Programmbreite und Programmtiefe?', a: 'Breite = Anzahl der Leistungsbereiche; Tiefe = Anzahl der Varianten innerhalb eines Bereichs.' },
    { q: 'In welcher Phase des Produktlebenszyklus ist der Gewinn meist am höchsten?', a: 'In der Reifephase.' },
    { q: 'Was ist ein Star in der BCG-Matrix?', a: 'Leistung mit hohem Marktwachstum und hohem relativem Marktanteil – investieren.' },
    { q: 'Wie lautet die kurzfristige Preisuntergrenze?', a: 'Die variablen Kosten (Deckungsbeitrag = 0).' },
    { q: 'Nenne ein Beispiel für zeitliche Preisdifferenzierung in der Logistik.', a: 'Zuschlag für Samstags- oder Nachtzustellung; günstige Rückladungspreise.' },
    { q: 'Wofür steht AIDA?', a: 'Attention, Interest, Desire, Action.' },
    { q: 'Wie berechnet man den ökonomischen Werbeerfolg?', a: 'Zusätzlicher Deckungsbeitrag durch die Werbung − Werbekosten.' },
    { q: 'Was regelt § 5 UWG?', a: 'Irreführende geschäftliche Handlungen sind unlauter.' },
    { q: 'Wann ist ein Handelsvertreter günstiger als ein Reisender?', a: 'Bei geringem Umsatz, weil er hauptsächlich Provision (variable Kosten) erhält und kaum Fixkosten verursacht.' }
  ],
  tasks: [
    {
      id: 'lf14-marketingmix-a1', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Maßnahmen der Saar-Rhône Spedition GmbH dem passenden Marketinginstrument zu.',
      pairs: [
        ['Leistungspolitik', 'Aufnahme einer Retourenabwicklung für Onlinehändler ins Programm'],
        ['Preispolitik', 'Staffelrabatt ab 50 Sendungen im Monat'],
        ['Kommunikationspolitik', 'Fachbeitrag und Video über den neuen E-Lkw auf LinkedIn'],
        ['Distributionspolitik', 'Einführung eines Onlineportals, über das Kunden Stückgut direkt buchen']
      ],
      hints: ['Frage dich: Was – zu welchem Preis – wie bekannt machen – über welchen Weg?', 'Das Onlineportal ist ein Verkaufsweg.'],
      solution: 'Retourenabwicklung = neue Leistung (**Leistungspolitik**); Staffelrabatt = Kondition (**Preispolitik**); LinkedIn-Beitrag = **Kommunikationspolitik**; Onlinebuchung = Vertriebsweg (**Distributionspolitik**).'
    },
    {
      id: 'lf14-marketingmix-a2', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Phasen des Produktlebenszyklus in die richtige Reihenfolge.',
      items: ['Einführung', 'Wachstum', 'Reife', 'Sättigung', 'Rückgang'],
      hints: ['Am Anfang ist der Umsatz gering und der Gewinn oft negativ.', 'In der Sättigung stagniert der Umsatz, danach sinkt er.'],
      solution: 'Einführung → Wachstum → Reife → Sättigung → Rückgang. In der Reifephase ist der Gewinn meist am höchsten; in der Sättigung beginnt der Preiswettbewerb.'
    },
    {
      id: 'lf14-marketingmix-a3', type: 'match', difficulty: 2, points: 4,
      q: `Die Spedition ordnet ihre Geschäftsfelder in die BCG-Matrix ein. Ordne zu (Beispieldaten):

- Stückgut national: Markt wächst kaum, die Spedition ist regionaler Marktführer
- Fulfillment für Onlinehändler: Markt wächst stark, die Spedition ist noch sehr klein
- Kontraktlogistik Automotive: Markt wächst stark, die Spedition ist Marktführer in der Region
- Möbeltransporte für Privatkunden: Markt schrumpft, geringer Marktanteil`,
      pairs: [
        ['Stückgut national', 'Cash Cow'],
        ['Fulfillment für Onlinehändler', 'Question Mark'],
        ['Kontraktlogistik Automotive', 'Star'],
        ['Möbeltransporte für Privatkunden', 'Poor Dog']
      ],
      hints: ['Achte auf zwei Merkmale: Marktwachstum und relativer Marktanteil.', 'Hoher Marktanteil + geringes Wachstum = Melkkuh.'],
      solution: 'Stückgut national: geringes Wachstum, hoher Anteil → **Cash Cow** (Gewinne abschöpfen). Fulfillment: hohes Wachstum, geringer Anteil → **Question Mark** (investieren oder aufgeben). Kontraktlogistik: hohes Wachstum, hoher Anteil → **Star** (investieren). Möbeltransporte: geringes Wachstum, geringer Anteil → **Poor Dog** (abbauen).'
    },
    {
      id: 'lf14-marketingmix-a4', type: 'calc', difficulty: 2, points: 3,
      q: 'Für eine Komplettladung Saarbrücken – Mailand ermittelt die Spedition Selbstkosten von **1.250 €** (Beispielwert). Sie kalkuliert mit **10 % Gewinnzuschlag**. Der Kunde erhält **5 % Rabatt** vom Angebotspreis. Berechne Gewinnzuschlag, Nettopreis (nach Rabatt) und den Angebotspreis (vor Rabatt). Runde auf Cent.',
      formula: 'Nettopreis = Selbstkosten × (1 + Gewinnzuschlag); Angebotspreis = Nettopreis ÷ (1 − Rabattsatz)',
      fields: [
        { id: 'gew', label: 'Gewinnzuschlag', unit: '€', answer: 125, tol: 0.01 },
        { id: 'netto', label: 'Nettopreis nach Rabatt', unit: '€', answer: 1375, tol: 0.01 },
        { id: 'angebot', label: 'Angebotspreis vor Rabatt', unit: '€', answer: 1447.37, tol: 0.01 }
      ],
      hints: ['Der Gewinn wird auf die Selbstkosten aufgeschlagen (vom Hundert).', 'Der Nettopreis entspricht 95 % des Angebotspreises (im Hundert).'],
      solution: `**Gewinnzuschlag:** 1.250 € × 10 % = **125,00 €**

**Nettopreis:** 1.250 € + 125 € = **1.375,00 €**

**Angebotspreis:** 1.375 € entsprechen 95 % → 1.375 € ÷ 0,95 = 1.447,368… ≈ **1.447,37 €**

Probe: 1.447,37 € − 5 % (72,37 €) = 1.375,00 €. Wer fälschlich 1.375 € × 1,05 = 1.443,75 € rechnet, erhält nach Rabatt nur 1.371,56 € und verliert einen Teil des Gewinns.`
    },
    {
      id: 'lf14-marketingmix-a5', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Preisentscheidung bei einer Ausschreibung',
      intro: `Ein Getränkehersteller aus Merzig schreibt wöchentliche Komplettladungen Merzig – Frankfurt aus. Die Spedition Hochwald Logistik e.K. hat je Tour folgende Werte ermittelt (Beispielzahlen, netto):

| Größe | € je Tour |
|---|---:|
| variable Kosten (Diesel, Maut, Reifen, Wartung, fahrleistungsabhängige Kosten) | 980 |
| anteilige Fixkosten | 270 |
| Selbstkosten | 1.250 |

Eigene Kalkulation: 10 % Gewinnzuschlag. Ein Wettbewerber bietet nach Information des Kunden **1.320 €** je Tour.`,
      hints: ['Vergleiche den Wettbewerbspreis mit Selbstkosten und variablen Kosten.', 'Deckungsbeitrag = Preis − variable Kosten.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf14-marketingmix-a5-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne den kostenorientierten Preis, den Deckungsbeitrag je Tour beim Wettbewerbspreis von 1.320 € und den Gewinn je Tour bei 1.320 €.',
          formula: 'Preis = Selbstkosten × 1,10; DB = Preis − variable Kosten; Gewinn = Preis − Selbstkosten',
          fields: [
            { id: 'preis', label: 'kostenorientierter Preis', unit: '€', answer: 1375, tol: 0.01 },
            { id: 'db', label: 'Deckungsbeitrag bei 1.320 €', unit: '€', answer: 340, tol: 0.01 },
            { id: 'gew', label: 'Gewinn je Tour bei 1.320 €', unit: '€', answer: 70, tol: 0.01 }
          ],
          hints: ['1.250 € + 10 %.', 'Der Deckungsbeitrag muss zuerst die Fixkosten decken.'],
          solution: `**Kostenorientierter Preis:** 1.250 € × 1,10 = **1.375 €**

**Deckungsbeitrag bei 1.320 €:** 1.320 € − 980 € = **340 €**

**Gewinn bei 1.320 €:** 1.320 € − 1.250 € = **70 €** (oder 340 € − 270 € Fixkosten)`
        },
        {
          id: 'lf14-marketingmix-a5-2', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Die kurzfristige Preisuntergrenze liegt bei 980 € je Tour.',
            'Die langfristige Preisuntergrenze liegt bei 1.250 € je Tour.',
            'Bei 1.320 € entsteht ein Verlust, weil der kostenorientierte Preis nicht erreicht wird.',
            'Ein Preis von 1.000 € deckt die Selbstkosten.'
          ],
          correct: [0, 1],
          hints: ['Kurzfristig müssen nur die variablen Kosten gedeckt sein.', 'Gewinn = Preis − Selbstkosten.'],
          solution: 'Richtig: **A** (kurzfristige Preisuntergrenze = variable Kosten 980 €) und **B** (langfristig müssen alle Kosten gedeckt sein: 1.250 €). C ist falsch: Bei 1.320 € bleibt ein Gewinn von 70 €, nur der gewünschte Gewinn von 125 € wird nicht erreicht. D ist falsch: 1.000 € liegt unter den Selbstkosten von 1.250 €.'
        },
        {
          id: 'lf14-marketingmix-a5-3', type: 'text', difficulty: 3, points: 3,
          q: 'Begründe, ob die Spedition für 1.315 € anbieten sollte. Nenne zwei Argumente dafür und einen Einwand.',
          model: 'Dafür: Der Preis liegt knapp unter dem Wettbewerber (konkurrenzorientierte Preisbildung) und deckt mit 1.315 € die Selbstkosten von 1.250 €, es bleibt ein Gewinn von 65 € je Tour. Ein regelmäßiger Wochenauftrag lastet den Fuhrpark aus und liefert einen sicheren Deckungsbeitrag. Zudem kann der Kunde später weitere Aufträge vergeben. Einwand: Der geplante Gewinn von 10 % wird nicht erreicht; steigende Dieselpreise könnten den Gewinn aufzehren, deshalb sollte ein Dieselzuschlag vereinbart werden.',
          criteria: [
            { text: 'Selbstkosten gedeckt / Gewinn bleibt', keywords: ['Selbstkosten|Gewinn'], points: 1 },
            { text: 'Auslastung, Dauerauftrag oder Folgeaufträge', keywords: ['Auslast|regelmaessig|Folge|Dauer|Stamm'], points: 1 },
            { text: 'Einwand: geringer Gewinn / Kostenrisiko / Dieselzuschlag', keywords: ['Diesel|Risiko|nicht erreicht|gering'], points: 1 }
          ],
          hints: ['Rechne den Gewinn bei 1.315 € aus.', 'Was passiert, wenn die Kosten im Laufe des Jahres steigen?'],
          solution: 'Bei 1.315 € ist der Gewinn 65 € je Tour; die Selbstkosten sind gedeckt. **Dafür**: konkurrenzfähiger Preis, regelmäßige Auslastung, mögliche Folgeaufträge, positiver Deckungsbeitrag von 335 €. **Einwand**: geringe Gewinnspanne, Kostenrisiko (Diesel, Maut, Löhne) – daher Preisgleitklausel oder Dieselfloater vereinbaren.'
        }
      ]
    },
    {
      id: 'lf14-marketingmix-a6', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Art der Preisdifferenzierung dem Beispiel zu.',
      pairs: [
        ['zeitlich', 'Aufpreis für Zustellung am Samstag'],
        ['räumlich', 'Tarif nach Entfernungszonen ab Saarbrücken'],
        ['mengenmäßig', 'Palettenpreis sinkt ab 10 Paletten je Sendung'],
        ['leistungsbezogen', 'Standard 48 h, Fixtermin oder Express vor 10 Uhr']
      ],
      hints: ['Worin unterscheiden sich die Preise jeweils: Zeit, Ort, Menge oder Leistungsvariante?', 'Bei der leistungsbezogenen Differenzierung variiert der Service.'],
      solution: 'Zeitlich = Samstagszuschlag; räumlich = Zonentarif; mengenmäßig = Staffelpreis je Palettenzahl; leistungsbezogen = unterschiedliche Servicelevel derselben Grundleistung.'
    },
    {
      id: 'lf14-marketingmix-a7', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Stufen der AIDA-Formel für eine Mailing-Aktion in die richtige Reihenfolge.',
      items: [
        'Auffälliger Betreff „Ihre Palette am Dienstag in Lyon – garantiert“',
        'Laufzeitkarte und Preisbeispiele auf der Landingpage',
        'Erfahrungsbericht eines zufriedenen Pilotkunden',
        'Button „Jetzt Testsendung buchen“ mit Einführungsrabatt'
      ],
      hints: ['Zuerst muss der Empfänger überhaupt hinsehen.', 'Am Ende soll er handeln.'],
      solution: 'Attention (Betreff) → Interest (Information auf der Landingpage) → Desire (Erfahrungsbericht weckt den Wunsch) → Action (Buchungsbutton).'
    },
    {
      id: 'lf14-marketingmix-a8', type: 'calc', difficulty: 3, points: 4,
      q: 'Eine Werbekampagne für den Lagerbereich kostet **18.000 €**. Im Kampagnenzeitraum steigt der Lagerumsatz gegenüber dem Vorjahr um **240.000 €**, die Steigerung wird der Kampagne zugerechnet. Der Deckungsbeitrag beträgt **15 %** vom Umsatz (Beispielwerte). Berechne den zusätzlichen Deckungsbeitrag, den ökonomischen Werbeerfolg, den Umsatz je Werbe-Euro und die Werberendite.',
      formula: 'ökonomischer Werbeerfolg = zusätzlicher DB − Werbekosten; Werberendite = Werbeerfolg ÷ Werbekosten × 100',
      fields: [
        { id: 'db', label: 'zusätzlicher Deckungsbeitrag', unit: '€', answer: 36000, tol: 0.01 },
        { id: 'erfolg', label: 'ökonomischer Werbeerfolg', unit: '€', answer: 18000, tol: 0.01 },
        { id: 'ujw', label: 'Umsatz je Werbe-Euro', unit: '€', answer: 13.33, tol: 0.01 },
        { id: 'rend', label: 'Werberendite', unit: '%', answer: 100, tol: 0.1 }
      ],
      hints: ['Nicht der Umsatz, sondern der Deckungsbeitrag muss die Werbekosten tragen.', 'Umsatz je Werbe-Euro = Umsatzzuwachs ÷ Werbekosten.'],
      solution: `**Zusätzlicher DB:** 240.000 € × 15 % = **36.000 €**

**Ökonomischer Werbeerfolg:** 36.000 € − 18.000 € = **18.000 €**

**Umsatz je Werbe-Euro:** 240.000 € ÷ 18.000 € = 13,333… ≈ **13,33 €**

**Werberendite:** 18.000 € ÷ 18.000 € × 100 = **100 %**

Einschränkung: Ob der ganze Umsatzzuwachs wirklich der Werbung zu verdanken ist, ist unsicher (z. B. allgemeines Marktwachstum). Deshalb ergänzt man die Rechnung um Kennzahlen wie Anfragen mit Kampagnencode.`
    },
    {
      id: 'lf14-marketingmix-a9', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Mailing an **2.500** Versender kostet **2,40 € je Stück**. Es gehen **75 Anfragen** ein, daraus entstehen **15 Neukunden**. Berechne Responsequote, Abschlussquote (Aufträge je Anfrage) und Kosten je Neukunde.',
      formula: 'Responsequote = Anfragen ÷ Empfänger × 100; Abschlussquote = Neukunden ÷ Anfragen × 100; Kosten je Neukunde = Gesamtkosten ÷ Neukunden',
      fields: [
        { id: 'resp', label: 'Responsequote', unit: '%', answer: 3, tol: 0.1 },
        { id: 'abs', label: 'Abschlussquote', unit: '%', answer: 20, tol: 0.1 },
        { id: 'knk', label: 'Kosten je Neukunde', unit: '€', answer: 400, tol: 0.01 }
      ],
      hints: ['Gesamtkosten = 2.500 × 2,40 €.', 'Die Abschlussquote bezieht sich auf die Anfragen, nicht auf alle Empfänger.'],
      solution: `**Responsequote:** 75 ÷ 2.500 × 100 = **3 %**

**Abschlussquote:** 15 ÷ 75 × 100 = **20 %**

**Gesamtkosten:** 2.500 × 2,40 € = 6.000 €; **Kosten je Neukunde:** 6.000 € ÷ 15 = **400 €**

Ob 400 € je Neukunde vertretbar sind, zeigt der Vergleich mit dem erwarteten Deckungsbeitrag des Kunden (Kundenwert).`
    },
    {
      id: 'lf14-marketingmix-a10', type: 'mc', difficulty: 3, points: 3,
      q: 'Welche Werbemaßnahmen verstoßen gegen das **UWG**? (Mehrfachauswahl)',
      options: [
        'Werbe-E-Mails an Adressen aus einer gekauften Liste, ohne dass die Empfänger eingewilligt haben',
        'Anzeige: „Wir liefern zuverlässiger als die Pfusch-Spedition XY“',
        'Anzeige mit nachprüfbarem Preisvergleich für die gleiche Stückgutrelation mit einem genannten Mitbewerber',
        'Werbung mit „klimaneutralem Versand“, obwohl die Spedition keinerlei Emissionen erfasst oder ausgleicht',
        'Pressemitteilung über die Eröffnung einer neuen Umschlaghalle'
      ],
      correct: [0, 1, 3],
      hints: ['Prüfe § 5 (Irreführung), § 6 (vergleichende Werbung), § 7 (Belästigung).', 'Vergleichende Werbung ist nicht grundsätzlich verboten.'],
      solution: 'Verstöße: **A** – E-Mail-Werbung ohne vorherige ausdrückliche Einwilligung ist eine unzumutbare Belästigung (§ 7 Abs. 2 UWG). **B** – herabsetzende vergleichende Werbung (§ 6 Abs. 2 UWG). **D** – irreführende Angabe über wesentliche Merkmale der Leistung (§ 5 UWG). Zulässig: **C** – sachlicher, nachprüfbarer Preisvergleich gleichartiger Leistungen (§ 6 UWG); **E** – normale Öffentlichkeitsarbeit.'
    },
    {
      id: 'lf14-marketingmix-a11', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Lücken zur Distributionspolitik.',
      text: 'Ein angestellter Mitarbeiter im Außendienst heißt [[Reisender]]. Ein selbstständiger Kaufmann, der für die Spedition Aufträge vermittelt, ist ein [[Handelsvertreter]]; er erhält vor allem eine [[Provision]]. Großkunden werden im [[Key-Account-Management|Key Account Management|Key-Account]] von einem festen Ansprechpartner betreut. Standardsendungen kleiner Kunden lassen sich kostengünstig über ein [[Onlineportal|Portal|Online-Portal|Buchungsportal]] verkaufen.',
      hints: ['Angestellt oder selbstständig?', 'Wie werden besonders wichtige Kunden betreut?'],
      solution: '**Reisender** (angestellt, Fixgehalt) – **Handelsvertreter** (selbstständig, § 84 HGB) mit **Provision** – **Key-Account-Management** für A-Kunden – **Onlineportal** für standardisierte Leistungen.'
    },
    {
      id: 'lf14-marketingmix-a12', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre den Unterschied zwischen Werbung und Public Relations und nenne für eine Spedition je ein Beispiel.',
      model: 'Werbung soll den Absatz bestimmter Leistungen fördern und richtet sich an potenzielle Kunden, z. B. ein Mailing für den neuen Fixtermindienst. Public Relations (Öffentlichkeitsarbeit) pflegen das Image und Vertrauen in das ganze Unternehmen gegenüber der Öffentlichkeit, z. B. ein Tag der offenen Tür oder eine Pressemitteilung über neue Elektro-Lkw.',
      criteria: [
        { text: 'Werbung: Absatz bestimmter Leistungen', keywords: ['Absatz|Verkauf|Leistung'], points: 1 },
        { text: 'PR: Image/Vertrauen/Öffentlichkeit', keywords: ['Image|Vertrauen|Ansehen|Oeffentlichkeit'], points: 1 },
        { text: 'nennt passende Beispiele', keywords: ['Mailing|Anzeige|Beitrag', 'offenen Tür|offene Tür|Presse|Sponsoring'], points: 1 }
      ],
      hints: ['Wer ist jeweils die Zielgruppe?', 'Geht es um eine Leistung oder um das ganze Unternehmen?'],
      solution: '**Werbung**: Absatzförderung bestimmter Leistungen (Anzeige, Mailing, Onlinekampagne). **PR**: Image und Vertrauen in das Unternehmen als Ganzes (Pressearbeit, Tag der offenen Tür, Sponsoring, Nachhaltigkeitsbericht).'
    }
  ],
  quiz: ['lf14-marketingmix-a3', 'lf14-marketingmix-a4', 'lf14-marketingmix-a5', 'lf14-marketingmix-a8', 'lf14-marketingmix-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 14, Inhalte: Leistungs-, Preis-, Kommunikations- und Distributionspolitik' },
    { title: 'Gesetz gegen den unlauteren Wettbewerb § 5 Irreführende geschäftliche Handlungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/uwg_2004/__5.html', asOf: '2026' },
    { title: 'Gesetz gegen den unlauteren Wettbewerb § 6 Vergleichende Werbung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/uwg_2004/__6.html', asOf: '2026' },
    { title: 'Gesetz gegen den unlauteren Wettbewerb § 7 Unzumutbare Belästigungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/uwg_2004/__7.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 84 Begriff des Handelsvertreters', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__84.html', asOf: '2026' }
  ],
  links: ['lf14-marktforschung', 'lf07-deckungsbeitrag', 'lf07-fahrzeugkosten']
};
