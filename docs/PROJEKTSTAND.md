# Projektstand

Stand: 17.10.2026 · Version 0.1.0

## Erledigt

- **App-Grundgerüst (PWA):** läuft im Browser auf PC und iPhone, offline nutzbar, installierbar (Startbildschirm bzw. Edge-App-Fenster). Hell- und Dunkelmodus, barrierearme Bedienung.
- **Speicherung:** dauerhaft im Gerät (IndexedDB). Speicher- und Synchronisationsstatus sind sichtbar. Export, Import (zusammenführen oder ersetzen) und Backup-Datei funktionieren.
- **Synchronisation (vorbereitet):** Anbindung an Supabase mit Login, Zugriffsschutz pro Benutzer (Row Level Security) und privatem Dateispeicher. Offline-Änderungen werden später übertragen. Gleichzeitige Änderungen werden feldweise zusammengeführt; echte Konflikte gehen nicht verloren, sondern landen unter „Einstellungen → Daten → Konflikte“. Mit einem Testserver geprüft, noch nicht mit deinem echten Konto.
- **Lehrplanstruktur:** 15 Lernfelder nach KMK-Rahmenlehrplan 2004 (Titel geprüft) plus WiSo nach saarländischem Lehrplan 2016, Überschneidungen verknüpft. Eigene Fächer aus dem Stundenplan lassen sich ergänzen.
- **Bereiche:** Lernen, Üben (8 Aufgabentypen, Übungs- und Testmodus, Fortsetzen), Karteikarten mit Wiederholungsplan, Meine Noten, Lernzettel, Lernplan mit Prüfungen, Materialien mit Texterkennung, Lexikon, Formelsammlung, Fehlerheft, Suche, Lesezeichen, Abdeckungsübersicht, Fehlermeldungen, Zurücksetzen der Übungsergebnisse.
- **Tests:** Unit-Tests, Rechte-Test der Datenbank (fremder Benutzer sieht nichts) und Ende-zu-Ende-Tests im Browser bestehen.
- **Veröffentlichung:** Quellcode im Repository `rfaelfox/lernprogramm-spedition`, automatische Veröffentlichung über GitHub Pages ist eingerichtet.

## Offen

- **Inhalte:** 12 von 75 Themen sind vollständig ausgearbeitet (Stand 17.10.2026). Den aktuellen Stand zeigt [QUELLEN-UND-ABDECKUNG.md](QUELLEN-UND-ABDECKUNG.md) und in der App „Abdeckung“. Nicht ausgearbeitete Themen sind dort ehrlich als „noch offen“ markiert.
- **Supabase:** Projekt anlegen und Project URL plus Publishable key eintragen (Anleitung: [DIENSTE-UND-KOSTEN.md](DIENSTE-UND-KOSTEN.md)). Danach Login auf PC und iPhone testen.
- **GitHub Pages:** in den Repository-Einstellungen einschalten (Quelle: GitHub Actions) und die Adresse prüfen.
- **Zu klären:** Beginn und Ende der Ausbildung, ob am KBBZ Halberg ein eigener Lehrplan für die Lernfelder gilt und ob der WiSo-Lehrplan 2022 den von 2016 ersetzt. Notenschlüssel und Gewichtung der Schule (bis dahin IHK-Schlüssel als Annahme).

## Nächste Schritte

1. Pages und Supabase einschalten, Login und Synchronisation auf beiden Geräten prüfen.
2. Inhalte für das 2. Lehrjahr (LF 6–10) und die Zwischenprüfung zuerst ausbauen, danach 1. und 3. Lehrjahr.
3. Echte Noten, Klassenarbeiten und Stundenplanfächer eintragen, damit Lernplan und Notenrechner passen.
4. Rückmeldungen aus dem Unterricht über „Fehler melden“ sammeln und Inhalte korrigieren.
