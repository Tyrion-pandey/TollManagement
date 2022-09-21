import React from 'react';
import classes from './Input.module.css';


export default function Input(props){

   const [Value,setVal] = React.useState("")
    function handleChange(event){
        setVal(event.target.value);
        props.change(event)
       
       
    }

   return (<>
   <label htmlFor={props.name}>{props.labeltext}</label>
   <input className={classes.input} name={props.name} value={Value} onBlur={props.move} type={props.type} placeholder={props.holdertext} onChange={handleChange}/>
   </>
   )
};