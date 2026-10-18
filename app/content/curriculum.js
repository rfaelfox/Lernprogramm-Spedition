// Themenbaum: Ausbildungsjahr → Lernfeld/Fach → Thema → Lerneinheiten.
// Lernfeld-Bezeichnungen, Jahreszuordnung und Zeitrichtwerte: KMK-Rahmenlehrplan vom 30.04.2004 (Quelle kmk-rlp-2004).
// Themen sind aus den „Inhalten“ des Rahmenlehrplans abgeleitet und eigenständig gegliedert.
// WiSo-Kompetenzbereiche: Lehrplan Wirtschafts- und Sozialkunde Berufsschule Saarland, Stand Juli 2016 (Quelle saar-wiso-2016).

export const years = [
  { id: 1, title: '1. Ausbildungsjahr' },
  { id: 2, title: '2. Ausbildungsjahr' },
  { id: 3, title: '3. Ausbildungsjahr' },
  { id: 0, title: 'Jahrgangsübergreifend' }
];

const t = (id, title, units = [], extra = {}) => ({ id, title, units, ...extra });

export const areas = [
  {
    id: 'LF01', kind: 'lf', no: 1, year: 1, hours: 40, source: 'kmk-rlp-2004',
    title: 'Die Berufsausbildung mitgestalten',
    topics: [
      t('lf01-bbig', 'Berufsbildungsgesetz und Ausbildungsvertrag', [], { alsoIn: ['wiso-w1-ausbildung'] }),
      t('lf01-jarbschg', 'Jugendarbeitsschutz', [], { alsoIn: ['wiso-w1-ausbildung'] }),
      t('lf01-ausbildungsordnung', 'Ausbildungsordnung, Ausbildungsrahmenplan und Rahmenlehrplan', ['lf01-ausbildungsordnung']),
      t('lf01-mitbestimmung', 'Betriebliche Mitbestimmung und JAV', [], { alsoIn: ['wiso-w3-mitbestimmung'] }),
      t('lf01-lerntechniken', 'Lern-, Arbeits- und Präsentationstechniken', ['lf01-lerntechniken'])
    ]
  },
  {
    id: 'LF02', kind: 'lf', no: 2, year: 1, hours: 80, source: 'kmk-rlp-2004',
    title: 'Im Speditionsbetrieb mitarbeiten',
    topics: [
      t('lf02-aufbauorganisation', 'Aufbauorganisation und Stellenbeschreibung', ['lf02-aufbauorganisation']),
      t('lf02-vollmachten', 'Vollmachten: Handlungsvollmacht und Prokura', ['lf02-vollmachten']),
      t('lf02-arbeitsrecht', 'Kündigungsschutz und Mutterschutz', ['lf02-arbeitsrecht'], { alsoIn: ['wiso-w1-ausbildung'] }),
      t('lf02-entgelt', 'Entgeltabrechnung, Lohnsteuer und Sozialversicherung', ['lf02-entgeltabrechnung'], { alsoIn: ['wiso-w5-sozialversicherung'] }),
      t('lf02-tarif', 'Tarifverhandlungen und Tarifvertrag', [], { alsoIn: ['wiso-w3-mitbestimmung'] }),
      t('lf02-vermoegensbildung', 'Vermögensbildung und Einkommensteuererklärung', [], { alsoIn: ['wiso-w5-einkommen'] })
    ]
  },
  {
    id: 'LF03', kind: 'lf', no: 3, year: 1, hours: 40, source: 'kmk-rlp-2004',
    title: 'Geschäftsprozesse dokumentieren und Zahlungsvorgänge bearbeiten',
    topics: [
      t('lf03-inventur', 'Inventur, Inventar und Bilanz', ['lf03-inventur-bilanz']),
      t('lf03-bestandskonten', 'Bestandskonten und Buchungssatz', ['lf03-buchen-bestandskonten']),
      t('lf03-erfolgskonten', 'Erfolgskonten und Gewinn- und Verlustrechnung', ['lf03-erfolgskonten']),
      t('lf03-ust', 'Vorsteuer und Umsatzsteuer', ['lf03-umsatzsteuer']),
      t('lf03-zahlungsverkehr', 'Zahlungsverkehr und Zahlungsverzug', ['lf03-zahlungsverkehr'])
    ]
  },
  {
    id: 'LF04', kind: 'lf', no: 4, year: 1, hours: 80, source: 'kmk-rlp-2004',
    title: 'Verkehrsträger vergleichen und Frachtaufträge im Güterkraftverkehr bearbeiten',
    topics: [
      t('lf04-verkehrstraeger', 'Verkehrsträger im Vergleich', ['lf04-verkehrstraeger-vergleich']),
      t('lf04-frachtrecht', 'Frachtvertrag und Haftung nach HGB', ['lf04-frachtvertrag-haftung']),
      t('lf04-cmr', 'Grenzüberschreitender Straßengüterverkehr (CMR)', ['lf04-cmr']),
      t('lf04-lenkzeiten', 'Lenk- und Ruhezeiten', ['lf04-lenkzeiten']),
      t('lf04-fahrzeugplanung', 'Fahrzeug- und Ladeeinheitenplanung, Make or Buy', ['lf04-fahrzeugplanung']),
      t('lf04-gefahrgut', 'Gefahrgut-Grundlagen (ADR)', ['lf04-gefahrgut'])
    ]
  },
  {
    id: 'LF05', kind: 'lf', no: 5, year: 1, hours: 80, source: 'kmk-rlp-2004',
    title: 'Speditionsaufträge im Sammelgut- und Systemverkehr bearbeiten',
    topics: [
      t('lf05-sammelgut', 'Ablauf des Sammelgutverkehrs und Rückrechnung', ['lf05-sammelgut-ablauf']),
      t('lf05-speditionsvertrag', 'Speditionsvertrag, ADSp und Haftung', ['lf05-speditionsvertrag']),
      t('lf05-systemverkehr', 'Systemverkehre, KEP-Dienste und Sendungsverfolgung', ['lf05-systemverkehr']),
      t('lf05-mahnverfahren', 'Kaufmännisches Mahnverfahren', ['lf05-mahnverfahren'])
    ]
  },
  {
    id: 'LF06', kind: 'lf', no: 6, year: 2, hours: 40, source: 'kmk-rlp-2004',
    title: 'Frachtaufträge eines weiteren Verkehrsträgers bearbeiten',
    note: 'Welcher Verkehrsträger (Schiene, Binnenschiff, Luft oder See) unterrichtet wird, legt die Schule fest. Bitte mit deinem Stundenplan abgleichen.',
    topics: [
      t('lf06-verkehrstraeger-wahl', 'Verkehrsträger der Schule (zu prüfen)'),
      t('lf06-frachtrecht', 'Frachtrecht und Frachtpapiere', ['lf06-luftfracht-recht']),
      t('lf06-umschlag', 'Umschlag, Ladeeinheiten und Frachtberechnung', ['lf06-luftfracht-berechnung']),
      t('lf06-gefahrgut', 'Gefahrgut beim gewählten Verkehrsträger', ['lf06-luftfracht-gefahrgut'])
    ]
  },
  {
    id: 'LF07', kind: 'lf', no: 7, year: 2, hours: 80, source: 'kmk-rlp-2004',
    title: 'Geschäftsprozesse erfolgsorientiert steuern',
    topics: [
      t('lf07-kostenarten', 'Kostenarten-, Kostenstellen- und Kostenträgerrechnung', ['lf07-kostenarten']),
      t('lf07-fahrzeugkosten', 'Fahrzeugkostenrechnung', ['lf07-fahrzeugkosten']),
      t('lf07-deckungsbeitrag', 'Deckungsbeitragsrechnung und Break-even', ['lf07-deckungsbeitrag']),
      t('lf07-kennzahlen', 'Kennzahlen: Rentabilität, Cashflow, Wirtschaftlichkeit', ['lf07-kennzahlen']),
      t('lf07-ust-unterricht', 'Umsatzsteuer buchen: Übungen aus dem Unterricht', ['lf07-umsatzsteuer-uebungen'], { alsoIn: ['lf03-ust'], school: true })
    ]
  },
  {
    id: 'LF08', kind: 'lf', no: 8, year: 2, hours: 40, source: 'kmk-rlp-2004',
    title: 'Betriebliche Beschaffungsvorgänge planen, steuern und kontrollieren',
    topics: [
      t('lf08-kaufvertrag', 'Kaufvertrag und Angebotsvergleich', ['lf08-angebotsvergleich'], { alsoIn: ['wiso-w4-vertraege'] }),
      t('lf08-stoerungen', 'Mangelhafte Lieferung und Lieferungsverzug', ['lf08-stoerungen']),
      t('lf08-finanzierung', 'Finanzierung: Ratenkauf, Leasing, Bankkredit', ['lf08-finanzierung'])
    ]
  },
  {
    id: 'LF09', kind: 'lf', no: 9, year: 2, hours: 40, source: 'kmk-rlp-2004',
    title: 'Lagerleistungen anbieten und organisieren',
    topics: [
      t('lf09-lagerarten', 'Lagerfunktionen, Lagerarten und Lagervertrag', ['lf09-lager-grundlagen']),
      t('lf09-lagerorganisation', 'Lagerorganisation und Lagerpapiere', ['lf09-lagerorganisation']),
      t('lf09-foerdermittel', 'Förder- und Lagertechnik im Überblick', ['lf09-foerdermittel']),
      t('lf09-lagerkosten', 'Lagerkosten, Angebot und Abrechnung', ['lf09-lagerkosten'])
    ]
  },
  {
    id: 'LF10', kind: 'lf', no: 10, year: 2, hours: 80, source: 'kmk-rlp-2004',
    title: 'Exportaufträge bearbeiten',
    topics: [
      t('lf10-incoterms', 'Incoterms® 2020', ['lf10-incoterms']),
      t('lf10-zahlungssicherung', 'Dokumenteninkasso und Akkreditiv', ['lf10-zahlungssicherung']),
      t('lf10-ausfuhrverfahren', 'Ausfuhrverfahren und Exportpapiere', ['lf10-ausfuhrverfahren']),
      t('lf10-container', 'Container- und Frachtplanung im Seeverkehr', ['lf10-container']),
      t('lf10-multimodal', 'Multimodaler Transport', ['lf10-multimodal'])
    ]
  },
  {
    id: 'LF11', kind: 'lf', no: 11, year: 3, hours: 40, source: 'kmk-rlp-2004',
    title: 'Importaufträge bearbeiten',
    topics: [
      t('lf11-versandverfahren', 'Versandverfahren (Transit)', ['lf11-versandverfahren']),
      t('lf11-zollverfahren', 'Überlassung zum zollrechtlich freien Verkehr und Veredelung', ['lf11-zollverfahren']),
      t('lf11-einfuhrabgaben', 'Einfuhrabgaben und Zollaufschub', ['lf11-einfuhrabgaben'])
    ]
  },
  {
    id: 'LF12', kind: 'lf', no: 12, year: 3, hours: 40, source: 'kmk-rlp-2004',
    title: 'Beschaffungslogistik anbieten und organisieren',
    topics: [
      t('lf12-logistiksysteme', 'Logistische Subsysteme und Sourcing-Konzepte', ['lf12-logistiksysteme']),
      t('lf12-bestellmenge', 'Bedarfsermittlung und optimale Bestellmenge', ['lf12-bestellmenge']),
      t('lf12-jit-abc', 'Just-in-time, Vorratshaltung und ABC-Analyse', ['lf12-jit-abc'])
    ]
  },
  {
    id: 'LF13', kind: 'lf', no: 13, year: 3, hours: 80, source: 'kmk-rlp-2004',
    title: 'Distributionslogistik anbieten und organisieren',
    topics: [
      t('lf13-kommissionierung', 'Kommissionierung und Versandvorbereitung', ['lf13-versandvorbereitung']),
      t('lf13-lagerkennzahlen', 'Lagerkennzahlen', ['lf13-distributionskennzahlen']),
      t('lf13-tourenplanung', 'Tourenplanung', ['lf13-tourenplanung']),
      t('lf13-entsorgung', 'Entsorgungs- und Recyclinglogistik', ['lf13-entsorgung'])
    ]
  },
  {
    id: 'LF14', kind: 'lf', no: 14, year: 3, hours: 40, source: 'kmk-rlp-2004',
    title: 'Marketingmaßnahmen entwickeln und durchführen',
    topics: [
      t('lf14-marktforschung', 'Marktforschung und Kundenanalyse', ['lf14-marktforschung']),
      t('lf14-marketingmix', 'Produkt-, Kommunikations- und Vertriebspolitik', ['lf14-marketingmix']),
      t('lf14-qualitaet', 'Qualitätsmanagement', ['lf14-qualitaet'])
    ]
  },
  {
    id: 'LF15', kind: 'lf', no: 15, year: 3, hours: 80, source: 'kmk-rlp-2004',
    title: 'Speditionelle und logistische Geschäftsprozesse an wirtschaftlichen Rahmenbedingungen ausrichten',
    topics: [
      t('lf15-infrastruktur', 'Verkehrsinfrastruktur und Umweltpolitik', ['lf15-infrastruktur']),
      t('lf15-wirtschaftspolitik', 'Ordnungs-, Geld-, Fiskal- und Arbeitsmarktpolitik', [], { alsoIn: ['wiso-w6-marktwirtschaft'] }),
      t('lf15-waehrung', 'Währungsrisiken', ['lf15-waehrung'])
    ]
  },
  {
    id: 'WISO', kind: 'subject', year: 0, hours: 160, source: 'saar-wiso-2016',
    title: 'Wirtschafts- und Sozialkunde (WiSo)',
    note: 'Gliederung nach dem saarländischen WiSo-Lehrplan (Stand Juli 2016). Ein neuerer Stand (2022) ist auf saarland.de verlinkt und muss noch geprüft werden. Für die Prüfung zählt zusätzlich der Prüfungsbereich „Wirtschafts- und Sozialkunde“ der Ausbildungsordnung.',
    topics: [
      t('wiso-w1-ausbildung', 'W1 Sich in der Arbeitswelt zurechtfinden', ['wiso-ausbildungsvertrag'], { alsoIn: ['lf01-bbig'] }),
      t('wiso-w2-wirtschaft', 'W2 Wirtschaftliche Zusammenhänge kennen', ['wiso-wirtschaft-grundlagen']),
      t('wiso-w3-mitbestimmung', 'W3 Den Betrieb aktiv mitgestalten', ['wiso-mitbestimmung-tarif']),
      t('wiso-w4-vertraege', 'W4 Die Rolle als Verbraucher ausüben', ['wiso-kaufvertrag'], { alsoIn: ['lf08-kaufvertrag'] }),
      t('wiso-w5-sozialversicherung', 'W5 Einkommen und Absicherung: Sozialversicherung', ['wiso-sozialversicherung'], { alsoIn: ['lf02-entgelt'] }),
      t('wiso-w5-einkommen', 'W5 Einkommen, Steuern und Haushaltsplanung', ['wiso-einkommensteuer']),
      t('wiso-w6-marktwirtschaft', 'W6 Entscheidungen in der sozialen Marktwirtschaft', ['wiso-wirtschaftspolitik']),
      t('wiso-s1-gesellschaft', 'S1 In unserer Gesellschaft leben und handeln', ['wiso-gesellschaft']),
      t('wiso-s2-demokratie', 'S2 Die Entwicklung der Demokratie verstehen', ['wiso-demokratie-geschichte']),
      t('wiso-s3-teilhabe', 'S3 An demokratischen Entscheidungsprozessen teilhaben', ['wiso-politische-teilhabe']),
      t('wiso-s4-politik', 'S4 Das politische System Deutschlands', ['wiso-politisches-system']),
      t('wiso-s5-europa', 'S5 In Europa leben und arbeiten', ['wiso-europa']),
      t('wiso-s6-welt', 'S6 Die Welt im Wandel mitgestalten', ['wiso-globalisierung'])
    ]
  }
];

