import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const verifyUserCredentials = async () => {
    const { username, password } = formData;

    try {
      const response = await axios.post('http://localhost:5001/api/login', { username, password });
      return response.data.message === 'Login successful';
    } catch (error: any) {
      console.error('Error verifying user credentials:', error.response.data.error);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAuthenticated = await verifyUserCredentials();

    if (isAuthenticated) {
      console.log('User authenticated successfully!');
      // Redirect upon successful authentication
      navigate('/');
    } else {
      console.error('Invalid credentials. Please check your username and password.');
      // Handle authentication failure
    }
  };

  return (
    <div className="container p-4 rounded bg-light shadow" style={{ maxWidth: "400px", marginTop: "6em" }}>
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
                className="form-control"
                id="password"
                onChange={handleChange}
                required
              />
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
