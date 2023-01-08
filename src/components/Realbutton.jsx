import React from 'react'
import classes from '../App.module.css'

const Realbutton = (props) => {

return ( 
<button  className={classes.dugme} onClick={props.correctHandler}>{props.correctColor}</button>
)
};

export default Realbutton;


