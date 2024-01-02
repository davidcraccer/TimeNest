# Calendar App ReadMe

## Spezifika

### React Router Integration

Die App nutzt React Router, um eine benutzerfreundliche Navigation zu gewährleisten. Die Hauptkomponente `App` enthält Routen für die Startseite, die Anmeldung und die Registrierung. Die Navigation wird durch die `NavBar`-Komponente erleichtert, die den Benutzer zwischen den verschiedenen Seiten leitet.

### Chat-Funktion

Zusätzlich zur Arbeitszeiterfassung und Verwaltung von Abwesenheiten wird die App eine integrierte Chat-Funktion bieten. Mitarbeiter können miteinander kommunizieren, Ankündigungen machen und schnell Informationen austauschen. Der Chat wird dazu beitragen, die Kommunikation im Team zu verbessern und die Zusammenarbeit zu erleichtern.

### Benachrichtigungsfunktion

Die App wird eine Benachrichtigungsfunktion enthalten, um die Benutzer über wichtige Ereignisse zu informieren. Benachrichtigungen können beispielsweise über eingereichte Urlaubsanträge, genehmigte Überstunden oder Chat-Nachrichten erfolgen. Dies erhöht die Transparenz und sorgt dafür, dass Mitarbeiter zeitnah über relevante Geschehnisse informiert werden.

## App-Struktur

### Hauptkomponente (`App.tsx`)

Die Hauptkomponente `App` fungiert als Einstiegspunkt und enthält die Routing-Logik. Sie integriert auch die globale Navigationsleiste (`NavBar`), um eine konsistente Navigation zwischen den Seiten zu gewährleisten.

### Seitenkomponente (`Home.tsx`)

Die Seitenkomponente `Home` repräsentiert die Startseite der App. Hier wird die Hauptfunktionalität der App präsentiert - der Kalender. Die Integration des Kalenders (`Calendar`) ermöglicht es Benutzern, ihre Arbeitszeiten, Urlaubsanträge und Abwesenheiten zu verwalten.

## Weiterentwicklung und Anpassung

### Skalierbarkeit

Die Architektur der App ist so konzipiert, dass sie leicht erweitert werden kann. Neue Funktionen können einfach hinzugefügt werden, und die Anwendung kann leicht an spezifische Anforderungen des Unternehmens angepasst werden.

### Anpassbare Styling-Möglichkeiten

Die Stylesheets (`App.css` und `Home.css`) ermöglichen eine einfache Anpassung des Erscheinungsbilds der App. Die Farben, Schriftarten und Layouts können nach den Designrichtlinien des Unternehmens angepasst werden.

## Nutzung der App

### Registrierung und Anmeldung

Die App unterstützt die Registrierung und Anmeldung von Benutzern. Neue Mitarbeiter können sich registrieren, während bestehende Benutzer sich mit ihren Anmeldedaten einloggen können.

### Benutzerfreundliche Oberfläche

Die Benutzeroberfläche der App ist intuitiv gestaltet, um eine einfache Navigation und eine effiziente Nutzung zu ermöglichen. Die Kalenderansichten sind übersichtlich und bieten klare Funktionen zur Zeiterfassung und -verwaltung.

### Integration in den Arbeitsalltag

Die App wurde entwickelt, um nahtlos in den Arbeitsalltag der Mitarbeiter zu integrieren. Die Kalenderansichten ermöglichen eine schnelle Übersicht über Arbeitszeiten, Abwesenheiten und wichtige Ereignisse.

## Lokale Entwicklung

### Installation

Um die App lokal zu entwickeln, führen Sie die folgenden Schritte aus:

1. Klonen Sie das Repository.
2. Installieren Sie die erforderlichen Abhängigkeiten mit `npm install`.
3. Starten Sie die Anwendung mit `npm start`.

### Anpassung

Passen Sie die App an die spezifischen Anforderungen Ihres Unternehmens an, indem Sie die entsprechenden Komponenten bearbeiten und neue Funktionen hinzufügen.

## Schlussbemerkung

Die Kalender-App bietet eine umfassende Lösung für die Erfassung von Arbeitszeiten, Abwesenheitsmanagement, Chat-Funktionen und Benachrichtigungen. Sie wurde entwickelt, um den Anforderungen moderner Arbeitsumgebungen gerecht zu werden und die Effizienz sowie die Kommunikation im Team zu fördern.

# Projektbeschreibung: Bewertung, Design, Vorbereitung und Entwicklung einer App zur Zeiterfassung, Urlaubsanfrage und Benachrichtigung bei Krankheit

## Rechtlicher Kontext:

Die App wird entwickelt, um den gesetzlichen Anforderungen nachzukommen, die Arbeitgeber zur Aufzeichnung der täglichen Arbeitsstunden verpflichten.
Das Unternehmen "iter educational AG" beabsichtigt die Einführung eines IT-unterstützten Zeiterfassungssystems.

## Unternehmenshintergrund:

"iter educational AG" betreibt mehrere regionale Bildungszentren und eine private Universität.

## Ziele:

Beauftragt vom CIO, Herrn Christian Grosser, besteht das Ziel darin, Software zu evaluieren und zu entwickeln, die es Mitarbeitern ermöglicht:

- Ihre Arbeitsstunden aufzuzeichnen.
- Krankheits- und Gesundheitsstatus zu melden.
- Urlaubszeiten zu beantragen.

## Benachrichtigung und Berichterstattung:

Benachrichtigungen sollen nicht nur an die Personalabteilung, sondern auch an Vorgesetzte gesendet werden.
Vorgesetzte sollen über Abwesenheiten und Überstunden informiert werden.
Die App soll auf die mögliche Lohnfortzahlung während einer Krankheitsphase hinweisen und eine E-Mail an die Krankenversicherung des betreffenden Mitarbeiters senden, um das Ende der Lohnfortzahlung zu bestätigen.

## Kompatibilität:

Die Software sollte in Desktop-Browsern und auf iOS-basierten Firmengeräten wie iPhones und iPads funktionieren.

## Prozessmodellierung:

Definieren und beschreiben Sie die Melde- und Genehmigungsprozesse für:

- Aufzeichnung von Arbeitsstunden.
- Beantragung von Urlaub.
- Meldung von Krankheit und Gesundheit.

## Funktionsdemonstration:

Die App sollte mit fiktiven Beispielen entwickelt werden.
Ein funktionsfähiger Demonstrator sollte erstellt werden, der die Fähigkeiten der App anhand von Beispieldaten präsentiert.

## Umsetzungsplanung:

Entwickeln Sie einen Einführungsplan mit einem Konzept für die Einführung der Software.
Enthalten Sie einen Schulungsplan, damit Mitarbeiter sich mit der neuen Software vertraut machen können.

## Abschlusspräsentation:

Schließen Sie das Projekt ab, indem Sie den voll funktionsfähigen Demonstrator präsentieren und seine Funktionen und Fähigkeiten anhand der bereitgestellten Beispieldaten demonstrieren.
