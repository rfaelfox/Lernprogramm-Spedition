export default {
  id: 'wiso-ausbildungsvertrag',
  area: 'WISO',
  topic: 'wiso-w1-ausbildung',
  title: 'Duales System und Berufsausbildungsvertrag',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026',
    note: 'Berufsbildungsgesetz (BBiG) in der Fassung Stand 2026: §§ 10–26 BBiG. Mindestausbildungsvergütung nach § 17 Abs. 2 BBiG für einen Ausbildungsbeginn im Jahr 2026: 724 € (1. Jahr), 854 € (2. Jahr), 977 € (3. Jahr), 1.014 € (4. Jahr), bekannt gemacht im BGBl. I 2025 Nr. 235. Für einen Ausbildungsbeginn 2027 bekannt gemacht (BGBl. I 2026 Nr. 287): 764 €, 902 €, 1.031 €, 1.070 €. Jugendarbeitsschutzgesetz (JArbSchG) Stand 2026.'
  },
  goals: [
    'Ich kann das duale System der Berufsausbildung mit seinen zwei Lernorten erklären.',
    'Ich kann die Mindestinhalte eines Berufsausbildungsvertrags nach § 11 BBiG nennen.',
    'Ich kann die Pflichten von Auszubildenden (§ 13 BBiG) und Ausbildenden (§ 14 BBiG) unterscheiden.',
    'Ich kann die Regeln zu Probezeit (§ 20) und Kündigung (§ 22) auf einen Fall anwenden.',
    'Ich kann die Mindestausbildungsvergütung nach § 17 BBiG für ein Beginnjahr berechnen.',
    'Ich kann erklären, wann ein Ausbildungsverhältnis endet (§ 21 BBiG).',
    'Ich kann die wichtigsten Schutzregeln des Jugendarbeitsschutzgesetzes nennen.'
  ],
  simple: `# Zwei Lernorte: das duale System

In Deutschland lernst du deinen Beruf an **zwei Orten gleichzeitig**:

1. **Im Ausbildungsbetrieb** (z. B. in einer Spedition): Hier lernst du die Praxis, etwa Aufträge annehmen, Touren disponieren oder Frachtpapiere erstellen. Grundlage ist die **Ausbildungsordnung** mit dem Ausbildungsrahmenplan.
2. **In der Berufsschule**: Hier lernst du die Theorie in Lernfeldern und allgemeine Fächer wie WiSo. Grundlage ist der **Rahmenlehrplan** der Kultusministerkonferenz bzw. der Lehrplan des Landes.

Die **Industrie- und Handelskammer (IHK)** ist die *zuständige Stelle*: Sie überwacht die Ausbildung, führt das Verzeichnis der Ausbildungsverhältnisse und nimmt die Prüfungen ab.

# Der Ausbildungsvertrag

Bevor die Ausbildung beginnt, schließen **Ausbildender** (der Betrieb) und **Auszubildender** einen Berufsausbildungsvertrag. Das wichtigste Gesetz dafür ist das **Berufsbildungsgesetz (BBiG)**.

- Der wesentliche Inhalt muss **vor Beginn der Ausbildung in Textform** festgehalten werden (§ 11).
- Am Anfang steht die **Probezeit**: mindestens 1, höchstens 4 Monate (§ 20).
- Du bekommst eine **angemessene Vergütung**, mindestens die gesetzliche Mindestvergütung (§ 17).
- Beide Seiten haben **Pflichten**: Du musst lernen und mitarbeiten (§ 13), der Betrieb muss dich ausbilden (§ 14).
- Die Ausbildung endet normalerweise mit **Ablauf der Ausbildungszeit** oder mit der **bestandenen Abschlussprüfung** (§ 21).

# Bist du unter 18?

Dann schützt dich zusätzlich das **Jugendarbeitsschutzgesetz**: höchstens 8 Stunden am Tag und 40 Stunden in der Woche, mehr Urlaub und eine ärztliche Untersuchung vor dem Start.`,
  deep: `# Rechtsgrundlagen im Überblick

| Bereich | Regelung |
|---|---|
| Betriebliche Ausbildung | Berufsbildungsgesetz (BBiG), Ausbildungsordnung (für diesen Beruf: SpedKfmAusbV) |
| Berufsschule | Schulgesetz des Landes, KMK-Rahmenlehrplan, Landeslehrplan |
| Schutz Minderjähriger | Jugendarbeitsschutzgesetz (JArbSchG) |
| Ergänzend | Tarifvertrag, Betriebsvereinbarungen, allgemeines Arbeitsrecht |

# § 10 und § 11 BBiG: Vertrag und Vertragsniederschrift

Der Vertrag selbst ist **formfrei** wirksam (auch mündlich). Der Ausbildende muss aber den **wesentlichen Inhalt unverzüglich nach Abschluss, spätestens vor Beginn der Ausbildung, in Textform** festhalten und dem Auszubildenden (bei Minderjährigen auch den gesetzlichen Vertretern) aushändigen. Mindestens aufzunehmen sind (§ 11 Abs. 1):

1. Namen und Anschriften der Vertragsparteien (bei Minderjährigen auch der gesetzlichen Vertreter)
2. Art, sachliche und zeitliche Gliederung und Ziel der Ausbildung (Ausbildungsberuf)
3. Beginn und Dauer der Ausbildung
4. Ausbildungsstätte und Ausbildungsmaßnahmen außerhalb der Ausbildungsstätte
5. Dauer der regelmäßigen täglichen Ausbildungszeit
6. Dauer der Probezeit
7. Zahlung und Höhe der Vergütung
8. Vergütung oder Ausgleich von Überstunden
9. Dauer des Urlaubs
10. Voraussetzungen, unter denen der Vertrag gekündigt werden kann
11. Hinweis auf anzuwendende Tarifverträge, Betriebs- oder Dienstvereinbarungen
12. Form des Ausbildungsnachweises (schriftlich oder elektronisch)

Danach beantragt der Betrieb die Eintragung in das **Verzeichnis der Berufsausbildungsverhältnisse** bei der IHK (§§ 34–36 BBiG).

> **Nichtige Vereinbarungen (§ 12 BBiG):** Unwirksam sind z. B. eine Verpflichtung, für die Ausbildung zu bezahlen, Vertragsstrafen oder eine Pflicht, nach der Ausbildung im Betrieb bleiben zu müssen (Ausnahme: Vereinbarung in den letzten sechs Monaten der Ausbildung).

# § 13 BBiG: Pflichten der Auszubildenden

Auszubildende müssen sich bemühen, die berufliche Handlungsfähigkeit zu erwerben (**Lernpflicht**). Insbesondere müssen sie:
- die übertragenen Aufgaben **sorgfältig ausführen**,
- an **Berufsschule, Prüfungen** und anderen Ausbildungsmaßnahmen teilnehmen,
- **Weisungen** von Ausbildenden und Ausbildern befolgen,
- die **Ordnung** der Ausbildungsstätte beachten,
- Werkzeug, Maschinen und Einrichtungen **pfleglich behandeln**,
- über **Betriebs- und Geschäftsgeheimnisse** Stillschweigen bewahren,
- einen **Ausbildungsnachweis** (Berichtsheft) führen.

# § 14 BBiG: Pflichten der Ausbildenden

Ausbildende müssen
- die Ausbildung so durchführen, dass das **Ausbildungsziel in der vorgesehenen Zeit** erreicht werden kann,
- selbst ausbilden oder einen geeigneten **Ausbilder** beauftragen,
- **Ausbildungsmittel kostenlos** zur Verfügung stellen (auch für Prüfungen),
- zum **Besuch der Berufsschule** anhalten und das Führen des Ausbildungsnachweises ermöglichen und kontrollieren,
- die Auszubildenden **charakterlich fördern** und vor Gefahren schützen,
- nur Aufgaben übertragen, die dem **Ausbildungszweck dienen** und den körperlichen Kräften angemessen sind.

Ergänzend: Freistellung für Berufsschule und Prüfungen (§ 15) und ein **Zeugnis** am Ende (§ 16).

# § 15 BBiG: Berufsschule

Der Betrieb muss für die Berufsschule freistellen. An **einem Berufsschultag pro Woche mit mehr als fünf Unterrichtsstunden zu je 45 Minuten** darf danach nicht mehr im Betrieb gearbeitet werden; dieser Tag wird mit der durchschnittlichen täglichen Ausbildungszeit angerechnet. Das gilt seit 2020 auch für volljährige Auszubildende.

# § 17 BBiG: Vergütung und Mindestvergütung

Die Vergütung muss **angemessen** sein und **mit jedem Ausbildungsjahr steigen**. Seit 2020 gibt es eine **Mindestausbildungsvergütung**. Maßgeblich ist das **Jahr des Ausbildungsbeginns**:

| Ausbildungsbeginn 2026 | Aufschlag | monatlich |
|---|---|---:|
| 1. Ausbildungsjahr | Grundbetrag | 724 € |
| 2. Ausbildungsjahr | + 18 % | 854 € |
| 3. Ausbildungsjahr | + 35 % | 977 € |
| 4. Ausbildungsjahr | + 40 % | 1.014 € |

Der Grundbetrag wird jedes Jahr zum 1. Januar fortgeschrieben und vom Bundesministerium bis zum 1. November im Bundesgesetzblatt bekannt gemacht (für einen Beginn 2027: 724 € → **764 €**). Die Aufschläge werden auf ganze Euro gerundet.

Ausnahme: Gilt für den Betrieb ein **Tarifvertrag**, ist die tarifliche Vergütung angemessen, auch wenn sie unter der Mindestvergütung liegen sollte (§ 17 Abs. 3). Die Vergütung ist spätestens am **letzten Arbeitstag des Monats** zu zahlen (§ 18).

# § 20 BBiG: Probezeit

Das Ausbildungsverhältnis beginnt **immer** mit einer Probezeit von **mindestens einem Monat und höchstens vier Monaten**. Beide Seiten prüfen, ob die Ausbildung passt.

# § 22 BBiG: Kündigung

| Zeitpunkt | Wer? | Regel |
|---|---|---|
| **in der Probezeit** | beide Seiten | jederzeit, **ohne Frist** und **ohne Grund** |
| **nach der Probezeit** | beide Seiten | nur aus **wichtigem Grund** ohne Kündigungsfrist (fristlos) |
| **nach der Probezeit** | nur Auszubildende | mit einer Frist von **vier Wochen**, wenn sie die Ausbildung **aufgeben** oder einen **anderen Beruf** erlernen wollen |

- Die Kündigung muss **schriftlich** erfolgen, nach der Probezeit **mit Angabe der Gründe**.
- Eine Kündigung aus wichtigem Grund ist unwirksam, wenn die Tatsachen dem Kündigenden **länger als zwei Wochen** bekannt sind.
- Ein **Aufhebungsvertrag** im gegenseitigen Einvernehmen ist jederzeit möglich.

# § 21 BBiG: Ende der Ausbildung

- **Regelfall:** mit **Ablauf der Ausbildungszeit**.
- **Prüfung vorher bestanden:** mit **Bekanntgabe des Ergebnisses** durch den Prüfungsausschuss.
- **Prüfung nicht bestanden:** Auf **Verlangen des Auszubildenden** verlängert sich die Ausbildung bis zur nächstmöglichen Wiederholungsprüfung, **höchstens um ein Jahr**.
- Wird jemand nach dem Ende **weiterbeschäftigt**, ohne dass etwas vereinbart wurde, gilt ein **unbefristetes Arbeitsverhältnis** als begründet (§ 24).

# Jugendarbeitsschutz (JArbSchG) – kurz

Gilt für Beschäftigte **unter 18 Jahren**:

| Regel | Inhalt |
|---|---|
| Arbeitszeit | höchstens **8 Stunden täglich**, **40 Stunden wöchentlich**, Fünf-Tage-Woche |
| Ruhepausen | 30 Minuten bei mehr als 4,5 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden |
| Freizeit | mindestens 12 Stunden zwischen zwei Arbeitstagen; grundsätzlich keine Arbeit zwischen 20 und 6 Uhr |
| Urlaub (Alter zu Beginn des Kalenderjahres) | unter 16: 30 Werktage, unter 17: 27 Werktage, unter 18: 25 Werktage |
| Berufsschule | keine Beschäftigung vor einem Unterricht, der vor 9 Uhr beginnt |
| Gesundheit | **Erstuntersuchung** vor Beginn der Beschäftigung, **Nachuntersuchung** nach einem Jahr |`,
  terms: [
    { term: 'Duales System', def: 'Berufsausbildung an zwei Lernorten: im Ausbildungsbetrieb (Praxis) und in der Berufsschule (Theorie).' },
    { term: 'Ausbildender', def: 'Wer einen anderen zur Berufsausbildung einstellt, also der Ausbildungsbetrieb als Vertragspartner.' },
    { term: 'Ausbilder', def: 'Persönlich und fachlich geeignete Person, die die Ausbildung im Auftrag des Ausbildenden tatsächlich durchführt.' },
    { term: 'Zuständige Stelle', def: 'Für kaufmännische Berufe die IHK: überwacht die Ausbildung, führt das Verzeichnis der Ausbildungsverhältnisse und nimmt die Prüfungen ab.' },
    { term: 'Vertragsniederschrift', def: 'Festhalten des wesentlichen Vertragsinhalts in Textform, spätestens vor Beginn der Ausbildung (§ 11 BBiG).' },
    { term: 'Probezeit', def: 'Erster Abschnitt der Ausbildung, mindestens 1, höchstens 4 Monate (§ 20 BBiG); Kündigung jederzeit ohne Frist möglich.' },
    { term: 'Mindestausbildungsvergütung', def: 'Gesetzliche Untergrenze für die monatliche Vergütung nach § 17 Abs. 2 BBiG; maßgeblich ist das Jahr des Ausbildungsbeginns.' },
    { term: 'Wichtiger Grund', def: 'Schwerwiegender Anlass, der die Fortsetzung der Ausbildung unzumutbar macht (z. B. Diebstahl, beharrliches Fehlen); erlaubt nach der Probezeit eine fristlose Kündigung.' },
    { term: 'Ausbildungsnachweis', def: 'Berichtsheft, schriftlich oder elektronisch; Pflicht des Auszubildenden und Zulassungsvoraussetzung für die Abschlussprüfung.' },
    { term: 'Aufhebungsvertrag', def: 'Einvernehmliche Beendigung des Ausbildungsverhältnisses durch beide Vertragsparteien, jederzeit möglich.' }
  ],
  example: `# Praxisbeispiel: Ausbildungsstart bei der Saar-Mosel Spedition GmbH (Bezugsjahr 2026)

Jonas (17) beginnt am **1. August 2026** seine Ausbildung zum Kaufmann für Spedition und Logistikdienstleistung bei der Saar-Mosel Spedition GmbH in Saarbrücken. Die Ausbildungsdauer beträgt drei Jahre.

- **Vertrag:** Im Mai 2026 unterschreiben die Spedition, Jonas und – weil er minderjährig ist – seine Eltern den Vertrag. Die Spedition händigt die Vertragsniederschrift aus und beantragt die Eintragung bei der IHK Saarland.
- **Probezeit:** vereinbart sind 3 Monate (zulässig, da zwischen 1 und 4 Monaten).
- **Vergütung:** Die Spedition zahlt laut Vertrag 1.050 € im ersten Jahr. Die Mindestvergütung für einen Beginn 2026 (724 €) ist eingehalten.
- **Jugendarbeitsschutz:** Vor dem Start legt Jonas die Bescheinigung über die Erstuntersuchung vor. Er arbeitet höchstens 8 Stunden am Tag. Montags hat er sieben Unterrichtsstunden Berufsschule und muss danach nicht mehr in den Betrieb.
- **Pflichten im Alltag:** Jonas führt sein Berichtsheft elektronisch; seine Ausbilderin prüft es monatlich. Sendungsdaten von Kunden behandelt er vertraulich (Schweigepflicht nach § 13).
- **Ende:** Besteht Jonas die Abschlussprüfung im Juni 2029, endet die Ausbildung mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss – auch wenn der Vertrag bis zum 31. Juli 2029 läuft.`,
  rules: [
    'Probezeit: mindestens 1, höchstens 4 Monate – in dieser Zeit können beide Seiten jederzeit ohne Frist und ohne Grund schriftlich kündigen.',
    'Nach der Probezeit kann der Betrieb nur noch aus wichtigem Grund kündigen, schriftlich und mit Angabe der Gründe.',
    'Auszubildende können nach der Probezeit mit vier Wochen Frist kündigen, wenn sie die Ausbildung aufgeben oder einen anderen Beruf lernen wollen.',
    'Die Mindestausbildungsvergütung richtet sich nach dem Jahr des Ausbildungsbeginns: 2. Jahr + 18 %, 3. Jahr + 35 %, 4. Jahr + 40 %.',
    'Ausbildungsmittel sind kostenlos – eine Zahlung für die Ausbildung darf nicht verlangt werden.',
    'Wer die Abschlussprüfung vorzeitig besteht, ist mit Bekanntgabe des Ergebnisses fertig, nicht erst am Vertragsende.'
  ],
  summary: `- **Duales System:** Betrieb (Ausbildungsordnung) + Berufsschule (Rahmenlehrplan); die IHK überwacht und prüft.
- **§ 11 BBiG:** Vertragsinhalt vor Beginn in Textform, zwölf Mindestangaben.
- **§ 13 / § 14 BBiG:** Lernpflicht, Sorgfalt, Weisungen, Schweigepflicht, Berichtsheft – gegenüber Ausbildungspflicht, kostenlosen Ausbildungsmitteln, Freistellung, Fürsorge.
- **§ 17 BBiG:** angemessene, jährlich steigende Vergütung; Mindestvergütung für Beginn 2026: 724 / 854 / 977 / 1.014 €.
- **§ 20 BBiG:** Probezeit 1–4 Monate.
- **§ 22 BBiG:** in der Probezeit jederzeit ohne Frist; danach nur aus wichtigem Grund oder (nur Azubi) mit 4 Wochen Frist bei Berufsaufgabe/-wechsel; immer schriftlich.
- **§ 21 BBiG:** Ende mit Ablauf der Zeit oder Bekanntgabe des Prüfungsergebnisses; bei Nichtbestehen Verlängerung auf Verlangen um höchstens ein Jahr.
- **JArbSchG:** unter 18 höchstens 8 Std./Tag und 40 Std./Woche, Erstuntersuchung, mehr Urlaub.`,
  mistakes: [
    { wrong: 'Ohne unterschriebenen Vertrag gibt es keine Ausbildung.', right: 'Der Vertrag ist auch mündlich wirksam. Der Betrieb muss aber den wesentlichen Inhalt vor Beginn in Textform festhalten und aushändigen (§ 11 BBiG).' },
    { wrong: 'Die Probezeit darf bis zu sechs Monate dauern, wie bei normalen Arbeitsverträgen.', right: 'In der Berufsausbildung beträgt die Probezeit mindestens einen und höchstens vier Monate (§ 20 BBiG).' },
    { wrong: 'Nach der Probezeit kann der Betrieb mit vier Wochen Frist kündigen.', right: 'Die Vier-Wochen-Kündigung steht nur Auszubildenden zu (Berufsaufgabe oder -wechsel). Der Betrieb kann nach der Probezeit nur aus wichtigem Grund kündigen.' },
    { wrong: 'Die Mindestvergütung im 2. Jahr ist der Betrag, der im aktuellen Kalenderjahr für Neuanfänger gilt.', right: 'Maßgeblich ist das Jahr des Ausbildungsbeginns. Wer 2026 begonnen hat, bekommt im 2. Jahr mindestens 724 € + 18 % = 854 €.' },
    { wrong: 'Wer die Prüfung im Juni besteht, ist erst mit dem Vertragsende im Juli fertig.', right: 'Das Ausbildungsverhältnis endet mit der Bekanntgabe des Ergebnisses durch den Prüfungsausschuss (§ 21 Abs. 2 BBiG).' },
    { wrong: 'Eine Kündigung per WhatsApp reicht.', right: 'Die Kündigung muss schriftlich erfolgen (§ 22 Abs. 3 BBiG), also mit eigenhändiger Unterschrift auf Papier.' }
  ],
  flashcards: [
    { q: 'Welche zwei Lernorte hat das duale System?', a: 'Ausbildungsbetrieb und Berufsschule.' },
    { q: 'Wie lange darf die Probezeit nach § 20 BBiG dauern?', a: 'Mindestens einen Monat, höchstens vier Monate.' },
    { q: 'Bis wann muss der Vertragsinhalt in Textform vorliegen?', a: 'Unverzüglich nach Vertragsschluss, spätestens vor Beginn der Ausbildung (§ 11 BBiG).' },
    { q: 'Nenne vier Pflichten von Auszubildenden (§ 13 BBiG).', a: 'Z. B. Lernpflicht, Sorgfaltspflicht, Teilnahme an Berufsschule und Prüfungen, Weisungen befolgen, Schweigepflicht, Berichtsheft führen, Einrichtungen pfleglich behandeln.' },
    { q: 'Nenne vier Pflichten von Ausbildenden (§ 14 BBiG).', a: 'Z. B. Ausbildungspflicht, Ausbilder bestellen, kostenlose Ausbildungsmittel, zum Berufsschulbesuch anhalten, Berichtsheft ermöglichen und prüfen, charakterliche Förderung, nur ausbildungsdienliche Aufgaben.' },
    { q: 'Mindestausbildungsvergütung im 1. Jahr bei Beginn 2026?', a: '724 € monatlich (§ 17 Abs. 2 BBiG, BGBl. I 2025 Nr. 235).' },
    { q: 'Um wie viel Prozent steigt die Mindestvergütung im 2., 3. und 4. Jahr?', a: '+ 18 %, + 35 % und + 40 % auf den Betrag des Beginnjahres.' },
    { q: 'Wie kann nach der Probezeit gekündigt werden?', a: 'Von beiden Seiten aus wichtigem Grund ohne Frist; vom Azubi zusätzlich mit 4 Wochen Frist bei Berufsaufgabe oder Berufswechsel. Schriftlich und mit Gründen.' },
    { q: 'Wann endet die Ausbildung bei vorzeitig bestandener Prüfung?', a: 'Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss (§ 21 Abs. 2 BBiG).' },
    { q: 'Was gilt bei nicht bestandener Abschlussprüfung?', a: 'Auf Verlangen des Azubis verlängert sich die Ausbildung bis zur nächsten Wiederholungsprüfung, höchstens um ein Jahr.' },
    { q: 'Wie viele Stunden dürfen Jugendliche höchstens arbeiten?', a: '8 Stunden täglich und 40 Stunden wöchentlich (JArbSchG).' },
    { q: 'Welcher Berufsschultag ersetzt den Arbeitstag ganz?', a: 'Einmal pro Woche ein Tag mit mehr als fünf Unterrichtsstunden zu je 45 Minuten (§ 15 BBiG).' }
  ],
  tasks: [
    {
      id: 'wiso-ausbildungsvertrag-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Was versteht man unter dem **dualen System** der Berufsausbildung?',
      options: [
        'Die Ausbildung findet abwechselnd in zwei verschiedenen Betrieben statt.',
        'Die Ausbildung findet in Ausbildungsbetrieb und Berufsschule statt.',
        'Die Ausbildung besteht aus einer Zwischen- und einer Abschlussprüfung.',
        'Die Ausbildung wird von Arbeitgeber und Arbeitnehmer gemeinsam bezahlt.'
      ],
      correct: [1],
      hints: ['„Dual“ bedeutet „zweifach“. Es geht um Lernorte.', 'Wo lernst du die Praxis, wo die Theorie?'],
      solution: 'Richtig ist B. Im dualen System lernt man an zwei Lernorten: im **Betrieb** (Praxis, Grundlage Ausbildungsordnung) und in der **Berufsschule** (Theorie, Grundlage Rahmenlehrplan).'
    },
    {
      id: 'wiso-ausbildungsvertrag-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Angaben gehören nach **§ 11 BBiG** mindestens in die Vertragsniederschrift? (Mehrfachauswahl)',
      options: [
        'Dauer der Probezeit',
        'Note des Schulabschlusses',
        'Dauer des Urlaubs',
        'Konfession der Auszubildenden',
        'Zahlung und Höhe der Vergütung',
        'Ausbildungsstätte und Maßnahmen außerhalb der Ausbildungsstätte'
      ],
      correct: [0, 2, 4, 5],
      hints: ['Gesucht sind Angaben zum Ablauf und zu den Bedingungen der Ausbildung.', 'Persönliche Merkmale wie Noten oder Religion haben im Vertrag nichts zu suchen.'],
      solution: 'Richtig sind **Probezeit, Urlaub, Vergütung und Ausbildungsstätte** (§ 11 Abs. 1 Nr. 4, 6, 7, 9 BBiG). Schulnoten und Konfession gehören nicht zu den Mindestangaben; eine Frage nach der Konfession wäre im Bewerbungsverfahren in der Regel sogar unzulässig.'
    },
    {
      id: 'wiso-ausbildungsvertrag-a3', type: 'match', difficulty: 1, points: 6,
      q: 'Ordne die Vorschriften des BBiG ihrem Inhalt zu.',
      pairs: [
        ['§ 11 BBiG', 'Vertragsniederschrift in Textform'],
        ['§ 13 BBiG', 'Pflichten der Auszubildenden'],
        ['§ 14 BBiG', 'Pflichten der Ausbildenden'],
        ['§ 17 BBiG', 'Vergütung und Mindestvergütung'],
        ['§ 20 BBiG', 'Probezeit'],
        ['§ 22 BBiG', 'Kündigung']
      ],
      hints: ['Die Pflichten stehen direkt hintereinander: erst die des Azubis, dann die des Betriebs.', 'Probezeit und Kündigung stehen weiter hinten, die Kündigung nach der Probezeit.'],
      solution: '§ 11 Vertragsniederschrift, § 13 Pflichten der Auszubildenden, § 14 Pflichten der Ausbildenden, § 17 Vergütung, § 20 Probezeit, § 22 Kündigung. (§ 21 regelt das Ende der Ausbildung.)'
    },
    {
      id: 'wiso-ausbildungsvertrag-a4', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Die Probezeit dauert mindestens [[einen|1|ein]] Monat und höchstens [[vier|4]] Monate. In der Probezeit kann das Ausbildungsverhältnis jederzeit ohne Einhalten einer [[Kündigungsfrist|Frist]] gekündigt werden. Nach der Probezeit kann der Betrieb nur noch aus einem [[wichtigen]] Grund kündigen. Die Kündigung muss immer [[schriftlich]] erfolgen.',
      hints: ['Die Probezeit steht in § 20 BBiG.', 'Für die Form der Kündigung reicht eine E-Mail nicht.'],
      solution: 'Probezeit **1 bis 4 Monate** (§ 20 BBiG); Kündigung in der Probezeit **ohne Kündigungsfrist**; danach durch den Betrieb nur aus **wichtigem** Grund; Form immer **schriftlich** (§ 22 BBiG).'
    },
    {
      id: 'wiso-ausbildungsvertrag-a5', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte eines Ausbildungsverhältnisses in die richtige Reihenfolge.',
      items: [
        'Betrieb und Bewerberin schließen den Ausbildungsvertrag ab.',
        'Der Betrieb hält den Vertragsinhalt in Textform fest und händigt ihn aus.',
        'Der Betrieb beantragt die Eintragung ins Verzeichnis bei der IHK.',
        'Die Ausbildung beginnt mit der Probezeit.',
        'Die Auszubildende nimmt an der Zwischenprüfung teil.',
        'Der Prüfungsausschuss gibt das Ergebnis der bestandenen Abschlussprüfung bekannt.'
      ],
      hints: ['Die Textform muss spätestens vor Beginn der Ausbildung vorliegen.', 'Die Zwischenprüfung liegt etwa in der Mitte der Ausbildung.'],
      solution: 'Vertragsschluss → Vertragsniederschrift (§ 11) → Eintragung bei der IHK (§ 36) → Beginn mit Probezeit (§ 20) → Zwischenprüfung → Bekanntgabe des Ergebnisses der Abschlussprüfung (Ende nach § 21 Abs. 2).'
    },
    {
      id: 'wiso-ausbildungsvertrag-a6', type: 'calc', difficulty: 2, points: 3,
      q: 'Mia beginnt ihre dreijährige Ausbildung am 1. September 2026. Ihr Betrieb ist nicht tarifgebunden. Berechne die **Mindestausbildungsvergütung** nach § 17 Abs. 2 BBiG für ihr 2. und 3. Ausbildungsjahr (Grundbetrag für Beginn 2026: 724 €; auf ganze Euro runden).',
      formula: 'Mindestvergütung Jahr n = Grundbetrag des Beginnjahres × (1 + Aufschlag)',
      fields: [
        { id: 'j2', label: 'Mindestvergütung 2. Ausbildungsjahr', unit: '€', answer: 854, tol: 0.5 },
        { id: 'j3', label: 'Mindestvergütung 3. Ausbildungsjahr', unit: '€', answer: 977, tol: 0.5 }
      ],
      hints: ['Der Aufschlag beträgt im 2. Jahr 18 %, im 3. Jahr 35 %.', 'Ausgangsbetrag ist immer der Wert des Beginnjahres 2026, nicht der Wert für spätere Neuanfänger.'],
      solution: `**Formel:** Mindestvergütung = Grundbetrag × (1 + Aufschlag)

- 2. Jahr: 724 € × 1,18 = 854,32 € → gerundet **854 €**
- 3. Jahr: 724 € × 1,35 = 977,40 € → gerundet **977 €**

Maßgeblich ist das Beginnjahr 2026, auch wenn Mias 2. Jahr erst 2027 beginnt. Der höhere Grundbetrag 2027 (764 €) gilt nur für Ausbildungen, die 2027 beginnen. Die Werte stimmen mit der Bekanntmachung im BGBl. I 2025 Nr. 235 überein.`
    },
    {
      id: 'wiso-ausbildungsvertrag-a7', type: 'mc', difficulty: 2, points: 2,
      q: 'Lukas ist im 2. Ausbildungsjahr. Er möchte die Ausbildung beenden, weil er eine Ausbildung zum Elektroniker beginnen will. Was gilt?',
      options: [
        'Er kann nicht kündigen, weil die Probezeit vorbei ist.',
        'Er kann fristlos ohne Begründung kündigen.',
        'Er kann schriftlich mit einer Frist von vier Wochen kündigen und muss den Grund angeben.',
        'Er muss die Kosten der bisherigen Ausbildung erstatten.'
      ],
      correct: [2],
      hints: ['§ 22 Abs. 2 Nr. 2 BBiG enthält ein Sonderrecht für Auszubildende.', 'Nach der Probezeit muss eine Kündigung begründet werden.'],
      solution: 'Richtig ist C. Nach § 22 Abs. 2 Nr. 2 BBiG kann der Auszubildende mit **vier Wochen Frist** kündigen, wenn er einen **anderen Beruf** erlernen will. Die Kündigung ist **schriftlich mit Angabe des Grundes** zu erklären (§ 22 Abs. 3). Eine Kostenerstattung wäre nach § 12 BBiG nichtig.'
    },
    {
      id: 'wiso-ausbildungsvertrag-a8', type: 'text', difficulty: 2, points: 4,
      q: 'Deine Ausbilderin lässt dich seit drei Wochen nur Kartons im Lager falten und verlangt, dass du deine Fachbücher für die Berufsschule selbst bezahlst und das Berichtsheft zu Hause schreibst. Prüfe mithilfe von **§ 14 BBiG**, welche Pflichten der Betrieb verletzt. Nenne mindestens drei.',
      model: 'Der Betrieb verletzt mehrere Pflichten aus § 14 BBiG: (1) Er darf nur Aufgaben übertragen, die dem Ausbildungszweck dienen; dauerhaftes Kartonfalten dient nicht der Ausbildung zum Speditionskaufmann. (2) Er muss so ausbilden, dass das Ausbildungsziel in der vorgesehenen Zeit erreicht wird. (3) Er muss die Gelegenheit geben, den Ausbildungsnachweis während der Ausbildungszeit zu führen. Zu den Fachbüchern: Kostenlos stellen muss der Betrieb die Ausbildungsmittel für die betriebliche Ausbildung und die Prüfungen; ob Schulbücher dazugehören, ist nicht eindeutig geregelt und sollte mit Betrieb, Schule oder IHK geklärt werden. Ansprechpartner bei Problemen sind Ausbildungsberater der IHK und die JAV bzw. der Betriebsrat.',
      criteria: [
        { text: 'nennt: nur Aufgaben, die dem Ausbildungszweck dienen', keywords: ['Ausbildungszweck|ausbildungsfremd|dient nicht'], points: 1 },
        { text: 'nennt: Ausbildungsziel in der vorgesehenen Zeit erreichen', keywords: ['Ausbildungsziel|Ziel'], points: 1 },
        { text: 'nennt: Berichtsheft während der Ausbildungszeit ermöglichen', keywords: ['Berichtsheft|Ausbildungsnachweis'], points: 1 },
        { text: 'nennt kostenlose Ausbildungsmittel und differenziert bei Schulbüchern oder nennt Ansprechpartner (IHK, JAV)', keywords: ['kostenlos|Ausbildungsmittel|IHK|JAV|Betriebsrat'], points: 1 }
      ],
      hints: ['Lies die Liste der Ausbilderpflichten in § 14 BBiG der Reihe nach durch.', 'Achte auf: Ausbildungsziel, Ausbildungsmittel, Berichtsheft, ausbildungsdienliche Aufgaben.'],
      solution: 'Verletzt sind vor allem: **ausbildungsfremde Tätigkeiten** (nur Aufgaben, die dem Ausbildungszweck dienen), die Pflicht, das **Ausbildungsziel** in der vorgesehenen Zeit zu erreichen, und die Pflicht, das **Berichtsheft während der Ausbildungszeit** zu ermöglichen. Ausbildungsmittel für Betrieb und Prüfung sind **kostenlos**; bei Schulbüchern ist die Rechtslage nicht eindeutig. Hilfe gibt es bei der **IHK (Ausbildungsberatung)** und der **JAV/dem Betriebsrat**.'
    },
    {
      id: 'wiso-ausbildungsvertrag-a9', type: 'mc', difficulty: 1, points: 2,
      q: 'Welche Aussagen zum **Jugendarbeitsschutzgesetz** sind richtig? (Mehrfachauswahl)',
      options: [
        'Es gilt für alle Auszubildenden unabhängig vom Alter.',
        'Jugendliche dürfen höchstens 8 Stunden täglich und 40 Stunden wöchentlich arbeiten.',
        'Vor Beginn der Beschäftigung ist eine ärztliche Erstuntersuchung nötig.',
        'Jugendliche haben weniger Urlaub als Erwachsene, weil sie Berufsschule haben.'
      ],
      correct: [1, 2],
      hints: ['Jugendlicher ist, wer 15, aber noch nicht 18 Jahre alt ist.', 'Je jünger, desto mehr Urlaub.'],
      solution: 'Richtig sind B und C. Das JArbSchG gilt nur für Personen **unter 18 Jahren**. Es begrenzt die Arbeitszeit auf **8 Std./Tag und 40 Std./Woche** und verlangt eine **Erstuntersuchung**. Jugendliche haben **mehr** Urlaub (25 bis 30 Werktage je nach Alter).'
    },
    {
      id: 'wiso-ausbildungsvertrag-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Ausbildungsvertrag bei der Blies-Logistik KG',
      intro: `Sara ist 17 Jahre alt und beginnt am 1. August 2026 ihre Ausbildung bei der Blies-Logistik KG in Homburg. Im Vertrag steht:

- Probezeit: **6 Monate**
- Vergütung im 1. Ausbildungsjahr: 1.020 € monatlich
- Der Vertrag ist nur von Sara und dem Geschäftsführer unterschrieben.

Am 15. Januar 2027 erhält Sara ein Schreiben: „Wir kündigen das Ausbildungsverhältnis fristlos, da Sie noch in der Probezeit sind.“`,
      hints: ['Prüfe die Probezeit an § 20 BBiG.', 'Überlege, wer bei einer Minderjährigen beteiligt sein muss.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'wiso-ausbildungsvertrag-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen zur Probezeit treffen zu? (Mehrfachauswahl)',
          options: [
            'Eine Probezeit von 6 Monaten ist in der Berufsausbildung zulässig.',
            'Die Probezeit darf höchstens 4 Monate betragen; die Vereinbarung über 6 Monate ist insoweit unwirksam.',
            'Am 15. Januar 2027 ist Sara jedenfalls nicht mehr in der Probezeit.',
            'Die Probezeit verlängert sich automatisch, wenn der Vertrag es so bestimmt.'
          ],
          correct: [1, 2],
          hints: ['§ 20 Satz 2 BBiG nennt eine Höchstdauer.', 'Vereinbarungen zuungunsten der Azubis sind nach § 25 BBiG nichtig.'],
          solution: 'Richtig sind B und C. Die Probezeit beträgt höchstens **4 Monate** (§ 20 BBiG); längere Vereinbarungen sind zuungunsten der Auszubildenden und daher nach § 25 BBiG nichtig. Spätestens am **30. November 2026** war die Probezeit vorbei, am 15. Januar 2027 also sicher.'
        },
        {
          id: 'wiso-ausbildungsvertrag-a10-2', type: 'mc', difficulty: 3, points: 2,
          q: 'Ist die Kündigung vom 15. Januar 2027 wirksam?',
          options: [
            'Ja, weil der Vertrag eine Probezeit von 6 Monaten vorsieht.',
            'Ja, weil eine Kündigung ohne Grund immer mit vier Wochen Frist möglich ist.',
            'Nein, nach der Probezeit kann der Betrieb nur aus wichtigem Grund kündigen und muss die Gründe angeben.',
            'Nein, Auszubildenden kann niemals gekündigt werden.'
          ],
          correct: [2],
          hints: ['Welche Kündigungsmöglichkeit hat der Betrieb nach der Probezeit noch?', 'Das Schreiben nennt nur die (falsche) Probezeit als Grund.'],
          solution: 'Richtig ist C. Nach der Probezeit ist eine Kündigung durch den Betrieb nur **aus wichtigem Grund** möglich, schriftlich und **mit Angabe der Gründe** (§ 22 Abs. 2 Nr. 1, Abs. 3 BBiG). Das Schreiben stützt sich nur auf die angeblich laufende Probezeit, also ist die Kündigung unwirksam. Die Vier-Wochen-Kündigung (B) steht nur Auszubildenden zu.'
        },
        {
          id: 'wiso-ausbildungsvertrag-a10-3', type: 'text', difficulty: 2, points: 2,
          q: 'Was ist bei Vertragsschluss nicht beachtet worden, weil Sara minderjährig ist? Welche Vorschrift zum Arbeitsschutz muss zusätzlich beachtet werden?',
          model: 'Da Sara minderjährig (beschränkt geschäftsfähig) ist, müssen ihre gesetzlichen Vertreter, in der Regel die Eltern, dem Vertrag zustimmen; die Vertragsniederschrift ist nach § 11 BBiG auch den gesetzlichen Vertretern auszuhändigen. Zusätzlich gilt das Jugendarbeitsschutzgesetz, z. B. ärztliche Erstuntersuchung vor Beginn, höchstens 8 Stunden täglich und 40 Stunden wöchentlich.',
          criteria: [
            { text: 'Zustimmung/Unterschrift der Eltern bzw. gesetzlichen Vertreter fehlt', keywords: ['Eltern|gesetzliche Vertreter|Erziehungsberechtigte'], points: 1 },
            { text: 'nennt das Jugendarbeitsschutzgesetz mit einer konkreten Regel', keywords: ['Jugendarbeitsschutz|JArbSchG|Erstuntersuchung|8 Stunden|40 Stunden'], points: 1 }
          ],
          hints: ['Mit 17 ist man beschränkt geschäftsfähig.', 'Für unter 18-Jährige gibt es ein eigenes Schutzgesetz.'],
          solution: 'Es fehlt die **Zustimmung der gesetzlichen Vertreter** (Eltern); sie müssen auch die Vertragsniederschrift erhalten (§ 11 BBiG). Zusätzlich gilt das **Jugendarbeitsschutzgesetz** (Erstuntersuchung, höchstens 8 Std./Tag, 40 Std./Woche, mehr Urlaub).'
        }
      ]
    },
    {
      id: 'wiso-ausbildungsvertrag-a11', type: 'mc', difficulty: 2, points: 2,
      q: 'Tom hat einen Ausbildungsvertrag bis zum 31. Juli 2027. Der Prüfungsausschuss gibt ihm am 23. Juni 2027 bekannt, dass er die Abschlussprüfung bestanden hat. Wann endet sein Ausbildungsverhältnis?',
      options: [
        'Am 31. Juli 2027, weil der Vertrag so lange läuft.',
        'Am 23. Juni 2027 mit der Bekanntgabe des Ergebnisses.',
        'Mit Ablauf des Monats Juni 2027.',
        'Erst wenn das IHK-Zeugnis per Post ankommt.'
      ],
      correct: [1],
      hints: ['§ 21 Abs. 2 BBiG regelt das Bestehen vor Ablauf der Ausbildungszeit.', 'Entscheidend ist die Bekanntgabe durch den Prüfungsausschuss.'],
      solution: 'Richtig ist B. Besteht der Auszubildende vor Ablauf der Ausbildungszeit, endet das Ausbildungsverhältnis **mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss** (§ 21 Abs. 2 BBiG). Arbeitet Tom danach ohne neue Vereinbarung weiter, entsteht ein unbefristetes Arbeitsverhältnis (§ 24 BBiG).'
    },
    {
      id: 'wiso-ausbildungsvertrag-a12', type: 'mc', difficulty: 2, points: 1,
      q: 'Welche Vereinbarung im Ausbildungsvertrag ist nach § 12 BBiG **nichtig**?',
      options: [
        'Die tägliche Ausbildungszeit beträgt 8 Stunden.',
        'Die Auszubildende zahlt bei vorzeitiger Kündigung eine Vertragsstrafe von 1.000 €.',
        'Es gilt der Tarifvertrag für das Speditions- und Logistikgewerbe.',
        'Der Urlaub beträgt 30 Arbeitstage.'
      ],
      correct: [1],
      hints: ['§ 12 BBiG schützt Auszubildende vor Belastungen, die sie vom Wechsel abhalten.', 'Welche Klausel würde Geld vom Azubi verlangen?'],
      solution: 'Richtig ist B. **Vertragsstrafen** sind nach § 12 Abs. 2 BBiG nichtig, ebenso Entschädigungen für die Ausbildung oder Pauschalschadensersatz. Die übrigen Angaben sind zulässige (und teils vorgeschriebene) Vertragsinhalte.'
    }
  ],
  quiz: ['wiso-ausbildungsvertrag-a1', 'wiso-ausbildungsvertrag-a2', 'wiso-ausbildungsvertrag-a4', 'wiso-ausbildungsvertrag-a6', 'wiso-ausbildungsvertrag-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 1, Inhalte: Berufsbildungsgesetz, Ausbildungsvertrag' },
    { id: 'saar-wiso-2016', ref: 'W1' },
    { title: 'Berufsbildungsgesetz (BBiG) §§ 10–26', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 11 Vertragsniederschrift', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__11.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 17 Vergütungsanspruch und Mindestvergütung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__17.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 22 Kündigung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__22.html', asOf: '2026' },
    { title: 'Bekanntmachung der Mindestvergütung für Berufsausbildungen mit Beginn 2026', publisher: 'Bundesgesetzblatt (recht.bund.de)', url: 'https://www.recht.bund.de/bgbl/1/2025/235/VO.html', asOf: '2026' },
    { title: 'Pressemitteilung: Mindestausbildungsvergütung 2026', publisher: 'Bundesinstitut für Berufsbildung (BIBB)', url: 'https://www.bibb.de/de/pressemitteilung_212952.php', asOf: '2026' },
    { title: 'Pressemitteilung: Mindestausbildungsvergütung steigt 2027 auf 764 Euro', publisher: 'Bundesinstitut für Berufsbildung (BIBB)', url: 'https://www.bibb.de/de/pressemitteilung_229684.php', asOf: '2026' },
    { title: 'Jugendarbeitsschutzgesetz (JArbSchG)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/jarbschg/', asOf: '2026' }
  ],
  links: ['wiso-sozialversicherung', 'wiso-kaufvertrag']
};
