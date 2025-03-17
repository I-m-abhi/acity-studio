import { Link } from 'react-router';
import logo from '../assets/logo-ff-bg.webp';
import SocialMedia from './SocialMedia';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="logo">
          <Link to='/'><img className='logo-img' src={logo} alt="Acity Studio - Architecture & Interior Design Logo" /></Link>
          <p>At Acity Studio, we blend creativity with precision to craft architectural masterpieces. From contemporary interiors to large-scale urban projects...</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Details</h3>
          <div>
            <p><span>Email : </span>core@acitystudio.in</p>
            <p><span>Phone : </span>+91 9205001994</p>
            <p><span>Address : </span>Coco County, Greater Noida, UP</p>
          </div>
        </div>
        <SocialMedia h3={"Connect with us"}/>
      </div>
    </footer>
  )
}

export default Footer;