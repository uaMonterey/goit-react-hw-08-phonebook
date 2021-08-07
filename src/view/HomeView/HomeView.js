import React from 'react';
import s from '../HomeView/HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      {' '}
      <span className={s.span}>PhoneBook</span> is an easy application to use
      contact manager app that gives you facility of saving and viewing your
      contacts, so that you never lose your contacts.
    </h1>
  </div>
);

export default HomeView;
