import React from 'react';
import Form from './Forms/formNewVehicleEntry';
import FormNewToll from './Forms/formNewVehicleToll';
import classes from './home.module.css';

import Header from './UI/Header';
import Navbar from './UI/Navbar';
import Table from './UI/table';

import Modal from './UI/Modal';



function Home(props) {
    const heading1 = ["vehicleType","vehicleNumber","dateTime","tollName","tariff"];

    const [showVehicleEntry, setshowVehicleEntry] = React.useState(false);
    const [showNewToll, setshowNewToll] = React.useState(false);
  
   

  function handlemodal(event){
    if(event.target.innerText === "Add Vehicle Entry"){
        setshowVehicleEntry(true);
    }
    else if(event.target.innerText === "Add new toll"){
        setshowNewToll(true);
    }
    
    
  }
  
  function closemodal(){
    if(showVehicleEntry === true){
      setshowVehicleEntry(false);
    }
    else if(showNewToll === true){
      setshowNewToll(false)
    }
    
  }

    
    return (
        <div className={classes.home}>

            
        <Header />
        <Navbar modalchk = {handlemodal} dataTollName={props.newTollData.data} data={props.newTollData.data}/>
        <Table heading={heading1} 
        data = {props.newVehicleData.data} filterdata={props.newVehicleData.data}/>
        
        {showNewToll && 
            <Modal onclose = {closemodal}> 
                  <FormNewToll 
                  formTitle = "Add new entry" 
                  formclass="EntryForm" 
                  close = {closemodal} 
                  btntext="Add details"  
                  addItem = {props.setdata}>
                </FormNewToll> 
            </Modal>}
            
            {showVehicleEntry && 
                <Modal onclose = {closemodal}>
                    <Form 
                    formTitle = "Add new Entry" 
                    formclass="EntryForm" 
                    addItem = {props.setEntryData} 
                    btntext="Add Entry" 
                    filterdata={props.newTollData.data}
                    close = {closemodal}>
            </Form>
            </Modal>}
          
        </div>
    );
}

export default Home;