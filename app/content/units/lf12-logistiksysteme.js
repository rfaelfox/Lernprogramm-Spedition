export default {
  id: 'lf12-logistiksysteme',
  area: 'LF12',
  topic: 'lf12-logistiksysteme',
  title: 'Logistische Subsysteme, Logistikdienstleister und Sourcing',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026',
    note: 'Abfallhierarchie nach § 6 KrWG und Produktverantwortung nach § 23 KrWG; Logistik-AGB 2019 (unverbindliche Verbandsempfehlung von DSLV, BGL und AMÖ, anzuwenden seit 1.7.2019), Stand 2026'
  },
  goals: [
    'Ich kann die logistischen Subsysteme Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik voneinander abgrenzen.',
    'Ich kann erklären, was Kontraktlogistik ist und welche Leistungen eine Spedition dabei übernimmt.',
    'Ich kann 1PL, 2PL, 3PL und 4PL unterscheiden und einem Beispiel zuordnen.',
    'Ich kann Sourcing-Konzepte (Single, Dual, Multiple, Global, Local, Modular Sourcing, Outsourcing, Insourcing) beschreiben und nach Kosten, Versorgungssicherheit und Umwelt bewerten.',
    'Ich kann Ziele und Grundgedanken des Supply Chain Managements erläutern.',
    'Ich kann den Bullwhip-Effekt erklären, seine Ursachen nennen und Gegenmaßnahmen vorschlagen.',
    'Ich kann einen einfachen Kostenvergleich Eigenlogistik gegen Fremdvergabe rechnen.'
  ],
  simple: `# Worum geht es?

Logistik bedeutet: Das **richtige Gut** in der **richtigen Menge** und **Qualität** zur **richtigen Zeit** am **richtigen Ort** zu **minimalen Kosten** bereitstellen.

Ein Industrieunternehmen hat dabei mehrere „Baustellen“, die man **logistische Subsysteme** (Teilsysteme) nennt:

1. **Beschaffungslogistik**: Material vom Lieferanten bis ins Eingangslager oder direkt an die Fertigungslinie.
2. **Produktionslogistik**: Material innerhalb des Werks zwischen Lager und Fertigungsstufen bewegen.
3. **Distributionslogistik**: Fertige Erzeugnisse vom Werk zum Kunden.
4. **Entsorgungslogistik**: Leergut, Verpackungen, Reststoffe und Altprodukte zurückholen, verwerten oder beseitigen.

# Wo kommt die Spedition ins Spiel?

Viele Unternehmen machen das nicht mehr selbst, sondern beauftragen einen **Logistikdienstleister**. Übernimmt eine Spedition mit einem **langfristigen Vertrag** ein ganzes Bündel von Aufgaben (z. B. Lager, Kommissionierung, Belieferung der Fertigung, Etikettieren), spricht man von **Kontraktlogistik**.

# Woher kommt das Material?

Beim **Sourcing** entscheidet der Einkauf, **wie viele** Lieferanten es je Teil gibt (Single, Dual, Multiple), **wo** sie sitzen (Global, Local), **was** geliefert wird (Einzelteile oder ganze Module) und ob eine Leistung **selbst** erbracht oder **eingekauft** wird (Insourcing oder Outsourcing).

# Die ganze Kette

**Supply Chain Management (SCM)** betrachtet die gesamte Lieferkette vom Rohstoff bis zum Endkunden. Ziel: Alle Beteiligten teilen Informationen und planen gemeinsam, statt dass jeder nur auf seinen Nachbarn schaut. Wer das nicht tut, erlebt den **Bullwhip-Effekt**: Kleine Schwankungen beim Endkunden schaukeln sich stromaufwärts zu großen Schwankungen auf.`,
  deep: `# 1. Logistische Subsysteme im Überblick

| Subsystem | Reicht von … bis … | Typische Aufgaben | Beispiel für Speditionsleistung |
|---|---|---|---|
| **Beschaffungslogistik** | Lieferant → Wareneingang/Verbrauchsort | Bedarfsermittlung, Bestellabwicklung, Transport, Wareneingangsprüfung, Lagerung | Gebietsspediteur holt Teile bei Lieferanten ab und liefert sie gebündelt ins Werk |
| **Produktionslogistik** | Eingangslager → Fertigung → Fertigwarenlager | innerbetrieblicher Transport, Bereitstellung an der Linie, Zwischenlager | Spedition betreibt Versorgungszentrum vor dem Werk und versorgt die Montagelinie |
| **Distributionslogistik** | Fertigwarenlager → Kunde | Auftragsabwicklung, Kommissionierung, Verpackung, Versand, Auslieferung | Spedition übernimmt Kommissionierung und Stückgutversand an Händler |
| **Entsorgungslogistik** | Kunde/Werk → Verwertung/Beseitigung | Sammeln, Sortieren, Transport von Leergut, Verpackungen, Reststoffen, Rückläufern | Rückführung von Ladungsträgern, Transport von Altpapier zum Recycler |

> Die Rückflüsse (Leergut, Retouren, Altprodukte) fasst man oft auch als **Reverse Logistics** zusammen. Die **Distributionslogistik** ist Thema von Lernfeld 13; hier steht die **Beschaffungsseite** im Mittelpunkt.

**Entsorgungslogistik und Recht:** Das Kreislaufwirtschaftsgesetz legt in **§ 6 KrWG** eine Rangfolge fest: **Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige Verwertung (insbesondere energetische Verwertung und Verfüllung) → Beseitigung**. Nach **§ 23 KrWG** tragen Hersteller und Vertreiber **Produktverantwortung**; dazu gehört u. a. die Rücknahme von Erzeugnissen und Abfällen. Für Logistiker heißt das: Mehrwegladungsträger und Rücknahmesysteme haben Vorrang vor Einwegverpackung und Beseitigung.

# 2. Kontraktlogistik

**Kontraktlogistik** ist die langfristige (meist mehrjährige), vertraglich geregelte Übernahme eines **Bündels logistischer Leistungen** durch einen Dienstleister, individuell auf einen Auftraggeber zugeschnitten.

Merkmale:
- **Langfristiger Vertrag** (oft 3 bis 5 Jahre) mit Leistungsbeschreibung und Kennzahlen (**KPI**, z. B. Lieferbereitschaft, Kommissionierfehlerquote)
- **Leistungsbündel**: Transport, Lagerung und **Mehrwertleistungen** (Value Added Services) wie Montage, Etikettierung, Qualitätskontrolle, Retourenbearbeitung
- Oft **auftraggeberspezifische Investitionen** (Halle, Regale, IT-Anbindung) → Risiko für den Dienstleister, wenn der Vertrag endet
- Mittleres bis großes Volumen, enge IT-Anbindung (EDI)

**Rechtlicher Rahmen:** Für Transport, Spedition und Lagerung gelten HGB und meist die ADSp. Für **speditionsunübliche logistische Zusatzleistungen** (z. B. Montage, Qualitätskontrolle, Preisauszeichnung, Regalservice) empfehlen DSLV, BGL und AMÖ seit 1.7.2019 die **Logistik-AGB 2019**. Sie sind eine **unverbindliche Empfehlung** und gelten nur, wenn sie vereinbart werden; bei Widersprüchen gehen die ADSp vor, soweit beide vereinbart sind. Die Haftung beim Lagervertrag behandelt die Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“.

# 3. Arten von Logistikdienstleistern (xPL)

| Stufe | Wer? | Leistung | Eigene Fahrzeuge/Lager? |
|---|---|---|---|
| **1PL** (First Party Logistics) | Verlader selbst | Werkverkehr, eigenes Lager | ja, eigene |
| **2PL** (Second Party Logistics) | klassischer Transport- oder Lagerdienstleister | **einzelne** Leistungen (z. B. nur Transport von A nach B) | ja |
| **3PL** (Third Party Logistics) | Kontraktlogistiker, Systemdienstleister | **Leistungsbündel** inkl. Mehrwertleistungen, eigene Planung | ja, meist eigene Assets |
| **4PL** (Fourth Party Logistics) | Logistik-Integrator, oft Beratung/IT | **plant und steuert** die gesamte Supply Chain, koordiniert mehrere 2PL/3PL | **nein**, kaum eigene Assets („asset-light“) |

Merke: Je höher die Stufe, desto mehr **Steuerungs- und Planungsverantwortung** übernimmt der Dienstleister. Die Begriffe sind nicht gesetzlich definiert; in der Literatur werden sie leicht unterschiedlich abgegrenzt.

# 4. Sourcing-Konzepte

| Kriterium | Konzept | Bedeutung | Vorteile | Nachteile/Risiken |
|---|---|---|---|---|
| Anzahl Lieferanten je Teil | **Single Sourcing** | genau **ein** Lieferant | enge Partnerschaft, Mengenrabatt, einheitliche Qualität, einfache Abstimmung | Abhängigkeit, Ausfallrisiko, schwache Verhandlungsposition |
| | **Dual Sourcing** | **zwei** Lieferanten | Ausweichmöglichkeit, Wettbewerb bleibt | mehr Abstimmung, kleinere Mengen je Lieferant |
| | **Multiple Sourcing** | **viele** Lieferanten | hohe Versorgungssicherheit, Preisdruck | hoher Aufwand, Qualitätsschwankungen, kaum Partnerschaft |
| Ort | **Global Sourcing** | weltweite Beschaffung | niedrige Einkaufspreise, Zugang zu Know-how | lange Transportwege und Lieferzeiten, Zoll, Wechselkurs, CO₂-Ausstoß, höhere Bestände |
| | **Local Sourcing** | Lieferant in der Nähe des Werks | kurze Wege, Just-in-time möglich, geringere Emissionen | evtl. höhere Preise, kleinere Auswahl |
| Umfang | **Unit Sourcing** | Einzelteile | volle Kontrolle beim Abnehmer | viele Lieferanten, hoher Montageaufwand |
| | **Modular Sourcing** | ganze **Module/Systeme** (z. B. komplettes Cockpit) von einem **Systemlieferanten** | weniger direkte Lieferanten, kürzere eigene Montage | Know-how-Verlust, Abhängigkeit vom Systemlieferanten |
| Selbst oder fremd | **Outsourcing** | Leistung wird an Dritte vergeben (Make-or-Buy → Buy) | Konzentration aufs Kerngeschäft, variable statt fixe Kosten, Know-how des Spezialisten | Abhängigkeit, Kontrollverlust, Schnittstellen, Vertragsbindung |
| | **Insourcing** | ausgelagerte Leistung wird zurückgeholt | Kontrolle, Know-how bleibt im Haus | Investitionen, Fixkosten steigen |

Bei Lieferanten, die nicht in der Nähe sitzen, arbeiten Abnehmer oft mit **Gebietsspediteuren**: Ein Spediteur holt in einem festgelegten Gebiet bei allen Lieferanten ab, bündelt die Sendungen im Umschlaglager und liefert sie gesammelt an. Das senkt Transportkosten und entlastet die Rampe des Werks.

**Bewertung nach Lehrplan:** Sourcing-Konzepte beurteilst du immer unter den drei Kategorien **Kosten** (Einkaufspreis, Transport, Bestände), **Produktionssicherheit** (Ausfallrisiko, Lieferzeit) und **Umweltschutz** (Transportentfernung, Emissionen, Verpackung).

# 5. Kosten der Fremdvergabe einfach vergleichen

Bei Outsourcing wird oft eine **kritische Menge** berechnet (wie beim Make-or-Buy in Lernfeld 4):

**Kosten Eigenlogistik = Fixkosten + variable Kosten je Einheit × Menge**

**Kosten Fremdvergabe = Preis je Einheit × Menge**

**Kritische Menge = Fixkosten ÷ (Preis Dienstleister je Einheit − variable Kosten je Einheit)**

Liegt die Menge **unter** der kritischen Menge, ist die Fremdvergabe günstiger, darüber die Eigenlogistik. Neben den Kosten zählen aber auch **qualitative** Gründe (Flexibilität, Know-how, Abhängigkeit).

# 6. Supply Chain Management (SCM)

Eine **Supply Chain** (Lieferkette) umfasst alle Unternehmen vom Rohstofflieferanten über Zulieferer, Hersteller, Großhandel und Einzelhandel bis zum Endkunden – einschließlich der Logistikdienstleister dazwischen. Es gibt drei Flüsse: **Warenfluss** (stromabwärts), **Informationsfluss** (in beide Richtungen) und **Geldfluss** (stromaufwärts).

**Ziele des SCM:** niedrigere Bestände in der ganzen Kette, kürzere Durchlaufzeiten, höhere Lieferfähigkeit, geringere Gesamtkosten.

**Mittel:** Austausch von Absatz- und Bestandsdaten (z. B. per EDI), gemeinsame Planung und Prognose, Standardisierung (Ladungsträger, Barcodes), Konzepte wie **Vendor Managed Inventory** und **Just-in-time** (siehe Einheit „Just-in-time, Vorratshaltung und ABC-Analyse“).

# 7. Bullwhip-Effekt (Peitscheneffekt)

Schwankt die Nachfrage beim Endkunden nur leicht, schwanken die Bestellungen des Händlers beim Großhändler stärker, die des Großhändlers beim Hersteller noch stärker usw. Die Schwankung **verstärkt sich stromaufwärts** wie bei einer Peitsche.

**Ursachen:**
- Jede Stufe sieht nur die Bestellungen ihres direkten Kunden, nicht die echte Endkundennachfrage, und legt **eigene Sicherheitszuschläge** drauf.
- **Losgrößenbildung**: gesammelte Großbestellungen statt laufender Abrufe.
- **Preisaktionen** und Mengenrabatte → Kunden bestellen auf Vorrat.
- **Rationierungsspiel**: Bei Knappheit bestellen Kunden mehr, als sie brauchen, und stornieren später.
- Lange **Lieferzeiten**, die Prognosefehler vergrößern.

**Gegenmaßnahmen:** Endkunden- und Bestandsdaten teilen, gemeinsame Prognosen, kleinere und häufigere Lieferungen, Lieferzeiten verkürzen, stabile Preise statt Aktionen, Vendor Managed Inventory.

Eine einfache Kennzahl für die Verstärkung ist der **Verstärkungsfaktor = Schwankungsbreite der Bestellungen ÷ Schwankungsbreite der Endkundennachfrage** (Schwankungsbreite = Höchstwert − Tiefstwert).`,
  terms: [
    { term: 'Beschaffungslogistik', def: 'Logistisches Subsystem vom Lieferanten bis zum Wareneingang bzw. Verbrauchsort: Bedarfsermittlung, Bestellung, Transport, Wareneingang, Lagerung.' },
    { term: 'Produktionslogistik', def: 'Planung und Steuerung des Materialflusses innerhalb des Werks zwischen Eingangslager, Fertigungsstufen und Fertigwarenlager.' },
    { term: 'Distributionslogistik', def: 'Logistisches Subsystem vom Fertigwarenlager bis zum Kunden: Auftragsabwicklung, Kommissionierung, Verpackung, Versand.' },
    { term: 'Entsorgungslogistik', def: 'Sammeln, Sortieren, Transportieren und Lagern von Leergut, Verpackungen, Reststoffen und Altprodukten zur Verwertung oder Beseitigung.' },
    { term: 'Kontraktlogistik', def: 'Langfristige, vertraglich geregelte Übernahme eines individuell zugeschnittenen Bündels logistischer Leistungen einschließlich Mehrwertleistungen durch einen Dienstleister.' },
    { term: 'Value Added Services (Mehrwertleistungen)', def: 'Zusätzliche Leistungen über Transport und Lagerung hinaus, z. B. Montage, Etikettierung, Qualitätsprüfung, Retourenbearbeitung.' },
    { term: '3PL (Third Party Logistics)', def: 'Logistikdienstleister, der ein Leistungsbündel mit eigenen Ressourcen (Lager, Fahrzeuge) übernimmt; typischer Kontraktlogistiker.' },
    { term: '4PL (Fourth Party Logistics)', def: 'Logistik-Integrator, der die gesamte Lieferkette plant und steuert und dafür mehrere Dienstleister koordiniert, meist ohne eigene Fahrzeuge und Lager.' },
    { term: 'Single Sourcing', def: 'Beschaffung eines Teils bei nur einem Lieferanten.' },
    { term: 'Modular Sourcing', def: 'Beschaffung vormontierter Baugruppen (Module) von einem Systemlieferanten statt vieler Einzelteile.' },
    { term: 'Outsourcing', def: 'Auslagerung bisher selbst erbrachter Leistungen an einen externen Dienstleister.' },
    { term: 'Supply Chain Management', def: 'Unternehmensübergreifende Planung und Steuerung von Waren-, Informations- und Geldflüssen entlang der gesamten Lieferkette.' },
    { term: 'Bullwhip-Effekt', def: 'Aufschaukeln von Bestellschwankungen entlang der Lieferkette vom Endkunden zum Rohstofflieferanten.' }
  ],
  example: `# Saar-Trans Spedition GmbH übernimmt die Beschaffungslogistik eines Zulieferers (Beispiel)

Die **Homburger Achsbau GmbH** (fiktiver Automobilzulieferer) bezieht rund 400 verschiedene Teile von 60 Lieferanten. Bisher schickt jeder Lieferant selbst einen Lkw; an der Rampe stauen sich morgens bis zu 25 Fahrzeuge.

**Lösung der Saar-Trans als Kontraktlogistiker (3PL), Vertragslaufzeit 4 Jahre:**

1. **Gebietsspedition**: Saar-Trans holt im Großraum Saarland/Pfalz täglich bei den Lieferanten ab (Beschaffungslogistik).
2. **Versorgungslager** in Homburg: Wareneingangsprüfung, Einlagerung, Umpacken in werksgerechte Kleinladungsträger.
3. **Linienversorgung** im Stundentakt an die Montage (Produktionslogistik).
4. **Leergutmanagement**: leere Behälter werden gereinigt, gezählt und an die Lieferanten zurückgeführt (Entsorgungslogistik, Mehrweg nach der Abfallhierarchie vorrangig).

**Vereinbarte Kennzahlen (KPI):** Liefertermintreue an die Linie mindestens 99,5 %, Bestandsgenauigkeit mindestens 99,8 %.

**Sourcing beim Kunden:** Für Achsschenkel setzt die Homburger Achsbau auf **Dual Sourcing** (ein Lieferant in Kaiserslautern, einer in Tschechien). So bleibt die Versorgung gesichert, wenn ein Lieferant ausfällt, und der lokale Lieferant kann kurzfristig nachliefern.

**Bullwhip im Alltag:** Als der Fahrzeughersteller seine Abrufe um 5 % erhöhte, bestellte die Achsbau beim Stahlhändler „sicherheitshalber“ 20 % mehr. Seit Saar-Trans die Abrufdaten des Herstellers per EDI an alle Beteiligten weitergibt, sind die Bestellungen deutlich gleichmäßiger.`,
  rules: [
    'Vier Subsysteme: Beschaffung (Lieferant → Werk), Produktion (im Werk), Distribution (Werk → Kunde), Entsorgung (Rückflüsse).',
    'Kontraktlogistik = langfristiger Vertrag + Leistungsbündel + Mehrwertleistungen + individuelle Lösung.',
    '2PL macht einzelne Transporte, 3PL übernimmt Leistungsbündel mit eigenen Ressourcen, 4PL steuert die ganze Kette meist ohne eigene Assets.',
    'Sourcing-Konzepte immer nach Kosten, Produktionssicherheit und Umweltschutz bewerten.',
    'Single Sourcing: Partnerschaft und Preisvorteil, aber Abhängigkeit; Multiple Sourcing: Sicherheit, aber hoher Aufwand.',
    'Global Sourcing spart beim Einkaufspreis, kostet aber Zeit, Bestände und Emissionen.',
    'Kritische Menge = Fixkosten ÷ (Fremdpreis je Einheit − variable Kosten je Einheit); darunter lohnt die Fremdvergabe.',
    'Gegen den Bullwhip-Effekt hilft vor allem: echte Endkundendaten teilen.'
  ],
  summary: `- **Subsysteme**: Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik.
- **Entsorgung**: Abfallhierarchie § 6 KrWG (Vermeidung vor Wiederverwendung vor Recycling vor sonstiger Verwertung vor Beseitigung).
- **Kontraktlogistik**: langfristig, Leistungsbündel, Mehrwertleistungen; Logistik-AGB 2019 für speditionsunübliche Zusatzleistungen (Empfehlung, muss vereinbart werden).
- **1PL–4PL**: vom Werkverkehr über Einzelleistung und Leistungsbündel bis zur Steuerung der gesamten Kette.
- **Sourcing**: Single/Dual/Multiple, Global/Local, Unit/Modular, Outsourcing/Insourcing.
- **SCM**: Waren-, Informations- und Geldfluss über alle Stufen gemeinsam planen.
- **Bullwhip-Effekt**: Schwankungen verstärken sich stromaufwärts; Ursache fehlende Information, Losgrößen, Aktionen.`,
  mistakes: [
    { wrong: 'Die Rückführung von Leergut gehört zur Distributionslogistik, weil Fahrzeuge zum Kunden fahren.', right: 'Rückflüsse von Leergut, Verpackungen und Altprodukten gehören zur Entsorgungslogistik (Reverse Logistics).' },
    { wrong: 'Ein 4PL ist ein besonders großer Spediteur mit vielen eigenen Lkw.', right: 'Ein 4PL ist ein Integrator, der die Kette plant und steuert; er arbeitet meist ohne eigene Fahrzeuge und Lager und koordiniert andere Dienstleister.' },
    { wrong: 'Single Sourcing heißt, dass ein Unternehmen insgesamt nur einen Lieferanten hat.', right: 'Single Sourcing bezieht sich auf ein bestimmtes Teil oder eine Materialgruppe: Für dieses Teil gibt es genau einen Lieferanten.' },
    { wrong: 'Global Sourcing ist immer billiger, weil der Einkaufspreis niedriger ist.', right: 'Es zählen die Gesamtkosten: Transport, Zoll, höhere Sicherheitsbestände, Kapitalbindung und Risiken können den Preisvorteil aufzehren.' },
    { wrong: 'Die Logistik-AGB 2019 gelten automatisch für jeden Kontraktlogistikvertrag.', right: 'Sie sind eine unverbindliche Verbandsempfehlung und gelten nur, wenn die Parteien sie vereinbaren.' },
    { wrong: 'Der Bullwhip-Effekt entsteht, weil die Endkunden stark schwankend kaufen.', right: 'Er entsteht gerade dann, wenn die Endkundennachfrage nur leicht schwankt, die Stufen aber ohne gemeinsame Information mit Zuschlägen und Losgrößen bestellen.' }
  ],
  flashcards: [
    { q: 'Nenne die vier logistischen Subsysteme eines Industriebetriebs.', a: 'Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik.' },
    { q: 'Was kennzeichnet Kontraktlogistik?', a: 'Langfristiger Vertrag, individuelles Leistungsbündel inkl. Mehrwertleistungen, oft kundenspezifische Investitionen und Kennzahlen.' },
    { q: 'Unterschied 3PL und 4PL?', a: '3PL erbringt ein Leistungsbündel mit eigenen Ressourcen; 4PL plant und steuert die ganze Kette und koordiniert mehrere Dienstleister, meist ohne eigene Assets.' },
    { q: 'Vor- und Nachteil von Single Sourcing?', a: 'Vorteil: enge Partnerschaft, Mengenrabatt, einheitliche Qualität. Nachteil: Abhängigkeit, Versorgungsrisiko bei Ausfall.' },
    { q: 'Was ist Modular Sourcing?', a: 'Beschaffung ganzer vormontierter Module von einem Systemlieferanten statt vieler Einzelteile.' },
    { q: 'Wie lautet die Abfallhierarchie nach § 6 KrWG?', a: 'Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige Verwertung (z. B. energetisch), Beseitigung.' },
    { q: 'Welche drei Flüsse betrachtet das Supply Chain Management?', a: 'Warenfluss, Informationsfluss und Geldfluss.' },
    { q: 'Was ist der Bullwhip-Effekt?', a: 'Die Verstärkung von Bestellschwankungen entlang der Lieferkette vom Endkunden zum Rohstofflieferanten.' },
    { q: 'Wie berechnet man die kritische Menge beim Outsourcing?', a: 'Fixkosten der Eigenlogistik ÷ (Preis des Dienstleisters je Einheit − eigene variable Kosten je Einheit).' },
    { q: 'Wofür gibt es die Logistik-AGB 2019?', a: 'Für speditionsunübliche logistische Zusatzleistungen wie Montage, Qualitätskontrolle oder Preisauszeichnung; unverbindliche Empfehlung von DSLV, BGL und AMÖ.' }
  ],
  tasks: [
    {
      id: 'lf12-logistiksysteme-a1', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne die Tätigkeit dem passenden logistischen Subsystem zu.',
      pairs: [
        ['Beschaffungslogistik', 'Gebietsspediteur holt Teile bei 15 Lieferanten ab und liefert sie gebündelt ins Werk'],
        ['Produktionslogistik', 'Routenzug bringt Kleinladungsträger vom Supermarkt an die Montagelinie'],
        ['Distributionslogistik', 'Fertige Pumpen werden kommissioniert und per Stückgut an Händler versandt'],
        ['Entsorgungslogistik', 'Leere Gitterboxen und Folienreste werden gesammelt und zurückgeführt bzw. dem Recycling zugeführt']
      ],
      hints: ['Frage dich: Wo beginnt und wo endet der Materialfluss?', 'Rückflüsse von Leergut und Reststoffen bilden ein eigenes Subsystem.'],
      solution: 'Beschaffung = vom Lieferanten zum Werk; Produktion = Materialfluss **im** Werk (Linienversorgung); Distribution = vom Werk zum Kunden; Entsorgung = Rückflüsse von Leergut, Verpackungen und Reststoffen.'
    },
    {
      id: 'lf12-logistiksysteme-a2', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Merkmale sprechen für **Kontraktlogistik**? (Mehrfachauswahl)',
      options: [
        'Vertragslaufzeit von vier Jahren mit vereinbarten Kennzahlen',
        'Einmaliger Transport einer Maschine von Saarbrücken nach Lyon',
        'Lagerung, Kommissionierung und Etikettierung als Leistungsbündel für einen Kunden',
        'Kundenspezifische Investition in Regaltechnik und EDI-Anbindung',
        'Abrechnung eines einzelnen Stückgutauftrags nach Haustarif'
      ],
      correct: [0, 2, 3],
      hints: ['Kontraktlogistik ist langfristig und individuell.', 'Einzelne Transporte sind klassische 2PL-Leistungen.'],
      solution: 'Richtig sind **A, C und D**: langfristiger Vertrag mit KPI, Leistungsbündel mit Mehrwertleistungen und kundenspezifische Investitionen kennzeichnen die Kontraktlogistik. Ein einmaliger Transport (B) und ein einzelner Stückgutauftrag (E) sind Einzelleistungen eines klassischen Transport- bzw. Speditionsdienstleisters.'
    },
    {
      id: 'lf12-logistiksysteme-a3', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Dienstleisterstufe dem Beispiel zu.',
      pairs: [
        ['1PL', 'Ein Getränkehersteller beliefert seine Kunden mit eigenen Lkw (Werkverkehr).'],
        ['2PL', 'Ein Frachtführer fährt im Auftrag einzelne Komplettladungen von A nach B.'],
        ['3PL', 'Eine Spedition betreibt mit eigener Halle das Ersatzteillager eines Landmaschinenherstellers inkl. Versand und Retouren.'],
        ['4PL', 'Ein Integrator ohne eigene Fahrzeuge plant die europaweite Lieferkette eines Konzerns und steuert dafür fünf Dienstleister.']
      ],
      hints: ['Je höher die Zahl, desto mehr Planungs- und Steuerungsverantwortung.', 'Der 4PL braucht keine eigenen Lkw oder Lager.'],
      solution: '1PL = Verlader selbst; 2PL = einzelne Transport- oder Lagerleistung; 3PL = Leistungsbündel mit eigenen Ressourcen (Kontraktlogistik); 4PL = Steuerung der gesamten Kette, koordiniert andere Dienstleister, meist asset-light.'
    },
    {
      id: 'lf12-logistiksysteme-a4', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze die Sourcing-Begriffe.',
      text: 'Bezieht ein Werk ein Teil nur bei einem Lieferanten, spricht man von [[Single Sourcing]]. Werden zwei Lieferanten genutzt, heißt das [[Dual Sourcing]]. Kauft ein Hersteller das komplette Cockpit vormontiert bei einem Systemlieferanten, ist das [[Modular Sourcing]]. Werden Lieferanten in der Nähe des Werks gewählt, spricht man von [[Local Sourcing]]. Holt ein Unternehmen eine ausgelagerte Lagerleistung wieder ins eigene Haus, nennt man das [[Insourcing]].',
      hints: ['Die Begriffe sind englisch und enden alle auf „Sourcing“.', 'Out = nach außen geben, In = zurückholen.'],
      solution: 'Single Sourcing (ein Lieferant), Dual Sourcing (zwei Lieferanten), Modular Sourcing (Module vom Systemlieferanten), Local Sourcing (regionale Lieferanten), Insourcing (Rückholung ausgelagerter Leistungen).'
    },
    {
      id: 'lf12-logistiksysteme-a5', type: 'mc', difficulty: 3, points: 3,
      q: 'Ein Elektronikhersteller stellt bei Leiterplatten von **Local Single Sourcing** auf **Global Multiple Sourcing** (drei Lieferanten in Asien) um. Welche Folgen sind zu erwarten? (Mehrfachauswahl)',
      options: [
        'Die Einkaufspreise können sinken, weil die Lieferanten im Wettbewerb stehen.',
        'Die Sicherheitsbestände können gesenkt werden, weil die Lieferzeit kürzer wird.',
        'Transportwege, Lieferzeit und CO₂-Emissionen nehmen zu.',
        'Der Abstimmungsaufwand im Einkauf und bei der Qualitätssicherung steigt.',
        'Just-in-time-Belieferung im Stundentakt wird einfacher.'
      ],
      correct: [0, 2, 3],
      hints: ['Prüfe jede Aussage nach Kosten, Sicherheit und Umwelt.', 'Was bedeuten lange Seewege für Bestände und Taktung?'],
      solution: 'Richtig sind **A, C und D**. Mehrere Lieferanten im Wettbewerb drücken den Preis (A). Die globale Beschaffung verlängert Wege und Lieferzeit und erhöht Emissionen (C). Mehr Lieferanten bedeuten mehr Abstimmung und Qualitätsprüfung (D). Falsch: Die Lieferzeit wird **länger**, daher sind eher **höhere** Sicherheitsbestände nötig (B); JIT im Stundentakt ist über lange Seewege kaum möglich (E).'
    },
    {
      id: 'lf12-logistiksysteme-a6', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Stufen der Abfallhierarchie nach § 6 KrWG in die richtige Rangfolge (höchster Vorrang zuerst).',
      items: [
        'Vermeidung',
        'Vorbereitung zur Wiederverwendung',
        'Recycling',
        'Sonstige Verwertung, insbesondere energetische Verwertung und Verfüllung',
        'Beseitigung'
      ],
      hints: ['Am besten ist Abfall, der gar nicht erst entsteht.', 'Die Deponie oder Verbrennung ohne Verwertung kommt zuletzt.'],
      solution: 'Rangfolge nach **§ 6 Abs. 1 KrWG**: 1. Vermeidung, 2. Vorbereitung zur Wiederverwendung, 3. Recycling, 4. sonstige Verwertung (insbesondere energetische Verwertung und Verfüllung), 5. Beseitigung. Für die Entsorgungslogistik heißt das z. B.: Mehrwegbehälter (Vermeidung) vor Einwegkarton, der recycelt wird.'
    },
    {
      id: 'lf12-logistiksysteme-a7', type: 'calc', difficulty: 3, points: 4,
      q: `Die Bliesgau Möbel GmbH überlegt, ihr Ersatzteillager an die Saar-Trans Spedition GmbH auszulagern (Beispielzahlen).

- Eigenes Lager: Fixkosten **240.000 € pro Jahr**, variable Kosten **3,20 € je umgeschlagener Palette**
- Angebot Saar-Trans: **6,20 € je umgeschlagener Palette**, keine Fixkosten für den Kunden
- Erwartete Menge: **65.000 Paletten pro Jahr**

Berechne die kritische Menge, die Kosten beider Varianten bei 65.000 Paletten und die Ersparnis der günstigeren Variante.`,
      formula: 'Kritische Menge = Fixkosten ÷ (Fremdpreis − variable Kosten je Einheit); Kosten eigen = Kf + kv × x; Kosten fremd = p × x',
      fields: [
        { id: 'krit', label: 'Kritische Menge', unit: 'Paletten', answer: 80000, tol: 0.5 },
        { id: 'eigen', label: 'Kosten Eigenlager bei 65.000 Paletten', unit: '€', answer: 448000, tol: 0.01 },
        { id: 'fremd', label: 'Kosten Fremdvergabe bei 65.000 Paletten', unit: '€', answer: 403000, tol: 0.01 },
        { id: 'diff', label: 'Ersparnis durch Fremdvergabe', unit: '€', answer: 45000, tol: 0.01 }
      ],
      hints: ['Die Differenz je Palette zwischen Fremdpreis und eigenen variablen Kosten muss die Fixkosten decken.', 'Liegt die Menge unter der kritischen Menge, ist die Fremdvergabe günstiger.'],
      solution: `**Kritische Menge:** 240.000 € ÷ (6,20 €/Pal. − 3,20 €/Pal.) = 240.000 € ÷ 3,00 €/Pal. = **80.000 Paletten**

**Eigenlager:** 240.000 € + 3,20 €/Pal. × 65.000 Pal. = 240.000 € + 208.000 € = **448.000 €**

**Fremdvergabe:** 6,20 €/Pal. × 65.000 Pal. = **403.000 €**

**Ersparnis:** 448.000 € − 403.000 € = **45.000 €** zugunsten der Fremdvergabe.

Begründung: 65.000 Paletten liegen unter der kritischen Menge von 80.000 Paletten, deshalb ist Outsourcing günstiger. Steigt die Menge dauerhaft über 80.000 Paletten, wäre das Eigenlager günstiger. Qualitative Punkte (Flexibilität, Abhängigkeit, Know-how) gehören zusätzlich in die Entscheidung.`
    },
    {
      id: 'lf12-logistiksysteme-a8', type: 'calc', difficulty: 2, points: 2,
      q: `Bullwhip-Effekt in Zahlen (Beispielwerte, je Woche, 8 Wochen beobachtet):

| Stufe | niedrigster Wert | höchster Wert |
|---|---:|---:|
| Verkäufe an Endkunden (Baumarkt) | 950 Sack Zement | 1.050 Sack |
| Bestellungen Baumarkt beim Großhandel | 800 Sack | 1.200 Sack |
| Bestellungen Großhandel beim Zementwerk | 500 Sack | 1.700 Sack |

Berechne den Verstärkungsfaktor für den Baumarkt und für den Großhandel jeweils bezogen auf die Endkundennachfrage.`,
      formula: 'Verstärkungsfaktor = Schwankungsbreite der Bestellungen ÷ Schwankungsbreite der Endkundennachfrage; Schwankungsbreite = Höchstwert − Tiefstwert',
      fields: [
        { id: 'fb', label: 'Verstärkungsfaktor Baumarkt', unit: 'fach', answer: 4, tol: 0.01 },
        { id: 'fg', label: 'Verstärkungsfaktor Großhandel', unit: 'fach', answer: 12, tol: 0.01 }
      ],
      hints: ['Berechne zuerst die Schwankungsbreite jeder Stufe.', 'Teile jeweils durch die Schwankungsbreite der Endkunden (100 Sack).'],
      solution: `**Schwankungsbreiten:** Endkunden 1.050 − 950 = 100 Sack; Baumarkt 1.200 − 800 = 400 Sack; Großhandel 1.700 − 500 = 1.200 Sack.

**Baumarkt:** 400 Sack ÷ 100 Sack = **4**

**Großhandel:** 1.200 Sack ÷ 100 Sack = **12**

Die Schwankung ist beim Großhandel zwölfmal so groß wie beim Endkunden – typisch für den Bullwhip-Effekt: Jede Stufe verstärkt die Schwankung ihrer Kunden.`
    },
    {
      id: 'lf12-logistiksysteme-a9', type: 'text', difficulty: 3, points: 4,
      q: 'Erkläre zwei Ursachen des Bullwhip-Effekts und schlage zwei Gegenmaßnahmen vor, die eine Spedition als Logistikdienstleister unterstützen kann.',
      model: 'Ursachen: Jede Stufe kennt nur die Bestellungen ihres direkten Kunden und nicht die tatsächliche Endkundennachfrage; sie legt eigene Sicherheitszuschläge auf. Außerdem werden Bestellungen zu großen Losen gesammelt, und Preisaktionen führen zu Vorratskäufen. Gegenmaßnahmen: Die Spedition kann Abverkaufs- und Bestandsdaten per EDI an alle Stufen weitergeben (Informationsaustausch) und durch kleinere, häufigere Lieferungen mit kurzen Lieferzeiten die Losgrößen senken, z. B. über ein Vendor Managed Inventory.',
      criteria: [
        { text: 'nennt fehlende Information über die Endkundennachfrage oder Sicherheitszuschläge', keywords: ['Information|Endkunde|Nachfrage', 'Zuschl|Sicherheit|Prognose'], points: 1 },
        { text: 'nennt Losgrößen, Aktionen oder lange Lieferzeiten als Ursache', keywords: ['Los|Aktion|Rabatt|Lieferzeit|Rationier'], points: 1 },
        { text: 'nennt Datenaustausch als Gegenmaßnahme', keywords: ['Daten|EDI|teilen|Austausch|Transparenz'], points: 1 },
        { text: 'nennt kleinere/häufigere Lieferungen, kürzere Lieferzeiten oder VMI', keywords: ['häufig|klein|kürzer|VMI|Vendor'], points: 1 }
      ],
      hints: ['Was weiß der Großhändler über die Verkäufe im Baumarkt?', 'Was kann eine Spedition beim Informations- und beim Warenfluss verbessern?'],
      solution: '**Ursachen** (zwei davon): fehlende Kenntnis der Endkundennachfrage mit eigenen Sicherheitszuschlägen, Losgrößenbildung, Preisaktionen/Mengenrabatte, Rationierungsspiel bei Knappheit, lange Lieferzeiten. **Gegenmaßnahmen** (zwei davon): Endkunden- und Bestandsdaten teilen (EDI), gemeinsame Prognose, kleinere und häufigere Lieferungen, kürzere Lieferzeiten, Vendor Managed Inventory, stabile Preise.'
    },
    {
      id: 'lf12-logistiksysteme-a10', type: 'mc', difficulty: 2, points: 1,
      q: 'Für welche Leistung einer Spedition sind die **Logistik-AGB 2019** gedacht?',
      options: [
        'Für den grenzüberschreitenden Straßengütertransport nach CMR',
        'Für die Montage von Displays und die Preisauszeichnung im Auftrag eines Händlers',
        'Für alle Verträge mit Privatkunden (Verbrauchern)',
        'Für Schwertransporte mit Sondergenehmigung und Kranarbeiten'
      ],
      correct: [1],
      hints: ['Die Logistik-AGB betreffen speditionsunübliche Zusatzleistungen.', 'Verbraucherverträge und Schwertransporte sind ausdrücklich ausgenommen.'],
      solution: 'Richtig ist **B**. Die Logistik-AGB 2019 sind für **logistische Zusatzleistungen** gedacht, die nicht unter Transport-, Speditions- oder Lagervertrag fallen, z. B. Montage, Qualitätskontrolle, Preisauszeichnung, Regalservice. Für den Transport gelten HGB/CMR und ADSp. Verbraucherverträge sowie Schwer- und Großraumtransporte mit Sondergenehmigung und Kranleistungen sind vom Anwendungsbereich ausgenommen. Sie gelten nur, wenn sie vereinbart werden.'
    },
    {
      id: 'lf12-logistiksysteme-a11', type: 'case', difficulty: 3, points: 9,
      q: 'Fall: Kontraktlogistik-Angebot für die Saarpfalz Antriebstechnik GmbH',
      intro: `Die **Saarpfalz Antriebstechnik GmbH** (fiktiv) in St. Ingbert fertigt Getriebe. Sie bezieht Gussgehäuse bisher **nur von einer Gießerei in Polen**. Nach einem Brand dort stand die Produktion zwei Wochen still. Außerdem möchte die Geschäftsleitung Lager, Linienversorgung und Leergutrückführung an einen Dienstleister vergeben, um sich auf die Fertigung zu konzentrieren.

Du arbeitest bei der Saar-Trans Spedition GmbH im Vertrieb Kontraktlogistik und bereitest das Gespräch vor.`,
      hints: ['Trenne die Sourcing-Frage (Lieferanten) von der Frage, welche Logistik vergeben wird.', 'Bewerte nach Kosten, Produktionssicherheit und Umweltschutz.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf12-logistiksysteme-a11-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Sourcing-Konzepte beschreiben die bisherige Beschaffung der Gussgehäuse? (Mehrfachauswahl)',
          options: ['Single Sourcing', 'Multiple Sourcing', 'Global Sourcing (hier: Beschaffung im Ausland)', 'Insourcing'],
          correct: [0, 2],
          hints: ['Wie viele Lieferanten gibt es für das Teil?', 'Wo sitzt der Lieferant?'],
          solution: '**Single Sourcing** (nur eine Gießerei) und Beschaffung im Ausland, also **Global Sourcing** im weiteren Sinn. Multiple Sourcing würde mehrere Lieferanten voraussetzen; Insourcing hieße Eigenfertigung.'
        },
        {
          id: 'lf12-logistiksysteme-a11-2', type: 'text', difficulty: 3, points: 4,
          q: 'Empfiehl der Saarpfalz Antriebstechnik ein Sourcing-Konzept für die Gussgehäuse und begründe es unter den Kategorien Kosten, Produktionssicherheit und Umweltschutz.',
          model: 'Ich empfehle Dual Sourcing: neben der polnischen Gießerei ein zweiter, möglichst regionaler Lieferant (Local Sourcing), z. B. im Saarland oder in Lothringen. Produktionssicherheit: Fällt ein Lieferant aus, kann der zweite liefern, ein Stillstand wie nach dem Brand wird vermieden. Kosten: Die Mengen je Lieferant sinken, dadurch evtl. etwas höhere Stückpreise; dafür entfallen Stillstandskosten und Sicherheitsbestände können sinken, der Wettbewerb bleibt erhalten. Umweltschutz: Ein naher Lieferant verkürzt Transportwege und senkt die Emissionen.',
          criteria: [
            { text: 'empfiehlt Dual oder Multiple Sourcing', keywords: ['Dual|Multiple|zweit'], points: 1 },
            { text: 'begründet mit Produktionssicherheit/Ausfallrisiko', keywords: ['Ausfall|Sicherheit|Stillstand|Risiko'], points: 1 },
            { text: 'bewertet Kosten', keywords: ['Kosten|Preis|Rabatt|Bestand'], points: 1 },
            { text: 'bewertet Umweltschutz', keywords: ['Umwelt|Emission|CO|Weg|regional|lokal'], points: 1 }
          ],
          hints: ['Welches Risiko hat sich beim Brand gezeigt?', 'Ein zweiter Lieferant in der Nähe hilft bei Sicherheit und Umwelt.'],
          solution: 'Sinnvoll ist **Dual Sourcing** (ggf. Multiple), idealerweise mit einem **regionalen** zweiten Lieferanten. **Sicherheit**: kein Totalausfall mehr. **Kosten**: evtl. höhere Stückpreise durch kleinere Mengen, aber Wettbewerb und Vermeidung teurer Stillstände. **Umwelt**: kürzere Wege beim regionalen Lieferanten. Andere Lösungen sind vertretbar, wenn sie alle drei Kategorien begründet abdecken.'
        },
        {
          id: 'lf12-logistiksysteme-a11-3', type: 'mc', difficulty: 3, points: 3,
          q: 'Saar-Trans soll Lager, Linienversorgung und Leergutrückführung mit einem Vertrag über fünf Jahre übernehmen. Welche Aussagen sind richtig? (Mehrfachauswahl)',
          options: [
            'Saar-Trans tritt hier als 3PL (Kontraktlogistiker) auf.',
            'Die Leergutrückführung ist Teil der Entsorgungslogistik.',
            'Für die Saarpfalz Antriebstechnik werden Fixkosten teilweise zu variablen Kosten.',
            'Saar-Trans trägt kein Risiko, weil der Vertrag fünf Jahre läuft.',
            'Saar-Trans tritt als 4PL auf, weil sie mehrere Subsysteme übernimmt.'
          ],
          correct: [0, 1, 2],
          hints: ['Wer übernimmt mit eigenen Ressourcen ein Leistungsbündel?', 'Was passiert mit kundenspezifischen Investitionen nach Vertragsende?'],
          solution: 'Richtig sind **A, B, C**. Saar-Trans übernimmt mit eigenen Ressourcen ein Leistungsbündel → **3PL**. Leergut ist ein Rückfluss → **Entsorgungslogistik**. Beim Kunden entfallen eigene Lagerfixkosten, er zahlt mengenabhängig. **D** ist falsch: Kundenspezifische Investitionen (Regale, IT) sind ein Risiko, wenn der Vertrag nicht verlängert wird oder Mengen sinken. **E** ist falsch: Ein 4PL steuert die gesamte Kette und koordiniert andere Dienstleister, meist ohne eigene Assets.'
        }
      ]
    },
    {
      id: 'lf12-logistiksysteme-a12', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Online-Händler hat sein Lager vor vier Jahren an einen Dienstleister vergeben. Wegen häufiger Kommissionierfehler und langsamer Reaktion auf Aktionen übernimmt er das Lager wieder selbst. Wie heißt dieser Vorgang?',
      options: ['Outsourcing', 'Insourcing', 'Modular Sourcing', 'Multiple Sourcing'],
      correct: [1],
      hints: ['Die Leistung wandert vom Dienstleister zurück ins Unternehmen.', 'Das Gegenteil von Outsourcing.'],
      solution: '**Insourcing**: Eine ausgelagerte Leistung wird zurück ins eigene Unternehmen geholt, z. B. um Kontrolle über Qualität und Reaktionsgeschwindigkeit zurückzugewinnen. Nachteil: Investitionen und Fixkosten steigen wieder.'
    }
  ],
  quiz: ['lf12-logistiksysteme-a1', 'lf12-logistiksysteme-a3', 'lf12-logistiksysteme-a5', 'lf12-logistiksysteme-a7', 'lf12-logistiksysteme-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 12, Inhalte: Teilsysteme der Logistik, Sourcingkonzepte' },
    { title: 'Kreislaufwirtschaftsgesetz § 6 Abfallhierarchie', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__6.html', asOf: '2026' },
    { title: 'Kreislaufwirtschaftsgesetz § 23 Produktverantwortung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__23.html', asOf: '2026' },
    { title: 'Logistik-AGB 2019 (Allgemeine Geschäftsbedingungen für Logistikleistungen), Nr. 1 Anwendungsbereich', publisher: 'DSLV Bundesverband Spedition und Logistik / ILRM; Empfehlung von DSLV, BGL und AMÖ (abgerufene Kopie)', url: 'https://www.dhl.com/content/dam/dhl/local/de/dhl-freight/documents/pdf/logistik-agb-2019.pdf', asOf: '2019 (geprüft 2026)' }
  ],
  links: ['lf12-bestellmenge', 'lf12-jit-abc', 'lf04-fahrzeugplanung', 'lf09-lager-grundlagen', 'lf08-angebotsvergleich']
};
