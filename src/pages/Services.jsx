import PageTitle from "../components/PageTitle";
import About from "../sections/About";
import services from "../assets/services-about.webp";
import ServiceSection from "../sections/ServiceSection";

const Services = ()=> {
  return (
    <div className="services-page">
      <PageTitle pageTitle="Services" />
      <About
        h2={`"Bringing Walls to Life, Beautifully"`}
        p1={"At Decowall Studio, we specialize in premium wallpaper solutions that redefine interiors with texture, pattern, and style. Whether you're looking for a bold feature wall or a subtle backdrop, we offer a diverse range of wallpaper designs—from classic florals and textured abstracts to modern minimalistic prints—sourced and installed with precision."}
        p2={"Our services go beyond wallpaper. We provide personalized design consultation, expert measurement, and professional wallpaper installation to ensure flawless results. Whether you're updating a living room, office, retail space, or an entire home, we tailor every solution to your space and vision. We proudly serve residential and commercial clients across Delhi NCR, Noida, and Greater Noida with reliability, creativity, and craftsmanship."}
        imgPath={services}
      />
      <ServiceSection />
    </div>
  )
};

export default Services;