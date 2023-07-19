import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Notification } from 'components/Notification/Notification';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <>
        {contacts.length > 0 ? (
          <ul className={styles.wrapper}>
            {contacts.map(contact => {
              return (
                <li className={styles.text} key={contact.id}>
                  <span>{`${contact.name}: ${contact.number}`}</span>
                  <button
                    className={styles.button}
                    type="button"
                    onClick={() => onDeleteContact(contact.id)}
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <Notification message="You don't have this contact." />
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
