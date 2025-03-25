import ServiceCard from "../components/ServiceCard";
import { serviceList } from "../utils/data";
import { useLocation } from "react-router";

const ServiceSection = () => {
  const location = useLocation();

  return (
    <section className="service-section container">
      <h2 className="heading">A FORCE FOR ACTIVATING CITIES AND REENERGIZING CULTURES</h2>
      <div className="service-list grid grid-three--col">
        {serviceList
          .filter((item) => location.pathname !== "/" || item.id <= 6)
          .map((item) => (
            <ServiceCard key={item.id} serviceList={item} />
          ))}
      </div>
    </section>
  )
};

export default ServiceSection;