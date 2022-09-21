import React from 'react';
import Form from './Forms/formNewVehicleEntry';
import FormNewToll from './Forms/formNewVehicleToll';
import Header from './UI/Header';
import Navbar from './UI/Navbar';
import Table from './viewtable';
import Modal from './UI/Modal';
import classes from './home.module.css';
import { Link } from 'react-router-dom';
import Button from './UI/Button';



export default function Alltoll(props){
    const [showVehicleEntry, setshowVehicleEntry] = React.useState(false);
    const [showNewToll, setshowNewToll] = React.useState(false);
    const heading1 = ["Toll Name","Car/Jeep/Van","LCV","Truck/Bus","Heavy Vehicle","Delete Entries"];
   
  
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
        <Navbar modalchk = {handlemodal} dataTollName={props.data}/>
        <Link to = "/"><Button type="button" text="Go Back to Vehicle List"></Button></Link>
        <Table heading={heading1} 
         data={props.data}
         removedata = {props.removedata}> 
    
         </Table>
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

        {showVehicleEntry
         && 
         <Modal onclose = {closemodal}> 
              <Form 
              formTitle = "Add new Entry" 
              formclass="EntryForm" 
              addItem = {props.setEntryData} 
              btntext="Add Entry" 
              filterdata={props.data} 
              close = {closemodal} >

            </Form>
          </Modal>}
        </div>
    );
}
