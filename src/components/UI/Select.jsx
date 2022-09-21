import React from "react";
import classes from './Select.module.css';

export default function Select(props){
    const [Value,setVal] = React.useState()
    function handleChange(event){
        setVal(event.target.value);
        props.change(event);
    }
    
    
    //let data = ["activa","honda","bullet","duke"];
    
    return (<select className={classes.select} name={props.name} value={Value}  onChange={handleChange}>
       {props.options.map(item => <option value={item}>{item}</option>)} 
    </select>)
};