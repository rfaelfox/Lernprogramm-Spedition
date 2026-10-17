# Projektstand

Stand: 17.10.2026 · Version 0.4.0

## Erledigt

- **App-Grundgerüst (PWA):** läuft im Browser auf PC und iPhone, offline nutzbar, installierbar (Startbildschirm bzw. Edge-App-Fenster). Hell- und Dunkelmodus, barrierearme Bedienung.
- **Speicherung:** dauerhaft im Gerät (IndexedDB). Speicher- und Synchronisationsstatus sind sichtbar. Export, Import (zusammenführen oder ersetzen) und Backup-Datei funktionieren.
- **Synchronisation:** Anbindung an Supabase mit Login, Zugriffsschutz pro Benutzer (Row Level Security) und privatem Dateispeicher. Offline-Änderungen werden später übertragen. Gleichzeitige Änderungen werden feldweise zusammengeführt; echte Konflikte gehen nicht verloren, sondern landen unter „Einstellungen → Daten → Konflikte“. Eingerichtet mit Rafaels Supabase-Projekt (Frankfurt, kostenlos); Registrierung für Fremde ist abgeschaltet.
- **Lehrplanstruktur:** 15 Lernfelder nach KMK-Rahmenlehrplan 2004 (Titel geprüft) plus WiSo nach saarländischem Lehrplan 2016, Überschneidungen verknüpft. Eigene Fächer aus dem Stundenplan lassen sich ergänzen.
- **Bereiche:** Lernen, Üben (8 Aufgabentypen, Übungs- und Testmodus, Fortsetzen), Karteikarten mit Wiederholungsplan, Meine Noten, Lernzettel, Lernplan mit Prüfungen, Materialien mit Texterkennung, Lexikon, Formelsammlung, Fehlerheft, Suche, Lesezeichen, Abdeckungsübersicht, Fehlermeldungen, Zurücksetzen der Übungsergebnisse.
- **Tests:** Unit-Tests, Rechte-Test der Datenbank (fremder Benutzer sieht nichts) und Ende-zu-Ende-Tests im Browser bestehen.
- **Veröffentlichung:** Quellcode im Repository `rfaelfox/Lernprogramm-Spedition`, veröffentlicht unter https://rfaelfox.github.io/Lernprogramm-Spedition/.
- **Updates:** Neue Versionen erscheinen in der App über den Knopf „Update“; Daten bleiben erhalten.

## Offen

- **Inhalte:** 27 von 75 Themen sind vollständig ausgearbeitet; das 2. Lehrjahr (LF 6–10) ist komplett. LF 6 ist vorläufig für Luftfracht geschrieben, bis der Verkehrsträger der Schule feststeht (Stand 17.10.2026). Den aktuellen Stand zeigt [QUELLEN-UND-ABDECKUNG.md](QUELLEN-UND-ABDECKUNG.md) und in der App „Abdeckung“. Nicht ausgearbeitete Themen sind dort ehrlich als „noch offen“ markiert.
- **Zu klären:** Beginn und Ende der Ausbildung, ob am KBBZ Halberg ein eigener Lehrplan für die Lernfelder gilt und ob der WiSo-Lehrplan 2022 den von 2016 ersetzt. Notenschlüssel und Gewichtung der Schule (bis dahin IHK-Schlüssel als Annahme).

## Nächste Schritte

1. Inhalte für das 1. Lehrjahr (LF 1–5, Stoff der Zwischenprüfung) ergänzen, danach 3. Lehrjahr und restliche WiSo-Themen.
2. Echte Noten, Klassenarbeiten und Stundenplanfächer eintragen, damit Lernplan und Notenrechner passen.
3. Rückmeldungen aus dem Unterricht über „Fehler melden“ sammeln und Inhalte korrigieren.
