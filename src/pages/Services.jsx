import PageTitle from "../components/PageTitle";
import About from "../sections/About";
import services from "../assets/services-about.webp";
import ServiceSection from "../sections/ServiceSection";

const Services = ()=> {
  return (
    <div className="services-page">
      <PageTitle pageTitle="Services" />
      <About
        h2={"Creative Solutions by Professional Designers"}
        p1={"Looking for a luxurious and high-end interior designer in Noida or Delhi NCR? Look no further! At High Creation Interior, our team of experienced and talented designers is here to help you create a space that reflects your unique style and taste."}
        p2={"As the best interior designer in Noida and Delhi NCR, we specialize in luxury interior design, with a focus on creating stunning spaces that are both functional and beautiful. From selecting the perfect color palette to choosing the right furniture and accessories, we take care of every detail to ensure that your space is truly exceptional."}
        imgPath={services}
      />
      <ServiceSection />
    </div>
  )
};

export default Services;