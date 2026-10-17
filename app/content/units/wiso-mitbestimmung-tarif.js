export default {
  id: 'wiso-mitbestimmung-tarif',
  area: 'WISO',
  topic: 'wiso-w3-mitbestimmung',
  title: 'Betriebsrat, JAV und Tarifvertrag',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Betriebsverfassungsgesetz §§ 1, 7, 8, 9, 13, 60–64, 77, 87, 102 BetrVG (Wahlalter 16 Jahre seit der Reform 2021), Drittelbeteiligungsgesetz § 1, Mitbestimmungsgesetz § 1, Tarifvertragsgesetz §§ 4, 5, Art. 9 Abs. 3 GG; geprüft auf gesetze-im-internet.de im Oktober 2026 (§ 61 BetrVG über lexmea.de, Stand 20.09.2024). Arbeitskampfregeln wie Friedenspflicht, Urabstimmung und Aussperrung beruhen überwiegend auf Rechtsprechung des Bundesarbeitsgerichts, nicht auf einem eigenen Gesetz.'
  },
  goals: [
    'Ich kann erklären, ab wann und wie ein Betriebsrat gewählt wird.',
    'Ich kann die Größe eines Betriebsrats und einer JAV nach der Zahl der Beschäftigten bestimmen.',
    'Ich kann Informations-, Anhörungs-, Mitwirkungs- und Mitbestimmungsrechte unterscheiden und Beispiele nennen.',
    'Ich kann angeben, wer die Jugend- und Auszubildendenvertretung wählen darf und wer wählbar ist.',
    'Ich kann Betriebsvereinbarung und Tarifvertrag voneinander abgrenzen.',
    'Ich kann den Ablauf einer Tarifauseinandersetzung bis zum Streik und zur Einigung beschreiben.',
    'Ich kann Tarifautonomie, Friedenspflicht, Günstigkeitsprinzip und Allgemeinverbindlichkeit erklären.'
  ],
  simple: `# Wer redet im Betrieb mit?

In vielen Speditionen gibt es einen **Betriebsrat**. Er vertritt die Interessen der Beschäftigten gegenüber dem Arbeitgeber. Für junge Leute und Auszubildende gibt es zusätzlich die **Jugend- und Auszubildendenvertretung (JAV)**. Die Regeln stehen im **Betriebsverfassungsgesetz (BetrVG)**.

- Ein Betriebsrat kann gewählt werden, wenn der Betrieb **mindestens 5 ständige wahlberechtigte Arbeitnehmer** hat (davon 3 wählbar).
- **Wählen** darf, wer mindestens **16 Jahre** alt ist. **Gewählt** werden kann, wer **18 Jahre** alt und **6 Monate** im Betrieb ist.
- Gewählt wird **alle 4 Jahre** zwischen **1. März und 31. Mai** (zuletzt 2026, nächste regelmäßige Wahl 2030).

# Was darf der Betriebsrat?

Die Rechte sind unterschiedlich stark – von „Bescheid bekommen“ bis „ohne ihn geht nichts“:

1. **Informationsrecht** – er muss unterrichtet werden.
2. **Anhörungs- und Beratungsrecht** – er darf seine Meinung sagen, z. B. vor jeder Kündigung.
3. **Mitwirkungsrecht** – er kann widersprechen, z. B. bei Einstellungen.
4. **Mitbestimmungsrecht** – ohne seine Zustimmung geht es nicht, z. B. bei Arbeitszeiten oder Urlaubsplan (§ 87 BetrVG).

# Tarifverträge

Löhne, Urlaub und Arbeitszeit für eine ganze Branche handeln **Gewerkschaften** und **Arbeitgeberverbände** aus – ohne den Staat. Das heißt **Tarifautonomie** und ist im Grundgesetz geschützt (Art. 9 Abs. 3 GG). Während ein Tarifvertrag läuft, gilt die **Friedenspflicht**: kein Streik über die geregelten Themen. Erst wenn Verhandlungen scheitern, kann es zum **Streik** kommen.`,
  deep: `# Betriebsrat (BetrVG)

**Voraussetzungen und Wahl**
- Betrieb mit in der Regel mindestens **5 ständigen wahlberechtigten Arbeitnehmern**, von denen **3 wählbar** sind (§ 1).
- **Wahlberechtigt** (aktives Wahlrecht): alle Arbeitnehmer ab **16 Jahren**, auch Auszubildende; Leiharbeitnehmer, wenn sie länger als 3 Monate im Betrieb eingesetzt werden (§ 7).
- **Wählbar** (passives Wahlrecht): Wahlberechtigte ab **18 Jahren**, die **6 Monate** dem Betrieb angehören (§ 8).
- Regelmäßige Wahl **alle 4 Jahre vom 1. März bis 31. Mai** (§ 13); die Amtszeit beträgt 4 Jahre.

**Größe** (§ 9, Auszug – nach der Zahl der wahlberechtigten Arbeitnehmer):

| Arbeitnehmer | Mitglieder |
|---|---:|
| 5–20 | 1 |
| 21–50 | 3 |
| 51–100 | 5 |
| 101–200 | 7 |
| 201–400 | 9 |
| 401–700 | 11 |
| 701–1.000 | 13 |

**Beteiligungsrechte (Stufen)**

| Stufe | Bedeutung | Beispiele |
|---|---|---|
| **Information** | Arbeitgeber muss rechtzeitig und umfassend unterrichten | Personalplanung, geplante Betriebsänderungen |
| **Anhörung/Beratung** | Betriebsrat darf Stellung nehmen, entscheidet aber nicht | **Anhörung vor jeder Kündigung** (§ 102) – ohne sie ist die Kündigung unwirksam |
| **Mitwirkung (Widerspruch/Zustimmungsverweigerung)** | Betriebsrat kann aus bestimmten Gründen widersprechen | Einstellung, Versetzung, Eingruppierung (§ 99, in Unternehmen mit mehr als 20 wahlberechtigten Arbeitnehmern) |
| **Mitbestimmung** | Maßnahme nur mit Zustimmung; bei Streit entscheidet die **Einigungsstelle** | **soziale Angelegenheiten nach § 87**: Beginn und Ende der Arbeitszeit, Pausen, Überstunden/Kurzarbeit, Urlaubsplan, Einführung technischer Überwachung (z. B. GPS-Ortung von Lkw, Kameras im Lager), Arbeits- und Gesundheitsschutz, Grundsätze der Entlohnung, mobile Arbeit |

> Spedition: Will der Arbeitgeber ein Telematiksystem einführen, das Fahrten und Standzeiten der Fahrer aufzeichnet, ist das eine technische Einrichtung zur Leistungs- und Verhaltenskontrolle (§ 87 Abs. 1 Nr. 6) – der Betriebsrat muss zustimmen.

**Betriebsvereinbarung (§ 77)**
- schriftlicher Vertrag zwischen **Arbeitgeber und Betriebsrat**, von beiden unterzeichnet,
- gilt **unmittelbar und zwingend** für alle Arbeitnehmer des Betriebs,
- kündbar mit **3 Monaten** Frist, wenn nichts anderes vereinbart ist,
- **Tarifvorrang:** Entgelt und Arbeitsbedingungen, die üblicherweise durch Tarifvertrag geregelt werden, dürfen nicht Gegenstand einer Betriebsvereinbarung sein, außer der Tarifvertrag erlaubt es (§ 77 Abs. 3).

# Jugend- und Auszubildendenvertretung (§§ 60 ff. BetrVG)

- Wird gebildet in Betrieben mit in der Regel mindestens **5 Arbeitnehmern unter 18 Jahren oder zu ihrer Berufsausbildung Beschäftigten** (§ 60). Voraussetzung ist in der Praxis, dass es einen Betriebsrat gibt, denn die JAV arbeitet über ihn.
- **Wahlberechtigt:** alle diese Jugendlichen und **Auszubildenden – unabhängig vom Alter** (§ 61 Abs. 1).
- **Wählbar:** Arbeitnehmer, die das **25. Lebensjahr noch nicht vollendet** haben, sowie **Auszubildende** unabhängig vom Alter; **Betriebsratsmitglieder sind nicht wählbar** (§ 61 Abs. 2).
- **Wahl alle 2 Jahre** vom **1. Oktober bis 30. November**, Amtszeit 2 Jahre (§ 64).
- **Größe** (§ 62): 5–20 → 1, 21–50 → 3, 51–150 → 5, 151–300 → 7 Mitglieder usw.
- **Rechte:** Die JAV hat keine eigenen Mitbestimmungsrechte gegenüber dem Arbeitgeber. Sie handelt **über den Betriebsrat**: Sie kann Anträge stellen, an Betriebsratssitzungen teilnehmen und hat bei Jugend- und Ausbildungsthemen Stimmrecht im Betriebsrat. Typische Themen: Ausbildungsqualität, Übernahme nach der Ausbildung, Freistellung für die Berufsschule.

# Unternehmensmitbestimmung (kurz)

Hier geht es um Mitbestimmung im **Aufsichtsrat** großer Kapitalgesellschaften (AG, GmbH u. a.):

| Gesetz | Unternehmen mit in der Regel | Arbeitnehmervertreter im Aufsichtsrat |
|---|---|---|
| **Drittelbeteiligungsgesetz** | mehr als 500 Arbeitnehmern | ein Drittel |
| **Mitbestimmungsgesetz 1976** | mehr als 2.000 Arbeitnehmern | die Hälfte (der Vorsitzende der Anteilseignerseite hat bei Stimmengleichheit die entscheidende Stimme) |

# Tarifautonomie und Tarifvertrag

- **Art. 9 Abs. 3 GG** garantiert die **Koalitionsfreiheit**: Jeder darf Vereinigungen zur Wahrung der Arbeits- und Wirtschaftsbedingungen bilden. Daraus folgt die **Tarifautonomie** – Gewerkschaften und Arbeitgeber(verbände) regeln Arbeitsbedingungen eigenverantwortlich, ohne staatliche Einmischung.
- **Tarifvertragsparteien:** Gewerkschaften (für Spedition und Logistik vor allem ver.di) auf der einen, Arbeitgeberverbände oder einzelne Arbeitgeber auf der anderen Seite. Ein Tarifvertrag mit einem Verband heißt **Flächen- bzw. Verbandstarifvertrag**, mit einem einzelnen Unternehmen **Haus- oder Firmentarifvertrag**.

**Arten von Tarifverträgen**

| Art | Inhalt | Laufzeit |
|---|---|---|
| **Manteltarifvertrag** (Rahmentarifvertrag) | allgemeine Arbeitsbedingungen: Arbeitszeit, Urlaub, Zuschläge, Kündigungsfristen | lang (mehrere Jahre) |
| **Entgelttarifvertrag** (Lohn- und Gehaltstarifvertrag) | Höhe der Löhne, Gehälter und Ausbildungsvergütungen | kurz (oft 12–24 Monate) |
| **Entgeltrahmentarifvertrag** | Eingruppierung: Merkmale der Lohn- und Gehaltsgruppen | mittel bis lang |

**Wirkung (§ 4 TVG)**
- Tarifnormen gelten **unmittelbar und zwingend** zwischen **beiderseits Tarifgebundenen** (Arbeitgeber im Verband, Arbeitnehmer in der Gewerkschaft). In der Praxis verweisen Arbeitsverträge oft auf den Tarifvertrag, sodass er auch für Nichtmitglieder gilt.
- **Günstigkeitsprinzip (§ 4 Abs. 3 TVG):** Abweichungen sind nur erlaubt, wenn der Tarifvertrag sie zulässt oder wenn sie **zugunsten des Arbeitnehmers** sind.
- **Nachwirkung (§ 4 Abs. 5 TVG):** Nach Ablauf gelten die Regeln weiter, bis eine neue Abmachung sie ersetzt.

**Allgemeinverbindlichkeit (§ 5 TVG):** Das **Bundesministerium für Arbeit und Soziales** kann einen Tarifvertrag auf gemeinsamen Antrag der Tarifvertragsparteien im Einvernehmen mit dem **Tarifausschuss** für allgemeinverbindlich erklären, wenn das **im öffentlichen Interesse** geboten erscheint. Dann gilt er auch für **nicht tarifgebundene** Arbeitgeber und Arbeitnehmer der Branche.

# Ablauf einer Tarifauseinandersetzung

1. Der Entgelttarifvertrag **läuft aus** bzw. wird gekündigt – die **Friedenspflicht endet**.
2. Die Gewerkschaft stellt **Forderungen**, beide Seiten **verhandeln**. Während der Verhandlungen sind kurze **Warnstreiks** möglich.
3. Die Verhandlungen werden für **gescheitert** erklärt.
4. Gegebenenfalls **Schlichtung**: Ein neutraler Schlichter macht einen Einigungsvorschlag (nur wenn vereinbart; Ergebnis nicht verbindlich, solange es nicht angenommen wird).
5. **Urabstimmung**: Die Gewerkschaftsmitglieder stimmen über einen unbefristeten Streik ab; die nötige Mehrheit legt die Satzung der Gewerkschaft fest.
6. **Streik** (gemeinsame Arbeitsniederlegung). Die Arbeitgeber können mit **Aussperrung** antworten (Arbeitnehmer werden nicht beschäftigt und nicht bezahlt). Streikende Gewerkschaftsmitglieder erhalten **Streikgeld** von der Gewerkschaft.
7. **Neue Verhandlungen** und Einigung; die Mitglieder stimmen in einer **zweiten Urabstimmung** über das Ergebnis ab.
8. **Neuer Tarifvertrag** – die **Friedenspflicht** gilt wieder.

**Friedenspflicht:** Während der Laufzeit eines Tarifvertrags sind Arbeitskämpfe über die darin geregelten Themen unzulässig. Sie ergibt sich aus dem Tarifvertrag selbst (Rechtsprechung des Bundesarbeitsgerichts).`,
  terms: [
    { term: 'Betriebsrat', def: 'Von der Belegschaft gewähltes Organ, das die Interessen der Arbeitnehmer gegenüber dem Arbeitgeber vertritt; möglich ab 5 ständigen wahlberechtigten Arbeitnehmern (§ 1 BetrVG).' },
    { term: 'Mitbestimmungsrecht', def: 'Stärkstes Beteiligungsrecht: Der Arbeitgeber kann die Maßnahme nur mit Zustimmung des Betriebsrats durchführen; bei Streit entscheidet die Einigungsstelle (z. B. § 87 BetrVG).' },
    { term: 'Einigungsstelle', def: 'Schlichtungsgremium aus gleich vielen Vertretern von Arbeitgeber und Betriebsrat und einem unparteiischen Vorsitzenden; ihr Spruch ersetzt die Einigung.' },
    { term: 'Jugend- und Auszubildendenvertretung (JAV)', def: 'Vertretung der Arbeitnehmer unter 18 und der Auszubildenden; ab 5 solcher Beschäftigten, Wahl alle 2 Jahre (§§ 60 ff. BetrVG).' },
    { term: 'Betriebsvereinbarung', def: 'Schriftlicher Vertrag zwischen Arbeitgeber und Betriebsrat, der unmittelbar und zwingend für alle Beschäftigten des Betriebs gilt (§ 77 BetrVG).' },
    { term: 'Tarifautonomie', def: 'Recht von Gewerkschaften und Arbeitgeberverbänden, Arbeitsbedingungen ohne staatliche Einmischung selbst zu regeln; abgeleitet aus Art. 9 Abs. 3 GG.' },
    { term: 'Manteltarifvertrag', def: 'Tarifvertrag über allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaub und Zuschläge; meist lange Laufzeit.' },
    { term: 'Entgelttarifvertrag', def: 'Tarifvertrag über die Höhe von Löhnen, Gehältern und Ausbildungsvergütungen; meist kurze Laufzeit.' },
    { term: 'Friedenspflicht', def: 'Während der Laufzeit eines Tarifvertrags sind Arbeitskampfmaßnahmen zu den geregelten Themen verboten.' },
    { term: 'Günstigkeitsprinzip', def: 'Vom Tarifvertrag darf einzelvertraglich nur zugunsten des Arbeitnehmers abgewichen werden (§ 4 Abs. 3 TVG).' },
    { term: 'Allgemeinverbindlichkeit', def: 'Erklärung des BMAS, dass ein Tarifvertrag auch für nicht tarifgebundene Arbeitgeber und Arbeitnehmer seines Geltungsbereichs gilt (§ 5 TVG).' },
    { term: 'Urabstimmung', def: 'Abstimmung der Gewerkschaftsmitglieder über einen Streik bzw. über die Annahme eines Verhandlungsergebnisses.' },
    { term: 'Aussperrung', def: 'Arbeitskampfmittel der Arbeitgeber: Arbeitnehmer werden vorübergehend nicht beschäftigt und nicht bezahlt.' }
  ],
  example: `# Praxisbeispiel: Saar-Mosel Spedition GmbH, Saarlouis (Beispielfall)

Die Spedition hat **146 wahlberechtigte Arbeitnehmer**, davon **12 Auszubildende** und **2 Jugendliche unter 18** (die beide Auszubildende sind).

**Betriebsratswahl im April 2026**
- 146 Arbeitnehmer → Stufe 101–200 → **7 Betriebsratsmitglieder** (§ 9 BetrVG).
- Die 17-jährige Auszubildende Mia darf **wählen** (ab 16), aber nicht gewählt werden (erst ab 18 und nach 6 Monaten Betriebszugehörigkeit).

**JAV-Wahl im November 2026**
- 12 Auszubildende → mindestens 5 → eine JAV wird gewählt; 12 Personen → Stufe 5–20 → **1 Jugend- und Auszubildendenvertreter**.
- Wählbar ist z. B. der 23-jährige Disponent Tom (unter 25) und der 27-jährige Umschüler im 2. Ausbildungsjahr (Auszubildender, Alter egal) – nicht aber ein Betriebsratsmitglied.

**Mitbestimmung in der Praxis**
- Die Geschäftsführung möchte die Frühschicht im Umschlaglager von 6:00 auf 5:00 Uhr vorverlegen → **Mitbestimmung** nach § 87 Abs. 1 Nr. 2 BetrVG. Arbeitgeber und Betriebsrat schließen eine **Betriebsvereinbarung „Schichtzeiten“**.
- Einstellung von drei neuen Lagerarbeitern → **Zustimmungsverweigerungsrecht** (Mitwirkung) nach § 99 BetrVG.

**Tarifrunde**
Die Spedition ist Mitglied im Arbeitgeberverband und an den Entgelttarifvertrag gebunden. Er läuft am 31. März 2026 aus. Nach drei Verhandlungsrunden ruft die Gewerkschaft zu Warnstreiks auf; in einer vierten Runde einigen sich die Parteien auf höhere Entgelte und Ausbildungsvergütungen. Der neue Tarifvertrag läuft 24 Monate – in dieser Zeit herrscht wieder **Friedenspflicht**.`,
  rules: [
    'Betriebsrat ab 5 ständigen wahlberechtigten Arbeitnehmern; wählen ab 16, gewählt werden ab 18 und nach 6 Monaten.',
    'Betriebsratswahl alle 4 Jahre (1. März – 31. Mai), JAV-Wahl alle 2 Jahre (1. Oktober – 30. November).',
    'JAV: wählen dürfen alle unter 18 und alle Azubis; wählbar sind alle unter 25 und alle Azubis, nicht aber Betriebsratsmitglieder.',
    'Rechte von schwach nach stark: Information – Anhörung/Beratung – Mitwirkung – Mitbestimmung.',
    'Soziale Angelegenheiten nach § 87 BetrVG (Arbeitszeit, Urlaubsplan, Überwachungstechnik) sind mitbestimmungspflichtig.',
    'Tarifvertrag: Gewerkschaft + Arbeitgeber(verband); Betriebsvereinbarung: Betriebsrat + Arbeitgeber.',
    'Während eines laufenden Tarifvertrags herrscht Friedenspflicht – kein Streik über geregelte Themen.',
    'Günstigkeitsprinzip: Vom Tarifvertrag darf nur zugunsten des Arbeitnehmers abgewichen werden.'
  ],
  summary: `- **Betriebsrat:** ab 5 Arbeitnehmern; Wahl alle 4 Jahre (März–Mai); aktives Wahlrecht 16, passives 18 + 6 Monate; Größe nach § 9 BetrVG.
- **Beteiligungsrechte:** Information, Anhörung (z. B. vor jeder Kündigung, § 102), Mitwirkung (z. B. Einstellung, § 99), Mitbestimmung (soziale Angelegenheiten, § 87; Streit → Einigungsstelle).
- **JAV:** ab 5 Jugendlichen/Azubis; wählen: unter 18 und Azubis; wählbar: unter 25 und Azubis; Wahl alle 2 Jahre (Okt.–Nov.); handelt über den Betriebsrat.
- **Betriebsvereinbarung:** Arbeitgeber + Betriebsrat, schriftlich, unmittelbar und zwingend; Tarifvorrang.
- **Unternehmensmitbestimmung:** > 500 AN ein Drittel, > 2.000 AN die Hälfte des Aufsichtsrats.
- **Tarif:** Tarifautonomie (Art. 9 Abs. 3 GG); Mantel- und Entgelttarifvertrag; Friedenspflicht, Günstigkeitsprinzip, Nachwirkung, Allgemeinverbindlichkeit (BMAS).
- **Ablauf:** Ende Friedenspflicht → Verhandlungen → Scheitern → Schlichtung → Urabstimmung → Streik/Aussperrung → Einigung → 2. Urabstimmung → neuer Tarifvertrag.`,
  mistakes: [
    { wrong: 'Auszubildende dürfen den Betriebsrat erst mit 18 wählen.', right: 'Das aktive Wahlrecht beginnt mit 16 Jahren (§ 7 BetrVG). Erst für die Wählbarkeit braucht man 18 Jahre.' },
    { wrong: 'Ein 24-jähriger Azubi darf die JAV nicht wählen, weil er über 18 ist.', right: 'Alle Auszubildenden sind für die JAV wahlberechtigt – unabhängig vom Alter (§§ 60, 61 BetrVG).' },
    { wrong: 'Der Betriebsrat entscheidet allein über Kündigungen.', right: 'Bei Kündigungen hat der Betriebsrat ein Anhörungsrecht und kann widersprechen, aber die Kündigung nicht verhindern. Echte Mitbestimmung gibt es vor allem in sozialen Angelegenheiten (§ 87 BetrVG).' },
    { wrong: 'Betriebsrat und Arbeitgeber können in einer Betriebsvereinbarung die Tariflöhne regeln.', right: 'Entgelte, die üblicherweise im Tarifvertrag geregelt werden, dürfen nicht Gegenstand einer Betriebsvereinbarung sein, außer der Tarifvertrag lässt es ausdrücklich zu (§ 77 Abs. 3 BetrVG).' },
    { wrong: 'Ein Arbeitsvertrag darf weniger Urlaub vorsehen als der Tarifvertrag, wenn der Arbeitnehmer unterschreibt.', right: 'Nach dem Günstigkeitsprinzip (§ 4 Abs. 3 TVG) darf bei Tarifbindung nur zugunsten des Arbeitnehmers abgewichen werden.' },
    { wrong: 'Die Gewerkschaft darf jederzeit zum Streik aufrufen.', right: 'Während der Laufzeit eines Tarifvertrags gilt die Friedenspflicht. Ein Streik ist erst nach deren Ende zulässig und muss von einer Gewerkschaft getragen werden.' }
  ],
  flashcards: [
    { q: 'Ab wie vielen Arbeitnehmern kann ein Betriebsrat gewählt werden?', a: 'Ab in der Regel 5 ständigen wahlberechtigten Arbeitnehmern, von denen 3 wählbar sind (§ 1 BetrVG).' },
    { q: 'Ab welchem Alter darf man den Betriebsrat wählen, ab wann gewählt werden?', a: 'Wählen ab 16 Jahren; gewählt werden ab 18 Jahren und nach 6 Monaten Betriebszugehörigkeit.' },
    { q: 'Wann finden regelmäßige Betriebsratswahlen statt?', a: 'Alle 4 Jahre vom 1. März bis 31. Mai (zuletzt 2026).' },
    { q: 'Wie viele Betriebsratsmitglieder hat ein Betrieb mit 80 Arbeitnehmern?', a: '5 Mitglieder (Stufe 51–100).' },
    { q: 'Wer ist für die JAV wählbar?', a: 'Arbeitnehmer unter 25 Jahren und Auszubildende jeden Alters; nicht Betriebsratsmitglieder.' },
    { q: 'Wie oft wird die JAV gewählt?', a: 'Alle 2 Jahre vom 1. Oktober bis 30. November.' },
    { q: 'Nenne drei Beispiele für Mitbestimmung nach § 87 BetrVG.', a: 'z. B. Beginn und Ende der Arbeitszeit, Urlaubsplan, Einführung technischer Überwachung (GPS/Telematik), Gesundheitsschutz.' },
    { q: 'Wer schließt eine Betriebsvereinbarung, wer einen Tarifvertrag?', a: 'Betriebsvereinbarung: Arbeitgeber und Betriebsrat. Tarifvertrag: Gewerkschaft und Arbeitgeberverband oder einzelner Arbeitgeber.' },
    { q: 'Was regelt ein Manteltarifvertrag?', a: 'Allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaub, Zuschläge, Kündigungsfristen.' },
    { q: 'Was bedeutet Friedenspflicht?', a: 'Während der Laufzeit eines Tarifvertrags sind Arbeitskämpfe über die geregelten Themen verboten.' },
    { q: 'Was bedeutet Günstigkeitsprinzip?', a: 'Abweichungen vom Tarifvertrag sind nur zugunsten des Arbeitnehmers zulässig (§ 4 Abs. 3 TVG).' },
    { q: 'Wer erklärt einen Tarifvertrag für allgemeinverbindlich?', a: 'Das Bundesministerium für Arbeit und Soziales im Einvernehmen mit dem Tarifausschuss (§ 5 TVG).' },
    { q: 'Wo ist die Tarifautonomie verankert?', a: 'In der Koalitionsfreiheit nach Art. 9 Abs. 3 Grundgesetz.' }
  ],
  tasks: [
    {
      id: 'wiso-mitbestimmung-tarif-a1', type: 'mc', difficulty: 1, points: 3,
      q: 'Wer darf in der Saar-Mosel Spedition GmbH den **Betriebsrat wählen**? (Mehrfachauswahl)',
      options: [
        'die 16-jährige Auszubildende im 1. Ausbildungsjahr',
        'der Lagerarbeiter, der seit 2 Wochen im Betrieb ist',
        'ein 15-jähriger Schülerpraktikant',
        'eine Leiharbeitnehmerin, die seit 5 Monaten im Lager eingesetzt wird',
        'ein Fahrer, der vor 3 Monaten aus dem Betrieb ausgeschieden ist'
      ],
      correct: [0, 1, 3],
      hints: ['Das aktive Wahlrecht beginnt mit 16 Jahren; eine Mindestzugehörigkeit ist nicht nötig.', 'Leiharbeitnehmer brauchen mehr als 3 Monate Einsatz.'],
      solution: 'Richtig sind A, B und D. Wahlberechtigt sind Arbeitnehmer ab **16 Jahren**, auch Auszubildende, ohne Mindestbeschäftigungsdauer (§ 7 BetrVG). Leiharbeitnehmer wählen mit, wenn sie **länger als 3 Monate** eingesetzt werden. Ein 15-jähriger Schülerpraktikant ist zu jung und kein Arbeitnehmer des Betriebs; ein ausgeschiedener Fahrer gehört nicht mehr zum Betrieb.'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a2', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Westpfalz Logistik GmbH hat **214 wahlberechtigte Arbeitnehmer**, darunter **23 Auszubildende** (alle in Ausbildung, teils über 18). Bestimme die Zahl der Mitglieder des Betriebsrats und der JAV.',
      formula: 'Mitgliederzahl nach Staffel § 9 BetrVG (Betriebsrat) bzw. § 62 BetrVG (JAV)',
      fields: [
        { id: 'br', label: 'Mitglieder Betriebsrat', unit: 'Personen', answer: 9, tol: 0 },
        { id: 'jav', label: 'Mitglieder JAV', unit: 'Personen', answer: 3, tol: 0 }
      ],
      hints: ['Betriebsrat: 201–400 Arbeitnehmer.', 'JAV: Für die Größe zählen nur Jugendliche unter 18 und Auszubildende – hier 23.'],
      solution: `**Betriebsrat:** 214 Arbeitnehmer → Stufe 201–400 → **9 Mitglieder** (§ 9 BetrVG).

**JAV:** 23 Auszubildende (alle Azubis zählen, unabhängig vom Alter) → Stufe 21–50 → **3 Mitglieder** (§ 62 BetrVG).`
    },
    {
      id: 'wiso-mitbestimmung-tarif-a3', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Situation in einer Spedition der Stufe der Beteiligung des Betriebsrats zu.',
      pairs: [
        ['Die Geschäftsführung legt den Urlaubsplan für das Lager fest.', 'Mitbestimmung (Zustimmung nötig)'],
        ['Der Arbeitgeber will einer Disponentin kündigen.', 'Anhörung vor der Maßnahme'],
        ['Ein neuer Lagerarbeiter soll eingestellt werden.', 'Zustimmungsverweigerungsrecht (Mitwirkung)'],
        ['Die Spedition plant den Personalbedarf für das nächste Jahr.', 'Unterrichtung (Information)']
      ],
      hints: ['§ 87 BetrVG nennt Fragen, bei denen der Betriebsrat zustimmen muss.', 'Bei Kündigungen schreibt § 102 BetrVG die Anhörung vor.'],
      solution: 'Urlaubsplan → **Mitbestimmung** (§ 87 Abs. 1 Nr. 5). Kündigung → **Anhörung** (§ 102; ohne sie unwirksam). Einstellung → **Zustimmungsverweigerungsrecht** aus bestimmten Gründen (§ 99; gilt in Unternehmen mit in der Regel mehr als 20 wahlberechtigten Arbeitnehmern). Personalplanung → **Unterrichtung und Beratung** (§ 92).'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a4', type: 'mc', difficulty: 2, points: 3,
      q: 'Wer ist bei der Wahl zur **Jugend- und Auszubildendenvertretung wählbar**? (Mehrfachauswahl)',
      options: [
        'die 19-jährige Auszubildende Leonie',
        'der 24-jährige Disponent Max (ausgelernt)',
        'der 28-jährige Umschüler Jens in Berufsausbildung',
        'die 22-jährige Betriebsratsvorsitzende',
        'der 26-jährige Lagerist Finn (ausgelernt)'
      ],
      correct: [0, 1, 2],
      hints: ['Altersgrenze für Nicht-Azubis: das 25. Lebensjahr darf noch nicht vollendet sein.', 'Wer schon im Betriebsrat sitzt, kann nicht in die JAV gewählt werden.'],
      solution: 'Richtig sind A, B und C. Wählbar sind Arbeitnehmer **unter 25 Jahren** (Leonie, Max) sowie **Auszubildende unabhängig vom Alter** (Jens). **Betriebsratsmitglieder** sind nicht wählbar (§ 61 Abs. 2 BetrVG). Finn ist 26 und kein Auszubildender mehr.'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a5', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Der Betriebsrat wird alle [[4|vier]] Jahre gewählt, die JAV alle [[2|zwei]] Jahre. Eine Vereinbarung zwischen Arbeitgeber und Betriebsrat heißt [[Betriebsvereinbarung]]. Einen Tarifvertrag schließen eine [[Gewerkschaft]] und ein Arbeitgeberverband. Das Recht der Tarifparteien, ohne den Staat zu verhandeln, heißt [[Tarifautonomie]].',
      hints: ['Die JAV-Amtszeit ist halb so lang wie die des Betriebsrats.', 'Art. 9 Abs. 3 GG.'],
      solution: 'Betriebsrat **4 Jahre** (§ 13 BetrVG), JAV **2 Jahre** (§ 64). Arbeitgeber + Betriebsrat → **Betriebsvereinbarung** (§ 77). Tarifvertrag: **Gewerkschaft** + Arbeitgeberverband. Selbstständige Regelung ohne Staat = **Tarifautonomie**.'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a6', type: 'order', difficulty: 2, points: 8,
      q: 'Bringe die Schritte einer Tarifauseinandersetzung im Speditionsgewerbe in die richtige Reihenfolge.',
      items: [
        'Der Entgelttarifvertrag läuft aus – die Friedenspflicht endet.',
        'Die Gewerkschaft stellt Forderungen, die Tarifparteien verhandeln.',
        'Die Verhandlungen werden für gescheitert erklärt.',
        'Ein Schlichtungsverfahren bleibt ohne Ergebnis.',
        'Urabstimmung der Gewerkschaftsmitglieder über einen Streik',
        'Streik; die Arbeitgeber antworten mit Aussperrung.',
        'Einigung in neuen Verhandlungen und zweite Urabstimmung',
        'Der neue Tarifvertrag tritt in Kraft – es herrscht wieder Friedenspflicht.'
      ],
      hints: ['Ohne Ende der Friedenspflicht kein Arbeitskampf.', 'Vor einem unbefristeten Streik stimmen die Mitglieder ab; nach der Einigung noch einmal.'],
      solution: 'Ende Friedenspflicht → Forderungen/Verhandlungen → Scheitern → Schlichtung → **Urabstimmung** → **Streik/Aussperrung** → Einigung + **zweite Urabstimmung** → neuer Tarifvertrag mit **Friedenspflicht**. Warnstreiks sind bereits während der Verhandlungen nach Ende der Friedenspflicht möglich.'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a7', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne die Begriffe des Tarifrechts der passenden Erklärung zu.',
      pairs: [
        ['Manteltarifvertrag', 'regelt Arbeitszeit, Urlaub und Zuschläge, meist mehrjährig'],
        ['Entgelttarifvertrag', 'regelt die Höhe von Löhnen, Gehältern und Ausbildungsvergütungen'],
        ['Günstigkeitsprinzip', 'Abweichung vom Tarifvertrag nur zugunsten des Arbeitnehmers'],
        ['Allgemeinverbindlichkeit', 'Tarifvertrag gilt auch für nicht tarifgebundene Betriebe der Branche'],
        ['Nachwirkung', 'Tarifnormen gelten nach Ablauf weiter, bis sie ersetzt werden']
      ],
      hints: ['§ 4 Abs. 3 und Abs. 5 TVG, § 5 TVG.', 'Mantel = Rahmen, Entgelt = Geld.'],
      solution: '**Manteltarifvertrag** = allgemeine Arbeitsbedingungen; **Entgelttarifvertrag** = Geldbeträge; **Günstigkeitsprinzip** (§ 4 Abs. 3 TVG); **Allgemeinverbindlichkeit** (§ 5 TVG, Erklärung durch das BMAS); **Nachwirkung** (§ 4 Abs. 5 TVG).'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a8', type: 'mc', difficulty: 3, points: 1,
      q: 'Ein tarifgebundener Speditionskaufmann vereinbart mit seinem Arbeitgeber 26 Urlaubstage. Der Manteltarifvertrag sieht 30 Tage vor, eine Öffnungsklausel gibt es nicht. Wie viele Urlaubstage stehen ihm zu?',
      options: [
        '26 Tage, weil der Arbeitsvertrag später abgeschlossen wurde',
        '26 Tage, weil beide Seiten freiwillig unterschrieben haben',
        '30 Tage, weil vom Tarifvertrag nur zugunsten des Arbeitnehmers abgewichen werden darf',
        '28 Tage als Mittelwert'
      ],
      correct: [2],
      hints: ['Tarifnormen wirken unmittelbar und zwingend.', 'Denke an § 4 Abs. 3 TVG.'],
      solution: 'Richtig ist C. Bei beiderseitiger Tarifbindung gelten die Tarifnormen **unmittelbar und zwingend** (§ 4 Abs. 1 TVG). Nach dem **Günstigkeitsprinzip** (§ 4 Abs. 3 TVG) ist eine Abweichung nur zulässig, wenn sie den Arbeitnehmer **besser** stellt. 26 Tage sind schlechter – es gelten **30 Tage**.'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Die Spedition möchte in allen Lkw ein Telematiksystem einführen, das Standort, Fahrzeiten und Fahrverhalten der Fahrer aufzeichnet. Die JAV-Vertreterin fragt dich, ob der Betriebsrat dabei mitreden kann. Begründe deine Antwort.',
      model: 'Ja. Die Einführung und Anwendung technischer Einrichtungen, die dazu bestimmt sind, das Verhalten oder die Leistung der Arbeitnehmer zu überwachen, ist nach § 87 Abs. 1 Nr. 6 BetrVG mitbestimmungspflichtig. Das Telematiksystem zeichnet Fahrverhalten und Fahrzeiten auf und eignet sich damit zur Überwachung. Ohne Zustimmung des Betriebsrats darf es nicht eingeführt werden; einigen sich beide Seiten nicht, entscheidet die Einigungsstelle. In der Regel wird eine Betriebsvereinbarung geschlossen.',
      criteria: [
        { text: 'nennt Mitbestimmungsrecht bzw. Zustimmung', keywords: ['Mitbestimmung|Zustimmung|zustimmen'], points: 1 },
        { text: 'nennt § 87 BetrVG oder technische Überwachung', keywords: ['87|Überwachung|technische Einrichtung'], points: 1 },
        { text: 'nennt Einigungsstelle oder Betriebsvereinbarung', keywords: ['Einigungsstelle|Betriebsvereinbarung'], points: 1 }
      ],
      hints: ['Suche in § 87 Abs. 1 BetrVG nach technischen Einrichtungen.', 'Was passiert, wenn Arbeitgeber und Betriebsrat sich nicht einigen?'],
      solution: '**Mitbestimmungsrecht** nach **§ 87 Abs. 1 Nr. 6 BetrVG** (technische Einrichtungen zur Verhaltens- oder Leistungskontrolle). Ohne Zustimmung keine Einführung; bei Streit entscheidet die **Einigungsstelle** (§ 87 Abs. 2). Üblich ist eine **Betriebsvereinbarung**, die z. B. regelt, wer die Daten wann auswerten darf.'
    },
    {
      id: 'wiso-mitbestimmung-tarif-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Ärger um Schichtzeiten und Tarif bei der Homburger Umschlag GmbH',
      intro: `Die Homburger Umschlag GmbH (180 Arbeitnehmer, Betriebsrat vorhanden, Mitglied im Arbeitgeberverband) will ab sofort die Spätschicht um eine Stunde verlängern, um mehr Sendungen umzuschlagen. Gleichzeitig verhandeln Gewerkschaft und Arbeitgeberverband über einen neuen Entgelttarifvertrag; der alte ist seit vier Wochen ausgelaufen. Einige Lagerarbeiter wollen spontan, ohne Aufruf der Gewerkschaft, die Arbeit niederlegen.`,
      hints: ['Trenne betriebliche Ebene (Betriebsrat) und Tarifebene (Gewerkschaft).', 'Nur Gewerkschaften können rechtmäßig zum Streik aufrufen.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'wiso-mitbestimmung-tarif-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen zur Verlängerung der Spätschicht sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Geschäftsführung braucht die Zustimmung des Betriebsrats.',
            'Kommt keine Einigung zustande, entscheidet die Einigungsstelle.',
            'Es genügt, den Betriebsrat nachträglich zu informieren.',
            'Über Schichtzeiten entscheidet allein die Gewerkschaft.'
          ],
          correct: [0, 1],
          hints: ['§ 87 Abs. 1 Nr. 2 und 3 BetrVG.', 'Die Gewerkschaft ist für die Tarifebene zuständig.'],
          solution: 'Richtig sind A und B. Lage der Arbeitszeit und vorübergehende Verlängerung sind **mitbestimmungspflichtig** (§ 87 Abs. 1 Nr. 2 und 3 BetrVG). Bei Streit entscheidet die **Einigungsstelle** (§ 87 Abs. 2). Eine nachträgliche Information reicht nicht; die Gewerkschaft ist für die betriebliche Schichtplanung nicht zuständig.'
        },
        {
          id: 'wiso-mitbestimmung-tarif-a10-2', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Aussagen zur Tarifsituation sind richtig? (Mehrfachauswahl)',
          options: [
            'Weil der alte Tarifvertrag ausgelaufen ist, gilt keine Friedenspflicht mehr für die Entgelte.',
            'Ein von der Gewerkschaft organisierter Warnstreik wäre grundsätzlich zulässig.',
            'Eine spontane Arbeitsniederlegung ohne Gewerkschaft ist ein rechtmäßiger Streik.',
            'Bis zum neuen Tarifvertrag erhalten die Beschäftigten kein Entgelt mehr.'
          ],
          correct: [0, 1],
          hints: ['Wann endet die Friedenspflicht?', 'Denke an die Nachwirkung nach § 4 Abs. 5 TVG.'],
          solution: 'Richtig sind A und B. Mit dem Ende des Tarifvertrags endet die **Friedenspflicht**; gewerkschaftlich getragene **Warnstreiks** sind möglich. Ein „wilder Streik“ ohne Gewerkschaft ist rechtswidrig und kann arbeitsrechtliche Folgen haben. Die alten Tarifregeln **wirken nach** (§ 4 Abs. 5 TVG) – das Entgelt wird weitergezahlt.'
        },
        {
          id: 'wiso-mitbestimmung-tarif-a10-3', type: 'match', difficulty: 2, points: 2,
          q: 'Ordne zu, wer jeweils die Vereinbarung abschließt.',
          pairs: [
            ['Betriebsvereinbarung über Schichtzeiten', 'Arbeitgeber und Betriebsrat'],
            ['neuer Entgelttarifvertrag', 'Gewerkschaft und Arbeitgeberverband']
          ],
          hints: ['Betriebliche Ebene und überbetriebliche Ebene.', '§ 77 BetrVG und TVG.'],
          solution: '**Betriebsvereinbarung** (§ 77 BetrVG): Arbeitgeber + Betriebsrat. **Tarifvertrag**: Gewerkschaft + Arbeitgeberverband (Tarifautonomie, Art. 9 Abs. 3 GG).'
        }
      ]
    },
    {
      id: 'wiso-mitbestimmung-tarif-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Saar Logistik AG hat 2.600 Arbeitnehmer. Wie ist ihr Aufsichtsrat zusammengesetzt?',
      options: [
        'nur Vertreter der Anteilseigner',
        'ein Drittel Arbeitnehmervertreter (Drittelbeteiligungsgesetz)',
        'je zur Hälfte Vertreter der Anteilseigner und der Arbeitnehmer (Mitbestimmungsgesetz)',
        'nur Arbeitnehmervertreter'
      ],
      correct: [2],
      hints: ['Die Grenze für das Mitbestimmungsgesetz liegt bei mehr als 2.000 Arbeitnehmern.', 'Das Drittelbeteiligungsgesetz gilt ab mehr als 500 Arbeitnehmern, wenn das MitbestG nicht greift.'],
      solution: 'Richtig ist C. Bei in der Regel **mehr als 2.000 Arbeitnehmern** gilt das **Mitbestimmungsgesetz** (§ 1 MitbestG): Der Aufsichtsrat ist **paritätisch** besetzt. Bei Stimmengleichheit gibt die Stimme des Aufsichtsratsvorsitzenden (Anteilseignerseite) den Ausschlag. Das Drittelbeteiligungsgesetz gilt für 501 bis 2.000 Arbeitnehmer.'
    }
  ],
  quiz: ['wiso-mitbestimmung-tarif-a1', 'wiso-mitbestimmung-tarif-a3', 'wiso-mitbestimmung-tarif-a4', 'wiso-mitbestimmung-tarif-a6', 'wiso-mitbestimmung-tarif-a8'],
  sources: [
    { id: 'saar-wiso-2016', ref: 'W3' },
    { id: 'kmk-rlp-2004', ref: 'LF 1/LF 2' },
    { title: 'Betriebsverfassungsgesetz § 1 Errichtung von Betriebsräten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__1.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 7 Wahlberechtigung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__7.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 8 Wählbarkeit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__8.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 9 Zahl der Betriebsratsmitglieder', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__9.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 13 Zeitpunkt der Betriebsratswahlen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__13.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 60 Errichtung und Aufgabe der JAV', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__60.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 61 Wahlberechtigung und Wählbarkeit (JAV)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__61.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 62 Zahl der Jugend- und Auszubildendenvertreter', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__62.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 64 Zeitpunkt der Wahlen und Amtszeit (JAV)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__64.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 77 Durchführung gemeinsamer Beschlüsse, Betriebsvereinbarungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__77.html', asOf: '2026' },
    { title: 'Betriebsverfassungsgesetz § 87 Mitbestimmungsrechte', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/betrvg/__87.html', asOf: '2026' },
    { title: 'Drittelbeteiligungsgesetz § 1 Erfasste Unternehmen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/drittelbg/__1.html', asOf: '2026' },
    { title: 'Mitbestimmungsgesetz § 1 Erfasste Unternehmen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/mitbestg/__1.html', asOf: '2026' },
    { title: 'Tarifvertragsgesetz § 4 Wirkung der Rechtsnormen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/tvg/__4.html', asOf: '2026' },
    { title: 'Tarifvertragsgesetz § 5 Allgemeinverbindlichkeit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/tvg/__5.html', asOf: '2026' },
    { title: 'Grundgesetz Art. 9 Vereinigungsfreiheit, Koalitionsfreiheit', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/gg/art_9.html', asOf: '2026' }
  ],
  links: ['lf02-arbeitsrecht', 'wiso-ausbildungsvertrag']
};
