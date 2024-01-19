import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ handleClick, text, className, ...attrs }) {
    const classes = classNames(className);
    return (
        <button className={classes} onClick={handleClick} {...attrs}>
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    className: PropTypes.string,
};

Button.defaultProps = {
    handleClick: () => {},
    text: '',
    className: '',
};
