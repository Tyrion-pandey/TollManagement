import React from "react";
import { useEffect } from "react";
import Button from '../UI/Button';
import classes from "./formtemplate.module.css";



export default function Form(props){
    const obj = {tollName:"",vehicleType:"",vehicleNumber:"",tariff:0};
    const [formdata, setformdata] = React.useState(obj);
    const[errors,seterrors] = React.useState({});
    const[isSubmit, setIsSubmit] = React.useState(false);
     
    const handleform = (event) => {
        event.preventDefault();
        seterrors(Validate(formdata));
        
        
        
        setIsSubmit(true);
        if(formdata.tollName !== "" && formdata.vehicleType !== "" && formdata.vehicleNumber !== ""){
            props.addItem(formdata);
            setformdata(obj);
        }
    }

    function handleChange(event){
        const {name, value} = event.target;
        setformdata(prev => ({...prev, [name] : value}));
        if(name === "vehicleNumber"){
            if(formdata.vehicleType === "LCV"){
                formdata.tariff = "90";
            }
            else if (formdata.vehicleType === "Truck/Bus"){
                formdata.tariff = "320";
            }
            else if (formdata.vehicleType === "Heavy Vehicles"){
                formdata.tariff = "270";
            }
            else if (formdata.vehicleType === "Car/Jeep/Van"){
                formdata.tariff = "60";
            }
        }
    }

   

    
    useEffect(() => {
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(formdata);
        }
    },[errors])

    const Validate = (values) => {
        const errors = {};

        if(!values.tollName){
            errors.tollName = "Toll Name is Required";
        }
        
        if(!values.vehicleNumber){
            errors.vehicleNumber = "Vehicle Number is Required";
        }
        if(!values.vehicleType){
            errors.vehicleType = "Vehicle Type is Required";
        }
        
        return errors;
    }

    return (
        <div className="form-modal">   
            <div className={classes.headingpart}>
            <p className={classes.formheading}>{props.formTitle}</p>
            <span className={classes.close} onClick={props.close}>X</span>
            </div>
        <form onSubmit={handleform} className={classes.entryform} >
        
        <label for="tollName">Select toll name</label>
        <select className={classes.select} name="tollName" value={formdata.tollName}  onChange={handleChange}>
        <option value="">Select Toll Name</option>
        {props.filterdata.map((item) => <option value={item.tollName}>{item.tollName}</option>)}
    </select>
    {errors.tollName?(<p className={classes.errortext}>{errors.tollName}</p>):("")}
    <label for="vehicleType">Select Vehicle type</label>
    <select className={classes.select} name="vehicleType" value={formdata.vehicleType}  onChange={handleChange}>
        <option value="">Select Vehicle Type</option>
        <option value="Car/Jeep/Van">Car/Jeep/Van</option>
        <option value="Heavy Vehicles">Heavy Vehicles</option>
        <option value="LCV">LCV</option>
        <option value="Truck/Bus">Truck/Bus</option>
    </select>

    {errors.vehicleType?(<p className={classes.errortext}>{errors.vehicleType}</p>):("")}
           
    <label for="tollName">Vehicle Number</label>
            <input 
            className={classes.input} 
            name="vehicleNumber"
            value={formdata.vehicleNumber} 
            type="text" 
            placeholder="Vehicle Number" 
            onChange={handleChange} 
           
           />

    {errors.vehicleNumber?(<p className={classes.errortext}>{errors.vehicleNumber}</p>):("")}
    <label for="tollName">Tariff</label>
        <input 
            className={classes.input} 
            name="tariff" 
            value={formdata.tariff} 
            type="text" 
            placeholder="Tariff" 
            disabled/>

{errors.tariff?(<p className={classes.errortext}>{errors.tariff}</p>):("")}
{Object.keys(errors).length === 0 && isSubmit ? (
        <div className={classes.msgbox}>Entry Added Successfully</div>
        
        ) :
        (
            ""  
        )}
            <Button type="submit" text={props.btntext}/>
        </form>
        
        </div>
    )
}