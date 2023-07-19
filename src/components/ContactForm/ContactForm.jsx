import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  handleChange = name => e => {
    const { target } = e;
    this.setState(() => ({ [name]: target.value }));
  };

  render() {
    return (
      <form className={styles.form} type="submit" onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="nameId">
          Name
          <input
            className={styles.input}
            id="nameId"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label} htmlFor="numberId">
          Number
          <input
            className={styles.input}
            id="numberId"
            type="tel"
            name="number"
            value={this.state.number || ''}
            onChange={this.handleChange('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
