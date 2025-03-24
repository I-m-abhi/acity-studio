import PageTitle from "../components/PageTitle";
import About from "../sections/About";
import Vision from "../sections/Vision";
import { teamSkills } from "../utils/data";
import about2 from "../assets/about-2.webp";
import tm2 from "../assets/2.webp"

const AboutUs = () => {
  return (
    <div className="about-page">
      <PageTitle pageTitle="About us" />
      <About
        h2={"CREATING STRUCTURES THAT INSPIRE AND SERVE"}
        p1={"We engage at every scale and step of the design and construction process, working with local communities upfront on land use issues, devising efficient delivery methods, and everything in between."}
        p2={"Whether reimagining an existing structure or crafting a new one, our approach realizes a building’s highest value. In the end, each client’s solution is unique to them and responsive to context, program and people."}
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
      <section className="founder-section container">
        <h2 className="heading">Meet the Founder</h2>
        <div className="founder">
          <div className="founderImg" data-aos="fade-up">
            <img className="founder-img" src={tm2} alt="Founder" />
            <h4>SAWAN KUMAR</h4>
            <p>Founder & Architect Designer</p>
          </div>
          <div className="founder-text" data-aos="fade-up">
            <p>Hello, I am the Founder Architect of the design firm AcityStudio, which is affiliated with the Council of Architecture, Indian BIM Forum and Association of Designers of India. Upase believes that architectural design should be always people-centric. The firm designs residential, institutional and commercial spaces ranging from 500 – 1,00,000+ Sq ft building footprint area with economical and innovative thoughtful architectural solutions in adherence to Vaastu principles, offering urban planning, architectural and interior design solutions. Ar Sawan Kumar is open to work for oversea projects for architectural design and BIM-related services and also provides architectural design and execution of works. The firm, AcityStudio, has expertise in BIM (architectural and MEP Revit) outsourcing services too.</p>
          </div>
        </div>
      </section>
    </div>
  )
};

export default AboutUs;