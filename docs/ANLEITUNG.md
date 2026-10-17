# Start und Installation

Die App liegt unter **https://rfaelfox.github.io/Lernprogramm-Spedition/** (sobald GitHub Pages eingeschaltet ist, siehe unten).

## Windows-PC (Microsoft Edge oder Google Chrome)

1. Adresse in Edge öffnen.
2. In der Adressleiste auf das Symbol **„App verfügbar – Installieren“** klicken. Alternativ: Menü **⋯ → Apps → Diese Website als App installieren**.
3. Im Dialog „Auf dem Desktop anheften“ bzw. „Desktopverknüpfung erstellen“ anhaken.
4. Die App startet im eigenen Fenster mit eigenem Symbol und funktioniert danach auch offline.

Alternativ liegt im Ordner `windows/` die Datei **„Lernprogramm starten.bat“**, die die App in einem eigenen Edge-Fenster öffnet, sowie **„Desktop-Verknüpfung erstellen.bat“**.

## iPhone (Safari)

1. Adresse in **Safari** öffnen (nicht in Chrome für iOS).
2. Auf **Teilen** (Quadrat mit Pfeil) tippen → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Die App immer über das neue Symbol starten. Sie öffnet sich ohne Browserleiste.

Was auf dem iPhone geht und was nicht:

| Funktion | iPhone | Windows |
|---|---|---|
| Eigenes App-Symbol, eigenes Fenster | ja (über Safari) | ja (Edge/Chrome) |
| Lerninhalte, Übungen, Noten offline | ja, nach dem ersten Öffnen mit Internet | ja |
| Offline erfasste Änderungen später synchronisieren | ja, sobald die App wieder geöffnet ist und Internet hat | ja |
| Synchronisation im Hintergrund bei geschlossener App | nein (von iOS nicht erlaubt) | nein |
| Benachrichtigungen | nur bei installierter App ab iOS 16.4 und nur beim Öffnen der App | beim Öffnen der App |
| Daten bleiben dauerhaft gespeichert | ja, wenn über den Home-Bildschirm installiert. Safari kann Daten nicht installierter Websites nach 7 Tagen ohne Nutzung löschen | ja |
| PDF speichern | Teilen → Drucken → Teilen → In Dateien sichern | Drucken → „Als PDF speichern“ |
| Texterkennung für Fotos/Scans | ja (erstes Mal mit Internet) | ja |

Mit eingerichteter Synchronisation sind die Daten zusätzlich online gesichert.

## Einmalige Einrichtung

### A) GitHub Pages einschalten (Veröffentlichung der App)

1. github.com → Repository **Lernprogramm-Spedition** → **Settings** → **Pages**.
2. Unter **Build and deployment → Source** die Option **GitHub Actions** wählen.
3. Fertig. Nach jeder Änderung am Code wird die App automatisch geprüft und neu veröffentlicht (Reiter **Actions**).

### B) Supabase für Synchronisation und Login

1. Auf supabase.com im Projekt **lernprogramm** links **SQL Editor** → **New query**.
2. Den kompletten Inhalt von [`server/supabase.sql`](../server/supabase.sql) einfügen → **Run**. Es sollte „Success“ erscheinen.
3. **Authentication → Users → Add user → Create new user**: deine E-Mail-Adresse und ein sicheres Passwort eintragen, **Auto Confirm User** anhaken.
4. **Authentication → Sign In / Providers** (bzw. „Providers“ → Email): **Allow new users to sign up** ausschalten. Damit kann sich niemand sonst ein Konto anlegen.
5. **Project Settings → API Keys** (bzw. „Data API“): die **Project URL** und den **Publishable key** (früher „anon public“) kopieren. **Nicht** den Secret- oder service_role-Schlüssel!
6. URL und Publishable key an Claude im Projekt schicken (die Werte sind für den Browser bestimmt und kein Geheimnis) oder selbst in `app/config.js` eintragen.
7. In der App: **Einstellungen → Synchronisation → Anmelden**. Auf jedem Gerät einmal anmelden.

Warum ist der Publishable key kein Geheimnis? Er erlaubt ohne Anmeldung keinerlei Zugriff auf Daten. Jede Tabellenzeile ist per Row Level Security an dein Benutzerkonto gebunden, Dateien liegen in einem privaten Speicherbereich unter deiner Benutzer-ID.

## Speicher- und Synchronisationsstatus

Oben rechts zeigt die App immer den echten Zustand: „Lokal gespeichert“, „Speichert …“, „Synchronisiert“, „Offline · 2 ausstehend“ oder „Sync-Fehler“. Ein Klick darauf öffnet Details. Erst wenn eine Speicherung tatsächlich abgeschlossen ist, wird sie als gespeichert gemeldet.
