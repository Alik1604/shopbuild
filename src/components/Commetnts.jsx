import React from 'react';
import classes from './styles/Comments.module.css'

const Commetnts = (props) => {
    return (
        <div className={classes.main} >
            {props.comments.map((c,index) => 
                    <h5  key={index}>{c}</h5>
                )}
        </div>
    );
};

export default Commetnts;