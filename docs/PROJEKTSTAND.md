# Projektstand

Stand: 18.10.2026 · Version 0.7.0

## Erledigt

- **App-Grundgerüst (PWA):** läuft im Browser auf PC und iPhone, offline nutzbar, installierbar (Startbildschirm bzw. Edge-App-Fenster). Hell- und Dunkelmodus, barrierearme Bedienung.
- **Speicherung:** dauerhaft im Gerät (IndexedDB). Speicher- und Synchronisationsstatus sind sichtbar. Export, Import (zusammenführen oder ersetzen) und Backup-Datei funktionieren.
- **Synchronisation:** Anbindung an Supabase mit Login, Zugriffsschutz pro Benutzer (Row Level Security) und privatem Dateispeicher. Offline-Änderungen werden später übertragen. Gleichzeitige Änderungen werden feldweise zusammengeführt; echte Konflikte gehen nicht verloren, sondern landen unter „Einstellungen → Daten → Konflikte“. Eingerichtet mit Rafaels Supabase-Projekt (Frankfurt, kostenlos); Registrierung für Fremde ist abgeschaltet.
- **Lehrplanstruktur:** 15 Lernfelder nach KMK-Rahmenlehrplan 2004 (Titel geprüft) plus WiSo nach saarländischem Lehrplan 2016, Überschneidungen verknüpft. Eigene Fächer aus dem Stundenplan lassen sich ergänzen.
- **Bereiche:** Lernen, Üben (8 Aufgabentypen, Übungs- und Testmodus, Fortsetzen), Karteikarten mit Wiederholungsplan, Meine Noten, Lernzettel, Lernplan mit Prüfungen, Materialien mit Texterkennung, Lexikon, Formelsammlung, Fehlerheft, Suche, Lesezeichen, Abdeckungsübersicht, Fehlermeldungen, Zurücksetzen der Übungsergebnisse.
- **Tests:** Unit-Tests, Rechte-Test der Datenbank (fremder Benutzer sieht nichts) und Ende-zu-Ende-Tests im Browser bestehen.
- **Veröffentlichung:** Quellcode im Repository `rfaelfox/Lernprogramm-Spedition`, veröffentlicht unter https://rfaelfox.github.io/Lernprogramm-Spedition/.
- **Unterrichtsmaterial:** LF 7 hat eine eigene Lektion mit den Umsatzsteuer-Arbeitsblättern aus dem Unterricht. Lerneinheiten zeigen die zugehörige Klassenarbeit und können direkt mit einem Termin verknüpft werden.
- **Updates:** Neue Versionen erscheinen in der App über den Knopf „Update“; Daten bleiben erhalten.

## Offen

- **Inhalte:** Alle 76 Themen sind ausgearbeitet (69 Lerneinheiten; Stand 18.10.2026). 6 Themen stehen auf „zu prüfen“, weil einzelne Werte nicht an amtlicher Stelle bestätigt werden konnten: Gefahrgut ADR, Fahrzeugkosten (Maut), Entsorgungslogistik (neues Verpackungsrecht), Infrastruktur/Umwelt (EU-ETS 2), Globalisierung (Lieferkettengesetz) und der Verkehrsträger in LF 6 (vorläufig Luftfracht). Details in [QUELLEN-UND-ABDECKUNG.md](QUELLEN-UND-ABDECKUNG.md).
- **Zu klären:** Beginn und Ende der Ausbildung, ob am KBBZ Halberg ein eigener Lehrplan für die Lernfelder gilt und ob der WiSo-Lehrplan 2022 den von 2016 ersetzt. Notenschlüssel und Gewichtung der Schule (bis dahin IHK-Schlüssel als Annahme).

## Nächste Schritte

1. Die 6 „zu prüfen“-Themen klären (Verkehrsträger LF 6 in der Schule erfragen, zeitabhängige Werte nachprüfen).
2. Echte Noten, Klassenarbeiten und Stundenplanfächer eintragen, damit Lernplan und Notenrechner passen.
3. Rückmeldungen aus dem Unterricht über „Fehler melden“ sammeln und Inhalte korrigieren.

## Regelmäßig aktualisieren

Zeitabhängige Werte (Sozialversicherung, Steuerfreibeträge, Mindestausbildungsvergütung, EZB-Leitzins, Inflation, Maut, CO₂-Preis, Gefahrgutregeln ICAO/IATA/ADR) stehen in der jeweiligen Einheit unter „Stand“ und sollten zu jedem Jahreswechsel geprüft werden.
