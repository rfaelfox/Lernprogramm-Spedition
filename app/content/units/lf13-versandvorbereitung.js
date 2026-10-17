export default {
  id: 'lf13-versandvorbereitung',
  area: 'LF13',
  topic: 'lf13-kommissionierung',
  title: 'Versandvorbereitung in der Distribution',
  status: 'vollstaendig',
  minutes: 50,
  validity: {
    asOf: '2026-10',
    note: 'Verpackungsrecht: Seit dem 12.08.2026 gelten die EU-Verpackungsverordnung (EU) 2025/40 (PPWR) und das Verpackungsrecht-Durchführungsgesetz (VerpackDG); das bisherige Verpackungsgesetz ist außer Kraft. Registrierung im Verpackungsregister LUCID der Zentralen Stelle Verpackungsregister und Systembeteiligung für Verpackungen, die typischerweise beim privaten Endverbraucher anfallen, laut ZSVR (geprüft 17.10.2026). Frachtbrief nach § 408 HGB. Leistungswerte, Zeiten, Maße und Kosten in den Aufgaben sind Beispielwerte (Bezugsjahr 2026).'
  },
  goals: [
    'Ich kann den Ablauf der Auftragsabwicklung in einem Distributionslager vom Auftragseingang bis zum Versandavis beschreiben.',
    'Ich kann Lastenheft und Pflichtenheft eines Distributionsauftrags unterscheiden.',
    'Ich kann die Kommissionierleistung (Positionen bzw. Picks je Stunde) aus Zeitanteilen berechnen und daraus den Personalbedarf ermitteln.',
    'Ich kann die Produktivität der Versandabwicklung (Sendungen pro Tag und je Mitarbeiterstunde) berechnen und beurteilen.',
    'Ich kann die Funktionen der Verpackung nennen und die Grundpflichten des Verpackungsrechts (Registrierung, Systembeteiligung) einordnen.',
    'Ich kann für Kartons eine Palettenbeladung berechnen und Ladungsträger fachgerecht bilden und kennzeichnen.',
    'Ich kann die nötigen Versandpapiere einer Sendung zusammenstellen und Value Added Services als Zusatzgeschäft einer Spedition erklären.'
  ],
  simple: `# Worum geht es?

Ein Händler bestellt bei der Spedition, die das Lager seines Lieferanten betreibt, 40 Kartons Ware. Bis diese Ware auf dem Lkw steht, passiert viel: Der **Auftrag** wird geprüft, die Ware wird **kommissioniert** (zusammengesucht), **kontrolliert**, **verpackt**, auf eine **Palette** gestellt, **gekennzeichnet**, mit **Papieren** versehen und an der Rampe **bereitgestellt**. Das alles nennt man **Versandvorbereitung**.

# Die Schritte in Kurzform

1. **Auftrag annehmen und prüfen** – Ist alles lieferbar? Wann muss die Ware beim Kunden sein?
2. **Kommissionieren** – die Artikel aus dem Lager holen (Verfahren siehe Einheit „Lagerorganisation, Lagerpapiere und Lagerkennzahlen“).
3. **Kontrollieren und verpacken** – Stimmen Artikel und Menge? Ist die Ware geschützt?
4. **Ladungsträger bilden** – Kartons auf Paletten stapeln, wickeln, sichern.
5. **Kennzeichnen** – Versandetikett mit **NVE/SSCC** und Barcode (siehe Einheit „Systemverkehre, KEP-Dienste und Sendungsverfolgung“).
6. **Papiere erstellen** – Lieferschein, Packliste, Frachtbrief, ggf. Gefahrgut- oder Zollpapiere.
7. **Bereitstellen und verladen** – nach Tour sortiert an der Rampe; der Empfänger bekommt ein **Versandavis**.

# Warum ist das für die Spedition wichtig?

Viele Speditionen verdienen nicht nur am Transport, sondern auch an diesen Lagerarbeiten. Je schneller und fehlerfreier sie arbeiten, desto günstiger und zuverlässiger ist ihr Angebot. Deshalb misst man die **Kommissionierleistung** (Picks je Stunde) und die **Produktivität des Versands** (Sendungen pro Tag).`,
  deep: `# 1. Distributionsauftrag: Lastenheft und Pflichtenheft

Übernimmt eine Spedition die Distribution für einen Kunden (Kontraktlogistik), werden die Anforderungen schriftlich festgelegt:

| | Lastenheft | Pflichtenheft |
|---|---|---|
| Wer erstellt es? | der **Auftraggeber** (Verlader, Händler, Hersteller) | der **Auftragnehmer** (Logistikdienstleister) |
| Frage | **Was** soll geleistet werden? | **Wie** und **womit** wird es umgesetzt? |
| Inhalt (Beispiele) | Artikelzahl, Mengen, Auftragsstruktur, Lieferzeiten, gewünschter Lieferbereitschaftsgrad, Verpackungs- und Kennzeichnungsvorgaben | Lagertechnik, Kommissionierverfahren, Personal- und Schichtplanung, IT-Schnittstellen (z. B. EDI), Kennzahlen und Berichte, Preise |

Das Pflichtenheft wird meist Bestandteil des Logistikvertrags. Die vereinbarten Kennzahlen (z. B. Fehlerquote, Liefertreue) werden in der Einheit „Distributions- und Logistikkennzahlen“ behandelt.

# 2. Auftragsabwicklung im Distributionslager

| Schritt | Inhalt |
|---|---|
| **Auftragseingang** | per EDI, Webportal oder Schnittstelle zum Warenwirtschaftssystem des Kunden; Auftragsdaten: Empfänger, Artikel, Mengen, Liefertermin, Lieferbedingungen |
| **Auftragsprüfung** | Bestand verfügbar? Termin machbar? Sonderwünsche (Etikettierung, Avis, Zeitfenster)? |
| **Auftragsfreigabe und Tourenzuordnung** | Der Auftrag wird einer Tour bzw. einem Versandweg (eigener Nahverkehr, Stückgutnetz, KEP) zugeordnet; daraus ergibt sich der **Kommissionierschluss** (spätester Zeitpunkt für das Fertigstellen). |
| **Kommissionierung** | Erzeugen der Picklisten bzw. Scanner- oder Pick-by-Voice-Aufträge; Entnahme nach FIFO/FEFO |
| **Kontrolle** | Scan-Kontrolle, Zählkontrolle oder Kontrollwiegung |
| **Verpackung und Ladungsträgerbildung** | Packstück bilden, Palette packen, wickeln, Kantenschutz |
| **Kennzeichnung** | Versandetikett mit NVE/SSCC, Empfänger, Gewicht; ggf. Gefahrgutkennzeichnung, Handhabungssymbole |
| **Versandpapiere** | Lieferschein, Packliste, Frachtbrief/Bordero, ggf. ADR- und Zollpapiere |
| **Bereitstellung und Verladung** | in der Versandzone nach Tour und Ladereihenfolge (zuletzt ausgeliefert = zuerst geladen) |
| **Versandavis und Warenausgangsbuchung** | elektronische Versandmeldung an den Empfänger (z. B. als EDI-Nachricht), Ausbuchen im LVS |
| **Ablieferung und Abrechnung** | Ablieferbeleg (POD), Rückmeldung an den Kunden, Abrechnung der Lager- und Versandleistungen |

# 3. Kommissionierleistung und Personalbedarf

Die **Kommissionierzeit** eines Auftrags setzt sich aus mehreren Anteilen zusammen:

| Zeitanteil | Beispiel |
|---|---|
| **Basiszeit** (je Auftrag) | Auftrag annehmen, Scanner anmelden, Behälter oder Palette holen, Abgabe |
| **Wegzeit** (je Position) | Fahren oder Gehen zum Lagerplatz |
| **Greifzeit** (je Position) | Entnehmen und Ablegen der Ware |
| **Totzeit** (je Position) | Suchen, Lesen, Scannen, Kontrollieren |

**Zeit je Auftrag = Basiszeit + Anzahl Positionen × (Weg- + Greif- + Totzeit)**

**Kommissionierleistung (Positionen je Stunde) = 3.600 s ÷ Zeit je Position** (ohne Basiszeit) bzw. **= Positionen je Auftrag × 3.600 s ÷ Zeit je Auftrag** (mit Basiszeit)

> Ein **Pick** ist meist eine Entnahme an einem Lagerplatz (eine **Position**, auch Auftragszeile). Manche Betriebe zählen stattdessen Greifeinheiten (Stück). In Aufgaben immer auf die Definition achten.

**Personalbedarf**

1. Benötigte Kommissionierstunden = Positionen je Tag ÷ Positionen je Stunde
2. Kommissionierer netto = benötigte Stunden ÷ produktive Stunden je Mitarbeiter und Tag
3. Kommissionierer brutto = netto ÷ (1 − Ausfallquote) – Ausfälle durch Urlaub, Krankheit, Schulungen
4. **Immer aufrunden**, denn ein „halber“ Mitarbeiter reicht nicht.

# 4. Produktivität der Versandabwicklung

Der Rahmenlehrplan nennt ausdrücklich die **Produktivität der Versandabwicklung (Sendungen pro Tag)**.

- **Sendungen pro Tag** = Sendungen eines Zeitraums ÷ Arbeitstage
- **Sendungen je Mitarbeiterstunde** = Sendungen pro Tag ÷ (Mitarbeiter × Arbeitsstunden je Tag)

Die Kennzahl wird im **Zeitvergleich** (Monat zu Monat) oder im **Betriebsvergleich** (Standort A zu Standort B) genutzt. Sie ist nur aussagekräftig, wenn die Sendungsstruktur ähnlich ist: 100 Pakete sind weniger Arbeit als 100 Mischpaletten.

# 5. Verpackung

**Funktionen der Verpackung**

| Funktion | Bedeutung |
|---|---|
| **Schutzfunktion** | schützt das Gut vor Stoß, Druck, Feuchtigkeit, Diebstahl – und die Umwelt vor dem Gut (z. B. Gefahrgut) |
| **Lager- und Stapelfunktion** | macht Güter stapelbar und lagerfähig |
| **Transport- und Ladefunktion** | bildet handliche, fördertechnikgerechte Einheiten; erleichtert Umschlag und Ladungssicherung |
| **Informationsfunktion** | trägt Etiketten, Barcodes, Handhabungshinweise („oben“, „zerbrechlich“), Gefahrgutkennzeichen |
| **Verkaufs- und Werbefunktion** | bei Verkaufsverpackungen: Werbung, Produktinformation |

**Arten:** **Verkaufsverpackung** (umschließt die Ware beim Endkunden, z. B. Flasche), **Umverpackung** (fasst mehrere Verkaufseinheiten zusammen, z. B. Sixpack-Karton), **Transportverpackung** (erleichtert Transport und Umschlag, z. B. Palette mit Stretchfolie, Gitterbox).

**Verpackungsrecht (Stand Oktober 2026, nur Grundzüge)**

- Seit dem **12.08.2026** gelten die **EU-Verpackungsverordnung (EU) 2025/40 (PPWR)** und das deutsche **Verpackungsrecht-Durchführungsgesetz (VerpackDG)**. Das frühere Verpackungsgesetz ist außer Kraft. Viele Grundpflichten bestehen fort.
- **Registrierung:** Hersteller von Verpackungen im Sinne der PPWR müssen sich im Verpackungsregister **LUCID** der **Zentralen Stelle Verpackungsregister (ZSVR)** registrieren; die Registrierung ist kostenlos.
- **Systembeteiligung:** Für Verpackungen, die typischerweise beim **privaten Endverbraucher** als Abfall anfallen (gelber Sack/gelbe Tonne, Papier, Glas), muss der Verpflichtete einen Vertrag mit einem **Systembetreiber** (duales System) schließen und dadurch die Entsorgung finanzieren. Dazu können auch Versandkartons im Onlinehandel gehören.
- **Transportverpackungen**, die **nicht** beim privaten Endverbraucher anfallen (z. B. Stretchfolie und Paletten im Handel zwischen Unternehmen), sind nicht systembeteiligungspflichtig. Für sie gelten Rücknahmepflichten – siehe Einheit „Entsorgungs- und Recyclinglogistik“.
- Wer verpflichtet ist, hängt von der **Rolle in der Lieferkette** ab. Der Logistikdienstleister, der nur im Auftrag verpackt, sollte im Logistikvertrag klären, wer die Herstellerpflichten trägt. Im Einzelfall die Hinweise der ZSVR prüfen.

# 6. Ladungsträgerbildung

Ladungsträger (Ladehilfsmittel) sind z. B. **Europalette** (1.200 × 800 mm), **Gitterbox**, **Rollcontainer**, Kleinladungsträger (KLT). Regeln für eine gute Palette:

- Grundfläche voll ausnutzen, **nicht über die Palettenkante** stapeln (Überstand führt zu Schäden).
- Schwere Packstücke **unten**, leichte oben; Verbundstapelung für Stabilität.
- **Höchstladehöhe** und **Höchstgewicht** nach Kundenvorgabe, Fahrzeug, Regalfach oder Netzwerk einhalten.
- Sichern durch **Stretch- oder Schrumpffolie**, Umreifung, Kantenschutz, Zwischenlagen.

**Berechnung Kartons je Palette**

1. Kartons je Lage: Palettenlänge ÷ Kartonlänge (abrunden) × Palettenbreite ÷ Kartonbreite (abrunden) – **beide Ausrichtungen prüfen**.
2. Anzahl Lagen: (Höchstladehöhe − Palettenhöhe) ÷ Kartonhöhe (abrunden).
3. Kartons je Palette = Kartons je Lage × Lagen.
4. Benötigte Paletten = Kartons gesamt ÷ Kartons je Palette (**aufrunden**).

# 7. Kennzeichnung

Jede Versandeinheit erhält ein **Versandetikett**, meist nach dem **GS1-Transportetikett** mit der **NVE/SSCC** als Strichcode. Aufbau und Nutzen der NVE stehen in der Einheit „Systemverkehre, KEP-Dienste und Sendungsverfolgung“. Zusätzlich je nach Gut: Handhabungssymbole, Gefahrgutkennzeichnung (Einheit „Gefahrgut auf der Straße: ADR-Grundlagen“), Kundenetiketten des Empfängers.

# 8. Versandpapiere

| Papier | Zweck | mehr dazu in |
|---|---|---|
| **Lieferschein** | listet die gelieferten Artikel und Mengen für den Empfänger | – |
| **Packliste** | zeigt, was in welchem Packstück steckt (wichtig bei Mischpaletten und im Export) | – |
| **Frachtbrief** (§ 408 HGB) bzw. **CMR-Frachtbrief** | Beweisurkunde über den Frachtvertrag | „Frachtvertrag und Haftung nach HGB“, „Grenzüberschreitender Straßengüterverkehr (CMR)“ |
| **Bordero / Ladeliste** | Liste aller Sendungen einer Tour oder eines Hauptlaufs | „Ablauf des Sammelgutverkehrs und Rückrechnung“ |
| **Beförderungspapier nach ADR** | bei Gefahrgut | „Gefahrgut auf der Straße: ADR-Grundlagen“ |
| **Ausfuhrbegleitdokument, Handelsrechnung** | bei Export in Drittländer | „Ausfuhrverfahren und Exportpapiere“ |

# 9. Value Added Services (Mehrwertdienste)

Leistungen über Lagern und Transportieren hinaus, die der Kunde sonst selbst erledigen müsste:

- **Etikettieren** und Preisauszeichnen, Umetikettieren für bestimmte Händler
- **Konfektionieren** (Sets bilden), **Displaybau** für den Handel, Beilagen einlegen
- **Qualitätskontrolle** im Wareneingang, Funktionsprüfung
- **Vormontage**, Installation, Software aufspielen (z. B. bei Elektrogeräten)
- **Retourenbearbeitung** (siehe Einheit „Entsorgungs- und Recyclinglogistik“), Aufbereitung
- **Zollabwicklung**, Fakturierung im Namen des Kunden, Inkasso (Nachnahme)

Vorteile für die Spedition: **zusätzlicher Umsatz**, engere **Kundenbindung** (der Kunde wechselt schwerer den Dienstleister), bessere Auslastung des Personals. Risiken: höhere Haftung, Investitionen, Abhängigkeit von einem Kunden.`,
  terms: [
    { term: 'Versandvorbereitung', def: 'Alle Tätigkeiten zwischen Auftragsfreigabe und Verladung: Kommissionieren, Kontrollieren, Verpacken, Ladungsträger bilden, Kennzeichnen, Papiere erstellen, Bereitstellen.' },
    { term: 'Lastenheft', def: 'Vom Auftraggeber erstellte Beschreibung, was der Logistikdienstleister leisten soll (Anforderungen).' },
    { term: 'Pflichtenheft', def: 'Vom Auftragnehmer erstellte Beschreibung, wie und womit die Anforderungen des Lastenhefts umgesetzt werden.' },
    { term: 'Position (Pick)', def: 'Eine Auftragszeile bzw. eine Entnahme an einem Lagerplatz, unabhängig von der Stückzahl.' },
    { term: 'Kommissionierleistung', def: 'Anzahl der Positionen (Picks) oder Aufträge, die ein Kommissionierer je Stunde bearbeitet.' },
    { term: 'Basiszeit', def: 'Zeitanteil, der einmal je Kommissionierauftrag anfällt, z. B. Auftrag übernehmen, Behälter holen, Ware abgeben.' },
    { term: 'Ausfallquote', def: 'Anteil der Arbeitszeit, der durch Urlaub, Krankheit oder Schulung ausfällt; erhöht den Bruttopersonalbedarf.' },
    { term: 'Transportverpackung', def: 'Verpackung, die Transport und Umschlag erleichtert und Schäden verhindert, z. B. Palette mit Stretchfolie.' },
    { term: 'Systembeteiligung', def: 'Vertrag mit einem dualen System, das die Sammlung und Verwertung von Verpackungen finanziert, die typischerweise beim privaten Endverbraucher anfallen.' },
    { term: 'Zentrale Stelle Verpackungsregister (ZSVR)', def: 'Stelle, die das Verpackungsregister LUCID führt und die Einhaltung der Registrierungs- und Beteiligungspflichten überwacht.' },
    { term: 'Versandavis', def: 'Vorabmeldung an den Empfänger über Inhalt, Packstücke und Ankunft einer Sendung, meist elektronisch.' },
    { term: 'Value Added Services', def: 'Mehrwertdienste über Lagerung und Transport hinaus, z. B. Etikettieren, Konfektionieren, Retourenbearbeitung.' }
  ],
  example: `# Westpfalz-Saar Logistik GmbH, Homburg – Distribution für einen Sportartikelhersteller (Beispiel)

Die Westpfalz-Saar Logistik betreibt das Distributionslager eines Sportartikelherstellers und beliefert von dort Sportfachgeschäfte in Deutschland, Luxemburg und Frankreich.

**Lastenheft des Herstellers (Auszug):** 3.800 Artikel, im Mittel 9.000 Positionen am Tag, Bestellungen bis 14:00 Uhr müssen das Lager am selben Tag verlassen, Fehlerquote höchstens 0,1 %, Etikettierung mit Preisetiketten der Händler.

**Pflichtenheft der Spedition (Auszug):** Kommissionierung Mann-zur-Ware mit Pick by Voice, Leistung im Plan 100 Positionen je Stunde, zwei Schichten, Kontrollwiegung jeder Versandeinheit, Preisauszeichnung als Value Added Service, tägliche Kennzahlenmeldung.

**Ein Auftrag am Dienstag, 10:12 Uhr:** Ein Sportgeschäft in Saarlouis bestellt per EDI 18 Positionen.
1. Das LVS prüft den Bestand und ordnet den Auftrag der Nahverkehrstour „Saar-West“ zu (Kommissionierschluss 15:30 Uhr).
2. Ein Kommissionierer arbeitet den Auftrag mit Pick by Voice ab, die Kartons kommen in eine Versandkiste.
3. An der Packstation werden die Artikel mit den Preisetiketten des Händlers versehen, in zwei Versandkartons verpackt und gewogen. Das Gewicht stimmt mit dem Sollgewicht aus den Stammdaten überein.
4. Beide Kartons erhalten ein GS1-Transportetikett mit NVE und werden mit anderen Sendungen der Tour auf eine Palette gestellt.
5. Das System druckt Lieferschein und Ladeliste und schickt dem Sportgeschäft ein Versandavis mit den beiden NVE.
6. Um 16:10 Uhr verlässt die Tour das Lager.

**Kennzahl am Abend:** Der Versand hat mit 6 Mitarbeitern in 7,5 Stunden 1.260 Sendungen abgefertigt: 1.260 ÷ (6 × 7,5) = **28 Sendungen je Mitarbeiterstunde**.`,
  rules: [
    'Lastenheft = Was will der Kunde (Auftraggeber)? Pflichtenheft = Wie setzt der Dienstleister es um?',
    'Zeit je Auftrag = Basiszeit + Positionen × (Weg- + Greif- + Totzeit); die Wegzeit ist meist der größte Anteil.',
    'Personalbedarf: Stunden = Positionen ÷ Leistung, dann ÷ produktive Stunden je Mitarbeiter, dann ÷ (1 − Ausfallquote) und immer aufrunden.',
    'Beim Palettieren beide Ausrichtungen des Kartons prüfen; Kartons je Lage und Lagen abrunden, Anzahl Paletten aufrunden.',
    'Nicht über die Palettenkante stapeln, schwere Packstücke nach unten.',
    'Jede Versandeinheit bekommt ein Etikett mit NVE/SSCC; Papiere und Avis müssen zu den Etiketten passen.',
    'Verpackungsrecht seit 12.08.2026: PPWR und VerpackDG; Registrierung in LUCID und Systembeteiligung für Verpackungen, die beim privaten Endverbraucher anfallen.'
  ],
  summary: `- **Ablauf:** Auftragseingang → Prüfung → Freigabe/Tourenzuordnung → Kommissionierung → Kontrolle → Verpackung → Ladungsträgerbildung → Kennzeichnung (NVE) → Papiere → Bereitstellung → Verladung, Avis, Ausbuchung.
- **Lastenheft** (Kunde: was) und **Pflichtenheft** (Dienstleister: wie).
- **Kommissionierleistung** = 3.600 s ÷ Zeit je Position; mit Basiszeit über die Zeit je Auftrag rechnen.
- **Personalbedarf** = Positionen ÷ Leistung ÷ produktive Stunden ÷ (1 − Ausfallquote), aufrunden.
- **Produktivität Versand** = Sendungen pro Tag bzw. je Mitarbeiterstunde.
- **Verpackung:** Schutz-, Lager-, Transport-, Informations-, Verkaufsfunktion; Verpackungsrecht seit 12.08.2026 nach PPWR und VerpackDG.
- **Value Added Services** bringen Zusatzumsatz und Kundenbindung.`,
  mistakes: [
    { wrong: 'Das Pflichtenheft schreibt der Kunde.', right: 'Der Kunde schreibt das Lastenheft (Anforderungen). Das Pflichtenheft erstellt der Dienstleister als Antwort darauf.' },
    { wrong: 'Bei der Kommissionierleistung zählt die Basiszeit je Position.', right: 'Die Basiszeit fällt einmal je Auftrag an. Je mehr Positionen ein Auftrag hat, desto weniger fällt sie je Position ins Gewicht.' },
    { wrong: 'Ergibt die Rechnung 22,2 Kommissionierer, plant man 22 ein.', right: 'Personalbedarf wird immer aufgerundet, hier auf 23, sonst wird das Tagesvolumen nicht geschafft.' },
    { wrong: 'Kartons je Lage = Palettenfläche ÷ Kartonfläche.', right: 'Die Flächenrechnung ergibt nur einen Höchstwert. Man muss je Richtung abrunden und beide Ausrichtungen des Kartons vergleichen.' },
    { wrong: 'Für die Stretchfolie auf Paletten zwischen Unternehmen muss ein duales System beteiligt werden.', right: 'Systembeteiligungspflichtig sind Verpackungen, die typischerweise beim privaten Endverbraucher anfallen. Für Transportverpackungen im B2B-Bereich gelten Rücknahmepflichten statt Systembeteiligung.' }
  ],
  flashcards: [
    { q: 'Was ist der Unterschied zwischen Lastenheft und Pflichtenheft?', a: 'Lastenheft: Anforderungen des Auftraggebers (was). Pflichtenheft: Umsetzungskonzept des Auftragnehmers (wie, womit).' },
    { q: 'Aus welchen Zeitanteilen besteht die Kommissionierzeit?', a: 'Basiszeit (je Auftrag), Wegzeit, Greifzeit und Totzeit (je Position).' },
    { q: 'Wie berechnet man Positionen je Stunde ohne Basiszeit?', a: '3.600 Sekunden ÷ Zeit je Position in Sekunden.' },
    { q: 'Wie berechnet man den Bruttopersonalbedarf?', a: 'Nettobedarf ÷ (1 − Ausfallquote), Ergebnis aufrunden.' },
    { q: 'Welche Kennzahl nennt der Rahmenlehrplan für den Versand?', a: 'Produktivität der Versandabwicklung, z. B. Sendungen pro Tag (oder je Mitarbeiterstunde).' },
    { q: 'Nenne fünf Funktionen der Verpackung.', a: 'Schutz-, Lager-/Stapel-, Transport-/Lade-, Informations- und Verkaufs-/Werbefunktion.' },
    { q: 'Welche Rechtsgrundlagen gelten seit dem 12.08.2026 für Verpackungen?', a: 'EU-Verpackungsverordnung (EU) 2025/40 (PPWR) und das Verpackungsrecht-Durchführungsgesetz (VerpackDG).' },
    { q: 'Wo registrieren sich Hersteller von Verpackungen?', a: 'Im Verpackungsregister LUCID der Zentralen Stelle Verpackungsregister (ZSVR), kostenlos.' },
    { q: 'Was steht auf einem GS1-Transportetikett im Mittelpunkt?', a: 'Die NVE/SSCC als Strichcode zur eindeutigen Identifikation der Versandeinheit.' },
    { q: 'Was ist eine Packliste?', a: 'Aufstellung, welche Artikel in welchem Packstück verpackt sind.' },
    { q: 'Nenne drei Value Added Services.', a: 'Z. B. Etikettieren/Preisauszeichnung, Konfektionieren/Displaybau, Retourenbearbeitung, Qualitätskontrolle, Vormontage.' },
    { q: 'In welcher Reihenfolge wird ein Lkw für eine Verteiltour beladen?', a: 'Die zuletzt auszuliefernde Sendung wird zuerst geladen (hinten), die erste Sendung zuletzt (an der Tür).' }
  ],
  tasks: [
    {
      id: 'lf13-versandvorbereitung-a1', type: 'order', difficulty: 2, points: 6,
      q: 'Bringe die Schritte der Auftragsabwicklung im Distributionslager in die richtige Reihenfolge.',
      items: [
        'Auftrag per EDI empfangen und Verfügbarkeit prüfen',
        'Auftrag freigeben und einer Tour zuordnen',
        'Artikel kommissionieren',
        'Kommissionierte Ware kontrollieren und verpacken',
        'Versandeinheit mit NVE-Etikett kennzeichnen und Papiere erstellen',
        'Nach Tour bereitstellen, verladen und Versandavis senden'
      ],
      hints: ['Ohne Freigabe gibt es keinen Kommissionierauftrag.', 'Das Etikett kommt erst auf die fertig gepackte Versandeinheit.'],
      solution: 'Auftragseingang und Prüfung → Freigabe/Tourenzuordnung (daraus folgt der Kommissionierschluss) → Kommissionierung → Kontrolle und Verpackung → Kennzeichnung und Papiere → Bereitstellung, Verladung und Avis. Kennzeichnung erst nach dem Verpacken, weil das Etikett die fertige Versandeinheit identifiziert.'
    },
    {
      id: 'lf13-versandvorbereitung-a2', type: 'match', difficulty: 2, points: 4,
      q: 'Ordne die Inhalte dem richtigen Dokument bzw. der richtigen Partei zu.',
      pairs: [
        ['Lastenheft', 'Kunde legt fest: 9.000 Positionen am Tag, Fehlerquote höchstens 0,1 %'],
        ['Pflichtenheft', 'Dienstleister beschreibt: Pick by Voice, zwei Schichten, Kontrollwiegung'],
        ['Packliste', 'zeigt, welche Artikel in welchem Packstück stecken'],
        ['Versandavis', 'meldet dem Empfänger vorab Packstücke und NVE der Sendung']
      ],
      hints: ['Wer fordert, wer setzt um?', 'Welche Papiere betreffen den Inhalt, welche die Vorabinformation?'],
      solution: 'Das **Lastenheft** enthält die Anforderungen des Kunden, das **Pflichtenheft** das Umsetzungskonzept des Dienstleisters. Die **Packliste** beschreibt den Inhalt der Packstücke, das **Versandavis** informiert den Empfänger vorab.'
    },
    {
      id: 'lf13-versandvorbereitung-a3', type: 'calc', difficulty: 2, points: 3,
      q: `Für einen typischen Auftrag im Lager der Westpfalz-Saar Logistik wurden folgende Zeiten gemessen (Beispielwerte):

- Basiszeit je Auftrag: 120 s
- Wegzeit je Position: 30 s
- Greifzeit je Position: 10 s
- Totzeit je Position: 8 s

Ein Auftrag hat im Mittel 8 Positionen. Berechne die Zeit je Auftrag, die Aufträge je Stunde und die Kommissionierleistung in Positionen je Stunde (auf zwei Dezimalstellen).`,
      formula: 'Zeit je Auftrag = Basiszeit + Positionen × (Weg + Greif + Tot); Positionen/h = Positionen je Auftrag × 3.600 ÷ Zeit je Auftrag',
      fields: [
        { id: 'zeit', label: 'Zeit je Auftrag', unit: 's', answer: 504, tol: 0.5 },
        { id: 'auf', label: 'Aufträge je Stunde', unit: 'Aufträge/h', answer: 7.14, tol: 0.01 },
        { id: 'pos', label: 'Positionen je Stunde', unit: 'Positionen/h', answer: 57.14, tol: 0.05 }
      ],
      hints: ['Zeit je Position: 30 + 10 + 8 Sekunden.', 'Eine Stunde hat 3.600 Sekunden.'],
      solution: `**Zeit je Position:** 30 s + 10 s + 8 s = 48 s

**Zeit je Auftrag:** 120 s + 8 × 48 s = 120 s + 384 s = **504 s** (8,4 min)

**Aufträge je Stunde:** 3.600 s ÷ 504 s = **7,14 Aufträge/h**

**Positionen je Stunde:** 8 × 3.600 s ÷ 504 s = 28.800 ÷ 504 = **57,14 Positionen/h**

Ohne Basiszeit wären es 3.600 ÷ 48 = 75 Positionen/h. Die Basiszeit senkt die Leistung deutlich; größere Aufträge oder das Bündeln von Aufträgen (zweistufige Kommissionierung) verbessern die Leistung.`
    },
    {
      id: 'lf13-versandvorbereitung-a4', type: 'calc', difficulty: 3, points: 3,
      q: `Im Weihnachtsgeschäft erwartet die Spedition 12.600 Positionen pro Tag. Ein Kommissionierer schafft 90 Positionen je Stunde und hat 7 produktive Stunden je Schichttag. Die Ausfallquote (Urlaub, Krankheit, Schulung) beträgt 20 %.

Berechne die benötigten Kommissionierstunden, den Nettopersonalbedarf und den Bruttopersonalbedarf je Tag.`,
      formula: 'Stunden = Positionen ÷ Leistung; netto = Stunden ÷ produktive Std.; brutto = netto ÷ (1 − Ausfallquote), aufrunden',
      fields: [
        { id: 'std', label: 'Kommissionierstunden', unit: 'h', answer: 140, tol: 0.01 },
        { id: 'netto', label: 'Nettopersonalbedarf', unit: 'Mitarbeiter', answer: 20, tol: 0.01 },
        { id: 'brutto', label: 'Bruttopersonalbedarf (Mitarbeiter im Plan)', unit: 'Mitarbeiter', answer: 25, tol: 0 }
      ],
      hints: ['Teile zuerst die Positionen durch die Leistung je Stunde.', 'Bei 20 % Ausfall stehen nur 80 % der geplanten Mitarbeiter tatsächlich zur Verfügung.'],
      solution: `**Kommissionierstunden:** 12.600 Positionen ÷ 90 Positionen/h = **140 h**

**Nettopersonalbedarf:** 140 h ÷ 7 h je Mitarbeiter = **20 Mitarbeiter**

**Bruttopersonalbedarf:** 20 ÷ (1 − 0,20) = 20 ÷ 0,8 = **25 Mitarbeiter**

Begründung: Von 25 eingeplanten Mitarbeitern fehlen im Mittel 20 % = 5, sodass 20 tatsächlich arbeiten. Ergäbe sich ein Bruchteil, müsste aufgerundet werden.`
    },
    {
      id: 'lf13-versandvorbereitung-a5', type: 'calc', difficulty: 3, points: 4,
      q: `Ein Hersteller liefert 400 Kartons Laufschuhe an ein Zentrallager im Saarland. Maße eines Kartons: 400 mm × 300 mm × 250 mm (L × B × H), Gewicht 14 kg. Die Kartons dürfen nicht gekippt werden (Höhe bleibt 250 mm). Gepackt wird auf Europaletten (1.200 × 800 mm, Höhe 144 mm). Die Gesamthöhe der beladenen Palette darf 1.800 mm nicht überschreiten, Überstand ist nicht erlaubt.

Berechne die Kartons je Lage (beste Ausrichtung), die Anzahl Lagen, die Kartons je Palette und die benötigte Anzahl Paletten.`,
      formula: 'Kartons je Palette = Kartons je Lage × Lagen; Paletten = Kartons ÷ Kartons je Palette (aufrunden)',
      fields: [
        { id: 'lage', label: 'Kartons je Lage', unit: 'Kartons', answer: 8, tol: 0 },
        { id: 'lagen', label: 'Anzahl Lagen', unit: 'Lagen', answer: 6, tol: 0 },
        { id: 'jepal', label: 'Kartons je Palette', unit: 'Kartons', answer: 48, tol: 0 },
        { id: 'pal', label: 'benötigte Paletten', unit: 'Paletten', answer: 9, tol: 0 }
      ],
      hints: ['Prüfe 400 mm entlang der 1.200-mm-Seite und alternativ 300 mm entlang der 1.200-mm-Seite.', 'Verfügbare Stapelhöhe = 1.800 mm − 144 mm.'],
      solution: `**Kartons je Lage**
- Ausrichtung 1: 1.200 ÷ 400 = 3 und 800 ÷ 300 = 2,67 → 2 → 3 × 2 = 6
- Ausrichtung 2: 1.200 ÷ 300 = 4 und 800 ÷ 400 = 2 → 4 × 2 = **8** (beste Ausrichtung)

**Lagen:** (1.800 mm − 144 mm) ÷ 250 mm = 1.656 ÷ 250 = 6,62 → **6 Lagen** (abrunden)

**Kartons je Palette:** 8 × 6 = **48 Kartons**

**Paletten:** 400 ÷ 48 = 8,33 → **9 Paletten** (aufrunden; die neunte Palette trägt 16 Kartons)

Kontrolle Gewicht: 48 × 14 kg = 672 kg Ware je voller Palette (zuzüglich Palettengewicht). Ob das zulässig ist, hängt von den Vorgaben des Kunden, des Regals und des Netzwerks ab.`
    },
    {
      id: 'lf13-versandvorbereitung-a6', type: 'calc', difficulty: 2, points: 3,
      q: `Die Versandabteilung am Standort Homburg hat im März an 21 Arbeitstagen 26.460 Sendungen abgefertigt. Täglich arbeiten 6 Mitarbeiter je 7,5 Stunden. Der Standort Saarlouis kommt im selben Monat auf 25 Sendungen je Mitarbeiterstunde.

Berechne für Homburg die Sendungen pro Tag, die Mitarbeiterstunden pro Tag und die Sendungen je Mitarbeiterstunde.`,
      formula: 'Sendungen je Mitarbeiterstunde = Sendungen pro Tag ÷ (Mitarbeiter × Stunden)',
      fields: [
        { id: 'tag', label: 'Sendungen pro Tag', unit: 'Sendungen', answer: 1260, tol: 0.5 },
        { id: 'mas', label: 'Mitarbeiterstunden pro Tag', unit: 'h', answer: 45, tol: 0.01 },
        { id: 'prod', label: 'Sendungen je Mitarbeiterstunde', unit: 'Sendungen/h', answer: 28, tol: 0.05 }
      ],
      hints: ['Teile die Monatsmenge durch die Arbeitstage.', '6 Mitarbeiter × 7,5 h.'],
      solution: `**Sendungen pro Tag:** 26.460 ÷ 21 = **1.260 Sendungen**

**Mitarbeiterstunden:** 6 × 7,5 h = **45 h**

**Produktivität:** 1.260 ÷ 45 = **28 Sendungen je Mitarbeiterstunde**

Homburg ist damit um 3 Sendungen je Stunde (12 %) produktiver als Saarlouis. Vor einer Bewertung muss geprüft werden, ob die Sendungsstruktur vergleichbar ist (Pakete oder Paletten, Anteil Gefahrgut und Export).`
    },
    {
      id: 'lf13-versandvorbereitung-a7', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zum Verpackungsrecht (Stand Oktober 2026) sind richtig? (Mehrfachauswahl)',
      options: [
        'Seit dem 12.08.2026 gelten die EU-Verpackungsverordnung (PPWR) und das Verpackungsrecht-Durchführungsgesetz (VerpackDG).',
        'Hersteller im Sinne der PPWR registrieren sich im Verpackungsregister LUCID der Zentralen Stelle Verpackungsregister.',
        'Für Verpackungen, die typischerweise beim privaten Endverbraucher anfallen, ist die Beteiligung an einem System (duales System) erforderlich.',
        'Stretchfolie auf Paletten, die nur zwischen Unternehmen gehandelt werden, muss immer bei einem dualen System beteiligt werden.',
        'Die Registrierung in LUCID kostet je Verpackung eine Gebühr, die nach Gewicht berechnet wird.'
      ],
      correct: [0, 1, 2],
      hints: ['Wer sammelt den gelben Sack ein und wessen Abfall ist das?', 'Die ZSVR nennt die Registrierung ausdrücklich kostenlos.'],
      solution: 'Richtig sind A, B und C. **D** ist falsch: Transportverpackungen, die nicht beim privaten Endverbraucher anfallen, sind nicht systembeteiligungspflichtig; für sie gelten Rücknahmepflichten. **E** ist falsch: Die Registrierung ist kostenlos; Kosten entstehen durch den Vertrag mit dem Systembetreiber.'
    },
    {
      id: 'lf13-versandvorbereitung-a8', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Funktionen der Verpackung.',
      text: 'Die Polsterung im Karton erfüllt die [[Schutzfunktion]]. Dass Kartons im Regal übereinander stehen können, ist die [[Lagerfunktion|Stapelfunktion|Lager- und Stapelfunktion]]. Das Etikett mit Barcode und dem Symbol „oben“ erfüllt die [[Informationsfunktion]]. Die bunte Schuhschachtel im Laden erfüllt die [[Verkaufsfunktion|Werbefunktion|Verkaufs- und Werbefunktion]]. Dass die Ware als Einheit mit dem Stapler bewegt werden kann, ist die [[Transportfunktion|Ladefunktion|Transport- und Ladefunktion]].',
      hints: ['Funktionen: Schutz, Lager/Stapel, Transport/Lade, Information, Verkauf/Werbung.', 'Überlege, wem die Funktion jeweils dient.'],
      solution: 'Polsterung = **Schutzfunktion**; stapelbare Kartons = **Lager- bzw. Stapelfunktion**; Etikett und Handhabungssymbol = **Informationsfunktion**; Schuhschachtel im Laden = **Verkaufs-/Werbefunktion**; Bewegen als Einheit = **Transport-/Ladefunktion**.'
    },
    {
      id: 'lf13-versandvorbereitung-a9', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Verteiler-Lkw fährt die Tour Homburg → Zweibrücken → Pirmasens → Landau. Wie wird richtig geladen?',
      options: [
        'Die Sendungen für Zweibrücken zuerst, damit sie ganz vorne an der Stirnwand stehen.',
        'Die Sendungen für Landau zuerst (vorne), die für Zweibrücken zuletzt (an der Tür).',
        'Nach Gewicht: die schwersten Sendungen immer an die Tür.',
        'Die Reihenfolge ist egal, weil die NVE jede Sendung eindeutig kennzeichnet.'
      ],
      correct: [1],
      hints: ['Was wird zuerst wieder ausgeladen?', 'Last in – first out an der Ladetür.'],
      solution: 'Richtig ist B: Die **zuletzt** anzufahrende Stelle (Landau) wird **zuerst** geladen und steht vorne, die erste Abladestelle (Zweibrücken) steht an der Tür. So muss beim Entladen nicht umgeladen werden. Die Ladungssicherung und die Achslastverteilung müssen trotzdem beachtet werden; die NVE ersetzt keine sinnvolle Ladereihenfolge.'
    },
    {
      id: 'lf13-versandvorbereitung-a10', type: 'text', difficulty: 3, points: 4,
      q: 'Die Westpfalz-Saar Logistik überlegt, für den Sportartikelhersteller zusätzlich die Preisauszeichnung, den Displaybau und die Retourenbearbeitung zu übernehmen. Erläutere zwei Vorteile und zwei Risiken solcher Value Added Services für die Spedition.',
      model: 'Vorteile: Die Spedition erzielt zusätzlichen Umsatz und Deckungsbeitrag neben Lagergeld und Transport. Außerdem steigt die Kundenbindung, weil der Kunde wegen der eingespielten Prozesse nicht so leicht den Dienstleister wechselt; das Personal kann in Leerzeiten besser ausgelastet werden. Risiken: Die Spedition übernimmt mehr Verantwortung und damit ein höheres Haftungsrisiko, etwa bei falsch ausgezeichneten Preisen. Sie muss in Arbeitsplätze, IT und Schulung investieren und wird abhängig von einem Kunden; endet der Vertrag, bleiben Kosten.',
      criteria: [
        { text: 'nennt Zusatzumsatz/Deckungsbeitrag', keywords: ['Umsatz|Deckungsbeitrag|Erl'], points: 1 },
        { text: 'nennt Kundenbindung oder bessere Auslastung', keywords: ['Kundenbindung|bindung|Auslastung|wechselt'], points: 1 },
        { text: 'nennt Haftungsrisiko', keywords: ['Haftung|Verantwortung'], points: 1 },
        { text: 'nennt Investitionen oder Abhängigkeit', keywords: ['Investi|abhängig|Abhängigkeit'], points: 1 }
      ],
      hints: ['Denke an Geld und an die Beziehung zum Kunden.', 'Was passiert, wenn ein Fehler passiert oder der Kunde kündigt?'],
      solution: 'Vorteile: **Zusatzumsatz** und Deckungsbeitrag, **Kundenbindung**, bessere **Auslastung** des Personals. Risiken: höhere **Haftung** und Verantwortung für die Zusatzleistung, **Investitionen** in Arbeitsplätze und IT, **Abhängigkeit** von einem Kunden.'
    },
    {
      id: 'lf13-versandvorbereitung-a11', type: 'case', difficulty: 3, points: 9,
      q: 'Fall: Neukunde Getränkegroßhandel – Versand und Kommissionierung planen',
      intro: `Die Saarlogistik GmbH in Neunkirchen soll ab Januar für einen Getränkegroßhändler die Belieferung von Gaststätten im Saarland übernehmen. Laut Lastenheft fallen täglich 2.880 Positionen an, im Mittel 12 Positionen je Auftrag. Bestellschluss ist 18:00 Uhr, die Auslieferung erfolgt am Folgetag ab 7:00 Uhr.

Gemessene Zeiten in einem Testlauf (Beispielwerte): Basiszeit 180 s je Auftrag, Weg-, Greif- und Totzeit zusammen 45 s je Position. In der Nachtschicht stehen je Kommissionierer 6 produktive Stunden zur Verfügung.`,
      hints: ['Rechne erst die Zeit je Auftrag, dann die Leistung.', 'Denke an die Ausfallquote nur, wenn sie gefragt ist.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf13-versandvorbereitung-a11-1', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne die Zeit je Auftrag, die Anzahl der Aufträge pro Tag und die gesamte Kommissionierzeit pro Tag in Stunden.',
          formula: 'Zeit je Auftrag = Basiszeit + Positionen × Zeit je Position; Gesamtzeit = Aufträge × Zeit je Auftrag',
          fields: [
            { id: 'zja', label: 'Zeit je Auftrag', unit: 's', answer: 720, tol: 0.5 },
            { id: 'auftr', label: 'Aufträge pro Tag', unit: 'Aufträge', answer: 240, tol: 0.5 },
            { id: 'ges', label: 'Kommissionierzeit pro Tag', unit: 'h', answer: 48, tol: 0.05 }
          ],
          hints: ['180 s + 12 × 45 s.', '2.880 Positionen ÷ 12 Positionen je Auftrag.'],
          solution: `**Zeit je Auftrag:** 180 s + 12 × 45 s = 180 s + 540 s = **720 s** (12 min)

**Aufträge pro Tag:** 2.880 ÷ 12 = **240 Aufträge**

**Gesamtzeit:** 240 × 720 s = 172.800 s ÷ 3.600 s/h = **48 h**`
        },
        {
          id: 'lf13-versandvorbereitung-a11-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne die Kommissionierleistung in Positionen je Stunde und die Zahl der Kommissionierer, die in der Nachtschicht anwesend sein müssen (ohne Ausfallquote, aufgerundet). Wie viele Mitarbeiter müssen bei einer Ausfallquote von 15 % im Personalplan stehen?',
          formula: 'Positionen/h = Positionen je Auftrag × 3.600 ÷ Zeit je Auftrag; Mitarbeiter = Gesamtstunden ÷ produktive Stunden',
          fields: [
            { id: 'leist', label: 'Positionen je Stunde', unit: 'Positionen/h', answer: 60, tol: 0.05 },
            { id: 'anw', label: 'anwesende Kommissionierer', unit: 'Mitarbeiter', answer: 8, tol: 0 },
            { id: 'plan', label: 'Mitarbeiter im Personalplan', unit: 'Mitarbeiter', answer: 10, tol: 0 }
          ],
          hints: ['12 × 3.600 ÷ 720.', '8 ÷ 0,85 = 9,41 – was machst du mit dem Bruchteil?'],
          solution: `**Leistung:** 12 × 3.600 s ÷ 720 s = **60 Positionen/h** (Kontrolle: 2.880 Positionen ÷ 60 = 48 h)

**Anwesende Kommissionierer:** 48 h ÷ 6 h = **8 Mitarbeiter**

**Personalplan:** 8 ÷ (1 − 0,15) = 8 ÷ 0,85 = 9,41 → **10 Mitarbeiter** (aufrunden)`
        },
        {
          id: 'lf13-versandvorbereitung-a11-3', type: 'mc', difficulty: 2, points: 3,
          q: 'Die Saarlogistik möchte die Leistung verbessern. Welche Maßnahmen erhöhen die Positionen je Stunde? (Mehrfachauswahl)',
          options: [
            'Schnelldreher (Artikel mit vielen Zugriffen) nahe an der Packzone lagern, um die Wegzeit zu verkürzen',
            'Aufträge mehrerer Gaststätten derselben Tour bündeln, damit die Basiszeit seltener anfällt',
            'Pick by Voice einführen, damit Hände und Augen frei sind und weniger Totzeit entsteht',
            'Den Bestellschluss auf 20:00 Uhr verschieben',
            'Mehr Kommissionierer einstellen'
          ],
          correct: [0, 1, 2],
          hints: ['Die Leistung je Person hängt von Weg-, Greif-, Tot- und Basiszeit ab.', 'Mehr Personal erhöht die Gesamtmenge, nicht die Leistung je Person.'],
          solution: 'Richtig sind A, B und C: Sie verkürzen Wegzeit, anteilige Basiszeit bzw. Totzeit. **D** verkürzt nur die verfügbare Zeit und verschlechtert die Planung. **E** erhöht die Gesamtkapazität, aber nicht die **Leistung je Kommissionierer**.'
        }
      ]
    }
  ],
  quiz: ['lf13-versandvorbereitung-a2', 'lf13-versandvorbereitung-a4', 'lf13-versandvorbereitung-a5', 'lf13-versandvorbereitung-a7', 'lf13-versandvorbereitung-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 13, Ziel: Kommissionierung, Versandbereitstellung und Verteilung organisieren; Inhalte: Pflichtenheft, Produktivität der Versandabwicklung (Sendungen pro Tag)' },
    { title: 'Zentrale Stelle Verpackungsregister: Alle Informationen zur Registrierung', publisher: 'Stiftung Zentrale Stelle Verpackungsregister', url: 'https://www.verpackungsregister.org/registrierung/alle-informationen-zur-registrierung', asOf: '2026-10-17' },
    { title: 'Zentrale Stelle Verpackungsregister: Systembeteiligung', publisher: 'Stiftung Zentrale Stelle Verpackungsregister', url: 'https://www.verpackungsregister.org/systembeteiligung-und-datenmeldung/systembeteiligung', asOf: '2026-10-17' },
    { title: 'Neues Verpackungsrecht (PPWR und VerpackDG seit 12.08.2026)', publisher: 'Umweltpakt Bayern (Bayerisches Staatsministerium für Umwelt und Verbraucherschutz)', url: 'https://www.umweltpakt.bayern.de/abfall/aktuelles/3967/neues-verpackungsrecht', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 408 Frachtbrief', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__408.html', asOf: '2026' }
  ],
  links: ['lf09-lagerorganisation', 'lf05-systemverkehr', 'lf13-distributionskennzahlen', 'lf13-tourenplanung', 'lf13-entsorgung', 'lf04-gefahrgut', 'lf09-lagerkosten']
};
