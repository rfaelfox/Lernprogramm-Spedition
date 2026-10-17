export default {
  id: 'lf15-infrastruktur',
  area: 'LF15',
  topic: 'lf15-infrastruktur',
  title: 'Verkehrsinfrastruktur und Umweltpolitik',
  status: 'pruefen',
  minutes: 45,
  validity: {
    asOf: '2026-10',
    note: 'BEHG § 10: Festpreise 25 € (2021), 30 € (2022, 2023), 45 € (2024), 55 € (2025) je t CO₂; 2026 Versteigerung im Preiskorridor 55–65 €/t. Regelung ab 2027 und Start des EU-ETS 2 (Richtlinie (EU) 2023/959; Verschiebung von 2027 auf 2028 war Ende 2025 politisch vereinbart, aber noch nicht abschließend beschlossen) vor Verwendung prüfen. TEN-V nach VO (EU) 2024/1679: Kernnetz bis 2030, erweitertes Kernnetz bis 2040, Gesamtnetz bis 2050. Mautbefreiung emissionsfreier Lkw bis 30.06.2031 verlängert (BMV, 1.12.2025). Emissionsfaktoren und Kostensätze in den Aufgaben sind ausdrücklich Beispielwerte.'
  },
  goals: [
    'Ich kann die Verkehrsnetze in Deutschland und das transeuropäische Verkehrsnetz (TEN-V) in Grundzügen beschreiben.',
    'Ich kann erklären, wie Verkehrsinfrastruktur finanziert wird, und die Lkw-Maut als Nutzerfinanzierung einordnen.',
    'Ich kann den Begriff externe Kosten erklären und Instrumente zu ihrer Internalisierung nennen.',
    'Ich kann die CO₂-Bepreisung nach BEHG und den geplanten EU-Emissionshandel ETS 2 unterscheiden und ihre Wirkung auf Speditionen abschätzen.',
    'Ich kann CO₂-Emissionen eines Transports mit gegebenen Emissionsfaktoren berechnen und Verkehrsträger vergleichen.',
    'Ich kann Maßnahmen zur Verkehrsverlagerung, zum Lärmschutz und alternative Antriebe beurteilen.'
  ],
  simple: `# Worum geht es?

Ohne Straßen, Schienen, Wasserstraßen, Häfen, Flughäfen und Terminals gibt es keine Logistik. Diese **Verkehrsinfrastruktur** baut und unterhält vor allem der **Staat**. Gleichzeitig verursacht Verkehr **Kosten für die Allgemeinheit**: Lärm, Abgase, Unfälle und Klimaschäden. Der Staat versucht deshalb,

1. die Infrastruktur zu finanzieren (z. B. über **Maut** und Steuern),
2. die Umweltbelastung zu senken (z. B. über einen **CO₂-Preis**),
3. Verkehr auf umweltfreundlichere Verkehrsträger zu **verlagern** (Schiene, Binnenschiff, kombinierter Verkehr),
4. neue **Antriebe** zu fördern (Elektro-Lkw, Wasserstoff).

# Was bedeutet das für eine Spedition?

- Diesel wird durch den CO₂-Preis teurer.
- Die Maut enthält einen CO₂-Anteil: saubere Lkw zahlen weniger.
- Kunden wollen wissen, **wie viel CO₂** ihr Transport verursacht.
- Wer Transporte klug plant (Auslastung, Verkehrsträgerwahl), spart Kosten **und** Emissionen.

# Emissionen grob berechnen

**Beförderungsleistung (tkm) = Gewicht in t × Entfernung in km**

**CO₂-Emission = tkm × Emissionsfaktor (g je tkm)**

Die Emissionsfaktoren in dieser Einheit sind **Beispielwerte**. Für echte Berechnungen gibt es die Norm **DIN EN ISO 14083** mit genauen Regeln.`,
  deep: `# Verkehrsnetze

**Deutschland** (Bund): Bundesfernstraßen (Bundesautobahnen und Bundesstraßen), Schienennetz der bundeseigenen Eisenbahnen, Bundeswasserstraßen. Hinzu kommen Landes- und Kommunalstraßen, See- und Binnenhäfen, Flughäfen und Terminals des kombinierten Verkehrs. Der Bund plant den Aus- und Neubau seiner Netze über den **Bundesverkehrswegeplan** und die Ausbaugesetze.

**Transeuropäisches Verkehrsnetz (TEN-V)**: EU-weites Netz aus Schiene, Straße, Binnenwasserstraßen, Seehäfen, Flughäfen und Terminals. Rechtsgrundlage ist seit 2024 die **Verordnung (EU) 2024/1679**. Es gibt drei Ebenen:

| Ebene | Fertigstellung (Ziel) |
|---|---|
| Kernnetz | 2030 |
| erweitertes Kernnetz | 2040 |
| Gesamtnetz | 2050 |

Auf Kern- und erweitertem Kernnetz legt die Verordnung **neun europäische Verkehrskorridore** fest; fünf davon verlaufen durch Deutschland (Angaben des Bundesverkehrsministeriums). Ziel sind durchgehende, grenzüberschreitende Verbindungen ohne Engpässe. Die EU fördert Projekte über die **Fazilität „Connecting Europe“ (CEF)** auf Antrag.

# Finanzierung der Infrastruktur

| Weg | Beispiel |
|---|---|
| Steuerfinanzierung | Bundeshaushalt (Energiesteuer, Kfz-Steuer fließen in den allgemeinen Haushalt) |
| Nutzerfinanzierung | **Lkw-Maut** auf Bundesautobahnen und Bundesstraßen, Trassenpreise der Bahn, Hafen- und Flughafengebühren |
| EU-Mittel | Zuschüsse aus CEF für TEN-V-Projekte |
| Private Beteiligung | öffentlich-private Partnerschaften (ÖPP) beim Autobahnbau |

Die Lkw-Maut setzt sich aus Teilsätzen für **Infrastruktur, Luftverschmutzung, Lärm und CO₂** zusammen; die Berechnung steht in der Einheit „Fahrzeugkostenrechnung für Lkw“. Emissionsfreie Lkw sind von der Maut befreit; die Befreiung wurde bis **30.06.2031** verlängert (Stand Dezember 2025).

# Externe Kosten

**Externe Kosten** entstehen durch Verkehr, werden aber **nicht vom Verursacher**, sondern von der Allgemeinheit getragen: Klimaschäden, Gesundheitsschäden durch Luftschadstoffe, Lärm, nicht gedeckte Unfallkosten, Schäden an Natur und Landschaft (Flächenverbrauch, Zerschneidung). Weil diese Kosten nicht im Preis stecken, ist umweltschädlicher Verkehr „zu billig“ – es wird mehr gefahren, als volkswirtschaftlich sinnvoll ist.

**Internalisierung** heißt: Die externen Kosten werden dem Verursacher angelastet, z. B. durch
- Maut mit Teilsätzen für Luftverschmutzung, Lärm und CO₂,
- CO₂-Bepreisung von Kraftstoffen,
- Grenzwerte (Euro-Abgasnormen, CO₂-Flottengrenzwerte für Lkw-Hersteller),
- lärmabhängige Trassenpreise bei der Bahn.

Das Umweltbundesamt veröffentlicht Kostensätze dazu (Methodenkonvention); die Zahlen ändern sich mit neuen Erkenntnissen und werden hier nicht als Fakt verwendet.

# CO₂-Bepreisung

**Nationaler Brennstoffemissionshandel (BEHG)**: Seit 2021 müssen Unternehmen, die Brennstoffe wie Diesel, Benzin, Heizöl und Erdgas **in Verkehr bringen**, für die enthaltenen CO₂-Emissionen Zertifikate erwerben. Den Preis geben sie über den Kraftstoffpreis weiter – die Spedition zahlt den CO₂-Preis also **an der Zapfsäule**, nicht direkt an den Staat.

| Jahr | Preis je Tonne CO₂ (§ 10 BEHG) |
|---|---|
| 2021 | 25 € (Festpreis) |
| 2022 | 30 € (Festpreis) |
| 2023 | 30 € (Festpreis) |
| 2024 | 45 € (Festpreis) |
| 2025 | 55 € (Festpreis) |
| 2026 | Versteigerung im Preiskorridor 55–65 € |

**EU-Emissionshandel 2 (ETS 2)**: Mit der Richtlinie (EU) 2023/959 wird ein zweiter EU-Emissionshandel für Brennstoffe in **Gebäuden und Straßenverkehr** eingeführt, der das nationale System ablösen soll. Der Start war für 2027 vorgesehen; Ende 2025 hatten Rat und Parlament eine **Verschiebung auf 2028** angestrebt. Den aktuellen Stand vor der Prüfung bei der Deutschen Emissionshandelsstelle (DEHSt) oder im Gesetz nachsehen. Wichtig ist das Prinzip: Die **Menge** der Zertifikate wird begrenzt (Cap) und sinkt, der **Preis** bildet sich am Markt.

Davon zu unterscheiden ist der **EU-ETS 1** (seit 2005) für Kraftwerke, Industrie, Luftverkehr innerhalb Europas und – schrittweise – den Seeverkehr.

# Emissionen berechnen

Die Norm **DIN EN ISO 14083** (international ISO 14083, veröffentlicht 2023) regelt, wie Treibhausgasemissionen von Transportketten für Güter und Personen berechnet, zugeordnet und berichtet werden – für alle Verkehrsträger einschließlich Umschlag in Hubs und Terminals. Die Grundidee:

1. Transportkette in Abschnitte gliedern (Vorlauf, Hauptlauf, Umschlag, Nachlauf)
2. je Abschnitt die Transportleistung bestimmen (z. B. tkm)
3. mit einem passenden **Emissionsfaktor** multiplizieren (besser: tatsächlichen Kraftstoffverbrauch verwenden)
4. Abschnitte addieren

Zwei Rechenwege:
- **Verbrauchsbasiert**: CO₂ = verbrauchter Kraftstoff (l) × Emissionsfaktor (kg CO₂ je l)
- **Leistungsbasiert**: CO₂ = tkm × Emissionsfaktor (g CO₂ je tkm)

Ergebnisse werden meist als **CO₂e** (CO₂-Äquivalente, alle Treibhausgase umgerechnet) angegeben. Man unterscheidet die Emissionen bei der **Nutzung** (Tank-to-Wheel) und zusätzlich bei der **Herstellung des Kraftstoffs/Stroms** (Well-to-Tank); zusammen ergibt sich **Well-to-Wheel**.

# Verkehrsverlagerung

Ziel der Verkehrspolitik ist es, mehr Güter auf **Schiene und Binnenschiff** zu bringen. Instrumente: Ausbau von Schienennetz und Terminals, Förderung des **kombinierten Verkehrs** (siehe Einheit „Multimodaler und kombinierter Verkehr“), Erleichterungen wie höheres Gesamtgewicht im Vor- und Nachlauf, Trassenpreisförderung, CO₂-Maut. Grenzen: Netzkapazität, Terminalnähe, Laufzeit, Flexibilität (siehe „Verkehrsträger im Vergleich“).

# Lärmschutz

- **Lärmaktionspläne** an Hauptverkehrsstraßen, Haupteisenbahnstrecken, Großflughäfen und in Ballungsräumen (§ 47d BImSchG, Umsetzung der EU-Umgebungslärmrichtlinie), Überprüfung in der Regel alle fünf Jahre
- bauliche Maßnahmen: Lärmschutzwände, lärmmindernder Asphalt, Schallschutzfenster
- verkehrliche Maßnahmen: Tempolimits, Lkw-Durchfahrts- und Nachtfahrverbote in Ortslagen
- Schiene: Verbot lauter Güterwagen auf dem deutschen Netz seit dem Fahrplanwechsel am 13.12.2020 (Schienenlärmschutzgesetz), Umrüstung auf leise Bremssohlen
- Fahrzeugtechnik: leisere Reifen, Elektro-Lkw in der Nachtbelieferung

# Alternative Antriebe

| Antrieb | Vorteile | Nachteile/Grenzen |
|---|---|---|
| **Batterieelektrischer Lkw (BEV)** | lokal emissionsfrei, leise, geringe Energiekosten je km bei günstigem Strom, Mautbefreiung | hoher Anschaffungspreis, Reichweite, Ladeinfrastruktur und Ladezeit, Netzanschluss am Depot |
| **Brennstoffzellen-Lkw (Wasserstoff)** | lokal emissionsfrei, größere Reichweite, kurze Tankzeit | wenige Tankstellen, hohe Kosten, Klimavorteil nur mit „grünem“ Wasserstoff |
| **Bio-LNG/CNG** | Minderung je nach Gasquelle | fossiles LNG bringt kaum Klimavorteil, Tankstellennetz |
| **Erneuerbarer Diesel (HVO)** | in vielen vorhandenen Lkw nutzbar, Minderung je nach Rohstoff | begrenzte Rohstoffe, Preis, Freigabe des Herstellers prüfen |

Für eine Spedition lohnt sich die Umstellung zuerst im **planbaren Verteilerverkehr** mit Rückkehr ins Depot (Laden über Nacht).`,
  terms: [
    { term: 'Verkehrsinfrastruktur', def: 'Ortsfeste Anlagen für den Verkehr: Straßen, Schienenwege, Wasserstraßen, Häfen, Flughäfen, Terminals.' },
    { term: 'TEN-V', def: 'Transeuropäisches Verkehrsnetz der EU (VO (EU) 2024/1679) mit Kernnetz (2030), erweitertem Kernnetz (2040) und Gesamtnetz (2050).' },
    { term: 'Nutzerfinanzierung', def: 'Finanzierung der Infrastruktur durch die Nutzer, z. B. über Lkw-Maut oder Trassenpreise.' },
    { term: 'Externe Kosten', def: 'Kosten des Verkehrs, die nicht der Verursacher trägt, sondern die Allgemeinheit, z. B. Klima-, Gesundheits-, Lärm- und Unfallkosten.' },
    { term: 'Internalisierung', def: 'Anlastung externer Kosten beim Verursacher, z. B. über CO₂-Preis, Maut-Teilsätze oder Grenzwerte.' },
    { term: 'BEHG', def: 'Brennstoffemissionshandelsgesetz: nationaler CO₂-Preis auf Brennstoffe wie Diesel und Benzin seit 2021.' },
    { term: 'EU-ETS 2', def: 'Zweiter EU-Emissionshandel für Brennstoffe in Gebäuden und Straßenverkehr nach Richtlinie (EU) 2023/959; soll das nationale System ablösen.' },
    { term: 'Tonnenkilometer (tkm)', def: 'Maß der Beförderungsleistung: beförderte Tonnen × zurückgelegte Kilometer.' },
    { term: 'Emissionsfaktor', def: 'Menge an CO₂ bzw. CO₂e je Einheit, z. B. je Liter Kraftstoff oder je tkm.' },
    { term: 'CO₂e', def: 'CO₂-Äquivalente: alle Treibhausgase entsprechend ihrer Klimawirkung in CO₂ umgerechnet.' },
    { term: 'DIN EN ISO 14083', def: 'Norm zur Berechnung und Berichterstattung von Treibhausgasemissionen aus Transportketten.' },
    { term: 'Verkehrsverlagerung', def: 'Verlagerung von Gütertransporten von der Straße auf Schiene, Binnenschiff oder kombinierten Verkehr.' }
  ],
  example: `# Saar-Moselle Logistik GmbH, Dillingen – CO₂-Nachweis für einen Kunden (Beispielwerte)

Ein Stahlhändler verlangt für eine regelmäßige Sendung von **18 t** nach Duisburg einen CO₂-Vergleich. Die Spedition rechnet mit **angenommenen Beispiel-Emissionsfaktoren** (keine amtlichen Werte): Lkw 75 g CO₂e je tkm, Bahn 18 g CO₂e je tkm.

**Variante 1: Lkw direkt, 300 km**

18 t × 300 km = 5.400 tkm; 5.400 tkm × 75 g = 405.000 g = **405 kg CO₂e**

**Variante 2: kombinierter Verkehr**

| Abschnitt | km | tkm | Faktor | kg CO₂e |
|---|---:|---:|---:|---:|
| Vorlauf Lkw zum Terminal | 20 | 360 | 75 g | 27,00 |
| Hauptlauf Bahn | 280 | 5.040 | 18 g | 90,72 |
| Nachlauf Lkw | 10 | 180 | 75 g | 13,50 |
| **Summe** | | | | **131,22** |

Einsparung: 405 − 131,22 = **273,78 kg** (rund 68 %). Umschlagemissionen im Terminal sind hier vereinfachend nicht berücksichtigt; nach ISO 14083 gehören sie dazu.

**CO₂-Kostenanteil am Diesel (vereinfacht):** Mit einem angenommenen Emissionsfaktor von 2,6 kg CO₂ je Liter Diesel und einem CO₂-Preis von 55 € je t ergibt sich rechnerisch 2,6 kg × 0,055 €/kg = **0,143 € je Liter** (ohne Umsatzsteuer, ohne Berücksichtigung beigemischter Biokraftstoffe). Diesen Betrag zahlt die Spedition indirekt über den Dieselpreis.`,
  rules: [
    'Beförderungsleistung in tkm = t × km; CO₂ = tkm × Emissionsfaktor.',
    'Beim kombinierten Verkehr alle Abschnitte (Vor-, Haupt-, Nachlauf, Umschlag) einzeln berechnen und addieren.',
    'Externe Kosten trägt die Allgemeinheit; Internalisierung lastet sie dem Verursacher an (Maut, CO₂-Preis, Grenzwerte).',
    'Den CO₂-Preis nach BEHG zahlt die Spedition indirekt über den Kraftstoffpreis.',
    'Zeitabhängige Werte (CO₂-Preis, Mautsätze, Starttermin ETS 2) immer mit Stand angeben und vor Verwendung prüfen.',
    'Emissionsfaktoren nur mit Quelle verwenden; Beispielwerte als solche kennzeichnen.'
  ],
  summary: `- **Infrastruktur**: Bundesfernstraßen, Schiene, Wasserstraßen, Häfen, Terminals; EU-Netz **TEN-V** (Kernnetz 2030, erweitertes Kernnetz 2040, Gesamtnetz 2050, neun Korridore).
- **Finanzierung**: Steuern, Nutzerfinanzierung (**Lkw-Maut** mit Teilsätzen Infrastruktur, Luft, Lärm, CO₂), EU-Mittel, ÖPP.
- **Externe Kosten** (Klima, Luft, Lärm, Unfälle, Natur) → **Internalisierung**.
- **CO₂-Preis**: BEHG seit 2021 (2025: 55 €/t; 2026: 55–65 €/t), künftig **EU-ETS 2** (Start Stand Ende 2025 für 2028 geplant – prüfen).
- **Emissionsberechnung**: tkm × Faktor oder Kraftstoff × Faktor; Norm DIN EN ISO 14083.
- **Verlagerung** auf Schiene/Binnenschiff, **Lärmschutz** (Lärmaktionspläne, leise Güterwagen), **alternative Antriebe** (E-Lkw, Wasserstoff, Bio-LNG, HVO).`,
  mistakes: [
    { wrong: 'Die Spedition überweist den CO₂-Preis nach BEHG an die Emissionshandelsstelle.', right: 'Zertifikate erwerben die Unternehmen, die Brennstoffe in Verkehr bringen. Die Spedition zahlt den CO₂-Preis indirekt über den Dieselpreis.' },
    { wrong: 'Beim kombinierten Verkehr wird nur der Bahnabschnitt berechnet.', right: 'Vor- und Nachlauf per Lkw (und der Umschlag) gehören zur Transportkette und müssen mitgerechnet werden.' },
    { wrong: 'Externe Kosten sind die Kosten, die ein Subunternehmer in Rechnung stellt.', right: 'Externe Kosten sind Kosten, die der Allgemeinheit entstehen und nicht im Preis des Verursachers enthalten sind.' },
    { wrong: '18 t über 300 km ergeben 318 tkm.', right: 'Tonnenkilometer werden multipliziert: 18 t × 300 km = 5.400 tkm.' },
    { wrong: 'Ein Elektro-Lkw ist in jeder Bilanz völlig emissionsfrei.', right: 'Er ist lokal emissionsfrei. Bei Well-to-Wheel-Betrachtung zählen die Emissionen der Stromerzeugung mit.' }
  ],
  flashcards: [
    { q: 'Welche drei Ebenen hat das TEN-V-Netz und bis wann sollen sie fertig sein?', a: 'Kernnetz 2030, erweitertes Kernnetz 2040, Gesamtnetz 2050 (VO (EU) 2024/1679).' },
    { q: 'Was versteht man unter Nutzerfinanzierung der Infrastruktur?', a: 'Die Nutzer bezahlen für die Nutzung, z. B. Lkw-Maut, Trassenpreise, Hafengebühren.' },
    { q: 'Nenne vier Arten externer Kosten des Verkehrs.', a: 'Klimakosten, Luftschadstoffe/Gesundheit, Lärm, Unfallfolgekosten, Natur und Landschaft.' },
    { q: 'Was bedeutet Internalisierung externer Kosten?', a: 'Die Kosten werden dem Verursacher angelastet, z. B. über CO₂-Preis oder Maut.' },
    { q: 'Wie hoch war der CO₂-Festpreis nach BEHG im Jahr 2025?', a: '55 € je Tonne CO₂ (§ 10 BEHG); 2026 Preiskorridor 55–65 €.' },
    { q: 'Welche Sektoren erfasst der EU-ETS 2?', a: 'Brennstoffe für Gebäude und Straßenverkehr (sowie weitere kleinere Sektoren).' },
    { q: 'Wie berechnet man Tonnenkilometer?', a: 'Gewicht in t × Entfernung in km.' },
    { q: 'Welche Norm regelt die Berechnung der Treibhausgasemissionen von Transportketten?', a: 'DIN EN ISO 14083 (ISO 14083:2023).' },
    { q: 'Was bedeutet Well-to-Wheel?', a: 'Emissionen von der Kraftstoff-/Stromherstellung (Well-to-Tank) plus Emissionen im Fahrzeug (Tank-to-Wheel).' },
    { q: 'Was regelt § 47d BImSchG?', a: 'Die Aufstellung von Lärmaktionsplänen.' },
    { q: 'Bis wann sind emissionsfreie Lkw von der Maut befreit (Stand Dezember 2025)?', a: 'Bis 30.06.2031.' }
  ],
  tasks: [
    {
      id: 'lf15-infrastruktur-a1', type: 'calc', difficulty: 2, points: 4,
      q: 'Eine Sendung von **18 t** soll **450 km** befördert werden. Verwende die **angenommenen Beispiel-Emissionsfaktoren** Lkw 75 g CO₂e/tkm und Bahn 18 g CO₂e/tkm (keine amtlichen Werte; Vor- und Nachlauf bleiben hier unberücksichtigt). Berechne die Beförderungsleistung, die Emissionen beider Verkehrsträger in kg und die Einsparung durch die Bahn.',
      formula: 'tkm = t × km; CO₂e = tkm × Emissionsfaktor; Einsparung = CO₂e Lkw − CO₂e Bahn',
      fields: [
        { id: 'tkm', label: 'Beförderungsleistung', unit: 'tkm', answer: 8100, tol: 0.5 },
        { id: 'lkw', label: 'Emissionen Lkw', unit: 'kg CO₂e', answer: 607.5, tol: 0.1 },
        { id: 'bahn', label: 'Emissionen Bahn', unit: 'kg CO₂e', answer: 145.8, tol: 0.1 },
        { id: 'spar', label: 'Einsparung', unit: 'kg CO₂e', answer: 461.7, tol: 0.1 }
      ],
      hints: ['Erst tkm berechnen, dann mit dem Faktor in Gramm multiplizieren.', '1.000 g = 1 kg.'],
      solution: `**Beförderungsleistung:** 18 t × 450 km = **8.100 tkm**

**Lkw:** 8.100 tkm × 75 g/tkm = 607.500 g = **607,5 kg CO₂e**

**Bahn:** 8.100 tkm × 18 g/tkm = 145.800 g = **145,8 kg CO₂e**

**Einsparung:** 607,5 kg − 145,8 kg = **461,7 kg CO₂e**

Hinweis: Die Faktoren sind Beispielwerte. In der Praxis fehlen hier Vor- und Nachlauf sowie der Umschlag – siehe Fallaufgabe.`
    },
    {
      id: 'lf15-infrastruktur-a2', type: 'case', difficulty: 3, points: 9,
      q: 'Fall: Kombinierter Verkehr statt Lkw direkt',
      intro: `Die Spedition Saar-Moselle Logistik GmbH befördert für einen Kunden wöchentlich **18 t** Stahlprodukte von Völklingen nach München. Zwei Varianten (Beispielwerte, Emissionsfaktoren angenommen: Lkw 75 g CO₂e/tkm, Bahn 18 g CO₂e/tkm, Umschlag vereinfacht nicht berücksichtigt):

| Variante | Abschnitte |
|---|---|
| A: Lkw direkt | 460 km |
| B: kombinierter Verkehr | Vorlauf Lkw 30 km → Bahn 420 km → Nachlauf Lkw 25 km |`,
      hints: ['Berechne jeden Abschnitt einzeln.', 'Vor- und Nachlauf werden mit dem Lkw-Faktor gerechnet.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf15-infrastruktur-a2-1', type: 'calc', difficulty: 3, points: 4,
          q: 'Berechne die Emissionen der Variante A, die Emissionen von Vor- und Nachlauf zusammen, des Bahnhauptlaufs und die Gesamtemissionen der Variante B (jeweils kg CO₂e).',
          formula: 'CO₂e = t × km × Faktor; Variante B = Vorlauf + Hauptlauf + Nachlauf',
          fields: [
            { id: 'a', label: 'Variante A', unit: 'kg CO₂e', answer: 621, tol: 0.1 },
            { id: 'vn', label: 'Vor- und Nachlauf Lkw', unit: 'kg CO₂e', answer: 74.25, tol: 0.05 },
            { id: 'hl', label: 'Hauptlauf Bahn', unit: 'kg CO₂e', answer: 136.08, tol: 0.05 },
            { id: 'b', label: 'Variante B gesamt', unit: 'kg CO₂e', answer: 210.33, tol: 0.05 }
          ],
          hints: ['Vor- und Nachlauf zusammen: 55 km.', 'Bahn: 18 t × 420 km × 18 g.'],
          solution: `**Variante A:** 18 t × 460 km = 8.280 tkm × 75 g = 621.000 g = **621 kg**

**Vor- und Nachlauf:** 18 t × (30 + 25) km = 990 tkm × 75 g = 74.250 g = **74,25 kg**

**Hauptlauf Bahn:** 18 t × 420 km = 7.560 tkm × 18 g = 136.080 g = **136,08 kg**

**Variante B:** 74,25 kg + 136,08 kg = **210,33 kg**`
        },
        {
          id: 'lf15-infrastruktur-a2-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne die Einsparung von Variante B gegenüber A in kg und in Prozent (auf zwei Nachkommastellen).',
          formula: 'Einsparung = A − B; Einsparung in % = (A − B) ÷ A × 100',
          fields: [
            { id: 'kg', label: 'Einsparung', unit: 'kg CO₂e', answer: 410.67, tol: 0.05 },
            { id: 'proz', label: 'Einsparung', unit: '%', answer: 66.13, tol: 0.05 }
          ],
          hints: ['621 − 210,33.', 'Bezugsgröße ist Variante A.'],
          solution: `**Einsparung:** 621 kg − 210,33 kg = **410,67 kg CO₂e**

**In Prozent:** 410,67 ÷ 621 × 100 = 66,130… ≈ **66,13 %**

Je Jahr (52 Wochen) wären das rund 52 × 410,67 kg ≈ 21,4 t CO₂e – mit den angenommenen Faktoren.`
        },
        {
          id: 'lf15-infrastruktur-a2-3', type: 'text', difficulty: 3, points: 3,
          q: 'Der Kunde fragt, ob er Variante B wählen soll. Nenne zwei weitere Gesichtspunkte außer CO₂, die du ihm zur Entscheidung nennst, und eine Schwäche der Berechnung.',
          model: 'Neben CO₂ sind die Kosten (Umschlagkosten im Terminal gegenüber Maut und Diesel beim Lkw) und die Laufzeit mit festen Zug- und Terminalzeiten wichtig; außerdem die Zuverlässigkeit und Terminnähe am Versand- und Empfangsort. Schwäche der Berechnung: Die Emissionsfaktoren sind nur angenommene Beispielwerte und der Umschlag im Terminal fehlt; nach ISO 14083 müssten Umschlag und tatsächliche Verbrauchswerte berücksichtigt werden.',
          criteria: [
            { text: 'nennt Kosten', keywords: ['Kosten|Preis|Umschlagkosten'], points: 1 },
            { text: 'nennt Laufzeit/Flexibilität/Zuverlässigkeit', keywords: ['Laufzeit|Zeit|Flexib|Zuverlaess|Termin'], points: 1 },
            { text: 'nennt Schwäche: Beispielfaktoren oder Umschlag fehlt', keywords: ['Beispiel|angenommen|Umschlag|14083'], points: 1 }
          ],
          hints: ['Was kostet der Terminalumschlag, was spart man an Maut?', 'Woher stammen die Emissionsfaktoren?'],
          solution: 'Weitere Kriterien: **Kosten** (Umschlag, Vor-/Nachlauf vs. Maut, Diesel, Fahrpersonal), **Laufzeit und Flexibilität** (Fahrplan, Annahmeschluss), **Zuverlässigkeit**, **Terminalnähe**, Ladungssicherung im KV. Schwächen: **Beispiel-Emissionsfaktoren**, **Umschlag nicht berücksichtigt**, keine Well-to-Wheel-Abgrenzung – eine Berechnung nach **DIN EN ISO 14083** mit echten Daten wäre genauer.'
        }
      ]
    },
    {
      id: 'lf15-infrastruktur-a3', type: 'calc', difficulty: 3, points: 4,
      q: 'Die Spedition hat **10 Lkw**, die je **100.000 km** im Jahr fahren und **30 l Diesel je 100 km** verbrauchen. Berechne den Dieselverbrauch, die CO₂-Emissionen in t (angenommener Emissionsfaktor **2,6 kg CO₂ je Liter**) und den rechnerischen CO₂-Kostenanteil bei **55 € je t** (BEHG-Festpreis 2025) – insgesamt und je Liter in Cent. (Vereinfachung: ohne Biokraftstoffanteil und Umsatzsteuer.)',
      formula: 'Diesel = Lkw × km ÷ 100 × l/100 km; CO₂ = Diesel × Faktor; CO₂-Kosten = t CO₂ × Preis',
      fields: [
        { id: 'l', label: 'Dieselverbrauch', unit: 'l', answer: 300000, tol: 1 },
        { id: 't', label: 'CO₂-Emissionen', unit: 't', answer: 780, tol: 0.5 },
        { id: 'eur', label: 'CO₂-Kostenanteil gesamt', unit: '€', answer: 42900, tol: 1 },
        { id: 'ct', label: 'CO₂-Kostenanteil je Liter', unit: 'ct/l', answer: 14.3, tol: 0.05 }
      ],
      hints: ['1.000 kg = 1 t.', 'Je Liter: 2,6 kg × 55 €/1.000 kg.'],
      solution: `**Diesel:** 10 × 100.000 km ÷ 100 × 30 l = **300.000 l**

**CO₂:** 300.000 l × 2,6 kg/l = 780.000 kg = **780 t**

**CO₂-Kosten:** 780 t × 55 €/t = **42.900 €**

**Je Liter:** 2,6 kg × 55 € ÷ 1.000 kg = 0,143 € = **14,3 ct/l** (Probe: 42.900 € ÷ 300.000 l = 0,143 €/l)

Hinweis: Der Emissionsfaktor ist ein angenommener Wert; der tatsächliche CO₂-Preisanteil hängt vom Biokraftstoffanteil und vom Jahrespreis ab (2026: Korridor 55–65 €/t). Die Spedition zahlt diesen Betrag indirekt über den Dieselpreis.`
    },
    {
      id: 'lf15-infrastruktur-a4', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Gutachten nennt für einen Vergleich die **angenommenen** externen Kosten Lkw 2,0 ct je tkm und Bahn 0,6 ct je tkm (Beispielwerte). Berechne für 8.100 tkm die externen Kosten von Lkw und Bahn in € und die Differenz.',
      formula: 'externe Kosten = tkm × Kostensatz',
      fields: [
        { id: 'lkw', label: 'externe Kosten Lkw', unit: '€', answer: 162, tol: 0.01 },
        { id: 'bahn', label: 'externe Kosten Bahn', unit: '€', answer: 48.6, tol: 0.01 },
        { id: 'diff', label: 'Differenz', unit: '€', answer: 113.4, tol: 0.01 }
      ],
      hints: ['Cent in Euro umrechnen: ÷ 100.', 'Differenz = Lkw − Bahn.'],
      solution: `**Lkw:** 8.100 tkm × 0,020 €/tkm = **162,00 €**

**Bahn:** 8.100 tkm × 0,006 €/tkm = **48,60 €**

**Differenz:** 162,00 € − 48,60 € = **113,40 €**

Diese Kosten trägt die Allgemeinheit, solange sie nicht internalisiert werden (z. B. über Maut-Teilsätze und CO₂-Preis).`
    },
    {
      id: 'lf15-infrastruktur-a5', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Maßnahmen dienen der **Internalisierung externer Kosten** des Lkw-Verkehrs? (Mehrfachauswahl)',
      options: [
        'CO₂-Teilsatz in der Lkw-Maut',
        'CO₂-Bepreisung von Diesel nach BEHG',
        'Senkung der Energiesteuer auf Diesel',
        'Teilsätze für Luftverschmutzung und Lärm in der Maut',
        'Pauschale Erstattung der Maut an alle Speditionen'
      ],
      correct: [0, 1, 3],
      hints: ['Internalisierung macht umweltschädliches Verhalten teurer.', 'Was den Lkw-Verkehr billiger macht, ist das Gegenteil.'],
      solution: 'Internalisierung: **CO₂-Teilsatz (A)**, **BEHG-CO₂-Preis (B)**, **Luft- und Lärmteilsätze (D)** – der Verursacher trägt einen Teil der Umwelt- und Gesundheitskosten. Eine Steuersenkung (C) oder Mauterstattung (E) würde den Verkehr verbilligen und die externen Kosten weiter auf die Allgemeinheit verlagern.'
    },
    {
      id: 'lf15-infrastruktur-a6', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Lücken zum TEN-V-Netz und zur CO₂-Bepreisung.',
      text: 'Das transeuropäische Verkehrsnetz hat drei Ebenen: Das Kernnetz soll bis [[2030]], das erweiterte Kernnetz bis [[2040]] und das Gesamtnetz bis [[2050]] fertiggestellt sein. Der nationale CO₂-Preis auf Kraftstoffe beruht auf dem [[BEHG|Brennstoffemissionshandelsgesetz]]; 2025 betrug der Festpreis [[55]] € je Tonne CO₂.',
      hints: ['Die Fristen liegen jeweils zehn Jahre auseinander.', 'Die Abkürzung des Gesetzes hat vier Buchstaben.'],
      solution: 'Kernnetz **2030**, erweitertes Kernnetz **2040**, Gesamtnetz **2050** (VO (EU) 2024/1679). CO₂-Preis nach **BEHG**, Festpreis 2025: **55 €/t** (§ 10 BEHG). 2026 gilt ein Versteigerungskorridor von 55–65 €/t.'
    },
    {
      id: 'lf15-infrastruktur-a7', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne den alternativen Antrieb dem passenden Merkmal zu.',
      pairs: [
        ['Batterieelektrischer Lkw', 'lokal emissionsfrei, Laden über Nacht im Depot, Reichweite begrenzt'],
        ['Brennstoffzellen-Lkw', 'tankt Wasserstoff in kurzer Zeit, bisher sehr wenige Tankstellen'],
        ['Bio-LNG-Lkw', 'Gasantrieb, Klimavorteil hängt von der Herkunft des Gases ab'],
        ['HVO im Diesel-Lkw', 'erneuerbarer Dieselkraftstoff, Herstellerfreigabe des Motors prüfen']
      ],
      hints: ['Welcher Antrieb nutzt Strom aus einer Batterie, welcher Wasserstoff?', 'HVO ist ein flüssiger Kraftstoff.'],
      solution: 'BEV = Batterie, Depotladung, Reichweite; Brennstoffzelle = Wasserstoff, kurze Tankzeit, wenige Tankstellen; Bio-LNG = verflüssigtes Biogas; HVO = hydriertes Pflanzenöl als Dieselersatz in vorhandenen Fahrzeugen (mit Freigabe).'
    },
    {
      id: 'lf15-infrastruktur-a8', type: 'mc', difficulty: 3, points: 3,
      q: 'Welche Aussagen zur CO₂-Bepreisung sind **richtig** (Stand siehe Gültigkeitshinweis)? (Mehrfachauswahl)',
      options: [
        'Nach BEHG müssen die Unternehmen, die Brennstoffe in Verkehr bringen, Zertifikate erwerben.',
        'Die Spedition muss für jeden getankten Liter selbst Zertifikate bei der DEHSt kaufen.',
        'Für 2026 sieht § 10 BEHG die Versteigerung in einem Preiskorridor von 55 bis 65 € je t vor.',
        'Der EU-ETS 2 soll Brennstoffe in Gebäuden und im Straßenverkehr erfassen.',
        'Der EU-ETS 2 gilt seit 2005 für Kraftwerke.'
      ],
      correct: [0, 2, 3],
      hints: ['Wer bringt Diesel in Verkehr – die Spedition oder der Mineralölhändler?', 'Seit 2005 gibt es den ersten EU-Emissionshandel für Kraftwerke und Industrie.'],
      solution: 'Richtig: **A**, **C**, **D**. B ist falsch: Die Spedition zahlt den CO₂-Preis indirekt über den Kraftstoffpreis. E ist falsch: Seit 2005 gilt der **EU-ETS 1** für Kraftwerke und Industrie; der ETS 2 ist neu (Richtlinie (EU) 2023/959) und soll später starten (Stand Ende 2025: Verschiebung auf 2028 geplant).'
    },
    {
      id: 'lf15-infrastruktur-a9', type: 'order', difficulty: 2, points: 4,
      q: 'Bringe die Schritte einer Emissionsberechnung für eine Transportkette (Grundidee nach DIN EN ISO 14083) in die richtige Reihenfolge.',
      items: [
        'Transportkette in Abschnitte gliedern (Vorlauf, Umschlag, Hauptlauf, Nachlauf)',
        'Je Abschnitt Verbrauch oder Transportleistung (tkm) ermitteln',
        'Je Abschnitt mit dem passenden Emissionsfaktor multiplizieren',
        'Abschnittsergebnisse addieren und dem Kunden berichten'
      ],
      hints: ['Ohne Abschnitte keine Abschnittswerte.', 'Berichtet wird am Ende.'],
      solution: 'Gliedern → Mengengrößen je Abschnitt → Emissionsfaktor anwenden → addieren und berichten. Echte Verbrauchsdaten sind dabei genauer als Standardfaktoren.'
    },
    {
      id: 'lf15-infrastruktur-a10', type: 'text', difficulty: 3, points: 4,
      q: 'Eine Gemeinde im Saarland plant ein nächtliches Lkw-Durchfahrtsverbot im Ortskern, weil Anwohner sich über Lärm beschweren. Die Spedition beliefert dort nachts einen Supermarkt. Erläutere die Interessen beider Seiten und schlage zwei Lösungen vor.',
      model: 'Die Anwohner haben ein Interesse an Ruhe und Gesundheit; die Gemeinde kann Maßnahmen im Lärmaktionsplan festlegen. Die Spedition und der Supermarkt wollen nachts liefern, weil die Straßen frei sind und die Ware morgens im Regal sein muss. Lösungen: Belieferung mit einem leisen Elektro-Lkw und lärmarmen Rollcontainern sowie Schulung der Fahrer für geräuscharmes Entladen; alternativ die Belieferung in die frühen Morgenstunden oder den Abend verlegen.',
      criteria: [
        { text: 'nennt Interesse der Anwohner (Ruhe/Gesundheit)', keywords: ['Ruhe|Gesundheit|Schlaf|Laerm'], points: 1 },
        { text: 'nennt Interesse der Spedition/des Händlers', keywords: ['frei|Regal|Stau|Termin|Belieferung'], points: 1 },
        { text: 'Lösung leise Technik (E-Lkw, leises Entladen)', keywords: ['Elektro|E-Lkw|leise'], points: 1 },
        { text: 'Lösung zeitliche Verlagerung/Absprache', keywords: ['Zeit|Morgen|Abend|verleg|Absprache'], points: 1 }
      ],
      hints: ['Warum liefern Händler überhaupt nachts?', 'Kann man die Ursache des Lärms verringern, statt die Lieferung zu verbieten?'],
      solution: 'Interessen: **Anwohner** – Ruhe, Gesundheit (Lärmaktionsplanung nach § 47d BImSchG); **Spedition/Händler** – freie Straßen, pünktliche Regalbefüllung, bessere Fahrzeugauslastung. Lösungen: **leise Nachtbelieferung** (E-Lkw, lärmarme Ladetechnik, Fahrerschulung), **zeitliche Verlagerung** (Abend, früher Morgen), **Ausnahmegenehmigung** für geprüfte leise Fahrzeuge, gemeinsame Absprache mit Gemeinde und Anwohnern.'
    }
  ],
  quiz: ['lf15-infrastruktur-a1', 'lf15-infrastruktur-a2', 'lf15-infrastruktur-a5', 'lf15-infrastruktur-a6', 'lf15-infrastruktur-a8'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 15, Inhalte: Verkehrsinfrastruktur, Verkehrs- und Umweltpolitik' },
    { title: 'Brennstoffemissionshandelsgesetz (BEHG) § 10 Veräußerung von Emissionszertifikaten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/behg/__10.html', asOf: '2026-10' },
    { title: 'Brennstoffemissionshandelsgesetz (BEHG) § 1 Zweck des Gesetzes', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/behg/__1.html', asOf: '2026-10' },
    { title: 'Update CO₂-Bepreisung (Stand ETS 2 und BEHG 2026/2027)', publisher: 'Stiftung Umweltenergierecht', url: 'https://stiftung-umweltenergierecht.de/wp-content/uploads/2025/12/Stiftung_Umweltenergierecht_Ehrmann_Update_CO2-Bepreisung_2025-12-05.pdf', asOf: '2025-12' },
    { title: 'Transeuropäische Verkehrsnetze (TEN-V)', publisher: 'Bundesministerium für Verkehr', url: 'https://www.bmv.de/DE/Themen/EU-Internationales/EU-Verkehrspolitik/Transeuropaeische-Verkehrsnetze/transeuropaeische-verkehrsnetze.html', asOf: '2026' },
    { title: 'Pressemitteilung 068/2025: Mautbefreiung emissionsfreier Lkw bis Mitte 2031 verlängert', publisher: 'Bundesministerium für Verkehr', url: 'https://www.bmv.de/SharedDocs/DE/Pressemitteilungen/2025/068-schnieder-mautbefreiung-emissionsfreie-lkw-bis-mitte-2031-verlaengert.html', asOf: '2025-12' },
    { title: 'ISO 14083:2023 Greenhouse gases — Quantification and reporting of GHG emissions arising from transport chain operations', publisher: 'International Organization for Standardization (ISO)', url: 'https://www.iso.org/standard/78864.html', asOf: '2026' },
    { title: 'Bundes-Immissionsschutzgesetz § 47d Lärmaktionspläne', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/bimschg/__47d.html', asOf: '2026' },
    { title: 'Zug um Zug mehr Lärmschutz (Verbot lauter Güterwagen ab 13.12.2020)', publisher: 'Presse- und Informationsamt der Bundesregierung', url: 'https://www.bundesregierung.de/breg-de/aktuelles/zug-um-zug-mehr-laermschutz-369754', asOf: '2017' }
  ],
  links: ['lf07-fahrzeugkosten', 'lf04-verkehrstraeger-vergleich', 'lf10-multimodal', 'lf14-qualitaet']
};
