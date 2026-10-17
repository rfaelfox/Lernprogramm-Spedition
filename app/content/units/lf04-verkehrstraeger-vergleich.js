export default {
  id: 'lf04-verkehrstraeger-vergleich',
  area: 'LF04',
  topic: 'lf04-verkehrstraeger',
  title: 'Verkehrsträger im Vergleich',
  status: 'vollstaendig',
  minutes: 35,
  validity: null,
  goals: [
    'Ich kann die Verkehrsträger Straße, Schiene, Binnenschiff, See, Luft und Rohrleitung unterscheiden.',
    'Ich kann Vor- und Nachteile der Verkehrsträger anhand von Kriterien wie Kosten, Schnelligkeit, Netzdichte, Massenleistungsfähigkeit, Umwelt und Zuverlässigkeit beurteilen.',
    'Ich kann den kombinierten Verkehr mit Vorlauf, Hauptlauf und Nachlauf erklären.',
    'Ich kann für einen Kundenauftrag begründet einen geeigneten Verkehrsträger auswählen, auch mit einer Nutzwertanalyse.'
  ],
  simple: `# Worum geht es?

Ein **Verkehrsträger** ist der Weg, auf dem Güter befördert werden: Straße, Schiene, Wasserstraße (Binnenschiff), Meer (Seeschiff), Luft (Flugzeug) und Rohrleitung (Pipeline).

Als Spediteur suchst du für jeden Auftrag den passenden Verkehrsträger. Dafür fragst du:

- **Was** wird befördert? (Art, Menge, Gewicht, Wert, Empfindlichkeit, Gefahrgut)
- **Wohin** und **wie weit**? (Entfernung, Gleisanschluss, Hafen, Flughafen)
- **Wie schnell** muss es ankommen?
- **Was darf es kosten?**
- **Wie umweltfreundlich** soll der Transport sein?

**Faustregeln:**

- **Lkw:** flexibel, kommt fast überall hin (Haus-zu-Haus), gut für kleinere Mengen und mittlere Entfernungen.
- **Bahn:** gut für große Mengen über weite Strecken im Inland, umweltfreundlich.
- **Binnenschiff:** sehr günstig für Massengut (Kohle, Erz, Getreide, Container), aber langsam und nur an Wasserstraßen.
- **Seeschiff:** für den Welthandel über die Ozeane, sehr große Mengen, niedrige Kosten je Tonne, lange Laufzeit.
- **Flugzeug:** am schnellsten, aber teuer; für eilige, wertvolle, leichte Güter.
- **Rohrleitung:** für Flüssigkeiten und Gase (Rohöl, Erdgas) in großen Mengen, dauerhaft auf einer festen Strecke.

Oft werden Verkehrsträger **kombiniert**: Der Lkw holt ab, die Bahn fährt die lange Strecke, ein Lkw stellt zu. Das nennt man **kombinierten Verkehr**.`,
  deep: `# Beurteilungskriterien

| Kriterium | Bedeutung |
|---|---|
| Kosten | Fracht je Tonne oder Sendung, einschließlich Umschlag sowie Vor- und Nachlauf |
| Schnelligkeit | Gesamtlaufzeit von Haus zu Haus, nicht nur die reine Fahrzeit |
| Netzdichte | Wie viele Orte ohne Umladen erreichbar sind (Haus-zu-Haus-Fähigkeit) |
| Massenleistungsfähigkeit | Wie viel Gut mit einer Einheit befördert werden kann |
| Umwelt/CO2 | Emissionen je Tonnenkilometer, Lärm, Flächenverbrauch |
| Zuverlässigkeit | Pünktlichkeit, Unabhängigkeit von Wetter, Stau, Niedrigwasser |
| Sicherheit | Risiko von Beschädigung, Verlust und Diebstahl |
| Flexibilität | Kurzfristige Verfügbarkeit, Anpassung an Mengen und Zeiten |

# Vergleichstabelle (vereinfachte Einschätzung)

| Kriterium | Straße | Schiene | Binnenschiff | See | Luft | Rohrleitung |
|---|---|---|---|---|---|---|
| Kosten je t | mittel | niedrig bis mittel | sehr niedrig | sehr niedrig | sehr hoch | sehr niedrig (Betrieb) |
| Schnelligkeit | hoch (Kurz-/Mittelstrecke) | mittel | niedrig | niedrig | sehr hoch | gleichmäßig, langsam |
| Netzdichte | sehr hoch | mittel | niedrig | nur Häfen | nur Flughäfen | sehr niedrig |
| Massenleistung | niedrig | hoch | sehr hoch | sehr hoch | niedrig | sehr hoch |
| Umwelt/CO2 je tkm | eher hoch | niedrig | niedrig | niedrig | sehr hoch | niedrig |
| Zuverlässigkeit | mittel (Stau) | mittel bis hoch | mittel (Wasserstand) | mittel (Wetter, Häfen) | hoch | sehr hoch |
| Haus-zu-Haus | ja | nur mit Gleisanschluss | nein | nein | nein | nein |

> Die Tabelle zeigt typische Tendenzen. Im Einzelfall entscheiden Strecke, Gut, Auslastung und Infrastruktur.

# Die Verkehrsträger im Einzelnen

**Straßengüterverkehr**
- Vorteile: dichtestes Netz, Haus-zu-Haus ohne Umladen, flexibel, schnell auf kurzen und mittleren Strecken, für fast alle Güter geeignet.
- Nachteile: geringe Massenleistung je Fahrzeug, Stau, Lenk- und Ruhezeiten des Fahrers, Maut, höhere CO2-Emissionen je tkm.

**Schienengüterverkehr**
- Vorteile: große Mengen je Zug, umweltfreundlich, auf langen Strecken wirtschaftlich, unabhängig vom Straßenstau, kein Sonntagsfahrverbot wie beim Lkw.
- Nachteile: weniger dichtes Netz, meist Vor- und Nachlauf mit Lkw nötig, Umschlagkosten, weniger flexibel, Trassen müssen geplant werden.

**Binnenschifffahrt**
- Vorteile: sehr hohe Massenleistung, niedrige Kosten je Tonne, gut für Massengut, Schwer- und Großraumgut und Container.
- Nachteile: langsam, nur an Wasserstraßen, abhängig von Wasserstand (Niedrig- und Hochwasser) und Eis, Schleusen.

**Seeschifffahrt**
- Vorteile: einziges wirtschaftliches Massenverkehrsmittel zwischen Kontinenten, sehr große Mengen (Containerschiffe, Massengutfrachter, Tanker), niedrige Kosten je Container.
- Nachteile: lange Laufzeiten, Vor- und Nachlauf zu den Häfen nötig, Verspätungen durch Wetter und Hafenstaus.

**Luftfrachtverkehr**
- Vorteile: am schnellsten auf langen Strecken, hohe Sicherheit, gut für eilige, hochwertige oder verderbliche Güter (Ersatzteile, Medikamente, Elektronik).
- Nachteile: sehr hohe Kosten, begrenzte Laderaumgröße und Gewicht, hohe CO2-Emissionen, Sicherheitsvorschriften, Vor- und Nachlauf zum Flughafen.

**Rohrleitungstransport**
- Vorteile: ununterbrochener Fluss großer Mengen, kaum Personal, wetterunabhängig, sehr zuverlässig.
- Nachteile: nur für Flüssigkeiten und Gase (teils Feststoffe in Flüssigkeit), sehr hohe Baukosten, feste Strecke.

# Kombinierter Verkehr (KV)

Im **kombinierten Verkehr** wird die Ladeeinheit (Container, Wechselbrücke, Sattelauflieger) gewechselt, nicht das Gut selbst umgeladen.

- **Vorlauf:** Lkw bringt die Ladeeinheit vom Versender zum Terminal.
- **Hauptlauf:** Die lange Strecke übernimmt Bahn, Binnenschiff oder Seeschiff.
- **Nachlauf:** Lkw bringt die Ladeeinheit vom Zielterminal zum Empfänger.

Formen:
- **Unbegleiteter KV:** nur die Ladeeinheit fährt mit (Container, Wechselbrücke, kranbarer Sattelauflieger).
- **Begleiteter KV (Rollende Landstraße):** der ganze Lkw fährt auf dem Zug, der Fahrer reist im Begleitwagen mit.

Vorteile: Kombination aus Flexibilität der Straße und Massenleistung und Umweltvorteil von Schiene oder Schiff. Nachteile: Umschlagzeiten und Umschlagkosten, Abhängigkeit von Terminalöffnungszeiten und Fahrplänen.

# Entscheidung für einen Kundenauftrag

1. Auftragsdaten aufnehmen: Gut, Gewicht, Volumen, Wert, Termin, Abgangs- und Empfangsort, Sonderanforderungen.
2. Ungeeignete Verkehrsträger ausschließen (z. B. keine Wasserstraße, Gut nicht luftfrachtfähig, Termin zu knapp).
3. Verbleibende Alternativen nach Kriterien vergleichen, bei Bedarf mit einer **Nutzwertanalyse**: Kriterien gewichten, Punkte vergeben, Punkte mal Gewicht, Summe bilden.
4. Entscheidung begründen und dem Kunden ein Angebot machen.`,
  terms: [
    { term: 'Verkehrsträger', def: 'Verkehrsweg mit den zugehörigen Verkehrsmitteln: Straße, Schiene, Binnenwasserstraße, See, Luft, Rohrleitung.' },
    { term: 'Verkehrsmittel', def: 'Das Fahrzeug, mit dem befördert wird, z. B. Lkw, Güterzug, Binnenschiff, Containerschiff, Frachtflugzeug.' },
    { term: 'Netzdichte', def: 'Maß dafür, wie viele Orte ein Verkehrsträger ohne Umladen erreicht. Die Straße hat die höchste Netzdichte.' },
    { term: 'Massenleistungsfähigkeit', def: 'Fähigkeit, große Gütermengen mit einer Beförderungseinheit zu transportieren (z. B. Binnenschiff, Güterzug).' },
    { term: 'Tonnenkilometer (tkm)', def: 'Maßeinheit für Beförderungsleistung: Gewicht in Tonnen mal Entfernung in km. 10 t über 100 km = 1.000 tkm.' },
    { term: 'Kombinierter Verkehr', def: 'Transportkette mit mindestens zwei Verkehrsträgern, bei der die Ladeeinheit umgeschlagen wird, nicht das Gut selbst.' },
    { term: 'Vorlauf / Hauptlauf / Nachlauf', def: 'Abschnitte einer Transportkette: Abholung zum Terminal, lange Strecke, Zustellung vom Terminal zum Empfänger.' },
    { term: 'Rollende Landstraße', def: 'Begleiteter kombinierter Verkehr: Kompletter Lkw wird auf Niederflurwagen mit der Bahn befördert, der Fahrer fährt mit.' },
    { term: 'Haus-zu-Haus-Verkehr', def: 'Beförderung vom Versender direkt bis zum Empfänger ohne Umladen.' },
    { term: 'Nutzwertanalyse', def: 'Entscheidungsverfahren: Kriterien werden gewichtet, Alternativen mit Punkten bewertet, die gewichtete Summe zeigt die beste Alternative.' }
  ],
  example: `# Praxisbeispiel: Stahlcoils von Dillingen nach Duisburg

Die Spedition Saar-Logistik erhält eine Anfrage: 900 t Stahlcoils sollen innerhalb von zwei Wochen von Dillingen (Saar) nach Duisburg.

- **Lkw:** Ein Lkw lädt etwa 24 t. Für 900 t wären rund 38 Fahrten nötig. Das ist teuer, belastet die Straße und erzeugt viel CO2.
- **Bahn:** Das Werk hat einen Gleisanschluss, der Empfänger ebenfalls. Ein Ganzzug kann die Menge in wenigen Umläufen befördern. Kein Umladen nötig.
- **Binnenschiff:** Saar, Mosel und Rhein verbinden die Orte. Sehr günstig je Tonne, aber längere Laufzeit und Risiko Niedrigwasser.
- **Luft:** völlig ungeeignet (Gewicht, Kosten).

**Entscheidung:** Bahn, weil Gleisanschlüsse auf beiden Seiten vorhanden sind, die Menge groß ist und die Frist zwei Wochen beträgt. Das Binnenschiff ist eine Alternative, wenn der Wasserstand stimmt und der Termin Puffer hat.

# Gegenbeispiel

Ein Autohaus in Saarlouis braucht morgen früh ein Ersatzteil (8 kg) aus Stuttgart. Hier gewinnt der **Lkw** (Kurier- oder Expressdienst): schnell, Haus-zu-Haus, kleine Menge. Bei einem dringenden Ersatzteil aus den USA wäre **Luftfracht** die Wahl.`,
  rules: [
    'Je größer die Menge und je länger die Strecke, desto eher lohnen sich Bahn, Binnenschiff oder Seeschiff.',
    'Je eiliger und wertvoller das Gut im Verhältnis zum Gewicht, desto eher kommt Luftfracht in Frage.',
    'Nur die Straße schafft fast immer Haus-zu-Haus ohne Umladen. Alle anderen brauchen meist Vor- und Nachlauf.',
    'Laufzeit und Kosten immer für die ganze Kette vergleichen: Vorlauf + Umschlag + Hauptlauf + Umschlag + Nachlauf.',
    'Im kombinierten Verkehr wird die Ladeeinheit umgeschlagen, nicht das Gut.'
  ],
  summary: `- Sechs Verkehrsträger: Straße, Schiene, Binnenschiff, See, Luft, Rohrleitung.
- Wichtige Kriterien: Kosten, Schnelligkeit, Netzdichte, Massenleistungsfähigkeit, Umwelt/CO2, Zuverlässigkeit, Sicherheit, Flexibilität.
- Straße: flexibel und dichtes Netz, aber geringe Massenleistung und höhere CO2-Werte.
- Schiene und Binnenschiff: große Mengen, günstig und umweltfreundlich, aber Netz und Laufzeit sind Grenzen.
- See: Welthandel mit großen Mengen; Luft: schnell und teuer.
- Kombinierter Verkehr verbindet die Vorteile: Lkw im Vor- und Nachlauf, Bahn oder Schiff im Hauptlauf.
- Die Entscheidung richtet sich nach dem konkreten Auftrag und wird begründet, z. B. mit einer Nutzwertanalyse.`,
  mistakes: [
    { wrong: 'Nur die reine Fahrzeit vergleichen.', right: 'Die Haus-zu-Haus-Laufzeit zählt, einschließlich Vorlauf, Umschlag und Nachlauf.' },
    { wrong: 'Die Bahn ist immer billiger als der Lkw.', right: 'Auf kurzen Strecken oder ohne Gleisanschluss machen Umschlag sowie Vor- und Nachlauf die Bahn oft teurer.' },
    { wrong: 'Im kombinierten Verkehr wird das Gut umgeladen.', right: 'Umgeschlagen wird nur die Ladeeinheit (Container, Wechselbrücke, Sattelauflieger); das Gut bleibt darin.' },
    { wrong: 'Luftfracht ist nur für leichte Güter.', right: 'Entscheidend ist das Verhältnis von Eilbedürftigkeit und Wert zu den Kosten. Auch schwere Teile (z. B. Maschinenteile bei Produktionsstillstand) werden geflogen.' },
    { wrong: 'Massenleistungsfähigkeit und Schnelligkeit verwechseln.', right: 'Massenleistung beschreibt die Menge je Beförderungseinheit, Schnelligkeit die Laufzeit.' }
  ],
  flashcards: [
    { q: 'Welcher Verkehrsträger hat die höchste Netzdichte?', a: 'Die Straße. Sie erreicht fast jede Adresse ohne Umladen.' },
    { q: 'Was bedeutet Massenleistungsfähigkeit?', a: 'Die Fähigkeit, große Gütermengen mit einer Beförderungseinheit zu transportieren.' },
    { q: 'Nenne zwei Nachteile der Binnenschifffahrt.', a: 'Langsam, nur an Wasserstraßen, abhängig vom Wasserstand (Niedrig-/Hochwasser) und von Schleusen.' },
    { q: 'Für welche Güter eignet sich Luftfracht?', a: 'Für eilige, hochwertige, verderbliche oder empfindliche Güter mit geringem Gewicht im Verhältnis zum Wert.' },
    { q: 'Was ist kombinierter Verkehr?', a: 'Transport mit mindestens zwei Verkehrsträgern, bei dem die Ladeeinheit umgeschlagen wird, z. B. Lkw – Bahn – Lkw.' },
    { q: 'Was ist die Rollende Landstraße?', a: 'Begleiteter kombinierter Verkehr: Der komplette Lkw fährt auf dem Zug, der Fahrer reist mit.' },
    { q: 'Wie berechnet man Tonnenkilometer?', a: 'Gewicht in t mal Entfernung in km.' },
    { q: 'Wofür wird die Rohrleitung genutzt?', a: 'Für Flüssigkeiten und Gase wie Rohöl, Mineralölprodukte und Erdgas in großen Mengen auf festen Strecken.' },
    { q: 'Welche Schritte hat eine Nutzwertanalyse?', a: 'Kriterien festlegen, gewichten, Alternativen mit Punkten bewerten, Punkte mal Gewicht, Summen vergleichen.' },
    { q: 'Warum wird im Vor- und Nachlauf meist der Lkw eingesetzt?', a: 'Weil nur die Straße die Haus-zu-Haus-Bedienung mit hoher Netzdichte und Flexibilität bietet.' }
  ],
  tasks: [
    {
      id: 'lf04-verkehrstraeger-vergleich-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Welcher Verkehrsträger bietet in der Regel als einziger einen Haus-zu-Haus-Verkehr ohne Umladen?',
      options: ['Schiene', 'Straße', 'Binnenschiff', 'Luft'],
      correct: [1],
      hints: ['Überlege, welcher Verkehrsträger die meisten Adressen direkt erreicht.', 'Nicht jeder Betrieb hat einen Gleisanschluss oder einen Hafen.'],
      solution: '**Straße.** Sie hat die höchste Netzdichte. Bahn geht nur bei Gleisanschluss auf beiden Seiten ohne Umladen; Binnenschiff und Flugzeug brauchen immer Vor- und Nachlauf.'
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zur Binnenschifffahrt sind richtig? (Mehrfachauswahl)',
      options: [
        'Sie hat eine sehr hohe Massenleistungsfähigkeit.',
        'Sie ist bei Niedrigwasser nur eingeschränkt nutzbar.',
        'Sie ist der schnellste Verkehrsträger im Inland.',
        'Sie eignet sich gut für Massengut wie Erz, Kohle oder Getreide.',
        'Sie erreicht fast jeden Ort ohne Umladen.'
      ],
      correct: [0, 1, 3],
      hints: ['Denke an Ladekapazität und Abhängigkeit vom Wasser.', 'Zwei Aussagen beschreiben eigentlich Stärken des Lkw.'],
      solution: 'Richtig sind **1, 2 und 4**. Das Binnenschiff befördert sehr große Mengen günstig, ist aber vom Wasserstand abhängig. Es ist langsam (Aussage 3 falsch) und nur an Wasserstraßen nutzbar (Aussage 5 falsch).'
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a3', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jedem Auftrag den am besten geeigneten Verkehrsträger zu.',
      pairs: [
        ['2.000 t Getreide von Mannheim nach Rotterdam, Termin flexibel', 'Binnenschiff'],
        ['Dringende Medikamente von Frankfurt nach Singapur', 'Luft'],
        ['40 Container von Hamburg nach Shanghai', 'See'],
        ['3 Paletten Möbel von Saarbrücken nach Trier', 'Straße'],
        ['Rohöl vom Hafen zur Raffinerie, dauerhaft große Mengen', 'Rohrleitung']
      ],
      hints: ['Achte auf Menge, Eile und Entfernung.', 'Für Flüssigkeiten in dauerhaft großen Mengen gibt es einen eigenen Verkehrsträger.'],
      solution: 'Getreide in großer Menge mit flexiblem Termin: **Binnenschiff** (Rhein). Eilige Medikamente nach Asien: **Luft**. Container über den Ozean: **See**. Wenige Paletten auf kurzer Strecke: **Straße**. Rohöl dauerhaft: **Rohrleitung**.'
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a4', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze den Text zum kombinierten Verkehr.',
      text: 'Im kombinierten Verkehr holt meist ein Lkw die Ladeeinheit beim Versender ab. Dieser Abschnitt heißt [[Vorlauf]]. Die lange Strecke übernimmt z. B. die Bahn im [[Hauptlauf]]. Die Zustellung zum Empfänger heißt [[Nachlauf]]. Umgeschlagen wird nicht das Gut, sondern die [[Ladeeinheit|Ladeeinheiten]].',
      hints: ['Die drei Abschnitte heißen ähnlich: Vor-, Haupt-, Nach-.', 'Beispiele für das Umgeschlagene: Container, Wechselbrücke.'],
      solution: 'Vorlauf – Hauptlauf – Nachlauf. Umgeschlagen wird die **Ladeeinheit** (Container, Wechselbrücke, Sattelauflieger), das Gut bleibt darin.'
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a5', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Schritte der Verkehrsträgerentscheidung in die richtige Reihenfolge.',
      items: [
        'Auftragsdaten aufnehmen (Gut, Gewicht, Termin, Orte)',
        'Ungeeignete Verkehrsträger ausschließen',
        'Alternativen nach gewichteten Kriterien bewerten',
        'Entscheidung begründen und Angebot an den Kunden senden'
      ],
      hints: ['Zuerst brauchst du Informationen.', 'Erst nach dem Aussortieren lohnt sich eine genaue Bewertung.'],
      solution: 'Erst Daten aufnehmen, dann offensichtlich ungeeignete Verkehrsträger ausschließen, dann die übrigen bewerten (z. B. Nutzwertanalyse), zuletzt begründete Entscheidung und Angebot.'
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a6', type: 'calc', difficulty: 2, points: 4,
      q: 'Ein Kunde möchte 24 t Ware über 600 km befördern lassen. Vergleiche die CO2-Emissionen von Lkw und Bahn. Verwende diese **angenommenen Beispielwerte** (keine amtlichen Werte): Lkw 80 g CO2 je tkm, Bahn 20 g CO2 je tkm. Berechne die Beförderungsleistung, die Emissionen beider Verkehrsträger und die Einsparung in kg.',
      formula: 'tkm = t × km; CO2 = tkm × Emissionsfaktor; Einsparung = CO2 Lkw − CO2 Bahn',
      fields: [
        { id: 'tkm', label: 'Beförderungsleistung', unit: 'tkm', answer: 14400, tol: 0.5 },
        { id: 'lkw', label: 'CO2 Lkw', unit: 'kg', answer: 1152, tol: 0.5 },
        { id: 'bahn', label: 'CO2 Bahn', unit: 'kg', answer: 288, tol: 0.5 },
        { id: 'diff', label: 'Einsparung durch die Bahn', unit: 'kg', answer: 864, tol: 0.5 }
      ],
      hints: ['Zuerst tkm berechnen: Gewicht mal Entfernung.', 'Gramm in Kilogramm umrechnen: durch 1.000 teilen.'],
      solution: `**Formel:** tkm = Gewicht (t) × Entfernung (km)

1. Beförderungsleistung: 24 t × 600 km = **14.400 tkm**
2. Lkw: 14.400 tkm × 80 g/tkm = 1.152.000 g = **1.152 kg CO2**
3. Bahn: 14.400 tkm × 20 g/tkm = 288.000 g = **288 kg CO2**
4. Einsparung: 1.152 kg − 288 kg = **864 kg CO2** (das sind 75 % weniger)

Hinweis: Die Emissionsfaktoren sind angenommene Beispielwerte. Reale Werte hängen von Fahrzeug, Auslastung, Strommix und Berechnungsmethode ab.`
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a7', type: 'calc', difficulty: 2, points: 4,
      q: 'Für einen Sattelauflieger von Saarbrücken nach Hamburg (720 km) liegen zwei Angebote vor:\n\n- **Lkw direkt:** 1,45 € je km\n- **Kombinierter Verkehr:** Vorlauf zum Terminal 135,00 €, Bahn-Hauptlauf 690,00 €, Nachlauf 155,00 €\n\nBerechne die Kosten beider Varianten und die Differenz.',
      formula: 'Kosten Lkw = km × €/km; Kosten KV = Vorlauf + Hauptlauf + Nachlauf',
      fields: [
        { id: 'lkw', label: 'Kosten Lkw direkt', unit: '€', answer: 1044, tol: 0.01 },
        { id: 'kv', label: 'Kosten kombinierter Verkehr', unit: '€', answer: 980, tol: 0.01 },
        { id: 'diff', label: 'Ersparnis durch KV', unit: '€', answer: 64, tol: 0.01 }
      ],
      hints: ['Beim Lkw: Kilometer mal Kilometersatz.', 'Beim KV alle drei Abschnitte addieren.'],
      solution: `1. Lkw direkt: 720 km × 1,45 €/km = **1.044,00 €**
2. Kombinierter Verkehr: 135,00 € + 690,00 € + 155,00 € = **980,00 €**
3. Differenz: 1.044,00 € − 980,00 € = **64,00 €** zugunsten des KV

Zusätzlich spart der KV CO2 und Lenkzeit. Dagegen stehen die Abhängigkeit vom Bahnfahrplan und eventuell eine längere Laufzeit.`
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a8', type: 'calc', difficulty: 3, points: 5,
      q: 'Nutzwertanalyse für einen Kundenauftrag. Gewichtung: Kosten 40 %, Schnelligkeit 30 %, Umwelt 20 %, Zuverlässigkeit 10 %. Punkte (1 = schlecht, 5 = sehr gut):\n\n| Kriterium | Lkw | Bahn |\n|---|---|---|\n| Kosten | 3 | 4 |\n| Schnelligkeit | 5 | 3 |\n| Umwelt | 2 | 5 |\n| Zuverlässigkeit | 4 | 3 |\n\nBerechne die Nutzwerte. Gib im letzten Feld die Differenz Bahn minus Lkw an.',
      formula: 'Nutzwert = Summe (Gewicht × Punkte)',
      fields: [
        { id: 'lkw', label: 'Nutzwert Lkw', unit: 'Punkte', answer: 3.5, tol: 0.01 },
        { id: 'bahn', label: 'Nutzwert Bahn', unit: 'Punkte', answer: 3.8, tol: 0.01 },
        { id: 'diff', label: 'Differenz Bahn − Lkw', unit: 'Punkte', answer: 0.3, tol: 0.01 }
      ],
      hints: ['Gewicht als Dezimalzahl: 40 % = 0,4.', 'Für jede Zeile Gewicht mal Punkte rechnen und dann je Spalte addieren.'],
      solution: `**Lkw:** 0,4 × 3 + 0,3 × 5 + 0,2 × 2 + 0,1 × 4 = 1,2 + 1,5 + 0,4 + 0,4 = **3,5**

**Bahn:** 0,4 × 4 + 0,3 × 3 + 0,2 × 5 + 0,1 × 3 = 1,6 + 0,9 + 1,0 + 0,3 = **3,8**

Differenz: 3,8 − 3,5 = **0,3 Punkte** – die Bahn ist nach dieser Gewichtung die bessere Wahl. Würde der Kunde Schnelligkeit höher gewichten, könnte das Ergebnis kippen.`
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a9', type: 'text', difficulty: 2, points: 4,
      q: 'Ein Kunde fragt, warum du ihm für 18 Paletten von Saarlouis nach Neapel den kombinierten Verkehr statt eines Lkw-Direkttransports empfiehlst. Begründe in 3–5 Sätzen.',
      model: 'Im kombinierten Verkehr fährt der Lkw nur den kurzen Vor- und Nachlauf, die lange Strecke übernimmt die Bahn. Das spart auf der langen Strecke Kosten, Maut und Lenkzeiten des Fahrers. Die Bahn verursacht je Tonnenkilometer deutlich weniger CO2, was für viele Kunden auch ein Nachhaltigkeitsziel ist. Außerdem ist die Bahn nicht vom Straßenstau und von Fahrverboten betroffen. Nachteil ist eine eventuell längere Laufzeit durch Umschlag und Fahrplan, die bei diesem Auftrag aber vertretbar sein muss.',
      criteria: [
        { text: 'nennt die Aufteilung Vorlauf/Hauptlauf/Nachlauf', keywords: ['Vorlauf|Nachlauf|Hauptlauf'], points: 1 },
        { text: 'nennt einen Kostenvorteil auf langer Strecke', keywords: ['Kosten|günstig|Maut|billiger'], points: 1 },
        { text: 'nennt den Umweltvorteil', keywords: ['CO2|Umwelt|Emission'], points: 1 },
        { text: 'nennt einen Nachteil oder eine Voraussetzung', keywords: ['Laufzeit|Umschlag|Fahrplan|Terminal'], points: 1 }
      ],
      hints: ['Teile die Strecke gedanklich in drei Abschnitte.', 'Denke an Kosten, Umwelt und Lenkzeiten – und an einen Nachteil.'],
      solution: 'Siehe Musterlösung: Lkw nur im Vor- und Nachlauf, Bahn auf der langen Strecke; Vorteile bei Kosten, Maut, Lenkzeiten, CO2 und Stauunabhängigkeit; Nachteil: Umschlag- und Fahrplanabhängigkeit.'
    },
    {
      id: 'lf04-verkehrstraeger-vergleich-a10', type: 'case', difficulty: 3, points: 8,
      q: 'Fallsituation: Auftrag der Maschinenbau GmbH',
      intro: 'Die Maschinenbau GmbH in Homburg (Saar) muss ein Ersatzteil (Gewicht 350 kg, Wert 48.000 €) an einen Kunden in Chicago liefern. Beim Kunden steht eine Produktionslinie still. Jeder Tag Stillstand kostet den Kunden etwa 25.000 €. Alternativ fragt die GmbH, wie sie 12 Maschinen (je 9 t) für ein Projekt in sechs Monaten nach Chicago bringen soll.',
      parts: [
        {
          id: 'lf04-verkehrstraeger-vergleich-a10a', type: 'mc', difficulty: 2, points: 2,
          q: 'Welcher Hauptlauf-Verkehrsträger ist für das Ersatzteil am besten geeignet?',
          options: ['Seeschiff', 'Luftfracht', 'Binnenschiff und Seeschiff', 'Lkw'],
          correct: [1],
          hints: ['Wie teuer ist ein Tag Stillstand?', 'Über den Atlantik bleiben nur See oder Luft.'],
          solution: '**Luftfracht.** Die hohen Stillstandskosten (25.000 € pro Tag) übersteigen die Mehrkosten der Luftfracht bei Weitem. Das Seeschiff bräuchte mehrere Wochen.'
        },
        {
          id: 'lf04-verkehrstraeger-vergleich-a10b', type: 'mc', difficulty: 2, points: 2,
          q: 'Welcher Hauptlauf-Verkehrsträger eignet sich für die 12 Maschinen mit sechs Monaten Vorlauf?',
          options: ['Luftfracht', 'Seeschiff (z. B. im Container oder als Stückgut)', 'Rohrleitung', 'Kurierdienst'],
          correct: [1],
          hints: ['Gesamtgewicht: 12 × 9 t.', 'Die Zeit ist kein Engpass.'],
          solution: '**Seeschiff.** 108 t Schwergut mit viel Zeit: Die Seefracht ist je Tonne deutlich günstiger, und die Laufzeit passt in den Zeitraum.'
        },
        {
          id: 'lf04-verkehrstraeger-vergleich-a10c', type: 'order', difficulty: 2, points: 4,
          q: 'Bringe die Transportkette für das Ersatzteil in die richtige Reihenfolge.',
          items: [
            'Abholung per Lkw in Homburg (Vorlauf)',
            'Umschlag am Abflughafen, z. B. Frankfurt',
            'Flug nach Chicago (Hauptlauf)',
            'Zustellung per Lkw zum Kunden (Nachlauf)'
          ],
          hints: ['Der Lkw kommt zweimal vor.', 'Umschlag passiert zwischen Vorlauf und Hauptlauf.'],
          solution: 'Vorlauf per Lkw zum Flughafen, Umschlag, Hauptlauf per Flugzeug, Nachlauf per Lkw zum Empfänger.'
        }
      ],
      hints: ['Vergleiche Eilbedürftigkeit und Menge der beiden Aufträge.', 'Ein Auftrag ist zeitkritisch, der andere mengenintensiv.'],
      solution: 'Ersatzteil: Luftfracht wegen hoher Stillstandskosten. Maschinen: Seeschiff wegen großer Masse und genügend Zeit. Kette: Lkw – Umschlag – Flugzeug – Lkw.'
    }
  ],
  quiz: [
    'lf04-verkehrstraeger-vergleich-a1',
    'lf04-verkehrstraeger-vergleich-a2',
    'lf04-verkehrstraeger-vergleich-a4',
    'lf04-verkehrstraeger-vergleich-a7',
    'lf04-verkehrstraeger-vergleich-a8'
  ],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 4, Inhalte: Verkehrsträger, Vergleich der Verkehrsträger, kombinierter Verkehr' }
  ],
  links: ['lf04-frachtvertrag-haftung', 'lf05-sammelgut-ablauf']
};
