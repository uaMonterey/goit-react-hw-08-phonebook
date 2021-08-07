import { useEffect } from "react";
import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { connect } from "react-redux";
import {
  deleteContact,
  contactFetch,
} from "../../redux/contacts/contacts-operations";

const ContactList = ({ contacts, deleteContact, onContactFetch }) => {
  useEffect(() => {
    onContactFetch();
  }, [onContactFetch]);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

const getFilteredContacts = (contacts, filter) => {
  if (!filter) return contacts;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;

  const filteredContacts = getFilteredContacts(items, filter);
  return {
    contacts: filteredContacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
    onContactFetch: () => dispatch(contactFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
