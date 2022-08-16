import classNames from 'classnames/bind';
import styles from './Header.scss';
import { SubHeading } from '~/components';
import { images } from '~/constants';
const cx = classNames.bind(styles);

function Header() {
 return (
  <div className={cx('app__header app__wrapper section__padding')} id="home">
   <div className={cx('app__wrapper_info')}>
    <SubHeading title="Chase the new Flavour" />
    <h1 className={cx('app__header-h1')}>The key to Fine dining</h1>
    <p className={cx('p__opensans')} style={{ margin: '2rem 0' }}>
     Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien.
     Et, penatibus aliquam amet tellus{' '}
    </p>
    <button type="button" className={cx('custom__button')}>
     Explore Menu
    </button>
   </div>

   <div className={cx('app__wrapper_img')}>
    <img src={images.welcome} alt="Header welcome" />
   </div>
  </div>
 );
}

export default Header;
