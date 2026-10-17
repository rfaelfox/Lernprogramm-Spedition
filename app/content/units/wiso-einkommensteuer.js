export default {
  id: 'wiso-einkommensteuer',
  area: 'WISO',
  topic: 'wiso-w5-einkommen',
  title: 'Einkommensteuer, Vermögensbildung und Haushaltsplan',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Werte für das Kalenderjahr 2026: Grundfreibetrag 12.348 € (§ 32a Abs. 1 Nr. 1 EStG), Arbeitnehmer-Pauschbetrag 1.230 € (§ 9a EStG), Sonderausgaben-Pauschbetrag 36 € (§ 10c EStG), Entfernungspauschale 0,38 € je vollem Entfernungskilometer ab dem ersten Kilometer (§ 9 Abs. 1 Satz 3 Nr. 4 EStG); Gesetzestexte geprüft auf gesetze-im-internet.de im Oktober 2026. Arbeitnehmer-Sparzulage: 9 % auf höchstens 470 € (Bausparen), 20 % auf höchstens 400 € (Vermögensbeteiligungen), Einkommensgrenze seit 2024 zu versteuerndes Einkommen 40.000 € bzw. 80.000 € bei Zusammenveranlagung (Service-Portal Berlin, abgerufen 2026). Für 2027 liegt ein Regierungsentwurf zur Einkommensteuer vor (BMF, August 2026); Werte können sich ab 2027 ändern.'
  },
  goals: [
    'Ich kann die sieben Einkunftsarten nennen und meine Ausbildungsvergütung zuordnen.',
    'Ich kann das vereinfachte Schema vom Bruttoarbeitslohn zum zu versteuernden Einkommen anwenden.',
    'Ich kann Werbungskosten und Sonderausgaben unterscheiden und Beispiele nennen.',
    'Ich kann berechnen, ob meine Werbungskosten über dem Arbeitnehmer-Pauschbetrag liegen.',
    'Ich kann begründen, warum sich eine Steuererklärung für Auszubildende oft lohnt.',
    'Ich kann beschreiben, wie ich die Steuererklärung mit ELSTER abgebe.',
    'Ich kann die Arbeitnehmer-Sparzulage für vermögenswirksame Leistungen berechnen.',
    'Ich kann einen monatlichen Haushaltsplan aufstellen und auswerten.'
  ],
  simple: `# Lohnsteuer ist nur eine Vorauszahlung

Der Arbeitgeber zieht jeden Monat **Lohnsteuer** ab (siehe Einheit „Entgeltabrechnung“). Sie ist eine **Vorauszahlung** auf die **Einkommensteuer** für das ganze Jahr. Erst mit der **Einkommensteuererklärung** rechnet das Finanzamt genau ab – und zahlt zu viel gezahlte Steuer **zurück**.

# Warum sich das für Azubis lohnt

- Bis zum **Grundfreibetrag** (2026: **12.348 €** zu versteuerndes Einkommen im Jahr) zahlt man **keine** Einkommensteuer.
- Wer im **August oder September** mit der Ausbildung beginnt, hat im ersten Jahr nur wenige Monate Einkommen. Die Lohnsteuer wird aber so berechnet, als würde man das ganze Jahr so viel verdienen.
- Kosten für die Ausbildung (z. B. Fahrten, Fachbücher) mindern die Steuer, wenn sie zusammen über **1.230 €** (Arbeitnehmer-Pauschbetrag) liegen.

Ergebnis: Viele Azubis bekommen die **gesamte Lohnsteuer zurück**. Die Erklärung ist freiwillig und **bis zu 4 Jahre rückwirkend** möglich – kostenlos über **ELSTER** (elster.de).

# Werbungskosten oder Sonderausgaben?

| | Werbungskosten | Sonderausgaben |
|---|---|---|
| Was? | Kosten, um Einnahmen zu **erzielen** – also für Arbeit und Ausbildung | bestimmte **private** Ausgaben, die der Staat begünstigt |
| Beispiele | Fahrten zur Arbeit, Fachbücher, Taschenrechner, Arbeitskleidung, Gewerkschaftsbeitrag, Bewerbungskosten | Beiträge zur Kranken-, Pflege- und Rentenversicherung, Kirchensteuer, Spenden |
| Pauschale | 1.230 € | 36 € |

# Sparen mit Unterstützung

**Vermögenswirksame Leistungen (VL)** fließen in einen Sparvertrag. Bei kleinem Einkommen gibt der Staat die **Arbeitnehmer-Sparzulage** dazu – aber nur, wenn du eine Steuererklärung abgibst.

# Haushaltsplan

Ein **Haushaltsplan** stellt Einnahmen und Ausgaben eines Monats gegenüber. So siehst du, wie viel du sparen kannst – oder wo du kürzen musst.`,
  deep: `# Die sieben Einkunftsarten (§ 2 Abs. 1 EStG)

| Nr. | Einkunftsart | Beispiel | Art |
|---|---|---|---|
| 1 | Land- und Forstwirtschaft | Landwirt | Gewinneinkunft |
| 2 | Gewerbebetrieb | Inhaber einer Spedition (e.K.) | Gewinneinkunft |
| 3 | selbständige Arbeit | Steuerberaterin, Ärztin | Gewinneinkunft |
| 4 | **nichtselbständige Arbeit** | **Ausbildungsvergütung, Gehalt** | Überschusseinkunft |
| 5 | Kapitalvermögen | Zinsen, Dividenden | Überschusseinkunft |
| 6 | Vermietung und Verpachtung | Mieteinnahmen | Überschusseinkunft |
| 7 | sonstige Einkünfte (§ 22) | Renten | Überschusseinkunft |

Bei Überschusseinkünften gilt: **Einkünfte = Einnahmen − Werbungskosten**.

# Vereinfachtes Berechnungsschema für Arbeitnehmer

| Schritt | |
|---|---|
| Bruttoarbeitslohn (laut Lohnsteuerbescheinigung) | |
| − Werbungskosten (mindestens Arbeitnehmer-Pauschbetrag 1.230 €) | |
| = Einkünfte aus nichtselbständiger Arbeit (+ weitere Einkünfte) | = Summe der Einkünfte |
| − Sonderausgaben (mindestens 36 €, v. a. Vorsorgeaufwendungen) | |
| − außergewöhnliche Belastungen (z. B. hohe Krankheitskosten) | |
| = Einkommen | |
| − ggf. Freibeträge (z. B. für Kinder) | |
| = **zu versteuerndes Einkommen (zvE)** | |

Auf das **zvE** wird der **Einkommensteuertarif** (§ 32a EStG) angewendet: bis zum **Grundfreibetrag** (2026: 12.348 €) 0 €, darüber steigt der Steuersatz an (**Progression**). Die festgesetzte Einkommensteuer wird mit der bereits gezahlten Lohnsteuer verrechnet: **Erstattung = einbehaltene Lohnsteuer − festgesetzte Einkommensteuer** (entsprechend auch Soli und Kirchensteuer).

# Werbungskosten für Auszubildende

- **Fahrten zwischen Wohnung und Ausbildungsbetrieb:** Entfernungspauschale **0,38 € je vollem Entfernungskilometer** (einfache Strecke) und Arbeitstag, egal mit welchem Verkehrsmittel (Stand 2026; Höchstbetrag 4.500 € gilt nicht bei eigenem Pkw).
- **Fahrten zur Berufsschule** sind ebenfalls Werbungskosten; wie sie berechnet werden, steht in der Anleitung zur Anlage N.
- **Arbeitsmittel:** Fachliteratur, Taschenrechner, Schreibmaterial, Sicherheitsschuhe für das Lager.
- **Beiträge zu Berufsverbänden:** Gewerkschaftsbeitrag.
- **Bewerbungskosten**, Kosten für Fortbildungen.

Liegen die Werbungskosten **unter 1.230 €**, zieht das Finanzamt automatisch den Pauschbetrag ab – Belege lohnen sich also erst, wenn man darüber kommt.

# Wann muss, wann kann man eine Erklärung abgeben?

- **Pflichtveranlagung** z. B. bei mehreren gleichzeitigen Arbeitsverhältnissen (Steuerklasse VI), bei Steuerklassenkombination III/V oder bei Bezug bestimmter Lohnersatzleistungen (z. B. Krankengeld, Kurzarbeitergeld). Abgabefrist ohne Steuerberater grundsätzlich **31. Juli** des Folgejahres.
- **Antragsveranlagung** (freiwillig): typischer Fall bei Auszubildenden mit nur einem Arbeitsverhältnis. Sie ist **bis zu 4 Jahre rückwirkend** möglich – die Erklärung für 2026 also bis Ende 2030.

# ELSTER – Schritt für Schritt

1. Auf **elster.de** registrieren (Mein ELSTER); Aktivierungsdaten kommen per E-Mail und **Brief** – das dauert einige Tage.
2. Mit der Zertifikatsdatei und dem Passwort anmelden.
3. Formular „Einkommensteuererklärung“ wählen; Daten der **Lohnsteuerbescheinigung** (vom Arbeitgeber elektronisch übermittelt) über den **Belegabruf** übernehmen.
4. **Anlage N** (Werbungskosten), **Anlage Vorsorgeaufwand**, ggf. **Anlage VL**-Angaben ausfüllen.
5. Prüfen und elektronisch **absenden**; einige Wochen später kommt der **Steuerbescheid**.
6. Bescheid prüfen – gegen Fehler ist innerhalb **eines Monats** Einspruch möglich.

# Vermögensbildung

**Vermögenswirksame Leistungen (VL)** werden vom Arbeitgeber direkt auf einen begünstigten Vertrag überwiesen (Abrechnung: Einheit „Entgeltabrechnung“). Die **Arbeitnehmer-Sparzulage** (5. Vermögensbildungsgesetz) gibt es, wenn das **zvE höchstens 40.000 €** (Zusammenveranlagung 80.000 €) beträgt (seit 2024):

| Anlageform | begünstigter Höchstbetrag pro Jahr | Zulage | maximale Zulage |
|---|---:|---:|---:|
| Bausparvertrag, Wohnungsbau | 470 € | 9 % | 42,30 € |
| Vermögensbeteiligungen (z. B. Aktienfondssparplan) | 400 € | 20 % | 80,00 € |

Beide Förderungen können nebeneinander genutzt werden. Die Zulage wird über die **Einkommensteuererklärung** beantragt; der Anbieter übermittelt die nötigen Daten elektronisch. Ohne Erklärung gibt es keine Zulage.

Weitere Bausteine: **Sparerpauschbetrag** (Kapitalerträge bis 1.000 € im Jahr sind steuerfrei, mit Freistellungsauftrag bei der Bank), Notgroschen auf dem Tagesgeldkonto (etwa drei Monatsausgaben als Faustregel).

# Haushaltsplan

| Einnahmen | Ausgaben |
|---|---|
| Nettoausbildungsvergütung, Nebenjob, Unterhalt, ggf. Berufsausbildungsbeihilfe | **Fixkosten**: Miete, Strom, Handy, Monatsticket, Versicherungen, Abos |
| | **variable Kosten**: Lebensmittel, Kleidung, Freizeit |

**Überschuss (Sparbetrag) = Einnahmen − Ausgaben**; **Sparquote = Überschuss ÷ Einnahmen × 100**. Bei einem Defizit zuerst variable Kosten prüfen, dann Verträge (Abos, Handy) kündigen oder wechseln.`,
  terms: [
    { term: 'Einkommensteuer', def: 'Steuer auf das zu versteuernde Einkommen einer natürlichen Person im Kalenderjahr; bei Arbeitnehmern wird sie durch die Lohnsteuer vorausbezahlt.' },
    { term: 'Einkunftsarten', def: 'Die sieben Arten von Einkünften nach § 2 EStG; die Ausbildungsvergütung gehört zu den Einkünften aus nichtselbständiger Arbeit.' },
    { term: 'Werbungskosten', def: 'Aufwendungen zur Erwerbung, Sicherung und Erhaltung der Einnahmen, z. B. Fahrtkosten, Fachbücher, Gewerkschaftsbeitrag.' },
    { term: 'Arbeitnehmer-Pauschbetrag', def: 'Pauschale für Werbungskosten bei Einkünften aus nichtselbständiger Arbeit: 1.230 € im Jahr (§ 9a EStG), wenn keine höheren Kosten nachgewiesen werden.' },
    { term: 'Entfernungspauschale', def: 'Pauschale für Fahrten zwischen Wohnung und erster Tätigkeitsstätte: 0,38 € je vollem Entfernungskilometer (einfache Strecke) und Arbeitstag (Stand 2026).' },
    { term: 'Sonderausgaben', def: 'Bestimmte private Ausgaben, die steuerlich abziehbar sind, z. B. Vorsorgeaufwendungen, Kirchensteuer, Spenden; Pauschbetrag 36 €.' },
    { term: 'Grundfreibetrag', def: 'Teil des zu versteuernden Einkommens, der steuerfrei bleibt, um das Existenzminimum zu sichern; 2026: 12.348 € (§ 32a EStG).' },
    { term: 'Zu versteuerndes Einkommen', def: 'Bemessungsgrundlage der Einkommensteuer: Summe der Einkünfte minus Sonderausgaben, außergewöhnliche Belastungen und Freibeträge.' },
    { term: 'Antragsveranlagung', def: 'Freiwillige Einkommensteuererklärung, z. B. um zu viel gezahlte Lohnsteuer zurückzubekommen; bis zu 4 Jahre rückwirkend möglich.' },
    { term: 'ELSTER', def: 'Elektronische Steuererklärung der Finanzverwaltung (elster.de); kostenlos, mit Belegabruf der Lohnsteuerbescheinigung.' },
    { term: 'Arbeitnehmer-Sparzulage', def: 'Staatliche Zulage auf vermögenswirksame Leistungen: 9 % (Bausparen, bis 470 €) bzw. 20 % (Beteiligungen, bis 400 €), wenn das zvE höchstens 40.000 € beträgt.' },
    { term: 'Haushaltsplan', def: 'Gegenüberstellung der geplanten monatlichen Einnahmen und Ausgaben, um Überschuss oder Fehlbetrag zu erkennen.' }
  ],
  example: `# Praxisbeispiel: Steuererklärung von Jonas, Auszubildender bei der Saarlog Spedition GmbH (Bezugsjahr 2026)

Jonas (18, ledig, konfessionslos) beginnt am **1. August 2026** seine Ausbildung. Er verdient monatlich **1.300 €** brutto. Vorher war er Schüler ohne Einkommen.

**Lohnsteuerbescheinigung 2026:** Bruttoarbeitslohn 5 × 1.300 € = **6.500 €**, einbehaltene Lohnsteuer **145,00 €** (**Beispielwert**).

**Werbungskosten:**
- Fahrten zum Betrieb: 12 km × 0,38 € × 95 Arbeitstage = **433,20 €**
- Fachbuch Spedition und Logistik, Taschenrechner: **64,00 €**
- Summe **497,20 €** → liegt unter 1.230 € → das Finanzamt setzt den **Arbeitnehmer-Pauschbetrag von 1.230 €** an.

**Vereinfachte Berechnung:**

| | € |
|---|---:|
| Bruttoarbeitslohn | 6.500,00 |
| − Arbeitnehmer-Pauschbetrag | 1.230,00 |
| = Einkünfte aus nichtselbständiger Arbeit | 5.270,00 |
| − Sonderausgaben (Vorsorgeaufwendungen, **Beispielwert**) | 1.150,00 |
| = zu versteuerndes Einkommen | 4.120,00 |

4.120 € liegen weit unter dem Grundfreibetrag von 12.348 € → Einkommensteuer **0 €**.

**Erstattung:** 145,00 € − 0 € = **145,00 €**. Jonas reicht die Erklärung im Frühjahr 2027 über ELSTER ein und hätte dafür bis Ende 2030 Zeit.

**Sparzulage:** Jonas spart 40 € VL im Monat in einen Bausparvertrag (480 € im Jahr, davon 200 € in den fünf Monaten 2026). Mit der Erklärung beantragt er die Arbeitnehmer-Sparzulage: 9 % von 200 € = **18,00 €**.`,
  rules: [
    'Lohnsteuer ist nur eine Vorauszahlung; abgerechnet wird mit der Einkommensteuererklärung.',
    'Bis zum Grundfreibetrag (2026: 12.348 € zvE) fällt keine Einkommensteuer an.',
    'Werbungskosten zählen erst, wenn sie zusammen über 1.230 € liegen – sonst gilt der Pauschbetrag.',
    'Werbungskosten hängen mit Arbeit oder Ausbildung zusammen; Sonderausgaben sind begünstigte private Ausgaben.',
    'Azubis mit nur einem Arbeitsverhältnis können freiwillig bis zu 4 Jahre rückwirkend eine Erklärung abgeben.',
    'Die Arbeitnehmer-Sparzulage gibt es nur mit Steuererklärung und bis 40.000 € zvE (Ledige).',
    'Haushaltsplan: Einnahmen − Ausgaben = Überschuss; Fixkosten zuerst planen.'
  ],
  summary: `- **Sieben Einkunftsarten**; Ausbildungsvergütung = nichtselbständige Arbeit (Überschusseinkunft).
- **Schema:** Brutto − Werbungskosten (mind. 1.230 €) − Sonderausgaben (mind. 36 €) − ag. Belastungen = **zvE**.
- **Grundfreibetrag 2026:** 12.348 €; darüber Progression.
- **Werbungskosten:** Entfernungspauschale 0,38 €/km ab dem ersten Kilometer, Arbeitsmittel, Gewerkschaftsbeitrag, Bewerbungskosten.
- **Erklärung lohnt sich für Azubis:** Ausbildungsbeginn im Jahr, niedriges Jahreseinkommen → Lohnsteuer oft komplett zurück; freiwillig, 4 Jahre rückwirkend; über **ELSTER**.
- **Arbeitnehmer-Sparzulage:** 9 % auf max. 470 € (Bausparen), 20 % auf max. 400 € (Beteiligungen); zvE bis 40.000 €/80.000 €.
- **Haushaltsplan:** Fixkosten + variable Kosten; Überschuss und Sparquote berechnen.`,
  mistakes: [
    { wrong: 'Als Azubi muss ich keine Steuererklärung machen, also bringt sie nichts.', right: 'Sie ist oft freiwillig, lohnt sich aber häufig: Zu viel gezahlte Lohnsteuer wird erstattet, und die Arbeitnehmer-Sparzulage gibt es nur mit Erklärung.' },
    { wrong: 'Ich kann zusätzlich zum Pauschbetrag von 1.230 € noch meine Fahrtkosten abziehen.', right: 'Der Pauschbetrag ersetzt die Werbungskosten. Entweder gilt die Pauschale oder die höheren tatsächlichen Werbungskosten – nicht beides.' },
    { wrong: 'Die Entfernungspauschale gilt für Hin- und Rückweg.', right: 'Sie wird nur für die einfache Entfernung zwischen Wohnung und Tätigkeitsstätte angesetzt (0,38 € je vollem Kilometer, Stand 2026).' },
    { wrong: 'Krankenversicherungsbeiträge sind Werbungskosten.', right: 'Beiträge zur Kranken-, Pflege- und Rentenversicherung sind Vorsorgeaufwendungen und gehören zu den Sonderausgaben.' },
    { wrong: 'Der Grundfreibetrag bezieht sich auf das Bruttogehalt.', right: 'Er bezieht sich auf das zu versteuernde Einkommen, also nach Abzug von Werbungskosten, Sonderausgaben usw.' },
    { wrong: 'Wenn ich 50 € VL im Monat in einen Bausparvertrag zahle, bekomme ich auf 600 € Sparzulage.', right: 'Begünstigt sind beim Bausparen höchstens 470 € im Jahr; die Zulage beträgt höchstens 9 % davon = 42,30 €.' }
  ],
  flashcards: [
    { q: 'Zu welcher Einkunftsart gehört die Ausbildungsvergütung?', a: 'Zu den Einkünften aus nichtselbständiger Arbeit (§ 2 Abs. 1 Nr. 4 EStG).' },
    { q: 'Wie hoch ist der Arbeitnehmer-Pauschbetrag?', a: '1.230 € im Jahr (§ 9a EStG, Stand 2026).' },
    { q: 'Wie hoch ist der Grundfreibetrag 2026?', a: '12.348 € zu versteuerndes Einkommen (§ 32a EStG).' },
    { q: 'Wie hoch ist die Entfernungspauschale 2026?', a: '0,38 € je vollem Entfernungskilometer der einfachen Strecke ab dem ersten Kilometer.' },
    { q: 'Nenne drei Werbungskosten eines Azubis.', a: 'z. B. Fahrten zum Betrieb und zur Berufsschule, Fachbücher/Taschenrechner, Gewerkschaftsbeitrag, Bewerbungskosten.' },
    { q: 'Nenne zwei Sonderausgaben.', a: 'z. B. Beiträge zur Kranken-, Pflege- und Rentenversicherung, Kirchensteuer, Spenden.' },
    { q: 'Wie weit rückwirkend kann ein Azubi eine freiwillige Steuererklärung abgeben?', a: 'Bis zu 4 Jahre (z. B. für 2026 bis Ende 2030).' },
    { q: 'Was ist ELSTER?', a: 'Das kostenlose Online-Portal der Finanzverwaltung für die elektronische Steuererklärung (elster.de).' },
    { q: 'Wie hoch ist die Arbeitnehmer-Sparzulage beim Bausparen?', a: '9 % auf höchstens 470 € im Jahr, also höchstens 42,30 €.' },
    { q: 'Wie hoch ist die Arbeitnehmer-Sparzulage bei Vermögensbeteiligungen?', a: '20 % auf höchstens 400 € im Jahr, also höchstens 80 €.' },
    { q: 'Einkommensgrenze für die Arbeitnehmer-Sparzulage?', a: 'Zu versteuerndes Einkommen höchstens 40.000 € (Ledige) bzw. 80.000 € (Zusammenveranlagung), seit 2024.' },
    { q: 'Wie berechnet man die Sparquote?', a: 'Überschuss ÷ Einnahmen × 100.' }
  ],
  tasks: [
    {
      id: 'wiso-einkommensteuer-a1', type: 'mc', difficulty: 1, points: 3,
      q: 'Welche der folgenden Einkünfte gehören zu den **sieben Einkunftsarten** des Einkommensteuergesetzes? (Mehrfachauswahl)',
      options: [
        'Einkünfte aus nichtselbständiger Arbeit',
        'Einkünfte aus Gewerbebetrieb',
        'Einkünfte aus Kindergeld',
        'Einkünfte aus Vermietung und Verpachtung',
        'Einkünfte aus Lottogewinnen'
      ],
      correct: [0, 1, 3],
      hints: ['§ 2 Abs. 1 EStG zählt sieben Arten auf.', 'Kindergeld und Lottogewinne sind keine Einkünfte im Sinne des EStG.'],
      solution: 'Richtig sind A, B und D. Die sieben Einkunftsarten: Land- und Forstwirtschaft, Gewerbebetrieb, selbständige Arbeit, **nichtselbständige Arbeit**, Kapitalvermögen, **Vermietung und Verpachtung**, sonstige Einkünfte. Kindergeld ist eine Steuervergütung; Lottogewinne fallen unter keine Einkunftsart und sind einkommensteuerfrei.'
    },
    {
      id: 'wiso-einkommensteuer-a2', type: 'match', difficulty: 2, points: 5,
      q: 'Die Auszubildende Aylin sortiert ihre Belege. Ordne jede Ausgabe richtig zu.',
      pairs: [
        ['Fachbuch „Spedition und Logistik“', 'Werbungskosten: Arbeitsmittel'],
        ['Gewerkschaftsbeitrag', 'Werbungskosten: Beitrag zu einem Berufsverband'],
        ['Beitrag zur Krankenversicherung (Arbeitnehmeranteil)', 'Sonderausgaben: Vorsorgeaufwendungen'],
        ['Spende an das Deutsche Rote Kreuz', 'Sonderausgaben: Spenden'],
        ['Kino und Restaurant am Wochenende', 'nicht absetzbar: private Lebensführung']
      ],
      hints: ['Hat die Ausgabe mit der Ausbildung zu tun? Dann Werbungskosten.', 'Vorsorge und Spenden sind begünstigte private Ausgaben.'],
      solution: '**Werbungskosten:** Fachbuch (Arbeitsmittel, § 9 Abs. 1 Nr. 6 EStG), Gewerkschaftsbeitrag (Berufsverband, § 9 Abs. 1 Nr. 3 EStG). **Sonderausgaben:** KV-Beitrag (Vorsorgeaufwendungen), Spende. **Nicht absetzbar:** Kino und Restaurant gehören zur privaten Lebensführung.'
    },
    {
      id: 'wiso-einkommensteuer-a3', type: 'calc', difficulty: 2, points: 4,
      q: `Der Auszubildende Luca (Saarlog Spedition GmbH) hatte 2026 folgende Ausgaben:

- Fahrten zum Ausbildungsbetrieb: einfache Entfernung **15 km**, **210 Arbeitstage**
- Arbeitsmittel (Fachbücher, Taschenrechner, Sicherheitsschuhe): **85 €**
- Gewerkschaftsbeitrag: **8 € pro Monat**

Berechne die Fahrtkosten, die gesamten Werbungskosten und den Betrag, um den sie den Arbeitnehmer-Pauschbetrag übersteigen.`,
      formula: 'Fahrtkosten = km × 0,38 €/km × Arbeitstage; Mehrbetrag = Werbungskosten − 1.230 €',
      fields: [
        { id: 'fahrt', label: 'Fahrtkosten (Entfernungspauschale)', unit: '€', answer: 1197, tol: 0.01 },
        { id: 'wk', label: 'Werbungskosten gesamt', unit: '€', answer: 1378, tol: 0.01 },
        { id: 'mehr', label: 'Betrag über dem Arbeitnehmer-Pauschbetrag', unit: '€', answer: 148, tol: 0.01 }
      ],
      hints: ['Nur die einfache Strecke zählt.', 'Gewerkschaftsbeitrag: 12 Monate × 8 €.'],
      solution: `**Fahrtkosten:** 15 km × 0,38 €/km × 210 Tage = **1.197,00 €**

**Gewerkschaft:** 12 × 8 € = 96,00 €

**Werbungskosten gesamt:** 1.197,00 € + 85,00 € + 96,00 € = **1.378,00 €**

**Mehrbetrag:** 1.378,00 € − 1.230,00 € = **148,00 €**

Luca sollte seine tatsächlichen Werbungskosten angeben: Sie mindern sein Einkommen um 148 € mehr als die Pauschale.`
    },
    {
      id: 'wiso-einkommensteuer-a4', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken (Werte 2026).',
      text: 'Die Lohnsteuer ist eine [[Vorauszahlung]] auf die Einkommensteuer. Bis zum Grundfreibetrag von [[12.348|12348]] € zu versteuerndem Einkommen fällt keine Einkommensteuer an. Der Arbeitnehmer-Pauschbetrag beträgt [[1.230|1230]] €, der Sonderausgaben-Pauschbetrag [[36]] €. Die Steuererklärung kann man kostenlos online über [[ELSTER]] abgeben.',
      hints: ['§ 32a, § 9a und § 10c EStG.', 'Das Portal der Finanzverwaltung heißt wie ein Vogel.'],
      solution: 'Lohnsteuer = **Vorauszahlung**; Grundfreibetrag 2026 **12.348 €** (§ 32a EStG); Arbeitnehmer-Pauschbetrag **1.230 €** (§ 9a EStG); Sonderausgaben-Pauschbetrag **36 €** (§ 10c EStG); Portal **ELSTER**.'
    },
    {
      id: 'wiso-einkommensteuer-a5', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Schritte zur ersten Steuererklärung mit ELSTER in die richtige Reihenfolge.',
      items: [
        'Auf elster.de registrieren',
        'Aktivierungsdaten per Brief und E-Mail erhalten, Zertifikat herunterladen',
        'Einkommensteuererklärung öffnen und Lohnsteuerbescheinigung per Belegabruf übernehmen',
        'Werbungskosten in der Anlage N ergänzen und Erklärung absenden',
        'Steuerbescheid prüfen; bei Fehlern innerhalb eines Monats Einspruch einlegen'
      ],
      hints: ['Ohne Registrierung kein Zugang.', 'Der Bescheid kommt erst nach dem Absenden.'],
      solution: 'Registrieren → Aktivierung und Zertifikat → Erklärung mit Belegabruf → Anlage N ergänzen und absenden → Bescheid prüfen (Einspruchsfrist 1 Monat).'
    },
    {
      id: 'wiso-einkommensteuer-a6', type: 'calc', difficulty: 3, points: 3,
      q: `Die Auszubildende Sophie (konfessionslos) begann am 1. September 2026. Ihre Lohnsteuerbescheinigung 2026 weist einen Bruttoarbeitslohn von **5.400 €** und einbehaltene Lohnsteuer von **96,00 €** (Beispielwert) aus. Ihre Werbungskosten liegen unter dem Pauschbetrag. Abziehbare Sonderausgaben laut Anlage Vorsorgeaufwand: **980 €** (Beispielwert).

Berechne die Einkünfte, das zu versteuernde Einkommen und die Steuererstattung (vereinfacht, ohne Soli).`,
      formula: 'zvE = Brutto − Werbungskosten (mind. 1.230 €) − Sonderausgaben; Erstattung = einbehaltene LSt − festgesetzte ESt',
      fields: [
        { id: 'eink', label: 'Einkünfte aus nichtselbständiger Arbeit', unit: '€', answer: 4170, tol: 0.01 },
        { id: 'zve', label: 'zu versteuerndes Einkommen', unit: '€', answer: 3190, tol: 0.01 },
        { id: 'erst', label: 'Erstattung', unit: '€', answer: 96, tol: 0.01 }
      ],
      hints: ['Werbungskosten unter 1.230 € → Pauschbetrag ansetzen.', 'Vergleiche das zvE mit dem Grundfreibetrag 12.348 €.'],
      solution: `**Einkünfte:** 5.400 € − 1.230 € = **4.170 €**

**zvE:** 4.170 € − 980 € = **3.190 €**

**Einkommensteuer:** 3.190 € < 12.348 € (Grundfreibetrag 2026) → **0 €**

**Erstattung:** 96,00 € − 0,00 € = **96,00 €** – Sophie bekommt die gesamte Lohnsteuer zurück.`
    },
    {
      id: 'wiso-einkommensteuer-a7', type: 'calc', difficulty: 2, points: 3,
      q: `Der Speditionskaufmann Tim (zvE 2026: 31.000 €) spart über seinen Arbeitgeber vermögenswirksame Leistungen:

- **40 € pro Monat** in einen Bausparvertrag
- **34 € pro Monat** in einen Aktienfondssparplan

Berechne die Arbeitnehmer-Sparzulage für beide Verträge und die gesamte Zulage für 2026.`,
      formula: 'Zulage = min(Jahressparbetrag; Höchstbetrag) × Zulagensatz',
      fields: [
        { id: 'bau', label: 'Zulage Bausparvertrag (9 %, max. 470 €)', unit: '€', answer: 42.3, tol: 0.01 },
        { id: 'fonds', label: 'Zulage Fondssparplan (20 %, max. 400 €)', unit: '€', answer: 80, tol: 0.01 },
        { id: 'ges', label: 'Arbeitnehmer-Sparzulage gesamt', unit: '€', answer: 122.3, tol: 0.01 }
      ],
      hints: ['Prüfe zuerst die Einkommensgrenze von 40.000 €.', 'Jahresbeträge: 480 € und 408 € – beide über dem jeweiligen Höchstbetrag.'],
      solution: `**Einkommensgrenze:** 31.000 € ≤ 40.000 € → Anspruch besteht.

**Bausparen:** 12 × 40 € = 480 € → begünstigt höchstens 470 € → 470 € × 9 % = **42,30 €**

**Fondssparplan:** 12 × 34 € = 408 € → begünstigt höchstens 400 € → 400 € × 20 % = **80,00 €**

**Gesamt:** 42,30 € + 80,00 € = **122,30 €** – beantragt über die Einkommensteuererklärung.`
    },
    {
      id: 'wiso-einkommensteuer-a8', type: 'calc', difficulty: 2, points: 4,
      q: `Stelle den Haushaltsplan der Auszubildenden Mara (2. Ausbildungsjahr, eigene kleine Wohnung) für einen Monat auf (alle Werte sind **Beispielwerte**):

| Position | € |
|---|---:|
| Nettoausbildungsvergütung | 940 |
| Warmmiete | 320 |
| Strom und Internet | 45 |
| Handyvertrag | 15 |
| Monatsticket ÖPNV | 63 |
| Privathaftpflichtversicherung | 6 |
| Lebensmittel und Drogerie | 180 |
| Freizeit | 110 |
| Kleidung | 40 |

Berechne Fixkosten, Gesamtausgaben, Überschuss und Sparquote.`,
      formula: 'Überschuss = Einnahmen − Ausgaben; Sparquote = Überschuss ÷ Einnahmen × 100',
      fields: [
        { id: 'fix', label: 'Fixkosten (Miete bis Versicherung)', unit: '€', answer: 449, tol: 0.01 },
        { id: 'ausg', label: 'Gesamtausgaben', unit: '€', answer: 779, tol: 0.01 },
        { id: 'ueb', label: 'Überschuss', unit: '€', answer: 161, tol: 0.01 },
        { id: 'quote', label: 'Sparquote', unit: '%', answer: 17.13, tol: 0.1 }
      ],
      hints: ['Fixkosten fallen jeden Monat in gleicher Höhe an: Miete, Strom/Internet, Handy, Ticket, Versicherung.', 'Variable Kosten: Lebensmittel, Freizeit, Kleidung.'],
      solution: `**Fixkosten:** 320 + 45 + 15 + 63 + 6 = **449 €**

**Variable Kosten:** 180 + 110 + 40 = 330 €

**Gesamtausgaben:** 449 € + 330 € = **779 €**

**Überschuss:** 940 € − 779 € = **161 €**

**Sparquote:** 161 € ÷ 940 € × 100 = **17,13 %**

Mara könnte z. B. 50 € in einen VL-Vertrag oder Notgroschen sparen und behält trotzdem Puffer.`
    },
    {
      id: 'wiso-einkommensteuer-a9', type: 'text', difficulty: 2, points: 3,
      q: 'Dein Mitazubi sagt: „Steuererklärung? Lohnt sich bei uns doch nicht, wir verdienen zu wenig.“ Nenne drei Gründe, warum sich eine Einkommensteuererklärung für Auszubildende trotzdem oft lohnt.',
      model: 'Erstens wird die Lohnsteuer monatlich so berechnet, als würde man das ganze Jahr gleich viel verdienen. Wer im August oder September mit der Ausbildung beginnt, hat aber ein niedriges Jahreseinkommen und liegt oft unter dem Grundfreibetrag – dann gibt es die einbehaltene Lohnsteuer komplett zurück. Zweitens können Werbungskosten wie Fahrten zum Betrieb und zur Berufsschule oder Fachbücher abgesetzt werden, wenn sie über dem Arbeitnehmer-Pauschbetrag von 1.230 Euro liegen. Drittens gibt es die Arbeitnehmer-Sparzulage auf vermögenswirksame Leistungen nur mit Steuererklärung. Außerdem ist die Erklärung über ELSTER kostenlos und bis zu vier Jahre rückwirkend möglich.',
      criteria: [
        { text: 'nennt Erstattung durch niedriges Jahreseinkommen/Grundfreibetrag', keywords: ['Grundfreibetrag|zurück|Erstattung'], points: 1 },
        { text: 'nennt Werbungskosten über dem Pauschbetrag', keywords: ['Werbungskosten|Fahrt|Pauschbetrag'], points: 1 },
        { text: 'nennt Sparzulage oder 4 Jahre rückwirkend/ELSTER kostenlos', keywords: ['Sparzulage|vier Jahre|4 Jahre|ELSTER'], points: 1 }
      ],
      hints: ['Denke an Ausbildungsbeginn mitten im Jahr.', 'Welche Förderung gibt es nur mit Steuererklärung?'],
      solution: '1. **Unterjähriger Beginn:** Lohnsteuer wird auf ein volles Jahr hochgerechnet; das tatsächliche zvE liegt oft unter dem **Grundfreibetrag** → volle **Erstattung**. 2. **Werbungskosten** (Fahrten, Fachbücher, Gewerkschaft) über **1.230 €** senken die Steuer. 3. **Arbeitnehmer-Sparzulage** nur mit Erklärung. Zusätzlich: kostenlos über **ELSTER**, **4 Jahre** rückwirkend.'
    },
    {
      id: 'wiso-einkommensteuer-a10', type: 'case', difficulty: 3, points: 7,
      q: 'Fall: Die erste Steuererklärung von Elena',
      intro: `Elena (19, ledig, konfessionslos) macht ihre Ausbildung bei der Bliesgau Logistik e.K. Für 2026 liegen vor (Beispielwerte):

- Bruttoarbeitslohn laut Lohnsteuerbescheinigung: **13.900 €**, einbehaltene Lohnsteuer **210 €**
- einfache Entfernung zum Betrieb **22 km**, **200 Arbeitstage**
- Fachbücher und Laptoptasche für die Berufsschule (beruflicher Anteil): **60 €**
- Bewerbungskosten für die Übernahme in einer anderen Abteilung: **0 €**
- abziehbare Vorsorgeaufwendungen (Sonderausgaben): **2.650 €**
- VL: 40 € monatlich in einen Bausparvertrag`,
      hints: ['Vergleiche zuerst die Werbungskosten mit der Pauschale.', 'Prüfe dann das zvE gegen den Grundfreibetrag.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'wiso-einkommensteuer-a10-1', type: 'calc', difficulty: 3, points: 4,
          q: 'Berechne die Werbungskosten, die Einkünfte und das zu versteuernde Einkommen.',
          formula: 'WK = 22 km × 0,38 € × 200 + 60 €; zvE = Brutto − WK − Sonderausgaben',
          fields: [
            { id: 'wk', label: 'Werbungskosten (tatsächlich)', unit: '€', answer: 1732, tol: 0.01 },
            { id: 'eink', label: 'Einkünfte aus nichtselbständiger Arbeit', unit: '€', answer: 12168, tol: 0.01 },
            { id: 'zve', label: 'zu versteuerndes Einkommen', unit: '€', answer: 9518, tol: 0.01 }
          ],
          hints: ['Fahrtkosten: 22 × 0,38 × 200.', 'Die tatsächlichen Werbungskosten liegen über 1.230 €.'],
          solution: `**Fahrtkosten:** 22 km × 0,38 €/km × 200 Tage = 1.672,00 €

**Werbungskosten:** 1.672,00 € + 60,00 € = **1.732,00 €** (> 1.230 € → tatsächliche Kosten ansetzen)

**Einkünfte:** 13.900 € − 1.732 € = **12.168 €**

**zvE:** 12.168 € − 2.650 € = **9.518 €**`
        },
        {
          id: 'wiso-einkommensteuer-a10-2', type: 'calc', difficulty: 2, points: 2,
          q: 'Berechne die festgesetzte Einkommensteuer und die Erstattung (vereinfacht, ohne Soli).',
          formula: 'ESt = 0 €, wenn zvE ≤ Grundfreibetrag; Erstattung = einbehaltene LSt − ESt',
          fields: [
            { id: 'est', label: 'Einkommensteuer', unit: '€', answer: 0, tol: 0.01 },
            { id: 'erst', label: 'Erstattung', unit: '€', answer: 210, tol: 0.01 }
          ],
          hints: ['Grundfreibetrag 2026: 12.348 €.', 'Alles, was einbehalten wurde, kommt zurück, wenn die ESt 0 € beträgt.'],
          solution: `zvE 9.518 € < 12.348 € → **ESt 0 €**

**Erstattung:** 210 € − 0 € = **210 €**

Ohne Erklärung wäre das Geld verloren gewesen, da Elena nicht zur Abgabe verpflichtet ist.`
        },
        {
          id: 'wiso-einkommensteuer-a10-3', type: 'mc', difficulty: 2, points: 1,
          q: 'Bekommt Elena für ihren Bausparvertrag eine Arbeitnehmer-Sparzulage, und wie hoch ist sie?',
          options: [
            'Nein, Azubis erhalten keine Sparzulage.',
            'Ja, 9 % von 480 € = 43,20 €.',
            'Ja, 9 % von höchstens 470 € = 42,30 €, wenn sie die Zulage mit der Steuererklärung beantragt.',
            'Ja, 20 % von 480 € = 96,00 €.'
          ],
          correct: [2],
          hints: ['zvE 9.518 € liegt unter der Einkommensgrenze.', 'Beim Bausparen gilt ein Höchstbetrag von 470 €.'],
          solution: 'Richtig ist C. zvE 9.518 € ≤ 40.000 € → Anspruch. Beim **Bausparen** sind höchstens **470 €** begünstigt (Jahresbeitrag 480 €), Zulagensatz **9 %** → **42,30 €**. Die 20 % gelten nur für Vermögensbeteiligungen.'
        }
      ]
    },
    {
      id: 'wiso-einkommensteuer-a11', type: 'mc', difficulty: 2, points: 1,
      q: 'Warum zahlen Auszubildende, die im August mit der Ausbildung beginnen, monatlich oft Lohnsteuer, obwohl ihr Jahreseinkommen unter dem Grundfreibetrag liegt?',
      options: [
        'Weil der Grundfreibetrag für Auszubildende nicht gilt.',
        'Weil die monatliche Lohnsteuer so berechnet wird, als würde das Monatsentgelt das ganze Jahr gezahlt.',
        'Weil der Arbeitgeber die Lohnsteuer frei festlegt.',
        'Weil die Lohnsteuer auch die Sozialversicherung enthält.'
      ],
      correct: [1],
      hints: ['Die Lohnsteuertabelle rechnet mit einem Jahresbetrag.', 'Das tatsächliche Jahreseinkommen kennt erst das Finanzamt bei der Veranlagung.'],
      solution: 'Richtig ist B. Die Lohnsteuer wird aus dem **Monatslohn hochgerechnet auf ein Jahr** ermittelt. Bei Beginn im August ist das tatsächliche Jahreseinkommen viel niedriger. Die Differenz holt man sich mit der **Einkommensteuererklärung** zurück.'
    }
  ],
  quiz: ['wiso-einkommensteuer-a2', 'wiso-einkommensteuer-a3', 'wiso-einkommensteuer-a4', 'wiso-einkommensteuer-a7', 'wiso-einkommensteuer-a10'],
  sources: [
    { id: 'saar-wiso-2016', ref: 'W5' },
    { id: 'kmk-rlp-2004', ref: 'LF 2' },
    { title: 'Einkommensteuergesetz § 2 Umfang der Besteuerung, Begriffsbestimmungen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__2.html', asOf: '2026' },
    { title: 'Einkommensteuergesetz § 9 Werbungskosten (Entfernungspauschale)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__9.html', asOf: '2026' },
    { title: 'Einkommensteuergesetz § 9a Pauschbeträge für Werbungskosten', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__9a.html', asOf: '2026' },
    { title: 'Einkommensteuergesetz § 10c Sonderausgaben-Pauschbetrag', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__10c.html', asOf: '2026' },
    { title: 'Einkommensteuergesetz § 32a Einkommensteuertarif (Grundfreibetrag 2026)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__32a.html', asOf: '2026' },
    { title: 'Die wichtigsten steuerlichen Änderungen 2026 (BMF-Monatsbericht Februar 2026)', publisher: 'Bundesministerium der Finanzen', url: 'https://www.bundesfinanzministerium.de/Monatsberichte/Ausgabe/2026/02/Inhalte/Kapitel-2-Analysen/2-5-wichtigste-steuerliche-aenderungen-2026.html', asOf: '2026-02' },
    { title: 'Arbeitnehmer-Sparzulage beantragen (Einkommensgrenzen, Zulagensätze, Höchstbeträge)', publisher: 'Service-Portal Berlin', url: 'https://service.berlin.de/dienstleistung/325661/', asOf: '2026' },
    { title: 'Einkommensteuergesetz § 20 Kapitalvermögen (Sparer-Pauschbetrag Abs. 9)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__20.html', asOf: '2026' },
    { title: 'ELSTER – Ihr Online-Finanzamt', publisher: 'Steuerverwaltungen der Länder und des Bundes', url: 'https://www.elster.de', asOf: '2026' }
  ],
  links: ['lf02-entgeltabrechnung', 'wiso-sozialversicherung', 'wiso-ausbildungsvertrag']
};
