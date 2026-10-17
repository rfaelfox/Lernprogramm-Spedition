export default {
  id: 'wiso-wirtschaft-grundlagen',
  area: 'WISO',
  topic: 'wiso-w2-wirtschaft',
  title: 'Wirtschaftliche Grundlagen: Markt, Preis und Rechtsformen',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Haftung der Rechtsformen nach § 126 HGB (OHG, Fassung nach dem Personengesellschaftsrechtsmodernisierungsgesetz, seit 1.1.2024), § 171 HGB (Kommanditist), § 13 Abs. 2 und § 5 Abs. 1 GmbHG (Mindeststammkapital 25.000 €), § 1 und § 7 AktG (Mindestgrundkapital 50.000 €), Stand 2026. Marktzahlen in den Aufgaben sind Beispielwerte.'
  },
  goals: [
    'Ich kann Bedürfnisse, Bedarf und Nachfrage unterscheiden und Güter einteilen.',
    'Ich kann das ökonomische Prinzip als Maximal- und Minimalprinzip auf Beispiele aus der Spedition anwenden.',
    'Ich kann volks- und betriebswirtschaftliche Produktionsfaktoren nennen und die Arbeitsteilung beurteilen.',
    'Ich kann den einfachen und den erweiterten Wirtschaftskreislauf mit Güter- und Geldströmen beschreiben.',
    'Ich kann den Gleichgewichtspreis berechnen und Angebots- bzw. Nachfrageüberhänge erklären.',
    'Ich kann Marktformen und Unternehmensziele unterscheiden.',
    'Ich kann die Haftung bei Einzelunternehmen, OHG, KG, GmbH und AG vergleichen.'
  ],
  simple: `# Warum wirtschaften wir?

Menschen haben viele **Bedürfnisse** (Wünsche), aber die Mittel, sie zu erfüllen, sind **knapp**. Deshalb müssen wir mit Geld, Zeit und Material sparsam umgehen – das nennt man **wirtschaften**.

- **Bedürfnis**: Gefühl eines Mangels mit dem Wunsch, ihn zu beseitigen (z. B. Hunger, Wunsch nach einem Auto).
- **Bedarf**: der Teil der Bedürfnisse, für den man **Geld (Kaufkraft)** hat.
- **Nachfrage**: der Bedarf, der tatsächlich **am Markt** als Kaufwunsch auftritt.

# Das ökonomische Prinzip

- **Maximalprinzip**: Mit gegebenen Mitteln möglichst viel erreichen (mit einem Lkw und einer Tagesschicht möglichst viele Sendungen zustellen).
- **Minimalprinzip**: Ein festes Ziel mit möglichst wenig Mitteln erreichen (40 Paletten mit möglichst geringen Kosten nach Metz bringen).

# Markt und Preis

Auf dem **Markt** treffen Angebot und Nachfrage aufeinander. Ist der Preis hoch, wollen viele verkaufen, aber wenige kaufen. Ist er niedrig, ist es umgekehrt. Der Preis, bei dem Angebot und Nachfrage gleich groß sind, heißt **Gleichgewichtspreis**.

# Wer haftet?

Beim **Einzelunternehmen** und in der **OHG** haften die Inhaber auch mit ihrem **Privatvermögen**. Bei **GmbH** und **AG** haftet nur das **Gesellschaftsvermögen**. In der **KG** haftet der Komplementär unbeschränkt, der Kommanditist nur bis zu seiner Einlage.`,
  deep: `# Güterarten

| Einteilung | Arten | Beispiel aus der Logistik |
|---|---|---|
| Knappheit | **freie Güter** (unbegrenzt, kostenlos) – **wirtschaftliche Güter** (knapp, haben einen Preis) | Luft – Diesel, Lagerfläche |
| Form | **Sachgüter** – **Dienstleistungen** – **Rechte** | Gabelstapler – Transport, Lagerung – Lizenz, Patent |
| Verwendung | **Konsumgüter** (für Haushalte) – **Investitionsgüter/Produktionsgüter** (für Unternehmen) | Fahrrad eines Azubis – Sattelzugmaschine |
| Nutzungsdauer | **Verbrauchsgüter** – **Gebrauchsgüter** | Diesel, Stretchfolie – Lkw, Regal |
| Beziehung | **Komplementärgüter** (ergänzen sich) – **Substitutionsgüter** (ersetzen sich) | Lkw und Diesel – Lkw-Transport und Bahntransport |

**Bedürfnisarten nach Dringlichkeit**: Existenzbedürfnisse (Nahrung, Wohnung), Kulturbedürfnisse (Bildung, Reisen), Luxusbedürfnisse (Sportwagen). Nach dem Träger: Individualbedürfnisse und Kollektivbedürfnisse (Straßen, Sicherheit).

# Produktionsfaktoren

- **Volkswirtschaftlich**: **Arbeit**, **Boden** (Natur, Standort, Rohstoffe), **Kapital** (Maschinen, Gebäude, Fahrzeuge – also *Sachkapital*). Oft ergänzt: **Wissen/Bildung**.
- **Betriebswirtschaftlich**: **ausführende Arbeit**, **Betriebsmittel** (Lkw, Lager, IT), **Werkstoffe** (Diesel, Verpackung) und der **dispositive Faktor** (Leitung, Planung, Organisation).

# Arbeitsteilung

| Form | Beispiel |
|---|---|
| Berufsbildung und Berufsspaltung | Kaufmann für Spedition und Logistikdienstleistung, Berufskraftfahrer, Fachkraft für Lagerlogistik |
| innerbetriebliche Arbeitsteilung | Abteilungen Disposition, Lager, Buchhaltung; Fließband in der Kommissionierung |
| zwischenbetriebliche Arbeitsteilung | Spedition beauftragt Frachtführer und Lagerhalter (Outsourcing) |
| internationale Arbeitsteilung | Produktion in Asien, Vertrieb in Europa → Containerverkehr |

**Vorteile**: Spezialisierung, höhere Produktivität, niedrigere Stückkosten. **Nachteile**: einseitige Belastung, Monotonie, Abhängigkeit von anderen (Störung einer Lieferkette legt viele Betriebe lahm), mehr Transporte.

# Wirtschaftskreislauf

**Einfacher Kreislauf** (nur Haushalte und Unternehmen, ohne Sparen):

- Güterstrom: Haushalte stellen **Arbeit** (Produktionsfaktoren) zur Verfügung → Unternehmen liefern **Konsumgüter**.
- Geldstrom: Unternehmen zahlen **Einkommen** (Lohn, Miete, Zinsen, Gewinn) → Haushalte zahlen **Konsumausgaben**.

**Erweiterter Kreislauf** zusätzlich mit:

- **Staat**: erhält Steuern und Sozialabgaben, zahlt Transferleistungen (z. B. Kindergeld) an Haushalte und Subventionen an Unternehmen, kauft Güter (z. B. Straßenbau).
- **Banken (Vermögensänderung)**: sammeln Ersparnisse der Haushalte und geben Kredite für Investitionen.
- **Ausland**: Exporte bringen Geld ins Inland, Importe führen Geld ins Ausland.

# Preisbildung

- **Nachfrage**: Je höher der Preis, desto geringer die nachgefragte Menge (fallende Kurve).
- **Angebot**: Je höher der Preis, desto größer die angebotene Menge (steigende Kurve).
- **Gleichgewichtspreis**: Angebotsmenge = Nachfragemenge; der Markt wird **geräumt**.
- Preis **über** dem Gleichgewicht → **Angebotsüberhang** → Preis sinkt.
- Preis **unter** dem Gleichgewicht → **Nachfrageüberhang** → Preis steigt.

Funktionen des Preises: **Ausgleichsfunktion** (Markt räumen), **Signalfunktion** (Knappheit anzeigen), **Lenkungsfunktion** (Produktionsfaktoren dorthin lenken, wo sie am meisten bringen), **Auslesefunktion** (unwirtschaftliche Anbieter scheiden aus).

# Marktformen (nach Zahl der Marktteilnehmer)

| Anbieter / Nachfrager | viele | wenige | einer |
|---|---|---|---|
| **viele** | Polypol (vollständige Konkurrenz) | Nachfrageoligopol | Nachfragemonopol |
| **wenige** | Angebotsoligopol | zweiseitiges Oligopol | beschränktes Nachfragemonopol |
| **einer** | Angebotsmonopol | beschränktes Angebotsmonopol | zweiseitiges (bilaterales) Monopol |

Beispiele: Straßengüterverkehr mit vielen Transportunternehmen (eher **Polypol**), Containerreedereien (wenige große Anbieter, **Angebotsoligopol**), Schienennetz (ein Netzbetreiber, **Angebotsmonopol**, staatlich reguliert).

# Unternehmensziele

- **ökonomisch**: Gewinn, Umsatz, Marktanteil, Liquidität, Kostensenkung
- **ökologisch**: weniger CO₂, Leerfahrten vermeiden, Verpackung sparen
- **sozial**: sichere Arbeitsplätze, faire Bezahlung, Ausbildung

Ziele können sich ergänzen (**Zielharmonie**: weniger Leerfahrten senken Kosten und CO₂), behindern (**Zielkonflikt**: höhere Löhne mindern den Gewinn) oder unabhängig sein (**Zielneutralität**).

# Rechtsformen im Überblick

| Rechtsform | Gründer | Mindestkapital | Haftung |
|---|---|---|---|
| **Einzelunternehmen** (e. K.) | 1 Person | keines | Inhaber unbeschränkt, auch mit Privatvermögen |
| **OHG** | mind. 2 | keines | alle Gesellschafter unbeschränkt, unmittelbar, als Gesamtschuldner (§ 126 HGB) |
| **KG** | mind. 1 Komplementär + 1 Kommanditist | keines | Komplementär unbeschränkt; Kommanditist bis zur Haftsumme, ausgeschlossen soweit Einlage geleistet (§ 171 HGB) |
| **GmbH** | 1 oder mehr | Stammkapital 25.000 € (§ 5 GmbHG) | nur das Gesellschaftsvermögen (§ 13 Abs. 2 GmbHG) |
| **AG** | 1 oder mehr | Grundkapital 50.000 € (§ 7 AktG) | nur das Gesellschaftsvermögen (§ 1 AktG); Aktionäre riskieren ihren Aktienwert |

**Gesamtschuldnerisch** heißt: Ein Gläubiger kann von **jedem** OHG-Gesellschafter die **ganze** Schuld verlangen. Viele Speditionen sind als **GmbH** oder **GmbH & Co. KG** organisiert: In der GmbH & Co. KG ist eine GmbH der Komplementär, sodass im Ergebnis keine natürliche Person unbeschränkt haftet. Die Gründung (Motive, Standort, Finanzierung) wird im Lehrplan unter W6 vertieft.`,
  terms: [
    { term: 'Bedürfnis', def: 'Empfinden eines Mangels, verbunden mit dem Wunsch, ihn zu beseitigen.' },
    { term: 'Bedarf', def: 'Bedürfnisse, die mit Kaufkraft ausgestattet sind.' },
    { term: 'Ökonomisches Prinzip', def: 'Vernunftprinzip des Wirtschaftens: als Maximalprinzip (mit gegebenen Mitteln größtmöglicher Erfolg) oder als Minimalprinzip (gegebenes Ziel mit geringstem Mitteleinsatz).' },
    { term: 'Produktionsfaktoren', def: 'Mittel zur Herstellung von Gütern; volkswirtschaftlich Arbeit, Boden, Kapital, betriebswirtschaftlich ausführende Arbeit, Betriebsmittel, Werkstoffe und dispositiver Faktor.' },
    { term: 'Wirtschaftskreislauf', def: 'Modell der Güter- und Geldströme zwischen Haushalten, Unternehmen und (erweitert) Staat, Banken und Ausland.' },
    { term: 'Gleichgewichtspreis', def: 'Preis, bei dem angebotene und nachgefragte Menge gleich sind; der Markt wird geräumt.' },
    { term: 'Angebotsüberhang', def: 'Bei einem Preis über dem Gleichgewichtspreis ist die Angebotsmenge größer als die Nachfragemenge.' },
    { term: 'Polypol', def: 'Marktform mit vielen Anbietern und vielen Nachfragern; der Einzelne kann den Preis kaum beeinflussen.' },
    { term: 'Oligopol', def: 'Marktform mit wenigen Anbietern (Angebotsoligopol) oder wenigen Nachfragern (Nachfrageoligopol).' },
    { term: 'Gesamtschuldnerische Haftung', def: 'Jeder Gesellschafter haftet für die ganze Schuld; der Gläubiger kann wählen, wen er in Anspruch nimmt (§ 126 HGB für die OHG).' },
    { term: 'Kommanditist', def: 'Teilhafter einer KG, der den Gläubigern nur bis zur Höhe seiner Haftsumme haftet; soweit die Einlage geleistet ist, ist die Haftung ausgeschlossen (§ 171 HGB).' }
  ],
  example: `# Kurierfahrten in Saarbrücken (Beispielzahlen)

Auf dem Markt für Stadt-Kurierfahrten in Saarbrücken gibt es viele kleine Anbieter und viele Auftraggeber – ein **Polypol**. Eine Marktuntersuchung ergibt (Preis je Fahrt):

| Preis je Fahrt | Nachfrage (Fahrten/Tag) | Angebot (Fahrten/Tag) | Lage |
|---|---:|---:|---|
| 15 € | 900 | 650 | Nachfrageüberhang 250 |
| 20 € | 800 | 800 | **Gleichgewicht** |
| 25 € | 700 | 950 | Angebotsüberhang 250 |

Bei 20 € werden 800 Fahrten vermittelt, der Marktumsatz beträgt 20 € × 800 = **16.000 € pro Tag**.

Die Gründer **Lena Becker** und **Tim Schäfer** wollen einen eigenen Kurierdienst eröffnen. Sie vergleichen die Rechtsformen: Als **OHG** würden beide mit dem Privatvermögen haften. In einer **GmbH** brauchen sie 25.000 € Stammkapital, haften aber nur mit dem Gesellschaftsvermögen. Weil ein Lkw-Unfall schnell hohe Forderungen auslösen kann, entscheiden sie sich für die GmbH und schließen zusätzlich Versicherungen ab.`,
  rules: [
    'Bedürfnis + Kaufkraft = Bedarf; Bedarf am Markt = Nachfrage.',
    'Maximalprinzip: Mittel fest, Ergebnis maximal. Minimalprinzip: Ziel fest, Mittel minimal. Nie beides gleichzeitig.',
    'Gleichgewichtspreis: Angebotsmenge = Nachfragemenge.',
    'Preis über Gleichgewicht → Angebotsüberhang → Preis sinkt; Preis darunter → Nachfrageüberhang → Preis steigt.',
    'Marktform nach Anzahl: einer = Monopol, wenige = Oligopol, viele = Polypol.',
    'Einzelunternehmer, OHG-Gesellschafter und Komplementär haften unbeschränkt; bei GmbH und AG haftet nur das Gesellschaftsvermögen.'
  ],
  summary: `- **Knappheit** zwingt zum Wirtschaften: Bedürfnis → Bedarf → Nachfrage.
- **Güter**: frei/wirtschaftlich, Sachgut/Dienstleistung/Recht, Konsum-/Investitionsgut, Komplementär-/Substitutionsgut.
- **Ökonomisches Prinzip**: Maximal- oder Minimalprinzip.
- **Produktionsfaktoren**: Arbeit, Boden, Kapital (volkswirtschaftlich); Arbeit, Betriebsmittel, Werkstoffe, dispositiver Faktor (betriebswirtschaftlich).
- **Wirtschaftskreislauf**: einfach (Haushalte, Unternehmen), erweitert (+ Staat, Banken, Ausland).
- **Preisbildung**: Gleichgewicht, wo Angebot = Nachfrage; Überhänge führen zu Preisänderungen.
- **Marktformen**: Polypol, Oligopol, Monopol.
- **Haftung**: Einzelunternehmen/OHG unbeschränkt, KG geteilt, GmbH/AG nur Gesellschaftsvermögen.`,
  mistakes: [
    { wrong: 'Ökonomisches Prinzip heißt: mit möglichst wenig Mitteln möglichst viel erreichen.', right: 'Das ist unmöglich, weil beide Größen offen wären. Entweder sind die Mittel fest (Maximalprinzip) oder das Ziel (Minimalprinzip).' },
    { wrong: 'Bedarf und Bedürfnis sind dasselbe.', right: 'Bedarf ist nur der Teil der Bedürfnisse, für den Kaufkraft vorhanden ist.' },
    { wrong: 'Bei einem Angebotsüberhang steigt der Preis.', right: 'Bei einem Angebotsüberhang bleiben Anbieter auf ihrer Leistung sitzen und senken den Preis.' },
    { wrong: 'In der KG haften alle Gesellschafter nur mit ihrer Einlage.', right: 'Nur der Kommanditist haftet beschränkt; der Komplementär haftet unbeschränkt mit seinem Privatvermögen.' },
    { wrong: 'Die Gesellschafter einer GmbH haften persönlich bis 25.000 €.', right: 'Den Gläubigern haftet nur das Gesellschaftsvermögen (§ 13 Abs. 2 GmbHG). 25.000 € ist das Mindeststammkapital, keine persönliche Haftungsgrenze.' }
  ],
  flashcards: [
    { q: 'Was unterscheidet Bedarf von Bedürfnis?', a: 'Bedarf ist ein Bedürfnis, für das Kaufkraft vorhanden ist.' },
    { q: 'Was besagt das Minimalprinzip?', a: 'Ein vorgegebenes Ziel soll mit möglichst geringem Mitteleinsatz erreicht werden.' },
    { q: 'Nenne die volkswirtschaftlichen Produktionsfaktoren.', a: 'Arbeit, Boden, Kapital (oft ergänzt um Wissen/Bildung).' },
    { q: 'Welche Sektoren kommen im erweiterten Wirtschaftskreislauf hinzu?', a: 'Staat, Banken (Vermögensänderung) und Ausland.' },
    { q: 'Was ist der Gleichgewichtspreis?', a: 'Der Preis, bei dem Angebots- und Nachfragemenge übereinstimmen.' },
    { q: 'Was passiert bei einem Nachfrageüberhang?', a: 'Die Nachfrager überbieten sich, der Preis steigt.' },
    { q: 'Welche Marktform liegt bei wenigen Anbietern und vielen Nachfragern vor?', a: 'Angebotsoligopol.' },
    { q: 'Wie haften OHG-Gesellschafter?', a: 'Unbeschränkt, unmittelbar und als Gesamtschuldner (§ 126 HGB).' },
    { q: 'Wie hoch ist das Mindeststammkapital einer GmbH?', a: '25.000 € (§ 5 Abs. 1 GmbHG, Stand 2026).' },
    { q: 'Wie hoch ist das Mindestgrundkapital einer AG?', a: '50.000 € (§ 7 AktG, Stand 2026).' },
    { q: 'Was sind Komplementärgüter? Beispiel?', a: 'Güter, die sich ergänzen und gemeinsam genutzt werden, z. B. Lkw und Diesel.' }
  ],
  tasks: [
    {
      id: 'wiso-wirtschaft-grundlagen-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne jedem Beispiel aus der Spedition die passende Güterart zu.',
      pairs: [
        ['Sattelzugmaschine der Spedition', 'Investitionsgut (Gebrauchsgut)'],
        ['Stretchfolie zum Sichern von Paletten', 'Verbrauchsgut'],
        ['Transport einer Sendung nach Metz', 'Dienstleistung'],
        ['Bahntransport statt Lkw-Transport', 'Substitutionsgut']
      ],
      hints: ['Wird das Gut über Jahre genutzt oder sofort verbraucht?', 'Ersetzen sich zwei Güter, spricht man von Substitution.'],
      solution: 'Die **Sattelzugmaschine** dient der Leistungserstellung über Jahre (Investitions- und Gebrauchsgut). **Stretchfolie** wird beim Einsatz verbraucht. Der **Transport** ist eine immaterielle Leistung, also eine Dienstleistung. **Bahn statt Lkw**: Beide Leistungen können sich gegenseitig ersetzen (Substitutionsgüter).'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a2', type: 'mc', difficulty: 2, points: 1,
      q: 'Disponentin Aylin soll mit **zwei Lkw und einer Tagesschicht möglichst viele** Paletten im Nahverkehr zustellen. Nach welchem Prinzip handelt sie?',
      options: ['Minimalprinzip', 'Maximalprinzip', 'Optimalprinzip mit festen Mitteln und festem Ziel', 'Gewinnprinzip'],
      correct: [1],
      hints: ['Was ist hier vorgegeben – die Mittel oder das Ergebnis?', 'Zwei Lkw und eine Schicht sind fest.'],
      solution: 'Die **Mittel sind fest** (zwei Lkw, eine Schicht), das **Ergebnis soll möglichst groß** sein → **Maximalprinzip**. Beim Minimalprinzip wäre die Palettenmenge vorgegeben und die Kosten sollen minimal sein.'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a3', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Ein Mangelgefühl mit dem Wunsch, es zu beseitigen, ist ein [[Bedürfnis]]. Ist dafür Kaufkraft vorhanden, spricht man von [[Bedarf]]. Tritt dieser am Markt auf, entsteht [[Nachfrage]]. Volkswirtschaftlich unterscheidet man die Produktionsfaktoren Arbeit, Boden und [[Kapital]].',
      hints: ['Die Kette lautet Bedürfnis – Bedarf – Nachfrage.', 'Maschinen, Gebäude und Fahrzeuge gehören zum dritten Produktionsfaktor.'],
      solution: '**Bedürfnis** (Wunsch) → mit Kaufkraft **Bedarf** → am Markt **Nachfrage**. Die volkswirtschaftlichen Produktionsfaktoren sind Arbeit, Boden und **Kapital** (Sachkapital wie Lkw, Lager, Maschinen).'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a4', type: 'match', difficulty: 2, points: 4,
      q: 'Im erweiterten Wirtschaftskreislauf: Ordne jedem Geldstrom die Richtung zu.',
      pairs: [
        ['Lohn für einen Berufskraftfahrer', 'Unternehmen → Haushalte'],
        ['Kfz-Steuer der Spedition', 'Unternehmen → Staat'],
        ['Kindergeld', 'Staat → Haushalte'],
        ['Zahlung eines französischen Kunden für einen Export', 'Ausland → Unternehmen']
      ],
      hints: ['Wer zahlt, wer empfängt?', 'Transferzahlungen fließen vom Staat ohne direkte Gegenleistung.'],
      solution: 'Der **Lohn** ist Einkommen der Haushalte für ihre Arbeit (Unternehmen → Haushalte). Die **Kfz-Steuer** zahlt die Spedition an den Staat. **Kindergeld** ist eine Transferzahlung (Staat → Haushalte). Die **Exportzahlung** fließt aus dem Ausland an das inländische Unternehmen.'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a5', type: 'calc', difficulty: 3, points: 3,
      q: `Für Stadt-Kurierfahrten gelten folgende Beispielfunktionen (p = Preis je Fahrt in €, Mengen in Fahrten pro Tag):

- Nachfrage: N = 1.200 − 20 · p
- Angebot: A = 200 + 30 · p

Berechne Gleichgewichtspreis, Gleichgewichtsmenge und den Marktumsatz pro Tag.`,
      formula: 'Gleichgewicht: N = A; Umsatz = Preis × Menge',
      fields: [
        { id: 'p', label: 'Gleichgewichtspreis', unit: '€', answer: 20, tol: 0.01 },
        { id: 'x', label: 'Gleichgewichtsmenge', unit: 'Fahrten', answer: 800, tol: 0.5 },
        { id: 'u', label: 'Marktumsatz pro Tag', unit: '€', answer: 16000, tol: 0.5 }
      ],
      hints: ['Setze beide Gleichungen gleich und löse nach p auf.', 'Setze p in eine der beiden Gleichungen ein, um die Menge zu erhalten.'],
      solution: `**Ansatz:** N = A

1.200 − 20p = 200 + 30p
1.000 = 50p
**p = 20 €**

**Menge:** N = 1.200 − 20 · 20 = 800; Probe A = 200 + 30 · 20 = 800 → **800 Fahrten/Tag**

**Umsatz:** 20 € × 800 = **16.000 € pro Tag**`
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a6', type: 'calc', difficulty: 2, points: 3,
      q: 'Auf dem Kuriermarkt aus der vorherigen Aufgabe (N = 1.200 − 20p, A = 200 + 30p) verlangen alle Anbieter **25 € je Fahrt**. Berechne Nachfrage- und Angebotsmenge und den Überhang (als positive Zahl).',
      formula: 'Überhang = |A − N|',
      fields: [
        { id: 'n', label: 'Nachfragemenge', unit: 'Fahrten', answer: 700, tol: 0.5 },
        { id: 'a', label: 'Angebotsmenge', unit: 'Fahrten', answer: 950, tol: 0.5 },
        { id: 'ue', label: 'Überhang', unit: 'Fahrten', answer: 250, tol: 0.5 }
      ],
      hints: ['Setze p = 25 in beide Gleichungen ein.', 'Ist das Angebot größer als die Nachfrage, liegt ein Angebotsüberhang vor.'],
      solution: `**Nachfrage:** N = 1.200 − 20 · 25 = 1.200 − 500 = **700 Fahrten**

**Angebot:** A = 200 + 30 · 25 = 200 + 750 = **950 Fahrten**

**Überhang:** 950 − 700 = **250 Fahrten** → **Angebotsüberhang**. Anbieter finden nicht genug Aufträge, der Preis sinkt Richtung 20 €.`
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a7', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zu Marktformen sind richtig? (Mehrfachauswahl)',
      options: [
        'Im Polypol kann ein einzelner Anbieter den Marktpreis kaum beeinflussen.',
        'Wenige große Containerreedereien und viele Verlader bilden ein Angebotsoligopol.',
        'Ein Angebotsmonopol liegt vor, wenn es viele Anbieter und einen Nachfrager gibt.',
        'Im Oligopol beobachten die Anbieter genau die Preise ihrer Konkurrenten.'
      ],
      correct: [0, 1, 3],
      hints: ['Die Bezeichnung richtet sich nach der Zahl der Anbieter bzw. Nachfrager.', 'Viele Anbieter und ein Nachfrager – auf welcher Seite steht das Monopol?'],
      solution: 'A, B und D sind richtig. Im **Polypol** ist jeder Anbieter zu klein, um den Preis zu setzen. **Wenige Anbieter** = Angebotsoligopol; diese reagieren stark aufeinander. C ist falsch: Viele Anbieter und **ein Nachfrager** ergeben ein **Nachfragemonopol**.'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a8', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne jeder Rechtsform die zutreffende Haftungsregel zu (Stand 2026).',
      pairs: [
        ['Einzelunternehmen', 'Inhaber haftet allein und unbeschränkt'],
        ['OHG', 'Alle Gesellschafter haften unbeschränkt als Gesamtschuldner'],
        ['KG', 'Ein Teil haftet unbeschränkt, ein Teil bis zur Haftsumme'],
        ['GmbH', 'Nur das Gesellschaftsvermögen; Mindeststammkapital 25.000 €'],
        ['AG', 'Nur das Gesellschaftsvermögen; Mindestgrundkapital 50.000 €']
      ],
      hints: ['Personengesellschaften: Gesellschafter haften persönlich (Ausnahme Kommanditist).', 'Kapitalgesellschaften unterscheiden sich im Mindestkapital.'],
      solution: 'Einzelunternehmer: unbeschränkt. OHG: § 126 HGB, gesamtschuldnerisch. KG: Komplementär unbeschränkt, Kommanditist bis zur Haftsumme (§ 171 HGB). GmbH: § 13 Abs. 2 GmbHG, Stammkapital 25.000 € (§ 5 GmbHG). AG: Gesellschaftsvermögen (§ 1 AktG), Grundkapital 50.000 € (§ 7 AktG).'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a9', type: 'text', difficulty: 2, points: 4,
      q: 'Eine Spedition lagert die Lkw-Wartung an eine Fachwerkstatt aus und beauftragt für Fernverkehre Subunternehmer. Erläutere je **zwei Vor- und zwei Nachteile** dieser zwischenbetrieblichen Arbeitsteilung.',
      model: 'Vorteile: Die Werkstatt und die Subunternehmer sind spezialisiert und arbeiten günstiger und schneller; die Spedition spart eigene Fixkosten für Werkstatt, Fahrzeuge und Personal und kann sich auf ihr Kerngeschäft, die Organisation von Transporten, konzentrieren. Nachteile: Die Spedition wird abhängig von ihren Partnern; fällt ein Subunternehmer aus, entstehen Störungen. Außerdem verliert sie Kontrolle über Qualität und eigenes Know-how, und der Abstimmungsaufwand steigt.',
      criteria: [
        { text: 'Vorteil Spezialisierung/Kosten', keywords: ['Spezialis|günstiger|Kosten|Fixkosten'], points: 1 },
        { text: 'Vorteil Konzentration auf Kerngeschäft/Flexibilität', keywords: ['Kerngeschäft|konzentr|flexib'], points: 1 },
        { text: 'Nachteil Abhängigkeit', keywords: ['abhängig|Ausfall|ausfällt|Störung'], points: 1 },
        { text: 'Nachteil Kontrolle/Qualität/Abstimmung', keywords: ['Kontrolle|Qualität|Abstimmung|Know-how'], points: 1 }
      ],
      hints: ['Denke an Kosten und Spezialisierung.', 'Was passiert, wenn ein Partner ausfällt?'],
      solution: '**Vorteile**: Spezialisierung der Partner (bessere Qualität, geringere Kosten), Abbau eigener Fixkosten, Konzentration auf das Kerngeschäft, mehr Flexibilität bei schwankender Auslastung. **Nachteile**: Abhängigkeit von Partnern und Störanfälligkeit, weniger Kontrolle über Qualität und Termine, Verlust eigenen Wissens, höherer Abstimmungsaufwand.'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a10', type: 'order', difficulty: 2, points: 4,
      q: 'Ordne die Marktpreisbildung bei einem zu hohen Preis in der richtigen Reihenfolge.',
      items: [
        'Der Preis liegt über dem Gleichgewichtspreis.',
        'Die Angebotsmenge ist größer als die Nachfragemenge (Angebotsüberhang).',
        'Anbieter senken den Preis, um ihre Leistung abzusetzen.',
        'Die Nachfragemenge steigt, die Angebotsmenge sinkt, bis beide gleich sind.'
      ],
      hints: ['Am Anfang steht die Ursache: der Preis.', 'Am Ende ist der Markt geräumt.'],
      solution: 'Zu hoher Preis → **Angebotsüberhang** → **Preissenkung** → Mengen passen sich an, bis das **Gleichgewicht** erreicht ist (Ausgleichsfunktion des Preises).'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Spedition stellt auf Lkw mit geringerem Verbrauch um und vermeidet durch bessere Tourenplanung Leerfahrten. Dadurch sinken Kosten und CO₂-Ausstoß. Welche Zielbeziehung liegt zwischen dem ökonomischen und dem ökologischen Ziel vor?',
      options: ['Zielkonflikt', 'Zielharmonie', 'Zielneutralität', 'Zielverzicht'],
      correct: [1],
      hints: ['Fördert die Maßnahme beide Ziele oder nur eines?', 'Weniger Diesel bedeutet weniger Kosten und weniger Emissionen.'],
      solution: '**Zielharmonie**: Die Maßnahme fördert gleichzeitig das ökonomische Ziel (Kostensenkung) und das ökologische Ziel (weniger CO₂). Ein Zielkonflikt läge vor, wenn ein Ziel nur auf Kosten des anderen erreicht würde.'
    },
    {
      id: 'wiso-wirtschaft-grundlagen-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Gründung der Saarschleife Transporte',
      intro: `Martin Klein (Berufskraftfahrer) und Sabine Roth (Kauffrau für Spedition und Logistikdienstleistung) wollen in Mettlach ein Transportunternehmen gründen. Martin will die Firma leiten und voll haften. Sabines Vater, Herr Roth, will sich mit Kapital beteiligen, aber nicht mitarbeiten und nicht mit seinem Privatvermögen haften.

Sie entscheiden sich für eine **KG**: Martin wird Komplementär. Herr Roth wird Kommanditist mit einer im Handelsregister eingetragenen Haftsumme von **50.000 €**, von der er **30.000 €** bereits eingezahlt hat. Sabine wird später angestellt.`,
      hints: ['Komplementär = Vollhafter, Kommanditist = Teilhafter.', '§ 171 HGB: Die Haftung des Kommanditisten ist ausgeschlossen, soweit die Einlage geleistet ist.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'wiso-wirtschaft-grundlagen-a12-1', type: 'calc', difficulty: 3, points: 2,
          q: 'Ein Lieferant hat eine offene Forderung von 80.000 €, die das Gesellschaftsvermögen nicht deckt. Bis zu welchem Betrag kann der Lieferant Herrn Roth noch **persönlich** in Anspruch nehmen? Bis zu welchem Betrag haftet Martin persönlich?',
          formula: 'Resthaftung Kommanditist = Haftsumme − geleistete Einlage',
          fields: [
            { id: 'roth', label: 'Persönliche Haftung Herr Roth', unit: '€', answer: 20000, tol: 0.01 },
            { id: 'martin', label: 'Persönliche Haftung Martin', unit: '€', answer: 80000, tol: 0.01 }
          ],
          hints: ['Die eingezahlten 30.000 € sind bereits Gesellschaftsvermögen.', 'Der Komplementär haftet unbeschränkt – also für die ganze Forderung.'],
          solution: `**Herr Roth (Kommanditist):** Haftsumme 50.000 € − geleistete Einlage 30.000 € = **20.000 €** persönliche Resthaftung (§ 171 Abs. 1 HGB).

**Martin (Komplementär):** haftet unbeschränkt mit seinem gesamten Vermögen, also für die vollen **80.000 €** (§ 161 i. V. m. § 126 HGB).

Hinweis: Zahlt Herr Roth die restlichen 20.000 € ein, ist seine persönliche Haftung ganz ausgeschlossen.`
        },
        {
          id: 'wiso-wirtschaft-grundlagen-a12-2', type: 'mc', difficulty: 2, points: 2,
          q: 'Martin überlegt, ob nicht eine **GmbH & Co. KG** besser wäre. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Komplementär wäre eine GmbH; Martin haftet dann nicht mehr unbeschränkt mit seinem Privatvermögen.',
            'Für die Komplementär-GmbH ist ein Stammkapital von mindestens 25.000 € nötig.',
            'Herr Roth würde dann unbeschränkt haften.',
            'Eine GmbH & Co. KG ist eine reine Kapitalgesellschaft ohne Kommanditisten.'
          ],
          correct: [0, 1],
          hints: ['Wer ist bei der GmbH & Co. KG der Vollhafter?', 'Für die GmbH gilt § 5 GmbHG.'],
          solution: 'Richtig sind A und B. In der GmbH & Co. KG ist die **GmbH** Komplementärin; sie haftet unbeschränkt, aber nur mit ihrem Gesellschaftsvermögen. Für sie gilt das Mindeststammkapital von **25.000 €**. Herr Roth bleibt Kommanditist (C falsch). Die GmbH & Co. KG ist eine Personengesellschaft (KG) mit einer Kapitalgesellschaft als Komplementär (D falsch).'
        },
        {
          id: 'wiso-wirtschaft-grundlagen-a12-3', type: 'mc', difficulty: 2, points: 3,
          q: 'Welche Ziele der Gründer sind **ökonomische** Unternehmensziele? (Mehrfachauswahl)',
          options: [
            'Im zweiten Jahr einen Gewinn von 40.000 € erreichen',
            'Jederzeit zahlungsfähig bleiben (Liquidität sichern)',
            'Jedes Jahr einen Auszubildenden einstellen',
            'Den Marktanteil im Raum Merzig-Wadern erhöhen',
            'Leerfahrten zum Schutz des Klimas vermeiden'
          ],
          correct: [0, 1, 3],
          hints: ['Ökonomische Ziele lassen sich in Geld oder Marktgrößen messen.', 'Ausbildung ist ein soziales, Klimaschutz ein ökologisches Ziel.'],
          solution: '**Ökonomisch** sind Gewinn, Liquidität und Marktanteil (A, B, D). Einen Auszubildenden einstellen ist ein **soziales** Ziel, Leerfahrten zum Klimaschutz vermeiden ein **ökologisches** Ziel (das zugleich Kosten senken kann – Zielharmonie).'
        }
      ]
    }
  ],
  quiz: ['wiso-wirtschaft-grundlagen-a2', 'wiso-wirtschaft-grundlagen-a5', 'wiso-wirtschaft-grundlagen-a7', 'wiso-wirtschaft-grundlagen-a8', 'wiso-wirtschaft-grundlagen-a12'],
  sources: [
    { id: 'saar-wiso-2016', ref: 'W2' },
    { id: 'saar-wiso-2016', ref: 'W6 (Rechtsformen, Unternehmensziele)' },
    { title: 'Handelsgesetzbuch § 126 Persönliche Haftung der Gesellschafter', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__126.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 171 Haftung des Kommanditisten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__171.html', asOf: '2026' },
    { title: 'GmbH-Gesetz § 5 Stammkapital', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/gmbhg/__5.html', asOf: '2026' },
    { title: 'GmbH-Gesetz § 13 Juristische Person; Handelsgesellschaft', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/gmbhg/__13.html', asOf: '2026' },
    { title: 'Aktiengesetz § 1 Wesen der Aktiengesellschaft', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/aktg/__1.html', asOf: '2026' },
    { title: 'Aktiengesetz § 7 Mindestnennbetrag des Grundkapitals', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/aktg/__7.html', asOf: '2026' }
  ],
  links: ['wiso-wirtschaftspolitik', 'wiso-kaufvertrag']
};
