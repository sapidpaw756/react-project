import logo from '../logo.svg';
import '../scss/header.scss';

const navCollapse = () => {
   document.body.classList.toggle('nav-collapse');
}

const Header = () => {
  return (
    <div className="nav-header">
      <div className="content">
        <div className="col-12 d-flex p-0 justify-content-between">
          <div className="nav-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="link-list">
            <ul className="d-flex">
              <li><a href="/#">Home</a></li>
              <li><a href="/#">About</a></li>
              <li><a href="/#">Project</a></li>
              <li><a href="/#">Contact</a></li>
            </ul>
          </div>
          <button onClick={navCollapse} type="button" className="navbar-toggle">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;