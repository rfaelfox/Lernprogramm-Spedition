# Dienste und Kosten

Stand der Preisangaben: Oktober 2026. Bitte vor Vertragsänderungen auf den Anbieterseiten prüfen.

| Dienst | Wofür | Kosten | Voraussetzungen / Grenzen |
|---|---|---|---|
| GitHub (Free) | Quellcode, automatische Prüfung | 0 € | GitHub-Konto. Repository ist öffentlich (nur Code, keine persönlichen Daten) |
| GitHub Pages | Veröffentlichung der App unter HTTPS | 0 € | Bei Free-Konten nur für öffentliche Repositorys |
| Supabase (Free Plan) | Login, Synchronisation, privater Dateispeicher | 0 € | 500 MB Datenbank, 1 GB Dateien, 5 GB Datenverkehr/Monat, max. 50 MB je Datei, 2 aktive Projekte. **Pausiert nach 1 Woche ohne Nutzung**; Daten bleiben erhalten, Reaktivierung im Dashboard per Klick |
| jsDelivr (CDN) | Lädt bei Bedarf Bibliotheken für Texterkennung (Tesseract.js), PDF-Text (pdf.js) und Word (mammoth) | 0 € | Nur beim ersten Gebrauch Internet nötig. Deine Dateien werden **nicht** übertragen, die Verarbeitung läuft auf dem Gerät |
| KI-API | nicht eingerichtet | – | Wäre kostenpflichtig pro Anfrage und bräuchte einen Server-Dienst, der den Schlüssel verwahrt. Ohne KI funktionieren alle Kernfunktionen |

Laufende Kosten insgesamt: **0 €**.

Quellen: https://supabase.com/pricing (abgerufen 17.10.2026), GitHub-Dokumentation zu Pages.

## Was passiert, wenn Supabase pausiert?

Die App arbeitet weiter vollständig offline auf jedem Gerät. Die Statusanzeige meldet einen Synchronisationsfehler. Nach dem Reaktivieren im Supabase-Dashboard werden alle zwischenzeitlichen Änderungen nachgeholt. Bei täglicher Nutzung pausiert das Projekt nicht.
