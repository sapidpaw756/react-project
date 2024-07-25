import logo from '../images/asp-logo.png';
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
  
  const scrollImage = () => {

    const img = document.querySelectorAll('.exp-company');

    function checkVisible(elm) {
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    if(img){
      img.forEach(i => {
        if(checkVisible(i)){
          i.classList.remove('invi');
        }
        else{
          i.classList.add('invi');
        }
      })
    }
  }

  window.addEventListener('scroll', scrollImage, true);
}




const Header = () => {

  const activeNav = (e) =>{
    document.querySelectorAll('.nav-header a').forEach(i => { i.classList.remove('active') });

    e.target.classList.toggle('active');
    document.body.classList.remove('nav-collapse');
  }

  return (
    <div className="nav-header">
      <div className="content">
        <div className="col-12 d-flex p-0 justify-content-between">
          <div className="nav-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="link-list">
            <ul className="d-flex">
              <li><a href="#Home" onClick={activeNav}>Home</a></li>
              <li><a href="#About" onClick={activeNav}>About</a></li>
              <li><a href="#Skills" onClick={activeNav}>Skills</a></li>
              <li><a href="#Experience" onClick={activeNav}>Experience</a></li>
              <li><a href="#Contact" onClick={activeNav}>Contact</a></li>
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