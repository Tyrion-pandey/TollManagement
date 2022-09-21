import React from "react";
import Button from "../UI/Button";
import classes from "./formtemplate.module.css";
import SelectInput from "../UI/selectandInput";
import Input from "../UI/Input";



export default function Form(props){
   
    const obj = {tollName:"",vehicleDetails:[]};
    const [formdata, setformdata] = React.useState(obj);
  
    const [msg, setMessage] = React.useState({msgcode:"",msgtext:""});
   
    
    const addData = (item) => {
        formdata.vehicleDetails.push(item);
       
    } 



    const handleform = (event) => {
        
        event.preventDefault();
        if(formdata.vehicleDetails.length !== 4){
            setMessage((prev) => ({...prev,["msgcode"] : "error",["msgtext"]:"Please select all 4 types Vehicle Details"}));
            
        }
        if(formdata.tollName === ""){
            setMessage((prev) => ({...prev,["msgcode"] : "error",["msgtext"]:"Please Provide Toll Name"}));
        
        }
        if(formdata.tollName !== "" && formdata.vehicleDetails.length === 4){

        setMessage((prev) => ({...prev,["msgcode"] : "success",["msgtext"]:"Entry added Successfully"}));
      
        props.addItem(formdata);
        
       
        }
    }

    function handleTollName(event){
        const {name, value} = event.target;
        if(name === "tollName"){
            setformdata(prev => ({...prev, [name] : value}))
        }
        
    }
    
   

    
    return (
        <div className="form-modal">   

            <div className={classes.headingpart}>
            <p className={classes.formheading}>{props.formTitle}</p>
            <span className={classes.close} onClick={props.close}>X</span>
            </div>

        
            {msg.msgcode === "success" ?(
                <p className={classes.msgbox}>{msg.msgtext}</p>
        
        
        ) :
        (
            <p className={msg.msgcode &&classes.errortext}>{msg.msgtext}</p>
        )
        }
        <form onSubmit={handleform} className={props.formclass} >
        
        <Input holdertext="Toll Name" labeltext = "Toll Name" name = "tollName" change={handleTollName}/>

   
           
    <h4>Vehicle fare details:</h4>
    <SelectInput data={addData}/>

   
    <SelectInput data={addData} />

    <SelectInput data={addData}/>

    <SelectInput data={addData}/>

    

  
            
            <Button type="submit" text={props.btntext}/>
        </form>

       
        </div>
    )
}