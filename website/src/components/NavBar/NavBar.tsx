import './NavBar.css';
export {};

const NavBar: React.FC = () => {

  return (
    <nav className="navbar-expand-lg">
      <div className="navbar-dark">
        <a href="/">
          <img className="navbar-brand navbar-logo" src={require('../../images/logo.jpg')} alt="Time Nest Logo"></img>        
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon my-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Kalender
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Benachrichtigung
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Chats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#de">
                Profil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
