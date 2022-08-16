import classNames from 'classnames/bind';
import { MenuItem, SubHeading } from '~/components';
import { data } from '~/constants';
import { images } from '~/constants';
import styles from './SpecialMenu.scss';
const cx = classNames.bind(styles);

function SpecialMenu() {
 return (
  <div className={cx('app__specialMenu  flex__center section__padding')} id="menu">
   <div className={cx('app__specialMenu-title')}>
    <SubHeading title="Chase the new Flavour" />
    <h1 className={cx('headtext__cormorant')}>Today’s Special</h1>
   </div>

   <div className={cx('app__specialMenu-menu')}>
    <div className={cx('app__specialMenu-menu_wine flex__center')}>
     <p className={cx('app__specialMenu-menu_heading')}>Wine & Beer</p>
     <div className={cx('app__specialMenu-menu_item')}>
      {data.wines.map((wine, index) => (
       <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
      ))}
     </div>
    </div>

    <div className={cx('app__specialMenu-menu_img')}>
     <img src={images.menu} alt="Special Menu" />
    </div>

    <div className={cx('app__specialMenu-cocktails flex__center')}>
     <p className={cx('app__specialMenu-menu_heading')}>Cocktails</p>
     <div className={cx('app__specialMenu-menu_item')}>
      {data.cocktails.map((cocktail, index) => (
       <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
      ))}
     </div>
    </div>
   </div>

   <div className={cx('app__specialMenu-button')}>
    <button type="button" className={cx('custom__button')}>
     View More
    </button>
   </div>
  </div>
 );
}

export default SpecialMenu;
