import { Link, useLocation } from "react-router";

const ServiceCard = ({ serviceList }) => {
  const location = useLocation();
  const { id, name, details, icon: Icon } = serviceList;

  return (
    <div data-aos="fade-up" data-aos-delay={`${id * 200}`} className='service-item'>
      {<Icon className="service-icon" />}
      <h3>{name}</h3>
      <p>{details}</p>
      {
        location.pathname === "/" ? <Link to="/services"><button className="btn">See more services...</button></Link> : ""
      }
    </div>
  )
};

export default ServiceCard;