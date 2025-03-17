import { Link, useLocation } from "react-router";

const About = ({ h2, p1, p2, imgPath }) => {
  const location = useLocation();
  const style = {
    marginTop: location.pathname === "/" ? "100vh" : "",
  };
  const imgStyle = {
    width: location.pathname === "/" ? "70%" : "60%",
    borderRadius: "2rem"
  }

  return (
    <section className="about-section container" style={style} >
      <h2 className="heading">{h2}</h2>
      <div className="home-about">
        <div className="about-text">
          <p>{p1}</p>
          <p>{p2}</p>
          {location.pathname === "/" ? <Link to='/about-us'><button className="btn">More About Acity</button></Link> : ""}
        </div>
        <div className="about-img">
          <img src={imgPath} style={imgStyle} alt="Our work loading..." />
        </div>
      </div>
    </section>
  )
};

export default About;