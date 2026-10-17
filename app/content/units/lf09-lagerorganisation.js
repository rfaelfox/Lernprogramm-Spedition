export default {
  id: 'lf09-lagerorganisation',
  area: 'LF09',
  topic: 'lf09-lagerorganisation',
  title: 'Lagerorganisation, Lagerpapiere und Lagerkennzahlen',
  status: 'vollstaendig',
  minutes: 50,
  validity: {
    asOf: '2026',
    note: 'Lagerschein nach § 475c HGB, Legitimation § 475d HGB, Traditionswirkung § 475g HGB, Übertragung durch Indossament bei Orderlagerscheinen nach § 363 Abs. 2 HGB, Inventurvereinfachungen § 241 HGB, Stand der Prüfung Oktober 2026. Die Kennzahlen sind betriebswirtschaftliche Rechengrößen ohne Rechtsgrundlage; in der Schule wird das Jahr meist mit 360 Tagen gerechnet.'
  },
  goals: [
    'Ich kann die Prozessschritte Wareneingang, Einlagerung, Kommissionierung und Warenausgang beschreiben und die wichtigsten Prüfungen im Wareneingang nennen.',
    'Ich kann feste und chaotische Lagerplatzvergabe sowie FIFO, LIFO und FEFO einem passenden Lagergut zuordnen.',
    'Ich kann Kommissionierverfahren (Mann-zur-Ware, Ware-zum-Mann, einstufig, zweistufig) und Kommissioniertechniken (Pickliste, Scanner, Pick by Voice, Pick by Light) unterscheiden.',
    'Ich kann die Aufgaben eines Lagerverwaltungssystems (LVS) erklären.',
    'Ich kann Lieferschein, Einlagerungsbestätigung, Lagerschein und Orderlagerschein unterscheiden.',
    'Ich kann erklären, wie ein Lagerhalter Inventuren über die eingelagerten Kundenbestände durchführt.',
    'Ich kann durchschnittlichen Lagerbestand, Umschlagshäufigkeit, durchschnittliche Lagerdauer, Lagerreichweite sowie Flächen- und Raumnutzungsgrad berechnen und deuten.'
  ],
  simple: `# Worum geht es?

Ein Lager funktioniert wie ein Kreislauf. Jede Palette und jeder Karton durchläuft dieselben vier Stationen:

1. **Wareneingang:** Der Lkw wird entladen. Man prüft, ob die richtige Ware in der richtigen Menge und ohne Schäden ankommt. Grundlage ist der **Lieferschein**.
2. **Einlagerung:** Die Ware bekommt einen **Lagerplatz**. Das Lagerverwaltungssystem (LVS) merkt sich, wo sie liegt.
3. **Kommissionierung:** Für einen Kundenauftrag werden die bestellten Artikel aus dem Lager zusammengesucht („gepickt“).
4. **Warenausgang:** Die Sendung wird verpackt, gekennzeichnet, mit Papieren versehen und verladen.

# Welche Ware geht zuerst raus?

- **FIFO** (first in – first out): Was zuerst kam, geht zuerst.
- **LIFO** (last in – first out): Was zuletzt kam, geht zuerst.
- **FEFO** (first expired – first out): Was zuerst abläuft, geht zuerst. Wichtig bei Lebensmitteln und Medikamenten.

# Wie wird kommissioniert?

- **Mann-zur-Ware:** Der Mitarbeiter geht oder fährt zum Regal.
- **Ware-zum-Mann:** Die Ware kommt automatisch zum Arbeitsplatz des Mitarbeiters.
- Die Information, was zu holen ist, kommt per **Pickliste**, **Scanner**, **Sprachanweisung** (Pick by Voice) oder **Lämpchen am Fach** (Pick by Light).

# Mit Kennzahlen das Lager steuern

Wie viel liegt durchschnittlich im Lager? Wie oft wird der Bestand im Jahr „umgeschlagen“? Wie lange bleibt die Ware im Schnitt liegen? Wie viele Tage reicht der Bestand noch? Wie gut ist die Halle ausgenutzt? Diese Fragen beantworten die **Lagerkennzahlen**.

> Lagerfunktionen, Lagerarten, Block- und Zeilenlagerung und den Lagervertrag findest du in der Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“.`,
  deep: `# 1. Wareneingang

Der Wareneingang ist die „Eingangstür“ des Lagers. Fehler, die hier nicht bemerkt werden, sind später kaum noch aufzuklären.

| Schritt | Inhalt |
|---|---|
| **Avisierung und Zeitfenster** | Der Einlagerer oder Lieferant meldet die Anlieferung vorab (Avis). Das Lager plant Rampe, Personal und Stellplätze. |
| **Annahme und Entladung** | Lkw an die Rampe, Papiere übernehmen (Lieferschein, ggf. Frachtbrief). |
| **Identitäts- und Mengenprüfung** | Stimmen Absender, Artikel und Anzahl der Packstücke mit Lieferschein und Avis überein? |
| **Prüfung auf äußerlich erkennbare Schäden** | Beschädigte Verpackungen, nasse Kartons, verrutschte Ladung. Mängel werden **sofort auf dem Frachtbrief/Ablieferbeleg vermerkt** (Vorbehalt) und fotografiert. |
| **Qualitätsprüfung** (falls vereinbart) | Stichprobe, Temperatur, Mindesthaltbarkeitsdatum (MHD), Charge. |
| **Erfassung im LVS** | Wareneingang buchen, Etiketten mit Barcode oder Lagereinheiten-Nummer anbringen. |
| **Einlagerungsbestätigung** | Der Lagerhalter bestätigt dem Einlagerer, was eingelagert wurde. |

Bei beschädigt angeliefertem Gut muss der Lagerhalter die Ansprüche des Einlagerers gegen den Frachtführer sichern und den Einlagerer unverzüglich benachrichtigen (§ 470 HGB, siehe Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“).

# 2. Einlagerung und Lagerplatzvergabe

Das LVS schlägt einen Platz vor. Zwei Grundprinzipien:

| | Feste Lagerplatzvergabe | Chaotische (freie) Lagerplatzvergabe |
|---|---|---|
| Prinzip | jeder Artikel hat seinen Stammplatz | jeder freie, passende Platz wird genutzt |
| Platzbedarf | hoch: Plätze für den Höchstbestand jedes Artikels freihalten | geringer: freie Plätze werden von anderen Artikeln genutzt |
| Abhängigkeit von EDV | gering | hoch: ohne LVS findet man nichts |
| geeignet für | kleine Lager, wenige Artikel, Handlager | große Lager, viele Kunden und Artikel |

In der Praxis wird oft gemischt: **Zonen** (z. B. Schnelldreher nahe am Warenausgang nach einer ABC-Analyse), innerhalb der Zone chaotisch.

# 3. Auslagerungsprinzipien

| Prinzip | Bedeutung | typische Güter |
|---|---|---|
| **FIFO** | älteste Einlagerung zuerst | Waren mit Veralterungsgefahr, Saisonware, Ersatzteile |
| **LIFO** | jüngste Einlagerung zuerst | nicht verderbliche Güter in Blocklagerung, z. B. Pflastersteine, Sand |
| **FEFO** | kürzestes Haltbarkeitsdatum zuerst | Lebensmittel, Getränke, Arzneimittel, Kosmetik |

FEFO ist **nicht dasselbe** wie FIFO: Eine später angelieferte Palette kann ein früheres MHD haben. Das LVS muss dafür MHD oder Charge beim Wareneingang erfassen.

# 4. Kommissionierung

**Kommissionieren** heißt: Aus dem Lagersortiment (alle Artikel) werden nach einem Kundenauftrag Teilmengen entnommen und zu einer Sendung zusammengestellt.

**Nach der Bewegung**

| | Mann-zur-Ware (statische Bereitstellung) | Ware-zum-Mann (dynamische Bereitstellung) |
|---|---|---|
| Ablauf | Kommissionierer läuft oder fährt zu den Lagerplätzen | Fördertechnik bringt Behälter oder Paletten zum Kommissionierplatz |
| Vorteil | geringe Investition, flexibel | kurze Wege, hohe Leistung, ergonomisch |
| Nachteil | lange Wegezeiten | hohe Investition (Automatik), Abhängigkeit von Technik |

**Nach der Auftragsbearbeitung**

- **Einstufig (auftragsorientiert):** Ein Auftrag wird vollständig nacheinander abgearbeitet. Einfach, gut bei wenigen, großen Aufträgen.
- **Zweistufig (serienorientiert):** Mehrere Aufträge werden gesammelt; zuerst wird je Artikel die Gesamtmenge entnommen (Stufe 1), danach auf die einzelnen Aufträge verteilt (Stufe 2). Lohnt sich bei vielen kleinen Aufträgen mit gleichen Artikeln, z. B. im Onlinehandel.

**Kommissioniertechniken (Informationsweitergabe)**

| Technik | So funktioniert es | Vorteil | Nachteil |
|---|---|---|---|
| **Pickliste** (Pick by Paper) | Ausgedruckte Liste mit Lagerplatz, Artikel, Menge | billig | fehleranfällig, keine Echtzeitbuchung |
| **Scanner / MDE** (Pick by Scan) | Mobiles Datenerfassungsgerät zeigt den Auftrag; Platz und Artikel werden gescannt | Kontrolle durch Scan, Buchung in Echtzeit | Gerät in der Hand |
| **Pick by Voice** | Headset gibt Anweisungen, Mitarbeiter bestätigt per Sprache (z. B. Prüfziffer am Platz) | Hände und Augen frei | Lärm, Eingewöhnung |
| **Pick by Light** | Lämpchen am Fach leuchtet und zeigt die Menge; Entnahme wird per Taste quittiert | sehr schnell, wenig Fehler | teuer, nur für feste Fachplätze mit vielen Zugriffen |

# 5. Warenausgang

Kontrolle der kommissionierten Ware (Menge, Artikel, ggf. Gewicht), Verpacken und **Ladungssicherung**, Kennzeichnen (Versandetikett, ggf. Gefahrgutkennzeichnung), Erstellen der Papiere (Lieferschein, Packliste, Frachtbrief), Bereitstellen in der Versandzone nach Tour, Verladen, **Ausbuchen im LVS**.

# 6. Das Lagerverwaltungssystem (LVS)

Ein LVS (englisch WMS – Warehouse Management System) ist die Software, die das Lager steuert:

- Bestandsführung je Lagerplatz, Artikel, Charge, MHD und **je Einlagerer** (Mandant)
- Lagerplatzvergabe und Einlagerungsvorschlag
- Steuerung der Auslagerung nach FIFO/FEFO
- Erstellen von Kommissionieraufträgen und Steuerung von Scannern, Pick-by-Voice- oder Pick-by-Light-Anlagen
- Schnittstellen zum Kunden (Avis, Bestandsmeldung) und zur Abrechnung (Lagergeld, Handling)
- Grundlage für die **permanente Inventur** und für Kennzahlen

# 7. Lagerpapiere

| Papier | Aussteller | Zweck | Wertpapier? |
|---|---|---|---|
| **Lieferschein** | Lieferant/Versender | begleitet die Ware, listet Artikel und Mengen; Grundlage der Wareneingangskontrolle | nein |
| **Einlagerungsbestätigung** (Einlagerungsschein) | Lagerhalter | bestätigt den Empfang und die Einlagerung (Beweisurkunde) | nein |
| **Lagerschein** (§ 475c HGB) | Lagerhalter, freiwillig | verbrieft die Pflicht des Lagerhalters zur Auslieferung; muss unterzeichnet sein, auch elektronisch möglich | ja |
| **Namenslagerschein** | Lagerhalter | lautet auf eine bestimmte Person; Übertragung durch Abtretung | ja |
| **Orderlagerschein** | Lagerhalter | lautet „an Order“; Übertragung durch **Indossament** (§ 363 Abs. 2 HGB) | ja |

**Rechtswirkungen des Lagerscheins**

- Der Lagerschein begründet die **Vermutung**, dass das Gut so übernommen wurde, wie es im Schein beschrieben ist (§ 475d Abs. 1 HGB).
- Ansprüche aus dem Lagervertrag kann nur geltend machen, wer zum Lagerschein **berechtigt** ist. Bei einem Orderlagerschein ist das z. B. der Besitzer, der durch eine **lückenlose Kette von Indossamenten** ausgewiesen ist (§ 475d Abs. 3 HGB).
- **Traditionswirkung** (§ 475g HGB): Die Übergabe des Lagerscheins an den Berechtigten wirkt für den Erwerb von Rechten am Gut wie die Übergabe des Gutes selbst. So kann Ware **verkauft oder verpfändet** werden, ohne dass sie das Lager verlässt.

# 8. Inventur im Lager

Das eingelagerte Gut gehört dem **Einlagerer**. Er muss es in seinem eigenen Inventar erfassen und braucht dafür die Bestände vom Lagerhalter. Bei der Spedition selbst erscheint das Kundengut **nicht** im Inventar (siehe Einheit „Inventur, Inventar und Bilanz“).

- **Stichtagsinventur:** alle Plätze werden an einem Stichtag gezählt; Lagerbewegungen ruhen dafür meist.
- **Permanente Inventur:** Bestände kommen laufend aus dem LVS; jeder Platz wird mindestens einmal im Jahr körperlich geprüft (§ 241 Abs. 2 HGB). Eine verbreitete Form ist die **Nulldurchgangs-Kontrolle**: Wird ein Platz bei der Kommissionierung leer, bestätigt der Mitarbeiter „Platz leer“ – dann ist der Bestand dort gezählt (null).
- **Stichprobeninventur** mit anerkannten statistischen Verfahren (§ 241 Abs. 1 HGB).
- **Inventurdifferenz:** Unterschied zwischen Soll-Bestand (LVS) und Ist-Bestand (gezählt). Ursachen: Buchungsfehler, Fehlkommissionierung, Diebstahl, Bruch. Differenzen müssen aufgeklärt werden, weil der Lagerhalter für fehlendes Gut haften kann (Haftung siehe Einheit „Lagerfunktionen, Lagerarten und Lagervertrag“).

# 9. Lagerkennzahlen

| Kennzahl | Formel | Aussage |
|---|---|---|
| **Durchschnittlicher Lagerbestand** | (Anfangsbestand + Endbestand) ÷ 2 **oder genauer** (Jahresanfangsbestand + 12 Monatsendbestände) ÷ 13 | wie viel im Mittel gelagert ist (in Stück, Paletten oder €) |
| **Umschlagshäufigkeit** | Lagerabgang (Verbrauch) im Jahr ÷ durchschnittlicher Lagerbestand | wie oft der Bestand im Jahr komplett „ausgetauscht“ wird |
| **Durchschnittliche Lagerdauer** | 360 Tage ÷ Umschlagshäufigkeit | wie viele Tage ein Gut im Mittel im Lager liegt |
| **Lagerreichweite** | aktueller Bestand ÷ durchschnittlicher Verbrauch je Zeiteinheit (Tag, Woche) | wie lange der Bestand ohne Nachschub reicht |
| **Flächennutzungsgrad** | genutzte Lagerfläche ÷ gesamte Lagerfläche × 100 | Anteil der Fläche, auf dem tatsächlich gelagert wird (Rest: Gänge, Rampen, Büros) |
| **Raumnutzungsgrad** | genutztes Lagervolumen ÷ gesamtes Hallenvolumen × 100 | wie gut auch die Höhe ausgenutzt wird |

**Deutung:** Eine **hohe Umschlagshäufigkeit** bedeutet kurze Lagerdauer, wenig gebundenes Kapital beim Einlagerer und viele Lagerbewegungen (Handling) beim Lagerhalter. Für den Lagerhalter ist deshalb nicht nur das Lagergeld, sondern auch die Zahl der Ein- und Auslagerungen wichtig (siehe Einheit „Lagerkosten, Angebot und Abrechnung“). Eine **zu kurze Reichweite** droht zu Lieferengpässen zu führen, eine sehr lange Reichweite bindet Lagerplätze.`,
  terms: [
    { term: 'Avis', def: 'Vorabmeldung einer Anlieferung oder Abholung mit Menge, Artikeln und Zeitfenster, damit das Lager Rampe und Personal planen kann.' },
    { term: 'Kommissionierung', def: 'Zusammenstellen von Teilmengen aus dem Lagersortiment nach einem Kundenauftrag.' },
    { term: 'Mann-zur-Ware', def: 'Kommissionierprinzip mit statischer Bereitstellung: Der Kommissionierer geht oder fährt zum Lagerplatz.' },
    { term: 'Ware-zum-Mann', def: 'Kommissionierprinzip mit dynamischer Bereitstellung: Fördertechnik bringt die Ware zum Kommissionierplatz.' },
    { term: 'Zweistufige Kommissionierung', def: 'Mehrere Aufträge werden gebündelt: erst artikelweise Sammelentnahme, dann Verteilung auf die einzelnen Aufträge.' },
    { term: 'Pick by Voice', def: 'Kommissionieren mit Sprachanweisungen über ein Headset; der Mitarbeiter bestätigt per Sprache, hat Hände und Augen frei.' },
    { term: 'Pick by Light', def: 'Lichtsignal am Lagerfach zeigt Entnahmeplatz und Menge an; die Entnahme wird per Taste bestätigt.' },
    { term: 'FEFO', def: 'First expired – first out: Ware mit dem frühesten Haltbarkeitsdatum wird zuerst ausgelagert.' },
    { term: 'Lagerverwaltungssystem (LVS)', def: 'Software zur Steuerung des Lagers: Bestände je Platz und Einlagerer, Platzvergabe, Kommissionierung, Inventur, Abrechnungsdaten.' },
    { term: 'Einlagerungsbestätigung', def: 'Bescheinigung des Lagerhalters über Empfang und Einlagerung des Gutes; Beweisurkunde, kein Wertpapier.' },
    { term: 'Orderlagerschein', def: 'An Order lautender Lagerschein; kann durch Indossament übertragen werden (§ 363 Abs. 2 HGB) und hat Traditionswirkung (§ 475g HGB).' },
    { term: 'Umschlagshäufigkeit', def: 'Lagerabgang eines Zeitraums ÷ durchschnittlicher Lagerbestand; zeigt, wie oft der Bestand umgeschlagen wird.' },
    { term: 'Lagerreichweite', def: 'Bestand ÷ durchschnittlicher Verbrauch je Zeiteinheit; zeigt, wie lange der Bestand ohne Nachschub ausreicht.' },
    { term: 'Inventurdifferenz', def: 'Abweichung zwischen Soll-Bestand laut LVS und gezähltem Ist-Bestand.' }
  ],
  example: `# Ein Tag im Kontraktlager der Saarlogistik GmbH, Neunkirchen (Beispiel)

Die Saarlogistik GmbH lagert für die **Bliesgau Getränke GmbH** Mineralwasser und Säfte und beliefert von hier aus Getränkemärkte im Saarland.

**06:00 Uhr – Wareneingang:** Laut Avis kommen 24 Paletten Apfelsaft. Der Lagermitarbeiter zählt nur 23 Paletten, eine weitere ist an der Ecke eingedrückt. Er vermerkt beides auf dem Frachtbrief („1 Pal. fehlt, 1 Pal. Kartons eingedrückt, Foto Nr. 1–3“), lässt den Fahrer gegenzeichnen und informiert die Bliesgau Getränke GmbH per E-Mail.

**06:30 Uhr – Einlagerung:** Jede Palette erhält ein Etikett mit Barcode. Das LVS erfasst Artikel, Charge und **MHD** und schlägt freie Plätze im Palettenregal vor (chaotische Lagerplatzvergabe in der Zone „Getränke“). Der Staplerfahrer scannt Palette und Platz – erst dann gilt die Palette als eingelagert. Die Bliesgau Getränke GmbH erhält eine **Einlagerungsbestätigung** über 23 Paletten.

**09:00 Uhr – Kommissionierung:** 40 Getränkemärkte haben bestellt. Das LVS bildet Touren. Für ganze Paletten fährt der Stapler direkt an den Platz (**FEFO**: Saft mit dem frühesten MHD zuerst). Für Mischpaletten arbeitet ein Kommissionierer mit **Pick by Voice**: „Gang 12, Platz 04 – Prüfziffer?“ – „47“ – „6 Kartons“ – „6“.

**13:00 Uhr – Warenausgang:** Die Mischpaletten werden gewickelt, mit Versandetikett versehen und nach Tour bereitgestellt. Mit dem Verladen bucht das LVS den Bestand aus.

**Monatsende – Kennzahlen:** Für den Artikel „Apfelsaft 1 l“ lag der durchschnittliche Bestand bei 260 Paletten, im Jahr werden 4.680 Paletten ausgeliefert.
- Umschlagshäufigkeit = 4.680 ÷ 260 = **18**
- Durchschnittliche Lagerdauer = 360 ÷ 18 = **20 Tage**

Der Kunde will die Lagerdauer verkürzen, um Kapital freizusetzen. Für die Saarlogistik bedeutet das: weniger belegte Stellplätze, aber mehr Ein- und Auslagerungen.`,
  rules: [
    'Wareneingang: Menge, Identität und äußerlich erkennbare Schäden sofort prüfen und Mängel auf dem Frachtbrief vermerken – später ist der Nachweis kaum möglich.',
    'Chaotische Lagerplatzvergabe spart Fläche, funktioniert aber nur mit einem LVS und konsequentem Scannen jeder Bewegung.',
    'FEFO richtet sich nach dem Haltbarkeitsdatum, FIFO nach dem Einlagerungsdatum.',
    'Mann-zur-Ware = Mitarbeiter läuft; Ware-zum-Mann = Ware kommt zum Mitarbeiter.',
    'Lagerschein (§ 475c HGB) ist ein Wertpapier; die Einlagerungsbestätigung ist nur eine Beweisurkunde.',
    'Orderlagerschein: Übertragung durch Indossament, Übergabe wirkt wie Übergabe des Gutes (Traditionswirkung).',
    'Umschlagshäufigkeit = Abgang ÷ Ø Bestand; Ø Lagerdauer = 360 ÷ Umschlagshäufigkeit.',
    'Lagerreichweite = Bestand ÷ Ø Verbrauch je Zeiteinheit – die Einheit des Ergebnisses ist die Zeiteinheit des Verbrauchs.'
  ],
  summary: `- Lagerprozess: **Wareneingang → Einlagerung → Kommissionierung → Warenausgang**, gesteuert durch das **LVS**.
- Platzvergabe **fest** (einfach, viel Fläche) oder **chaotisch** (flächensparend, EDV-abhängig).
- Auslagerung nach **FIFO**, **LIFO** oder **FEFO** (Haltbarkeit).
- Kommissionierung: **Mann-zur-Ware** oder **Ware-zum-Mann**, **einstufig** oder **zweistufig**; Technik: Pickliste, Scanner, Pick by Voice, Pick by Light.
- Lagerpapiere: **Lieferschein** (Lieferant), **Einlagerungsbestätigung** (Beweis), **Lagerschein** § 475c HGB (Wertpapier), **Orderlagerschein** (Indossament, Traditionswirkung § 475g HGB).
- Inventur im Lager: Kundenbestände zählen, **Inventurdifferenzen** aufklären; permanente Inventur über LVS.
- Kennzahlen: **Ø Bestand**, **Umschlagshäufigkeit**, **Ø Lagerdauer**, **Reichweite**, **Flächen-** und **Raumnutzungsgrad**.`,
  mistakes: [
    { wrong: 'Den Lieferschein unterschreibt man ungeprüft, Schäden meldet man später.', right: 'Menge und äußerlich erkennbare Schäden sofort bei der Annahme prüfen und auf dem Frachtbrief/Ablieferbeleg vermerken; sonst gilt das Gut als ordnungsgemäß übernommen.' },
    { wrong: 'FEFO und FIFO sind dasselbe.', right: 'FIFO richtet sich nach dem Eingangsdatum, FEFO nach dem Ablauf- bzw. Mindesthaltbarkeitsdatum. Eine später gelieferte Charge kann früher ablaufen.' },
    { wrong: 'Die Einlagerungsbestätigung ist ein Wertpapier, mit dem man die Ware verkaufen kann.', right: 'Nur der Lagerschein (insbesondere der Orderlagerschein) ist ein Wertpapier mit Traditionswirkung. Die Einlagerungsbestätigung beweist nur den Empfang.' },
    { wrong: 'Umschlagshäufigkeit = Ø Lagerbestand ÷ Abgang.', right: 'Umgekehrt: Abgang ÷ Ø Lagerbestand. Das Ergebnis ist eine reine Zahl (z. B. 12-mal im Jahr).' },
    { wrong: 'Der Flächennutzungsgrad sollte 100 % betragen.', right: 'Gänge, Rampen, Bereitstellflächen und Sicherheitsabstände sind nötig; 100 % sind unmöglich und wären auch unsicher.' },
    { wrong: 'Bei der chaotischen Lagerplatzvergabe darf der Staplerfahrer die Palette irgendwo abstellen.', right: 'Der Platz wird vom LVS vorgeschlagen oder frei gewählt, aber die Einlagerung muss mit Scan von Palette und Platz gebucht werden.' }
  ],
  flashcards: [
    { q: 'Nenne die vier Hauptprozesse im Lager.', a: 'Wareneingang, Einlagerung, Kommissionierung, Warenausgang.' },
    { q: 'Was wird im Wareneingang mindestens geprüft?', a: 'Identität (richtiger Absender/Artikel), Menge (Anzahl Packstücke) und äußerlich erkennbare Schäden; ggf. MHD, Charge, Temperatur.' },
    { q: 'Was bedeutet FEFO?', a: 'First expired – first out: Ware mit dem frühesten Haltbarkeitsdatum zuerst ausliefern.' },
    { q: 'Unterschied Mann-zur-Ware und Ware-zum-Mann?', a: 'Mann-zur-Ware: Mitarbeiter geht zum Lagerplatz (statisch). Ware-zum-Mann: Ware wird per Fördertechnik zum Arbeitsplatz gebracht (dynamisch).' },
    { q: 'Wann lohnt sich zweistufige Kommissionierung?', a: 'Bei vielen kleinen Aufträgen mit gleichen Artikeln: erst Sammelentnahme je Artikel, dann Verteilung auf Aufträge.' },
    { q: 'Vorteil von Pick by Voice?', a: 'Hände und Augen bleiben frei; Bestätigung über Prüfziffer verringert Fehler.' },
    { q: 'Wie wird ein Orderlagerschein übertragen?', a: 'Durch Indossament (§ 363 Abs. 2 HGB) und Übergabe des Papiers.' },
    { q: 'Was ist die Traditionswirkung (§ 475g HGB)?', a: 'Die Übergabe des Lagerscheins an den Berechtigten wirkt für den Erwerb von Rechten am Gut wie die Übergabe des Gutes selbst.' },
    { q: 'Formel durchschnittlicher Lagerbestand (genau)?', a: '(Jahresanfangsbestand + 12 Monatsendbestände) ÷ 13.' },
    { q: 'Formel durchschnittliche Lagerdauer?', a: '360 Tage ÷ Umschlagshäufigkeit.' },
    { q: 'Formel Lagerreichweite?', a: 'Aktueller Bestand ÷ durchschnittlicher Verbrauch je Zeiteinheit.' },
    { q: 'Was ist eine Nulldurchgangs-Kontrolle?', a: 'Wird ein Lagerplatz leer, bestätigt der Mitarbeiter „Platz leer“; der Bestand null ist damit körperlich geprüft (Form der permanenten Inventur).' }
  ],
  tasks: [
    {
      id: 'lf09-lagerorganisation-a1', type: 'order', difficulty: 1, points: 6,
      q: 'Bringe die Schritte bei der Anlieferung und Einlagerung einer Sendung in die richtige Reihenfolge.',
      items: [
        'Avis der Anlieferung erhalten und Rampe einplanen',
        'Lkw entladen und Lieferschein übernehmen',
        'Menge und Identität mit Lieferschein abgleichen',
        'Äußerlich erkennbare Schäden prüfen und auf dem Frachtbrief vermerken',
        'Wareneingang im LVS buchen und Paletten etikettieren',
        'Palette auf den vorgeschlagenen Platz bringen und Platz scannen'
      ],
      hints: ['Geplant wird vor der Ankunft des Lkw.', 'Gebucht und eingelagert wird erst, wenn die Prüfung abgeschlossen ist.'],
      solution: 'Avis → Entladung/Lieferschein → Mengen- und Identitätsprüfung → Schadensprüfung mit Vermerk → Buchung und Etikettierung im LVS → physische Einlagerung mit Scan des Platzes. Die Prüfungen müssen vor der Freigabe stattfinden, solange der Fahrer noch anwesend ist und gegenzeichnen kann.'
    },
    {
      id: 'lf09-lagerorganisation-a2', type: 'match', difficulty: 1, points: 4,
      q: 'Ordne dem Lagergut das passende Auslagerungsprinzip zu.',
      pairs: [
        ['Joghurt mit unterschiedlichen Mindesthaltbarkeitsdaten', 'FEFO'],
        ['Pflastersteine im Blocklager im Freien', 'LIFO'],
        ['Modische Winterjacken, die nächste Saison veraltet sind', 'FIFO'],
        ['Kfz-Ersatzteile, die zufällig mit freiem Platz eingelagert werden', 'chaotische Lagerplatzvergabe']
      ],
      hints: ['Achte darauf, ob ein Haltbarkeitsdatum eine Rolle spielt.', 'Die letzte Zeile beschreibt kein Auslagerungsprinzip, sondern die Platzvergabe.'],
      solution: 'Joghurt: **FEFO**, weil das Ablaufdatum entscheidet. Pflastersteine: **LIFO**, weil im Block die zuletzt abgestellten Einheiten vorn/oben liegen und Steine nicht altern. Winterjacken: **FIFO**, damit ältere Ware nicht veraltet. Ersatzteile auf beliebigem freien Platz: **chaotische Lagerplatzvergabe**.'
    },
    {
      id: 'lf09-lagerorganisation-a3', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne jede Kommissioniertechnik bzw. jedes Verfahren der passenden Beschreibung zu.',
      pairs: [
        ['Pick by Voice', 'Anweisungen über Headset, Bestätigung per Sprache mit Prüfziffer'],
        ['Pick by Light', 'Lichtsignal am Fach zeigt die Menge, Quittierung per Taste'],
        ['Pick by Scan (MDE)', 'Lagerplatz und Artikel werden mit einem Handscanner erfasst'],
        ['Ware-zum-Mann', 'Ein Shuttle bringt den Behälter zum Kommissionierplatz'],
        ['Zweistufige Kommissionierung', 'Sammelentnahme mehrerer Aufträge, anschließend Verteilung auf die Aufträge']
      ],
      hints: ['Voice = Stimme, Light = Licht, Scan = Barcode.', 'Bei der zweistufigen Kommissionierung wird zweimal „angefasst“.'],
      solution: 'Pick by Voice nutzt Sprache, Pick by Light Lichtsignale, Pick by Scan einen mobilen Scanner. Bei Ware-zum-Mann bewegt die Fördertechnik die Ware. Die zweistufige Kommissionierung trennt Sammelentnahme (Stufe 1) und Verteilung (Stufe 2).'
    },
    {
      id: 'lf09-lagerorganisation-a4', type: 'mc', difficulty: 2, points: 3,
      q: 'Ein Onlinehändler lässt bei der Saarlogistik GmbH täglich 3.000 Aufträge mit durchschnittlich 1,4 Positionen kommissionieren; viele Aufträge enthalten dieselben Bestseller. Welche Aussagen treffen zu? (Mehrfachauswahl)',
      options: [
        'Eine zweistufige (serienorientierte) Kommissionierung kann die Wege deutlich verkürzen.',
        'Bestseller sollten nahe am Warenausgang gelagert werden.',
        'Pick by Paper ist hier am besten geeignet, weil es keine Investition erfordert.',
        'Eine Ware-zum-Mann-Lösung kann bei dieser Menge wirtschaftlich sein.',
        'Bei so vielen Aufträgen ist ein LVS überflüssig.'
      ],
      correct: [0, 1, 3],
      hints: ['Viele kleine Aufträge mit gleichen Artikeln – was lässt sich bündeln?', 'Denke an die Fehlerquote und die Buchung in Echtzeit bei Papierlisten.'],
      solution: 'Richtig: **A** (Sammelentnahme der Bestseller für viele Aufträge, dann Verteilung), **B** (kurze Wege für Schnelldreher, Zonierung nach ABC-Analyse), **D** (hohe, gleichmäßige Leistung rechtfertigt Automatik). Falsch: C – Papierlisten sind fehleranfällig und ermöglichen keine Echtzeitbuchung; E – ohne LVS sind Tausende Aufträge nicht zu steuern.'
    },
    {
      id: 'lf09-lagerorganisation-a5', type: 'cloze', difficulty: 2, points: 5,
      q: 'Ergänze den Text zu den Lagerpapieren.',
      text: 'Die Ware wird vom Lieferanten mit einem [[Lieferschein]] angeliefert. Der Lagerhalter bescheinigt den Empfang mit einer [[Einlagerungsbestätigung]], die nur eine Beweisurkunde ist. Auf Wunsch kann er nach § 475c HGB einen [[Lagerschein]] ausstellen. Lautet dieser an Order, wird er durch [[Indossament]] übertragen. Seine Übergabe wirkt wie die Übergabe des Gutes; das nennt man [[Traditionswirkung]].',
      hints: ['Zwei Papiere sind keine Wertpapiere, eines ist es.', 'Orderpapiere werden durch einen Übertragungsvermerk auf der Rückseite weitergegeben.'],
      solution: 'Lieferschein (begleitet die Ware) → Einlagerungsbestätigung (Beweis) → Lagerschein (§ 475c HGB, Wertpapier) → Orderlagerschein wird durch **Indossament** übertragen (§ 363 Abs. 2 HGB) → **Traditionswirkung** (§ 475g HGB).'
    },
    {
      id: 'lf09-lagerorganisation-a6', type: 'calc', difficulty: 2, points: 4,
      q: `Für die Bliesgau Getränke GmbH lagert die Saarlogistik GmbH Mineralwasser. Bestände in Paletten (Beispielzahlen):

| Zeitpunkt | Paletten |
|---|---:|
| Anfangsbestand 01.01. | 420 |
| Monatsendbestände Jan.–Dez. | 390, 360, 410, 460, 500, 530, 520, 480, 440, 420, 450, 470 |

Im Jahr wurden **5.400 Paletten** ausgelagert. Berechne den durchschnittlichen Lagerbestand **nach der genauen Formel** mit 13 Werten, die Umschlagshäufigkeit und die durchschnittliche Lagerdauer (360 Tage).`,
      formula: 'Ø Bestand = (AB + 12 Monatsendbestände) ÷ 13; UH = Abgang ÷ Ø Bestand; Ø Lagerdauer = 360 ÷ UH',
      fields: [
        { id: 'ob', label: 'Durchschnittlicher Lagerbestand', unit: 'Paletten', answer: 450, tol: 0.5 },
        { id: 'uh', label: 'Umschlagshäufigkeit', unit: 'mal', answer: 12, tol: 0.01 },
        { id: 'ld', label: 'Durchschnittliche Lagerdauer', unit: 'Tage', answer: 30, tol: 0.1 }
      ],
      hints: ['Addiere zuerst die 12 Monatsendbestände und dann den Anfangsbestand – das sind 13 Werte.', 'Die Umschlagshäufigkeit hat keine Einheit; die Lagerdauer ergibt sich aus 360 Tagen.'],
      solution: `**Summe der Monatsendbestände:** 390 + 360 + 410 + 460 + 500 + 530 + 520 + 480 + 440 + 420 + 450 + 470 = 5.430 Paletten

**Ø Lagerbestand:** (420 + 5.430) ÷ 13 = 5.850 ÷ 13 = **450 Paletten**

**Umschlagshäufigkeit:** 5.400 Paletten ÷ 450 Paletten = **12** (der Bestand wird 12-mal im Jahr umgeschlagen)

**Ø Lagerdauer:** 360 Tage ÷ 12 = **30 Tage**

Zum Vergleich: Die einfache Formel (AB + EB) ÷ 2 = (420 + 470) ÷ 2 = 445 Paletten würde die Schwankungen im Jahr nicht berücksichtigen.`
    },
    {
      id: 'lf09-lagerorganisation-a7', type: 'calc', difficulty: 2, points: 2,
      q: 'Von einem Elektronikartikel liegen am Montag **1.800 Kartons** im Lager. Im letzten Monat wurden an **22 Arbeitstagen** insgesamt **2.640 Kartons** ausgeliefert. Wie viele Arbeitstage reicht der Bestand ohne Nachschub, wenn der Verbrauch gleich bleibt?',
      formula: 'Lagerreichweite = Bestand ÷ Ø Verbrauch je Tag',
      fields: [
        { id: 'tv', label: 'Ø Verbrauch je Arbeitstag', unit: 'Kartons', answer: 120, tol: 0.01 },
        { id: 'rw', label: 'Lagerreichweite', unit: 'Arbeitstage', answer: 15, tol: 0.01 }
      ],
      hints: ['Berechne zuerst den durchschnittlichen Tagesverbrauch.', 'Teile dann den Bestand durch den Tagesverbrauch.'],
      solution: `**Ø Verbrauch je Arbeitstag:** 2.640 Kartons ÷ 22 Tage = **120 Kartons/Tag**

**Lagerreichweite:** 1.800 Kartons ÷ 120 Kartons/Tag = **15 Arbeitstage**

Beträgt die Wiederbeschaffungszeit beim Lieferanten z. B. 10 Arbeitstage, muss spätestens in 5 Arbeitstagen nachbestellt werden.`
    },
    {
      id: 'lf09-lagerorganisation-a8', type: 'calc', difficulty: 2, points: 4,
      q: 'Eine Lagerhalle ist **60 m lang, 40 m breit und 10 m hoch** (Innenmaße). Auf **1.560 m²** stehen Palettenregale, der Rest sind Gänge, Rampen- und Bereitstellflächen. Die Regale sind **7,5 m** hoch nutzbar. Berechne Flächen- und Raumnutzungsgrad.',
      formula: 'Flächennutzungsgrad = genutzte Fläche ÷ Gesamtfläche × 100; Raumnutzungsgrad = genutztes Volumen ÷ Gesamtvolumen × 100',
      fields: [
        { id: 'gf', label: 'Gesamtfläche', unit: 'm²', answer: 2400, tol: 0.01 },
        { id: 'fng', label: 'Flächennutzungsgrad', unit: '%', answer: 65, tol: 0.05 },
        { id: 'gv', label: 'Genutztes Lagervolumen', unit: 'm³', answer: 11700, tol: 0.01 },
        { id: 'rng', label: 'Raumnutzungsgrad', unit: '%', answer: 48.75, tol: 0.05 }
      ],
      hints: ['Gesamtfläche = Länge × Breite; Gesamtvolumen = Gesamtfläche × Hallenhöhe.', 'Genutztes Volumen = Regalfläche × nutzbare Regalhöhe.'],
      solution: `**Gesamtfläche:** 60 m × 40 m = **2.400 m²**

**Flächennutzungsgrad:** 1.560 m² ÷ 2.400 m² × 100 = **65 %**

**Gesamtvolumen:** 2.400 m² × 10 m = 24.000 m³

**Genutztes Lagervolumen:** 1.560 m² × 7,5 m = **11.700 m³**

**Raumnutzungsgrad:** 11.700 m³ ÷ 24.000 m³ × 100 = **48,75 %**

Deutung: Knapp die Hälfte des Hallenraums wird genutzt. Höhere Regale oder schmalere Gänge (z. B. mit Schmalgangstaplern) könnten den Wert verbessern.`
    },
    {
      id: 'lf09-lagerorganisation-a9', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Bliesgau Getränke GmbH verkauft 200 bei der Saarlogistik eingelagerte Paletten an einen Großhändler in Trier. Die Saarlogistik hat einen **Orderlagerschein** ausgestellt. Wie kann der Großhändler die Rechte an der Ware erwerben, ohne dass die Paletten bewegt werden?',
      options: [
        'Die Saarlogistik stellt eine neue Einlagerungsbestätigung auf den Großhändler aus.',
        'Die Bliesgau Getränke GmbH indossiert den Orderlagerschein auf den Großhändler und übergibt ihn.',
        'Der Großhändler legt der Saarlogistik den Kaufvertrag vor.',
        'Das ist nicht möglich; die Ware muss physisch übergeben werden.'
      ],
      correct: [1],
      hints: ['Welches Papier ist durch Indossament übertragbar?', 'Denke an die Traditionswirkung.'],
      solution: 'Richtig ist **B**: Der Orderlagerschein wird durch **Indossament** übertragen (§ 363 Abs. 2 HGB). Die Übergabe des Scheins wirkt für den Erwerb von Rechten am Gut wie die Übergabe der Ware selbst (**Traditionswirkung**, § 475g HGB). Der Großhändler ist dann durch die Indossamentenkette legitimiert (§ 475d Abs. 3 HGB) und kann die Auslieferung verlangen. Eine Einlagerungsbestätigung oder der Kaufvertrag haben diese Wirkung nicht.'
    },
    {
      id: 'lf09-lagerorganisation-a10', type: 'text', difficulty: 2, points: 4,
      q: 'Die Saarlogistik GmbH stellt ihr Lager von Papierlisten und festen Lagerplätzen auf ein Lagerverwaltungssystem mit chaotischer Lagerplatzvergabe um. Erkläre **vier Aufgaben**, die das LVS übernehmen muss, und nenne **ein Risiko** der Umstellung.',
      model: 'Das LVS führt den Bestand je Lagerplatz, Artikel, Charge und MHD sowie getrennt je Einlagerer (Mandant). Es vergibt freie Lagerplätze und schlägt sie bei der Einlagerung vor. Es steuert die Auslagerung nach FIFO oder FEFO und erzeugt Kommissionieraufträge für Scanner oder Pick by Voice. Es liefert die Daten für die permanente Inventur, Kennzahlen und die Abrechnung von Lagergeld und Handling. Risiko: Fällt das System aus oder werden Bewegungen nicht gescannt, findet man die Ware nicht mehr, weil es keine festen Plätze gibt.',
      criteria: [
        { text: 'nennt Bestandsführung je Platz/Artikel/Einlagerer', keywords: ['Bestand', 'Platz|Mandant|Einlagerer|Charge'], points: 1 },
        { text: 'nennt Lagerplatzvergabe/Einlagerungsvorschlag', keywords: ['Lagerpl|Platzverg|vorschl|freie'], points: 1 },
        { text: 'nennt Steuerung der Kommissionierung oder FIFO/FEFO oder Inventur/Abrechnung', keywords: ['Kommission|FIFO|FEFO|Inventur|Abrechnung|Kennzahl'], points: 1 },
        { text: 'nennt Risiko Systemausfall oder Buchungsdisziplin', keywords: ['Ausfall|fällt|nicht gescannt|findet|Abhängig'], points: 1 }
      ],
      hints: ['Denke an alle vier Lagerprozesse: Was muss die Software dort jeweils wissen oder steuern?', 'Was passiert bei chaotischer Lagerung, wenn die Daten falsch sind?'],
      solution: 'Aufgaben des LVS: **Bestandsführung** (je Platz, Artikel, Charge, MHD und Einlagerer), **Lagerplatzvergabe**, **Steuerung der Auslagerung** (FIFO/FEFO) und **Kommissionierung**, **Inventur, Kennzahlen und Abrechnungsdaten**. Risiko: hohe **Abhängigkeit von der EDV** – bei Ausfall oder fehlenden Scans ist die Ware ohne feste Plätze nicht auffindbar. Gegenmaßnahmen: Notfallkonzept, Schulung, Scan-Pflicht bei jeder Bewegung.'
    },
    {
      id: 'lf09-lagerorganisation-a11', type: 'mc', difficulty: 2, points: 3,
      q: 'Die Saarlogistik GmbH führt für ihre Kunden eine **permanente Inventur** mit Nulldurchgangs-Kontrolle durch. Welche Aussagen sind richtig? (Mehrfachauswahl)',
      options: [
        'Jeder Lagerplatz muss trotzdem mindestens einmal im Jahr körperlich geprüft werden.',
        'Wird ein Platz bei der Entnahme leer, bestätigt der Mitarbeiter den Bestand null; der Platz gilt damit als gezählt.',
        'Die eingelagerten Kundengüter werden im Inventar der Saarlogistik GmbH als Vorräte erfasst.',
        'Inventurdifferenzen zwischen LVS-Bestand und Zählung müssen aufgeklärt und dem Einlagerer gemeldet werden.',
        'Bei permanenter Inventur sind Buchungsfehler ausgeschlossen.'
      ],
      correct: [0, 1, 3],
      hints: ['Was verlangt § 241 Abs. 2 HGB bei der permanenten Inventur?', 'Wem gehören die eingelagerten Güter?'],
      solution: 'Richtig: **A** (körperliche Prüfung mindestens einmal jährlich, § 241 Abs. 2 HGB), **B** (Nulldurchgang als einfache Zählung), **D** (Differenzen sind aufzuklären, denn der Lagerhalter kann für Fehlmengen haften). Falsch: C – Kundengut ist fremdes Eigentum und gehört ins Inventar des Einlagerers; E – gerade weil Buchungsfehler vorkommen, wird körperlich geprüft.'
    },
    {
      id: 'lf09-lagerorganisation-a12', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Wareneingang und Auslagerung bei der Saarlogistik GmbH',
      intro: `Am Dienstag um 06:10 Uhr liefert ein Frachtführer für die Bliesgau Getränke GmbH Apfelsaft an. Laut Lieferschein und Avis sind es **24 Paletten**. Auf dem Lkw stehen **23 Paletten**; bei einer davon sind die unteren Kartons eingedrückt und feucht. Der Fahrer drängt, weil er noch eine weitere Tour hat.

Im Lager stehen bereits Paletten desselben Artikels aus einer älteren Anlieferung mit dem MHD 30.06., die neue Lieferung hat jedoch das MHD 15.05. (Beispieldaten).

Für den Artikel lag der durchschnittliche Bestand im letzten Jahr bei **260 Paletten**, ausgeliefert wurden **4.680 Paletten**.`,
      hints: ['Was muss vor der Abfahrt des Fahrers dokumentiert werden?', 'Achte bei der Auslagerung auf das Haltbarkeitsdatum, nicht auf das Eingangsdatum.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf09-lagerorganisation-a12-1', type: 'mc', difficulty: 2, points: 3,
          q: 'Wie verhält sich der Lagermitarbeiter richtig? (Mehrfachauswahl)',
          options: [
            'Fehlmenge und Schaden auf dem Frachtbrief/Ablieferbeleg vermerken und vom Fahrer gegenzeichnen lassen.',
            'Den Schaden fotografieren und die Bliesgau Getränke GmbH unverzüglich informieren.',
            'Alle 24 Paletten im LVS buchen, damit die Einlagerungsbestätigung zum Lieferschein passt.',
            'Die Annahme ohne Vermerk quittieren, weil der Fahrer es eilig hat.',
            'Die beschädigte Palette gesperrt einlagern, bis der Einlagerer entscheidet.'
          ],
          correct: [0, 1, 4],
          hints: ['Der Lagerhalter muss die Ansprüche des Einlagerers gegen den Frachtführer sichern.', 'Gebucht wird, was tatsächlich angekommen ist.'],
          solution: 'Richtig: **A**, **B**, **E**. Der Lagerhalter muss bei beschädigt angeliefertem Gut die Ersatzansprüche des Einlagerers sichern und ihn unverzüglich benachrichtigen (§ 470 HGB). Dafür sind Vermerk mit Gegenzeichnung und Fotos nötig. Die beschädigte Palette wird gesperrt, damit sie nicht ausgeliefert wird. Falsch: C – gebucht und bestätigt werden nur 23 Paletten; D – ohne Vermerk gilt die Sendung als vollständig und unbeschädigt übernommen.'
        },
        {
          id: 'lf09-lagerorganisation-a12-2', type: 'mc', difficulty: 2, points: 1,
          q: 'Ein Getränkemarkt bestellt 10 Paletten Apfelsaft. Welche Paletten sollen ausgeliefert werden?',
          options: [
            'Die älteren Paletten (MHD 30.06.), weil sie zuerst eingelagert wurden (FIFO).',
            'Die neuen Paletten (MHD 15.05.), weil sie zuerst ablaufen (FEFO).',
            'Die Paletten, die am nächsten am Warenausgang stehen.',
            'Die zuletzt eingelagerten Paletten, weil sie vorn stehen (LIFO), egal welches MHD.'
          ],
          correct: [1],
          hints: ['Welche Ware muss zuerst verkauft werden, damit sie nicht abläuft?', 'FIFO und FEFO führen hier zu unterschiedlichen Ergebnissen.'],
          solution: 'Richtig ist **B (FEFO)**: Die neue Lieferung läuft am 15.05. ab, also früher als die ältere Ware (30.06.). Nach FIFO würde man die ältere Ware ausliefern und riskieren, dass die neue Ware abläuft. Das LVS muss dafür das MHD beim Wareneingang erfassen.'
        },
        {
          id: 'lf09-lagerorganisation-a12-3', type: 'calc', difficulty: 2, points: 4,
          q: 'Berechne für den Artikel Apfelsaft die Umschlagshäufigkeit und die durchschnittliche Lagerdauer (360 Tage). Der Einlagerer will die Lagerdauer auf 15 Tage senken. Wie hoch wäre dann der durchschnittliche Bestand bei gleichem Absatz?',
          formula: 'UH = Abgang ÷ Ø Bestand; Ø Lagerdauer = 360 ÷ UH; Ø Bestand neu = Abgang ÷ UH neu',
          fields: [
            { id: 'uh', label: 'Umschlagshäufigkeit', unit: 'mal', answer: 18, tol: 0.01 },
            { id: 'ld', label: 'Durchschnittliche Lagerdauer', unit: 'Tage', answer: 20, tol: 0.1 },
            { id: 'uhn', label: 'Umschlagshäufigkeit bei 15 Tagen', unit: 'mal', answer: 24, tol: 0.01 },
            { id: 'obn', label: 'Neuer Ø Bestand', unit: 'Paletten', answer: 195, tol: 0.5 }
          ],
          hints: ['Die neue Umschlagshäufigkeit ergibt sich aus 360 ÷ neue Lagerdauer.', 'Neuer Ø Bestand = Abgang ÷ neue Umschlagshäufigkeit.'],
          solution: `**Umschlagshäufigkeit:** 4.680 Paletten ÷ 260 Paletten = **18**

**Ø Lagerdauer:** 360 Tage ÷ 18 = **20 Tage**

**Neue Umschlagshäufigkeit:** 360 Tage ÷ 15 Tage = **24**

**Neuer Ø Bestand:** 4.680 Paletten ÷ 24 = **195 Paletten**

Für die Saarlogistik bedeutet das 65 belegte Stellplätze weniger (260 − 195), also weniger Lagergeld, aber bei gleichem Absatz häufigere, kleinere Anlieferungen.`
        }
      ]
    }
  ],
  quiz: ['lf09-lagerorganisation-a2', 'lf09-lagerorganisation-a3', 'lf09-lagerorganisation-a6', 'lf09-lagerorganisation-a9', 'lf09-lagerorganisation-a12'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 9, Inhalte: Lagerorganisation, Lagerpapiere, Lagerkennzahlen' },
    { title: 'Handelsgesetzbuch § 475c Lagerschein', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__475c.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 475d Wirkung des Lagerscheins. Legitimation', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__475d.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 475g Traditionswirkung des Lagerscheins', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__475g.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 363 (Orderpapiere, Übertragung durch Indossament)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__363.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 470 Empfang des Gutes', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__470.html', asOf: '2026' },
    { title: 'Handelsgesetzbuch § 241 Inventurvereinfachungsverfahren', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__241.html', asOf: '2026' }
  ],
  links: ['lf09-lager-grundlagen', 'lf09-foerdermittel', 'lf09-lagerkosten', 'lf03-inventur-bilanz']
};
