import classNames from 'classnames/bind';
import SubHeading from '../SubHeading/SubHeading';
import styles from './Newsletter.scss';

const cx = classNames.bind(styles);
function Newsletter() {
 return (
  <div className={cx('app_newsletter')}>
   <div className={cx('app_newsletter-heading')}>
    <SubHeading title="Newsletter" />
    <h1 className={cx('headtext__cormorant')}>Subscribe to Our Newsletter</h1>
    <p className={cx('p__opensans')}>And never miss latest Updates!</p>
   </div>

   <div className={cx('app_newsletter-input flex__center ')}>
    <input type="email" placeholder="Email Address" />
    <button type="button" className={cx('custom__button')}>
     Subscribe
    </button>
   </div>
  </div>
 );
}

export default Newsletter;
