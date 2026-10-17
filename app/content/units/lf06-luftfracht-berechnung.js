export default {
  id: 'lf06-luftfracht-berechnung',
  area: 'LF06',
  topic: 'lf06-umschlag',
  title: 'Luftfracht: Ladeeinheiten und Frachtberechnung',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026-10',
    note: 'Berechnungsregeln nach den IATA-Tarifregeln (TACT Rules), wie sie in Schulungsunterlagen dargestellt werden: Volumenfaktor 6.000 cm³ = 1 kg, Maße ab einem halben Zentimeter aufrunden, Gewicht auf die nächsten 0,5 kg aufrunden, Rangfolge Spezialrate vor Klassenrate vor allgemeiner Rate, Break-Point-Regel. Einzelne Airlines, Integratoren und Kurierdienste können abweichende Faktoren verwenden. Alle Raten und Zuschläge in dieser Einheit sind frei gewählte Beispielwerte, keine echten Tarife.'
  },
  goals: [
    'Ich kann die wichtigsten Ladeeinheiten (ULD) der Luftfracht benennen und unterscheiden.',
    'Ich kann das Volumengewicht einer Sendung mit dem Faktor 1 : 6.000 berechnen.',
    'Ich kann das frachtpflichtige Gewicht bestimmen und richtig auf 0,5 kg runden.',
    'Ich kann den Aufbau eines Luftfrachttarifs (M, N, Mengenstufen, Spezialraten) erklären.',
    'Ich kann die Luftfracht einschließlich Zuschlägen berechnen und mit der nächsthöheren Gewichtsstufe vergleichen (Break-Point).'
  ],
  simple: `> **Annahme:** Deine Schule behandelt in LF 6 die Luftfracht. Falls es bei dir ein anderer Verkehrsträger ist, sag Bescheid.

# Worum geht es?

Im Flugzeug ist **Platz** genauso knapp wie **Gewicht**. Ein großer, leichter Karton mit Kissen nimmt viel Raum weg, wiegt aber wenig. Darum rechnet die Airline mit einem **Volumengewicht**:

**Volumengewicht (kg) = Länge × Breite × Höhe (cm) ÷ 6.000**

Oder anders: **1 m³ zählt wie 166,67 kg.**

# Frachtpflichtiges Gewicht

Bezahlt wird nach dem **höheren** Wert aus tatsächlichem Gewicht und Volumengewicht. Das Ergebnis wird auf die **nächsten 0,5 kg aufgerundet** (37,2 kg → 37,5 kg).

# Der Tarif

- **M** = Mindestfracht: so viel kostet eine Sendung mindestens.
- **N** = Normalrate: Preis je kg für kleine Sendungen (meist unter 45 kg).
- **+45, +100, +300 …** = Mengenstufen: je mehr Gewicht, desto **billiger je kg**.

# Der Trick mit der nächsten Stufe

Manchmal ist es günstiger, so zu rechnen, als ob die Sendung **schwerer** wäre: 40 kg zur Normalrate können teurer sein als 45 kg zur günstigeren +45-Rate. Den Gewichtspunkt, ab dem sich das lohnt, nennt man **Break-Point**.`,
  deep: `# 1. Ladeeinheiten (ULD – Unit Load Devices)

In Fracht- und Passagierflugzeugen wird die Ware meist nicht lose, sondern auf genormten Ladeeinheiten befördert. Sie passen genau in die Konturen des Rumpfes und werden mit Rollenbahnen im Frachtraum bewegt und verriegelt.

| ULD-Art | Beschreibung | Beispiel-Typen |
|---|---|---|
| **Container** | geschlossene Behälter aus Aluminium oder Kunststoff, oft mit abgeschrägter Seite für den Rumpf | AKE (umgangssprachlich LD3, Unterdeck von Großraumflugzeugen) |
| **Palette mit Netz** | ebene Aluminiumplatte; die Ware wird aufgebaut („gebaut“) und mit einem Netz gesichert | PMC, PAG |
| **Iglu** | formgerechte Haube, die auf eine Palette gesetzt wird | – |
| **Spezial-ULD** | z. B. temperaturgeführte Container, Pferdeställe, Fahrzeugpaletten | – |

**ULD-Kennung:** 3 Buchstaben (Typ) + 4- oder 5-stellige Seriennummer + 2-stelliger Code des Eigentümers (meist der Airline), z. B. „AKE 12345 XY“. Der erste Buchstabe zeigt die Art: **A** = zugelassener Container, **P** = zugelassene Palette.

**Upper Deck / Main Deck / Lower Deck:** Passagierflugzeuge befördern Fracht nur im **Unterdeck** (Lower Deck, „Belly“). Frachtflugzeuge haben zusätzlich das **Hauptdeck** (Main Deck) für große Paletten.

Luftfrachtspediteure bauen ULDs oft selbst in ihrer Halle auf und liefern sie fertig bei der Airline an.

# 2. Volumengewicht und frachtpflichtiges Gewicht

**Schritt 1 – Maße runden:** Bruchteile eines Zentimeters ab 0,5 werden aufgerundet, darunter abgerundet (60,4 cm → 60 cm; 60,5 cm → 61 cm).

**Schritt 2 – Volumen:** je Packstück Länge × Breite × Höhe in cm³, dann über alle Stücke addieren.

**Schritt 3 – Volumengewicht:** Volumen (cm³) ÷ 6.000 = Volumengewicht in kg. Gleichwertig: Volumen (m³) × 166,67 kg/m³ (1.000.000 ÷ 6.000 = 166,67).

**Schritt 4 – Vergleich:** Das **frachtpflichtige Gewicht** (Chargeable Weight) ist der **höhere** Wert aus tatsächlichem Bruttogewicht und Volumengewicht.

**Schritt 5 – Runden:** auf die nächsten **0,5 kg aufrunden**: 0,1 bis 0,5 → ,5; über 0,5 → nächstes volles kg (z. B. 52,2 kg → 52,5 kg; 52,7 kg → 53,0 kg).

| Sendungsart | Typisches Ergebnis |
|---|---|
| schwer und kompakt (Maschinenteile, Metall) | tatsächliches Gewicht ist frachtpflichtig |
| leicht und sperrig (Textilien, Dämmstoffe, Möbel) | Volumengewicht ist frachtpflichtig |

# 3. Aufbau eines Luftfrachttarifs

| Kürzel | Bedeutung | Wann? |
|---|---|---|
| **M** | Minimum Charge, Mindestfracht je Sendung | wenn die errechnete Fracht darunter liegt |
| **N** | Normal Rate (Normalrate, allgemeine Frachtrate unter 45 kg) | kleine Sendungen |
| **Q** (+45, +100, +300, +500, +1000 …) | Quantity Rates, Mengenrabattstufen | ab der jeweiligen Gewichtsstufe, je kg günstiger |
| **C / SCR** | Specific Commodity Rate, Spezialrate für bestimmte Warengruppen auf bestimmten Strecken | meist mit Mindestgewicht, unter den allgemeinen Raten |
| **Klassenraten** | Zu- oder Abschläge in Prozent der allgemeinen Rate für bestimmte Güter (z. B. lebende Tiere, Wertfracht mit Zuschlag; Zeitungen, Bücher mit Abschlag) | statt der allgemeinen Rate |

**Rangfolge:** Spezialrate vor Klassenrate vor allgemeiner Rate (N/Q). Die Mindestfracht gilt immer als Untergrenze.

In der Praxis werden zusätzlich oft **Marktpreise** (Spot- oder Kontraktraten) vereinbart; die Systematik bleibt aber gleich.

# 4. Break-Point (Vergleich mit der nächsthöheren Stufe)

Liegt die Sendung knapp unter einer Gewichtsstufe, kann es günstiger sein, mit dem **Mindestgewicht der höheren Stufe** und deren **niedrigerer Rate** zu rechnen.

**Break-Point = Gewicht der höheren Stufe × Rate der höheren Stufe ÷ Rate der aktuellen Stufe** (auf die nächsten 0,5 kg aufgerundet)

Ab diesem Gewicht wird mit der höheren Stufe abgerechnet.

**Beispiel (Beispielraten):** N = 5,20 €/kg, +45 = 4,10 €/kg

Break-Point = 45 kg × 4,10 €/kg ÷ 5,20 €/kg = 35,48 kg → **35,5 kg**

Eine Sendung mit 40 kg kostet also nicht 40 × 5,20 = 208,00 €, sondern 45 × 4,10 = **184,50 €**.

# 5. Zuschläge und Nebenkosten

Zur reinen Gewichtsfracht kommen Zuschläge, die Airlines regelmäßig anpassen, z. B.:

- **Treibstoffzuschlag** (Fuel Surcharge, FSC)
- **Sicherheitszuschlag** (Security Surcharge, SSC)
- Gebühren für AWB-Ausstellung, Gefahrgutabfertigung, Zoll und Abholung

Sie werden je nach Airline auf das frachtpflichtige oder das tatsächliche Gewicht berechnet. In dieser Einheit gilt: **Zuschläge je kg frachtpflichtiges Gewicht** (Beispielannahme).

# 6. Beispieltarif für diese Einheit (frei gewählte Werte)

| Strecke FRA → ORD (Chicago) | Rate |
|---|---:|
| M (Mindestfracht) | 85,00 € |
| N (unter 45 kg) | 5,20 €/kg |
| +45 kg | 4,10 €/kg |
| +100 kg | 3,40 €/kg |
| +300 kg | 2,90 €/kg |
| +500 kg | 2,60 €/kg |
| +1000 kg | 2,30 €/kg |
| Fuel Surcharge | 1,20 €/kg |
| Security Surcharge | 0,15 €/kg |`,
  terms: [
    { term: 'ULD (Unit Load Device)', def: 'Genormte Ladeeinheit der Luftfracht, z. B. Container oder Palette mit Netz, die in die Rumpfkontur passt.' },
    { term: 'Volumengewicht', def: 'Rechnerisches Gewicht aus den Maßen: Volumen in cm³ ÷ 6.000 (1 m³ = 166,67 kg).' },
    { term: 'Frachtpflichtiges Gewicht (Chargeable Weight)', def: 'Höherer Wert aus tatsächlichem Bruttogewicht und Volumengewicht, auf 0,5 kg aufgerundet.' },
    { term: 'Mindestfracht (M)', def: 'Betrag, den eine Sendung mindestens kostet, auch wenn die errechnete Fracht niedriger ist.' },
    { term: 'Normalrate (N)', def: 'Allgemeine Frachtrate je kg für Sendungen unter der ersten Mengenstufe (meist 45 kg).' },
    { term: 'Mengenrabattstufen (Q-Raten)', def: 'Niedrigere Raten je kg ab bestimmten Gewichtsstufen, z. B. +45, +100, +300 kg.' },
    { term: 'Spezialrate (SCR)', def: 'Specific Commodity Rate: besonders günstige Rate für bestimmte Warengruppen auf bestimmten Strecken, meist mit Mindestgewicht.' },
    { term: 'Klassenrate', def: 'Rate für bestimmte Güterklassen als prozentualer Zu- oder Abschlag auf die allgemeine Rate.' },
    { term: 'Break-Point', def: 'Gewicht, ab dem die Abrechnung mit dem Mindestgewicht der höheren Stufe günstiger ist.' },
    { term: 'Fuel Surcharge', def: 'Treibstoffzuschlag der Airline, meist je kg, wird regelmäßig an den Kerosinpreis angepasst.' }
  ],
  example: `# Saar-Air-Logistik GmbH berechnet eine Sendung (Beispieltarif aus „Vertiefung“)

Die Homburger Polstermöbel KG (Beispielname) schickt 4 Kartons Sitzkissen nach Chicago. Jeder Karton misst 80 × 60 × 50 cm und wiegt 14,3 kg.

**1. Tatsächliches Gewicht:** 4 × 14,3 kg = 57,2 kg

**2. Volumen:** 80 × 60 × 50 = 240.000 cm³ je Karton; × 4 = 960.000 cm³

**3. Volumengewicht:** 960.000 cm³ ÷ 6.000 = 160,0 kg

**4. Frachtpflichtiges Gewicht:** 160,0 kg (höher als 57,2 kg) → gerundet 160,0 kg

**5. Rate:** 160 kg liegt in der Stufe +100 (3,40 €/kg). Break-Point zur Stufe +300: 300 × 2,90 ÷ 3,40 = 255,88 kg → 256,0 kg. 160 kg liegt darunter, also bleibt es bei +100.

**6. Fracht:** 160 kg × 3,40 €/kg = 544,00 €

**7. Zuschläge:** Fuel 160 × 1,20 = 192,00 €; Security 160 × 0,15 = 24,00 €

**Gesamt:** 544,00 € + 192,00 € + 24,00 € = **760,00 €**

Hätte man nur nach dem tatsächlichen Gewicht gerechnet (57,5 kg), wären es viel weniger gewesen. Die leichten, sperrigen Kissen „bezahlen“ den Platz, den sie im Flugzeug belegen.`,
  rules: [
    'Volumengewicht = L × B × H (cm) ÷ 6.000; 1 m³ = 166,67 kg.',
    'Frachtpflichtig ist immer der höhere Wert aus tatsächlichem Gewicht und Volumengewicht.',
    'Gewicht auf die nächsten 0,5 kg aufrunden, Maße ab 0,5 cm aufrunden.',
    'Mindestfracht M ist die Untergrenze jeder Sendung.',
    'Immer mit der nächsthöheren Gewichtsstufe vergleichen: Break-Point = höheres Gewicht × höhere-Stufe-Rate ÷ aktuelle Rate.',
    'Spezialrate vor Klassenrate vor allgemeiner Rate.',
    'Zuschläge (Fuel, Security) kommen zur Gewichtsfracht hinzu; Bemessungsgrundlage beachten.'
  ],
  summary: `- **ULD:** Container (z. B. AKE/LD3) und Paletten mit Netz (z. B. PMC, PAG); Kennung = Typ + Nummer + Eigentümercode.
- **Volumengewicht:** cm³ ÷ 6.000 bzw. m³ × 166,67.
- **Frachtpflichtiges Gewicht:** höherer Wert, auf 0,5 kg aufgerundet.
- **Tarif:** M (Minimum), N (unter 45 kg), Mengenstufen +45/+100/+300/…, Spezialraten (SCR), Klassenraten.
- **Break-Point:** Vergleich mit der höheren Stufe; günstigeres Ergebnis wählen.
- **Gesamtpreis:** Gewichtsfracht + Zuschläge (Fuel, Security) + Nebengebühren.`,
  mistakes: [
    { wrong: 'Bezahlt wird immer das tatsächliche Gewicht.', right: 'Bezahlt wird der höhere Wert aus tatsächlichem Gewicht und Volumengewicht.' },
    { wrong: 'Volumengewicht = Volumen in m³ ÷ 6.000.', right: 'Das Volumen muss in cm³ angegeben werden (÷ 6.000) oder in m³ mit 166,67 multipliziert werden.' },
    { wrong: '37,2 kg werden auf 37 kg abgerundet.', right: 'Es wird auf die nächsten 0,5 kg aufgerundet: 37,2 kg → 37,5 kg.' },
    { wrong: 'Eine Sendung von 40 kg wird immer mit der Normalrate abgerechnet.', right: 'Man muss mit der +45-Stufe vergleichen; liegt die Sendung über dem Break-Point, ist die Abrechnung mit 45 kg günstiger.' },
    { wrong: 'Die Mindestfracht wird zur errechneten Fracht addiert.', right: 'Die Mindestfracht ist eine Untergrenze: Liegt die Fracht darunter, wird die Mindestfracht berechnet, sonst die errechnete Fracht.' },
    { wrong: 'Das Volumen wird nur für ein Packstück berechnet.', right: 'Das Volumen aller Packstücke der Sendung wird addiert und dann durch 6.000 geteilt.' }
  ],
  flashcards: [
    { q: 'Wie berechnet man das Volumengewicht in der Luftfracht?', a: 'Länge × Breite × Höhe in cm ÷ 6.000 = kg (oder m³ × 166,67).' },
    { q: 'Wie viel kg entspricht 1 m³ in der Luftfracht?', a: '166,67 kg (1.000.000 cm³ ÷ 6.000).' },
    { q: 'Was ist das frachtpflichtige Gewicht?', a: 'Der höhere Wert aus tatsächlichem Gewicht und Volumengewicht, auf 0,5 kg aufgerundet.' },
    { q: 'Wie wird 52,7 kg gerundet?', a: 'Auf 53,0 kg (nächste 0,5-kg-Stufe nach oben).' },
    { q: 'Was bedeuten M und N im Luftfrachttarif?', a: 'M = Mindestfracht je Sendung, N = Normalrate je kg für Sendungen unter 45 kg.' },
    { q: 'Wie berechnet man den Break-Point?', a: 'Gewicht der höheren Stufe × deren Rate ÷ Rate der aktuellen Stufe.' },
    { q: 'Welche Rate hat Vorrang: Spezialrate oder allgemeine Rate?', a: 'Die Spezialrate (SCR), danach Klassenrate, dann allgemeine Rate.' },
    { q: 'Was ist ein ULD? Nenne zwei Arten.', a: 'Unit Load Device, genormte Ladeeinheit: Container (z. B. AKE/LD3) und Palette mit Netz (z. B. PMC).' },
    { q: 'Wo befördern Passagierflugzeuge Fracht?', a: 'Im Unterdeck (Lower Deck, „Belly“).' },
    { q: 'Nenne zwei typische Zuschläge in der Luftfracht.', a: 'Treibstoffzuschlag (Fuel Surcharge) und Sicherheitszuschlag (Security Surcharge).' }
  ],
  tasks: [
    {
      id: 'lf06-luftfracht-berechnung-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Eine Sendung wiegt tatsächlich 80 kg, ihr Volumengewicht beträgt 112 kg. Welches Gewicht ist frachtpflichtig?',
      options: ['80 kg', '96 kg (Mittelwert)', '112 kg', '192 kg (Summe)'],
      correct: [2],
      hints: ['Die Airline will für Gewicht **oder** Platz bezahlt werden – je nachdem, was mehr ist.', 'Es wird nicht gemittelt und nicht addiert.'],
      solution: '**112 kg**: Frachtpflichtig ist der höhere Wert aus tatsächlichem Gewicht (80 kg) und Volumengewicht (112 kg). Die Sendung ist sperrig, deshalb zählt der Platzbedarf.'
    },
    {
      id: 'lf06-luftfracht-berechnung-a2', type: 'calc', difficulty: 1, points: 3,
      q: 'Drei Kartons messen je 60 × 40 × 50 cm und wiegen je 18 kg. Berechne Gesamtvolumen, Volumengewicht und frachtpflichtiges Gewicht.',
      formula: 'Volumengewicht (kg) = Summe L × B × H (cm³) ÷ 6.000',
      fields: [
        { id: 'vol', label: 'Gesamtvolumen', unit: 'cm³', answer: 360000, tol: 0.5 },
        { id: 'vg', label: 'Volumengewicht', unit: 'kg', answer: 60, tol: 0.01 },
        { id: 'fg', label: 'frachtpflichtiges Gewicht', unit: 'kg', answer: 60, tol: 0.01 }
      ],
      hints: ['Ein Karton: 60 × 40 × 50 = 120.000 cm³.', 'Tatsächliches Gewicht: 3 × 18 kg = 54 kg; vergleiche mit dem Volumengewicht.'],
      solution: `**Formel:** Volumengewicht = Volumen (cm³) ÷ 6.000

**Volumen:** 60 cm × 40 cm × 50 cm = 120.000 cm³ je Karton; × 3 = **360.000 cm³** (= 0,36 m³)

**Volumengewicht:** 360.000 cm³ ÷ 6.000 cm³/kg = **60,0 kg** (Kontrolle: 0,36 m³ × 166,67 kg/m³ = 60,0 kg)

**Tatsächliches Gewicht:** 3 × 18 kg = 54,0 kg

**Frachtpflichtiges Gewicht:** höherer Wert = **60,0 kg** (bereits auf 0,5 kg gerundet)`
    },
    {
      id: 'lf06-luftfracht-berechnung-a3', type: 'cloze', difficulty: 1, points: 4,
      q: 'Ergänze die Lücken.',
      text: 'Das Volumengewicht berechnet man, indem man das Volumen in cm³ durch [[6000|6.000]] teilt. Ein Kubikmeter entspricht damit [[166,67|166.67|166,7]] kg. Frachtpflichtig ist der [[höhere|größere]] Wert aus tatsächlichem Gewicht und Volumengewicht. Das Ergebnis wird auf die nächsten [[0,5|0.5]] kg aufgerundet.',
      hints: ['Der Teiler ist der IATA-Standard für Luftfracht.', '1.000.000 cm³ ÷ 6.000 = ?'],
      solution: 'Teiler **6.000**; 1 m³ = 1.000.000 cm³ ÷ 6.000 = **166,67 kg**; frachtpflichtig ist der **höhere** Wert; Rundung auf die nächsten **0,5 kg** nach oben.'
    },
    {
      id: 'lf06-luftfracht-berechnung-a4', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne die Tarifbegriffe ihrer Bedeutung zu.',
      pairs: [
        ['M', 'Mindestfracht je Sendung'],
        ['N', 'Normalrate je kg für Sendungen unter 45 kg'],
        ['+100', 'Mengenrabattstufe ab 100 kg frachtpflichtigem Gewicht'],
        ['SCR', 'Spezialrate für bestimmte Warengruppen auf bestimmten Strecken'],
        ['Klassenrate', 'prozentualer Zu- oder Abschlag auf die allgemeine Rate für bestimmte Güter']
      ],
      hints: ['M = Minimum, N = Normal.', 'SCR steht für Specific Commodity Rate.'],
      solution: 'M = Minimum Charge; N = Normal Rate (< 45 kg); +100 = Quantity Rate ab 100 kg; SCR = Specific Commodity Rate; Klassenrate = Zu- oder Abschlag in % auf die allgemeine Rate (z. B. lebende Tiere, Bücher).'
    },
    {
      id: 'lf06-luftfracht-berechnung-a5', type: 'calc', difficulty: 2, points: 3,
      q: 'Ein Paket wiegt 8 kg und misst 30 × 30 × 20 cm. Berechne mit dem Beispieltarif (M = 85,00 €, N = 5,20 €/kg) das Volumengewicht, die errechnete Gewichtsfracht und die zu berechnende Fracht (ohne Zuschläge).',
      formula: 'Fracht = max(frachtpflichtiges Gewicht × Rate; Mindestfracht)',
      fields: [
        { id: 'vg', label: 'Volumengewicht', unit: 'kg', answer: 3, tol: 0.01 },
        { id: 'gf', label: 'errechnete Gewichtsfracht', unit: '€', answer: 41.6, tol: 0.01 },
        { id: 'fr', label: 'zu berechnende Fracht', unit: '€', answer: 85, tol: 0.01 }
      ],
      hints: ['30 × 30 × 20 = 18.000 cm³.', 'Vergleiche die errechnete Fracht mit der Mindestfracht.'],
      solution: `**Volumengewicht:** 30 × 30 × 20 = 18.000 cm³ ÷ 6.000 = **3,0 kg**

**Frachtpflichtiges Gewicht:** max(8,0 kg; 3,0 kg) = 8,0 kg

**Gewichtsfracht:** 8,0 kg × 5,20 €/kg = **41,60 €**

**Vergleich mit M:** 41,60 € < 85,00 € → berechnet wird die **Mindestfracht 85,00 €**.`
    },
    {
      id: 'lf06-luftfracht-berechnung-a6', type: 'calc', difficulty: 2, points: 4,
      q: 'Eine Sendung wiegt 37,2 kg, ihr Volumen beträgt 0,2 m³. Beispieltarif: N = 5,20 €/kg, +45 = 4,10 €/kg. Berechne das frachtpflichtige Gewicht, die Fracht zur Normalrate, die Fracht mit der +45-Stufe und die günstigere Fracht.',
      formula: 'Volumengewicht = m³ × 166,67; Vergleich: Gewicht × N mit 45 kg × Rate(+45)',
      fields: [
        { id: 'fg', label: 'frachtpflichtiges Gewicht (gerundet)', unit: 'kg', answer: 37.5, tol: 0.01 },
        { id: 'n', label: 'Fracht zur Normalrate', unit: '€', answer: 195, tol: 0.01 },
        { id: 'q45', label: 'Fracht mit 45 kg × +45-Rate', unit: '€', answer: 184.5, tol: 0.01 },
        { id: 'fr', label: 'zu berechnende Fracht', unit: '€', answer: 184.5, tol: 0.01 }
      ],
      hints: ['Volumengewicht: 0,2 m³ × 166,67 = 33,33 kg; das tatsächliche Gewicht ist höher.', '37,2 kg wird auf 37,5 kg aufgerundet. Dann beide Varianten rechnen.'],
      solution: `**Volumengewicht:** 0,2 m³ × 166,67 kg/m³ = 33,33 kg

**Frachtpflichtiges Gewicht:** max(37,2 kg; 33,33 kg) = 37,2 kg → aufgerundet **37,5 kg**

**Normalrate:** 37,5 kg × 5,20 €/kg = **195,00 €**

**Nächsthöhere Stufe:** 45 kg × 4,10 €/kg = **184,50 €**

**Ergebnis:** 184,50 € < 195,00 € → berechnet werden **184,50 €** (Break-Point: 45 × 4,10 ÷ 5,20 = 35,48 kg → 35,5 kg; 37,5 kg liegt darüber).`
    },
    {
      id: 'lf06-luftfracht-berechnung-a7', type: 'calc', difficulty: 3, points: 3,
      q: 'Beispieltarif: +100 = 3,40 €/kg, +300 = 2,90 €/kg. Berechne den Break-Point zwischen beiden Stufen (auf 0,5 kg aufgerundet) und die günstigste Fracht für eine Sendung mit 270 kg frachtpflichtigem Gewicht.',
      formula: 'Break-Point = 300 kg × 2,90 €/kg ÷ 3,40 €/kg',
      fields: [
        { id: 'bp', label: 'Break-Point (gerundet)', unit: 'kg', answer: 256, tol: 0.01 },
        { id: 'a', label: 'Fracht 270 kg × 3,40 €', unit: '€', answer: 918, tol: 0.01 },
        { id: 'fr', label: 'günstigste Fracht', unit: '€', answer: 870, tol: 0.01 }
      ],
      hints: ['300 × 2,90 = 870 €; 870 ÷ 3,40 = ?', 'Liegt 270 kg über dem Break-Point, rechnet man mit 300 kg × 2,90 €.'],
      solution: `**Break-Point:** 300 kg × 2,90 €/kg ÷ 3,40 €/kg = 870 € ÷ 3,40 €/kg = 255,88 kg → aufgerundet **256,0 kg**

**Variante +100:** 270 kg × 3,40 €/kg = **918,00 €**

**Variante +300:** 300 kg × 2,90 €/kg = 870,00 €

**Ergebnis:** 270 kg liegt über dem Break-Point → günstigste Fracht **870,00 €**.`
    },
    {
      id: 'lf06-luftfracht-berechnung-a8', type: 'order', difficulty: 2, points: 6,
      q: 'Bringe die Schritte der Luftfrachtberechnung in die richtige Reihenfolge.',
      items: [
        'Maße und Gewichte aller Packstücke erfassen, Maße auf volle cm runden',
        'Volumengewicht berechnen (cm³ ÷ 6.000)',
        'höheren Wert als frachtpflichtiges Gewicht wählen und auf 0,5 kg aufrunden',
        'passende Rate (Spezial-, Klassen- oder Mengenrate) ermitteln und mit der nächsthöheren Stufe vergleichen',
        'Fracht mit der Mindestfracht vergleichen',
        'Zuschläge und Nebengebühren hinzurechnen'
      ],
      hints: ['Ohne Gewicht keine Rate.', 'Zuschläge kommen ganz zum Schluss.'],
      solution: 'Erfassen → Volumengewicht → frachtpflichtiges Gewicht (gerundet) → Rate und Break-Point-Vergleich → Prüfung gegen Mindestfracht → Zuschläge. So wird sichergestellt, dass der Kunde den günstigsten zulässigen Preis erhält.'
    },
    {
      id: 'lf06-luftfracht-berechnung-a9', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche Aussagen zu ULDs sind **richtig**? (Mehrfachauswahl)',
      options: [
        'Ein AKE (LD3) ist ein Container für das Unterdeck von Großraumflugzeugen.',
        'PMC und PAG bezeichnen Paletten, auf denen die Ware aufgebaut und mit einem Netz gesichert wird.',
        'ULDs sind genormt und passen in die Kontur des Flugzeugrumpfes.',
        'Passagierflugzeuge befördern Fracht auf dem Hauptdeck zwischen den Sitzreihen.',
        'ULD-Kennungen bestehen nur aus einer Seriennummer.'
      ],
      correct: [0, 1, 2],
      hints: ['Der erste Buchstabe der Kennung zeigt Container (A) oder Palette (P).', 'Die Kennung hat drei Teile: Typ, Nummer, Eigentümer.'],
      solution: 'Richtig: **A, B, C**. Falsch: D – Passagierflugzeuge laden Fracht im Unterdeck (Belly); E – die Kennung besteht aus Typcode (3 Buchstaben), Seriennummer und Eigentümercode.'
    },
    {
      id: 'lf06-luftfracht-berechnung-a10', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Angebot für zwei Paletten nach Chicago',
      intro: `Die Saarlouiser Leuchten GmbH (Beispielname) möchte 2 Europaletten Designleuchten nach Chicago schicken. Jede Palette misst 120 × 80 × 110 cm und wiegt 145 kg. Verwende den Beispieltarif FRA → ORD:

| Stufe | Rate |
|---|---:|
| +100 kg | 3,40 €/kg |
| +300 kg | 2,90 €/kg |
| +500 kg | 2,60 €/kg |
| Fuel Surcharge | 1,20 €/kg frachtpflichtiges Gewicht |
| Security Surcharge | 0,15 €/kg frachtpflichtiges Gewicht |`,
      hints: ['Erst das frachtpflichtige Gewicht, dann die Rate.', 'Prüfe, ob sich die +500-Stufe lohnt.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf06-luftfracht-berechnung-a10-1', type: 'calc', difficulty: 2, points: 3,
          q: 'Berechne das tatsächliche Gewicht, das Volumengewicht und das frachtpflichtige Gewicht.',
          formula: 'Volumengewicht = Summe L × B × H (cm³) ÷ 6.000',
          fields: [
            { id: 'tg', label: 'tatsächliches Gewicht', unit: 'kg', answer: 290, tol: 0.01 },
            { id: 'vg', label: 'Volumengewicht', unit: 'kg', answer: 352, tol: 0.01 },
            { id: 'fg', label: 'frachtpflichtiges Gewicht', unit: 'kg', answer: 352, tol: 0.01 }
          ],
          hints: ['Eine Palette: 120 × 80 × 110 = 1.056.000 cm³.', 'Volumen beider Paletten addieren.'],
          solution: `**Tatsächliches Gewicht:** 2 × 145 kg = **290 kg**

**Volumen:** 120 × 80 × 110 = 1.056.000 cm³ je Palette; × 2 = 2.112.000 cm³

**Volumengewicht:** 2.112.000 cm³ ÷ 6.000 = **352,0 kg**

**Frachtpflichtiges Gewicht:** max(290; 352) = **352,0 kg**`
        },
        {
          id: 'lf06-luftfracht-berechnung-a10-2', type: 'calc', difficulty: 3, points: 4,
          q: 'Berechne die Gewichtsfracht (mit Break-Point-Prüfung zur +500-Stufe), die beiden Zuschläge und den Gesamtpreis.',
          formula: 'Gesamt = frachtpflichtiges Gewicht × Rate + Gewicht × Fuel + Gewicht × Security',
          fields: [
            { id: 'gf', label: 'Gewichtsfracht', unit: '€', answer: 1020.8, tol: 0.01 },
            { id: 'fsc', label: 'Fuel Surcharge', unit: '€', answer: 422.4, tol: 0.01 },
            { id: 'ssc', label: 'Security Surcharge', unit: '€', answer: 52.8, tol: 0.01 },
            { id: 'ges', label: 'Gesamtpreis', unit: '€', answer: 1496, tol: 0.01 }
          ],
          hints: ['352 kg liegt in der Stufe +300. Break-Point zu +500: 500 × 2,60 ÷ 2,90.', 'Zuschläge auf 352 kg rechnen.'],
          solution: `**Rate:** 352 kg → Stufe +300 = 2,90 €/kg

**Break-Point-Prüfung:** 500 × 2,60 ÷ 2,90 = 448,28 kg → 448,5 kg. 352 kg liegt darunter (Kontrolle: 500 × 2,60 = 1.300,00 € > 1.020,80 €), also bleibt es bei +300.

**Gewichtsfracht:** 352 kg × 2,90 €/kg = **1.020,80 €**

**Fuel Surcharge:** 352 kg × 1,20 €/kg = **422,40 €**

**Security Surcharge:** 352 kg × 0,15 €/kg = **52,80 €**

**Gesamtpreis:** 1.020,80 € + 422,40 € + 52,80 € = **1.496,00 €**`
        },
        {
          id: 'lf06-luftfracht-berechnung-a10-3', type: 'mc', difficulty: 2, points: 1,
          q: 'Der Kunde beschwert sich: „Meine Ware wiegt nur 290 kg, warum zahle ich für 352 kg?“ Welche Antwort ist fachlich richtig?',
          options: [
            'Weil auf das tatsächliche Gewicht immer ein Sicherheitsaufschlag von gut 20 % kommt.',
            'Weil die Paletten viel Platz im Flugzeug belegen und deshalb das höhere Volumengewicht berechnet wird.',
            'Weil die Mindestfracht 352 kg beträgt.',
            'Weil die Paletten selbst nicht mitgewogen wurden.'
          ],
          correct: [1],
          hints: ['Wie wurde 352 kg berechnet?', 'Platz ist im Flugzeug genauso knapp wie Gewicht.'],
          solution: 'Richtig ist B: Die Sendung ist sperrig. Das **Volumengewicht** (352 kg) liegt über dem tatsächlichen Gewicht (290 kg); berechnet wird der höhere Wert. Tipp für den Kunden: niedriger packen oder Leerraum vermeiden senkt das Volumengewicht.'
        }
      ]
    },
    {
      id: 'lf06-luftfracht-berechnung-a11', type: 'text', difficulty: 2, points: 3,
      q: 'Erkläre einem neuen Kollegen, warum Airlines neben dem tatsächlichen Gewicht auch ein Volumengewicht berechnen und wie es ermittelt wird.',
      model: 'Im Flugzeug sind sowohl das zulässige Gewicht als auch der Laderaum begrenzt. Leichte, sperrige Sendungen belegen viel Platz, bringen aber nach Gewicht wenig Fracht ein. Deshalb wird ein Volumengewicht berechnet: Länge mal Breite mal Höhe in cm geteilt durch 6.000 ergibt kg, also entspricht 1 m³ 166,67 kg. Berechnet wird der höhere Wert aus tatsächlichem Gewicht und Volumengewicht.',
      criteria: [
        { text: 'nennt den begrenzten Laderaum bzw. sperrige Güter', keywords: ['Platz|Raum|sperrig|Volumen'], points: 1 },
        { text: 'nennt die Formel mit 6.000 oder 166,67', keywords: ['6.000|6000|166'], points: 1 },
        { text: 'nennt, dass der höhere Wert berechnet wird', keywords: ['höher|größer'], points: 1 }
      ],
      hints: ['Was ist im Flugzeug außer Gewicht noch knapp?', 'Nenne Teiler und Vergleichsregel.'],
      solution: 'Kernaussagen: Laderaum ist begrenzt, **sperrige** Güter belegen viel Platz → **Volumengewicht** = L × B × H (cm) ÷ **6.000** (1 m³ = 166,67 kg) → berechnet wird der **höhere** Wert.'
    },
    {
      id: 'lf06-luftfracht-berechnung-a12', type: 'calc', difficulty: 2, points: 2,
      q: 'Eine Kiste misst 112,4 × 75,6 × 60,2 cm und wiegt 48,3 kg. Runde die Maße nach IATA-Regel auf volle cm und berechne das Volumengewicht sowie das frachtpflichtige Gewicht (auf 0,5 kg aufgerundet).',
      formula: 'Volumengewicht = gerundete L × B × H (cm³) ÷ 6.000',
      fields: [
        { id: 'vg', label: 'Volumengewicht', unit: 'kg', answer: 85.12, tol: 0.01 },
        { id: 'fg', label: 'frachtpflichtiges Gewicht', unit: 'kg', answer: 85.5, tol: 0.01 }
      ],
      hints: ['112,4 → 112; 75,6 → 76; 60,2 → 60.', '112 × 76 × 60 = 510.720 cm³; danach mit dem tatsächlichen Gewicht vergleichen und auf 0,5 kg aufrunden.'],
      solution: `**Maße runden:** 112,4 cm → 112 cm; 75,6 cm → 76 cm (ab 0,5 aufrunden); 60,2 cm → 60 cm

**Volumen:** 112 cm × 76 cm × 60 cm = 510.720 cm³

**Volumengewicht:** 510.720 cm³ ÷ 6.000 cm³/kg = **85,12 kg**

**Vergleich:** max(48,3 kg; 85,12 kg) = 85,12 kg

**Rundung:** 85,12 kg → aufgerundet auf die nächsten 0,5 kg = **85,5 kg** frachtpflichtiges Gewicht`
    }
  ],
  quiz: ['lf06-luftfracht-berechnung-a1', 'lf06-luftfracht-berechnung-a2', 'lf06-luftfracht-berechnung-a5', 'lf06-luftfracht-berechnung-a6', 'lf06-luftfracht-berechnung-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 6, Inhalte: Umschlag, Disposition von Frachtraum und Lademitteln' },
    { title: 'Air Freight C5: Calculation of Air Freight (Trainer-Unterlage auf Grundlage der IATA TACT Rules)', publisher: 'ASEAN Secretariat', url: 'https://asean.org/wp-content/uploads/2023/02/Air-Freight-C5.-Calculation-of-Air-Freight-PPT-Trainer-V2.pdf', asOf: '2023' }
  ],
  links: ['lf06-luftfracht-recht', 'lf06-luftfracht-gefahrgut', 'lf05-sammelgut-ablauf']
};
