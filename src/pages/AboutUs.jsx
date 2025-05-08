import PageTitle from "../components/PageTitle";
import About from "../sections/About";
import Vision from "../sections/Vision";
import { teamSkills } from "../utils/data";
import about2 from "../assets/about-2.webp";

const AboutUs = () => {
  return (
    <div className="about-page">
      <PageTitle pageTitle="Layered in Style: Who We Are" />
      <About
        h2={'"Layered in Style: Who We Are"'}
        p1={"At Decowall Studio, we believe walls are more than just boundaries—they’re canvases for creativity. Based in the heart of Delhi NCR and serving Noida and Greater Noida, we specialize in transforming ordinary spaces into extraordinary interiors with our curated collection of premium wallpapers."}
        p2={"With a passion for design and an eye for detail, Decowall Studio offers end-to-end wallpaper solutions—from consultation and selection to flawless installation. Our small but dedicated team ensures every project is handled with professionalism, creativity, and care."}
        imgPath={about2}
      />
      <section className="skilled-section grid grid-two--col container">
        <div data-aos="fade-up">
          <h2 className="heading">We Have Highly  Skilled <br /> Professional Team</h2>
          <p>Our team is comprised of experienced architects, designers, and project managers who share a common goal of creating exceptional spaces.</p></div>
        <div>
          {teamSkills.map((item, id) => {
            return (
              <div key={id} className='grid'data-aos="fade-up">
                <h4>{item.position}</h4>
                <p>{item.percent}</p>
                <div className="percent-color-box"><div className="percent-color" style={{ width: `${item.percent}%` }}></div></div>
              </div>
            )
          })}
        </div>
      </section>
      <Vision />
    </div>
  )
};

export default AboutUs;