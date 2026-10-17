export default {
  id: 'lf04-lenkzeiten',
  area: 'LF04',
  topic: 'lf04-lenkzeiten',
  title: 'Lenk- und Ruhezeiten',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026-10',
    note: 'Verordnung (EG) Nr. 561/2006, Art. 4, 6, 7, 8 und 12, geprüft am 17.10.2026 anhand der konsolidierten Fassung auf EUR-Lex (Stand der jüngsten konsolidierten Fassung: 31.12.2024). § 21a ArbZG am 17.10.2026 auf gesetze-im-internet.de geprüft. Fahrtenschreiber: Verordnung (EU) Nr. 165/2014; Ausweitung auf Fahrzeuge über 2,5 t im grenzüberschreitenden Güterverkehr seit 01.07.2026 (Art. 2 Abs. 1 Buchst. aa VO 561/2006). Nachrüstfristen für ältere Fahrtenschreiber werden bewusst nicht genannt.'
  },
  goals: [
    'Ich kann die Höchstlenkzeiten je Tag, Woche und Doppelwoche nach VO (EG) Nr. 561/2006 nennen und anwenden.',
    'Ich kann Fahrtunterbrechungen nach 4,5 Stunden Lenkzeit richtig einplanen, auch in der Aufteilung 15 + 30 Minuten.',
    'Ich kann regelmäßige, reduzierte und aufgeteilte tägliche Ruhezeiten unterscheiden.',
    'Ich kann regelmäßige und reduzierte wöchentliche Ruhezeiten und ihren Ausgleich erklären.',
    'Ich kann eine Tagestour mit Lenkzeiten, Pausen und Ruhezeit planen.',
    'Ich kann die Aufgabe des digitalen Fahrtenschreibers und den Bezug zum Arbeitszeitgesetz erklären.'
  ],
  simple: `# Worum geht es?

Müde Fahrer sind eine große Unfallgefahr. Deshalb schreibt die EU vor, **wie lange** ein Lkw-Fahrer lenken darf und **wie lange** er sich ausruhen muss. Grundlage ist die **Verordnung (EG) Nr. 561/2006**. Sie gilt für den Güterverkehr mit Fahrzeugen über 3,5 t zulässiger Gesamtmasse (seit 01.07.2026 im grenzüberschreitenden Verkehr auch schon über 2,5 t).

**Die wichtigsten Zahlen:**

| Regel | Wert |
|---|---|
| Lenkzeit pro Tag | 9 h, **zweimal pro Woche 10 h** |
| Lenkzeit pro Woche | 56 h |
| Lenkzeit in zwei aufeinanderfolgenden Wochen | 90 h |
| Fahrtunterbrechung | 45 min nach 4,5 h Lenkzeit (oder 15 + 30 min) |
| tägliche Ruhezeit | 11 h (dreimal zwischen zwei Wochenruhezeiten 9 h; oder 3 + 9 h) |
| wöchentliche Ruhezeit | 45 h (reduziert mindestens 24 h) |

Als Disponent musst du diese Werte bei der **Tourenplanung** beachten. Eine Tour, die nur mit Verstößen zu schaffen ist, darf nicht geplant werden. Kontrolliert wird mit dem **Fahrtenschreiber**.`,
  deep: `# 1. Geltungsbereich und Begriffe (Art. 2 und 4)

Die Verordnung gilt im Straßengüterverkehr für Fahrzeuge mit einer zulässigen Höchstmasse (einschließlich Anhänger) **über 3,5 t** und seit **01.07.2026** auch für Fahrzeuge **über 2,5 t** im grenzüberschreitenden Güterverkehr und in der Kabotage.

| Begriff | Bedeutung nach Art. 4 |
|---|---|
| Woche | Montag 00:00 Uhr bis Sonntag 24:00 Uhr |
| Lenkzeit | Dauer der Lenktätigkeit, vom Fahrtenschreiber aufgezeichnet |
| tägliche Lenkzeit | summierte Lenkzeit zwischen dem Ende einer täglichen Ruhezeit und dem Beginn der nächsten |
| wöchentliche Lenkzeit | summierte Lenkzeit innerhalb einer Woche |
| Fahrtunterbrechung | Zeitraum ohne Lenken und ohne andere Arbeiten, nur zur Erholung |
| Ruhezeit | Zeitraum, in dem der Fahrer frei über seine Zeit verfügen kann |

# 2. Lenkzeiten (Art. 6)

- **Tageslenkzeit:** höchstens **9 Stunden**; **höchstens zweimal pro Woche** bis zu **10 Stunden**.
- **Wochenlenkzeit:** höchstens **56 Stunden**; die Höchstarbeitszeit nach der Richtlinie 2002/15/EG (in Deutschland § 21a ArbZG) darf dabei nicht überschritten werden.
- **Doppelwoche:** in zwei aufeinanderfolgenden Wochen zusammen höchstens **90 Stunden**.

**Rechenbeispiel Doppelwoche:** Woche 1 = 54 h → Woche 2 höchstens 90 − 54 = 36 h. Für die nächste Doppelwoche (Woche 2 + Woche 3) gilt wieder: zusammen höchstens 90 h.

# 3. Fahrtunterbrechung (Art. 7)

Nach **4,5 Stunden Lenkzeit** muss eine Fahrtunterbrechung von mindestens **45 Minuten** folgen, sofern nicht eine Ruhezeit beginnt.

- Aufteilung erlaubt: **zuerst mindestens 15 Minuten, danach mindestens 30 Minuten**, verteilt so, dass die 4,5 Stunden eingehalten werden.
- **Nicht erlaubt:** 30 + 15 Minuten oder drei Teile zu je 15 Minuten.
- Nach jeder vollständigen Unterbrechung beginnt die Zählung der 4,5 Stunden neu.

| Beispiel | Lenken | Pause | Lenken | Pause | Lenken | zulässig? |
|---|---|---|---|---|---|---|
| A | 4,5 h | 45 min | 4,5 h | – | – | ja |
| B | 2 h | 15 min | 2,5 h | 30 min | 4 h | ja |
| C | 2 h | 30 min | 2,5 h | 15 min | … | nein, Reihenfolge falsch |

# 4. Tägliche Ruhezeit (Art. 4 und 8)

| Art | Dauer |
|---|---|
| regelmäßige tägliche Ruhezeit | mindestens **11 Stunden** |
| aufgeteilte regelmäßige Ruhezeit | **3 Stunden + 9 Stunden** (erst mindestens 3, dann mindestens 9 Stunden, zusammen also 12 Stunden) |
| reduzierte tägliche Ruhezeit | mindestens **9**, aber weniger als 11 Stunden |

- Innerhalb von **24 Stunden** nach dem Ende der vorangegangenen Ruhezeit muss eine neue tägliche Ruhezeit genommen worden sein (Art. 8 Abs. 2).
- Zwischen zwei wöchentlichen Ruhezeiten sind **höchstens drei reduzierte** tägliche Ruhezeiten erlaubt (Art. 8 Abs. 4). Sie müssen nicht ausgeglichen werden.

# 5. Wöchentliche Ruhezeit (Art. 8 Abs. 6 bis 8)

- **Regelmäßig:** mindestens **45 Stunden**. **Reduziert:** weniger als 45, mindestens **24 Stunden**.
- In **zwei aufeinanderfolgenden Wochen** mindestens: zwei regelmäßige oder eine regelmäßige und eine reduzierte wöchentliche Ruhezeit.
- Die wöchentliche Ruhezeit beginnt spätestens am Ende von **sechs 24-Stunden-Zeiträumen** nach dem Ende der vorangegangenen wöchentlichen Ruhezeit.
- **Ausgleich:** Jede Reduzierung muss durch eine gleichwertige Ruhepause **en bloc vor dem Ende der dritten Woche** nach der betreffenden Woche ausgeglichen werden.
- **Regelmäßige** wöchentliche Ruhezeiten (und Ruhezeiten über 45 Stunden als Ausgleich) dürfen **nicht im Fahrzeug** verbracht werden. Der Arbeitgeber trägt die Kosten für eine geeignete Unterkunft.

**Rechenbeispiel Ausgleich:** reduzierte Wochenruhe von 30 h → Ausgleich 45 − 30 = **15 h**, angehängt an eine andere Ruhezeit von mindestens 9 Stunden.

# 6. Abweichung bei Notfällen (Art. 12)

Der Fahrer darf von den Art. 6 bis 9 abweichen, um einen **geeigneten Halteplatz** zu erreichen, wenn das für die Sicherheit von Personen, Fahrzeug oder Ladung nötig ist und die Verkehrssicherheit nicht gefährdet wird. Art und Grund muss er spätestens am Halteplatz vermerken (z. B. auf dem Ausdruck des Fahrtenschreibers).

# 7. Fahrtenschreiber (VO (EU) Nr. 165/2014)

- Der **digitale Fahrtenschreiber** zeichnet Lenkzeiten, andere Arbeiten, Bereitschaft und Ruhezeiten auf. Der Fahrer steckt seine **Fahrerkarte** ein, das Unternehmen liest die Daten regelmäßig mit der **Unternehmenskarte** aus und archiviert sie.
- Der **intelligente Fahrtenschreiber** (Smart Tachograph) erfasst zusätzlich per Satellitenortung Standorte, z. B. Grenzübertritte und Be- und Entladeorte, und kann von Kontrollbehörden im Vorbeifahren per Funk abgefragt werden. Für die Ausweitung auf Fahrzeuge über 2,5 t im grenzüberschreitenden Verkehr ist der intelligente Fahrtenschreiber Version 2 vorgeschrieben.
- Kontrollbehörde für Unternehmen und Fahrer auf der Straße ist in Deutschland u. a. das **Bundesamt für Logistik und Mobilität (BALM)**, daneben Polizei und Gewerbeaufsicht.

# 8. Bezug zum Arbeitszeitgesetz (§ 21a ArbZG)

Lenkzeit ist nur ein Teil der Arbeitszeit. Auch **Be- und Entladen, Fahrzeugkontrolle, Papiere** zählen zur Arbeitszeit. Für angestellte Fahrer gilt zusätzlich § 21a ArbZG:

- wöchentliche Arbeitszeit höchstens **48 Stunden**,
- Verlängerung bis **60 Stunden**, wenn im Durchschnitt von **vier Kalendermonaten oder 16 Wochen** 48 Stunden nicht überschritten werden.

Außerdem gelten die Ruhepausen nach § 4 ArbZG: bei mehr als 6 bis 9 Stunden Arbeitszeit mindestens 30 Minuten, bei mehr als 9 Stunden mindestens 45 Minuten, und niemand darf länger als 6 Stunden am Stück ohne Ruhepause arbeiten.

Die Lenkzeitregeln der VO 561/2006 bleiben daneben bestehen. Es gilt immer die strengere Grenze.`,
  terms: [
    { term: 'Lenkzeit', def: 'Zeit, in der der Fahrer das Fahrzeug tatsächlich lenkt; vom Fahrtenschreiber aufgezeichnet.' },
    { term: 'Tageslenkzeit', def: 'Summe der Lenkzeiten zwischen zwei täglichen Ruhezeiten; höchstens 9 h, zweimal pro Woche 10 h (Art. 6 Abs. 1).' },
    { term: 'Doppelwoche', def: 'Zwei aufeinanderfolgende Kalenderwochen; zusammen höchstens 90 h Lenkzeit (Art. 6 Abs. 3).' },
    { term: 'Fahrtunterbrechung', def: 'Pause von mindestens 45 min nach 4,5 h Lenkzeit, ohne Lenken und andere Arbeiten; teilbar in 15 + 30 min (Art. 7).' },
    { term: 'Regelmäßige tägliche Ruhezeit', def: 'Mindestens 11 h am Stück oder aufgeteilt in mindestens 3 h und anschließend mindestens 9 h.' },
    { term: 'Reduzierte tägliche Ruhezeit', def: 'Mindestens 9 h, aber weniger als 11 h; höchstens dreimal zwischen zwei wöchentlichen Ruhezeiten.' },
    { term: 'Regelmäßige wöchentliche Ruhezeit', def: 'Mindestens 45 h; darf nicht im Fahrzeug verbracht werden.' },
    { term: 'Reduzierte wöchentliche Ruhezeit', def: 'Weniger als 45 h, mindestens 24 h; muss bis zum Ende der dritten Folgewoche ausgeglichen werden.' },
    { term: 'Fahrerkarte', def: 'Persönliche Chipkarte des Fahrers für den digitalen Fahrtenschreiber; speichert seine Lenk-, Arbeits- und Ruhezeiten.' },
    { term: 'Intelligenter Fahrtenschreiber', def: 'Fahrtenschreiber mit Satellitenortung und Fernabfrage durch Kontrollbehörden (Smart Tachograph), Rechtsgrundlage VO (EU) Nr. 165/2014.' }
  ],
  example: `# Praxisbeispiel: Tour Saarbrücken – Lyon – zurück

Die Disponentin der Spedition Saar-Logistik plant für Fahrer Herrn Kaya am Dienstag eine Tour nach Lyon. Fahrstrecke 520 km, geplante Durchschnittsgeschwindigkeit inklusive Verkehr 65 km/h, Entladen in Lyon 1 Stunde.

**1. Lenkzeit:** 520 km ÷ 65 km/h = **8 h**. Das liegt unter 9 h, ein 10-Stunden-Tag wird nicht gebraucht.

**2. Pausenplan:**

| Uhrzeit | Tätigkeit |
|---|---|
| 05:30 – 05:45 | Abfahrtkontrolle (andere Arbeit) |
| 05:45 – 10:15 | Lenken 4,5 h |
| 10:15 – 11:00 | Fahrtunterbrechung 45 min |
| 11:00 – 14:30 | Lenken 3,5 h (Summe 8 h) |
| 14:30 – 15:30 | Entladen (andere Arbeit) |

**3. Arbeitszeit:** 0,25 h + 8 h + 1 h = **9,25 h**, Pause 45 min. Das passt auch zum Arbeitszeitgesetz.

**4. Ruhezeit:** Endet die Arbeit um 15:30 Uhr, darf Herr Kaya bei regelmäßiger Ruhezeit (11 h) frühestens um **02:30 Uhr** weiterfahren, bei reduzierter Ruhezeit (9 h) um **00:30 Uhr**. Die Disponentin plant die Rückfahrt ab 06:00 Uhr, damit eine volle Ruhezeit in einer Unterkunft möglich ist.

**5. Wochenblick:** Herr Kaya ist in der Vorwoche 50 h gelenkt. In dieser Woche darf er also höchstens 90 − 50 = **40 h** lenken.`,
  rules: [
    'Tag 9 h, zweimal pro Woche 10 h. Woche 56 h. Doppelwoche 90 h.',
    'Nach 4,5 h Lenkzeit 45 min Pause, teilbar nur in 15 + 30 min (in dieser Reihenfolge).',
    'Tägliche Ruhezeit 11 h, aufteilbar in 3 + 9 h, höchstens dreimal auf 9 h reduzierbar.',
    'Wöchentliche Ruhezeit 45 h, reduziert 24 h; die Kürzung wird bis zum Ende der dritten Folgewoche ausgeglichen.',
    'Spätestens nach sechs 24-Stunden-Zeiträumen beginnt die wöchentliche Ruhezeit.',
    'Regelmäßige wöchentliche Ruhezeit nie im Fahrzeug.',
    'Arbeitszeit ist mehr als Lenkzeit: höchstens 48 h, bis 60 h bei Ausgleich (§ 21a ArbZG).'
  ],
  summary: `- Rechtsgrundlage: VO (EG) Nr. 561/2006; Fahrtenschreiber nach VO (EU) Nr. 165/2014.
- Lenkzeit: 9 h/Tag (2× pro Woche 10 h), 56 h/Woche, 90 h/Doppelwoche.
- Fahrtunterbrechung: 45 min nach 4,5 h, oder 15 + 30 min.
- Tägliche Ruhezeit: 11 h, 3 + 9 h, reduziert 9 h (höchstens 3× zwischen zwei Wochenruhezeiten); neue Ruhezeit innerhalb von 24 h.
- Wöchentliche Ruhezeit: 45 h, reduziert 24 h, Ausgleich bis Ende der dritten Folgewoche; spätestens nach sechs 24-h-Zeiträumen.
- Arbeitszeit nach § 21a ArbZG: 48 h, bis 60 h bei Ausgleich in 4 Monaten oder 16 Wochen.`,
  mistakes: [
    { wrong: 'Ein Fahrer darf jeden Tag 10 Stunden lenken.', right: 'Grundsätzlich 9 Stunden; die Verlängerung auf 10 Stunden ist nur zweimal pro Woche erlaubt.' },
    { wrong: 'Die Pause darf in 30 + 15 Minuten aufgeteilt werden.', right: 'Nur 15 + 30 Minuten in dieser Reihenfolge sind zulässig; der zweite Teil muss mindestens 30 Minuten dauern.' },
    { wrong: 'Wer jede Woche 56 Stunden lenkt, hält die Regeln ein.', right: 'In zwei aufeinanderfolgenden Wochen sind nur 90 Stunden erlaubt; 2 × 56 = 112 Stunden wären ein Verstoß.' },
    { wrong: 'Bei der aufgeteilten Ruhezeit reichen 9 + 2 Stunden.', right: 'Der erste Teil muss mindestens 3 Stunden, der zweite mindestens 9 Stunden dauern, zusammen 12 Stunden.' },
    { wrong: 'Entladen ist keine Arbeitszeit, weil der Lkw steht.', right: 'Be- und Entladen sind andere Arbeiten und zählen zur Arbeitszeit, aber nicht als Pause.' },
    { wrong: 'Die regelmäßige Wochenruhe kann in der Schlafkabine verbracht werden.', right: 'Regelmäßige wöchentliche Ruhezeiten dürfen nicht im Fahrzeug verbracht werden (Art. 8 Abs. 8).' }
  ],
  flashcards: [
    { q: 'Wie lange darf die tägliche Lenkzeit höchstens sein?', a: '9 Stunden, höchstens zweimal pro Woche 10 Stunden (Art. 6 Abs. 1).' },
    { q: 'Wie hoch ist die Wochenlenkzeit höchstens?', a: '56 Stunden (Art. 6 Abs. 2).' },
    { q: 'Wie viele Stunden darf ein Fahrer in zwei aufeinanderfolgenden Wochen lenken?', a: '90 Stunden (Art. 6 Abs. 3).' },
    { q: 'Wann ist eine Fahrtunterbrechung fällig und wie lang?', a: 'Nach 4,5 Stunden Lenkzeit mindestens 45 Minuten, oder 15 Minuten und später 30 Minuten (Art. 7).' },
    { q: 'Wie lang ist die regelmäßige tägliche Ruhezeit?', a: 'Mindestens 11 Stunden, oder aufgeteilt in 3 + 9 Stunden.' },
    { q: 'Wie oft darf die tägliche Ruhezeit auf 9 Stunden reduziert werden?', a: 'Höchstens dreimal zwischen zwei wöchentlichen Ruhezeiten (Art. 8 Abs. 4).' },
    { q: 'Wie lang ist die regelmäßige und die reduzierte wöchentliche Ruhezeit?', a: 'Regelmäßig mindestens 45 Stunden, reduziert mindestens 24 Stunden.' },
    { q: 'Bis wann muss eine reduzierte wöchentliche Ruhezeit ausgeglichen werden?', a: 'En bloc vor dem Ende der dritten Woche nach der betreffenden Woche (Art. 8 Abs. 6b).' },
    { q: 'Was ist eine Woche im Sinne der VO 561/2006?', a: 'Montag 00:00 Uhr bis Sonntag 24:00 Uhr.' },
    { q: 'Wie hoch ist die wöchentliche Höchstarbeitszeit für angestellte Fahrer?', a: '48 Stunden, bis 60 Stunden, wenn in vier Kalendermonaten oder 16 Wochen im Durchschnitt 48 Stunden nicht überschritten werden (§ 21a Abs. 4 ArbZG).' }
  ],
  tasks: [
    {
      id: 'lf04-lenkzeiten-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Ein Fahrer hat in dieser Woche bereits zweimal 10 Stunden gelenkt. Wie lange darf er am Freitag höchstens lenken?',
      options: ['8 Stunden', '9 Stunden', '10 Stunden', '11 Stunden'],
      correct: [1],
      hints: ['Die Verlängerung auf 10 Stunden gibt es nur zweimal pro Woche.', 'Danach gilt wieder die Grundregel.'],
      solution: '**9 Stunden.** Die zwei erlaubten 10-Stunden-Tage sind verbraucht (Art. 6 Abs. 1 VO 561/2006). Zusätzlich müssen Wochen- und Doppelwochengrenze eingehalten werden.'
    },
    {
      id: 'lf04-lenkzeiten-a2', type: 'cloze', difficulty: 1, points: 6,
      q: 'Ergänze die Grenzwerte der VO (EG) Nr. 561/2006.',
      text: 'Die Wochenlenkzeit beträgt höchstens [[56]] Stunden, in zwei aufeinanderfolgenden Wochen höchstens [[90]] Stunden. Nach [[4,5|4.5|viereinhalb]] Stunden Lenkzeit ist eine Fahrtunterbrechung von [[45]] Minuten einzulegen. Die regelmäßige tägliche Ruhezeit beträgt [[11]] Stunden, die regelmäßige wöchentliche Ruhezeit [[45]] Stunden.',
      hints: ['Woche und Doppelwoche: Die Doppelwoche ist nicht einfach 2 × Woche.', 'Pause und Wochenruhe haben dieselbe Zahl, aber verschiedene Einheiten.'],
      solution: '56 – 90 – 4,5 – 45 – 11 – 45 (Art. 6, 7, 4 und 8 VO 561/2006).'
    },
    {
      id: 'lf04-lenkzeiten-a3', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Fahrer hat in Kalenderwoche 41 insgesamt 52 Stunden gelenkt. Wie viele Stunden darf er in Kalenderwoche 42 höchstens lenken? Wie viele Stunden wären es, wenn er in KW 41 nur 30 Stunden gelenkt hätte?',
      formula: 'max. Woche 2 = min(56 h; 90 h − Lenkzeit Woche 1)',
      fields: [
        { id: 'w52', label: 'Höchstlenkzeit KW 42 nach 52 h', unit: 'h', answer: 38, tol: 0 },
        { id: 'w30', label: 'Höchstlenkzeit KW 42 nach 30 h', unit: 'h', answer: 56, tol: 0 }
      ],
      hints: ['Rechne zuerst 90 h minus Vorwoche.', 'Vergleiche das Ergebnis mit der Wochengrenze von 56 h, der kleinere Wert gilt.'],
      solution: `**Formel:** max. Lenkzeit Woche 2 = min(56 h; 90 h − Woche 1)

1. Nach 52 h: 90 h − 52 h = 38 h; 38 h < 56 h → **38 h**
2. Nach 30 h: 90 h − 30 h = 60 h; aber Wochengrenze 56 h → **56 h**

Beide Grenzen (Art. 6 Abs. 2 und 3) müssen gleichzeitig eingehalten werden.`
    },
    {
      id: 'lf04-lenkzeiten-a4', type: 'calc', difficulty: 2, points: 3,
      q: 'Eine Tour ist 690 km lang. Der Disponent rechnet mit durchschnittlich 69 km/h. Andere Arbeiten bleiben unberücksichtigt. Berechne die Lenkzeit, die Summe der nötigen Fahrtunterbrechungen (je 45 min) und die Dauer von Fahrtbeginn bis Ankunft.',
      formula: 'Lenkzeit = Strecke ÷ Geschwindigkeit; Unterbrechungen: je 45 min nach jeweils 4,5 h Lenkzeit',
      fields: [
        { id: 'lenk', label: 'Lenkzeit', unit: 'h', answer: 10, tol: 0.01 },
        { id: 'pause', label: 'Fahrtunterbrechungen gesamt', unit: 'min', answer: 90, tol: 0 },
        { id: 'gesamt', label: 'Dauer Fahrtbeginn bis Ankunft', unit: 'h', answer: 11.5, tol: 0.01 }
      ],
      hints: ['690 ÷ 69 = ? Ist diese Lenkzeit überhaupt erlaubt?', 'Teile die Lenkzeit in Blöcke von höchstens 4,5 h: 4,5 h + 4,5 h + Rest.'],
      solution: `1. Lenkzeit = 690 km ÷ 69 km/h = **10 h**. Das ist nur an einem der zwei erlaubten 10-Stunden-Tage der Woche zulässig.
2. Blöcke: 4,5 h Lenken – 45 min – 4,5 h Lenken – 45 min – 1 h Lenken. Nach dem zweiten 4,5-h-Block ist erneut eine Unterbrechung nötig, bevor die letzte Stunde gefahren wird.
3. Unterbrechungen: 2 × 45 min = **90 min** = 1,5 h
4. Dauer: 10 h + 1,5 h = **11,5 h**`
    },
    {
      id: 'lf04-lenkzeiten-a5', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Pausenregelungen sind nach Art. 7 VO 561/2006 zulässig? (Mehrfachauswahl)',
      options: [
        '4,5 h lenken, 45 min Pause',
        '1,5 h lenken, 15 min Pause, 3 h lenken, 30 min Pause',
        '2 h lenken, 30 min Pause, 2,5 h lenken, 15 min Pause',
        '1,5 h lenken, 15 min Pause, 1,5 h lenken, 15 min Pause, 1,5 h lenken, 15 min Pause',
        '3 h lenken, 15 min Pause, 1,5 h lenken, 35 min Pause'
      ],
      correct: [0, 1, 4],
      hints: ['Erlaubt sind 45 min am Stück oder 15 min und danach mindestens 30 min.', 'Drei Pausen zu 15 min ergeben zwar 45 min, entsprechen aber nicht der Aufteilung.'],
      solution: 'Richtig sind **1, 2 und 5**. Bei 2 und 5 kommt zuerst ein Teil von mindestens 15 min und danach einer von mindestens 30 min, bevor 4,5 h Lenkzeit überschritten sind. Bei 3 ist die Reihenfolge falsch (30 + 15), bei 4 fehlt ein Teil von mindestens 30 min.'
    },
    {
      id: 'lf04-lenkzeiten-a6', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne die Ruhezeiten ihrer Mindestdauer zu.',
      pairs: [
        ['regelmäßige tägliche Ruhezeit', '11 Stunden'],
        ['reduzierte tägliche Ruhezeit', '9 Stunden'],
        ['aufgeteilte tägliche Ruhezeit', '3 Stunden + 9 Stunden'],
        ['regelmäßige wöchentliche Ruhezeit', '45 Stunden'],
        ['reduzierte wöchentliche Ruhezeit', '24 Stunden']
      ],
      hints: ['Die aufgeteilte Ruhezeit ist insgesamt länger als die regelmäßige.', 'Die reduzierte Wochenruhe entspricht einem ganzen Tag.'],
      solution: 'Täglich: 11 h regelmäßig, 9 h reduziert, 3 + 9 h aufgeteilt. Wöchentlich: 45 h regelmäßig, 24 h reduziert (Art. 4 g und h, Art. 8 VO 561/2006).'
    },
    {
      id: 'lf04-lenkzeiten-a7', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Fahrer beendet seine Arbeit am Mittwoch um 21:15 Uhr und beginnt am Donnerstag um 06:45 Uhr. Seit seiner letzten wöchentlichen Ruhezeit hat er bereits zwei reduzierte tägliche Ruhezeiten genommen. Berechne die Ruhezeit. Ein anderer Fahrer nimmt eine aufgeteilte Ruhezeit (3 h + 9 h). Wie lange dauert sie mindestens insgesamt? Wie lange müsste eine reduzierte wöchentliche Ruhezeit von 28 h ausgeglichen werden?',
      formula: 'Ruhezeit = Beginn − Ende; aufgeteilt = 3 h + 9 h; Ausgleich = 45 h − reduzierte Wochenruhe',
      fields: [
        { id: 'ruhe', label: 'Ruhezeit Mittwoch/Donnerstag', unit: 'h', answer: 9.5, tol: 0.01 },
        { id: 'split', label: 'aufgeteilte Ruhezeit insgesamt', unit: 'h', answer: 12, tol: 0 },
        { id: 'ausgleich', label: 'Ausgleich für 28 h Wochenruhe', unit: 'h', answer: 17, tol: 0 }
      ],
      hints: ['21:15 bis 24:00 und 00:00 bis 06:45 zusammenzählen.', 'Der Ausgleich ist die Differenz zur regelmäßigen Wochenruhe von 45 h.'],
      solution: `1. 21:15 bis 24:00 = 2,75 h; 00:00 bis 06:45 = 6,75 h; zusammen **9,5 h**. Das ist eine **reduzierte** Ruhezeit (mindestens 9, weniger als 11 h). Es ist die dritte reduzierte Ruhezeit und damit gerade noch zulässig (Art. 8 Abs. 4).
2. Aufgeteilte Ruhezeit: 3 h + 9 h = **12 h**
3. Ausgleich: 45 h − 28 h = **17 h**, en bloc vor Ende der dritten Folgewoche (Art. 8 Abs. 6b).`
    },
    {
      id: 'lf04-lenkzeiten-a8', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte einer sorgfältigen Tourenplanung durch die Disposition in eine sinnvolle Reihenfolge.',
      items: [
        'Strecke und realistische Durchschnittsgeschwindigkeit ermitteln',
        'Lenkzeit berechnen und mit Tages-, Wochen- und Doppelwochengrenze vergleichen',
        'Fahrtunterbrechungen nach je 4,5 h einplanen',
        'Lade- und Entladezeiten als andere Arbeiten ergänzen und Arbeitszeit prüfen',
        'tägliche Ruhezeit und frühesten nächsten Fahrtbeginn festlegen'
      ],
      hints: ['Ohne Strecke keine Lenkzeit.', 'Die Ruhezeit schließt den Arbeitstag ab.'],
      solution: 'Strecke – Lenkzeit und Grenzen – Pausen – andere Arbeiten und Arbeitszeit – Ruhezeit. Erst so ergibt sich ein Tourplan, der VO 561/2006 und ArbZG einhält.'
    },
    {
      id: 'lf04-lenkzeiten-a9', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zur wöchentlichen Ruhezeit sind richtig? (Mehrfachauswahl)',
      options: [
        'Die regelmäßige wöchentliche Ruhezeit darf nicht im Fahrzeug verbracht werden.',
        'Eine reduzierte wöchentliche Ruhezeit muss nie ausgeglichen werden.',
        'Spätestens nach sechs 24-Stunden-Zeiträumen muss die wöchentliche Ruhezeit beginnen.',
        'Die reduzierte wöchentliche Ruhezeit beträgt mindestens 9 Stunden.'
      ],
      correct: [0, 2],
      hints: ['Art. 8 Abs. 8 regelt den Ort der Ruhezeit.', 'Die reduzierte Wochenruhe dauert mindestens 24 h und wird ausgeglichen.'],
      solution: 'Richtig sind **1 und 3**. Die reduzierte wöchentliche Ruhezeit dauert mindestens 24 h und muss bis zum Ende der dritten Folgewoche ausgeglichen werden. 9 h ist die reduzierte tägliche Ruhezeit.'
    },
    {
      id: 'lf04-lenkzeiten-a10', type: 'text', difficulty: 3, points: 3,
      q: 'Erkläre den Unterschied zwischen Lenkzeit und Arbeitszeit und nenne die Grenze des Arbeitszeitgesetzes für Fahrer. (3–4 Sätze)',
      model: 'Lenkzeit ist nur die Zeit, in der der Fahrer das Fahrzeug tatsächlich lenkt. Zur Arbeitszeit gehören zusätzlich andere Arbeiten wie Be- und Entladen, Abfahrtkontrolle oder Papiere erledigen; Pausen zählen nicht dazu. Nach § 21a ArbZG darf die wöchentliche Arbeitszeit höchstens 48 Stunden betragen; sie darf auf bis zu 60 Stunden verlängert werden, wenn im Durchschnitt von vier Kalendermonaten oder 16 Wochen 48 Stunden nicht überschritten werden.',
      criteria: [
        { text: 'beschreibt Lenkzeit als reine Fahrtätigkeit', keywords: ['lenkt|Lenken|Fahrtätigkeit|fährt'], points: 1 },
        { text: 'nennt andere Arbeiten als Teil der Arbeitszeit', keywords: ['Be- und Entladen|Entladen|Beladen|andere Arbeiten|Kontrolle'], points: 1 },
        { text: 'nennt 48 bzw. 60 Stunden', keywords: ['48', '60'], points: 1 }
      ],
      hints: ['Was macht ein Fahrer außer Fahren?', '§ 21a Abs. 4 ArbZG nennt zwei Stundenwerte.'],
      solution: 'Siehe Musterlösung: Arbeitszeit = Lenkzeit + andere Arbeiten (ohne Pausen); höchstens 48 h pro Woche, bis 60 h mit Ausgleich auf durchschnittlich 48 h in 4 Monaten oder 16 Wochen.'
    },
    {
      id: 'lf04-lenkzeiten-a11', type: 'case', difficulty: 3, points: 7,
      q: 'Fallsituation: Tagesplanung für Fahrerin Weber',
      intro: 'Fahrerin Frau Weber startet am Montag um 06:00 Uhr in Neunkirchen. Plan: 06:00–10:30 Uhr Lenken, 10:30–11:15 Uhr Fahrtunterbrechung, 11:15–15:15 Uhr Lenken, 15:15–16:15 Uhr Entladen. Danach Feierabend.',
      parts: [
        {
          id: 'lf04-lenkzeiten-a11a', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne die Tageslenkzeit und die Arbeitszeit (Lenkzeit + andere Arbeiten, ohne Pause).',
          formula: 'Tageslenkzeit = Summe der Lenkblöcke; Arbeitszeit = Lenkzeit + Entladen',
          fields: [
            { id: 'lenk', label: 'Tageslenkzeit', unit: 'h', answer: 8.5, tol: 0.01 },
            { id: 'arbeit', label: 'Arbeitszeit', unit: 'h', answer: 9.5, tol: 0.01 }
          ],
          hints: ['06:00–10:30 und 11:15–15:15.', 'Die Fahrtunterbrechung zählt nicht zur Arbeitszeit.'],
          solution: `1. Lenkzeit: 4,5 h (06:00–10:30) + 4 h (11:15–15:15) = **8,5 h**
2. Arbeitszeit: 8,5 h + 1 h Entladen = **9,5 h**

Die Tageslenkzeit von 9 h ist eingehalten. Nach § 4 ArbZG ist bei mehr als 9 Stunden Arbeitszeit eine Ruhepause von 45 Minuten nötig; die Fahrtunterbrechung von 45 Minuten erfüllt das.`
        },
        {
          id: 'lf04-lenkzeiten-a11b', type: 'mc', difficulty: 2, points: 2,
          q: 'Wann darf Frau Weber am Dienstag frühestens wieder losfahren, wenn sie eine regelmäßige tägliche Ruhezeit am Stück nimmt?',
          options: ['01:15 Uhr', '03:15 Uhr', '06:00 Uhr', '05:15 Uhr'],
          correct: [1],
          hints: ['Die Ruhezeit beginnt mit dem Ende der Arbeit, nicht mit dem Ende der Lenkzeit.', '16:15 Uhr + 11 h.'],
          solution: '**03:15 Uhr.** Arbeitsende 16:15 Uhr + 11 h regelmäßige Ruhezeit = 03:15 Uhr. Mit reduzierter Ruhezeit (9 h) wäre 01:15 Uhr möglich.'
        },
        {
          id: 'lf04-lenkzeiten-a11c', type: 'mc', difficulty: 3, points: 3,
          q: 'Der Kunde bittet kurzfristig, nach dem Entladen noch eine Abholung in 60 Minuten Fahrtentfernung zu übernehmen. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Die zusätzliche Stunde ergibt 9,5 h Lenkzeit; das ist nur an einem der zwei erlaubten 10-Stunden-Tage der Woche zulässig.',
            'Nach 15:15 Uhr ist sofort eine weitere Fahrtunterbrechung von 45 min nötig, bevor sie weiterfährt.',
            'Weil Frau Weber seit 11:15 Uhr 4 h gelenkt hat, darf sie nach dem Entladen höchstens noch 30 Minuten lenken, bevor eine Fahrtunterbrechung nötig ist.',
            'Das Entladen von einer Stunde gilt als Fahrtunterbrechung.'
          ],
          correct: [0, 2],
          hints: ['Entladen ist andere Arbeit, keine Pause.', 'Seit der letzten Unterbrechung: 4 h Lenkzeit. Wie viel fehlt bis 4,5 h?'],
          solution: 'Richtig sind **1 und 3**. 8,5 h + 1 h = 9,5 h Lenkzeit: nur an einem 10-Stunden-Tag erlaubt. Seit der letzten Unterbrechung sind 4 h gelenkt, nach weiteren 30 min ist eine Fahrtunterbrechung von 45 min nötig (eine Teilpause von 15 min wurde in diesem Block nicht genommen). Entladen ist andere Arbeit und keine Fahrtunterbrechung (Art. 4 d). Eine sofortige Pause um 15:15 Uhr ist nicht vorgeschrieben.'
        }
      ],
      hints: ['Trenne Lenkzeit, andere Arbeiten und Pausen.', 'Prüfe Tageslenkzeit und 4,5-Stunden-Regel getrennt.'],
      solution: 'Lenkzeit 8,5 h, Arbeitszeit 9,5 h; frühester Fahrtbeginn nach 11 h Ruhezeit: 03:15 Uhr. Die Zusatzfahrt ist nur an einem 10-Stunden-Tag und mit einer weiteren Fahrtunterbrechung nach 30 min Lenkzeit möglich.'
    }
  ],
  quiz: ['lf04-lenkzeiten-a2', 'lf04-lenkzeiten-a3', 'lf04-lenkzeiten-a4', 'lf04-lenkzeiten-a5', 'lf04-lenkzeiten-a9'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 4, Inhalte: Fahrzeugeinsatzplanung, Lenk- und Ruhezeiten im Güterkraftverkehr' },
    { title: 'Verordnung (EG) Nr. 561/2006 zur Harmonisierung bestimmter Sozialvorschriften im Straßenverkehr, konsolidierte Fassung', publisher: 'Amt für Veröffentlichungen der EU (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:02006R0561-20241231', asOf: '2024-12-31 (konsolidierte Fassung), geprüft 2026-10-17' },
    { title: 'Verordnung (EG) Nr. 561/2006, konsolidierte Fassung 20.08.2020 (Wortlaut Art. 4, 6, 7, 8, 12)', publisher: 'Amt für Veröffentlichungen der EU (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:02006R0561-20200820', asOf: '2026-10-17' },
    { title: 'Arbeitszeitgesetz § 21a Beschäftigung im Straßentransport', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/arbzg/__21a.html', asOf: '2026-10-17' },
    { title: 'Arbeitszeitgesetz § 4 Ruhepausen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/arbzg/__4.html', asOf: '2026-10-17' },
    { title: 'EU-Tachographenpflicht: Neue Regeln für leichte Nutzfahrzeuge (Hinweis zur Rechtslage ab 01.07.2026)', publisher: 'CMS Hasche Sigle', url: 'https://cms.law/de/deu/legal-updates/eu-tachographenpflicht-neue-regeln-fuer-leichte-nutzfahrzeuge', asOf: '2026-10-17' }
  ],
  links: ['lf04-cmr', 'lf04-fahrzeugplanung', 'lf07-fahrzeugkosten']
};
