import React from 'react';
import classes from './AddButton.module.css'

const AddButton = ({children,...props}) => {
    return (
        <button {...props} className={classes.addButton}>
            {children}
        </button>
    );
};

export default AddButton;