# Datensicherung und Wiederherstellung

Deine Daten liegen auf jedem Gerät in der Browser-Datenbank (IndexedDB) und, wenn eingerichtet, zusätzlich verschlüsselt übertragen in deinem Supabase-Projekt. Ein eigenes Backup schützt zusätzlich, etwa vor versehentlichem Löschen.

## Backup erstellen

1. **Einstellungen → Daten & Backup → Vollständiges Backup speichern**.
2. Es wird eine Datei `lernprogramm-backup-JJJJ-MM-TT.json` heruntergeladen. Sie enthält Noten, Lernstand, Lernzettel mit allen Versionen, Termine, Notizen, Einstellungen und Materialien (Dateien eingebettet).
3. Datei an einem sicheren Ort ablegen (z. B. OneDrive oder USB-Stick). Empfehlung: einmal im Monat und vor jeder Prüfung.

„Backup ohne Dateien“ ist deutlich kleiner und enthält alles außer den hochgeladenen Originaldateien.

## Wiederherstellen

1. **Einstellungen → Daten & Backup → Backup wiederherstellen …** und die Datei wählen.
2. **Zusammenführen** (empfohlen): Neuere Stände gewinnen, nichts wird gelöscht.
   **Ersetzen**: Alle Daten auf diesem Gerät werden durch das Backup ersetzt (Bestätigung mit dem Wort ERSETZEN).
3. Bei aktiver Synchronisation werden die wiederhergestellten Daten anschließend hochgeladen.

## Schutz vor Datenverlust

- Löschen von Noten, Lernzetteln, Materialien und Terminen fragt immer nach. „Alles löschen“ erfordert das Bestätigungswort LÖSCHEN.
- „Übungsergebnisse zurücksetzen“ betrifft nur Aufgabenergebnisse, Karteikarten und Fehlerheft, nie Noten oder Materialien.
- Bei gleichzeitigen Änderungen auf zwei Geräten werden getrennte Felder zusammengeführt. Bei echten Konflikten gewinnt der neuere Stand, der ältere bleibt unter **Einstellungen → Daten & Backup → Konflikte** erhalten und kann mit einem Klick zurückgeholt werden.
- Speicherfehler (z. B. voller Speicher) werden rot angezeigt und nie als „gespeichert“ gemeldet.
