import { Link, useLocation } from "react-router";

const ServiceCard = ({ serviceList }) => {
  const location = useLocation();
  const { id, name, details, image } = serviceList;

  return (
    <div data-aos="fade-up" data-aos-delay={`${id * 100}`} className='service-item'>
      <img className="service-img" src={image} alt="" />
      <h3>{name}</h3>
      <p>{details}</p>
      {
        location.pathname === "/" ? <Link to="/services"><button className="btn">Read more...</button></Link> : ""
      }
    </div>
  )
};

export default ServiceCard;