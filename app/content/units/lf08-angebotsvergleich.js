export default {
  id: 'lf08-angebotsvergleich',
  area: 'LF08',
  topic: 'lf08-kaufvertrag',
  title: 'Beschaffung und Angebotsvergleich',
  status: 'vollstaendig',
  minutes: 35,
  validity: null,
  goals: [
    'Ich kann den Beschaffungsprozess einer Spedition von der Bedarfsermittlung bis zur Rechnungsprüfung beschreiben.',
    'Ich kann den Bedarf nach Art, Menge und Zeitpunkt ermitteln und einen Meldebestand berechnen.',
    'Ich kann interne und externe Bezugsquellen nennen und eine Anfrage formulieren.',
    'Ich kann mit der Bezugskalkulation den Bezugspreis mehrerer Angebote berechnen und vergleichen.',
    'Ich kann beurteilen, ob sich die Ausnutzung von Skonto mit einem Kredit lohnt.',
    'Ich kann mit einer Nutzwertanalyse (Entscheidungsbewertungstabelle) Angebote qualitativ vergleichen und eine begründete Entscheidung treffen.'
  ],
  simple: `# Worum geht es?

Auch eine Spedition muss einkaufen: **Paletten, Stretchfolie, Diesel, Arbeitskleidung, Hubwagen, Gabelstapler, Software** – und nicht zuletzt Transportleistungen von Frachtführern. Damit der Betrieb immer arbeitsfähig bleibt, muss die Beschaffung geplant werden.

# Der Weg zur Bestellung

1. **Bedarf ermitteln**: Was wird gebraucht, wie viel und bis wann?
2. **Bezugsquellen suchen**: Welche Lieferer kommen in Frage?
3. **Anfragen** verschicken und **Angebote** einholen.
4. **Angebote vergleichen** – nach Preis (quantitativ) und nach Qualität, Lieferzeit, Service (qualitativ).
5. **Bestellen**, Wareneingang prüfen, Rechnung prüfen und bezahlen.

# Der Preisvergleich in vier Zeilen

| Schritt | Bedeutung |
|---|---|
| Listeneinkaufspreis | Preis laut Angebot (Menge × Stückpreis) |
| − Rabatt | Sofortnachlass, z. B. für große Mengen |
| = Zieleinkaufspreis | Betrag, wenn man erst am Ende des Zahlungsziels zahlt |
| − Skonto | Nachlass für schnelle Zahlung |
| = Bareinkaufspreis | Betrag bei Zahlung innerhalb der Skontofrist |
| + Bezugskosten | Fracht, Verpackung, Versicherung |
| = **Bezugspreis** | Das ist, was die Ware wirklich kostet |

# Billig ist nicht immer gut

Das günstigste Angebot ist nicht automatisch das beste. Lieferzeit, Qualität, Zuverlässigkeit und Service zählen ebenfalls. Dafür gibt es die **Nutzwertanalyse**: Man gewichtet Kriterien, vergibt Punkte und rechnet einen Gesamtwert aus.`,
  deep: `# 1. Bedarfsermittlung

Die Bedarfsermittlung klärt **Art, Menge und Zeitpunkt** des Bedarfs. In einer Spedition unterscheidet man vor allem:

| Beschaffungsobjekt | Beispiele | Besonderheit |
|---|---|---|
| **Investitionsgüter** (Betriebsmittel) | Lkw, Wechselbrücken, Gabelstapler, Regale | selten, hoher Betrag, oft mit Finanzierung (siehe Einheit „Finanzierung“) |
| **Verbrauchsmaterial** | Diesel, AdBlue, Stretchfolie, Paletten, Etiketten | regelmäßig, Lagerhaltung und Meldebestand |
| **Dienstleistungen** | Transporte durch Frachtführer, Wartung, Reinigung | Einkauf von Frachtraum ist der wichtigste „Einkauf“ einer Spedition |

Für regelmäßig verbrauchtes Material legt man einen **Meldebestand** fest. Erreicht der Lagerbestand diese Grenze, wird bestellt (**Bestellpunktverfahren**):

**Meldebestand = Tagesverbrauch × Lieferzeit (Tage) + Mindestbestand**

Der **Mindestbestand** (eiserne Reserve) fängt Lieferverzögerungen und Mehrverbrauch ab. Alternativ wird in festen Abständen bestellt (**Bestellrhythmusverfahren**).

# 2. Bezugsquellenermittlung

- **Interne Quellen**: Lieferantendatei im ERP-System, frühere Bestellungen, Erfahrungen der Kollegen.
- **Externe Quellen**: Internetrecherche und B2B-Plattformen, Fachmessen, Fachzeitschriften, Branchenverzeichnisse, Vertreterbesuche, Auskünfte von Kammern und Verbänden.

Bei **Erstbeschaffung** (neuer Artikel, neuer Lieferer) werden mehrere Angebote eingeholt. Bei **Wiederholungsbeschaffung** genügt oft die Bestellung beim bewährten Lieferer – trotzdem sollte man die Preise regelmäßig vergleichen.

# 3. Anfrage und Angebot

- Die **Anfrage** ist rechtlich **unverbindlich**. Sie kann allgemein (Katalog, Preisliste) oder bestimmt (konkrete Ware, Menge, Liefertermin) sein.
- Das **Angebot** an eine bestimmte Person ist nach **§ 145 BGB grundsätzlich bindend**, außer der Anbieter schließt die Bindung aus (z. B. „freibleibend“, „unverbindlich“, „solange der Vorrat reicht“). Wie lange die Bindung dauert (§ 147 BGB), wann ein Vertrag zustande kommt und wann eine Annahme als neues Angebot gilt, lernst du in der Einheit **„Geschäftsfähigkeit und Kaufvertrag“** (wiso-kaufvertrag).

Ein vollständiges Angebot enthält: Art, Güte und Menge der Ware, Preis, Rabatte, **Lieferbedingungen** (wer trägt Fracht und Verpackung, z. B. „frei Haus“ oder „ab Werk“), **Lieferzeit**, **Zahlungsbedingungen** (z. B. „10 Tage 2 % Skonto, 30 Tage netto“), Erfüllungsort und Gerichtsstand.

# 4. Quantitativer Angebotsvergleich: die Bezugskalkulation

| Zeile | Rechnung |
|---|---|
| Listeneinkaufspreis (LEP) | Menge × Listenpreis je Stück |
| − Liefererrabatt | % vom LEP |
| = Zieleinkaufspreis (ZEP) | |
| − Liefererskonto | % vom **ZEP** |
| = Bareinkaufspreis (BEP) | |
| + Bezugskosten | Fracht, Verpackung, Transportversicherung, Zoll |
| = **Bezugspreis (Einstandspreis)** | Vergleichsgröße |

Wichtige Regeln:
- Der **Rabatt** wird vom Listeneinkaufspreis berechnet, das **Skonto** vom bereits rabattierten Zieleinkaufspreis.
- Skonto wird nur abgezogen, wenn der Betrieb auch **tatsächlich innerhalb der Skontofrist zahlt**.
- **Bezugskosten** werden nicht rabattiert und nicht skontiert, sie kommen erst am Ende hinzu.
- Ein **Bonus** ist ein **nachträglicher** Nachlass (z. B. am Jahresende ab einem bestimmten Umsatz) und wird im Angebotsvergleich normalerweise nicht abgezogen.
- Umsatzsteuer bleibt beim Vergleich außen vor, weil der vorsteuerabzugsberechtigte Betrieb sie als Vorsteuer zurückbekommt (siehe Einheit „Vorsteuer und Umsatzsteuer“).

# 5. Lohnt sich Skonto?

Wer kein Geld auf dem Konto hat, kann einen Kontokorrentkredit nutzen, um innerhalb der Skontofrist zu zahlen. Man vergleicht:
- **Skontoertrag** = Rechnungsbetrag × Skontosatz
- **Kreditzinsen** = Überweisungsbetrag × Zinssatz × Kredittage ÷ 360
- Kredittage = Zahlungsziel − Skontofrist

Ist der Skontoertrag größer als die Zinsen, lohnt sich die Skontozahlung. Als Faustformel gilt: **Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist)** ergibt den ungefähren Jahreszins, den man durch Verzicht auf Skonto „bezahlt“. Bei „10 Tage 2 %, 30 Tage netto“ sind das rund **36 % pro Jahr** – deutlich mehr als jeder Kontokorrentkredit.

# 6. Qualitativer Angebotsvergleich: die Nutzwertanalyse

Die **Nutzwertanalyse** (auch Entscheidungsbewertungstabelle oder Scoring-Modell) bezieht Kriterien ein, die sich nicht direkt in Euro ausdrücken lassen.

1. **Kriterien festlegen**, z. B. Preis, Qualität, Lieferzeit, Zuverlässigkeit, Service, Umweltaspekte, Nähe des Lieferers.
2. **Gewichten**: Jedes Kriterium bekommt einen Anteil, zusammen **100 %**.
3. **Bewerten**: Jedes Angebot erhält je Kriterium Punkte (z. B. 1 = sehr schlecht bis 10 = sehr gut).
4. **Gewichtete Punkte** = Gewicht × Punkte.
5. **Nutzwert** = Summe der gewichteten Punkte. Das Angebot mit dem **höchsten Nutzwert** wird gewählt.

Die Gewichtung ist eine Entscheidung des Betriebs und damit subjektiv. Sie sollte vor der Bewertung festgelegt und schriftlich begründet werden, damit das Ergebnis nachvollziehbar bleibt.

# 7. Nach der Bestellung

Bestellung (bei vorausgegangenem verbindlichem Angebot entsteht damit der Kaufvertrag) → Terminüberwachung → **Wareneingangskontrolle** (Menge, äußere Beschädigung, Art und Güte; beim zweiseitigen Handelskauf unverzüglich, siehe Einheit „Mangelhafte Lieferung und Lieferungsverzug“) → **Rechnungsprüfung** (sachlich, preislich, rechnerisch) → Zahlung unter Beachtung der Skontofrist.`,
  terms: [
    { term: 'Bedarfsermittlung', def: 'Feststellung, welche Güter oder Leistungen in welcher Menge zu welchem Zeitpunkt benötigt werden.' },
    { term: 'Meldebestand', def: 'Lagerbestand, bei dessen Erreichen bestellt wird: Tagesverbrauch × Lieferzeit + Mindestbestand.' },
    { term: 'Mindestbestand', def: 'Sicherheitsbestand (eiserne Reserve), der normalerweise nicht unterschritten werden soll, um Lieferverzögerungen abzufangen.' },
    { term: 'Anfrage', def: 'Unverbindliche Bitte an einen möglichen Lieferer, ein Angebot oder Informationen zu senden.' },
    { term: 'Angebot (Antrag)', def: 'Verbindliche Willenserklärung des Lieferers an einen bestimmten Kunden, zu den genannten Bedingungen zu liefern (§ 145 BGB), sofern die Bindung nicht ausgeschlossen ist.' },
    { term: 'Listeneinkaufspreis', def: 'Preis laut Angebot oder Preisliste vor Abzug von Nachlässen (Menge × Stückpreis).' },
    { term: 'Rabatt', def: 'Sofortiger Preisnachlass, z. B. Mengen-, Treue- oder Sonderrabatt; wird vom Listeneinkaufspreis berechnet.' },
    { term: 'Skonto', def: 'Preisnachlass für Zahlung innerhalb einer kurzen Frist; wird vom Zieleinkaufspreis berechnet.' },
    { term: 'Bonus', def: 'Nachträglich gewährter Preisnachlass, z. B. am Jahresende bei Erreichen eines bestimmten Umsatzes.' },
    { term: 'Bezugskosten', def: 'Kosten, die zusätzlich zum Warenpreis anfallen, bis die Ware im Betrieb ist: Fracht, Verpackung, Transportversicherung, Zoll.' },
    { term: 'Bezugspreis (Einstandspreis)', def: 'Bareinkaufspreis plus Bezugskosten; maßgebliche Größe für den quantitativen Angebotsvergleich.' },
    { term: 'Nutzwertanalyse', def: 'Verfahren zum qualitativen Vergleich: gewichtete Kriterien werden bewertet, die Summe der gewichteten Punkte ergibt den Nutzwert.' }
  ],
  example: `# Saar-Trans Spedition GmbH kauft 500 neue Europaletten (Beispielzahlen)

Der Lagerleiter meldet: Für das Weihnachtsgeschäft werden **500 neue Europaletten** benötigt, Liefertermin spätestens in drei Wochen. Die Auszubildende Lea holt drei Angebote ein:

| | Lieferer A (Homburg) | Lieferer B (Kaiserslautern) | Lieferer C (Metz) |
|---|---|---|---|
| Stückpreis | 11,80 € | 11,20 € | 10,90 € |
| Rabatt | 10 % | 5 % | – |
| Zahlung | 10 Tage 2 % Skonto, 30 Tage netto | 30 Tage netto | 14 Tage 3 % Skonto |
| Lieferung | frei Haus | Fracht 180 € | Fracht 250 € |
| Lieferzeit | 15 Arbeitstage | 5 Arbeitstage | 3 Arbeitstage |

# Quantitativer Vergleich (Saar-Trans zahlt immer mit Skonto)

| | A | B | C |
|---|---:|---:|---:|
| Listeneinkaufspreis | 5.900,00 € | 5.600,00 € | 5.450,00 € |
| − Rabatt | 590,00 € | 280,00 € | 0,00 € |
| = Zieleinkaufspreis | 5.310,00 € | 5.320,00 € | 5.450,00 € |
| − Skonto | 106,20 € | 0,00 € | 163,50 € |
| = Bareinkaufspreis | 5.203,80 € | 5.320,00 € | 5.286,50 € |
| + Bezugskosten | 0,00 € | 180,00 € | 250,00 € |
| = **Bezugspreis** | **5.203,80 €** | **5.500,00 €** | **5.536,50 €** |

Obwohl C den niedrigsten Stückpreis hat, ist **A am günstigsten**. Die Fracht macht C am teuersten.

# Qualitativer Vergleich (Nutzwertanalyse, Punkte 1–10)

| Kriterium | Gewicht | A | B | C |
|---|---:|---:|---:|---:|
| Bezugspreis | 40 % | 9 → 3,60 | 7 → 2,80 | 6 → 2,40 |
| Lieferzeit | 20 % | 5 → 1,00 | 8 → 1,60 | 9 → 1,80 |
| Qualität der Paletten | 25 % | 7 → 1,75 | 8 → 2,00 | 6 → 1,50 |
| Zuverlässigkeit/Service | 15 % | 6 → 0,90 | 9 → 1,35 | 7 → 1,05 |
| **Nutzwert** | 100 % | **7,25** | **7,75** | **6,75** |

**Entscheidung:** Lieferer **B** erreicht den höchsten Nutzwert. Er ist nur 296,20 € teurer als A, liefert aber in 5 statt 15 Arbeitstagen und hat sich in der Vergangenheit als sehr zuverlässig erwiesen. Weil der Termin vor dem Weihnachtsgeschäft eng ist, bestellt Saar-Trans bei B.`,
  rules: [
    'Beschaffungsprozess: Bedarf → Bezugsquellen → Anfrage → Angebote → Vergleich → Bestellung → Wareneingang → Rechnungsprüfung → Zahlung.',
    'Bezugskalkulation: Listeneinkaufspreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis.',
    'Rabatt vom Listenpreis, Skonto vom Zieleinkaufspreis, Bezugskosten zum Schluss.',
    'Verglichen wird der Bezugspreis, nicht der Stückpreis.',
    'Skonto lohnt sich fast immer – selbst wenn man dafür kurzfristig einen Kredit aufnimmt.',
    'Bei der Nutzwertanalyse ergeben die Gewichte zusammen 100 %; gewählt wird das Angebot mit dem höchsten Nutzwert.',
    'Die Anfrage ist unverbindlich, das Angebot grundsätzlich verbindlich (§ 145 BGB).'
  ],
  summary: `- Beschaffung sichert die Leistungsbereitschaft: **richtige Güter, richtige Menge, richtiger Zeitpunkt, richtiger Preis**.
- **Meldebestand** = Tagesverbrauch × Lieferzeit + Mindestbestand.
- Bezugsquellen: intern (Lieferantendatei) und extern (Internet, Messen, Verzeichnisse).
- Anfrage unverbindlich, Angebot grundsätzlich bindend (Details: Einheit „Geschäftsfähigkeit und Kaufvertrag“).
- **Bezugskalkulation**: LEP − Rabatt = ZEP − Skonto = BEP + Bezugskosten = **Bezugspreis**.
- **Nutzwertanalyse**: Kriterien gewichten (Summe 100 %), Punkte vergeben, gewichtete Punkte addieren, höchster Nutzwert gewinnt.
- Entscheidung = quantitativer **und** qualitativer Vergleich.`,
  mistakes: [
    { wrong: 'Das Angebot mit dem niedrigsten Stückpreis ist das günstigste.', right: 'Entscheidend ist der Bezugspreis nach Abzug von Rabatt und Skonto und nach Hinzurechnung der Bezugskosten.' },
    { wrong: 'Skonto wird vom Listeneinkaufspreis berechnet.', right: 'Skonto wird vom Zieleinkaufspreis berechnet, also nach Abzug des Rabatts.' },
    { wrong: 'Auf die Fracht gibt es auch Rabatt und Skonto.', right: 'Bezugskosten werden erst nach dem Skonto hinzugerechnet und nicht rabattiert oder skontiert.' },
    { wrong: 'Ein Bonus wird im Angebotsvergleich wie ein Rabatt sofort abgezogen.', right: 'Ein Bonus wird erst nachträglich gewährt und ist beim Kauf noch unsicher; er bleibt im Angebotsvergleich normalerweise unberücksichtigt.' },
    { wrong: 'Bei der Nutzwertanalyse gewinnt das Angebot mit den meisten Einzelpunkten.', right: 'Es zählt die Summe der gewichteten Punkte (Gewicht × Punkte), nicht die ungewichtete Punktsumme.' },
    { wrong: 'Eine Anfrage verpflichtet zum Kauf.', right: 'Die Anfrage ist rechtlich unverbindlich; erst Angebot und Bestellung (Annahme) bilden den Kaufvertrag.' }
  ],
  flashcards: [
    { q: 'Wie lautet das Schema der Bezugskalkulation?', a: 'Listeneinkaufspreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis.' },
    { q: 'Wovon wird Skonto berechnet?', a: 'Vom Zieleinkaufspreis (Listenpreis nach Abzug des Rabatts).' },
    { q: 'Was gehört zu den Bezugskosten?', a: 'Fracht, Verpackung, Transportversicherung, Zoll – alle Kosten, bis die Ware im Betrieb ist.' },
    { q: 'Wie berechnet man den Meldebestand?', a: 'Tagesverbrauch × Lieferzeit in Tagen + Mindestbestand.' },
    { q: 'Ist eine Anfrage rechtlich bindend?', a: 'Nein, die Anfrage ist unverbindlich.' },
    { q: 'Was ist der Unterschied zwischen Rabatt und Bonus?', a: 'Rabatt wird sofort bei der Rechnung abgezogen, Bonus wird nachträglich gewährt (z. B. bei Erreichen eines Jahresumsatzes).' },
    { q: 'Welche Schritte hat eine Nutzwertanalyse?', a: 'Kriterien festlegen, gewichten (Summe 100 %), Punkte vergeben, Gewicht × Punkte, Summe bilden, höchsten Nutzwert wählen.' },
    { q: 'Nenne vier qualitative Kriterien für die Liefererauswahl.', a: 'z. B. Qualität, Lieferzeit, Zuverlässigkeit/Termintreue, Service, Umweltaspekte, Nähe, Kulanz.' },
    { q: 'Faustformel für den Jahreszins des Lieferantenkredits?', a: 'Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist); bei 2 %, 10 Tage, 30 Tage netto ≈ 36 %.' },
    { q: 'Was ist ein interner, was ein externer Weg der Bezugsquellenermittlung?', a: 'Intern: Lieferantendatei, frühere Bestellungen. Extern: Internet/B2B-Plattformen, Messen, Fachzeitschriften, Branchenverzeichnisse.' }
  ],
  tasks: [
    {
      id: 'lf08-angebotsvergleich-a1', type: 'order', difficulty: 1, points: 4,
      q: 'Bringe die Schritte des Beschaffungsprozesses der Saar-Trans Spedition GmbH in die richtige Reihenfolge.',
      items: [
        'Bedarf an Stretchfolie nach Art, Menge und Termin ermitteln',
        'Bezugsquellen ermitteln (Lieferantendatei, Internet)',
        'Anfragen an drei Lieferer senden',
        'Angebote quantitativ und qualitativ vergleichen',
        'Bestellung beim ausgewählten Lieferer aufgeben',
        'Wareneingang kontrollieren',
        'Rechnung prüfen und innerhalb der Skontofrist bezahlen'
      ],
      hints: ['Bevor man jemanden fragen kann, muss man wissen, was man braucht und wen man fragen kann.', 'Die Zahlung kommt ganz am Ende, nach der Prüfung von Ware und Rechnung.'],
      solution: 'Bedarf → Bezugsquellen → Anfrage → Angebotsvergleich → Bestellung → Wareneingangskontrolle → Rechnungsprüfung und Zahlung. Ohne Bedarfsermittlung weiß man nicht, was anzufragen ist; ohne Wareneingangskontrolle darf die Rechnung nicht freigegeben werden.'
    },
    {
      id: 'lf08-angebotsvergleich-a2', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Möglichkeiten sind **externe** Wege der Bezugsquellenermittlung? (Mehrfachauswahl)',
      options: ['Besuch einer Logistik-Fachmesse', 'Auswertung der eigenen Lieferantendatei im ERP-System', 'Recherche auf einer B2B-Einkaufsplattform', 'Nachschlagen in einem Branchenverzeichnis', 'Durchsicht früherer Bestellungen'],
      correct: [0, 2, 3],
      hints: ['Extern heißt: Die Information kommt von außerhalb des eigenen Betriebs.', 'Lieferantendatei und frühere Bestellungen sind eigene Unterlagen.'],
      solution: 'Extern sind **Fachmesse, B2B-Plattform und Branchenverzeichnis**: Sie liefern neue, bisher unbekannte Lieferer. Lieferantendatei und frühere Bestellungen sind **interne** Quellen, weil die Informationen bereits im eigenen Betrieb vorliegen.'
    },
    {
      id: 'lf08-angebotsvergleich-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze das Schema der Bezugskalkulation.',
      text: 'Listeneinkaufspreis − [[Rabatt|Liefererrabatt]] = [[Zieleinkaufspreis]] − [[Skonto|Liefererskonto]] = [[Bareinkaufspreis]] + Bezugskosten = [[Bezugspreis|Einstandspreis]]',
      hints: ['Zuerst kommt der Sofortnachlass, dann der Nachlass für schnelle Zahlung.', 'Am Ende steht der Preis, mit dem die Angebote verglichen werden.'],
      solution: 'Listeneinkaufspreis − **Rabatt** = **Zieleinkaufspreis** − **Skonto** = **Bareinkaufspreis** + Bezugskosten = **Bezugspreis** (Einstandspreis). Der Zieleinkaufspreis heißt so, weil man ihn bei Zahlung am Ende des Zahlungsziels bezahlt; der Bareinkaufspreis gilt bei Zahlung innerhalb der Skontofrist.'
    },
    {
      id: 'lf08-angebotsvergleich-a4', type: 'calc', difficulty: 2, points: 5,
      q: 'Die Spedition Hochwald Logistik e.K. bestellt **60 Rollen Stretchfolie** zu je **24,50 €**. Der Lieferer gewährt **12 % Rabatt** und **2 % Skonto** bei Zahlung innerhalb von 10 Tagen. Für die Fracht berechnet er pauschal **45,00 €**. Berechne den Bezugspreis bei Zahlung mit Skonto (Beispielwerte).',
      formula: 'Bezugspreis = (LEP − Rabatt) − Skonto + Bezugskosten',
      fields: [
        { id: 'rabatt', label: 'Rabatt', unit: '€', answer: 176.4, tol: 0.01 },
        { id: 'zep', label: 'Zieleinkaufspreis', unit: '€', answer: 1293.6, tol: 0.01 },
        { id: 'skonto', label: 'Skonto', unit: '€', answer: 25.87, tol: 0.01 },
        { id: 'bep', label: 'Bareinkaufspreis', unit: '€', answer: 1267.73, tol: 0.01 },
        { id: 'bzp', label: 'Bezugspreis', unit: '€', answer: 1312.73, tol: 0.01 }
      ],
      hints: ['Listeneinkaufspreis = 60 × 24,50 €.', 'Skonto wird vom Zieleinkaufspreis berechnet, die Fracht erst am Schluss addiert.'],
      solution: `**Formel:** LEP − Rabatt = ZEP; ZEP − Skonto = BEP; BEP + Bezugskosten = Bezugspreis

| Schritt | Rechnung | Betrag |
|---|---|---:|
| Listeneinkaufspreis | 60 × 24,50 € | 1.470,00 € |
| − Rabatt 12 % | 1.470,00 € × 0,12 | 176,40 € |
| = Zieleinkaufspreis | 1.470,00 € − 176,40 € | 1.293,60 € |
| − Skonto 2 % | 1.293,60 € × 0,02 = 25,872 € | 25,87 € |
| = Bareinkaufspreis | 1.293,60 € − 25,87 € | 1.267,73 € |
| + Bezugskosten | Fracht | 45,00 € |
| = **Bezugspreis** | 1.267,73 € + 45,00 € | **1.312,73 €** |

Je Rolle kostet die Folie damit 1.312,73 € ÷ 60 ≈ 21,88 €.`
    },
    {
      id: 'lf08-angebotsvergleich-a5', type: 'calc', difficulty: 2, points: 3,
      q: `Für neue Warnwesten-Sets liegen zwei Angebote vor (Beispielwerte, Gesamtbeträge netto):

| | Angebot X | Angebot Y |
|---|---|---|
| Listeneinkaufspreis | 1.200,00 € | 1.150,00 € |
| Rabatt | 8 % | 5 % |
| Skonto | 2 % | keines |
| Versand | 30,00 € | frei Haus |

Die Spedition zahlt immer mit Skonto. Berechne beide Bezugspreise und die Differenz.`,
      formula: 'Bezugspreis = LEP − Rabatt − Skonto + Bezugskosten',
      fields: [
        { id: 'x', label: 'Bezugspreis Angebot X', unit: '€', answer: 1111.92, tol: 0.01 },
        { id: 'y', label: 'Bezugspreis Angebot Y', unit: '€', answer: 1092.5, tol: 0.01 },
        { id: 'diff', label: 'Preisvorteil des günstigeren Angebots', unit: '€', answer: 19.42, tol: 0.01 }
      ],
      hints: ['Rechne jedes Angebot vollständig durch das Schema.', 'Bei Y fallen kein Skonto und keine Bezugskosten an.'],
      solution: `**Angebot X:** 1.200,00 € − 96,00 € (8 %) = 1.104,00 € ZEP; − 22,08 € (2 % von 1.104,00 €) = 1.081,92 € BEP; + 30,00 € = **1.111,92 €**

**Angebot Y:** 1.150,00 € − 57,50 € (5 %) = 1.092,50 € ZEP = BEP (kein Skonto); + 0,00 € = **1.092,50 €**

**Differenz:** 1.111,92 € − 1.092,50 € = **19,42 €** zugunsten von **Angebot Y**. Trotz des höheren Rabatts und des Skontos ist X wegen der Versandkosten teurer.`
    },
    {
      id: 'lf08-angebotsvergleich-a6', type: 'mc', difficulty: 2, points: 1,
      q: 'Welche Aussage zur Bezugskalkulation ist **richtig**?',
      options: [
        'Skonto wird vom Listeneinkaufspreis berechnet.',
        'Die Fracht wird vor Abzug des Rabatts zum Listeneinkaufspreis addiert.',
        'Skonto wird vom Zieleinkaufspreis berechnet, die Bezugskosten werden zum Bareinkaufspreis addiert.',
        'Ein Jahresbonus wird beim Angebotsvergleich immer wie ein Rabatt abgezogen.'
      ],
      correct: [2],
      hints: ['Welcher Nachlass wird zuerst abgezogen?', 'Auf Fracht gibt der Lieferer keinen Rabatt.'],
      solution: 'Richtig ist C. Reihenfolge: Rabatt vom Listeneinkaufspreis → Skonto vom Zieleinkaufspreis → Bezugskosten zum Bareinkaufspreis. Ein Bonus wird erst nachträglich gewährt und ist beim Vergleich meist noch unsicher.'
    },
    {
      id: 'lf08-angebotsvergleich-a7', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Preisnachlässe der richtigen Beschreibung zu.',
      pairs: [
        ['Mengenrabatt', 'Nachlass, weil eine große Stückzahl auf einmal bestellt wird'],
        ['Treuerabatt', 'Nachlass für eine langjährige Geschäftsbeziehung'],
        ['Skonto', 'Nachlass für Zahlung innerhalb einer kurzen Frist'],
        ['Bonus', 'Nachträglicher Nachlass bei Erreichen eines bestimmten Jahresumsatzes']
      ],
      hints: ['Achte darauf, ob der Nachlass sofort oder nachträglich gewährt wird.', 'Nur einer der Nachlässe hängt vom Zahlungszeitpunkt ab.'],
      solution: 'Mengenrabatt = große Bestellmenge; Treuerabatt = langjährige Kundenbeziehung; Skonto = schnelle Zahlung; Bonus = nachträglich, abhängig vom Gesamtumsatz in einem Zeitraum.'
    },
    {
      id: 'lf08-angebotsvergleich-a8', type: 'calc', difficulty: 2, points: 2,
      q: 'Im Lager der Saar-Trans Spedition GmbH werden täglich **6 Rollen Stretchfolie** verbraucht. Die Lieferzeit beträgt **5 Arbeitstage**, der Mindestbestand ist auf **20 Rollen** festgelegt. Berechne den Meldebestand (Beispielwerte).',
      formula: 'Meldebestand = Tagesverbrauch × Lieferzeit + Mindestbestand',
      fields: [
        { id: 'verbrauch', label: 'Verbrauch während der Lieferzeit', unit: 'Rollen', answer: 30, tol: 0 },
        { id: 'mb', label: 'Meldebestand', unit: 'Rollen', answer: 50, tol: 0 }
      ],
      hints: ['Wie viele Rollen werden verbraucht, während man auf die Lieferung wartet?', 'Der Mindestbestand soll beim Eintreffen der Lieferung noch vorhanden sein.'],
      solution: `**Formel:** Meldebestand = Tagesverbrauch × Lieferzeit + Mindestbestand

**Verbrauch während der Lieferzeit:** 6 Rollen/Tag × 5 Tage = **30 Rollen**

**Meldebestand:** 30 Rollen + 20 Rollen = **50 Rollen**

Sobald nur noch 50 Rollen auf Lager sind, wird bestellt. Bis die Lieferung eintrifft, werden 30 Rollen verbraucht – der Mindestbestand von 20 Rollen bleibt als Reserve.`
    },
    {
      id: 'lf08-angebotsvergleich-a9', type: 'calc', difficulty: 3, points: 4,
      q: 'Eine Rechnung über neue Regalträger lautet auf **10.000,00 €** (netto). Zahlungsbedingung: „10 Tage 2 % Skonto, 30 Tage netto“. Das Bankkonto ist gerade leer; die Hausbank würde einen Kontokorrentkredit zu **9 % p. a.** gewähren (Beispielzinssatz, 360 Zinstage). Lohnt es sich, den Kredit aufzunehmen und mit Skonto zu zahlen?',
      formula: 'Kreditzinsen = Überweisungsbetrag × Zinssatz × Tage ÷ 360; Finanzierungsgewinn = Skonto − Zinsen',
      fields: [
        { id: 'skonto', label: 'Skontobetrag', unit: '€', answer: 200, tol: 0.01 },
        { id: 'ueb', label: 'Überweisungsbetrag (Kreditbetrag)', unit: '€', answer: 9800, tol: 0.01 },
        { id: 'zins', label: 'Kreditzinsen für 20 Tage', unit: '€', answer: 49, tol: 0.01 },
        { id: 'gewinn', label: 'Finanzierungsgewinn', unit: '€', answer: 151, tol: 0.01 }
      ],
      hints: ['Der Kredit wird nur für die Zeit zwischen Ende der Skontofrist und Ende des Zahlungsziels benötigt: 30 − 10 = 20 Tage.', 'Kreditiert wird nur der Überweisungsbetrag nach Abzug des Skontos.'],
      solution: `**Skontobetrag:** 10.000,00 € × 2 % = **200,00 €**

**Überweisungsbetrag:** 10.000,00 € − 200,00 € = **9.800,00 €**

**Kreditdauer:** 30 Tage − 10 Tage = 20 Tage

**Kreditzinsen:** 9.800,00 € × 0,09 × 20 ÷ 360 = **49,00 €**

**Finanzierungsgewinn:** 200,00 € − 49,00 € = **151,00 €**

Die Skontozahlung mit Kredit lohnt sich. Faustformel: 2 % × 360 ÷ 20 Tage = 36 % Jahreszins kostet der Verzicht auf Skonto – viel mehr als 9 % für den Kredit.`
    },
    {
      id: 'lf08-angebotsvergleich-a10', type: 'calc', difficulty: 2, points: 2,
      q: `Für Wartungsverträge der Gabelstapler soll ein Dienstleister ausgewählt werden. Berechne die Nutzwerte (Punkte 1–10).

| Kriterium | Gewicht | Service Nord | Service Süd |
|---|---:|---:|---:|
| Preis | 30 % | 8 | 6 |
| Reaktionszeit bei Ausfall | 40 % | 5 | 9 |
| Erfahrung mit der Marke | 20 % | 7 | 8 |
| Entfernung | 10 % | 9 | 4 |`,
      formula: 'Nutzwert = Σ (Gewicht × Punkte)',
      fields: [
        { id: 'nord', label: 'Nutzwert Service Nord', unit: 'Punkte', answer: 6.70, tol: 0.01 },
        { id: 'sued', label: 'Nutzwert Service Süd', unit: 'Punkte', answer: 7.40, tol: 0.01 }
      ],
      hints: ['Multipliziere jedes Gewicht (als Dezimalzahl) mit den Punkten.', 'Addiere die gewichteten Punkte je Anbieter.'],
      solution: `**Formel:** Nutzwert = Σ (Gewicht × Punkte)

**Service Nord:** 0,30 × 8 + 0,40 × 5 + 0,20 × 7 + 0,10 × 9 = 2,40 + 2,00 + 1,40 + 0,90 = **6,70 Punkte**

**Service Süd:** 0,30 × 6 + 0,40 × 9 + 0,20 × 8 + 0,10 × 4 = 1,80 + 3,60 + 1,60 + 0,40 = **7,40 Punkte**

Service Süd hat den höheren Nutzwert. Ausschlaggebend ist die hoch gewichtete Reaktionszeit: Ein stehender Stapler blockiert den Umschlag im Lager.`
    },
    {
      id: 'lf08-angebotsvergleich-a11', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zu Anfrage und Angebot sind **richtig**? (Mehrfachauswahl)',
      options: [
        'Eine Anfrage ist rechtlich unverbindlich.',
        'Ein Angebot an einen bestimmten Kunden ist grundsätzlich bindend (§ 145 BGB).',
        'Wer eine Anfrage stellt, muss beim günstigsten Anbieter kaufen.',
        'Mit dem Zusatz „freibleibend“ ist ein Angebot immer bindend.'
      ],
      correct: [0, 1],
      hints: ['Durch eine Anfrage soll man erst Informationen bekommen.', 'Freizeichnungsklauseln schließen die Bindung aus.'],
      solution: 'Richtig sind A und B. Die Anfrage verpflichtet zu nichts. Das Angebot bindet den Anbieter nach § 145 BGB, außer er hat die Bindung ausgeschlossen, z. B. mit „freibleibend“ oder „unverbindlich“. Einzelheiten zu Annahmefristen und Vertragsschluss: Einheit „Geschäftsfähigkeit und Kaufvertrag“.'
    },
    {
      id: 'lf08-angebotsvergleich-a12', type: 'text', difficulty: 2, points: 3,
      q: 'Der Disponent meint: „Wir nehmen einfach immer den billigsten Lieferer.“ Nimm Stellung und nenne mindestens zwei qualitative Kriterien, die ebenfalls berücksichtigt werden sollten.',
      model: 'Der billigste Lieferer ist nicht immer der beste. Neben dem Bezugspreis zählen qualitative Kriterien wie Lieferzeit und Termintreue (Zuverlässigkeit), die Qualität der Ware sowie Service und Kulanz. Wenn ein billiger Lieferer zu spät liefert, steht das Lager still und es entstehen Folgekosten. Deshalb sollte man eine Nutzwertanalyse durchführen, in der Preis und qualitative Kriterien gewichtet werden.',
      criteria: [
        { text: 'widerspricht: billigster ist nicht automatisch der beste', keywords: ['nicht immer|nicht automatisch|nicht unbedingt|nicht nur'], points: 1 },
        { text: 'nennt mindestens zwei qualitative Kriterien', keywords: ['Lieferzeit|Termintreue|Zuverlässig|Qualität|Service|Kulanz|Umwelt'], points: 1 },
        { text: 'nennt die Nutzwertanalyse oder Gewichtung als Methode', keywords: ['Nutzwert|gewicht|Entscheidungsbewertung|Scoring'], points: 1 }
      ],
      hints: ['Was passiert, wenn der billigste Lieferer zu spät oder schlechte Ware liefert?', 'Mit welcher Methode kann man Preis und Qualität gemeinsam bewerten?'],
      solution: 'Der Preis ist nur ein Kriterium. **Lieferzeit, Zuverlässigkeit, Qualität, Service, Umweltaspekte** beeinflussen ebenfalls die Kosten und den Ablauf. Mit einer **Nutzwertanalyse** werden diese Kriterien gewichtet und neben dem Preis bewertet.'
    },
    {
      id: 'lf08-angebotsvergleich-a13', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Kauf von vier Handgabelhubwagen',
      intro: `Die Bliesgau Logistik e.K. in Homburg benötigt **4 Handgabelhubwagen** für das neue Cross-Docking-Lager. Es liegen zwei Angebote vor (Beispielwerte, netto):

| | Lager-Profi GmbH | Hebetec KG |
|---|---|---|
| Stückpreis | 389,00 € | 359,00 € |
| Rabatt | 10 % | – |
| Skonto | 2 % | 3 % |
| Bezugskosten | Fracht 60,00 € | frei Haus |
| Garantie | 3 Jahre | 1 Jahr |
| Lieferzeit | 4 Arbeitstage | 10 Arbeitstage |
| Ersatzteilservice | Techniker in Saarbrücken | nur Versand |

Bliesgau Logistik zahlt immer mit Skonto.`,
      hints: ['Rechne zuerst beide Bezugspreise.', 'Vergleiche danach Preisunterschied und Nutzwerte.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf08-angebotsvergleich-a13-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Bezugspreise beider Angebote und den Preisunterschied.',
          formula: 'Bezugspreis = LEP − Rabatt − Skonto + Bezugskosten',
          fields: [
            { id: 'lp', label: 'Bezugspreis Lager-Profi', unit: '€', answer: 1432.39, tol: 0.01 },
            { id: 'ht', label: 'Bezugspreis Hebetec', unit: '€', answer: 1392.92, tol: 0.01 },
            { id: 'diff', label: 'Preisunterschied', unit: '€', answer: 39.47, tol: 0.01 }
          ],
          hints: ['Listeneinkaufspreis = 4 × Stückpreis.', 'Skonto von 1.400,40 € bzw. 1.436,00 € berechnen.'],
          solution: `**Lager-Profi:** LEP 4 × 389,00 € = 1.556,00 €; − 10 % Rabatt 155,60 € = 1.400,40 € ZEP; − 2 % Skonto 28,01 € (genau 28,008 €) = 1.372,39 € BEP; + 60,00 € Fracht = **1.432,39 €**

**Hebetec:** LEP 4 × 359,00 € = 1.436,00 € = ZEP; − 3 % Skonto 43,08 € = 1.392,92 € BEP; + 0,00 € = **1.392,92 €**

**Preisunterschied:** 1.432,39 € − 1.392,92 € = **39,47 €** zugunsten von Hebetec.`
        },
        {
          id: 'lf08-angebotsvergleich-a13-2', type: 'calc', difficulty: 2, points: 2,
          q: `Berechne die Nutzwerte (Punkte 1–10):

| Kriterium | Gewicht | Lager-Profi | Hebetec |
|---|---:|---:|---:|
| Bezugspreis | 35 % | 7 | 9 |
| Garantie/Qualität | 30 % | 9 | 6 |
| Lieferzeit | 15 % | 8 | 6 |
| Ersatzteilservice | 20 % | 9 | 5 |`,
          formula: 'Nutzwert = Σ (Gewicht × Punkte)',
          fields: [
            { id: 'nlp', label: 'Nutzwert Lager-Profi', unit: 'Punkte', answer: 8.15, tol: 0.01 },
            { id: 'nht', label: 'Nutzwert Hebetec', unit: 'Punkte', answer: 6.85, tol: 0.01 }
          ],
          hints: ['Gewichte als Dezimalzahl: 0,35; 0,30; 0,15; 0,20.', 'Die Gewichte ergeben zusammen 1,00.'],
          solution: `**Lager-Profi:** 0,35 × 7 + 0,30 × 9 + 0,15 × 8 + 0,20 × 9 = 2,45 + 2,70 + 1,20 + 1,80 = **8,15 Punkte**

**Hebetec:** 0,35 × 9 + 0,30 × 6 + 0,15 × 6 + 0,20 × 5 = 3,15 + 1,80 + 0,90 + 1,00 = **6,85 Punkte**`
        },
        {
          id: 'lf08-angebotsvergleich-a13-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Entscheidung ist am besten begründet?',
          options: [
            'Hebetec, weil der Bezugspreis niedriger ist – andere Kriterien spielen keine Rolle.',
            'Lager-Profi, weil der Nutzwert deutlich höher ist und der Mehrpreis von rund 39 € durch längere Garantie, kürzere Lieferzeit und Service vor Ort aufgewogen wird.',
            'Lager-Profi, weil der Stückpreis höher ist und teure Geräte immer besser sind.',
            'Keiner, weil der Rabatt bei Hebetec fehlt.'
          ],
          correct: [1],
          hints: ['Vergleiche die Größe des Preisunterschieds mit dem Unterschied im Nutzwert.', 'Ein höherer Preis allein ist kein Qualitätsbeweis.'],
          solution: 'Richtig ist B. Lager-Profi erreicht 8,15 statt 6,85 Punkte. Der Mehrpreis von 39,47 € ist gering im Vergleich zu zwei Jahren zusätzlicher Garantie und einem Techniker in der Nähe; fällt ein Hubwagen aus, kostet das schnell mehr. A ignoriert die qualitativen Kriterien, C und D sind keine sachlichen Gründe.'
        }
      ]
    }
  ],
  quiz: ['lf08-angebotsvergleich-a3', 'lf08-angebotsvergleich-a4', 'lf08-angebotsvergleich-a6', 'lf08-angebotsvergleich-a10', 'lf08-angebotsvergleich-a13'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 8, Inhalte: Kaufvertrag; Ziele: Bedarf an Sachgütern ermitteln, Bezugsquellen suchen, Angebote einholen und auswerten' },
    { id: 'saar-wiso-2016', ref: 'W4' },
    { title: 'Bürgerliches Gesetzbuch § 145 Bindung an den Antrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__145.html', asOf: '2026' },
    { title: 'Bürgerliches Gesetzbuch § 147 Annahmefrist', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__147.html', asOf: '2026' }
  ],
  links: ['wiso-kaufvertrag', 'lf08-stoerungen', 'lf08-finanzierung', 'lf03-umsatzsteuer']
};
