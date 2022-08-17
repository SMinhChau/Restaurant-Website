import classNames from 'classnames/bind';
import styles from './Gallery.scss';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '~/components';
import { images } from '~/constants';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Gallery() {
 const galleyImage = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
 const scrollRef = useRef(null);

 const scrollIt = (toRight) => {
  const scrollLength = 300;
  scrollRef.current.scrollBy({ left: scrollLength * (toRight ? 1 : -1), behavior: 'smooth' });
 };

 return (
  <div className={cx('app__gallery flex__center')}>
   <div className={cx('app__gallery-content')}>
    <SubHeading title="Instagram" />
    <h1 className={cx('headtext__cormorant')}>Photo Gallery</h1>

    <p className={cx('p__opensans')}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas
     mu.
    </p>
    <button type="button" className={cx('custom__button app__gallery-btn')}>
     View More
    </button>
   </div>

   <div className={cx('app__gallery-images')}>
    <div className={cx('app__gallery-images_container')} ref={scrollRef}>
     {galleyImage.map((image, index) => (
      <div className={cx('app__gallery-images_card flex__center')} key={`gallery_image-${index + 1}`}>
       <img src={image} alt="gallery_image" />
       <BsInstagram className={cx('gallery__image-icon')} />
      </div>
     ))}
    </div>
    <div className={cx('app__gallery-images_arrow')}>
     <BsArrowLeftShort id="toLeft" className={cx('gallery__arrow-icon')} onClick={() => scrollIt(false)} />
     <BsArrowRightShort id="toRight" className={cx('gallery__arrow-icon')} onClick={() => scrollIt(true)} />
    </div>
   </div>
  </div>
 );
}

export default Gallery;
