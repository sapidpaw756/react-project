import javaLogo from  "../images/JavaScript-logo.png";
import vueLogo from  "../images/vue-logo.png";
import reactLogo from '../logo.svg';
import htmlLogo from  "../images/html-5-logo.png";
import njkLogo from  "../images/nunjucks-logo.png";
import cssLogo from  "../images/css-logo.png";
import sassLogo from '../images/sass-logo.png';

import netLogo from  "../images/asp-net-logo.png";
import cSharpLogo from '../images/c-sharp-logo.png';


import msSQLLogo from  "../images/mssql-logo.png";
import mySQLLogo from '../images/mysql-logo.png';
import oracleLogo from '../images/oracle-logo.png';

import '../scss/skills.scss';

const Skills = () => {
    return (
      <div id="Skills" className="page-section s-m-t-50 s-m-t-lg-65 p-t-40 p-b-40">
        <div className="content">
            <div className="col-12">
                <h1 className="color-deep-cerulean fs-40 fs-lg-60 dark-color-buttercup-l m-b-20">Technology Skills:</h1>
            </div>
            <div className="col-12 skill-list">
                <h1>Front-End:</h1>
                <div className="d-flex g-20 m-b-20">
                    <div className="card">
                        <img src={htmlLogo} alt="html" />
                        <p>HTML 5</p>
                    </div>
                    <div className="card">
                        <img src={njkLogo} alt="njk" />
                        <p>Nunjucks</p>
                    </div>
                    <div className="card">
                        <img src={cssLogo} alt="css" />
                        <p>CSS</p>
                    </div>
                    <div className="card">
                        <img src={sassLogo} alt="sass" />
                        <p>Sass</p>
                    </div>
                    <div className="card">
                        <img src={javaLogo} alt="javascript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="card">
                        <img src={vueLogo} alt="javascript" />
                        <p>Vue</p>
                    </div>
                    <div className="card">
                        <img src={reactLogo} alt="javascript" />
                        <p>React</p>
                    </div>
                </div>
                <h1>Back-End:</h1>
                <div className="d-flex g-20">
                    <div className="card">
                        <img src={netLogo} alt="html" />
                        <p>ASP .Net</p>
                    </div>
                    <div className="card">
                        <img src={netLogo} alt="njk" />
                        <p>ASP .Net MVC</p>
                    </div>
                    <div className="card">
                        <img src={cSharpLogo} alt="css" />
                        <p>C#</p>
                    </div>
                </div>
                <h1>Database</h1>
                <div className="d-flex g-20">
                    <div className="card">
                        <img src={msSQLLogo} alt="html" />
                        <p>MSSQL</p>
                    </div>
                    <div className="card">
                        <img src={mySQLLogo} alt="njk" />
                        <p>MySQL</p>
                    </div>
                    <div className="card">
                        <img src={oracleLogo} alt="css" />
                        <p>Oracle DB</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Skills;