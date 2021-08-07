import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../Components/AuthNav/AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={s.link}>
      <button className={s.button} type="button">
        Create New Account
      </button>
    </NavLink>
    <NavLink to="/login" className={s.link}>
      <button className={s.button} type="button">
        Login
      </button>
    </NavLink>
  </div>
);

export default AuthNav;
