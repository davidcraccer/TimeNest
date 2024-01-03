import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // Highlight password fields in red if passwords don't match
      document.getElementById("password")?.classList.add("is-invalid");
      document.getElementById("confirmPassword")?.classList.add("is-invalid");
      return;
    }

    // Clear red highlighting when passwords match
    document.getElementById("password")?.classList.remove("is-invalid");
    document.getElementById("confirmPassword")?.classList.remove("is-invalid");

    // Add your registration logic here using formData
    console.log("Form data submitted:", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Clear red highlighting when user types in either password or confirmPassword
    if (e.target.id === "password" || e.target.id === "confirmPassword") {
      document.getElementById("password")?.classList.remove("is-invalid");
      document.getElementById("confirmPassword")?.classList.remove("is-invalid");
    }
  };

  return (
    <div className="container p-4 rounded bg-light shadow" style={{ maxWidth: "400px", maxHeight: "500px", marginTop:"6em"}}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2>Register Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
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
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                id="role"
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Role</option>
                <option value="Mitarbeiter">Mitarbeiter</option>
                <option value="Aushilfs/Studentenkräfte">Aushilfs/Studentenkräfte</option>
                <option value="Niederlassungsleiter">Niederlassungsleiter</option>
                <option value="Geschäftsführung">Geschäftsführung</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <div className="mt-2">
              <small className="text-muted">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-italic">
                  Login here
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
