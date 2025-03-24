import ServiceCard from "../components/ServiceCard";
import { serviceList } from "../utils/data";

const ServiceSection = () => {
  return (
    <section className="service-section container">
      <h2 className="heading">A FORCE FOR ACTIVATING CITIES AND REENERGIZING CULTURES</h2>
      <div className="service-list grid grid-three--col">
        {serviceList.map((item) => {
          return (
            <ServiceCard key={item.id} serviceList={item}  />
          )
        })}
      </div>
    </section>
  )
};

export default ServiceSection;