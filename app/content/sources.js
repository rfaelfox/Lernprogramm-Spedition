// Quellenverzeichnis. kind: 'schule' = schulischer Rahmenlehrplan/Landeslehrplan,
// 'betrieb' = betriebliche Ausbildungsordnung, 'recht' = Gesetz/Regelwerk, 'vergleich' = nur zum Abgleich.
// checked = Datum, an dem die Quelle für dieses Programm geprüft wurde.

export default [
  {
    id: 'kmk-rlp-2004', kind: 'schule',
    publisher: 'Sekretariat der Kultusministerkonferenz (KMK)',
    title: 'Rahmenlehrplan für den Ausbildungsberuf Kaufmann für Spedition und Logistikdienstleistung/Kauffrau für Spedition und Logistikdienstleistung',
    asOf: 'Beschluss vom 30.04.2004',
    url: 'https://wap.igmetall.de/0182429_KaufmanSpedLogistik_RLP.pdf',
    urlNote: 'Abgerufene Kopie. Die Originalfassung wird von der KMK veröffentlicht (kmk.org, Bereich Rahmenlehrpläne).',
    checked: '2026-10-17',
    note: '15 Lernfelder, 880 Stunden: LF 1–5 im 1. Jahr (320 Std.), LF 6–10 im 2. Jahr (280 Std.), LF 11–15 im 3. Jahr (280 Std.). Grundlage für die Struktur dieses Programms. Eine neuere Fassung wurde bei der Recherche nicht gefunden.'
  },
  {
    id: 'spedkfmausbv-2004', kind: 'betrieb',
    publisher: 'Bundesministerium der Justiz (gesetze-im-internet.de)',
    title: 'Verordnung über die Berufsausbildung zum Kaufmann für Spedition und Logistikdienstleistung/zur Kauffrau für Spedition und Logistikdienstleistung (SpedKfmAusbV 2004) mit Ausbildungsrahmenplan (Anlage)',
    asOf: 'Ausfertigung 26.07.2004 (BGBl. I S. 1902), zuletzt geändert am 25.05.2009 (BGBl. I S. 1165)',
    url: 'https://www.gesetze-im-internet.de/spedkfmausbv_2004/',
    checked: '2026-10-17',
    note: 'Betrieblicher Ausbildungsrahmenplan (nicht der Schullehrplan). Regelt Zwischenprüfung (§ 8) und Abschlussprüfung (§ 9). Eine Neuordnung wurde bei der Recherche nicht gefunden; vor der Prüfung bei der IHK Saarland bestätigen.'
  },
  {
    id: 'saar-wiso-2016', kind: 'schule',
    publisher: 'Ministerium für Bildung und Kultur des Saarlandes',
    title: 'Lehrplan Wirtschafts- und Sozialkunde für die Berufsschule',
    asOf: 'Juli 2016 (gültig ab 1.8.2016)',
    url: 'https://www.saarland.de/SharedDocs/Downloads/DE/mbk/Lehrplaene/Lehrplaene_berufliche_Schulen/Lehrplaene_Berufsschule/F%C3%A4cher_lt._Stundentafel/Lehrplan_WISO_Berufsschule_1.8.16.pdf?__blob=publicationFile&v=2',
    checked: '2026-10-17',
    note: '12 Kompetenzbereiche (W1–W6, S1–S6), 160 Stunden. Inhalt über eine Archivkopie (edumedia-depot.gei.de) geprüft.'
  },
  {
    id: 'saar-wiso-2022', kind: 'schule', toCheck: true,
    publisher: 'Ministerium für Bildung und Kultur des Saarlandes',
    title: 'Lehrplan Wirtschafts- und Sozialkunde (Datei „WiSo_2022.pdf“)',
    asOf: '2022 (laut Dateiname, nicht geprüft)',
    url: 'https://www.saarland.de/SharedDocs/Downloads/DE/mbk/Lehrpl%C3%A4ne/Lehrplaene_berufliche_Schulen/Lehrplaene_Berufsschule/F%C3%A4cher_lt._Stundentafel/WiSo_2022.pdf?__blob=publicationFile&v=4',
    checked: '2026-10-17',
    note: 'Konnte nicht abgerufen werden. Möglicherweise ersetzt diese Fassung den Stand 2016. Bitte in der Schule nachfragen oder Datei hochladen.'
  },
  {
    id: 'saar-lf-lehrplan', kind: 'schule', toCheck: true,
    publisher: 'Ministerium für Bildung und Kultur des Saarlandes',
    title: 'Saarländischer Lehrplan für die Fachklasse Spedition und Logistikdienstleistung',
    asOf: 'nicht gefunden',
    url: 'https://www.saarland.de/mbk/DE/portale/bildungsserver/schulen-und-bildungswege/lehrplaene/lehrplaene.berufliche/',
    checked: '2026-10-17',
    note: 'Ein eigener saarländischer Lehrplan für die Lernfelder wurde nicht gefunden. Vermutlich wird der KMK-Rahmenlehrplan direkt angewendet. Bitte am KBBZ Halberg bestätigen lassen.'
  },
  {
    id: 'isb-by-2004', kind: 'vergleich',
    publisher: 'Staatsinstitut für Schulqualität und Bildungsforschung (ISB), München',
    title: 'Lehrplanrichtlinien für die Berufsschule, Fachklassen Kaufmann/Kauffrau für Spedition und Logistikdienstleistung',
    asOf: 'Juni 2004',
    url: 'https://www.isb.bayern.de/fileadmin/user_upload/Berufliche_Schulen/Berufsschule/Lehrplan/bs_lpr_kaufmann_fuer_spedition_und_logistikdienstleistung__1_.pdf',
    checked: '2026-10-17',
    note: 'Nur zum Abgleich: Bayern ordnet die Lernfelder anders den Jahrgangsstufen zu. Gilt nicht im Saarland.'
  }
];
