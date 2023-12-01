# TimeNest App ReadMe

## Projektbeschreibung
Diese Kalender-App wurde entwickelt, um die Arbeitszeit zu erfassen, Urlaubsanträge zu verwalten und Krankmeldungen sowie Gesundmeldungen zu übermitteln. Das Projekt wurde im Auftrag der "iter educational AG" durchgeführt, einem Unternehmen, das mehrere regionale Bildungszentren und eine private Hochschule betreibt. Das Ziel war die Einführung einer IT-gestützten Arbeitszeiterfassung, um den gesetzlichen Anforderungen des Arbeitszeitgesetzes zu entsprechen.

## Funktionen
Die Kalender-App ermöglicht es Mitarbeitern:
- Ihre Arbeitszeit zu erfassen.
- Sich selbst krank oder gesund zu melden.
- Urlaub zu beantragen.

Die Meldungen werden sowohl an die Personalabteilung als auch an die Vorgesetzten übermittelt, um eine umfassende Übersicht über die Mitarbeiterverfügbarkeit zu gewährleisten. Vorgesetzte können auch Überstunden ihrer Mitarbeiter einsehen und freigeben. Im Krankheitsfall informiert die App über den Ablauf der Lohnfortzahlung und sendet eine E-Mail an die Krankenkasse des betroffenen Mitarbeiters.

## Technische Details
Die App wurde mithilfe von React entwickelt und ist sowohl im Browser auf dem Desktop als auch auf iOS-basierten Diensthandys und iPads voll funktionsfähig. Sie enthält verschiedene Ansichten, darunter Monats-, Wochen-, Tages- und Listenansichten, um den unterschiedlichen Bedürfnissen der Benutzer gerecht zu werden.

## Melde- und Freigabeprozess
Die App verfügt über einen Melde- und Freigabeprozess, der sicherstellt, dass relevante Informationen an die richtigen Stellen gelangen. Dies umfasst die Erfassung von Arbeitszeiten, Krankmeldungen, Gesundmeldungen und Urlaubsanträgen. Vorgesetzte werden über Abwesenheiten informiert und können Überstunden freigeben.

## Nutzung und Entwicklung
Die App kann durch das Ausführen der bereitgestellten React-Komponente in einer Entwicklungsumgebung getestet werden. Es wurde darauf geachtet, dass die Anwendung benutzerfreundlich und intuitiv ist. Für eine erfolgreiche Implementierung ist eine entsprechende Einführungsplanung mit Schulungsplänen für die Mitarbeiter vorgesehen.

## Code-Struktur
Die Code-Struktur ist gut organisiert und modular aufgebaut. Die Hauptkomponente ist die `Calendar`-Komponente, die verschiedene Unterkomponenten für die Ansichten und Steuerelemente verwendet. Die Verwendung von React Hooks ermöglicht eine effiziente Verwaltung des Zustands und eine reaktive Aktualisierung der Benutzeroberfläche.

## Lokalisierung
Die App enthält lokale Sprachunterstützung für Deutsch ("de-DE"). Die Monatsnamen sind auf Deutsch formatiert, um eine bessere Benutzererfahrung für deutschsprachige Benutzer zu gewährleisten.

## Weiterentwicklung
Die App kann weiterentwickelt werden, um zusätzliche Funktionen hinzuzufügen oder bestehende zu optimieren. Die Implementierung von Sicherheitsmechanismen und eine sorgfältige Fehlerbehandlung könnten die Robustheit der Anwendung weiter verbessern.
