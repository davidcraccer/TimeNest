export const notifications = [
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "Krankmeldung",
    message: "Sie haben erfolgreich Ihre Krankmeldung gemeldet. Eine E-Mail wurde automatisch generiert und an Ihre Krankenversicherung gesendet zwecks weiterer Bearbeitung.",
    details: "Die von Ihnen eingereichte Krankmeldung wurde erfolgreich erfasst und an Ihre Krankenversicherung weitergeleitet. Dies ermöglicht eine reibungslose Bearbeitung Ihres Krankheitsfalls. Unsere automatisierte E-Mail-Benachrichtigung gewährleistet, dass alle relevanten Informationen korrekt an die Krankenversicherung übermittelt werden. Bitte überprüfen Sie regelmäßig Ihren E-Mail-Posteingang für eventuelle Rückmeldungen oder weitere Anweisungen."
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "UrlaubsantragGenehmigung",
    message: "Ihr Urlaubsantrag wurde erfolgreich genehmigt.",
    details: "Herzlichen Glückwunsch! Ihr Urlaubsantrag wurde erfolgreich genehmigt. Sie können sich nun auf Ihre wohlverdiente Auszeit freuen. Überprüfen Sie bitte die App oder Ihr E-Mail-Postfach für weitere Informationen, wie beispielsweise die aktualisierten Urlaubsdaten und eventuelle zusätzliche Hinweise für Ihren Urlaubszeitraum."
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "ÜberstundenGenehmigung",
    message: "Ihre Überstundenanfrage wurde erfolgreich genehmigt.",
    details: "Gute Nachrichten! Ihre Anfrage für Überstunden wurde erfolgreich genehmigt. Dies bedeutet, dass Ihre zusätzlich geleisteten Arbeitsstunden nun offiziell erfasst und anerkannt sind. Überprüfen Sie bitte die App oder Ihre Abrechnungsunterlagen für detaillierte Informationen zu den genehmigten Überstunden sowie deren Auswirkungen auf Ihre Arbeitszeit und Vergütung."
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "ÜberstundenAblehnung",
    message: "Ihre Überstundenanfrage wurde leider abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
    details: "Bedauerlicherweise konnte Ihre Anfrage für Überstunden dieses Mal nicht genehmigt werden. Bitte überprüfen Sie die App für detaillierte Informationen zu den Gründen der Ablehnung. Falls möglich, nehmen Sie Anpassungen vor und reichen Sie Ihre Anfrage erneut ein. Wir stehen Ihnen gerne zur Verfügung, um sicherzustellen, dass Ihre zusätzlichen Arbeitsstunden angemessen berücksichtigt werden."
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "UrlaubsantragAblehnung",
    message: "Ihr Urlaubsantrag wurde leider abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
    details: "Wir bedauern mitteilen zu müssen, dass Ihr Urlaubsantrag dieses Mal nicht genehmigt werden konnte. Bitte überprüfen Sie die App für ausführliche Informationen zu den Gründen der Ablehnung. Bei Bedarf können Sie Anpassungen vornehmen und Ihren Urlaubsantrag erneut einreichen. Wir stehen Ihnen zur Verfügung, um sicherzustellen, dass Sie die benötigte Auszeit zu einem geeigneten Zeitpunkt erhalten."
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Krankmeldung",
    message: "hat sich krankgemeldet. Bitte beachten Sie dies für HR-Aufzeichnungen und Abrechnungszwecke.",
    details: "Ein Mitarbeiter hat sich krankgemeldet. Bitte berücksichtigen Sie diese Information für die Aufzeichnungen im Personalwesen sowie für Abrechnungszwecke. Falls erforderlich, stehen wir Ihnen zur Verfügung, um weitere Details oder Unterstützung bereitzustellen."
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Urlaubsanfrage",
    message: "hat einen Urlaubsantrag gestellt.",
    details: "Ein Mitarbeiter hat einen Urlaubsantrag gestellt. Bitte überprüfen Sie die App oder Ihr E-Mail-Postfach für weitere Details zu den geplanten Urlaubsdaten und eventuellen Anmerkungen des Mitarbeiters. Falls erforderlich, setzen Sie sich bitte mit dem Mitarbeiter in Verbindung, um weitere Einzelheiten zu klären oder den Urlaubsantrag zu genehmigen."
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Arbeitszeiterfassung",
    message: "hat seine Arbeitszeit erfasst. Überprüfen Sie die Informationen für Abrechnungszwecke.",
    details: "Ein Mitarbeiter hat erfolgreich seine Arbeitszeit erfasst. Die erfassten Stunden sind: [Fügen Sie hier die tatsächlich erfassten Stunden ein]. Wir empfehlen, die erfassten Informationen für Abrechnungszwecke zu überprüfen. Dies stellt sicher, dass die Arbeitsstunden korrekt erfasst und vergütet werden. Bei Unstimmigkeiten oder Fragen zu den erfassten Arbeitszeiten stehen wir Ihnen gerne zur Verfügung, um Unterstützung zu bieten."
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Überstundenanfrage",
    message: "hat Überstunden angehäuft und beantragt deren Genehmigung.",
    details: "Ein Mitarbeiter hat Überstunden angehäuft und beantragt deren Genehmigung. Die angefallenen Überstunden betragen: [Fügen Sie hier die tatsächlich angefallenen Überstunden ein]. Bitte überprüfen Sie die App oder Ihr E-Mail-Postfach für detaillierte Informationen zu den angefallenen Überstunden sowie für Anweisungen zur Genehmigung. Bei Fragen oder Bedenken stehen wir Ihnen gerne zur Verfügung, um sicherzustellen, dass die zusätzlichen Arbeitsstunden angemessen behandelt werden."
  },
];
