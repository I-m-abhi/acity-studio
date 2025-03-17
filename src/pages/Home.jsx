import HeroSlider from "../components/HeroSlider";
import About from "../sections/About";
import about from "../assets/about.webp";
import ServiceSection from "../sections/ServiceSection";
import Counter from "../sections/Counter";

const Home = ()=> {
  return (
    <div className="home-page">
      <HeroSlider />
      <About
        h2={"FROM UNDULATING SKYSCRAPERS TO MARVELOUS INTERIOR DESIGNS"}
        p1={"The core purpose of this firm since then has been to ‘Inspire Creativity’! The Team Acity Sudio has evolved into a dedicated team of professionals committed to design excellence and offering comprehensive service in the field of Architecture, Interior Designing and Project Consultation."}
        p2={"At Acitystudio, the Architects & the Interior Designers work in close collaboration with other experts including Engineers, Graphic Designers, Artists, Sculptures, Landscape Designers, Lighting and Acoustic Specialists."}
        imgPath={about}
      />
      <Counter />
      <ServiceSection />
    </div>
  )
};

export default Home;