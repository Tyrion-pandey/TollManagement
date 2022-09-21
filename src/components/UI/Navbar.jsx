import React from "react";
import { Link } from 'react-router-dom';
import Button from "./Button";
import classes from './navBar.css';


function Navbar(props){

    let data = props.dataTollName.map((item) => item.tollName);
    if(data.length === 0){
        data.push("Select Filter Option")
    }

    return (
        <navbar className = {classes.navBar}>
            <Button type="button" text="Add Vehicle Entry" showform={props.modalchk}/>
            <Button type="button" text="Add new toll" showform={props.modalchk}/>
            <Link to = "/alltoll"><Button type="button" text="View all toll" showform={props.modalchk} ></Button></Link>
            
        </navbar>
    )
}

export default Navbar;