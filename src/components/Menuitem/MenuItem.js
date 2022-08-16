import classNames from 'classnames/bind';

import styles from './MenuItem.scss';
const cx = classNames.bind(styles);

function MenuItem({ title, price, tags }) {
 return (
  <div className={cx('app__menuitem')}>
   <div className={cx('app__menuitem-head')}>
    <div className={cx('app__menuitem-name')}>
     <p className={cx('p__opensans')}>{title}</p>
    </div>

    <div className={cx('app__menuitem-dash')}></div>

    <div className={cx('app__menuitem-price')}>
     <p className={cx('p__opensans')}>{price}</p>
    </div>
   </div>

   <div className={cx('app__menuitem-sub')}>
    <p className={cx('p__opensans')}>{tags}</p>
   </div>
  </div>
 );
}

export default MenuItem;
