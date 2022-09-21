import React from 'react';
import ReactDOM from 'react-dom';

import classes from './modal.module.css';

const Backdrop = (props) =>{
    return (<div className={classes.backdrop} onClick={props.closebg}></div>)
};

const ModalOverlay = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
};

const Modal = (props) => {
    const portalelement = document.getElementById("overlay");
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop closebg={props.onclose}/>,portalelement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
        </React.Fragment>
    )
};
export default Modal;