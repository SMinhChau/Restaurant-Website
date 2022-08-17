import classNames from 'classnames/bind';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '~/components';
import styles from './Footer.scss';

// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '~/constants';

const cx = classNames.bind(styles);
function Footer() {
 return (
  <div className={cx('app__footer section__padding  ')} id="footer">
   <FooterOverlay />
   <Newsletter />
   <div className={cx('app__footer-link')}>
    <div className={cx('app__footer-link-contact')}>
     <h1 className={cx('app__footer-headtext')}>Contact Us</h1>
     <p className={cx('p__opensans')}>2021 Gerícht. All Rights reserved.</p>
     <p className={cx('p__opensans')}>9 W 53rd St, New York, NY 10019, USA</p>
     <p className={cx('p__opensans')}>+1 212-344-1230</p>
     <p className={cx('p__opensans')}>+1 212-555-1230</p>
    </div>
    <div className={cx('app__footer-link-logo')}>
     <img src={images.gericht} alt="logo_footer" />
     <p className={cx('p__opensans')}>"The best way to find yourself is to lose yourself in the service of others.”</p>
     <img src={images.spoon} alt="spoon" className={cx('spoon__img')} />
     <div className={cx('app__footer-link_icon')}>
      <FiFacebook />
      <FiTwitter />
      <FiInstagram />
     </div>
    </div>
    <div className={cx('app__footer-link-work')}>
     <h1 className={cx('app__footer-headtext')}>Working Hours</h1>
     <p className={cx('p__opensans')}>Monday-Friday: </p>
     <p className={cx('p__opensans')}>08:00 am -12:00 am</p>
     <p className={cx('p__opensans')}>Saturday-Sunday:</p>
     <p className={cx('p__opensans')}> 07:00am -11:00 pm</p>
    </div>
   </div>
   <div className={cx('app__footer-coppyright flex__center')}>
    <p className={cx('p__opensans')}>2021 Gerícht. All Rights reserved.</p>
   </div>
  </div>
 );
}

export default Footer;
