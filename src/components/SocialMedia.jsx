import { LiaLinkedinIn, LiaWhatsapp } from 'react-icons/lia';
import { GrFacebookOption } from 'react-icons/gr';
import { PiInstagramLogo, PiPinterestLogo } from 'react-icons/pi';

const SocialMedia = ({ h3 }) => {
  return (
    <div className="social-media">
      {h3 ? <h3>{h3}</h3> : ""}
      <ul>
        <li className="media-icons">  <a
          href="https://www.facebook.com/Acitystudio2020?mibextid=ZbWKwL"
          target="_acitystudio"><GrFacebookOption />
        </a> </li>
        <li className="media-icons"> <a
          href="https://www.instagram.com/acity_studio/"
          target="_acitystudio"><PiInstagramLogo />
        </a> </li>
        <li className="media-icons"> <a
          href="https://www.linkedin.com/company/acity-studio/mycompany/"
          target="_acitystudio"><LiaLinkedinIn />
        </a> </li>
        <li className="media-icons"> <a
          href="https://www.linkedin.com/company/acity-studio/mycompany/"
          target="_acitystudio"><LiaWhatsapp />
        </a> </li>
        <li className="media-icons"> <a
          href="https://www.linkedin.com/company/acity-studio/mycompany/"
          target="_acitystudio"><PiPinterestLogo />
        </a> </li>
      </ul>
    </div>
  )
};

export default SocialMedia;