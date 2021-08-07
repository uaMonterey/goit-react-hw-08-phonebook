import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';

import s from '../UserMenu/UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    <p className={s.greeting}>
      Welcome to your PhoneBook,<span className={s.name}> {name}</span>
    </p>
    <button className={s.button} onClick={onLogout} type="button">
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
