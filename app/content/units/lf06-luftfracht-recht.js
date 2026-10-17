export default {
  id: 'lf06-luftfracht-recht',
  area: 'LF06',
  topic: 'lf06-frachtrecht',
  title: 'Luftfrachtrecht und Luftfrachtpapiere',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026-10',
    note: 'Montrealer Übereinkommen (MÜ) 1999: Haftungshöchstbetrag für Güter 26 Sonderziehungsrechte (SZR) je kg nach Art. 22 Abs. 3 in der seit 28.12.2024 geltenden Fassung (vorher 22 SZR, ursprünglich 17 SZR); laut Art. 24 werden die Beträge alle fünf Jahre überprüft. Luftsicherheit (sichere Lieferkette) nach VO (EG) Nr. 300/2008 und DVO (EU) 2015/1998, Zulassung durch das Luftfahrt-Bundesamt (LBA): Zulassung als bekannter Versender längstens fünf Jahre; in Deutschland seit 01.04.2016 keine Benennung „geschäftlicher Versender“. Ab spätestens 01.01.2027 darf sicherheitskontrollierte Luftfracht im Straßenvorlauf innerhalb der EU nur von zugelassenen Transporteuren befördert werden. Geprüft am 17.10.2026 (ICAO, Schweizer Amtstext SR 0.748.411, LBA). Der Eurowert eines SZR ändert sich täglich; alle Kurse hier sind Beispielwerte.'
  },
  goals: [
    'Ich kann entscheiden, wann das Montrealer Übereinkommen und wann das HGB für eine Luftbeförderung gilt.',
    'Ich kann die Haftung des Luftfrachtführers für Güterschäden und Verspätung erklären und die Haftungsgrenze von 26 SZR je kg berechnen.',
    'Ich kann die Beteiligten der Luftfracht (Airline, IATA-Agent, Luftfrachtspediteur/Consolidator) und ihre Rollen unterscheiden.',
    'Ich kann Aufbau, Funktionen und Ausfertigungen des Luftfrachtbriefs (Air Waybill) beschreiben und MAWB und HAWB unterscheiden.',
    'Ich kann Direktverkehr und Sammelladung (Consolidation) in der Luftfracht vergleichen.',
    'Ich kann die sichere Lieferkette mit bekanntem Versender und reglementiertem Beauftragten erklären.'
  ],
  simple: `> **Annahme:** Deine Schule behandelt in LF 6 die Luftfracht. Falls es bei dir ein anderer Verkehrsträger ist, sag Bescheid.

# Worum geht es?

Luftfracht ist schnell und sicher, aber teuer. Sie lohnt sich für eilige, wertvolle oder empfindliche Güter: Ersatzteile für eine stehende Produktionsanlage, Medikamente, Elektronik, Mode.

# Welches Recht gilt?

- **International** (z. B. Frankfurt → Chicago): das **Montrealer Übereinkommen (MÜ)** von 1999.
- **Innerdeutsch** (z. B. Saarbrücken → Berlin): das **HGB** (Frachtrecht ab § 407).
- Das ältere **Warschauer Abkommen** spielt nur noch eine Rolle, wenn ein beteiligter Staat das MÜ nicht ratifiziert hat.

# Haftung in einem Satz

Die Airline haftet für Verlust, Zerstörung und Beschädigung der Güter, solange sie in ihrer Obhut sind, auch ohne Verschulden, aber höchstens mit **26 Sonderziehungsrechten (SZR) je Kilogramm** (Stand seit 28.12.2024).

# Wer macht was?

- **Airline (Luftfrachtführer):** fliegt die Ware.
- **IATA-Agent:** von der IATA zugelassener Agent, der für Airlines Sendungen annimmt und Luftfrachtbriefe ausstellt.
- **Luftfrachtspediteur/Consolidator:** sammelt Sendungen vieler Versender und gibt sie als eine **Sammelladung** bei der Airline auf.

# Das wichtigste Papier

Der **Luftfrachtbrief (Air Waybill, AWB)**. Bei Sammelladungen gibt es zwei Ebenen: den **Master-AWB** (Spediteur ↔ Airline) und je Versender einen **House-AWB** (Versender ↔ Spediteur).

# Sicherheit

Jede Sendung muss vor dem Verladen „sicher“ sein. Das ist sie, wenn sie von einem **bekannten Versender** kommt oder von einem **reglementierten Beauftragten** kontrolliert wurde (z. B. durchleuchtet).`,
  deep: `# 1. Anwendungsbereich des Montrealer Übereinkommens (Art. 1 MÜ)

Das MÜ gilt für jede **internationale Beförderung** von Personen, Reisegepäck oder **Gütern** mit Luftfahrzeugen **gegen Entgelt**.

International ist eine Beförderung, wenn nach dem Vertrag

- **Abgangsort und Bestimmungsort in zwei verschiedenen Vertragsstaaten** liegen oder
- beide Orte in **einem** Vertragsstaat liegen, aber eine **Zwischenlandung in einem anderen Staat** vereinbart ist (auch in einem Nichtvertragsstaat).

Ein reiner Inlandsflug ohne Zwischenlandung im Ausland fällt nicht unter das MÜ. In Deutschland gilt dann das **HGB** (§§ 407 ff.) mit 8,33 SZR je kg.

Das MÜ geht nach Art. 55 dem **Warschauer Abkommen** von 1929 und seinen Änderungsprotokollen (z. B. Haager Protokoll 1955) vor, wenn beide Staaten Vertragsstaaten des MÜ sind.

| Merkmal | Warschauer Abkommen (WA) | Montrealer Übereinkommen (MÜ) |
|---|---|---|
| Jahr | 1929 (mehrfach geändert) | 1999, in Kraft seit 2003 |
| Bedeutung heute | nur noch im Verhältnis zu Staaten ohne MÜ | Regelfall im internationalen Luftverkehr |
| Haftungsgrenze Güter | ursprünglich in Goldfranken festgelegt | 26 SZR je kg (seit 28.12.2024) |

# 2. Haftung des Luftfrachtführers für Güter

**Güterschaden (Art. 18 MÜ):** Der Luftfrachtführer haftet für **Zerstörung, Verlust oder Beschädigung**, wenn das schädigende Ereignis während der **Luftbeförderung** eingetreten ist. Das ist der gesamte Zeitraum, in dem die Güter in seiner **Obhut** sind, also auch in der Lagerhalle am Flughafen. Die Haftung ist **verschuldensunabhängig**.

**Entlastungsgründe (Art. 18 Abs. 2 MÜ)** – der Luftfrachtführer muss beweisen, dass der Schaden verursacht wurde durch:

1. die **Eigenart der Güter** oder einen ihnen innewohnenden Mangel,
2. **mangelhafte Verpackung** durch eine andere Person als den Luftfrachtführer oder seine Leute,
3. eine **Kriegshandlung** oder einen bewaffneten Konflikt,
4. **hoheitliches Handeln** im Zusammenhang mit Ein-, Aus- oder Durchfuhr (z. B. Beschlagnahme durch den Zoll).

**Vor- und Nachlauf (Art. 18 Abs. 4 MÜ):** Ein Lkw-Transport außerhalb des Flughafens ist grundsätzlich keine Luftbeförderung. Dient er aber dem Verladen, der Ablieferung oder dem Umladen im Rahmen des Luftfrachtvertrags, wird bis zum Gegenbeweis vermutet, dass der Schaden während der Luftbeförderung entstand. Ersetzt die Airline den Flug ohne Zustimmung des Absenders durch einen Lkw (Trucking), gilt auch diese Strecke als Luftbeförderung.

**Verspätung (Art. 19 MÜ):** Der Luftfrachtführer haftet für Verspätungsschäden, außer er weist nach, dass er und seine Leute alle zumutbaren Maßnahmen ergriffen haben oder dies unmöglich war. (Hier gibt es also eine Entlastungsmöglichkeit, anders als beim Güterschaden.)

# 3. Haftungshöchstbetrag (Art. 22 MÜ)

| Regel | Inhalt |
|---|---|
| Höchstbetrag | **26 SZR je kg** (Art. 22 Abs. 3, Stand seit 28.12.2024; vorher 22 SZR, ursprünglich 17 SZR) |
| maßgebliches Gewicht | Gewicht der **betroffenen Frachtstücke**; mindert der Schaden den Wert weiterer Stücke desselben Luftfrachtbriefs, zählt deren Gewicht mit (Art. 22 Abs. 4) |
| Wertangabe | Gibt der Absender bei Übergabe ein **Interesse an der Lieferung** an (Wertdeklaration, „Declared Value for Carriage“) und zahlt einen Zuschlag, haftet der Luftfrachtführer bis zum angegebenen Betrag |
| Durchbrechung | Die Haftungsdurchbrechung bei Vorsatz oder Leichtfertigkeit (Art. 22 Abs. 5) nennt nur Personen und Gepäck (Abs. 1 und 2), **nicht Güter**. Die Grenze für Güter gilt daher grundsätzlich auch bei grobem Verschulden. |
| Überprüfung | Die Beträge werden alle fünf Jahre überprüft (Art. 24) |

**Rechenweg:** Haftungshöchstbetrag = Gewicht (kg) × 26 SZR/kg × SZR-Kurs (€/SZR). Ersetzt wird höchstens der tatsächliche Schaden.

# 4. Fristen

| Frist | Dauer | Vorschrift |
|---|---|---|
| Schadensanzeige bei **Beschädigung** | unverzüglich, spätestens **14 Tage** nach Annahme der Güter | Art. 31 Abs. 2 MÜ |
| Schadensanzeige bei **Verspätung** | spätestens **21 Tage**, nachdem die Güter dem Empfänger zur Verfügung gestellt wurden | Art. 31 Abs. 2 MÜ |
| Klagefrist | **2 Jahre** (Ausschlussfrist) ab Ankunft bzw. planmäßiger Ankunft | Art. 35 MÜ |

Die Anzeige muss schriftlich erfolgen. Wird sie versäumt, ist eine Klage grundsätzlich ausgeschlossen (außer bei Arglist des Luftfrachtführers).

# 5. Beteiligte in der Luftfracht

| Beteiligter | Rolle |
|---|---|
| **Versender (Shipper)** | Absender der Ware |
| **Airline (Luftfrachtführer, Carrier)** | führt den Flug durch; „ausführender Luftfrachtführer“, wenn ein anderer den Vertrag geschlossen hat (Art. 39 MÜ) |
| **IATA-Agent (IATA Cargo Agent)** | von der IATA zugelassener Agent; nimmt im Auftrag der Airline Sendungen an, stellt Luftfrachtbriefe aus, rechnet über das Abrechnungssystem CASS mit den Airlines ab und erhält von ihnen eine Vergütung |
| **Luftfrachtspediteur / Consolidator** | bündelt Sendungen mehrerer Versender zu einer Sammelladung, stellt eigene House-AWBs aus und tritt gegenüber dem Versender wie ein Luftfrachtführer auf („vertraglicher Luftfrachtführer“, Art. 39 MÜ; im deutschen Recht § 460 HGB Sammelladung) |
| **Break-Bulk-Agent (Empfangsspediteur)** | löst die Sammelladung am Zielflughafen auf und verteilt die Einzelsendungen an die Empfänger |
| **Empfänger (Consignee)** | erhält die Sendung |

In der Praxis ist ein Luftfrachtspediteur oft zugleich IATA-Agent.

# 6. Der Luftfrachtbrief (Air Waybill)

**Pflicht und Inhalt (Art. 4 und 5 MÜ):** Für Güter ist ein Luftfrachtbrief auszustellen. Er kann durch eine elektronische Aufzeichnung ersetzt werden (e-AWB). Mindestangaben: **Abgangs- und Bestimmungsort**, ggf. ein Zwischenlandeort und das **Gewicht** der Sendung.

**Ausfertigungen (Art. 7 MÜ):** Der **Absender** stellt den Luftfrachtbrief in **drei Originalausfertigungen** aus:

| Original | Vermerk | unterschrieben von |
|---|---|---|
| 1 | „für den Luftfrachtführer“ | Absender |
| 2 | „für den Empfänger“ (begleitet die Sendung) | Absender und Luftfrachtführer |
| 3 | für den Absender (nach Annahme der Güter ausgehändigt) | Luftfrachtführer |

Auf dem üblichen IATA-Formular kommen weitere **Kopien** hinzu (z. B. für Zielflughafen, Agent, Zoll). Unterschriften dürfen gedruckt oder gestempelt sein.

**Funktionen:**

- **Beweisurkunde** für Abschluss und Bedingungen des Luftfrachtvertrags (Art. 11 MÜ, widerlegbare Vermutung)
- **Übernahmebestätigung** (Empfangsbescheinigung) für die Güter
- **Begleitpapier** mit Behandlungsanweisungen (Handling Information)
- **Frachtrechnung** mit Gewicht, Raten, Kosten und Zahlungsart (prepaid/collect)
- **Versicherungsnachweis**, wenn über die Airline versichert wurde
- Unterlage für die **Zollabfertigung**

Der Luftfrachtbrief ist **kein Wertpapier** und nicht übertragbar („not negotiable“). Wer die Ware erhält, bestimmt nicht der Besitz des Papiers, sondern der Vertrag.

**AWB-Nummer:** 3-stelliges **Airline-Präfix** (Kennziffer der Airline) + 8-stellige laufende Nummer (die letzte Ziffer ist eine Prüfziffer).

# 7. MAWB und HAWB

| | Master Air Waybill (MAWB) | House Air Waybill (HAWB) |
|---|---|---|
| Aussteller | im Namen der Airline (Airline-Formular mit Airline-Präfix) | Luftfrachtspediteur (eigenes Formular) |
| Vertragsverhältnis | Spediteur (als Absender) ↔ Airline | Versender ↔ Spediteur |
| Absender / Empfänger im Papier | Consolidator / Break-Bulk-Agent | tatsächlicher Versender / tatsächlicher Empfänger |
| Anzahl | einer je Sammelladung | einer je Einzelsendung |
| Abrechnung | Airline-Rate für das Gesamtgewicht | Spediteur-Tarif für die Einzelsendung |

Das **Manifest** (Cargo Manifest des Consolidators) listet alle HAWBs auf, die zu einem MAWB gehören.

# 8. Direktverkehr und Sammelladung

**Direktverkehr:** Die Sendung eines Versenders wird mit einem eigenen AWB direkt bei der Airline aufgegeben (oft über einen IATA-Agenten). Versender und Empfänger stehen direkt im AWB. Sinnvoll für große, eilige oder besondere Sendungen (z. B. Gefahrgut, Wertfracht, Charter).

**Sammelladung (Consolidation):** Der Consolidator bündelt viele kleine Sendungen zu einer Sammelladung. Weil Luftfrachtraten mit steigendem Gewicht je kg sinken, kauft er für das Gesamtgewicht eine günstigere Rate ein und verdient an der Differenz zu seinem eigenen Tarif (**Gewichtsspanne**). Der Versender zahlt meist weniger als im Direktverkehr, muss aber Wartezeiten bis zum Abflug der Sammelladung in Kauf nehmen.

# 9. Luftsicherheit und sichere Lieferkette

**Rechtsgrundlagen:** VO (EG) Nr. 300/2008 und Durchführungsverordnung (EU) 2015/1998, in Deutschland umgesetzt durch das Luftfahrt-Bundesamt (LBA) und das Luftsicherheitsgesetz.

Ziel: Keine Fracht darf ins Flugzeug, die nicht vor unbefugtem Zugriff geschützt oder kontrolliert wurde. Dafür gibt es die **sichere Lieferkette**:

| Beteiligter | Aufgabe |
|---|---|
| **Bekannter Versender** (Known Consignor) | vom LBA zugelassenes Unternehmen, das seine eigene Luftfracht ab dem Zeitpunkt, an dem sie als Luftfracht erkennbar ist, vor Zugriff und Manipulation schützt. Seine Sendungen gelten bei Übergabe an einen reglementierten Beauftragten ohne erneute Kontrolle als **sicher**. Zulassung längstens fünf Jahre. |
| **Reglementierter Beauftragter** (Regulated Agent), z. B. Luftfrachtspediteur | vom LBA zugelassen; **kontrolliert Fracht ohne sicheren Status** und macht sie so „sicher“; nimmt sichere Fracht an und hält die Kette aufrecht |
| **Transporteur sicherer Luftfracht** | vom LBA zugelassener Fuhrunternehmer, der sicherheitskontrollierte Fracht auf der Straße befördert (ab spätestens 01.01.2027 Pflicht für Straßenbeförderungen in der EU) |

**Sendungen aus unsicherer Quelle** (z. B. von einem Versender ohne Zulassung) müssen vor dem Verladen vom reglementierten Beauftragten kontrolliert werden. Das kostet Zeit und Geld; unter Umständen muss die Sendung geöffnet werden. Sendungen müssen **manipulationssicher** verpackt oder verplombt sein, das Personal braucht Schulungen und eine **Zuverlässigkeitsüberprüfung** nach § 7 Luftsicherheitsgesetz.

> In Deutschland gibt es seit 01.04.2016 keine Benennung als „geschäftlicher Versender“ (Account Consignor) mehr.`,
  terms: [
    { term: 'Montrealer Übereinkommen (MÜ)', def: 'Internationales Abkommen von 1999 über die Haftung im internationalen Luftverkehr; gilt, wenn Abgangs- und Bestimmungsort in zwei Vertragsstaaten liegen.' },
    { term: 'Warschauer Abkommen (WA)', def: 'Älteres Luftverkehrsabkommen von 1929; heute nur noch im Verhältnis zu Staaten, die das MÜ nicht ratifiziert haben.' },
    { term: 'Sonderziehungsrecht (SZR)', def: 'Rechnungseinheit des Internationalen Währungsfonds; Grundlage der Haftungshöchstbeträge. Der Eurowert ändert sich täglich.' },
    { term: 'Air Waybill (AWB)', def: 'Luftfrachtbrief: Beweisurkunde über den Luftfrachtvertrag, Übernahmebestätigung, Begleitpapier und Frachtrechnung; kein Wertpapier.' },
    { term: 'Master Air Waybill (MAWB)', def: 'Luftfrachtbrief der Airline über eine gesamte Sammelladung; Absender ist der Consolidator.' },
    { term: 'House Air Waybill (HAWB)', def: 'Luftfrachtbrief des Luftfrachtspediteurs über eine Einzelsendung innerhalb einer Sammelladung.' },
    { term: 'Consolidator', def: 'Luftfrachtspediteur, der Sendungen mehrerer Versender zu einer Sammelladung zusammenfasst.' },
    { term: 'Break-Bulk-Agent', def: 'Empfangsspediteur am Zielflughafen, der die Sammelladung auflöst und die Einzelsendungen ausliefert.' },
    { term: 'IATA-Agent', def: 'Von der IATA zugelassener Frachtagent, der im Auftrag von Airlines Sendungen annimmt, AWBs ausstellt und über CASS abrechnet.' },
    { term: 'Bekannter Versender', def: 'Vom LBA zugelassenes Unternehmen, das seine Luftfracht selbst vor Zugriff schützt; seine Sendungen gelten als sicher.' },
    { term: 'Reglementierter Beauftragter', def: 'Vom LBA zugelassenes Unternehmen (oft Luftfrachtspediteur), das Fracht ohne sicheren Status kontrolliert und die sichere Lieferkette aufrechterhält.' },
    { term: 'Wertdeklaration (Declared Value for Carriage)', def: 'Angabe eines höheren Lieferinteresses im AWB gegen Zuschlag; erhöht die Haftung über 26 SZR/kg hinaus.' }
  ],
  example: `# Saar-Air-Logistik GmbH, Saarbrücken (Beispielfirma, Beispielzahlen)

Die Saar-Air-Logistik ist IATA-Agent und reglementierter Beauftragter. Drei Kunden wollen Waren nach Chicago (USA) schicken:

| Versender | Ware | Gewicht | Status |
|---|---|---:|---|
| Röchling-Motorenteile (Beispielname) | Ersatzteile | 180 kg | bekannter Versender |
| Bliesgau Feinmechanik | Messgeräte | 65 kg | kein bekannter Versender |
| Homburger Textil | Musterkollektion | 40 kg | bekannter Versender |

**Ablauf:**

1. Die Sendungen werden per Lkw eines zugelassenen Transporteurs zum Lager in Frankfurt gebracht.
2. Die Sendung von Bliesgau Feinmechanik hat keinen sicheren Status. Sie wird vom reglementierten Beauftragten **durchleuchtet**; die Kontrolle wird dem Kunden berechnet.
3. Saar-Air-Logistik stellt **drei HAWBs** aus (je Versender einer).
4. Alle Sendungen gehen als **eine Sammelladung** (285 kg) mit **einem MAWB** an eine Airline. Absender im MAWB: Saar-Air-Logistik. Empfänger im MAWB: der Break-Bulk-Agent in Chicago.
5. In Chicago löst der Break-Bulk-Agent die Sammelladung auf und liefert an die drei Empfänger aus.

**Schaden:** Ein Karton der Messgeräte (15 kg) kommt beschädigt an. Haftung der Airline höchstens 15 kg × 26 SZR = 390 SZR. Bei einem angenommenen Kurs von 1 SZR = 1,20 € (Beispielwert) sind das 468,00 €. Der Empfänger muss den Schaden **innerhalb von 14 Tagen** schriftlich anzeigen.`,
  rules: [
    'International (zwei Vertragsstaaten) gilt das Montrealer Übereinkommen, innerdeutsch das HGB.',
    'Haftung für Güter nach MÜ: verschuldensunabhängig, höchstens 26 SZR je kg (Stand seit 28.12.2024).',
    'Die 26-SZR-Grenze für Güter fällt nur durch eine Wertdeklaration mit Zuschlag weg, nicht durch grobes Verschulden.',
    'Schadensanzeige: Beschädigung 14 Tage, Verspätung 21 Tage; Klagefrist 2 Jahre.',
    'Luftfrachtbrief: 3 Originale (Luftfrachtführer, Empfänger, Absender); kein Wertpapier.',
    'MAWB = Consolidator ↔ Airline, HAWB = Versender ↔ Consolidator.',
    'Ohne sicheren Status (bekannter Versender) muss Luftfracht vom reglementierten Beauftragten kontrolliert werden.'
  ],
  summary: `- **Recht:** international MÜ, innerdeutsch HGB; WA nur noch in Altfällen.
- **Haftung (Art. 18, 19, 22 MÜ):** Obhutshaftung für Güterschäden, Verspätungshaftung mit Entlastungsmöglichkeit; Grenze **26 SZR/kg** (seit 28.12.2024), maßgeblich ist das Gewicht der betroffenen Stücke; höhere Haftung nur mit Wertdeklaration.
- **Fristen:** Beschädigung 14 Tage, Verspätung 21 Tage, Klage 2 Jahre.
- **Beteiligte:** Versender, Airline, IATA-Agent, Consolidator, Break-Bulk-Agent, Empfänger.
- **AWB:** drei Originale, Beweisurkunde und Frachtrechnung, kein Wertpapier; **MAWB** für die Sammelladung, **HAWB** für jede Einzelsendung.
- **Sicherheit:** bekannter Versender schützt seine Fracht selbst, reglementierter Beauftragter kontrolliert unsichere Fracht; beide vom LBA zugelassen.`,
  mistakes: [
    { wrong: 'Bei Luftfracht gilt immer das Montrealer Übereinkommen.', right: 'Nur bei internationaler Beförderung zwischen Vertragsstaaten. Ein reiner Inlandsflug in Deutschland fällt unter das HGB (8,33 SZR je kg).' },
    { wrong: 'Die Airline haftet mit 8,33 SZR je kg.', right: '8,33 SZR gelten nach HGB und CMR. Nach dem MÜ sind es 26 SZR je kg (seit 28.12.2024; vorher 22 SZR).' },
    { wrong: 'Bei grober Fahrlässigkeit haftet die Airline für Güter unbegrenzt.', right: 'Art. 22 Abs. 5 MÜ gilt nur für Personen und Gepäck. Für Güter bleibt es bei 26 SZR/kg, außer es wurde ein höherer Wert deklariert.' },
    { wrong: 'Der Luftfrachtbrief ist wie das Konnossement ein Wertpapier.', right: 'Der AWB ist nicht übertragbar (not negotiable). Er ist Beweisurkunde, aber kein Wertpapier.' },
    { wrong: 'Im MAWB stehen der echte Versender und der echte Empfänger.', right: 'Im MAWB stehen Consolidator und Break-Bulk-Agent; die echten Versender und Empfänger stehen in den HAWBs.' },
    { wrong: 'Jeder Spediteur darf unkontrollierte Fracht einfach an die Airline weitergeben.', right: 'Fracht ohne sicheren Status muss vom reglementierten Beauftragten kontrolliert werden, bevor sie verladen wird.' }
  ],
  flashcards: [
    { q: 'Wann gilt das Montrealer Übereinkommen?', a: 'Bei internationaler entgeltlicher Luftbeförderung, wenn Abgangs- und Bestimmungsort in zwei Vertragsstaaten liegen (oder Zwischenlandung im Ausland).' },
    { q: 'Wie hoch ist die Haftungsgrenze für Güter nach MÜ?', a: '26 SZR je kg (Art. 22 Abs. 3, seit 28.12.2024; vorher 22 SZR).' },
    { q: 'Nenne die vier Entlastungsgründe nach Art. 18 Abs. 2 MÜ.', a: 'Eigenart/innerer Mangel der Güter, mangelhafte Verpackung durch Dritte, Krieg/bewaffneter Konflikt, hoheitliches Handeln bei Ein-, Aus- oder Durchfuhr.' },
    { q: 'Welche Fristen gelten für die Schadensanzeige?', a: 'Beschädigung: spätestens 14 Tage nach Annahme; Verspätung: spätestens 21 Tage nach Bereitstellung.' },
    { q: 'Wie viele Originale hat der Luftfrachtbrief und für wen?', a: 'Drei: für den Luftfrachtführer, für den Empfänger, für den Absender.' },
    { q: 'Was ist der Unterschied zwischen MAWB und HAWB?', a: 'MAWB: Airline-AWB über die ganze Sammelladung (Consolidator an Airline). HAWB: Spediteur-AWB über eine Einzelsendung (Versender an Consolidator).' },
    { q: 'Wie verdient der Consolidator an der Sammelladung?', a: 'Durch die Gewichtsspanne: Er zahlt der Airline die günstigere Rate für das Gesamtgewicht und berechnet den Versendern seinen eigenen Tarif.' },
    { q: 'Was ist ein bekannter Versender?', a: 'Ein vom LBA zugelassenes Unternehmen, das seine Luftfracht selbst vor Zugriff schützt; seine Sendungen gelten als sicher.' },
    { q: 'Was macht der reglementierte Beauftragte mit Fracht ohne sicheren Status?', a: 'Er kontrolliert sie vor dem Verladen (z. B. Durchleuchtung), notfalls durch Öffnen.' },
    { q: 'Wie lässt sich die Haftung über 26 SZR/kg erhöhen?', a: 'Durch eine Wertdeklaration (Interesse an der Lieferung) im AWB gegen Zuschlag.' },
    { q: 'Ist der Luftfrachtbrief ein Wertpapier?', a: 'Nein, er ist nicht übertragbar (not negotiable), sondern Beweisurkunde.' }
  ],
  tasks: [
    {
      id: 'lf06-luftfracht-recht-a1', type: 'mc', difficulty: 1, points: 1,
      q: 'Eine Sendung fliegt von Frankfurt nach Shanghai. Deutschland und China sind Vertragsstaaten des Montrealer Übereinkommens. Welches Recht gilt für die Haftung des Luftfrachtführers?',
      options: ['HGB (§§ 407 ff.)', 'CMR', 'Montrealer Übereinkommen', 'Warschauer Abkommen'],
      correct: [2],
      hints: ['Liegen Abgangs- und Bestimmungsort im selben Staat?', 'Bei zwei Vertragsstaaten des MÜ geht das MÜ allen älteren Abkommen vor.'],
      solution: '**Montrealer Übereinkommen**: Abgangs- und Bestimmungsort liegen in zwei verschiedenen Vertragsstaaten (Art. 1 Abs. 2 MÜ). Das HGB gilt für innerdeutsche Beförderungen, die CMR für den Straßengüterverkehr, das Warschauer Abkommen wird nach Art. 55 MÜ verdrängt.'
    },
    {
      id: 'lf06-luftfracht-recht-a2', type: 'mc', difficulty: 2, points: 2,
      q: 'In welchen Fällen kann sich der Luftfrachtführer nach Art. 18 Abs. 2 MÜ von der Haftung für einen **Güterschaden** befreien? (Mehrfachauswahl)',
      options: [
        'Frisches Obst verdirbt wegen seiner natürlichen Beschaffenheit.',
        'Der Pilot hat bei der Landung grob fahrlässig gehandelt.',
        'Der Versender hat zerbrechliche Gläser nur in einen dünnen Karton ohne Polsterung gepackt.',
        'Ein Gabelstaplerfahrer der Airline beschädigt eine Palette im Frachtterminal.',
        'Die Zollbehörde des Ziellandes beschlagnahmt und zerstört die Ware.'
      ],
      correct: [0, 2, 4],
      hints: ['Die Haftung ist verschuldensunabhängig – Fehler der eigenen Leute entlasten nicht.', 'Es gibt vier Gründe: Eigenart der Güter, Verpackung durch Dritte, Krieg, hoheitliches Handeln.'],
      solution: 'Entlastung möglich bei **A** (Eigenart der Güter, innerer Verderb), **C** (mangelhafte Verpackung durch den Versender, also nicht durch die Airline) und **E** (hoheitliches Handeln bei der Einfuhr). B und D sind Fehler der Airline bzw. ihrer Leute während der Obhut; dafür haftet sie (bis 26 SZR/kg).'
    },
    {
      id: 'lf06-luftfracht-recht-a3', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken zum Montrealer Übereinkommen.',
      text: 'Der Luftfrachtführer haftet für Güterschäden höchstens mit [[26]] SZR je kg. Eine Beschädigung muss spätestens [[14|vierzehn]] Tage nach Annahme der Güter angezeigt werden, eine Verspätung spätestens [[21|einundzwanzig]] Tage nach Bereitstellung. Die Klagefrist beträgt [[2|zwei]] Jahre. Der Luftfrachtbrief wird in [[3|drei]] Originalen ausgestellt.',
      hints: ['Die Haftungsgrenze wurde zum 28.12.2024 von 22 auf einen höheren Wert angehoben.', 'Fristen: Art. 31 MÜ (Anzeige) und Art. 35 MÜ (Klage); Ausfertigungen: Art. 7 MÜ.'],
      solution: '**26 SZR/kg** (Art. 22 Abs. 3), Beschädigung **14 Tage**, Verspätung **21 Tage** (Art. 31 Abs. 2), Klagefrist **2 Jahre** (Art. 35), Luftfrachtbrief in **3 Originalen** (Art. 7).'
    },
    {
      id: 'lf06-luftfracht-recht-a4', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne den Beteiligten ihre Rolle zu.',
      pairs: [
        ['Airline', 'führt die Luftbeförderung durch'],
        ['IATA-Agent', 'nimmt im Auftrag der Airline Sendungen an und stellt AWBs aus'],
        ['Consolidator', 'bündelt Sendungen mehrerer Versender zu einer Sammelladung'],
        ['Break-Bulk-Agent', 'löst die Sammelladung am Zielflughafen auf'],
        ['Bekannter Versender', 'schützt seine eigene Luftfracht selbst vor unbefugtem Zugriff']
      ],
      hints: ['Consolidation = Zusammenfassen, Break Bulk = Aufteilen.', 'Der bekannte Versender ist ein Begriff aus der Luftsicherheit.'],
      solution: 'Airline = fliegt; IATA-Agent = Annahme und AWB-Ausstellung für die Airline; Consolidator = bildet Sammelladung; Break-Bulk-Agent = löst sie am Ziel auf; bekannter Versender = vom LBA zugelassenes Unternehmen, dessen Fracht als sicher gilt.'
    },
    {
      id: 'lf06-luftfracht-recht-a5', type: 'mc', difficulty: 2, points: 1,
      q: 'Die Saar-Air-Logistik GmbH schickt eine Sammelladung mit fünf Einzelsendungen nach New York. Wer steht im **MAWB** als Absender?',
      options: ['Jeder der fünf Versender', 'Die Saar-Air-Logistik GmbH als Consolidator', 'Die Airline', 'Der Break-Bulk-Agent in New York'],
      correct: [1],
      hints: ['Der MAWB ist der Vertrag zwischen Spediteur und Airline.', 'Die einzelnen Versender stehen in den HAWBs.'],
      solution: 'Im MAWB ist der **Consolidator (Saar-Air-Logistik)** Absender, Empfänger ist der Break-Bulk-Agent. Die fünf tatsächlichen Versender und Empfänger stehen in den fünf HAWBs.'
    },
    {
      id: 'lf06-luftfracht-recht-a6', type: 'calc', difficulty: 2, points: 3,
      q: 'Eine Sendung von 4 Kisten zu je 25 kg fliegt von Frankfurt nach Toronto. Eine Kiste (25 kg) geht verloren, die anderen kommen unversehrt an. Der Warenwert der verlorenen Kiste beträgt 1.500 €. Ein Wert wurde nicht deklariert. Kurs (Beispielwert): 1 SZR = 1,20 €. Berechne den Haftungshöchstbetrag und die Entschädigung.',
      formula: 'Haftungshöchstbetrag = Gewicht der betroffenen Stücke (kg) × 26 SZR/kg × Kurs (€/SZR); Entschädigung = Minimum aus Schaden und Höchstbetrag',
      fields: [
        { id: 'szr', label: 'Haftungshöchstbetrag in SZR', unit: 'SZR', answer: 650, tol: 0.01 },
        { id: 'eur', label: 'Haftungshöchstbetrag in Euro', unit: '€', answer: 780, tol: 0.01 },
        { id: 'ent', label: 'Entschädigung', unit: '€', answer: 780, tol: 0.01 }
      ],
      hints: ['Maßgeblich ist nur das Gewicht der verlorenen Kiste (Art. 22 Abs. 4 MÜ).', 'Ersetzt wird der Schaden, höchstens aber der Höchstbetrag.'],
      solution: `**Formel:** Höchstbetrag = betroffenes Gewicht × 26 SZR/kg × Kurs

**Gewicht:** nur die verlorene Kiste = 25 kg (die anderen Stücke sind nicht betroffen)

**In SZR:** 25 kg × 26 SZR/kg = **650 SZR**

**In Euro:** 650 SZR × 1,20 €/SZR = **780,00 €**

**Entschädigung:** Schaden 1.500 € > Höchstbetrag 780 € → ersetzt werden **780,00 €**. Den Rest trägt der Versender bzw. seine Transportversicherung.`
    },
    {
      id: 'lf06-luftfracht-recht-a7', type: 'order', difficulty: 2, points: 5,
      q: 'Bringe den Ablauf einer Luftfracht-Sammelladung in die richtige Reihenfolge.',
      items: [
        'Versender beauftragen den Luftfrachtspediteur',
        'Spediteur kontrolliert Sendungen ohne sicheren Status und stellt je Sendung einen HAWB aus',
        'Spediteur bildet die Sammelladung und übergibt sie mit einem MAWB an die Airline',
        'Airline fliegt die Sammelladung zum Zielflughafen',
        'Break-Bulk-Agent löst die Sammelladung auf und liefert an die Empfänger aus'
      ],
      hints: ['Erst die Einzelsendungen, dann die Sammelladung.', 'Die Sicherheitskontrolle muss vor dem Verladen erfolgen.'],
      solution: 'Auftrag → Kontrolle und HAWB je Einzelsendung → Sammelladung mit MAWB an Airline → Flug → Auflösung durch den Break-Bulk-Agenten und Zustellung.'
    },
    {
      id: 'lf06-luftfracht-recht-a8', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zum Luftfrachtbrief sind **richtig**? (Mehrfachauswahl)',
      options: [
        'Er dient als Beweis für den Abschluss des Luftfrachtvertrags.',
        'Er ist ein Wertpapier; wer ihn besitzt, kann die Ware herausverlangen.',
        'Er enthält Angaben zur Frachtberechnung und kann als Frachtrechnung dienen.',
        'Das Original für den Empfänger begleitet die Sendung.',
        'Er muss immer auf Papier ausgestellt werden.'
      ],
      correct: [0, 2, 3],
      hints: ['Auf dem AWB steht „not negotiable“.', 'Art. 4 Abs. 2 MÜ erlaubt eine andere Aufzeichnung statt des Papiers.'],
      solution: 'Richtig: **A** (Beweisurkunde, Art. 11 MÜ), **C** (Gewicht, Raten, Kosten – Frachtrechnung) und **D** (Original 2 „für den Empfänger“ reist mit). Falsch: B – der AWB ist kein Wertpapier; E – ein elektronischer AWB (e-AWB) ist zulässig.'
    },
    {
      id: 'lf06-luftfracht-recht-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Ein Kunde fragt, warum er seine 30-kg-Sendung nicht selbst direkt bei der Airline aufgeben, sondern über eure Sammelladung schicken soll. Erkläre Vor- und Nachteile der Sammelladung gegenüber dem Direktverkehr.',
      model: 'Bei der Sammelladung bündelt der Consolidator viele Sendungen. Weil die Airline-Raten mit steigendem Gesamtgewicht je kg sinken, erhält er eine günstigere Rate und kann dem Kunden einen niedrigeren Preis anbieten als im Direktverkehr. Außerdem übernimmt der Spediteur die gesamte Abwicklung mit HAWB, Sicherheitskontrolle und Zustellung. Nachteil ist die mögliche Wartezeit, bis die Sammelladung abfliegt, und dass die Sendung zusätzlich umgeschlagen wird. Für sehr eilige Sendungen ist der Direktverkehr daher besser.',
      criteria: [
        { text: 'nennt den Preisvorteil durch günstigere Rate für das Gesamtgewicht', keywords: ['günstig|billig|niedriger|Preis', 'Gesamtgewicht|Rate|Gewicht'], points: 1 },
        { text: 'nennt die Abwicklung durch den Spediteur', keywords: ['Abwicklung|HAWB|übernimmt|Service'], points: 1 },
        { text: 'nennt einen Nachteil (Wartezeit/Umschlag)', keywords: ['Wartezeit|warten|später|Umschlag|langsamer'], points: 1 }
      ],
      hints: ['Denke an die Ratenstaffel: je mehr Gewicht, desto günstiger je kg.', 'Was passiert, wenn die Sammelladung erst übermorgen abfliegt?'],
      solution: 'Vorteile: **günstigerer Preis** (Consolidator nutzt die niedrigere Rate für das Gesamtgewicht), **Abwicklung aus einer Hand** (HAWB, Sicherheitskontrolle, Zustellung). Nachteile: **Wartezeit** bis zum Abflug der Sammelladung, zusätzlicher Umschlag. Für eilige oder besondere Sendungen eignet sich der Direktverkehr.'
    },
    {
      id: 'lf06-luftfracht-recht-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Neuer Kunde ohne Sicherheitsstatus',
      intro: `Die Saarbrücker Firma Warndt Sensorik GmbH (Beispielname) will erstmals 3 Kartons mit Sensoren (je 12 kg, Warenwert insgesamt 9.000 €) per Luftfracht nach Montreal (Kanada) schicken. Deutschland und Kanada sind Vertragsstaaten des MÜ. Warndt Sensorik ist **kein** bekannter Versender. Du arbeitest bei einem Luftfrachtspediteur, der reglementierter Beauftragter ist. Kurs (Beispielwert): 1 SZR = 1,20 €.`,
      hints: ['Ohne sicheren Status keine Verladung ohne Kontrolle.', 'Für eine höhere Haftung braucht man eine Wertdeklaration.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf06-luftfracht-recht-a10-1', type: 'mc', difficulty: 2, points: 2,
          q: 'Was muss mit der Sendung geschehen, bevor sie ins Flugzeug darf? (Mehrfachauswahl)',
          options: [
            'Sie muss vom reglementierten Beauftragten kontrolliert werden, z. B. durch Durchleuchten.',
            'Sie darf ohne Kontrolle verladen werden, weil der Spediteur reglementierter Beauftragter ist.',
            'Die Kontrolle kann Zeit kosten und dem Kunden berechnet werden.',
            'Warndt Sensorik muss sich vorher als bekannter Versender zulassen lassen, sonst ist der Versand verboten.'
          ],
          correct: [0, 2],
          hints: ['Fracht aus unsicherer Quelle ist nicht verboten, aber kontrollpflichtig.', 'Der Status des Spediteurs ersetzt nicht die Kontrolle der Sendung.'],
          solution: 'Richtig sind A und C. Fracht ohne sicheren Status muss vor dem Verladen vom reglementierten Beauftragten kontrolliert werden (ggf. auch durch Öffnen); der Aufwand kann in Rechnung gestellt werden. Eine Zulassung als bekannter Versender ist nicht Pflicht, sie würde aber künftige Kontrollen ersparen.'
        },
        {
          id: 'lf06-luftfracht-recht-a10-2', type: 'calc', difficulty: 3, points: 3,
          q: 'Alle 3 Kartons werden auf dem Flug zerstört. Berechne den Haftungshöchstbetrag nach MÜ in SZR und in Euro sowie den Betrag, den der Versender selbst trägt, wenn kein Wert deklariert wurde.',
          formula: 'Höchstbetrag = Gewicht × 26 SZR/kg × Kurs; Eigenanteil = Warenwert − Entschädigung',
          fields: [
            { id: 'szr', label: 'Höchstbetrag', unit: 'SZR', answer: 936, tol: 0.01 },
            { id: 'eur', label: 'Höchstbetrag', unit: '€', answer: 1123.2, tol: 0.01 },
            { id: 'rest', label: 'nicht ersetzter Schaden', unit: '€', answer: 7876.8, tol: 0.01 }
          ],
          hints: ['Gewicht: 3 × 12 kg.', 'Der Warenwert (9.000 €) liegt über dem Höchstbetrag.'],
          solution: `**Gewicht:** 3 × 12 kg = 36 kg

**In SZR:** 36 kg × 26 SZR/kg = **936 SZR**

**In Euro:** 936 SZR × 1,20 €/SZR = **1.123,20 €**

**Nicht ersetzter Schaden:** 9.000,00 € − 1.123,20 € = **7.876,80 €**`
        },
        {
          id: 'lf06-luftfracht-recht-a10-3', type: 'text', difficulty: 2, points: 2,
          q: 'Welche zwei Möglichkeiten empfiehlst du dem Kunden, damit er bei einem Totalverlust den vollen Warenwert ersetzt bekommt?',
          model: 'Erstens kann er im Luftfrachtbrief ein Interesse an der Lieferung angeben, also einen Wert deklarieren, und den Zuschlag zahlen; dann haftet die Airline bis zu diesem Wert. Zweitens kann er eine Transportversicherung abschließen, die den Warenwert unabhängig von der Haftungsgrenze ersetzt.',
          criteria: [
            { text: 'nennt Wertdeklaration im AWB gegen Zuschlag', keywords: ['Wert|Interesse|Declared', 'Zuschlag|deklar'], points: 1 },
            { text: 'nennt Transportversicherung', keywords: ['Versicherung'], points: 1 }
          ],
          hints: ['Art. 22 Abs. 3 MÜ nennt eine Ausnahme von der Höchstgrenze.', 'Haftung und Versicherung sind zwei verschiedene Dinge.'],
          solution: '1. **Wertdeklaration** (Interesse an der Lieferung) im AWB gegen Zuschlag (Art. 22 Abs. 3 MÜ). 2. **Transportversicherung** über den vollen Warenwert. Die Versicherung ist oft günstiger und deckt auch Fälle ab, in denen die Airline sich entlasten kann.'
        }
      ]
    },
    {
      id: 'lf06-luftfracht-recht-a11', type: 'mc', difficulty: 3, points: 1,
      q: 'Eine Sendung wird bei der Airline durch grob fahrlässiges Handeln eines Mitarbeiters zerstört. Der Versender hat keinen Wert deklariert. Was gilt nach dem MÜ?',
      options: [
        'Die Airline haftet unbegrenzt, weil grobe Fahrlässigkeit vorliegt.',
        'Die Airline haftet höchstens mit 26 SZR je kg.',
        'Die Airline haftet nicht, weil der Mitarbeiter den Schaden verursacht hat.',
        'Die Airline haftet höchstens mit 8,33 SZR je kg.'
      ],
      correct: [1],
      hints: ['Lies Art. 22 Abs. 5 MÜ genau: Für welche Absätze gilt die Durchbrechung?', 'Abs. 5 nennt nur Abs. 1 (Verspätung von Personen) und Abs. 2 (Gepäck).'],
      solution: '**26 SZR je kg.** Die Durchbrechung der Haftungsgrenze bei Vorsatz oder Leichtfertigkeit (Art. 22 Abs. 5) gilt nur für Personen und Reisegepäck, nicht für Güter. Für Güter gilt die Grenze damit auch bei grobem Verschulden; nur eine Wertdeklaration erhöht sie. 8,33 SZR wäre die HGB-/CMR-Grenze.'
    }
  ],
  quiz: ['lf06-luftfracht-recht-a1', 'lf06-luftfracht-recht-a3', 'lf06-luftfracht-recht-a5', 'lf06-luftfracht-recht-a6', 'lf06-luftfracht-recht-a10'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 6, Inhalte: Frachtrecht, Frachtpapiere, Haftung' },
    { title: 'Übereinkommen zur Vereinheitlichung bestimmter Vorschriften über die Beförderung im internationalen Luftverkehr (Montrealer Übereinkommen), amtlicher deutscher Text (Schweiz, SR 0.748.411, mit Änderung der Haftungshöchstbeträge vom 16.10.2024)', publisher: 'Schweizerische Eidgenossenschaft (fedlex), Abschrift über ffac.ch', url: 'https://ffac.ch/wp-content/uploads/2024/12/Montrealer-Uebereinkommen-SR-0.748.411-Stand-2026.04.07.pdf', asOf: '2026-04' },
    { title: 'International air travel liability limits set to increase (Revision der Haftungshöchstbeträge zum 28.12.2024)', publisher: 'ICAO', url: 'https://icao.int/Newsroom/Pages/International-air-travel-liability-limits-set-to-increase,-enhancing-customer-compensation--.aspx', asOf: '2024-12' },
    { title: 'Montrealer Übereinkommen, Art. 7 (Luftfrachtbrief), österreichische Fassung BGBl. III Nr. 131/2004', publisher: 'RIS – Bundeskanzleramt Österreich', url: 'https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40057243/NOR40057243.pdf', asOf: '2026' },
    { title: 'Sichere Lieferkette Deutschland', publisher: 'Luftfahrt-Bundesamt (LBA)', url: 'https://www.lba.de/DE/Luftsicherheit/SichereLieferkette_DE/SichereLieferkette_DE_node.html', asOf: '2026-10' },
    { title: 'Bekannte Versender – Zulassungsvoraussetzungen', publisher: 'Luftfahrt-Bundesamt (LBA)', url: 'https://www.lba.de/DE/Luftsicherheit/SichereLieferkette_DE/BekannteVersender/Zulassungsvoraussetzungen/Zulassungsvoraussetzungen.html', asOf: '2026-10' },
    { title: 'Transporteure sicherer Luftfracht – Fragen und Antworten', publisher: 'Luftfahrt-Bundesamt (LBA)', url: 'https://www.lba.de/DE/Luftsicherheit/SichereLieferkette_DE/Transporteure/FAQ/FAQ_node.html', asOf: '2026-10' },
    { title: 'Handelsgesetzbuch § 460 Sammelladung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/hgb/__460.html', asOf: '2026' }
  ],
  links: ['lf06-luftfracht-berechnung', 'lf06-luftfracht-gefahrgut', 'lf04-frachtvertrag-haftung']
};
