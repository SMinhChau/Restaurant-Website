import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './Signin.scss';
import { UserAuth } from '~/contexts/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

const Signin = () => {
 const emailRef = useRef();
 const passwordRef = useRef();

 const [email, setEmail] = useState('');
 const [password, setpassword] = useState('');
 const [error, setError] = useState('');

 const { signIn } = UserAuth();
 const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  try {
   await signIn(email, password);
   alert('Login success!!');
   navigate('/home');
  } catch (e) {
   setError(e.message);
   console.log(e.message);
  }
 };

 return (
  <div className={cx('app__wrapper-register flex__center section__padding')}>
   <div className={cx('app__content flex__center')}>
    <h1 className={cx('headtext__cormorant')}>Login</h1>
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
       onChange={(e) => setpassword(e.target.value)}
       type="password"
       placeholder="Password"
       id="password"
       required
      />

      <button type="submit" className={cx('custom__button')}>
       Login
      </button>
     </form>
     <div className={cx('login_screen-text')}>
      <p className={cx('p__cormorant')}>
       Don't have an account yet?{' '}
       <span>
        <a href="/register">Register</a>
       </span>
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Signin;
