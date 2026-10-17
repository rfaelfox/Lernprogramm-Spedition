export default {
  id: 'lf13-tourenplanung',
  area: 'LF13',
  topic: 'lf13-tourenplanung',
  title: 'Tourenplanung in der Distribution',
  status: 'vollstaendig',
  minutes: 50,
  validity: {
    asOf: '2026',
    note: 'Lenkzeitregeln nach VO (EG) Nr. 561/2006 (nach 4,5 h Lenkzeit 45 min Fahrtunterbrechung, tägliche Lenkzeit 9 h, zweimal pro Woche 10 h), Stand wie in der Einheit „Lenk- und Ruhezeiten“ geprüft (Oktober 2026). Entfernungen, Mengen, Zeiten und Kostensätze in den Aufgaben sind Beispielwerte (Bezugsjahr 2026).'
  },
  goals: [
    'Ich kann die Ziele der Tourenplanung nennen und Zielkonflikte erklären.',
    'Ich kann Restriktionen der Tourenplanung (Kapazität, Zeitfenster, Lenk- und Ruhezeiten, Fahrzeug- und Zufahrtsbeschränkungen) berücksichtigen.',
    'Ich kann das Sweep-Verfahren beschreiben.',
    'Ich kann mit dem Savings-Verfahren nach Clarke und Wright Einsparungen berechnen, Touren bilden und die Gesamtstrecke ermitteln.',
    'Ich kann prüfen, ob eine Tour Zeitfenster und Lenkzeitvorschriften einhält.',
    'Ich kann die Kosten einer Tour mit Kilometer- und Zeitsätzen berechnen.',
    'Ich kann Nutzen und Grenzen von Tourenplanungssoftware beurteilen.'
  ],
  simple: `# Worum geht es?

Jeden Abend steht der Disponent einer Spedition vor der gleichen Frage: **Welcher Lkw fährt morgen welche Kunden in welcher Reihenfolge an?** Das ist **Tourenplanung**.

- Eine **Tour** ist die Zuordnung mehrerer Kunden zu einem Fahrzeug: vom Depot (Lager) los, Kunden beliefern, zurück zum Depot.
- Die **Route** ist die Reihenfolge, in der die Kunden innerhalb der Tour angefahren werden.

# Was soll erreicht werden?

Möglichst **wenige Kilometer**, **wenige Fahrzeuge**, **geringe Kosten** – und trotzdem jeder Kunde **pünktlich** und **vollständig** beliefert.

# Was ist zu beachten?

- Der Lkw hat nur eine bestimmte **Kapazität** (Paletten, Gewicht).
- Viele Kunden haben **Zeitfenster** („nur zwischen 7 und 10 Uhr“).
- Der Fahrer darf nur begrenzt fahren: **Lenk- und Ruhezeiten** (siehe Einheit „Lenk- und Ruhezeiten“).

# Wie plant man?

Von Hand mit einfachen Verfahren wie dem **Sweep-Verfahren** (Kunden wie mit einem Uhrzeiger einsammeln) oder dem **Savings-Verfahren** (Kunden zusammenlegen, wenn dadurch Kilometer gespart werden). In der Praxis rechnet eine **Tourenplanungssoftware**, die mit genau solchen Verfahren arbeitet.`,
  deep: `# 1. Ziele der Tourenplanung

| Ziel | Beispiel |
|---|---|
| **Kosten minimieren** | Gesamtstrecke, Fahrzeugeinsatz und Arbeitszeit möglichst gering |
| **Fahrzeuge auslasten** | wenige Touren mit gut gefüllten Fahrzeugen |
| **Lieferservice sichern** | Zeitfenster einhalten, hohe Liefertreue (siehe Einheit „Distributions- und Logistikkennzahlen“) |
| **Rechtssicherheit** | Lenk- und Ruhezeiten, Arbeitszeitgesetz, Gewichte und Ladungssicherung einhalten |
| **Umwelt** | weniger Leerkilometer, weniger Emissionen |

Zielkonflikt: Eine sehr kurze Tour spart Kilometer, aber ein enges Zeitfenster kann einen Umweg erzwingen; ein voll ausgelastetes Fahrzeug spart Touren, kann aber Zeitfenster gefährden.

# 2. Restriktionen (Nebenbedingungen)

| Restriktion | Inhalt |
|---|---|
| **Kapazität** | Palettenstellplätze, Nutzlast, Ladevolumen; je nach Fahrzeug (Solo-Lkw, Gliederzug, Sattelzug, Transporter) |
| **Zeitfenster** | Anlieferzeiten der Empfänger, Öffnungszeiten, Rampenbuchung |
| **Lenk- und Ruhezeiten** | nach 4,5 h Lenkzeit 45 min Fahrtunterbrechung; tägliche Lenkzeit 9 h (zweimal pro Woche 10 h) – Details in der Einheit „Lenk- und Ruhezeiten“. Be- und Entladen ist **Arbeitszeit**, keine Pause. |
| **Fahrzeugeigenschaften** | Ladebordwand für Kunden ohne Rampe, Kühlung, Gefahrgutausrüstung |
| **Zufahrt** | Innenstadt- und Durchfahrtsverbote, Gewichts- und Höhenbeschränkungen, Umweltzonen, Lieferzonen |
| **Ladung** | Ladereihenfolge (zuletzt ausgeliefert = zuerst geladen), Zusammenladeverbote bei Gefahrgut, Lebensmittel getrennt von Chemikalien |

# 3. Planungsarten

- **Statische (feste) Tourenplanung:** Touren bleiben über längere Zeit gleich, z. B. tägliche Belieferung derselben Filialen. Einfach für Fahrer und Kunden.
- **Dynamische (variable) Tourenplanung:** Touren werden täglich neu aus den aktuellen Aufträgen gebildet, z. B. im Stückgut- und Paketverkehr.

# 4. Sweep-Verfahren (Drehstrahlverfahren)

1. Kunden mit ihrer Lage um das Depot in eine Karte (Polarkoordinaten) eintragen.
2. Von einem Startkunden aus einen Strahl um das Depot **drehen** (im oder gegen den Uhrzeigersinn).
3. Jeder überstrichene Kunde kommt in die aktuelle Tour, **bis die Kapazität** des Fahrzeugs erreicht ist; dann beginnt die nächste Tour.
4. Innerhalb jeder Tour die günstigste Reihenfolge (Route) festlegen.

Vorteil: sehr einfach und anschaulich. Nachteil: ergibt „tortenstückförmige“ Gebiete und berücksichtigt Straßennetz und Zeitfenster kaum.

# 5. Savings-Verfahren nach Clarke und Wright

**Grundidee:** Zunächst wird jeder Kunde in einer eigenen **Pendeltour** beliefert (Depot → Kunde → Depot). Fasst man zwei Kunden i und j zu einer Tour zusammen, entfällt je eine Rückfahrt zum Depot und eine Anfahrt vom Depot; dafür kommt die Strecke zwischen i und j hinzu. Die **Einsparung** (Saving) ist:

**s(i,j) = d(0,i) + d(0,j) − d(i,j)**

(d = Entfernung, 0 = Depot)

**Ablauf**

1. Entfernungstabelle aufstellen (Depot und alle Kunden).
2. Für **alle Kundenpaare** die Savings berechnen.
3. Savings **absteigend sortieren**.
4. Paare in dieser Reihenfolge verknüpfen, wenn
   - beide Kunden noch nicht in derselben Tour sind,
   - beide Kunden **am Rand** (Anfang oder Ende) ihrer bisherigen Tour liegen – ein Kunde in der Mitte einer Tour kann nicht mehr angehängt werden,
   - die **Kapazität** (und ggf. Zeit- und Lenkzeitgrenzen) eingehalten wird.
5. Wiederholen, bis keine Verknüpfung mehr möglich ist.
6. **Kontrolle:** Gesamtstrecke = Summe der Pendeltouren − Summe der genutzten Savings.

Das Verfahren ist ein **heuristisches Eröffnungsverfahren**: Es liefert schnell eine gute, aber nicht zwingend die beste Lösung.

# 6. Prüfung von Zeitfenstern und Lenkzeit

Für jede Tour wird ein **Zeitplan** erstellt: Startzeit + Fahrzeiten + Standzeiten (Entladen, Warten) + Pausen. Dabei wird geprüft:
- Erreicht das Fahrzeug jeden Kunden im Zeitfenster?
- Wird nach spätestens 4,5 h Lenkzeit eine Fahrtunterbrechung von 45 min eingelegt?
- Bleibt die tägliche Lenkzeit und die Arbeitszeit des Fahrers im zulässigen Rahmen?

# 7. Kosten je Tour

Die Kosten eines eigenen Fahrzeugs bestehen aus **zeitabhängigen** (fixen) und **kilometerabhängigen** (variablen) Kosten (Herleitung von Tagessatz und Kilometersatz: Einheit „Fahrzeugkostenrechnung für Lkw“).

**Tourkosten = gefahrene km × Kilometersatz + Einsatzstunden × Stundensatz** (bzw. Tagessatz bei ganztägigem Einsatz)

Daraus lassen sich **Kosten je Palette** oder **je Stopp** berechnen – Grundlage für den Preis gegenüber dem Kunden und den Vergleich mit einem Fremdunternehmer.

# 8. Tourenplanungssoftware

**Leistungen:** digitale Karten und Straßennetz mit Fahrzeugprofilen (Höhe, Gewicht), Berücksichtigung von Zeitfenstern, Kapazitäten und Lenkzeiten, automatische Tourenvorschläge (mit Savings-, Sweep- und Verbesserungsverfahren), Ladelisten und Ladereihenfolge, Übergabe an Telematik und Fahrer-App, **voraussichtliche Ankunftszeit (ETA)** an Empfänger, Nachkalkulation (Soll-Ist-Vergleich).

**Grenzen:** Ergebnis nur so gut wie die **Stammdaten** (Adressen, Standzeiten, Zeitfenster); Erfahrungswissen des Disponenten (Baustelle, Kundeneigenheiten) muss ergänzt werden; Kosten für Lizenz, Einführung und Schulung.`,
  terms: [
    { term: 'Tour', def: 'Zuordnung mehrerer Kunden zu einem Fahrzeug für einen Einsatz: Start im Depot, Belieferung, Rückkehr zum Depot.' },
    { term: 'Route', def: 'Reihenfolge, in der die Kunden innerhalb einer Tour angefahren werden.' },
    { term: 'Depot', def: 'Ausgangs- und Endpunkt der Touren, z. B. Lager oder Umschlaghalle der Spedition.' },
    { term: 'Zeitfenster', def: 'Zeitraum, in dem ein Empfänger die Anlieferung annimmt.' },
    { term: 'Pendeltour', def: 'Tour mit nur einem Kunden: Depot → Kunde → Depot; Ausgangslösung beim Savings-Verfahren.' },
    { term: 'Saving (Einsparung)', def: 's(i,j) = d(0,i) + d(0,j) − d(i,j): Kilometer, die gespart werden, wenn zwei Kunden in einer Tour zusammengefasst werden.' },
    { term: 'Sweep-Verfahren', def: 'Tourenbildung durch Drehen eines Strahls um das Depot; Kunden werden eingesammelt, bis die Fahrzeugkapazität erreicht ist.' },
    { term: 'Heuristik', def: 'Lösungsverfahren, das schnell eine gute, aber nicht garantiert optimale Lösung liefert.' },
    { term: 'Statische Tourenplanung', def: 'Feste Touren, die über längere Zeit gleich bleiben (z. B. Filialbelieferung).' },
    { term: 'Dynamische Tourenplanung', def: 'Touren werden täglich aus den aktuellen Aufträgen neu gebildet.' },
    { term: 'ETA', def: 'Estimated Time of Arrival: voraussichtliche Ankunftszeit, oft automatisch aus Telematikdaten an den Empfänger gemeldet.' }
  ],
  example: `# Savings-Verfahren Schritt für Schritt – Depot Saarbrücken (Beispielwerte)

Die Saar-Trans Spedition beliefert morgen drei Kunden. Ein Lkw fasst **18 Paletten**.

| Entfernung (km) | Depot 0 | K1 | K2 | K3 |
|---|---:|---:|---:|---:|
| Depot 0 | – | 30 | 40 | 25 |
| K1 | 30 | – | 20 | 45 |
| K2 | 40 | 20 | – | 50 |
| K3 | 25 | 45 | 50 | – |

Mengen: K1 8 Paletten, K2 7 Paletten, K3 6 Paletten.

**Schritt 1 – Pendeltouren:** 2 × 30 + 2 × 40 + 2 × 25 = **190 km**

**Schritt 2 – Savings:**
- s(1,2) = 30 + 40 − 20 = **50**
- s(1,3) = 30 + 25 − 45 = **10**
- s(2,3) = 40 + 25 − 50 = **15**

**Schritt 3 – sortieren:** s(1,2) = 50 > s(2,3) = 15 > s(1,3) = 10

**Schritt 4 – verknüpfen:**
- s(1,2): K1 und K2 zusammen = 15 Paletten ≤ 18 → **Tour 0–1–2–0** ✔
- s(2,3): K3 an K2 anhängen ergäbe 21 Paletten > 18 → abgelehnt ✘
- s(1,3): ebenfalls 21 Paletten → abgelehnt ✘

**Ergebnis:** Tour A: 0 → K1 → K2 → 0 = 30 + 20 + 40 = **90 km**; Tour B: 0 → K3 → 0 = **50 km**. Gesamt **140 km**.

**Kontrolle:** 190 km − 50 km (genutztes Saving) = 140 km ✔

**Zeit- und Kostenprüfung:** Tour A startet um 6:00 Uhr. Die Software rechnet die Ankunftszeiten, prüft das Zeitfenster von K2 (bis 9:00 Uhr) und berechnet mit dem Kilometer- und Stundensatz aus der Fahrzeugkostenrechnung die Tourkosten.`,
  rules: [
    'Saving s(i,j) = d(0,i) + d(0,j) − d(i,j); gespart wird je eine Fahrt zum und vom Depot.',
    'Savings absteigend abarbeiten und nur verknüpfen, wenn beide Kunden am Tourrand stehen und die Kapazität reicht.',
    'Kontrolle: Gesamtstrecke = Summe Pendeltouren − Summe der genutzten Savings.',
    'Sweep: Strahl um das Depot drehen und Kunden einsammeln, bis das Fahrzeug voll ist.',
    'Entladen ist Arbeitszeit, keine Fahrtunterbrechung: Nach 4,5 h Lenkzeit sind 45 min Pause nötig.',
    'Tourkosten = km × Kilometersatz + Einsatzzeit × Stundensatz.',
    'Software liefert Vorschläge – Stammdaten und Erfahrung des Disponenten entscheiden über die Qualität.'
  ],
  summary: `- **Tourenplanung** = Kunden auf Fahrzeuge verteilen (Tour) und Reihenfolge festlegen (Route).
- **Ziele:** Kosten, Auslastung, Lieferservice, Rechtssicherheit, Umwelt.
- **Restriktionen:** Kapazität, Zeitfenster, Lenk- und Ruhezeiten, Fahrzeug, Zufahrt, Ladung.
- **Sweep:** Drehstrahl um das Depot, Tour schließen, wenn das Fahrzeug voll ist.
- **Savings (Clarke/Wright):** s(i,j) = d(0,i) + d(0,j) − d(i,j), absteigend sortieren, unter Beachtung von Rand und Kapazität verknüpfen.
- **Tourkosten** mit Kilometer- und Zeitsatz aus der Fahrzeugkostenrechnung.
- **Software:** schnelle Vorschläge, ETA, Telematik – abhängig von guten Stammdaten.`,
  mistakes: [
    { wrong: 'Saving = d(i,j) − d(0,i) − d(0,j).', right: 'Umgekehrt: s(i,j) = d(0,i) + d(0,j) − d(i,j). Die Einsparung ist positiv, wenn die Kunden nahe beieinander liegen.' },
    { wrong: 'Ein Kunde, der in der Mitte einer Tour steht, kann noch mit einem weiteren Kunden verknüpft werden.', right: 'Beim Savings-Verfahren werden nur Kunden am Anfang oder Ende einer Tour verknüpft, sonst würde die Tour zerrissen.' },
    { wrong: 'Wenn ein Saving wegen der Kapazität nicht passt, bricht das Verfahren ab.', right: 'Das Saving wird übersprungen; man prüft das nächstkleinere.' },
    { wrong: 'Die 30 Minuten Entladezeit zählen als Fahrtunterbrechung.', right: 'Be- und Entladen ist Arbeitszeit. Eine Fahrtunterbrechung im Sinne der Lenkzeitvorschriften ist nur echte Pausenzeit.' },
    { wrong: 'Das Savings-Verfahren liefert immer die optimale Lösung.', right: 'Es ist eine Heuristik: Es liefert schnell eine gute Lösung, die mit Verbesserungsverfahren oft noch optimiert werden kann.' }
  ],
  flashcards: [
    { q: 'Unterschied Tour und Route?', a: 'Tour = welche Kunden ein Fahrzeug bedient; Route = in welcher Reihenfolge.' },
    { q: 'Formel des Savings?', a: 's(i,j) = d(0,i) + d(0,j) − d(i,j).' },
    { q: 'Was ist die Ausgangslösung beim Savings-Verfahren?', a: 'Jeder Kunde wird in einer eigenen Pendeltour (Depot – Kunde – Depot) beliefert.' },
    { q: 'Welche Bedingungen gelten beim Verknüpfen im Savings-Verfahren?', a: 'Kunden noch nicht in derselben Tour, beide am Tourrand, Kapazität (und Zeitgrenzen) eingehalten.' },
    { q: 'Wie kontrolliert man die Gesamtstrecke nach dem Savings-Verfahren?', a: 'Summe der Pendeltouren minus Summe der genutzten Savings.' },
    { q: 'Wie funktioniert das Sweep-Verfahren?', a: 'Ein Strahl dreht sich um das Depot und sammelt Kunden ein, bis das Fahrzeug voll ist; dann beginnt eine neue Tour.' },
    { q: 'Nenne vier Restriktionen der Tourenplanung.', a: 'Fahrzeugkapazität, Zeitfenster, Lenk- und Ruhezeiten, Zufahrtsbeschränkungen (auch Fahrzeugausstattung, Zusammenladeverbote).' },
    { q: 'Wann ist spätestens eine Fahrtunterbrechung nötig und wie lang?', a: 'Nach 4,5 h Lenkzeit, 45 Minuten (teilbar in 15 + 30 min).' },
    { q: 'Wie berechnet man die Kosten einer Tour?', a: 'Gefahrene km × Kilometersatz + Einsatzstunden × Stundensatz (bzw. Tagessatz).' },
    { q: 'Statische oder dynamische Tourenplanung für die tägliche Paketzustellung?', a: 'Dynamisch, weil sich die Empfänger täglich ändern.' },
    { q: 'Zwei Grenzen von Tourenplanungssoftware?', a: 'Abhängig von guten Stammdaten; Erfahrungswissen fehlt; Kosten für Lizenz und Einführung.' }
  ],
  tasks: [
    {
      id: 'lf13-tourenplanung-a1', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche der folgenden Punkte sind **Restriktionen** (Nebenbedingungen) der Tourenplanung und nicht Ziele? (Mehrfachauswahl)',
      options: [
        'Ein Getränkemarkt nimmt nur zwischen 6:00 und 9:00 Uhr Ware an.',
        'Der Lkw hat 18 Palettenstellplätze.',
        'Nach 4,5 Stunden Lenkzeit muss der Fahrer 45 Minuten unterbrechen.',
        'Die Gesamtkilometer sollen möglichst gering sein.',
        'Die Fahrzeuge sollen möglichst gut ausgelastet sein.'
      ],
      correct: [0, 1, 2],
      hints: ['Eine Restriktion muss eingehalten werden, ein Ziel soll möglichst gut erreicht werden.', 'Wenig Kilometer ist ein „möglichst …“.'],
      solution: 'Restriktionen sind **Zeitfenster** (A), **Kapazität** (B) und **Lenkzeitvorschriften** (C): Sie dürfen nicht verletzt werden. D und E sind **Ziele** (minimieren bzw. maximieren).'
    },
    {
      id: 'lf13-tourenplanung-a2', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Begriffe zu.',
      pairs: [
        ['Tour', 'Kunden, die von einem Fahrzeug in einem Einsatz beliefert werden'],
        ['Route', 'Reihenfolge der Anfahrt innerhalb einer Tour'],
        ['Pendeltour', 'Depot → ein Kunde → Depot'],
        ['Saving', 'gesparte Kilometer durch Zusammenlegen zweier Kunden']
      ],
      hints: ['Wer – in welcher Reihenfolge – wie viel gespart.', 'Pendeln = hin und zurück.'],
      solution: 'Tour = Kundengruppe eines Fahrzeugs; Route = Reihenfolge; Pendeltour = Einzelbelieferung mit Rückkehr zum Depot; Saving = Einsparung s(i,j) = d(0,i) + d(0,j) − d(i,j).'
    },
    {
      id: 'lf13-tourenplanung-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Die Saarlogistik GmbH beliefert vom Depot 0 in Neunkirchen vier Kunden. Entfernungen in km (Beispielwerte):

| km | 0 | K1 | K2 | K3 | K4 |
|---|---:|---:|---:|---:|---:|
| 0 | – | 20 | 25 | 30 | 18 |
| K1 | 20 | – | 10 | 24 | 30 |
| K2 | 25 | 10 | – | 15 | 38 |
| K3 | 30 | 24 | 15 | – | 40 |
| K4 | 18 | 30 | 38 | 40 | – |

Berechne die Savings s(1,2), s(1,3) und s(2,3).`,
      formula: 's(i,j) = d(0,i) + d(0,j) − d(i,j)',
      fields: [
        { id: 's12', label: 's(1,2)', unit: 'km', answer: 35, tol: 0 },
        { id: 's13', label: 's(1,3)', unit: 'km', answer: 26, tol: 0 },
        { id: 's23', label: 's(2,3)', unit: 'km', answer: 40, tol: 0 }
      ],
      hints: ['Lies die Entfernungen zum Depot in der ersten Zeile ab.', 's(2,3) = 25 + 30 − 15.'],
      solution: `**Formel:** s(i,j) = d(0,i) + d(0,j) − d(i,j)

- s(1,2) = 20 + 25 − 10 = **35 km**
- s(1,3) = 20 + 30 − 24 = **26 km**
- s(2,3) = 25 + 30 − 15 = **40 km**

Weitere Savings: s(1,4) = 20 + 18 − 30 = 8; s(2,4) = 25 + 18 − 38 = 5; s(3,4) = 30 + 18 − 40 = 8.`
    },
    {
      id: 'lf13-tourenplanung-a4', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte des Savings-Verfahrens in die richtige Reihenfolge.',
      items: [
        'Entfernungstabelle zwischen Depot und allen Kunden aufstellen',
        'Jeden Kunden zunächst in einer Pendeltour beliefern (Ausgangslösung)',
        'Für alle Kundenpaare die Savings berechnen',
        'Savings absteigend sortieren',
        'Paare nacheinander verknüpfen, wenn Tourrand und Kapazität es zulassen; Gesamtstrecke kontrollieren'
      ],
      hints: ['Ohne Entfernungen keine Savings.', 'Erst sortieren, dann verknüpfen.'],
      solution: 'Entfernungstabelle → Pendeltouren als Ausgangslösung → Savings berechnen → absteigend sortieren → unter Beachtung von Tourrand und Kapazität verknüpfen und mit „Pendeltouren − genutzte Savings“ kontrollieren.'
    },
    {
      id: 'lf13-tourenplanung-a5', type: 'calc', difficulty: 3, points: 4,
      q: `Verwende die Entfernungstabelle aus der Aufgabe zuvor (Savings: s(2,3) = 40, s(1,2) = 35, s(1,3) = 26, s(1,4) = 8, s(3,4) = 8, s(2,4) = 5). Mengen: K1 6, K2 5, K3 7, K4 8 Paletten. Ein Lkw fasst 18 Paletten.

Wende das Savings-Verfahren an. Berechne die Strecke der Pendeltouren, die Länge der größeren Tour, die Länge der zweiten Tour und die Gesamtstrecke nach dem Verfahren.`,
      formula: 'Gesamtstrecke = Summe Pendeltouren − Summe genutzte Savings',
      fields: [
        { id: 'pendel', label: 'Summe der Pendeltouren', unit: 'km', answer: 186, tol: 0 },
        { id: 'ta', label: 'Länge Tour 0–1–2–3–0', unit: 'km', answer: 75, tol: 0 },
        { id: 'tb', label: 'Länge Tour mit K4', unit: 'km', answer: 36, tol: 0 },
        { id: 'ges', label: 'Gesamtstrecke', unit: 'km', answer: 111, tol: 0 }
      ],
      hints: ['s(2,3) zuerst: K2 und K3 = 12 Paletten. Dann s(1,2): K1 vorne anhängen = 18 Paletten.', 'K4 passt nirgends mehr dazu – Pendeltour.'],
      solution: `**Pendeltouren:** 2 × (20 + 25 + 30 + 18) = 2 × 93 = **186 km**

**Verknüpfen:**
1. s(2,3) = 40: Tour 0–2–3–0, 5 + 7 = 12 Paletten ✔
2. s(1,2) = 35: K2 ist Rand, K1 anhängen → 0–1–2–3–0, 12 + 6 = 18 Paletten ✔
3. s(1,3) = 26: K1 und K3 sind schon in derselben Tour → übersprungen
4. s(1,4) = 8 und s(3,4) = 8: K4 anhängen ergäbe 26 Paletten > 18 → abgelehnt
5. s(2,4) = 5: K2 liegt in der Tourmitte → nicht möglich

**Tour A:** 0 → K1 → K2 → K3 → 0 = 20 + 10 + 15 + 30 = **75 km**

**Tour B:** 0 → K4 → 0 = 2 × 18 = **36 km**

**Gesamtstrecke:** 75 + 36 = **111 km**

**Kontrolle:** 186 − (40 + 35) = 111 km ✔ – gegenüber den Pendeltouren werden 75 km gespart.`
    },
    {
      id: 'lf13-tourenplanung-a6', type: 'calc', difficulty: 2, points: 4,
      q: `Für die Tour A (75 km) gelten laut Fahrzeugkostenrechnung (Beispielwerte, Bezugsjahr 2026): Kilometersatz 0,58 €/km, Stundensatz (zeitabhängige Kosten inkl. Fahrer) 52 €/h. Die Tour dauert insgesamt 3 Stunden. Es werden 18 Paletten ausgeliefert.

Berechne die kilometerabhängigen Kosten, die zeitabhängigen Kosten, die Tourkosten und die Kosten je Palette (auf Cent).`,
      formula: 'Tourkosten = km × Kilometersatz + Stunden × Stundensatz; Kosten je Palette = Tourkosten ÷ Paletten',
      fields: [
        { id: 'km', label: 'kilometerabhängige Kosten', unit: '€', answer: 43.5, tol: 0.01 },
        { id: 'zeit', label: 'zeitabhängige Kosten', unit: '€', answer: 156, tol: 0.01 },
        { id: 'tour', label: 'Tourkosten', unit: '€', answer: 199.5, tol: 0.01 },
        { id: 'pal', label: 'Kosten je Palette', unit: '€', answer: 11.08, tol: 0.01 }
      ],
      hints: ['75 × 0,58.', '199,50 ÷ 18.'],
      solution: `**Kilometerabhängig:** 75 km × 0,58 €/km = **43,50 €**

**Zeitabhängig:** 3 h × 52 €/h = **156,00 €**

**Tourkosten:** 43,50 € + 156,00 € = **199,50 €**

**Je Palette:** 199,50 € ÷ 18 = 11,083 → **11,08 €**

Die zeitabhängigen Kosten überwiegen deutlich. Im Nahverkehr lohnt es sich daher besonders, Stand- und Wartezeiten zu verkürzen. Herleitung der Sätze: Einheit „Fahrzeugkostenrechnung für Lkw“.`
    },
    {
      id: 'lf13-tourenplanung-a7', type: 'calc', difficulty: 3, points: 3,
      q: `Ein Lkw startet um 6:00 Uhr. Geplanter Ablauf: Fahrt zu K1 90 min, Entladen 30 min, Fahrt zu K2 120 min, Entladen 45 min, Fahrt zu K3 75 min. K3 nimmt Ware nur bis 12:30 Uhr an. Der Fahrer hat vorher noch keine Lenkzeit an diesem Tag und legt die Pause erst ein, wenn sie spätestens nötig ist (Entladen gilt nicht als Fahrtunterbrechung).

Berechne die gesamte Lenkzeit bis K3, die nötige Fahrtunterbrechung und die Ankunft bei K3 in Minuten nach Fahrtbeginn.`,
      formula: 'Ankunft = Summe Fahrzeiten + Entladezeiten + Pausen',
      fields: [
        { id: 'lenk', label: 'Lenkzeit bis K3', unit: 'min', answer: 285, tol: 0 },
        { id: 'pause', label: 'Fahrtunterbrechung', unit: 'min', answer: 45, tol: 0 },
        { id: 'ank', label: 'Ankunft K3 nach Fahrtbeginn', unit: 'min', answer: 405, tol: 0 }
      ],
      hints: ['90 + 120 + 75 Minuten Lenkzeit – mehr als 4,5 h = 270 min?', 'Pausen und Entladezeiten addieren: 285 + 30 + 45 + 45.'],
      solution: `**Lenkzeit:** 90 + 120 + 75 = **285 min** (4 h 45 min) > 270 min (4,5 h) → eine Fahrtunterbrechung von **45 min** ist nötig.

**Zeitplan:**
- 6:00 Start, 7:30 Ankunft K1, 8:00 Abfahrt
- 10:00 Ankunft K2 (Lenkzeit bisher 210 min), 10:45 Abfahrt
- nach weiteren 60 min Fahrt ist die Lenkzeit 270 min (11:45) → Pause 45 min bis 12:30
- restliche 15 min Fahrt → Ankunft K3 **12:45 Uhr**

**Ankunft nach Fahrtbeginn:** 285 + 30 + 45 + 45 = **405 min** = 6 h 45 min → 12:45 Uhr.

Das Zeitfenster von K3 (bis 12:30 Uhr) wird **um 15 Minuten verfehlt**. Mögliche Lösungen: früher starten, Reihenfolge ändern, Entladezeiten verkürzen oder K3 einer anderen Tour zuordnen. Die Entladezeit bei K2 zählt nicht als Pause (Regeln: Einheit „Lenk- und Ruhezeiten“).`
    },
    {
      id: 'lf13-tourenplanung-a8', type: 'cloze', difficulty: 2, points: 4,
      q: 'Ergänze die Beschreibung des Sweep-Verfahrens.',
      text: 'Beim Sweep-Verfahren wird ein [[Strahl|Drehstrahl]] um das [[Depot|Lager]] gedreht. Jeder überstrichene Kunde wird der aktuellen Tour zugeordnet, bis die [[Kapazität|Fahrzeugkapazität]] des Fahrzeugs erreicht ist. Danach wird innerhalb jeder Tour die günstigste [[Route|Reihenfolge]] festgelegt.',
      hints: ['Sweep heißt „fegen, überstreichen“.', 'Tour = Wer, Route = Reihenfolge.'],
      solution: 'Ein **Strahl** dreht sich um das **Depot**; Kunden werden gesammelt, bis die **Kapazität** erreicht ist; anschließend wird die **Route** (Reihenfolge) jeder Tour optimiert.'
    },
    {
      id: 'lf13-tourenplanung-a9', type: 'text', difficulty: 3, points: 4,
      q: 'Die Saarlogistik GmbH plant ihre 14 Nahverkehrstouren bisher mit Erfahrung, Karte und Tabellenkalkulation. Der Geschäftsführer überlegt, eine Tourenplanungssoftware einzuführen. Nenne drei Vorteile und eine Voraussetzung bzw. Grenze.',
      model: 'Vorteile: Die Software berechnet in kurzer Zeit Tourenvorschläge und berücksichtigt dabei Kapazitäten, Zeitfenster und Lenkzeiten automatisch. Dadurch sinken Kilometer und Kosten, und die Fahrzeuge werden besser ausgelastet. Über die Telematik kann sie den Empfängern eine ETA (voraussichtliche Ankunftszeit) senden und bei Störungen neu planen. Voraussetzung ist die Pflege guter Stammdaten wie Adressen, Standzeiten und Zeitfenster; außerdem bleibt das Erfahrungswissen des Disponenten wichtig, und es entstehen Kosten für Lizenz und Schulung.',
      criteria: [
        { text: 'nennt schnelle/automatische Berücksichtigung von Restriktionen', keywords: ['Zeitfenster|Kapazit|Lenkzeit|automatisch'], points: 1 },
        { text: 'nennt geringere Kosten/Kilometer oder bessere Auslastung', keywords: ['Kosten|Kilometer|Auslastung|km'], points: 1 },
        { text: 'nennt ETA, Telematik oder dynamische Neuplanung', keywords: ['ETA|Ankunft|Telematik|neu plan|Störung'], points: 1 },
        { text: 'nennt Stammdaten, Erfahrung oder Kosten als Grenze', keywords: ['Stammdaten|Daten|Erfahrung|Lizenz|Schulung'], points: 1 }
      ],
      hints: ['Was kann ein Computer besser als ein Mensch mit Karte?', 'Womit „füttert“ man die Software?'],
      solution: 'Vorteile: **schnelle Vorschläge** unter Beachtung von **Kapazität, Zeitfenster und Lenkzeit**, **weniger Kilometer/Kosten** und bessere **Auslastung**, **ETA** an Empfänger und Neuplanung bei Störungen. Grenze/Voraussetzung: gute **Stammdaten**, Erfahrungswissen des Disponenten, **Kosten** für Lizenz und Schulung.'
    },
    {
      id: 'lf13-tourenplanung-a10', type: 'case', difficulty: 3, points: 10,
      q: 'Fall: Tourenplanung für einen Baustoffhändler',
      intro: `Die Bliesgau Logistik e.K. beliefert für einen Baustoffhändler vom Depot 0 vier Baustellen A, B, C und D. Jeder Lkw (mit Ladekran) fasst 18 Paletten. Entfernungen in km (Beispielwerte):

| km | 0 | A | B | C | D |
|---|---:|---:|---:|---:|---:|
| 0 | – | 12 | 18 | 22 | 15 |
| A | 12 | – | 8 | 16 | 20 |
| B | 18 | 8 | – | 9 | 22 |
| C | 22 | 16 | 9 | – | 14 |
| D | 15 | 20 | 22 | 14 | – |

Mengen: A 9 Paletten, B 5 Paletten, C 6 Paletten, D 7 Paletten.`,
      hints: ['Berechne alle sechs Savings und sortiere sie.', 'Prüfe bei jedem Schritt die Paletten.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf13-tourenplanung-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Savings s(B,C), s(C,D) und s(A,B).',
          formula: 's(i,j) = d(0,i) + d(0,j) − d(i,j)',
          fields: [
            { id: 'sbc', label: 's(B,C)', unit: 'km', answer: 31, tol: 0 },
            { id: 'scd', label: 's(C,D)', unit: 'km', answer: 23, tol: 0 },
            { id: 'sab', label: 's(A,B)', unit: 'km', answer: 22, tol: 0 }
          ],
          hints: ['s(B,C) = 18 + 22 − 9.', 's(C,D) = 22 + 15 − 14.'],
          solution: `- s(B,C) = 18 + 22 − 9 = **31 km**
- s(C,D) = 22 + 15 − 14 = **23 km**
- s(A,B) = 12 + 18 − 8 = **22 km**

Übrige Savings: s(A,C) = 12 + 22 − 16 = 18; s(B,D) = 18 + 15 − 22 = 11; s(A,D) = 12 + 15 − 20 = 7.

Sortiert: B–C 31 > C–D 23 > A–B 22 > A–C 18 > B–D 11 > A–D 7.`
        },
        {
          id: 'lf13-tourenplanung-a10-2', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Touren ergibt das Savings-Verfahren?',
          options: [
            'Tour 1: 0 – B – C – D – 0 (18 Paletten), Tour 2: 0 – A – 0 (9 Paletten)',
            'Tour 1: 0 – A – B – C – 0 (20 Paletten), Tour 2: 0 – D – 0 (7 Paletten)',
            'Tour 1: 0 – A – B – 0 (14 Paletten), Tour 2: 0 – C – D – 0 (13 Paletten)',
            'Eine einzige Tour: 0 – A – B – C – D – 0 (27 Paletten)'
          ],
          correct: [0],
          hints: ['B–C (11 Paletten), dann D an C anhängen (18 Paletten).', 'A passt danach nicht mehr dazu.'],
          solution: `Richtig ist A.
1. s(B,C) = 31: B und C zusammen, 5 + 6 = 11 Paletten ✔
2. s(C,D) = 23: C ist Rand, D anhängen → B–C–D, 18 Paletten ✔
3. s(A,B) = 22: A an B anhängen ergäbe 27 Paletten → abgelehnt
4. s(A,C) = 18: C liegt jetzt in der Tourmitte → nicht möglich
5. s(B,D) = 11: B und D sind schon in derselben Tour
6. s(A,D) = 7: 27 Paletten → abgelehnt

B ist falsch (20 Paletten > 18), D ebenso (27 Paletten), C entspricht nicht der Reihenfolge der Savings.`
        },
        {
          id: 'lf13-tourenplanung-a10-3', type: 'calc', difficulty: 3, points: 4,
          q: 'Berechne die Summe der Pendeltouren, die Länge von Tour 1 (0 – B – C – D – 0), die Gesamtstrecke beider Touren und die Einsparung gegenüber den Pendeltouren.',
          formula: 'Gesamtstrecke = Summe Pendeltouren − genutzte Savings',
          fields: [
            { id: 'pendel', label: 'Summe der Pendeltouren', unit: 'km', answer: 134, tol: 0 },
            { id: 't1', label: 'Länge Tour 1', unit: 'km', answer: 56, tol: 0 },
            { id: 'ges', label: 'Gesamtstrecke', unit: 'km', answer: 80, tol: 0 },
            { id: 'spar', label: 'Einsparung', unit: 'km', answer: 54, tol: 0 }
          ],
          hints: ['Pendeltouren: 2 × (12 + 18 + 22 + 15).', 'Tour 1: 18 + 9 + 14 + 15.'],
          solution: `**Pendeltouren:** 2 × (12 + 18 + 22 + 15) = 2 × 67 = **134 km**

**Tour 1:** 0 → B 18 + B → C 9 + C → D 14 + D → 0 15 = **56 km**

**Tour 2:** 0 → A → 0 = 2 × 12 = 24 km

**Gesamtstrecke:** 56 + 24 = **80 km**

**Einsparung:** 134 − 80 = **54 km** = s(B,C) + s(C,D) = 31 + 23 ✔`
        }
      ]
    }
  ],
  quiz: ['lf13-tourenplanung-a1', 'lf13-tourenplanung-a3', 'lf13-tourenplanung-a5', 'lf13-tourenplanung-a7', 'lf13-tourenplanung-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 13, Ziel: Verteilung im Kundenauftrag organisieren, Tourenpläne unter Berücksichtigung von Kosten und einfachen Logistikkennzahlen erstellen' },
    { title: 'Verordnung (EG) Nr. 561/2006 zur Harmonisierung bestimmter Sozialvorschriften im Straßenverkehr, konsolidierte Fassung', publisher: 'Amt für Veröffentlichungen der EU (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:02006R0561-20241231', asOf: '2024-12-31 (konsolidierte Fassung), geprüft 2026-10-17' },
    { title: 'Clarke, G.; Wright, J. W.: Scheduling of Vehicles from a Central Depot to a Number of Delivery Points. Operations Research 12 (4), 1964, S. 568–581', publisher: 'INFORMS', url: 'https://doi.org/10.1287/opre.12.4.568', asOf: '1964' }
  ],
  links: ['lf04-lenkzeiten', 'lf07-fahrzeugkosten', 'lf04-fahrzeugplanung', 'lf13-distributionskennzahlen', 'lf13-versandvorbereitung']
};
