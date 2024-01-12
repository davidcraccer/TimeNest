import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import DataProtectionModal from "./DataProtectionModal";

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

  const [isUsernameLengthError, setIsUsernameLengthError] =
    useState<boolean>(false);
  const [usernameLengthError, setUsernameLengthError] = useState<string | null>(
    null
  );

  const [isUsernameAvailable, setIsUsernameAvailable] =
    useState<boolean>(true);
  const [usernameAvailableError, setUsernameAvailableError] = useState<
    string | null
  >(null);

  const [isPasswordMatchError, setIsPasswordMatchError] =
    useState<boolean>(false);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(
    null
  );

  const [isPasswordLengthError, setIsPasswordLengthError] =
    useState<boolean>(false);
  const [passwordLengthError, setPasswordLengthError] = useState<string | null>(
    null
  );

  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false);
  const [showDataProtectionModal, setShowDataProtectionModal] =
    useState<boolean>(false);
  const [dataProtectionConsent, setDataProtectionConsent] =
    useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });

    if (id === "password") {
      if (value.length < 7) {
        setIsPasswordLengthError(true);
        setPasswordLengthError(
          "Das Passwort muss mindestens 7 Zeichen lang sein"
        );
      } else {
        setIsPasswordLengthError(false);
        setPasswordLengthError(null);
      }
    }
    
    if (id === "username") {
      if (value.length < 7) {
        setIsUsernameLengthError(true);
        setUsernameLengthError(
          "Der Benutzername muss mindestens 7 Zeichen lang sein"
        );
      } else {
        setIsUsernameLengthError(false);
        setUsernameLengthError(null);
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dataProtectionConsent) {
      alert("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }

    if (formData.username.length < 7) {
      setIsUsernameLengthError(true);
      setUsernameLengthError(
        "Der Benutzername muss mindestens 7 Zeichen lang sein"
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Die Passwörter stimmen nicht überein");
      return;
    }

    setUsernameLengthError(null);
    setPasswordMatchError(null);

    const { username, fullName, password, role, university } = formData;

    try {
      await axios.post("http://localhost:5001/api/register", {
        username,
        fullName,
        password,
        role,
        university,
      });

      setIsUsernameAvailable(true);
      setRegistrationSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      setIsUsernameAvailable(false);
      setUsernameAvailableError("Benutzer bereits gegeben");
      console.error("Error registering user:", error.response?.data?.error);
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataProtectionConsent(e.target.checked);
  };

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setIsPasswordMatchError(true);
      setPasswordMatchError("Die Passwörter stimmen nicht überein");
    } else {
      setIsPasswordMatchError(false);
      setPasswordMatchError(null);
    }
  }, [formData.confirmPassword]);

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
                    !isUsernameAvailable || usernameLengthError ? "is-invalid" : ""
                  }`}
                  id="username"
                  onChange={handleChange}
                  required
                />
                {!isUsernameAvailable && (
                  <div className="invalid-feedback">
                    {usernameAvailableError}
                  </div>
                )}
                {isUsernameLengthError && (
                  <div className="invalid-feedback">{usernameLengthError}</div>
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
                    isPasswordLengthError || isPasswordMatchError ? "is-invalid" : ""
                  }`}
                  id="password"
                  onChange={handleChange}
                  required
                />
                {isPasswordLengthError && (
                  <div className="invalid-feedback">{passwordLengthError}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Passwort bestätigen
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    isPasswordMatchError ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  onChange={handleChange}
                  required
                />
                {isPasswordMatchError && (
                  <div className="invalid-feedback">{passwordMatchError}</div>
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
                  <option value="Aushilfskraft">Aushilfskraft</option>
                  <option value="Personalabteilung">Personalabteilung</option>
                  <option value="Niederlassungsleiter">
                    Niederlassungsleiter
                  </option>
                  <option value="Vorgesetzte">Vorgesetzte</option>
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
