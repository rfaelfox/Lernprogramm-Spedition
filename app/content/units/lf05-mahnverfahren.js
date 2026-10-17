export default {
  id: 'lf05-mahnverfahren',
  area: 'LF05',
  topic: 'lf05-mahnverfahren',
  title: 'Kaufmännisches und gerichtliches Mahnverfahren',
  status: 'vollstaendig',
  minutes: 35,
  validity: {
    asOf: '2026-10',
    note: 'Zahlungsverzug § 286 BGB, Verzugszinsen 5 bzw. 9 Prozentpunkte über dem Basiszinssatz und 40-€-Pauschale § 288 BGB, Basiszinssatz § 247 BGB (wird zum 1.1. und 1.7. angepasst; in den Aufgaben nur Beispielwerte), regelmäßige Verjährung 3 Jahre ab Jahresende §§ 195, 199 BGB, Sonderregel für Ansprüche aus Fracht- und Speditionsverträgen einschließlich Vergütung: 1 Jahr ab Ablieferung (§§ 439, 463 HGB; BGH, Urteil vom 22.04.2010, I ZR 31/08), Hemmung §§ 203, 204 BGB, Neubeginn § 212 BGB, 30 Jahre für titulierte Ansprüche § 197 BGB, gerichtliches Mahnverfahren §§ 688–703d ZPO (Widerspruch 2 Wochen § 692, Einspruch 2 Wochen §§ 700, 339 ZPO, Wegfall nach 6 Monaten § 701 ZPO). Zuständiges zentrales Mahngericht für Antragsteller mit Sitz im Saarland: Amtsgericht Mayen (laut mahngerichte.de). Stand Oktober 2026.'
  },
  goals: [
    'Ich kann die Stufen des kaufmännischen (außergerichtlichen) Mahnverfahrens beschreiben und eine passende Mahnstufe wählen.',
    'Ich kann erklären, wann ein Kunde in Zahlungsverzug gerät, und Verzugszinsen berechnen.',
    'Ich kann den Ablauf des gerichtlichen Mahnverfahrens vom Antrag bis zur Zwangsvollstreckung in die richtige Reihenfolge bringen.',
    'Ich kann die Fristen für Widerspruch und Einspruch nennen und die Folgen eines Fristversäumnisses erklären.',
    'Ich kann das für eine saarländische Spedition zuständige Mahngericht nennen.',
    'Ich kann Beginn und Ende der regelmäßigen Verjährung und der einjährigen Verjährung von Frachtforderungen berechnen und Hemmung und Neubeginn unterscheiden.'
  ],
  simple: `# Worum geht es?

Eine Spedition fährt erst – und wird oft erst Wochen später bezahlt. Manche Kunden zahlen zu spät oder gar nicht. Dann muss die Buchhaltung das Geld **einfordern**. Das geschieht in zwei Stufen:

1. **Kaufmännisches (außergerichtliches) Mahnverfahren**: Die Spedition erinnert und mahnt selbst – freundlich zuerst, dann immer bestimmter.
2. **Gerichtliches Mahnverfahren**: Zahlt der Kunde trotzdem nicht, beantragt die Spedition beim Mahngericht einen **Mahnbescheid**. Ohne Gegenwehr des Kunden erhält sie einen **Vollstreckungsbescheid** und kann mit dem **Gerichtsvollzieher** vollstrecken.

# Kaufmännische Mahnstufen (Beispiel)

| Stufe | Ton | Inhalt |
|---|---|---|
| Zahlungserinnerung | freundlich | „Sicher haben Sie die Rechnung übersehen …“, Kopie der Rechnung |
| 1. Mahnung | bestimmt | Zahlungsfrist setzen |
| 2. Mahnung | deutlich | neue Frist, Verzugszinsen und Mahnkosten |
| Letzte Mahnung | scharf | letzte Frist, Ankündigung des gerichtlichen Mahnverfahrens |

Die Stufen sind **nicht gesetzlich vorgeschrieben**. Rechtlich genügt oft schon **eine** Mahnung, damit der Kunde in Verzug ist.

# Achtung Verjährung!

Nach Ablauf der Verjährung kann der Kunde die Zahlung verweigern. Für Speditionen besonders wichtig:

- **Vergütung aus Fracht- und Speditionsverträgen** (z. B. Rechnung für einen Transport): nur **1 Jahr** ab **Ablieferung** des Gutes (§§ 439, 463 HGB).
- **Andere Forderungen** (z. B. Verkauf eines gebrauchten Lkw, Vermietung von Büroräumen): **3 Jahre**, gerechnet ab dem **Ende des Jahres** der Entstehung (§§ 195, 199 BGB).`,
  deep: `# 1. Zahlungsverzug als Ausgangspunkt

Nach **§ 286 BGB** kommt ein Kunde in Verzug, wenn er trotz **Fälligkeit** nicht zahlt und
- **gemahnt** wurde (die Zustellung eines Mahnbescheids steht einer Mahnung gleich), oder
- ein **Kalendertermin** vereinbart war (z. B. „zahlbar bis 15.04.2026“) – dann ist keine Mahnung nötig, oder
- spätestens **30 Tage nach Fälligkeit und Zugang der Rechnung** vergangen sind (gegenüber Verbrauchern nur mit Hinweis in der Rechnung).

**Folgen (§ 288 BGB):**
- Verzugszinsen **9 Prozentpunkte über dem Basiszinssatz** bei Entgeltforderungen, wenn kein Verbraucher beteiligt ist (typisch für Speditionen); sonst 5 Prozentpunkte.
- **40 € Pauschale** gegenüber Schuldnern, die keine Verbraucher sind (wird auf Rechtsverfolgungskosten angerechnet).
- Der **Basiszinssatz** (§ 247 BGB) wird zum 1. Januar und 1. Juli angepasst und von der Deutschen Bundesbank bekannt gegeben. Vor jeder Berechnung den aktuellen Wert nachsehen.

**Verzugszinsen (Schulrechnung)** = Forderung × Zinssatz × Verzugstage ÷ (100 × 360)

Mehr zum Verzug allgemein: Einheit „Mangelhafte Lieferung und Lieferungsverzug“.

# 2. Kaufmännisches Mahnverfahren

Ziel: Geld bekommen **und** den Kunden behalten. Deshalb steigert sich der Ton schrittweise. Gute Praxis:
- **offene Posten** regelmäßig überwachen (OP-Liste, Fälligkeiten),
- jede Mahnung mit **Rechnungsnummer, Betrag, Frist** und ggf. **Verzugszinsen** versehen,
- Mahnungen **nachweisbar** versenden (z. B. E-Mail mit Lesebestätigung, Einschreiben),
- bei Stammkunden zuerst **telefonieren**,
- vor dem gerichtlichen Verfahren prüfen: Ist der Kunde zahlungsfähig? Ist die Forderung unstreitig?

Alternativ kann die Spedition die Forderung an ein **Inkassounternehmen** abgeben.

# 3. Gerichtliches Mahnverfahren (§§ 688 ff. ZPO)

Voraussetzung: Es geht um eine **bestimmte Geldsumme in Euro**, und die Gegenleistung ist bereits erbracht (§ 688 ZPO) – bei einer Spedition also: Der Transport ist durchgeführt.

**Zuständigkeit:** Ausschließlich zuständig ist das Amtsgericht am **allgemeinen Gerichtsstand des Antragstellers** (§ 689 Abs. 2 ZPO). Die Länder haben zentrale Mahngerichte eingerichtet. Für Antragsteller mit Sitz im **Saarland** ist das **Amtsgericht Mayen** (Zentrales Mahngericht Rheinland-Pfalz und Saarland) zuständig. Der Antrag wird heute meist online (z. B. über www.online-mahnantrag.de) gestellt.

**Ablauf:**

1. **Antrag** auf Erlass eines Mahnbescheids (Parteien, Anspruch, Erklärung zur Gegenleistung, zuständiges Streitgericht – § 690 ZPO).
2. Das Gericht prüft **nicht**, ob der Anspruch wirklich besteht, und erlässt den **Mahnbescheid**. Er wird dem Schuldner zugestellt.
3. Der Schuldner hat **2 Wochen ab Zustellung** Zeit (§ 692 ZPO):
   - **zahlen** → Verfahren erledigt,
   - **Widerspruch** einlegen → auf Antrag Abgabe an das Streitgericht, normaler Prozess (**streitiges Verfahren**, § 696 ZPO),
   - **nichts tun** → weiter mit Schritt 4.
   Ein verspäteter Widerspruch ist noch möglich, solange der Vollstreckungsbescheid nicht verfügt ist (§ 694 ZPO).
4. Nach Ablauf der Widerspruchsfrist beantragt der Gläubiger den **Vollstreckungsbescheid** (§ 699 ZPO) – spätestens innerhalb von **6 Monaten** nach Zustellung des Mahnbescheids, sonst fällt dessen Wirkung weg (§ 701 ZPO).
5. Der **Vollstreckungsbescheid** wirkt wie ein vorläufig vollstreckbares **Versäumnisurteil** (§ 700 ZPO). Der Schuldner kann innerhalb von **2 Wochen ab Zustellung Einspruch** einlegen (§ 339 ZPO). Dann folgt ebenfalls ein streitiges Verfahren.
6. Ohne Einspruch wird der Vollstreckungsbescheid **rechtskräftig**. Er ist ein **Vollstreckungstitel**; der titulierte Anspruch verjährt erst nach **30 Jahren** (§ 197 Abs. 1 Nr. 3 BGB).
7. **Zwangsvollstreckung**: z. B. Pfändung beweglicher Sachen durch den **Gerichtsvollzieher**, Pfändung von Bankguthaben oder Forderungen, Vermögensauskunft des Schuldners.

| Frist | Dauer | Beginn |
|---|---|---|
| Widerspruch gegen den Mahnbescheid | 2 Wochen | Zustellung des Mahnbescheids |
| Antrag auf Vollstreckungsbescheid | spätestens 6 Monate | Zustellung des Mahnbescheids |
| Einspruch gegen den Vollstreckungsbescheid | 2 Wochen | Zustellung des Vollstreckungsbescheids |

# 4. Verjährung

**a) Regelmäßige Verjährung nach BGB**

- **Regelmäßige Verjährungsfrist: 3 Jahre** (§ 195 BGB).
- **Beginn:** mit dem **Schluss des Jahres**, in dem der Anspruch entstanden ist und der Gläubiger Kenntnis von Anspruch und Schuldner hat (§ 199 Abs. 1 BGB).
- Beispiel: Die Spedition verkauft am 20.05.2026 einen gebrauchten Gabelstapler auf Ziel → Beginn 31.12.2026, 24 Uhr → Verjährung mit Ablauf des **31.12.2029**.

**b) Sonderregel für Fracht- und Speditionsverträge (§§ 439, 463 HGB)**

- Ansprüche „aus einer Beförderung“ verjähren in **einem Jahr**, bei Vorsatz oder gleichstehendem Verschulden in drei Jahren (§ 439 Abs. 1 HGB). Für den Speditionsvertrag gilt das entsprechend (§ 463 HGB).
- Erfasst ist nach der Rechtsprechung des BGH auch der **Vergütungsanspruch** (Fracht, Speditionsentgelt), nicht nur Schadenersatz (BGH, Urteil vom 22.04.2010, I ZR 31/08).
- **Beginn:** mit **Ablauf des Tages der Ablieferung** des Gutes – **nicht** erst am Jahresende (§ 439 Abs. 2 HGB).
- Beispiel: Sendung am 14.10.2026 abgeliefert → Verjährung der Frachtforderung mit Ablauf des **14.10.2027**.

Für Hemmung und Neubeginn gelten auch hier die Regeln des BGB:

**Hemmung** – die Uhr wird **angehalten**, die Zeit der Hemmung wird nicht mitgerechnet:
- **Verhandlungen** über den Anspruch (§ 203 BGB; Verjährung frühestens 3 Monate nach Ende der Verhandlungen),
- **Zustellung des Mahnbescheids** oder **Klageerhebung** (§ 204 Abs. 1 Nr. 3 und Nr. 1 BGB); die Hemmung endet 6 Monate nach Abschluss des Verfahrens.

**Neubeginn** – die Uhr wird **auf null gestellt**, die volle Frist läuft von vorn (§ 212 BGB):
- **Anerkenntnis** des Schuldners, z. B. durch **Abschlagszahlung**, Zinszahlung, Sicherheitsleistung oder Bitte um Stundung,
- Beantragung oder Vornahme einer **Vollstreckungshandlung**.

> Wichtig: Eine einfache Mahnung **hemmt die Verjährung nicht**! Weil Frachtforderungen schon nach einem Jahr verjähren, muss die Buchhaltung offene Posten eng überwachen und rechtzeitig einen Mahnbescheid beantragen.`,
  terms: [
    { term: 'Kaufmännisches Mahnverfahren', def: 'Außergerichtliche, gesetzlich nicht geregelte Mahnungen des Gläubigers in steigender Schärfe (Zahlungserinnerung bis letzte Mahnung).' },
    { term: 'Mahnung', def: 'Eindeutige Aufforderung des Gläubigers an den Schuldner, die fällige Leistung zu erbringen; begründet den Verzug (§ 286 Abs. 1 BGB).' },
    { term: 'Gerichtliches Mahnverfahren', def: 'Vereinfachtes Gerichtsverfahren nach §§ 688 ff. ZPO, mit dem ein Gläubiger ohne Klage einen Vollstreckungstitel über eine Geldforderung erlangen kann.' },
    { term: 'Mahnbescheid', def: 'Vom Mahngericht ohne Prüfung des Anspruchs erlassene Aufforderung an den Schuldner, binnen 2 Wochen zu zahlen oder zu widersprechen.' },
    { term: 'Widerspruch', def: 'Rechtsbehelf des Schuldners gegen den Mahnbescheid (2 Wochen ab Zustellung); führt auf Antrag ins streitige Verfahren.' },
    { term: 'Vollstreckungsbescheid', def: 'Vollstreckungstitel, der auf Antrag nach Ablauf der Widerspruchsfrist ergeht; wirkt wie ein vorläufig vollstreckbares Versäumnisurteil.' },
    { term: 'Einspruch', def: 'Rechtsbehelf gegen den Vollstreckungsbescheid; Frist 2 Wochen ab Zustellung (§ 339 ZPO).' },
    { term: 'Zwangsvollstreckung', def: 'Durchsetzung eines Titels mit staatlicher Hilfe, z. B. Pfändung durch den Gerichtsvollzieher oder Kontopfändung.' },
    { term: 'Verjährung', def: 'Nach Ablauf der Verjährungsfrist darf der Schuldner die Leistung verweigern (Einrede); die Forderung besteht aber weiter.' },
    { term: 'Verjährung von Frachtforderungen', def: 'Ansprüche aus Fracht- und Speditionsverträgen, auch die Vergütung, verjähren in einem Jahr ab Ablieferung des Gutes (§§ 439, 463 HGB).' },
    { term: 'Hemmung der Verjährung', def: 'Zeitraum, der in die Verjährungsfrist nicht eingerechnet wird, z. B. während Verhandlungen oder nach Zustellung eines Mahnbescheids.' },
    { term: 'Neubeginn der Verjährung', def: 'Die Verjährungsfrist beginnt vollständig neu, z. B. nach Anerkenntnis durch Abschlagszahlung (§ 212 BGB).' },
    { term: 'Basiszinssatz', def: 'Veränderlicher Bezugszinssatz nach § 247 BGB, halbjährlich angepasst und von der Bundesbank bekannt gegeben; Grundlage der Verzugszinsen.' }
  ],
  example: `# Saar-Trans Spedition GmbH gegen Westrich Handels GmbH (Beispiel, Bezugsjahr 2026)

Die Saar-Trans Spedition GmbH, Saarbrücken, hat der Westrich Handels GmbH (Kaiserslautern) am 02.02.2026 eine Rechnung über **8.400 €** für mehrere Sammelgutsendungen geschickt, fällig sofort, zugegangen am 03.02.2026.

| Datum | Vorgang |
|---|---|
| 17.02.2026 | Zahlungserinnerung mit Rechnungskopie |
| 05.03.2026 | **1. Mahnung**, Frist bis 15.03.2026 → Kunde ist ab Zugang der Mahnung in Verzug |
| 20.03.2026 | 2. Mahnung mit Verzugszinsen und 40 € Pauschale |
| 07.04.2026 | Letzte Mahnung: „Sollte der Betrag bis 17.04.2026 nicht eingegangen sein, beantragen wir einen Mahnbescheid.“ |
| 20.04.2026 | Online-Antrag beim **Amtsgericht Mayen** (Sitz der Spedition im Saarland) |
| 28.04.2026 | Zustellung des Mahnbescheids → Widerspruchsfrist bis 12.05.2026 |
| 13.05.2026 | Kein Widerspruch → Antrag auf Vollstreckungsbescheid |
| 21.05.2026 | Zustellung des Vollstreckungsbescheids → Einspruchsfrist bis 04.06.2026 |
| ab 05.06.2026 | Kein Einspruch → Vollstreckungsbescheid rechtskräftig, Auftrag an den Gerichtsvollzieher |

# Verzugszinsen (Beispielwert Basiszinssatz 2,00 %)

Zinssatz: 2,00 % + 9 Prozentpunkte = 11,00 % p. a.

Für 45 Verzugstage: 8.400 € × 11 × 45 ÷ (100 × 360) = **115,50 €**, zusätzlich **40 € Pauschale**.

# Verjährung

Die Sendungen wurden Ende Januar 2026 abgeliefert. Als Vergütung aus Speditionsverträgen verjährt die Forderung nach **einem Jahr ab Ablieferung** (§§ 439, 463 HGB), also Ende Januar 2027 – nicht erst Ende 2029. Durch die Zustellung des Mahnbescheids am 28.04.2026 wurde die Verjährung gehemmt; mit dem rechtskräftigen Vollstreckungsbescheid gilt für den titulierten Anspruch die 30-jährige Frist.`,
  rules: [
    'Erst kaufmännisch mahnen, dann gerichtlich: Die Mahnstufen sind nicht vorgeschrieben, eine Mahnung genügt für den Verzug.',
    'Das Mahngericht prüft nicht, ob die Forderung besteht – es prüft nur die Form.',
    'Widerspruch gegen Mahnbescheid: 2 Wochen. Einspruch gegen Vollstreckungsbescheid: 2 Wochen – jeweils ab Zustellung.',
    'Für Antragsteller im Saarland ist das zentrale Mahngericht beim Amtsgericht Mayen zuständig.',
    'Regelverjährung: 3 Jahre, beginnend am Ende des Jahres der Entstehung (Ultimo-Verjährung).',
    'Fracht- und Speditionsforderungen verjähren schon nach 1 Jahr ab Ablieferung (§§ 439, 463 HGB).',
    'Hemmung hält die Uhr an (Mahnbescheid, Klage, Verhandlungen), Neubeginn stellt sie auf null (Anerkenntnis, Abschlagszahlung, Vollstreckungshandlung).',
    'Eine einfache Mahnung hemmt die Verjährung nicht.'
  ],
  summary: `- **Kaufmännisches Mahnverfahren**: Zahlungserinnerung → 1. Mahnung → 2. Mahnung → letzte Mahnung mit Androhung gerichtlicher Schritte (nicht gesetzlich geregelt).
- **Verzug** (§ 286 BGB) durch Mahnung, Kalendertermin oder 30 Tage nach Fälligkeit und Rechnungszugang. **Verzugszinsen** 9 (B2B) bzw. 5 Prozentpunkte über dem Basiszinssatz, **40 € Pauschale** (§ 288 BGB).
- **Gerichtliches Mahnverfahren**: Antrag → Mahnbescheid → (2 Wochen Widerspruch) → Vollstreckungsbescheid → (2 Wochen Einspruch) → Zwangsvollstreckung. Saarland: **Amtsgericht Mayen**.
- **Verjährung**: allgemein 3 Jahre ab Jahresende; Fracht- und Speditionsforderungen 1 Jahr ab Ablieferung (§§ 439, 463 HGB); **Hemmung** (Mahnbescheid, Klage, Verhandlungen) und **Neubeginn** (Anerkenntnis, Abschlagszahlung, Vollstreckung); titulierte Ansprüche 30 Jahre.`,
  mistakes: [
    { wrong: 'Ohne drei Mahnungen darf kein Mahnbescheid beantragt werden.', right: 'Die Mahnstufen sind freiwillig. Rechtlich ist für den Verzug meist eine Mahnung genügend, teilweise nicht einmal diese.' },
    { wrong: 'Das Mahngericht prüft, ob die Spedition den Transport tatsächlich durchgeführt hat.', right: 'Das Mahngericht prüft den Anspruch nicht (§ 692 Abs. 1 Nr. 2 ZPO). Erst bei Widerspruch oder Einspruch entscheidet ein Gericht im streitigen Verfahren.' },
    { wrong: 'Zuständig ist das Gericht am Sitz des Schuldners.', right: 'Für das Mahnverfahren ist das Amtsgericht am allgemeinen Gerichtsstand des Antragstellers zuständig (§ 689 Abs. 2 ZPO); für saarländische Antragsteller das zentrale Mahngericht beim Amtsgericht Mayen.' },
    { wrong: 'Die Verjährung beginnt mit dem Rechnungsdatum.', right: 'Die regelmäßige Verjährung beginnt erst mit dem Schluss des Jahres, in dem der Anspruch entstanden ist (§ 199 BGB). Bei Fracht- und Speditionsforderungen beginnt sie mit Ablauf des Tages der Ablieferung (§ 439 Abs. 2 HGB).' },
    { wrong: 'Auch Frachtrechnungen verjähren erst nach drei Jahren.', right: 'Ansprüche aus Fracht- und Speditionsverträgen, auch die Vergütung, verjähren grundsätzlich schon nach einem Jahr (§§ 439, 463 HGB).' },
    { wrong: 'Eine Mahnung per Einschreiben hält die Verjährung auf.', right: 'Eine Mahnung hemmt die Verjährung nicht. Hemmung bewirken z. B. Mahnbescheid, Klage oder Verhandlungen.' },
    { wrong: 'Hemmung und Neubeginn sind dasselbe.', right: 'Bei der Hemmung läuft die Frist nach dem Ende weiter, beim Neubeginn startet die volle Frist von vorn.' }
  ],
  flashcards: [
    { q: 'Nenne die üblichen Stufen des kaufmännischen Mahnverfahrens.', a: 'Zahlungserinnerung, 1. Mahnung, 2. Mahnung, letzte Mahnung mit Androhung gerichtlicher Schritte.' },
    { q: 'Wann kommt ein Geschäftskunde spätestens ohne Mahnung in Verzug?', a: '30 Tage nach Fälligkeit und Zugang der Rechnung (§ 286 Abs. 3 BGB).' },
    { q: 'Wie hoch sind Verzugszinsen bei Entgeltforderungen unter Unternehmen?', a: '9 Prozentpunkte über dem Basiszinssatz (§ 288 Abs. 2 BGB), zusätzlich 40 € Pauschale.' },
    { q: 'Welches Mahngericht ist für eine Spedition mit Sitz im Saarland zuständig?', a: 'Das zentrale Mahngericht beim Amtsgericht Mayen (Rheinland-Pfalz und Saarland).' },
    { q: 'Frist für den Widerspruch gegen einen Mahnbescheid?', a: '2 Wochen ab Zustellung (§ 692 Abs. 1 Nr. 3 ZPO).' },
    { q: 'Frist für den Einspruch gegen einen Vollstreckungsbescheid?', a: '2 Wochen ab Zustellung (§§ 700, 339 ZPO).' },
    { q: 'Was passiert, wenn der Gläubiger nicht innerhalb von 6 Monaten den Vollstreckungsbescheid beantragt?', a: 'Die Wirkung des Mahnbescheids fällt weg (§ 701 ZPO).' },
    { q: 'Wie lange ist die regelmäßige Verjährungsfrist und wann beginnt sie?', a: '3 Jahre (§ 195 BGB), beginnend mit dem Schluss des Jahres der Entstehung (§ 199 BGB).' },
    { q: 'Wann verjährt die Vergütung aus einem Speditionsvertrag?', a: 'In einem Jahr, beginnend mit Ablauf des Tages der Ablieferung des Gutes (§§ 439, 463 HGB).' },
    { q: 'Nenne ein Beispiel für einen Neubeginn der Verjährung.', a: 'Der Schuldner leistet eine Abschlagszahlung (Anerkenntnis, § 212 BGB).' },
    { q: 'Nenne ein Beispiel für eine Hemmung der Verjährung.', a: 'Zustellung eines Mahnbescheids (§ 204 Abs. 1 Nr. 3 BGB) oder Verhandlungen über den Anspruch (§ 203 BGB).' },
    { q: 'Wie lange verjährt ein rechtskräftig titulierter Anspruch?', a: '30 Jahre (§ 197 Abs. 1 Nr. 3 BGB).' }
  ],
  tasks: [
    {
      id: 'lf05-mahnverfahren-a1', type: 'order', difficulty: 2, points: 7,
      q: 'Bringe den Ablauf vom ersten Zahlungsproblem bis zur Zwangsvollstreckung in die richtige Reihenfolge.',
      items: [
        'Zahlungserinnerung an den Kunden',
        'Letzte Mahnung mit Androhung gerichtlicher Schritte',
        'Antrag auf Erlass eines Mahnbescheids beim zentralen Mahngericht',
        'Zustellung des Mahnbescheids; Widerspruchsfrist von 2 Wochen läuft',
        'Antrag auf Erlass des Vollstreckungsbescheids',
        'Zustellung des Vollstreckungsbescheids; Einspruchsfrist von 2 Wochen läuft',
        'Zwangsvollstreckung, z. B. Pfändung durch den Gerichtsvollzieher'
      ],
      hints: ['Das kaufmännische Mahnverfahren kommt vor dem gerichtlichen.', 'Der Vollstreckungsbescheid setzt voraus, dass gegen den Mahnbescheid kein Widerspruch eingelegt wurde.'],
      solution: 'Zahlungserinnerung → letzte Mahnung → Mahnantrag → Mahnbescheid (2 Wochen Widerspruch, § 692 ZPO) → Antrag auf Vollstreckungsbescheid (§ 699 ZPO) → Vollstreckungsbescheid (2 Wochen Einspruch, §§ 700, 339 ZPO) → Zwangsvollstreckung.'
    },
    {
      id: 'lf05-mahnverfahren-a2', type: 'mc', difficulty: 1, points: 1,
      q: 'Die Saar-Trans Spedition GmbH hat ihren Sitz in Saarbrücken. Ihr Kunde sitzt in Köln. Bei welchem Gericht beantragt sie den Mahnbescheid?',
      options: ['Amtsgericht Saarbrücken', 'Zentrales Mahngericht beim Amtsgericht Mayen', 'Amtsgericht Köln', 'Landgericht Saarbrücken'],
      correct: [1],
      hints: ['Maßgeblich ist der Sitz des Antragstellers, nicht des Schuldners.', 'Rheinland-Pfalz und das Saarland haben ein gemeinsames zentrales Mahngericht.'],
      solution: 'Ausschließlich zuständig ist das Amtsgericht am allgemeinen Gerichtsstand des **Antragstellers** (§ 689 Abs. 2 ZPO). Durch Landesrecht ist das Mahnverfahren zentralisiert: Für Antragsteller mit Sitz im Saarland ist das **Amtsgericht Mayen** zuständig.'
    },
    {
      id: 'lf05-mahnverfahren-a3', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Lücken zum gerichtlichen Mahnverfahren.',
      text: 'Gegen den Mahnbescheid kann der Schuldner innerhalb von [[2|zwei]] Wochen [[Widerspruch]] einlegen. Tut er nichts, beantragt der Gläubiger den [[Vollstreckungsbescheid]]. Dieser wirkt wie ein [[Versäumnisurteil]]. Dagegen ist innerhalb von 2 Wochen der [[Einspruch]] möglich.',
      hints: ['Gegen den Mahnbescheid und gegen den Vollstreckungsbescheid gibt es unterschiedlich benannte Rechtsbehelfe.', 'Der Vollstreckungsbescheid wird einem Urteil gleichgestellt, das bei Säumnis ergeht.'],
      solution: '**2 Wochen** Widerspruch (§ 692 ZPO) → **Vollstreckungsbescheid** (§ 699 ZPO), wirkt wie ein vorläufig vollstreckbares **Versäumnisurteil** (§ 700 ZPO) → **Einspruch** binnen 2 Wochen (§ 339 ZPO).'
    },
    {
      id: 'lf05-mahnverfahren-a4', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zum gerichtlichen Mahnverfahren sind richtig? (Mehrfachauswahl)',
      options: [
        'Das Mahngericht prüft nicht, ob die Forderung tatsächlich besteht.',
        'Ein Mahnbescheid ist nur für Geldforderungen in Euro möglich.',
        'Legt der Schuldner Widerspruch ein, wird sofort vollstreckt.',
        'Die Zustellung des Mahnbescheids hemmt die Verjährung.',
        'Ein Mahnbescheid kann nur nach drei schriftlichen Mahnungen beantragt werden.'
      ],
      correct: [0, 1, 3],
      hints: ['Denke an § 688 und § 692 ZPO.', 'Widerspruch führt in ein normales Gerichtsverfahren.'],
      solution: 'Richtig: **keine Prüfung des Anspruchs** (§ 692 Abs. 1 Nr. 2 ZPO), **nur bestimmte Geldsumme in Euro** (§ 688 ZPO), **Hemmung der Verjährung** (§ 204 Abs. 1 Nr. 3 BGB). Nach Widerspruch folgt auf Antrag das streitige Verfahren, keine Vollstreckung. Vorherige Mahnungen sind keine Voraussetzung.'
    },
    {
      id: 'lf05-mahnverfahren-a5', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Verhaltensweise des Schuldners nach Zustellung des Mahnbescheids der Folge zu.',
      pairs: [
        ['Er zahlt die Forderung samt Kosten.', 'Das Verfahren ist erledigt.'],
        ['Er legt innerhalb von 2 Wochen Widerspruch ein.', 'Auf Antrag folgt das streitige Verfahren vor dem Streitgericht.'],
        ['Er reagiert nicht.', 'Der Gläubiger kann den Vollstreckungsbescheid beantragen.'],
        ['Er legt gegen den Vollstreckungsbescheid nicht rechtzeitig Einspruch ein.', 'Der Vollstreckungsbescheid wird rechtskräftig.']
      ],
      hints: ['Widerspruch bedeutet: Der Schuldner bestreitet die Forderung.', 'Ohne Einspruch gibt es keinen weiteren Rechtsbehelf.'],
      solution: 'Zahlung → erledigt. Widerspruch → streitiges Verfahren (§ 696 ZPO). Schweigen → Vollstreckungsbescheid (§ 699 ZPO). Kein Einspruch → rechtskräftiger Titel, Zwangsvollstreckung möglich, 30-jährige Verjährung (§ 197 BGB).'
    },
    {
      id: 'lf05-mahnverfahren-a6', type: 'calc', difficulty: 2, points: 2,
      q: 'Die Saar-Trans Spedition GmbH verkauft am 14.10.2026 eine gebrauchte Wechselbrücke an ein anderes Unternehmen; der Kaufpreis ist sofort fällig. Für diese Kaufpreisforderung gilt die regelmäßige Verjährung des BGB. Gib das Jahr des Verjährungsbeginns und das Jahr des Ablaufs an (jeweils mit Ablauf des 31.12.).',
      formula: 'Verjährungsende = 31.12. des Entstehungsjahres + 3 Jahre',
      fields: [
        { id: 'beginn', label: 'Verjährung beginnt mit Schluss des Jahres', unit: 'Jahr', answer: 2026, tol: 0 },
        { id: 'ende', label: 'Verjährung endet mit Ablauf des 31.12.', unit: 'Jahr', answer: 2029, tol: 0 }
      ],
      hints: ['Die Frist beginnt nicht am Rechnungstag, sondern am Jahresende.', '3 Jahre nach dem 31.12.2026.'],
      solution: `**Rechtsgrundlage:** §§ 195, 199 Abs. 1 BGB – 3 Jahre ab Schluss des Jahres der Entstehung.

**Beginn:** Schluss des Jahres **2026** (31.12.2026, 24 Uhr)

**Ende:** 31.12.2026 + 3 Jahre = Ablauf des 31.12.**2029**`
    },
    {
      id: 'lf05-mahnverfahren-a7', type: 'mc', difficulty: 3, points: 1,
      q: 'Die Kaufpreisforderung der Spedition aus dem Verkauf eines Gabelstaplers im Jahr 2026 würde mit Ablauf des 31.12.2029 verjähren. Am 10.06.2028 überweist der Kunde ohne Kommentar eine Abschlagszahlung von 500 € auf die Forderung. Was gilt?',
      options: [
        'Nichts ändert sich, die Forderung verjährt am 31.12.2029.',
        'Die Verjährung ist gehemmt, solange der Kunde in Raten zahlt.',
        'Die Verjährung beginnt am 10.06.2028 neu; die neue Frist endet mit Ablauf des 10.06.2031.',
        'Die Restforderung ist sofort verjährt.'
      ],
      correct: [2],
      hints: ['Mit der Abschlagszahlung erkennt der Kunde die Forderung an.', 'Beim Neubeginn läuft die volle Frist ab dem Tag des Anerkenntnisses – nicht ab Jahresende.'],
      solution: 'Die Abschlagszahlung ist ein **Anerkenntnis** (§ 212 Abs. 1 Nr. 1 BGB). Die Verjährung **beginnt neu** – und zwar am Tag nach dem Anerkenntnis mit der vollen Frist von 3 Jahren; die Jahresend-Regel des § 199 BGB gilt für den Neubeginn nicht. Die Frist endet daher mit Ablauf des **10.06.2031**.'
    },
    {
      id: 'lf05-mahnverfahren-a8', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Geschäftskunde zahlt eine Speditionsrechnung über **6.300 €** mit **50 Tagen** Verspätung (Verzugstage). Angenommener Basiszinssatz: **1,50 %** (Beispielwert, vorher immer den aktuellen Wert der Bundesbank prüfen). Berechne Zinssatz, Verzugszinsen (360 Zinstage, auf Cent) und den Gesamtbetrag aus Zinsen und Pauschale.',
      formula: 'Verzugszinsen = Forderung × Zinssatz × Tage ÷ (100 × 360); Zinssatz = Basiszinssatz + 9 Prozentpunkte',
      fields: [
        { id: 'satz', label: 'Verzugszinssatz', unit: '%', answer: 10.5, tol: 0.001 },
        { id: 'zinsen', label: 'Verzugszinsen', unit: '€', answer: 91.88, tol: 0.01 },
        { id: 'gesamt', label: 'Verzugszinsen + Pauschale', unit: '€', answer: 131.88, tol: 0.01 }
      ],
      hints: ['Unter Unternehmen gilt bei Entgeltforderungen der höhere Aufschlag.', 'Die Pauschale nach § 288 Abs. 5 BGB beträgt 40 €.'],
      solution: `**Zinssatz:** 1,50 % + 9 Prozentpunkte = **10,50 %** (§ 288 Abs. 2 BGB, kein Verbraucher beteiligt)

**Verzugszinsen:** 6.300 € × 10,5 × 50 ÷ (100 × 360) = 3.307.500 ÷ 36.000 = 91,875 € ≈ **91,88 €**

**Gesamt:** 91,88 € + 40,00 € Pauschale = **131,88 €**`
    },
    {
      id: 'lf05-mahnverfahren-a9', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne zu: Bewirkt der Vorgang eine **Hemmung**, einen **Neubeginn** oder **keine Wirkung** auf die Verjährung?',
      pairs: [
        ['Zustellung eines Mahnbescheids', 'Hemmung'],
        ['Kunde bittet schriftlich um Stundung der Forderung', 'Neubeginn'],
        ['Spedition schickt eine 2. Mahnung per Einschreiben', 'keine Wirkung'],
        ['Spedition und Kunde verhandeln über eine strittige Rechnung', 'Hemmung (Verhandlungen)']
      ],
      hints: ['Eine Stundungsbitte ist ein Anerkenntnis.', 'Eine Mahnung allein hält die Verjährung nicht auf.'],
      solution: 'Mahnbescheid → **Hemmung** (§ 204 Abs. 1 Nr. 3 BGB). Stundungsbitte → **Anerkenntnis** → **Neubeginn** (§ 212 BGB). Mahnung → **keine Wirkung** auf die Verjährung. Verhandlungen → **Hemmung** (§ 203 BGB).'
    },
    {
      id: 'lf05-mahnverfahren-a10', type: 'text', difficulty: 2, points: 3,
      q: 'Du bist Auszubildende/r in der Buchhaltung. Formuliere die wesentlichen Inhalte einer **letzten Mahnung** an einen Kunden, der eine Rechnung über 2.350 € trotz zweier Mahnungen nicht bezahlt hat.',
      model: 'Betreff: Letzte Mahnung zur Rechnung Nr. 2026-0815 vom 02.09.2026. Trotz unserer Mahnungen ist der Betrag von 2.350 € noch offen. Wir fordern Sie auf, den Betrag zuzüglich Verzugszinsen und der Verzugspauschale von 40 € bis spätestens 30.10.2026 auf unser Konto zu überweisen. Sollte die Zahlung bis zu dieser Frist nicht eingehen, werden wir ohne weitere Ankündigung das gerichtliche Mahnverfahren einleiten und einen Mahnbescheid beantragen.',
      criteria: [
        { text: 'nennt Rechnung und offenen Betrag', keywords: ['Rechnung', '2.350|2350'], points: 1 },
        { text: 'setzt eine konkrete letzte Frist', keywords: ['Frist|bis|spätestens'], points: 1 },
        { text: 'kündigt gerichtliches Mahnverfahren bzw. Mahnbescheid an', keywords: ['gerichtlich|Mahnbescheid|Mahngericht'], points: 1 }
      ],
      hints: ['Was muss der Kunde genau zahlen und bis wann?', 'Womit droht eine letzte Mahnung?'],
      solution: 'Eine letzte Mahnung enthält: **Bezug** (Rechnungsnummer, Datum, offener Betrag 2.350 €), Hinweis auf die bisherigen Mahnungen, ggf. **Verzugszinsen und 40 € Pauschale**, eine **konkrete letzte Frist** (Datum) und die **Ankündigung des gerichtlichen Mahnverfahrens**. Der Ton bleibt sachlich und höflich.'
    },
    {
      id: 'lf05-mahnverfahren-a11', type: 'mc', difficulty: 3, points: 1,
      q: 'Die Saar-Trans Spedition GmbH hat für einen Kunden eine Teilladung befördern lassen; das Gut wurde am **14.10.2026** beim Empfänger abgeliefert. Die Rechnung über das Speditionsentgelt bleibt unbezahlt. Bis wann muss die Spedition spätestens etwas gegen die Verjährung unternehmen (kein Vorsatz des Kunden, keine Hemmung)?',
      options: ['Bis zum Ablauf des 14.10.2027', 'Bis zum Ablauf des 31.12.2027', 'Bis zum Ablauf des 31.12.2029', 'Bis zum Ablauf des 14.10.2029'],
      correct: [0],
      hints: ['Für Ansprüche aus Fracht- und Speditionsverträgen gilt eine Sonderregel im HGB.', 'Die Frist beginnt mit der Ablieferung, nicht am Jahresende.'],
      solution: 'Nach **§ 463 HGB i. V. m. § 439 HGB** verjähren Ansprüche aus Speditionsverträgen – auch die Vergütung – in **einem Jahr**, beginnend mit **Ablauf des Tages der Ablieferung** (§ 439 Abs. 2 HGB). Die Frist endet mit Ablauf des **14.10.2027**. Die 3-Jahres-Frist ab Jahresende (§§ 195, 199 BGB) gilt hier nicht. Ein rechtzeitig zugestellter Mahnbescheid würde die Verjährung hemmen.'
    },
    {
      id: 'lf05-mahnverfahren-a12', type: 'case', difficulty: 3, points: 6,
      q: 'Fall: Mahnbescheid gegen die Rosselland Bau GmbH',
      intro: `Die Hochwald Logistik e.K. (Sitz Losheim am See, Saarland) hat der Rosselland Bau GmbH am 15.07.2026 eine Rechnung über **4.760 €** gestellt. Trotz Mahnungen zahlt die Rosselland Bau GmbH nicht. Die Hochwald Logistik beantragt einen Mahnbescheid, der der Rosselland Bau GmbH am **Montag, 02.11.2026** zugestellt wird.`,
      hints: ['Fristen nach Wochen enden an dem Wochentag, der dem Tag der Zustellung entspricht.', 'Prüfe, was der Schuldner nach dem Mahnbescheid tun kann.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf05-mahnverfahren-a12-1', type: 'mc', difficulty: 2, points: 1,
          q: 'Bis wann kann die Rosselland Bau GmbH fristgerecht Widerspruch einlegen?',
          options: ['Bis Montag, 09.11.2026', 'Bis Montag, 16.11.2026', 'Bis Mittwoch, 02.12.2026', 'Bis 31.12.2026'],
          correct: [1],
          hints: ['Die Widerspruchsfrist beträgt 2 Wochen.', 'Zustellung am Montag → Fristende am Montag zwei Wochen später.'],
          solution: 'Widerspruchsfrist **2 Wochen ab Zustellung** (§ 692 Abs. 1 Nr. 3 ZPO). Zustellung Montag, 02.11.2026 → Fristende **Montag, 16.11.2026** (§ 222 ZPO i. V. m. § 188 Abs. 2 BGB: Ablauf des Tages mit gleicher Benennung).'
        },
        {
          id: 'lf05-mahnverfahren-a12-2', type: 'mc', difficulty: 3, points: 2,
          q: 'Die Rosselland Bau GmbH reagiert nicht. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Hochwald Logistik kann nach Fristablauf den Vollstreckungsbescheid beantragen.',
            'Beantragt sie ihn nicht innerhalb von 6 Monaten ab Zustellung des Mahnbescheids, fällt dessen Wirkung weg.',
            'Der Gerichtsvollzieher darf schon aufgrund des Mahnbescheids pfänden.',
            'Gegen den Vollstreckungsbescheid kann die Rosselland Bau GmbH noch innerhalb von 2 Wochen Einspruch einlegen.'
          ],
          correct: [0, 1, 3],
          hints: ['Der Mahnbescheid selbst ist noch kein Vollstreckungstitel.', 'Vergleiche § 699, § 700 und § 701 ZPO.'],
          solution: 'Richtig sind A, B und D. Nach Ablauf der Widerspruchsfrist wird auf Antrag der **Vollstreckungsbescheid** erlassen (§ 699 ZPO), spätestens innerhalb von **6 Monaten** (§ 701 ZPO). Dagegen ist **Einspruch** binnen 2 Wochen möglich (§§ 700, 339 ZPO). Der **Mahnbescheid** ist **kein Vollstreckungstitel** – vollstreckt wird erst aus dem Vollstreckungsbescheid.'
        },
        {
          id: 'lf05-mahnverfahren-a12-3', type: 'text', difficulty: 2, points: 3,
          q: 'Die Rosselland Bau GmbH legt am 10.11.2026 Widerspruch ein, weil angeblich zwei Paletten beschädigt angekommen seien. Erkläre, wie es weitergeht und welche Wirkung der Mahnbescheid für die Verjährung hatte.',
          model: 'Der Widerspruch ist rechtzeitig, weil er innerhalb von zwei Wochen nach Zustellung eingelegt wurde. Ein Vollstreckungsbescheid kann nicht mehr ergehen. Auf Antrag einer Partei gibt das Mahngericht die Sache an das im Mahnbescheid bezeichnete Streitgericht ab; dort wird im streitigen Verfahren wie nach einer Klage geprüft, ob die Forderung besteht und ob Schadenersatz wegen der Paletten verrechnet werden kann. Die Zustellung des Mahnbescheids hat die Verjährung gehemmt.',
      criteria: [
            { text: 'erkennt Widerspruch als fristgerecht', keywords: ['rechtzeitig|fristgerecht|innerhalb'], points: 1 },
            { text: 'nennt streitiges Verfahren bzw. Abgabe an das Streitgericht', keywords: ['streitig|Streitgericht|Klage|Prozess'], points: 1 },
            { text: 'nennt Hemmung der Verjährung', keywords: ['Hemmung|gehemmt'], points: 1 }
          ],
          hints: ['Vergleiche das Datum mit der Widerspruchsfrist aus Teil 1.', 'Was bewirkt § 204 Abs. 1 Nr. 3 BGB?'],
          solution: 'Der Widerspruch ist **fristgerecht** (vor dem 16.11.2026). Ein Vollstreckungsbescheid ist ausgeschlossen. Auf Antrag wird die Sache an das **Streitgericht** abgegeben (§ 696 ZPO); dort klärt ein **streitiges Verfahren**, ob die Forderung besteht. Die Zustellung des Mahnbescheids hat die **Verjährung gehemmt** (§ 204 Abs. 1 Nr. 3 BGB).'
        }
      ]
    }
  ],
  quiz: ['lf05-mahnverfahren-a1', 'lf05-mahnverfahren-a2', 'lf05-mahnverfahren-a4', 'lf05-mahnverfahren-a6', 'lf05-mahnverfahren-a8'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 5, Inhalte: Kaufmännisches Mahnverfahren, gerichtliches Mahnverfahren, Verjährung' },
    { title: 'Zivilprozessordnung §§ 688–703d Mahnverfahren (u. a. § 689 Zuständigkeit, § 692 Mahnbescheid, § 694 Widerspruch, § 699 Vollstreckungsbescheid, § 700 Einspruch)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/zpo/__688.html', asOf: '2026-10-17' },
    { title: 'Zivilprozessordnung § 701 Wegfall der Wirkung des Mahnbescheids', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/zpo/__701.html', asOf: '2026-10-17' },
    { title: 'Zivilprozessordnung § 339 Einspruchsfrist', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/zpo/__339.html', asOf: '2026-10-17' },
    { title: 'Zuständigkeiten der Mahngerichte (Saarland: Amtsgericht Mayen)', publisher: 'Koordinierungsstelle für das automatisierte Mahnverfahren (mahngerichte.de)', url: 'https://www.mahngerichte.de/verfahrensueberblick/antragstellung/zustaendigkeiten/', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 286 Verzug des Schuldners', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__286.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 288 Verzugszinsen und sonstiger Verzugsschaden', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__288.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 247 Basiszinssatz', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__247.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch §§ 195, 199 Regelmäßige Verjährungsfrist und Beginn', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__199.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch §§ 203, 204 Hemmung der Verjährung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__204.html', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 212 Neubeginn der Verjährung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__212.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 439 Verjährung (Frachtrecht)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__439.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 463 Verjährung (Speditionsrecht, Verweis auf § 439)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__463.html', asOf: '2026' },
    { title: 'BGH, Urteil vom 22.04.2010, I ZR 31/08: § 439 HGB gilt auch für den Frachtlohnanspruch (Besprechung)', publisher: 'Rechtslupe', url: 'https://www.rechtslupe.de/wirtschaftsrecht/handelsrecht/verjaehrung-bei-frachtvertraegen-319095', asOf: '2026-10-17' },
    { title: 'Bürgerliches Gesetzbuch § 197 Dreißigjährige Verjährungsfrist', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bgb/__197.html', asOf: '2026-10-17' }
  ],
  links: ['lf03-zahlungsverkehr', 'lf08-stoerungen', 'wiso-kaufvertrag']
};
