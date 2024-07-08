import '../scss/experience.scss';
import resumeLogo from '../images/resume-logo.png';
import nykLogo from '../images/nyk-logo.png';
import teliLogo from '../images/teligent-logo.png';
import rcbcLogo from '../images/rcbc-logo.png';
import accentureLogo from '../images/accenture-logo.png';

const Experience = () => {
    return (
      <div id="Experience" className="page-section about-section p-t-40 p-b-40 s-m-t-80">
        <div className="content">
            <div className="row">
              <h1 className="color-deep-cerulean fs-40 fs-lg-60 dark-color-buttercup-l m-b-60">Work Experience:</h1>

              <div className='col-12 experience'>
                <div className='col-12 timeline-block d-lg-flex '>
                    <div className='col-lg-6 col-12 exp-company'>
                      <div>
                        <h2>
                          ACCENTURE INC.
                        </h2>
                        <p className='m-0'>
                          FRONT-END DEVELOPER
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-12 exp-year m-l-lg-50 m-t-lg-55'>
                        <p><strong>FEBRUARY 26 2021 - PRESENT</strong></p>
                    </div>
                    <div className="logo-cont accenture-logo">
                      <img src={accentureLogo} className="exp-logo" alt="logo" />
                    </div>
                </div>
                <div className='col-12 timeline-block reverse d-lg-flex '>
                    <div className='col-lg-6 col-12 exp-company'>
                      <div>
                        <h2>
                          RCBC BANKARD.
                        </h2>
                        <p className='m-0'>
                          FRONT-END DEVELOPER
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-12 exp-year m-t-lg-55'>
                        <p><strong>APRIL 1 2019 - JANUARY 12 2021</strong></p>
                    </div>
                    <div className="logo-cont rcbc-logo">
                      <img src={rcbcLogo} className="exp-logo" alt="logo" />
                    </div>
                </div>
                <div className='col-12 timeline-block d-lg-flex '>
                    <div className='col-lg-6 col-12 exp-company'>
                      <div>
                        <h2>
                          TELIGENT SYSTEM INC.
                        </h2>
                        <p className='m-0'>
                          FRONT-END DEVELOPER
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-12 exp-year m-l-lg-50 m-t-lg-55'>
                        <p><strong>FEBRUARY 05 2018 - MARCH 12 2019</strong></p>
                    </div>
                    <div className="logo-cont teli-logo">
                      <img src={teliLogo} className="exp-logo" alt="logo" />
                    </div>
                </div>
                <div className='col-12 timeline-block reverse d-lg-flex '>
                    <div className='col-lg-6 col-12 exp-company'>
                      <div>
                        <h2>
                          NYK-FIL MARITIME E-TRAINING INC.
                        </h2>
                        <p className='m-0'>
                          FRONT-END DEVELOPER
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-12 exp-year m-t-lg-55'>
                        <p><strong>JUNE 16 2015 - SEPTEMBER 22 2017</strong></p>
                    </div>
                    <div className="logo-cont nyk-logo">
                      <img src={nykLogo} className="exp-logo" alt="logo" />
                    </div>
                </div>
                <div className='col-12 timeline-block d-lg-flex '>
                    <div className='col-lg-6 col-12 exp-company'>
                      <div className="text-center">
                        <button className="btn-resume">RESUME</button>
                      </div>
                    </div>
                    <div className='col-lg-6 col-12 exp-year m-l-lg-50 m-t-lg-55'>
                    </div>
                    <div className="logo-cont">
                      <img src={resumeLogo} className="exp-logo" alt="logo" />
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
}
  
export default Experience;