import React from 'react';
import classeslist from './Card.module.css';

export default function Card(props) {

    return ( 
        <div className={classeslist.card}>
            {props.children}
        </div>)
    }