export const notifications = [
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "Krankmeldung",
    message:
      "Sie haben erfolgreich Ihre Krankmeldung gemeldet. Eine E-Mail wurde automatisch generiert und an Ihre Krankenversicherung gesendet zwecks weiterer Bearbeitung.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "UrlaubsantragGenehmigung",
    message: "Ihr Urlaubsantrag wurde erfolgreich genehmigt.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "ÜberstundenGenehmigung",
    message: "Ihre Überstundenanfrage wurde erfolgreich genehmigt.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "ÜberstundenAblehnung",
    message:
      "Ihre Überstundenanfrage wurde leider abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    thema: "UrlaubsantragAblehnung",
    message:
      "Ihr Urlaubsantrag wurde leider abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Krankmeldung",
    message:
      "hat sich krankgemeldet. Bitte beachten Sie dies für HR-Aufzeichnungen und Abrechnungszwecke.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Urlaubsanfrage",
    message:
      "hat einen Urlaubsantrag gestellt.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Arbeitszeiterfassung",
    message:
      "hat seine Arbeitszeit erfasst. Überprüfen Sie die Informationen für Abrechnungszwecke.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "Überstundenanfrage",
    message: "hat Überstunden angehäuft und beantragt deren Genehmigung.",
  },
];
