import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";
import DataProtectionModal from "./DataProtectionModal"; // Make sure to import the DataProtectionModal component

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    role: "Mitarbeiter",
    university: "",
  });

  const [usernameInavailable, setUsernameInavailable] =
    useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false);
  const [showDataProtectionModal, setShowDataProtectionModal] =
    useState<boolean>(false);
  const [dataProtectionConsent, setDataProtectionConsent] =
    useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    if (passwordError) {
      setPasswordError(null);
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataProtectionConsent(e.target.checked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dataProtectionConsent) {
      alert("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Die Passwörter stimmen nicht überein");
      return;
    }

    setPasswordError(null);

    const { username, fullName, password, role, university } = formData;

    try {
      await axios.post("http://localhost:5001/api/register", {
        username,
        fullName,
        password,
        role,
        university,
      });

      setUsernameInavailable(false);
      setRegistrationSuccess(true);

      // Redirect to login page after a delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      setUsernameInavailable(true);
      console.error("Error registering user:", error.response?.data?.error);
    }
  };

  return (
    <>
      {registrationSuccess && (
        <div className="alert alert-success text-center" role="alert">
          Benutzer erfolgreich registriert! Sie werden zum Anmeldebildschirm
          weitergeleitet.
        </div>
      )}
      <div
        className="container p-4 my-5 rounded bg-light shadow"
        style={{ maxWidth: "400px" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2>Registrierungsseite</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Benutzername
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    usernameInavailable ? "is-invalid" : ""
                  }`}
                  id="username"
                  onChange={handleChange}
                  required
                />
                {usernameInavailable && (
                  <div className="invalid-feedback">
                    Benutzername bereits vergeben.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Vollständiger Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Passwort
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  id="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Passwort bestätigen
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  onChange={handleChange}
                  required
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="university" className="form-label">
                  Universität
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="university"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Position
                </label>
                <select
                  className="form-select"
                  id="role"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Rolle auswählen
                  </option>
                  <option value="Mitarbeiter">Mitarbeiter</option>
                  <option value="Aushilfs/Studentenkräfte">
                    Aushilfs/Studentenkräfte
                  </option>
                  <option value="Niederlassungsleiter">
                    Niederlassungsleiter
                  </option>
                  <option value="Geschäftsführung">Geschäftsführung</option>
                </select>
              </div>
              <Form.Check
                type="checkbox"
                id="dataProtectionConsent"
                label={
                  <>
                    Ich habe die{" "}
                    <span
                      className="text-primary"
                      onClick={() => setShowDataProtectionModal(true)}
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Datenschutzerklärung
                    </span>{" "}
                    gelesen und stimme zu.
                  </>
                }
                onChange={handleCheckboxChange}
                required
              />
              <Button type="submit" className="btn btn-primary mt-3">
                Registrieren
              </Button>
              <div className="mt-2">
                <small className="text-muted">
                  Sie haben bereits ein Konto?{" "}
                  <Link to="/login" className="text-primary font-italic">
                    Hier einloggen
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DataProtectionModal
        show={showDataProtectionModal}
        onHide={() => setShowDataProtectionModal(false)}
        title="Datenschutzerklärung"
      />
    </>
  );
};

export default Register;
