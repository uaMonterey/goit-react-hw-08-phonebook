import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../Components/Navigation/Navigation.module.css';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" className={s.link}>
      HOME
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" className={s.link}>
        CONTACTS
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
