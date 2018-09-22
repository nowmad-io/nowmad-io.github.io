import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export default class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classNameInput: PropTypes.string,
    classNameAction: PropTypes.string,
    actionText: PropTypes.string,
    onActionClick: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    actionText: null,
    onActionClick: () => true,
    type: 'text',
    name: 'name',
    placeholder: '',
    value: 'afd',
  }

  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const {
      className,
      classNameInput,
      classNameAction,
      actionText,
      onActionClick,
      value,
      type,
      name,
      placeholder,
    } = this.props;

    return (
      <div className={`${styles.inputWrapper} ${className || ''}`}>
        <input
          className={`${styles.input} ${classNameInput || ''}`}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
        />
        <input
          className={`${styles.action} ${classNameAction || ''}`}
          type="submit"
          value={actionText}
          onClick={onActionClick}
        />
      </div>
    );
  }
}
