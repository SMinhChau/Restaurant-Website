import classNames from 'classnames/bind';
import styles from './FindUs.scss';

import { SubHeading } from '~/components';
import { images } from '~/constants';

const cx = classNames.bind(styles);

function FindUs() {
 return (
  <div className={cx('app_findus app__wrapper flex__center app__bg section__padding')} id="contact">
   <div className={cx('app__wrapper_info')}>
    <SubHeading title="Find Us" />
    <h1 className={cx('headtext__cormorant')} style={{ marginBottom: '3rem' }}>
     Contact
    </h1>
    <div className={cx('app__wrapper_content')}>
     <p className={cx('p__opensans')}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
     <p className={cx('p__cormorant')}>Opening Hours</p>
     <p className={cx('p__opensans')}>Mon - Fri: 10:00 am - 02:00 am</p>
     <p className={cx('p__opensans')}>Sat - Sun: 10:00 am - 03:00 am</p>
    </div>
    <button type="button" className={cx('custom__button')} style={{ marginTop: '2rem' }}>
     Visit Us
    </button>
   </div>
   <div className={cx('app__wrapper_img')}>
    <img src={images.findus} alt="findus" className={cx('spoon__img')} />
   </div>
  </div>
 );
}

export default FindUs;
