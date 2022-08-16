import classNames from 'classnames/bind';
import styles from './AboutUs.scss';

import { images } from '~/constants';
const cx = classNames.bind(styles);
function AboutUs() {
 return (
  <div className={cx('app__aboutus app__bg flex__center section__padding')} id="about">
   <div className={cx('app__aboutus-overlay flex__center')}>
    <img src={images.G} alt="G letter" />
   </div>

   <div className={cx('app__aboutus-content flex__center')}>
    <div className={cx('app__aboutus-content_about ')}>
     <h1 className={cx('headtext__cormorant')}>About Us</h1>
     <img src={images.spoon} alt="about spoon" className={cx('spoon__img')} />
     <p className={cx('p__opensans')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere
      tristique. In sed odio nec aliquet eu proin mauris et.
     </p>
     <button type="button" className={cx('custom__button')}>
      Know More
     </button>
    </div>

    <div className={cx('app__aboutus-content_knife')}>
     <img src={images.knife} alt="about snkife" className={cx('spoon__img')} />
    </div>

    <div className={cx('app__aboutus-content_history')}>
     <h1 className={cx('headtext__cormorant')}>Our History</h1>
     <img src={images.spoon} alt="about spoon" className={cx('spoon__img')} />
     <p className={cx('p__opensans')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere
      tristique. In sed odio nec aliquet eu proin mauris et.
     </p>
     <button type="button" className={cx('custom__button')}>
      Know More
     </button>
    </div>
   </div>
  </div>
 );
}

export default AboutUs;
