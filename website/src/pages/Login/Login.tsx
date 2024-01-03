import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container p-4 rounded bg-light shadow" style={{ maxWidth: "400px", maxHeight: "400px", marginTop:"6em"}}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2>Login Page</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="mt-2">
              <small className="text-muted">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-italic">
                  Register here
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
