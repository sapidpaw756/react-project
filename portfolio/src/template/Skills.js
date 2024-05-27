import javaLogo from  "../images/JavaScript-logo.png";
import '../scss/skills.scss';

const Skills = () => {
    return (
      <div id="Skills" className="page-section">
        <div className="content">
            <div className="col-12">
                <h1 className="color-deep-cerulean dark-color-buttercup-l">Technology Used:</h1>
            </div>
            <div className="col-12 skill-list">
                <h1>FED:</h1>
                <div className="card">
                    <img src={javaLogo} alt="javascript" />
                    <p>JavaScript</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Skills;