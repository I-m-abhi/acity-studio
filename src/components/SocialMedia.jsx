import { LiaLinkedinIn, LiaWhatsapp } from 'react-icons/lia';
import { GrFacebookOption } from 'react-icons/gr';
import { PiInstagramLogo, PiPinterestLogo } from 'react-icons/pi';

const SocialMedia = ({ h3 }) => {
  return (
    <div className="social-media">
      {h3 ? <h3>{h3}</h3> : ""}
      <ul>
        <li className="media-icons">  <a
          href="https://www.facebook.com/people/vastu-home-decor/61573025060893/?rdid=FEjeN9hwD3egMlg9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BJw3sbE2e%2F"
          target="_decowallstudio"><GrFacebookOption />
        </a> </li>
        <li className="media-icons"> <a
          href="https://www.instagram.com/vastu_homedecor_1?igsh=a2p1Ync2eGs1Z3dv&utm_source=qr"
          target="_decowallstudio"><PiInstagramLogo />
        </a> </li>
        <li className="media-icons"> <a
          href=""
          target="_decowallstudio"><LiaLinkedinIn />
        </a> </li>
        <li className="media-icons"> <a
          href="https://wa.me/917763019772?text=Hi%20Decowall%20Studio%2C%20I%20am%20interested%20in%20your%20wallpaper%20services"
          target="_decowallstudio"><LiaWhatsapp />
        </a> </li>
        <li className="media-icons"> <a
          href=""
          target="_decowallstudio"><PiPinterestLogo />
        </a> </li>
      </ul>
    </div>
  )
};

export default SocialMedia;