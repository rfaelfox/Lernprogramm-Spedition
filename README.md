# Lernprogramm Spedition & Logistik

Persönlicher Lernbegleiter für die Ausbildung **Kaufmann/Kauffrau für Spedition und Logistikdienstleistung** (KBBZ Halberg Saarbrücken). Läuft als installierbare Web-App (PWA) auf Windows-PC und iPhone mit denselben Daten.

**Bereiche:** Dashboard · Lernen (Ausbildungsjahr → Lernfeld/Fach → Thema → Lerneinheit) · Karteikarten mit verteilter Wiederholung · Üben (8 Aufgabentypen, Übungs- und Testmodus) · Lernzettel (Zusammenstellen, Bearbeiten, Versionen, PDF) · Meine Noten · Termine & Lernplan · Materialien (PDF, Bilder, Word, Texterkennung) · Lexikon & Formeln · Fehlerheft · Suche · Einstellungen (Backup, Sync).

## Dokumentation

| Dokument | Inhalt |
|---|---|
| [docs/ANLEITUNG.md](docs/ANLEITUNG.md) | Start und Installation auf PC und iPhone, Einrichtung der Synchronisation |
| [docs/DIENSTE-UND-KOSTEN.md](docs/DIENSTE-UND-KOSTEN.md) | Welche Dienste genutzt werden und was sie kosten |
| [docs/BACKUP.md](docs/BACKUP.md) | Datensicherung und Wiederherstellung |
| [docs/QUELLEN-UND-ABDECKUNG.md](docs/QUELLEN-UND-ABDECKUNG.md) | Lehrplanquellen und Stand der ausgearbeiteten Inhalte |
| [docs/INHALTE-ERGAENZEN.md](docs/INHALTE-ERGAENZEN.md) | Lerninhalte ergänzen und aktualisieren |
| [docs/PROJEKTSTAND.md](docs/PROJEKTSTAND.md) | Erledigt, offen, nächste Schritte |

## Aufbau

```
app/                 Die App (wird unverändert veröffentlicht, kein Build nötig)
  index.html, sw.js  Einstieg und Offline-Speicher (Service Worker)
  config.js          Supabase-Adresse und Publishable Key (öffentlich, kein Geheimnis)
  js/                Programmcode (Vanilla JavaScript, ES-Module)
  content/           Lehrplanstruktur, Quellen, Lerneinheiten
server/supabase.sql  Datenbank, Zugriffsschutz (Row Level Security), privater Dateispeicher
tests/               Logik-Tests und Browser-Tests
tools/               Inhaltsprüfung, Testumgebung
```

## Entwickeln und testen

```
node tools/build-index.mjs          # Lerneinheiten prüfen und Verzeichnis erzeugen
node --test tests/unit.test.mjs     # Bewertung, Noten, Zusammenführung
npx http-server app -p 8765 -c-1    # App lokal starten: http://localhost:8765
# Browser-Tests (benötigen Playwright und tools/dev: npm i):
node tools/dev/mock-supabase.mjs &  # nachgebildetes Supabase mit echter Datenbank-Logik
node tests/e2e.mjs
node tools/dev/rls-test.mjs         # Zugriffsschutz der Datenbank
```
