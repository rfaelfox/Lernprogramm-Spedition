export default {
  id: 'lf01-ausbildungsordnung',
  area: 'LF01',
  topic: 'lf01-ausbildungsordnung',
  title: 'Ausbildungsordnung, Ausbildungsrahmenplan und Rahmenlehrplan',
  status: 'vollstaendig',
  minutes: 30,
  validity: {
    asOf: '2026',
    note: 'SpedKfmAusbV vom 26.07.2004, zuletzt geändert am 25.05.2009 (Ausbildungsdauer 3 Jahre, Zwischenprüfung § 8, Abschlussprüfung § 9); BBiG §§ 5, 13, 14, 43, 71; KMK-Rahmenlehrplan vom 30.04.2004; IHK-Punkteschlüssel (50 Punkte = ausreichend). Stand Oktober 2026 – eine Neuordnung des Berufs wurde nicht gefunden.'
  },
  goals: [
    'Ich kann erklären, welche Ordnungsmittel die duale Ausbildung im Betrieb und in der Berufsschule regeln.',
    'Ich kann die Pflichtinhalte einer Ausbildungsordnung nach § 5 BBiG nennen.',
    'Ich kann Ausbildungsrahmenplan, betrieblichen Ausbildungsplan und KMK-Rahmenlehrplan unterscheiden.',
    'Ich kann das Lernfeldkonzept der Berufsschule beschreiben.',
    'Ich kann erklären, warum ich einen Ausbildungsnachweis führen muss und wer ihn prüft.',
    'Ich kann Aufbau, Dauer und Bestehensregeln der Zwischen- und Abschlussprüfung nennen.',
    'Ich kann die Aufgaben der IHK als zuständige Stelle beschreiben.'
  ],
  simple: `# Wer regelt meine Ausbildung?

Deine Ausbildung findet an **zwei Lernorten** statt: im **Betrieb** und in der **Berufsschule** (duales System – Grundlagen und Ausbildungsvertrag siehe Einheit „Duales System und Berufsausbildungsvertrag“). Für jeden Lernort gibt es ein eigenes „Drehbuch“:

| Lernort | Ordnungsmittel | Wer erlässt es? |
|---|---|---|
| Betrieb | **Ausbildungsordnung** mit **Ausbildungsrahmenplan** (SpedKfmAusbV 2004) | Bund (Bundesministerium per Verordnung) |
| Berufsschule | **Rahmenlehrplan** (KMK, 2004), umgesetzt in Lehrplänen der Länder | Kultusministerkonferenz der Länder |

# Die Ausbildungsordnung

Die **Verordnung über die Berufsausbildung zum Kaufmann/zur Kauffrau für Spedition und Logistikdienstleistung** (kurz **SpedKfmAusbV**) legt fest:
- dass die Ausbildung **drei Jahre** dauert,
- **was** du im Betrieb mindestens lernen musst (Ausbildungsberufsbild),
- **wann** du es lernst (Ausbildungsrahmenplan mit zeitlicher Gliederung),
- **wie** du geprüft wirst (Zwischen- und Abschlussprüfung).

# Aus Rahmenplan wird dein Plan

Dein Ausbildungsbetrieb macht aus dem allgemeinen **Ausbildungsrahmenplan** einen **betrieblichen Ausbildungsplan** nur für dich: Welche Abteilung, wann, wie lange?

# Dein Ausbildungsnachweis

Du schreibst regelmäßig auf, was du im Betrieb und in der Schule gelernt hast. Ohne vorgelegten Ausbildungsnachweis wirst du **nicht zur Abschlussprüfung zugelassen**.

# Die IHK

Die **Industrie- und Handelskammer** ist die **zuständige Stelle**: Sie trägt deinen Vertrag ein, berät, überwacht die Ausbildung und nimmt die Prüfungen ab.`,
  deep: `# Rechtliche Grundlage: § 5 BBiG

Das Berufsbildungsgesetz bestimmt, was jede Ausbildungsordnung **mindestens** enthalten muss (§ 5 Abs. 1 BBiG):
1. die **Bezeichnung** des Ausbildungsberufs,
2. die **Ausbildungsdauer** (in der Regel zwei bis drei Jahre),
3. das **Ausbildungsberufsbild** – die Fertigkeiten, Kenntnisse und Fähigkeiten, die mindestens vermittelt werden,
4. den **Ausbildungsrahmenplan** – Anleitung zur sachlichen und zeitlichen Gliederung,
5. die **Prüfungsanforderungen**.

# Aufbau der SpedKfmAusbV 2004

| § | Inhalt |
|---|---|
| § 1 | Staatliche Anerkennung des Ausbildungsberufs |
| § 2 | Ausbildungsdauer: **drei Jahre** |
| § 3 | Zielsetzung: qualifizierte Tätigkeit, die selbstständiges **Planen, Durchführen und Kontrollieren** einschließt |
| § 4 | Ausbildungsberufsbild (z. B. Ausbildungsbetrieb, Arbeitsorganisation, Englisch, Speditions- und Logistikleistungen, Verträge/Haftung/Versicherung, Marketing, Gefahrgut, kaufmännische Steuerung) |
| § 5 | Ausbildungsrahmenplan (Anlagen 1 und 2); Abweichungen sind zulässig, wenn betriebspraktische Besonderheiten sie erfordern |
| § 6 | Betrieblicher **Ausbildungsplan** für jeden Auszubildenden |
| § 7 | **Berichtsheft** in Form eines Ausbildungsnachweises |
| § 8 | Zwischenprüfung |
| § 9 | Abschlussprüfung |

# Ausbildungsrahmenplan, Ausbildungsplan, Rahmenlehrplan

| | Ausbildungsrahmenplan | Betrieblicher Ausbildungsplan | KMK-Rahmenlehrplan |
|---|---|---|---|
| Lernort | Betrieb | Betrieb | Berufsschule |
| Rechtsform | Anlage zur Verordnung (Bundesrecht) | vom Betrieb erstellt (§ 6 SpedKfmAusbV) | Beschluss der KMK, Länder übernehmen ihn |
| Inhalt | sachliche und zeitliche Gliederung für **alle** Betriebe | konkreter Ablauf für **einen** Auszubildenden | **15 Lernfelder**, 880 Stunden |
| Gliederung | nach Berufsbildpositionen | nach Abteilungen und Zeiträumen | nach Lernfeldern und Ausbildungsjahren |

Ausbildungsordnung und Rahmenlehrplan werden **aufeinander abgestimmt**. Beide stammen beim Speditionskaufmann aus dem Jahr 2004.

# Das Lernfeldkonzept

Die Berufsschule unterrichtet nicht nach Fächern wie „Recht“ oder „Rechnungswesen“, sondern nach **Lernfeldern**. Ein Lernfeld beschreibt eine **berufliche Handlungssituation**, z. B. „LF 1 Die Berufsausbildung mitgestalten“ (40 Std.) oder „LF 2 Im Speditionsbetrieb mitarbeiten“ (80 Std.).
- Ziel ist **Handlungskompetenz** (Fach-, Selbst- bzw. Personal- und Sozialkompetenz).
- Gelernt wird an Situationen: **informieren – planen – entscheiden – durchführen – kontrollieren – bewerten** (vollständige Handlung).
- Englisch und Informationstechnik sind in die Lernfelder eingebaut.
- Die Lernfelder 1–5 gehören ins 1., 6–10 ins 2., 11–15 ins 3. Ausbildungsjahr.

# Ausbildungsnachweis (Berichtsheft)

- **§ 13 Satz 2 Nr. 7 BBiG**: Auszubildende müssen einen **schriftlichen oder elektronischen** Ausbildungsnachweis führen.
- **§ 14 Abs. 2 BBiG**: Der Betrieb muss dazu anhalten, den Nachweis **regelmäßig durchsehen** und Gelegenheit geben, ihn **am Arbeitsplatz** (während der Ausbildungszeit) zu führen.
- **§ 7 SpedKfmAusbV** wiederholt dies für den Beruf: Berichtsheft in Form eines Ausbildungsnachweises, regelmäßige Durchsicht.
- **§ 43 Abs. 1 Nr. 2 BBiG**: Zur Abschlussprüfung wird nur zugelassen, wer an der **Zwischenprüfung teilgenommen** und den **Ausbildungsnachweis vorgelegt** hat.

# Zwischenprüfung (§ 8 SpedKfmAusbV)

- Zweck: **Ermittlung des Ausbildungsstandes** – das Ergebnis zählt **nicht** für die Abschlussnote, die Teilnahme ist aber Pflicht.
- Zeitpunkt: in der **Mitte des zweiten Ausbildungsjahres**.
- Inhalt: Stoff des ersten Ausbildungsjahres laut Anlagen 1 und 2 und der wesentliche Berufsschulstoff.
- Form: **schriftlich**, praxisbezogene Fälle oder Aufgaben, **höchstens 180 Minuten**.
- Prüfungsgebiete: Betriebliche Leistungserstellung, Rechnungswesen, Wirtschafts- und Sozialkunde.

# Abschlussprüfung (§ 9 SpedKfmAusbV)

| Prüfungsbereich | Form | Dauer |
|---|---|---|
| Leistungserstellung in Spedition und Logistik | schriftlich | höchstens 180 Min. |
| Kaufmännische Steuerung und Kontrolle | schriftlich | höchstens 90 Min. |
| Wirtschafts- und Sozialkunde | schriftlich | höchstens 90 Min. |
| Fallbezogenes Fachgespräch | mündlich | Vorbereitung höchstens 20 Min., Gespräch höchstens 30 Min. |

- Im Bereich **Leistungserstellung** benennst du bei der Anmeldung **zwei von fünf Verkehrsträgern** (Straße, Schiene, Luft, Binnenschifffahrt, Seeschifffahrt); der Prüfungsausschuss legt am Prüfungstag einen davon fest. Englischsprachige Formulare sind Teil der Prüfung.
- Im **Fachgespräch** wählst du eine von zwei praktischen Aufgaben; zugrunde liegt dein betrieblicher Ausbildungsschwerpunkt.
- **Mündliche Ergänzungsprüfung** (§ 9 Abs. 4): Sind in den schriftlichen Bereichen bis zu **zwei** Leistungen „mangelhaft“ und die übrigen mindestens „ausreichend“, kann in **einem** mangelhaften Bereich etwa **15 Minuten** mündlich ergänzt werden, wenn das für das Bestehen den Ausschlag geben kann. Schriftliches und mündliches Ergebnis werden im Verhältnis **2 : 1** gewichtet.
- **Bestehen** (§ 9 Abs. 5): Gesamtergebnis und **mindestens drei** Prüfungsbereiche mindestens „ausreichend“, darunter **Leistungserstellung in Spedition und Logistik**. Ein Bereich mit „**ungenügend**“ bedeutet: nicht bestanden.
- Punkteschlüssel der IHK: 100 Punkte; **ab 50 Punkten „ausreichend“**, 49 Punkte und weniger „mangelhaft“ (bundeseinheitlicher Schlüssel laut IHK München).

# Die IHK als zuständige Stelle

Nach **§ 71 Abs. 2 BBiG** ist für nichthandwerkliche Gewerbeberufe die **Industrie- und Handelskammer** zuständig – im Saarland die IHK Saarland. Aufgaben u. a.: Eintragung des Ausbildungsvertrags ins Verzeichnis der Berufsausbildungsverhältnisse, Überwachung und Beratung durch Ausbildungsberater, Feststellung der Eignung von Betrieb und Ausbilder, Errichtung der Prüfungsausschüsse und Durchführung der Prüfungen, Entscheidung über Verkürzung oder Verlängerung.`,
  terms: [
    { term: 'Duales System', def: 'Berufsausbildung an zwei Lernorten: Ausbildungsbetrieb (Bundesrecht, BBiG/Ausbildungsordnung) und Berufsschule (Landesrecht, Rahmenlehrplan).' },
    { term: 'Ausbildungsordnung', def: 'Rechtsverordnung des Bundes für einen anerkannten Ausbildungsberuf; Mindestinhalte nach § 5 BBiG. Hier: SpedKfmAusbV 2004.' },
    { term: 'Ausbildungsberufsbild', def: 'Liste der Fertigkeiten, Kenntnisse und Fähigkeiten, die mindestens vermittelt werden (§ 4 SpedKfmAusbV).' },
    { term: 'Ausbildungsrahmenplan', def: 'Anlage zur Ausbildungsordnung mit sachlicher und zeitlicher Gliederung der betrieblichen Ausbildung, gilt für alle Ausbildungsbetriebe.' },
    { term: 'Betrieblicher Ausbildungsplan', def: 'Vom Ausbildungsbetrieb auf Grundlage des Ausbildungsrahmenplans erstellter individueller Plan (Abteilungen, Zeiträume) für jeden Auszubildenden (§ 6 SpedKfmAusbV).' },
    { term: 'Rahmenlehrplan', def: 'Von der Kultusministerkonferenz beschlossener Lehrplan für den Berufsschulunterricht, gegliedert in Lernfelder; mit der Ausbildungsordnung abgestimmt.' },
    { term: 'Lernfeld', def: 'Thematische Einheit des Rahmenlehrplans, die sich an einer beruflichen Handlungssituation orientiert, mit Zielformulierung, Inhalten und Zeitrichtwert.' },
    { term: 'Ausbildungsnachweis', def: 'Schriftlicher oder elektronischer Nachweis über die Ausbildung (Berichtsheft), Pflicht nach § 13 Satz 2 Nr. 7 BBiG und Zulassungsvoraussetzung zur Abschlussprüfung.' },
    { term: 'Zuständige Stelle', def: 'Für den Beruf zuständige Kammer; bei Kaufleuten für Spedition und Logistikdienstleistung die IHK (§ 71 Abs. 2 BBiG).' },
    { term: 'Mündliche Ergänzungsprüfung', def: 'Etwa 15-minütige mündliche Zusatzprüfung in einem mangelhaften schriftlichen Bereich; Gewichtung schriftlich : mündlich = 2 : 1 (§ 9 Abs. 4 SpedKfmAusbV).' }
  ],
  example: `# Ausbildungsstart bei der Saar-Mosel Spedition GmbH, Dillingen (Beispiel)

Lea beginnt am 01.08.2026 ihre Ausbildung. Am ersten Tag erhält sie von ihrer Ausbilderin:

**1. Den betrieblichen Ausbildungsplan** (Auszug, Beispiel):

| Zeitraum | Abteilung | Berufsbildpositionen aus dem Rahmenplan |
|---|---|---|
| 08/2026 – 10/2026 | Disposition Nahverkehr | Güterversendung und Transport, Arbeitsorganisation |
| 11/2026 – 02/2027 | Sammelgut/Umschlag | Sammelgut- und Systemverkehre |
| 03/2027 – 06/2027 | Lager | Lagerlogistik |
| 07/2027 – 09/2027 | Buchhaltung | Zahlungsverkehr und Buchführung |

**2. Den Hinweis zum Ausbildungsnachweis**: Lea führt ihn **wöchentlich elektronisch**. Jeden Freitag hat sie 20 Minuten Zeit dafür am Arbeitsplatz. Die Ausbilderin zeichnet die Einträge monatlich ab.

**3. Den Stundenplan der Berufsschule**: Im 1. Jahr stehen u. a. LF 1 „Die Berufsausbildung mitgestalten“, LF 2 „Im Speditionsbetrieb mitarbeiten“ und LF 3 „Geschäftsprozesse dokumentieren und Zahlungsvorgänge bearbeiten“ – Lea merkt: Was sie in der Schule in LF 5 zum Sammelgut lernt, sieht sie gleichzeitig in der Sammelgutabteilung.

**4. Prüfungstermine** (Beispiel): Zwischenprüfung im Frühjahr 2028 (Mitte des 2. Jahres), Abschlussprüfung zum Ende der Ausbildung 2029. Bei der Anmeldung zur Abschlussprüfung wählt Lea die Verkehrsträger **Straße** und **Luft**, weil ihr Betrieb Luftfracht über den Flughafen Frankfurt-Hahn abwickelt.`,
  rules: [
    'Betrieb → Ausbildungsordnung mit Ausbildungsrahmenplan (Bund); Schule → Rahmenlehrplan (KMK/Länder).',
    'Aus dem Ausbildungsrahmenplan macht der Betrieb für jeden Azubi einen betrieblichen Ausbildungsplan.',
    'Fünf Pflichtinhalte nach § 5 BBiG: Bezeichnung, Dauer, Berufsbild, Rahmenplan, Prüfungsanforderungen.',
    'Kein vorgelegter Ausbildungsnachweis und keine Teilnahme an der Zwischenprüfung → keine Zulassung zur Abschlussprüfung.',
    'Die Zwischenprüfung zählt nicht zur Note, ist aber Pflicht.',
    'Bestanden: Gesamtergebnis und mindestens 3 Bereiche „ausreichend“, darunter Leistungserstellung; kein „ungenügend“.',
    'Zuständige Stelle für Speditionskaufleute ist die IHK.'
  ],
  summary: `- **Ordnungsmittel**: Ausbildungsordnung (SpedKfmAusbV 2004, Bund) für den Betrieb, KMK-Rahmenlehrplan 2004 (15 Lernfelder) für die Schule.
- **§ 5 BBiG**: Bezeichnung, Dauer, Berufsbild, Ausbildungsrahmenplan, Prüfungsanforderungen.
- **Ausbildungsrahmenplan** (für alle) → **betrieblicher Ausbildungsplan** (für dich).
- **Ausbildungsnachweis**: Pflicht (§ 13 BBiG), Betrieb sieht ihn regelmäßig durch (§ 14 BBiG), Zulassungsvoraussetzung (§ 43 BBiG).
- **Zwischenprüfung**: Mitte 2. Jahr, schriftlich max. 180 Min., zählt nicht zur Note.
- **Abschlussprüfung**: drei schriftliche Bereiche (180/90/90 Min.) und Fachgespräch (20 + 30 Min.), Ergänzungsprüfung 2 : 1.
- **IHK** = zuständige Stelle.`,
  mistakes: [
    { wrong: 'Der Rahmenlehrplan regelt, was ich im Betrieb lernen muss.', right: 'Der KMK-Rahmenlehrplan gilt für die Berufsschule. Für den Betrieb gilt der Ausbildungsrahmenplan als Teil der Ausbildungsordnung.' },
    { wrong: 'Ausbildungsrahmenplan und betrieblicher Ausbildungsplan sind dasselbe.', right: 'Der Rahmenplan gilt bundesweit für alle Betriebe; der Ausbildungsplan ist die betriebliche, individuelle Umsetzung.' },
    { wrong: 'Das Berichtsheft schreibe ich zu Hause in meiner Freizeit.', right: 'Der Betrieb muss Gelegenheit geben, den Ausbildungsnachweis am Arbeitsplatz zu führen (§ 14 Abs. 2 BBiG).' },
    { wrong: 'Die Zwischenprüfung ist unwichtig, weil sie nicht zählt.', right: 'Die Note zählt nicht, aber ohne Teilnahme gibt es keine Zulassung zur Abschlussprüfung (§ 43 Abs. 1 Nr. 2 BBiG).' },
    { wrong: 'Mit einem „ungenügend“ in WiSo kann ich trotzdem bestehen, wenn der Rest gut ist.', right: 'Ein „ungenügend“ in einem Prüfungsbereich führt zum Nichtbestehen (§ 9 Abs. 5 SpedKfmAusbV).' }
  ],
  flashcards: [
    { q: 'Welche fünf Inhalte muss eine Ausbildungsordnung nach § 5 BBiG enthalten?', a: 'Bezeichnung des Berufs, Ausbildungsdauer, Ausbildungsberufsbild, Ausbildungsrahmenplan, Prüfungsanforderungen.' },
    { q: 'Wie lange dauert die Ausbildung zum Kaufmann/zur Kauffrau für Spedition und Logistikdienstleistung?', a: 'Drei Jahre (§ 2 SpedKfmAusbV).' },
    { q: 'Wer erstellt den betrieblichen Ausbildungsplan?', a: 'Der Ausbildende (Betrieb) auf Grundlage des Ausbildungsrahmenplans (§ 6 SpedKfmAusbV).' },
    { q: 'Was ist ein Lernfeld?', a: 'Eine an einer beruflichen Handlungssituation ausgerichtete Unterrichtseinheit des Rahmenlehrplans mit Ziel, Inhalten und Zeitrichtwert.' },
    { q: 'Wie viele Lernfelder hat der KMK-Rahmenlehrplan 2004 für Speditionskaufleute?', a: '15 Lernfelder mit zusammen 880 Stunden.' },
    { q: 'Wann findet die Zwischenprüfung statt und wie lange dauert sie?', a: 'In der Mitte des 2. Ausbildungsjahres, schriftlich, höchstens 180 Minuten.' },
    { q: 'Welche vier Prüfungsbereiche hat die Abschlussprüfung?', a: 'Leistungserstellung in Spedition und Logistik (180 Min.), Kaufmännische Steuerung und Kontrolle (90 Min.), WiSo (90 Min.), fallbezogenes Fachgespräch (mündlich).' },
    { q: 'Wie werden schriftliche Prüfung und mündliche Ergänzungsprüfung gewichtet?', a: 'Im Verhältnis 2 : 1 (schriftlich : mündlich).' },
    { q: 'Welcher Prüfungsbereich muss zum Bestehen auf jeden Fall mindestens „ausreichend“ sein?', a: 'Leistungserstellung in Spedition und Logistik.' },
    { q: 'Wer ist die zuständige Stelle für die Ausbildung zum Speditionskaufmann?', a: 'Die Industrie- und Handelskammer (§ 71 Abs. 2 BBiG), im Saarland die IHK Saarland.' }
  ],
  tasks: [
    {
      id: 'lf01-ausbildungsordnung-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Welches Ordnungsmittel legt fest, was du **in der Berufsschule** lernst?',
      options: ['Ausbildungsrahmenplan', 'Betrieblicher Ausbildungsplan', 'KMK-Rahmenlehrplan', 'Berufsausbildungsvertrag'],
      correct: [2],
      hints: ['Die Schule ist Ländersache.', 'Die Kultusministerkonferenz ist das Gremium der Länder.'],
      solution: 'Der **KMK-Rahmenlehrplan** (2004, 15 Lernfelder) regelt den Berufsschulunterricht. Ausbildungsrahmenplan und betrieblicher Ausbildungsplan betreffen den Betrieb, der Ausbildungsvertrag regelt das Ausbildungsverhältnis zwischen Betrieb und Azubi.'
    },
    {
      id: 'lf01-ausbildungsordnung-a2', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Inhalte muss eine Ausbildungsordnung nach **§ 5 Abs. 1 BBiG** enthalten? (Mehrfachauswahl)',
      options: ['Ausbildungsdauer', 'Höhe der Ausbildungsvergütung', 'Ausbildungsberufsbild', 'Stundenplan der Berufsschule', 'Prüfungsanforderungen'],
      correct: [0, 2, 4],
      hints: ['Vergütung wird im Ausbildungsvertrag bzw. Tarifvertrag geregelt.', 'Der Stundenplan ist Sache der Schule.'],
      solution: 'Pflichtinhalte nach § 5 Abs. 1 BBiG: Bezeichnung, **Ausbildungsdauer**, **Ausbildungsberufsbild**, Ausbildungsrahmenplan und **Prüfungsanforderungen**. Die Vergütung steht im Ausbildungsvertrag (§ 11 BBiG) bzw. Tarifvertrag; den Stundenplan legt die Berufsschule fest.'
    },
    {
      id: 'lf01-ausbildungsordnung-a3', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne jedes Ordnungsmittel seiner Beschreibung zu.',
      pairs: [
        ['Ausbildungsrahmenplan', 'Sachliche und zeitliche Gliederung der betrieblichen Ausbildung für alle Betriebe'],
        ['Betrieblicher Ausbildungsplan', 'Individueller Ablauf: welche Abteilung, wann, wie lange'],
        ['Rahmenlehrplan', 'Lernfelder mit Zielen, Inhalten und Zeitrichtwerten für die Berufsschule'],
        ['Ausbildungsnachweis', 'Vom Azubi geführte Dokumentation der Ausbildung, regelmäßig vom Betrieb durchgesehen']
      ],
      hints: ['„Rahmen“ heißt: gilt für alle, wird noch ausgefüllt.', 'Nur ein Dokument schreibt der Azubi selbst.'],
      solution: 'Ausbildungsrahmenplan = Anlage zur SpedKfmAusbV für alle Betriebe; betrieblicher Ausbildungsplan = konkrete Umsetzung im Betrieb (§ 6); Rahmenlehrplan = KMK-Plan für die Schule; Ausbildungsnachweis = vom Azubi geführt (§ 13 Satz 2 Nr. 7 BBiG), vom Betrieb durchgesehen (§ 14 Abs. 2 BBiG).'
    },
    {
      id: 'lf01-ausbildungsordnung-a4', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zur Prüfung.',
      text: 'Die Zwischenprüfung findet in der Mitte des [[zweiten|2.|2]] Ausbildungsjahres statt und dauert schriftlich höchstens [[180]] Minuten. In der Abschlussprüfung dauert der Bereich „Kaufmännische Steuerung und Kontrolle“ höchstens [[90]] Minuten. Das fallbezogene Fachgespräch dauert höchstens [[30]] Minuten. Zuständig für die Prüfungen ist die [[IHK|Industrie- und Handelskammer]].',
      hints: ['Die Zwischenprüfung soll den Stand nach dem ersten Jahr messen.', 'Die Vorbereitungszeit im Fachgespräch beträgt höchstens 20 Minuten – gefragt ist das Gespräch selbst.'],
      solution: 'Zwischenprüfung: Mitte des **2.** Ausbildungsjahres, höchstens **180** Minuten (§ 8 SpedKfmAusbV). Kaufmännische Steuerung und Kontrolle: höchstens **90** Minuten; Fachgespräch: höchstens **30** Minuten (§ 9). Zuständige Stelle: **IHK** (§ 71 Abs. 2 BBiG).'
    },
    {
      id: 'lf01-ausbildungsordnung-a5', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Schritte vom Bundesrecht bis zu deinem Arbeitsalltag in eine sinnvolle Reihenfolge.',
      items: [
        'BBiG legt Mindestinhalte für Ausbildungsordnungen fest (§ 5)',
        'Ausbildungsordnung SpedKfmAusbV mit Ausbildungsrahmenplan wird erlassen',
        'Der Ausbildungsbetrieb erstellt den betrieblichen Ausbildungsplan',
        'Der Azubi dokumentiert seine Tätigkeiten im Ausbildungsnachweis'
      ],
      hints: ['Vom Allgemeinen zum Konkreten.', 'Das Gesetz ist die Grundlage für die Verordnung.'],
      solution: 'Gesetz (BBiG) → Verordnung (SpedKfmAusbV mit Rahmenplan) → betrieblicher Ausbildungsplan → Umsetzung und Dokumentation im Ausbildungsnachweis.'
    },
    {
      id: 'lf01-ausbildungsordnung-a6', type: 'mc', difficulty: 2, points: 1,
      q: 'Tim hat die Zwischenprüfung wegen eines Urlaubs „ausgelassen“. Er meint: „Die zählt ja eh nicht.“ Was stimmt?',
      options: [
        'Tim hat recht, die Zwischenprüfung ist freiwillig.',
        'Die Note zählt nicht, aber die Teilnahme ist Voraussetzung für die Zulassung zur Abschlussprüfung.',
        'Die Zwischenprüfung zählt zu einem Drittel zur Abschlussnote.',
        'Tim muss die gesamte Ausbildung wiederholen.'
      ],
      correct: [1],
      hints: ['Lies § 43 Abs. 1 Nr. 2 BBiG.', 'Zweck der Zwischenprüfung ist die Ermittlung des Ausbildungsstandes.'],
      solution: 'Die Zwischenprüfung dient nur der **Ermittlung des Ausbildungsstandes** (§ 8 SpedKfmAusbV), ihr Ergebnis geht nicht in die Abschlussnote ein. Nach **§ 43 Abs. 1 Nr. 2 BBiG** wird aber nur zur Abschlussprüfung zugelassen, wer an vorgeschriebenen Zwischenprüfungen **teilgenommen** hat. Tim muss die Teilnahme nachholen (Termin mit der IHK klären). Eine Wiederholung der Ausbildung ist nicht vorgesehen.'
    },
    {
      id: 'lf01-ausbildungsordnung-a7', type: 'calc', difficulty: 3, points: 2,
      q: `Mira hat im Bereich **Kaufmännische Steuerung und Kontrolle** schriftlich **42 Punkte** (mangelhaft) erreicht. Alle anderen Bereiche sind mindestens ausreichend. In der mündlichen Ergänzungsprüfung erreicht sie **66 Punkte**.

Berechne das neue Ergebnis des Prüfungsbereichs. Ist der Bereich danach „ausreichend“ (ab 50 Punkten)?`,
      formula: 'Ergebnis = (2 × schriftlich + 1 × mündlich) ÷ 3',
      fields: [
        { id: 'summe', label: 'Gewichtete Punktsumme', unit: 'Punkte', answer: 150, tol: 0.01 },
        { id: 'erg', label: 'Neues Bereichsergebnis', unit: 'Punkte', answer: 50, tol: 0.01 }
      ],
      hints: ['Die schriftliche Leistung zählt doppelt (Verhältnis 2 : 1).', 'Teile die gewichtete Summe durch die Summe der Gewichte (2 + 1 = 3).'],
      solution: `**Formel:** Ergebnis = (2 × schriftlich + 1 × mündlich) ÷ 3 (§ 9 Abs. 4 SpedKfmAusbV: Gewichtung 2 : 1)

**Gewichtete Summe:** 2 × 42 Punkte + 1 × 66 Punkte = 84 Punkte + 66 Punkte = **150 Punkte**

**Ergebnis:** 150 Punkte ÷ 3 = **50 Punkte**

50 Punkte entsprechen im 100-Punkte-Schlüssel der IHK der Note **ausreichend** (4,4). Der Bereich ist damit bestanden – vorausgesetzt, auch das Gesamtergebnis ist ausreichend und kein Bereich ist ungenügend.`
    },
    {
      id: 'lf01-ausbildungsordnung-a8', type: 'mc', difficulty: 3, points: 1,
      q: `Welcher Prüfling hat die Abschlussprüfung **bestanden**? (Gesamtergebnis jeweils mindestens ausreichend; LE = Leistungserstellung, KSK = Kaufm. Steuerung und Kontrolle, WiSo, FG = Fachgespräch)`,
      options: [
        'A: LE mangelhaft, KSK gut, WiSo gut, FG sehr gut',
        'B: LE ausreichend, KSK mangelhaft, WiSo befriedigend, FG gut',
        'C: LE gut, KSK ungenügend, WiSo gut, FG gut',
        'D: LE ausreichend, KSK mangelhaft, WiSo mangelhaft, FG gut'
      ],
      correct: [1],
      hints: ['Mindestens drei Bereiche ausreichend, darunter LE.', 'Ein „ungenügend“ führt immer zum Nichtbestehen.'],
      solution: 'Nur **B** besteht: Drei Bereiche (LE, WiSo, FG) sind mindestens ausreichend, darunter LE, kein „ungenügend“. A scheitert, weil LE mangelhaft ist; C wegen „ungenügend“ in KSK; D hat nur zwei ausreichende Bereiche (§ 9 Abs. 5 SpedKfmAusbV). Bei B und D wäre vorher eine mündliche Ergänzungsprüfung möglich.'
    },
    {
      id: 'lf01-ausbildungsordnung-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre einem neuen Azubi, was das **Lernfeldkonzept** der Berufsschule ist und worin der Unterschied zum Fächerunterricht liegt.',
      model: 'Der Rahmenlehrplan ist nicht in Fächer, sondern in 15 Lernfelder gegliedert. Jedes Lernfeld geht von einer beruflichen Handlungssituation aus, zum Beispiel einen Sammelgutauftrag bearbeiten. Man lernt fächerübergreifend: Recht, Rechnen und Englisch werden in derselben Situation gebraucht. Ziel ist Handlungskompetenz; man plant, führt durch und kontrolliert möglichst selbstständig (vollständige Handlung).',
      criteria: [
        { text: 'nennt die Ausrichtung an beruflichen Handlungssituationen', keywords: ['Situation|Handlung|Praxis|beruflich'], points: 1 },
        { text: 'nennt fächerübergreifendes Lernen statt Einzelfächer', keywords: ['fächerübergreifend|nicht in Fächer|statt Fächer|übergreifend'], points: 1 },
        { text: 'nennt Handlungskompetenz oder vollständige Handlung', keywords: ['Handlungskompetenz|planen|vollständige Handlung|selbstständig'], points: 1 }
      ],
      hints: ['Woran orientiert sich ein Lernfeld?', 'Was soll am Ende stehen: Wissen in Schubladen oder Handlungsfähigkeit?'],
      solution: 'Lernfelder sind an **beruflichen Handlungssituationen** ausgerichtet, nicht an Fachwissenschaften. Inhalte aus Recht, Rechnungswesen, Englisch und IT werden **fächerübergreifend** in der Situation gelernt. Ziel ist **Handlungskompetenz** (Fach-, Selbst-, Sozialkompetenz), Lernen im Kreislauf der **vollständigen Handlung** (informieren, planen, entscheiden, durchführen, kontrollieren, bewerten).'
    },
    {
      id: 'lf01-ausbildungsordnung-a10', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Ärger um das Berichtsheft',
      intro: `Jonas (17) ist Azubi bei der Blies-Logistik GmbH in St. Ingbert. Sein Ausbilder sagt: „Berichtsheft schreibst du abends zu Hause, hier wird gearbeitet. Ich unterschreibe dann alles am Ende der Ausbildung auf einmal.“ Jonas hat seit vier Monaten nichts eingetragen.`,
      hints: ['Lies § 13 Satz 2 Nr. 7, § 14 Abs. 2 und § 43 Abs. 1 Nr. 2 BBiG.', 'Wer kann bei Problemen beraten?'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf01-ausbildungsordnung-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Der Betrieb muss Jonas Gelegenheit geben, den Ausbildungsnachweis am Arbeitsplatz zu führen.',
            'Der Ausbilder muss den Ausbildungsnachweis regelmäßig durchsehen, nicht erst am Ende.',
            'Weil der Ausbilder sich falsch verhält, muss Jonas gar keinen Ausbildungsnachweis führen.',
            'Das Berichtsheft ist freiwillig.'
          ],
          correct: [0, 1],
          hints: ['§ 14 Abs. 2 BBiG richtet sich an den Betrieb.', '§ 13 BBiG richtet sich an Jonas.'],
          solution: 'A und B sind richtig (§ 14 Abs. 2 BBiG; § 7 SpedKfmAusbV: regelmäßige Durchsicht). C und D sind falsch: Jonas ist nach **§ 13 Satz 2 Nr. 7 BBiG** selbst verpflichtet, den Nachweis zu führen – das Fehlverhalten des Ausbilders befreit ihn nicht.'
        },
        {
          id: 'lf01-ausbildungsordnung-a10-2', type: 'mc', difficulty: 2, points: 1,
          q: 'Welche Folge droht Jonas, wenn er bis zur Anmeldung keinen Ausbildungsnachweis vorlegen kann?',
          options: ['Keine, das Berichtsheft wird nicht geprüft.', 'Er wird nicht zur Abschlussprüfung zugelassen.', 'Er bekommt eine Note Abzug im Fachgespräch.', 'Die IHK verlängert automatisch die Probezeit.'],
          correct: [1],
          hints: ['Zulassungsvoraussetzungen stehen in § 43 BBiG.', 'Es geht um die Zulassung, nicht um die Note.'],
          solution: 'Nach **§ 43 Abs. 1 Nr. 2 BBiG** ist die Vorlage des Ausbildungsnachweises Voraussetzung für die **Zulassung** zur Abschlussprüfung.'
        },
        {
          id: 'lf01-ausbildungsordnung-a10-3', type: 'text', difficulty: 3, points: 3,
          q: 'Was sollte Jonas jetzt konkret tun? Nenne drei sinnvolle Schritte.',
          model: 'Jonas trägt die fehlenden Wochen sofort nach, solange er sich erinnert. Er spricht den Ausbilder sachlich an und weist auf § 14 Abs. 2 BBiG hin: Zeit im Betrieb und regelmäßige Durchsicht. Falls das nichts ändert, wendet er sich an die Jugend- und Auszubildendenvertretung bzw. den Betriebsrat oder an den Ausbildungsberater der IHK Saarland.',
          criteria: [
            { text: 'nachtragen der fehlenden Einträge', keywords: ['nachtragen|nachholen|aufholen'], points: 1 },
            { text: 'Gespräch mit dem Ausbilder unter Hinweis auf die Rechtslage', keywords: ['Gespräch|ansprechen|Ausbilder', '14|Arbeitszeit|Arbeitsplatz|Betrieb'], points: 1 },
            { text: 'nennt eine Beratungsstelle (IHK-Ausbildungsberater, JAV, Betriebsrat)', keywords: ['IHK|Ausbildungsberat|JAV|Jugend- und Auszubildendenvertretung|Betriebsrat'], points: 1 }
          ],
          hints: ['Was kann Jonas selbst sofort tun?', 'Wer überwacht die Ausbildung von außen?'],
          solution: '1. **Fehlende Einträge nachtragen** (eigene Pflicht nach § 13 BBiG). 2. **Sachliches Gespräch** mit dem Ausbilder, Hinweis auf § 14 Abs. 2 BBiG (Führen am Arbeitsplatz, regelmäßige Durchsicht). 3. Bei Bedarf **Beratung**: JAV/Betriebsrat im Betrieb oder **Ausbildungsberater der IHK** als zuständige Stelle, die die Ausbildung überwacht.'
        }
      ]
    }
  ],
  quiz: ['lf01-ausbildungsordnung-a1', 'lf01-ausbildungsordnung-a2', 'lf01-ausbildungsordnung-a4', 'lf01-ausbildungsordnung-a6', 'lf01-ausbildungsordnung-a8'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 1, Inhalte: Ordnungsmittel der dualen Ausbildung, Berufsbildungsgesetz; Teil III/IV (Lernfeldkonzept)' },
    { id: 'spedkfmausbv-2004', ref: '§§ 2–9 (Dauer, Berufsbild, Ausbildungsrahmenplan, Ausbildungsplan, Berichtsheft, Zwischen- und Abschlussprüfung)' },
    { title: 'SpedKfmAusbV 2004 (PDF-Gesamtausgabe)', publisher: 'BMJ (bundesrecht.juris.de)', url: 'https://bundesrecht.juris.de/spedkfmausbv_2004/SpedKfmAusbV_2004.pdf', asOf: '2026' },
    { title: 'SpedKfmAusbV § 9 Abschlussprüfung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/spedkfmausbv_2004/__9.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 5 Ausbildungsordnung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__5.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 13 Verhalten während der Berufsausbildung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__13.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 14 Berufsausbildung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__14.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 43 Zulassung zur Abschlussprüfung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__43.html', asOf: '2026' },
    { title: 'Berufsbildungsgesetz § 71 Zuständige Stellen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bbig_2005/__71.html', asOf: '2026' },
    { title: 'Notendarstellung und Notenschlüssel (100-Punkte-Schlüssel)', publisher: 'IHK für München und Oberbayern', url: 'https://www.ihk-muenchen.de/de/berufsbildung-berufszugang/auszubildende/ausbildungspruefung/zeugnis/notendarstellung-notenschluessel-notenstatistik/', asOf: '2026-10' }
  ],
  links: ['wiso-ausbildungsvertrag', 'lf01-lerntechniken']
};
