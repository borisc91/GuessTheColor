import classes from '../App.module.css'
import React from 'react';


const Fakebuttontwo = (props) => {
 return (
     
 <button  className={classes.dugme} onClick={props.notcorrectHandler}>{props.nocorrectColorone}</button>
 )
};


export default Fakebuttontwo;