import classNames from 'classnames/bind';
import styles from './Chef.scss';

import { images } from '~/constants';
import { SubHeading } from '~/components';
const cx = classNames.bind(styles);
function Chef() {
 return (
  <div className={cx('app__wrapper flex__center app__bg section__padding')}>
   <div className={cx('app__wrapper_img app__wrapper_img-reverse')}>
    <img src={images.chef} alt="Chef" />
   </div>

   <div className={cx('app__wrapper_info')}>
    <SubHeading title="Chef’s Word" />
    <h1 className={cx('headtext__cormorant')}>What we believe in</h1>

    <div className={cx('app__chef-content')}>
     <div className={cx('app__chef-content_quote')}>
      <img src={images.quote} alt="Quote" />
      <p className={cx('p__opensans')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
     </div>
     <p className={cx('p__opensans')}>
      auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac
      consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
     </p>
    </div>

    <div className={cx('app__chef-sign')}>
     <p>Kevin Luo</p>
     <p className={cx('p__opensans')}>Chef & Founder</p>
     <img src={images.sign} alt="Sing" />
    </div>
   </div>
  </div>
 );
}

export default Chef;
