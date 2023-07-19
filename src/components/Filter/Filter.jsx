import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { onChangeFilter } = this.props;
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>Find contacts by name: </p>
        <input
          className={styles.input}
          type="text"
          onChange={onChangeFilter}
        ></input>
      </div>
    );
  }
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};

export default Filter;