// Prüfungsbezug laut SpedKfmAusbV 2004 (§ 8 Zwischenprüfung, § 9 Abschlussprüfung).
export const exams = [
  {
    id: 'zwischenpruefung', title: 'Zwischenprüfung (Mitte 2. Ausbildungsjahr)', source: 'spedkfmausbv-2004',
    details: 'Schriftlich, höchstens 180 Minuten. Prüfungsgebiete: Betriebliche Leistungserstellung, Rechnungswesen, Wirtschafts- und Sozialkunde. Inhalt: erstes Ausbildungsjahr und der entsprechende Berufsschulstoff.',
    areas: ['LF01', 'LF02', 'LF03', 'LF04', 'LF05', 'WISO']
  },
  {
    id: 'abschlusspruefung', title: 'Abschlussprüfung', source: 'spedkfmausbv-2004',
    details: 'Schriftlich: Leistungserstellung in Spedition und Logistik (höchstens 180 Min.), Kaufmännische Steuerung und Kontrolle (höchstens 90 Min.), Wirtschafts- und Sozialkunde (höchstens 90 Min.). Mündlich: fallbezogenes Fachgespräch (Vorbereitung höchstens 20 Min., Gespräch höchstens 30 Min.).',
    areas: ['LF01', 'LF02', 'LF03', 'LF04', 'LF05', 'LF06', 'LF07', 'LF08', 'LF09', 'LF10', 'LF11', 'LF12', 'LF13', 'LF14', 'LF15', 'WISO']
  }
];
