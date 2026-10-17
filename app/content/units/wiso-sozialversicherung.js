export default {
  id: 'wiso-sozialversicherung',
  area: 'WISO',
  topic: 'wiso-w5-sozialversicherung',
  title: 'Die fünf Zweige der Sozialversicherung',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Werte für das Kalenderjahr 2026 (bundeseinheitlich). Beitragssätze: KV allgemein 14,6 % (ermäßigt 14,0 %), durchschnittlicher Zusatzbeitrag 2,9 % (Bekanntmachung des BMG vom 07.11.2025, BAnz AT 10.11.2025 B7), PV 3,6 %, Kinderlosenzuschlag 0,6 % (ab 23 Jahren, nur Arbeitnehmer), Abschlag ab dem 2. bis 5. Kind je 0,25 %, RV 18,6 %, AV 2,6 %. Beitragsbemessungsgrenzen 2026: KV/PV 5.812,50 €/Monat (69.750 €/Jahr), RV/AV 8.450 €/Monat (101.400 €/Jahr); Versicherungspflichtgrenze KV 77.400 €/Jahr; Geringverdienergrenze für Auszubildende 325 €/Monat (Quellen: GKV-Spitzenverband, Faktenblatt Rechengrößen 2026; Bundesregierung; Deutsche Rentenversicherung). Hinweis: Der Entwurf des Pflegeneuordnungsgesetzes (BMG, Stand Oktober 2026) sieht eine Anhebung des Kinderlosenzuschlags auf 0,9 % vor; das Gesetz war bei Redaktionsschluss (17.10.2026) noch nicht verabschiedet. Der Zusatzbeitrag der einzelnen Krankenkasse kann vom Durchschnitt abweichen.'
  },
  goals: [
    'Ich kann die fünf Zweige der Sozialversicherung mit ihren Trägern nennen.',
    'Ich kann typische Leistungen jedem Zweig zuordnen.',
    'Ich kann erklären, wie die Beiträge zwischen Arbeitgeber und Arbeitnehmer aufgeteilt werden.',
    'Ich kann die Beitragssätze und Beitragsbemessungsgrenzen 2026 anwenden.',
    'Ich kann den Arbeitnehmeranteil zur Sozialversicherung für eine Ausbildungsvergütung berechnen.',
    'Ich kann begründen, warum die Unfallversicherung allein vom Arbeitgeber bezahlt wird.',
    'Ich kann die Geringverdienergrenze für Auszubildende richtig erklären.'
  ],
  simple: `# Wozu gibt es die Sozialversicherung?

Krankheit, Pflegebedürftigkeit, Alter, Arbeitslosigkeit und Arbeitsunfälle kann kaum jemand allein finanziell tragen. Deshalb sind fast alle Beschäftigten – auch **Auszubildende** – **pflichtversichert**. Alle zahlen ein, wer Hilfe braucht, bekommt Leistungen: das **Solidaritätsprinzip**.

# Die fünf Zweige

| Zweig | Abkürzung | schützt bei … |
|---|---|---|
| Krankenversicherung | KV | Krankheit |
| Pflegeversicherung | PV | Pflegebedürftigkeit |
| Rentenversicherung | RV | Alter, Erwerbsminderung, Tod (Hinterbliebene) |
| Arbeitslosenversicherung | AV | Arbeitslosigkeit |
| Unfallversicherung | UV | Arbeitsunfall, Wegeunfall, Berufskrankheit |

# Wer bezahlt?

- **KV, PV, RV, AV:** Arbeitgeber und Arbeitnehmer zahlen **grundsätzlich je die Hälfte**. Den Kinderlosenzuschlag in der PV zahlt der Arbeitnehmer allein.
- **UV:** zahlt der **Arbeitgeber allein**.

Der Arbeitgeber zieht deinen Anteil direkt von der Bruttovergütung ab und überweist alles zusammen an deine Krankenkasse. Das sind deine **Sozialabzüge** auf der Entgeltabrechnung.

# Die Beitragssätze 2026 (Arbeitnehmeranteil)

| Zweig | Gesamtsatz | dein Anteil |
|---|---:|---:|
| KV | 14,6 % + Zusatzbeitrag (Ø 2,9 %) | 7,3 % + 1,45 % = 8,75 % |
| PV | 3,6 % | 1,8 % (+ 0,6 % ohne Kinder ab 23) |
| RV | 18,6 % | 9,3 % |
| AV | 2,6 % | 1,3 % |

Mit dem durchschnittlichen Zusatzbeitrag zahlt eine kinderlose Auszubildende unter 23 Jahren also **21,15 %** ihrer Bruttovergütung.`,
  deep: `# Grundprinzipien

- **Versicherungspflicht:** Beschäftigte gegen Arbeitsentgelt und Auszubildende sind kraft Gesetzes versichert (Sozialgesetzbuch, SGB).
- **Solidaritätsprinzip:** Beiträge richten sich nach dem Einkommen, Leistungen nach dem Bedarf (besonders deutlich in der KV).
- **Umlageverfahren / Generationenvertrag:** Die heutigen Beitragszahler finanzieren die heutigen Renten.
- **Selbstverwaltung:** Die Träger sind Körperschaften des öffentlichen Rechts und werden von Vertretern der Versicherten und Arbeitgeber mitverwaltet (Sozialwahl).

# Träger und Leistungen

| Zweig | Träger | wichtige Leistungen |
|---|---|---|
| **KV** (SGB V) | Krankenkassen, z. B. AOK, Ersatzkassen, Betriebs- und Innungskrankenkassen | ärztliche und zahnärztliche Behandlung, Arzneimittel, Krankenhaus, Vorsorge; **Krankengeld** ab der 7. Woche (vorher Entgeltfortzahlung durch den Arbeitgeber) |
| **PV** (SGB XI) | Pflegekassen (bei den Krankenkassen) | Pflegegeld, Pflegesachleistungen, stationäre Pflege; Einstufung in **Pflegegrade 1–5** |
| **RV** (SGB VI) | Deutsche Rentenversicherung (Bund, Regionalträger wie die DRV Saarland, Knappschaft-Bahn-See) | Altersrente, Erwerbsminderungsrente, Hinterbliebenenrente, medizinische und berufliche **Rehabilitation** |
| **AV** (SGB III) | Bundesagentur für Arbeit (Agenturen für Arbeit) | **Arbeitslosengeld**, Berufsberatung, Vermittlung, Förderung der Weiterbildung, Kurzarbeitergeld, Insolvenzgeld |
| **UV** (SGB VII) | **Berufsgenossenschaften** (für Speditionen: BG Verkehr), Unfallkassen der öffentlichen Hand | Prävention, Heilbehandlung, Verletztengeld, Unfallrente – bei **Arbeitsunfällen, Wegeunfällen** und **Berufskrankheiten** |

# Finanzierung im Detail

| Zweig | Arbeitnehmer | Arbeitgeber |
|---|---|---|
| KV allgemeiner Satz 14,6 % | 7,3 % | 7,3 % |
| KV Zusatzbeitrag (kassenindividuell, Ø 2026: 2,9 %) | Hälfte (Ø 1,45 %) | Hälfte (Ø 1,45 %) |
| PV 3,6 % | 1,8 % | 1,8 % |
| PV Kinderlosenzuschlag 0,6 % | **0,6 % allein** | – |
| RV 18,6 % | 9,3 % | 9,3 % |
| AV 2,6 % | 1,3 % | 1,3 % |
| UV | – | **100 %** (nach Lohnsumme und Gefahrklasse) |

Besonderheiten der Pflegeversicherung:
- Der **Kinderlosenzuschlag** gilt erst **ab dem 23. Geburtstag**. Viele Auszubildende zahlen ihn deshalb noch nicht.
- Eltern mit mehreren Kindern unter 25 Jahren erhalten ab dem 2. bis zum 5. Kind einen **Abschlag von je 0,25 Prozentpunkten** auf ihren Anteil.
- In **Sachsen** ist die Aufteilung anders (Arbeitnehmer 2,3 %, Arbeitgeber 1,3 %), weil dort kein Feiertag zur Finanzierung der Pflegeversicherung gestrichen wurde.

**Warum zahlt der Arbeitgeber die Unfallversicherung allein?** Sie ersetzt die **Haftung des Arbeitgebers** für Arbeitsunfälle. Im Gegenzug haften Arbeitgeber und Kollegen bei Personenschäden grundsätzlich nicht privat (Haftungsablösung). Der Beitrag hängt von der Lohnsumme und dem **Unfallrisiko der Branche** ab (Gefahrtarif) – Lagerarbeit mit Staplern ist gefährlicher als Büroarbeit.

Daneben zahlt der Arbeitgeber allein noch Umlagen (U1, U2 für Krankheit und Mutterschaft, Insolvenzgeldumlage); sie gehören nicht zu den fünf Zweigen.

# Beitragsbemessungsgrenze (BBG) 2026

Beiträge werden nur bis zu einer Höchstgrenze erhoben. Was darüber verdient wird, ist **beitragsfrei**.

| Zweig | monatlich | jährlich |
|---|---:|---:|
| KV und PV | 5.812,50 € | 69.750 € |
| RV und AV | 8.450,00 € | 101.400 € |

Seit 2025 gelten die Grenzen bundeseinheitlich (keine Ost-West-Unterscheidung mehr). Davon zu unterscheiden ist die **Versicherungspflichtgrenze** (Jahresarbeitsentgeltgrenze) in der KV: Wer regelmäßig mehr als **77.400 € im Jahr** verdient, kann sich privat krankenversichern.

# Geringverdienergrenze für Auszubildende (325 €)

Beträgt die monatliche Vergütung einer Auszubildenden **nicht mehr als 325 €**, zahlt der **Arbeitgeber den gesamten Sozialversicherungsbeitrag allein**; die Auszubildende hat keine Abzüge (§ 20 Abs. 3 SGB IV). Liegt die Vergütung **darüber**, wird der Beitrag ganz normal vom **gesamten** Betrag geteilt – es gibt keine gleitende Entlastung. Auch der Übergangsbereich („Midijob“) gilt für Auszubildende nicht.

> Bei Ausbildungsbeginn 2026 beträgt allein die Mindestausbildungsvergütung schon 724 €. Die 325-€-Grenze betrifft deshalb heute nur noch wenige Fälle, z. B. Praktika, die zur Ausbildung gehören und gering vergütet werden.

# So rechnest du den Arbeitnehmeranteil

1. Bruttovergütung feststellen (bei hohen Einkommen höchstens bis zur jeweiligen BBG).
2. Arbeitnehmersatz je Zweig bestimmen (Zusatzbeitrag der eigenen Kasse halbieren; Kinderlosenzuschlag nur ab 23 ohne Kinder).
3. Brutto × Satz je Zweig, jeweils auf Cent runden.
4. Summe = Sozialversicherungsabzug des Arbeitnehmers.`,
  terms: [
    { term: 'Solidaritätsprinzip', def: 'Die Versichertengemeinschaft trägt die Risiken gemeinsam: Beiträge nach Einkommen, Leistungen nach Bedarf.' },
    { term: 'Gesamtsozialversicherungsbeitrag', def: 'Beiträge zur KV, PV, RV und AV (Arbeitnehmer- und Arbeitgeberanteil), die der Arbeitgeber gemeinsam an die Krankenkasse als Einzugsstelle abführt.' },
    { term: 'Zusatzbeitrag', def: 'Von jeder Krankenkasse selbst festgelegter Beitrag zusätzlich zu 14,6 %; je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen. Durchschnitt 2026: 2,9 %.' },
    { term: 'Kinderlosenzuschlag', def: 'Zuschlag von 0,6 % zur Pflegeversicherung für Versicherte ab 23 Jahren ohne Kinder; trägt der Arbeitnehmer allein (Stand 2026).' },
    { term: 'Beitragsbemessungsgrenze', def: 'Höchstbetrag des Einkommens, bis zu dem Beiträge erhoben werden. 2026: KV/PV 5.812,50 € im Monat, RV/AV 8.450 € im Monat.' },
    { term: 'Versicherungspflichtgrenze', def: 'Einkommensgrenze in der KV (2026: 77.400 € im Jahr); wer darüber liegt, kann in die private Krankenversicherung wechseln.' },
    { term: 'Geringverdienergrenze', def: 'Für Auszubildende mit höchstens 325 € Monatsvergütung trägt der Arbeitgeber die Sozialversicherungsbeiträge allein.' },
    { term: 'Berufsgenossenschaft', def: 'Träger der gesetzlichen Unfallversicherung für Unternehmen einer Branche; für Speditionen und Logistik die BG Verkehr.' },
    { term: 'Wegeunfall', def: 'Unfall auf dem direkten Weg zwischen Wohnung und Arbeitsstätte oder Berufsschule; ist durch die Unfallversicherung geschützt.' },
    { term: 'Umlageverfahren', def: 'Finanzierungsart der Rentenversicherung: Die laufenden Beiträge finanzieren direkt die laufenden Renten (Generationenvertrag).' }
  ],
  example: `# Praxisbeispiel: Entgeltabrechnung bei der Saar-Mosel Spedition GmbH (Bezugsjahr 2026)

**Aylin** (19 Jahre, keine Kinder) ist im 2. Ausbildungsjahr und erhält im März 2026 eine Bruttovergütung von **1.200 €**. Ihre Krankenkasse erhebt einen Zusatzbeitrag von 2,9 % (entspricht dem Durchschnitt 2026).

| Zweig | Arbeitnehmersatz | Arbeitnehmeranteil | Arbeitgeberanteil |
|---|---:|---:|---:|
| KV (7,3 % + 1,45 %) | 8,75 % | 105,00 € | 105,00 € |
| PV (kein Zuschlag, da unter 23) | 1,8 % | 21,60 € | 21,60 € |
| RV | 9,3 % | 111,60 € | 111,60 € |
| AV | 1,3 % | 15,60 € | 15,60 € |
| **Summe** | **21,15 %** | **253,80 €** | **253,80 €** |

Zusätzlich zahlt die Spedition den Beitrag zur **BG Verkehr** (Unfallversicherung) allein.

Im November 2026 stürzt Aylin auf dem direkten Weg zur Berufsschule mit dem Fahrrad und bricht sich den Arm. Das ist ein **Wegeunfall**: Die Behandlung übernimmt die Berufsgenossenschaft, nicht die Krankenkasse. Die Spedition meldet den Unfall, weil Aylin länger als drei Tage arbeitsunfähig ist.

Nach Abzug der Sozialversicherungsbeiträge bleiben: 1.200,00 € − 253,80 € = **946,20 €**. Ob zusätzlich Lohnsteuer anfällt, hängt von Steuerklasse und Freibeträgen ab und ist nicht Teil dieses Beispiels.`,
  rules: [
    'Fünf Zweige: Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.',
    'KV, PV, RV und AV teilen sich Arbeitgeber und Arbeitnehmer grundsätzlich zur Hälfte; die UV zahlt der Arbeitgeber allein.',
    'Den Kinderlosenzuschlag zur PV zahlt nur der Arbeitnehmer – und erst ab dem 23. Geburtstag.',
    'Den Zusatzbeitrag der Krankenkasse tragen Arbeitgeber und Arbeitnehmer je zur Hälfte.',
    'Oberhalb der Beitragsbemessungsgrenze werden keine Beiträge mehr fällig: 2026 KV/PV 5.812,50 €, RV/AV 8.450 € im Monat.',
    'Bis 325 € Ausbildungsvergütung im Monat zahlt der Arbeitgeber alles allein; darüber wird vom gesamten Betrag ganz normal geteilt.'
  ],
  summary: `- **Zweige und Träger:** KV (Krankenkassen), PV (Pflegekassen), RV (Deutsche Rentenversicherung), AV (Bundesagentur für Arbeit), UV (Berufsgenossenschaften, für Speditionen die BG Verkehr).
- **Beitragssätze 2026:** KV 14,6 % + Ø 2,9 % Zusatzbeitrag, PV 3,6 % (+ 0,6 % Kinderlosenzuschlag), RV 18,6 %, AV 2,6 %.
- **Arbeitnehmeranteil** (kinderlos unter 23, Ø-Zusatzbeitrag): 8,75 % + 1,8 % + 9,3 % + 1,3 % = **21,15 %**; ab 23 ohne Kinder **21,75 %**.
- **UV:** allein Arbeitgeber, schützt bei Arbeits- und Wegeunfällen sowie Berufskrankheiten.
- **BBG 2026:** KV/PV 5.812,50 € monatlich, RV/AV 8.450 € monatlich.
- **Geringverdienergrenze Azubis:** bis 325 € zahlt der Arbeitgeber alles allein.`,
  mistakes: [
    { wrong: 'Die Unfallversicherung wird wie die anderen Zweige je zur Hälfte bezahlt.', right: 'Die Unfallversicherung trägt der Arbeitgeber allein. Sie ersetzt seine Haftung für Arbeitsunfälle.' },
    { wrong: 'Jeder kinderlose Auszubildende zahlt 0,6 % Kinderlosenzuschlag.', right: 'Der Zuschlag gilt erst ab Vollendung des 23. Lebensjahres. Die meisten Azubis unter 23 zahlen ihn nicht.' },
    { wrong: 'Der Arbeitnehmer zahlt den ganzen Zusatzbeitrag der Krankenkasse.', right: 'Seit 2019 tragen Arbeitgeber und Arbeitnehmer den Zusatzbeitrag je zur Hälfte.' },
    { wrong: 'Wer 6.000 € verdient, zahlt KV-Beiträge auf 6.000 €.', right: 'KV- und PV-Beiträge werden 2026 nur bis 5.812,50 € im Monat berechnet; der Rest ist beitragsfrei. Für RV und AV liegt die Grenze bei 8.450 €.' },
    { wrong: 'Verdient ein Azubi 330 €, zahlt er nur auf die 5 € über der Geringverdienergrenze Beiträge.', right: 'Die Grenze ist kein Freibetrag. Liegt die Vergütung über 325 €, wird der Beitrag vom gesamten Entgelt ganz normal geteilt.' },
    { wrong: 'Ein Unfall auf dem Weg zur Berufsschule ist Privatsache und geht über die Krankenkasse.', right: 'Der direkte Weg zur Arbeit oder Berufsschule ist über die gesetzliche Unfallversicherung versichert (Wegeunfall).' }
  ],
  flashcards: [
    { q: 'Nenne die fünf Zweige der Sozialversicherung.', a: 'Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.' },
    { q: 'Wer ist Träger der Arbeitslosenversicherung?', a: 'Die Bundesagentur für Arbeit.' },
    { q: 'Wer ist Träger der Unfallversicherung für eine Spedition?', a: 'Die Berufsgenossenschaft, hier die BG Verkehr.' },
    { q: 'Beitragssatz Rentenversicherung 2026?', a: '18,6 %, davon 9,3 % Arbeitnehmer und 9,3 % Arbeitgeber.' },
    { q: 'Beitragssatz Arbeitslosenversicherung 2026?', a: '2,6 %, je 1,3 % Arbeitnehmer und Arbeitgeber.' },
    { q: 'KV-Beitrag 2026?', a: 'Allgemeiner Satz 14,6 % plus kassenindividueller Zusatzbeitrag (Durchschnitt 2,9 %), jeweils hälftig geteilt.' },
    { q: 'PV-Beitrag 2026?', a: '3,6 % (je 1,8 %), plus 0,6 % Kinderlosenzuschlag ab 23 Jahren, den der Arbeitnehmer allein trägt.' },
    { q: 'Beitragsbemessungsgrenzen 2026 (monatlich)?', a: 'KV/PV 5.812,50 €, RV/AV 8.450 €.' },
    { q: 'Was bedeutet die Geringverdienergrenze von 325 €?', a: 'Bis zu einer Ausbildungsvergütung von 325 € im Monat trägt der Arbeitgeber die gesamten Sozialversicherungsbeiträge allein.' },
    { q: 'Welche Fälle deckt die Unfallversicherung ab?', a: 'Arbeitsunfälle, Wegeunfälle (auch zur Berufsschule) und Berufskrankheiten.' },
    { q: 'Ab wann zahlt die Krankenkasse Krankengeld an Beschäftigte?', a: 'In der Regel ab der 7. Woche; in den ersten sechs Wochen zahlt der Arbeitgeber das Entgelt weiter.' },
    { q: 'Was ist das Umlageverfahren?', a: 'Die Beiträge der heutigen Erwerbstätigen finanzieren die heutigen Renten (Generationenvertrag).' }
  ],
  tasks: [
    {
      id: 'wiso-sozialversicherung-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jedem Zweig der Sozialversicherung seinen Träger zu.',
      pairs: [
        ['Krankenversicherung', 'Krankenkassen, z. B. AOK oder Ersatzkassen'],
        ['Pflegeversicherung', 'Pflegekassen bei den Krankenkassen'],
        ['Rentenversicherung', 'Deutsche Rentenversicherung'],
        ['Arbeitslosenversicherung', 'Bundesagentur für Arbeit'],
        ['Unfallversicherung', 'Berufsgenossenschaften']
      ],
      hints: ['Die Pflegeversicherung ist organisatorisch eng mit der Krankenversicherung verbunden.', 'Für Speditionen ist die BG Verkehr zuständig.'],
      solution: 'KV → Krankenkassen; PV → Pflegekassen (bei den Krankenkassen); RV → Deutsche Rentenversicherung; AV → Bundesagentur für Arbeit; UV → Berufsgenossenschaften (für die öffentliche Hand Unfallkassen).'
    },
    {
      id: 'wiso-sozialversicherung-a2', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Leistungen gehören zur **Rentenversicherung**? (Mehrfachauswahl)',
      options: [
        'Erwerbsminderungsrente',
        'Kurzarbeitergeld',
        'Medizinische Rehabilitation',
        'Pflegegeld',
        'Hinterbliebenenrente'
      ],
      correct: [0, 2, 4],
      hints: ['Die RV zahlt nicht nur Altersrenten.', 'Kurzarbeitergeld hängt mit Arbeitsausfall zusammen, Pflegegeld mit Pflegebedürftigkeit.'],
      solution: 'Richtig sind **Erwerbsminderungsrente, Rehabilitation und Hinterbliebenenrente**. Kurzarbeitergeld zahlt die Bundesagentur für Arbeit (AV), Pflegegeld die Pflegekasse (PV).'
    },
    {
      id: 'wiso-sozialversicherung-a3', type: 'cloze', difficulty: 2, points: 6,
      q: 'Ergänze die Beitragssätze für **2026** (Gesamtsätze, ohne Zusatzbeitrag und Zuschlag).',
      text: 'Rentenversicherung: [[18,6|18.6]] %. Arbeitslosenversicherung: [[2,6|2.6]] %. Krankenversicherung, allgemeiner Satz: [[14,6|14.6]] %. Pflegeversicherung: [[3,6|3.6]] %. Der durchschnittliche Zusatzbeitrag der Krankenkassen beträgt [[2,9|2.9]] %. Kinderlose ab 23 Jahren zahlen in der Pflegeversicherung zusätzlich [[0,6|0.6]] %.',
      hints: ['Die RV hat den höchsten Satz, die AV den niedrigsten.', 'Der Kinderlosenzuschlag ist kleiner als 1 %.'],
      solution: 'RV **18,6 %**, AV **2,6 %**, KV **14,6 %**, PV **3,6 %**, durchschnittlicher Zusatzbeitrag **2,9 %**, Kinderlosenzuschlag **0,6 %** (Stand 2026, GKV-Spitzenverband und BMG).'
    },
    {
      id: 'wiso-sozialversicherung-a4', type: 'calc', difficulty: 2, points: 5,
      q: `**Bezugsjahr 2026.** Lea (20 Jahre, keine Kinder) ist Auszubildende in einer Spedition in Saarlouis. Ihre monatliche Bruttovergütung beträgt **1.100,00 €**. Ihre Krankenkasse erhebt einen Zusatzbeitrag von 2,9 %.

Berechne Leas **Arbeitnehmeranteile** und den gesamten Sozialversicherungsabzug. Runde jeden Betrag auf Cent.`,
      formula: 'Arbeitnehmeranteil je Zweig = Bruttovergütung × Arbeitnehmersatz',
      fields: [
        { id: 'kv', label: 'Krankenversicherung (7,3 % + 1,45 %)', unit: '€', answer: 96.25, tol: 0.01 },
        { id: 'pv', label: 'Pflegeversicherung', unit: '€', answer: 19.8, tol: 0.01 },
        { id: 'rv', label: 'Rentenversicherung', unit: '€', answer: 102.3, tol: 0.01 },
        { id: 'av', label: 'Arbeitslosenversicherung', unit: '€', answer: 14.3, tol: 0.01 },
        { id: 'summe', label: 'Arbeitnehmeranteil gesamt', unit: '€', answer: 232.65, tol: 0.01 }
      ],
      hints: ['Arbeitnehmersätze: KV 7,3 % + halber Zusatzbeitrag (1,45 %), PV 1,8 %, RV 9,3 %, AV 1,3 %.', 'Lea ist unter 23 – zahlt sie den Kinderlosenzuschlag?'],
      solution: `**Formel:** Arbeitnehmeranteil = Bruttovergütung × Arbeitnehmersatz

| Zweig | Rechnung | Ergebnis |
|---|---|---:|
| KV | 1.100,00 € × (7,3 % + 1,45 %) = 1.100,00 € × 8,75 % | 96,25 € |
| PV | 1.100,00 € × 1,8 % (kein Zuschlag, Lea ist unter 23) | 19,80 € |
| RV | 1.100,00 € × 9,3 % | 102,30 € |
| AV | 1.100,00 € × 1,3 % | 14,30 € |
| **Summe** | 96,25 € + 19,80 € + 102,30 € + 14,30 € | **232,65 €** |

Kontrolle: 1.100,00 € × 21,15 % = 232,65 €. Die Geringverdienergrenze (325 €) ist überschritten, deshalb wird ganz normal geteilt. Der Arbeitgeber zahlt denselben Betrag noch einmal und zusätzlich den Beitrag zur Unfallversicherung.`
    },
    {
      id: 'wiso-sozialversicherung-a5', type: 'mc', difficulty: 2, points: 2,
      q: 'Warum zahlt der **Arbeitgeber** die Beiträge zur Unfallversicherung allein? Wähle die beste Begründung.',
      options: [
        'Weil Arbeitnehmer bei Unfällen selbst schuld sind.',
        'Weil die Unfallversicherung die Haftung des Arbeitgebers für Arbeitsunfälle ablöst.',
        'Weil die Unfallversicherung nur Sachschäden an Fahrzeugen ersetzt.',
        'Weil der Staat die Hälfte übernimmt und der Arbeitgeber den Rest.'
      ],
      correct: [1],
      hints: ['Denke daran, wer ohne Versicherung für einen Arbeitsunfall haften müsste.', 'Man spricht von „Haftungsablösung“.'],
      solution: 'Richtig ist B. Die gesetzliche Unfallversicherung **ersetzt die Haftung des Unternehmers** für Personenschäden bei Arbeitsunfällen. Deshalb finanzieren die Arbeitgeber sie allein über ihre Berufsgenossenschaft; der Beitrag richtet sich nach Lohnsumme und Gefahrklasse.'
    },
    {
      id: 'wiso-sozialversicherung-a6', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussage zur **Geringverdienergrenze für Auszubildende** (2026: 325 €) ist richtig?',
      options: [
        'Die ersten 325 € jeder Ausbildungsvergütung sind beitragsfrei.',
        'Bis 325 € im Monat zahlt der Arbeitgeber die Sozialversicherungsbeiträge allein; darüber wird vom gesamten Betrag normal geteilt.',
        'Auszubildende mit weniger als 325 € sind nicht sozialversichert.',
        'Bis 325 € zahlt der Auszubildende alle Beiträge allein.'
      ],
      correct: [1],
      hints: ['Die Auszubildenden bleiben versichert – es geht nur darum, wer zahlt.', 'Die Grenze ist kein Freibetrag.'],
      solution: 'Richtig ist B. Bis zu einer Vergütung von **325 €** trägt der **Arbeitgeber den gesamten Beitrag** (§ 20 Abs. 3 SGB IV). Die Auszubildende ist trotzdem voll versichert. Wird die Grenze überschritten, gilt die normale Aufteilung auf das **gesamte** Entgelt.'
    },
    {
      id: 'wiso-sozialversicherung-a7', type: 'match', difficulty: 1, points: 5,
      q: 'Welcher Zweig ist zuständig? Ordne zu.',
      pairs: [
        ['Ein Lagerist verletzt sich beim Abladen am Gabelstapler.', 'Unfallversicherung'],
        ['Eine Disponentin hat Grippe und geht zum Hausarzt.', 'Krankenversicherung'],
        ['Ein Lkw-Fahrer verliert nach einer Insolvenz seine Stelle.', 'Arbeitslosenversicherung'],
        ['Die Großmutter einer Kollegin braucht dauerhaft Hilfe im Alltag.', 'Pflegeversicherung'],
        ['Ein Buchhalter geht mit 67 Jahren in den Ruhestand.', 'Rentenversicherung']
      ],
      hints: ['Ein Unfall bei der Arbeit fällt nicht in die Krankenversicherung.', 'Dauerhafte Hilfe im Alltag bedeutet Pflegebedürftigkeit.'],
      solution: 'Arbeitsunfall → **UV**; Grippe → **KV**; Arbeitslosigkeit → **AV**; Pflegebedürftigkeit → **PV**; Altersrente → **RV**.'
    },
    {
      id: 'wiso-sozialversicherung-a8', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Schritte zur Berechnung des Sozialversicherungsabzugs in die richtige Reihenfolge.',
      items: [
        'Bruttovergütung bzw. Bruttoentgelt feststellen',
        'Prüfen, ob die Beitragsbemessungsgrenzen oder die Geringverdienergrenze greifen',
        'Arbeitnehmersatz je Zweig bestimmen (Zusatzbeitrag halbieren, Kinderlosenzuschlag prüfen)',
        'Beitrag je Zweig berechnen und auf Cent runden',
        'Einzelbeträge zum Arbeitnehmeranteil addieren'
      ],
      hints: ['Ohne Brutto kann man nichts rechnen.', 'Erst wenn die Bemessungsgrundlage feststeht, werden Prozentsätze angewendet.'],
      solution: 'Brutto feststellen → Grenzen prüfen (BBG, 325 €) → Sätze bestimmen → je Zweig rechnen und runden → addieren.'
    },
    {
      id: 'wiso-sozialversicherung-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre einem neuen Auszubildenden in eigenen Worten das **Solidaritätsprinzip** und das **Umlageverfahren** in der Sozialversicherung. Nenne jeweils ein Beispiel.',
      model: 'Solidaritätsprinzip: Alle Versicherten zahlen Beiträge nach ihrem Einkommen, Leistungen gibt es nach Bedarf. Beispiel: Eine Auszubildende mit geringer Vergütung bekommt bei einer Operation dieselbe Behandlung wie ein Geschäftsführer, obwohl sie viel weniger einzahlt. Umlageverfahren: Die Rentenbeiträge der heute Beschäftigten werden direkt für die heutigen Renten verwendet und nicht für jeden Einzelnen angespart (Generationenvertrag). Beispiel: Die RV-Beiträge eines jungen Disponenten finanzieren die Rente seiner Großeltern.',
      criteria: [
        { text: 'Beiträge nach Einkommen, Leistungen nach Bedarf', keywords: ['Einkommen|Verdienst', 'Bedarf|braucht|gleiche Leistung'], points: 1 },
        { text: 'Umlageverfahren: heutige Beiträge finanzieren heutige Renten', keywords: ['heutige|aktuelle|laufende', 'Rente|Rentner'], points: 1 },
        { text: 'nennt passende Beispiele', keywords: ['Beispiel|z. B.|zum Beispiel'], points: 1 }
      ],
      hints: ['Beim Solidaritätsprinzip helfen die Starken den Schwachen.', 'Beim Umlageverfahren wird nicht angespart.'],
      solution: 'Siehe Musterlösung: **Solidaritätsprinzip** = Beitrag nach Einkommen, Leistung nach Bedarf; **Umlageverfahren** = heutige Beiträge finanzieren heutige Renten (Generationenvertrag).'
    },
    {
      id: 'wiso-sozialversicherung-a10', type: 'case', difficulty: 3, points: 9,
      q: 'Fall: Entgeltabrechnung Oktober 2026 bei der Blies-Logistik KG',
      intro: `Die Blies-Logistik KG in Homburg rechnet im Oktober 2026 die Gehälter ab. Die Krankenkasse aller Beschäftigten erhebt einen Zusatzbeitrag von 2,9 %. Es gelten die Werte für **2026**.

- **Kevin**, 25 Jahre, keine Kinder, Speditionskaufmann, Bruttogehalt **2.800,00 €**
- **Frau Schmitt**, 45 Jahre, zwei Kinder unter 25, Niederlassungsleiterin, Bruttogehalt **6.500,00 €**`,
      hints: ['Prüfe für jede Person, ob ein Kinderlosenzuschlag oder eine Beitragsbemessungsgrenze greift.', 'BBG 2026: KV/PV 5.812,50 €, RV/AV 8.450 € monatlich.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'wiso-sozialversicherung-a10-1', type: 'calc', difficulty: 2, points: 4,
          q: 'Berechne Kevins Arbeitnehmeranteile zur **Pflegeversicherung**, zur **Krankenversicherung** und den **gesamten Arbeitnehmeranteil** (KV, PV, RV, AV).',
          formula: 'Arbeitnehmeranteil = Brutto × (KV 8,75 % + PV 1,8 % + Zuschlag 0,6 % + RV 9,3 % + AV 1,3 %)',
          fields: [
            { id: 'pv', label: 'PV-Arbeitnehmeranteil (inkl. Kinderlosenzuschlag)', unit: '€', answer: 67.2, tol: 0.01 },
            { id: 'kv', label: 'KV-Arbeitnehmeranteil', unit: '€', answer: 245, tol: 0.01 },
            { id: 'summe', label: 'Arbeitnehmeranteil gesamt', unit: '€', answer: 609, tol: 0.01 }
          ],
          hints: ['Kevin ist über 23 und kinderlos: PV-Satz 1,8 % + 0,6 % = 2,4 %.', 'RV: 9,3 %, AV: 1,3 %.'],
          solution: `| Zweig | Rechnung | Ergebnis |
|---|---|---:|
| KV | 2.800,00 € × 8,75 % | 245,00 € |
| PV | 2.800,00 € × (1,8 % + 0,6 %) = 2.800,00 € × 2,4 % | 67,20 € |
| RV | 2.800,00 € × 9,3 % | 260,40 € |
| AV | 2.800,00 € × 1,3 % | 36,40 € |
| **Summe** | | **609,00 €** |

Kontrolle: 2.800,00 € × 21,75 % = 609,00 €. Der Arbeitgeber zahlt für die PV nur 1,8 % = 50,40 €, weil er den Kinderlosenzuschlag nicht mitträgt.`
        },
        {
          id: 'wiso-sozialversicherung-a10-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne für Frau Schmitt die **Bemessungsgrundlage** für die Krankenversicherung, ihren **KV-Arbeitnehmeranteil** und ihren **RV-Arbeitnehmeranteil**.',
          formula: 'Beitrag = min(Brutto; BBG) × Arbeitnehmersatz',
          fields: [
            { id: 'bg', label: 'Bemessungsgrundlage KV', unit: '€', answer: 5812.5, tol: 0.01 },
            { id: 'kv', label: 'KV-Arbeitnehmeranteil (8,75 %)', unit: '€', answer: 508.59, tol: 0.01 },
            { id: 'rv', label: 'RV-Arbeitnehmeranteil (9,3 %)', unit: '€', answer: 604.5, tol: 0.01 }
          ],
          hints: ['6.500 € liegen über der KV-BBG von 5.812,50 €, aber unter der RV-BBG von 8.450 €.', 'KV: Rechne mit 5.812,50 €, RV mit dem vollen Gehalt.'],
          solution: `**Bemessungsgrundlage KV:** 6.500,00 € > 5.812,50 € (BBG KV/PV 2026) → **5.812,50 €**

**KV:** 5.812,50 € × 8,75 % = 508,59375 € → **508,59 €**

**RV:** 6.500,00 € < 8.450,00 € (BBG RV 2026) → voller Betrag: 6.500,00 € × 9,3 % = **604,50 €**

Die 687,50 € über der KV-BBG sind in der Kranken- und Pflegeversicherung beitragsfrei. Für die PV gilt dieselbe Grundlage; wegen ihrer zwei Kinder unter 25 erhält Frau Schmitt einen Abschlag von 0,25 Prozentpunkten.`
        },
        {
          id: 'wiso-sozialversicherung-a10-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Kevin knickt auf dem direkten Heimweg von der Arbeit auf dem Parkplatz um und ist zwei Wochen arbeitsunfähig. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Es handelt sich um einen Wegeunfall, für den die Berufsgenossenschaft zuständig ist.',
            'Kevin muss die Behandlung selbst bezahlen, weil der Unfall nicht im Betrieb passiert ist.',
            'Die Blies-Logistik KG zahlt in den ersten sechs Wochen das Gehalt weiter.',
            'Kevin erhält sofort Arbeitslosengeld.'
          ],
          correct: [0, 2],
          hints: ['Der direkte Weg zwischen Wohnung und Arbeit ist versichert.', 'Bei Arbeitsunfähigkeit gilt zuerst die Entgeltfortzahlung.'],
          solution: 'Richtig sind A und C. Der Unfall auf dem direkten Heimweg ist ein **Wegeunfall** (UV, Berufsgenossenschaft BG Verkehr). Der Arbeitgeber zahlt das Entgelt **bis zu sechs Wochen** weiter (Entgeltfortzahlungsgesetz). Arbeitslosengeld gibt es nur bei Arbeitslosigkeit.'
        }
      ]
    },
    {
      id: 'wiso-sozialversicherung-a11', type: 'mc', difficulty: 2, points: 2,
      q: 'Ein Auszubildender ist 22 Jahre alt und hat keine Kinder. Er fragt, ob er 2026 den **Kinderlosenzuschlag** zur Pflegeversicherung zahlen muss. Welche Antwort ist richtig?',
      options: [
        'Ja, alle Kinderlosen zahlen den Zuschlag von 0,6 %.',
        'Nein, der Zuschlag gilt erst ab Vollendung des 23. Lebensjahres.',
        'Nein, Auszubildende sind von der Pflegeversicherung befreit.',
        'Ja, aber der Arbeitgeber übernimmt die Hälfte.'
      ],
      correct: [1],
      hints: ['Es gibt eine Altersgrenze.', 'Wer trägt den Zuschlag, wenn er anfällt?'],
      solution: 'Richtig ist B. Der Kinderlosenzuschlag (2026: 0,6 %) wird erst **ab dem 23. Geburtstag** erhoben und dann vom **Arbeitnehmer allein** getragen. Auszubildende sind in der PV ganz normal pflichtversichert.'
    }
  ],
  quiz: ['wiso-sozialversicherung-a1', 'wiso-sozialversicherung-a3', 'wiso-sozialversicherung-a4', 'wiso-sozialversicherung-a6', 'wiso-sozialversicherung-a10'],
  sources: [
    { id: 'saar-wiso-2016', ref: 'W5' },
    { id: 'kmk-rlp-2004', ref: 'LF 2 (Entgeltabrechnung und Sozialversicherung)' },
    { title: 'Faktenblatt Rechengrößen und Beitragsrecht 2026 (Beitragssätze, BBG, Geringverdienergrenze)', publisher: 'GKV-Spitzenverband', url: 'https://www.gkv-spitzenverband.de/media/dokumente/presse/zahlen_und_grafiken/20260101_Faktenblatt_Rechengroessen_Beitragsrecht.pdf', asOf: '2026' },
    { title: 'Rechengrößen in der Sozialversicherung 2026', publisher: 'Die Bundesregierung', url: 'https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514', asOf: '2026' },
    { title: 'Bundeskabinett beschließt Sozialversicherungsrechengrößen 2026', publisher: 'Deutsche Rentenversicherung', url: 'https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/25-10-08-bundeskabinett-sv-rechengroessen-vo-2026.html', asOf: '2026' },
    { title: 'Bekanntmachung des durchschnittlichen Zusatzbeitragssatzes für 2026 (BAnz AT 10.11.2025 B7)', publisher: 'Bundesministerium für Gesundheit (Bundesanzeiger)', url: 'https://www.bundesanzeiger.de/pub/publication/oUJYVk8GYRXybnb9Y4h/content/oUJYVk8GYRXybnb9Y4h/BAnz%20AT%2010.11.2025%20B7.pdf', asOf: '2026' },
    { title: 'FAQ zum Pflegeneuordnungsgesetz (Entwurf, geplanter Kinderlosenzuschlag 0,9 %)', publisher: 'Bundesministerium für Gesundheit', url: 'https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/guv-21-lp/pnog', asOf: '2026-10' },
    { title: 'SGB IV § 20 Aufbringung der Mittel, Übergangsbereich (Geringverdiener Abs. 3)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/sgb_4/__20.html', asOf: '2026' }
  ],
  links: ['wiso-ausbildungsvertrag']
};
