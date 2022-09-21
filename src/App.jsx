import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Alltoll from './components/ViewAllToll';
import { vehicledetails, vehicledetails2, vehicledetails3, entryDataArray} from './components/data/data';





function App() {

  const [newVechicleEntryForm, setNewVehicleEntryForm] = React.useState({data : [{tollName:"Chengalpattu",vehicleDetails : vehicledetails},{tollName:"Kappalur",vehicleDetails:vehicledetails2},{tollName:"Krishnagiri",vehicleDetails:vehicledetails3}]});

    const [newEntryData ,setEntryData ] = React.useState({data:entryDataArray});


  const addNewEntry =  (obj) => {
    let date = new Date();
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    obj["dateTime"]  = date; 
    setEntryData((prev) => ({
      data: [...prev.data, obj]
    }));
  }


    const addItem = (item) => {
    
      setNewVehicleEntryForm((prev) => ({
        data: [...prev.data, item]
      }));     
  }

  function deleteItem(event){
    console.log(event);
    let filteredData = newVechicleEntryForm.data.filter((item) => item.tollName !== event.target.name);
    console.log(filteredData);
    setNewVehicleEntryForm((prev) => ({
      data : filteredData
    }))
    console.log(newVechicleEntryForm.data);
  }
  

  return (
    <>
      {
        <Router>
          <Routes>
            {
              <Route exact path="/" element = {<Home newTollData = {newVechicleEntryForm} newVehicleData = {newEntryData} setEntryData={addNewEntry} setdata={addItem}/>} />
            }
             {
              <Route exact path="/alltoll" element = {<Alltoll  data={newVechicleEntryForm.data} setdata={addItem} newVehicleData = {newEntryData} setEntryData={addNewEntry} removedata={deleteItem}/>} />
            }
            {
              <Route path="*" element={<Navigate to="/" replace />} />
            }
          </Routes>
        </Router>
      }
    </>
  )
}
export default App;