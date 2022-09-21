import React from 'react';
import classes from './Button.module.css';


export default function Button(props){

 
   return <button className={classes.butn} type={props.type} onClick={props.showform}>{props.text}</button>
};