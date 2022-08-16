import classNames from 'classnames/bind';
import styles from './Intro.scss';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '~/constants';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Intro() {
 const [playVideo, setplayVideo] = useState(false);
 const vidRef = useRef();

 const handleVideo = () => {
  setplayVideo((prevLayVideo) => !prevLayVideo);
  if (playVideo) {
   vidRef.current.pause();
  } else {
   vidRef.current.play();
  }
 };
 return (
  <div className={cx('app__video')}>
   <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted />
   <div className={cx('app__video-overlay flex__center')}>
    <div className={cx('app__video-overlay_circle flex__center')} onClick={handleVideo}>
     {playVideo ? <BsPauseFill color="#fff" fontSize={40} /> : <BsFillPlayFill color="#fff" fontSize={40} />}
    </div>
   </div>
  </div>
 );
}

export default Intro;
