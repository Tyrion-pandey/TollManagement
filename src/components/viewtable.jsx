import React from "react";
import classes from '../components/UI/table.module.css';
import classesbtn from "./UI/Button.module.css";


function Table(props){
    const [Searchterm, setSearchTerm] = React.useState("");

    let formattedData = props.data.map((item) => {
        let obj = {};
        obj.tollName  =  item.tollName;
        let data = item.vehicleDetails.map(item2 => {
          let val = `${item2["singleJourney"]}/${item2["returnJourney"]}`
            let keyname = `${item2["vehicleType"]}`;
            return {[keyname]:val};
        }
        ) 
        obj.data = Object.assign({}, ...data);
        return obj;

    });
   
    function handleclick(event){
        props.removedata(event);
    }
   
    return (
        <div className={classes.parent}>
    <div className={classes.selectSearch}>
    <label for="searchFilter">Tollgate List</label>
    <input type="text" name="searchFilter" placeholder="Search using toll name" onChange={(event) => setSearchTerm(event.target.value)}/>
    </div>
    <h4 className={classes.infotext}>Note:- Please Use Dummy data to play with functionalities or add your own data.</h4>
    <div className={classes.tablecontainer}>
    <table className={classes.table}>
    <tr>{props.heading.map(item => <th className={classes.heading}>{item}</th>)}</tr>
        {formattedData && formattedData.filter((val) => {
             if(Searchterm === ""){
                return val;  
            }
            else if(val["tollName"].toLowerCase().includes(Searchterm.toLowerCase())){
                return val;
            }
        }
        ).map((item) => <tr className={classes.tablerow} id={item.tollName}>
            <th>{item.tollName}</th>
            <th>{item.data["Car/Jeep/Van"]}</th>
            <th>{item.data["LCV"]}</th>
            <th>{item.data["Heavy Vehicle"]}</th>
            <th>{item.data["Truck/Bus"]}</th>
            <th><button text="Delete" name={item.tollName} className={classesbtn.butn} onClick={handleclick}>Delete</button></th>
            </tr>)
            }
        
    </table>
    </div>
    </div>)
}

export default Table;