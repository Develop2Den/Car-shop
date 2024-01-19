import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomInput.module.scss';
import { TextField } from '@mui/material';

const CustomInput = (props) => {
    const { type, placeholder, label, field, form } = props;
    const isError = form.touched[field.name] && form.errors[field.name];

    return (
        <>
            <TextField
                color={isError ? 'error' : 'primary'}
                className={styles.input}
                classes={{
                    root: 'textFieldRoot',
                }}
                type={type}
                label={label}
                placeholder={placeholder}
                {...field}
            />
            <span className={styles.error}>{isError ? form.errors[field.name] : ''}</span>
        </>
    );
};

export default CustomInput;

CustomInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};
CustomInput.defaultProps = {
    type: 'text',
    placeholder: '',
};
