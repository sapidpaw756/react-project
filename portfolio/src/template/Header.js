import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../scss/header.scss';

const navCollapse = () => {
   document.body.classList.toggle('nav-collapse');
}

const themeSwitcher = () => {
  document.body.classList.toggle("dark")
}

const onLoad = () =>{
  window.addEventListener('resize', function(event) {
    if(this.window.innerWidth >= 992){
      document.body.classList.remove('nav-collapse');
    }
  }, true);
  
  
  document.querySelectorAll('.nav-header a').forEach(elem => { 
    elem.addEventListener('click', function (e) {
        document.querySelectorAll('.nav-header a').forEach(i => { i.classList.remove('active') });

        e.target.classList.toggle('active');
        document.body.classList.remove('nav-collapse');
    });
  });
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
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className="switcher-container">
              <input onChange={themeSwitcher} type="checkbox" className="checkbox" id="checkbox"/>
              <label htmlFor="checkbox" className="checkbox-label">
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faSun} />
                <span className="ball"></span>
              </label>
            </div>
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

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    onLoad();
  }
};

export default Header;