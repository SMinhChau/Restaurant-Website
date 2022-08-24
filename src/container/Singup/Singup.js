import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './Singup.scss';
import { UserAuth } from '~/contexts/AuthContext';
import { useNavigate } from 'react-router';

const cx = classNames.bind(styles);

const Singup = () => {
 const emailRef = useRef();
 const passwordRef = useRef();
 const passwordConfiRef = useRef();

 const [email, setEmail] = useState('');
 const [password, setpassword] = useState('');
 const [error, setError] = useState('');

 const { createUser } = UserAuth();
 const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  try {
   await createUser(email, password);
   alert('Register success!!');
   navigate('/');
  } catch (e) {
   setError(e.message);
   console.log(e.message);
  }
 };

 useEffect(() => {
  console.log(createUser);
 });

 return (
  <div className={cx('app__wrapper-register flex__center section__padding')}>
   <div className={cx('app__content flex__center')}>
    <h1 className={cx('headtext__cormorant')}>registration</h1>
    <div className={cx('login_screen-form flex__center')}>
     <form onSubmit={handleSubmit}>
      <input
       ref={emailRef}
       onChange={(e) => setEmail(e.target.value)}
       type="email"
       placeholder="Email "
       id="email"
       required
      />
      <input
       ref={passwordRef}
       onChange={(e) => setpassword(e.target.value)}
       type="password"
       placeholder="Password"
       id="password"
       required
      />

      <button type="submit" className={cx('custom__button')}>
       registration
      </button>
     </form>
     <div className={cx('login_screen-text')}>
      <p className={cx('p__cormorant')}>
       Already have account yet?{' '}
       <span>
        <a href="/">Login</a>
       </span>
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Singup;
