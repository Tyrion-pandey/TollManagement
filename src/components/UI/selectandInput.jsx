import React from "react";
import Input from "./Input";
import Select from "./Select";
import classes from './selectAndInput.module.css'



export default function SelectInput(props){
    const [vehicleTypeandFare,setVehicleTypeAndFare] = React.useState({vehicleType:"",singleJourney:0,returnJourney:0});

    function handleselectInput(elem){
        if(elem.target.name === "vehicleType"){
          setVehicleTypeAndFare((prev) =>  ({...prev, ["vehicleType"]:elem.target.value}))
       }
       else if(elem.target.name ==="singleJourney"){
        setVehicleTypeAndFare((prev) =>  ({...prev, ["singleJourney"]:elem.target.value}))
       }
       
       else if(elem.target.name ==="returnJourney"){
        setVehicleTypeAndFare((prev) =>  ({...prev, ["returnJourney"]:elem.target.value}))
       }
      }

      const check = (event) => {
        if(event.target.name === "returnJourney"){

            if(Validate(vehicleTypeandFare)){
              props.data(vehicleTypeandFare);
      }
    }
    else{
      return; 
    }
    }

      const Validate = (values) => {
        let error = true;

        if(!values.vehicleType){
            error = false;
        }
        
        if(!values.singleJourney){
            error = false;
        }
        if(!values.returnJourney){
            error = false;
        }
        
        return error;
    }
      
      
     

    return(
        <div className={classes.row}>
        <Select options = {["Select Vehicle Type","Car/Jeep/Van","Heavy Vehicle","LCV","Truck/Bus"]} change={handleselectInput}  name="vehicleType" labeltext = {props.labeltext}/>
        <Input type="text" holdertext="Single Journey" change={handleselectInput} name="singleJourney" />
        <Input type="text" holdertext="Return Journey" change={handleselectInput} move = {check} name="returnJourney" />
        </div>
    )
}