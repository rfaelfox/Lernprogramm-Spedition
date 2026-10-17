export default {
  id: 'lf02-entgeltabrechnung',
  area: 'LF02',
  topic: 'lf02-entgelt',
  title: 'Entgeltabrechnung: vom Brutto zum Netto',
  status: 'vollstaendig',
  minutes: 45,
  validity: {
    asOf: '2026',
    note: 'Sozialversicherungssätze 2026 wie in der Einheit „Die fünf Zweige der Sozialversicherung“: Arbeitnehmeranteil KV 7,3 % + halber Zusatzbeitrag (Ø 2026: 1,45 %), PV 1,8 % (+ 0,6 % Kinderlosenzuschlag ab 23 Jahren), RV 9,3 %, AV 1,3 %. Steuerklassen nach § 38b EStG. Solidaritätszuschlag 5,5 % der Lohnsteuer, Freigrenze nach § 3 Abs. 3 SolZG 20.350 € Jahressteuer (Zusammenveranlagung 40.700 €), beim monatlichen Lohnsteuerabzug ein Zwölftel davon (§ 3 Abs. 4 SolZG); geprüft auf gesetze-im-internet.de im Oktober 2026. Kirchensteuer im Saarland 9 % der Lohnsteuer. Lohnsteuerbeträge in den Aufgaben sind vorgegebene Beispielwerte, keine Tabellenwerte.'
  },
  goals: [
    'Ich kann den Aufbau einer Entgeltabrechnung vom Bruttoentgelt bis zum Auszahlungsbetrag erklären.',
    'Ich kann die Steuerklassen I bis VI den passenden Personengruppen zuordnen.',
    'Ich kann Kirchensteuer und Solidaritätszuschlag aus einer gegebenen Lohnsteuer ableiten.',
    'Ich kann die Arbeitnehmeranteile zur Sozialversicherung mit den Sätzen 2026 berechnen.',
    'Ich kann den Arbeitgeberanteil zur Sozialversicherung und die gesamten Personalkosten ermitteln.',
    'Ich kann vermögenswirksame Leistungen in der Abrechnung richtig berücksichtigen.',
    'Ich kann die Gehaltsabrechnung und den Arbeitgeberanteil buchen.'
  ],
  simple: `# Was steht auf der Gehaltsabrechnung?

Jeden Monat bekommst du eine **Entgeltabrechnung**. Dort siehst du, wie aus deinem **Brutto** (vereinbartes Entgelt) dein **Netto** wird und was am Ende auf dein Konto kommt.

# Das Grundschema

| Schritt | Beispiel |
|---|---|
| **Bruttoentgelt** (Gehalt, Ausbildungsvergütung, Zuschläge, Arbeitgeberzuschuss zu VL) | |
| − **Steuern**: Lohnsteuer, Solidaritätszuschlag, Kirchensteuer | gehen ans Finanzamt |
| − **Sozialversicherung** (Arbeitnehmeranteil): KV, PV, RV, AV | gehen an die Krankenkasse |
| = **Nettoentgelt** | |
| − **sonstige Abzüge**, z. B. vermögenswirksamer Sparbetrag, Vorschuss | |
| = **Auszahlungsbetrag** | kommt auf dein Konto |

# Steuern

- **Lohnsteuer**: hängt von Einkommen und **Steuerklasse** ab. Der Arbeitgeber liest sie aus der Lohnsteuertabelle bzw. berechnet sie mit dem Lohnprogramm. Bei vielen Azubis fällt keine oder nur wenig Lohnsteuer an.
- **Kirchensteuer**: nur für Mitglieder einer steuererhebenden Religionsgemeinschaft; im **Saarland 9 % der Lohnsteuer**.
- **Solidaritätszuschlag**: 5,5 % der Lohnsteuer, aber nur, wenn die Lohnsteuer über einer hohen **Freigrenze** liegt. Die meisten Beschäftigten zahlen ihn nicht mehr.

# Sozialversicherung 2026 (dein Anteil)

KV 8,75 % (mit Ø-Zusatzbeitrag) · PV 1,8 % (ab 23 ohne Kinder 2,4 %) · RV 9,3 % · AV 1,3 %

Die Einzelheiten stehen in der Einheit **„Die fünf Zweige der Sozialversicherung“**. Der **Arbeitgeber** zahlt noch einmal ungefähr denselben Betrag dazu – das ist für ihn zusätzlicher Personalaufwand.`,
  deep: `# 1. Bruttoentgelt

Zum steuer- und beitragspflichtigen Brutto gehören z. B.:
- Grundgehalt bzw. Ausbildungsvergütung,
- Überstundenvergütung, Zulagen (sofern nicht steuerfrei),
- **vermögenswirksame Leistungen (VL) des Arbeitgebers** – sie sind steuer- und sozialversicherungspflichtig,
- Sachbezüge (z. B. Dienstwagen zur privaten Nutzung) als geldwerter Vorteil.

# 2. Lohnsteuer und Steuerklassen (§ 38b EStG)

| Steuerklasse | Wer? |
|---|---|
| **I** | Ledige, Geschiedene, dauernd getrennt Lebende (und Verheiratete, die nicht in III/IV gehören) |
| **II** | wie I, aber **alleinerziehend** (Entlastungsbetrag für Alleinerziehende) |
| **III** | Verheiratete, wenn der Ehepartner auf gemeinsamen Antrag Klasse V hat (meist der Partner mit dem höheren Einkommen) |
| **IV** | Verheiratete, beide unbeschränkt steuerpflichtig und nicht dauernd getrennt (Regelfall, ggf. mit Faktor) |
| **V** | Gegenstück zu III (Partner mit dem geringeren Einkommen) |
| **VI** | **zweites und jedes weitere** Arbeitsverhältnis |

**Prinzip:** Die Lohnsteuer ist eine **Vorauszahlung** auf die Einkommensteuer. Die Lohnsteuertabelle berücksichtigt pauschal den Grundfreibetrag, den Arbeitnehmer-Pauschbetrag, den Sonderausgaben-Pauschbetrag und eine Vorsorgepauschale. Die Steuermerkmale (Steuerklasse, Kinderfreibeträge, Religion) ruft der Arbeitgeber elektronisch beim Bundeszentralamt für Steuern ab (**ELStAM**). Die genaue Lohnsteuer wird in der Praxis mit dem Lohnprogramm ermittelt – **in dieser Einheit ist sie immer vorgegeben**.

# 3. Kirchensteuer und Solidaritätszuschlag

- **Kirchensteuer Saarland:** 9 % der Lohnsteuer. Beispiel: Lohnsteuer 300,00 € → Kirchensteuer 27,00 €.
- **Solidaritätszuschlag:** 5,5 % der Lohnsteuer. Er wird aber nur erhoben, wenn die Lohnsteuer die **Freigrenze** übersteigt. Nach § 3 SolZG beträgt sie 20.350 € **Jahres**lohnsteuer (Zusammenveranlagung 40.700 €); beim monatlichen Abzug gilt ein Zwölftel (Steuerklasse I: rund 1.695,83 € **Lohnsteuer im Monat**). Knapp oberhalb steigt der Zuschlag gleitend an (Milderungszone). Für Auszubildende und die meisten Beschäftigten ist der Soli deshalb **0 €**.

# 4. Sozialversicherung (Arbeitnehmeranteil 2026)

| Zweig | Arbeitnehmeranteil |
|---|---:|
| Krankenversicherung 7,3 % + ½ Zusatzbeitrag (Ø 1,45 %) | 8,75 % |
| Pflegeversicherung | 1,8 % (+ 0,6 % kinderlos ab 23 = 2,4 %) |
| Rentenversicherung | 9,3 % |
| Arbeitslosenversicherung | 1,3 % |
| **Summe** | **21,15 %** bzw. **21,75 %** |

Beitragsbemessungsgrenzen, Geringverdienergrenze für Azubis (325 €) und Träger: siehe Einheit „Die fünf Zweige der Sozialversicherung“. Jeder Zweig wird einzeln berechnet und auf Cent gerundet.

# 5. Arbeitgeberanteil

Der Arbeitgeber trägt zusätzlich: KV 8,75 %, PV 1,8 %, RV 9,3 %, AV 1,3 % = **21,15 %** (den Kinderlosenzuschlag zahlt er nicht). Dazu kommen die Unfallversicherung (Berufsgenossenschaft) und Umlagen, die hier vereinfachend weggelassen werden.

**Personalkosten des Arbeitgebers = Bruttoentgelt + Arbeitgeberanteil zur Sozialversicherung (+ UV, Umlagen)**

# 6. Vermögenswirksame Leistungen (VL)

- VL sind Geldbeträge, die **direkt** auf einen Sparvertrag (z. B. Bausparvertrag, Fondssparplan) des Arbeitnehmers überwiesen werden.
- Viele Tarifverträge sehen einen **Arbeitgeberzuschuss** vor. Er erhöht das **Brutto** und ist steuer- und beitragspflichtig.
- Der gesamte **Sparbetrag** wird vom Netto **abgezogen** und vom Arbeitgeber an das Anlageinstitut überwiesen.
- Staatliche Förderung (Arbeitnehmer-Sparzulage): siehe Einheit „Einkommensteuer und Vermögensbildung“.

# 7. Buchung der Entgeltabrechnung

Gebucht wird in zwei Schritten (Konten ohne Nummern, da je nach Kontenrahmen verschieden):

**a) Gehaltsabrechnung (Arbeitnehmerseite)**

| Soll | Haben |
|---|---|
| Löhne/Gehälter (Bruttoentgelt) | Verbindlichkeiten gegenüber Finanzbehörden (LSt, SolZ, KiSt) |
| | Verbindlichkeiten gegenüber Sozialversicherungsträgern (AN-Anteil) |
| | Bank (Auszahlung) |

**b) Arbeitgeberanteil**

Soziale Abgaben **an** Verbindlichkeiten gegenüber Sozialversicherungsträgern

**c) Überweisung** der einbehaltenen Beträge: Verbindlichkeiten gegenüber Sozialversicherungsträgern (AN + AG) und Verbindlichkeiten gegenüber Finanzbehörden **an** Bank.

**Begründung:** „Löhne/Gehälter“ und „Soziale Abgaben“ sind **Aufwandskonten** – Aufwand wird im **Soll** gebucht. Die einbehaltenen Steuern und Beiträge schuldet der Arbeitgeber dem Finanzamt bzw. der Krankenkasse: **Zugang an Verbindlichkeiten** (Passivkonto) → **Haben**. Die Auszahlung mindert das Bankguthaben (Aktivkonto) → **Haben**. Die Sozialversicherungsbeiträge müssen spätestens am **drittletzten Bankarbeitstag** des laufenden Monats bei der Krankenkasse sein; die Lohnsteuer wird bis zum 10. des Folgemonats angemeldet und abgeführt.`,
  terms: [
    { term: 'Bruttoentgelt', def: 'Vereinbarte Vergütung vor Abzügen, einschließlich Zulagen, steuerpflichtiger Sachbezüge und Arbeitgeberzuschuss zu vermögenswirksamen Leistungen.' },
    { term: 'Nettoentgelt', def: 'Bruttoentgelt minus Lohnsteuer, Solidaritätszuschlag, Kirchensteuer und Arbeitnehmeranteil zur Sozialversicherung.' },
    { term: 'Auszahlungsbetrag', def: 'Betrag, der tatsächlich auf das Konto des Arbeitnehmers überwiesen wird: Netto minus sonstige Abzüge wie VL-Sparbetrag oder Vorschuss.' },
    { term: 'Lohnsteuer', def: 'Vom Arbeitgeber einbehaltene Vorauszahlung auf die Einkommensteuer des Arbeitnehmers; Höhe abhängig von Entgelt und Steuerklasse.' },
    { term: 'Steuerklasse', def: 'Einordnung nach Familienstand und Zahl der Arbeitsverhältnisse (I bis VI, § 38b EStG); bestimmt die Höhe der Lohnsteuer.' },
    { term: 'ELStAM', def: 'Elektronische Lohnsteuerabzugsmerkmale (Steuerklasse, Kinderfreibeträge, Religionszugehörigkeit), die der Arbeitgeber beim Bundeszentralamt für Steuern abruft.' },
    { term: 'Kirchensteuer', def: 'Steuer für Mitglieder steuererhebender Religionsgemeinschaften; im Saarland 9 % der Lohnsteuer.' },
    { term: 'Solidaritätszuschlag', def: '5,5 % der Lohnsteuer; wird nur erhoben, wenn die Lohnsteuer die Freigrenze nach § 3 SolZG übersteigt.' },
    { term: 'Arbeitgeberanteil', def: 'Anteil an KV, PV, RV und AV, den der Arbeitgeber zusätzlich zum Bruttoentgelt trägt; wird als Soziale Abgaben gebucht.' },
    { term: 'Vermögenswirksame Leistungen', def: 'Sparbeträge, die der Arbeitgeber für den Arbeitnehmer direkt auf einen begünstigten Sparvertrag überweist; ein Arbeitgeberzuschuss dazu erhöht das Brutto.' }
  ],
  example: `# Praxisbeispiel: Gehaltsabrechnung März 2026 bei der Saarlog Spedition GmbH

**Jana Becker**, 30 Jahre, ledig, keine Kinder, Steuerklasse I, römisch-katholisch, Speditionskauffrau. Ihre Krankenkasse erhebt 2,9 % Zusatzbeitrag (Durchschnitt 2026).

| Position | € |
|---|---:|
| Grundgehalt | 3.200,00 |
| + Arbeitgeberzuschuss VL | 40,00 |
| **= Bruttoentgelt** | **3.240,00** |
| − Lohnsteuer (laut Lohnprogramm, **Beispielwert**) | 380,00 |
| − Solidaritätszuschlag (Lohnsteuer unter der Freigrenze) | 0,00 |
| − Kirchensteuer 9 % von 380,00 € | 34,20 |
| − KV 8,75 % | 283,50 |
| − PV 2,4 % (1,8 % + 0,6 % kinderlos ab 23) | 77,76 |
| − RV 9,3 % | 301,32 |
| − AV 1,3 % | 42,12 |
| **= Nettoentgelt** | **2.121,10** |
| − VL-Sparbetrag an die Bausparkasse | 40,00 |
| **= Auszahlungsbetrag** | **2.081,10** |

**Arbeitgeberanteil:** KV 283,50 € + PV 1,8 % = 58,32 € + RV 301,32 € + AV 42,12 € = **685,26 €**

**Personalkosten** (ohne UV und Umlagen): 3.240,00 € + 685,26 € = **3.925,26 €**

**Buchungen** (die Spedition überweist Auszahlung und VL-Sparbetrag am selben Tag per Bank):

1. Gehälter 3.240,00 € **an** Verbindlichkeiten gegenüber Finanzbehörden 414,20 €, Verbindlichkeiten gegenüber Sozialversicherungsträgern 704,70 €, Bank 2.121,10 €
2. Soziale Abgaben 685,26 € **an** Verbindlichkeiten gegenüber Sozialversicherungsträgern 685,26 €
3. Verbindlichkeiten gegenüber Sozialversicherungsträgern 1.389,96 € **an** Bank 1.389,96 €`,
  rules: [
    'Brutto − Steuern − Sozialversicherung (AN-Anteil) = Netto; Netto − sonstige Abzüge = Auszahlung.',
    'Kirchensteuer und Solidaritätszuschlag werden immer von der Lohnsteuer berechnet, nicht vom Brutto.',
    'Der Solidaritätszuschlag fällt nur an, wenn die Lohnsteuer über der Freigrenze liegt – bei den meisten Beschäftigten 0 €.',
    'Ein Arbeitgeberzuschuss zu VL erhöht das Brutto; der VL-Sparbetrag wird vom Netto abgezogen.',
    'Jeden SV-Zweig einzeln berechnen und auf Cent runden; Kinderlosenzuschlag nur ab 23 und nur beim Arbeitnehmer.',
    'Löhne/Gehälter und Soziale Abgaben sind Aufwand (Soll); einbehaltene Abzüge sind Verbindlichkeiten (Haben).',
    'Steuerklasse VI gilt für das zweite und jedes weitere Arbeitsverhältnis.'
  ],
  summary: `- **Schema:** Brutto − LSt − SolZ − KiSt − SV-AN-Anteil = **Netto**; − VL-Sparbetrag/Vorschuss = **Auszahlung**.
- **Steuerklassen:** I ledig, II alleinerziehend, III/V Ehepaare mit unterschiedlichem Einkommen, IV Ehepaare (Regelfall), VI Zweitjob.
- **KiSt Saarland** 9 % der Lohnsteuer; **SolZ** 5,5 % der Lohnsteuer nur oberhalb der Freigrenze.
- **SV 2026 (AN):** KV 8,75 % · PV 1,8 % (+0,6 %) · RV 9,3 % · AV 1,3 % = 21,15 % bzw. 21,75 %.
- **AG-Anteil** 21,15 % → Personalkosten = Brutto + AG-Anteil.
- **Buchung:** Löhne/Gehälter an Verb. Finanzbehörden, Verb. SV-Träger, Bank; Soziale Abgaben an Verb. SV-Träger.`,
  mistakes: [
    { wrong: 'Die Kirchensteuer beträgt 9 % vom Bruttogehalt.', right: 'Die Kirchensteuer beträgt im Saarland 9 % der Lohnsteuer. Bei 380 € Lohnsteuer sind das 34,20 €.' },
    { wrong: 'Jeder zahlt 5,5 % Solidaritätszuschlag.', right: 'Der Solidaritätszuschlag wird nur erhoben, wenn die Lohnsteuer über der Freigrenze liegt (§ 3 SolZG). Für Azubis und die meisten Beschäftigten ist er 0 €.' },
    { wrong: 'Der Arbeitgeberzuschuss zu den VL ist steuerfrei und gehört nicht ins Brutto.', right: 'VL des Arbeitgebers sind steuer- und sozialversicherungspflichtiger Arbeitslohn und erhöhen das Brutto.' },
    { wrong: 'Der Arbeitgeberanteil zur Sozialversicherung wird vom Gehalt des Arbeitnehmers abgezogen.', right: 'Der Arbeitgeberanteil wird zusätzlich zum Brutto gezahlt und als eigener Aufwand („Soziale Abgaben“) gebucht.' },
    { wrong: 'Bei der Gehaltsbuchung wird das Nettogehalt im Soll auf „Löhne/Gehälter“ gebucht.', right: 'Auf „Löhne/Gehälter“ wird das Bruttoentgelt gebucht. Die Abzüge gehen als Verbindlichkeiten ins Haben, nur der Auszahlungsbetrag läuft über die Bank.' },
    { wrong: 'Steuerklasse VI bekommt, wer besonders viel verdient.', right: 'Steuerklasse VI gilt für das zweite und jedes weitere Arbeitsverhältnis, unabhängig von der Höhe des Verdienstes.' }
  ],
  flashcards: [
    { q: 'Grundschema der Entgeltabrechnung?', a: 'Brutto − Steuern (LSt, SolZ, KiSt) − SV-Arbeitnehmeranteil = Netto; Netto − sonstige Abzüge = Auszahlungsbetrag.' },
    { q: 'Wer erhält Steuerklasse II?', a: 'Alleinerziehende, bei denen der Entlastungsbetrag für Alleinerziehende berücksichtigt wird.' },
    { q: 'Wofür gilt Steuerklasse VI?', a: 'Für das zweite und jedes weitere Arbeitsverhältnis.' },
    { q: 'Wie hoch ist die Kirchensteuer im Saarland?', a: '9 % der Lohnsteuer.' },
    { q: 'Wann fällt Solidaritätszuschlag an?', a: 'Nur wenn die Lohnsteuer die Freigrenze nach § 3 SolZG übersteigt (20.350 € Jahreslohnsteuer, Stand 2026); dann 5,5 % mit Milderungszone.' },
    { q: 'Arbeitnehmeranteil zur SV 2026 (kinderlos, unter 23, Ø-Zusatzbeitrag)?', a: '21,15 %: KV 8,75 %, PV 1,8 %, RV 9,3 %, AV 1,3 %.' },
    { q: 'Wie werden VL des Arbeitgebers behandelt?', a: 'Sie erhöhen das steuer- und beitragspflichtige Brutto; der Sparbetrag wird vom Netto abgezogen und an das Anlageinstitut überwiesen.' },
    { q: 'Buchungssatz für die Gehaltsabrechnung?', a: 'Löhne/Gehälter (Brutto) an Verbindlichkeiten gegenüber Finanzbehörden, Verbindlichkeiten gegenüber Sozialversicherungsträgern und Bank.' },
    { q: 'Buchungssatz für den Arbeitgeberanteil?', a: 'Soziale Abgaben an Verbindlichkeiten gegenüber Sozialversicherungsträgern.' },
    { q: 'Was sind ELStAM?', a: 'Elektronische Lohnsteuerabzugsmerkmale wie Steuerklasse, Kinderfreibeträge und Religion, die der Arbeitgeber elektronisch abruft.' },
    { q: 'Wie berechnet man die Personalkosten eines Mitarbeiters (vereinfacht)?', a: 'Bruttoentgelt + Arbeitgeberanteil zur Sozialversicherung (zusätzlich UV-Beitrag und Umlagen).' }
  ],
  tasks: [
    {
      id: 'lf02-entgeltabrechnung-a1', type: 'match', difficulty: 1, points: 5,
      q: 'Ordne die Beschäftigten der Saarlog Spedition GmbH der richtigen Steuerklasse zu.',
      pairs: [
        ['Auszubildender Tim, 19, ledig', 'Steuerklasse I'],
        ['Disponentin Sara, alleinerziehend mit einer Tochter', 'Steuerklasse II'],
        ['Lagerleiter Herr Klein, verheiratet, Ehefrau hat auf gemeinsamen Antrag Klasse V', 'Steuerklasse III'],
        ['Kraftfahrer Herr Roth, verheiratet, beide Ehepartner verdienen ähnlich viel', 'Steuerklasse IV'],
        ['Aushilfe Frau Neu, hat bereits eine Hauptbeschäftigung bei einem anderen Arbeitgeber', 'Steuerklasse VI']
      ],
      hints: ['Familienstand und Zahl der Arbeitsverhältnisse entscheiden.', 'Klasse V ist das Gegenstück zu III.'],
      solution: 'Ledig → **I**; alleinerziehend → **II**; verheiratet, Partner in V → **III**; verheiratet, Regelfall → **IV**; zweites Arbeitsverhältnis → **VI** (§ 38b EStG).'
    },
    {
      id: 'lf02-entgeltabrechnung-a2', type: 'order', difficulty: 1, points: 5,
      q: 'Bringe die Zeilen einer Entgeltabrechnung in die richtige Reihenfolge.',
      items: [
        'Grundgehalt und Zulagen',
        'Bruttoentgelt',
        'Abzug von Lohnsteuer, Solidaritätszuschlag und Kirchensteuer',
        'Abzug des Arbeitnehmeranteils zur Sozialversicherung',
        'Nettoentgelt',
        'Abzug VL-Sparbetrag',
        'Auszahlungsbetrag'
      ],
      hints: ['Erst wird das Brutto gebildet.', 'Sonstige Abzüge wie VL kommen erst nach dem Netto.'],
      solution: 'Grundgehalt + Zulagen → **Brutto** → − Steuern → − SV-AN-Anteil → **Netto** → − VL-Sparbetrag → **Auszahlungsbetrag**. (Die Reihenfolge von Steuern und Sozialversicherung kann auf Abrechnungen vertauscht sein; beide werden vom Brutto berechnet.)'
    },
    {
      id: 'lf02-entgeltabrechnung-a3', type: 'calc', difficulty: 1, points: 3,
      q: 'Der Disponent Herr Klein (evangelisch, Saarland) hat laut Lohnprogramm im April 2026 eine Lohnsteuer von **412,00 €** (Beispielwert). Seine Lohnsteuer liegt unter der Freigrenze für den Solidaritätszuschlag. Berechne Kirchensteuer, Solidaritätszuschlag und die gesamten Steuerabzüge.',
      formula: 'Kirchensteuer = Lohnsteuer × 9 %; Steuerabzüge = LSt + SolZ + KiSt',
      fields: [
        { id: 'kist', label: 'Kirchensteuer', unit: '€', answer: 37.08, tol: 0.01 },
        { id: 'soli', label: 'Solidaritätszuschlag', unit: '€', answer: 0, tol: 0.01 },
        { id: 'steuer', label: 'Steuerabzüge gesamt', unit: '€', answer: 449.08, tol: 0.01 }
      ],
      hints: ['Die Kirchensteuer bezieht sich auf die Lohnsteuer.', 'Unter der Freigrenze ist der Soli 0 €.'],
      solution: `**Kirchensteuer:** 412,00 € × 9 % = **37,08 €**

**Solidaritätszuschlag:** Lohnsteuer unter der Freigrenze → **0,00 €**

**Steuerabzüge:** 412,00 € + 0,00 € + 37,08 € = **449,08 €**`
    },
    {
      id: 'lf02-entgeltabrechnung-a4', type: 'calc', difficulty: 2, points: 5,
      q: 'Die Auszubildende **Lena** (20 Jahre, keine Kinder, Steuerklasse I, konfessionslos) erhält 2026 eine Ausbildungsvergütung von **1.150,00 €**. Ihre Krankenkasse erhebt einen Zusatzbeitrag von 2,9 %. Laut Lohnprogramm fällt **keine Lohnsteuer** an (Beispielwert 0,00 €). Berechne die Arbeitnehmeranteile und das Netto.',
      formula: 'Netto = Brutto − Lohnsteuer − (KV + PV + RV + AV)',
      fields: [
        { id: 'kv', label: 'KV 8,75 %', unit: '€', answer: 100.63, tol: 0.01 },
        { id: 'pv', label: 'PV 1,8 %', unit: '€', answer: 20.7, tol: 0.01 },
        { id: 'rv', label: 'RV 9,3 %', unit: '€', answer: 106.95, tol: 0.01 },
        { id: 'av', label: 'AV 1,3 %', unit: '€', answer: 14.95, tol: 0.01 },
        { id: 'netto', label: 'Nettoentgelt', unit: '€', answer: 906.77, tol: 0.01 }
      ],
      hints: ['Lena ist unter 23 – kein Kinderlosenzuschlag.', 'KV = 7,3 % + halber Zusatzbeitrag 1,45 % = 8,75 %. Jeden Zweig auf Cent runden.'],
      solution: `**Arbeitnehmeranteile (Sätze 2026):**
- KV: 1.150,00 € × 8,75 % = 100,625 € ≈ **100,63 €**
- PV: 1.150,00 € × 1,8 % = **20,70 €** (unter 23 → kein Zuschlag)
- RV: 1.150,00 € × 9,3 % = **106,95 €**
- AV: 1.150,00 € × 1,3 % = **14,95 €**
- Summe: **243,23 €**

**Netto:** 1.150,00 € − 0,00 € Lohnsteuer − 243,23 € = **906,77 €**

Da Lena konfessionslos ist und keine Lohnsteuer zahlt, fallen auch keine Kirchensteuer und kein Soli an.`
    },
    {
      id: 'lf02-entgeltabrechnung-a5', type: 'calc', difficulty: 3, points: 5,
      q: `Berechne die Entgeltabrechnung für **Herrn Roth** (Kraftfahrer, 27 Jahre, kinderlos, römisch-katholisch, Steuerklasse I) für Mai 2026:

- Grundlohn 2.900,00 €, Arbeitgeberzuschuss VL 26,59 €, VL-Sparbetrag 40,00 €
- Lohnsteuer laut Lohnprogramm: **318,00 €** (Beispielwert), Solidaritätszuschlag 0,00 €
- Zusatzbeitrag seiner Krankenkasse: 2,9 %`,
      formula: 'Netto = Brutto − Steuern − SV-AN-Anteil; Auszahlung = Netto − VL-Sparbetrag',
      fields: [
        { id: 'brutto', label: 'Bruttoentgelt', unit: '€', answer: 2926.59, tol: 0.01 },
        { id: 'steuer', label: 'Steuerabzüge (LSt + KiSt)', unit: '€', answer: 346.62, tol: 0.01 },
        { id: 'sv', label: 'SV-Arbeitnehmeranteil', unit: '€', answer: 636.54, tol: 0.03 },
        { id: 'netto', label: 'Nettoentgelt', unit: '€', answer: 1943.43, tol: 0.03 },
        { id: 'aus', label: 'Auszahlungsbetrag', unit: '€', answer: 1903.43, tol: 0.03 }
      ],
      hints: ['Herr Roth ist über 23 und kinderlos: PV 2,4 %.', 'Der VL-Zuschlag erhöht das Brutto, der VL-Sparbetrag mindert die Auszahlung.'],
      solution: `**Brutto:** 2.900,00 € + 26,59 € = **2.926,59 €**

**Steuern:** LSt 318,00 € + KiSt 318,00 € × 9 % = 28,62 € → **346,62 €**

**Sozialversicherung (AN):**
- KV 8,75 %: 2.926,59 € × 0,0875 = 256,08 €
- PV 2,4 %: 2.926,59 € × 0,024 = 70,24 €
- RV 9,3 %: 2.926,59 € × 0,093 = 272,17 €
- AV 1,3 %: 2.926,59 € × 0,013 = 38,05 €
- Summe: **636,54 €** (bei Rechnung mit dem Gesamtsatz 21,75 % ergeben sich 636,53 €; beides wird akzeptiert)

**Netto:** 2.926,59 € − 346,62 € − 636,54 € = **1.943,43 €** (bzw. 1.943,44 €)

**Auszahlung:** 1.943,43 € − 40,00 € = **1.903,43 €** (bzw. 1.903,44 €)`
    },
    {
      id: 'lf02-entgeltabrechnung-a6', type: 'cloze', difficulty: 1, points: 5,
      q: 'Ergänze die Lücken.',
      text: 'Die Kirchensteuer beträgt im Saarland [[9]] % der [[Lohnsteuer]]. Der Solidaritätszuschlag beträgt [[5,5|5.5]] % der Lohnsteuer, wird aber nur oberhalb einer [[Freigrenze]] erhoben. Das zweite Arbeitsverhältnis wird nach Steuerklasse [[VI|6]] besteuert.',
      hints: ['Beide Zuschläge haben dieselbe Bemessungsgrundlage.', 'Die Klasse für den Zweitjob ist die höchste Nummer.'],
      solution: 'Kirchensteuer Saarland **9 %** der **Lohnsteuer**; Soli **5,5 %** der Lohnsteuer oberhalb der **Freigrenze** (§ 3 SolZG); Zweitjob: Steuerklasse **VI**.'
    },
    {
      id: 'lf02-entgeltabrechnung-a7', type: 'calc', difficulty: 2, points: 3,
      q: 'Für die Auszubildende Lena (Brutto 1.150,00 €, siehe Aufgabe a4) möchte die Ausbildungsleiterin die monatlichen Personalkosten kennen. Berechne den Arbeitgeberanteil zur Sozialversicherung (21,15 %, ohne Unfallversicherung und Umlagen) und die Personalkosten.',
      formula: 'Personalkosten = Brutto + AG-Anteil (KV 8,75 % + PV 1,8 % + RV 9,3 % + AV 1,3 %)',
      fields: [
        { id: 'ag', label: 'Arbeitgeberanteil', unit: '€', answer: 243.23, tol: 0.02 },
        { id: 'pk', label: 'Personalkosten', unit: '€', answer: 1393.23, tol: 0.02 }
      ],
      hints: ['Ohne Kinderlosenzuschlag ist der AG-Anteil genauso hoch wie der AN-Anteil.', 'Den Kinderlosenzuschlag zahlt der Arbeitgeber nie.'],
      solution: `**AG-Anteil:** KV 100,63 € + PV 20,70 € + RV 106,95 € + AV 14,95 € = **243,23 €** (1.150,00 € × 21,15 % = 243,225 €)

**Personalkosten:** 1.150,00 € + 243,23 € = **1.393,23 €** (zuzüglich BG-Beitrag und Umlagen).`
    },
    {
      id: 'lf02-entgeltabrechnung-a8', type: 'booking', difficulty: 2, points: 4,
      q: `Buche die Gehaltsabrechnung von **Jana Becker** (siehe Praxisbeispiel) für März 2026. Auszahlung und VL-Sparbetrag überweist die Spedition per Bank.

| Position | € |
|---|---:|
| Bruttogehalt | 3.240,00 |
| Lohnsteuer | 380,00 |
| Kirchensteuer | 34,20 |
| SV-Arbeitnehmeranteil | 704,70 |
| Überweisung (Auszahlung 2.081,10 € + VL 40,00 €) | 2.121,10 |`,
      accounts: ['Löhne/Gehälter', 'Soziale Abgaben', 'Verbindlichkeiten gegenüber Finanzbehörden', 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', 'Bank', 'Kasse', 'Forderungen an Mitarbeiter'],
      entries: [
        { side: 'S', account: 'Löhne/Gehälter', amount: 3240 },
        { side: 'H', account: 'Verbindlichkeiten gegenüber Finanzbehörden', amount: 414.2 },
        { side: 'H', account: 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', amount: 704.7 },
        { side: 'H', account: 'Bank', amount: 2121.1 }
      ],
      hints: ['Auf dem Aufwandskonto wird das Brutto gebucht.', 'Lohnsteuer und Kirchensteuer gehen zusammen an das Finanzamt.'],
      solution: `**Buchungssatz:** Löhne/Gehälter 3.240,00 € **an** Verbindlichkeiten gegenüber Finanzbehörden 414,20 €, Verbindlichkeiten gegenüber Sozialversicherungsträgern 704,70 €, Bank 2.121,10 €

- **Löhne/Gehälter**: Aufwandskonto, Aufwand im **Soll** – mit dem **Brutto**.
- **Verbindlichkeiten gegenüber Finanzbehörden**: 380,00 € + 34,20 € = 414,20 €; Schuld gegenüber dem Finanzamt nimmt zu (Passivkonto) → **Haben**.
- **Verbindlichkeiten gegenüber Sozialversicherungsträgern**: einbehaltener AN-Anteil 704,70 €; Zugang an Schulden → **Haben**.
- **Bank**: Guthaben nimmt ab (Aktivkonto) → **Haben**.

Kontrolle: 414,20 + 704,70 + 2.121,10 = 3.240,00 € (Soll = Haben).`
    },
    {
      id: 'lf02-entgeltabrechnung-a9', type: 'booking', difficulty: 2, points: 2,
      q: 'Buche den **Arbeitgeberanteil** zur Sozialversicherung für Jana Becker: 685,26 €.',
      accounts: ['Löhne/Gehälter', 'Soziale Abgaben', 'Verbindlichkeiten gegenüber Finanzbehörden', 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', 'Bank'],
      entries: [
        { side: 'S', account: 'Soziale Abgaben', amount: 685.26 },
        { side: 'H', account: 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', amount: 685.26 }
      ],
      hints: ['Der AG-Anteil ist zusätzlicher Aufwand des Arbeitgebers.', 'Er wird noch nicht bezahlt, sondern zunächst geschuldet.'],
      solution: `**Buchungssatz:** Soziale Abgaben 685,26 € **an** Verbindlichkeiten gegenüber Sozialversicherungsträgern 685,26 €

- **Soziale Abgaben**: Aufwandskonto → **Soll**.
- **Verbindlichkeiten gegenüber Sozialversicherungsträgern**: Schuld gegenüber der Krankenkasse (Einzugsstelle) steigt → **Haben**.`
    },
    {
      id: 'lf02-entgeltabrechnung-a10', type: 'mc', difficulty: 2, points: 3,
      q: 'Welche Aussagen zu vermögenswirksamen Leistungen (VL) sind richtig? (Mehrfachauswahl)',
      options: [
        'Ein Arbeitgeberzuschuss zu den VL erhöht das steuer- und beitragspflichtige Bruttoentgelt.',
        'Der VL-Sparbetrag wird vom Nettoentgelt abgezogen und direkt an das Anlageinstitut überwiesen.',
        'VL werden immer bar an den Arbeitnehmer ausgezahlt.',
        'Den VL-Zuschuss muss der Arbeitgeber nicht in der Abrechnung ausweisen.',
        'VL können z. B. in einen Bausparvertrag fließen.'
      ],
      correct: [0, 1, 4],
      hints: ['VL sind Arbeitslohn.', 'Das Geld geht nicht an den Arbeitnehmer selbst.'],
      solution: 'Richtig sind A, B und E. Der **AG-Zuschuss** ist Arbeitslohn und erhöht das Brutto. Der **Sparbetrag** wird vom Netto einbehalten und vom Arbeitgeber direkt auf den Sparvertrag (z. B. **Bausparvertrag**, Fondssparplan) überwiesen. Eine Barauszahlung ist gerade nicht vorgesehen.'
    },
    {
      id: 'lf02-entgeltabrechnung-a11', type: 'case', difficulty: 3, points: 8,
      q: 'Fall: Gehaltsabrechnung und Buchung bei der Bliesgau Logistik e.K.',
      intro: `**Mehmet Aydin**, 34 Jahre, verheiratet, ein Kind, Steuerklasse IV, konfessionslos, ist Lagerleiter. Juni 2026:

- Bruttogehalt **3.800,00 €** (keine VL)
- Lohnsteuer laut Lohnprogramm: **415,00 €** (Beispielwert), Solidaritätszuschlag 0,00 €
- Zusatzbeitrag seiner Krankenkasse: **2,5 %**
- Er hat ein Kind → **kein** Kinderlosenzuschlag.`,
      hints: ['Mit 2,5 % Zusatzbeitrag beträgt der KV-Satz für Arbeitnehmer 7,3 % + 1,25 % = 8,55 %.', 'Konfessionslos → keine Kirchensteuer.'],
      solution: 'Siehe Teilaufgaben.',
      parts: [
        {
          id: 'lf02-entgeltabrechnung-a11-1', type: 'calc', difficulty: 3, points: 3,
          q: 'Berechne den Arbeitnehmeranteil zur Sozialversicherung, das Nettoentgelt und den Arbeitgeberanteil.',
          formula: 'SV-AN = Brutto × (8,55 % + 1,8 % + 9,3 % + 1,3 %); Netto = Brutto − LSt − SV-AN',
          fields: [
            { id: 'sv', label: 'SV-Arbeitnehmeranteil', unit: '€', answer: 796.1, tol: 0.02 },
            { id: 'netto', label: 'Nettoentgelt (= Auszahlung)', unit: '€', answer: 2588.9, tol: 0.02 },
            { id: 'ag', label: 'SV-Arbeitgeberanteil', unit: '€', answer: 796.1, tol: 0.02 }
          ],
          hints: ['Gesamtsatz AN: 8,55 + 1,8 + 9,3 + 1,3 = 20,95 %.', 'Ohne Kinderlosenzuschlag ist der AG-Anteil gleich hoch.'],
          solution: `**SV-AN-Anteil:**
- KV 8,55 %: 3.800,00 € × 0,0855 = 324,90 €
- PV 1,8 %: 68,40 €
- RV 9,3 %: 353,40 €
- AV 1,3 %: 49,40 €
- Summe: **796,10 €** (= 3.800 € × 20,95 %)

**Netto:** 3.800,00 € − 415,00 € − 796,10 € = **2.588,90 €** (keine VL → Auszahlung ebenfalls 2.588,90 €)

**AG-Anteil:** ebenfalls **796,10 €** (gleiche Sätze, kein Kinderlosenzuschlag).`
        },
        {
          id: 'lf02-entgeltabrechnung-a11-2', type: 'booking', difficulty: 3, points: 4,
          q: 'Buche die Gehaltsabrechnung von Herrn Aydin (Auszahlung per Bank).',
          accounts: ['Löhne/Gehälter', 'Soziale Abgaben', 'Verbindlichkeiten gegenüber Finanzbehörden', 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', 'Bank'],
          entries: [
            { side: 'S', account: 'Löhne/Gehälter', amount: 3800 },
            { side: 'H', account: 'Verbindlichkeiten gegenüber Finanzbehörden', amount: 415 },
            { side: 'H', account: 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', amount: 796.1 },
            { side: 'H', account: 'Bank', amount: 2588.9 }
          ],
          hints: ['Brutto ins Soll.', 'Drei Positionen im Haben.'],
          solution: `**Buchungssatz:** Löhne/Gehälter 3.800,00 € **an** Verbindlichkeiten gegenüber Finanzbehörden 415,00 €, Verbindlichkeiten gegenüber Sozialversicherungsträgern 796,10 €, Bank 2.588,90 €

Aufwand im Soll; einbehaltene Lohnsteuer und SV-Beiträge als neue Schulden im Haben; Bankabgang im Haben. Kontrolle: 415,00 + 796,10 + 2.588,90 = 3.800,00 €.`
        },
        {
          id: 'lf02-entgeltabrechnung-a11-3', type: 'booking', difficulty: 2, points: 1,
          q: 'Ende Juni überweist die Spedition die gesamten Sozialversicherungsbeiträge für Herrn Aydin (Arbeitnehmer- und Arbeitgeberanteil) an die Krankenkasse. Bilde den Buchungssatz.',
          accounts: ['Löhne/Gehälter', 'Soziale Abgaben', 'Verbindlichkeiten gegenüber Finanzbehörden', 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', 'Bank'],
          entries: [
            { side: 'S', account: 'Verbindlichkeiten gegenüber Sozialversicherungsträgern', amount: 1592.2 },
            { side: 'H', account: 'Bank', amount: 1592.2 }
          ],
          hints: ['AN-Anteil + AG-Anteil.', 'Eine Schuld wird bezahlt: Abgang auf dem Passivkonto.'],
          solution: `**Buchungssatz:** Verbindlichkeiten gegenüber Sozialversicherungsträgern 1.592,20 € **an** Bank 1.592,20 €

796,10 € (AN) + 796,10 € (AG) = 1.592,20 €. Die Schuld nimmt ab (Passivkonto, Abgang im **Soll**), das Bankguthaben nimmt ab (Aktivkonto, Abgang im **Haben**).`
        }
      ]
    },
    {
      id: 'lf02-entgeltabrechnung-a12', type: 'text', difficulty: 2, points: 3,
      q: 'Ein neuer Auszubildender wundert sich: „Auf meiner Abrechnung stehen über 200 € Sozialversicherung, aber gar keine Lohnsteuer. Und die Firma sagt, ich koste sie mehr als mein Brutto.“ Erkläre beide Beobachtungen.',
      model: 'Lohnsteuer fällt erst an, wenn das Einkommen über den in der Lohnsteuertabelle eingearbeiteten Freibeträgen liegt, vor allem dem Grundfreibetrag und den Pauschbeträgen. Bei einer Ausbildungsvergütung ist das oft nicht der Fall, deshalb beträgt die Lohnsteuer 0 €. Sozialversicherungsbeiträge werden dagegen ab dem ersten Euro berechnet, wenn die Vergütung über 325 € liegt. Der Arbeitgeber zahlt zusätzlich zum Brutto seinen eigenen Arbeitgeberanteil zur Sozialversicherung sowie Unfallversicherung und Umlagen. Deshalb sind die Personalkosten höher als das Brutto.',
      criteria: [
        { text: 'erklärt Lohnsteuer 0 € durch Freibeträge/Grundfreibetrag', keywords: ['Grundfreibetrag|Freibetr|Pauschbetr'], points: 1 },
        { text: 'erklärt, dass SV-Beiträge ohne Freibetrag anfallen', keywords: ['ersten Euro|ohne Freibetrag|325'], points: 1 },
        { text: 'nennt den Arbeitgeberanteil als zusätzliche Kosten', keywords: ['Arbeitgeberanteil|AG-Anteil'], points: 1 }
      ],
      hints: ['Welche Beträge sind in der Lohnsteuertabelle steuerfrei eingearbeitet?', 'Wer zahlt die zweite Hälfte der Sozialversicherung?'],
      solution: '1. **Lohnsteuer 0 €**: In die Lohnsteuertabelle sind **Grundfreibetrag**, Arbeitnehmer-Pauschbetrag, Sonderausgaben-Pauschbetrag und Vorsorgepauschale eingearbeitet; liegt die Vergütung darunter, entsteht keine Lohnsteuer. 2. **SV-Beiträge** werden ohne Freibetrag vom gesamten Entgelt berechnet (Ausnahme: Azubis bis 325 €). 3. Der Arbeitgeber trägt zusätzlich den **Arbeitgeberanteil** (2026 rund 21,15 %), die Unfallversicherung und Umlagen – deshalb Personalkosten > Brutto.'
    }
  ],
  quiz: ['lf02-entgeltabrechnung-a1', 'lf02-entgeltabrechnung-a3', 'lf02-entgeltabrechnung-a4', 'lf02-entgeltabrechnung-a8', 'lf02-entgeltabrechnung-a11'],
  sources: [
    { id: 'kmk-rlp-2004', ref: 'LF 2, Inhalte: Entgeltabrechnung, Lohnsteuer, Sozialversicherung' },
    { id: 'saar-wiso-2016', ref: 'W5' },
    { title: 'Einkommensteuergesetz § 38b Lohnsteuerklassen', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__38b.html', asOf: '2026' },
    { title: 'Solidaritätszuschlaggesetz 1995 § 3 Bemessungsgrundlage und zeitliche Anwendung', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/solzg_1995/__3.html', asOf: '2026' },
    { title: 'Infoflyer Kirchensteuer (Kirchensteuersatz 9 %)', publisher: 'Bistum Trier', url: 'https://www.bistum-trier.de/export/sites/portal/unser-bistum/.galleries/dokumente/BistumTrier_Infoflyer_Kirchensteuer_Juni2025.pdf', asOf: '2025-06' },
    { title: 'Faktenblatt Rechengrößen und Beitragsrecht 2026 (Beitragssätze; übernommen aus der Einheit „Die fünf Zweige der Sozialversicherung“)', publisher: 'GKV-Spitzenverband', url: 'https://www.gkv-spitzenverband.de/media/dokumente/presse/zahlen_und_grafiken/20260101_Faktenblatt_Rechengroessen_Beitragsrecht.pdf', asOf: '2026' },
    { title: 'SGB IV § 23 Fälligkeit (Beiträge am drittletzten Bankarbeitstag)', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/sgb_4/__23.html', asOf: '2026' },
    { title: 'Einkommensteuergesetz § 41a Anmeldung und Abführung der Lohnsteuer', publisher: 'BMJ (gesetze-im-internet.de)', url: 'https://www.gesetze-im-internet.de/estg/__41a.html', asOf: '2026' }
  ],
  links: ['wiso-sozialversicherung', 'wiso-einkommensteuer', 'lf03-buchen-bestandskonten', 'lf02-arbeitsrecht']
};
