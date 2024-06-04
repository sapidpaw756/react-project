import sapidImg from  "../images/sapidpaw.jpg";
import '../scss/about.scss';

const About = () => {
    return (
      <div id="About" className="page-section about-section m-t-80 s-m-t-100">
        <div className="content">
            <div className="row">
                <div className="col-12 col-lg-4 promo-img text-center">
                    <img src={sapidImg} alt="profile" />
                </div>
                <div className="col-12 col-lg-8 text-left">
                    <p className="text-center fs-40">About Me!</p>
                    <p>I love my wife, I live in Laguna</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default About;