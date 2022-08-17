import classNames from 'classnames/bind';
import styles from './FooterOverlay.scss';

// import { images } from '~/constants';

const cx = classNames.bind(styles);
function FooterOverlay() {
 return (
  <div className={cx('app_footerOverlay')}>
   <div className={cx('app_footerOverlay-black')}>
    <div className={cx('app_footerOverlay-img ')}></div>
   </div>
  </div>
 );
}

export default FooterOverlay;
