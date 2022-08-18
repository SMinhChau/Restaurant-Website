import { FaBars, FaRegTimesCircle } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Navbar.scss';
import images from '~/constants/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Navbar() {
 const [toggleMenu, settoggleMenu] = useState(false);
 return (
  <div className={cx('app_navbar')}>
   <div className={cx('app_navbar-logo')}>
    <img src={images.gericht} alt="Logo" className={cx('navbar-logo')} />
   </div>
   <ul className={cx('app_navbar-links')}>
    <li className={cx('app_navbar-link')}>
     <a className={cx('p__opensans')} href="/home">
      Home
     </a>
    </li>
    <li className={cx('app_navbar-link')}>
     <a className={cx('p__opensans')} href="/pages">
      Pages
     </a>
    </li>
    <li className={cx('app_navbar-link')}>
     <a className={cx('p__opensans')} href="/contacts">
      Contacts Us
     </a>
    </li>
    <li className={cx('app_navbar-link')}>
     <a className={cx('p__opensans')} href="/blogs">
      Blogs
     </a>
    </li>
    <li className={cx('app_navbar-link')}>
     <a className={cx('p__opensans')} href="/landing">
      Landing
     </a>
    </li>
   </ul>
   <div className={cx('app_navbar-login')}>
    <div>
     <a href="/login " className={cx('p__opensans')} id="account">
      Log in / registration
     </a>
    </div>
    <div className={cx('login-div')}></div>
    <div className={cx('left-icon')}></div>
    <div>
     <a href="/page" className={cx('p__opensans')}>
      {' '}
      book table
     </a>
    </div>
   </div>
   <div className={cx('app_navbar-smallsreen ')}>
    <FaBars
     className={cx('navbar-smallsreen-icon')}
     onClick={() => {
      settoggleMenu(true);
     }}
    />
    {toggleMenu && (
     <div className={cx('app_navbar-smallsreen__overlay flex__center slide-bottom')}>
      <FaRegTimesCircle
       className={cx('overlay-close')}
       onClick={() => {
        settoggleMenu(false);
       }}
      />
      <ul className={cx('app_navbar-smallsreen-links')}>
       <li className={cx('app_navbar-smallsreen-link')}>
        <a className={cx('p__opensans')} href="/home">
         Home
        </a>
       </li>
       <li className={cx('app_navbar-smallsreen-link')}>
        <a className={cx('p__opensans')} href="/pages">
         Pages
        </a>
       </li>
       <li className={cx('app_navbar-smallsreen-link')}>
        <a className={cx('p__opensans')} href="/contacts">
         Contacts Us
        </a>
       </li>
       <li className={cx('app_navbar-smallsreen-link')}>
        <a className={cx('p__opensans')} href="/bolgs">
         Blogs
        </a>
       </li>
       <li className={cx('app_navbar-smallsreen-link')}>
        <a className={cx('p__opensans')} href="/landing">
         Landing
        </a>
       </li>
      </ul>
     </div>
    )}
   </div>
  </div>
 );
}

export default Navbar;
