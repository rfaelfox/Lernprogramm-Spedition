export default {
  id: 'lf12-jit-abc',
  area: 'LF12',
  topic: 'lf12-jit-abc',
  title: 'Just-in-time, Vorratshaltung, Kanban und ABC-Analyse',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Umsatzsteuerliche Konsignationslagerregelung bei grenzüberschreitenden Lieferungen innerhalb der EU nach § 6b UStG (Entnahme innerhalb von 12 Monaten), Stand 2026. Klassengrenzen der ABC-Analyse sind keine Rechtswerte, sondern typische Richtwerte.'
  },
  goals: [
    'Ich kann Vorratsbeschaffung, Einzelbeschaffung und Just-in-time-Beschaffung unterscheiden und nach Kosten, Produktionssicherheit und Umweltschutz bewerten.',
    'Ich kann Just-in-time und Just-in-sequence erklären und die Rolle der Spedition dabei beschreiben.',
    'Ich kann Konsignationslager, Vendor Managed Inventory und Kanban erläutern.',
    'Ich kann die Zahl der Kanban-Behälter berechnen.',
    'Ich kann eine ABC-Analyse durchführen und Folgerungen für Beschaffung und Lager ableiten.',
    'Ich kann die XYZ-Analyse kurz erklären und mit der ABC-Analyse verbinden.'
  ],
  simple: `# Worum geht es?

Ein Werk braucht Material. Dafür gibt es zwei Grundideen:

1. **Vorratsbeschaffung**: Man kauft größere Mengen und legt sie ins Lager. Das ist **sicher** – wenn ein Lkw im Stau steht, läuft die Produktion weiter. Aber: Lager kostet Platz, Personal und bindet Geld.
2. **Just-in-time (JIT)**: Das Material kommt **genau dann**, wenn es gebraucht wird, in der **benötigten Menge** – oft mehrmals täglich direkt ans Band. Das spart Lager, verlangt aber **pünktliche Transporte** und enge Abstimmung. Hier ist die Spedition besonders gefordert.

**Just-in-sequence (JIS)** geht noch weiter: Die Teile kommen nicht nur pünktlich, sondern auch in der **Reihenfolge**, in der die Fahrzeuge am Band stehen (z. B. Sitz für Auto 1 in Rot, Auto 2 in Schwarz …).

# Weitere Konzepte

- **Konsignationslager**: Die Ware des Lieferanten liegt beim Kunden (oder bei der Spedition in der Nähe), gehört aber noch dem Lieferanten, bis sie entnommen wird.
- **Vendor Managed Inventory (VMI)**: Der **Lieferant** überwacht den Bestand beim Kunden und füllt selbstständig nach.
- **Kanban**: Leere Behälter oder Karten sind das Signal zum Nachliefern („Ziehprinzip“).

# Welche Teile sind wichtig?

Mit der **ABC-Analyse** sortiert man Artikel nach ihrem **Verbrauchswert** (Menge × Preis). Meist machen **wenige Artikel** den **größten Teil des Werts** aus (A-Güter). Um diese kümmert man sich besonders genau, bei den vielen billigen C-Gütern hält man den Aufwand klein.`,
  deep: `# 1. Beschaffungsprinzipien im Vergleich

| | Vorratsbeschaffung | Einzelbeschaffung im Bedarfsfall | Just-in-time (fertigungssynchron) |
|---|---|---|---|
| Idee | Material auf Vorrat ins Lager | erst bestellen, wenn ein Auftrag da ist | Anlieferung zum Verbrauchszeitpunkt, kaum Lager |
| Kapitalbindung, Lagerkosten | **hoch** | gering | **sehr gering** |
| Produktionssicherheit | **hoch** (Puffer) | gering (Wartezeiten) | **abhängig von Transport und Lieferant** |
| Mengenrabatte | nutzbar | kaum | über Rahmenverträge |
| Transporte | wenige große | einzelne | **viele kleine** → mehr Verkehr, Emissionen, Abhängigkeit von Straße und Wetter |
| geeignet für | C-Güter, saisonale Güter, unsichere Lieferketten | Sonderteile, Einzelfertigung | A-Güter mit gleichmäßigem Bedarf, nahe Lieferanten |

**Bewertung nach Lehrplan (Kosten, Produktionssicherheit, Umweltschutz):** JIT senkt Kapitalbindung und Lagerkosten, verlagert aber Lager „auf die Straße“, erhöht die Zahl der Fahrten und macht die Produktion anfällig für Staus, Streiks, Unwetter oder den Ausfall eines Lieferanten. Lieferkettenstörungen der letzten Jahre haben viele Unternehmen veranlasst, wieder höhere Sicherheitsbestände zu halten (Mischformen statt reinem JIT).

# 2. Just-in-time und Just-in-sequence

**Voraussetzungen für JIT:**
- genaue, programmorientierte Bedarfsplanung und **Abrufe per EDI** (Lieferabruf, Feinabruf)
- zuverlässige Lieferanten mit **hoher Qualität** (keine Eingangsprüfung möglich → Qualitätssicherung beim Lieferanten)
- **kurze, sichere Transportwege**, oft Lieferanten in einem Industriepark nahe dem Werk
- leistungsfähiger Logistikdienstleister mit festen Zeitfenstern
- Rahmenverträge mit Vertragsstrafen für Bandstillstand

**JIS (Just-in-sequence)**: Der Hersteller sendet bei Produktionsbeginn eines Fahrzeugs die **Reihenfolge** (Perlenkette) an den Lieferanten bzw. an das JIS-Werk eines Dienstleisters. Dort werden die variantenreichen Teile (Sitze, Cockpits, Stoßfänger) in Sequenz gefertigt oder kommissioniert, in **Sequenzgestelle** geladen und in einem engen Zeitfenster direkt an den Verbauort gebracht.

**Rolle der Spedition:** Betrieb von **Versorgungs- und Sequenzzentren** vor dem Werk, Pendelverkehre im Takt, Leergutrückführung, Notfallkonzepte (Ersatzfahrzeuge, Sonderfahrten), Einhaltung der Zeitfenster. Für Frachtführer-Haftung bei Lieferfristüberschreitung siehe Einheit „Frachtvertrag und Haftung“.

# 3. Konsignationslager

Ein **Konsignationslager** ist ein Lager beim oder nahe beim Kunden, dessen Ware **Eigentum des Lieferanten** bleibt, bis der Kunde sie **entnimmt**. Erst die Entnahme löst Eigentumsübergang und Rechnung aus.

- **Vorteile für den Kunden**: hohe Verfügbarkeit, keine Kapitalbindung bis zur Entnahme, kurze Wege.
- **Vorteile für den Lieferanten**: Kundenbindung, planbare Abrufe, Kenntnis des Verbrauchs.
- **Nachteile für den Lieferanten**: Kapitalbindung und Bestandsrisiko liegen bei ihm; Bedarf an genauer Entnahmemeldung.
- **Spedition**: betreibt häufig das Konsignationslager, meldet Entnahmen an Lieferant und Kunde, macht Inventuren.

**Steuerlicher Hinweis:** Liegt das Lager in einem **anderen EU-Mitgliedstaat** als der Lieferant, gilt unter den Voraussetzungen von **§ 6b UStG** (Konsignationslagerregelung) die Lieferung erst bei Entnahme als innergemeinschaftliche Lieferung. Dafür muss der Erwerber bereits bei Beginn der Beförderung feststehen, und er muss die Ware **innerhalb von 12 Monaten** nach Ende der Beförderung übernehmen; außerdem gelten besondere Aufzeichnungs- und Meldepflichten. Details klärt die Steuerabteilung.

# 4. Vendor Managed Inventory (VMI)

Beim **VMI** (lieferantengesteuerter Bestand) bekommt der **Lieferant** Zugriff auf Bestands- und Verbrauchsdaten des Kunden und entscheidet **selbst**, wann und wie viel er nachliefert – innerhalb vereinbarter Mindest- und Höchstbestände. Oft wird VMI mit einem Konsignationslager kombiniert.

- Kunde: weniger Bestellaufwand, weniger Fehlmengen
- Lieferant: bessere Planung seiner Produktion und Transporte (gegen den Bullwhip-Effekt)
- Voraussetzung: Vertrauen und **Datenaustausch** (EDI, Webportal)

# 5. Kanban

**Kanban** (japanisch: Karte, Schild) ist ein **Pull-System** (Ziehprinzip): Die verbrauchende Stelle „zieht“ Material nach. Ein leerer Behälter mit Kanban-Karte ist der **Auftrag** zum Nachliefern bzw. Nachproduzieren.

Einfachste Form: **Zwei-Behälter-System** – ist der erste Behälter leer, wird er zurückgeschickt und gefüllt, während aus dem zweiten weiter entnommen wird.

**Anzahl der Kanban-Behälter (übliche Faustformel):**

**Anzahl Kanbans = Verbrauch je Tag × Wiederbeschaffungszeit in Tagen × (1 + Sicherheitszuschlag) ÷ Behälterinhalt**

Das Ergebnis wird **aufgerundet**, damit die Versorgung gesichert ist.

# 6. ABC-Analyse

Die ABC-Analyse teilt Artikel nach ihrem **Anteil am Gesamtverbrauchswert** in drei Klassen.

**Vorgehen:**
1. **Jahresverbrauchswert** je Artikel = Jahresverbrauchsmenge × Preis
2. Artikel nach Verbrauchswert **absteigend sortieren**
3. **Wertanteil** und **Mengenanteil** je Artikel in % berechnen
4. Anteile **kumulieren** (aufaddieren)
5. Klassengrenzen festlegen und Artikel in A, B, C einteilen

**Typische Richtwerte** (jedes Unternehmen legt seine Grenzen selbst fest):

| Klasse | Wertanteil | Mengenanteil |
|---|---|---|
| **A** | ca. 70–80 % | ca. 10–20 % |
| **B** | ca. 15–20 % | ca. 20–40 % |
| **C** | ca. 5–10 % | ca. 40–70 % |

**Folgerungen:**

| | A-Güter | C-Güter |
|---|---|---|
| Bedarfsermittlung | programmorientiert, genau | verbrauchsorientiert (Mittelwert) |
| Beschaffung | JIT, intensive Lieferantenauswahl und Preisverhandlung | Vorratsbeschaffung, große Mengen, Rahmenverträge, ggf. Kanban/VMI |
| Bestände | niedrig, genaue Überwachung | höhere Sicherheitsbestände unkritisch |
| Lager | gesichert, genaue Inventur | vereinfachte Abläufe |

> Achtung: Die **Lagerplatzvergabe nach Zugriffshäufigkeit** (Schnelldreher vorn) richtet sich nach der Zahl der Entnahmen, nicht nach dem Wert. Eine solche Einteilung nach Zugriffen wird manchmal ebenfalls ABC genannt (siehe „Lagerorganisation, Lagerpapiere und Lagerkennzahlen“).

# 7. XYZ-Analyse (kurz)

Die **XYZ-Analyse** ordnet Artikel nach der **Regelmäßigkeit** ihres Verbrauchs:

- **X**: konstanter Verbrauch, gut vorhersagbar → JIT geeignet
- **Y**: schwankender oder trendförmiger/saisonaler Verbrauch, mittlere Vorhersagegenauigkeit
- **Z**: unregelmäßiger, sporadischer Verbrauch, kaum vorhersagbar → Einzelbeschaffung oder Vorrat

Kombiniert ergibt sich eine Matrix: **AX-Güter** (hoher Wert, gleichmäßig) sind ideale **JIT-Kandidaten**; **CZ-Güter** beschafft man einfach auf Vorrat.`,
  terms: [
    { term: 'Vorratsbeschaffung', def: 'Beschaffung größerer Mengen auf Lager, um die Produktion unabhängig von Lieferschwankungen zu versorgen.' },
    { term: 'Just-in-time (JIT)', def: 'Fertigungssynchrone Beschaffung: Anlieferung in der benötigten Menge zum Verbrauchszeitpunkt, möglichst ohne Lagerung.' },
    { term: 'Just-in-sequence (JIS)', def: 'Weiterentwicklung von JIT: Anlieferung zusätzlich in der Reihenfolge der Produktion (Sequenz), z. B. Sitze passend zur Fahrzeugfolge am Band.' },
    { term: 'Konsignationslager', def: 'Lager beim oder nahe beim Kunden mit Ware, die bis zur Entnahme Eigentum des Lieferanten bleibt; abgerechnet wird erst bei Entnahme.' },
    { term: 'Vendor Managed Inventory (VMI)', def: 'Der Lieferant überwacht anhand der Bestandsdaten des Kunden dessen Bestand und füllt eigenverantwortlich innerhalb vereinbarter Grenzen nach.' },
    { term: 'Kanban', def: 'Steuerungsverfahren nach dem Ziehprinzip: Ein leerer Behälter oder eine Karte löst die Nachlieferung aus.' },
    { term: 'ABC-Analyse', def: 'Einteilung von Artikeln in Klassen nach ihrem Anteil am Gesamtverbrauchswert (Menge × Preis).' },
    { term: 'XYZ-Analyse', def: 'Einteilung von Artikeln nach der Regelmäßigkeit und Vorhersagbarkeit ihres Verbrauchs.' },
    { term: 'Kapitalbindung', def: 'Im Lagerbestand gebundenes Geld, das Zinsen kostet und nicht anders verwendet werden kann.' },
    { term: 'Pull-Prinzip (Ziehprinzip)', def: 'Die verbrauchende Stelle löst den Nachschub aus, statt dass nach Plan „geschoben“ wird.' }
  ],
  example: `# JIS-Versorgung durch die Saar-Trans (Beispiel)

Die Saar-Trans Spedition GmbH betreibt 4 km vor dem Werk eines Nutzfahrzeugherstellers (fiktiv) ein **Sequenzzentrum** für Fahrersitze.

1. 06:00 Uhr: Ein Fahrgestell startet in der Montage. Der Hersteller sendet per EDI den **Sequenzabruf** (Reihenfolge der nächsten 40 Fahrzeuge mit Sitzvariante).
2. Saar-Trans kommissioniert die Sitze aus dem Konsignationslager des Sitzlieferanten in genau dieser Reihenfolge in **Sequenzgestelle**.
3. Ein Shuttle-Lkw bringt alle 45 Minuten ein Gestell an den Verbauort; die Vorlaufzeit vom Abruf bis zum Einbau beträgt rund **3 Stunden**.
4. Leere Gestelle fahren auf dem Rückweg mit zurück.

**ABC-Blick:** Die Fahrersitze sind A-Güter (hoher Wert, gleichmäßiger Bedarf → AX). Die Befestigungsschrauben sind C-Güter: Sie liegen im **Kanban-Regal** an der Linie, ein leerer Behälter wird von Saar-Trans beim nächsten Rundgang nachgefüllt.

**Notfallkonzept:** Fällt ein Shuttle aus, steht ein Ersatzfahrzeug bereit; im Sequenzzentrum liegt ein Puffer von zwei Stunden.`,
  rules: [
    'Vorratsbeschaffung = sicher, aber teuer im Lager; JIT = günstig im Lager, aber störanfällig und verkehrsintensiv.',
    'JIT liefert pünktlich in der benötigten Menge, JIS zusätzlich in der richtigen Reihenfolge.',
    'Konsignationslager: Ware gehört dem Lieferanten bis zur Entnahme.',
    'VMI: Der Lieferant steuert den Bestand beim Kunden selbst.',
    'Kanban = Ziehprinzip: Der leere Behälter ist die Bestellung. Anzahl Kanbans immer aufrunden.',
    'ABC: nach Verbrauchswert sortieren, Anteile kumulieren; wenige A-Güter haben den größten Wertanteil.',
    'A-Güter genau planen und knapp bevorraten, C-Güter einfach und auf Vorrat beschaffen.',
    'AX-Güter sind die besten JIT-Kandidaten.'
  ],
  summary: `- **Vorratsbeschaffung** vs. **JIT**: Abwägung zwischen Kapitalbindung/Lagerkosten und Produktionssicherheit; JIT erhöht Zahl der Transporte.
- **JIS**: Anlieferung in Produktionsreihenfolge, oft über ein Sequenzzentrum des Logistikdienstleisters.
- **Konsignationslager**: Eigentum beim Lieferanten bis zur Entnahme; grenzüberschreitend in der EU § 6b UStG (12 Monate).
- **VMI**: Lieferant steuert den Kundenbestand; **Kanban**: Ziehprinzip mit Behältern/Karten.
- **ABC-Analyse**: Verbrauchswert → sortieren → Anteile kumulieren → Klassen; typische Richtwerte A ca. 70–80 % Wert bei ca. 10–20 % Menge.
- **XYZ-Analyse**: Regelmäßigkeit des Verbrauchs; Kombination mit ABC für die Wahl des Beschaffungsprinzips.`,
  mistakes: [
    { wrong: 'Bei JIT gibt es überhaupt keine Bestände mehr.', right: 'Bestände werden stark reduziert, aber kleine Puffer (z. B. im Versorgungszentrum oder auf dem Lkw) bleiben nötig; JIT verlagert Lager teilweise auf die Straße.' },
    { wrong: 'Im Konsignationslager gehört die Ware dem Kunden, weil sie bei ihm liegt.', right: 'Die Ware bleibt bis zur Entnahme Eigentum des Lieferanten; erst die Entnahme wird abgerechnet.' },
    { wrong: 'Bei der ABC-Analyse sortiere ich nach der Menge.', right: 'Sortiert wird nach dem Verbrauchswert (Menge × Preis), absteigend.' },
    { wrong: 'C-Güter sind unwichtig und müssen nicht verfügbar sein.', right: 'C-Güter haben geringen Wert, aber ein fehlendes Teil kann die Produktion ebenso stoppen; man sichert sie mit einfachen Verfahren und Vorrat ab.' },
    { wrong: 'Die errechnete Kanban-Anzahl von 5,2 runde ich auf 5 ab.', right: 'Kanban-Anzahlen werden aufgerundet (hier 6), sonst reicht die Menge in der Wiederbeschaffungszeit nicht.' },
    { wrong: 'VMI bedeutet, dass der Kunde die Bestände des Lieferanten verwaltet.', right: 'Beim Vendor Managed Inventory verwaltet der Lieferant (Vendor) den Bestand beim Kunden.' }
  ],
  flashcards: [
    { q: 'Was ist Just-in-sequence?', a: 'Anlieferung zum Bedarfszeitpunkt in der Reihenfolge der Produktion, z. B. Sitze in der Fahrzeugfolge am Band.' },
    { q: 'Nenne zwei Risiken von JIT.', a: 'Produktionsstillstand bei Stau, Streik oder Lieferantenausfall; mehr Fahrten mit höheren Emissionen; Abhängigkeit von wenigen Lieferanten.' },
    { q: 'Wem gehört die Ware im Konsignationslager?', a: 'Dem Lieferanten, bis der Kunde sie entnimmt.' },
    { q: 'Innerhalb welcher Frist muss die Ware bei der Konsignationslagerregelung nach § 6b UStG übernommen werden?', a: 'Innerhalb von 12 Monaten nach Ende der Beförderung (Stand 2026).' },
    { q: 'Was bedeutet VMI?', a: 'Vendor Managed Inventory: Der Lieferant überwacht den Kundenbestand und füllt selbstständig nach.' },
    { q: 'Wie funktioniert das Zwei-Behälter-Kanban?', a: 'Ist ein Behälter leer, wird er zum Nachfüllen geschickt, während aus dem zweiten weiter entnommen wird.' },
    { q: 'Formel Anzahl Kanbans?', a: 'Tagesverbrauch × Wiederbeschaffungszeit × (1 + Sicherheitszuschlag) ÷ Behälterinhalt, aufgerundet.' },
    { q: 'Welche fünf Schritte hat die ABC-Analyse?', a: 'Verbrauchswert berechnen, absteigend sortieren, Wert- und Mengenanteile berechnen, kumulieren, Klassen bilden.' },
    { q: 'Typische Richtwerte für A-Güter?', a: 'Ca. 70–80 % des Verbrauchswerts bei ca. 10–20 % der Menge (je Unternehmen unterschiedlich).' },
    { q: 'Was bedeutet X in der XYZ-Analyse?', a: 'Konstanter, gut vorhersagbarer Verbrauch.' }
  ],
  tasks: [
    {
      id: 'lf12-jit-abc-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne das Konzept der passenden Beschreibung zu.',
      pairs: [
        ['Just-in-time', 'Anlieferung in der benötigten Menge zum Verbrauchszeitpunkt'],
        ['Just-in-sequence', 'Anlieferung zusätzlich in der Reihenfolge der Montage'],
        ['Konsignationslager', 'Ware liegt beim Kunden, bleibt aber bis zur Entnahme Eigentum des Lieferanten'],
        ['Vendor Managed Inventory', 'Lieferant überwacht den Kundenbestand und füllt eigenständig nach'],
        ['Kanban', 'Leerer Behälter mit Karte löst die Nachlieferung aus']
      ],
      hints: ['Achte auf die Wörter Reihenfolge, Eigentum und Behälter.', 'Vendor heißt Lieferant.'],
      solution: 'JIT = zeitgenau; JIS = zeit- und reihenfolgegenau; Konsignationslager = Eigentum beim Lieferanten bis zur Entnahme; VMI = lieferantengesteuerter Bestand; Kanban = Ziehprinzip über Behälter/Karten.'
    },
    {
      id: 'lf12-jit-abc-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Ein Automobilzulieferer stellt seine Versorgung mit Kabelbäumen von Vorratsbeschaffung auf JIT um. Welche Folgen sind typisch? (Mehrfachauswahl)',
      options: [
        'Die Kapitalbindung im Lager sinkt.',
        'Die Zahl der Anlieferungen und Fahrten steigt.',
        'Die Produktion ist besser gegen Staus und Streiks geschützt.',
        'Die Anforderungen an Pünktlichkeit und Qualität des Lieferanten steigen.',
        'Mengenrabatte für große Einzelbestellungen lassen sich leichter nutzen.'
      ],
      correct: [0, 1, 3],
      hints: ['Was passiert mit dem Lager, was mit den Transporten?', 'Bei JIT fehlt der Puffer.'],
      solution: 'Richtig sind **A, B, D**. JIT senkt Bestände und Kapitalbindung, erfordert aber viele kleine Lieferungen und absolut zuverlässige Lieferanten (keine Eingangsprüfung, kein Puffer). **C** ist falsch: Ohne Puffer ist die Produktion **anfälliger** für Störungen. **E** ist falsch: Große Einzelbestellungen passen zur Vorratsbeschaffung, nicht zu JIT.'
    },
    {
      id: 'lf12-jit-abc-a3', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe den Ablauf einer JIS-Belieferung durch einen Logistikdienstleister in die richtige Reihenfolge.',
      items: [
        'Fahrzeug startet in der Montage, Hersteller sendet den Sequenzabruf per EDI',
        'Dienstleister kommissioniert die Teile in der Abrufreihenfolge',
        'Teile werden in Sequenzgestelle geladen',
        'Shuttle-Lkw liefert das Gestell im Zeitfenster an den Verbauort',
        'Leere Gestelle werden zum Sequenzzentrum zurückgeführt'
      ],
      hints: ['Ohne Abruf weiß niemand die Reihenfolge.', 'Leergut kommt erst nach dem Einbau zurück.'],
      solution: 'Sequenzabruf → Kommissionierung in Sequenz → Verladen in Sequenzgestelle → Anlieferung im Zeitfenster → Leergutrückführung.'
    },
    {
      id: 'lf12-jit-abc-a4', type: 'calc', difficulty: 3, points: 3,
      q: `Die Saar-Trans berät einen Kunden: Vorratsbeschaffung oder JIT für Aluminiumprofile? (Beispielzahlen, pro Jahr)

| | Vorratsbeschaffung | JIT |
|---|---:|---:|
| durchschnittlicher Lagerbestand (Wert) | 400.000 € | 40.000 € |
| Lagerhaltungskostensatz | 18 % | 18 % |
| Anzahl Lieferungen | 12 | 250 |
| Transportkosten je Lieferung | 900 € | 180 € |

Berechne die jährlichen Gesamtkosten (Lagerhaltungs- plus Transportkosten) beider Varianten und den Kostenvorteil der günstigeren Variante.`,
      formula: 'Gesamtkosten = Ø Lagerbestandswert × Lagerhaltungskostensatz + Anzahl Lieferungen × Transportkosten je Lieferung',
      fields: [
        { id: 'kv', label: 'Gesamtkosten Vorratsbeschaffung', unit: '€', answer: 82800, tol: 0.01 },
        { id: 'kj', label: 'Gesamtkosten JIT', unit: '€', answer: 52200, tol: 0.01 },
        { id: 'diff', label: 'Kostenvorteil JIT', unit: '€', answer: 30600, tol: 0.01 }
      ],
      hints: ['Lagerhaltungskosten = Ø Bestandswert × 18 %.', 'Transportkosten = Lieferungen × Kosten je Lieferung.'],
      solution: `**Vorratsbeschaffung:**
- Lagerhaltungskosten: 400.000 € × 18 % = 72.000 €
- Transportkosten: 12 × 900 € = 10.800 €
- Gesamt: **82.800 €**

**JIT:**
- Lagerhaltungskosten: 40.000 € × 18 % = 7.200 €
- Transportkosten: 250 × 180 € = 45.000 €
- Gesamt: **52.200 €**

**Kostenvorteil JIT:** 82.800 € − 52.200 € = **30.600 €**

Bei der Entscheidung zählen außerdem das höhere Stillstandsrisiko und die über 20-mal so vielen Fahrten (Umwelt, Verkehr) bei JIT.`
    },
    {
      id: 'lf12-jit-abc-a5', type: 'calc', difficulty: 2, points: 2,
      q: 'An einer Montagelinie werden täglich **480 Halteclips** verbaut. Die Wiederbeschaffungszeit beträgt **0,5 Tage**, der Sicherheitszuschlag **25 %**, ein Kanban-Behälter fasst **50 Clips**. Wie viele Kanban-Behälter werden benötigt?',
      formula: 'Anzahl Kanbans = Tagesverbrauch × Wiederbeschaffungszeit × (1 + Sicherheitszuschlag) ÷ Behälterinhalt (aufrunden)',
      fields: [
        { id: 'menge', label: 'Benötigte Menge im Regelkreis', unit: 'Clips', answer: 300, tol: 0 },
        { id: 'k', label: 'Anzahl Kanban-Behälter', unit: 'Behälter', answer: 6, tol: 0 }
      ],
      hints: ['480 × 0,5 × 1,25 = ?', 'Teile durch 50 und runde gegebenenfalls auf.'],
      solution: `**Menge im Regelkreis:** 480 Clips/Tag × 0,5 Tage × 1,25 = **300 Clips**

**Anzahl Kanbans:** 300 Clips ÷ 50 Clips/Behälter = **6 Behälter**

Das Ergebnis ist ganzzahlig; ein Bruchteil wäre aufzurunden.`
    },
    {
      id: 'lf12-jit-abc-a6', type: 'cloze', difficulty: 2, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Im Konsignationslager bleibt die Ware bis zur [[Entnahme]] Eigentum des [[Lieferanten|Lieferant]]. Beim Vendor Managed Inventory entscheidet der [[Lieferant|Lieferanten]] über Zeitpunkt und Menge der Nachlieferung. Kanban arbeitet nach dem [[Ziehprinzip|Pull-Prinzip|Holprinzip]].',
      hints: ['Wann wird beim Konsignationslager abgerechnet?', 'Vendor = Verkäufer/Lieferant.'],
      solution: 'Eigentumsübergang und Rechnung erst bei **Entnahme**; Eigentümer bis dahin ist der **Lieferant**. Beim VMI steuert der **Lieferant** den Bestand. Kanban = **Ziehprinzip** (Pull).'
    },
    {
      id: 'lf12-jit-abc-a7', type: 'mc', difficulty: 3, points: 2,
      q: 'Ein Hersteller aus Metz (Frankreich) lagert Ersatzteile in einem Konsignationslager, das die Saar-Trans in Saarbrücken für einen deutschen Kunden betreibt. Welche Aussagen sind richtig? (Mehrfachauswahl, Stand 2026)',
      options: [
        'Unter den Voraussetzungen des § 6b UStG gilt die Lieferung erst mit der Entnahme durch den deutschen Kunden als bewirkt.',
        'Der Kunde muss die Ware nach § 6b UStG innerhalb von 12 Monaten nach Ende der Beförderung übernehmen, sonst gelten andere umsatzsteuerliche Folgen.',
        'Die Ware gehört ab Einlagerung dem deutschen Kunden.',
        'Die Saar-Trans muss die Ware als eigenes Umlaufvermögen in ihre Bilanz aufnehmen.'
      ],
      correct: [0, 1],
      hints: ['Wem gehört die Ware bis zur Entnahme?', 'Die Spedition ist nur Lagerhalter.'],
      solution: 'Richtig sind **A und B**: § 6b UStG regelt die Konsignationslagerregelung bei Lieferungen in einen anderen EU-Mitgliedstaat; die innergemeinschaftliche Lieferung gilt erst bei Übernahme durch den Erwerber als ausgeführt, und zwar nur, wenn sie innerhalb von 12 Monaten erfolgt. **C** ist falsch: Bis zur Entnahme ist der Lieferant Eigentümer. **D** ist falsch: Eingelagerte Fremdware gehört nie in die Bilanz der Spedition (siehe „Inventur, Inventar und Bilanz“).'
    },
    {
      id: 'lf12-jit-abc-a8', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: ABC-Analyse im Ersatzteillager der Saar-Trans',
      intro: `Die Saar-Trans betreibt für einen Landmaschinenhändler (fiktiv) ein Ersatzteillager. Der Kunde möchte wissen, wie er die Teile künftig beschaffen soll. Jahresdaten (Beispielzahlen):

| Artikel | Jahresmenge (Stück) | Preis je Stück |
|---|---:|---:|
| P1 Bremsscheiben | 400 | 112,50 € |
| P2 Steuergeräte | 50 | 800,00 € |
| P3 Ölfilter | 1.200 | 5,00 € |
| P4 Dichtungen | 4.000 | 1,25 € |
| P5 Schrauben-Sets | 5.000 | 0,60 € |
| P6 Lampen | 1.000 | 4,00 € |
| P7 Wischerblätter | 800 | 10,00 € |
| P8 Clips | 5.000 | 0,30 € |
| P9 Etiketten | 2.500 | 0,40 € |
| P10 Ölwannen | 50 | 130,00 € |

Klassengrenzen des Kunden: **A**, solange der kumulierte Wertanteil **75 %** nicht übersteigt; **B** bis kumuliert **95 %**; Rest **C**.`,
      hints: ['Verbrauchswert = Menge × Preis, dann absteigend sortieren.', 'Gesamtmenge: 20.000 Stück.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf12-jit-abc-a8-1', type: 'calc', difficulty: 3, points: 4,
          q: 'Berechne den Gesamtverbrauchswert, den Wertanteil von P1, den kumulierten Wertanteil der A-Klasse und den Mengenanteil der C-Klasse (Prozentwerte auf zwei Nachkommastellen).',
          formula: 'Wertanteil = Verbrauchswert Artikel ÷ Gesamtverbrauchswert × 100; Mengenanteil = Menge ÷ Gesamtmenge × 100',
          fields: [
            { id: 'gw', label: 'Gesamtverbrauchswert', unit: '€', answer: 120000, tol: 0.01 },
            { id: 'p1', label: 'Wertanteil P1', unit: '%', answer: 37.5, tol: 0.01 },
            { id: 'a', label: 'Kumulierter Wertanteil A-Klasse', unit: '%', answer: 70.83, tol: 0.01 },
            { id: 'cm', label: 'Mengenanteil C-Klasse', unit: '%', answer: 67.5, tol: 0.01 }
          ],
          hints: ['P1: 400 × 112,50 € = 45.000 €; P2: 50 × 800 € = 40.000 €.', 'Prüfe nach der Sortierung, ab welchem Artikel 75 % bzw. 95 % kumuliert überschritten werden.'],
          solution: `**Verbrauchswerte und Sortierung:**

| Rang | Artikel | Wert | Wertanteil | kumuliert | Menge | Mengenanteil | Klasse |
|---:|---|---:|---:|---:|---:|---:|---|
| 1 | P1 | 45.000 € | 37,50 % | 37,50 % | 400 | 2,00 % | A |
| 2 | P2 | 40.000 € | 33,33 % | 70,83 % | 50 | 0,25 % | A |
| 3 | P7 | 8.000 € | 6,67 % | 77,50 % | 800 | 4,00 % | B |
| 4 | P10 | 6.500 € | 5,42 % | 82,92 % | 50 | 0,25 % | B |
| 5 | P3 | 6.000 € | 5,00 % | 87,92 % | 1.200 | 6,00 % | B |
| 6 | P4 | 5.000 € | 4,17 % | 92,08 % | 4.000 | 20,00 % | B |
| 7 | P6 | 4.000 € | 3,33 % | 95,42 % | 1.000 | 5,00 % | C |
| 8 | P5 | 3.000 € | 2,50 % | 97,92 % | 5.000 | 25,00 % | C |
| 9 | P8 | 1.500 € | 1,25 % | 99,17 % | 5.000 | 25,00 % | C |
| 10 | P9 | 1.000 € | 0,83 % | 100,00 % | 2.500 | 12,50 % | C |

**Gesamtverbrauchswert:** **120.000 €** (Gesamtmenge 20.000 Stück)

**Wertanteil P1:** 45.000 € ÷ 120.000 € × 100 = **37,50 %**

**A-Klasse (P1, P2):** (45.000 € + 40.000 €) ÷ 120.000 € × 100 = **70,83 %** (P7 würde mit 77,50 % die 75-%-Grenze überschreiten → B)

**C-Klasse (P6, P5, P8, P9):** (1.000 + 5.000 + 5.000 + 2.500) Stück ÷ 20.000 Stück × 100 = 13.500 ÷ 20.000 × 100 = **67,50 %** (P6 überschreitet mit 95,42 % die 95-%-Grenze → C)

Ergebnis: A = 70,83 % Wert bei 2,25 % Menge; B = 21,25 % Wert bei 30,25 % Menge; C = 7,92 % Wert bei 67,50 % Menge.`
        },
        {
          id: 'lf12-jit-abc-a8-2', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Artikel gehören zur **B-Klasse**? (Mehrfachauswahl)',
          options: ['P7 Wischerblätter', 'P10 Ölwannen', 'P2 Steuergeräte', 'P3 Ölfilter', 'P4 Dichtungen', 'P6 Lampen'],
          correct: [0, 1, 3, 4],
          hints: ['B liegt zwischen kumuliert 75 % und 95 %.', 'Schau in der sortierten Tabelle nach Rang 3 bis 6.'],
          solution: 'B-Klasse: **P7, P10, P3, P4** (kumuliert 77,50 % bis 92,08 %). P2 ist A-Gut, P6 liegt mit kumuliert 95,42 % über der 95-%-Grenze und ist C-Gut.'
        },
        {
          id: 'lf12-jit-abc-a8-3', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Empfehlungen an den Kunden sind sinnvoll? (Mehrfachauswahl)',
          options: [
            'Für P1 und P2 genaue Bedarfsplanung, häufige Lieferungen mit kleinen Mengen und intensive Preisverhandlungen.',
            'Für P5, P8 und P9 Vorratsbeschaffung mit Rahmenvertrag, z. B. über Kanban oder VMI.',
            'Für alle Artikel denselben Aufwand bei Bestellung und Inventur, weil alle Teile gleich wichtig sind.',
            'Für C-Güter auf Sicherheitsbestände verzichten, weil sie billig sind.'
          ],
          correct: [0, 1],
          hints: ['Wo lohnt sich viel Aufwand, wo wenig?', 'Auch ein fehlendes C-Teil kann eine Reparatur verzögern.'],
          solution: 'Richtig sind **A und B**. A-Güter binden viel Kapital: genau planen, knapp bevorraten, gut verhandeln. C-Güter: einfache Verfahren, Vorrat, Rahmenverträge, Kanban/VMI. **C** widerspricht dem Sinn der ABC-Analyse (Aufwand nach Bedeutung steuern). **D** ist falsch: Gerade bei C-Gütern sind Sicherheitsbestände billig und verhindern Fehlmengen.'
        }
      ]
    },
    {
      id: 'lf12-jit-abc-a9', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Artikel hat einen **hohen Verbrauchswert** und einen **sehr gleichmäßigen, gut vorhersagbaren** Verbrauch. Wie wird er eingeordnet und welches Beschaffungsprinzip passt am besten?',
      options: [
        'CZ – Vorratsbeschaffung',
        'AX – Just-in-time',
        'AZ – Einzelbeschaffung im Bedarfsfall',
        'CX – Vorratsbeschaffung mit hohem Sicherheitsbestand'
      ],
      correct: [1],
      hints: ['Hoher Wert = A; gleichmäßiger Verbrauch = X.', 'Bei hohem Wert lohnt es sich, Bestände zu sparen.'],
      solution: '**AX**: hoher Wert (A) und konstanter Verbrauch (X). Hier lohnt JIT am meisten: Die Einsparung bei der Kapitalbindung ist groß, und der gleichmäßige Bedarf ist gut planbar.'
    },
    {
      id: 'lf12-jit-abc-a10', type: 'text', difficulty: 3, points: 3,
      q: 'Ein Kunde aus der Automobilzulieferindustrie fragt, ob er nach den Lieferkettenstörungen der letzten Jahre von reinem JIT wieder zu mehr Vorratshaltung wechseln soll. Beurteile die beiden Beschaffungsprinzipien unter den Kategorien Kosten, Produktionssicherheit und Umweltschutz.',
      model: 'Kosten: JIT senkt Kapitalbindung und Lagerkosten, verursacht aber mehr Transportkosten; Vorratshaltung bindet Kapital und Lagerfläche, ermöglicht aber Mengenrabatte und weniger Transporte. Produktionssicherheit: Vorräte puffern Störungen wie Staus, Streiks oder Lieferantenausfälle ab; JIT ist störanfällig, weil kein Puffer da ist. Umweltschutz: JIT führt zu vielen kleinen Fahrten mit höheren Emissionen, Vorratshaltung bündelt Transporte, braucht aber Lagerfläche und Energie. Empfehlung: Mischform, z. B. JIT für planbare A-Güter aus der Nähe, höhere Sicherheitsbestände für kritische oder weit entfernt beschaffte Teile.',
      criteria: [
        { text: 'vergleicht die Kosten (Kapitalbindung/Lager gegen Transport)', keywords: ['Kapital|Lagerkosten|Zins', 'Transport|Fracht|Rabatt'], points: 1 },
        { text: 'bewertet die Produktionssicherheit (Puffer, Störanfälligkeit)', keywords: ['Puffer|Sicherheit|Stillstand|stör|Ausfall'], points: 1 },
        { text: 'bewertet den Umweltschutz (Fahrten, Emissionen)', keywords: ['Umwelt|Emission|CO|Fahrten|Verkehr'], points: 1 }
      ],
      hints: ['Gehe die drei Kategorien nacheinander durch.', 'Eine Mischform ist als Empfehlung zulässig.'],
      solution: '**Kosten**: JIT – geringe Kapitalbindung, aber hohe Transportkosten; Vorrat – hohe Lagerkosten, aber Rabatte und gebündelte Transporte. **Produktionssicherheit**: Vorrat puffert Störungen, JIT ist anfällig. **Umwelt**: JIT = viele Fahrten, mehr Emissionen; Vorrat bündelt Verkehr. Sinnvolle Empfehlung: **Mischform** nach ABC/XYZ und Risiko der Lieferquelle.'
    },
    {
      id: 'lf12-jit-abc-a11', type: 'mc', difficulty: 1, points: 1,
      q: 'Womit beginnt die ABC-Analyse?',
      options: [
        'Mit der Sortierung der Artikel nach der Jahresmenge',
        'Mit der Berechnung des Jahresverbrauchswerts je Artikel (Menge × Preis)',
        'Mit dem Festlegen der Lagerplätze',
        'Mit der Kumulation der Mengenanteile'
      ],
      correct: [1],
      hints: ['Sortiert wird nach dem Wert, nicht nach der Menge.', 'Den Wert muss man erst ausrechnen.'],
      solution: 'Zuerst wird der **Jahresverbrauchswert** je Artikel berechnet (Menge × Preis). Danach wird nach diesem Wert absteigend sortiert, Wert- und Mengenanteile werden berechnet und kumuliert, zuletzt werden die Klassen gebildet.'
    }
  ],
  quiz: ['lf12-jit-abc-a1', 'lf12-jit-abc-a2', 'lf12-jit-abc-a4', 'lf12-jit-abc-a5', 'lf12-jit-abc-a8'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 12, Inhalte: Vorratsbeschaffung, Just-in-Time, ABC-Analyse' },
    { title: 'Umsatzsteuergesetz § 6b Konsignationslagerregelung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/ustg_1980/__6b.html', asOf: '2026' }
  ],
  links: ['lf12-bestellmenge', 'lf12-logistiksysteme', 'lf09-lagerorganisation', 'lf04-frachtvertrag-haftung', 'lf03-inventur-bilanz']
};
