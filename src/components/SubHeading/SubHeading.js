import images from '~/constants/images';
import classNames from 'classnames/bind';
import styles from './SubHeading.scss';

const cx = classNames.bind(styles);

function SubHeading({ title }) {
 return (
  <div style={{ marginBottom: '1rem' }}>
   <p className={cx('p__cormorant')}>{title}</p>
   <img src={images.spoon} alt="spoon" className={cx('spoon__img')} />
  </div>
 );
}

export default SubHeading;
