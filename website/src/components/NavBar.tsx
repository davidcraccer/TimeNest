export {};

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <img className="navbar-brand" src={require('../images/logo.jpg')} alt="Time Nest Logo"></img>        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
