import React from 'react';
import classes from './stInput.module.css'

const MyInput = (props) => {
    return (
        <input className={classes.stInput} {...props} />
    );
};

export default MyInput;