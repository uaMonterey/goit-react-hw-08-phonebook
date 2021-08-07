import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../Components/Container/Container.jsx';
import ContactsList from '../../Components/ContactList/ContactList.jsx';
import ContactForm from '../../Components/ContactForm/ContactForm.jsx';
import Filter from '../../Components/Filter/Filter.jsx';
import { contactFetch } from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import s from '../ContactsView/ContactsView.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div className={s.barStyles}>
          <ContactForm />
          <Filter />
          <ContactsList />

          {this.props.isLoadingContacts && <CircularProgress />}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
