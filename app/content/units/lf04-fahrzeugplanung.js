export default {
  id: 'lf04-fahrzeugplanung',
  area: 'LF04',
  topic: 'lf04-fahrzeugplanung',
  title: 'Fahrzeug- und Ladeeinheitenplanung, Make or Buy',
  status: 'vollstaendig',
  minutes: 40,
  validity: {
    asOf: '2026-10',
    note: 'Maße nach § 32 StVZO (Breite 2,55 m, Kühlaufbauten 2,60 m, Höhe 4,00 m, Sattelkraftfahrzeug 16,50 m bei Einhaltung der Teillängen, Lastzug 18,75 m) und Gewichte nach § 34 StVZO (Kombinationen mit mehr als vier Achsen 40 t, im intermodalen Verkehr bis 44 t), Ladung nach §§ 22, 23 StVO und § 31 StVZO, Verladen nach § 412 HGB, Selbsteintritt nach § 458 HGB – geprüft auf gesetze-im-internet.de am 17.10.2026. Fahrzeug-Innenmaße, Nutzlasten, Volumen und alle Kosten sind typische Richtwerte bzw. erfundene Beispielwerte (Bezugsjahr 2026).'
  },
  goals: [
    'Ich kann die wichtigsten Lkw-Arten und Aufbauten unterscheiden und einem Transportauftrag zuordnen.',
    'Ich kann die zulässigen Maße und Gesamtgewichte von Lkw nach StVZO nennen.',
    'Ich kann Lademeter und Palettenstellplätze für eine Sendung berechnen.',
    'Ich kann die Auslastung eines Fahrzeugs nach Gewicht, Stellplätzen und Volumen berechnen und den Engpass erkennen.',
    'Ich kann erklären, wer für Verladung und Ladungssicherung verantwortlich ist.',
    'Ich kann mit einem Kostenvergleich und der kritischen Menge entscheiden, ob ein Transport mit eigenen Fahrzeugen (Selbsteintritt) oder durch einen Fremdunternehmer durchgeführt wird.'
  ],
  simple: `# Worum geht es?

Bevor ein Lkw losfährt, muss der Disponent drei Fragen beantworten:

1. **Welches Fahrzeug passt?** Plane, Kühlung, Kipper, Wechselbrücke – das hängt vom Gut ab.
2. **Passt die Ladung drauf?** Die Ladung darf weder zu schwer noch zu lang noch zu hoch sein. Dafür rechnet man mit **Gewicht**, **Lademetern** und **Palettenstellplätzen**.
3. **Fahren wir selbst oder kaufen wir die Leistung ein?** Eigener Lkw (**Selbsteintritt**) oder beauftragter **Fremdunternehmer** – das entscheidet ein **Kostenvergleich** (Make or Buy).

# Die wichtigsten Zahlen

| Wert | Grenze |
|---|---|
| Höhe | 4,00 m |
| Breite | 2,55 m (Kühlaufbau 2,60 m) |
| Länge Sattelkraftfahrzeug | 16,50 m |
| Länge Lastzug (Gliederzug) | 18,75 m |
| Gesamtgewicht Sattel- oder Gliederzug (mehr als 4 Achsen) | 40 t |
| im kombinierten (intermodalen) Verkehr | bis 44 t |

# Der Lademeter

Ein **Lademeter (ldm)** ist 1 Meter Ladefläche über die **ganze Breite** des Fahrzeugs (rund 2,40 m). Eine Europalette (1,20 m × 0,80 m) braucht **0,4 ldm**, weil drei Paletten nebeneinander in eine 1,20 m lange Reihe passen. Ein Standard-Sattelauflieger hat **13,6 ldm** und damit Platz für **33 Europaletten**.

# Ladung sichern

Ladung muss so gesichert sein, dass sie auch bei Vollbremsung oder Ausweichen nicht verrutscht oder herunterfällt (§ 22 StVO). Verantwortlich sind mehrere: der **Verlader/Absender**, der **Fahrer** und der **Halter** des Fahrzeugs.`,
  deep: `# 1. Fahrzeugarten und Aufbauten

| Fahrzeug | Aufbau/Merkmal | typischer Einsatz |
|---|---|---|
| **Solo-Lkw** (Motorwagen) | Kofferaufbau, Plane, oft mit Ladebordwand | Verteilerverkehr, Nahverkehr, Sammelgut-Vor- und Nachlauf |
| **Gliederzug** (Lastzug) | Motorwagen + Anhänger mit Drehschemel oder Zentralachse, oft zwei Wechselbrücken | Fernverkehr mit Teilung der Ladung, Hauptlauf Stückgut |
| **Sattelzug** (Sattelkraftfahrzeug) | Sattelzugmaschine + Sattelauflieger (Standard ca. 13,6 m Ladelänge) | Komplett- und Teilladungen, Fernverkehr, kranbar auch im KV |
| **Wechselbrücke** (Wechselaufbau) | Ladeeinheit ohne eigenes Fahrwerk, stellt sich auf Stützbeinen ab | Sammelgut, Systemverkehre, KV Straße–Schiene; Fahrer kann sie abstellen und eine andere aufnehmen |
| **Kühlfahrzeug** | wärmegedämmter Kofferaufbau mit Kühlaggregat | Lebensmittel, Pharma, temperaturgeführte Güter |
| **Planenfahrzeug** | Plane und Spriegel, seitlich und von oben beladbar (Curtainsider/Schiebeplane) | Paletten, Industriegüter, Seitenbeladung mit Stapler |
| **Kipper** | kippbare Mulde | Schüttgut: Sand, Kies, Schrott, Getreide |
| weitere | Silo, Tank, Container-Chassis, Tieflader, Jumbo-/Megatrailer (größere Innenhöhe) | Flüssig- und Schüttgut, Container, Schwer- und Volumengut |

# 2. Zulässige Maße (§ 32 StVZO) und Gewichte (§ 34 StVZO)

**Maße**
- **Breite:** 2,55 m; klimatisierte Aufbauten für temperaturgeführte Güter (Seitenwanddämmung mindestens 45 mm) 2,60 m
- **Höhe:** 4,00 m (auch § 22 Abs. 2 StVO: Fahrzeug und Ladung zusammen höchstens 4 m)
- **Länge:** Einzelfahrzeug 12,00 m; Sattelkraftfahrzeug 15,50 m, **16,50 m**, wenn die Teillängen eingehalten sind (Zugsattelzapfen bis Heck höchstens 12,00 m, vorderer Überhangradius höchstens 2,04 m); **Lastzug 18,75 m**

**Gewichte (zulässiges Gesamtgewicht)**
- Kraftfahrzeug oder Anhänger mit bis zu zwei Achsen: 18 t; Kraftfahrzeug mit mehr als zwei Achsen: 25 t (unter bestimmten Voraussetzungen 26 t)
- Fahrzeugkombination (Zug oder Sattelkraftfahrzeug) mit **mehr als vier Achsen: 40 t**
- **Intermodaler Verkehr:** dreiachsige Zugmaschine mit zwei- oder dreiachsigem Sattelanhänger bis **44 t**, wenn Container oder Wechselaufbauten (höchstens 45 Fuß) im kombinierten Verkehr befördert werden; bei Schiffsverkehr im Vor- oder Nachlauf höchstens 150 km Straßenstrecke
- Achslast Einzelachse 10 t, angetriebene Einzelachse 11,5 t

> **Nutzlast** = zulässiges Gesamtgewicht − Leergewicht (Eigengewicht). Ein Sattelzug mit 40 t zGG und rund 15 t Leergewicht kann also nur rund 25 t laden (Beispielwert; das genaue Leergewicht steht in den Fahrzeugpapieren).

# 3. Lademeter und Stellplätze

**Lademeter = Länge der Ladefläche, die eine Sendung belegt, bezogen auf die volle Fahrzeugbreite.**

Faustformel (Fahrzeugbreite rund 2,40 m):

**ldm = (Länge × Breite des Packstücks in m) ÷ 2,4 × Anzahl ÷ Stapelfaktor**

| Ladungsträger | Maße | ldm je Stück | Stellplätze im 13,6-m-Auflieger |
|---|---|---|---|
| Europalette | 1,20 × 0,80 m | 0,4 | 33 (11 Reihen à 3, längs) |
| Industriepalette | 1,20 × 1,00 m | 0,5 | 26 (13 Reihen à 2) |

- **Stapelbar**: Zwei Paletten übereinander belegen nur einen Stellplatz (Stapelfaktor 2). Ob gestapelt werden darf, entscheidet die Verpackung und die Innenhöhe.
- Im Stückgutverkehr rechnen viele Spediteure sperrige Sendungen über ein **Lademetergewicht** ab (z. B. 1 ldm = 1.850 kg). Dieser Wert ist **nicht gesetzlich**, sondern wird im Tarif oder Vertrag vereinbart.

# 4. Auslastung und Engpass

Ein Fahrzeug ist „voll“, sobald **eine** Kapazität erschöpft ist:

| Kapazität | Auslastung |
|---|---|
| Gewicht | Ladungsgewicht ÷ Nutzlast × 100 |
| Fläche | belegte ldm ÷ verfügbare ldm × 100 (oder Stellplätze) |
| Volumen | Ladungsvolumen ÷ Laderaumvolumen × 100 |

- **Schwergut** (z. B. Stahl, Getränke): Das **Gewicht** ist der Engpass, die Fläche bleibt frei.
- **Volumengut/Sperrgut** (z. B. Dämmstoffe, leere Kunststoffbehälter, Möbel): **Fläche oder Volumen** sind der Engpass, die Nutzlast wird kaum genutzt.
- Gute Disposition kombiniert schwere und leichte Sendungen, damit beide Kapazitäten gut genutzt werden. Achslasten und Lastverteilung dürfen dabei nicht überschritten werden.

# 5. Ladungssicherung – wer ist verantwortlich?

- **§ 22 Abs. 1 StVO:** Ladung und Sicherungsmittel sind verkehrssicher zu verstauen und zu sichern; die **anerkannten Regeln der Technik** sind zu beachten. Dazu gehört z. B. die Richtlinienreihe **VDI 2700** (Ladungssicherung auf Straßenfahrzeugen).
- **§ 23 Abs. 1 StVO:** Der **Fahrer** muss dafür sorgen, dass die Ladung vorschriftsmäßig ist und die Verkehrssicherheit nicht leidet.
- **§ 412 Abs. 1 HGB:** Der **Absender** hat das Gut **beförderungssicher** zu laden, zu stauen und zu befestigen; der **Frachtführer** sorgt für die **betriebssichere** Verladung (das Fahrzeug darf durch die Ladung nicht gefährdet werden).
- **§ 31 Abs. 2 StVZO:** Der **Halter** darf die Inbetriebnahme nicht anordnen oder zulassen, wenn er weiß oder wissen muss, dass Ladung oder Fahrzeug nicht vorschriftsmäßig sind.

Folge: Ladungssicherung ist **gemeinsame Verantwortung**. Bei einer Kontrolle können Fahrer, Verlader und Halter belangt werden.

# 6. Make or Buy: eigener Lkw oder Fremdunternehmer?

Ein Spediteur darf die Beförderung **selbst ausführen** (**Selbsteintritt**, § 458 HGB). Er hat dann für die Beförderung die Rechte und Pflichten eines **Frachtführers**. Alternativ beauftragt er einen **Fremdunternehmer** (Frachtführer) und bezahlt dessen Fracht.

**Kostenvergleich**
- Eigener Lkw: **K(eigen) = fixe Kosten + variable Kosten je km × km**
- Fremdunternehmer: **K(fremd) = Preis je km × km** (nur variable Kosten aus Sicht der Spedition)

**Kritische Menge** (Kostengleichheit):

**x(krit) = fixe Kosten ÷ (Fremdpreis je km − variable Kosten je km)**

- Fahrleistung **über** der kritischen Menge → eigener Lkw ist günstiger (Make).
- Fahrleistung **unter** der kritischen Menge → Fremdunternehmer ist günstiger (Buy).

Nicht nur die Kosten zählen: **Qualitative Gründe** für eigene Fahrzeuge sind Kontrolle über Qualität und Termine, Werbung auf dem Fahrzeug, Fahrer als Kundenkontakt. Für Fremdunternehmer sprechen Flexibilität bei schwankender Menge, keine Kapitalbindung, kein Fahrermangel- und Auslastungsrisiko. Die Ermittlung der Fahrzeugkosten selbst lernst du in der Einheit „Fahrzeugkostenrechnung für Lkw“.`,
  terms: [
    { term: 'Sattelkraftfahrzeug (Sattelzug)', def: 'Kombination aus Sattelzugmaschine und Sattelauflieger, der einen Teil seines Gewichts auf die Zugmaschine überträgt; zulässige Länge 16,50 m bei Einhaltung der Teillängen (§ 32 StVZO).' },
    { term: 'Gliederzug (Lastzug)', def: 'Motorwagen mit eigener Ladefläche plus Anhänger; zulässige Länge 18,75 m (§ 32 StVZO). Häufig mit zwei Wechselbrücken.' },
    { term: 'Wechselbrücke', def: 'Austauschbarer Ladungsträger ohne eigenes Fahrwerk, der auf Stützbeinen abgestellt und vom Lkw aufgenommen werden kann; im Systemverkehr und im kombinierten Verkehr verbreitet.' },
    { term: 'Lademeter (ldm)', def: 'Ein Meter Ladeflächenlänge über die volle Fahrzeugbreite (ca. 2,40 m). Eine Europalette belegt 0,4 ldm, ein 13,6-m-Sattelauflieger hat 13,6 ldm.' },
    { term: 'Palettenstellplatz', def: 'Grundfläche, die eine Palette auf der Ladefläche belegt; ein Standard-Sattelauflieger bietet 33 Stellplätze für Europaletten.' },
    { term: 'Nutzlast', def: 'Zulässiges Gesamtgewicht minus Leergewicht: das Gewicht, das tatsächlich geladen werden darf.' },
    { term: 'Zulässiges Gesamtgewicht (zGG)', def: 'Höchstgewicht von Fahrzeug bzw. Kombination einschließlich Ladung nach § 34 StVZO, z. B. 40 t bei mehr als vier Achsen, im intermodalen Verkehr bis 44 t.' },
    { term: 'Beförderungssichere Verladung', def: 'Laden, Stauen und Befestigen des Gutes so, dass es den Transport unbeschadet übersteht; Pflicht des Absenders nach § 412 HGB.' },
    { term: 'Betriebssichere Verladung', def: 'Verladung so, dass die Betriebssicherheit des Fahrzeugs nicht gefährdet ist (z. B. Achslasten, Schwerpunkt); Pflicht des Frachtführers nach § 412 HGB.' },
    { term: 'Selbsteintritt', def: 'Der Spediteur führt die Beförderung mit eigenen Fahrzeugen selbst aus und hat insoweit die Stellung eines Frachtführers (§ 458 HGB).' },
    { term: 'Kritische Menge', def: 'Fahrleistung (z. B. km pro Jahr), bei der die Kosten für eigenes Fahrzeug und Fremdvergabe gleich hoch sind.' },
    { term: 'VDI 2700', def: 'Richtlinienreihe des Vereins Deutscher Ingenieure zur Ladungssicherung auf Straßenfahrzeugen; gilt als anerkannte Regel der Technik im Sinne von § 22 StVO.' }
  ],
  example: `# Saar-Trans Spedition GmbH, Saarbrücken – Disposition am Montagmorgen (Beispielwerte 2026)

Die Disponentin Lea plant drei Aufträge für Dienstag:

| Auftrag | Ladung | Fahrzeugwahl | Begründung |
|---|---|---|---|
| A: Getränkehandel Homburg → Köln | 26 Europaletten Mineralwasser à 900 kg | Sattelzug (Plane) | 23.400 kg, 10,4 ldm – das Gewicht ist fast der Engpass (Nutzlast ca. 25 t) |
| B: Dämmstoffwerk Dillingen → München | 33 Europaletten Dämmplatten à 120 kg, Höhe 2,40 m | Megatrailer | nur 3.960 kg, aber alle 33 Stellplätze und viel Höhe belegt – Volumen ist der Engpass |
| C: Fleischwaren Lebach → Frankfurt | 14 Europaletten bei +2 °C | Kühlsattel (Teilladung) | Temperaturführung nötig, Rest des Kühlers mit weiteren Kühlsendungen auffüllen |

**Make or Buy für Auftrag B:** Saar-Trans hat keinen eigenen Megatrailer. Für einen Auftrag lohnt sich die Anschaffung nicht. Lea vergibt die Tour an einen Fremdunternehmer aus Saarlouis (Buy).

**Ladungssicherung für Auftrag A:** Das Verladepersonal des Getränkehändlers lädt formschlüssig ohne Lücken, der Fahrer prüft vor Abfahrt die Zurrgurte und die Lastverteilung. Fehlt Sicherungsmaterial, fährt er nicht los.`,
  rules: [
    'Höhe 4 m, Breite 2,55 m (Kühlaufbau 2,60 m), Sattelzug 16,50 m, Lastzug 18,75 m.',
    '40 t für Sattel- oder Gliederzug mit mehr als vier Achsen – 44 t nur im intermodalen (kombinierten) Verkehr.',
    'Europalette = 0,4 ldm; 13,6 ldm im Sattelauflieger = 33 Europaletten.',
    'Ein Fahrzeug ist voll, wenn die erste Kapazität (Gewicht, Fläche oder Volumen) erschöpft ist.',
    'Absender: beförderungssicher verladen; Frachtführer: betriebssicher; Fahrer: vor Abfahrt prüfen.',
    'Fahrleistung über der kritischen Menge → eigener Lkw; darunter → Fremdunternehmer.'
  ],
  summary: `- **Fahrzeugwahl** nach Gut: Plane (Paletten), Kühlung (temperaturgeführt), Kipper (Schüttgut), Wechselbrücke (Systemverkehr), Sattel- oder Gliederzug (Fernverkehr).
- **StVZO-Grenzen:** 4,00 m hoch, 2,55 m breit (Kühl 2,60 m), 16,50 m Sattel, 18,75 m Lastzug, 40 t (KV bis 44 t).
- **Lademeter:** ldm = Länge × Breite ÷ 2,4 × Anzahl ÷ Stapelfaktor; Europalette 0,4 ldm, 33 Stellplätze im 13,6-m-Auflieger.
- **Auslastung** getrennt nach Gewicht, Fläche und Volumen berechnen, Engpass erkennen.
- **Ladungssicherung** ist gemeinsame Pflicht von Verlader/Absender, Fahrer und Halter (§ 22, § 23 StVO, § 412 HGB, VDI 2700).
- **Make or Buy:** kritische Menge = Fixkosten ÷ (Fremdpreis − variable Kosten je Einheit).`,
  mistakes: [
    { wrong: 'Jeder Sattelzug darf 44 t wiegen.', right: 'Grundsätzlich gelten 40 t. 44 t sind nur im intermodalen Verkehr mit Containern oder Wechselaufbauten und dreiachsiger Zugmaschine erlaubt (§ 34 Abs. 6 StVZO).' },
    { wrong: 'Wenn das Gewicht passt, passt auch die Ladung.', right: 'Auch Lademeter/Stellplätze, Volumen, Höhe und Achslasten müssen passen. Bei leichtem Volumengut ist die Fläche schon voll, bevor die Nutzlast erreicht ist.' },
    { wrong: 'Für die Ladungssicherung ist allein der Fahrer verantwortlich.', right: 'Verlader bzw. Absender (beförderungssicher, § 412 HGB), Fahrer (§ 23 StVO) und Halter tragen gemeinsam Verantwortung.' },
    { wrong: '40 t zulässiges Gesamtgewicht bedeutet 40 t Ladung.', right: 'Vom zulässigen Gesamtgewicht wird das Leergewicht abgezogen; die Nutzlast eines Sattelzugs liegt meist bei rund 24–25 t.' },
    { wrong: 'Der eigene Lkw ist immer günstiger, weil man keinen Gewinn des Fremdunternehmers bezahlt.', right: 'Die Fixkosten des eigenen Lkw fallen auch bei Stillstand an. Erst oberhalb der kritischen Menge ist der eigene Lkw günstiger.' }
  ],
  flashcards: [
    { q: 'Wie hoch darf ein Lkw mit Ladung höchstens sein?', a: '4,00 m (§ 32 StVZO, § 22 Abs. 2 StVO).' },
    { q: 'Welche Länge gilt für ein Sattelkraftfahrzeug und für einen Lastzug?', a: 'Sattelkraftfahrzeug 16,50 m (bei Einhaltung der Teillängen), Lastzug 18,75 m (§ 32 StVZO).' },
    { q: 'Wann sind 44 t Gesamtgewicht erlaubt?', a: 'Im intermodalen Verkehr: dreiachsige Zugmaschine mit zwei- oder dreiachsigem Sattelanhänger, der Container oder Wechselaufbauten bis 45 Fuß befördert (§ 34 Abs. 6 StVZO).' },
    { q: 'Wie viele Lademeter belegt eine Europalette?', a: '0,4 ldm (1,20 × 0,80 m ÷ 2,4 m).' },
    { q: 'Wie viele Europaletten passen in einen Standard-Sattelauflieger mit 13,6 m?', a: '33 (11 Reihen mit je 3 Paletten längs).' },
    { q: 'Wie berechnet man die Nutzlast?', a: 'Zulässiges Gesamtgewicht − Leergewicht.' },
    { q: 'Wer muss nach § 412 HGB beförderungssicher verladen?', a: 'Der Absender (soweit nichts anderes vereinbart oder üblich ist).' },
    { q: 'Was bedeutet Selbsteintritt?', a: 'Der Spediteur befördert selbst und hat dabei die Rechte und Pflichten eines Frachtführers (§ 458 HGB).' },
    { q: 'Formel der kritischen Menge beim Make-or-Buy-Vergleich?', a: 'Fixkosten ÷ (Fremdpreis je Einheit − variable Kosten je Einheit).' },
    { q: 'Wozu dient ein Kühlaufbau mit 2,60 m Breite?', a: 'Für temperaturgeführte Güter; wegen der Wärmedämmung dürfen solche Aufbauten 2,60 m statt 2,55 m breit sein.' }
  ],
  tasks: [
    {
      id: 'lf04-fahrzeugplanung-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jedem Gut das passende Fahrzeug bzw. den passenden Aufbau zu.',
      pairs: [
        ['40 m³ Kies für eine Baustelle', 'Kipper'],
        ['Joghurt bei +4 °C', 'Kühlkoffer'],
        ['33 Europaletten Papier, seitliche Beladung mit Stapler', 'Planenauflieger (Curtainsider)'],
        ['Stückgut im Nachtsprung zwischen zwei Depots, Fahrzeug soll abgestellt werden können', 'Wechselbrücke'],
        ['Heizöl', 'Tankfahrzeug']
      ],
      hints: ['Überlege zuerst: Schüttgut, temperaturgeführt, Paletten oder flüssig?', 'Die Wechselbrücke hat kein eigenes Fahrwerk und steht auf Stützbeinen.'],
      solution: 'Kies ist Schüttgut → **Kipper**. Joghurt muss gekühlt werden → **Kühlkoffer**. Paletten mit Seitenbeladung → **Planenauflieger/Curtainsider**. Stückgut im Systemverkehr mit Abstellen → **Wechselbrücke**. Heizöl ist flüssig → **Tankfahrzeug**.'
    },
    {
      id: 'lf04-fahrzeugplanung-a2', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die zulässigen Werte nach StVZO (Stand 2026).',
      text: 'Ein Lkw darf einschließlich Ladung höchstens [[4|4,00|4,0]] m hoch und grundsätzlich [[2,55|2.55]] m breit sein. Ein Sattelkraftfahrzeug darf bei Einhaltung der Teillängen [[16,50|16,5|16.5|16.50]] m lang sein, ein Lastzug [[18,75|18.75]] m. Eine Fahrzeugkombination mit mehr als vier Achsen darf [[40]] t wiegen.',
      hints: ['Die Höhe ist ein runder Wert.', 'Lastzug ist länger als Sattelzug, weil er aus zwei Ladeflächen besteht.'],
      solution: 'Höhe **4,00 m**, Breite **2,55 m** (§ 32 Abs. 1 und 2 StVZO), Sattelkraftfahrzeug **16,50 m**, Lastzug **18,75 m** (§ 32 Abs. 4 StVZO), Gesamtgewicht bei mehr als vier Achsen **40 t** (§ 34 Abs. 6 StVZO).'
    },
    {
      id: 'lf04-fahrzeugplanung-a3', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Sattelzug (dreiachsige Zugmaschine, dreiachsiger Auflieger) bringt einen 40-Fuß-Container vom Saarbrücker Kunden zum Bahnterminal, von dort fährt der Container per Bahn nach Hamburg. Welches Gesamtgewicht ist zulässig?',
      options: ['40 t, weil für alle Sattelzüge 40 t gelten', '44 t, weil es sich um intermodalen Verkehr mit einem Container handelt', '42 t, weil Container leichter sind', '48 t, weil die Bahn den Hauptlauf übernimmt'],
      correct: [1],
      hints: ['Welche Ausnahme gibt es im kombinierten Verkehr?', 'Prüfe Achszahl der Zugmaschine und die Containerlänge (höchstens 45 Fuß).'],
      solution: '**44 t**: Nach § 34 Abs. 6 StVZO darf ein Sattelkraftfahrzeug mit dreiachsiger Zugmaschine und zwei- oder dreiachsigem Auflieger im intermodalen Verkehr 44 t wiegen, wenn es Container oder Wechselaufbauten bis 45 Fuß befördert. Der 40-Fuß-Container im Vorlauf zur Bahn erfüllt das. 42 t gelten nur bei zweiachsiger Zugmaschine mit dreiachsigem Auflieger.'
    },
    {
      id: 'lf04-fahrzeugplanung-a4', type: 'calc', difficulty: 1, points: 2,
      q: 'Eine Sendung besteht aus **15 Europaletten** (1,20 m × 0,80 m), nicht stapelbar. Wie viele Lademeter belegt sie, und wie viele Palettenstellplätze bleiben in einem Sattelauflieger mit 33 Stellplätzen frei?',
      formula: 'ldm = Länge × Breite ÷ 2,4 × Anzahl',
      fields: [
        { id: 'ldm', label: 'Lademeter', unit: 'ldm', answer: 6, tol: 0.01 },
        { id: 'frei', label: 'freie Stellplätze', unit: 'Stück', answer: 18, tol: 0 }
      ],
      hints: ['Eine Europalette belegt 1,20 × 0,80 ÷ 2,4 = 0,4 ldm.', 'Freie Stellplätze = 33 − belegte Stellplätze.'],
      solution: `**Formel:** ldm = Länge × Breite ÷ 2,4 m × Anzahl

**Je Palette:** 1,20 m × 0,80 m ÷ 2,4 m = 0,96 m² ÷ 2,4 m = **0,4 ldm**

**Sendung:** 0,4 ldm × 15 = **6,0 ldm** (das sind 5 volle Reihen à 3 Paletten = 5 × 1,20 m)

**Freie Stellplätze:** 33 − 15 = **18 Stellplätze**`
    },
    {
      id: 'lf04-fahrzeugplanung-a5', type: 'calc', difficulty: 2, points: 2,
      q: 'Ein Versender liefert **12 Industriepaletten** (1,20 m × 1,00 m). Die Paletten sind **2-fach stapelbar**. Berechne die benötigten Stellplätze und die Lademeter.',
      formula: 'ldm = Länge × Breite ÷ 2,4 × Anzahl ÷ Stapelfaktor',
      fields: [
        { id: 'sp', label: 'benötigte Stellplätze', unit: 'Stück', answer: 6, tol: 0 },
        { id: 'ldm', label: 'Lademeter', unit: 'ldm', answer: 3, tol: 0.01 }
      ],
      hints: ['Durch das Stapeln teilen sich zwei Paletten einen Stellplatz.', 'Eine Industriepalette belegt 1,20 × 1,00 ÷ 2,4 = 0,5 ldm.'],
      solution: `**Stellplätze:** 12 Paletten ÷ Stapelfaktor 2 = **6 Stellplätze**

**ldm je Stellplatz:** 1,20 m × 1,00 m ÷ 2,4 m = 0,5 ldm

**Lademeter:** 6 × 0,5 ldm = **3,0 ldm**

(Gleiches Ergebnis mit der Gesamtformel: 1,2 × 1,0 ÷ 2,4 × 12 ÷ 2 = 3,0 ldm.)`
    },
    {
      id: 'lf04-fahrzeugplanung-a6', type: 'calc', difficulty: 2, points: 3,
      q: `Ein Sattelzug hat ein zulässiges Gesamtgewicht von 40.000 kg und ein Leergewicht von 15.200 kg (Beispielwerte). Geladen werden **22 Europaletten Fliesen à 1.050 kg**.

Berechne die Nutzlast, das Ladungsgewicht und die Gewichtsauslastung in Prozent (auf zwei Nachkommastellen).`,
      formula: 'Nutzlast = zGG − Leergewicht; Auslastung = Ladungsgewicht ÷ Nutzlast × 100',
      fields: [
        { id: 'nl', label: 'Nutzlast', unit: 'kg', answer: 24800, tol: 0.5 },
        { id: 'lg', label: 'Ladungsgewicht', unit: 'kg', answer: 23100, tol: 0.5 },
        { id: 'ausl', label: 'Gewichtsauslastung', unit: '%', answer: 93.15, tol: 0.05 }
      ],
      hints: ['Nutzlast = zulässiges Gesamtgewicht minus Leergewicht.', 'Ladungsgewicht = Anzahl Paletten × Gewicht je Palette.'],
      solution: `**Nutzlast:** 40.000 kg − 15.200 kg = **24.800 kg**

**Ladungsgewicht:** 22 × 1.050 kg = **23.100 kg**

**Gewichtsauslastung:** 23.100 kg ÷ 24.800 kg × 100 = **93,15 %**

Zum Vergleich: Die Fläche ist nur zu 22 ÷ 33 = 66,67 % belegt. Das **Gewicht ist der Engpass** – weitere schwere Paletten können nicht zugeladen werden, obwohl noch 11 Stellplätze frei sind (Restnutzlast 1.700 kg).`
    },
    {
      id: 'lf04-fahrzeugplanung-a7', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zur Ladungssicherung sind richtig? (Mehrfachauswahl)',
      options: [
        'Nach § 412 HGB hat grundsätzlich der Absender das Gut beförderungssicher zu laden, zu stauen und zu befestigen.',
        'Der Fahrer muss nach § 23 StVO dafür sorgen, dass die Verkehrssicherheit durch die Ladung nicht leidet.',
        'Wenn der Absender verladen hat, muss der Fahrer die Ladung nicht mehr ansehen.',
        'Nach § 22 StVO sind bei der Ladungssicherung die anerkannten Regeln der Technik zu beachten, z. B. die Richtlinie VDI 2700.',
        'Ladungssicherung ist nur bei Gefahrgut vorgeschrieben.'
      ],
      correct: [0, 1, 3],
      hints: ['Es gibt mehrere Verantwortliche nebeneinander.', 'Die StVO gilt für jede Ladung, nicht nur für Gefahrgut.'],
      solution: 'Richtig sind **A, B und D**. Der Absender verlädt beförderungssicher (§ 412 Abs. 1 HGB), der Fahrer bleibt nach § 23 StVO verantwortlich und muss vor Abfahrt prüfen (C ist falsch). § 22 Abs. 1 StVO verlangt die Beachtung der anerkannten Regeln der Technik; dazu zählt die VDI 2700. Ladungssicherung gilt für **jede** Ladung (E ist falsch).'
    },
    {
      id: 'lf04-fahrzeugplanung-a8', type: 'calc', difficulty: 3, points: 3,
      q: `Saar-Trans überlegt, für eine feste Linie Saarbrücken–Stuttgart einen eigenen Lkw einzusetzen oder einen Fremdunternehmer zu beauftragen (Beispielwerte 2026):

- Eigener Lkw: fixe Kosten 102.000 € pro Jahr, variable Kosten 0,62 € je km
- Fremdunternehmer: 1,47 € je km

Berechne die kritische Menge sowie die Kosten beider Varianten bei einer geplanten Jahresfahrleistung von 135.000 km.`,
      formula: 'x(krit) = Fixkosten ÷ (Fremdpreis je km − variable Kosten je km)',
      fields: [
        { id: 'xk', label: 'kritische Menge', unit: 'km', answer: 120000, tol: 1 },
        { id: 'ke', label: 'Kosten eigener Lkw bei 135.000 km', unit: '€', answer: 185700, tol: 0.01 },
        { id: 'kf', label: 'Kosten Fremdunternehmer bei 135.000 km', unit: '€', answer: 198450, tol: 0.01 }
      ],
      hints: ['Setze die Kosten gleich: 102.000 + 0,62 · x = 1,47 · x.', 'Die Differenz der km-Sätze beträgt 0,85 € je km.'],
      solution: `**Formel:** x(krit) = K(fix) ÷ (p − k(v))

**Kritische Menge:** 102.000 € ÷ (1,47 €/km − 0,62 €/km) = 102.000 € ÷ 0,85 €/km = **120.000 km**

**Eigener Lkw bei 135.000 km:** 102.000 € + 0,62 €/km × 135.000 km = 102.000 € + 83.700 € = **185.700 €**

**Fremdunternehmer bei 135.000 km:** 1,47 €/km × 135.000 km = **198.450 €**

**Entscheidung:** 135.000 km liegen über der kritischen Menge. Der eigene Lkw (Selbsteintritt) ist um 12.750 € günstiger → **Make**.`
    },
    {
      id: 'lf04-fahrzeugplanung-a9', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe die Schritte der Fahrzeug- und Ladeplanung für einen neuen Auftrag in eine sinnvolle Reihenfolge.',
      items: [
        'Auftragsdaten prüfen: Art des Gutes, Menge, Gewicht, Maße, Temperatur, Termine',
        'geeignete Fahrzeugart und Aufbau auswählen',
        'Lademeter, Gewicht und Volumen berechnen und mit der Kapazität vergleichen',
        'entscheiden: eigenes Fahrzeug (Selbsteintritt) oder Fremdunternehmer',
        'Ladungssicherung und Verladung mit Absender und Fahrer abstimmen'
      ],
      hints: ['Ohne Auftragsdaten kann man kein Fahrzeug wählen.', 'Die Ladungssicherung wird erst geklärt, wenn feststeht, wer fährt.'],
      solution: 'Erst die **Auftragsdaten** klären, dann das **passende Fahrzeug** wählen und die **Kapazität** (ldm, Gewicht, Volumen) prüfen. Danach fällt die **Make-or-Buy-Entscheidung**; zuletzt wird die **Verladung und Ladungssicherung** mit Absender und Fahrer abgestimmt.'
    },
    {
      id: 'lf04-fahrzeugplanung-a10', type: 'text', difficulty: 2, points: 4,
      q: 'Nenne je zwei **nicht kostenbezogene** Gründe für den Einsatz eigener Fahrzeuge und für die Beauftragung eines Fremdunternehmers.',
      model: 'Für eigene Fahrzeuge sprechen die bessere Kontrolle über Qualität und Pünktlichkeit sowie der direkte Kundenkontakt durch eigene Fahrer und die Werbewirkung des Fahrzeugs. Für einen Fremdunternehmer sprechen die Flexibilität bei schwankenden Mengen und dass kein Kapital gebunden wird; außerdem trägt der Fremdunternehmer das Auslastungsrisiko und das Risiko, Fahrer zu finden.',
      criteria: [
        { text: 'eigene Fahrzeuge: Kontrolle über Qualität/Termine', keywords: ['Kontrolle|Qualität|Pünktlich|Termin|Zuverlässig'], points: 1 },
        { text: 'eigene Fahrzeuge: Kundenkontakt/Image/Werbung', keywords: ['Kundenkontakt|Image|Werbe|Kunde'], points: 1 },
        { text: 'Fremdunternehmer: Flexibilität bei Mengenschwankungen', keywords: ['Flexib|schwank|Spitze'], points: 1 },
        { text: 'Fremdunternehmer: keine Kapitalbindung oder kein Auslastungs-/Personalrisiko', keywords: ['Kapital|Auslastung|Risiko|Fahrer|Personal'], points: 1 }
      ],
      hints: ['Denke an Qualität, Image und Kundenbeziehung.', 'Denke an Mengenschwankungen, Investitionen und Fahrermangel.'],
      solution: '**Eigene Fahrzeuge:** Kontrolle über Qualität und Termine, eigene Fahrer als Ansprechpartner des Kunden, Werbung/Image. **Fremdunternehmer:** Flexibilität bei schwankendem Aufkommen, keine Kapitalbindung, kein Auslastungs- und Personalrisiko.'
    },
    {
      id: 'lf04-fahrzeugplanung-a11', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Volumengut oder Schwergut?',
      intro: `Die Spedition Bliesgau Logistik e.K. soll für einen Kunden in Neunkirchen zwei Sendungen nach Leipzig befördern. Zur Verfügung steht ein Standard-Sattelzug: 33 Stellplätze für Europaletten, Nutzlast 24.500 kg, Laderaumvolumen 90 m³ (Beispielwerte).

- Sendung 1: 18 Europaletten Kunststoffbehälter, je 160 kg, Höhe 2,20 m, nicht stapelbar
- Sendung 2: 12 Europaletten Maschinenteile, je 1.250 kg, Höhe 1,00 m, nicht stapelbar`,
      hints: ['Rechne Stellplätze, Gewicht und Volumen getrennt.', 'Volumen je Palette = 1,20 m × 0,80 m × Höhe.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf04-fahrzeugplanung-a11-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne für beide Sendungen zusammen die Lademeter, das Gesamtgewicht und das Volumen.',
          formula: 'ldm = Anzahl × 0,4; Gewicht = Σ Anzahl × kg; Volumen = Σ Anzahl × 1,2 × 0,8 × Höhe',
          fields: [
            { id: 'ldm', label: 'Lademeter', unit: 'ldm', answer: 12, tol: 0.01 },
            { id: 'kg', label: 'Gesamtgewicht', unit: 'kg', answer: 17880, tol: 0.5 },
            { id: 'm3', label: 'Volumen', unit: 'm³', answer: 49.54, tol: 0.05 }
          ],
          hints: ['Insgesamt sind es 30 Europaletten.', 'Volumen Sendung 1: 18 × 0,96 m² × 2,20 m.'],
          solution: `**Lademeter:** (18 + 12) × 0,4 ldm = 30 × 0,4 = **12,0 ldm**

**Gewicht:** 18 × 160 kg + 12 × 1.250 kg = 2.880 kg + 15.000 kg = **17.880 kg**

**Volumen:** Grundfläche je Palette 1,20 m × 0,80 m = 0,96 m²
- Sendung 1: 18 × 0,96 m² × 2,20 m = 38,016 m³
- Sendung 2: 12 × 0,96 m² × 1,00 m = 11,52 m³
- Summe: 38,016 m³ + 11,52 m³ = **49,536 m³ ≈ 49,54 m³**`
        },
        {
          id: 'lf04-fahrzeugplanung-a11-2', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne die Auslastung nach Stellplätzen, Gewicht und Volumen in Prozent (zwei Nachkommastellen).',
          formula: 'Auslastung = genutzt ÷ verfügbar × 100',
          fields: [
            { id: 'sp', label: 'Auslastung Stellplätze', unit: '%', answer: 90.91, tol: 0.05 },
            { id: 'gew', label: 'Auslastung Gewicht', unit: '%', answer: 72.98, tol: 0.05 },
            { id: 'vol', label: 'Auslastung Volumen', unit: '%', answer: 55.04, tol: 0.05 }
          ],
          hints: ['Stellplätze: 30 von 33.', 'Volumen: 49,536 m³ von 90 m³.'],
          solution: `**Stellplätze:** 30 ÷ 33 × 100 = **90,91 %**

**Gewicht:** 17.880 kg ÷ 24.500 kg × 100 = **72,98 %**

**Volumen:** 49,536 m³ ÷ 90 m³ × 100 = **55,04 %**

Engpass ist die **Fläche (Stellplätze)**: Nur noch 3 Stellplätze sind frei, obwohl noch 6.620 kg Nutzlast übrig sind. Das Volumen ist wenig genutzt, weil die Maschinenteile flach sind und nicht gestapelt werden dürfen.`
        },
        {
          id: 'lf04-fahrzeugplanung-a11-3', type: 'mc', difficulty: 2, points: 2,
          q: 'Welche Maßnahmen verbessern die Auslastung bzw. sichern den Transport? (Mehrfachauswahl)',
          options: [
            'Für die 3 freien Stellplätze schwere, flache Beiladung aus derselben Region suchen',
            'Die Maschinenteile auf die Kunststoffbehälter stapeln, um Stellplätze zu sparen',
            'Die schweren Paletten so verteilen, dass die Achslasten eingehalten werden, und formschlüssig sichern',
            'Weil Platz frei ist, die Ladung ungesichert lassen – sie kann sich nicht bewegen'
          ],
          correct: [0, 2],
          hints: ['Nicht stapelbare Güter dürfen nicht gestapelt werden.', 'Lücken in der Ladung erhöhen den Sicherungsaufwand.'],
          solution: 'Richtig sind **A und C**. Beiladung nutzt die Restkapazität (Gewicht ist noch frei). Schwere Paletten müssen so stehen, dass Achslasten und Schwerpunkt passen, und gesichert werden (§ 22 StVO, § 412 HGB). B ist falsch, weil die Ware nicht stapelbar ist und die Behälter beschädigt würden. D ist falsch: Gerade bei Lücken kann die Ladung beim Bremsen verrutschen.'
        }
      ]
    },
    {
      id: 'lf04-fahrzeugplanung-a12', type: 'mc', difficulty: 1, points: 1,
      q: 'Was bedeutet **Selbsteintritt** nach § 458 HGB?',
      options: [
        'Der Spediteur tritt in den Kaufvertrag zwischen Versender und Empfänger ein.',
        'Der Spediteur führt die Beförderung selbst aus und hat insoweit die Rechte und Pflichten eines Frachtführers.',
        'Der Fahrer übernimmt die Verladung anstelle des Absenders.',
        'Der Fremdunternehmer übernimmt die Haftung des Spediteurs vollständig.'
      ],
      correct: [1],
      hints: ['Es geht um die Frage: selbst fahren oder fahren lassen?', 'Wer selbst befördert, haftet wie ein Frachtführer.'],
      solution: 'Beim **Selbsteintritt** befördert der Spediteur das Gut mit eigenen Fahrzeugen. Für die Beförderung hat er die Stellung eines **Frachtführers** und kann neben der Speditionsvergütung die gewöhnliche Fracht verlangen (§ 458 HGB).'
    }
  ],
  quiz: ['lf04-fahrzeugplanung-a2', 'lf04-fahrzeugplanung-a4', 'lf04-fahrzeugplanung-a7', 'lf04-fahrzeugplanung-a8', 'lf04-fahrzeugplanung-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 4, Inhalte: Fahrzeugarten und Ladeeinheiten, Fahrzeugdisposition, Ladungssicherung, Selbsteintritt und Einsatz von Fremdunternehmern' },
    { title: 'Straßenverkehrs-Zulassungs-Ordnung § 32 Abmessungen von Fahrzeugen und Fahrzeugkombinationen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/stvzo_2012/__32.html', asOf: '2026-10-17' },
    { title: 'Straßenverkehrs-Zulassungs-Ordnung § 34 Achslast und Gesamtgewicht', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/stvzo_2012/__34.html', asOf: '2026-10-17' },
    { title: 'Straßenverkehrs-Zulassungs-Ordnung § 31 Verantwortung für den Betrieb der Fahrzeuge', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/stvzo_2012/__31.html', asOf: '2026-10-17' },
    { title: 'Straßenverkehrs-Ordnung § 22 Ladung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/stvo_2013/__22.html', asOf: '2026-10-17' },
    { title: 'Straßenverkehrs-Ordnung § 23 Sonstige Pflichten von Fahrzeugführenden', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/stvo_2013/__23.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 412 Verladen und Entladen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__412.html', asOf: '2026-10-17' },
    { title: 'Handelsgesetzbuch § 458 Selbsteintritt', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__458.html', asOf: '2026-10-17' }
  ],
  links: ['lf04-verkehrstraeger-vergleich', 'lf04-frachtvertrag-haftung', 'lf07-fahrzeugkosten', 'lf05-systemverkehr']
};
