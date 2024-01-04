import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container p-4 rounded bg-light shadow" style={{ maxWidth: "400px", marginTop:"6em"}}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2>Anmeldeseite</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Benutzername
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Passwort
              </label>
              <input type="password" className="form-control" id="password" />
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
