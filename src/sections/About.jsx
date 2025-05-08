import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const About = ({ h2, p1, p2, imgPath }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  let width = location.pathname === "/" ? "70%" : "60%";
  if (typeof window !== "undefined" && window.innerWidth <= 1000) {
    width = "100%";
  }

  const style = {
    marginTop: location.pathname === "/" ? "100vh" : "",
  };
  const imgStyle = {
    width,
    borderRadius: "2rem"
  }

  return (
    <section className="about-section container" style={style} >
      <h2 className="heading">{h2}</h2>
      <div className="home-about">
        <div className="about-img">
          <img src={imgPath} style={imgStyle} alt="Decowall Studio - Complete wallpaper solution" />
        </div>
        <div className="about-text">
          <p>{p1}</p>
          <p>{p2}</p>
          {location.pathname === "/" ? <Link to='/about-us'><button className="btn">Know more</button></Link> : ""}
        </div>
      </div>
    </section>
  )
};

export default About;