import classes from '../App.module.css'
import React from 'react';

const Fakebuttonone = (props) => {
   return <button  className={classes.dugme} onClick={props.notcorrectHandler}>{props.nocorrectColoronee}</button>
};

export default Fakebuttonone;