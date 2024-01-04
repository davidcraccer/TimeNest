import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
  university: string; // Added university field
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
    university: "", // Initialize university field
  });

  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Clear password error when user types in either password or confirmPassword
    if (passwordError) {
      setPasswordError(null);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Die Passwörter stimmen nicht überein");
      return;
    }

    // Clear the error message when passwords match
    setPasswordError(null);

    // Add your registration logic here using formData
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="container p-4 mt-5 rounded bg-light shadow" style={{ maxWidth: "400px"}}>
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
                className="form-control"
                id="username"
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
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
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
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
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
                <option value="" disabled>Rolle auswählen</option>
                <option value="Mitarbeiter">Mitarbeiter</option>
                <option value="Aushilfs/Studentenkräfte">Aushilfs/Studentenkräfte</option>
                <option value="Niederlassungsleiter">Niederlassungsleiter</option>
                <option value="Geschäftsführung">Geschäftsführung</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrieren
            </button>
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
  );
};

export default Register;
