export default {
  id: 'lf11-zollverfahren',
  area: 'LF11',
  topic: 'lf11-zollverfahren',
  title: 'Zollverfahren bei der Einfuhr und Zollwert',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026-10',
    note: 'Einfuhr nach Unionszollkodex (UZK, VO (EU) Nr. 952/2013) mit UZK-DA und UZK-IA. Summarische Eingangsanmeldung nach Art. 127 UZK; ICS2 laut zoll.de für den Luftverkehr (Release 2) im Einsatz, für See-, Binnenschiffs-, Straßen- und Eisenbahnverkehr Release 3 mit Inbetriebnahmefenster ab 3.6.2024, bis dahin ATLAS-EAS. Vorübergehende Verwahrung höchstens 90 Tage, keine Verlängerung (Art. 149 UZK, zoll.de). Zollschuld entsteht mit Annahme der Zollanmeldung (Art. 77 UZK). Zollwert nach Art. 70–74 UZK, Ort des Verbringens nach Art. 137 UZK-IA. Vorübergehende Verwendung mit teilweiser Befreiung: 3 % je angefangenem Monat (Art. 252 UZK). Stand Oktober 2026.'
  },
  goals: [
    'Ich kann die Schritte von der summarischen Eingangsanmeldung bis zur Überlassung zum zollrechtlich freien Verkehr beschreiben.',
    'Ich kann erklären, was Gestellung und vorübergehende Verwahrung bedeuten und welche Frist gilt.',
    'Ich kann begründen, wann die Zollschuld entsteht und wer Zollschuldner ist.',
    'Ich kann die besonderen Verfahren (Zolllager, aktive und passive Veredelung, vorübergehende Verwendung, Endverwendung) Einsatzfällen zuordnen.',
    'Ich kann den Zollwert nach der Transaktionswertmethode mit Hinzurechnungen und Abzügen berechnen.',
    'Ich kann erläutern, wie ein Präferenznachweis den Zoll bei der Einfuhr senken kann.'
  ],
  simple: `# Worum geht es?

Wenn eine Ware aus einem **Drittland** (z. B. China, USA) in die EU kommt, ist sie zunächst eine **Nicht-Unionsware**. Sie steht unter **Zollaufsicht** und darf nicht einfach ausgeliefert werden. Erst wenn der Zoll sie **zum zollrechtlich freien Verkehr überlässt**, wird sie zur **Unionsware** und darf frei verkauft werden.

# Der Weg der Ware in Kurzform

1. **Vor der Ankunft**: Der Beförderer meldet die Sendung mit der **summarischen Eingangsanmeldung** an (Sicherheitsprüfung).
2. **Ankunft und Gestellung**: Die Ware wird zur Zollstelle gebracht und dem Zoll **gestellt** (= gemeldet: „Die Ware ist da“).
3. **Vorübergehende Verwahrung**: Die Ware wartet unter Zollaufsicht, höchstens **90 Tage**.
4. **Zollanmeldung**: Der Spediteur meldet die Ware elektronisch über **ATLAS-Einfuhr** an, meist zur Überlassung zum freien Verkehr.
5. **Prüfung, Abgaben, Überlassung**: Der Zoll prüft, setzt Zoll und Einfuhrumsatzsteuer fest und gibt die Ware frei.

# Nicht immer gleich verzollen

Manchmal soll die Ware gar nicht in der EU bleiben oder nur kurz genutzt werden. Dafür gibt es **besondere Verfahren**: zum Beispiel das **Zolllager** (Ware lagert unverzollt), die **aktive Veredelung** (Ware wird in der EU bearbeitet und wieder ausgeführt) oder die **vorübergehende Verwendung** (z. B. Messegut).

# Der Zollwert

Der Zoll wird meist als Prozentsatz vom **Zollwert** berechnet. Grundlage ist der **Rechnungspreis**. Dazu kommen die Kosten für **Fracht und Versicherung bis zur EU-Grenze** (z. B. bis zum Hafen Rotterdam). Die Fracht **innerhalb** der EU gehört nicht dazu.`,
  deep: `# Rechtsrahmen

Das Zollrecht ist EU-weit im **Unionszollkodex (UZK)** geregelt, ergänzt durch die Delegierte Verordnung (UZK-DA) und die Durchführungsverordnung (UZK-IA). Die Zollverfahren sind in Art. 5 Nr. 16 und Art. 210 UZK genannt. Die Abwicklung erfolgt in Deutschland elektronisch über **ATLAS** (Teilverfahren u. a. ATLAS-SumA, ATLAS-Einfuhr, ATLAS-EAS). Das Versandverfahren als besonderes Verfahren ist eine eigene Einheit („Versandverfahren“).

# Vom Eingang bis zur Überlassung

| Schritt | Inhalt | Rechtsgrundlage |
|---|---|---|
| **Summarische Eingangsanmeldung (ESumA)** | vor dem Verbringen in die EU; dient vor allem der **Risikoanalyse für Sicherheitszwecke**; grundsätzlich vom Beförderer abzugeben, bei der ersten Eingangszollstelle | Art. 127 UZK |
| **Beförderung zur Zollstelle** | Ware unverzüglich und unverändert zur zuständigen Zollstelle bzw. an einen zugelassenen Ort bringen | Art. 135 UZK |
| **Gestellung** | Mitteilung an den Zoll, dass die Ware angekommen ist; gestellungspflichtig ist u. a. der Verbringer oder wer danach die Beförderung übernimmt (z. B. Spediteur) | Art. 5 Nr. 33, Art. 139 UZK |
| **Vorübergehende Verwahrung** | beginnt automatisch mit der Gestellung von Nicht-Unionswaren; Lagerung in einem **Verwahrungslager**; nur erhaltende Behandlung erlaubt; höchstens **90 Tage**, **keine Verlängerung** | Art. 144–149 UZK |
| **Zollanmeldung** | elektronisch über **ATLAS-Einfuhr** durch den Anmelder (Importeur oder Spediteur als Vertreter) | Art. 158 UZK |
| **Annahme** | wenn alle Angaben, Unterlagen und die gestellte Ware vorliegen; **Zollschuld entsteht im Zeitpunkt der Annahme** | Art. 172, Art. 77 UZK |
| **Prüfung** | Dokumentenprüfung (z. B. Zollwert, Präferenznachweis) und ggf. **Beschau** oder Probenentnahme | Art. 188 UZK |
| **Entrichtung oder Sicherheit** | Überlassung erst, wenn die Abgaben entrichtet oder gesichert sind (z. B. über ein **Aufschubkonto**) | Art. 195 UZK |
| **Überlassung** | Ware ist im zollrechtlich freien Verkehr und erhält den **Unionsstatus** | Art. 194, Art. 201 UZK |

> In Deutschland werden Gestellungsmitteilung und Anmeldung zur vorübergehenden Verwahrung in **ATLAS-SumA** kombiniert. Für den Luftverkehr läuft die ESumA laut zoll.de bereits über **ICS2** (Import Control System 2); für See-, Straßen- und Eisenbahnverkehr wird ICS2 mit Release 3 eingeführt, bis dahin gilt ATLAS-EAS.

**Zollschuldner** ist der **Anmelder**. Bei **indirekter Vertretung** (der Spediteur handelt im eigenen Namen für Rechnung des Importeurs) ist auch die Person Zollschuldner, für deren Rechnung angemeldet wird (Art. 77 Abs. 3 UZK). Bei **direkter Vertretung** (im Namen und für Rechnung des Importeurs) ist der Importeur Anmelder und Schuldner.

# Besondere Verfahren (Art. 210 UZK)

| Gruppe | Verfahren | Zweck | Speditionsbeispiel |
|---|---|---|---|
| Versand | **Versandverfahren** | Beförderung unter Zollaufsicht | T1 von Antwerpen nach Saarbrücken |
| Lagerung | **Zolllager**, Freizone | Nicht-Unionswaren unverzollt lagern, **zeitlich unbegrenzt**; Abgaben erst bei Entnahme in den freien Verkehr | Importware wird je nach Kundenbestellung in Teilmengen verzollt oder wieder ausgeführt |
| Verwendung | **Vorübergehende Verwendung** | Nicht-Unionswaren befristet nutzen und wieder ausführen; **vollständige** oder **teilweise** Befreiung | Messegut, Vorführmaschinen, Baumaschinen für ein Projekt |
| Verwendung | **Endverwendung** | Zollbegünstigung (ermäßigter oder Nullsatz) für einen bestimmten Verwendungszweck | Bauteile für eine bestimmte begünstigte Verwendung laut Zolltarif |
| Veredelung | **Aktive Veredelung** | Nicht-Unionswaren in der EU bearbeiten, verarbeiten oder ausbessern und die Veredelungserzeugnisse wieder ausführen, ohne Einfuhrabgaben | Stoffe aus Indien werden im Saarland zu Planen verarbeitet und in die Schweiz verkauft |
| Veredelung | **Passive Veredelung** | Unionswaren vorübergehend in ein Drittland ausführen, dort veredeln lassen und mit **Zollermäßigung** wieder einführen | Maschine wird zur Reparatur nach Serbien gebracht und zurückgeholt |

Besondere Verfahren (außer Versand) brauchen in der Regel eine **Bewilligung** des Hauptzollamts und häufig eine Sicherheit.

**Teilweise Befreiung bei vorübergehender Verwendung** (Art. 252 UZK): Für jeden angefangenen Monat sind **3 %** des Abgabenbetrags zu zahlen, der bei sofortiger Überlassung zum freien Verkehr angefallen wäre – höchstens aber dieser volle Betrag.

**Passive Veredelung**: Bei der Wiedereinfuhr wird grundsätzlich nur der „Mehrwert“ belastet – vom Zoll auf das Veredelungserzeugnis wird der Zoll abgezogen, der auf die ausgeführte Ware angefallen wäre (Differenzverzollung).

# Zollwert (Art. 70–74 UZK)

Vorrangige Methode ist der **Transaktionswert**: der tatsächlich gezahlte oder zu zahlende Preis für die Waren beim Verkauf zur Ausfuhr in die Union. Nur wenn er nicht anwendbar ist, folgen nachrangige Methoden (gleiche Waren, ähnliche Waren, deduktive Methode, errechneter Wert, Schlussmethode).

| **Hinzurechnen** (Art. 71 UZK), soweit nicht im Preis enthalten | **Nicht einbeziehen / abziehen** (Art. 72 UZK), wenn getrennt ausgewiesen |
|---|---|
| **Beförderungs- und Versicherungskosten**, Lade- und Behandlungskosten **bis zum Ort des Verbringens** | **Beförderungskosten nach** dem Ort des Verbringens (Fracht innerhalb der EU) |
| Provisionen und Maklerlöhne (**außer Einkaufsprovisionen**), z. B. Verkaufsprovision | **Einkaufsprovisionen** |
| Umschließungs- und Verpackungskosten (z. B. Einwegpaletten) | Montage-, Bau- und Instandhaltungskosten nach der Einfuhr |
| Beistellungen des Käufers (Werkzeuge, Formen, Materialien) | Finanzierungszinsen (bei schriftlicher Vereinbarung) |
| Lizenzgebühren für die Ware | **Einfuhrabgaben** und andere Abgaben in der EU |
| Erlöse aus Weiterverkäufen, die dem Verkäufer zufließen | Kosten für Vervielfältigungsrechte in der EU |

**Ort des Verbringens** (Art. 137 UZK-IA, zoll.de): im Seeverkehr der **erste Hafen** in der EU (z. B. Rotterdam), im Straßen-, Eisenbahn- und Binnenschiffsverkehr der Ort der **ersten Eingangszollstelle**, in der Luftfracht die Stelle, an der die Landgrenze der EU überflogen wird (Aufteilung der Luftfrachtkosten nach Anhang 23-01 UZK-IA).

> Praxis: Bei einem Kauf **FOB Shanghai** muss die Seefracht bis Rotterdam hinzugerechnet werden. Bei **DAP Saarbrücken** ist die Fracht bis Saarbrücken im Preis enthalten; der Anteil ab Rotterdam darf nur abgezogen werden, wenn er **gesondert ausgewiesen** ist. Zu den Incoterms siehe Einheit „Incoterms® 2020“.

# Präferenzen kurz

Die EU hat mit vielen Ländern **Präferenzabkommen** (Freihandelsabkommen) geschlossen. Hat eine Ware **präferenziellen Ursprung** im Partnerland und liegt ein gültiger **Präferenznachweis** vor (z. B. EUR.1 oder Erklärung zum Ursprung), gilt bei der Einfuhr der **Präferenzzollsatz** – oft 0 %. Die Einfuhrumsatzsteuer bleibt davon unberührt. Die Nachweise selbst werden in der Einheit „Ausfuhrverfahren und Exportpapiere“ erklärt.`,
  terms: [
    { term: 'Summarische Eingangsanmeldung (ESumA)', def: 'Vorab-Anmeldung der Sendung vor dem Verbringen in die EU, vor allem für die Risikoanalyse zu Sicherheitszwecken (Art. 127 UZK); grundsätzlich vom Beförderer abzugeben.' },
    { term: 'Gestellung', def: 'Mitteilung an die Zollbehörden, dass Waren bei der Zollstelle oder an einem zugelassenen Ort eingetroffen sind (Art. 5 Nr. 33 UZK).' },
    { term: 'Vorübergehende Verwahrung', def: 'Zustand von Nicht-Unionswaren ab der Gestellung bis zur Überführung in ein Zollverfahren; höchstens 90 Tage, im Verwahrungslager (Art. 144–149 UZK).' },
    { term: 'Überlassung zum zollrechtlich freien Verkehr', def: 'Zollverfahren, durch das eine Nicht-Unionsware nach Erhebung der Einfuhrabgaben den Status einer Unionsware erhält (Art. 201 UZK).' },
    { term: 'ATLAS-Einfuhr', def: 'IT-Verfahren des deutschen Zolls für die elektronische Zollanmeldung zum freien Verkehr, zum Zolllager und zur aktiven Veredelung.' },
    { term: 'Zollschuld', def: 'Verpflichtung, Einfuhrabgaben zu entrichten; entsteht bei der Überlassung zum freien Verkehr im Zeitpunkt der Annahme der Zollanmeldung (Art. 77 UZK).' },
    { term: 'Zolllager', def: 'Besonderes Verfahren zur zeitlich unbegrenzten Lagerung von Nicht-Unionswaren ohne Erhebung der Einfuhrabgaben.' },
    { term: 'Aktive Veredelung', def: 'Nicht-Unionswaren werden in der EU ohne Einfuhrabgaben bearbeitet oder verarbeitet; die Veredelungserzeugnisse werden in der Regel wieder ausgeführt.' },
    { term: 'Passive Veredelung', def: 'Unionswaren werden vorübergehend in ein Drittland ausgeführt, dort veredelt und bei der Wiedereinfuhr ganz oder teilweise zollbefreit.' },
    { term: 'Vorübergehende Verwendung', def: 'Nicht-Unionswaren werden befristet in der EU genutzt und wieder ausgeführt, mit vollständiger oder teilweiser Befreiung von den Einfuhrabgaben.' },
    { term: 'Endverwendung', def: 'Besonderes Verfahren, bei dem eine Zollbegünstigung gewährt wird, weil die Ware einem bestimmten Verwendungszweck zugeführt wird.' },
    { term: 'Transaktionswert', def: 'Tatsächlich gezahlter oder zu zahlender Preis der Ware beim Verkauf zur Ausfuhr in die EU, berichtigt nach Art. 71 und 72 UZK.' },
    { term: 'Ort des Verbringens', def: 'Ort, bis zu dem Beförderungs- und Versicherungskosten in den Zollwert gehören, z. B. erster EU-Hafen im Seeverkehr.' }
  ],
  example: `# Beispiel: Gartenmöbel aus Vietnam für einen Händler in Neunkirchen (Beispielfall)

Die **Saar-Trans Spedition GmbH** übernimmt für die Garten-Welt GmbH (Neunkirchen) die Zollabfertigung von 1 × 40'-Container Gartenmöbel. Kauf **FOB Haiphong**, Rechnungspreis **38.500 €**.

**1. Vor der Ankunft:** Die Reederei gibt die summarische Eingangsanmeldung ab. Der Container wird in **Rotterdam** gelöscht und im T1-Verfahren zum Lager der Saar-Trans (zugelassener Empfänger) befördert.

**2. Gestellung und Verwahrung:** Mit der Ankunft in Saarbrücken wird der Container gestellt und befindet sich in **vorübergehender Verwahrung** im Verwahrungslager der Saar-Trans. Die 90-Tage-Frist läuft.

**3. Zollwert ermitteln:**

| Posten | € |
|---|---:|
| Rechnungspreis FOB Haiphong | 38.500 |
| + Seefracht Haiphong–Rotterdam | 2.400 |
| + Transportversicherung | 115 |
| + Einwegpaletten und Verpackung (gesondert berechnet) | 260 |
| **= Zollwert** | **41.275** |

Die Lkw-Fracht Rotterdam–Saarbrücken (780 €) gehört **nicht** zum Zollwert, weil sie nach dem Ort des Verbringens anfällt. Sie wird aber bei der Einfuhrumsatzsteuer berücksichtigt (Einheit „Einfuhrabgaben berechnen“).

**4. Präferenz prüfen:** Der Lieferant hat eine Erklärung zum Ursprung auf der Rechnung abgegeben. Die Saar-Trans prüft, ob die Voraussetzungen des Abkommens erfüllt sind, und beantragt dann den Präferenzzollsatz.

**5. Zollanmeldung:** Die Saar-Trans gibt als **direkte Vertreterin** der Garten-Welt die Anmeldung über **ATLAS-Einfuhr** ab. Mit der **Annahme** entsteht die Zollschuld der Garten-Welt. Die Abgaben werden über das **Aufschubkonto** der Garten-Welt gesichert.

**6. Überlassung:** Der Zoll verzichtet auf eine Beschau und überlässt die Ware. Die Möbel sind jetzt **Unionswaren** und werden nach Neunkirchen ausgeliefert.`,
  rules: [
    'Nicht-Unionsware bleibt unter Zollaufsicht, bis sie in ein Zollverfahren überführt wird – ausliefern erst nach der Überlassung.',
    'Gestellung = Ankunft melden; ab dann vorübergehende Verwahrung mit höchstens 90 Tagen, ohne Verlängerung.',
    'Die Zollschuld entsteht mit der Annahme der Zollanmeldung, nicht erst mit der Zahlung.',
    'Zolllager = unverzollt lagern; aktive Veredelung = in der EU bearbeiten und wieder ausführen; passive Veredelung = im Drittland bearbeiten und zurückholen.',
    'Zollwert = Preis + Fracht/Versicherung bis zum Ort des Verbringens + weitere Hinzurechnungen (z. B. Verkaufsprovision, Verpackung).',
    'Fracht innerhalb der EU, Einkaufsprovisionen und Einfuhrabgaben gehören nicht in den Zollwert, wenn sie getrennt ausgewiesen sind.',
    'Präferenznachweis senkt den Zoll, nicht die Einfuhrumsatzsteuer.'
  ],
  summary: `- Ablauf: **ESumA** → Beförderung → **Gestellung** → **vorübergehende Verwahrung** (max. 90 Tage) → **Zollanmeldung** (ATLAS-Einfuhr) → **Annahme** (Zollschuld entsteht) → Prüfung → Entrichtung/Sicherheit → **Überlassung** (Unionsstatus).
- **Zollschuldner**: Anmelder; bei indirekter Vertretung zusätzlich der Vertretene.
- **Besondere Verfahren**: Versand, Lagerung (Zolllager, Freizone), Verwendung (vorübergehende Verwendung, Endverwendung), Veredelung (aktiv, passiv).
- **Vorübergehende Verwendung mit teilweiser Befreiung**: 3 % je angefangenem Monat, höchstens voller Betrag.
- **Zollwert** = Transaktionswert + Hinzurechnungen (Fracht/Versicherung bis Ort des Verbringens, Verkaufsprovision, Verpackung, Lizenzgebühren …) − getrennt ausgewiesene Abzüge (EU-Fracht, Einkaufsprovision, Einfuhrabgaben …).
- **Präferenzen**: Ursprungsware + gültiger Nachweis → ermäßigter oder Nullzollsatz.`,
  mistakes: [
    { wrong: 'Wenn die Ware im Lager der Spedition steht, darf sie schon an den Kunden ausgeliefert werden.', right: 'Nicht-Unionsware in vorübergehender Verwahrung darf erst nach der Überlassung zum freien Verkehr (oder in ein anderes Verfahren) das Lager verlassen.' },
    { wrong: 'Die 90-Tage-Frist der vorübergehenden Verwahrung kann man bei Bedarf verlängern.', right: 'Laut zoll.de ist eine Fristverlängerung nicht möglich. Spätestens nach 90 Tagen muss die Ware in ein Zollverfahren überführt oder wieder ausgeführt werden.' },
    { wrong: 'Die Lkw-Fracht von Rotterdam nach Saarbrücken gehört in den Zollwert.', right: 'In den Zollwert gehören nur Kosten bis zum Ort des Verbringens (erster EU-Hafen). Die Fracht danach bleibt außer Ansatz, wenn sie getrennt ausgewiesen ist; sie zählt aber zur EUSt-Bemessungsgrundlage.' },
    { wrong: 'Jede Provision wird dem Zollwert hinzugerechnet.', right: 'Einkaufsprovisionen (für den Vertreter des Käufers) werden nicht hinzugerechnet; Verkaufsprovisionen schon.' },
    { wrong: 'Aktive und passive Veredelung sind dasselbe, nur aus verschiedener Sicht.', right: 'Aktiv: Nicht-Unionsware wird in der EU veredelt. Passiv: Unionsware wird im Drittland veredelt und wieder eingeführt.' },
    { wrong: 'Mit einem Präferenznachweis entfällt auch die Einfuhrumsatzsteuer.', right: 'Präferenzen betreffen nur den Zoll. Die EUSt fällt trotzdem an.' }
  ],
  flashcards: [
    { q: 'Wozu dient die summarische Eingangsanmeldung?', a: 'Vor allem zur Risikoanalyse für Sicherheitszwecke vor dem Verbringen der Ware in die EU (Art. 127 UZK).' },
    { q: 'Was bedeutet Gestellung?', a: 'Die Mitteilung an den Zoll, dass die Ware bei der Zollstelle oder einem zugelassenen Ort angekommen ist.' },
    { q: 'Wie lange darf Ware höchstens in vorübergehender Verwahrung bleiben?', a: '90 Tage, eine Verlängerung ist nicht möglich (Art. 149 UZK).' },
    { q: 'Wann entsteht die Zollschuld bei der Überlassung zum freien Verkehr?', a: 'Im Zeitpunkt der Annahme der Zollanmeldung (Art. 77 Abs. 2 UZK).' },
    { q: 'Welche Wirkung hat die Überlassung zum zollrechtlich freien Verkehr?', a: 'Die Nicht-Unionsware erhält den zollrechtlichen Status einer Unionsware.' },
    { q: 'Was ist ein Zolllager?', a: 'Besonderes Verfahren, in dem Nicht-Unionswaren zeitlich unbegrenzt ohne Einfuhrabgaben gelagert werden.' },
    { q: 'Was ist aktive Veredelung?', a: 'Nicht-Unionswaren werden in der EU ohne Einfuhrabgaben bearbeitet/verarbeitet und die Erzeugnisse wieder ausgeführt.' },
    { q: 'Wie hoch sind die Abgaben bei vorübergehender Verwendung mit teilweiser Befreiung?', a: '3 % der vollen Abgaben je angefangenem Monat, höchstens der volle Betrag (Art. 252 UZK).' },
    { q: 'Bis wohin gehören Fracht- und Versicherungskosten in den Zollwert?', a: 'Bis zum Ort des Verbringens in die EU, z. B. bis zum ersten EU-Hafen.' },
    { q: 'Gehört eine Einkaufsprovision zum Zollwert?', a: 'Nein. Einkaufsprovisionen werden nicht hinzugerechnet (Art. 71/72 UZK).' },
    { q: 'Was bewirkt ein gültiger Präferenznachweis bei der Einfuhr?', a: 'Den ermäßigten Präferenzzollsatz (oft 0 %); die EUSt bleibt.' }
  ],
  tasks: [
    {
      id: 'lf11-zollverfahren-a1', type: 'order', difficulty: 2, points: 8,
      q: 'Bringe die Schritte einer Einfuhr per Seecontainer bis zur Auslieferung beim Kunden in die richtige Reihenfolge.',
      items: [
        'Summarische Eingangsanmeldung durch den Beförderer vor dem Verbringen',
        'Ankunft und Gestellung der Ware',
        'Ware befindet sich in vorübergehender Verwahrung',
        'Elektronische Zollanmeldung über ATLAS-Einfuhr',
        'Annahme der Zollanmeldung – Entstehung der Zollschuld',
        'Prüfung der Unterlagen und ggf. Beschau',
        'Entrichtung der Abgaben oder Sicherheit über das Aufschubkonto',
        'Überlassung zum zollrechtlich freien Verkehr und Auslieferung'
      ],
      hints: ['Die Sicherheitsdaten müssen schon vor der Ankunft vorliegen.', 'Die Zollschuld entsteht bei der Annahme; erst danach prüft der Zoll und überlässt.'],
      solution: `1. **ESumA** (Art. 127 UZK) vor dem Verbringen
2. **Gestellung** (Art. 139 UZK)
3. **Vorübergehende Verwahrung** beginnt automatisch (Art. 144 UZK)
4. **Zollanmeldung** (Art. 158 UZK), elektronisch über ATLAS-Einfuhr
5. **Annahme** (Art. 172 UZK) – **Zollschuld entsteht** (Art. 77 UZK)
6. **Prüfung/Beschau** (Art. 188 UZK)
7. **Entrichtung oder Sicherheit** (Art. 195 UZK)
8. **Überlassung** (Art. 194 UZK) – die Ware wird Unionsware und darf ausgeliefert werden`
    },
    {
      id: 'lf11-zollverfahren-a2', type: 'mc', difficulty: 2, points: 1,
      q: 'Ein Container mit Ersatzteilen aus Japan steht seit der Gestellung am 2. März im Verwahrungslager der Spedition. Der Kunde kann sich nicht entscheiden, was mit der Ware passieren soll. Welche Aussage ist richtig?',
      options: [
        'Die Ware darf beliebig lange in vorübergehender Verwahrung bleiben, solange Lagergeld bezahlt wird.',
        'Die Ware muss innerhalb von 90 Tagen in ein Zollverfahren überführt oder wieder ausgeführt werden; die Frist kann nicht verlängert werden.',
        'Die Frist beträgt 90 Tage und kann beim Hauptzollamt um weitere 90 Tage verlängert werden.',
        'Nach 30 Tagen wird die Ware automatisch in den freien Verkehr überlassen.'
      ],
      correct: [1],
      hints: ['Art. 149 UZK nennt eine feste Höchstdauer.', 'Wenn der Kunde Zeit braucht, kommt z. B. ein Zolllager in Frage.'],
      solution: 'Richtig ist B: Nach Art. 149 UZK sind Waren in vorübergehender Verwahrung **innerhalb von 90 Tagen** in ein Zollverfahren zu überführen oder wieder auszuführen; laut zoll.de ist **keine Verlängerung** möglich. Braucht der Kunde mehr Zeit, kann die Spedition die Ware z. B. in ein **Zolllager** überführen, wo sie zeitlich unbegrenzt unverzollt lagern kann.'
    },
    {
      id: 'lf11-zollverfahren-a3', type: 'match', difficulty: 2, points: 6,
      q: 'Ordne den Einsatzfall dem passenden Zollverfahren zu.',
      pairs: [
        ['Ein Importeur lagert Reifen aus Korea unverzollt und verzollt jede Woche nur die bestellte Menge', 'Zolllagerverfahren'],
        ['Stoffbahnen aus Indien werden im Saarland zu Lkw-Planen verarbeitet und in die Schweiz verkauft', 'Aktive Veredelung'],
        ['Eine Prüfmaschine aus Homburg wird in Serbien repariert und wieder eingeführt', 'Passive Veredelung'],
        ['Ein US-Aussteller zeigt Vorführgeräte auf einer Messe in Saarbrücken und nimmt sie danach wieder mit', 'Vorübergehende Verwendung'],
        ['Waren erhalten einen ermäßigten Zollsatz, weil sie einem im Zolltarif genannten Zweck zugeführt werden', 'Endverwendung'],
        ['Möbel aus Vietnam sollen nach Verzollung im Saarland verkauft werden', 'Überlassung zum zollrechtlich freien Verkehr']
      ],
      hints: ['Wird die Ware in der EU bleiben, bearbeitet, gelagert oder nur kurz genutzt?', 'Bei passiver Veredelung ist die Ausgangsware eine Unionsware.'],
      solution: '**Zolllager**: unverzollte Lagerung mit Entnahme nach Bedarf. **Aktive Veredelung**: Nicht-Unionsware wird in der EU verarbeitet und wieder ausgeführt. **Passive Veredelung**: Unionsware wird im Drittland bearbeitet und mit Zollermäßigung wieder eingeführt. **Vorübergehende Verwendung**: befristete Nutzung mit Wiederausfuhr (Messegut). **Endverwendung**: Zollbegünstigung wegen eines bestimmten Verwendungszwecks. **Freier Verkehr**: Ware bleibt dauerhaft in der EU.'
    },
    {
      id: 'lf11-zollverfahren-a4', type: 'calc', difficulty: 3, points: 2,
      q: `Die Saar-Trans Spedition fertigt eine Sendung Bürostühle aus China ab (Seeweg, Ankunft Rotterdam, weiter per Lkw nach Saarlouis). Folgende Beträge liegen vor (alle gesondert ausgewiesen):

| Posten | € |
|---|---:|
| Rechnungspreis FOB Shanghai | 52.400 |
| Seefracht Shanghai–Rotterdam | 2.150 |
| Transportversicherung bis Rotterdam | 180 |
| Verkaufsprovision an den Vertreter des Verkäufers (vom Käufer bezahlt) | 1.100 |
| Einkaufsprovision an den Einkaufsagenten des Käufers | 600 |
| Lkw-Fracht Rotterdam–Saarlouis | 950 |

Berechne die Summe der Hinzurechnungen und den Zollwert.`,
      formula: 'Zollwert = Rechnungspreis + Hinzurechnungen (Art. 71 UZK)',
      fields: [
        { id: 'hinzu', label: 'Summe der Hinzurechnungen', unit: '€', answer: 3430, tol: 0.01 },
        { id: 'zw', label: 'Zollwert', unit: '€', answer: 55830, tol: 0.01 }
      ],
      hints: ['FOB: Fracht und Versicherung ab Shanghai sind nicht im Preis enthalten.', 'Einkaufsprovision und Fracht ab Rotterdam gehören nicht in den Zollwert.'],
      solution: `**Formel:** Zollwert = Rechnungspreis + Hinzurechnungen nach Art. 71 UZK

**Hinzurechnungen:**
- Seefracht bis Rotterdam (Ort des Verbringens): 2.150 €
- Versicherung bis Rotterdam: 180 €
- Verkaufsprovision: 1.100 €
- Summe: 2.150 € + 180 € + 1.100 € = **3.430 €**

**Zollwert:** 52.400 € + 3.430 € = **55.830 €**

**Nicht einbezogen:**
- Einkaufsprovision (600 €): ausdrücklich ausgenommen
- Lkw-Fracht Rotterdam–Saarlouis (950 €): entsteht nach dem Ort des Verbringens (erster EU-Hafen); sie wird erst bei der EUSt-Bemessungsgrundlage berücksichtigt`
    },
    {
      id: 'lf11-zollverfahren-a5', type: 'calc', difficulty: 3, points: 2,
      q: `Ein Hersteller aus der Türkei liefert Ersatzteile **DAP Saarbrücken** per Lkw. Der Rechnungspreis beträgt **30.000 €**. Auf der Rechnung ist gesondert ausgewiesen, dass davon **700 €** auf die Beförderung ab der ersten Eingangszollstelle in der EU bis Saarbrücken entfallen.

Berechne den abziehbaren Betrag und den Zollwert.`,
      formula: 'Zollwert = Rechnungspreis − getrennt ausgewiesene Beförderungskosten nach dem Ort des Verbringens',
      fields: [
        { id: 'abzug', label: 'Abziehbarer Betrag', unit: '€', answer: 700, tol: 0.01 },
        { id: 'zw', label: 'Zollwert', unit: '€', answer: 29300, tol: 0.01 }
      ],
      hints: ['Bei DAP ist die gesamte Fracht bis Saarbrücken bereits im Preis.', 'Im Straßenverkehr ist der Ort des Verbringens die erste Eingangszollstelle.'],
      solution: `**Formel:** Zollwert = Preis − getrennt ausgewiesene Kosten nach dem Ort des Verbringens (Art. 72 Buchst. a UZK)

**Abzug:** 700 € (Beförderung innerhalb der EU, gesondert ausgewiesen)

**Zollwert:** 30.000 € − 700 € = **29.300 €**

Begründung: Bei DAP trägt der Verkäufer die Fracht bis zum Bestimmungsort; sie steckt im Preis. In den Zollwert gehört aber nur die Fracht bis zum Ort des Verbringens (erste Eingangszollstelle). Der Abzug ist nur möglich, weil der Betrag **getrennt ausgewiesen** ist. Hinweis: Bei Ursprungswaren aus der Türkei können besondere Regelungen (Zollunion EU–Türkei) zu einem Nullzoll führen; das ändert aber nichts am Zollwert.`
    },
    {
      id: 'lf11-zollverfahren-a6', type: 'calc', difficulty: 3, points: 3,
      q: `Ein Bauunternehmen aus der Schweiz setzt eine Spezialbaumaschine für ein Projekt im Saarland ein. Die Maschine wird in die **vorübergehende Verwendung mit teilweiser Befreiung** überführt. Bei sofortiger Überlassung zum freien Verkehr hätte der Zoll **6.000 €** betragen (Beispielwert). Die Maschine bleibt **4 Monate und 10 Tage** in der EU.

Berechne die Zahl der anzusetzenden Monate, den Prozentsatz und den zu zahlenden Zoll (Art. 252 UZK; Einfuhrumsatzsteuer bleibt unberücksichtigt).`,
      formula: 'Zoll = voller Zollbetrag × 3 % × angefangene Monate (höchstens voller Betrag)',
      fields: [
        { id: 'monate', label: 'Angefangene Monate', unit: 'Monate', answer: 5, tol: 0 },
        { id: 'proz', label: 'Anzusetzender Prozentsatz', unit: '%', answer: 15, tol: 0.01 },
        { id: 'zoll', label: 'Zu zahlender Zoll', unit: '€', answer: 900, tol: 0.01 }
      ],
      hints: ['Ein angefangener Monat zählt als voller Monat.', '3 % je Monat vom Betrag, der bei sofortiger Überlassung angefallen wäre.'],
      solution: `**Formel:** Zoll = voller Zoll × 3 % × Anzahl angefangener Monate

**Monate:** 4 Monate und 10 Tage → **5** angefangene Monate

**Prozentsatz:** 5 × 3 % = **15 %**

**Zoll:** 6.000 € × 15 % = **900 €**

Prüfung der Obergrenze: 900 € < 6.000 € → zulässig. Ab dem 34. angefangenen Monat (34 × 3 % = 102 %) würde die Obergrenze greifen – praktisch ist das ohne Bedeutung.`
    },
    {
      id: 'lf11-zollverfahren-a7', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Kosten sind dem Rechnungspreis bei der Ermittlung des Zollwerts **hinzuzurechnen**, wenn sie noch nicht enthalten sind? (Mehrfachauswahl)',
      options: [
        'Lizenzgebühren, die der Käufer für die Ware an den Verkäufer zahlen muss',
        'Kosten für Einwegpaletten und Transportverpackung',
        'Einfuhrumsatzsteuer',
        'Seefracht vom Abgangshafen bis zum ersten EU-Hafen',
        'Einkaufsprovision',
        'Montagekosten nach der Einfuhr (getrennt ausgewiesen)'
      ],
      correct: [0, 1, 3],
      hints: ['Art. 71 UZK zählt die Hinzurechnungen abschließend auf.', 'Abgaben und Kosten, die erst in der EU entstehen, gehören nicht dazu.'],
      solution: 'Hinzuzurechnen sind **Lizenzgebühren**, **Verpackungs-/Umschließungskosten** und **Beförderungskosten bis zum Ort des Verbringens** (Art. 71 UZK). Nicht in den Zollwert gehören Einfuhrabgaben (EUSt), Einkaufsprovisionen und getrennt ausgewiesene Montagekosten nach der Einfuhr (Art. 72 UZK).'
    },
    {
      id: 'lf11-zollverfahren-a8', type: 'cloze', difficulty: 2, points: 6,
      q: 'Ergänze die Lücken.',
      text: 'Mit der Mitteilung an den Zoll, dass die Ware angekommen ist, wird sie [[gestellt]]. Ab dann befindet sich die Nicht-Unionsware in [[vorübergehender Verwahrung]]. Sie muss innerhalb von [[90]] Tagen in ein Zollverfahren überführt werden. Die Zollschuld entsteht im Zeitpunkt der [[Annahme]] der Zollanmeldung. Mit der Überlassung zum zollrechtlich freien Verkehr erhält die Ware den Status einer [[Unionsware]]. Die Zollanmeldung wird in Deutschland elektronisch über [[ATLAS-Einfuhr|ATLAS]] abgegeben.',
      hints: ['Gestellung – Verwahrung – Anmeldung – Annahme – Überlassung.', 'Die Frist steht in Art. 149 UZK.'],
      solution: 'Die Ware wird **gestellt** (Art. 139 UZK) und ist dann in **vorübergehender Verwahrung** (Art. 144 UZK), höchstens **90** Tage (Art. 149 UZK). Die Zollschuld entsteht mit der **Annahme** der Zollanmeldung (Art. 77 UZK). Die Überlassung verleiht den Status einer **Unionsware** (Art. 201 UZK). IT-Verfahren: **ATLAS-Einfuhr**.'
    },
    {
      id: 'lf11-zollverfahren-a9', type: 'text', difficulty: 3, points: 3,
      q: 'Die Saar-Trans Spedition soll für einen neuen Kunden Zollanmeldungen abgeben. Der Geschäftsführer fragt: „Haften wir eigentlich für den Zoll, wenn der Kunde nicht zahlt?“ Erkläre den Unterschied zwischen direkter und indirekter Vertretung und die Folgen für die Zollschuld.',
      model: 'Bei der direkten Vertretung handelt die Spedition im Namen und für Rechnung des Kunden. Anmelder und Zollschuldner ist dann der Kunde, die Spedition haftet grundsätzlich nicht für die Abgaben. Bei der indirekten Vertretung handelt die Spedition im eigenen Namen, aber für Rechnung des Kunden. Dann ist die Spedition Anmelderin und damit Zollschuldnerin; zusätzlich ist auch der Kunde, für dessen Rechnung angemeldet wird, Zollschuldner (Art. 77 Abs. 3 UZK). Die Spedition trägt also bei indirekter Vertretung das Risiko, wenn der Kunde nicht zahlt.',
      criteria: [
        { text: 'erklärt direkte Vertretung: im Namen des Kunden, Kunde ist Schuldner', keywords: ['direkt', 'im Namen|Namen des Kunden'], points: 1 },
        { text: 'erklärt indirekte Vertretung: im eigenen Namen für Rechnung des Kunden', keywords: ['indirekt', 'eigenen Namen'], points: 1 },
        { text: 'nennt die Haftung der Spedition als Zollschuldnerin bei indirekter Vertretung', keywords: ['Zollschuldner|Schuldner|haftet|Haftung'], points: 1 }
      ],
      hints: ['Wer ist Anmelder, wenn die Spedition im eigenen Namen auftritt?', 'Art. 77 Abs. 3 UZK nennt die Zollschuldner.'],
      solution: '**Direkte Vertretung**: im Namen und für Rechnung des Kunden → Kunde ist Anmelder und Zollschuldner. **Indirekte Vertretung**: im eigenen Namen für Rechnung des Kunden → Spedition ist Anmelderin und Zollschuldnerin, der Kunde zusätzlich (Gesamtschuldner). Für die Spedition ist die indirekte Vertretung deshalb riskanter; sie sollte die Bonität des Kunden prüfen oder direkt vertreten.'
    },
    {
      id: 'lf11-zollverfahren-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Kühlgeräte aus Südkorea für die Bliesgau Logistik',
      intro: `Die **Bliesgau Logistik GmbH** (Homburg) betreibt ein bewilligtes Verwahrungslager und ein Zolllager. Ein Kunde importiert 120 Kühlgeräte aus Südkorea. Kauf **CIF Rotterdam**, Rechnungspreis **64.800 €** (enthält Seefracht und Versicherung bis Rotterdam). Zusätzlich berechnet der Verkäufer **900 €** für Einwegpaletten und Spezialverpackung. Die Lkw-Fracht Rotterdam–Homburg kostet **1.050 €**.

Der Kunde will **80 Geräte** sofort verkaufen. Für die restlichen **40 Geräte** hat er noch keinen Abnehmer; möglicherweise gehen sie später in die Schweiz. Der Lieferant hat eine Erklärung zum Ursprung für Ursprungserzeugnisse Südkoreas abgegeben.`,
      hints: ['Was ist bei CIF Rotterdam schon im Preis enthalten?', 'Für Ware ohne Abnehmer, die vielleicht wieder ausgeführt wird, gibt es ein Lagerverfahren ohne Zeitgrenze.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf11-zollverfahren-a10-1', type: 'calc', difficulty: 3, points: 2,
          q: 'Berechne den Zollwert der gesamten Sendung und den Zollwert je Gerät.',
          formula: 'Zollwert = Rechnungspreis CIF + Verpackung; je Gerät = Zollwert ÷ 120',
          fields: [
            { id: 'zw', label: 'Zollwert gesamt', unit: '€', answer: 65700, tol: 0.01 },
            { id: 'stk', label: 'Zollwert je Gerät', unit: '€', answer: 547.5, tol: 0.01 }
          ],
          hints: ['Bei CIF Rotterdam sind Fracht und Versicherung bis zum Ort des Verbringens enthalten.', 'Die Lkw-Fracht ab Rotterdam bleibt außen vor.'],
          solution: `**Zollwert gesamt:** 64.800 € (CIF Rotterdam, Fracht und Versicherung bis zum Ort des Verbringens enthalten) + 900 € Verpackung (Hinzurechnung nach Art. 71 UZK) = **65.700 €**

**Je Gerät:** 65.700 € ÷ 120 = **547,50 €**

Die Lkw-Fracht Rotterdam–Homburg (1.050 €) gehört nicht zum Zollwert.`
        },
        {
          id: 'lf11-zollverfahren-a10-2', type: 'mc', difficulty: 3, points: 2,
          q: 'Welche Verfahren empfiehlt die Bliesgau Logistik? (Mehrfachauswahl)',
          options: [
            '80 Geräte: Überlassung zum zollrechtlich freien Verkehr',
            '40 Geräte: Überführung in das Zolllager',
            '40 Geräte: einfach in vorübergehender Verwahrung lassen, bis ein Käufer gefunden ist',
            '80 Geräte: aktive Veredelung'
          ],
          correct: [0, 1],
          hints: ['Die vorübergehende Verwahrung endet spätestens nach 90 Tagen.', 'Die Geräte werden nicht bearbeitet.'],
          solution: 'Richtig sind **A und B**: Die 80 Geräte, die in der EU verkauft werden, werden **zum freien Verkehr überlassen**. Die 40 Geräte ohne Abnehmer kommen ins **Zolllager**: Dort lagern sie unverzollt ohne Zeitgrenze und können später verzollt oder in die Schweiz wieder ausgeführt werden, ohne dass EU-Abgaben anfallen. Die Verwahrung wäre auf 90 Tage begrenzt; eine Veredelung findet nicht statt.'
        },
        {
          id: 'lf11-zollverfahren-a10-3', type: 'mc', difficulty: 2, points: 3,
          q: 'Welche Aussagen zur Erklärung zum Ursprung sind richtig? (Mehrfachauswahl)',
          options: [
            'Sie kann bei Vorliegen der Voraussetzungen des Abkommens EU–Südkorea zu einem ermäßigten oder Nullzollsatz führen.',
            'Sie senkt auch die Einfuhrumsatzsteuer.',
            'Der Zoll kann ihre Richtigkeit bei der Prüfung der Anmeldung kontrollieren.',
            'Sie ändert die Höhe des Zollwerts.',
            'Sie muss in der Zollanmeldung angegeben werden, wenn die Präferenz beantragt wird.'
          ],
          correct: [0, 2, 4],
          hints: ['Präferenzen betreffen den Zollsatz.', 'Der Zollwert wird unabhängig vom Ursprung ermittelt.'],
          solution: 'Richtig sind **A, C, E**: Der Präferenznachweis ermöglicht den **Präferenzzollsatz**, wird in der Anmeldung angegeben und vom Zoll geprüft (Art. 188 UZK). Er ändert weder den **Zollwert** noch die **EUSt** (der EUSt-Satz bleibt gleich; nur die Bemessungsgrundlage sinkt, weil weniger Zoll anfällt).'
        }
      ]
    },
    {
      id: 'lf11-zollverfahren-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Eine Seefrachtsendung wird über Rotterdam eingeführt und per Binnenschiff **ohne Umladung** nach Duisburg weiterbefördert. Welcher Ort ist für die Hinzurechnung der Beförderungskosten maßgeblich?',
      options: ['Duisburg', 'Rotterdam', 'Der Abgangshafen im Drittland', 'Die Grenze Niederlande/Deutschland'],
      correct: [1],
      hints: ['Im Seeverkehr zählt der erste Hafen in der EU.', 'zoll.de nennt genau dieses Beispiel.'],
      solution: '**Rotterdam**: Beim Übergang vom See- in den Binnenschiffsverkehr ohne Umladung ist grundsätzlich der erste für die Entladung in Betracht kommende Hafen in der EU der Ort des Verbringens (Art. 137 UZK-IA, Beispiel auf zoll.de). Die Kosten der Weiterfahrt nach Duisburg gehören nicht in den Zollwert.'
    }
  ],
  quiz: ['lf11-zollverfahren-a1', 'lf11-zollverfahren-a2', 'lf11-zollverfahren-a3', 'lf11-zollverfahren-a4', 'lf11-zollverfahren-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 11, Inhalte: Zollrechtliche Bestimmungen, Zollverfahren, Zollwert, Präferenzen' },
    { title: 'Gestellung', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Erfassung-Warenverkehr/Gestellung/Gestellung.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Summarische Eingangsanmeldung', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Erfassung-Warenverkehr/Summarische-Eingangsanmeldung/summarische-eingangsanmeldung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Abgabe ESumA und Ankunftsmeldung (ICS2)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Erfassung-Warenverkehr/Summarische-Eingangsanmeldung/Abgabe-ESumA-und-Ankunftsmeldung/abgabe_esuma-und-ankunftsmeldung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Vorübergehende Verwahrung – Allgemeines', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Erfassung-Warenverkehr/Voruebergehende-Verwahrung/Allgemeines/allgemeines_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Ablauf des Abfertigungsverfahrens (Überlassung zum zollrechtlich freien Verkehr)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Ueberlassung-freier-Verkehr/Ablauf-Abfertigungsverf/ablauf-abfertigungsverf_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'IT-Verfahren ATLAS-Einfuhr', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/ATLAS/ATLAS-Einfuhr/IT-Verfahren-ATLAS-Einfuhr/it_verfahren_atlas_einfuhr_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Zollverfahren (Übersicht)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/zollverfahren_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Hinzurechnungen (Art. 71 UZK)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollwert/Methoden-der-Zollwertermittlung/Transaktionswert-fuer-die-eingefuehrte-Ware/Berichtigungen-Artikel-71-72-UZK/Hinzurechnungen/hinzurechnungen_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Abzugsfaktoren (Art. 72 UZK)', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollwert/Methoden-der-Zollwertermittlung/Transaktionswert-fuer-die-eingefuehrte-Ware/Berichtigungen-Artikel-71-72-UZK/Abzugsfaktoren/abzugsfaktoren_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Ort des Verbringens', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollwert/Methoden-der-Zollwertermittlung/Transaktionswert-fuer-die-eingefuehrte-Ware/Berichtigungen-Artikel-71-72-UZK/Befoerderungs-und-Versicherungskosten/Ort-des-Verbringens/ort-des-verbringens_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Passive Veredelung', publisher: 'Generalzolldirektion (zoll.de)', url: 'https://www.zoll.de/DE/Fachthemen/Zoelle/Zollverfahren/Passive-Veredelung/Passive-veredelung_node.html', asOf: 'abgerufen 2026-10-17' },
    { title: 'Unionszollkodex (VO (EU) Nr. 952/2013), u. a. Art. 77, 149, 201, 252', publisher: 'Europäische Union (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32013R0952', asOf: '2026' }
  ],
  links: ['lf11-versandverfahren', 'lf11-einfuhrabgaben', 'lf10-incoterms', 'lf10-ausfuhrverfahren']
};
