export default {
  id: 'lf12-bestellmenge',
  area: 'LF12',
  topic: 'lf12-bestellmenge',
  title: 'Bedarfsermittlung, Bestellverfahren und optimale Bestellmenge',
  status: 'vollstaendig',
  minutes: 45,
  validity: null,
  goals: [
    'Ich kann programmorientierte und verbrauchsorientierte Bedarfsermittlung unterscheiden.',
    'Ich kann Primär-, Sekundär- und Tertiärbedarf sowie Brutto- und Nettobedarf erklären und den Nettobedarf berechnen.',
    'Ich kann den künftigen Bedarf mit arithmetischem, gleitendem und gewogenem Mittelwert schätzen.',
    'Ich kann Bestellpunkt- und Bestellrhythmusverfahren unterscheiden und Meldebestand sowie Bestellmenge berechnen.',
    'Ich kann die optimale Bestellmenge mit der Andler-Formel und tabellarisch ermitteln.',
    'Ich kann den Zielkonflikt zwischen Bestellkosten und Lagerhaltungskosten erklären und die Grenzen des Modells nennen.'
  ],
  simple: `# Worum geht es?

Bevor bestellt wird, braucht man drei Antworten: **Was** wird gebraucht, **wie viel** und **wann**? Das ist die **Bedarfsermittlung**. Danach entscheidet man, **wann** nachbestellt wird (Bestellverfahren) und **wie viel** auf einmal (Bestellmenge).

# Zwei Wege, den Bedarf zu ermitteln

- **Programmorientiert**: Man weiß, was produziert wird (Produktionsprogramm), und rechnet mit der **Stückliste** aus, welche Teile man braucht. Genau, aber aufwendig – gut für teure Teile.
- **Verbrauchsorientiert**: Man schaut, wie viel **in der Vergangenheit** verbraucht wurde, und schätzt daraus die Zukunft, z. B. mit einem **Mittelwert**. Einfach – gut für billige Teile und Verbrauchsmaterial (Stretchfolie, Etiketten).

# Wann bestellen?

- **Bestellpunktverfahren**: Bestellt wird, sobald der Bestand auf den **Meldebestand** fällt.
- **Bestellrhythmusverfahren**: Bestellt wird in **festen Abständen**, z. B. jeden Montag.

# Wie viel bestellen?

Bestellt man **selten in großen Mengen**, spart man Bestellkosten (weniger Bestellungen, Anlieferungen, Prüfungen), aber das Lager ist voll und bindet Kapital. Bestellt man **oft in kleinen Mengen**, ist das Lager leer, aber die Bestellkosten steigen. Die **optimale Bestellmenge** ist die Menge, bei der die **Summe** beider Kosten am kleinsten ist.`,
  deep: `# 1. Bedarfsarten

| Bedarfsart | Bedeutung | Beispiel Getriebehersteller |
|---|---|---|
| **Primärbedarf** | Bedarf an verkaufsfähigen Erzeugnissen (laut Absatz- und Produktionsplan) | 2.000 Getriebe im Monat |
| **Sekundärbedarf** | Bedarf an Rohstoffen, Teilen und Baugruppen, die in die Erzeugnisse eingehen (aus der Stückliste) | 2.000 Gehäuse, 8.000 Zahnräder |
| **Tertiärbedarf** | Bedarf an Hilfs- und Betriebsstoffen sowie Verschleißwerkzeugen | Schmieröl, Bohrer, Stretchfolie |
| **Bruttobedarf** | gesamter Bedarf einer Periode, ohne Berücksichtigung der Bestände | |
| **Nettobedarf** | tatsächlich noch zu beschaffende Menge | |

**Nettobedarfsrechnung (ein übliches Schema):**

| | Bruttobedarf |
|---|---|
| + | Sicherheitsbestand (Mindestbestand) |
| − | Lagerbestand |
| + | Vormerkungen (Reservierungen für andere Aufträge) |
| − | offene Bestellungen (Bestellbestand, schon bestellt, noch nicht geliefert) |
| = | **Nettobedarf** |

> Lagerbestand minus Vormerkungen nennt man auch **verfügbaren Bestand**. In Lehrbüchern wird das Schema teilweise leicht anders gegliedert; das Ergebnis ist dasselbe.

# 2. Programm- und verbrauchsorientierte Bedarfsermittlung

| | programmorientiert (deterministisch) | verbrauchsorientiert (stochastisch) |
|---|---|---|
| Grundlage | Produktionsprogramm + Stücklisten/Rezepturen | Verbrauchswerte der Vergangenheit |
| Genauigkeit | hoch | Schätzung, Prognosefehler möglich |
| Aufwand | hoch | gering |
| geeignet für | A-Güter, Sekundärbedarf, Teile für Just-in-time | C-Güter, Tertiärbedarf, gleichmäßiger Verbrauch |

# 3. Mittelwertverfahren (verbrauchsorientiert)

- **Arithmetisches Mittel**: Summe aller Verbräuche ÷ Anzahl Perioden. Alle Monate zählen gleich.
- **Gleitender Mittelwert**: Mittel nur der **letzten n Perioden**; mit jeder neuen Periode fällt die älteste heraus. Reagiert schneller auf Veränderungen.
- **Gewogener (gewichteter) gleitender Mittelwert**: Jüngere Perioden bekommen ein **höheres Gewicht**. Prognose = Σ (Verbrauch × Gewicht) ÷ Σ Gewichte.

Bei einem steigenden Trend liefert der gewogene Mittelwert den höchsten, das arithmetische Mittel den niedrigsten Prognosewert.

# 4. Bestellverfahren

**Bestellpunktverfahren** (Bestellzeitpunkt variabel, Bestellmenge meist fest):

**Meldebestand = Tagesverbrauch × Lieferzeit (Tage) + Mindestbestand**

Der Mindestbestand (eiserner Bestand, Sicherheitsbestand) fängt Verzögerungen und Mehrverbrauch ab. Die Herleitung und eine Grundaufgabe stehen in der Einheit „Beschaffung und Angebotsvergleich“ (Lernfeld 8). Vorteil: hohe Versorgungssicherheit; Nachteil: Bestand muss laufend überwacht werden (heute meist automatisch im Warenwirtschafts- oder Lagerverwaltungssystem).

**Bestellrhythmusverfahren** (Bestellzeitpunkt fest, Bestellmenge variabel):

Zu festen Terminen wird der Bestand geprüft und so viel bestellt, dass der Bestand bei Eintreffen der Ware wieder auf den **Höchstbestand** aufgefüllt wird:

**Bestellmenge = Höchstbestand − (Bestand am Bestelltag − Verbrauch während der Lieferzeit)**

Vorteil: planbare, bündelbare Bestellungen und Touren (z. B. fester Liefertag); Nachteil: Bei unerwartet hohem Verbrauch zwischen zwei Terminen droht ein Fehlbestand, deshalb meist höherer Sicherheitsbestand.

# 5. Optimale Bestellmenge

Zwei Kostenarten laufen gegeneinander (**Zielkonflikt**):

- **Bestellkosten (bestellfixe Kosten)**: fallen je Bestellung an, unabhängig von der Menge – Angebotseinholung, Bestellschreibung, Wareneingangsprüfung, Rechnungsprüfung, ggf. Anlieferpauschale. Je **größer** die Bestellmenge, desto **weniger** Bestellungen → Bestellkosten im Jahr **sinken**.
- **Lagerhaltungskosten**: Zinsen auf gebundenes Kapital, Raum, Versicherung, Schwund, Veralterung. Sie werden als **Lagerhaltungskostensatz** in Prozent des durchschnittlichen Lagerbestandswerts angegeben. Je **größer** die Bestellmenge, desto **höher** der Durchschnittsbestand → Lagerhaltungskosten **steigen**.

Formeln (Jahresbedarf M, Bestellmenge x, bestellfixe Kosten B je Bestellung, Einstandspreis P je Stück, Lagerhaltungskostensatz L in %):

- Anzahl Bestellungen = M ÷ x
- Bestellkosten pro Jahr = M ÷ x × B
- durchschnittlicher Lagerbestand = x ÷ 2 (gleichmäßiger Verbrauch, kein Sicherheitsbestand)
- Lagerhaltungskosten pro Jahr = x ÷ 2 × P × L ÷ 100
- Gesamtkosten = Bestellkosten + Lagerhaltungskosten

**Andler-Formel (klassische Losgrößenformel):**

**optimale Bestellmenge = √(200 × Jahresbedarf × bestellfixe Kosten ÷ (Einstandspreis × Lagerhaltungskostensatz in %))**

Die **200** entsteht aus dem Faktor 2 (Durchschnittsbestand = halbe Bestellmenge) und dem Faktor 100 (Kostensatz in Prozent). Im Optimum sind Bestellkosten und Lagerhaltungskosten **gleich hoch**.

**Tabellarische Ermittlung**: Man rechnet für mehrere mögliche Bestellhäufigkeiten die Kosten aus und wählt die Zeile mit den **niedrigsten Gesamtkosten**. Das ist anschaulicher und erlaubt, Rabattstaffeln oder Verpackungseinheiten zu berücksichtigen.

# 6. Grenzen des Modells

Die Andler-Formel setzt voraus: bekannter, **gleichmäßiger** Jahresbedarf; **konstante** Preise (keine Mengenrabatte); feste Bestellkosten; Lieferung ohne Verzögerung; **unbegrenzte** Lager- und Finanzierungsmöglichkeit; keine Mindestabnahmemengen oder Verpackungseinheiten. In der Praxis wird die errechnete Menge deshalb gerundet (volle Paletten, Lkw-Ladungen) und an Rabatte, Lagerkapazität und Transportkosten angepasst.

> Für Speditionen wichtig: Ein Logistikdienstleister, der die Beschaffungslogistik eines Kunden übernimmt, plant mit diesen Größen Lagerkapazität und Touren. Kennzahlen wie durchschnittlicher Lagerbestand und Umschlagshäufigkeit findest du in der Einheit „Lagerorganisation, Lagerpapiere und Lagerkennzahlen“.`,
  terms: [
    { term: 'Primärbedarf', def: 'Bedarf an verkaufsfähigen Enderzeugnissen und Ersatzteilen laut Absatz- und Produktionsplan.' },
    { term: 'Sekundärbedarf', def: 'Bedarf an Rohstoffen, Teilen und Baugruppen, der sich aus dem Primärbedarf über Stücklisten ergibt.' },
    { term: 'Tertiärbedarf', def: 'Bedarf an Hilfs- und Betriebsstoffen sowie Verschleißwerkzeugen.' },
    { term: 'Nettobedarf', def: 'Tatsächlich zu beschaffende Menge: Bruttobedarf + Sicherheitsbestand − Lagerbestand + Vormerkungen − offene Bestellungen.' },
    { term: 'Gleitender Mittelwert', def: 'Durchschnitt der letzten n Perioden; die älteste Periode fällt beim Weiterrechnen heraus.' },
    { term: 'Meldebestand', def: 'Bestand, bei dessen Erreichen bestellt wird: Tagesverbrauch × Lieferzeit + Mindestbestand.' },
    { term: 'Höchstbestand', def: 'Größte Menge, die nach einer Lieferung auf Lager sein soll; Obergrenze beim Bestellrhythmusverfahren.' },
    { term: 'Bestellfixe Kosten', def: 'Kosten je Bestellvorgang unabhängig von der Menge, z. B. Bestellschreibung, Wareneingangs- und Rechnungsprüfung.' },
    { term: 'Lagerhaltungskostensatz', def: 'Lagerhaltungskosten in Prozent des durchschnittlichen Lagerbestandswerts (Zinsen, Raum, Versicherung, Schwund).' },
    { term: 'Optimale Bestellmenge', def: 'Bestellmenge, bei der die Summe aus Bestellkosten und Lagerhaltungskosten pro Jahr minimal ist.' }
  ],
  example: `# Saar-Trans versorgt die Kartonage eines Kunden (Beispielzahlen)

Die Saar-Trans Spedition GmbH betreibt für den Versandhändler **Warndt-Shop GmbH** (fiktiv) das Lager und plant auch die Nachbestellung der Versandkartons.

**Daten:** Bestelleinheit ist ein Bund mit 25 Kartons. Jahresbedarf **18.000 Bund**, bestellfixe Kosten **80 €** je Bestellung, Einstandspreis **20 € je Bund**, Lagerhaltungskostensatz **10 %**.

**Andler-Formel:**

√(200 × 18.000 × 80 ÷ (20 × 10)) = √(288.000.000 ÷ 200) = √1.440.000 = **1.200 Bund**

**Kontrolle:**

| | Rechnung | Ergebnis |
|---|---|---:|
| Anzahl Bestellungen | 18.000 ÷ 1.200 | 15 |
| Bestellkosten | 15 × 80 € | 1.200 € |
| Ø Lagerbestand | 1.200 ÷ 2 | 600 Bund |
| Lagerhaltungskosten | 600 × 20 € × 10 % | 1.200 € |
| **Gesamtkosten** | | **2.400 €** |

Bestell- und Lagerhaltungskosten sind im Optimum gleich hoch. Weil auf eine Palette 300 Bund passen, entspricht die Menge genau **4 Paletten** – praktisch für Anlieferung und Lagerplatz.`,
  rules: [
    'Programmorientiert = aus Produktionsprogramm und Stückliste (genau, aufwendig); verbrauchsorientiert = aus Vergangenheitswerten (einfach, Schätzung).',
    'Nettobedarf = Bruttobedarf + Sicherheitsbestand − Lagerbestand + Vormerkungen − offene Bestellungen.',
    'Gewogener Mittelwert: jüngere Werte zählen mehr; durch die Summe der Gewichte teilen.',
    'Meldebestand = Tagesverbrauch × Lieferzeit + Mindestbestand.',
    'Bestellpunktverfahren: fester Bestand, variabler Termin; Bestellrhythmusverfahren: fester Termin, variable Menge.',
    'Andler: x opt = √(200 × M × B ÷ (P × L)); im Optimum sind Bestell- und Lagerhaltungskosten gleich.',
    'Große Bestellmengen senken Bestellkosten und erhöhen Lagerhaltungskosten – und umgekehrt.'
  ],
  summary: `- **Bedarfsarten**: Primär (Erzeugnisse), Sekundär (Teile, Rohstoffe), Tertiär (Hilfs-/Betriebsstoffe); Brutto- und Nettobedarf.
- **Bedarfsermittlung**: programmorientiert über Stücklisten oder verbrauchsorientiert über **Mittelwertverfahren** (arithmetisch, gleitend, gewogen).
- **Bestellpunktverfahren**: Meldebestand = Tagesverbrauch × Lieferzeit + Mindestbestand.
- **Bestellrhythmusverfahren**: feste Termine, Auffüllen auf den Höchstbestand.
- **Optimale Bestellmenge**: Minimum der Gesamtkosten aus Bestell- und Lagerhaltungskosten; Andler-Formel oder Tabelle.
- **Grenzen**: gleichmäßiger Bedarf, konstante Preise, keine Kapazitätsgrenzen – in der Praxis runden und anpassen.`,
  mistakes: [
    { wrong: 'Bei der Andler-Formel setze ich den Lagerhaltungskostensatz als Dezimalzahl (0,12) ein.', right: 'Mit dem Faktor 200 wird der Satz in Prozent eingesetzt (12). Wer 0,12 nimmt, muss mit 2 statt 200 rechnen.' },
    { wrong: 'Die Lagerhaltungskosten berechne ich von der vollen Bestellmenge.', right: 'Sie beziehen sich auf den durchschnittlichen Lagerbestand, also auf die halbe Bestellmenge (bei gleichmäßigem Verbrauch).' },
    { wrong: 'Offene Bestellungen ziehe ich beim Nettobedarf nicht ab, weil die Ware noch nicht da ist.', right: 'Offene Bestellungen kommen noch herein und decken Bedarf; sie werden vom Bruttobedarf abgezogen.' },
    { wrong: 'Beim gewogenen Mittelwert teile ich durch die Anzahl der Monate.', right: 'Man teilt durch die Summe der Gewichte.' },
    { wrong: 'Die optimale Bestellmenge ist die Menge mit den niedrigsten Bestellkosten.', right: 'Gesucht ist das Minimum der Gesamtkosten aus Bestell- und Lagerhaltungskosten.' },
    { wrong: 'Beim Bestellrhythmusverfahren wird immer dieselbe Menge bestellt.', right: 'Der Termin ist fest, die Menge schwankt: Es wird jeweils auf den Höchstbestand aufgefüllt.' }
  ],
  flashcards: [
    { q: 'Was ist Sekundärbedarf?', a: 'Bedarf an Rohstoffen, Teilen und Baugruppen, der über die Stückliste aus dem Primärbedarf folgt.' },
    { q: 'Wie berechnet man den Nettobedarf?', a: 'Bruttobedarf + Sicherheitsbestand − Lagerbestand + Vormerkungen − offene Bestellungen.' },
    { q: 'Wann nutzt man die verbrauchsorientierte Bedarfsermittlung?', a: 'Bei geringwertigen Gütern und Hilfs-/Betriebsstoffen mit gleichmäßigem Verbrauch (C-Güter, Tertiärbedarf).' },
    { q: 'Was unterscheidet gleitenden und gewogenen Mittelwert?', a: 'Beim gleitenden Mittel zählen die letzten n Werte gleich, beim gewogenen erhalten jüngere Werte ein höheres Gewicht.' },
    { q: 'Formel Meldebestand?', a: 'Tagesverbrauch × Lieferzeit in Tagen + Mindestbestand.' },
    { q: 'Was ist beim Bestellrhythmusverfahren fest, was variabel?', a: 'Der Bestelltermin ist fest, die Bestellmenge variabel (Auffüllen auf den Höchstbestand).' },
    { q: 'Andler-Formel?', a: 'x opt = √(200 × Jahresbedarf × bestellfixe Kosten ÷ (Einstandspreis × Lagerhaltungskostensatz in %)).' },
    { q: 'Wie hoch ist der durchschnittliche Lagerbestand bei gleichmäßigem Verbrauch ohne Sicherheitsbestand?', a: 'Die halbe Bestellmenge (x ÷ 2).' },
    { q: 'Was gilt im Optimum für Bestell- und Lagerhaltungskosten?', a: 'Sie sind gleich hoch.' },
    { q: 'Nenne drei Annahmen der Andler-Formel.', a: 'Gleichmäßiger, bekannter Bedarf; konstante Preise ohne Rabatte; feste Bestellkosten; unbegrenzte Lager- und Finanzmittel; keine Lieferverzögerung.' }
  ],
  tasks: [
    {
      id: 'lf12-bestellmenge-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne den Begriff der passenden Erklärung zu (Beispiel: Hersteller von Gabelstaplern).',
      pairs: [
        ['Primärbedarf', '420 Gabelstapler laut Produktionsplan für das Quartal'],
        ['Sekundärbedarf', '420 Hubmasten und 1.680 Räder laut Stückliste'],
        ['Tertiärbedarf', 'Schmierstoffe, Schweißdraht und Bohrer'],
        ['Bruttobedarf', 'gesamter Periodenbedarf ohne Abzug von Beständen'],
        ['Nettobedarf', 'nach Abzug von Lager- und Bestellbestand noch zu beschaffende Menge']
      ],
      hints: ['Primär = was verkauft wird, Sekundär = was hineingeht, Tertiär = was dabei verbraucht wird.', 'Brutto = ohne, Netto = nach Abzug der Bestände.'],
      solution: 'Primärbedarf = Enderzeugnisse; Sekundärbedarf = Teile/Baugruppen aus der Stückliste; Tertiärbedarf = Hilfs- und Betriebsstoffe, Verschleißwerkzeuge; Bruttobedarf = gesamter Bedarf; Nettobedarf = tatsächlich zu beschaffende Menge.'
    },
    {
      id: 'lf12-bestellmenge-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zur **programmorientierten** Bedarfsermittlung sind richtig? (Mehrfachauswahl)',
      options: [
        'Sie geht vom Produktionsprogramm aus und löst die Stücklisten auf.',
        'Sie eignet sich besonders für geringwertige Hilfsstoffe wie Stretchfolie.',
        'Sie ist genauer, aber aufwendiger als die verbrauchsorientierte Ermittlung.',
        'Sie ist Voraussetzung für eine Just-in-time-Belieferung mit Teilen für die Montage.',
        'Sie verwendet ausschließlich Mittelwerte vergangener Verbräuche.'
      ],
      correct: [0, 2, 3],
      hints: ['Programmorientiert = deterministisch: Man weiß, was gebaut wird.', 'Mittelwerte gehören zur verbrauchsorientierten Methode.'],
      solution: 'Richtig sind **A, C, D**. Die programmorientierte Ermittlung rechnet aus Produktionsprogramm und Stückliste exakt, wie viele Teile wann gebraucht werden – genau, aber aufwendig, und Grundlage für JIT. Für billige Hilfsstoffe (B) lohnt der Aufwand nicht; Mittelwerte (E) sind ein verbrauchsorientiertes Verfahren.'
    },
    {
      id: 'lf12-bestellmenge-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Das Lager der Saar-Trans Spedition GmbH hat in den letzten sechs Monaten folgende Mengen Stretchfolie (Rollen) verbraucht:

| Jan | Feb | Mär | Apr | Mai | Jun |
|---:|---:|---:|---:|---:|---:|
| 120 | 135 | 128 | 142 | 150 | 145 |

Schätze den Bedarf für Juli mit
1. dem arithmetischen Mittel aller sechs Monate,
2. dem gleitenden Mittelwert der letzten drei Monate,
3. dem gewogenen Mittelwert der letzten drei Monate mit den Gewichten April 1, Mai 2, Juni 3.

Runde auf zwei Nachkommastellen.`,
      formula: 'arithm. Mittel = Σ Verbräuche ÷ Anzahl; gewogenes Mittel = Σ (Verbrauch × Gewicht) ÷ Σ Gewichte',
      fields: [
        { id: 'am', label: 'Arithmetisches Mittel', unit: 'Rollen', answer: 136.67, tol: 0.01 },
        { id: 'gm', label: 'Gleitender Mittelwert (3 Monate)', unit: 'Rollen', answer: 145.67, tol: 0.01 },
        { id: 'gew', label: 'Gewogener Mittelwert (3 Monate)', unit: 'Rollen', answer: 146.17, tol: 0.01 }
      ],
      hints: ['Summe aller sechs Werte: 820 Rollen.', 'Beim gewogenen Mittel durch 1 + 2 + 3 = 6 teilen.'],
      solution: `**1. Arithmetisches Mittel:** (120 + 135 + 128 + 142 + 150 + 145) Rollen ÷ 6 = 820 Rollen ÷ 6 = **136,67 Rollen**

**2. Gleitender Mittelwert:** (142 + 150 + 145) Rollen ÷ 3 = 437 Rollen ÷ 3 = **145,67 Rollen**

**3. Gewogener Mittelwert:** (142 × 1 + 150 × 2 + 145 × 3) ÷ (1 + 2 + 3) = (142 + 300 + 435) ÷ 6 = 877 ÷ 6 = **146,17 Rollen**

Der Verbrauch steigt tendenziell. Das arithmetische Mittel „hinkt“ hinterher, der gewogene Wert reagiert am stärksten auf die jüngsten Monate. In der Praxis würde man auf volle Rollen aufrunden (z. B. 147).`
    },
    {
      id: 'lf12-bestellmenge-a4', type: 'calc', difficulty: 2, points: 2,
      q: `Für einen Kunden der Kontraktlogistik ermittelt die Saar-Trans den Bedarf an Kunststoffbehältern für das nächste Quartal:

- Bruttobedarf: **2.400 Stück**
- Lagerbestand: **650 Stück**, davon **150 Stück** für einen anderen Auftrag reserviert (Vormerkung)
- Offene Bestellungen: **300 Stück**
- Sicherheitsbestand: **200 Stück**

Berechne den verfügbaren Lagerbestand und den Nettobedarf.`,
      formula: 'Nettobedarf = Bruttobedarf + Sicherheitsbestand − (Lagerbestand − Vormerkungen) − offene Bestellungen',
      fields: [
        { id: 'verf', label: 'Verfügbarer Lagerbestand', unit: 'Stück', answer: 500, tol: 0 },
        { id: 'netto', label: 'Nettobedarf', unit: 'Stück', answer: 1800, tol: 0 }
      ],
      hints: ['Reservierte Behälter stehen nicht zur Verfügung.', 'Der Sicherheitsbestand soll am Ende noch da sein, er wird also zum Bedarf addiert.'],
      solution: `**Verfügbarer Bestand:** 650 Stück − 150 Stück = **500 Stück**

**Nettobedarf:** 2.400 Stück + 200 Stück − 500 Stück − 300 Stück = **1.800 Stück**

Begründung: Der Sicherheitsbestand muss erhalten bleiben (+), verfügbarer Bestand und bereits bestellte Menge decken einen Teil des Bedarfs (−).`
    },
    {
      id: 'lf12-bestellmenge-a5', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte der programmorientierten Bedarfsermittlung in die richtige Reihenfolge.',
      items: [
        'Absatzplan erstellen (erwartete Verkaufsmengen)',
        'Produktionsprogramm festlegen (Primärbedarf)',
        'Stücklisten auflösen (Bruttobedarf an Teilen ermitteln)',
        'Lager- und Bestellbestände abziehen (Nettobedarf)',
        'Bestellmengen und Bestelltermine festlegen'
      ],
      hints: ['Am Anfang steht der Markt: Was wollen die Kunden kaufen?', 'Erst wenn der Nettobedarf feststeht, wird bestellt.'],
      solution: 'Absatzplan → Produktionsprogramm (Primärbedarf) → Stücklistenauflösung (Sekundär-/Bruttobedarf) → Nettobedarfsrechnung → Bestellmenge und -termin (unter Berücksichtigung der Lieferzeit).'
    },
    {
      id: 'lf12-bestellmenge-a6', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Kunde möchte, dass die Saar-Trans die Etiketten für sein Lager **jeden Dienstag** nachbestellt, damit die Lieferung mit der festen Tour am Donnerstag kommt. Welche Aussage trifft zu?',
      options: [
        'Das ist ein Bestellpunktverfahren; bestellt wird immer dieselbe Menge.',
        'Das ist ein Bestellrhythmusverfahren; die Bestellmenge richtet sich nach dem Bestand und wird bis zum Höchstbestand aufgefüllt.',
        'Das ist ein Bestellrhythmusverfahren; ein Sicherheitsbestand ist überflüssig.',
        'Das ist eine programmorientierte Bedarfsermittlung.'
      ],
      correct: [1],
      hints: ['Ist hier der Termin oder der Bestand der Auslöser?', 'Was passiert, wenn zwischen zwei Dienstagen mehr verbraucht wird als geplant?'],
      solution: 'Richtig ist **B**. Fester Termin, variable Menge = **Bestellrhythmusverfahren**. Gerade weil zwischen zwei Terminen nicht nachbestellt wird, ist ein **Sicherheitsbestand** nötig (C falsch). Beim Bestellpunktverfahren (A) löst das Erreichen des Meldebestands die Bestellung aus.'
    },
    {
      id: 'lf12-bestellmenge-a7', type: 'calc', difficulty: 3, points: 2,
      q: 'Bestellrhythmusverfahren: Der Höchstbestand für Paletten-Eckkantenschutz beträgt **2.000 Stück**. Am festen Bestelltag sind noch **650 Stück** vorhanden. Der Tagesverbrauch beträgt **70 Stück**, die Lieferzeit **5 Tage**. Wie viel muss bestellt werden, damit der Bestand bei Eintreffen der Lieferung wieder den Höchstbestand erreicht?',
      formula: 'Bestellmenge = Höchstbestand − (Bestand am Bestelltag − Tagesverbrauch × Lieferzeit)',
      fields: [
        { id: 'vlz', label: 'Verbrauch während der Lieferzeit', unit: 'Stück', answer: 350, tol: 0 },
        { id: 'bm', label: 'Bestellmenge', unit: 'Stück', answer: 1700, tol: 0 }
      ],
      hints: ['Wie viel ist bei Eintreffen der Lieferung noch da?', '650 − 350 = Restbestand bei Lieferung.'],
      solution: `**Verbrauch während der Lieferzeit:** 70 Stück/Tag × 5 Tage = **350 Stück**

**Bestand bei Eintreffen:** 650 Stück − 350 Stück = 300 Stück

**Bestellmenge:** 2.000 Stück − 300 Stück = **1.700 Stück**`
    },
    {
      id: 'lf12-bestellmenge-a8', type: 'calc', difficulty: 2, points: 3,
      q: `Ein Kunde der Saar-Trans bezieht jährlich **18.000 Kunststoffpaletten**. Die bestellfixen Kosten betragen **80 € je Bestellung**, der Einstandspreis **20 € je Palette**, der Lagerhaltungskostensatz **10 %**.

Berechne die optimale Bestellmenge nach Andler, die Anzahl der Bestellungen pro Jahr und die Gesamtkosten (Bestell- plus Lagerhaltungskosten) im Optimum.`,
      formula: 'x opt = √(200 × M × B ÷ (P × L)); Gesamtkosten = M ÷ x × B + x ÷ 2 × P × L ÷ 100',
      fields: [
        { id: 'xopt', label: 'Optimale Bestellmenge', unit: 'Paletten', answer: 1200, tol: 0.5 },
        { id: 'n', label: 'Anzahl Bestellungen pro Jahr', unit: 'Bestellungen', answer: 15, tol: 0 },
        { id: 'k', label: 'Gesamtkosten im Optimum', unit: '€', answer: 2400, tol: 0.01 }
      ],
      hints: ['Setze den Kostensatz als 10 (Prozent) ein.', 'Im Optimum sind Bestell- und Lagerhaltungskosten gleich hoch.'],
      solution: `**Andler-Formel:** x opt = √(200 × 18.000 × 80 € ÷ (20 € × 10)) = √(288.000.000 ÷ 200) = √1.440.000 = **1.200 Paletten**

**Anzahl Bestellungen:** 18.000 ÷ 1.200 = **15 Bestellungen**

**Bestellkosten:** 15 × 80 € = 1.200 €

**Lagerhaltungskosten:** 1.200 ÷ 2 × 20 € × 10 % = 600 × 2 € = 1.200 €

**Gesamtkosten:** 1.200 € + 1.200 € = **2.400 €**`
    },
    {
      id: 'lf12-bestellmenge-a9', type: 'calc', difficulty: 3, points: 4,
      q: `Tabellarische Ermittlung: Jahresbedarf **4.800 Stück**, bestellfixe Kosten **225 €** je Bestellung, Einstandspreis **40 €** je Stück, Lagerhaltungskostensatz **15 %**.

| Bestellungen pro Jahr | Bestellmenge | Bestellkosten | Ø Lagerbestand | Lagerhaltungskosten | Gesamtkosten |
|---:|---:|---:|---:|---:|---:|
| 4 | 1.200 | 900 € | 600 | 3.600 € | 4.500 € |
| 6 | ? | ? | ? | ? | ? |
| 8 | ? | ? | ? | ? | ? |
| 10 | ? | ? | ? | ? | ? |

Berechne die Gesamtkosten bei 6, 8 und 10 Bestellungen und gib die optimale Bestellmenge an.`,
      formula: 'Bestellmenge = M ÷ Anzahl; Bestellkosten = Anzahl × B; Lagerhaltungskosten = Bestellmenge ÷ 2 × P × L ÷ 100',
      fields: [
        { id: 'k6', label: 'Gesamtkosten bei 6 Bestellungen', unit: '€', answer: 3750, tol: 0.01 },
        { id: 'k8', label: 'Gesamtkosten bei 8 Bestellungen', unit: '€', answer: 3600, tol: 0.01 },
        { id: 'k10', label: 'Gesamtkosten bei 10 Bestellungen', unit: '€', answer: 3690, tol: 0.01 },
        { id: 'xopt', label: 'Optimale Bestellmenge', unit: 'Stück', answer: 600, tol: 0 }
      ],
      hints: ['Lagerhaltungskosten je Stück Durchschnittsbestand: 40 € × 15 % = 6 €.', 'Die optimale Menge gehört zur Zeile mit den niedrigsten Gesamtkosten.'],
      solution: `Lagerhaltungskosten je Stück Ø-Bestand: 40 € × 15 % = 6 €

| Bestellungen | Bestellmenge | Bestellkosten | Ø Bestand | Lagerhaltungskosten | Gesamtkosten |
|---:|---:|---:|---:|---:|---:|
| 4 | 1.200 | 900 € | 600 | 3.600 € | 4.500 € |
| 6 | 800 | 1.350 € | 400 | 2.400 € | **3.750 €** |
| 8 | 600 | 1.800 € | 300 | 1.800 € | **3.600 €** |
| 10 | 480 | 2.250 € | 240 | 1.440 € | **3.690 €** |

**Optimum: 8 Bestellungen à 600 Stück** mit 3.600 € Gesamtkosten. Hier sind Bestell- und Lagerhaltungskosten gleich (je 1.800 €).

**Kontrolle mit Andler:** √(200 × 4.800 × 225 ÷ (40 × 15)) = √(216.000.000 ÷ 600) = √360.000 = **600 Stück** ✓`
    },
    {
      id: 'lf12-bestellmenge-a10', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze den Text zum Zielkonflikt.',
      text: 'Je größer die Bestellmenge, desto [[weniger|seltener]] Bestellungen sind nötig und desto niedriger sind die [[Bestellkosten]]. Gleichzeitig steigt der durchschnittliche [[Lagerbestand]] und damit die [[Lagerhaltungskosten]]. Die optimale Bestellmenge liegt dort, wo die [[Gesamtkosten]] am niedrigsten sind.',
      hints: ['Zwei Kostenarten verhalten sich gegenläufig.', 'Gesucht ist das Minimum der Summe.'],
      solution: 'Große Mengen → **weniger** Bestellungen → niedrigere **Bestellkosten**, aber höherer Ø-**Lagerbestand** → höhere **Lagerhaltungskosten**. Optimum = Minimum der **Gesamtkosten**.'
    },
    {
      id: 'lf12-bestellmenge-a11', type: 'text', difficulty: 3, points: 3,
      q: 'Der Einkaufsleiter eines Kunden will die nach Andler errechnete Bestellmenge von 1.137 Stück unverändert bestellen. Nenne drei Gründe, warum die Menge in der Praxis angepasst werden sollte.',
      model: 'Die Andler-Formel geht von konstanten Preisen aus; Mengenrabatte oder Frachtkostenstaffeln können eine größere Menge günstiger machen. Die Menge sollte an Verpackungseinheiten und volle Paletten oder Lkw-Ladungen angepasst werden. Außerdem setzt das Modell unbegrenzte Lagerkapazität und Finanzmittel sowie einen gleichmäßigen, sicheren Bedarf voraus; schwankender Bedarf oder ein volles Lager erfordern Anpassungen.',
      criteria: [
        { text: 'nennt Rabatte/Preisänderungen oder Transportkosten', keywords: ['Rabatt|Preis|Fracht|Transportkosten'], points: 1 },
        { text: 'nennt Verpackungseinheiten, Paletten oder Ladungen', keywords: ['Verpackung|Palette|Ladung|Einheit|Gebinde'], points: 1 },
        { text: 'nennt Lagerkapazität, Finanzmittel oder schwankenden Bedarf', keywords: ['Kapazität|Platz|Finanz|Liquidität|schwank|gleichmäßig'], points: 1 }
      ],
      hints: ['Denke an die Annahmen des Modells.', 'Denke an Paletten und Lkw.'],
      solution: 'Mögliche Gründe: **Mengenrabatte/Frachtstaffeln** (Modell kennt nur konstante Preise), **Verpackungseinheiten/volle Paletten/Ladungen**, **begrenzte Lagerkapazität** oder **Liquidität**, **schwankender Bedarf**, Mindestabnahmemengen des Lieferanten, Lieferrisiken.'
    },
    {
      id: 'lf12-bestellmenge-a12', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Beschaffungsplanung für Versandkartons bei der Saar-Trans',
      intro: `Die Saar-Trans Spedition GmbH betreibt für die **Neunkircher Haushaltswaren GmbH** (fiktiv) das Versandlager. Für die Versandkartons übernimmt sie auch die Nachbestellung (Beispielzahlen):

- Verbrauch: **250 Kartons je Arbeitstag**, **250 Arbeitstage** im Jahr
- Lieferzeit des Kartonherstellers: **4 Arbeitstage**
- Mindestbestand: Verbrauch von **2 Arbeitstagen**
- bestellfixe Kosten: **50 €** je Bestellung
- Einstandspreis: **0,80 €** je Karton
- Lagerhaltungskostensatz: **20 %**`,
      hints: ['Berechne zuerst den Mindestbestand in Stück.', 'Jahresbedarf = Tagesverbrauch × Arbeitstage.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf12-bestellmenge-a12-1', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne Mindestbestand und Meldebestand.',
          formula: 'Meldebestand = Tagesverbrauch × Lieferzeit + Mindestbestand',
          fields: [
            { id: 'min', label: 'Mindestbestand', unit: 'Kartons', answer: 500, tol: 0 },
            { id: 'mb', label: 'Meldebestand', unit: 'Kartons', answer: 1500, tol: 0 }
          ],
          hints: ['Mindestbestand = 250 × 2.', 'Verbrauch in der Lieferzeit = 250 × 4.'],
          solution: `**Mindestbestand:** 250 Kartons/Tag × 2 Tage = **500 Kartons**

**Meldebestand:** 250 Kartons/Tag × 4 Tage + 500 Kartons = 1.000 + 500 = **1.500 Kartons**`
        },
        {
          id: 'lf12-bestellmenge-a12-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne den Jahresbedarf, die optimale Bestellmenge nach Andler und die Anzahl der Bestellungen pro Jahr.',
          formula: 'x opt = √(200 × M × B ÷ (P × L))',
          fields: [
            { id: 'm', label: 'Jahresbedarf', unit: 'Kartons', answer: 62500, tol: 0 },
            { id: 'xopt', label: 'Optimale Bestellmenge', unit: 'Kartons', answer: 6250, tol: 0.5 },
            { id: 'n', label: 'Anzahl Bestellungen', unit: 'Bestellungen', answer: 10, tol: 0 }
          ],
          hints: ['M = 250 × 250.', 'Nenner: 0,80 × 20 = 16.'],
          solution: `**Jahresbedarf:** 250 Kartons/Tag × 250 Tage = **62.500 Kartons**

**Andler:** √(200 × 62.500 × 50 € ÷ (0,80 € × 20)) = √(625.000.000 ÷ 16) = √39.062.500 = **6.250 Kartons**

**Bestellungen:** 62.500 ÷ 6.250 = **10 pro Jahr**

Kontrolle: Bestellkosten 10 × 50 € = 500 €; Lagerhaltungskosten 6.250 ÷ 2 × 0,80 € × 20 % = 500 € → gleich hoch, also Optimum.`
        },
        {
          id: 'lf12-bestellmenge-a12-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Der Kartonhersteller bietet ab 12.500 Kartons je Bestellung 5 % Rabatt an. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Die Andler-Formel berücksichtigt den Rabatt nicht; man muss die Gesamtkosten einschließlich Einkaufspreis vergleichen.',
            'Bei 12.500 Kartons je Bestellung sinken die Bestellkosten, die Lagerhaltungskosten steigen.',
            'Mit Rabatt ist 6.250 Kartons automatisch weiterhin die günstigste Menge.',
            'Vor der Entscheidung muss geprüft werden, ob im Lager Platz für den höheren Bestand ist.'
          ],
          correct: [0, 1, 3],
          hints: ['Welche Annahme der Andler-Formel wird durch den Rabatt verletzt?', 'Der Rabatt senkt den Einkaufspreis für alle 62.500 Kartons.'],
          solution: 'Richtig sind **A, B, D**. Die Andler-Formel unterstellt konstante Preise; mit Rabatt muss man Einkaufspreis + Bestell- + Lagerhaltungskosten vergleichen. Doppelte Menge → nur 5 Bestellungen (weniger Bestellkosten), aber doppelter Ø-Bestand (mehr Lagerhaltungskosten). Der höhere Bestand braucht Lagerplatz. **C** ist falsch: Der Rabatt kann die größere Menge insgesamt günstiger machen Rechnung: Rabatt 62.500 × 0,80 € × 5 % = 2.500 € pro Jahr. Bei 12.500 Kartons: Bestellkosten 5 × 50 € = 250 €, Lagerhaltungskosten 12.500 ÷ 2 × 0,76 € × 20 % = 950 €, zusammen 1.200 € statt 1.000 €. Mehrkosten 200 € stehen 2.500 € Rabatt gegenüber – die größere Menge ist insgesamt um 2.300 € günstiger, sofern Lagerplatz vorhanden ist.'
        }
      ]
    }
  ],
  quiz: ['lf12-bestellmenge-a3', 'lf12-bestellmenge-a4', 'lf12-bestellmenge-a6', 'lf12-bestellmenge-a9', 'lf12-bestellmenge-a12'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 12, Inhalte: Mittelwertverfahren, Optimale Bestellmenge, Vorratsbeschaffung' }
  ],
  links: ['lf08-angebotsvergleich', 'lf09-lagerorganisation', 'lf12-jit-abc', 'lf12-logistiksysteme']
};
