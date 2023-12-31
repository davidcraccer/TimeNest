import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../utils/authContext";

interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [authError, setAuthError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setAuthError(false);
  };

  const verifyUserCredentials = async () => {
    const { username, password } = formData;

    try {
      const response = await axios.post("http://localhost:5001/api/login", {
        username,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.error(
        "Error verifying user credentials:",
        error.response.data.error
      );
      return null;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await verifyUserCredentials();

    if (response && response.message === "Login successful") {
      const userData = response.user;
      login(userData);
      navigate("/");
    } else {
      console.error(
        "Invalid credentials. Please check your username and password."
      );
      setAuthError(true);
    }
  };

  return (
    <div
      className="container p-4 rounded bg-light shadow"
      style={{ maxWidth: "400px", marginTop: "6em" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2>Anmeldeseite</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Benutzername
              </label>
              <input
                type="text"
                className={`form-control ${authError ? "is-invalid" : ""}`}
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
                className={`form-control ${authError ? "is-invalid" : ""}`}
                id="password"
                onChange={handleChange}
                required
              />
              {authError && (
                <div className="invalid-feedback">
                  Benutzername oder Passwort ist falsch.
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Anmelden
            </button>
            <div className="mt-2">
              <small className="text-muted">
                Haben Sie noch kein Konto?{" "}
                <Link to="/register" className="text-primary font-italic">
                  Hier registrieren
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
