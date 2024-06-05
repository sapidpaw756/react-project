import sapidImg from  "../images/sapidpaw.jpg";
import '../scss/about.scss';

const Age = () => {  
  const dob = new Date('01/04/1993');
  const today = new Date();
  const age = Math.floor((today-dob)/(365.25*24*60*60*1000));
  return age;
}

const About = () => {
    return (
      <div id="About" className="page-section about-section p-t-40 p-b-40 s-m-t-90 bg-bittersweet">
        <div className="content">
            <div className="row">
                <div className="col-12 col-lg-4 promo-img text-center">
                    <img src={sapidImg} alt="profile" />
                </div>
                <div className="col-12 col-lg-8 text-left">
                    <p className="text-center fs-60">Hi! Thanks for dropping by.</p>
                    <p className="fs-20 p-l-lg-30 text-center">My name is Alfie, I'm {<Age/>} years young, happily married, no kids yet but hey, we're working on it!<br /><br />
                    On my free time, I enjoy watching anime series, reading manga and surfing the net. I'm not really the athletic type but you can count on me for most online games. <br/><br />
                    I have been a software engineer for various companies for a couple of years now, doing bck end support in my early years and recently, a lot of front-end activities. feel free to explore my Portfolio to learn more bout my work experience. <br/><br />
                    He'res to hoping I get shortlisted for your Company! Cheers!</p>
                </div>
            </div>
        </div>
      </div>
    );
}
  
export default About;