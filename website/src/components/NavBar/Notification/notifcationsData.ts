export const notifications = [
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    message:
      "Sie haben erfolgreich Ihre Krankmeldung gemeldet. Eine E-Mail wurde automatisch generiert und an Ihre Krankenversicherung gesendet zwecks weiterer Bearbeitung.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    message: "Ihr Urlaubsantrag wurde erfolgreich genehmigt.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    message: "Ihre Überstundenanfrage wurde erfolgreich genehmigt.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    message: "Ihre Überstundenanfrage wurde leider abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
  },
  {
    sender: "System",
    receiver: ["Mitarbeiter", "Aushilfskraft"],
    message: "Ihr Urlaubsantrag wurde leider abgelehnt. Überprüfen Sie die App für weitere Details und überlegen Sie eine erneute Einreichung.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    message: "hat sich krankgemeldet. Bitte beachten Sie dies für HR-Aufzeichnungen und Abrechnungszwecke.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    message: "hat einen Urlaubsantrag gestellt. Bitte überprüfen Sie und nehmen Sie entsprechende Maßnahmen.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    message: "hat seine Arbeitszeit erfasst. Überprüfen Sie die Informationen für Abrechnungszwecke.",
  },
  {
    sender: "Mitarbeiter",
    receiver: ["Vorgesetzte", "Niederlassungsleiter", "Personalabteilung"],
    thema: "ÜberstundenAnfrage",
    message: "hat Überstunden angehäuft und beantragt deren Genehmigung.",
  }
  
];
