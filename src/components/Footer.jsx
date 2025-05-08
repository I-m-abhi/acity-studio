import { Link } from 'react-router';
import logo from '../assets/decowall_logo_cropped.png';
import SocialMedia from './SocialMedia';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="logo">
          <Link to='/'><img className='logo-img' src={logo} alt="Acity Studio - Architecture & Interior Design Logo" /></Link>
          <p>At Decowall Studio, we specialize in premium wallpaper solutions that redefine interiors with texture, pattern, and style.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Details</h3>
          <div>
            <p><span>Email : </span>decowallstudio@gmail.com</p>
            <p><span>Phone : </span>+91 9311346811</p>
            <p><span>Address : </span>LG 22H, gaur city Center, <br /> Greater Noida W Rd, Gaur City 1, <br />Sector 4, Noida, Ghaziabad,<br /> Uttar Pradesh 201301</p>
          </div>
        </div>
        <SocialMedia h3={"Connect with us"}/>
      </div>
    </footer>
  )
}

export default Footer;