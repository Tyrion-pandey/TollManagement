import React from "react";
import classes from './table.module.css';


function Table(props){
    const [Searchterm, setSearchTerm] = React.useState("");
    const selecttermtext = "Select Filter";
    const[selectterm,setSelectTerm] = React.useState(selecttermtext);

    

    return (
        <div className={classes.parent}>
    <div className={classes.selectSearch}>
    <select name="selectFilter" value={selectterm} onChange={(event) => setSelectTerm(event.target.value)}>
       <option value="Select Filter">Select Filter</option>
       {props.filterdata.map((item) => <option value={item.tollName}>{item.tollName}</option>)}
    </select>
    <input type="text" name="searchFilter" placeholder="Search using Vehicle Number" onChange={(event) => setSearchTerm(event.target.value)}/>
    </div>
    <h4 className={classes.infotext}>Note:- Please Use Dummy data to play with functionalities or add your own data.</h4>
    <div className={classes.tablecontainer}>
    <table className={classes.table}>
      
        <tr>{props.heading.map(item => <th className={classes.heading}>{item}</th>)}</tr>
        
        {props.data && props.data.filter((val) => {
            
            
            if(Searchterm === ""){
                return val;  
            }
            else if(val["vehicleNumber"].toLowerCase().includes(Searchterm.toLowerCase())){
                return val;
            }
        }
        ).filter(
            (val) => {
                if(selectterm === "Select Filter"){
                    return val;  
                }
                else if(val["tollName"].toLowerCase() === selectterm.toLowerCase()){
                    return val;
                }
            }
        ).map((item,index) => 
            <tr className={classes.tablerow} key={index}>
            <th className={classes.headingelement}>{item[props.heading[0]]}</th>
            <th className={classes.headingelement}>{item[props.heading[1]]}</th>
            <th className={classes.headingelement}>{item[props.heading[2]]}</th>
            <th className={classes.headingelement}>{item[props.heading[3]]}</th>
            <th >{item[props.heading[4]]}</th>
            </tr>)} 
        
    </table>
    </div>
    </div>)
}

export default Table;