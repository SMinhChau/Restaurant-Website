import classNames from 'classnames/bind';
import styles from './Laurels.scss';

import { data } from '~/constants';
import { SubHeading } from '~/components';
import { images } from '~/constants';

const cx = classNames.bind(styles);

function Laurels() {
 const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className={cx('app__laurels_awards-card')}>
   <img src={imgUrl} alt="imgUrl" />
   <div className={cx('app__laurels_awards-card_content')}>
    <p className={cx('p__cormorant')}>{title}</p>
    <p className={cx('p__cormorant')}>{subtitle}</p>
   </div>
  </div>
 );

 return (
  <div className={cx('app__bg app__wrapper section__padding')}>
   <div className={cx('app__wrapper_info')}>
    <SubHeading title="Awards & recognition" />
    <h1 className={cx('headtext__cormorant')}>Our Laurels</h1>

    <div className={cx('app__laurels_awards')}>
     {data.awards.map((award, index) => (
      <AwardCard award={award} key={index} />
     ))}
    </div>
   </div>
   <div className={cx('app__wrapper_img')}>
    <img src={images.laurels} alt="Laurels" />
   </div>
  </div>
 );
}

export default Laurels;
