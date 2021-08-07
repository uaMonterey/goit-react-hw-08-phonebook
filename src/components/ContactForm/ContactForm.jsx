import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addContact } from '../../redux/contacts/contacts-operations'
import { getItems } from '../../redux/contacts/contacts-selectors'

//style
import s from './ContactForm.module.css'


class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  }

  state = {
    name: this.props.name,
    number: this.props.number,
  }

  onInputChange = (e) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  }

  addNoRepeatContact = (state, contacts) => {
    const { name, number } = state
    if (contacts.some((contacts) => contacts.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      return
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`)
      return
    }

    this.props.onSubmit(state)
    this.reset()
  }

  onHandleSubmit = (e) => {
    e.preventDefault()
    const { contacts } = this.props
    this.addNoRepeatContact(this.state, contacts)
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }
  render() {
    return (
      <form className={s.form__contact} onSubmit={this.onHandleSubmit}>
        <label className={s.label} htmlFor="input name">
          <p className={s.title}>Name</p>
          <input
            className={s.input}
            value={this.state.name}
            onChange={this.onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label} htmlFor="input number">
          <p className={s.title}>Number</p>
          <input
            className={s.input}
            value={this.state.number}
            onChange={this.onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    )
  }
}
const mapStateToProps = (state) => ({
  contacts: getItems(state),
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
