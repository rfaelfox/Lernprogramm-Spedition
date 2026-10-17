export default {
  id: 'lf13-entsorgung',
  area: 'LF13',
  topic: 'lf13-entsorgung',
  title: 'Entsorgungs-, Recycling- und Retourenlogistik',
  status: 'pruefen',
  minutes: 50,
  validity: {
    asOf: '2026-10',
    note: 'Abfallhierarchie § 6 Abs. 1 KrWG und Begriffe § 3 KrWG, Nachweispflicht für gefährliche Abfälle § 50 KrWG, Anzeige- und Erlaubnispflicht für Sammler und Beförderer §§ 53, 54 KrWG, A-Schilder § 55 KrWG, geprüft auf gesetze-im-internet.de am 17.10.2026. Verpackungsrecht seit 12.08.2026: Verordnung (EU) 2025/40 (PPWR) und Verpackungsrecht-Durchführungsgesetz (VerpackDG); Rücknahmepflicht für nicht systembeteiligungspflichtige Verpackungen nach § 39 VerpackDG – Wortlaut nur über eine nichtamtliche Wiedergabe geprüft, bitte bestätigen. Elektronisches Abfallnachweisverfahren (eANV) für gefährliche Abfälle nach der Nachweisverordnung laut Angaben der Stadt Köln. Palettentausch: ADSp 2017 Ziffer 4.8.1; Inhalt des „Bonner Palettentauschs“ nur aus einer Unternehmensveröffentlichung. Palettenpreise, Kosten und Mengen sind Beispielwerte (Bezugsjahr 2026).'
  },
  goals: [
    'Ich kann die fünfstufige Abfallhierarchie nach § 6 KrWG wiedergeben und auf Beispiele aus einer Spedition anwenden.',
    'Ich kann Wiederverwendung, Recycling, sonstige (energetische) Verwertung und Beseitigung unterscheiden und Arten des Recyclings nennen.',
    'Ich kann die Aufgaben der Entsorgungslogistik beschreiben und erklären, welche Pflichten für Spediteure gelten, die Abfälle befördern.',
    'Ich kann die Grundzüge des Verpackungsrechts für Transportverpackungen (Rücknahme) und Verkaufsverpackungen (Systembeteiligung) einordnen.',
    'Ich kann den Ablauf der Retourenlogistik beschreiben und Retourenquote und Retourenkosten berechnen.',
    'Ich kann Mehrwegsysteme und den Palettentausch erklären und ein Palettenkonto führen.',
    'Ich kann Mehrweg- und Einwegverpackungen kostenmäßig vergleichen.'
  ],
  simple: `# Worum geht es?

Logistik hört nicht beim Kunden auf. Vieles kommt **zurück**:

- **Leere Paletten und Gitterboxen** müssen zurück zum Versender.
- **Verpackungen** (Folie, Kartons) fallen beim Empfänger an und sollen verwertet werden.
- **Retouren**: Kunden schicken Ware zurück, z. B. im Onlinehandel.
- **Abfälle** aus Industrie und Handel müssen zu Recycling- oder Entsorgungsanlagen gebracht werden.

Diesen Rückwärtsfluss nennt man **Reverse Logistics** (Rückführungslogistik). Speditionen verdienen damit Geld, weil sie ohnehin beim Kunden sind und leere Fahrzeuge zurückfahren würden.

# Die Abfallhierarchie

Das Kreislaufwirtschaftsgesetz (KrWG) legt in **§ 6** eine Rangfolge fest. Je weiter oben, desto besser:

1. **Vermeidung**
2. **Vorbereitung zur Wiederverwendung**
3. **Recycling**
4. **sonstige Verwertung**, insbesondere energetische Verwertung und Verfüllung
5. **Beseitigung**

Beispiel Spedition: Mehrwegboxen statt Einwegkartons (Vermeidung) ist besser als Kartons zu recyceln – und Recycling ist besser als Verbrennen.

# Palettentausch

Wer Ware auf Europaletten liefert, bekommt beim Empfänger oft **leere Paletten im Tausch** zurück. Was nicht getauscht wird, wird auf einem **Palettenkonto** notiert, damit niemand Paletten „verliert“.`,
  deep: `# 1. Rechtlicher Rahmen der Kreislaufwirtschaft

**Kreislaufwirtschaftsgesetz (KrWG)**

- **Abfall** sind alle Stoffe oder Gegenstände, derer sich ihr Besitzer entledigt, entledigen will oder muss (§ 3 Abs. 1 KrWG). Man unterscheidet **Abfälle zur Verwertung** und **Abfälle zur Beseitigung**.
- **Gefährliche Abfälle** sind die Abfälle, die durch Rechtsverordnung (Abfallverzeichnis) als gefährlich bestimmt sind (§ 3 Abs. 5 KrWG), z. B. Altöl, Batterien, ölhaltige Putzlappen.

**Abfallhierarchie (§ 6 Abs. 1 KrWG)**

| Stufe | Begriff (§ 3 KrWG) | Beispiel Logistik |
|---|---|---|
| 1. **Vermeidung** | Maßnahmen, bevor ein Stoff zu Abfall wird, z. B. Mehrwegverpackungen, längere Lebensdauer | Mehrwegboxen, wiederverwendbare Stretchhauben, digitale statt Papier-Lieferscheine |
| 2. **Vorbereitung zur Wiederverwendung** | Prüfen, Reinigen, Reparieren von Abfall, damit er ohne weitere Behandlung wieder für den ursprünglichen Zweck genutzt werden kann | defekte Europaletten reparieren lassen |
| 3. **Recycling** | Aufbereitung von Abfällen zu Erzeugnissen, Materialien oder Stoffen; **nicht** energetische Verwertung | Stretchfolie zu Kunststoffgranulat, Kartonagen zu Altpapier |
| 4. **Sonstige Verwertung** | insbesondere **energetische Verwertung** (Verbrennung mit Energiegewinnung) und Verfüllung | stark verschmutzte Mischverpackungen in die Müllverbrennung mit Energiegewinnung |
| 5. **Beseitigung** | jedes Verfahren, das keine Verwertung ist | Deponierung |

Nach § 6 Abs. 2 KrWG hat Vorrang die Maßnahme, die den **Schutz von Mensch und Umwelt am besten** gewährleistet; dabei sind auch technische Möglichkeit, wirtschaftliche Zumutbarkeit und soziale Folgen zu berücksichtigen.

> Merke: Energetische Verwertung ist nach § 3 Abs. 25 KrWG **kein Recycling**.

**Arten des Recyclings (betriebswirtschaftliche Einteilung, wie sie viele Lehrbücher verwenden)**

| Art | Bedeutung | Beispiel |
|---|---|---|
| **Wiederverwendung** | Produkt wird erneut für **denselben** Zweck genutzt | Europalette, Mehrwegflasche, Gitterbox |
| **Weiterverwendung** | Produkt wird für einen **anderen** Zweck genutzt | gebrauchter Seecontainer als Lagerraum |
| **Wiederverwertung** | Material geht in **denselben** Produktionsprozess zurück | Altglas zu neuem Glas, Altpapier zu Karton |
| **Weiterverwertung** | Material wird für ein **anderes** Produkt genutzt | Altreifen zu Gummigranulat für Sportplatzbeläge |

Außerdem unterscheidet man **werkstoffliches** (Material bleibt erhalten, z. B. Folie zu Granulat) und **rohstoffliches** Recycling (Zerlegung in chemische Grundstoffe).

# 2. Aufgaben der Entsorgungslogistik

**Sammeln** (Behälter stellen und abholen) → **Trennen und Sortieren** (sortenreine Fraktionen erzielen höhere Erlöse) → **Transportieren und Umschlagen** → **Zwischenlagern** → Zuführen zur **Verwertung oder Beseitigung** → **Dokumentieren**.

Typische Leistungen von Speditionen: Behältergestellung (Absetz- und Abrollcontainer, Gitterboxen für Folie), Rücktransport von Verpackungen in sonst leeren Fahrzeugen, Ballenpressen für Folie und Karton im Lager, Organisation der Entsorgung für Kunden.

**Pflichten für Beförderer von Abfällen (KrWG)**

- **Anzeige:** Sammler, Beförderer, Händler und Makler von Abfällen müssen ihre Tätigkeit **vor Aufnahme** der zuständigen Behörde anzeigen, sofern sie keine Erlaubnis haben (§ 53 Abs. 1 KrWG).
- **Erlaubnis:** Wer **gefährliche Abfälle** sammelt, befördert, damit handelt oder makelt, braucht eine **Erlaubnis**. Voraussetzungen: Zuverlässigkeit sowie Fach- und Sachkunde (§ 54 Abs. 1 KrWG).
- **A-Schilder:** Sammler und Beförderer müssen Fahrzeuge, mit denen sie Abfälle auf öffentlichen Straßen befördern, vor Fahrtantritt mit **zwei weißen, rückstrahlenden Warntafeln („A“-Schilder)** versehen; ausgenommen sind Sammler und Beförderer, die Abfälle im Rahmen wirtschaftlicher Unternehmen sammeln oder befördern (§ 55 Abs. 1 KrWG). Gefahrgutvorschriften gelten zusätzlich (§ 55 Abs. 3 KrWG), siehe Einheit „Gefahrgut auf der Straße: ADR-Grundlagen“.

**Nachweisverfahren für gefährliche Abfälle**

- Erzeuger, Besitzer, Sammler, Beförderer und Entsorger gefährlicher Abfälle müssen die ordnungsgemäße Entsorgung **gegenüber der Behörde und untereinander nachweisen** (§ 50 Abs. 1 KrWG):
  - **vor** der Entsorgung: Entsorgungsnachweis (Erklärung zur vorgesehenen Entsorgung, Annahmeerklärung des Entsorgers, Bestätigung der Behörde),
  - **nach** der Entsorgung: Verbleibsnachweis über die durchgeführte Entsorgung, im Alltag über **Begleitscheine** je Transport.
- Die Nachweise werden **elektronisch** geführt (elektronisches Abfallnachweisverfahren **eANV**, Datenaustausch über die zentrale Koordinierungsstelle **ZKS-Abfall**, Unterschrift mit **qualifizierter elektronischer Signatur**). Der **Beförderer** signiert den Begleitschein spätestens bei Annahme der Abfälle in der Entsorgungsanlage (Einzelheiten regelt die Nachweisverordnung).

# 3. Verpackungsrecht und Rücknahme (Stand Oktober 2026)

Seit dem **12.08.2026** gelten die **EU-Verpackungsverordnung (EU) 2025/40 (PPWR)** und das **Verpackungsrecht-Durchführungsgesetz (VerpackDG)**; das Verpackungsgesetz ist außer Kraft (Grundzüge siehe Einheit „Versandvorbereitung in der Distribution“).

| Verpackung | Weg der Entsorgung |
|---|---|
| fällt typischerweise beim **privaten Endverbraucher** an (Verkaufsverpackung, Versandkarton im Onlinehandel) | **Systembeteiligung**: Hersteller zahlt an ein duales System, das sammelt und verwertet; Registrierung in **LUCID** bei der Zentralen Stelle Verpackungsregister |
| **Transportverpackung** und andere nicht systembeteiligungspflichtige Verpackungen (z. B. Stretchfolie, Kartonzwischenlagen, Einwegpaletten im B2B-Handel) | **Rücknahmepflicht** der Hersteller und Vertreiber: gebrauchte, restentleerte Verpackungen am Ort der Übergabe oder in unmittelbarer Nähe **unentgeltlich** zurücknehmen und verwerten; jährliche Dokumentation (§ 39 VerpackDG). Zwischen Unternehmen sind abweichende Vereinbarungen über Ort und Kosten möglich. |

Für Speditionen heißt das: Der Versender ist häufig rücknahmepflichtig und beauftragt die Spedition, Folie und Kartons beim Empfänger mitzunehmen – eine typische Zusatzleistung der Entsorgungslogistik.

# 4. Retourenlogistik (Reverse Logistics)

**Ablauf einer Retoure**

1. **Retourenanmeldung** durch den Kunden (Retourenschein, Rücksendeetikett, Grund)
2. **Rücktransport** (KEP-Dienst, Stückgut, Abholung)
3. **Wareneingang Retoure**: Identifizieren, Zuordnen zur ursprünglichen Bestellung
4. **Prüfen und Bewerten**: Zustand A (neuwertig), B (Verpackung beschädigt), C (defekt)
5. **Entscheidung über den Verbleib**: wieder einlagern, aufbereiten/reparieren, als B-Ware verkaufen, an Hersteller zurück, spenden, verwerten, entsorgen
6. **Gutschrift** an den Kunden auslösen und Bestand im LVS buchen

**Kennzahlen:** **Retourenquote** = Retouren ÷ ausgelieferte Sendungen × 100; **Retourenkosten** = Retouren × Kosten je Retoure; **Wiederverkaufsquote** = wieder verkaufsfähige Retouren ÷ alle Retouren × 100.

Retourenbearbeitung ist ein typischer **Value Added Service** von Logistikdienstleistern.

# 5. Mehrwegsysteme und Palettentausch

**Mehrwegsysteme**: Ladungsträger und Behälter werden viele Male genutzt (Europalette, Gitterbox, Kunststoffbehälter, Getränkekisten). Sie entsprechen der höchsten Stufe der Abfallhierarchie (Vermeidung), erfordern aber Rücktransport, Reinigung, Reparatur und Verwaltung. **Pool-Systeme**: Ein Poolbetreiber stellt Ladungsträger gegen Miete zur Verfügung und übernimmt Rückführung und Instandhaltung.

**Kostenvergleich Mehrweg – Einweg**

Kosten je Umlauf Mehrweg = Anschaffungspreis ÷ Anzahl Umläufe + Kosten je Umlauf (Rücktransport, Reinigung, Verwaltung)

**Palettentausch**

- Nach **ADSp 2017 Ziffer 4.8.1** gehören die **Gestellung und der Tausch von Paletten** oder sonstigen Lademitteln **nicht** zum Auftrag des Spediteurs, wenn dies nicht **besonders vereinbart** ist. Ein Tausch muss also ausdrücklich beauftragt werden.
- **Zug-um-Zug-Tausch**: Bei Ablieferung erhält der Fahrer vom Empfänger die gleiche Anzahl **tauschfähiger** leerer Paletten gleicher Art und Güte und bringt sie zur Beladestelle zurück. Beschädigte Paletten (z. B. gebrochene Bretter, fehlende Klötze, starke Verschmutzung) sind nicht tauschfähig.
- In der Praxis werden Tauschregeln wie der **„Bonner Palettentausch“** vereinbart; sie regeln u. a. Rückgabe an der Beladestelle, Fristen und Nachweise über nicht getauschte Paletten. Die genaue Regelung ergibt sich aus dem jeweiligen Vertrag.
- Kann nicht getauscht werden, erhält der Fahrer einen **Palettenschein** (Quittung über die nicht getauschten Paletten).

**Palettenkonto**

Für jeden Tauschpartner wird ein Konto geführt:

**Saldo neu = Saldo alt + gelieferte (volle) Paletten − zurückerhaltene tauschfähige Leerpaletten**

Ein **positiver Saldo** heißt: Der Partner schuldet uns noch Paletten. Am Ende eines Zeitraums wird der Saldo durch Rückgabe oder durch **Wertausgleich** (Saldo × vereinbarter Preis je Palette) ausgeglichen.`,
  terms: [
    { term: 'Kreislaufwirtschaftsgesetz (KrWG)', def: 'Bundesgesetz zur Förderung der Kreislaufwirtschaft und zur umweltverträglichen Bewirtschaftung von Abfällen; enthält u. a. Abfallhierarchie, Begriffe und Pflichten für Sammler und Beförderer.' },
    { term: 'Abfallhierarchie', def: 'Rangfolge nach § 6 Abs. 1 KrWG: Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige (insbesondere energetische) Verwertung, Beseitigung.' },
    { term: 'Recycling', def: 'Aufbereitung von Abfällen zu Erzeugnissen, Materialien oder Stoffen für den ursprünglichen oder einen anderen Zweck; ohne energetische Verwertung (§ 3 Abs. 25 KrWG).' },
    { term: 'Gefährliche Abfälle', def: 'Abfälle, die durch Rechtsverordnung als gefährlich bestimmt sind (§ 3 Abs. 5 KrWG); für sie gelten Nachweis- und Erlaubnispflichten.' },
    { term: 'Begleitschein', def: 'Nachweisbeleg, der den Transport gefährlicher Abfälle vom Erzeuger über den Beförderer bis zum Entsorger dokumentiert; wird elektronisch im eANV geführt.' },
    { term: 'eANV', def: 'Elektronisches Abfallnachweisverfahren: elektronische Führung von Entsorgungsnachweisen und Begleitscheinen mit qualifizierter elektronischer Signatur.' },
    { term: 'A-Schild', def: 'Weiße, rückstrahlende Warntafel mit „A“, die Sammler und Beförderer an Fahrzeugen führen müssen, mit denen sie Abfälle befördern (§ 55 KrWG).' },
    { term: 'Reverse Logistics', def: 'Rückführungslogistik: Planung und Steuerung der Güterflüsse vom Empfänger zurück, z. B. Retouren, Leergut, Verpackungen, Altprodukte.' },
    { term: 'Retourenquote', def: 'Anteil der zurückgesandten Sendungen an allen ausgelieferten Sendungen in Prozent.' },
    { term: 'Mehrwegsystem', def: 'System, in dem Ladungsträger oder Verpackungen mehrfach für denselben Zweck verwendet werden, z. B. Europaletten, Gitterboxen, Kunststoffkisten.' },
    { term: 'Palettenkonto', def: 'Aufzeichnung über gelieferte und zurückerhaltene Paletten je Tauschpartner; der Saldo zeigt, wie viele Paletten noch geschuldet werden.' },
    { term: 'Tauschfähigkeit', def: 'Zustand einer Palette, der den Tauschkriterien entspricht (unbeschädigt, vollständig, nicht stark verschmutzt); nur tauschfähige Paletten werden angerechnet.' }
  ],
  example: `# Rückwege nutzen: Saarlogistik GmbH und ein Getränkehersteller (Beispiel)

Die Saarlogistik beliefert für einen Getränkehersteller aus Merzig täglich Getränkemärkte im Saarland.

**Hinweg:** Volle Paletten mit Getränken in Mehrwegkästen.

**Rückweg – statt Leerfahrt:**
- **Leergut** (Mehrwegkästen und -flaschen) – Mehrwegsystem, Stufe „Vermeidung“
- **Leere Europaletten** im Zug-um-Zug-Tausch (laut Vertrag ausdrücklich vereinbart, denn nach ADSp 2017 Ziffer 4.8.1 gehört der Tausch sonst nicht zum Auftrag)
- **Stretchfolie** in Säcken: Der Hersteller ist für diese Transportverpackung rücknahmepflichtig; die Saarlogistik bringt die Folie ins Lager, presst sie zu Ballen und verkauft sie an einen Recyclingbetrieb (**Recycling**: Folie wird zu Granulat).
- **Retouren** (beschädigte Kästen, falsch gelieferte Ware) – Prüfung im Lager, Gutschrift über den Hersteller.

**Palettenkonto Getränkemarkt Dillingen, Oktober (Beispiel)**

| Datum | Vorgang | geliefert | zurück (tauschfähig) | Saldo |
|---|---|---:|---:|---:|
| 01.10. | Übertrag | | | 4 |
| 08.10. | Lieferung | 12 | 10 | 6 |
| 15.10. | Lieferung | 9 | 11 | 4 |
| 22.10. | Lieferung | 10 | 8 (+ 1 defekte, nicht angerechnet) | 6 |

Der Markt schuldet der Saarlogistik am Monatsende **6 Paletten**. Für die defekte Palette erhält der Fahrer keine Gutschrift; sie wird nicht angerechnet.

**Gefährliche Abfälle:** Beim Wartungsbetrieb der Saarlogistik fallen Altöl und ölhaltige Betriebsmittel an. Die Saarlogistik ist hier Abfall**erzeuger**. Sie beauftragt einen Entsorger mit Erlaubnis nach § 54 KrWG; die Nachweise laufen über das eANV.`,
  rules: [
    'Abfallhierarchie § 6 KrWG: Vermeidung vor Vorbereitung zur Wiederverwendung vor Recycling vor sonstiger Verwertung vor Beseitigung.',
    'Energetische Verwertung (Verbrennung mit Energiegewinnung) ist kein Recycling.',
    'Wer Abfälle sammelt oder befördert, muss das der Behörde anzeigen; für gefährliche Abfälle braucht er eine Erlaubnis.',
    'Gefährliche Abfälle werden elektronisch nachgewiesen (Entsorgungsnachweis vorher, Begleitschein beim Transport).',
    'Transportverpackungen im B2B: Rücknahme durch Hersteller/Vertreiber; Verpackungen beim privaten Endverbraucher: Systembeteiligung.',
    'Palettentausch ist nach ADSp 2017 Ziffer 4.8.1 nur geschuldet, wenn er vereinbart wurde.',
    'Palettenkonto: Saldo neu = Saldo alt + gelieferte − tauschfähig zurückerhaltene Paletten; defekte Paletten zählen nicht.'
  ],
  summary: `- **Reverse Logistics:** Retouren, Leergut, Ladungsträger, Verpackungen und Abfälle zurückführen – Rückfahrten nutzen.
- **KrWG § 6:** Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige Verwertung → Beseitigung.
- **Recyclingarten:** Wiederverwendung, Weiterverwendung, Wiederverwertung, Weiterverwertung.
- **Beförderer von Abfällen:** Anzeige (§ 53), Erlaubnis für gefährliche Abfälle (§ 54), A-Schilder (§ 55), Nachweise über eANV (§ 50).
- **Verpackungen seit 12.08.2026:** PPWR und VerpackDG; Rücknahme von Transportverpackungen, Systembeteiligung für Verpackungen beim privaten Endverbraucher.
- **Retouren:** Retourenquote = Retouren ÷ Sendungen × 100.
- **Palettenkonto:** Saldo alt + geliefert − tauschfähig zurück.`,
  mistakes: [
    { wrong: 'Verbrennen mit Energiegewinnung ist Recycling.', right: 'Das ist sonstige (energetische) Verwertung, Stufe 4 der Abfallhierarchie. Recycling bedeutet stoffliche Aufbereitung.' },
    { wrong: 'Recycling steht in der Abfallhierarchie an erster Stelle.', right: 'An erster Stelle steht die Vermeidung, danach die Vorbereitung zur Wiederverwendung; Recycling ist erst Stufe 3.' },
    { wrong: 'Der Spediteur muss immer Paletten tauschen.', right: 'Nach ADSp 2017 Ziffer 4.8.1 gehört der Palettentausch nur dann zum Auftrag, wenn er besonders vereinbart ist.' },
    { wrong: 'Eine beschädigte Palette, die der Empfänger zurückgibt, mindert den Saldo im Palettenkonto.', right: 'Nur tauschfähige Paletten werden angerechnet; defekte Paletten werden nicht gutgeschrieben.' },
    { wrong: 'Für Stretchfolie von Industriepaletten muss der Versender ein duales System bezahlen.', right: 'Duale Systeme sind für Verpackungen beim privaten Endverbraucher zuständig; Transportverpackungen im B2B werden vom Hersteller oder Vertreiber zurückgenommen und verwertet.' }
  ],
  flashcards: [
    { q: 'Nenne die fünf Stufen der Abfallhierarchie nach § 6 KrWG.', a: 'Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige Verwertung (insbesondere energetische Verwertung und Verfüllung), Beseitigung.' },
    { q: 'Ist energetische Verwertung Recycling?', a: 'Nein (§ 3 Abs. 25 KrWG); sie ist sonstige Verwertung, Stufe 4.' },
    { q: 'Was ist der Unterschied zwischen Wiederverwendung und Weiterverwendung?', a: 'Wiederverwendung: gleicher Zweck (Europalette); Weiterverwendung: anderer Zweck (Container als Lagerraum).' },
    { q: 'Was ist der Unterschied zwischen Wiederverwertung und Weiterverwertung?', a: 'Wiederverwertung: Material geht in denselben Prozess zurück (Altglas → Glas); Weiterverwertung: anderes Produkt (Altreifen → Bodenbelag).' },
    { q: 'Was braucht ein Beförderer gefährlicher Abfälle?', a: 'Eine Erlaubnis nach § 54 KrWG (Zuverlässigkeit, Fach- und Sachkunde).' },
    { q: 'Was sind A-Schilder?', a: 'Zwei weiße, rückstrahlende Warntafeln mit „A“ an Fahrzeugen von Sammlern und Beförderern von Abfällen (§ 55 KrWG).' },
    { q: 'Wie werden Nachweise für gefährliche Abfälle geführt?', a: 'Elektronisch im eANV: Entsorgungsnachweis vor, Begleitscheine bei der Entsorgung, mit qualifizierter elektronischer Signatur.' },
    { q: 'Was gilt seit 12.08.2026 im Verpackungsrecht?', a: 'Die EU-Verpackungsverordnung (EU) 2025/40 (PPWR) und das Verpackungsrecht-Durchführungsgesetz (VerpackDG).' },
    { q: 'Formel Retourenquote?', a: 'Retouren ÷ ausgelieferte Sendungen × 100.' },
    { q: 'Was regelt ADSp 2017 Ziffer 4.8.1 zum Palettentausch?', a: 'Gestellung und Tausch von Paletten gehören nicht zum Auftrag, wenn sie nicht besonders vereinbart sind.' },
    { q: 'Wie wird der Saldo im Palettenkonto berechnet?', a: 'Saldo alt + gelieferte Paletten − zurückerhaltene tauschfähige Paletten.' },
    { q: 'Was ist ein Palettenschein?', a: 'Quittung über Paletten, die bei der Ablieferung nicht getauscht werden konnten.' }
  ],
  tasks: [
    {
      id: 'lf13-entsorgung-a1', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Stufen der Abfallhierarchie nach § 6 Abs. 1 KrWG in die richtige Rangfolge (beste zuerst).',
      items: [
        'Vermeidung',
        'Vorbereitung zur Wiederverwendung',
        'Recycling',
        'Sonstige Verwertung, insbesondere energetische Verwertung und Verfüllung',
        'Beseitigung'
      ],
      hints: ['Am besten ist Abfall, der gar nicht entsteht.', 'Deponieren ist die schlechteste Lösung.'],
      solution: '§ 6 Abs. 1 KrWG: 1. **Vermeidung**, 2. **Vorbereitung zur Wiederverwendung**, 3. **Recycling**, 4. **sonstige Verwertung** (insbesondere energetische Verwertung und Verfüllung), 5. **Beseitigung**.'
    },
    {
      id: 'lf13-entsorgung-a2', type: 'match', difficulty: 2, points: 5,
      q: 'Ordne jeder Maßnahme einer Spedition die passende Stufe der Abfallhierarchie zu.',
      pairs: [
        ['Mehrwegboxen statt Einwegkartons im Filialverkehr', 'Vermeidung'],
        ['Defekte Europaletten werden repariert und wieder eingesetzt', 'Vorbereitung zur Wiederverwendung'],
        ['Gepresste Stretchfolie wird zu Kunststoffgranulat verarbeitet', 'Recycling'],
        ['Verschmutzte Mischverpackungen gehen in ein Kraftwerk mit Energiegewinnung', 'Sonstige Verwertung'],
        ['Nicht verwertbare Reste werden deponiert', 'Beseitigung']
      ],
      hints: ['Reparatur eines Abfalls für den ursprünglichen Zweck = Vorbereitung zur Wiederverwendung.', 'Energiegewinnung ist kein Recycling.'],
      solution: 'Mehrweg = **Vermeidung** (es entsteht kein Abfall); Reparatur defekter Paletten = **Vorbereitung zur Wiederverwendung**; Folie zu Granulat = **Recycling**; Verbrennung mit Energiegewinnung = **sonstige Verwertung**; Deponie = **Beseitigung**.'
    },
    {
      id: 'lf13-entsorgung-a3', type: 'mc', difficulty: 3, points: 3,
      q: 'Die Saar-Trans Spedition GmbH soll künftig für einen Industriekunden gebrauchte Ölfilter und Altöl (gefährliche Abfälle) zu einer Entsorgungsanlage befördern. Welche Aussagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Die Spedition braucht für das Befördern gefährlicher Abfälle eine Erlaubnis der zuständigen Behörde (§ 54 KrWG).',
        'Die ordnungsgemäße Entsorgung muss gegenüber der Behörde nachgewiesen werden; dazu gehören elektronisch geführte Begleitscheine.',
        'Die Fahrzeuge müssen beim gewerbsmäßigen Befördern von Abfällen mit A-Schildern gekennzeichnet werden; Gefahrgutvorschriften gelten zusätzlich.',
        'Weil die Spedition die Abfälle nicht erzeugt hat, gelten für sie keine Nachweispflichten.',
        'Eine Anzeige oder Erlaubnis ist nicht nötig, wenn die Fahrten nur innerhalb des Saarlandes stattfinden.'
      ],
      correct: [0, 1, 2],
      hints: ['§ 50 KrWG nennt ausdrücklich auch den Beförderer.', 'Die Erlaubnis gilt bundesweit – und ist unabhängig von der Entfernung nötig.'],
      solution: 'Richtig sind A, B und C. **D** ist falsch: Nach § 50 Abs. 1 KrWG sind auch **Beförderer** nachweispflichtig. **E** ist falsch: Anzeige- bzw. Erlaubnispflicht (§§ 53, 54 KrWG) hängen nicht von der Entfernung ab.'
    },
    {
      id: 'lf13-entsorgung-a4', type: 'cloze', difficulty: 2, points: 4,
      q: 'Ergänze die Arten des Recyclings.',
      text: 'Eine Europalette wird nach dem Entladen erneut für Transporte genutzt: [[Wiederverwendung]]. Ein ausgemusterter Seecontainer dient als Lagerraum: [[Weiterverwendung]]. Altpapier aus dem Lager wird zu neuem Karton verarbeitet: [[Wiederverwertung]]. Altreifen der Lkw werden zu Gummigranulat für Sportplatzbeläge: [[Weiterverwertung]].',
      hints: ['„Verwendung“ = das Produkt bleibt erhalten, „Verwertung“ = nur das Material wird genutzt.', '„Wieder“ = gleicher Zweck, „Weiter“ = anderer Zweck.'],
      solution: 'Palette erneut = **Wiederverwendung** (gleiches Produkt, gleicher Zweck); Container als Lager = **Weiterverwendung** (gleiches Produkt, anderer Zweck); Altpapier zu Karton = **Wiederverwertung** (Material, gleicher Prozess); Altreifen zu Granulat = **Weiterverwertung** (Material, anderes Produkt).'
    },
    {
      id: 'lf13-entsorgung-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Onlinehändler lässt seine Distribution von der Westpfalz-Saar Logistik abwickeln. Im Quartal wurden 12.400 Sendungen ausgeliefert, 2.232 kamen als Retoure zurück. Die Bearbeitung einer Retoure (Wareneingang, Prüfung, Wiedereinlagerung) kostet im Mittel 7,80 € (Beispielwert). 1.674 Retouren konnten wieder als A-Ware eingelagert werden. Berechne Retourenquote, Retourenkosten und Wiederverkaufsquote.',
      formula: 'Retourenquote = Retouren ÷ Sendungen × 100; Retourenkosten = Retouren × Kosten je Retoure; Wiederverkaufsquote = A-Ware ÷ Retouren × 100',
      fields: [
        { id: 'quote', label: 'Retourenquote', unit: '%', answer: 18, tol: 0.05 },
        { id: 'kosten', label: 'Retourenkosten', unit: '€', answer: 17409.6, tol: 0.01 },
        { id: 'wv', label: 'Wiederverkaufsquote', unit: '%', answer: 75, tol: 0.05 }
      ],
      hints: ['2.232 ÷ 12.400.', '1.674 ÷ 2.232.'],
      solution: `**Retourenquote:** 2.232 ÷ 12.400 × 100 = **18 %**

**Retourenkosten:** 2.232 × 7,80 € = **17.409,60 €**

**Wiederverkaufsquote:** 1.674 ÷ 2.232 × 100 = **75 %**

Ein Viertel der Retouren ist nicht mehr als A-Ware verkäuflich und muss aufbereitet, als B-Ware verkauft, an den Hersteller zurückgegeben oder verwertet werden.`
    },
    {
      id: 'lf13-entsorgung-a6', type: 'calc', difficulty: 3, points: 3,
      q: `Ein Filialist prüft, ob die Spedition Mehrwegboxen statt Einwegkartons einsetzen soll (Beispielwerte):

- Einwegkarton: 0,95 € je Stück, Entsorgung 0,05 € je Stück
- Mehrwegbox: Anschaffung 6,00 €, 40 Umläufe; Rücktransport, Reinigung und Verwaltung 0,35 € je Umlauf

Berechne die Kosten je Umlauf für Einweg und Mehrweg sowie die Ersparnis bei 20.000 Umläufen im Jahr.`,
      formula: 'Mehrweg je Umlauf = Anschaffung ÷ Umläufe + Kosten je Umlauf',
      fields: [
        { id: 'ein', label: 'Einweg je Umlauf', unit: '€', answer: 1, tol: 0.01 },
        { id: 'mehr', label: 'Mehrweg je Umlauf', unit: '€', answer: 0.5, tol: 0.01 },
        { id: 'spar', label: 'Ersparnis pro Jahr', unit: '€', answer: 10000, tol: 0.5 }
      ],
      hints: ['6,00 € ÷ 40 Umläufe.', '(1,00 € − 0,50 €) × 20.000.'],
      solution: `**Einweg:** 0,95 € + 0,05 € = **1,00 € je Umlauf**

**Mehrweg:** 6,00 € ÷ 40 + 0,35 € = 0,15 € + 0,35 € = **0,50 € je Umlauf**

**Ersparnis:** (1,00 € − 0,50 €) × 20.000 = **10.000 € pro Jahr**

Zusätzlich entspricht Mehrweg der höchsten Stufe der Abfallhierarchie (Vermeidung). Voraussetzung: Die Boxen kommen zuverlässig zurück (Schwund senkt die Zahl der Umläufe) und der Rücktransport kann in ohnehin fahrenden Fahrzeugen erfolgen.`
    },
    {
      id: 'lf13-entsorgung-a7', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Versender wirft der Spedition vor, sie habe beim Empfänger keine leeren Europaletten getauscht. Im Speditionsauftrag steht nichts zum Palettentausch, es gelten die ADSp 2017. Wie ist die Lage?',
      options: [
        'Die Spedition hätte tauschen müssen, weil Palettentausch immer zum Speditionsauftrag gehört.',
        'Der Palettentausch gehört nach ADSp 2017 Ziffer 4.8.1 nicht zum Auftrag, weil er nicht besonders vereinbart war.',
        'Die Spedition muss dem Versender neue Paletten kaufen, weil der Empfänger nicht getauscht hat.',
        'Der Fahrer hätte den Tausch eigenmächtig verweigern müssen.'
      ],
      correct: [1],
      hints: ['Was steht in ADSp 2017 Ziffer 4.8 über Leistungen, die nicht zum Auftrag gehören?', 'Ohne Vereinbarung keine Pflicht.'],
      solution: 'Richtig ist B. Nach **ADSp 2017 Ziffer 4.8.1** umfasst der Auftrag die Gestellung und den Tausch von Paletten oder sonstigen Lademitteln **nicht**, wenn dies nicht besonders vereinbart ist. Wer tauschen lassen will, muss es im Auftrag ausdrücklich vereinbaren (auch die Tauschregeln und die Vergütung).'
    },
    {
      id: 'lf13-entsorgung-a8', type: 'text', difficulty: 3, points: 4,
      q: 'Ein Elektronik-Onlinehändler möchte seine Retourenabwicklung an die Westpfalz-Saar Logistik übergeben. Beschreibe den Ablauf der Retourenbearbeitung im Lager in vier Schritten und nenne zwei Möglichkeiten, was mit einer nicht mehr neuwertigen Retoure geschehen kann.',
      model: 'Zuerst wird die Retoure im Wareneingang identifiziert und anhand des Retourenscheins der ursprünglichen Bestellung zugeordnet. Dann wird sie geprüft und bewertet, etwa als A-Ware (neuwertig), B-Ware (Verpackung beschädigt) oder C-Ware (defekt). Anschließend wird über den Verbleib entschieden und die Ware wieder eingelagert oder aussortiert. Zum Schluss wird der Bestand im LVS gebucht und die Gutschrift an den Kunden ausgelöst. Nicht neuwertige Ware kann aufbereitet bzw. repariert und als B-Ware verkauft, an den Hersteller zurückgegeben oder dem Recycling zugeführt werden.',
      criteria: [
        { text: 'nennt Identifizieren/Zuordnen im Wareneingang', keywords: ['identifi|zuordn|Wareneingang|Retourenschein'], points: 1 },
        { text: 'nennt Prüfen und Bewerten (A/B/C)', keywords: ['prüf|bewert|Zustand'], points: 1 },
        { text: 'nennt Buchung und Gutschrift', keywords: ['Gutschrift|buch'], points: 1 },
        { text: 'nennt zwei Verbleibsmöglichkeiten (B-Ware, Reparatur, Hersteller, Recycling)', keywords: ['B-Ware|aufbereit|repar', 'Hersteller|Recycling|verwert|spend'], points: 1 }
      ],
      hints: ['Was passiert mit einem Paket, das zurückkommt, zuerst?', 'Nicht jede Retoure kann wieder ins Regal.'],
      solution: 'Ablauf: **Identifizieren und Zuordnen** → **Prüfen und Bewerten** (A/B/C) → **Entscheidung** über den Verbleib (Einlagerung oder Aussortierung) → **Bestandsbuchung und Gutschrift**. Nicht neuwertige Ware: **aufbereiten/reparieren und als B-Ware verkaufen**, an den **Hersteller** zurückgeben, spenden oder dem **Recycling** zuführen.'
    },
    {
      id: 'lf13-entsorgung-a9', type: 'mc', difficulty: 2, points: 2,
      q: 'Welche Aussagen zum Verpackungsrecht seit dem 12.08.2026 sind richtig? (Mehrfachauswahl)',
      options: [
        'Gebrauchte Stretchfolie von Paletten im B2B-Handel muss vom Hersteller oder Vertreiber zurückgenommen und verwertet werden.',
        'Versandkartons, die beim privaten Endverbraucher anfallen, sind systembeteiligungspflichtig.',
        'Für Transportverpackungen im B2B-Handel ist immer ein duales System zuständig.',
        'Das Verpackungsgesetz gilt unverändert neben dem VerpackDG weiter.'
      ],
      correct: [0, 1],
      hints: ['Wer sammelt den gelben Sack – und bei wem?', 'Das VerpackDG hat das Verpackungsgesetz abgelöst.'],
      solution: 'Richtig sind A und B. **C** ist falsch: Duale Systeme sind für Verpackungen beim privaten Endverbraucher zuständig; Transportverpackungen im B2B unterliegen der Rücknahmepflicht (§ 39 VerpackDG). **D** ist falsch: Das Verpackungsgesetz ist mit Ablauf des 11.08.2026 außer Kraft getreten.'
    },
    {
      id: 'lf13-entsorgung-a10', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Palettenkonto mit einem Getränkegroßhändler',
      intro: `Die Saarlogistik GmbH beliefert für eine Brauerei den Getränkegroßhändler Hochwald-Getränke. Laut Vertrag ist ein **Zug-um-Zug-Tausch** von Europaletten vereinbart; nur tauschfähige Paletten werden angerechnet. Der vereinbarte Wertausgleich für nicht zurückgegebene Paletten beträgt 14,50 € je Palette (Beispielwert).

Palettenkonto Hochwald-Getränke, Oktober:

| Datum | Vorgang |
|---|---|
| 01.10. | Übertrag: Hochwald-Getränke schuldet 15 Paletten |
| 05.10. | 26 volle Paletten geliefert, 20 tauschfähige leere zurückerhalten |
| 12.10. | 30 volle Paletten geliefert, 34 tauschfähige leere zurückerhalten |
| 19.10. | 18 volle Paletten geliefert, 12 tauschfähige und 2 defekte leere zurückerhalten |

Ende Oktober soll das Konto durch Wertausgleich abgerechnet werden.`,
      hints: ['Saldo neu = Saldo alt + geliefert − tauschfähig zurück.', 'Defekte Paletten werden nicht angerechnet.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf13-entsorgung-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne den Saldo nach dem 05.10., nach dem 12.10. und am 31.10.',
          formula: 'Saldo neu = Saldo alt + gelieferte Paletten − tauschfähig zurückerhaltene Paletten',
          fields: [
            { id: 's1', label: 'Saldo nach 05.10.', unit: 'Paletten', answer: 21, tol: 0 },
            { id: 's2', label: 'Saldo nach 12.10.', unit: 'Paletten', answer: 17, tol: 0 },
            { id: 's3', label: 'Saldo am 31.10.', unit: 'Paletten', answer: 23, tol: 0 }
          ],
          hints: ['15 + 26 − 20.', 'Am 19.10. zählen nur 12 Paletten.'],
          solution: `- 05.10.: 15 + 26 − 20 = **21 Paletten**
- 12.10.: 21 + 30 − 34 = **17 Paletten** (Hochwald hat 4 Paletten des alten Saldos zurückgegeben)
- 19.10.: 17 + 18 − 12 = **23 Paletten**; die 2 defekten Paletten werden **nicht** angerechnet.

Am 31.10. schuldet Hochwald-Getränke der Saarlogistik **23 Paletten**.`
        },
        {
          id: 'lf13-entsorgung-a10-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne den Wertausgleich für den Saldo am 31.10. Berechne außerdem, wie viel Geld der Saarlogistik entginge, wenn der Fahrer die 2 defekten Paletten fälschlich als tauschfähig angenommen hätte.',
          formula: 'Wertausgleich = Saldo × Preis je Palette',
          fields: [
            { id: 'wert', label: 'Wertausgleich', unit: '€', answer: 333.5, tol: 0.01 },
            { id: 'diff', label: 'Differenz durch die 2 defekten Paletten', unit: '€', answer: 29, tol: 0.01 }
          ],
          hints: ['23 × 14,50 €.', '2 × 14,50 €.'],
          solution: `**Wertausgleich:** 23 × 14,50 € = **333,50 €**

**Differenz:** Würden die 2 defekten Paletten angerechnet, betrüge der Saldo 21 Paletten = 304,50 €. Der Saarlogistik würden 2 × 14,50 € = **29,00 €** entgehen. Deshalb muss der Fahrer die Tauschfähigkeit bei der Übernahme prüfen und defekte Paletten auf dem Palettenschein vermerken.`
        },
        {
          id: 'lf13-entsorgung-a10-3', type: 'mc', difficulty: 3, points: 3,
          q: 'Welche Maßnahmen helfen der Saarlogistik, Palettenverluste künftig zu vermeiden? (Mehrfachauswahl)',
          options: [
            'Bei jeder Ablieferung die Zahl der getauschten und nicht getauschten Paletten auf dem Ablieferbeleg bzw. einem Palettenschein vom Empfänger quittieren lassen',
            'Die Tauschfähigkeit der Leerpaletten bei Übernahme prüfen und defekte Paletten zurückweisen oder gesondert vermerken',
            'Den Saldo regelmäßig mit dem Kunden abstimmen und vertraglich eine Frist für den Ausgleich vereinbaren',
            'Auf den Palettenschein verzichten, weil der Saldo im Palettenkonto ohnehin feststeht',
            'Defekte Paletten wie tauschfähige anrechnen, um den Kunden nicht zu verärgern'
          ],
          correct: [0, 1, 2],
          hints: ['Was braucht man, um eine Forderung zu beweisen?', 'Was passiert, wenn defekte Paletten angerechnet werden?'],
          solution: 'Richtig sind A, B und C: **Quittung** als Beweis, **Prüfung der Tauschfähigkeit** und **regelmäßige Saldenabstimmung** mit Ausgleichsfrist. **D** ist falsch: Ohne Beleg lässt sich der Saldo im Streitfall nicht beweisen. **E** ist falsch: Dann trägt die Spedition den Wertverlust.'
        }
      ]
    }
  ],
  quiz: ['lf13-entsorgung-a1', 'lf13-entsorgung-a2', 'lf13-entsorgung-a3', 'lf13-entsorgung-a5', 'lf13-entsorgung-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 13, Ziel: Qualität und entsorgungslogistische Gesichtspunkte berücksichtigen; Inhalte: Aufgaben und Arten des Recyclings' },
    { title: 'Kreislaufwirtschaftsgesetz § 6 Abfallhierarchie', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__6.html', asOf: '2026-10-17' },
    { title: 'Kreislaufwirtschaftsgesetz § 3 Begriffsbestimmungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__3.html', asOf: '2026-10-17' },
    { title: 'Kreislaufwirtschaftsgesetz § 50 Nachweispflichten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__50.html', asOf: '2026-10-17' },
    { title: 'Kreislaufwirtschaftsgesetz § 53 Sammler, Beförderer, Händler und Makler von Abfällen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__53.html', asOf: '2026-10-17' },
    { title: 'Kreislaufwirtschaftsgesetz § 54 Sammler, Beförderer, Händler und Makler von gefährlichen Abfällen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__54.html', asOf: '2026-10-17' },
    { title: 'Kreislaufwirtschaftsgesetz § 55 Kennzeichnung der Fahrzeuge', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/krwg/__55.html', asOf: '2026-10-17' },
    { title: 'Verpackungsrecht-Durchführungsgesetz § 39 Pflichten der Hersteller und Vertreiber zur Rücknahme und Verwertung (Wortlaut über gesetze.legal geprüft, amtliche Seite nicht erreichbar – bitte bestätigen)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/verpackdg/__39.html', asOf: '2026-10-17' },
    { title: 'Neues Verpackungsrecht (PPWR und VerpackDG seit 12.08.2026)', publisher: 'Umweltpakt Bayern (Bayerisches Staatsministerium für Umwelt und Verbraucherschutz)', url: 'https://www.umweltpakt.bayern.de/abfall/aktuelles/3967/neues-verpackungsrecht', asOf: '2026-10-17' },
    { title: 'Zentrale Stelle Verpackungsregister: Alle Informationen zur Registrierung', publisher: 'Stiftung Zentrale Stelle Verpackungsregister', url: 'https://www.verpackungsregister.org/registrierung/alle-informationen-zur-registrierung', asOf: '2026-10-17' },
    { title: 'Elektronisches Abfallnachweisverfahren: Information für gewerbliche Abfallerzeugende, -entsorgende und -befördernde', publisher: 'Stadt Köln, Umwelt- und Verbraucherschutzamt', url: 'https://www.stadt-koeln.de/artikel/60876/index.html', asOf: '2026-10-17' },
    { title: 'Allgemeine Deutsche Spediteurbedingungen 2017 (ADSp 2017), Ziffer 4.8.1 (Abdruck des DSLV-Textes)', publisher: 'DSLV Bundesverband Spedition und Logistik u. a. (Verbandsempfehlung)', url: 'https://www.kemena.de/wp-content/uploads/2023/11/ADSp_2017_DSLV_20161019.pdf', asOf: '2026-10-17' }
  ],
  links: ['lf13-versandvorbereitung', 'lf05-speditionsvertrag', 'lf04-gefahrgut', 'lf09-lagerorganisation', 'lf13-distributionskennzahlen']
};
